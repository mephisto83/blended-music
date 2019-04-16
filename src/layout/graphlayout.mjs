import * as asdf from '../util/array'
import cola from 'webcola';
import Materials from '../movie/materials.mjs'
export default class Layout {
    static getNodes(mat) {
        return [...mat.definition.nodes]
    }
    static getLinks(mat) {
        return [...mat.definition.links]; s
    }
    static getConstraints(mat) {
        var nodes = [];
        var links = [];
        var constraints = [];
        var _links = Layout.getLinks(mat);
        var roots = Layout.getNodes(mat).filter(node => {
            return _links.filter(x => x.from === node.id).length === 0;
        });
        if (roots.length != 1) {
            throw 'more than 1 root : ' + roots.length;
        }
    }
    static getMatGroups(mat, level) {
        level = level || 0
        var result = {};
        result[mat.$name] = Math.max(result[mat.$name] || 0, level);
        for (var i in mat) {
            if (mat[i] instanceof Materials) {
                var res = Layout.getMatGroups(mat[i], level + 1)
                for (var j in res) {
                    if (result.hasOwnProperty(j)) {
                        result[j] = Math.max(result[j], res[j]);
                    }
                    else {
                        result[j] = res[j];
                    }
                }
            }
        }
        return result
    }
    static getMatNodes(mat, currentName) {
        var result = [];
        currentName = currentName || 0;
        if (!mat.$name) {
            mat.$name = currentName;
            mat.id = currentName;
            result.push({
                name: mat.$name,
                width: 150,
                height: 150,
                $ref: mat
            });
        }
        for (var i in mat) {
            if (mat[i] instanceof Materials) {
                currentName = currentName + 1;
                var res = Layout.getMatNodes(mat[i], currentName)
                res.map(r => {
                    result.push(r);
                });
            }
        }
        return result.unique(x => x.$ref);
    }
    static getMatLinks(mat) {
        var result = [];
        for (var i in mat) {
            if (mat[i] instanceof Materials) {
                result.push({
                    source: mat.$name,
                    target: mat[i].$name
                })
                var res = Layout.getMatLinks(mat[i])
                result.push(...res);
            }
        }
        return result;
    }
    static processMat(mat) {
        var _nodes = Layout.getMatNodes(mat);
        console.log(_nodes);
        var _groups = Layout.getMatGroups(mat);
        var groups;
        var groupCount = Math.max(...Object.keys(_groups).map(k => {
            return _groups[k]
        })) + 1;
        groups = [].interpolate(0, groupCount, x => {
            return { leaves: [] }
        });
        Object.keys(_groups).map(k => {
            groups[parseInt(_groups[k])].leaves.push(parseInt(k));
        });
        var constraints = groups.map(group => {
            return {
                axis: 'x',
                offsets: group.leaves.map(t => {
                    return {
                        node: t,
                        offset: 0
                    }
                }),
                type: 'alignment'
            }
        })
        var yconstraint = {
            axis: 'x',
            offsets: groups.map((group, i) => {
                return {
                    node: group.leaves[Math.floor(group.leaves.length / 2)],
                    offset: i * -200
                }
            }),
            type: 'alignment'
        };
        constraints = [...constraints, yconstraint]
        console.log(JSON.stringify(constraints, null, 4));
        var _links = Layout.getMatLinks(mat);
        // console.log(_links);

        let starts = 0, ticks = 0, ends = 0,
            layout = new cola.Layout()
                .handleDisconnected(false) // handle disconnected repacks the components which would hide any drift
                .linkDistance(1) // minimal link distance means nodes would overlap if not for...
                .avoidOverlaps(true) // force non-overlap
                .nodes([
                    ..._nodes.map(node => {
                        return node
                    })
                ])
                .links([
                    ..._links
                ])
                .groups(groups)
                .constraints(constraints)
                .on(cola.EventType.start, e => starts++)
                .on(cola.EventType.tick, e => ticks++)
                .on(cola.EventType.end, e => ends++);
        layout.start(); // first layout

        for (let i = 0; i < 10000; i++) {
            layout.tick()
        };

        layout._nodes.map(node => {
            var temp = _nodes.find(t => t.name === node.name);
            temp.$ref.location = temp.$ref.location || {};
            temp.$ref.location.x = node.x;
            temp.$ref.location.y = node.y;
        });

        return mat;
    }
    static process(mat) {
        var _links = Layout.getLinks(mat);
        var _nodes = Layout.getNodes(mat)
        let starts = 0, ticks = 0, ends = 0,
            layout = new cola.Layout()
                .handleDisconnected(false) // handle disconnected repacks the components which would hide any drift
                .linkDistance(1) // minimal link distance means nodes would overlap if not for...
                .avoidOverlaps(true) // force non-overlap
                .nodes([
                    ..._nodes.sort((a, b) => {
                        return a.id - b.id
                    }).map(node => {
                        return {
                            name: node.id,
                            width: node.dimensions.width,
                            height: node.dimensions.height
                        }
                    })
                ])
                .links([
                    ..._links.map(link => {
                        return { source: link.from, target: link.to }
                    })
                ])
                .on(cola.EventType.start, e => starts++)
                .on(cola.EventType.tick, e => ticks++)
                .on(cola.EventType.end, e => ends++);
        layout.start(); // first layout

        for (let i = 0; i < 100000; i++) {
            layout.tick()
        };

        console.log(mat);
        layout._nodes.map(node => {
            var temp = mat.definition.nodes.find(t => t.id === node.name);
            temp.location = temp.location || {};
            temp.location.x = node.x;
            temp.location.y = node.y;
        });

        return mat;
    }
    static layout() {
        const nodeSize = 20, threshold = 0.01;
        let starts = 0, ticks = 0, ends = 0,
            layout = new cola.Layout()
                .handleDisconnected(false) // handle disconnected repacks the components which would hide any drift
                .linkDistance(1) // minimal link distance means nodes would overlap if not for...
                .avoidOverlaps(true) // force non-overlap
                .links([
                    { source: 0, target: 1 },
                    { source: 1, target: 2 }
                ])
                .constraints([{
                    type: "alignment",
                    axis: "y",
                    offsets: [
                        { node: 0, offset: 0 },
                        { node: 1, offset: 0 },
                        { node: 2, offset: 0 },
                    ]
                }])
                .on(cola.EventType.start, e => starts++)
                .on(cola.EventType.tick, e => ticks++)
                .on(cola.EventType.end, e => ends++);
        layout.nodes().forEach((v, i) => {
            v.width = v.height = nodeSize;
            console.log(v);
        }) // square nodes
        layout.start(); // first layout

        for (let i = 0; i < 100; i++) {

            layout.tick()
        };

        return layout;
    }
}