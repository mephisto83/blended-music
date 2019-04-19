import MidiJsonInformation from "./midi-json-information.mjs";
import { log } from '../util/util';
import Materials from './materials.mjs';
import Basic from './basic';
import HexForceField from './materials/hex-force-field.mjs';
import HexForceFieldSimple from './materials/hex-force-field-simple.mjs';
import ScatterField from './materials/scatter-material.mjs';
import Layout from '../layout/graphlayout.mjs';

export default class BasicHexField extends Basic {
    constructor() {
        super();
    }
    static info() {
        return {
            name: 'Basic Hex',
            version: '0.0.23'
        }
    }
    renderEngine() {
        return 'BLENDER_EEVEE';
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new BasicHexField();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }

    async constructMovie(raw) {
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
                            type: "plane"
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

    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1, track_index: 0 };
        var y_ = me.toTimeToPosition(note.time);
        var x_ = me.midiToDimension(note.midi);
        var frame = me.toTimeToFrames(note.time);
        var endframe = me.toTimeToFrames(note.time + note.duration);
        var width = me.toTimeToDimension(note.duration);// (ops.trackCount / (ops.trackCount || 1)) * .5;
        var dim = width || me.toTimeToDimension(note.duration);
        var x_offset = (.5 * 2) * ops.track_index;
        var palette = me.colorPalette()[ops.track_index] || [1, 0, 0];

        var material = "hexa_mtl_";// matNames[materialIndex % matNames.length];
        var hexmat = HexForceFieldSimple.HexaMat(material, {
            size: Materials.Value(name + "hex_size", 0.8),
            scale: Materials.Value(name + "hex_scale", 18.5),
            blend: Materials.Value(name + "hex_blend", .01),
            random: Materials.Value(name + "hex_random", 1),
            rotate: Materials.Value(name + "hex_rotate", 1)
        });
        var scatField = ScatterField.HexForceFieldMat(
            Materials.Value('scat_field', 2.6),
            Materials.Custom(
                `hexmat`,
                hexmat.out(Materials.StandardOut(hexmat))
            ),
            Materials.Value('scroll_z', 1).animate([].interpolate(frame, endframe, x => {
                return {
                    frame: x,
                    value: Math.cos(x - frame / 10),
                }
            })),
            Materials.Value('scroll_wave', -1).animate([].interpolate(frame, endframe, x => {
                return {
                    frame: x,
                    value: -(((Math.cos(x - frame / 10) + 1) / 2) * 1.2) + .2,
                }
            }))
        );
        var final_mat = Materials.Output(`material-${name}`,
            Materials.Custom(
                `material-custom-${name}`,
                scatField.out(Materials.StandardOut(scatField))
            )
        );
        final_mat.blend_method = 'ADD';

        var res = {
            name: name,
            position: {
                y: y_ + dim,
                x: (x_ + x_offset),
                z: .5,
            },
            materialConfig: final_mat,
            scale: { x: width, y: dim, z: 1 * (note.velocity || 1) },
            rotation: { x: 0, y: 0, z: 0 }
        }

        return res;
    }


    getComposite() {
        return super.getComposite();
    }
    getCompositeGroups() {
        return [];
    }
    getMaterialGroups() {
        return [...HexForceField.MaterialNames().map(name => {
            return HexForceField[name]();
        }), ...ScatterField.MaterialNames().map(name => {
            return ScatterField[name]();
        })];
    }
}