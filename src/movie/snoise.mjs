import MidiJsonInformation from "./midi-json-information.mjs";
import { log } from '../util/util';
import Materials from './materials.mjs';
import Basic from './basic';
import * as Maths from '../tools/math'
export default class SNoise extends Basic {
    constructor() {
        super();
    }
    static info() {
        return {
            name: 'S Noise',
            version: '0.0.1'
        }
    }



    static async buildMovie(filepath, filename, info, ops) {
        var basic = new SNoise();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }

    addLamps() {
        var me = this;
        me.objects.push({
            "name": "default_sun",
            "strength": 3,
            "type": "lamp",
            "light": "SUN"
        });


        var frame = me.getKeyFrame(1);
        frame.objects.push({
            "name": "default_sun",
            "type": "lamp",
            "light": "SUN",
            "strength": 3,
            "rotation": { "x": 0, "y": -80, "z": 0 }
        })

        me.keyframes.push(frame);

    }

    addCamera() {
        var me = this;
        var default_camera = 'default_camera';
        var handles = me.getHandles();

        me.objects.push({
            "name": default_camera,
            "type": "camera"
        }, {
                "name": "default_empty",
                "type": "empty"
            });


        var frame = me.getKeyFrame(1);
        var properties = {
            "translate": {
                "x": 5,
                "y": 5,
                "z": 0,
                ...handles
            }
        };
        frame.objects.push({
            "name": default_camera,
            "translate": {
                "x": 0,
                "y": -15,
                "z": 15,
                ...handles
            },
            "target": "default_empty",
            "lens": 15.66,
            "sensor_width": 15.80
        }, {
                "name": "default_empty",
                ...properties
            });


        return default_camera;
    }

    async constructMovie(raw) {
        var me = this;

        var objects = me.objects;

        if (raw.tracks) {

            var width = 50;
            var height = 50;
            var scale_x = 10;
            var scale_y = 10;

            [].interpolate(0, width, (x) => {
                [].interpolate(0, height, (y) => {
                    let name = `cube-${x}-${y}`;
                    objects.push({
                        name,
                        type: "cube",
                        position: {
                            x: x / width * scale_x,
                            y: y / height * scale_y,
                            z: 0
                        },
                        scale: {
                            x: .5 * 1 / width * scale_x,
                            y: .5 * 1 / width * scale_x,
                            z: .5 * 1 / width * scale_x
                        }
                    });
                    me.createNoteKeyFrame(name, {
                        x: x / width * scale_x,
                        y: y / height * scale_y,
                        z: 0
                    });
                    [].interpolate(0, 5000, u_time => {
                        var z = Maths.Vector.lavaLamp({
                            time: u_time / 25,
                            x: (((x / width) - .5) * 3.10),
                            y: (((y / height) - .5) * 3.10)
                        });
                        console.log(`z: ${z}, u_time: ${u_time}, x: ${(x / width * 3)}, y: ${(y / height * 3)}`);
                        me.createNoteKeyFrame(name, {
                            z: 1 - z
                        }, 1 * (u_time + 1));
                    })
                });
            });
        }

        me.addLamps();
    }
    createNoteKeyFrame(name, position, frame) {
        var me = this;

        var res = {
            name: name,
            position
        }

        let keyframe = me.getKeyFrame(frame || 1);
        keyframe.objects.push(res);

        return res;
    }
}