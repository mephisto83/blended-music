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

export default class MaterialReader {

    static async  readMaterial(filePath, outpath) {
        var json = await Util.readJson(filePath);
        var illegalChars = '.- +<>|(){}[]';
        var { library, materials } = json;
        var materialNames = [];
        var lib = library.map(group => {
            var { name, value } = group;
            var _name = cleanName(name + 'Group');
            var { links, nodes } = value;
            var groupInputNode = nodes.find(t => t.type === 'NodeGroupInput');
            var { outputs } = groupInputNode;
            var conversion = {};
            var _outputs = {};
            var groupOutputNode = nodes.find(t => t.type === 'NodeGroupOutput');

            var _arguments = outputs.filter(x => x.name).map(t => {
                var name = lowerCaseFirstLetter(cleanName(t.name));
                conversion[name] = t.name;
                return name;
            });

            if (groupOutputNode) {
                var { inputs } = groupOutputNode;
                inputs.filter(t => t.name).map(t => {
                    _outputs[t.name] = t.type;
                })
            }

            var propSets = _arguments.map(arg => {
                return `material.${arg} = ${arg};
                `
            }).join('');

            materialNames.push(_name);
            const MaterialFuncTemplate = `
            static ${_name}(${_arguments.join()}) {
                var material = new GroupMaterials('${name}')
                material.type = 'GROUP';
                material.isGroup = true;
                material.conversion = ${JSON.stringify(conversion, null, 2)}
                material.outputs = ${JSON.stringify(_outputs, null, 2)}
                ${propSets}
                material.definition = ${JSON.stringify({ links, nodes }, null, 2)}
                return material;
            }
            `;

            return MaterialFuncTemplate;
        }).join(`
        `);

        var mat_lib = materials.map(material => {
            var { name, value } = material;
            var _name = name.split(' ').join('_');
            illegalChars.split('').map(y => {
                _name = _name.split(y).join('')
            });
            var { links, nodes } = value;
            // var groupInputNode = nodes.find(t => t.type === 'GROUP_INPUT');
            // var { outputs } = groupInputNode;
            // var _arguments = outputs.filter(x => x.name).map(t => {
            //     illegalChars.split('').map(y => {
            //         t.name = t.name.split(y).join('')
            //     })
            //     return { name: lowerCaseFirstLetter(t.name), defaultvalue: t.defaultvalue || null };
            // })
            var _arguments = [];

            var potentialInputs = [];
            var potentialOutputs = [];
            var conversion = {};
            var _outputs = {}

            nodes.map(nod => {
                nod.id = nod.child_def || nod.id;
            })

            nodes.map(node => {
                node.inputs.map(input => {
                    if (!links.find(link => {
                        return link.to === node.id && link.to_socket && input.name === link.to_socket.name
                    })) {
                        if (node.type !== 'ShaderNodeOutputMaterial')
                            potentialInputs.push({
                                node,
                                id: node.id,
                                input
                            });
                    }
                });
                node.outputs.map(output => {
                    if (!links.find(link => {
                        return link.from === node.id && link.from_socket && output.name === link.from_socket.name
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
            var pinputs = potentialInputs.map(pi => {
                let { node, input } = pi;
                var node_name = node.node_name || node.name;
                var argname = lowerCaseFirstLetter(cleanName(`${node_name}${input.name}`));
                _arguments.push(argname);
                conversion[argname] = {
                    node: `${node.name}`,
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


            var _out_put_node = nodes.find(x => x.type === 'ShaderNodeOutputMaterial');

            var pOutputs = {
                "name": "Group Output",
                "options": {},
                "type": "NodeGroupOutput"
            };

            Object.assign(_out_put_node, pOutputs)
            links = [...links.map(t => {
                if (t.to === _out_put_node.id) {
                    t.to_node = 'Group Output';
                }
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
                            name: x.input.name,
                            type: x.input.type
                        }
                    })
                ],
                "type": "NodeGroupInput"
            };
            nodes.push(pInputs);
            links = [...links, ...potentialInputs.map(x => {
                return {
                    "from": inputGroupId,
                    "from_node": "Group Input",
                    "o": "true",
                    "from_socket": {
                        "name": x.input.name,
                        "type": x.input.type
                    },
                    "to": x.id,
                    "to_node": x.name,
                    "to_socket": {
                        "name": x.input.name,
                        "type": x.input.type
                    }
                };
            })];
            nodes = nodes.sort((a, b) => a.id - b.id);
            materialNames.push(_name);

            const MaterialFuncTemplate = `
            static ${_name}(${_arguments.join()}) {
                var material = new GroupMaterials('${name}')
                material.isGroup = true;
                material.type = 'GROUP';
                material.conversion = ${JSON.stringify(conversion, null, 2)}
                ${pinputs}
                material.definition = ${JSON.stringify({ links, nodes }, null, 2)}
                return material;
            }
            `;

            return MaterialFuncTemplate;
        }).join(`
        `);
        var grouptemplate = `
        import Materials from './materials';
export default class GroupMaterials extends Materials {
    constructor(name) {
        super(name);
        this.name = name;
        this.type = null;
    }
    static MaterialNames(){
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