
import Materials from './materials';
export default class GroupMaterials extends Materials {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = null;
  }
  static MaterialNames() {
    return ["Checker$MetalGroup", "Checker_Metal_Mat", "Material"]
  }
  static Types() {
    var res = super.Types();
    return {
      ...res
    }
  }


  static Checker$MetalGroup(color1, color2) {
    var material = new GroupMaterials('Checker Metal')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "color1": 0,
      "color2": 1
    }
    material.outputs = {
      "Shader": "NodeSocketShader"
    }
    material.outputIndexes = {
      "Shader": 0
    }
    material.color1 = color1;
    material.color2 = color2;

    material.definition = {
      "links": [
        {
          "from": 2,
          "from_node": "Principled BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 1,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 2,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 1,
          "from_node": "Mix Shader",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 0,
          "to_node": "Material Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 7,
          "from_node": "Principled BSDF.001",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 1,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 3,
          "from_node": "Checker Texture.001",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 1,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 4,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 7,
          "to_node": "Principled BSDF.001",
          "to_socket": {
            "name": "Metallic",
            "socket_index": 4,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 4,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 7,
          "to_node": "Principled BSDF.001",
          "to_socket": {
            "name": "Specular",
            "socket_index": 5,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 4,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 5,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 7,
          "to_node": "Principled BSDF.001",
          "to_socket": {
            "name": "Clearcoat",
            "socket_index": 12,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 5,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Metallic",
            "socket_index": 4,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 5,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Specular",
            "socket_index": 5,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color1",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 7,
          "to_node": "Principled BSDF.001",
          "to_socket": {
            "name": "Base Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "socket_index": 1,
            "type": "NodeSocketColor"
          },
          "to": 2,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Base Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 1,
          "from_node": "Mix Shader",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 6,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 119.03630065917969,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "name": "Surface",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Volume",
              "socket_index": 1,
              "type": "NodeSocketShader"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Displacement",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 511.13568115234375,
            "y": 172.0363006591797
          },
          "name": "Material Output",
          "options": {},
          "outputs": [],
          "type": "ShaderNodeOutputMaterial"
        },
        {
          "dimensions": {
            "height": 119.41487121582031,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "name": "Shader",
              "socket_index": 1,
              "type": "NodeSocketShader"
            },
            {
              "name": "Shader",
              "socket_index": 2,
              "type": "NodeSocketShader"
            }
          ],
          "location": {
            "x": 239.35980224609375,
            "y": 162.4148712158203
          },
          "name": "Mix Shader",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeMixShader"
        },
        {
          "dimensions": {
            "height": 529.6696166992188,
            "width": 240
          },
          "distribution": "GGX",
          "id": 2,
          "inputs": [
            {
              "default_value": [
                0.022711284458637238,
                0,
                0.8000000715255737,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Subsurface",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                0.20000000298023224,
                0.10000000149011612
              ],
              "name": "Subsurface Radius",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Subsurface Color",
              "socket_index": 3,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0.04285728931427002,
              "name": "Metallic",
              "socket_index": 4,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.08571428060531616,
              "name": "Specular",
              "socket_index": 5,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Specular Tint",
              "socket_index": 6,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Roughness",
              "socket_index": 7,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic",
              "socket_index": 8,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic Rotation",
              "socket_index": 9,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Sheen",
              "socket_index": 10,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Sheen Tint",
              "socket_index": 11,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Clearcoat",
              "socket_index": 12,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.029999999329447746,
              "name": "Clearcoat Roughness",
              "socket_index": 13,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1.4500000476837158,
              "name": "IOR",
              "socket_index": 14,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Transmission",
              "socket_index": 15,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Transmission Roughness",
              "socket_index": 16,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 17,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Clearcoat Normal",
              "socket_index": 18,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Tangent",
              "socket_index": 19,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": -253.32217407226562,
            "y": 50.669612884521484
          },
          "name": "Principled BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfPrincipled"
        },
        {
          "dimensions": {
            "height": 163.5744171142578,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color1",
              "socket_index": 1,
              "type": "NodeSocketColor"
            },
            {
              "default_value": [
                0.20000000298023224,
                0.20000000298023224,
                0.20000000298023224,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 5,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -805.6700439453125,
            "y": 197.5744171142578
          },
          "name": "Checker Texture.001",
          "options": {},
          "outputs": [
            {
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "name": "Fac",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "type": "ShaderNodeTexChecker"
        },
        {
          "dimensions": {
            "height": 158.0225830078125,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 1,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Detail",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1366.79541015625,
            "y": -173.9774169921875
          },
          "name": "Noise Texture",
          "options": {},
          "outputs": [
            {
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "name": "Fac",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "type": "ShaderNodeTexNoise"
        },
        {
          "dimensions": {
            "height": 150.67257690429688,
            "width": 140
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1146.7952880859375,
            "y": -295.3274230957031
          },
          "name": "Math",
          "operation": "MULTIPLY",
          "options": {},
          "outputs": [
            {
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeMath",
          "use_clamp": false
        },
        {
          "dimensions": {
            "height": 65.12348937988281,
            "width": 140
          },
          "id": 6,
          "inputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 711.1357421875,
            "y": -48.87650680541992
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 528.8631591796875,
            "width": 240
          },
          "distribution": "GGX",
          "id": 7,
          "inputs": [
            {
              "default_value": [
                0.8000000715255737,
                0.6884651780128479,
                0.5692787170410156,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Subsurface",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                0.20000000298023224,
                0.10000000149011612
              ],
              "name": "Subsurface Radius",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Subsurface Color",
              "socket_index": 3,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0.5476190447807312,
              "name": "Metallic",
              "socket_index": 4,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Specular",
              "socket_index": 5,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Specular Tint",
              "socket_index": 6,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Roughness",
              "socket_index": 7,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic",
              "socket_index": 8,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic Rotation",
              "socket_index": 9,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Sheen",
              "socket_index": 10,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Sheen Tint",
              "socket_index": 11,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Clearcoat",
              "socket_index": 12,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.029999999329447746,
              "name": "Clearcoat Roughness",
              "socket_index": 13,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1.4500000476837158,
              "name": "IOR",
              "socket_index": 14,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Transmission",
              "socket_index": 15,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Transmission Roughness",
              "socket_index": 16,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 17,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Clearcoat Normal",
              "socket_index": 18,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Tangent",
              "socket_index": 19,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": -894.9328002929688,
            "y": 5.863137245178223
          },
          "name": "Principled BSDF.001",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfPrincipled"
        },
        {
          "dimensions": {
            "height": 91.12348937988281,
            "width": 140
          },
          "id": 8,
          "inputs": [],
          "location": {
            "x": -1566.79541015625,
            "y": -48.87650680541992
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "name": "Color1",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "name": "Color2",
              "socket_index": 1,
              "type": "NodeSocketColor"
            },
            {
              "name": "",
              "socket_index": 2,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.8000000715255737,
            0.6884651780128479,
            0.5692787170410156,
            1
          ],
          "name": "Color1",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": [
            0.022711284458637238,
            0,
            0.8000000715255737,
            1
          ],
          "name": "Color2",
          "socket_index": 1,
          "type": "NodeSocketColor"
        }
      ]
    }
    return material;
  }


  static Checker_Metal_Mat(checker$MetalColor1, checker$MetalColor2) {
    var material = new GroupMaterials('Checker Metal Mat')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "checker$MetalColor1": {
        "node": "Group",
        "socket_index": 0,
        "input": "Color1"
      },
      "checker$MetalColor2": {
        "node": "Group",
        "socket_index": 1,
        "input": "Color2"
      }
    };
    material.outputs = {
      "Surface": "NodeSocketShader",
      "Volume": "NodeSocketShader",
      "Displacement": "NodeSocketVector"
    };
    material.outputIndexes = {
      "Surface": 0,
      "Volume": 1,
      "Displacement": 2
    };
    material.checker$MetalColor1 = checker$MetalColor1;
    material.checker$MetalColor2 = checker$MetalColor2;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Group",
          "from_node_name": "Checker Metal",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 0,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color1",
            "type": "NodeSocketColor",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Color1",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 1
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 119.8861083984375,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "name": "Surface",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Volume",
              "socket_index": 1,
              "type": "NodeSocketShader"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Displacement",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 201.75674438476562,
            "y": 272.8861083984375
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 127.03440856933594,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": [
                0.8000000715255737,
                0.6884651780128479,
                0.5692787170410156,
                1
              ],
              "name": "Color1",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": [
                0.022711284458637238,
                0,
                0.8000000715255737,
                1
              ],
              "name": "Color2",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -178.98153686523438,
            "y": 147.03440856933594
          },
          "name": "Group",
          "node_name": "Checker Metal",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0.8000000715255737,
                0.6884651780128479,
                0.5692787170410156,
                1
              ],
              "name": "Color1",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": [
                0.022711284458637238,
                0,
                0.8000000715255737,
                1
              ],
              "name": "Color2",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.8000000715255737,
            0.6884651780128479,
            0.5692787170410156,
            1
          ],
          "name": "Color1",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": [
            0.022711284458637238,
            0,
            0.8000000715255737,
            1
          ],
          "name": "Color2",
          "socket_index": 1,
          "type": "NodeSocketColor"
        }
      ]
    }
    return material;
  }


  static Material(principled$BSDFBase$Color, principled$BSDFSubsurface, principled$BSDFSubsurface$Radius, principled$BSDFSubsurface$Color, principled$BSDFMetallic, principled$BSDFSpecular, principled$BSDFSpecular$Tint, principled$BSDFRoughness, principled$BSDFAnisotropic, principled$BSDFAnisotropic$Rotation, principled$BSDFSheen, principled$BSDFSheen$Tint, principled$BSDFClearcoat, principled$BSDFClearcoat$Roughness, principled$BSDFIOR, principled$BSDFTransmission, principled$BSDFTransmission$Roughness, principled$BSDFNormal, principled$BSDFClearcoat$Normal, principled$BSDFTangent) {
    var material = new GroupMaterials('Material')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "principled$BSDFBase$Color": {
        "node": "Principled BSDF",
        "socket_index": 0,
        "input": "Base Color"
      },
      "principled$BSDFSubsurface": {
        "node": "Principled BSDF",
        "socket_index": 1,
        "input": "Subsurface"
      },
      "principled$BSDFSubsurface$Radius": {
        "node": "Principled BSDF",
        "socket_index": 2,
        "input": "Subsurface Radius"
      },
      "principled$BSDFSubsurface$Color": {
        "node": "Principled BSDF",
        "socket_index": 3,
        "input": "Subsurface Color"
      },
      "principled$BSDFMetallic": {
        "node": "Principled BSDF",
        "socket_index": 4,
        "input": "Metallic"
      },
      "principled$BSDFSpecular": {
        "node": "Principled BSDF",
        "socket_index": 5,
        "input": "Specular"
      },
      "principled$BSDFSpecular$Tint": {
        "node": "Principled BSDF",
        "socket_index": 6,
        "input": "Specular Tint"
      },
      "principled$BSDFRoughness": {
        "node": "Principled BSDF",
        "socket_index": 7,
        "input": "Roughness"
      },
      "principled$BSDFAnisotropic": {
        "node": "Principled BSDF",
        "socket_index": 8,
        "input": "Anisotropic"
      },
      "principled$BSDFAnisotropic$Rotation": {
        "node": "Principled BSDF",
        "socket_index": 9,
        "input": "Anisotropic Rotation"
      },
      "principled$BSDFSheen": {
        "node": "Principled BSDF",
        "socket_index": 10,
        "input": "Sheen"
      },
      "principled$BSDFSheen$Tint": {
        "node": "Principled BSDF",
        "socket_index": 11,
        "input": "Sheen Tint"
      },
      "principled$BSDFClearcoat": {
        "node": "Principled BSDF",
        "socket_index": 12,
        "input": "Clearcoat"
      },
      "principled$BSDFClearcoat$Roughness": {
        "node": "Principled BSDF",
        "socket_index": 13,
        "input": "Clearcoat Roughness"
      },
      "principled$BSDFIOR": {
        "node": "Principled BSDF",
        "socket_index": 14,
        "input": "IOR"
      },
      "principled$BSDFTransmission": {
        "node": "Principled BSDF",
        "socket_index": 15,
        "input": "Transmission"
      },
      "principled$BSDFTransmission$Roughness": {
        "node": "Principled BSDF",
        "socket_index": 16,
        "input": "Transmission Roughness"
      },
      "principled$BSDFNormal": {
        "node": "Principled BSDF",
        "socket_index": 17,
        "input": "Normal"
      },
      "principled$BSDFClearcoat$Normal": {
        "node": "Principled BSDF",
        "socket_index": 18,
        "input": "Clearcoat Normal"
      },
      "principled$BSDFTangent": {
        "node": "Principled BSDF",
        "socket_index": 19,
        "input": "Tangent"
      }
    };
    material.outputs = {
      "Surface": "NodeSocketShader",
      "Volume": "NodeSocketShader",
      "Displacement": "NodeSocketVector"
    };
    material.outputIndexes = {
      "Surface": 0,
      "Volume": 1,
      "Displacement": 2
    };
    material.principled$BSDFBase$Color = principled$BSDFBase$Color;
    material.principled$BSDFSubsurface = principled$BSDFSubsurface;
    material.principled$BSDFSubsurface$Radius = principled$BSDFSubsurface$Radius;
    material.principled$BSDFSubsurface$Color = principled$BSDFSubsurface$Color;
    material.principled$BSDFMetallic = principled$BSDFMetallic;
    material.principled$BSDFSpecular = principled$BSDFSpecular;
    material.principled$BSDFSpecular$Tint = principled$BSDFSpecular$Tint;
    material.principled$BSDFRoughness = principled$BSDFRoughness;
    material.principled$BSDFAnisotropic = principled$BSDFAnisotropic;
    material.principled$BSDFAnisotropic$Rotation = principled$BSDFAnisotropic$Rotation;
    material.principled$BSDFSheen = principled$BSDFSheen;
    material.principled$BSDFSheen$Tint = principled$BSDFSheen$Tint;
    material.principled$BSDFClearcoat = principled$BSDFClearcoat;
    material.principled$BSDFClearcoat$Roughness = principled$BSDFClearcoat$Roughness;
    material.principled$BSDFIOR = principled$BSDFIOR;
    material.principled$BSDFTransmission = principled$BSDFTransmission;
    material.principled$BSDFTransmission$Roughness = principled$BSDFTransmission$Roughness;
    material.principled$BSDFNormal = principled$BSDFNormal;
    material.principled$BSDFClearcoat$Normal = principled$BSDFClearcoat$Normal;
    material.principled$BSDFTangent = principled$BSDFTangent;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Principled BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 0,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Base Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Base Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface Radius",
            "type": "NodeSocketVector",
            "socket_index": 2
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface Radius",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface Color",
            "type": "NodeSocketColor",
            "socket_index": 3
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface Color",
            "type": "NodeSocketColor",
            "socket_index": 3
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Metallic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          },
          "to": 1,
          "to_socket": {
            "name": "Metallic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Specular",
            "type": "NodeSocketFloatFactor",
            "socket_index": 5
          },
          "to": 1,
          "to_socket": {
            "name": "Specular",
            "type": "NodeSocketFloatFactor",
            "socket_index": 5
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Specular Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 6
          },
          "to": 1,
          "to_socket": {
            "name": "Specular Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 6
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 7
          },
          "to": 1,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 7
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Anisotropic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 8
          },
          "to": 1,
          "to_socket": {
            "name": "Anisotropic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 8
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Anisotropic Rotation",
            "type": "NodeSocketFloatFactor",
            "socket_index": 9
          },
          "to": 1,
          "to_socket": {
            "name": "Anisotropic Rotation",
            "type": "NodeSocketFloatFactor",
            "socket_index": 9
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sheen",
            "type": "NodeSocketFloatFactor",
            "socket_index": 10
          },
          "to": 1,
          "to_socket": {
            "name": "Sheen",
            "type": "NodeSocketFloatFactor",
            "socket_index": 10
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sheen Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 11
          },
          "to": 1,
          "to_socket": {
            "name": "Sheen Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 11
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat",
            "type": "NodeSocketFloatFactor",
            "socket_index": 12
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat",
            "type": "NodeSocketFloatFactor",
            "socket_index": 12
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 13
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 13
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 14
          },
          "to": 1,
          "to_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 14
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Transmission",
            "type": "NodeSocketFloatFactor",
            "socket_index": 15
          },
          "to": 1,
          "to_socket": {
            "name": "Transmission",
            "type": "NodeSocketFloatFactor",
            "socket_index": 15
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Transmission Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 16
          },
          "to": 1,
          "to_socket": {
            "name": "Transmission Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 16
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 17
          },
          "to": 1,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 17
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat Normal",
            "type": "NodeSocketVector",
            "socket_index": 18
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat Normal",
            "type": "NodeSocketVector",
            "socket_index": 18
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Tangent",
            "type": "NodeSocketVector",
            "socket_index": 19
          },
          "to": 1,
          "to_socket": {
            "name": "Tangent",
            "type": "NodeSocketVector",
            "socket_index": 19
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 119,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "name": "Surface",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Volume",
              "socket_index": 1,
              "type": "NodeSocketShader"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Displacement",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 300,
            "y": 300
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 537,
            "width": 240
          },
          "distribution": "GGX",
          "id": 1,
          "inputs": [
            {
              "default_value": [
                0.8000000715255737,
                0.014457959681749344,
                0.17630505561828613,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Subsurface",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                0.20000000298023224,
                0.10000000149011612
              ],
              "name": "Subsurface Radius",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Subsurface Color",
              "socket_index": 3,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Metallic",
              "socket_index": 4,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Specular",
              "socket_index": 5,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Specular Tint",
              "socket_index": 6,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Roughness",
              "socket_index": 7,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic",
              "socket_index": 8,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic Rotation",
              "socket_index": 9,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Sheen",
              "socket_index": 10,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Sheen Tint",
              "socket_index": 11,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Clearcoat",
              "socket_index": 12,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.029999999329447746,
              "name": "Clearcoat Roughness",
              "socket_index": 13,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1.4500000476837158,
              "name": "IOR",
              "socket_index": 14,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Transmission",
              "socket_index": 15,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Transmission Roughness",
              "socket_index": 16,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 17,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Clearcoat Normal",
              "socket_index": 18,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Tangent",
              "socket_index": 19,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 10,
            "y": 300
          },
          "name": "Principled BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfPrincipled"
        },
        {
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0.8000000715255737,
                0.014457959681749344,
                0.17630505561828613,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Subsurface",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                0.20000000298023224,
                0.10000000149011612
              ],
              "name": "Subsurface Radius",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Subsurface Color",
              "socket_index": 3,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Metallic",
              "socket_index": 4,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Specular",
              "socket_index": 5,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Specular Tint",
              "socket_index": 6,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Roughness",
              "socket_index": 7,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic",
              "socket_index": 8,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Anisotropic Rotation",
              "socket_index": 9,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Sheen",
              "socket_index": 10,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "Sheen Tint",
              "socket_index": 11,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Clearcoat",
              "socket_index": 12,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.029999999329447746,
              "name": "Clearcoat Roughness",
              "socket_index": 13,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1.4500000476837158,
              "name": "IOR",
              "socket_index": 14,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Transmission",
              "socket_index": 15,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0,
              "name": "Transmission Roughness",
              "socket_index": 16,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 17,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Clearcoat Normal",
              "socket_index": 18,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Tangent",
              "socket_index": 19,
              "type": "NodeSocketVector"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.8000000715255737,
            0.014457959681749344,
            0.17630505561828613,
            1
          ],
          "name": "Base Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0,
          "name": "Subsurface",
          "socket_index": 1,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            1,
            0.20000000298023224,
            0.10000000149011612
          ],
          "name": "Subsurface Radius",
          "socket_index": 2,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0.800000011920929,
            0.800000011920929,
            0.800000011920929,
            1
          ],
          "name": "Subsurface Color",
          "socket_index": 3,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0,
          "name": "Metallic",
          "socket_index": 4,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "Specular",
          "socket_index": 5,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Specular Tint",
          "socket_index": 6,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "Roughness",
          "socket_index": 7,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Anisotropic",
          "socket_index": 8,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Anisotropic Rotation",
          "socket_index": 9,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Sheen",
          "socket_index": 10,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "Sheen Tint",
          "socket_index": 11,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Clearcoat",
          "socket_index": 12,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.029999999329447746,
          "name": "Clearcoat Roughness",
          "socket_index": 13,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1.4500000476837158,
          "name": "IOR",
          "socket_index": 14,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Transmission",
          "socket_index": 15,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Transmission Roughness",
          "socket_index": 16,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 17,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Clearcoat Normal",
          "socket_index": 18,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Tangent",
          "socket_index": 19,
          "type": "NodeSocketVector"
        }
      ]
    }
    return material;
  }

}