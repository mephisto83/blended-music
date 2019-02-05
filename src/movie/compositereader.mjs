import fs from 'fs';
import path from 'path';
import Util from '../util/util.mjs';

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function cleanName(name) {
    var illegalChars = '.- +<>|/(){}[]';
    var _name = name.split(' ').join('$');
    illegalChars.split('').map(y => {
        _name = _name.split(y).join('')
    });
    return _name
}

export default class CompositeReader {

    static async  readComposite(filePath, outpath, compositeclass = "CompositeClass") {
        var json = await Util.readJson(filePath);
        var illegalChars = '.- +<>|(){}[]';
        var { library, composite } = json;
        var materialNames = [];
        var lib = library.map(group => {
            var { name, value } = group;
            var _name = cleanName(name + 'Group');
            var { links, nodes, defaultInputs } = value;
            var groupInputNode = nodes.find(t => t.type === 'NodeGroupInput');
            var { outputs } = (groupInputNode || {});
            var conversion = {};
            var _outputs = {};
            var __outputs = {};
            var groupOutputNode = nodes.find(t => t.type === 'NodeGroupOutput');
            var _arguments = (outputs || []).filter(x => x.name).map((t, index) => {
                var name = `${lowerCaseFirstLetter(cleanName(t.name))}_${index}`;
                conversion[name] = t.socket_index;
                return name;
            });

            if (groupOutputNode) {
                var { inputs } = groupOutputNode;
                inputs.filter(t => t.name).map(t => {
                    _outputs[t.name] = t.type;
                    __outputs[t.name] = t.socket_index;
                })
            }
            var potentialInputs = []
            if (groupInputNode) {
                potentialInputs = [...groupInputNode.outputs];
            }

            var propSets = _arguments.map(arg => {
                return `material.${arg} = ${arg};
                `
            }).join('');

            materialNames.push(_name);
            const MaterialFuncTemplate = `
            static ${_name}_(args) {
                var {${_arguments.join()}} = args;
                return ${compositeclass}.${_name}(${_arguments.join()});
            }
            static ${_name}(${_arguments.join()}) {
                var material = new ${compositeclass}('${name}')
                material.type = 'GROUP';
                material.isGroup = true;
                material.conversion = ${JSON.stringify(conversion, null, 2)}
                material.outputs = ${JSON.stringify(_outputs, null, 2)}
                material.outputIndexes = ${JSON.stringify(__outputs, null, 2)}
                ${propSets}
                material.definition = ${JSON.stringify({
                links,
                nodes, defaultInputs
            }, null, 2)}
                return material;
            }
            `;

            return MaterialFuncTemplate;
        }).join(`
        `);

        var mat_lib = composite.map(material => {
            var { name, value } = material;
            var _name = name.split(' ').join('_');
            illegalChars.split('').map(y => {
                _name = _name.split(y).join('')
            });
            var { links, nodes } = value;
            var _arguments = [];

            var potentialInputs = [];
            var potentialOutputs = [];
            var conversion = {};
            var _outputs = {}

            nodes.map(nod => {
                nod.id = nod.child_def || nod.id;
            })
            nodes = nodes.sort((a, b) => a.id - b.id);

            nodes.map(node => {
                node.inputs.map(input => {
                    if (!links.find(link => {
                        return link.to === node.id && link.to_socket && input.socket_index === link.to_socket.socket_index
                    })) {


                        //if (node.type !== 'CompositorNodeComposite')
                        potentialInputs.push({
                            node,
                            id: node.id,
                            input
                        });
                    }
                });
                node.outputs.map(output => {
                    if (!links.find(link => {
                        return link.from === node.id && link.from_socket && output.socket_index === link.from_socket.socket_index
                    })) {
                        potentialOutputs.push({
                            id: node.id,
                            node,
                            output
                        });
                    }
                });
            });

            var _arguments = [];
            var pinputs = potentialInputs.map((pi, index) => {
                let { node, input } = pi;
                var node_name = node.node_name || node.name;
                var argname = `${lowerCaseFirstLetter(cleanName(`${node_name}${input.name}`))}_${index}`;
                _arguments.push(argname);
                conversion[argname] = {
                    node: `${node.name}`,
                    node_index: nodes.indexOf(node),
                    socket_index: input.socket_index,
                    input_index: index,
                    input: input.name
                };
                return `material.${argname} = ${argname};
                `;
            }).join('');

            // var poutputs = potentialOutputs.map(po => {
            //     let { node, input } = po;
            //     var node_name = node.node_name || node.name;
            //     _outputs[]
            // })


            var _out_put_node = nodes.find(x => x.type === 'CompositorNodeComposite');
            var __outputs = {};
            var ___outputs = {};
            _out_put_node.inputs.map(out_ins => {
                __outputs[out_ins.name] = out_ins.type;
                ___outputs[out_ins.name] = out_ins.socket_index;
            })
            // return `material.outputs = ${JSON.stringify(__outputs, null, 2)}
            // `
            var pOutputs = {
                //"name": "Group Output",
                //"options": {},
                //"type": "NodeGroupOutput"
            };

            Object.assign(_out_put_node, pOutputs)
            links = [...links.map(t => {
                // if (t.to === _out_put_node.id) {
                //     t.to_node = 'Group Output';
                // }
                return t;
            })];
            var inputGroupId = nodes.length;

            var pInputs = {
                "dimensions": {
                    "height": 108,
                    "width": 140
                },
                "id": inputGroupId,
                "inputs": [],
                "location": {
                    "x": -620,
                    "y": 0
                },
                "name": "Group Input",
                "options": {},
                "outputs": [
                    ...potentialInputs.map(x => {
                        return {
                            ...x.input
                        }
                    })
                ],
                "type": "NodeGroupInput"
            };
            // nodes.push(pInputs);
            links = [...links];
            materialNames.push(_name);

            const MaterialFuncTemplate = `
            static ${_name}_(args) {
                var {${_arguments.join()}} = args;
                return ${compositeclass}.${_name}(${_arguments.join()});
            }
            static ${_name}(${_arguments.join()}) {
                var material = new ${compositeclass}('${name}')
                material.isGroup = false;
                material.type = 'GROUP';
                material.conversion = ${JSON.stringify(conversion, null, 2)};
                material.outputs = ${JSON.stringify(__outputs, null, 2)};
                material.outputIndexes = ${JSON.stringify(___outputs, null, 2)};
                ${pinputs}
                material.definition = ${JSON.stringify({
                links, nodes, defaultInputs: [...potentialInputs.map((x, index) => {
                    return {
                        ...x.input,
                        node_index: nodes.indexOf(x.node)

                        //,
                        // name: x.input.name,
                        // type: x.input.type,
                        // socket_index: x.input.socket_index
                    }
                })]
            }, null, 2)}
                return material;
            }
            `;

            return MaterialFuncTemplate;
        }).join(`
        `);
        var grouptemplate = `
        import Materials from '../materials';
export default class ${compositeclass} extends Materials {
    constructor(name) {
        super(name);
        this.name = name;
        this.type = null;
    }
    static CompositeNames(){
        return ${JSON.stringify(materialNames)}
    }
    static Types() {
       var res = super.Types();
        return {
            ...res
        }
    }

    ${lib}
    ${mat_lib}
}`
        await Util.writeFile(outpath, grouptemplate);

        return lib;
    }
}