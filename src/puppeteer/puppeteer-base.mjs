// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto('https://example.com');
//   await page.screenshot({path: 'example.png'});

//   await browser.close();
// })();
import puppeteer from 'puppeteer';

export default class PuppeteerBase {
    constructor() {
    }
    async start() {
        this.browser = await puppeteer.launch({ headless: false });
        this.page = await this.browser.newPage();
    }
    async open(address) {
        await this.page.goto(address);
    }
    async enterText(selector, text) {

        await this.page.waitFor(selector);
        await this.page.evaluate((selector, text) => {
            var els = document.querySelectorAll(selector);
            els[0].value = text;
        }, selector, text);
    }
    async sendText(select, text) {
        await this.page.type(select, text, { delay: 100 });
        await this.page.keyboard.press('Enter');
    }
    async wait(timeout) {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, timeout || 3000);
        })
    }
    async readText(selector) {
        await this.page.waitFor(selector);
        return await this.page.evaluate((selector) => {
            var res = document.querySelector(selector);
            return res ? res.innerText : null;
        }, selector)
    }
    async waitFor(selector, text) {
        var notdone = true;
        do {
            try {
                await this.page.waitFor(selector);
                console.log('wait for  ' + selector);
                if (text) {
                    notdone = !(await this.page.evaluate((selector, text) => {
                        var els = document.querySelectorAll(selector);
                        for (var i = 0; i < els.length; i++) {
                            if (els[i].innerText.indexOf(text) !== -1) {
                                return true;
                            }
                        }
                        console.log(els.length);
                        return false;
                    }, selector, text));
                }
                else {
                    notdone = false;
                }
            }
            catch (e) { console.log(e); }
        } while (notdone);
    }
    async waitForAny(any) {
        var notdone = true;
        do {
            try {
                notdone = !(await this.page.evaluate((any) => {
                    return any.find(one => {
                        var { selector, text } = one;
                        var els = document.querySelectorAll(selector);
                        for (var i = 0; i < els.length; i++) {
                            if (!text || els[i].innerText.indexOf(text) !== -1) {
                                return true;
                            }
                        }
                        console.log(els.length);
                    }) || false;
                }, any));
            }
            catch (e) { console.log(e); }
        } while (notdone);
    }
    async clickOn(selector, text) {
        await this.page.waitFor(selector);
        await this.page.evaluate((selector, text) => {
            var els = document.querySelectorAll(selector);
            for (var i = 0; i < els.length; i++) {
                if (!text || els[i].innerText.indexOf(text) !== -1) {
                    els[i].click();
                    return;
                }
            }
        }, selector, text);
    }

    async isThere(selector, text) {
        return await this.page.evaluate((selector, text) => {
            var els = document.querySelectorAll(selector);
            for (var i = 0; i < els.length; i++) {
                if (!text || els[i].innerText.indexOf(text) !== -1) {
                    return true;
                }
            }
            return false;
        }, selector, text);
    }

    async close() {
        await this.browser.close();
    }
}