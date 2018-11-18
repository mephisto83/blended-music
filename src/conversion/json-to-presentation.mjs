import Util from '../util/util';
import Template from '../util/template';
import { log } from '../util/util';
import * as A from '../util/array';

import fs from 'fs';
import path from 'path';
import MidiJsonInformation from '../movie/midi-json-information.mjs';

export const FILEINFOJSON = 'filminfo.json';

export default class JsonToPresentationJson {
    constructor() {
    }
    static createJsonFrom(movieDefinition, BlendObjects, Materials) {
        return ({
            fileName: movieDefinition.fileName,
            "settings": {
                "RenderEngine": "CYCLES",
                "FrameStart": movieDefinition.startFrame,
                "FrameEnd": movieDefinition.startEnd,
                "samples": "200",
                "Device": "GPU",
                ...(BlendObjects ? {
                    "Objects": {
                        "File": "//objects.blend",
                        "Names": BlendObjects
                    }
                } : {}),
                ... (Materials ? {
                    "Materials": {
                        "File": "//mat.blend",
                        "Names": Materials
                    }
                } : {})

            },
            "scenes": [{
                "name": "default",
                "world": "SkyWorld",
                "objects": movieDefinition.objects,
                "keyframes": movieDefinition.keyframes
            }]
        })

    }
    static async  run(ops) {
        var { inputDir,
            outputDir,
            movieBuilders,
            count,
            debounce,
            videoOutputDir
        } = ops;

        log(`ensuring directory:${outputDir} exists`)
        await Util.ensureDirectory(outputDir);
        log(`ensuring directory:${inputDir} exists`)
        await Util.ensureDirectory(inputDir);
        log(`ensuring directory:${inputDir} exists`)
        await Util.ensureDirectory(videoOutputDir);

        var converter = new JsonToPresentationJson();
        converter.options = ops;
        do {
            await converter.process(inputDir, outputDir, movieBuilders);
            await Util.wait(debounce);
            count--;
        }
        while (count !== 0)
    }


    async process(directory, outpath, movieBuilders) {
        movieBuilders = movieBuilders || [];
        var files = await Util.readDir(directory);
        var me = this;
        await Promise.all(files.map(async file => {
            var folderName = Util.fileToFolder(file);
            var file_path = `${directory}${path.sep}${file}`;
            var json = await Util.readJson(file_path);
            var info = MidiJsonInformation.getInformation(json);

            await Promise.all(movieBuilders.map(async builder => {
                var infobuilder = builder.info();
                var dir_path = `${outpath}${path.sep}${folderName}${path.sep}${infobuilder.name}${path.sep}${infobuilder.version}`;
                log(`check if ${dir_path}`)
                var existsAlready = await Util.directoryExists(dir_path);
                if (!existsAlready) {

                    var movie = await builder.buildMovie(file_path, file, info);
                    log(`creating directory: ${dir_path}`);
                    await Util.ensureDirectoryDeep(outpath, [folderName, infobuilder.name, infobuilder.version]);
                    let videoOutputDir = await Util.ensureDirectoryDeep(me.options.videoOutputDir, [folderName, infobuilder.name, infobuilder.version]);
                    log('built folder structure');
                    await JsonToPresentationJson.saveMidiMovie({
                        ...me.options,
                        videoOutputDir,
                        movieDefinition: movie,
                        file,
                        midiInfo: info,
                        infobuilder,
                        outputDirectory: dir_path
                    });
                }
                else {
                    log(`${dir_path} already exists`)
                }
            }));
        }));
        log(`processed ${directory}`)
    }

    static async getPythonScriptTemplate() {
        return await JsonToPresentationJson.getFile(`presentation-py.tpl`);
    }
    static async getBatFileTemplate() {
        return await JsonToPresentationJson.getFile(`bat-file.tpl`);
    }
    static async getCameraTemplate() {
        return await JsonToPresentationJson.getFile(`camera.tpl`);
    }
    static async getFile(file) {
        var __dirname = path.resolve(path.dirname(''));
        return await Util.readFile(`${__dirname}${path.sep}src${path.sep}conversion${path.sep}templates${path.sep}${file}`);
    }
    static getResourcePath(file) {
        var __dirname = path.resolve(path.dirname(''));
        return (`${__dirname}${path.sep}src${path.sep}conversion${path.sep}resources${path.sep}${file}`);
    }
    static async midisToMp3(mp3file, midiFile) {
        log("midis to mp3s")
        log('mp3 file ' + mp3file);
        log('midi file ' + midiFile);
        if (!midiFile) {
            throw 'no midi file';
        }
        if (!await Util.directoryExists(midiFile)) {
            throw 'midi file doesnt exist';
        }

        if (!mp3file) {
            throw 'no mp3 file';
        }

        var vlclocation = 'start vlc' //|| "D:\\Downloads\\vlc-2.0.7-win64\\vlc-2.0.7\\VLC";
        var args = ' -I dummy -vvv "' + midiFile + '" --sout=#transcode{acodec="mp3",ab="512","channels=2"}:standard{access="file",mux="raw",dst="' + mp3file + '"} vlc://quit';
        return await Util.executeCmd(`${vlclocation}` + args);
    };

