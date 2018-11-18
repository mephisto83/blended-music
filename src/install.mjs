import Util from './util/util';
import { log } from './util/util';
import path from 'path';

export default class Install {
    static async run(ops) {
        ops = ops || {};

        if (ops.presentation && ops.presentation.directory) {
            log('installing Presentation addons')
            var { directory } = ops.presentation;
            await Util.executeSpawnCmd(`${directory}${path.sep}PresentationInstall.bat`, [], {
                detached: true,
                cwd: directory
            });
        }
    }
}