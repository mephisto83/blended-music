import Util from './util/util';
import { log } from './util/util';
import path from 'path';

export default class FleetInstall {
    static async run(ops) {
        ops = ops || {};

        if (ops.presentation && ops.presentation.directory) {
            log('installing fleet addons')
            var { directory } = ops.presentation;
            log(directory);
            await Util.executeSpawnCmd(`${ops.blender}${path.sep}blender`,
                ['-b', '--python', 'FleetInstall.py', '--', ops.blender, ops.version], {
                    detached: true,
                    cwd: directory
                });
        }
    }
}