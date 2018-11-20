import Basic from './basic';

export default class SingleFrameBasic extends Basic {

    static info() {
        return {
            name: 'Single Frame Basic',
            version: '0.0.2'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new SingleFrameBasic();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }

    getMapping() {
        var me = this;
        var result = {
            1: me.lastFrame
        };

        return result;
    }
}