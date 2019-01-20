
import Materials from './materials';
export default class SimpleMaterials extends Materials {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = null;
  }
  static MaterialNames() {
    return ["Simple$Metal$1Group", "Metal"]
  }
  static Types() {
    var res = super.Types();
    return {
      ...res
    }
  }


  static Simple$Metal$1Group(base$Color, scale) {
    var material = new SimpleMaterials('Simple Metal 1')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "base$Color": 0,
      "scale": 1
    }
    material.outputs = {
      "BSDF": "NodeSocketShader"
    }
    material.outputIndexes = {
      "BSDF": 0
    }
    material.base$Color = base$Color;
    material.scale = scale;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Principled BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 2,
          "to_node": "Material Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 1,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 0,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Roughness",
            "socket_index": 7,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 1,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 0,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Specular",
            "socket_index": 5,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 1,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 0,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Anisotropic Rotation",
            "socket_index": 9,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 3,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Base Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 0,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Base Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 3,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Noise Texture",
          "to_socket": {
            "name": "Scale",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Principled BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 4,
          "to_node": "Group Output",
          "to_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 529.8678588867188,
            "width": 240
          },
          "distribution": "GGX",
          "id": 0,
          "inputs": [
            {
              "default_value": [
                0.10013867914676666,
                0.015587825328111649,
                0.016041291877627373,
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
                0.8000000715255737,
                0.2333756685256958,
                0.5209190845489502,
                1
              ],
              "name": "Subsurface Color",
              "socket_index": 3,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
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
              "default_value": 0.10476190596818924,
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
              "default_value": 0.03809523954987526,
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
              "default_value": 0.19523809850215912,
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
              "default_value": 0.02857142873108387,
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
            "x": -53.752532958984375,
            "y": 95.86785888671875
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
            "height": 158.13217163085938,
            "width": 140
          },
          "id": 1,
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
              "default_value": 5,
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
            "x": -372.44342041015625,
            "y": -95.86782836914062
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
            "height": 118.58258056640625,
            "width": 140
          },
          "id": 2,
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
            "x": 372.44342041015625,
            "y": 78.58258056640625
          },
          "name": "Material Output",
          "options": {},
          "outputs": [],
          "type": "ShaderNodeOutputMaterial"
        },
        {
          "dimensions": {
            "height": 92,
            "width": 140
          },
          "id": 3,
          "inputs": [],
          "location": {
            "x": -572.4434204101562,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 2,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 66,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "name": "BSDF",
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
            "x": 572.4434204101562,
            "y": 0
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.10013867914676666,
            0.015587825328111649,
            0.016041291877627373,
            1
          ],
          "name": "Base Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 5,
          "name": "Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return material;
  }


  static Metal(simple$Metal$1Base$Color, simple$Metal$1Scale) {
    var material = new SimpleMaterials('Metal')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "simple$Metal$1Base$Color": {
        "node": "Metal",
        "socket_index": 0,
        "input": "Base Color"
      },
      "simple$Metal$1Scale": {
        "node": "Metal",
        "socket_index": 1,
        "input": "Scale"
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
    material.simple$Metal$1Base$Color = simple$Metal$1Base$Color;
    material.simple$Metal$1Scale = simple$Metal$1Scale;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Metal",
          "from_node_name": "Simple Metal 1",
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
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 119.185791015625,
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
            "x": 367.050048828125,
            "y": 408.185791015625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 127.64462280273438,
            "width": 220.45555114746094
          },
          "id": 1,
          "inputs": [
            {
              "default_value": [
                0.10013867914676666,
                0.015587825328111649,
                0.016041291877627373,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 5,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 57.54231262207031,
            "y": 401.6446228027344
          },
          "name": "Metal",
          "node_name": "Simple Metal 1",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
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
                0.10013867914676666,
                0.015587825328111649,
                0.016041291877627373,
                1
              ],
              "name": "Base Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 5,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.10013867914676666,
            0.015587825328111649,
            0.016041291877627373,
            1
          ],
          "name": "Base Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 5,
          "name": "Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return material;
  }

}