    static async saveMidiMovie(ops) {
        log(ops);
        var {
            movieDefinition,
            BlendObjects,
            Materials,
            outputDirectory,
            midiDir,
            file,
            vlclocation,
            midiInfo,
            infobuilder,
            videoOutputDir
        } = ops;
        var { fileName, camera, endFrame, startFrame } = movieDefinition;
        var audio_file = fileName.split('').subset(0, fileName.lastIndexOf('.')).join('') + '.mp3';

        var jsonFileName = 'presentation-json-' + fileName + '.json';
        var blendfile = 'presentation-bl-' + fileName + '.blend';
        var pyfile = 'presentation-py-' + fileName + '.py';
        var batfile = 'presentation-blend-' + fileName + '.bat';

        var presentation = JsonToPresentationJson.createJsonFrom(movieDefinition);
        await Util.ensureDirectory(outputDirectory);

        await Util.writeJsonToFile(`${outputDirectory}${path.sep}${jsonFileName}`, presentation);

        var pythonScripeTemplate = await JsonToPresentationJson.getPythonScriptTemplate();
        var batFileTemplate = await JsonToPresentationJson.getBatFileTemplate();
        var renderTemplate = await JsonToPresentationJson.getFile('render.tpl');
        var blenderAnimationRenderTemplate = await JsonToPresentationJson.getFile('blender-render.tpl');

        var pythonFile = Template.bindTemplate(pythonScripeTemplate, {
            jsonfile: jsonFileName,
            blendfile: blendfile
        });

        var _batFileTemplate = Template.bindTemplate(batFileTemplate, {
            pythonFile: pyfile
        });

        log(`write python file`);
        await Util.writeFile(`${outputDirectory}${path.sep}${pyfile}`, pythonFile);

        log(`write bat file`);
        await Util.writeFile(`${outputDirectory}${path.sep}${batfile}`, _batFileTemplate);
        let mp3path = `${outputDirectory}${path.sep}${audio_file}`;
        let midipath = `${midiDir}${path.sep}${fileName}`;
        await JsonToPresentationJson.midisToMp3(
            mp3path,
            midipath, vlclocation);
        var endframe = 30 || endFrame;
        var _blenderAnimationRenderTemplate = Template.bindTemplate(blenderAnimationRenderTemplate, {
            file: blendfile,
            name: Util.fileToFolder(fileName),
            audio_file: mp3path,
            endframe,
            render_out_path: `${videoOutputDir}`,
            audio_output_window: '.\\output\\audio\\',
            audio_output: '//output/audio/',
            py_audio_output: '\\output\\audio\\',
            py_output: '\\output\\' + 'presentation-bl-' + fileName + '\\',
            output: '//output/' + 'presentation-bl-' + fileName + '/'
        });

        await Util.executeSpawnCmd(`${outputDirectory}${path.sep}${batfile}`, [], {
            detached: true,
            cwd: outputDirectory
        });

        var cameraTemplate = await JsonToPresentationJson.getCameraTemplate();
        var cameraCommands = '\r\n' + Template.bindTemplate(cameraTemplate, {
            file: blendfile,
            output: '//output/' + 'presentation-bl-' + fileName + '/',
            startframe: 1,
            endframe,
            camera: camera
        }) + '\r\n';

        var renderpy = Template.bindTemplate(renderTemplate, {
            camera: camera
        });

        await Util.writeFile(`${outputDirectory}${path.sep}render.py`, renderpy);
        await Util.ensureDirectoryDeep(outputDirectory, ['output', 'presentation-bl-' + fileName]);

        var jobResources = ['anim_video_editor.py', 'mat.blend', 'objects.blend'];
        console.log(cameraCommands);
        // executeCmd()

        await Util.writeFile(`${outputDirectory}${path.sep}render.bat`, cameraCommands);

        await Promise.all(jobResources.map(async resource => {
            var resourceFilePath = JsonToPresentationJson.getResourcePath(resource);

            await Util.copyFile(resourceFilePath, `${outputDirectory}${path.sep}${resource}`)
        }));

        await Util.executeSpawnCmd(`render.bat`, {
            detached: true,
            cwd: outputDirectory
        });


        await Util.writeFile(`${outputDirectory}${path.sep}renderanim.bat`, _blenderAnimationRenderTemplate);
        await Util.executeCmd(`renderanim.bat`, {
            detached: true,
            cwd: outputDirectory
        });
        //blender --background -P anim_video_editor.py -- "{{py_output}}" {{endframe}} "{{py_audio_output}}" "{{name}}" "{{render_out_path}}"

        await Util.executeSpawnCmd('blender', [
            '--background',
            '-P',
            'anim_video_editor.py',
            '--',
            '\\output\\' + 'presentation-bl-' + fileName + '\\',
            endframe,
            '\\output\\audio\\',
            Util.fileToFolder(fileName),
            `${videoOutputDir}${path.sep}${Util.fileToFolder(fileName)}`

        ], {
                detached: true,
                cwd: outputDirectory
            });
        var tracksInfo = [];
        if (midiInfo) {
            var { raw } = midiInfo;
            if (raw) {
                var { header, tracks } = raw;
                if (header) {
                    var { timeSignature, bpm, name, PPQ } = header;
                }
                if (tracks) {
                    tracks.forEach((track, index) => {
                        if (track) {
                            tracksInfo.push({
                                name: track.name,
                                index,
                                instrument: track.instrument,
                                instrumentFamily: track.instrumentFamily,
                                channelNumber: track.channelNumber,
                                instrumentNumber: track.instrumentNumber
                            })
                        }
                    });
                }
            }
        }
        await Util.writeJsonToFile(`${videoOutputDir}${path.sep}${FILEINFOJSON}`, {
            build: infobuilder,
            duration: midiInfo.duration,
            ppq: PPQ,
            name,
            timeSignature,
            bpm,
            startFrame: 1,
            endFrame: endframe,
            tracks: tracksInfo
        })

        await Util.clearDirectory(`${outputDirectory}${path.sep}*`);
    }
}