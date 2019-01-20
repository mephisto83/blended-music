import path from 'path';
import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
import GroupMaterials from './group-materials.mjs';
import SimpleMaterials from './simple-materials.mjs';
import EeveeMaterials from './eevee-materials.mjs';
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
        var files = await Util.readDir(ops.raceSrc);
        try {
            files = files.filter(x => x.indexOf('.json') !== -1)
            var file = files[Math.floor(Math.random() * files.length)];
            var trackInfo = await Util.readJson(`${ops.raceSrc}${path.sep}${file}`);
            basic.trackInfo = trackInfo;

            var { actors } = trackInfo;

            await basic.createShipActors(actors, ops);
            basic.ops = ops;
            return Promise.resolve().then(() => {
                return basic._buildMovie(filepath, filename, info, ops);
            });
        }
        catch (e) {
            console.log('something went wrong');
            console.error(e);
            throw e;
        }

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
            Math.floor(Math.random() * 50) + 10, Math.floor(Math.random() * 50) + 11, name
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
        var sortedActors = Object.keys(actors).sort((b, a) => {
            return actors[a].length - actors[b].length;
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
                        z: track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + .1) : 0
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
    getShipMaterials() {
        var gmat1 = SimpleMaterials.Metal(Materials.Color('gmat1-color', [.05, .01, .015, 1]));
        var gmat2 = SimpleMaterials.Metal(Materials.Color('gmat2-color', [.1, .1, .15, 1]));
        var gmat3 = SimpleMaterials.Metal(Materials.Color('gmat3-color', [.1, .15, .1, 1]));
        var gmat4 = SimpleMaterials.Metal(Materials.Color('gmat4-color', [.15, .1, .1, 1]));

        var parts4 = ['Fin_Wing.',
            'Window_Block.', '5-Engine.',
            'hull.duckHead',
            'hull.lump.',
            'Side_Bridge.',
            'Beard_Block.',
            'hull.duckHead.',
            'Tank',
            'hull.joined.',
            'hull.joined',
            'Hangar.', 'bridge.compact.', 'hull.cruise.', 'hull.fish.']
        var parts3 = [
            'Small_Gun',
            'Curve_Wing',
            "eng.body.fish",
            "hardpoint.base",
            "Rail_Runner",
            'G_block',
            'hull.slick',
            'Dog_Ear.',
            'Beard',
            "Bridge.BeerBelly",
            "Fish_Engine"
        ];
        var parts1 = ['hull.beard.', 'hull.rib.', 'Outrigger.', 'hull.knuckle',
            'hull.horse.', 'double-block.', 'hull.bullHead.', 'hull.tall.', 'eng.body.', 'Fin_Runner.']
        var parts2 = ['Fore-Bridge.', 'hull.slick.', 'hull.large.', 'hull.block_split.',
            'eng.strut.ladder',
            'Instrument_Mast',
            'hull.hangar.',
            'PE-Wing',
            'eng.strut.cylindar',
            'hull.v.', 'Crab_face', 'Bridge-1', 'actor-', 'Build-up_Block', 'hull.long']
        return [{
            name: 'mat1',
            selector: parts1,
            config: Materials.Output(`mat1`,
                Materials.Custom(
                    `material-custom-mat1`,
                    gmat1.out(Materials.StandardOut(gmat1))
                )
            )
        }, {
            name: 'mat2',
            selector: parts2,
            config: Materials.Output(`mat2`,
                Materials.Custom(
                    `material-custom-mat2`,
                    gmat2.out(Materials.StandardOut(gmat2))
                )
            )
        }, {
            name: 'mat3',
            selector: parts3,
            config: Materials.Output(`mat3`,
                Materials.Custom(
                    `material-custom-mat3`,
                    gmat3.out(Materials.StandardOut(gmat3))
                )
            )
        }, {
            name: 'mat4',
            selector: parts4,
            config: Materials.Output(`mat4`,
                Materials.Custom(
                    `material-custom-mat4`,
                    gmat4.out(Materials.StandardOut(gmat4))
                )
            )
        }];
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

            var matter = SimpleMaterials.Metal(Materials.Color(`material-f-value-${name}`, [Math.random(), Math.random(), Math.random(), 1]));
            var cmatter = Materials.Custom(
                `material-ff-mat1-${name}`,
                matter.out(Materials.StandardOut(matter))
            )
            var res = {
                name: name,
                materialConfig: Materials.Output(`material-${name}`,
                    Materials.Mix(`material-mix-${name}`,
                        Materials.Value(`material-mix-${name}-mix`, me.getNumber(.1, .2)),
                        cmatter,
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
                materials: this.getShipMaterials(),
                file: this.getActorName(actorName),
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                scale: {
                    x: .1,
                    y: .1,
                    z: .1
                }
            });
            var scale = this.getNumber(.1, .3);
            var res = {
                name: name,
                position: {
                    y: 0,
                    x: 0,
                    z: 0
                },
                scale: {
                    x: scale,
                    y: scale,
                    z: scale
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

    getMaterialGroups() {
        return [...SimpleMaterials.MaterialNames().map(name => {
            return SimpleMaterials[name]();
        })];
    }
}