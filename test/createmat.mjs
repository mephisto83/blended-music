import MaterialReader from '../src/movie/materialreader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}eevee_1.json`, `.${path.sep}test${path.sep}eevee-materials.js`)
    } catch (e) {
        console.log(e);
    }
})();