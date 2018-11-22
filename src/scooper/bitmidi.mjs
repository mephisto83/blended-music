import path from 'path';
import Util from '../util/util';
import { log } from '../util/util';
import * as A from '../util/array';

import PuppeteerBase from '../puppeteer/puppeteer-base.mjs';
const BIT_MIDI_URL = 'https://bitmidi.com/';
const RANDOM = 'Random';

export default class BitMidi extends PuppeteerBase {
    constructor(directory, targetDirectory) {
        super();
        this.directory = directory;
        this.targetDirectory = targetDirectory;
    }

    static async  run(ops) {
        var {
            count,
            debounce,
            directory,
            targetDirectory
        } = ops;

        if (!await Util.directoryExists(targetDirectory)) {
            throw 'no target directory';
        }

        log(`ensuring directory:${directory} exists`)
        await Util.ensureDirectory(directory);

        var converter = new BitMidi(directory, targetDirectory);
        converter.options = ops;
        await converter.start();
        do {
            await converter.process();
            await Util.wait(debounce);
            count--;
        }
        while (count !== 0)
        await converter.close();
    }


    async process() {
        var me = this;
        await this.open(BIT_MIDI_URL);
        await this.wait();
        await this.waitFor('[href="/random"]', RANDOM);
        await this.clickOn('[href="/random"]', RANDOM);
        await this.wait();
        await this.waitFor('a[download]');
        await this.clickOn('a[download]');
        await this.wait(10000);
        var files = await Util.getFilesWith(this.directory, '.mid');
        var existingfiles = await Util.getFilesWith(this.targetDirectory, '.mid');
        for (var i = 0; i < files.length; i++) {
            if (!existingfiles.find(x => x === files[i]))
                await Util.copyFile(`${this.directory}${path.sep}${files[i]}`, `${this.targetDirectory}${path.sep}${files[i]}`);
        }
        await Util.clearDirectory(`${this.directory}${path.sep}*`);
        log(`the defense rests`)
    }


}
