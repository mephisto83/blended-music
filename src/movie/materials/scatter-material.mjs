import Layout from '../../layout/graphlayout';
import Materials from '../materials';
export default class ScatterField extends Materials {
    constructor(name) {
        super(name);
        this.name = name;
        this.type = null;
    }
    static MaterialNames() {
        return ["HexForceFieldGroupGroup", "HexForceFieldMat"]
    }
    static Types() {
        var res = super.Types();
        return {
            ...res
        }
    }


    static HexForceFieldGroupGroup(strength_0, fac_1, scrollZ_2, scrollWave_3) {
        var material = new ScatterField('HexForceFieldGroup')
        material.type = 'GROUP';
        material.isGroup = true;
        material.conversion = {
            "strength_0": 0,
            "fac_1": 1,
            "scrollZ_2": 2,
            "scrollWave_3": 3
        }
        material.outputs = {
            "Output": "NodeSocketShader"
        }
        material.outputIndexes = {
            "Output": 0
        }
        material.strength_0 = strength_0;
        material.fac_1 = fac_1;
        material.scrollZ_2 = scrollZ_2;
        material.scrollWave_3 = scrollWave_3;

        material.definition = {
            "links": [
                {
                    "from": 11,
                    "from_node": "Reroute",
                    "from_socket": {
                        "name": "Output",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 2,
                    "to_node": "Mapping",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 2,
                    "from_node": "Mapping",
                    "from_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 8,
                    "to_node": "Gradient Texture",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 8,
                    "from_node": "Gradient Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 0,
                    "to_node": "Bright/Contrast",
                    "to_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 0,
                    "from_node": "Bright/Contrast",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 1,
                    "to_node": "ColorRamp",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 8,
                    "from_node": "Gradient Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 3,
                    "to_node": "ColorRamp.001",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 3,
                    "from_node": "ColorRamp.001",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 5,
                    "to_node": "Mix",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 1,
                    "from_node": "ColorRamp",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 5,
                    "to_node": "Mix",
                    "to_socket": {
                        "name": "Color1",
                        "socket_index": 1,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 30,
                    "from_node": "Musgrave Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 31,
                    "to_node": "Mix.001",
                    "to_socket": {
                        "name": "Color1",
                        "socket_index": 1,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 8,
                    "from_node": "Gradient Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 31,
                    "to_node": "Mix.001",
                    "to_socket": {
                        "name": "Color2",
                        "socket_index": 2,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 31,
                    "from_node": "Mix.001",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 19,
                    "to_node": "ColorRamp.002",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 11,
                    "from_node": "Reroute",
                    "from_socket": {
                        "name": "Output",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 17,
                    "to_node": "Mapping.001",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 19,
                    "from_node": "ColorRamp.002",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 4,
                    "to_node": "Mix.002",
                    "to_socket": {
                        "name": "Color1",
                        "socket_index": 1,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 17,
                    "from_node": "Mapping.001",
                    "from_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 22,
                    "to_node": "Separate XYZ",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 3,
                    "from_node": "ColorRamp.001",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 4,
                    "to_node": "Mix.002",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 4,
                    "from_node": "Mix.002",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 6,
                    "to_node": "Mix.003",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 5,
                    "from_node": "Mix",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 6,
                    "to_node": "Mix.003",
                    "to_socket": {
                        "name": "Color2",
                        "socket_index": 2,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 5,
                    "from_node": "Mix",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 20,
                    "to_node": "Mix.004",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 6,
                    "from_node": "Mix.003",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 7,
                    "to_node": "ColorRamp.003",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 20,
                    "from_node": "Mix.004",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 32,
                    "to_node": "Mix.006",
                    "to_socket": {
                        "name": "Color1",
                        "socket_index": 1,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 7,
                    "from_node": "ColorRamp.003",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 13,
                    "to_node": "Mix.005",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 32,
                    "from_node": "Mix.006",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 12,
                    "to_node": "ColorRamp.004",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 8,
                    "from_node": "Gradient Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 32,
                    "to_node": "Mix.006",
                    "to_socket": {
                        "name": "Color2",
                        "socket_index": 2,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 12,
                    "from_node": "ColorRamp.004",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 13,
                    "to_node": "Mix.005",
                    "to_socket": {
                        "name": "Color1",
                        "socket_index": 1,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 18,
                    "from_node": "ColorRamp.005",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 20,
                    "to_node": "Mix.004",
                    "to_socket": {
                        "name": "Color2",
                        "socket_index": 2,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 13,
                    "from_node": "Mix.005",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 14,
                    "to_node": "Emission Viewer",
                    "to_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 8,
                    "from_node": "Gradient Texture",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 9,
                    "to_node": "ColorRamp.006",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 9,
                    "from_node": "ColorRamp.006",
                    "from_socket": {
                        "name": "Color",
                        "socket_index": 0,
                        "type": "NodeSocketColor"
                    },
                    "to": 13,
                    "to_node": "Mix.005",
                    "to_socket": {
                        "name": "Color2",
                        "socket_index": 2,
                        "type": "NodeSocketColor"
                    }
                },
                {
                    "from": 14,
                    "from_node": "Emission Viewer",
                    "from_socket": {
                        "name": "Emission",
                        "socket_index": 0,
                        "type": "NodeSocketShader"
                    },
                    "to": 10,
                    "to_node": "Group Output",
                    "to_socket": {
                        "name": "Output",
                        "socket_index": 0,
                        "type": "NodeSocketShader"
                    }
                },
                {
                    "from": 16,
                    "from_node": "HexForceField",
                    "from_socket": {
                        "name": "UV",
                        "socket_index": 2,
                        "type": "NodeSocketVector"
                    },
                    "to": 11,
                    "to_node": "Reroute",
                    "to_socket": {
                        "name": "Input",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 21,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "Strength",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 14,
                    "to_node": "Emission Viewer",
                    "to_socket": {
                        "name": "Strength",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 21,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "Fac",
                        "socket_index": 1,
                        "type": "NodeSocketFloatFactor"
                    },
                    "to": 18,
                    "to_node": "ColorRamp.005",
                    "to_socket": {
                        "name": "Fac",
                        "socket_index": 0,
                        "type": "NodeSocketFloatFactor"
                    }
                },
                {
                    "from": 22,
                    "from_node": "Separate XYZ",
                    "from_socket": {
                        "name": "X",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    },
                    "to": 23,
                    "to_node": "Combine XYZ",
                    "to_socket": {
                        "name": "X",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 22,
                    "from_node": "Separate XYZ",
                    "from_socket": {
                        "name": "Y",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    },
                    "to": 23,
                    "to_node": "Combine XYZ",
                    "to_socket": {
                        "name": "Y",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 21,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "ScrollZ",
                        "socket_index": 2,
                        "type": "NodeSocketFloat"
                    },
                    "to": 23,
                    "to_node": "Combine XYZ",
                    "to_socket": {
                        "name": "Z",
                        "socket_index": 2,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 21,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "ScrollWave",
                        "socket_index": 3,
                        "type": "NodeSocketFloat"
                    },
                    "to": 0,
                    "to_node": "Bright/Contrast",
                    "to_socket": {
                        "name": "Bright",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 23,
                    "from_node": "Combine XYZ",
                    "from_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 24,
                    "to_node": "Vector Transform",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 24,
                    "from_node": "Vector Transform",
                    "from_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 25,
                    "to_node": "Separate XYZ.001",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 25,
                    "from_node": "Separate XYZ.001",
                    "from_socket": {
                        "name": "X",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    },
                    "to": 28,
                    "to_node": "Math",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 15,
                    "from_node": "Noise Texture",
                    "from_socket": {
                        "name": "Fac",
                        "socket_index": 1,
                        "type": "NodeSocketFloatFactor"
                    },
                    "to": 28,
                    "to_node": "Math",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 28,
                    "from_node": "Math",
                    "from_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    },
                    "to": 29,
                    "to_node": "Combine XYZ.001",
                    "to_socket": {
                        "name": "X",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 29,
                    "from_node": "Combine XYZ.001",
                    "from_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    },
                    "to": 30,
                    "to_node": "Musgrave Texture",
                    "to_socket": {
                        "name": "Vector",
                        "socket_index": 0,
                        "type": "NodeSocketVector"
                    }
                },
                {
                    "from": 25,
                    "from_node": "Separate XYZ.001",
                    "from_socket": {
                        "name": "Y",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    },
                    "to": 27,
                    "to_node": "Math.002",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 25,
                    "from_node": "Separate XYZ.001",
                    "from_socket": {
                        "name": "Z",
                        "socket_index": 2,
                        "type": "NodeSocketFloat"
                    },
                    "to": 26,
                    "to_node": "Math.001",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 26,
                    "from_node": "Math.001",
                    "from_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    },
                    "to": 29,
                    "to_node": "Combine XYZ.001",
                    "to_socket": {
                        "name": "Z",
                        "socket_index": 2,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 27,
                    "from_node": "Math.002",
                    "from_socket": {
                        "name": "Value",
                        "socket_index": 0,
                        "type": "NodeSocketFloat"
                    },
                    "to": 29,
                    "to_node": "Combine XYZ.001",
                    "to_socket": {
                        "name": "Y",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 15,
                    "from_node": "Noise Texture",
                    "from_socket": {
                        "name": "Fac",
                        "socket_index": 1,
                        "type": "NodeSocketFloatFactor"
                    },
                    "to": 27,
                    "to_node": "Math.002",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                },
                {
                    "from": 15,
                    "from_node": "Noise Texture",
                    "from_socket": {
                        "name": "Fac",
                        "socket_index": 1,
                        "type": "NodeSocketFloatFactor"
                    },
                    "to": 26,
                    "to_node": "Math.001",
                    "to_socket": {
                        "name": "Value",
                        "socket_index": 1,
                        "type": "NodeSocketFloat"
                    }
                }
            ],
            "nodes": [
                {
                    "dimensions": {
                        "height": 119.17120361328125,
                        "width": 140
                    },
                    "id": 0,
                    "inputs": [
                        {
                            "default_value": [
                                1,
                                1,
                                1,
                                1
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": -0.29999998211860657,
                            "name": "Bright",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Contrast",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -632.042724609375,
                        "y": 161.17120361328125
                    },
                    "name": "Bright/Contrast",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeBrightContrast"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.04999999701976776
                            },
                            {
                                "color": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "position": 0.07727277278900146
                            },
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.5136362314224243
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 212.55784606933594,
                        "width": 240
                    },
                    "id": 1,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": -412.042724609375,
                        "y": 248.55784606933594
                    },
                    "name": "ColorRamp",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "dimensions": {
                        "height": 275.07464599609375,
                        "width": 320
                    },
                    "id": 2,
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
                        }
                    ],
                    "location": {
                        "x": -1253.020263671875,
                        "y": 232.0746307373047
                    },
                    "max": {
                        "type": "Vector",
                        "value": [
                            1,
                            1,
                            1
                        ]
                    },
                    "min": {
                        "type": "Vector",
                        "value": [
                            0,
                            0,
                            0
                        ]
                    },
                    "name": "Mapping",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "rotation": {
                        "type": "Euler",
                        "value": {
                            "order": "XYZ",
                            "x": 0,
                            "y": 0,
                            "z": 0
                        }
                    },
                    "scale": {
                        "type": "Vector",
                        "value": [
                            2,
                            2,
                            1
                        ]
                    },
                    "translation": {
                        "type": "Vector",
                        "value": [
                            -1,
                            -1,
                            0
                        ]
                    },
                    "type": "ShaderNodeMapping",
                    "use_max": false,
                    "use_min": false,
                    "vector_type": "POINT"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "position": 0.0363636389374733
                            },
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.1727273166179657
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 212.52716064453125,
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
                        "x": -413.4677734375,
                        "y": 475.52716064453125
                    },
                    "name": "ColorRamp.001",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 169.90884399414062,
                        "width": 140
                    },
                    "id": 4,
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
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 605.0635986328125,
                        "y": 59.908843994140625
                    },
                    "name": "Mix.002",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeMixRGB",
                    "use_clamp": false
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 171.92620849609375,
                        "width": 140
                    },
                    "id": 5,
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
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 156.033447265625,
                        "y": 320.92620849609375
                    },
                    "name": "Mix",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeMixRGB",
                    "use_clamp": false
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 171.79144287109375,
                        "width": 140
                    },
                    "id": 6,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color1",
                            "socket_index": 1,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 825.0635986328125,
                        "y": 299.79144287109375
                    },
                    "name": "Mix.003",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeMixRGB",
                    "use_clamp": false
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.027272725477814674
                            },
                            {
                                "color": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "position": 0.07272724062204361
                            },
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.14999999105930328
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 212.21905517578125,
                        "width": 240
                    },
                    "id": 7,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": 1044.2998046875,
                        "y": 379.21905517578125
                    },
                    "name": "ColorRamp.003",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "dimensions": {
                        "height": 127.44053649902344,
                        "width": 140
                    },
                    "gradient_type": "SPHERICAL",
                    "id": 8,
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
                        }
                    ],
                    "location": {
                        "x": -852.042724609375,
                        "y": 248.44053649902344
                    },
                    "name": "Gradient Texture",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "type": "ShaderNodeTexGradient"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0
                            },
                            {
                                "color": [
                                    0.002641422674059868,
                                    0.06676683574914932,
                                    1,
                                    1
                                ],
                                "position": 0.26818183064460754
                            },
                            {
                                "color": [
                                    1,
                                    0.10624194145202637,
                                    0,
                                    1
                                ],
                                "position": 0.43636366724967957
                            },
                            {
                                "color": [
                                    0.28192073106765747,
                                    1,
                                    0.15780486166477203,
                                    1
                                ],
                                "position": 0.6954546570777893
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 212.44940185546875,
                        "width": 240
                    },
                    "id": 9,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": 930.7923583984375,
                        "y": 282.44940185546875
                    },
                    "name": "ColorRamp.006",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "dimensions": {
                        "height": 67.51589965820312,
                        "width": 140
                    },
                    "id": 10,
                    "inputs": [
                        {
                            "name": "Output",
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
                        "x": 2218.53955078125,
                        "y": 224.51589965820312
                    },
                    "name": "Group Output",
                    "options": {},
                    "outputs": [],
                    "type": "NodeGroupOutput"
                },
                {
                    "dimensions": {
                        "height": 16,
                        "width": 16
                    },
                    "id": 11,
                    "inputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Input",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "location": {
                        "x": -1586.078857421875,
                        "y": -117.54988098144531
                    },
                    "name": "Reroute",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Output",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "type": "NodeReroute"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.5863634347915649
                            },
                            {
                                "color": [
                                    0.8077078461647034,
                                    1,
                                    0,
                                    1
                                ],
                                "position": 0.7090909481048584
                            },
                            {
                                "color": [
                                    1,
                                    0.10624194145202637,
                                    0,
                                    1
                                ],
                                "position": 0.7545454502105713
                            },
                            {
                                "color": [
                                    0.03891848772764206,
                                    1,
                                    0.031892504543066025,
                                    1
                                ],
                                "position": 0.9181818962097168
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 211.04905700683594,
                        "width": 239.99993896484375
                    },
                    "id": 12,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": 927.2788696289062,
                        "y": 37.04905319213867
                    },
                    "name": "ColorRamp.004",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 171.99465942382812,
                        "width": 140
                    },
                    "id": 13,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color1",
                            "socket_index": 1,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": [
                                1,
                                1,
                                1,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 1729.08203125,
                        "y": 467.9946594238281
                    },
                    "name": "Mix.005",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
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
                        "height": 97.013671875,
                        "width": 139.9998779296875
                    },
                    "id": 14,
                    "inputs": [
                        {
                            "default_value": [
                                1,
                                1,
                                1,
                                1
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 2.1999998092651367,
                            "name": "Strength",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": 1923.7501220703125,
                        "y": 328.013671875
                    },
                    "name": "Emission Viewer",
                    "options": {},
                    "outputs": [
                        {
                            "name": "Emission",
                            "socket_index": 0,
                            "type": "NodeSocketShader"
                        }
                    ],
                    "type": "ShaderNodeEmission"
                },
                {
                    "dimensions": {
                        "height": 158.52914428710938,
                        "width": 140
                    },
                    "id": 15,
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
                            "default_value": 10,
                            "name": "Scale",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0.20000000298023224,
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
                        "x": -1418.0072021484375,
                        "y": -421.4708557128906
                    },
                    "name": "Noise Texture",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "type": "ShaderNodeTexNoise"
                },
                {
                    "dimensions": {
                        "height": 236.87936401367188,
                        "width": 140
                    },
                    "id": 16,
                    "inputs": [],
                    "location": {
                        "x": -2053.211181640625,
                        "y": 149.87936401367188
                    },
                    "name": "HexForceField",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Generated",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Normal",
                            "socket_index": 1,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "UV",
                            "socket_index": 2,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Object",
                            "socket_index": 3,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Camera",
                            "socket_index": 4,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Window",
                            "socket_index": 5,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Reflection",
                            "socket_index": 6,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "type": "ShaderNodeTexCoord"
                },
                {
                    "dimensions": {
                        "height": 274.3623962402344,
                        "width": 320
                    },
                    "id": 17,
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
                        }
                    ],
                    "location": {
                        "x": -1527.0872802734375,
                        "y": -95.6375961303711
                    },
                    "max": {
                        "type": "Vector",
                        "value": [
                            1,
                            1,
                            1
                        ]
                    },
                    "min": {
                        "type": "Vector",
                        "value": [
                            0,
                            0,
                            0
                        ]
                    },
                    "name": "Mapping.001",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "rotation": {
                        "type": "Euler",
                        "value": {
                            "order": "XYZ",
                            "x": 0,
                            "y": 0,
                            "z": 0
                        }
                    },
                    "scale": {
                        "type": "Vector",
                        "value": [
                            1,
                            1,
                            1
                        ]
                    },
                    "translation": {
                        "type": "Vector",
                        "value": [
                            0,
                            0,
                            0.051899999380111694
                        ]
                    },
                    "type": "ShaderNodeMapping",
                    "use_max": false,
                    "use_min": false,
                    "vector_type": "POINT"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "position": 0.06363636255264282
                            },
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.23636364936828613
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 210.0777587890625,
                        "width": 240
                    },
                    "id": 18,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": -79.63377380371094,
                        "y": -312.9222412109375
                    },
                    "name": "ColorRamp.005",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "color_ramp": {
                        "color_mode": "RGB",
                        "elements": [
                            {
                                "color": [
                                    0,
                                    0,
                                    0,
                                    1
                                ],
                                "position": 0.1727272868156433
                            },
                            {
                                "color": [
                                    1,
                                    1,
                                    1,
                                    1
                                ],
                                "position": 0.34545469284057617
                            }
                        ],
                        "hue_interpolation": "NEAR",
                        "interpolation": "LINEAR"
                    },
                    "dimensions": {
                        "height": 210.29971313476562,
                        "width": 240.00003051757812
                    },
                    "id": 19,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "location": {
                        "x": 433.3240661621094,
                        "y": -214.70028686523438
                    },
                    "name": "ColorRamp.002",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Alpha",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeValToRGB"
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 171.53675842285156,
                        "width": 139.99996948242188
                    },
                    "id": 20,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color1",
                            "socket_index": 1,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 456.0091857910156,
                        "y": 246.53675842285156
                    },
                    "name": "Mix.004",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
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
                        "height": 133.29110717773438,
                        "width": 140
                    },
                    "id": 21,
                    "inputs": [],
                    "location": {
                        "x": -1871.1669921875,
                        "y": -421.7088928222656
                    },
                    "name": "Group Input",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Strength",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": 0,
                            "name": "ScrollZ",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": -0.29999998211860657,
                            "name": "ScrollWave",
                            "socket_index": 3,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "name": "",
                            "socket_index": 4,
                            "type": "NodeSocketVirtual"
                        }
                    ],
                    "type": "NodeGroupInput"
                },
                {
                    "dimensions": {
                        "height": 116.20294189453125,
                        "width": 140
                    },
                    "id": 22,
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
                        }
                    ],
                    "location": {
                        "x": -1190.9654541015625,
                        "y": -80.79705810546875
                    },
                    "name": "Separate XYZ",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": 0,
                            "name": "X",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Y",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Z",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeSeparateXYZ"
                },
                {
                    "dimensions": {
                        "height": 116.29904174804688,
                        "width": 140
                    },
                    "id": 23,
                    "inputs": [
                        {
                            "default_value": 0,
                            "name": "X",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Y",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Z",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -1020.6091918945312,
                        "y": -95.70095825195312
                    },
                    "name": "Combine XYZ",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "type": "ShaderNodeCombineXYZ"
                },
                {
                    "dimensions": {
                        "height": 30,
                        "width": 87
                    },
                    "id": 24,
                    "inputs": [
                        {
                            "default_value": [
                                0.5,
                                0.5,
                                0.5
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "location": {
                        "x": -849.3828735351562,
                        "y": -141.12637329101562
                    },
                    "name": "Vector Transform",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "type": "ShaderNodeVectorTransform",
                    "vector_type": "VECTOR"
                },
                {
                    "dimensions": {
                        "height": 30,
                        "width": 87
                    },
                    "id": 25,
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
                        }
                    ],
                    "location": {
                        "x": -746.4165649414062,
                        "y": -114.12222290039062
                    },
                    "name": "Separate XYZ.001",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": 0,
                            "name": "X",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Y",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Z",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "ShaderNodeSeparateXYZ"
                },
                {
                    "dimensions": {
                        "height": 30,
                        "width": 87
                    },
                    "id": 26,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -603.4168701171875,
                        "y": -188.25038146972656
                    },
                    "name": "Math.001",
                    "operation": "SINE",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": 0,
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
                        "height": 30,
                        "width": 87
                    },
                    "id": 27,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -607.5908203125,
                        "y": -148.57614135742188
                    },
                    "name": "Math.002",
                    "operation": "SINE",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": 0,
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
                        "height": 30,
                        "width": 87
                    },
                    "id": 28,
                    "inputs": [
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Value",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -601.0912475585938,
                        "y": -100.8929672241211
                    },
                    "name": "Math",
                    "operation": "SINE",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": 0,
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
                        "height": 116.00082397460938,
                        "width": 140
                    },
                    "id": 29,
                    "inputs": [
                        {
                            "default_value": 0,
                            "name": "X",
                            "socket_index": 0,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Y",
                            "socket_index": 1,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Z",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -403.24334716796875,
                        "y": -61.99917221069336
                    },
                    "name": "Combine XYZ.001",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Vector",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        }
                    ],
                    "type": "ShaderNodeCombineXYZ"
                },
                {
                    "dimensions": {
                        "height": 251.13792419433594,
                        "width": 150
                    },
                    "id": 30,
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
                            "default_value": 10.600000381469727,
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
                            "default_value": 2,
                            "name": "Dimension",
                            "socket_index": 3,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 1,
                            "name": "Lacunarity",
                            "socket_index": 4,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 0,
                            "name": "Offset",
                            "socket_index": 5,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": 1,
                            "name": "Gain",
                            "socket_index": 6,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": -173.67604064941406,
                        "y": -40.86207962036133
                    },
                    "musgrave_type": "RIDGED_MULTIFRACTAL",
                    "name": "Musgrave Texture",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": 0,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        }
                    ],
                    "type": "ShaderNodeTexMusgrave"
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 168.013427734375,
                        "width": 140
                    },
                    "id": 31,
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
                        "x": 74.23147583007812,
                        "y": -51.98657989501953
                    },
                    "name": "Mix.001",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeMixRGB",
                    "use_clamp": false
                },
                {
                    "blend_type": "MIX",
                    "dimensions": {
                        "height": 168.3926544189453,
                        "width": 140
                    },
                    "id": 32,
                    "inputs": [
                        {
                            "default_value": 0.5727272629737854,
                            "name": "Fac",
                            "socket_index": 0,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color1",
                            "socket_index": 1,
                            "type": "NodeSocketColor"
                        },
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                1
                            ],
                            "name": "Color2",
                            "socket_index": 2,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "location": {
                        "x": 721.0494995117188,
                        "y": 17.39266014099121
                    },
                    "name": "Mix.006",
                    "options": {},
                    "outputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0,
                                0
                            ],
                            "name": "Color",
                            "socket_index": 0,
                            "type": "NodeSocketColor"
                        }
                    ],
                    "type": "ShaderNodeMixRGB",
                    "use_clamp": false
                }
            ],
            "defaultInputs": [
                {
                    "default_value": [
                        1,
                        1,
                        1
                    ],
                    "name": "Strength",
                    "socket_index": 0,
                    "type": "NodeSocketVector"
                },
                {
                    "default_value": 0.5,
                    "name": "Fac",
                    "socket_index": 1,
                    "type": "NodeSocketFloatFactor"
                },
                {
                    "default_value": 0,
                    "name": "ScrollZ",
                    "socket_index": 2,
                    "type": "NodeSocketFloat"
                },
                {
                    "default_value": -0.29999998211860657,
                    "name": "ScrollWave",
                    "socket_index": 3,
                    "type": "NodeSocketFloat"
                }
            ]
        }
        return Layout.process(material);
    }


    static HexForceFieldMat_(args) {
        let { hexForceFieldGroupStrength_0, hexForceFieldGroupFac_1, hexForceFieldGroupScrollZ_2, hexForceFieldGroupScrollWave_3 } = args;
        return ScatterField.HexForceFieldMat(hexForceFieldGroupStrength_0, hexForceFieldGroupFac_1, hexForceFieldGroupScrollZ_2, hexForceFieldGroupScrollWave_3)
    }
    static HexForceFieldMat(hexForceFieldGroupStrength_0, hexForceFieldGroupFac_1, hexForceFieldGroupScrollZ_2, hexForceFieldGroupScrollWave_3) {
        var material = new ScatterField('HexForceFieldMat')
        material.isGroup = true;
        material.type = 'GROUP';
        material.conversion = {
            "hexForceFieldGroupStrength_0": {
                "node": "HexForceFieldGroup",
                "socket_index": 0,
                "input_index": 0,
                "input": "Strength"
            },
            "hexForceFieldGroupFac_1": {
                "node": "HexForceFieldGroup",
                "socket_index": 1,
                "input_index": 1,
                "input": "Fac"
            },
            "hexForceFieldGroupScrollZ_2": {
                "node": "HexForceFieldGroup",
                "socket_index": 2,
                "input_index": 2,
                "input": "ScrollZ"
            },
            "hexForceFieldGroupScrollWave_3": {
                "node": "HexForceFieldGroup",
                "socket_index": 3,
                "input_index": 3,
                "input": "ScrollWave"
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
        material.hexForceFieldGroupStrength_0 = hexForceFieldGroupStrength_0;
        material.hexForceFieldGroupFac_1 = hexForceFieldGroupFac_1;
        material.hexForceFieldGroupScrollZ_2 = hexForceFieldGroupScrollZ_2;
        material.hexForceFieldGroupScrollWave_3 = hexForceFieldGroupScrollWave_3;

        material.definition = {
            "links": [
                {
                    "from": 1,
                    "from_node": "HexForceFieldGroup",
                    "from_node_name": "HexForceFieldGroup",
                    "from_socket": {
                        "name": "Output",
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
                        "name": "Strength",
                        "type": "NodeSocketVector",
                        "socket_index": 0
                    },
                    "to": 1,
                    "to_socket": {
                        "name": "Strength",
                        "type": "NodeSocketVector",
                        "socket_index": 0
                    }
                },
                {
                    "from": 2,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "Fac",
                        "type": "NodeSocketFloatFactor",
                        "socket_index": 1
                    },
                    "to": 1,
                    "to_socket": {
                        "name": "Fac",
                        "type": "NodeSocketFloatFactor",
                        "socket_index": 1
                    }
                },
                {
                    "from": 2,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "ScrollZ",
                        "type": "NodeSocketFloat",
                        "socket_index": 2
                    },
                    "to": 1,
                    "to_socket": {
                        "name": "ScrollZ",
                        "type": "NodeSocketFloat",
                        "socket_index": 2
                    }
                },
                {
                    "from": 2,
                    "from_node": "Group Input",
                    "from_socket": {
                        "name": "ScrollWave",
                        "type": "NodeSocketFloat",
                        "socket_index": 3
                    },
                    "to": 1,
                    "to_socket": {
                        "name": "ScrollWave",
                        "type": "NodeSocketFloat",
                        "socket_index": 3
                    }
                }
            ],
            "nodes": [
                {
                    "child_def": 0,
                    "dimensions": {
                        "height": 117.44169616699219,
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
                        "x": 1189.1241455078125,
                        "y": 30.441696166992188
                    },
                    "name": "Group Output",
                    "options": {},
                    "outputs": [],
                    "type": "NodeGroupOutput"
                },
                {
                    "child_def": 1,
                    "dimensions": {
                        "height": 167.1832275390625,
                        "width": 233.59417724609375
                    },
                    "id": 1,
                    "inputs": [
                        {
                            "default_value": [
                                0,
                                0,
                                0
                            ],
                            "name": "Strength",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": 2.3000001907348633,
                            "name": "ScrollZ",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": -0.20000004768371582,
                            "name": "ScrollWave",
                            "socket_index": 3,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "location": {
                        "x": 873.7473754882812,
                        "y": 18.183231353759766
                    },
                    "name": "HexForceFieldGroup",
                    "node_name": "HexForceFieldGroup",
                    "options": {},
                    "outputs": [
                        {
                            "name": "Output",
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
                                0,
                                0,
                                0
                            ],
                            "name": "Strength",
                            "socket_index": 0,
                            "type": "NodeSocketVector"
                        },
                        {
                            "default_value": 0.5,
                            "name": "Fac",
                            "socket_index": 1,
                            "type": "NodeSocketFloatFactor"
                        },
                        {
                            "default_value": 2.3000001907348633,
                            "name": "ScrollZ",
                            "socket_index": 2,
                            "type": "NodeSocketFloat"
                        },
                        {
                            "default_value": -0.20000004768371582,
                            "name": "ScrollWave",
                            "socket_index": 3,
                            "type": "NodeSocketFloat"
                        }
                    ],
                    "type": "NodeGroupInput"
                }
            ],
            "defaultInputs": [
                {
                    "default_value": [
                        0,
                        0,
                        0
                    ],
                    "name": "Strength",
                    "socket_index": 0,
                    "type": "NodeSocketVector"
                },
                {
                    "default_value": 0.5,
                    "name": "Fac",
                    "socket_index": 1,
                    "type": "NodeSocketFloatFactor"
                },
                {
                    "default_value": 2.3000001907348633,
                    "name": "ScrollZ",
                    "socket_index": 2,
                    "type": "NodeSocketFloat"
                },
                {
                    "default_value": -0.20000004768371582,
                    "name": "ScrollWave",
                    "socket_index": 3,
                    "type": "NodeSocketFloat"
                }
            ]
        }
        return Layout.process(material);
    }

}