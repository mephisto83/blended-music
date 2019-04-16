import MaterialReader from '../src/movie/materialreader.mjs';
import CommandLineArgs from '../src/command-line-args';
import path from 'path';

var matReader = new MaterialReader();
var args = CommandLineArgs.args();
(async function () {
    try {
        let className = args.className || 'TreeRoot';
        let outname = args.out || 'tree-root'
        let file = args.file || 'materials-raw.json';
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}materials${path.sep}${file}`, `.${path.sep}test${path.sep}materials${path.sep}${outname}.mjs`, className)
    } catch (e) {
        console.log(e);
    }
})();