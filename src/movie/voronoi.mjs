import Basic from './basic';
import V from '../tools/voronoi';
import { VoronoiWeb } from '../tools/voronoi';
import * as ProceduralNode from '../tools/math';
import Materials from './materials';
export default class VoronoiMovie extends Basic {
    constructor() {
        super();

        this.midi2dim = 100;
    }
    static info() {
        return {
            name: 'Voronoi Roots',
            version: '0.0.1'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new VoronoiMovie();

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
    createPath(pathConfig, name, level, ops) {
        ops = ops || {};
        var { sx = 1, sy = 1 } = ops;
        var parts = pathConfig.filter(x => x.a && x.b);
        var lastEdge = parts[parts.length - 1];
        var last = [lastEdge.b.x * sx, lastEdge.b.y * sy, 0, 0];
        var path = {
            name,
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            type: 'path',
            bevel_object: name + '-bevel',
            use_path: "false",
            points: [...parts.map(edge => {
                return [edge.a.x * sx, edge.a.y * sy, 0, 0]
            }), last],
        };
        var keyframes = [];
        keyframes.push({
            name: name + '-bevel',
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        });
        keyframes.push({
            name: name,
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        });

        var circle = {
            name: name + '-bevel',
            type: 'circle',
            scale: {
                //CUSTOPP //Customization opportunity
                x: 1 / Math.pow(ops.base_x || ops.base || 2, level),
                y: 1 / Math.pow(ops.base_y || ops.base || 2, level),
                z: 1 / Math.pow(ops.base_z || ops.base || 2, level)
            },
            position: {
                x: 0,
                y: 0,
                z: 0
            }
        };

        return {
            path,
            circle,
            keyframes
        }
    }
    constructMovie(raw) {
        var me = this;

        var objects = me.objects;

        var useWeb = true;
        if (useWeb) {

            var { edges } = VoronoiWeb.run({ height: 10, width: 10 });

            var { edges } = ProceduralNode.InterpolateEdge.run({
                edges,
                steps: 30
            });
            var { collection } = ProceduralNode.Map.run({
                collection: edges,
                function: (group) => {
                    var { edges } = ProceduralNode.WarpEdges.run({
                        edges: group,
                        transformation: {
                            y: function (x, y, z) {
                                return y + .1 * Math.sin(x) + .2 * Math.cos(2 * x);;
                            }
                        }
                    });
                    return edges;
                }
            });
            // Map the collection
            var { collection } = ProceduralNode.Map.run({
                collection: collection,
                function: (group) => {
                    // From edges => edge
                    var { edges } = ProceduralNode.ToEdge.run({
                        edges: group,
                        each: (edge) => {
                            // From edge to vector
                            var { edge } = ProceduralNode.ToVector.run({
                                edge,
                                each: (vector) => {
                                    // from vector to vector
                                    var { vector } = ProceduralNode.ToNumber.run({
                                        vector: vector,
                                        on: (x, y, z) => {
                                            var { a, b } = ProceduralNode.Noise.run({
                                                seed: 1,
                                                a: x,
                                                b: y
                                            });
                                            var math_res = ProceduralNode.MathFunction.run({
                                                a,
                                                b: .01,
                                                function: (c, d) => c * d
                                            })
                                            var math_res2 = ProceduralNode.MathFunction.run({
                                                a: b,
                                                b: .01,
                                                function: (c, d) => c * d
                                            })
                                            return ProceduralNode.Vector.run({
                                                x: x + math_res.a,
                                                y: y + math_res2.a,
                                                z
                                            });
                                        }
                                    });
                                    return vector;
                                }
                            });
                            return edge;
                        }
                    })
                    return edges;
                }
            });
            console.log(collection)

            collection.map((edge, pathindex) => {
                console.log(edge);
                var { path, circle, keyframes } = me.createPath(edge, `path-${pathindex}`, 10);
                objects.push(circle);
                objects.push(path);
                let keyframe = me.getKeyFrame(1);
                keyframe.objects.push(...keyframes);
            });

        }
        else {
            var res = this.createLevels([...(new Array(4))].map((_, i) => {
                return (i + 1) * 25;
            }), {
                    maximumPaths: 25,
                    bbox: { xl: 0, xr: 800, yt: 0, yb: 800 }
                });
            res.map((levelConfig, index) => {
                levelConfig.paths.paths.map((path, pathindex) => {
                    console.log(`path index ${pathindex}`)
                    var { path, circle, keyframes } = me.createPath(
                        path,
                        `path-${pathindex}-level-${levelConfig.level}-${index}`,
                        index + 1.1,
                        {
                            sx: 1 / 80,
                            sy: 1 / 80,
                            base: 4
                        });
                    objects.push(circle);
                    objects.push(path);
                    let keyframe = me.getKeyFrame(1);
                    keyframe.objects.push(...keyframes);
                });
            })
        }
        me.addLamps();
    }
    createNoteKeyFrame(note, name, ops) {
        var me = this;
        ops = ops || { trackCount: 1 };
        var y_ = me.toTimeToDimension(note.time);
        var x_ = me.midiToDimension(note.midi);
        var dim = .5;
        var z = 10 * (note.velocity || 0);
        var res = {
            name: name,
            position: {
                y: y_ + (dim / 2),
                x: x_,
                z: z
            }
        }

        return res;
    }
}