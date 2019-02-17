import BlendedMusic from '../src/index';
import MidiJsonInformation from '../src/movie/midi-json-information';
import path from 'path';
import Util from '../src/util/util.mjs';
import Basic from '../src/movie/basic.mjs';
import MaterialMovie from '../src/movie/material-movie';
import CompositeExampleMovie from '../src/movie/examples/composite-example';
import RaceCarMovie from '../src/movie/racetrack';
import VoronoiFace from '../src/movie/voronoi-face';
import VoronoiExtrudeFace from '../src/movie/voronoi-extrude-face';
import Voronoi from '../src/movie/voronoi.mjs';
import SingleFrameBasic from '../src/movie/single-frame-basic.mjs';

var __dirname = path.resolve(path.dirname(''));

(async function () {
    //var converter = new BlendedMusic.MidiToJson();
    // var res = await converter.process(__dirname + '/test/midi', __dirname + '/test/output');
    const blender279 = 'C:\\Program Files\\Blender Foundation\\Blender';
    const blender = 'D:\\blender-2.80-d5c751012b3-win64\\blender-2.80.0-git.d5c751012b3-windows64';
    try {
        await BlendedMusic.Install.run({
            blender,
            version: "2.80",
            presentation: {
                directory: 'D:\\dev\\Python\\Blender\\Presentation'
            }
        });

        await BlendedMusic.InstallFleet.run({
            blender: 'C:\\Program Files\\Blender Foundation\\Blender',
            version: "2.79",
            presentation: {
                directory: 'D:\\dev\\Python\\Blender\\Presentation'
            }
        })

        await BlendedMusic.MidiToJson.run({
            inputDir: __dirname + `${path.sep}test${path.sep}midi`,
            outputDir: __dirname + `${path.sep}test${path.sep}raw_json`,
            count: 1,
            debounce: 1000
        });
        await BlendedMusic.JsonToPresentation.run({
            blender,
            blender279,
            inputDir: __dirname + `${path.sep}test${path.sep}raw_json`,
            outputDir: __dirname + `${path.sep}test${path.sep}movie_json`,
            videoOutputDir: __dirname + `${path.sep}test${path.sep}movies`,
            python: `C:${path.sep}Users${path.sep}mephisto${path.sep}AppData${path.sep}Local${path.sep}Programs${path.sep}Python${path.sep}Python37-32${path.sep}python.exe`,
            extPyr: `D:${path.sep}dev${path.sep}git${path.sep}exr-py-read${path.sep}process.py`,
            extPyrDir: `D:${path.sep}dev${path.sep}git${path.sep}exr-py-read`,
            textureDir: __dirname + `${path.sep}test${path.sep}textures`,// [PRINT TEXTURE]
            workingDir: __dirname + `${path.sep}test${path.sep}working`,// [PRINT TEXTURE]
            movieBuilders: [VoronoiExtrudeFace],//[CompositeExampleMovie, MaterialMovie, RaceCarMovie],
            raceSrc: __dirname + `${path.sep}resources${path.sep}`,
            racetrackSrc: __dirname + `${path.sep}resources${path.sep}`,
            shipFileName: 'Shipwright.0006.blend',
            midiDir: __dirname + `${path.sep}test${path.sep}midi`,
            count: 1,
            debounce: 1000
        });
        if (false)
            await BlendedMusic.PresentationToYouTube.run({
                credentialDirectory: `D:${path.sep}creds`,
                videoInputDir: __dirname + `${path.sep}test${path.sep}movies`,
                count: 1,
                debounce: 1000
            })
        else if (false) {
            await BlendedMusic.PresentationToYouTubePuppeteer.run({
                credentialDirectory: `D:${path.sep}creds`,
                videoInputDir: __dirname + `${path.sep}test${path.sep}movies`,
                count: 1,
                debounce: 1000
            })
        }
    } catch (e) {
        console.log(e);
    }
    // var files = await Util.readDirectory(__dirname + '/test/output');
    // var filename = `${__dirname}${path.sep}test${path.sep}output${path.sep}${files[0]}`;
    // var json = await Util.readJson(filename);
    // var info = MidiJsonInformation.getInformation(json);
    // var movieJson = Basic.buildMovie(files[0], filename, info);
    // console.log(movieJson);
})();