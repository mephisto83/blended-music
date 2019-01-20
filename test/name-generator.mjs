import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';
import SingleFrameBasic from '../src/movie/single-frame-basic.mjs';

var __dirname = path.resolve(path.dirname(''));

(async function () {
        try {
        await BlendedMusic.NameGenerator.run({
            targetDirectory: __dirname + `${path.sep}test${path.sep}names`,
            count: 30,
            debounce: 10000
        });
    } catch (e) {
        console.log(e);
    }
})();