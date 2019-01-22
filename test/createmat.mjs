import MaterialReader from '../src/movie/materialreader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        await MaterialReader.readMaterial(`.${path.sep}test${path.sep}material-blend.json`, `.${path.sep}test${path.sep}material-blend-materials.mjs`)
    } catch (e) {
        console.log(e);
    }
})();