
import Util from '../util/util';
import { log } from '../util/util';

import fs from 'fs';
import path from 'path';
const YOUTUBEFILE = 'youtube.json';

import { FILEINFOJSON } from '../conversion/json-to-presentation';
import YouTube from '../puppeteer/youtube';
const PUBLISH = 'Publish';
export default class PresentationToYouTubePuppeteer extends YouTube {
    constructor(directory, credentialDirectory) {
        super(directory, credentialDirectory);
    }

    async uploadScreen() {
        await this.clickOn('[aria-label="Create a video or post"]');
        await this.wait();

        await this.clickOn('paper-item', 'Upload video');
        await this.wait();
    }

    // very basic example of uploading a video to youtube
    async  upload(file, info) {
        var { title, description, tags } = info;
        const fileSize = fs.statSync(file).size;

        await this.uploadScreen();

        await this.waitFor('[type="file"]');

        const filePath = file;
        const input = await this.page.$('input[type="file"]');
        await input.uploadFile(filePath);

        await this.wait();

        await this.waitFor('input[name="title"]');
        if (title)
            await this.enterText('input[name="title"]', title);

        await this.wait();

        await this.waitFor('textarea[name="description"]');
        await this.enterText('textarea[name="description"]', description);


        await this.wait();
        for (var i = 0; i < tags.length; i++) {
            if (i < 15) {
                var tag = tags[i];
                await this.sendText('.video-settings-add-tag', tag);
            }
        }



        await this.waitFor('.watch-page-link a');
        await this.waitFor('button', PUBLISH);

        var link = await this.readText('.watch-page-link a');

        await this.wait();
        await this.clickOn('button', PUBLISH);
        await this.wait(10000);

        await this.waitFor('.yt-alert-message', 'Your video was uploaded');
        await this.wait(10000);
        // const res = await this.youtube.videos.insert(
        //     {
        //         part: 'id,snippet,status',
        //         notifySubscribers: false,
        //         requestBody: {
        //             snippet: {
        //                 title: title || 'Node.js YouTube Upload Test',
        //                 description: description || 'Testing YouTube upload via Google APIs Node.js Client',
        //                 tags: tags || []
        //             },
        //             status: {
        //                 privacyStatus: 'private',
        //             },
        //         },
        //         media: {
        //             body: fs.createReadStream(file),
        //         },
        //     },
        //     {
        //         // Use the `onUploadProgress` event from Axios to track the
        //         // number of bytes uploaded to this point.
        //         onUploadProgress: evt => {
        //             const progress = (evt.bytesRead / fileSize) * 100;
        //             readline.clearLine();
        //             readline.cursorTo(0);
        //             process.stdout.write(`${Math.round(progress)}% complete`);
        //         },
        //         onError: evt => {
        //             log(evt);
        //         }
        //     }
        // )
        return {
            ...info,
            link
        };
    }

    static async  run(ops) {
        var {
            count,
            debounce,
            videoInputDir,
            credentialDirectory
        } = ops;

        if (!await Util.directoryExists(credentialDirectory)) {
            throw 'no creds directory';
        }

        log(`ensuring directory:${videoInputDir} exists`)
        await Util.ensureDirectory(videoInputDir);

        var converter = new PresentationToYouTubePuppeteer(videoInputDir, credentialDirectory);
        converter.options = ops;

        await converter.init();
        do {
            await converter.process(videoInputDir, videoInputDir);
            await Util.wait(debounce);
            count--;
        }
        while (count !== 0)
        await converter.close();
    }


    async process(directory, outpath) {
        var directories = await Util.readDirDeep(directory, FILEINFOJSON);
        var me = this;
        console.log(directories);
        //await Promise.all(directories.map(async sub_dir => {
        for (var j = 0; j < directories.length; j++) {
            var sub_dir = directories[j];
            var youtubeResultExists = await Util.fileExists(path.join(sub_dir, YOUTUBEFILE));
            if (!youtubeResultExists) {
                var filesToUpload = await Util.getFilesWith(sub_dir, '.mkv');
                filesToUpload = [...filesToUpload, ... (await Util.getFilesWith(sub_dir, '.mp4'))];
                var infoJon = await Util.readJson(path.join(sub_dir, FILEINFOJSON));
                log(filesToUpload);
                for (var i = 0; i < filesToUpload.length; i++) {
                    var file_to_upload = filesToUpload[i];
                    log(`file_to_upload: ${file_to_upload}`);
                    var names = infoJon.tracks.filter(t => t.name
                        && t.name.toLowerCase().indexOf('copyright') === -1
                        && t.name.indexOf('©') === -1
                        && t.name.indexOf('@') === -1
                        && t.name.indexOf('http') === -1)
                        .map(t => t.name).unique();
                    var instruments = infoJon.tracks.filter(t => t.instrument).map(t => `${t.instrumentFamily} ${t.instrument}`).unique();
                    var instrumentFamilys = infoJon.tracks.filter(t => t.instrumentFamily).map(t => t.instrumentFamily).unique();
                    var tags = [];
                    instruments.map(t => {
                        tags.push(t);
                    });
                    names.map(t => {
                        tags.push(t);
                    })
                    instrumentFamilys.map(t => {
                        tags.push(t);
                    });
                    var result = await me.upload(path.join(sub_dir, file_to_upload), {
                        title: infoJon.name,
                        tags: tags,
                        description: `${infoJon.build.name}
v${infoJon.build.version}
instruments : ${instruments.join()}`
                    });
                    if (result) {
                        await Util.writeJsonToFile(path.join(sub_dir, YOUTUBEFILE), result);
                        return;
                    }
                }
            }
        }
        log(`processed ${directory}`)
    }


}
