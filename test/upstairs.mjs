import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';
import SingleFrameBasic from '../src/movie/single-frame-basic.mjs';

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');
    var __dirname = `E:${path.sep}render-projects`;
    var projects = 'projects';
    await Util.ensureDirectory(__dirname);
    await Util.ensureDirectory(path.join(__dirname, projects));

    const presentation_dir = 'E:\\dev\\Presentation';
    const blender = 'E:\\blender-2.80-d5c751012b3-win64\\blender-2.80.0-git.d5c751012b3-windows64';
    const creds = `E:${path.sep}creds`;
    var installationProblems = 10;
    var midiToJsonProblems = 10;
    var jsonToPresentationProblems = 10;
    
    do {
        try {

            try {
                await BlendedMusic.Install.run({
                    blender,
                    version: "2.80",
                    presentation: {
                        directory: presentation_dir
                    }
                })
            } catch (e) {
                installationProblems--;
                console.log('installation issues')
                console.log(e);
            }
            if (false)
                await BlendedMusic.PresentationToYouTube.run({
                    credentialDirectory: creds,
                    videoInputDir: __dirname + `${path.sep}${projects}${path.sep}movies`,
                    count: 1,
                    debounce: 1000
                })
            else if (true) {
                await BlendedMusic.PresentationToYouTubePuppeteer.run({
                    credentialDirectory: creds,
                    videoInputDir: __dirname + `${path.sep}${projects}${path.sep}movies`,
                    count: 1,
                    debounce: 1000
                })
            }
            try {
                await BlendedMusic.MidiToJson.run({
                    inputDir: __dirname + `${path.sep}${projects}${path.sep}midi`,
                    outputDir: __dirname + `${path.sep}${projects}${path.sep}raw_json`,
                    count: 1,
                    debounce: 1000
                });
            } catch (e) {
                midiToJsonProblems--;
                console.log('midi to json conversion issues');
                console.log(e);
            }

            try {
                await BlendedMusic.JsonToPresentation.run({
                    blender,
                    inputDir: __dirname + `${path.sep}${projects}${path.sep}raw_json`,
                    outputDir: __dirname + `${path.sep}${projects}${path.sep}movie_json`,
                    videoOutputDir: __dirname + `${path.sep}${projects}${path.sep}movies`,
                    movieBuilders: [SingleFrameBasic],
                    midiDir: __dirname + `${path.sep}${projects}${path.sep}midi`,
                    count: 1,
                    debounce: 1000
                });
            } catch (e) {
                jsonToPresentationProblems--;
                console.log('json to presentaton problems');
                console.log(e);
            }
        } catch (e) {
            console.log(e);
        }
    }
    while (!(!installationProblems || !midiToJsonProblems || !jsonToPresentationProblems));
    // var files = await Util.readDirectory(__dirname + '/${projects}/output');
    // var filename = `${__dirname}${path.sep}${projects}${path.sep}output${path.sep}${files[0]}`;
    // var json = await Util.readJson(filename);
    // var info = MidiJsonInformation.getInformation(json);
    // var movieJson = Basic.buildMovie(files[0], filename, info);
    // console.log(movieJson);
})();