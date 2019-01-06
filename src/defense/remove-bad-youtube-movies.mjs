
import Util from '../util/util';
import { log } from '../util/util';
import * as A from '../util/array';

import YouTube from '../puppeteer/youtube.mjs';
const YOUTUBE_STUDIO = 'YouTube Studio';
const OTHER_FEATURES = 'Other features';
const STATUS_AND_FEATURES = 'Status and features';
const FILE_A_DISPUTE = 'File a dispute';

export default class RemoveBadYoutubeMovies extends YouTube {
    constructor(directory, credentialDirectory) {
        super(directory, credentialDirectory);
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

        var converter = new RemoveBadYoutubeMovies(videoInputDir, credentialDirectory);
        converter.options = ops;

        do {
            try {
                await converter.init();
                var notdone = await converter.process(videoInputDir, videoInputDir);

                await Util.wait(debounce);
                if (!notdone) {
                    break;
                }
                count--;
            }
            catch (e) {
                console.log(e);
            }
            finally {
                await converter.close();
            }
        }
        while (count !== 0)
    }


    async process(directory, outpath) {
        var me = this;
        await this.clickOn('#avatar-btn');
        await this.wait();
        await this.waitFor('yt-formatted-string', YOUTUBE_STUDIO);
        await this.clickOn('yt-formatted-string', YOUTUBE_STUDIO);
        await this.wait();
        await this.waitFor('paper-icon-item div', 'Videos');
        await this.clickOn('paper-icon-item div', 'Videos');
        await this.wait();
        await this.wait();
        var done;
        do {
            done = true;
            if (await this.isThere('.ytcp-video-row ', 'Processing abandoned')) {
                await this.clickOn('.ytcp-video-row ', 'Processing abandoned', '.remove-defaults')
                await this.waitFor('ytcp-video-delete-dialog #checkbox');
                await this.wait(1000);
                await this.clickOn('ytcp-video-delete-dialog #checkbox');
                await this.wait(1000);
                await this.waitFor('ytcp-video-delete-dialog ytcp-button', 'DELETE VIDEO');
                await this.clickOn('ytcp-video-delete-dialog ytcp-button', 'DELETE VIDEO');
                await this.wait();
                await this.wait();
                return true;
            }
            else if (await this.isThere('#navigate-after')) {
                await this.clickOn('#navigate-after');
                await this.wait();
                await this.wait();
                done = false;
            }
        } while (!done);
        await this.wait();
        await this.wait();
        await this.wait();
        await this.wait();
        log(`the defense rests`);
        return false;
    }


}
