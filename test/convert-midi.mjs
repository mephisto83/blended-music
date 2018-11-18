import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';

var __dirname = path.resolve(path.dirname(''));

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');

    try {
        await BlendedMusic.Install.run({
            presentation: {
                directory: 'D:\\dev\\Python\\Blender\\Presentation'
            }
        })

        await BlendedMusic.MidiToJson.run({
            inputDir: __dirname + `${path.sep}test${path.sep}midi`,
            outputDir: __dirname + `${path.sep}test${path.sep}raw_json`,
            count: 1,
            debounce: 1000
        });
        await BlendedMusic.JsonToPresentation.run({
            inputDir: __dirname + `${path.sep}test${path.sep}raw_json`,
            outputDir: __dirname + `${path.sep}test${path.sep}movie_json`,
            videoOutputDir: __dirname + `${path.sep}test${path.sep}movies`,
            movieBuilders: [Basic],
            midiDir: __dirname + `${path.sep}test${path.sep}midi`,
            count: 1,
            debounce: 1000
        });
    } catch (e) {
        console.log(e);
    }
    // var files = await Util.readDirectory(__dirname + '/test/output');
    // var filename = `${__dirname}${path.sep}test${path.sep}output${path.sep}${files[0]}`;
    // var json = await Util.readJson(filename);
    // var info = MidiJsonInformation.getInformation(json);
    // var movieJson = Basic.buildMovie(files[0], filename, info);
    // console.log(movieJson);
})();