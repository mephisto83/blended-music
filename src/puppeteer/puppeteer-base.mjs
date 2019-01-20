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
        this.pages = [];
    }
    async start() {
        this.browser = await puppeteer.launch({
            headless: false,
            // args: ['--start-fullscreen'], 
            defaultViewport: {
                height: 1224,
                width: 2024
            }
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1366, height: 768 });
    }
    async open(address) {
        await this.page.goto(address);
    }
    switchToNewPage() {
        var me = this;
        console.log('switch to new page');
        return new Promise(resolve => {
            console.log('wait for new page ');
            var handler = async target => {
                console.log('new page created ');
                this.pages.push(this.page);
                console.log(target.type());
                let newpage = await target.page();
                if (newpage) {
                    // throw 'page was not set';
                    me.page = newpage;
                    me.browser.off('targetcreated', handler);
                    resolve();
                }
            };
            this.browser.on('targetcreated', handler);
        });
    }
    async enterText(selector, text) {

        await this.page.waitFor(selector);
        await this.page.evaluate((selector, text) => {
            var els = document.querySelectorAll(selector);
            els[0].value = text;
        }, selector, text);
    }
    async sendText(select, text, noenter) {
        await this.page.type(select, text, { delay: 100 });
        if (!noenter)
            await this.page.keyboard.press('Enter');
    }
    async wait(timeout) {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, timeout || 3000);
        })

    }
    acceptDialog() {
        this.page.once("dialog", (dialog) => {
            console.log("accepted dialog");
            dialog.accept();
        });
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
        console.log('wait for ' + selector + ' with ' + text);
        do {
            try {
                await this.page.waitFor(selector);
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
            catch (e) { }
        } while (notdone);
    }
    async waitForAny(any, maximum) {
        maximum = maximum || 1200000;//20 minutes
        var failed;
        setTimeout(() => {
            failed = true;
        }, maximum)
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
            if (failed) {
                notdone = false;
                throw 'didnt finish in an reasonable amount of time';
            }
        } while (notdone);
    }
    async clickOn(selector, text, innerSelector) {
        await this.page.waitFor(selector);
        console.log('click on ' + selector + ' with ' + text);
        await this.page.evaluate((selector, text, innerSelector) => {
            var els = document.querySelectorAll(selector);
            for (var i = 0; i < els.length; i++) {
                if (!text || els[i].innerText.indexOf(text) !== -1) {
                    if (innerSelector) {
                        var innerEl = els[i].querySelector(innerSelector);
                        if (innerEl) {
                            innerEl.click();
                        }
                    }
                    else {
                        els[i].click();
                    } return;
                }
            }
        }, selector, text, innerSelector);
    }

    async hoverOver(selector) {
        var el = await this.page.$(selector);
        console.log('hover over ' + selector);
        if (el) {
            // var elprops = await el.getProperties();
            // let element = elprops.asElement();
            el.hover();
        }
        else {
            console.log(el);
            throw 'failed to hover';
        }
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