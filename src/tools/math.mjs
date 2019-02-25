import * as rando from './random.mjs';
import SNoise from './noise';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
export class Lerp {
    static edge(ops) {
        if (!ops) {
            throw 'no arguments passed';
        }
        var { edge, scale } = ops;
        return Vector.run({
            x: Lerp.run({ thrustAmount: edge.a.x, to: edge.b.x, step: scale }).value,
            y: Lerp.run({ thrustAmount: edge.a.y, to: edge.b.y, step: scale }).value,
            z: Lerp.run({ thrustAmount: edge.a.z, to: edge.b.z, step: scale }).value
        })
    }
    static run(ops) {
        ops = ops || {};
        var { thrustAmount, to, step } = ops;
        function lerp(thrustAmount, to, percentage) {
            var res = thrustAmount + (to - thrustAmount) * percentage;
            return res;
        }

        return {
            value: lerp(thrustAmount, to, Math.max(Math.min(1, step), 0))
        }
    }
}

export class MathFunction {
    static run(ops) {
        ops = ops || {};
        var { a, b } = ops;
        ops.function = ops.function || ((c, d) => (c + d));

        return {
            a: ops.function(a, b)
        }
    }
}

export class Interpolate {
    static run(ops) {
        ops = ops || {};
        var { steps, a, b } = ops;

        return [...(new Array(steps + 1))].map((_, index) => {
            return Lerp.run({
                thrustAmount: a,
                to: b,
                step: index / steps
            }).value;
        });
    }
}

export class WarpVector {
    static run(ops) {
        ops = ops || {};
        var {
            vector = {},
            transformation = {}
        } = ops;
        var { x = function (x, y, z) { return x }, y = function (x, y, z) { return y }, z = function (x, y, z) { return z } } = transformation;

        return Vector.run({
            x: x(vector.x, vector.y, vector.z),
            y: y(vector.x, vector.y, vector.z),
            z: z(vector.x, vector.y, vector.z)
        })
    }
}

export class WarpEdges {
    static run(ops) {
        ops = ops || {};
        var {
            edges = [],
            transformation = {}
        } = ops;
        var { x = function (x, y, z) { return x }, y = function (x, y, z) { return y }, z = function (x, y, z) { return z } } = transformation;

        return {
            edges: edges.map(edge => {
                return WarpEdge.run({
                    edge,
                    transformation: {
                        x, y, z
                    }
                })
            })
        }
    }
}

export class WarpEdge {
    static run(ops) {
        ops = ops || {};
        var {
            edge = {},
            transformation = {}
        } = ops;
        var { x = function (x, y, z) { return x }, y = function (x, y, z) { return y }, z = function (x, y, z) { return z } } = transformation;

        var { a, b } = edge;

        return Edge.run({
            a: WarpVector.run({
                vector: a,
                transformation: {
                    x, y, z
                }
            }),
            b: WarpVector.run({
                vector: b,
                transformation: {
                    x, y, z
                }
            })
        })
    }
}

export class InterpolateEdge {
    static run(ops) {
        ops = ops || {};
        var { edges = [],
            steps = 3 } = ops;


        return {
            edges: edges.map(edge => {
                var { a, b } = edge;
                var parts = ['x', 'y', 'z'].map(key => {
                    var xs = Interpolate.run({
                        steps,
                        a: a[key],
                        b: b[key]
                    });
                    return xs;
                });
                var sections = [];

                parts.map((pi, index) => {
                    var key = (['x', 'y', 'z'])[index];
                    pi.map((pii, _ii) => {

                        if (index) {
                            sections[_ii][key] = pii;
                        }
                        else {
                            sections.push({
                                [key]: pii
                            })
                        }

                    })
                }).map(t => Vector.run(t))
                var res = sections.map((a, index) => {
                    return Edge.run({
                        a: a,
                        b: sections[index + 1] || b
                    })
                }).filter(x => x);
                if (res[res.length - 1].b.x !== edge.b.x) {
                    throw 'edge not right'
                }
                return res;
            })
        }
    }
}

