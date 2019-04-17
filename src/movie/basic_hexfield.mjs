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
            version: '0.0.17'
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
        let name = "cubue-1";
        objects.push({
            name,
            type: "plane"
        });
        let keyframe = me.getKeyFrame(1);
        let note_frame = me.createNoteKeyFrame(name);
        keyframe.objects.push(note_frame);

        me.addLamps();
    }


    createNoteKeyFrame(name) {
        var me = this;
        var matNames = HexForceField.MaterialNames();
        var material = "hexa_mtl_";// matNames[materialIndex % matNames.length];
        var scatmat = "scatmat";
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
            Materials.Value('scroll_z', 1).animate([].interpolate(0, 250, x => {
                return {
                    frame: x,
                    value: Math.cos(x / 10),
                }
            })),
            Materials.Value('scroll_wave', -1).animate([].interpolate(0, 250, x => {
                return {
                    frame: x,
                    value: -(((Math.cos(x / 10) + 1) / 2) * 1.2) + .2,
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
                y: 0,
                x: 0,
                z: 0
            },
            materialConfig: final_mat,
            scale: { x: 10, y: 10, z: 1 }
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