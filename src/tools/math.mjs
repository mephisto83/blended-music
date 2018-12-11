import * as rando from './random.mjs';

export class Lerp {
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
                console.log(edge);
                console.log(res[res.length - 1])
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
            collection: collection.map(item => {
                return ops.function(item);
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


export class Face {
    static run(ops) {
        ops = ops || {};
        var { face, center = Vector.run({}) } = ops;
        return {
            _type: Types.FACE,
            center,
            ...Map.run({
                collection: face,
                function: (vector) => {
                    return Vector.run({
                        ...vector
                    })
                }
            })
        }
    }
}

export function VectorDistance(v1, v2) {
    return Math.sqrt(Math.pow(v1.x - v2.x, 2), Math.pow(v1.y - v2.y, 2), Math.pow(v1.z - v2.z, 2))
}

export class Edge {
    static run(ops) {
        ops = ops || {};

        return {
            _type: Types.EDGE,
            a: Vector.run(ops.a),
            b: Vector.run(ops.b)
        }
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
    static run(ops) {
        ops = ops || {};

        return {
            _type: Types.VECTOR,
            x: ops.x || 0,
            y: ops.y || 0,
            z: ops.z || 0
        }
    }
}