export const MUL = 'MUL'
export class BMath {
    static run(ops) {
        ops = ops || {};
        var { method = MUL } = ops;
        switch (method) {
            case MUL:
                var { a = 1, b = 1 } = ops;
                if (a._type) {
                    switch (a._type) {
                        case Types.EDGE:
                            break;
                        case Types.VECTOR:
                            break;
                    }
                }

        }
    }
}
export class Map {
    static run(ops) {
        ops = ops || {};

        var { collection = [] } = ops;
        ops.function = ops.function || function (x) { return x; };
        return {
            collection: collection.map((item, index) => {
                return ops.function(item, index);
            })
        }
    }
}

export class Sort {
    static run(ops) {
        ops = ops || {};
        var { collection = [] } = ops;
        ops.function = ops.function || function (x) { return x; };
        return {
            collection: collection.sort((a, b) => {
                return ops.function(a, b);
            })
        }

    }
}

export class SplitEdge {
    static run(ops) {
        ops = ops || {};
        if (typeof (ops) !== 'function') {
            ops = function () { return null }
        }
        return (function (edge) {
            return Edge.run({
                a: ops(edge.a),
                b: ops(edge.b)
            })
        });
    }
}

function sqr(x) { return x * x }
function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
function distToSegmentSquared(p, v, w) {
    var l2 = dist2(v, w);
    if (l2 == 0) return dist2(p, v);
    var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    return dist2(p, {
        x: v.x + t * (w.x - v.x),
        y: v.y + t * (w.y - v.y)
    });
}
function distToSegment(p, v, w) { return Math.sqrt(distToSegmentSquared(p, v, w)); }

export class Face {
    constructor(vectors, center) {
        this._type = Types.FACE;
        this.center = center;
        this.collection = vectors;
    }
    static distanceBetween(ops) {
        var { face, frontBack } = ops;

        var { collection } = face;
        if (collection.length === 4) {
            var v0 = collection[0];
            var v1 = collection[1];
            var v2 = collection[2];
            return distToSegment(v0, v1, v2);
        }
        else {
            throw 'cant do faces with more than 4 points,'
        }
    }
    static toEdges(ops) {
        var { face } = ops;
        return {
            edges: face.collection.map((vector, index) => {
                if (index) {
                    return Edge.run({
                        a: Vector.run({ ...vector }),
                        b: Vector.run({ ...face.collection[index - 1] })
                    })
                }
            }).filter(e => e)
        }
    }
    static extrude(ops) {
        ops = ops || {};
        var { face, scale } = ops;
        var { collection, center } = face;
        var vertices = collection.map(vertex => {
            return Edge.run({
                a: Vector.run({ ...center }),
                b: Vector.run({ ...vertex })
            })
        }).map(edge => {
            return Lerp.edge({ edge, scale });
        });

        var centerFace = Face.run({ face: vertices, center });

        var newfaces = vertices.map((vertex, index) => {
            var newface = [];
            if (index) {
                newface.push(vertex, collection[index], collection[index - 1], vertices[index - 1])
            }
            else {
                newface.push(vertex, collection[index], collection[collection.length - 1], vertices[vertices.length - 1])
            }
            var newface_center = Vector.cog({ collection: newface });
            return Face.run({ face: newface, center: newface_center })
        })

        return {
            center: centerFace,
            outer: newfaces,
            all: [centerFace, ...newfaces]
        }
    }
    static run(ops) {
        ops = ops || {};
        var { face, center = Vector.run({}) } = ops;
        var { collection } = Map.run({
            collection: face,
            function: (vector) => {
                return Vector.run({
                    ...vector
                });
            }
        });
        return new Face(collection, center);
        //  {
        //     _type: Types.FACE,
        //         center,
        //     ...Map.run({
        //             collection: face,
        //             function: (vector) => {
        //                 return Vector.run({
        //                     ...vector
        //                 })
        //             }
        //         })
        // }
    }
}

