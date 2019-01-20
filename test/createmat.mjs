import MaterialReader from '../src/movie/materialreader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}simple-materials.json`, `.${path.sep}test${path.sep}simple-materials.mjs`)
    } catch (e) {
        console.log(e);
    }
})();