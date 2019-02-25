import * as V from '../src/tools/voronoi'
import * as Maths from '../src/tools/math';
import { Colors } from './colors';
import { isUndefined } from 'util';
var faceCount = 10;
var { faces } = V.VoronoiWeb.run({ level: faceCount, height: 10, width: 10 });

const assert = {
    success: 0,
    failed: 0,
    errors: [],
    print: () => {
        var text = `${assert.success}/${(assert.success + assert.failed)}`;
        if (!assert.failed) {
            console.log('\x1b[36m%s\x1b[0m', text);
        }
        else {
            console.log('\x1b[33m%s\x1b[0m', text);  //yellow
        }
    },
    truthy: function (a, b, g) {
        try {
            if (!a) {
                throw b;
            }
            else {
                if (g)
                    console.log('\x1b[36m%s\x1b[0m', g);
            }
            assert.success++;
        } catch (e) {
            assert.failed++;
            assert.errors.push(e);
            console.log(`${Colors.FgRed}%s${Colors.Reset}`, e)
        }
    }
}
var tests = [
    test2,
    test_Snoise,
    test_dot,
    test_add,
    test_permute,
    test_floor,
    test_vector,
    test_lavaLamp,
    test_sub];

function test_lavaLamp() {
    var res = Maths.Vector.lavaLamp({
        time: .3,
        x: .3,
        y: .4
    });
    assert.truthy(res !== undefined, `should probably not be ${res}`)
}
function test_sub() {
    var a = Maths.Vector.run({ value: 2 });
    var b = Maths.Vector.run({ value: 2 });
    var res = Maths.Vector.sub({ collection: [a, b] });
    assert.truthy(res.x === 0, `'x should be 0 === ${res.x}'`);
    assert.truthy(res.y === 0, `'y should be 0 === ${res.y}'`);
    assert.truthy(res.z === 0, `'z should be 0 === ${res.z}'`);
}
function test_vector() {
    var res = Maths.Vector.run({ value: 2 });
    assert.truthy(res.x === 2, `'x should be 2 === ${res.x}'`);
    assert.truthy(res.y === 2, `'y should be 2 === ${res.y}'`);
    assert.truthy(res.z === 2, `'z should be 2 === ${res.z}'`);
}
function test_floor() {
    var v = Maths.Vector.run({ x: 2.1, y: 2.1, z: 2.1 });
    var res = Maths.Vector.floor({ vector: v })

    assert.truthy(res, 'didnt give expected value');
    assert.truthy(res.x === 2, `'x should be 2 === ${res.x}'`);
    assert.truthy(res.y === 2, `'y should be 2 === ${res.y}'`);
    assert.truthy(res.z === 2, `'z should be 2 === ${res.z}'`);
}

function test_add() {
    var v = Maths.Vector.run({ x: 1, y: 1, z: 1 });
    var b = 1;
    var res = Maths.Vector.add({ collection: [v], factor: b })

    assert.truthy(res, 'didnt give expected value');
    assert.truthy(res.x === 2, `'x should be 2 === ${res.x}'`);
    assert.truthy(res.y === 2, 'y should be 2');
    assert.truthy(res.z === 2, 'z should be 2');
}

function test_dot() {
    var v = Maths.Vector.run({ x: 1, y: 1, z: 1 });
    var b = Maths.Vector.run({ x: 1, y: 1, z: 1 });
    var res = Maths.Vector.dot({ a: v, b: b })
    assert.truthy(res, 'didnt give expected value');
    assert.truthy(typeof (res) === 'number', 'not a number');
}

function test_Snoise() {
    var square = 100;
    // for (var i = 1; i < square; i++) {
    //     for (var j = 1; j < square; j++) {
    //         var res = Maths.Vector.lavaP1({
    //             x: i / square,
    //             y: j / square,
    //             time: i / 100
    //         });

    //         //   assert.truthy(res, `res = ${res}`, `${res}`);
    //     }
    // }
}

function test_permute() {
    var v = Maths.Vector.run({ x: 1, y: 0, z: 0 })
    var res = Maths.Vector.permute({ vector: v });

    assert.truthy(res, 'permute result wasnt there');
}

function test2() {
    var v = Maths.Vector.run({
        x: 0.211324865405187,  // (3.0-sqrt(3.0))/6.0
        y: 0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
        z: -0.577350269189626,  // -1.0 + 2.0 * C.x
        w: 0.024390243902439
    });

    if (!v) {
        throw 'no vector created';
    }
    assert.truthy(v.yy, 'no yy', 'yy exists');
    assert.truthy(v.www, 'no www', 'www exists');
    assert.truthy(v.xz, 'no xz', 'xz exists');
    assert.truthy(v.yw, 'no yw', 'yw exists');
    assert.truthy(v.yz, 'no yz', 'yz exists');
    assert.truthy(v.xx, 'no xx', 'xx exists');
    assert.truthy(v.xy, 'no xy', 'xy exists');
    assert.truthy(v.zw, 'no zw', 'zw exists');
    assert.truthy(v.xyxy, 'no xyxy', 'xyxy exists');
    assert.truthy(v.xxzz, 'no xxzz', 'xxzz exists');
}

function test1() {

    var { collection } = Maths.Map.run({
        collection: faces,
        function: face => {
            var { edges } = Maths.Face.toEdges({ face });
            return edges;
        }
    });
    var edges = collection;
    // console.log(edges[0]);


    var res = Maths.Map.run({
        collection: faces,
        function: (face) => {
            var { edges } = Maths.Face.toEdges({ face });
            var { edges } = Maths.Sort.run({
                collection: edges,
                function: (edge1, edge2) => {
                    return Maths.Edge.length(edge1) - Maths.Edge.length(edge2);
                }
            })

            return Maths.Face.extrude({
                face,
                scale: .5
            });
        }
    });
    // console.log(res);
    var facees = Maths.Flatten.run({ collection: res.collection, selector: function (x) { return x.outer } });
    console.log(facees.length);

    var { collection } = Maths.Map.run({
        collection: facees, function(face) {
            var distance = Maths.Face.distanceBetween({
                face,
                frontBack: true
            });
            console.log(distance);
            return Maths.Face.run({
                ...face,
                collection: face.collection
            })
        }
    });
}
tests.map(tes => {
    try {
        tes();
        assert.success++;
    }
    catch (e) {
        assert.failed++;
        assert.errors.push(e);
        console.log(`${Colors.FgRed}%s${Colors.Reset}`, tes.name)
        console.log(`${Colors.FgRed}%s${Colors.Reset}`, e)
        console.log(e.stack);
    }
});
assert.print();
