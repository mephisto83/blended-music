import Util from '../util/util';
import { log } from '../util/util';
import fs from 'fs';
import path from 'path';


export default class JsonToPresentationJson {


    async static saveMidiMovie(midiDef, BlendObjects, Materials) {
        return await Util.writeJsonToFile({
            fileName: midiDef.fileName,
            "settings": {
                "RenderEngine": "CYCLES",
                "FrameStart": midiDef.startFrame,
                "FrameEnd": midiDef.startEnd,
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
                "objects": midiDef.objects,
                "keyframes": midiDef.keyframes
            }]
        }).then(() => {
            var pythonScripeTemplate = pythonScriptTemplate;
            var jsonFileName = 'presentation-json-' + midiDef.fileName + '.js';
            var blendfile = 'presentation-bl-' + midiDef.fileName + '.blend';
            var pyfile = 'presentation-py-' + midiDef.fileName + '.py';
            var batfile = 'presentation-blend-' + midiDef.fileName + '.bat';
            var pythonFile = Template.bindTemplate(pythonScripeTemplate, {
                jsonfile: jsonFileName,
                blendfile: blendfile
            });
            var _batFileTemplate = Template.bindTemplate(batFileTemplate, {
                pythonFile: pyfile
            });

            return writeFile(pyfile, pythonFile, 'application/x-python').then(() => {

                return writeFile(batfile, _batFileTemplate, 'application/bat');
            });
        });
        //bat-presentation-blend
    }
}