import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
export default class VoronoiExtrudeFace extends Basic {
    constructor() {
        super();
        this.midi2dim = 100;
    }
    static info() {
        return {
            name: 'Voronoi Extrude Faces',
            version: '0.0.1'
        }
    }

    static async buildMovie(filepath, filename, info, ops) {
        var basic = new VoronoiExtrudeFace();

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

    async constructMovie(raw) {
        var me = this;

        var objects = me.objects;


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
            var faceCount = 10;
            var { faces } = VoronoiWeb.run({ level: faceCount, height: 10, width: 10 });

            var extruded_faces = ProceduralNode.Map.run({
                collection: faces,
                function: (face, index) => {
                    return ProceduralNode.Face.extrude({
                        face,
                        scale: .9,
                        index
                    });
                }
            });

            var facees = ProceduralNode.Flatten.run({ collection: extruded_faces.collection, selector: function (x) { return x.outer } });
            var sortedFaces = facees;
            var ngonsurface = true;
            if (ngonsurface) {
                //ngon-surface
                let name = `track-ngon-surface`;
                var vertices = [];
                var _faces = facees.map(face => {
                    console.log(face);
                    return face.collection.map(t => {
                        console.log(t);
                        var vector = ProceduralNode.Vector.array(t);
                        var vectorIndex = vertices.findIndex(v => {
                            if (v.length === vector.length) {
                                for (var i = 0; i < v.length; i++) {
                                    if (v[i] !== vector[i]) {
                                        return false;
                                    }
                                }
                                return true;
                            }
                            return false;
                        });
                        if (vectorIndex !== -1) {
                            return vectorIndex;
                        }
                        else {
                            vertices.push(vector);
                            return vertices.length - 1;
                        }
                    });
                });
                objects.push({
                    name,
                    type: "ngon-surface",
                    vertices,
                    faces: _faces
                });
                me.createNoteKeyFrame(name, []);
            }
            else {
                [].interpolate(0, sortedFaces.length, (index) => {

                    let name = `track-${index}-${index}`;
                    objects.push({
                        name,
                        type: "ngon",
                        vertices: [...sortedFaces[index].collection]
                    });
                    me.createNoteKeyFrame(name, []);
                });
            }
        }
        me.addLamps();
    }
    createNoteKeyFrame(name, noteEvents) {
        var me = this;
        var palette = [1, 0, 0];
        var lightAnim = [];

        var res = {
            name: name,
            materialConfig: Materials.Output(`material-${name}`,
                Materials.Mix(`material-mix-${name}`,
                    Materials.Value(`material-light-value-${name}`, .5).animate(lightAnim),
                    Materials.Diffuse(`material-light-diff-${name}`,
                        Materials.Color(`material-light-color-${name}`, [1, 0.1, 0, 1]),
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