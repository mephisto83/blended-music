
import Materials from './materials';
export default class GroupMaterials extends Materials {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = null;
  }
  static MaterialNames() {
    return ["Material001"]
  }
  static Types() {
    var res = super.Types();
    return {
      ...res
    }
  }



  static Material001(principled$BSDFSubsurface, principled$BSDFSubsurface$Radius, principled$BSDFSubsurface$Color, principled$BSDFMetallic, principled$BSDFSpecular, principled$BSDFSpecular$Tint, principled$BSDFRoughness, principled$BSDFAnisotropic, principled$BSDFAnisotropic$Rotation, principled$BSDFSheen, principled$BSDFSheen$Tint, principled$BSDFClearcoat, principled$BSDFClearcoat$Roughness, principled$BSDFIOR, principled$BSDFTransmission, principled$BSDFTransmission$Roughness, principled$BSDFNormal, principled$BSDFClearcoat$Normal, principled$BSDFTangent, voronoi$TextureScale, voronoi$TextureExponent, noise$TextureVector, noise$TextureScale, noise$TextureDetail, noise$TextureDistortion) {
    var material = new GroupMaterials('Material.001')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
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
      },
      "voronoi$TextureScale": {
        "node": "Voronoi Texture",
        "socket_index": 1,
        "input": "Scale"
      },
      "voronoi$TextureExponent": {
        "node": "Voronoi Texture",
        "socket_index": 2,
        "input": "Exponent"
      },
      "noise$TextureVector": {
        "node": "Noise Texture",
        "socket_index": 0,
        "input": "Vector"
      },
      "noise$TextureScale": {
        "node": "Noise Texture",
        "socket_index": 1,
        "input": "Scale"
      },
      "noise$TextureDetail": {
        "node": "Noise Texture",
        "socket_index": 2,
        "input": "Detail"
      },
      "noise$TextureDistortion": {
        "node": "Noise Texture",
        "socket_index": 3,
        "input": "Distortion"
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
    material.voronoi$TextureScale = voronoi$TextureScale;
    material.voronoi$TextureExponent = voronoi$TextureExponent;
    material.noise$TextureVector = noise$TextureVector;
    material.noise$TextureScale = noise$TextureScale;
    material.noise$TextureDetail = noise$TextureDetail;
    material.noise$TextureDistortion = noise$TextureDistortion;

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
          "from": 9,
          "from_node": "Geometry",
          "from_socket": {
            "name": "Position",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 11,
          "to_node": "Mapping.001",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 8,
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
          "from": 8,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
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
          "from": 10,
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
          "from": 8,
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
          "from": 10,
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
          "from": 10,
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
          "from": 11,
          "from_node": "Mapping.001",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
          "from": 12,
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
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 2,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Exponent",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 2,
          "to_socket": {
            "name": "Exponent",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 0
          },
          "to": 10,
          "to_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 0
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 10,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 10,
          "to_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 10,
          "to_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 3
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
            "x": 1850.75830078125,
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
            "x": 1560.75830078125,
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
            "x": 1375.159423828125,
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
            "width": 319.99993896484375
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
            "x": 994.4671020507812,
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
            "width": 140
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
            "x": 806.0626831054688,
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
            "x": 558.3839111328125,
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
            "height": 119.31466674804688,
            "width": 140
          },
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
            "x": 201.0115966796875,
            "y": 424.3146667480469
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
          "child_def": 9,
          "dimensions": {
            "height": 204.40939331054688,
            "width": 140
          },
          "id": 9,
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
          "child_def": 10,
          "dimensions": {
            "height": 163.18975830078125,
            "width": 140
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
          "child_def": 11,
          "dimensions": {
            "height": 275.8635559082031,
            "width": 320
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
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 12,
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
        }
      ]
    }
    return material;
  }

}