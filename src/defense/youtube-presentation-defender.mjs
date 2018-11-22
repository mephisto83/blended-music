
import Util from '../util/util';
import { log } from '../util/util';
import * as A from '../util/array';

import YouTube from '../puppeteer/youtube.mjs';
const YOUTUBE_STUDIO = 'YouTube Studio';

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
        var me = this;
        await this.clickOn('#avatar-btn');
        await this.wait();
        await this.waitFor('yt-formatted-string', YOUTUBE_STUDIO);
        await this.wait();
        log(`the defense rests`)
    }


}
