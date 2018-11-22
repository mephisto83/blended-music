import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';
import SingleFrameBasic from '../src/movie/single-frame-basic.mjs';

var __dirname = path.resolve(path.dirname(''));

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');
    const blender = 'D:\\blender-2.80-d5c751012b3-win64\\blender-2.80.0-git.d5c751012b3-windows64';
    try {
        await BlendedMusic.Install.run({
            blender,
            version: "2.80",
            presentation: {
                directory: 'D:\\dev\\Python\\Blender\\Presentation'
            }
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