export function VectorDistance(v1, v2) {
    return Math.sqrt(sqr(v1.x - v2.x), sqr(v1.y - v2.y), sqr(v1.z - v2.z))
}
export class Flatten {
    static run(ops) {
        var { collection, selector } = ops;

        var res = [];
        collection.map(arr => {
            res.push.apply(res, selector(arr));
        })
        return res;
    }
}
export class Edge {
    constructor(a, b) {
        this._type = Types.EDGE;
        if (!a) {
            throw 'missing vector A';
        }
        if (!b) {
            throw 'missing vector B';
        }
        this.a = a;
        this.b = b;

        this.length = Math.sqrt(sqr(a.x - b.x) + sqr(a.y - b.y) + sqr(a.z - b.z));
    }
    static length(edge) {
        var { length } = edge;
        return length;
    }
    static run(ops) {
        ops = ops || {};
        return new Edge(ops.a, ops.b);
        // return {
        //     _type: Types.EDGE,
        //     a: Vector.run(ops.a),
        //     b: Vector.run(ops.b)
        // }
    }
}
export class ToEdge {
    static run(ops) {
        ops = ops || {};
        var {
            edges = [],
            each = function (v) { return v; }
        } = ops;

        return {
            edges: edges.map(edge => {
                return each(edge);
            })
        }
    }
}

export class ToVector {
    static run(ops) {
        ops = ops || {};
        var { edge = Edge.run(), each = function (v) { return v; } } = ops;
        var { a, b } = edge;
        return {
            edge: Edge.run({
                a: each(a),
                b: each(b)
            })
        }
    }
}

//2D Noise
export class Noise {
    static run(ops) {
        ops = ops || {};
        var { a = 0, b = 0, seed = 1 } = ops;
        rando.Random.noise.seed(seed);
        return {
            a: rando.Rand1.random(a)(),
            b: rando.Rand1.random(b)()
        }
    }
}

export class ToNumber {
    static run(ops) {
        ops = ops || {}
        var { vector = Vector.run(), on = function (v) { return v; } } = ops;

        return {
            vector: on(vector.x, vector.y, vector.z)
        }
    }
}

