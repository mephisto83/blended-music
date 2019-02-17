import MaterialReader from '../src/movie/compositereader.mjs';
import path from 'path'

var matReader = new MaterialReader();

(async function () {
    try {
        await MaterialReader.readComposite(`.${path.sep}test${path.sep}json${path.sep}composite-raw.json`, `.${path.sep}test${path.sep}composite${path.sep}composite-example.mjs`)
    } catch (e) {
        console.log(e);
    }
})();