import MaterialReader from '../src/movie/materialreader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        let className = 'TreeRoot';
        let outname = 'tree-root'
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}materials${path.sep}materials-raw.json`, `.${path.sep}test${path.sep}materials${path.sep}${outname}.mjs`, className)
    } catch (e) {
        console.log(e);
    }
})();