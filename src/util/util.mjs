import fs from 'fs';
export function log(t) {
    console.log(t);
}
export default class Util {
    static async readDir(director) {
        if (await Util.directorExists(director)) {
            return await new Promise((resolve, fail) => {
                fs.readdir(director, (err, files) => {
                    if (err) {
                        fail(err)
                    }
                    else {
                        resolve(files);
                    }
                });
            });
        }
        return [];
    }
    static async writeJsonToFile(filePath, json) {
        return await new Promise((resolve, fail) => {
            fs.writeFile(filePath, JSON.stringify(json), function (err, data) {
                if (err) {
                    log(err);
                    fail(err);
                }
                else {
                    resolve(data);
                }
            });
        })
    }
    static async wait(time) {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    }
    static async directorExists(dir) {
        return await new Promise((resolve, fail) => {
            fs.exists(dir, (res) => {
                return resolve(res);
            });
        });
    }

    static async ensureDirectory(dir) {
        return await new Promise((resolve, fail) => {
            fs.exists(dir, (res) => {
                if (!res) {
                    fs.mkdir(dir, (merr) => {
                        if (merr) {
                            fail(merr);
                        }
                        else {
                            resolve();
                        }
                    });
                }
                else {
                    resolve();
                }
            })
        });
    }
}