import Basic from './basic';
import V from '../tools/voronoi';
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
    getAngle(e1, e2) {
        //find vector components
        var dAx = e1.vb.x - e1.va.x;// A2x - A1x;
        var dAy = e1.vb.y - e1.va.y;// A2y - A1y;
        var dBx = e2.vb.x - e2.va.x;// B2x - B1x;
        var dBy = e2.vb.y - e2.va.y;// B2y - B1y;

        var angle = Math.atan2(dAx * dBy - dAy * dBx, dAx * dBx + dAy * dBy);
        if (angle < 0) { angle = angle * -1; }
        var degree_angle = angle * (180 / Math.PI);

        return degree_angle;
    }
    getEdgeLength(edge) {
        return Math.sqrt(Math.pow(edge.va.x - edge.vb.x, 2) + Math.pow(edge.va.y - edge.vb.y, 2))
    }
    getUnusedEdge(edges, usedPoints, filter, ops, lastEdge) {
        ops = ops || {};
        var me = this;
        filter = filter || (() => (true));
        return edges.filter(edge => {
            if (ops && ops.minimumEdgeAngle && lastEdge) {
                var angle = me.getAngle(lastEdge, edge);
                if (ops.minimumEdgeAngle > angle) {
                    return false;
                }
            }
            if (ops && ops.maximumEdgeAngle && lastEdge) {
                if (ops.maximumEdgeAngle <= me.getAngle(lastEdge, edge)) {
                    return false;
                }
            }
            if (ops && ops.maximumSegmentLength) {
                // console.log(`ops.maximumSegmentLength: ${ops.maximumSegmentLength}`);
                // console.log(`edge length: ${Math.sqrt(Math.pow(edge.va.x - edge.vb.x, 2), Math.pow(edge.va.y - edge.vb.y, 2))}`);
                if (ops.maximumSegmentLength < me.getEdgeLength(edge)) {
                    return false;
                }
            }
            return true;
        }).filter(edge => {
            if (edge.va) {
                var alreadyUsed = usedPoints.find(point => {
                    return edge.va.x === point.x && edge.va.y === point.y;
                });
                return !alreadyUsed;
            }
            else {
                return false;
            }
        }).random().find(filter);
    }
    getPaths(seeds, history, ops) {
        history = history || { usedPoints: [] };
        ops = ops || {};
        var { minimumLength = 2 } = ops;
        var result = { paths: [] };
        console.log(`getting paths`);
        var tries = (ops.maximumPaths || 2000) * 10;
        do {
            tries--;
            var should = false;
            if (ops.maximumPaths && result.paths.length > ops.maximumPaths) {
                break;
            }
            var pathRes = this.getPath(seeds, history, ops);
            var { history } = pathRes;

            if (pathRes && pathRes.path && pathRes.path.length) {
                if (minimumLength) {
                    if (minimumLength <= pathRes.path.length) {
                        result.paths.push(pathRes.path);
                    }
                    else {
                        history.usedPoints = history.usedPoints.filter(x => {
                            return !pathRes.path.find(edge => {
                                return edge.va.x === x.x && edge.vb.y === x.y;
                            })
                        })
                    }
                }
                else {
                    result.paths.push(pathRes.path);
                }
                should = true;
            }
        } while (tries && should);
        result.history = history;
        return result;
    }
    getPath(seeds, history, ops) {
        var me = this;
        history = history || { usedPoints: [] };
        ops = ops || {}
        var { diagram } = seeds;
        var { edges } = diagram;
        var startingEdge = this.getUnusedEdge(edges, history.usedPoints, null, ops);
        var result = [];
        console.log(`getting path;`)
        if (startingEdge) {
            history.usedPoints.push(startingEdge.va);
            var endPoint = startingEdge.vb;
            result.push(startingEdge);
            var lastEdge = null;
            do {
                var moreedges = false;
                var nextEdge = this.getUnusedEdge(edges, history.usedPoints, (_edge) => {
                    return _edge.va.x === endPoint.x && _edge.va.y == endPoint.y;
                }, ops, lastEdge);
                if (ops && ops.maximumLength && ops.maximumLength < result.length) {
                    moreedges = false
                }
                else if (nextEdge) {
                    console.log(`me.getEdgeLength(edge): ${me.getEdgeLength(nextEdge)}`)
                    history.usedPoints.push(nextEdge.va);
                    endPoint = nextEdge.vb;
                    result.push(nextEdge);
                    lastEdge = nextEdge;
                    moreedges = true;
                }

            } while (moreedges);
            if (nextEdge)
                history.usedPoints.push(nextEdge.vb);

        }
        console.log(`the path is ${result.length} long.`)
        return {
            path: result,
            history
        };
    }
    createWeb() {
        var Voronoi = V();
        var voronoi = new Voronoi();
        var bbox = { xl: 0, xr: 800, yt: 0, yb: 800 }; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
        var sites = []; // [{ x: 200, y: 200 }, { x: 50, y: 250 }, { x: 400, y: 100 } /* , ... */];
        var diagram = null;
        var result = {};
        var Voronoi = V();
        var voronoi = new Voronoi();

        console.log(`creating levels`)
        var seed = this.randomSites(voronoi, bbox, diagram, 500, sites);

        return seed.diagram.edges;

    }
    createVoronoiSeed() {
        var Voronoi = V();
        var voronoi = new Voronoi();
        var bbox = { xl: 0, xr: 800, yt: 0, yb: 800 }; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
        var sites = []; // [{ x: 200, y: 200 }, { x: 50, y: 250 }, { x: 400, y: 100 } /* , ... */];
        var {
            diagram,
            sites,
            bbox
        } = this.randomSites(voronoi, bbox, null, 2, sites);
        // a 'vertex' is an object exhibiting 'x' and 'y' properties. The
        // Voronoi object will add a unique 'voronoiId' property to all
        // sites. The 'voronoiId' can be used as a key to lookup the associated cell
        // in diagram.cells.

        return {
            diagram,
            sites,
            bbox
        }
    }
    createLevels(levels, ops) {
        ops = ops || {};
        var sites = []; // [{ x: 200, y: 200 }, { x: 50, y: 250 }, { x: 400, y: 100 } /* , ... */];
        var bbox = ops.bbox || { xl: 0, xr: 800, yt: 0, yb: 800 }; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
        var sites = []; // [{ x: 200, y: 200 }, { x: 50, y: 250 }, { x: 400, y: 100 } /* , ... */];
        var diagram = null;
        var result = {};
        var Voronoi = V();
        var voronoi = new Voronoi();

        console.log(`creating levels`)
        return levels.map((level, i) => {
            console.log(`creating ${level}`)
            var seed = this.randomSites(voronoi, bbox, diagram, level, sites);
            diagram = seed.diagram;
            sites = seed.sites;
            bbox = seed.bbox;

            var paths = this.getPaths(seed, null, ops);

            return {
                level,
                paths
            }
        });

    }
    randomSites(voronoi, bbox, diagram, n, sites, ops) {
        sites = sites || [];
        ops = ops || {};

        var { xo = 0, yo = 0, dx = 800, dy = 800 } = ops;
        for (var i = sites.length; i < n; i++) {
            sites.push({
                x: xo + Math.random() * dx + Math.random() / dx,
                y: yo + Math.random() * dy + Math.random() / dy
            });
        }
        if (diagram) {
            voronoi.recycle(diagram);
        }
        diagram = voronoi.compute(sites, bbox);

        return {
            diagram,
            sites,
            bbox
        }
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
    createPath(pathConfig, name, level) {
        var parts = pathConfig.filter(x => x.va && x.vb);
        var lastEdge = parts[parts.length - 1];
        var last = [lastEdge.vb.x, lastEdge.vb.y, 0, 0];
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
                return [edge.va.x, edge.va.y, 0, 0]
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
                x: 1 / Math.pow(2, level),
                y: 1 / Math.pow(2, level),
                z: 1 / Math.pow(2, level)
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

        var useWeb = false;
        if (useWeb) {

            var edges = this.createWeb();
            edges.map((edge, pathindex) => {
                var { path, circle, keyframes } = me.createPath([edge], `path-${pathindex}`, 10);
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
                    var { path, circle, keyframes } = me.createPath(path, `path-${pathindex}-level-${levelConfig.level}-${index}`, index + 1);
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