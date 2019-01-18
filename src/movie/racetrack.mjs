import path from 'path';
import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
import Util from '../util/util'
export default class RaceTrack extends Basic {
    constructor() {
        super();
        this.levelHeight = 20;
        this.midi2dim = 100;
        this.frameMultiplier = 2;
    }
    static info() {
        return {
            name: 'Race Track',
            version: '0.0.1'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new RaceTrack();
        var files = await Util.readDir(ops.racetrackSrc);
        var file = files[Math.floor(Math.random() * files.length)];
        var trackInfo = await Util.readJson(`${ops.racetrackSrc}${path.sep}${file}`);
        basic.trackInfo = trackInfo;

        var { actors } = trackInfo;

        await basic.createShipActors(actors, ops);
        basic.ops = ops;
        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }
    async createShipActors(actors, ops) {
        var { racetrackSrc, shipFileName, _dir_path } = ops;
        if (!shipFileName) {
            throw 'missing ship file name';
        }
        if (!racetrackSrc) {
            throw 'missing race track source folder';
        }
        var shipCount = Object.keys(actors).length;

        await Util.copyFile(racetrackSrc + shipFileName, `${_dir_path}${path.sep}${shipFileName}`);
        await Util.copyFile(racetrackSrc + 'generateship.py', `${_dir_path}${path.sep}generateship.py`);
        var actornames = Object.keys(actors);
        for (var i = 0; i < actornames.length; i++) {
            await this.createShip(`${_dir_path}`, ops, this.getActorName(actornames[i]));
        }
    }
    getActorName(name) {
        return `actor-${name}`
    }
    async createShip(blenderFilePath, ops, name) {
        var { racetrackSrc, shipFileName, _dir_path, blender279 } = ops;

        console.log('creating a ship');;
        console.log(`${blender279}${path.sep}blender`);
        // D:\\dev\\git\\blended-music\\blended-music\\test\\movie_json\\_unk-_emo-09_mid\\Race Track\\0.0.1\\actor-160
        await Util.executeSpawnCmd(`${blender279}${path.sep}blender`, [
            '-b',
            `${_dir_path}${path.sep}${shipFileName}`,
            '--background',
            '-P',
            `${_dir_path}${path.sep}generateship.py`,
            '--',
            Math.floor(Math.random() * 10000),
            51, 61, name
        ], {
                detached: true
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
                "x": 0,
                "y": 1.83428,
                "z": 9.82836,
                ...handles
            }
        };
        frame.objects.push({
            "name": default_camera,
            "translate": {
                "x": 0,
                "y": -45.5998,
                "z": 13.048,
                ...handles
            },
            "target": "default_empty",
            "lens": 15.66,
            "sensor_width": 15.80
        }, {
                "name": "default_empty",
                ...properties
            });


        var { trackInfo } = this;
        var { track, actors } = trackInfo;
        var sortedActors = Object.keys(actors).sort((a, b) => {
            return a.length - b.length;
        })

        var levelHeight = this.levelHeight;
        var actorName = sortedActors[0];

        var frameMultiplier = this.frameMultiplier;

        var actor = actors[actorName];
        actor.map((_, findex) => {
            let keyframe = me.getKeyFrame(findex * frameMultiplier);
            var f = actor[findex + 0];
            if (f) {
                keyframe.objects.push({
                    name: 'default_empty',
                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + 1) : 0
                    }
                })
            }
            f = actor[findex + -3];
            if (f) {
                keyframe.objects.push({
                    name: 'default_camera',
                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + 6) : 0
                    }
                });
            }
        })
        return default_camera;
    }
    getMaterials() {
        var temp = {
        }
        return temp;
    }

    constructMovie(raw) {
        var me = this;

        var { racetrackSrc, shipFileName, _dir_path } = this.ops;
        var objects = me.objects;


        var noteLib = {};
        var faceLib = {};
        var noteEvents = {};
        var usedFaceIndex = -1;
        var { trackInfo } = this;
        var { track, actors } = trackInfo;
        var levelHeight = this.levelHeight;
        track.map((_track, tindex) => {
            var face = [];
            var name = `tracksection-${tindex}`
            _track.wall.subset(0, 4).map((wall, i) => {
                if (i === 0) {
                    face.push({ x: wall.p1.x, y: wall.p1.y, z: (_track.level || 0) * levelHeight - (levelHeight / 2) })
                }
                face.push({ x: wall.p2.x, y: wall.p2.y, z: (_track.level || 0) * levelHeight - (levelHeight / 2) })
            });

            objects.push({
                name,
                type: "ngon",
                vertices: [...face]
            });

            var res = {
                name: name,
                materialConfig: Materials.Output(`material-${name}`,
                    Materials.Mix(`material-mix-${name}`,
                        Materials.Value(`material-light-value-${name}`, .5),
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
        });
        Object.keys(actors).map((actorName, index) => {
            var name = `actor-${actorName}-${index}`

            objects.push({
                name: `${name}-target`,
                type: "empty",
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            });
            objects.push({
                name,
                type: "bespoke",
                folder: _dir_path,
                file: this.getActorName(actorName),
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                scale: {
                    x: 1,
                    y: 1,
                    z: 1
                }
            });

            var res = {
                name: name,
                // materialConfig: Materials.Output(`material-${name}`,
                //     Materials.Mix(`material-mix-${name}`,
                //         Materials.Value(`material-light-value-${name}`, .5),
                //         Materials.Diffuse(`material-light-diff-${name}`,
                //             Materials.Color(`material-light-color-${name}`, [Math.random(), Math.random(), Math.random(), 1]),
                //         ),
                //         Materials.Emission(
                //             `material-light-${name}`,
                //             Materials.Color(`material-light-color-${name}`, [Math.random(), Math.random(), Math.random(), 1]),
                //             Materials.Value(`material-light-strength-${name}`, 1)
                //         )
                //     )
                // ),
                position: {
                    y: 0,
                    x: 0,
                    z: 0
                }
            }
            if (!index) {
                delete res.materialConfig
            }
            let keyframe = me.getKeyFrame(1);
            keyframe.objects.push(res);
            var actor = actors[actorName];
            actor.map((f, findex) => {
                let keyframe = me.getKeyFrame(findex * me.frameMultiplier);
                var _f = actor[findex + 1];
                if (_f) {
                    keyframe.objects.push({
                        name: `${name}-target`,
                        position: {
                            x: _f.x,
                            y: _f.y,
                            z: track[_f.trackIndex] ? track[_f.trackIndex].level * levelHeight : 0
                        }
                    })
                }

                keyframe.objects.push({
                    name,
                    track_to: {
                        target: `${name}-target`
                    },
                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? track[f.trackIndex].level * levelHeight : 0
                    }
                })
            })
        })
        me.addLamps();
    }
    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1 };
        var y_ = me.toTimeToDimension(note.time);
        var x_ = me.midiToDimension(note.midi);
        var dim = .5;
        var z = 10 * (note.velocity || 0);
        var res = {
            name: name,
            position: {
                y: y_ + (dim / 2),
                x: x_,
                z: z
            }
        }

        return res;
    }
}