import BlendedMusic from '../src/index';
import path from 'path';

var __dirname = path.resolve(path.dirname(''));

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');
    await BlendedMusic.MidiToJson.run({
        inputDir: __dirname + '/test/midi',
        outputDir: __dirname + '/test/output',
        count: 10,
        debounce: 1000
    });
})();