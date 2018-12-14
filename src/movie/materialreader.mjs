import fs from 'fs';
import path from 'path';
import Util from '../util/util.mjs';

function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function cleanName(name) {
    var illegalChars = '.- +<>|/(){}[]';
    var _name = name.split(' ').join('_');
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
        var lib = library.map(group => {
            var { name, value } = group;
            var _name = cleanName(name);
            var { links, nodes } = value;
            var groupInputNode = nodes.find(t => t.type === 'GROUP_INPUT');
            var { outputs } = groupInputNode;
            var _arguments = outputs.filter(x => x.name).map(t => {
                illegalChars.split('').map(y => {
                    t.name = t.name.split(y).join('')
                })
                return lowerCaseFirstLetter(t.name);
            });


            var propSets = _arguments.map(arg => {
                return `material.${arg} = ${arg};
                `
            }).join('');


            const MaterialFuncTemplate = `
            static ${_name}(${_arguments.join()}) {
                var material = new GroupMaterials('${name}')
                material.type = 'GROUP';
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
            nodes.map(node => {
                node.inputs.map(input => {
                    if (!links.find(link => {
                        return link.to_node === node.name && link.to_socket && input.name === link.to_socket.name
                    })) {
                        potentialInputs.push({
                            node,
                            input
                        });
                    }
                });
            });

            var propSets = _arguments.map(arg => {
                return `material.${arg.name} = ${arg.name} ${t.defaultvalue !== undefined && t.defaultvalue !== null ? ` || ${JSON.stringify(t.defaultvalue)}` : ''};
                `
            }).join('');

            var pinputs = potentialInputs.map(pi => {
                let { node, input } = pi;
                return `material.${cleanName(`${node.name}${input.name}`)} = ${lowerCaseFirstLetter(cleanName(`${node.name}${input.name}`))};
                `;
            }).join('');
            const MaterialFuncTemplate = `
            static ${_name}(${_arguments.join()}) {
                var material = new Procedural4Materials('${name}')
                material.type = '${name}';
                ${propSets}
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
        this.name = name;
        this.type = null;
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