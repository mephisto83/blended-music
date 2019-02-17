import path from 'path';
import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
import GroupMaterials from './group-materials.mjs';
import SimpleMaterials from './simple-materials.mjs';
import MaterialBlendMaterials from './material-blend-materials.mjs';
import EeveeMaterials from './eevee-materials.mjs';
import Util from '../util/util';

var usecube = false;

const UP = 'UP';
const DOWN = 'DOWN';
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';
export default class RaceTrack extends Basic {
    constructor() {
        super();
        this.levelHeight = 40;
        this.midi2dim = 100;
        this.frameMultiplier = 1;
    }
    static info() {
        return {
            name: 'Race Track',
            version: '0.0.3'
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
            if (!usecube)
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
                "z": 0,
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
        var { track, actors, scores } = trackInfo;
        var sortedActors = Object.keys(actors).sort((b, a) => {
            return actors[a].length - actors[b].length;
        }).filter(x => actors[x].length > 2)
        var frameLength = actors[sortedActors[0]].length;
        var levelHeight = this.levelHeight;
        var checked_scores = scores.filter(x => x.score > (scores[0].score / 2));
        var actorName = scores[0].id;
        var frameMultiplier = this.frameMultiplier;

        var actor = actors[actorName];
        [... new Array(frameLength)].map((_, findex) => {
            let keyframe = me.getKeyFrame(findex * frameMultiplier);
            var checked_scores_index = Math.floor((checked_scores.length) * ((findex / frameLength))) || 0;
            console.log(`findex  : ${findex}`)
            console.log(`frameLength  : ${frameLength}`)
            console.log(`checked_scores_index  : ${checked_scores_index}`)
            actorName = checked_scores[checked_scores.length - checked_scores_index - 1].id;
            actor = actors[actorName];
            var f = actor[findex + 0];
            if (f) {
                var temp = {
                    name: 'default_empty',
                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + .1) : 0
                    }
                }
                // if (f.trackIndex === 0 || track[f.trackIndex] && track[f.trackIndex].transitionLevel) {
                //     temp.position.z = track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + .8) : 0;
                // }
                // if (track[f.trackIndex + 1] && track[f.trackIndex + 1].transitionLevel) {
                //     temp.position.z = track[f.trackIndex + 1] ? ((track[f.trackIndex + 1].level * levelHeight) + .8) : 0;
                // }
                keyframe.objects.push(temp);
            }
            f = actor[findex + -3];
            if (f) {
                keyframe.objects.push({
                    name: 'default_camera',
                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? ((track[f.trackIndex].level * levelHeight) + 1) : 0
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
    samePoint(p1, p2) {
        if (p1 && p2 && p1.x === p2.x && p1.y === p2.y) {
            return true;
        }
        return false;
    }
    sameWall(wall1, wall2) {
        return (
            this.samePoint(wall1.p1, wall2.p1) && this.samePoint(wall1.p2, wall2.p2) ||
            this.samePoint(wall2.p1, wall1.p2) || this.samePoint(wall2.p2, wall1.p1)
        );
    }
    seemWalls(wall1, wall2) {
        switch (wall1.position) {
            case UP:
                return wall2.position === DOWN;
            case DOWN:
                return wall2.position === UP;
            case RIGHT:
                return wall2.position === LEFT;
            case LEFT:
                return wall2.position === RIGHT;
        }
    }
    getEntryWall(track, prev) {
        var wall = prev.wall.subset(0, 4).find(x => x.open);

        switch (wall.position) {
            case UP:
                return track.wall.find(x => x.position === 'DOWN');
            case DOWN:
                return track.wall.find(x => x.position === 'UP');
            case LEFT:
                return track.wall.find(x => x.position === 'RIGHT');
            case RIGHT:
                return track.wall.find(x => x.position === 'LEFT');
        }
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
            const trackSectionName = `tracksection-${tindex}`
            let nextTrackTransitions = track[tindex + 1] && track[tindex + 1].transitionLevel;
            let trackTransitions = track[tindex].transitionLevel;
            let extrafaces = [];
            let previousTrack = null;
            let nextTrack = null;
            let previousopenwall = null;
            let nextTrackEntryWall = null;
            if (tindex) {
                previousTrack = track[tindex - 1];
                previousopenwall = track[tindex - 1].wall.subset(0, 4).find(x => x.open);
                if (!previousopenwall) {
                    throw 'there needs to be an exit wall';
                }
            }
            if (track[tindex + 1]) {
                nextTrack = track[tindex + 1];
                nextTrackEntryWall = this.getEntryWall(nextTrack, _track);
                if (!nextTrackEntryWall) {
                    throw 'there needs to be an entry wall';
                }
            }
            _track.wall.subset(0, 4).map((wall, i) => {
                let z2 = (_track.level || 0) * levelHeight - (levelHeight / 2);
                let z1 = z2;
                function addWall() {
                    extrafaces.push([{
                        x: wall.p1.x,
                        y: wall.p1.y,
                        z: z1
                    }, {
                        x: wall.p2.x,
                        y: wall.p2.y,
                        z: z1
                    }, {
                        x: wall.p2.x,
                        y: wall.p2.y,
                        z: (_track.level + 1 || 0) * levelHeight - (levelHeight / 2)
                    }, {
                        x: wall.p1.x,
                        y: wall.p1.y,
                        z: (_track.level + 1 || 0) * levelHeight - (levelHeight / 2)
                    }])
                }
                if (wall && nextTrackTransitions) {
                    if (wall.open) {
                        // z2 = ((_track.level + 1) || 0) * levelHeight - (levelHeight / 2);
                        // z1 = z2;
                        addWall();
                    }
                }
                if ((!nextTrackEntryWall || !this.seemWalls(wall, nextTrackEntryWall)) &&
                    (!previousopenwall || !this.seemWalls(previousopenwall, wall))) {
                    addWall();
                }

                if (i === 0) {
                    face.push({
                        x: wall.p1.x,
                        y: wall.p1.y,
                        z: z1
                    });
                }

                face.push({
                    x: wall.p2.x,
                    y: wall.p2.y,
                    z: z2
                });
            });

            objects.push({
                name: trackSectionName,
                type: "ngon",
                vertices: [...face]
            });

            extrafaces.map((extraface, iface) => {
                objects.push({
                    name: `${trackSectionName}-extra-faces-${iface}`,
                    type: 'ngon',
                    vertices: [...extraface]
                });

                var matter_extra_face = SimpleMaterials.Metal(Materials.Color(`material-xf-value-${trackSectionName}-${iface}`, [Math.random(), Math.random(), Math.random(), 1]));
                var matter_extra_face_cmatter = Materials.Custom(
                    `material-xff-mat1-${trackSectionName}-${iface}`,
                    matter_extra_face.out(Materials.StandardOut(matter_extra_face))
                )
                var res = {
                    name: `${trackSectionName}-extra-faces-${iface}`,
                    materialConfig: Materials.Output(`material-${trackSectionName}--${iface}xf`,
                        Materials.Mix(`material-mix-${trackSectionName}-xf-${iface}`,
                            Materials.Value(`material-mix-${trackSectionName}-mix-xf-${iface}`, me.getNumber(.1, .2)),
                            matter_extra_face_cmatter,
                            Materials.Emission(
                                `material-xf-light-${trackSectionName}-${iface}`,
                                Materials.Color(`material-light-color-${trackSectionName}-${iface}`, [!trackTransitions ? 0 : 1, !nextTrackTransitions ? 0 : 1, 0, 1]),
                                Materials.Value(`material-light-strength-${trackSectionName}-${iface}`, 1)
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

            var matter = MaterialBlendMaterials.Checker_Metal_Mat(Materials.Color(`material-f-value-${trackSectionName}`, [Math.random() * .999, Math.random() * .999, Math.random() * .999, 1]),
                Materials.Color(`material-f-value-${trackSectionName}`, [Math.random(), Math.random(), Math.random(), 1]));
            var cmatter = Materials.Custom(
                `material-ff-mat1-${trackSectionName}`,
                matter.out(Materials.StandardOut(matter))
            )
            var res = {
                name: trackSectionName,
                materialConfig: Materials.Output(`material-${trackSectionName}`,
                    Materials.Mix(`material-mix-${trackSectionName}`,
                        Materials.Value(`material-mix-${trackSectionName}-mix`, me.getNumber(.8, .9)),
                        cmatter,
                        Materials.Emission(
                            `material-light-${trackSectionName}`,
                            Materials.Color(`material-light-color-${trackSectionName}`, [!trackTransitions ? 0 : 1, !nextTrackTransitions ? 0 : 1, 0, 1]),
                            Materials.Value(`material-light-strength-${trackSectionName}`, 1)
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
            const name = `actor-${actorName}-${index}`
            const targetName = `${name}-target`;
            objects.push({
                name: targetName,
                type: "empty",
                position: {
                    x: 0,
                    y: 0,
                    z: 0
                }
            });
            if (usecube) {
                objects.push({
                    name: name,
                    type: "cube",
                    position: {
                        x: 0,
                        y: 0,
                        z: 0
                    }
                });
            }
            else {
                objects.push({
                    name: name,
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
            }
            var scale = this.getNumber(.1, .3);
            var res = {
                name: name,
                position: {
                    y: 0,
                    x: 0,
                    z: 0
                }, track_to: {
                    target: targetName
                },
                scale: {
                    x: scale,
                    y: scale,
                    z: scale
                }
            }

            let keyframe = me.getKeyFrame(1);
            keyframe.objects.push(res);
            var restarget = {
                name: targetName,
                position: {
                    y: 0,
                    x: 0,
                    z: 0
                }
            }
            keyframe.objects.push(restarget);

            var actor = actors[actorName];
            actor.map((f, findex) => {
                let keyframe = me.getKeyFrame(findex * me.frameMultiplier);
                var _f = actor[findex + 1];
                if (_f) {
                    keyframe.objects.push({
                        name: targetName,
                        position: {
                            x: _f.x,
                            y: _f.y,
                            z: track[_f.trackIndex] ? track[_f.trackIndex].level * levelHeight : 0
                        }
                    })
                }

                console.log(`adding keyframe for actor ${targetName}  ${findex}`);

                keyframe.objects.push({
                    name: name,

                    position: {
                        x: f.x,
                        y: f.y,
                        z: track[f.trackIndex] ? track[f.trackIndex].level * levelHeight : 0
                    }
                });
            });
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
        }), ...MaterialBlendMaterials.MaterialNames().map(name => {
            return MaterialBlendMaterials[name]();
        })];
    }
}