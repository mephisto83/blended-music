
import Materials from '../materials';
export default class TreeRoot extends Materials {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = null;
  }
  static MaterialNames() {
    return ["Roots"]
  }
  static Types() {
    var res = super.Types();
    return {
      ...res
    }
  }



  static Roots_(args) {
    let {
      principled$BSDFSubsurface_0, principled$BSDFSubsurface$Radius_1,
       principled$BSDFSubsurface$Color_2, principled$BSDFMetallic_3, principled$BSDFSpecular_4, principled$BSDFSpecular$Tint_5,
        principled$BSDFRoughness_6, principled$BSDFAnisotropic_7,
      principled$BSDFAnisotropic$Rotation_8, principled$BSDFSheen_9, principled$BSDFSheen$Tint_10, principled$BSDFClearcoat_11, 
      principled$BSDFClearcoat$Roughness_12, principled$BSDFIOR_13, principled$BSDFTransmission_14, principled$BSDFTransmission$Roughness_15,
       principled$BSDFNormal_16, principled$BSDFClearcoat$Normal_17, principled$BSDFTangent_18, voronoi$TextureScale_19, voronoi$TextureExponent_20, 
       noise$TextureVector_21, noise$TextureScale_22, noise$TextureDetail_23, noise$TextureDistortion_24, math003Value_25 } = args;
    return TreeRoot.Roots(principled$BSDFSubsurface_0, principled$BSDFSubsurface$Radius_1, principled$BSDFSubsurface$Color_2, principled$BSDFMetallic_3, principled$BSDFSpecular_4, principled$BSDFSpecular$Tint_5, principled$BSDFRoughness_6, principled$BSDFAnisotropic_7, principled$BSDFAnisotropic$Rotation_8, principled$BSDFSheen_9, principled$BSDFSheen$Tint_10, principled$BSDFClearcoat_11, principled$BSDFClearcoat$Roughness_12, principled$BSDFIOR_13, principled$BSDFTransmission_14, principled$BSDFTransmission$Roughness_15, principled$BSDFNormal_16, principled$BSDFClearcoat$Normal_17, principled$BSDFTangent_18, voronoi$TextureScale_19, voronoi$TextureExponent_20, noise$TextureVector_21, noise$TextureScale_22, noise$TextureDetail_23, noise$TextureDistortion_24, math003Value_25)
  }
  static Roots(principled$BSDFSubsurface_0, principled$BSDFSubsurface$Radius_1, principled$BSDFSubsurface$Color_2, principled$BSDFMetallic_3, principled$BSDFSpecular_4, principled$BSDFSpecular$Tint_5, principled$BSDFRoughness_6, principled$BSDFAnisotropic_7, principled$BSDFAnisotropic$Rotation_8, principled$BSDFSheen_9, principled$BSDFSheen$Tint_10, principled$BSDFClearcoat_11, principled$BSDFClearcoat$Roughness_12, principled$BSDFIOR_13, principled$BSDFTransmission_14, principled$BSDFTransmission$Roughness_15, principled$BSDFNormal_16, principled$BSDFClearcoat$Normal_17, principled$BSDFTangent_18, voronoi$TextureScale_19, voronoi$TextureExponent_20, noise$TextureVector_21, noise$TextureScale_22, noise$TextureDetail_23, noise$TextureDistortion_24, math003Value_25) {
    var material = new TreeRoot('Roots')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "principled$BSDFSubsurface_0": {
        "node": "Principled BSDF",
        "socket_index": 1,
        "input_index": 0,
        "input": "Subsurface"
      },
      "principled$BSDFSubsurface$Radius_1": {
        "node": "Principled BSDF",
        "socket_index": 2,
        "input_index": 1,
        "input": "Subsurface Radius"
      },
      "principled$BSDFSubsurface$Color_2": {
        "node": "Principled BSDF",
        "socket_index": 3,
        "input_index": 2,
        "input": "Subsurface Color"
      },
      "principled$BSDFMetallic_3": {
        "node": "Principled BSDF",
        "socket_index": 4,
        "input_index": 3,
        "input": "Metallic"
      },
      "principled$BSDFSpecular_4": {
        "node": "Principled BSDF",
        "socket_index": 5,
        "input_index": 4,
        "input": "Specular"
      },
      "principled$BSDFSpecular$Tint_5": {
        "node": "Principled BSDF",
        "socket_index": 6,
        "input_index": 5,
        "input": "Specular Tint"
      },
      "principled$BSDFRoughness_6": {
        "node": "Principled BSDF",
        "socket_index": 7,
        "input_index": 6,
        "input": "Roughness"
      },
      "principled$BSDFAnisotropic_7": {
        "node": "Principled BSDF",
        "socket_index": 8,
        "input_index": 7,
        "input": "Anisotropic"
      },
      "principled$BSDFAnisotropic$Rotation_8": {
        "node": "Principled BSDF",
        "socket_index": 9,
        "input_index": 8,
        "input": "Anisotropic Rotation"
      },
      "principled$BSDFSheen_9": {
        "node": "Principled BSDF",
        "socket_index": 10,
        "input_index": 9,
        "input": "Sheen"
      },
      "principled$BSDFSheen$Tint_10": {
        "node": "Principled BSDF",
        "socket_index": 11,
        "input_index": 10,
        "input": "Sheen Tint"
      },
      "principled$BSDFClearcoat_11": {
        "node": "Principled BSDF",
        "socket_index": 12,
        "input_index": 11,
        "input": "Clearcoat"
      },
      "principled$BSDFClearcoat$Roughness_12": {
        "node": "Principled BSDF",
        "socket_index": 13,
        "input_index": 12,
        "input": "Clearcoat Roughness"
      },
      "principled$BSDFIOR_13": {
        "node": "Principled BSDF",
        "socket_index": 14,
        "input_index": 13,
        "input": "IOR"
      },
      "principled$BSDFTransmission_14": {
        "node": "Principled BSDF",
        "socket_index": 15,
        "input_index": 14,
        "input": "Transmission"
      },
      "principled$BSDFTransmission$Roughness_15": {
        "node": "Principled BSDF",
        "socket_index": 16,
        "input_index": 15,
        "input": "Transmission Roughness"
      },
      "principled$BSDFNormal_16": {
        "node": "Principled BSDF",
        "socket_index": 17,
        "input_index": 16,
        "input": "Normal"
      },
      "principled$BSDFClearcoat$Normal_17": {
        "node": "Principled BSDF",
        "socket_index": 18,
        "input_index": 17,
        "input": "Clearcoat Normal"
      },
      "principled$BSDFTangent_18": {
        "node": "Principled BSDF",
        "socket_index": 19,
        "input_index": 18,
        "input": "Tangent"
      },
      "voronoi$TextureScale_19": {
        "node": "Voronoi Texture",
        "socket_index": 1,
        "input_index": 19,
        "input": "Scale"
      },
      "voronoi$TextureExponent_20": {
        "node": "Voronoi Texture",
        "socket_index": 2,
        "input_index": 20,
        "input": "Exponent"
      },
      "noise$TextureVector_21": {
        "node": "Noise Texture",
        "socket_index": 0,
        "input_index": 21,
        "input": "Vector"
      },
      "noise$TextureScale_22": {
        "node": "Noise Texture",
        "socket_index": 1,
        "input_index": 22,
        "input": "Scale"
      },
      "noise$TextureDetail_23": {
        "node": "Noise Texture",
        "socket_index": 2,
        "input_index": 23,
        "input": "Detail"
      },
      "noise$TextureDistortion_24": {
        "node": "Noise Texture",
        "socket_index": 3,
        "input_index": 24,
        "input": "Distortion"
      },
      "math003Value_25": {
        "node": "Math.003",
        "socket_index": 1,
        "input_index": 25,
        "input": "Value"
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
    material.principled$BSDFSubsurface_0 = principled$BSDFSubsurface_0;
    material.principled$BSDFSubsurface$Radius_1 = principled$BSDFSubsurface$Radius_1;
    material.principled$BSDFSubsurface$Color_2 = principled$BSDFSubsurface$Color_2;
    material.principled$BSDFMetallic_3 = principled$BSDFMetallic_3;
    material.principled$BSDFSpecular_4 = principled$BSDFSpecular_4;
    material.principled$BSDFSpecular$Tint_5 = principled$BSDFSpecular$Tint_5;
    material.principled$BSDFRoughness_6 = principled$BSDFRoughness_6;
    material.principled$BSDFAnisotropic_7 = principled$BSDFAnisotropic_7;
    material.principled$BSDFAnisotropic$Rotation_8 = principled$BSDFAnisotropic$Rotation_8;
    material.principled$BSDFSheen_9 = principled$BSDFSheen_9;
    material.principled$BSDFSheen$Tint_10 = principled$BSDFSheen$Tint_10;
    material.principled$BSDFClearcoat_11 = principled$BSDFClearcoat_11;
    material.principled$BSDFClearcoat$Roughness_12 = principled$BSDFClearcoat$Roughness_12;
    material.principled$BSDFIOR_13 = principled$BSDFIOR_13;
    material.principled$BSDFTransmission_14 = principled$BSDFTransmission_14;
    material.principled$BSDFTransmission$Roughness_15 = principled$BSDFTransmission$Roughness_15;
    material.principled$BSDFNormal_16 = principled$BSDFNormal_16;
    material.principled$BSDFClearcoat$Normal_17 = principled$BSDFClearcoat$Normal_17;
    material.principled$BSDFTangent_18 = principled$BSDFTangent_18;
    material.voronoi$TextureScale_19 = voronoi$TextureScale_19;
    material.voronoi$TextureExponent_20 = voronoi$TextureExponent_20;
    material.noise$TextureVector_21 = noise$TextureVector_21;
    material.noise$TextureScale_22 = noise$TextureScale_22;
    material.noise$TextureDetail_23 = noise$TextureDetail_23;
    material.noise$TextureDistortion_24 = noise$TextureDistortion_24;
    material.math003Value_25 = math003Value_25;

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
          "from_node": "Voronoi Texture",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 1,
          "to_node": "Principled BSDF",
          "to_socket": {
            "name": "Base Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 3,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 2,
          "to_node": "Voronoi Texture",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 8,
          "from_node": "Geometry",
          "from_socket": {
            "name": "Position",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 10,
          "to_node": "Mapping.001",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 11,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 11,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Z",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 6,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Z",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 5,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 7,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Mapping.001",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 11,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface Radius",
            "type": "NodeSocketVector",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface Radius",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Subsurface Color",
            "type": "NodeSocketColor",
            "socket_index": 2
          },
          "to": 1,
          "to_socket": {
            "name": "Subsurface Color",
            "type": "NodeSocketColor",
            "socket_index": 3
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Metallic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 3
          },
          "to": 1,
          "to_socket": {
            "name": "Metallic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Specular",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          },
          "to": 1,
          "to_socket": {
            "name": "Specular",
            "type": "NodeSocketFloatFactor",
            "socket_index": 5
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Specular Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 5
          },
          "to": 1,
          "to_socket": {
            "name": "Specular Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 6
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 6
          },
          "to": 1,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 7
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Anisotropic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 7
          },
          "to": 1,
          "to_socket": {
            "name": "Anisotropic",
            "type": "NodeSocketFloatFactor",
            "socket_index": 8
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Anisotropic Rotation",
            "type": "NodeSocketFloatFactor",
            "socket_index": 8
          },
          "to": 1,
          "to_socket": {
            "name": "Anisotropic Rotation",
            "type": "NodeSocketFloatFactor",
            "socket_index": 9
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sheen",
            "type": "NodeSocketFloatFactor",
            "socket_index": 9
          },
          "to": 1,
          "to_socket": {
            "name": "Sheen",
            "type": "NodeSocketFloatFactor",
            "socket_index": 10
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sheen Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 10
          },
          "to": 1,
          "to_socket": {
            "name": "Sheen Tint",
            "type": "NodeSocketFloatFactor",
            "socket_index": 11
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat",
            "type": "NodeSocketFloatFactor",
            "socket_index": 11
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat",
            "type": "NodeSocketFloatFactor",
            "socket_index": 12
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 12
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 13
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 13
          },
          "to": 1,
          "to_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 14
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Transmission",
            "type": "NodeSocketFloatFactor",
            "socket_index": 14
          },
          "to": 1,
          "to_socket": {
            "name": "Transmission",
            "type": "NodeSocketFloatFactor",
            "socket_index": 15
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Transmission Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 15
          },
          "to": 1,
          "to_socket": {
            "name": "Transmission Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 16
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 16
          },
          "to": 1,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 17
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Clearcoat Normal",
            "type": "NodeSocketVector",
            "socket_index": 17
          },
          "to": 1,
          "to_socket": {
            "name": "Clearcoat Normal",
            "type": "NodeSocketVector",
            "socket_index": 18
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Tangent",
            "type": "NodeSocketVector",
            "socket_index": 18
          },
          "to": 1,
          "to_socket": {
            "name": "Tangent",
            "type": "NodeSocketVector",
            "socket_index": 19
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 19
          },
          "to": 2,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Exponent",
            "type": "NodeSocketFloat",
            "socket_index": 20
          },
          "to": 2,
          "to_socket": {
            "name": "Exponent",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 21
          },
          "to": 9,
          "to_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 0
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 22
          },
          "to": 9,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 23
          },
          "to": 9,
          "to_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 24
          },
          "to": 9,
          "to_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 25
          },
          "to": 12,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
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
            "x": 1933.385986328125,
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
              "default_value": 0,
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
            "x": 1643.385986328125,
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
          "child_def": 2,
          "coloring": "CELLS",
          "dimensions": {
            "height": 201.28466796875,
            "width": 140
          },
          "distance": "DISTANCE",
          "feature": "F1",
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
            },
            {
              "default_value": 2.1100029945373535,
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
            "x": 1457.787109375,
            "y": 333.6846618652344
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
          "child_def": 3,
          "dimensions": {
            "height": 275.2439270019531,
            "width": 320
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
            }
          ],
          "location": {
            "x": 1077.0947265625,
            "y": 403.2439270019531
          },
          "name": "Mapping",
          "options": {},
          "outputs": [
            {
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 4,
          "dimensions": {
            "height": 119.959228515625,
            "width": 140.00006103515625
          },
          "id": 4,
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
            "x": 888.6903686523438,
            "y": 305.959228515625
          },
          "name": "Combine XYZ",
          "options": {},
          "outputs": [
            {
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeCombineXYZ"
        },
        {
          "child_def": 5,
          "dimensions": {
            "height": 152.84033203125,
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
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 641.0115966796875,
            "y": 312.84033203125
          },
          "name": "Math.001",
          "operation": "ADD",
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
          "child_def": 6,
          "dimensions": {
            "height": 152.6932373046875,
            "width": 140
          },
          "id": 6,
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
            "x": 564.0831298828125,
            "y": 147.6932373046875
          },
          "name": "Math.002",
          "operation": "ADD",
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
          "child_def": 7,
          "dimensions": {
            "height": 152.62109375,
            "width": 140
          },
          "id": 7,
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
            "x": 563.8787841796875,
            "y": 487.62109375
          },
          "name": "Math",
          "operation": "ADD",
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
          "child_def": 8,
          "dimensions": {
            "height": 204.40939331054688,
            "width": 140
          },
          "id": 8,
          "inputs": [],
          "location": {
            "x": -522.0176391601562,
            "y": 392.4093933105469
          },
          "name": "Geometry",
          "options": {},
          "outputs": [
            {
              "name": "Position",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "Normal",
              "socket_index": 1,
              "type": "NodeSocketVector"
            },
            {
              "name": "Tangent",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "name": "True Normal",
              "socket_index": 3,
              "type": "NodeSocketVector"
            },
            {
              "name": "Incoming",
              "socket_index": 4,
              "type": "NodeSocketVector"
            },
            {
              "name": "Parametric",
              "socket_index": 5,
              "type": "NodeSocketVector"
            },
            {
              "name": "Backfacing",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "name": "Pointiness",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeNewGeometry"
        },
        {
          "child_def": 9,
          "dimensions": {
            "height": 163.18975830078125,
            "width": 140
          },
          "id": 9,
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
              "default_value": 1.5,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Detail",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 7.799999237060547,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 177.75384521484375,
            "y": 172.18975830078125
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
          "child_def": 10,
          "dimensions": {
            "height": 275.8635559082031,
            "width": 320
          },
          "id": 10,
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
            "x": -270.6195983886719,
            "y": 463.8635559082031
          },
          "name": "Mapping.001",
          "options": {},
          "outputs": [
            {
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 11,
          "dimensions": {
            "height": 119.39920043945312,
            "width": 140
          },
          "id": 11,
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
            "x": 93.44132995605469,
            "y": 440.3992004394531
          },
          "name": "Separate XYZ",
          "options": {},
          "outputs": [
            {
              "name": "X",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "Y",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeSeparateXYZ"
        },
        {
          "child_def": 12,
          "dimensions": {
            "height": 152.20181274414062,
            "width": 140
          },
          "id": 12,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 8.299999237060547,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 337.54296875,
            "y": 390.2018127441406
          },
          "name": "Math.003",
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
            "height": 108,
            "width": 140
          },
          "id": 13,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
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
              "default_value": 0,
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
            },
            {
              "default_value": 2.1100029945373535,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Exponent",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
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
              "default_value": 1.5,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Detail",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 7.799999237060547,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 8.299999237060547,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0,
          "name": "Subsurface",
          "socket_index": 0,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            1,
            0.20000000298023224,
            0.10000000149011612
          ],
          "name": "Subsurface Radius",
          "socket_index": 1,
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
          "socket_index": 2,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0,
          "name": "Metallic",
          "socket_index": 3,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Specular",
          "socket_index": 4,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Specular Tint",
          "socket_index": 5,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "Roughness",
          "socket_index": 6,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Anisotropic",
          "socket_index": 7,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Anisotropic Rotation",
          "socket_index": 8,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Sheen",
          "socket_index": 9,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "Sheen Tint",
          "socket_index": 10,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Clearcoat",
          "socket_index": 11,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.029999999329447746,
          "name": "Clearcoat Roughness",
          "socket_index": 12,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1.4500000476837158,
          "name": "IOR",
          "socket_index": 13,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Transmission",
          "socket_index": 14,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0,
          "name": "Transmission Roughness",
          "socket_index": 15,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 16,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Clearcoat Normal",
          "socket_index": 17,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Tangent",
          "socket_index": 18,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 2.1100029945373535,
          "name": "Scale",
          "socket_index": 19,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Exponent",
          "socket_index": 20,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Vector",
          "socket_index": 21,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 1.5,
          "name": "Scale",
          "socket_index": 22,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Detail",
          "socket_index": 23,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 7.799999237060547,
          "name": "Distortion",
          "socket_index": 24,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 8.299999237060547,
          "name": "Value",
          "socket_index": 25,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return material;
  }

}