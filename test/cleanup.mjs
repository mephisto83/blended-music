import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';
import SingleFrameBasic from '../src/movie/single-frame-basic.mjs';

var __dirname = path.resolve(path.dirname(''));

(async function () {
        try {
        await BlendedMusic.RemoveBadYoutubeMovies.run({
            credentialDirectory: `D:${path.sep}creds`,
            videoInputDir: __dirname + `${path.sep}test${path.sep}movies`,
            count: 30,
            debounce: 10000
        });
    } catch (e) {
        console.log(e);
    }
})();