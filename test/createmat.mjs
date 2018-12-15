import MaterialReader from '../src/movie/materialreader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}raw_mat.json`, `.${path.sep}test${path.sep}group-materials.js`)
    } catch (e) {
        console.log(e);
    }
})();