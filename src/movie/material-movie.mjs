import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
import GroupMaterials from './group-materials.mjs';
export default class MaterialMovie extends Basic {
    constructor() {
        super();

        this.midi2dim = 100;
    }
    static info() {
        return {
            name: 'Material Movie',
            version: '0.0.1'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new MaterialMovie();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }
    toTimeToDimension(time) {
        var me = this;

        return this.midi2dim * (time / me.duration) - (this.midi2dim / 2);
    }
    midiToDimension(midi) {
        return this.midi2dim * ((midi / 127) - .5);
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
    getMaterials() {
        var temp = {
        }
        return temp;
    }
    createPath(pathConfig, name, level, ops) {
        ops = ops || {};
        var { sx = 1, sy = 1 } = ops;
        var parts = pathConfig.filter(x => x.a && x.b);
        var lastEdge = parts[parts.length - 1];
        var last = [lastEdge.b.x * sx, lastEdge.b.y * sy, 0, 0];
        var path = {
            name,
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            type: 'path',
            bevel_object: name + '-bevel',
            use_path: "false",
            points: [...parts.map(edge => {
                return [edge.a.x * sx, edge.a.y * sy, 0, 0]
            }), last],
        };
        var keyframes = [];
        keyframes.push({
            name: name + '-bevel',
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        });
        keyframes.push({
            name: name,
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        });

        var circle = {
            name: name + '-bevel',
            type: 'circle',
            scale: {
                //CUSTOPP //Customization opportunity
                x: 1 / Math.pow(ops.base_x || ops.base || 2, level),
                y: 1 / Math.pow(ops.base_y || ops.base || 2, level),
                z: 1 / Math.pow(ops.base_z || ops.base || 2, level)
            },
            position: {
                x: 0,
                y: 0,
                z: 0
            }
        };

        return {
            path,
            circle,
            keyframes
        }
    }
    constructMovie(raw) {
        var me = this;

        var objects = me.objects;

        var useWeb = true;
        if (useWeb) {

            var noteLib = {};
            var faceLib = {};
            var noteEvents = {};
            var usedFaceIndex = -1;

            if (raw.tracks) {

                var { faces } = VoronoiWeb.run({ level: 300, height: 10, width: 10 });

                faceLib = {};
                faces.forEach((face, index) => {
                    let name = `face-${index}`;
                    objects.push({
                        name,
                        type: "ngon",
                        vertices: [...face.collection]
                    });

                    me.createNoteKeyFrame(name, index);
                });
            }

        }
        me.addLamps();
    }
    createNoteKeyFrame(name, materialIndex) {
        var me = this;

        var lightAnim = [];
        var frame = 10;
        var endframe = 30;

        lightAnim.push({
            frame: frame,
            value: 0,
        }, {
                frame: frame + 1,
                value: 1
            }, {
                frame: endframe - 1,
                value: 1
            }, {
                frame: endframe,
                value: 0
            })

        var matNames = GroupMaterials.MaterialNames();
        var material = matNames[materialIndex % matNames.length];
        var res = {
            name: name,
            materialConfig: Materials.Output(`material-${name}`,
                Materials.Custom(
                    GroupMaterials[material]()
                )
            ),
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        }

        let keyframe = me.getKeyFrame(1);
        keyframe.objects.push(res);

        return res;
    }

    getMaterialGroups() {
        return GroupMaterials.MaterialNames().map(name => {
            return GroupMaterials[name]();
        });
    }
}