export class SplitVector {
    static run(ops) {
        ops = ops || {};
        if (typeof (ops) !== 'function') {
            ops = function () { return null }
        }
        return (function (vector) {
            return Vector.run({
                x: ops(vector.x),
                y: ops(vector.y),
                z: ops(vector.z)
            })
        });
    }
}
export const Types = {
    VECTOR: 'VECTOR',
    FACE: 'FACE',
    EDGE: 'EDGE'
}
export class Vector {
    constructor(x, y, z, w) {
        this._type = Types.VECTOR;
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = w || 0;
    }
    get yy() {
        return Vector.run({
            x: this.y,
            y: this.y,
        })
    }
    get www() {
        return Vector.run({
            x: this.w,
            y: this.w,
            z: this.w
        })
    }
    get xz() {
        return Vector.run({
            x: this.x,
            y: this.z
        })
    }
    get yw() {
        return Vector.run({
            x: this.y,
            y: this.w
        })
    }
    set yz(val) {
        this.y = val.x;
        this.z = val.y;
    }
    get yz() {
        return Vector.run({
            x: this.y,
            y: this.z
        })
    }
    get xx() {
        var vector = this;
        return Vector.run({
            x: vector.x,
            y: vector.x
        })
    }
    get xy() {
        return Vector.run({
            x: this.x,
            y: this.y
        })
    }
    get zw() {
        return Vector.run({
            x: this.z,
            y: this.w
        })
    }
    get xyxy() {
        return Vector.run({
            x: this.x,
            y: this.y,
            z: this.x,
            w: this.y
        });
    }
    get xxzz() {
        return Vector.run({
            x: this.x,
            y: this.x,
            z: this.z,
            w: this.z
        })
    }
    static run(ops) {
        ops = ops || {};
        if (ops.value !== undefined) {
            var { value } = ops;
            return new Vector(value, value, value, value);
        }
        return new Vector(ops.x, ops.y, ops.z, ops.w);
    }
    static smoothstep(edge0, edge1, x) {
        // genType t;  /* Or genDType t; */
        var t = Vector.clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
        return t * t * (3.0 - 2.0 * t);
    }
    static clamp(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }
    static cog(ops) {
        var { collection } = ops;
        var sum = Vector.add(ops);
        return Vector.run({
            ...Vector.scalarDivide({ vector: sum, divisor: ops.collection.length })
        })
    }
    static fract(ops) {
        var { vector, value } = ops;
        if (value !== undefined) {
            return value - Math.floor(value);
        }
        return Vector.run({
            x: vector.x - Math.floor(vector.x),
            y: vector.y - Math.floor(vector.y),
            z: vector.z - Math.floor(vector.z),
            w: vector.w - Math.floor(vector.w)
        })
    }
    static mul(ops) {
        var { a, b, factor } = ops;
        if (b) {
            return Vector.run({
                x: a.x * b.x,
                y: a.y * b.y,
                z: a.z * b.z,
                w: a.w * b.w
            })
        }
        return Vector.run({
            x: a.x * factor,
            y: a.y * factor,
            z: a.z * factor,
            w: a.w * factor
        })
    }
    static div(ops) {
        var { vector, factor } = ops;
        return Vector.run({
            x: vector.x / factor,
            y: vector.y / factor,
            z: vector.z / factor,
            w: vector.w / factor
        })
    }
    static snoise(ops) {
        var { vector } = ops;
        return SNoise.noise.simplex2(vector.x, vector.y);
    }
    static _snoise(ops) {
        var { vector } = ops;
        var v = vector;
        const C = Vector.run({
            x: 0.211324865405187,  // (3.0-sqrt(3.0))/6.0
            y: 0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
            z: -0.577350269189626,  // -1.0 + 2.0 * C.x
            w: 0.024390243902439
        }); // 1.0 / 41.0

        var i = Vector.floor({
            vector: Vector.add({
                collection: [v], factor: Vector.dot({ a: v, b: C.yy })
            })
        });

        //vec2 x0 = v -   i + dot(i, C.xx);
        var x0 = Vector.sub({
            collection: [v,
                Vector.add({
                    collection: [
                        Vector.run({
                            value: Vector.dot({ a: i, b: C.xx })
                        }),
                        i
                    ]
                })
            ]
        })

        //vec2 i1;
        // i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        var i1;
        if (x0.x > x0.y) {
            i1 = Vector.run({ x: 1 });
        }
        else {
            i1 = Vector.run({ y: 1 });
        }
        // vec4 x12 = x0.xyxy + C.xxzz;
        var x12 = Vector.add({ collection: [x0.xyxy, C.xxzz] });

        //x12.xy -= i1;
        var temp = Vector.sub({ collection: [x12, i1] });
        x12.x = temp.x;
        x12.y = temp.y;

        //i = mod289(i); // Avoid truncation effects in permutation
        i = Vector.mod289({ vector: i });

        //vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        //+ i.x + vec3(0.0, i1.x, 1.0 ));
        var p_i = Vector.add({ collection: [Vector.run({ value: i.y }), Vector.run({ y: i1.y, z: 1 })] })
        var permute_i = Vector.permute({ vector: p_i });
        var p_i2 = Vector.add({ collection: [Vector.run({ x: i.x }), Vector.run({ x: 0, y: i1.x, z: 1 })] })
        var perm = Vector.add({ collection: [permute_i, p_i2] });

        var p = Vector.permute({ vector: perm });
        // vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        var cmp1 = .5 - Vector.dot({ a: x0, b: x0 });
        var cmp2 = .5 - Vector.dot({ a: x12.xy, b: x12.xy });
        var cmp3 = .5 - Vector.dot({ a: x12.zw, b: x12.zw });

        var m = Vector.run({
            x: Math.max(cmp1, 0),
            y: Math.max(cmp2, 0),
            z: Math.max(cmp3, 0)
        });
        // m = m*m ;
        // m = m*m ;
        m = Vector.mul({ a: m, b: m });
        m = Vector.mul({ a: m, b: m });

        //vec3 x = 2.0 * fract(p * C.www) - 1.0; 
        var pCwww = Vector.mul({ a: p, b: C.www });
        var fract_ = Vector.fract({ vector: pCwww });
        var x = Vector.sub({
            factor: 1,
            vector: Vector.mul({
                factor: 2,
                a: fract_
            })
        });
        // vec3 h = abs(x) - 0.5;
        var h = Vector.sub({ factor: .5, vector: Vector.abs({ vector: x }) });

        // vec3 ox = floor(x + 0.5);
        var ox = Vector.floor({ vector: Vector.add({ vector: x, factor: .5 }) });

        // vec3 a0 = x - ox;
        var a0 = Vector.sub({ collection: [x, ox] });

        //m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        var part1 = Vector.mul({ a: a0, b: a0 });
        var part2 = Vector.mul({ a: h, b: h });
        var part12 = Vector.add({ collection: [part1, part2] });
        var part3 = Vector.mul({ a: part12, factor: -.85373472095314 });
        var bigpart = Vector.add({ factor: 1.79284291400159, vector: part3 });
        m = Vector.mul({ a: m, b: bigpart });
        // vec3 g;
        var g = Vector.run({});
        // g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.x = a0.x * x0.x + h.x * x0.y;
        // g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        g.yz = Vector.add({
            collection: [Vector.mul({ a: a0.yz, b: x12.xz }), Vector.mul({ a: h.yz, b: x12.yw })]
        });

        //  return 130.0 * dot(m, g);
        return 130 * Vector.dot({ a: m, b: g });
    }
    static permute(ops) {
        var { vector } = ops;
        var v1 = Vector.mul({
            a: vector,
            factor: 34
        });
        var v2 = Vector.add({ collection: [v1], factor: 1 });
        var v3 = Vector.mul({ a: v2, b: vector })
        return Vector.mod289({
            vector: v3
        })
    }
    static dot(ops) {
        var { a, b } = ops;

        return (a.x * b.x) + (a.y * b.y) + (a.z * b.z) + (a.w * b.w);
    }
    static abs(ops) {
        var { vector } = ops;
        return Vector.run({
            x: Math.abs(vector.x),
            y: Math.abs(vector.y),
            z: Math.abs(vector.z),
            w: Math.abs(vector.w)
        })
    }
    static sub(ops) {
        var { vector, a, collection, factor } = ops;
        if (factor === undefined) {
            var x = 0;
            var y = 0;
            var z = 0;
            var w = 0;

            collection.map((t, index) => {
                if (index) {
                    x -= t.x;
                    y -= t.y;
                    z -= t.z;
                    w -= t.w;
                }
                else {
                    x += t.x;
                    y += t.y;
                    z += t.z;
                    w += t.w;
                }
            });

            return Vector.run({
                x, y, z, w
            })
        }
        a = a || vector || collection[0];
        return Vector.run({
            x: a.x - factor,
            y: a.y - factor,
            z: a.z - factor,
            w: a.w - factor
        })
    }
    static mod289(ops) {
        var { vector } = ops;
        // vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }

        return Vector.sub({
            collection: [
                vector,
                Vector.mul({
                    a: Vector.floor({
                        vector: Vector.mul({
                            a: vector,
                            factor: 1 / 289
                        })
                    }),
                    factor: 289
                })]
        })
    }
    static array(ops) {
        return [ops.x, ops.y, ops.z];
    }
    static floor(ops) {
        var { vector } = ops;

        return Vector.run({
            x: Math.floor(vector.x),
            y: Math.floor(vector.y),
            z: Math.floor(vector.z),
            w: Math.floor(vector.w)
        })
    }
    static add(ops) {
        var { a, collection, vector, factor } = ops;
        if (factor !== undefined) {
            a = a || vector || collection[0];
            return Vector.run({
                x: a.x + factor,
                y: a.y + factor,
                z: a.z + factor,
                w: a.w + factor
            });
        }

        var x = 0;
        var y = 0;
        var z = 0;
        var w = 0;

        collection.map(t => {
            x += t.x;
            y += t.y;
            z += t.z;
            w += t.w;
        });

        return Vector.run({
            x, y, z, w
        })
    }
    static scalarDivide(ops) {
        var { vector, divisor } = ops;
        if (divisor === 0) {
            throw 'cant divide by 0 in scalar divide';
        }
        return Vector.run({
            x: vector.x / divisor,
            y: vector.y / divisor,
            z: vector.z / divisor
        })
    }
    static lavaP1(ops) {
        var { time, x, y } = ops;
        var u_time = time;
        var DF = 0;
        var a = 0;
        var pos = Vector.run({
            x: x,
            y: y
        });
        var vel = Vector.run({ x: u_time * .01, y: u_time * .01 });
        DF += (Vector.snoise({
            vector: Vector.add({
                collection: [
                    pos,
                    vel
                ]
            })
        }) * .25) + .25;

        var part1 = Vector.mul({
            a: pos,
            b: Vector.mul({
                factor: 0.1,
                a: Vector.run({
                    x: Math.cos(u_time * .15),
                    y: Math.sin(u_time * .1)
                })
            })
        });

        a = Vector.snoise({ vector: part1 }) * 3.1415;

        vel = Vector.run({
            x: Math.cos(a),
            y: Math.sin(a)
        });
        // DF += snoise(pos + vel) * .25 + .25;
        var posvel = Vector.add({
            collection: [pos, vel]
        });
        DF += Vector.snoise({ vector: posvel }) * .25 + .25;

        var z = Vector.smoothstep(.5, .6, Vector.fract({ value: DF }));

        return z;
    }
    static lavaLamp(ops) {
        var { time, x, y } = ops;
        var u_time = time;
        var DF = 0;
        var a = 0;
        var pos = Vector.run({
            x: x,
            y: y
        });
        var vel = Vector.run({ x: u_time * .01, y: u_time * .01 });
        DF += Vector.snoise({
            vector: Vector.add({
                collection: [
                    pos,
                    vel
                ]
            })
        }) * .25 + .25;

        // Add a random position
        // a = snoise(pos * vec2(cos(u_time * 0.15), sin(u_time * 0.1)) * 0.1) * 3.1415;
        var part1 = Vector.mul({
            a: pos,
            b: Vector.mul({
                factor: 0.1,
                a: Vector.run({
                    x: Math.cos(u_time * .15),
                    y: Math.sin(u_time * .1)
                })
            })
        });

        a = Vector.snoise({ vector: part1 }) * 3.1415;
        // vel = vec2(cos(a), sin(a));
        vel = Vector.run({
            x: Math.cos(a),
            y: Math.sin(a)
        });
        // DF += snoise(pos + vel) * .25 + .25;
        var posvel = Vector.add({
            collection: [pos, vel]
        });
        DF += Vector.snoise({ vector: posvel }) * .25 + .25;

        // color = vec3(smoothstep(.7, .75, fract(DF)));
        // = vec3(smoothstep(.7, .75, fract(DF)));
        var z = Vector.smoothstep(.7, .75, Vector.fract({ value: DF }));
        return z;
    }
}