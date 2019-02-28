import MidiJsonInformation from "./midi-json-information.mjs";
import { log } from '../util/util';
import Materials from './materials.mjs';
import SNoise from './snoise';
import * as Maths from '../tools/math'
export default class SNoise_points extends SNoise {
    constructor() {
        super();
    }
    static info() {
        return {
            name: 'S Noise Points',
            version: '0.0.1'
        }
    }

    static async buildMovie(filepath, filename, info, ops) {
        var basic = new SNoise_points();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }

    async constructMovie(raw) {
        var me = this;

        var objects = me.objects;

        if (raw.tracks) {

            var width = 100;
            var height = 100;
            var scale_x = 10;
            var scale_y = 10;
            var faces = [];
            var vertices = [];
            [].interpolate(0, width, (x) => {
                [].interpolate(0, height, (y) => {
                    vertices.push([x / width * scale_x, y / height * scale_y, 0]);
                    if (y < height - 1) {
                        if (x < width - 1) {
                            var v1 = y + (x * width);
                            var v2 = y + ((x + 1) * width);
                            var v3 = (y + 1) + ((x + 1) * width);
                            var v4 = (y + 1) + ((x) * width);
                            faces.push([v1, v2, v3, v4])
                        }
                    }
                })
            });

            let name = `surceaa`;
            objects.push({
                name,
                type: "ngon-surface",
                faces: faces,
                vertices
            });
            me.createNoteKeyFrame(name, {
                z: 1
            }, 1);
            [].interpolate(0, Math.min(me.lastFrame, 5000), u_time => {
                // console.log(`z: ${z}, u_time: ${u_time}, x: ${(x / width * 3)}, y: ${(y / height * 3)}`);
                var _vertices = [];
                var index = 0;
                [].interpolate(0, width, (x) => {
                    [].interpolate(0, height, (y) => {
                        var z = Maths.Vector.lavaLamp({
                            time: u_time / 25,
                            x: (((x / width) - .5) * 3.10),
                            y: (((y / height) - .5) * 3.10)
                        });

                        _vertices.push({
                            index: index,
                            position: [vertices[index][0], vertices[index][1], 1 - z]
                        });
                        index++;
                    })
                })
                me.createNoteKeyFrame(name, {
                    z: 0
                }, 1 * (u_time + 1), {
                        vertex_animation: {
                            vertices: _vertices
                        }
                    });
            })
        }

        me.addLamps();
    }
    createNoteKeyFrame(name, position, frame, extra) {
        var me = this;
        extra = extra || {};
        var res = {
            name: name,
            position,
            ...extra
        }

        let keyframe = me.getKeyFrame(frame || 1);
        keyframe.objects.push(res);

        return res;
    }
}