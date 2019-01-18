import BlendedMusic from '../src/index';
import path from 'path';

var __dirname = path.resolve(path.dirname(''));

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');
    const blender279 = 'C:\\Program Files\\Blender Foundation\\Blender';
    const cannonFarm = 'D:\\dev\\git\\blended-music\\cannon.js';
    const blender = 'D:\\blender-2.80-d5c751012b3-win64\\blender-2.80.0-git.d5c751012b3-windows64';
    try {

        await BlendedMusic.CannonFarm.run({
            cannonFarm,
            outputDir: ['//192.168.1.113', 'Public', 'cannon-farm'].join('/'),
            //outputDir: __dirname + `${path.sep}test${path.sep}cannon-farm`,
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