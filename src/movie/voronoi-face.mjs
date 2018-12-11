import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
export default class VoronoiFace extends Basic {
    constructor() {
        super();

        this.midi2dim = 100;
    }
    static info() {
        return {
            name: 'Voronoi Faces',
            version: '0.0.1'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new VoronoiFace();

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
                var noteTypeCount = 0;
                raw.tracks.filter(track => {
                    return !track.isPercussion
                }).forEach((track, track_index) => {
                    if (track && track.notes) {
                        var trackStart = track.startTime;
                        track.notes.forEach((note, note_index) => {
                            let name = `track-${track_index}-${note.name}`;
                            if (!faceLib[name]) {
                                noteTypeCount++;
                                faceLib[name] = 1;
                            }
                        })
                    }
                });

                var { faces } = VoronoiWeb.run({ level: noteTypeCount + 1, height: 10, width: 10 });
                var center = ProceduralNode.Vector.run({ x: 5, y: 5, z: 0 });
                var sortedFaces = faces.sort((a, b) => {
                    return ProceduralNode.VectorDistance(a.center, center) -
                        ProceduralNode.VectorDistance(b.center, center);
                });

                faceLib = {};
                raw.tracks.filter(track => {
                    return !track.isPercussion
                }).forEach((track, track_index) => {
                    if (track && track.notes) {
                        var trackStart = track.startTime;
                        track.notes.forEach((note, note_index) => {
                            let name = `track-${track_index}-${note.name}`;
                            if (!faceLib[name]) {
                                usedFaceIndex = usedFaceIndex + 1;
                                faceLib[name] = usedFaceIndex;
                                noteLib[usedFaceIndex] = name;
                                console.log(sortedFaces.length)
                                console.log(usedFaceIndex)
                                objects.push({
                                    name,
                                    type: "ngon",
                                    vertices: [...sortedFaces[faceLib[name]].collection]
                                });
                                noteEvents[name] = [];

                            }

                            var trackStart = track.startTime;
                            noteEvents[name].push({ note, trackStart, trackCount: raw.tracks.length, track_index })

                        });
                    }
                });
                for (var name in noteEvents) {
                    var noteEvent_ = noteEvents[name];
                    let note_frame = me.createNoteKeyFrame(name, noteEvent_);

                }
            }

        }
        me.addLamps();
    }
    createNoteKeyFrame(name, noteEvents) {
        var me = this;
        var palette = [1, 0, 0];
        var lightAnim = [];
        noteEvents.map(noteEvent => {
            var { note, trackStart, trackCount, track_index } = noteEvent;
            palette = me.colorPalette()[track_index] || [1, 0, 0];
            var frame = me.toTimeToFrames(note.time + (trackStart || 0));
            var endframe = me.toTimeToFrames(note.time + note.duration + (trackStart || 0));

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
        })


        var res = {
            name: name,
            materialConfig: Materials.Output(`material-${name}`,
                Materials.Mix(`material-mix-${name}`,
                    Materials.Value(`material-light-value-${name}`, .5).animate(lightAnim),
                    Materials.Diffuse(`material-light-diff-${name}`,
                        Materials.Color(`material-light-color-${name}`, [0, 0, 0, 1]),
                    ),
                    Materials.Emission(
                        `material-light-${name}`,
                        Materials.Color(`material-light-color-${name}`, [1, 1, 1, 1]),
                        Materials.Value(`material-light-strength-${name}`, 1)
                    )
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
}