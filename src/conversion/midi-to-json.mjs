import * as MidiConvert from '../../midi-convert/MidiConvert';
import Util from '../util/util';
import { log } from '../util/util';
import fs from 'fs';
import path from 'path';

export default class MidiToJson {
    static async run(ops) {
        var { inputDir, outputDir, count, debounce } = ops;
        log(`ensuring directory:${outputDir} exists`)
        await Util.ensureDirectory(outputDir);
        log(`ensuring directory:${inputDir} exists`)
        await Util.ensureDirectory(inputDir);
        var converter = new MidiToJson();
        do {
            var processed = await converter.process(inputDir, outputDir);
            log(`processed ${processed} files`)
            await Util.wait(debounce);
            count--;
        }
        while (count !== 0)
    }
    static async convertFile(file) {
        return await new Promise((resolve, fail) => {

            fs.readFile(file, "binary", function (err, midiBlob) {
                if (!err) {
                    try {
                        var midi = MidiConvert.parse(midiBlob);
                        resolve(midi);
                    } catch (e) {
                        fail(e);
                    }
                }
                fail(err);
            });
        });
    }
    async convertDirectory(directory, matching) {
        return await this._convertDirectory(directory, (t => {
            if (matching.find(v => v === t)) {
                return false;
            }
            return ['.mid', '.midi'].find(v => t.indexOf(v) !== -1);
        }))
    }

    async process(directory, outpath) {
        var completeFiles = await Util.readDir(outpath);
        var jsonArray = await this.convertDirectory(directory, completeFiles);

        //for (var i = 0; i < jsonArray.length; i++) {
        var i = 0;
        var processedFile = jsonArray[i];
        if (processedFile) {
            let _out_path_ = `${outpath}${path.sep}${processedFile.file}`;
            log(_out_path_);
            return await Util.writeJsonToFile(_out_path_, processedFile.data);
        }
        //}

        return jsonArray.length;
    }

    async _convertDirectory(directory, matching) {
        matching = matching || (() => true);
        log(`read directory ${directory}`)
        var files = await Util.readDir(directory);

        log(`found  ${files.length}`)
        var filesToConvert = files.filter(t => matching(t));
        log(`found ${files.length} to convert`);
        var result = [];
        //for (var i = 0; i < filesToConvert.length; i++) {
        var i = 0;
        if (filesToConvert.length) {
            var file = filesToConvert[i];
            try {
                var json = await MidiToJson.convertFile(`${directory}${path.sep}${file}`);

                result.push({
                    data: json,
                    file,
                    directory
                });
            } catch (e) {
                log(e);
            }
        };
        return result;
    }
}