import MidiJsonInformation from "./midi-json-information.mjs";
import { log } from '../util/util';

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
            version: '0.0.2'
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

    }
    createKeyFrame(frameIndex) {
        return {
            frame: frameIndex,
            objects: []
        }
    }
    toTimeToDimension(duration) {
        return this.time2dim * duration;
    }
    midiToDimension(midi) {
        return this.midi2dim * ((midi / 127) - .5);
    }
    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1 };
        var y_ = me.toTimeToDimension(note.time);
        var x_ = me.midiToDimension(note.midi);
        var dim = me.toTimeToDimension(note.duration);
        var res = {
            name: name,
            position: {
                y: y_ + (dim / 2),
                x: x_,
                z: .5
            },
            scale: { x: (1 / ops.trackCount) * .5, y: dim, z: 1 * (note.velocity || 1) },
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
            }, {
                "name": "default_sun",
                "strength": 3,
                "type": "lamp",
                "light": "SUN"
            });


        var frame = me.getKeyFrame(1);
        frame.objects.push({
            "name": default_camera,
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
                "translate": {
                    "x": 0,
                    "y": 0,
                    "z": 2.2,
                    ...handles
                }
            }, {
                "name": "default_sun",
                "type": "lamp",
                "light": "SUN",
                "strength": 3,
                "rotation": { "x": 0, "y": -80, "z": 0 }
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
                    track.notes.forEach((note, note_index) => {
                        let name = `track-${track_index}-${note.name}-${note_index}`;
                        objects.push({
                            name,
                            type: "cube"
                        });
                        let keyframe = me.getKeyFrame(1);
                        let note_frame = me.createNoteKeyFrame(note, name, { trackCount: raw.tracks.length });
                        keyframe.objects.push(note_frame);
                    });
                }
            });
        }
        else {
            log(`no tracks found`)
        }
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
        if (false)
            me.constructMovie(raw);

        var camera = me.addCamera();
        var mapping = me.getMapping();
        return {
            mapping,
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
}