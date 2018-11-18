import Util from '../util/util';
import Template from '../util/template';
import { log } from '../util/util';
import * as A from '../util/array';

import fs from 'fs';
import path from 'path';
import MidiJsonInformation from '../movie/midi-json-information.mjs';

import { FILEINFOJSON } from '../conversion/json-to-presentation';

export default class PresentationToYoutube {
    constructor() {
    }

    static async  run(ops) {
        var {
            count,
            debounce,
            videoInputDir
        } = ops;

        log(`ensuring directory:${videoInputDir} exists`)
        await Util.ensureDirectory(videoInputDir);

        var converter = new PresentationToYoutube();
        converter.options = ops;
        do {
            await converter.process(videoInputDir, videoInputDir);
            await Util.wait(debounce);
            count--;
        }
        while (count !== 0)
    }


    async process(directory, outpath) {
        movieBuilders = movieBuilders || [];
        var files = await Util.readDirDeep(directory, FILEINFOJSON);
        var me = this;
        await Promise.all(files.map(async file => {
            var folderName = Util.fileToFolder(file);
            var file_path = `${directory}${path.sep}${file}`;
            var json = await Util.readJson(file_path);
            var info = MidiJsonInformation.getInformation(json);

        }));
        log(`processed ${directory}`)
    }


}