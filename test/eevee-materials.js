
        import Materials from './materials';
export default class EeveeMaterials extends Materials {
    constructor(name) {
        super(name);
        this.name = name;
        this.type = null;
    }
    static MaterialNames(){
        return ["BlenderEeveeSimpleShaderGroup","Material"]
    }
    static Types() {
       var res = super.Types();
        return {
            ...res
        }
    }

    
            static BlenderEeveeSimpleShaderGroup(voronoi$Scale,noise$Scale,hue,bump) {
                var material = new EeveeMaterials('BlenderEeveeSimpleShader')
                material.type = 'GROUP';
                material.isGroup = true;
                material.conversion = {
  "voronoi$Scale": 0,
  "noise$Scale": 1,
  "hue": 2,
  "bump": 3
}
                material.outputs = {
  "BSDF": "NodeSocketShader"
}
                material.outputIndexes = {
  "BSDF": 0
}
                material.voronoi$Scale = voronoi$Scale;
                material.noise$Scale = noise$Scale;
                material.hue = hue;
                material.bump = bump;
                
                material.definition = {
  "links": [
    {
      "from": 0,
      "from_node": "Voronoi Texture",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 2,
      "to_node": "Mix",
      "to_socket": {
        "name": "Color1",
        "socket_index": 1,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 1,
      "from_node": "Noise Texture",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 2,
      "to_node": "Mix",
      "to_socket": {
        "name": "Color2",
        "socket_index": 2,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 2,
      "from_node": "Mix",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 3,
      "to_node": "ColorRamp",
      "to_socket": {
        "name": "Fac",
        "socket_index": 0,
        "type": "NodeSocketFloatFactor"
      }
    },
    {
      "from": 2,
      "from_node": "Mix",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 5,
      "to_node": "ColorRamp.001",
      "to_socket": {
        "name": "Fac",
        "socket_index": 0,
        "type": "NodeSocketFloatFactor"
      }
    },
    {
      "from": 3,
      "from_node": "ColorRamp",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 8,
      "to_node": "ColorRamp.002",
      "to_socket": {
        "name": "Fac",
        "socket_index": 0,
        "type": "NodeSocketFloatFactor"
      }
    },
    {
      "from": 8,
      "from_node": "ColorRamp.002",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 4,
      "to_node": "Hue Saturation Value",
      "to_socket": {
        "name": "Color",
        "socket_index": 4,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 4,
      "from_node": "Hue Saturation Value",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 10,
      "to_node": "Principled BSDF",
      "to_socket": {
        "name": "Base Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 5,
      "from_node": "ColorRamp.001",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 10,
      "to_node": "Principled BSDF",
      "to_socket": {
        "name": "Roughness",
        "socket_index": 7,
        "type": "NodeSocketFloatFactor"
      }
    },
    {
      "from": 6,
      "from_node": "Noise Texture.001",
      "from_socket": {
        "name": "Color",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 7,
      "to_node": "Bump",
      "to_socket": {
        "name": "Height",
        "socket_index": 2,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 7,
      "from_node": "Bump",
      "from_socket": {
        "name": "Normal",
        "socket_index": 0,
        "type": "NodeSocketVector"
      },
      "to": 10,
      "to_node": "Principled BSDF",
      "to_socket": {
        "name": "Normal",
        "socket_index": 17,
        "type": "NodeSocketVector"
      }
    },
    {
      "from": 11,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Voronoi Scale",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 0,
      "to_node": "Voronoi Texture",
      "to_socket": {
        "name": "Scale",
        "socket_index": 1,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 11,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Noise Scale",
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
      "from": 11,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Hue",
        "socket_index": 2,
        "type": "NodeSocketFloat"
      },
      "to": 4,
      "to_node": "Hue Saturation Value",
      "to_socket": {
        "name": "Hue",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 10,
      "from_node": "Principled BSDF",
      "from_socket": {
        "name": "BSDF",
        "socket_index": 0,
        "type": "NodeSocketShader"
      },
      "to": 9,
      "to_node": "Group Output",
      "to_socket": {
        "name": "BSDF",
        "socket_index": 0,
        "type": "NodeSocketShader"
      }
    },
    {
      "from": 11,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Bump",
        "socket_index": 3,
        "type": "NodeSocketFloatFactor"
      },
      "to": 7,
      "to_node": "Bump",
      "to_socket": {
        "name": "Strength",
        "socket_index": 0,
        "type": "NodeSocketFloatFactor"
      }
    }
  ],
  "nodes": [
    {
      "dimensions": {
        "height": 199.6016845703125,
        "width": 140
      },
      "id": 0,
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
          "default_value": 8.010000228881836,
          "name": "Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Exponent",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ],
      "location": {
        "x": -819.7772216796875,
        "y": 165.00167846679688
      },
      "name": "Voronoi Texture",
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
      "type": "ShaderNodeTexVoronoi"
    },
    {
      "dimensions": {
        "height": 158.48538208007812,
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
          "default_value": 17.200000762939453,
          "name": "Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 4,
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
        "x": -847.994140625,
        "y": -108.5146255493164
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
      "blend_type": "MIX",
      "dimensions": {
        "height": 170.29861450195312,
        "width": 140
      },
      "id": 2,
      "inputs": [
        {
          "default_value": 0.5,
          "name": "Fac",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.5,
            0.5,
            0.5,
            1
          ],
          "name": "Color1",
          "socket_index": 1,
          "type": "NodeSocketColor"
        },
        {
          "default_value": [
            0.5,
            0.5,
            0.5,
            1
          ],
          "name": "Color2",
          "socket_index": 2,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": -599.9821166992188,
        "y": 132.29861450195312
      },
      "name": "Mix",
      "options": {},
      "outputs": [
        {
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "type": "ShaderNodeMixRGB",
      "use_clamp": false
    },
    {
      "dimensions": {
        "height": 212.48818969726562,
        "width": 240
      },
      "id": 3,
      "inputs": [
        {
          "default_value": 0.5,
          "name": "Fac",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        }
      ],
      "location": {
        "x": -369.7914123535156,
        "y": 166.48818969726562
      },
      "name": "ColorRamp",
      "options": {},
      "outputs": [
        {
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "name": "Alpha",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ],
      "type": "ShaderNodeValToRGB"
    },
    {
      "dimensions": {
        "height": 163.67770385742188,
        "width": 150
      },
      "id": 4,
      "inputs": [
        {
          "default_value": 0.20000000298023224,
          "name": "Hue",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Saturation",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Value",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 3,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.800000011920929,
            0.800000011920929,
            0.800000011920929,
            1
          ],
          "name": "Color",
          "socket_index": 4,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": 320.7808837890625,
        "y": 200.67770385742188
      },
      "name": "Hue Saturation Value",
      "options": {},
      "outputs": [
        {
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "type": "ShaderNodeHueSaturation"
    },
    {
      "dimensions": {
        "height": 210.53933715820312,
        "width": 240
      },
      "id": 5,
      "inputs": [
        {
          "default_value": 0.5,
          "name": "Fac",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        }
      ],
      "location": {
        "x": -369.7914123535156,
        "y": -114.46065521240234
      },
      "name": "ColorRamp.001",
      "options": {},
      "outputs": [
        {
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "name": "Alpha",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ],
      "type": "ShaderNodeValToRGB"
    },
    {
      "dimensions": {
        "height": 158.916748046875,
        "width": 140
      },
      "id": 6,
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
          "default_value": 1.2000000476837158,
          "name": "Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 4.800000190734863,
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
        "x": -34.15850830078125,
        "y": -211.083251953125
      },
      "name": "Noise Texture.001",
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
        "height": 167.51177978515625,
        "width": 140
      },
      "id": 7,
      "inputs": [
        {
          "default_value": 0.10000000149011612,
          "name": "Strength",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1,
          "name": "Distance",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Height",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 3,
          "type": "NodeSocketVector"
        }
      ],
      "invert": false,
      "location": {
        "x": 255.43624877929688,
        "y": -166.48822021484375
      },
      "name": "Bump",
      "options": {},
      "outputs": [
        {
          "name": "Normal",
          "socket_index": 0,
          "type": "NodeSocketVector"
        }
      ],
      "type": "ShaderNodeBump"
    },
    {
      "dimensions": {
        "height": 212.8897705078125,
        "width": 240
      },
      "id": 8,
      "inputs": [
        {
          "default_value": 0.5,
          "name": "Fac",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        }
      ],
      "location": {
        "x": -34.409034729003906,
        "y": 271.8897705078125
      },
      "name": "ColorRamp.002",
      "options": {},
      "outputs": [
        {
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "name": "Alpha",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ],
      "type": "ShaderNodeValToRGB"
    },
    {
      "dimensions": {
        "height": 66.48394012451172,
        "width": 140
      },
      "id": 9,
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
        "x": 1166.0213623046875,
        "y": 36.48394012451172
      },
      "name": "Group Output",
      "options": {},
      "outputs": [],
      "type": "NodeGroupOutput"
    },
    {
      "dimensions": {
        "height": 533.6343994140625,
        "width": 240
      },
      "id": 10,
      "inputs": [
        {
          "default_value": [
            0.800000011920929,
            0.800000011920929,
            0.800000011920929,
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
        "x": 578.78564453125,
        "y": 198.63436889648438
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
        "height": 133.5253448486328,
        "width": 140
      },
      "id": 11,
      "inputs": [],
      "location": {
        "x": -1150.4000244140625,
        "y": -3.474658727645874
      },
      "name": "Group Input",
      "options": {},
      "outputs": [
        {
          "name": "Voronoi Scale",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Noise Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Hue",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Bump",
          "socket_index": 3,
          "type": "NodeSocketFloatFactor"
        },
        {
          "name": "",
          "socket_index": 4,
          "type": "NodeSocketVirtual"
        }
      ],
      "type": "NodeGroupInput"
    }
  ],
  "defaultInputs": [
    {
      "default_value": 8.010000228881836,
      "name": "Voronoi Scale",
      "socket_index": 0,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 17.200000762939453,
      "name": "Noise Scale",
      "socket_index": 1,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 0.20000000298023224,
      "name": "Hue",
      "socket_index": 2,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 0.10000000149011612,
      "name": "Bump",
      "socket_index": 3,
      "type": "NodeSocketFloatFactor"
    }
  ]
}
                return material;
            }
            
    
            static Material(blenderEeveeSimpleShaderVoronoi$Scale,blenderEeveeSimpleShaderNoise$Scale,blenderEeveeSimpleShaderHue,blenderEeveeSimpleShaderBump) {
                var material = new EeveeMaterials('Material')
                material.isGroup = true;
                material.type = 'GROUP';
                material.conversion = {
  "blenderEeveeSimpleShaderVoronoi$Scale": {
    "node": "Group",
    "socket_index": 0,
    "input": "Voronoi Scale"
  },
  "blenderEeveeSimpleShaderNoise$Scale": {
    "node": "Group",
    "socket_index": 1,
    "input": "Noise Scale"
  },
  "blenderEeveeSimpleShaderHue": {
    "node": "Group",
    "socket_index": 2,
    "input": "Hue"
  },
  "blenderEeveeSimpleShaderBump": {
    "node": "Group",
    "socket_index": 3,
    "input": "Bump"
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
                material.blenderEeveeSimpleShaderVoronoi$Scale = blenderEeveeSimpleShaderVoronoi$Scale;
                material.blenderEeveeSimpleShaderNoise$Scale = blenderEeveeSimpleShaderNoise$Scale;
                material.blenderEeveeSimpleShaderHue = blenderEeveeSimpleShaderHue;
                material.blenderEeveeSimpleShaderBump = blenderEeveeSimpleShaderBump;
                
                material.definition = {
  "links": [
    {
      "from": 1,
      "from_node": "Group",
      "from_node_name": "BlenderEeveeSimpleShader",
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
        "name": "Voronoi Scale",
        "type": "NodeSocketFloat",
        "socket_index": 0
      },
      "to": 1,
      "to_socket": {
        "name": "Voronoi Scale",
        "type": "NodeSocketFloat",
        "socket_index": 0
      }
    },
    {
      "from": 2,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Noise Scale",
        "type": "NodeSocketFloat",
        "socket_index": 1
      },
      "to": 1,
      "to_socket": {
        "name": "Noise Scale",
        "type": "NodeSocketFloat",
        "socket_index": 1
      }
    },
    {
      "from": 2,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Hue",
        "type": "NodeSocketFloat",
        "socket_index": 2
      },
      "to": 1,
      "to_socket": {
        "name": "Hue",
        "type": "NodeSocketFloat",
        "socket_index": 2
      }
    },
    {
      "from": 2,
      "from_node": "Group Input",
      "from_socket": {
        "name": "Bump",
        "type": "NodeSocketFloatFactor",
        "socket_index": 3
      },
      "to": 1,
      "to_socket": {
        "name": "Bump",
        "type": "NodeSocketFloatFactor",
        "socket_index": 3
      }
    }
  ],
  "nodes": [
    {
      "child_def": 0,
      "dimensions": {
        "height": 119.9371337890625,
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
        "x": 399.547119140625,
        "y": 368.9371337890625
      },
      "name": "Group Output",
      "options": {},
      "outputs": [],
      "type": "NodeGroupOutput"
    },
    {
      "child_def": 1,
      "dimensions": {
        "height": 171.01119995117188,
        "width": 284.0626220703125
      },
      "id": 1,
      "inputs": [
        {
          "default_value": 8.010000228881836,
          "name": "Voronoi Scale",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 17.200000762939453,
          "name": "Noise Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Hue",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Bump",
          "socket_index": 3,
          "type": "NodeSocketFloatFactor"
        }
      ],
      "location": {
        "x": -42.38093566894531,
        "y": 303.0111999511719
      },
      "name": "Group",
      "node_name": "BlenderEeveeSimpleShader",
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
          "default_value": 8.010000228881836,
          "name": "Voronoi Scale",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 17.200000762939453,
          "name": "Noise Scale",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Hue",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Bump",
          "socket_index": 3,
          "type": "NodeSocketFloatFactor"
        }
      ],
      "type": "NodeGroupInput"
    }
  ],
  "defaultInputs": [
    {
      "default_value": 8.010000228881836,
      "name": "Voronoi Scale",
      "socket_index": 0,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 17.200000762939453,
      "name": "Noise Scale",
      "socket_index": 1,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 0.20000000298023224,
      "name": "Hue",
      "socket_index": 2,
      "type": "NodeSocketFloat"
    },
    {
      "default_value": 0.10000000149011612,
      "name": "Bump",
      "socket_index": 3,
      "type": "NodeSocketFloatFactor"
    }
  ]
}
                return material;
            }
            
}