import path from 'path';
import Util from '../util/util';
import { log } from '../util/util';
import * as A from '../util/array';

import PuppeteerBase from '../puppeteer/puppeteer-base.mjs';
const NAME_GEN_URL = 'https://www.fantasynamegenerators.com/racer-names.php';
const RANDOM = 'Random';

export default class NameGenerator extends PuppeteerBase {
    constructor(directory, targetDirectory) {
        super();
        this.directory = directory;
        this.targetDirectory = targetDirectory;
    }

    static async run(ops) {
        var {
            count,
            debounce,
            directory,
            targetDirectory
        } = ops;
        console.log(ops);
        console.log(`targetDirectory ${ops.targetDirectory}`)
        await Util.ensureDirectory(ops.targetDirectory)
        if (!await Util.directoryExists(ops.targetDirectory)) {
            throw 'no target directory';
        }

        var converter = new NameGenerator(directory, ops.targetDirectory);
        converter.options = ops;
        await converter.start();
        await converter.process();
        await converter.close();
    }


    async process() {
        var me = this;
        await this.open(NAME_GEN_URL);
        await this.wait();
        await this.wait();
        await this.clickOn('#nameGen [type="button"]');
        let allNames = [];
        let done = false;
        allNames = await Util.readJson(`${this.targetDirectory}${path.sep}race-car-names.json`) || [];
        while (!done) {

            let names = await this.page.evaluate(() => {
                return document.querySelectorAll('#result')[0].innerHTML.split('<br>')
            });

            if (names && names.length) {
                names = names.filter(name => name && allNames.indexOf(name) === -1);
                if (names.length) {
                    allNames = [...allNames, ...names];
                    done = false;
                }
                else { done = true }
                await this.clickOn('#nameGen [type="button"]');
            }
            else {
                done = true;
            }
            if (allNames.length > 1000) {
                done = true;
            }
            else if (allNames.length < 10) {
                done = false;
            }
            console.log(`current count : ${allNames.length}`)
        }
        await Util.writeJsonToFile(`${this.targetDirectory}${path.sep}race-car-names.json`, allNames);
        log(`the defense rests`)
    }


}
