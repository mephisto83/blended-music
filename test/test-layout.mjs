import Layout from '../src/layout/graphlayout.mjs'
import ScatterField from '../src/movie/materials/scatter-material.mjs';
import HexForceField from '../src/movie/materials/hex-force-field.mjs';
import HexForceFieldSimple from '../src/movie/materials/hex-force-field-simple.mjs';
import Materials from '../src/movie/materials';

var name = "name";

var material = "hexa_mtl_";// matNames[materialIndex % matNames.length];
var hexmat = HexForceFieldSimple.HexaMat(material);
var scatField = ScatterField.HexForceFieldMat(
    Materials.Value('scat_field', 2),
    Materials.Custom(
        `hexmat`,
        hexmat.out(Materials.StandardOut(hexmat))
    ),
    Materials.Value('scroll_z', 0),
    Materials.Value('scroll_wave', -.30)
);
Materials.Output(`material-${name}`,
    Materials.Custom(
        `material-custom-${name}`,
        scatField.out(Materials.StandardOut(scatField))
    )
)