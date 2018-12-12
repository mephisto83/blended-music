import MidiJsonInformation from "./midi-json-information.mjs";
import { log } from '../util/util';
import Materials from './materials.mjs';

export default class Basic {
    constructor() {
        this.keyframes = [];
        this.objects = [];
        this.midi2dim = 127;
        this.time2dim = 10;
        this.framesPerSecond = 24;
        this.duration = 10;
    }
    static info() {
        return {
            name: 'Basic',
            version: '0.0.5'
        }
    }
    renderEngine() {
        return 'BLENDER_EEVEE';
    }
    getKeyFrame(frameIndex) {
        var keyframe = this.keyframes.find(t => t.frame === frameIndex);
        if (!keyframe) {
            var frame = this.createKeyFrame(frameIndex);
            this.keyframes.push(frame);
            this.keyframes.sort((a, b) => {
                return a.frame - b.frame;
            });
            keyframe = frame;
        }
        return keyframe;
    }
    toTimeToFrames(duration) {
        return Math.ceil(this.framesPerSecond * duration);
    }
    createKeyFrame(frameIndex) {
        return {
            frame: frameIndex,
            objects: []
        }
    }
    toTimeToDimension(duration) {
        return this.time2dim * duration / 2;
    }
    toTimeToPosition(time) {
        return this.time2dim * time;
    }
    midiToDimension(midi) {
        return this.midi2dim * ((midi / 127) - .5);
    }
    colorPalette() {
        return [
            [255, 107, 53],
            [0, 78, 137],
            [247, 197, 159],
            [239, 239, 208],
            [26, 101, 158]
        ]
    }
    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1, track_index: 0 };
        var y_ = me.toTimeToPosition(note.time);
        var x_ = me.midiToDimension(note.midi);
        var dim = me.toTimeToDimension(note.duration);
        var frame = me.toTimeToFrames(note.time);
        var endframe = me.toTimeToFrames(note.time + note.duration);
        var width = (1 / (ops.trackCount || 1)) * .5;
        var x_offset = (width * 2) * ops.track_index;
        var palette = me.colorPalette()[ops.track_index] || [1, 0, 0];
        var res = {
            name: name,
            position: {
                y: y_ + dim,
                x: (x_ + x_offset),
                z: .5
            },
            materialConfig: Materials.Output(`material-${name}`,
                Materials.Mix(`material-mix-${name}`,
                    Materials.Value(`material-light-value-${name}`, .5).animate([{
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
                    }]),
                    Materials.Diffuse(`material-light-diff-${name}`,
                        Materials.Color(`material-light-color-${name}`, [...palette, 1]),
                    ),
                    Materials.Emission(
                        `material-light-${name}`,
                        Materials.Color(`material-light-color-${name}`, [...palette, 1]),
                        Materials.Value(`material-light-strength-${name}`, 1)
                    )
                )
            ),
            scale: { x: width, y: dim, z: 1 * (note.velocity || 1) },
            rotation: { x: 0, y: 0, z: 0 }
        }

        return res;
    }
    addGround() {
        var me = this;

        var handles = {
            "y_keyframe_point": {
                'handle_left_type': 'VECTOR',
                'handle_right_type': 'VECTOR'
            }
        }

        me.objects.push({
            "name": "default_ground_plane",
            "type": "plane"
        });

        var frame = me.getKeyFrame(1);
        frame.objects.push({
            "name": "default_ground_plane",
            "scale": { x: 1000, y: 1000, z: 1 },
            "translate": { "x": 0, "y": 0, "z": 0 }
        })

    }
    getHandles() {

        var handles = {
            "y_keyframe_point": {
                'handle_left_type': 'VECTOR',
                'handle_right_type': 'VECTOR'
            }, "x_keyframe_point": {
                'handle_left_type': 'VECTOR',
                'handle_right_type': 'VECTOR'
            }, "z_keyframe_point": {
                'handle_left_type': 'VECTOR',
                'handle_right_type': 'VECTOR'
            }

        }

        return handles;
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
    getDefaultCameraTargetProperties() {
        var me = this;
        var handles = me.getHandles();
        return {
            "translate": {
                "x": 0,
                "y": 0,
                "z": 2.2,
                ...handles
            }
        };
    }
    addCamera() {
        var me = this;

        var default_camera = 'default_camera';

        var handles = me.getHandles();


        me.objects.push({
            "name": default_camera,
            "type": "camera",
            "camera_type": "ORTHO"
        }, {
                "name": "default_empty",
                "type": "empty"
            });


        var frame = me.getKeyFrame(1);
        var properties = me.getDefaultCameraTargetProperties();
        frame.objects.push({
            "name": default_camera,
            "camera_type": "ORTHO",
            "ortho_scale": 80.4,
            "translate": {
                "x": 0,
                "y": -67.3141,
                "z": 74.4025,
                ...handles
            },
            "target": "default_empty",
            "lens": 15.66,
            "sensor_width": 15.80
        }, {
                "name": "default_empty",
                ...properties
            })

        var lastFrame = Math.ceil(me.framesPerSecond * me.duration);
        var end_frame = me.getKeyFrame(lastFrame);
        end_frame.objects.push({
            "name": default_camera,
            "translate": {
                "x": 0,
                "y": -67.3141 + (me.duration * me.time2dim),
                "z": 74.4025,
                ...handles
            },
            "target": "default_empty",
            "lens": 15.66,
            "sensor_width": 15.80
        }, {
                "name": "default_empty",
                "translate": {
                    "x": 0,
                    "y": (me.duration * me.time2dim),
                    "z": 2.2,
                    ...handles
                }
            });

        me.keyframes.push(end_frame, frame);

        return default_camera;
    }

    getFrameIndex(time, framesPerSecond) {
        return Math.round(time * framesPerSecond) + 1;
    }
    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new Basic();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }
    constructMovie(raw) {
        var me = this;
        var objects = me.objects;
        if (raw.tracks) {
            raw.tracks.filter(track => {
                return !track.isPercussion
            }).forEach((track, track_index) => {
                if (track && track.notes) {
                    var trackStart = track.startTime;
                    track.notes.forEach((note, note_index) => {
                        let name = `track-${track_index}-${note.name}-${note_index}`;
                        objects.push({
                            name,
                            type: "cube"
                        });
                        let keyframe = me.getKeyFrame(1);
                        var trackStart = track.startTime;
                        let note_frame = me.createNoteKeyFrame(note, name, { trackStart, trackCount: raw.tracks.length, track_index });
                        keyframe.objects.push(note_frame);
                    });
                }
            });
        }
        else {
            log(`no tracks found`)
        }
        me.addLamps();
    }
    getMapping() {
        var me = this;
        var result = {};
        for (var i = me.firstFrame; i <= me.lastFrame + 1; i++) {
            result[i] = 1;
        }
        return result;
    }
    _buildMovie(filepath, filename, info, ops) {
        var me = this;
        ops = ops || {};
        var { raw, duration } = info;
        ops = { framesPerSecond: 24, ...ops };
        me.framesPerSecond = ops.framesPerSecond;
        var lastFrame = Math.ceil(ops.framesPerSecond * duration);
        me.duration = duration;
        me.lastFrame = lastFrame;
        me.firstFrame = 1;
        var objects = me.objects;
        var keyframes = me.keyframes;
        //if (false)
        me.constructMovie(raw);

        var camera = me.addCamera();
        var mapping = me.getMapping();
        return {
            mapping,
            materials: me.getMaterials(),
            world: me.getWorlds(),
            file: filename,
            start: 1,
            orginalName: filename,
            end: lastFrame,
            fileName: filename,
            keyframes,
            objects,
            startFrame: 1,
            endFrame: lastFrame,
            renderEngine: me.renderEngine(),
            camera
        }
    }

    getMaterials() {
        return null;
    }
    getWorlds() {
        return {
            name: 'SkyWorld',
            config: Materials.WorldOutput(`SkyWorld`,
                Materials.Background(`background`,
                    Materials.Color(`color`, [0, 0, 0, 1])
                )
            )
        };
    }
}