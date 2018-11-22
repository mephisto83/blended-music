
import Util from '../util/util';
import Template from '../util/template';
import { log } from '../util/util';
import * as A from '../util/array';
import readline from 'readline';
import * as GA from 'googleapis';

import fs from 'fs';
import path from 'path';
const YOUTUBEFILE = 'youtube.json';

import { FILEINFOJSON } from '../conversion/json-to-presentation';
import PuppeteerBase from '../puppeteer/puppeteer-base.mjs';
const YOUTUBE_ADDRESS = 'https://www.youtube.com';
const CREDENTIAL_FILE = 'creds.json';
const SIGN_IN = 'SIGN IN';
const PUBLISH = 'Publish';
const NEXT = 'Next';
export default class YouTube extends PuppeteerBase {
    constructor(directory, credentialDirectory) {
        super();
        this.directory = directory;
        this.credentialDirectory = credentialDirectory;
        this.oauth2Client = null;
        this.youtube = null;
    }
    async openYoutube() {
        var me = this;
        me.open(YOUTUBE_ADDRESS)
    }
    async signIn() {
        var me = this;
        var creds = await Util.readJson(path.join(this.credentialDirectory, CREDENTIAL_FILE));
        log(creds);

        await me.wait();
        await me.waitFor('paper-button', SIGN_IN);
        await me.clickOn('paper-button', SIGN_IN);

        await me.wait();
        await me.waitFor('input[type="email"]');
        await me.enterText('input[type="email"]', creds.username);

        await me.wait();
        await me.waitFor('[id="identifierNext"]', NEXT);
        await me.clickOn('[id="identifierNext"]', NEXT);

        await me.wait();
        await me.waitFor('[type="password"]');
        await me.enterText('input[type="password"]', creds.password);

        await me.wait();

        await me.waitFor('[id="passwordNext"]');
        await me.clickOn('[id="passwordNext"]', NEXT);

        await me.wait();

        if (await me.isThere('.yt-dialog-base .yt-user-name', creds.channelName)) {
            await me.clickOn('.yt-dialog-base .yt-user-name', creds.channelName)
        }

        return true;
    }
    async init() {
        log('initializing browser');
        await this.start();
        var me = this;
        await me.openYoutube();

        me.signedIn = await me.signIn();
    }


}
