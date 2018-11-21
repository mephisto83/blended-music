
import Util from '../util/util';
import Template from '../util/template';
import { log } from '../util/util';
import * as A from '../util/array';
import readline from 'readline';
import * as GA from 'googleapis';

import fs from 'fs';
import path from 'path';
const YOUTUBEFILE = 'youtube.json';

import { FILEINFOJSON } from '../conversion/json-to-presentation';
import PuppeteerBase from '../puppeteer/puppeteer-base.mjs';
const YOUTUBE_ADDRESS = 'https://www.youtube.com';
const CREDENTIAL_FILE = 'creds.json';
const SIGN_IN = 'SIGN IN';
const PUBLISH = 'Publish';
const NEXT = 'Next';
export default class PresentationToYouTubePuppeteer extends PuppeteerBase {
    constructor(directory, credentialDirectory) {
        super();
        this.directory = directory;
        this.credentialDirectory = credentialDirectory;
        this.oauth2Client = null;
        this.youtube = null;
    }
    async openYoutube() {
        var me = this;
        me.open(YOUTUBE_ADDRESS)
    }
    async signIn() {
        var me = this;
        var creds = await Util.readJson(path.join(this.credentialDirectory, CREDENTIAL_FILE));
        log(creds);

        await me.wait();
        await me.waitFor('paper-button', SIGN_IN);
        await me.clickOn('paper-button', SIGN_IN);

        await me.wait();
        await me.waitFor('input[type="email"]');
        await me.enterText('input[type="email"]', creds.username);

        await me.wait();
        await me.waitFor('[id="identifierNext"]', NEXT);
        await me.clickOn('[id="identifierNext"]', NEXT);

        await me.wait();
        await me.waitFor('[type="password"]');
        await me.enterText('input[type="password"]', creds.password);

        await me.wait();

        await me.waitFor('[id="passwordNext"]');
        await me.clickOn('[id="passwordNext"]', NEXT);

        await me.wait();

        if (await me.isThere('.yt-dialog-base .yt-user-name', creds.channelName)) {
            await me.clickOn('.yt-dialog-base .yt-user-name', creds.channelName)
        }

        return true;
    }
    async init() {
        log('initializing browser');
        await this.start();
        var me = this;
        await me.openYoutube();

        me.signedIn = await me.signIn();
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
        await this.enterText('input[name="title"]', title);

        await this.wait();

        await this.waitFor('textarea[name="description"]');
        await this.enterText('textarea[name="description"]', description);


        await this.wait();
        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i];
            await this.sendText('.video-settings-add-tag', tag);
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
    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     *
     * @param {Object} credentials The authorization client credentials.
     * @param {function} callback The callback to call with the authorized client.
     */
    async authorize(credentials) {
        var me = this;
        var clientSecret = credentials.installed.client_secret;
        var clientId = credentials.installed.client_id;
        var redirectUrl = credentials.installed.redirect_uris[0];
        var oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
        log(credentials);
        me.oauth2Client = oauth2Client;
        return await new Promise((callback, fail) => {

            // Check if we have previously stored a token.
            fs.readFile(me.TOKEN_PATH, async function (err, token) {
                if (err) {
                    await me.getNewToken(oauth2Client, callback, fail);
                } else {
                    var _token_res = JSON.parse(token);
                    log('check expiry date')
                    if (_token_res.expiry_date < Date.now()) {
                        await me.getNewToken(oauth2Client, callback, fail);
                    }
                    else {
                        log('creds are ok');
                        log(new Date(_token_res.expiry_date));
                        oauth2Client.credentials = _token_res;
                        callback(oauth2Client);
                    }
                }
            });
        });
    }

    /**
     * Get and store new token after prompting for user authorization, and then
     * execute the given callback with the authorized OAuth2 client.
     *
     * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
     * @param {getEventsCallback} callback The callback to call with the authorized
     *     client.
     */
    async getNewToken(oauth2Client, callback, fail) {
        var me = this;
        log('get a new token');

        return await new Promise((resolve) => {
            var authUrl = oauth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES
            });
            console.log('Authorize this app by visiting this url: ', authUrl);
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question('Enter the code from that page here: ', function (code) {
                rl.close();
                oauth2Client.getToken(code, async function (err, token) {
                    if (err) {
                        console.log('Error while trying to retrieve access token', err);
                        return;
                    }
                    log(`expiration date ${new Date(token.expiry_date)}`)
                    oauth2Client.credentials = token;
                    await me.storeToken(token);
                    callback(oauth2Client);
                    resolve();
                });
            });
        });
    }

    /**
     * Store token to disk be used in later program executions.
     *
     * @param {Object} token The token to store to disk.
     */
    async storeToken(token) {
        var me = this;
        return await new Promise((resolve) => {
            try {
                fs.mkdirSync(me.TOKEN_DIR);
            } catch (err) {
                if (err.code != 'EEXIST') {
                    throw err;
                }
            }
            fs.writeFile(me.TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err) throw err;
                console.log('Token stored to ' + me.TOKEN_PATH);
                resolve();
            });
            console.log('Token stored to ' + me.TOKEN_PATH);
        });
    }

    /**
     * Lists the names and IDs of up to 10 files.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    async getChannel(auth) {
        return await new Promise((resolve) => {

            var service = google.youtube('v3');
            service.channels.list({
                auth: auth,
                part: 'snippet,contentDetails,statistics',
                forUsername: 'GoogleDevelopers'
            }, function (err, response) {
                if (err) {
                    console.log('The API returned an error: ' + err);
                    return;
                }
                var channels = response.data.items;
                if (channels.length == 0) {
                    console.log('No channel found.');
                } else {
                    console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
                        'it has %s views.',
                        channels[0].id,
                        channels[0].snippet.title,
                        channels[0].statistics.viewCount);
                }
                resolve(channels);
            });
        });
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
                        title: infoJon.name || infoJon.build.name,
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
