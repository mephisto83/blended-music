
import Util from '../util/util';
import Template from '../util/template';
import { log } from '../util/util';
import * as A from '../util/array';
import readline from 'readline';
import * as GA from 'googleapis';

import fs from 'fs';
import path from 'path';
import PuppeteerBase from '../puppeteer/puppeteer-base.mjs';
export default class CannonFarm extends PuppeteerBase {
    constructor(ops) {
        super();
        this.options = ops;
    }
    static async run(ops) {
        var {
            cannonFarm,
            outputDir,
            count
        } = ops;


        log(`ensuring directory:${outputDir} exists`)
        await Util.ensureDirectory(outputDir);

        var converter = new CannonFarm(ops);

        do {
            await converter.process();
        }
        while (count !== 0)
        await converter.close();
    }
    async process() {
        await this.startCannonFarm();
    }
    async startCannonFarm() {
        await this.start();
        let {
            outputDir,
            minok = 7,
            maxScore = 100,
            newagent = 2,
            keep = 8,
            agents = 18,
            maxThrust = .5
        } = this.options;
        await this.open((this.options.url || 'http://192.168.1.118:8080/demos/rawcarworldgen.html') + `?minok=${minok}&new=${newagent}&keep=${keep}&trackSize=${maxScore}&agents=${agents}&maxThrust=${maxThrust}`);
        let done = false;
        await this.page.evaluate(() => {
            window.skipRender = false;
        });

        do {

            done = await this.page.evaluate((maxScore, agents, minok) => {
                console.log('checking');
                return window.RECORDINGS.find(recording => {
                    if (recording && recording.scores && recording.scores.length >= agents) {
                        var res = recording.scores.filter(x => x.score > (maxScore * .5)).length >= minok && recording.scores.filter(x => x.score >= (maxScore - 1)).length >= 1;
                        if (recording.scores.filter(x => x.score > (maxScore * .5)).length >= minok) {
                            console.log('enough ok cars');
                        }
                        else {
                            console.log('not enough ok cars');
                        }
                        console.log(recording.scores);
                        return res;
                    }
                })
            }, maxScore, agents, minok);

            await this.wait();

        } while (!done);

        await Util.writeJsonToFile(`${outputDir}${path.sep}race-${Date.now()}.json`, done);
        await this.close();
    }
}

