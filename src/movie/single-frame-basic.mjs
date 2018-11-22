import Basic from './basic';
import Materials from './materials';
export default class SingleFrameBasic extends Basic {
    constructor() {
        super();

        this.midi2dim = 100;
    }
    static info() {
        return {
            name: 'Single Frame Basic',
            version: '0.0.4'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new SingleFrameBasic();

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
    constructMovie(raw) {
        super.constructMovie(raw);
        var me = this;
        me.addGround();
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


        return default_camera;
    }
    getMaterials() {
        var temp = {
        }
        return temp;
    }
    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1 };
        var y_ = me.toTimeToDimension(note.time);
        var x_ = me.midiToDimension(note.midi);
        var dim = .5;
        var z = 10 * (note.velocity || 0);
        var frame = me.toTimeToFrames(note.time);
        var endframe = me.toTimeToFrames(note.time + note.duration);
        var res = {
            name: name,
            position: {
                y: y_ + (dim / 2),
                x: x_,
                z: z
            },
            materialConfig: Materials.Output(`material-${name}`,
                Materials.Mix(`material-mix-${name}`,
                    Materials.Value(`material-light-value-${name}`, .5).animate([{
                        frame: 1,
                        value: Math.random(),
                    }]),
                    Materials.Diffuse(`material-light-diff-${name}`,
                        Materials.Color(`material-light-color-${name}`, [.5, .5, .5, 1]),
                    ),
                    Materials.Emission(
                        `material-light-${name}`,
                        Materials.Color(`material-light-color-${name}`, [.05, .05, 1, 1]),
                        Materials.Value(`material-light-strength-${name}`, 1)
                    )
                )
            ),
            scale: { x: dim, y: dim, z: z },
            rotation: { x: 0, y: 0, z: 0 }
        }

        return res;
    }
    getMapping() {
        var me = this;
        var result = {
            1: me.lastFrame
        };

        return result;
    }
}