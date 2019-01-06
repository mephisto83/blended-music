
import Util from '../util/util';
import { log } from '../util/util';
import * as A from '../util/array';

import YouTube from '../puppeteer/youtube.mjs';
const YOUTUBE_STUDIO = 'YouTube Studio';
const OTHER_FEATURES = 'Other features';
const STATUS_AND_FEATURES = 'Status and features';
const FILE_A_DISPUTE = 'File a dispute';

export default class YoutubePresentationDefender extends YouTube {
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

        var converter = new YoutubePresentationDefender(videoInputDir, credentialDirectory);
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
        await this.waitFor('.ytcp-navigation-drawer', OTHER_FEATURES);
        await this.hoverOver('#missing-features-item');
        await this.wait();
        await this.waitFor('span.ytcp-missing-features-menu', STATUS_AND_FEATURES);
        await this.clickOn('span.ytcp-missing-features-menu', STATUS_AND_FEATURES);
        var switchedPage = this.switchToNewPage();
        await switchedPage;
        console.log('page has switched');
        await this.wait();
        await this.clickOn('span', 'VIDEO MANAGER');
        await this.wait();
        await this.clickOn('span', 'Copyright Notices');
        await this.wait();
        if (await this.isThere('.yt-uix-sessionlink', 'Includes copyrighted content')) {
            await this.clickOn('.yt-uix-sessionlink', 'Includes copyrighted content')
            await this.wait();
            switchedPage = this.switchToNewPage();
            await this.wait();
            console.log('is there a file a dispute linke');
            console.log('yepps');
            await this.waitFor('li.copynotice-options a', FILE_A_DISPUTE);
            await this.clickOn('li.copynotice-options a', FILE_A_DISPUTE)
            await switchedPage;
            await this.wait();
            await this.wait();
            await this.wait();
            await this.wait();
            await this.wait();
            await this.wait();
            await this.wait();
            await this.clickOn('label.radio-label', 'The content is in the public domain or is not eligible for copyright protection.');
            await this.wait();
            await this.waitFor('.yt-uix-button-content', 'Continue');
            await this.clickOn('.yt-uix-button-content', 'Continue');
            await this.wait();
            await this.clickOn('.yt-uix-form-input-checkbox.video-checkbox')
            await this.wait();
            await this.waitFor('.yt-uix-button-content', 'Continue');
            await this.clickOn('.yt-uix-button-content', 'Continue');
            await this.wait();

            await this.sendText('.yt-uix-form-input-textarea', 'This was a work produced without any human interactions, the sounds are generated from a midi file, and the visuals are generated.', true);
            await this.wait();
            await this.clickOn('#validity_good_faith');
            await this.wait();
            await this.clickOn('#validity_video_visibility');
            await this.wait();
            await this.sendText('#signature', 'Andrew Jordan Porter', true);
            await this.wait();
            await this.clickOn('#action-continue', 'Continue');
            await this.wait();
            this.acceptDialog();
            await this.clickOn('#action-submit', 'Submit Dispute');
            await this.wait();
            await this.wait();
            return true;
        }

        return false;
        log(`the defense rests`)
    }


}
