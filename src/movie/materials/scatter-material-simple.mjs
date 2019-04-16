
import ScatterMaterial from './scatter-material.mjs';
import Materials from '../materials';
export default class ScatterMaterialSimple extends ScatterMaterial {

    static HexaMat(name, _args = {}) {


        _args = {
            size: Materials.Value(name + "hex_size", .5),
            scale: Materials.Value(name + "hex_scale", .5),
            blend: Materials.Value(name + "hex_blend", .5),
            random: Materials.Value(name + "hex_random", .5),
            rotate: Materials.Value(name + "hex_rotate", .5),
            sides: Materials.Value(name + "hex_sides", 6),
            ..._args
        };


        let args = {
            nodeGroupScale_0: _args.scale,
            nodeGroupSize_1: _args.size,
            nodeGroupBlend_2: _args.blend,
            nodeGroupRandomness_3: _args.random,
            nodeGroupRotate_4: _args.rotate,
            nodeGroupSides_5: _args.sides
        };

        return HexForceField.SimpleHexGM_(args)
    }
}