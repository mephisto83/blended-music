import path from 'path';
import fs from 'fs';
import rimraf from 'rimraf';
import child_process from 'child_process';
let exec = child_process.exec;
let spawn = child_process.spawn;
export function log(t) {
    console.log(t);
}
export default class Util {
    static async readDirectory(dir) {
        return await Util.readDir(dir);
    }
    static async readDir(director) {
        if (await Util.directoryExists(director)) {
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

    static fileToFolder(file) {
        return (file || '').split('').map(t => {
            if ('abcdefghijklmnopqrstuvwxyz01234567890_-'.indexOf(t) === -1) {
                return '_'
            }
            return t;
        }).join('');
    }

    static async getDirs(rootDir, cb) {
        return await new Promise((resolve, fail) => {
            fs.readdir(rootDir, function (err, files) {
                var dirs = [];
                for (var index = 0; index < files.length; ++index) {
                    var file = files[index];
                    if (file[0] !== '.') {
                        var filePath = rootDir + '/' + file;
                        fs.stat(filePath, function (err, stat) {
                            if (err) {
                                fail(err);
                            }
                            if (stat.isDirectory()) {
                                dirs.push(this.file);
                            }
                            if (files.length === (this.index + 1)) {
                                return resolve(dirs);
                            }
                        }.bind({ index: index, file: file }));
                    }
                }
                if (err) {
                    fail(err);
                }
            });
        });
    }
    static async writeJsonToFile(filePath, json) {

        return await new Promise((resolve, fail) => {
            console.log('writing json to file');
            console.log(filePath);
            fs.writeFile(filePath, JSON.stringify(json), function (err, data) {
                if (err) {
                    console.log('failed to write data to file');
                    log(err);
                    fail(err);
                }
                else {
                    resolve(data);
                    console.log('wrote data to file');
                }
            });
        })
    }

    static async writeFile(filePath, data) {
        return await new Promise((resolve, fail) => {
            fs.writeFile(filePath, data, function (err, data) {
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
    static async readFile(filePath) {
        return await new Promise((resolve, fail) => {
            fs.readFile(filePath, 'utf-8', function (err, buf) {
                if (err) {
                    fail(err);
                }
                else {
                    resolve(buf.toString());
                }
            });
        });
    }
    static async readJson(filePath) {
        var re = await Util.readFile(filePath);
        return JSON.parse(re);
    }
    static async wait(time) {
        return await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        })
    }
    static async directoryExists(dir) {
        return await new Promise((resolve, fail) => {
            fs.exists(dir, (res) => {
                return resolve(res);
            });
        });
    }
    static async copyFile(source, target) {
        log('source');
        log(source);
        log('target');
        log(target);

        return await new Promise((resolve, fail) => {
            var cbCalled = false;

            var rd = fs.createReadStream(source);
            rd.on("error", function (err) {
                done(err);
            });
            var wr = fs.createWriteStream(target);
            wr.on("error", function (err) {
                done(err);
            });
            wr.on("close", function (ex) {
                done();
            });
            rd.pipe(wr);

            function done(err) {
                if (!cbCalled) {
                    if (err) {
                        fail(err);
                    }
                    cbCalled = true;
                    resolve();
                }
            }
        });
    }
    static async ensureDirectoryDeep(root, paths) {
        await Util.ensureDirectory(root);
        var current = root;
        var promise = Promise.resolve();
        paths.map(async p => {
            current = current + path.sep + p;
            var t = current;
            promise = promise.then(async () => {
                return await Util.ensureDirectory(t);
            });
        });

        await promise;

        return current;
    }
    static async ensureDirectory(dir) {
        var alreadyExists = await Util.directoryExists(dir);
        if (alreadyExists) {
            return;
        }
        return await new Promise((resolve, fail) => {
            var res = fs.existsSync(dir)
            if (!res) {
                console.log('making dir');
                fs.mkdirSync(dir)
                resolve();
            }
            else {
                resolve();
            }
        })
    }

    static async clearDirectory(directory) {
        return await new Promise((resolve, fail) => {
            rimraf(directory, (err) => {
                if (err) {
                    fail(err);
                }
                else {
                    resolve();
                }
            });
        });
    }

    static async executeCmd(cmd, options) {
        return await new Promise(function (resolve, fail) {
            var child = exec(cmd, options, function (error, stdout, stderr) {
                if (error != null) {
                    log(error);
                    fail(error);
                }
                resolve();
            });
            child.stdout.on('data', function (data) {
                log(data);
            });
            child.stderr.on('data', function (data) {
                log(data);
            });
            child.on('close', function (code) {
                log(code);
            });
        });
    }

    static async  executeSpawnCmd(cmd, args, options) {
        return await new Promise(function (resolve, fail) {
            var child = spawn(cmd, args, options);
            child.stdout.on('data', function (data) {
                console.log('stdout: ' + data);
            });

            child.stderr.on('data', function (data) {
                console.log('stderr: ' + data);
            });

            child.on('exit', function (code) {
                console.log('child process exited with code ' + code);
                if (code != 0) {
                    console.log('Failed: ' + code);
                    fail(code);
                }
                resolve();
            });
        });
    }
}