
import Layout from '../../layout/graphlayout';
import Materials from '../materials';
export default class ScatterField extends Materials {
  constructor(name) {
    super(name);
    this.name = name;
    this.type = null;
  }
  static MaterialNames() {
    return ["Bool_ANDGroup", "brick_tile_uvwGroup", "CartesianToPolar_SlowGroup", "CenterUVGroup", "Conditional_AddGroup", "FloorGroup", "CartesianToPolarGroup", "HexaTilesGroup", "NGonGroup", "NGonTilesGroup", "NGonTilesOffsetGroup", "NodeGroupGroup", "Offset2DGroup", "RandomGroup", "RotateGroup", "Rotate2DGroup", "Scale2DGroup", "SmoothStepGroup", "SwitchGroup", "tile_every_N_rowGroup", "tile_singleGroup", "tile_uvwGroup", "tile_uvw_2Group", "tile_uvw_offsetGroup", "dist_mtl", "dist_mtl001", "hexa_mtl", "Material", "N_GonMtl", "SimpleHexGM", "tri_mtrl"]
  }
  static Types() {
    var res = super.Types();
    return {
      ...res
    }
  }


  static Bool_ANDGroup(cond_A_0, cond_B_1) {
    var material = new ScatterField('Bool_AND')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "cond_A_0": 0,
      "cond_B_1": 1
    }
    material.outputs = {
      "Result": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Result": 0
    }
    material.cond_A_0 = cond_A_0;
    material.cond_B_1 = cond_B_1;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "cond_A",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "cond_B",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.014",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 87,
            "width": 140
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": -400,
            "y": -60
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "cond_A",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "cond_B",
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
            "height": 145.28497314453125,
            "width": 140
          },
          "id": 1,
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
            "x": -122.37890625,
            "y": 12.28497314453125
          },
          "name": "Math.014",
          "operation": "MINIMUM",
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
            "height": 65.35043334960938,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 112.95857238769531,
            "y": 3.350433349609375
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "cond_A",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "cond_B",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static brick_tile_uvwGroup(uVW_0, tileU_1, tileV_2) {
    var material = new ScatterField('brick_tile_uvw')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "tileV_2": 2
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.tileV_2 = tileV_2;

    material.definition = {
      "links": [
        {
          "from": 10,
          "from_node": "Input",
          "from_socket": {
            "name": "UVW",
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
          "from": 11,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
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
          "to": 0,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Input",
          "from_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Input",
          "from_socket": {
            "name": "tileV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 146.07774353027344,
            "width": 140
          },
          "id": 0,
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
            "x": -884.4487915039062,
            "y": 40.07773971557617
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 147.2672119140625,
            "width": 140
          },
          "id": 1,
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
            "x": -899.4497680664062,
            "y": 323.2672119140625
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 147.65185546875,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -521.24560546875,
            "y": 825.65185546875
          },
          "name": "Math.002",
          "operation": "MODULO",
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
            "height": 147.7005615234375,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -314.860595703125,
            "y": 900.7005615234375
          },
          "name": "Math.003",
          "operation": "GREATER_THAN",
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
            "height": 100.52825927734375,
            "width": 253.58740234375
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 359.5301513671875,
            "y": 331.52825927734375
          },
          "name": "Group",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 147.0374755859375,
            "width": 139.99998474121094
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
            "x": 134.97645568847656,
            "y": 526.0374755859375
          },
          "name": "Math.006",
          "operation": "ADD",
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
            "height": 147.75323486328125,
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
            "x": -98.50625610351562,
            "y": 778.7532348632812
          },
          "name": "Math.004",
          "operation": "MULTIPLY",
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
            "height": 114.9840087890625,
            "width": 147.7581787109375
          },
          "id": 7,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 805.833740234375,
            "y": 356.9840087890625
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
            "height": 67.58419799804688,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1286.7489013671875,
            "y": 351.5841979980469
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 100.30491638183594,
            "width": 249.04397583007812
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 359.8748474121094,
            "y": 205.30491638183594
          },
          "name": "Group.001",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 107.73404693603516,
            "width": 140
          },
          "id": 10,
          "inputs": [],
          "location": {
            "x": -1696.2969970703125,
            "y": -47.265953063964844
          },
          "name": "Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 114.98306274414062,
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
            "x": -1386.90234375,
            "y": 229.98306274414062
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
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "tileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "tileV",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static CartesianToPolar_SlowGroup(vector_0) {
    var material = new ScatterField('CartesianToPolar_Slow')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "vector_0": 0
    }
    material.outputs = {
      "Vector": "NodeSocketVector"
    }
    material.outputIndexes = {
      "Vector": 0
    }
    material.vector_0 = vector_0;

    material.definition = {
      "links": [
        {
          "from": 4,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 10,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Z",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Z",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 29,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 20,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math.011",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 23,
          "to_node": "Reroute.005",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 22,
          "to_node": "Reroute.004",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 21,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 24,
          "to_node": "Group.001",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_A",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 23,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 24,
          "to_node": "Group.001",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_B",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group.002",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_A",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 23,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group.002",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_B",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 25,
          "to_node": "Group.003",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_A",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 25,
          "to_node": "Group.003",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_B",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 26,
          "to_node": "Group.004",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_A",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 26,
          "to_node": "Group.004",
          "to_node_name": "Bool_AND",
          "to_socket": {
            "name": "cond_B",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 29,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 28,
          "to_node": "Reroute.006",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Group.002",
          "from_node_name": "Bool_AND",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 27,
          "to_node": "Group",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 28,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 27,
          "to_node": "Group",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 27,
          "from_node": "Group",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 30,
          "to_node": "Group.007",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 24,
          "from_node": "Group.001",
          "from_node_name": "Bool_AND",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 30,
          "to_node": "Group.007",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Math.008",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 30,
          "to_node": "Group.007",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 25,
          "from_node": "Group.003",
          "from_node_name": "Bool_AND",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group.008",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 30,
          "from_node": "Group.007",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group.008",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Math.012",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group.008",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Group.008",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 34,
          "to_node": "Group.009",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 26,
          "from_node": "Group.004",
          "from_node_name": "Bool_AND",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 34,
          "to_node": "Group.009",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.013",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 34,
          "to_node": "Group.009",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 33,
          "from_node": "Reroute.007",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 28,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 28,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 31,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 31,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 34,
          "from_node": "Group.009",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 32,
          "to_node": "Combine XYZ.001",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 31,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 5,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 34,
          "from_node": "Group.009",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 33,
          "to_node": "Reroute.007",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 146.0621337890625,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -169.8067626953125,
            "y": 113.0621337890625
          },
          "name": "Math.001",
          "operation": "POWER",
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
            "height": 146.02090454101562,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 40.509765625,
            "y": 81.0208969116211
          },
          "name": "Math.003",
          "operation": "ADD",
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
            "height": 147.87913513183594,
            "width": 140
          },
          "id": 2,
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
            "x": 245.7177734375,
            "y": 156.87913513183594
          },
          "name": "Math",
          "operation": "POWER",
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
            "height": 145.4452362060547,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -172.74072265625,
            "y": -45.55476379394531
          },
          "name": "Math.002",
          "operation": "POWER",
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
            "height": 67,
            "width": 140
          },
          "id": 4,
          "inputs": [],
          "location": {
            "x": -2200,
            "y": 80
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
              "name": "Vector",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 67,
            "width": 140
          },
          "id": 5,
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
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 2700,
            "y": 140
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
          "id": 6,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1500,
            "y": -960
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1080,
            "y": -920
          },
          "name": "Math.011",
          "operation": "SUBTRACT",
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
            "height": 16,
            "width": 16
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1500,
            "y": -860
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1360,
            "y": -700
          },
          "name": "Math.006",
          "operation": "LESS_THAN",
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
            "height": 114,
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
            }
          ],
          "location": {
            "x": -1980,
            "y": 100
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
            "height": 146,
            "width": 140
          },
          "id": 11,
          "inputs": [
            {
              "default_value": 6.283180236816406,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.141590118408203,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 140,
            "y": -1060
          },
          "name": "Math.013",
          "operation": "SUBTRACT",
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
            "height": 142,
            "width": 190.768310546875
          },
          "id": 12,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.1419999599456787,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 740,
            "y": -420
          },
          "name": "Group.008",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1380,
            "y": -880
          },
          "name": "Math.007",
          "operation": "LESS_THAN",
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
            "height": 146,
            "width": 140
          },
          "id": 14,
          "inputs": [
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1080,
            "y": -720
          },
          "name": "Math.010",
          "operation": "SUBTRACT",
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
            "height": 121,
            "width": 197.802001953125
          },
          "id": 15,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "cond_A",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "cond_B",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -560,
            "y": -620
          },
          "name": "Group.002",
          "node_name": "Bool_AND",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 3.1419999599456787,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.141590118408203,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 140,
            "y": -840
          },
          "name": "Math.012",
          "operation": "ADD",
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
            "height": 146,
            "width": 140
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 3.1419999599456787,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.1419999599456787,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 140,
            "y": -580
          },
          "name": "Math.008",
          "operation": "SUBTRACT",
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
            "height": 146,
            "width": 140
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -600,
            "y": -280
          },
          "name": "Math.005",
          "operation": "DIVIDE",
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
            "height": 114,
            "width": 140
          },
          "id": 19,
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
            "x": 2140,
            "y": 220
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
            "height": 16,
            "width": 16
          },
          "id": 20,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -840,
            "y": -740
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 21,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -840,
            "y": -700
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 22,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -840,
            "y": -880
          },
          "name": "Reroute.004",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 23,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -840,
            "y": -940
          },
          "name": "Reroute.005",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 121,
            "width": 197.802001953125
          },
          "id": 24,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "cond_A",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "cond_B",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -560,
            "y": -760
          },
          "name": "Group.001",
          "node_name": "Bool_AND",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 121,
            "width": 197.802001953125
          },
          "id": 25,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "cond_A",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "cond_B",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -560,
            "y": -920
          },
          "name": "Group.003",
          "node_name": "Bool_AND",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 121,
            "width": 197.802001953125
          },
          "id": 26,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "cond_A",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "cond_B",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -560,
            "y": -1080
          },
          "name": "Group.004",
          "node_name": "Bool_AND",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 142,
            "width": 190.768310546875
          },
          "id": 27,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.1419999599456787,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 120,
            "y": -340
          },
          "name": "Group",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 28,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -92.0091552734375,
            "y": -298.962158203125
          },
          "name": "Reroute.006",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 29,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -380,
            "y": -260
          },
          "name": "Math.004",
          "operation": "ARCTANGENT",
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
            "height": 142,
            "width": 190.768310546875
          },
          "id": 30,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.1419999599456787,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 460,
            "y": -420
          },
          "name": "Group.007",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 31,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -160,
            "y": -780
          },
          "name": "Math.009",
          "operation": "ABSOLUTE",
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
            "height": 112,
            "width": 140
          },
          "id": 32,
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
            "x": 1460,
            "y": -400
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
            "height": 16,
            "width": 16
          },
          "id": 33,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1500,
            "y": -240
          },
          "name": "Reroute.007",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 142,
            "width": 190.768310546875
          },
          "id": 34,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.1419999599456787,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1040,
            "y": -420
          },
          "name": "Group.009",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
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
      ]
    }
    return Layout.process(material);
  }


  static CenterUVGroup(uVW_0) {
    var material = new ScatterField('CenterUV')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 0,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 0,
          "from_node": "Mix.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Mix",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        }
      ],
      "nodes": [
        {
          "blend_type": "MULTIPLY",
          "dimensions": {
            "height": 163.6815185546875,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 1,
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
                2,
                2,
                2,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": 110,
            "y": 3.6815185546875
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
          "blend_type": "SUBTRACT",
          "dimensions": {
            "height": 163.318603515625,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 1,
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
            "x": -110,
            "y": -3.681396484375
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
          "dimensions": {
            "height": 65.85298919677734,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -376.1933288574219,
            "y": -84.14701080322266
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 65.05183410644531,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 328.9123840332031,
            "y": 1.0518379211425781
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
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        }
      ]
    }
    return Layout.process(material);
  }


  static Conditional_AddGroup(condition_0, value_1, add_2) {
    var material = new ScatterField('Conditional_Add')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "condition_0": 0,
      "value_1": 1,
      "add_2": 2
    }
    material.outputs = {
      "Result": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Result": 0
    }
    material.condition_0 = condition_0;
    material.value_1 = value_1;
    material.add_2 = add_2;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Math.014",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.013",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Add",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 147,
            "width": 140
          },
          "id": 0,
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
            "x": -220,
            "y": 320
          },
          "name": "Math.013",
          "operation": "MULTIPLY",
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
            "height": 147,
            "width": 140
          },
          "id": 1,
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
            "x": 160,
            "y": 240
          },
          "name": "Math.014",
          "operation": "ADD",
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
            "height": 111,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -880,
            "y": 180
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Add",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 67,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 440,
            "y": 240
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0,
          "name": "Condition",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Add",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static FloorGroup(value_0) {
    var material = new ScatterField('Floor')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "value_0": 0
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.value_0 = value_0;

    material.definition = {
      "links": [
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 146.91552734375,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -111.52394104003906,
            "y": 116.91551971435547
          },
          "name": "Math",
          "operation": "MODULO",
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
            "height": 145.38510131835938,
            "width": 140
          },
          "id": 1,
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
            "x": 105.23080444335938,
            "y": 15.385103225708008
          },
          "name": "Math.001",
          "operation": "SUBTRACT",
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
            "height": 65.09982299804688,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -370.85919189453125,
            "y": -45.900177001953125
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 65.10002899169922,
            "width": 139.99996948242188
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 383.4454650878906,
            "y": 8.100030899047852
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static CartesianToPolarGroup(uVW_0) {
    var material = new ScatterField('CartesianToPolar')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0
    }
    material.outputs = {
      "angle": "NodeSocketFloat",
      "r": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "angle": 0,
      "r": 1
    }
    material.uVW_0 = uVW_0;

    material.definition = {
      "links": [
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Separate XYZ.001",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ.001",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.011",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math.008",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Math.012",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Math.013",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 20,
          "to_node": "Group",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Group",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Group Output",
          "to_socket": {
            "name": "angle",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Group Output",
          "to_socket": {
            "name": "r",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 20,
          "to_node": "Group",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 588.1842041015625,
            "width": 920.0828857421875
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": 1193.67626953125,
            "y": 456.8026123046875
          },
          "name": "Frame.001",
          "options": {},
          "outputs": [],
          "type": "NodeFrame"
        },
        {
          "dimensions": {
            "height": 515.5457153320312,
            "width": 1407.0390625
          },
          "id": 1,
          "inputs": [],
          "location": {
            "x": 1065.3408203125,
            "y": -719.9227294921875
          },
          "name": "Frame",
          "options": {},
          "outputs": [],
          "type": "NodeFrame"
        },
        {
          "dimensions": {
            "height": 67.78829956054688,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -729.7024536132812,
            "y": 289.7882995605469
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 114.27059936523438,
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
            }
          ],
          "location": {
            "x": -407.53863525390625,
            "y": 338.2705993652344
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
            "height": 147.76202392578125,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1064.085693359375,
            "y": 319.95941162109375
          },
          "name": "Math.009",
          "operation": "LESS_THAN",
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
            "height": 147.70733642578125,
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
              "default_value": 0.00009999999747378752,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1059.61962890625,
            "y": 156.90472412109375
          },
          "name": "Math.010",
          "operation": "GREATER_THAN",
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
            "height": 147.4990234375,
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
              "default_value": 0.00009999999747378752,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -805.1231689453125,
            "y": 272.6964111328125
          },
          "name": "Math.011",
          "operation": "MAXIMUM",
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
            "height": 147.9990234375,
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
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1065.2021484375,
            "y": 475.1964111328125
          },
          "name": "Math.008",
          "operation": "LESS_THAN",
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
            "height": 147.199951171875,
            "width": 140
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.00009999999747378752,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -584.0533447265625,
            "y": 279.3973388671875
          },
          "name": "Math.012",
          "operation": "SUBTRACT",
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
            "height": 16,
            "width": 16
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -4.121769428253174,
            "y": 505.25970458984375
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 145.58840942382812,
            "width": 138.79296875
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -968.1488037109375,
            "y": 471.5111389160156
          },
          "name": "Math",
          "operation": "POWER",
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
            "height": 145.253173828125,
            "width": 140
          },
          "id": 11,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -965.7347412109375,
            "y": 318.1759033203125
          },
          "name": "Math.002",
          "operation": "POWER",
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
            "height": 145.38104248046875,
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
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -770.1943969726562,
            "y": 470.30377197265625
          },
          "name": "Math.001",
          "operation": "ADD",
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
            "height": 145.38104248046875,
            "width": 140
          },
          "id": 13,
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
            "x": -408.0826416015625,
            "y": 470.30377197265625
          },
          "name": "Math.004",
          "operation": "ADD",
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
            "height": 145.54571533203125,
            "width": 140
          },
          "id": 14,
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
            "x": -213.7493896484375,
            "y": 628.4684448242188
          },
          "name": "Math.005",
          "operation": "DIVIDE",
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
            "height": 145.54571533203125,
            "width": 140
          },
          "id": 15,
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
            "x": 26.451416015625,
            "y": 628.4684448242188
          },
          "name": "Math.006",
          "operation": "ARCTANGENT",
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
            "height": 147.1842041015625,
            "width": 140
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.00009999999747378752,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -345.1192626953125,
            "y": 537.381591796875
          },
          "name": "Math.013",
          "operation": "MINIMUM",
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
            "height": 145.301513671875,
            "width": 140
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 238.8902587890625,
            "y": 621.2242431640625
          },
          "name": "Math.007",
          "operation": "MULTIPLY",
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
            "height": 89.58447265625,
            "width": 140
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 0,
              "name": "angle",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "r",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 2,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 2265.938232421875,
            "y": 310.58447265625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 145.17367553710938,
            "width": 140
          },
          "id": 19,
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
            "x": -595.1737060546875,
            "y": 469.0964050292969
          },
          "name": "Math.003",
          "operation": "POWER",
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
            "height": 144.24496459960938,
            "width": 194.31689453125
          },
          "id": 20,
          "inputs": [
            {
              "default_value": 0,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1683.305908203125,
            "y": 318.2449645996094
          },
          "name": "Group",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        }
      ]
    }
    return Layout.process(material);
  }


  static HexaTilesGroup(uVW_0, scale_1, size_2, blend_3, randomness_4, rotate_5, sides_6) {
    var material = new ScatterField('HexaTiles')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "scale_1": 1,
      "size_2": 2,
      "blend_3": 3,
      "randomness_4": 4,
      "rotate_5": 5,
      "sides_6": 6
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.uVW_0 = uVW_0;
    material.scale_1 = scale_1;
    material.size_2 = size_2;
    material.blend_3 = blend_3;
    material.randomness_4 = randomness_4;
    material.rotate_5 = rotate_5;
    material.sides_6 = sides_6;

    material.definition = {
      "links": [
        {
          "from": 17,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 14,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 17,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Group",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 12,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group.001",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 11,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 6,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 6,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 3,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 13,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 13,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Reroute.004",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Reroute.005",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Mix",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 9,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 12,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Reroute.006",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 8,
          "from_node": "Mix.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 11,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Mix",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.007",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Reroute.007",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.007",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2658.101318359375,
            "y": -142.60679626464844
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2630.127197265625,
            "y": -345.30023193359375
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2631.913330078125,
            "y": -430.55072021484375
          },
          "name": "Reroute.004",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 3,
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
            "x": -2672.537841796875,
            "y": 202.5183868408203
          },
          "name": "Reroute.005",
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
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2632.595947265625,
            "y": -556.7650146484375
          },
          "name": "Reroute.006",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2637.651611328125,
            "y": -648.8665161132812
          },
          "name": "Reroute.007",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 273.76702880859375,
            "width": 256.995361328125
          },
          "id": 6,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.4999999701976776,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 19.099998474121094,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2589.355712890625,
            "y": 37.76701354980469
          },
          "name": "Group.008",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 7,
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
            "x": -2275.404296875,
            "y": 451.9223327636719
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
          "blend_type": "MIX",
          "dimensions": {
            "height": 169.2129669189453,
            "width": 140
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                1,
                1,
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
            "x": -2080.2314453125,
            "y": 27.212966918945312
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
            "height": 171.23165893554688,
            "width": 140
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                1,
                1,
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
            "x": -2213.5419921875,
            "y": 324.2316589355469
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
          "dimensions": {
            "height": 188.42672729492188,
            "width": 325.4442138671875
          },
          "id": 10,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1837.2108154296875,
            "y": -468.5732727050781
          },
          "name": "Group.001",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 150.609375,
            "width": 140
          },
          "id": 11,
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
            "x": -1352.0911865234375,
            "y": -268.390625
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
            "height": 151.80653381347656,
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
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1484.79443359375,
            "y": 80.80653381347656
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
            "height": 281.9834899902344,
            "width": 256.995361328125
          },
          "id": 13,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10.09999942779541,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2582.434814453125,
            "y": 337.9834899902344
          },
          "name": "Group.007",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 188.29408264160156,
            "width": 325.4442138671875
          },
          "id": 14,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1877.7955322265625,
            "y": -164.70591735839844
          },
          "name": "Group",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 151.91305541992188,
            "width": 140
          },
          "id": 15,
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
            "x": -1201.0810546875,
            "y": 120.91305541992188
          },
          "name": "Math",
          "operation": "ADD",
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
            "height": 67.2266845703125,
            "width": 140
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": -965.110107421875,
            "y": 127.2266845703125
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 16.000015258789062,
            "width": 16
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2643.221923828125,
            "y": -253.49205017089844
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 200.31784057617188,
            "width": 140
          },
          "id": 18,
          "inputs": [],
          "location": {
            "x": -2921.451171875,
            "y": 109.31784057617188
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 7,
              "type": "NodeSocketVirtual"
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
          "name": "UVW",
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
          "default_value": 0.8999999761581421,
          "name": "Size",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "Sides",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static NGonGroup(uVW_0, n_1, size_2, blend_3, rorate_4) {
    var material = new ScatterField('NGon')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "n_1": 1,
      "size_2": 2,
      "blend_3": 3,
      "rorate_4": 4
    }
    material.outputs = {
      "Color": "NodeSocketColor"
    }
    material.outputIndexes = {
      "Color": 0
    }
    material.uVW_0 = uVW_0;
    material.n_1 = n_1;
    material.size_2 = size_2;
    material.blend_3 = blend_3;
    material.rorate_4 = rorate_4;

    material.definition = {
      "links": [
        {
          "from": 20,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 17,
          "to_node": "Group.005",
          "to_node_name": "CartesianToPolar",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Group.005",
          "from_node_name": "CartesianToPolar",
          "from_socket": {
            "name": "r",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group.003",
          "from_node_name": "SmoothStep",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Invert",
          "to_socket": {
            "name": "Color",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 17,
          "from_node": "Group.005",
          "from_node_name": "CartesianToPolar",
          "from_socket": {
            "name": "angle",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Math.008",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.013",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.003",
          "to_node_name": "SmoothStep",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Invert",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 13,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 15,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.003",
          "to_node_name": "SmoothStep",
          "to_socket": {
            "name": "e1",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.003",
          "to_node_name": "SmoothStep",
          "to_socket": {
            "name": "e2",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Math.010",
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
            "height": 145.49075317382812,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 704.546875,
            "y": -384.5092468261719
          },
          "name": "Math.006",
          "operation": "SUBTRACT",
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
            "height": 145.77725219726562,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
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
            "x": -760.8175048828125,
            "y": -212.22274780273438
          },
          "name": "Math.001",
          "operation": "DIVIDE",
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
            "height": 145.77725219726562,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
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
            "x": -585.3838500976562,
            "y": -212.22274780273438
          },
          "name": "Math.002",
          "operation": "ADD",
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
            "height": 147.84445190429688,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
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
            "x": -1760.9735107421875,
            "y": 177.84445190429688
          },
          "name": "Math",
          "operation": "DIVIDE",
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
            "height": 16,
            "width": 16
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1218.200439453125,
            "y": -439.2453308105469
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1048.1419677734375,
            "y": 34.240570068359375
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 145.94680786132812,
            "width": 140
          },
          "id": 6,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 27.896835327148438,
            "y": -161.05319213867188
          },
          "name": "Math.004",
          "operation": "SUBTRACT",
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
            "height": 145.654052734375,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -284.8852233886719,
            "y": -288.345947265625
          },
          "name": "Math.003",
          "operation": "MODULO",
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
            "height": 145.0872802734375,
            "width": 140
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 389.830810546875,
            "y": -297.9127197265625
          },
          "name": "Math.005",
          "operation": "MULTIPLY",
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
            "height": 145.18072509765625,
            "width": 147.87298583984375
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 6.2829999923706055,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 928.4148559570312,
            "y": -338.81927490234375
          },
          "name": "Math.007",
          "operation": "COSINE",
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
            "height": 144.49075317382812,
            "width": 273.5130615234375
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "e1",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "e2",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1744.546875,
            "y": 195.49075317382812
          },
          "name": "Group.003",
          "node_name": "SmoothStep",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 145.49075317382812,
            "width": 140
          },
          "id": 11,
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
            "x": 1284.546875,
            "y": -144.50924682617188
          },
          "name": "Math.013",
          "operation": "MULTIPLY",
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
            "height": 92.60202026367188,
            "width": 140
          },
          "id": 12,
          "inputs": [
            {
              "default_value": 1,
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
              "name": "Color",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": 2098.06005859375,
            "y": 197.60202026367188
          },
          "name": "Invert",
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
          "type": "ShaderNodeInvert"
        },
        {
          "dimensions": {
            "height": 66,
            "width": 140
          },
          "id": 13,
          "inputs": [
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
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 2298.059814453125,
            "y": 0
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 147.37820434570312,
            "width": 140
          },
          "id": 14,
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
            "x": 1049.6837158203125,
            "y": 280.3782043457031
          },
          "name": "Math.009",
          "operation": "SUBTRACT",
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
            "height": 16,
            "width": 16
          },
          "id": 15,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 848.1296997070312,
            "y": 72.30094146728516
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 801.1464233398438,
            "y": 146.71124267578125
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 122.24533081054688,
            "width": 283.55615234375
          },
          "id": 17,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": -1924.1661376953125,
            "y": 439.2453308105469
          },
          "name": "Group.005",
          "node_name": "CartesianToPolar",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "angle",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "r",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 147.01834106445312,
            "width": 140
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3.141590118408203,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1496.1419677734375,
            "y": 292.0183410644531
          },
          "name": "Math.008",
          "operation": "ADD",
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
            "height": 147.16683959960938,
            "width": 140
          },
          "id": 19,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1276.1419677734375,
            "y": 275.1668395996094
          },
          "name": "Math.010",
          "operation": "ADD",
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
            "height": 149.306640625,
            "width": 140
          },
          "id": 20,
          "inputs": [],
          "location": {
            "x": -2496.973388671875,
            "y": -133.693359375
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 5,
              "type": "NodeSocketVirtual"
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
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0.5,
          "name": "N",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Size",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Blend",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rorate",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static NGonTilesGroup(uVW_0, tileU_1, size_2, blend_3, randomness_4, n_5, rotate$A_6, maxU_7, maxV_8) {
    var material = new ScatterField('NGonTiles')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "size_2": 2,
      "blend_3": 3,
      "randomness_4": 4,
      "n_5": 5,
      "rotate$A_6": 6,
      "maxU_7": 7,
      "maxV_8": 8
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.size_2 = size_2;
    material.blend_3 = blend_3;
    material.randomness_4 = randomness_4;
    material.n_5 = n_5;
    material.rotate$A_6 = rotate$A_6;
    material.maxU_7 = maxU_7;
    material.maxV_8 = maxV_8;

    material.definition = {
      "links": [
        {
          "from": 11,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
          "from_node": "Group",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 14,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 5,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Reroute.004",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 4,
          "to_node": "Reroute.005",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 6,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Mix",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 1,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 14,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Reroute.006",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Mix",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "TileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.007",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate A",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Reroute.007",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "socket_index": 7,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Reroute.009",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "socket_index": 8,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Reroute.010",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.009",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Reroute.010",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 0,
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
            "x": -927.15087890625,
            "y": 543.65966796875
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
          "blend_type": "MIX",
          "dimensions": {
            "height": 166.2320556640625,
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
              "default_value": [
                1,
                1,
                1,
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
            "x": -564.222412109375,
            "y": 407.2320556640625
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
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1979.99853515625,
            "y": -332.1949157714844
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1981.78466796875,
            "y": -417.4454040527344
          },
          "name": "Reroute.004",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 4,
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
            "x": -2022.4091796875,
            "y": 215.62371826171875
          },
          "name": "Reroute.005",
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
          "dimensions": {
            "height": 276.5506591796875,
            "width": 256.9952392578125
          },
          "id": 5,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10.09999942779541,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1680.985107421875,
            "y": 346.5506591796875
          },
          "name": "Group.007",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 6,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1982.46728515625,
            "y": -543.65966796875
          },
          "name": "Reroute.006",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1987.52294921875,
            "y": -635.7611694335938
          },
          "name": "Reroute.007",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2007.97265625,
            "y": -129.50146484375
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2133.595703125,
            "y": 90.77362060546875
          },
          "name": "Reroute.009",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2132.3994140625,
            "y": 45.28202819824219
          },
          "name": "Reroute.010",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 11,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1993.09326171875,
            "y": -240.38671875
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 188.66168212890625,
            "width": 325.4442138671875
          },
          "id": 12,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 590.1784057617188,
            "y": 251.66168212890625
          },
          "name": "Group",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 236.91693115234375,
            "width": 140
          },
          "id": 13,
          "inputs": [],
          "location": {
            "x": -2885.654541015625,
            "y": 80.91692352294922
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 9,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 147.2818603515625,
            "width": 140
          },
          "id": 14,
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
            "x": 1264.071044921875,
            "y": 430.2818603515625
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
            "height": 67.35528564453125,
            "width": 140
          },
          "id": 15,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1543.3128662109375,
            "y": 426.35528564453125
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
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 3,
          "name": "TileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.8999999761581421,
          "name": "Size",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "N",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate A",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static NGonTilesOffsetGroup(uVW_0, tileU_1, size_2, blend_3, randomness_4, n_5, nB_6, offsetU_7, offsetV_8, rotate$A_9, rotate$B_10, maxU_11, maxV_12) {
    var material = new ScatterField('NGonTilesOffset')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "size_2": 2,
      "blend_3": 3,
      "randomness_4": 4,
      "n_5": 5,
      "nB_6": 6,
      "offsetU_7": 7,
      "offsetV_8": 8,
      "rotate$A_9": 9,
      "rotate$B_10": 10,
      "maxU_11": 11,
      "maxV_12": 12
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.size_2 = size_2;
    material.blend_3 = blend_3;
    material.randomness_4 = randomness_4;
    material.n_5 = n_5;
    material.nB_6 = nB_6;
    material.offsetU_7 = offsetU_7;
    material.offsetV_8 = offsetV_8;
    material.rotate$A_9 = rotate$A_9;
    material.rotate$B_10 = rotate$B_10;
    material.maxU_11 = maxU_11;
    material.maxV_12 = maxV_12;

    material.definition = {
      "links": [
        {
          "from": 20,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Group",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 2,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Group.001",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 5,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 14,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.005",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 11,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 11,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 17,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Reroute.004",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 9,
          "to_node": "Reroute.005",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 13,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Mix",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 3,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 2,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Reroute.006",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Reroute.006",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 6,
          "from_node": "Mix.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 5,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Mix",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "TileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Reroute.007",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate A",
            "socket_index": 9,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Reroute.007",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          },
          "to": 20,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "socket_index": 7,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "OffsetU",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "socket_index": 8,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "OffsetV",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Reroute.008",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Rorate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate B",
            "socket_index": 10,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Reroute.008",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "socket_index": 11,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Reroute.009",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "socket_index": 12,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Reroute.010",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Reroute.009",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Reroute.010",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Reroute.009",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Reroute.010",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Reroute.011",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "NB",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          },
          "to": 21,
          "to_node": "Reroute.011",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 0,
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
            "x": -927.15087890625,
            "y": 543.65966796875
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
          "dimensions": {
            "height": 147.82318115234375,
            "width": 140
          },
          "id": 1,
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
            "x": 2022.4091796875,
            "y": 221.82318115234375
          },
          "name": "Math",
          "operation": "ADD",
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
            "height": 147.2818603515625,
            "width": 140
          },
          "id": 2,
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
            "x": 1264.071044921875,
            "y": 430.2818603515625
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
          "blend_type": "MIX",
          "dimensions": {
            "height": 166.2320556640625,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                1,
                1,
                1,
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
            "x": -564.222412109375,
            "y": 407.2320556640625
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
          "dimensions": {
            "height": 183.26895141601562,
            "width": 325.4442138671875
          },
          "id": 4,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 697.85400390625,
            "y": -446.7310485839844
          },
          "name": "Group.001",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 146.084716796875,
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
            "x": 1396.7742919921875,
            "y": 81.084716796875
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
          "blend_type": "MIX",
          "dimensions": {
            "height": 164.21337890625,
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
                1,
                1,
                1,
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
            "x": -430.911865234375,
            "y": 110.21337890625
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
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1979.99853515625,
            "y": -332.1949157714844
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1981.78466796875,
            "y": -417.4454040527344
          },
          "name": "Reroute.004",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 9,
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
            "x": -2022.4091796875,
            "y": 215.62371826171875
          },
          "name": "Reroute.005",
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
          "dimensions": {
            "height": 67.634765625,
            "width": 140
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 2421.034423828125,
            "y": 217.634765625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 254.5506591796875,
            "width": 256.9952392578125
          },
          "id": 11,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10.09999942779541,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1680.985107421875,
            "y": 346.5506591796875
          },
          "name": "Group.007",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 183.13632202148438,
            "width": 325.4442138671875
          },
          "id": 12,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 657.269287109375,
            "y": -142.86367797851562
          },
          "name": "Group",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1982.46728515625,
            "y": -543.65966796875
          },
          "name": "Reroute.006",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 248.3536376953125,
            "width": 256.9952392578125
          },
          "id": 14,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 19.099998474121094,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1670.411865234375,
            "y": 67.3536376953125
          },
          "name": "Group.008",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 15,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1987.52294921875,
            "y": -635.7611694335938
          },
          "name": "Reroute.007",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1985.4583740234375,
            "y": -687.4136352539062
          },
          "name": "Reroute.008",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2007.97265625,
            "y": -129.50146484375
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2133.595703125,
            "y": 90.77362060546875
          },
          "name": "Reroute.009",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 19,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2132.3994140625,
            "y": 45.28202819824219
          },
          "name": "Reroute.010",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 20,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1993.09326171875,
            "y": -240.38671875
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 21,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1991.16845703125,
            "y": -275.0418395996094
          },
          "name": "Reroute.011",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 320.91693115234375,
            "width": 140
          },
          "id": 22,
          "inputs": [],
          "location": {
            "x": -2885.654541015625,
            "y": 80.91692352294922
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "NB",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "OffsetU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7319999933242798,
              "name": "OffsetV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 9,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate B",
              "socket_index": 10,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxU",
              "socket_index": 11,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxV",
              "socket_index": 12,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 13,
              "type": "NodeSocketVirtual"
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
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 3,
          "name": "TileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.8999999761581421,
          "name": "Size",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "N",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 5,
          "name": "NB",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "OffsetU",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "OffsetV",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate A",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate B",
          "socket_index": 10,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 12,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static NodeGroupGroup(scale_0, size_1, blend_2, randomness_3, rotate_4, sides_5) {
    var material = new ScatterField('NodeGroup')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "scale_0": 0,
      "size_1": 1,
      "blend_2": 2,
      "randomness_3": 3,
      "rotate_4": 4,
      "sides_5": 5
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.scale_0 = scale_0;
    material.size_1 = size_1;
    material.blend_2 = blend_2;
    material.randomness_3 = randomness_3;
    material.rotate_4 = rotate_4;
    material.sides_5 = sides_5;

    material.definition = {
      "links": [
        {
          "from": 2,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 3,
          "from_node": "Group",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Scale",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Scale",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Size",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Blend",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Randomness",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Randomness",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Rotate",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Rotate",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Sides",
          "from_socket": {
            "name": "Sides",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Sides",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 66,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 646.58154296875,
            "y": 0
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 275.7420654296875,
            "width": 320
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
            }
          ],
          "location": {
            "x": -162.95968627929688,
            "y": 292.7420654296875
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
          "type": "ShaderNodeMapping"
        },
        {
          "dimensions": {
            "height": 237.919189453125,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -345.5071105957031,
            "y": 308.919189453125
          },
          "name": "Texture Coordinate",
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
            "height": 231.644287109375,
            "width": 232.6759033203125
          },
          "id": 3,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.30000001192092896,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 225.17129516601562,
            "y": 49.644290924072266
          },
          "name": "Group",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 175.26849365234375,
            "width": 140
          },
          "id": 4,
          "inputs": [],
          "location": {
            "x": -570.40966796875,
            "y": -33.731510162353516
          },
          "name": "Sides",
          "options": {},
          "outputs": [
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Size",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.30000001192092896,
              "name": "Blend",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "Sides",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 6,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 30,
          "name": "Scale",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.8999999761581421,
          "name": "Size",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.30000001192092896,
          "name": "Blend",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "Sides",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static Offset2DGroup(uVW_0, x_1, y_2) {
    var material = new ScatterField('Offset2D')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "x_1": 1,
      "y_2": 2
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.x_1 = x_1;
    material.y_2 = y_2;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "X",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Y",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
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
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
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
          "from": 2,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 111.87091064453125,
            "width": 140
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": -508.4109802246094,
            "y": 123.87091064453125
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "X",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Y",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 111.88124084472656,
            "width": 140
          },
          "id": 1,
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
            "x": -155.77493286132812,
            "y": -80.11875915527344
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
          "blend_type": "ADD",
          "dimensions": {
            "height": 166.36744689941406,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 1,
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
            "x": 103.73998260498047,
            "y": 155.36744689941406
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
          "dimensions": {
            "height": 67.92487335205078,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 469.095703125,
            "y": 116.92487335205078
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
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "X",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Y",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static RandomGroup(x_0, y_1, seed_2) {
    var material = new ScatterField('Random')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "x_0": 0,
      "y_1": 1,
      "seed_2": 2
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.x_0 = x_0;
    material.y_1 = y_1;
    material.seed_2 = seed_2;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ.001",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ.001",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Combine XYZ.001",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
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
          "from": 2,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 4,
          "to_node": "Noise Texture",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Group Input",
          "from_socket": {
            "name": "seed",
            "socket_index": 2,
            "type": "NodeSocketFloat"
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
          "from": 4,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 5,
          "to_node": "ColorRamp",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 5,
          "from_node": "ColorRamp",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 116.25869750976562,
            "width": 140
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": -1681.8612060546875,
            "y": 338.2586975097656
          },
          "name": "Group Input",
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
              "name": "seed",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 119.30816650390625,
            "width": 140
          },
          "id": 1,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1416.7208251953125,
            "y": 368.30816650390625
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
          "blend_type": "MULTIPLY",
          "dimensions": {
            "height": 171.11398315429688,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 1,
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
            "x": -1134.2889404296875,
            "y": 384.1139831542969
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
          "dimensions": {
            "height": 67.88143920898438,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": -374.2889404296875,
            "y": 390.8814392089844
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 163.73989868164062,
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
              "default_value": 5,
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
              "default_value": 2,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -914.2889404296875,
            "y": 406.7398986816406
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
                "position": 0.22727274894714355
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 0.7000002861022949
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 212.6798095703125,
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
            "x": -682.125,
            "y": 484.6798095703125
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
        }
      ],
      "defaultInputs": [
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
          "name": "seed",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static RotateGroup(uVW_0, angle_1) {
    var material = new ScatterField('Rotate')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "angle_1": 1
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.angle_1 = angle_1;

    material.definition = {
      "links": [
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 14,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 12,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 11,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
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
          "from": 11,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.002",
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
          "to": 5,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.007",
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
          "to": 6,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Angle",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 145.59188842773438,
            "width": 140
          },
          "id": 0,
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
            "x": -626.8893432617188,
            "y": -200.40811157226562
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
            "height": 114.36187744140625,
            "width": 140.00006103515625
          },
          "id": 1,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 932.8749389648438,
            "y": 173.36187744140625
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
            "height": 146.35235595703125,
            "width": 140
          },
          "id": 2,
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
            "x": -330.96612548828125,
            "y": 92.35235595703125
          },
          "name": "Math.004",
          "operation": "MULTIPLY",
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
            "height": 145.67120361328125,
            "width": 140
          },
          "id": 3,
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
            "x": -114.70086669921875,
            "y": -55.32879638671875
          },
          "name": "Math.005",
          "operation": "MULTIPLY",
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
            "height": 147.27880859375,
            "width": 140
          },
          "id": 4,
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
            "x": 181.56991577148438,
            "y": 236.27880859375
          },
          "name": "Math.003",
          "operation": "SUBTRACT",
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
            "height": 147.554931640625,
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
            "x": -322.21551513671875,
            "y": 257.554931640625
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
            "height": 145.67706298828125,
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
            "x": -102.19998168945312,
            "y": -254.32293701171875
          },
          "name": "Math.007",
          "operation": "MULTIPLY",
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
            "height": 145.18661499023438,
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
            "x": -635.9876098632812,
            "y": -42.813385009765625
          },
          "name": "Math",
          "operation": "COSINE",
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
            "height": 145.72027587890625,
            "width": 140
          },
          "id": 8,
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
            "x": 192.82070922851562,
            "y": -15.27972412109375
          },
          "name": "Math.006",
          "operation": "ADD",
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
            "height": 16,
            "width": 16
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -721.8938598632812,
            "y": 143.96026611328125
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -709.1100463867188,
            "y": 98.98187255859375
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 11,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -684.6378784179688,
            "y": -257.554931640625
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 67.6137466430664,
            "width": 140
          },
          "id": 12,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1165.017578125,
            "y": 93.6137466430664
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 87.17971801757812,
            "width": 140
          },
          "id": 13,
          "inputs": [],
          "location": {
            "x": -1335.957275390625,
            "y": 32.17972183227539
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "Angle",
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
            "height": 114.402587890625,
            "width": 140
          },
          "id": 14,
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
            "x": -932.8749389648438,
            "y": 169.402587890625
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
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "Angle",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static Rotate2DGroup(uVW_0, centerU_1, centerV_2, angle_3) {
    var material = new ScatterField('Rotate2D')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "centerU_1": 1,
      "centerV_2": 2,
      "angle_3": 3
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.centerU_1 = centerU_1;
    material.centerV_2 = centerV_2;
    material.angle_3 = angle_3;

    material.definition = {
      "links": [
        {
          "from": 8,
          "from_node": "Group",
          "from_node_name": "Rotate",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 6,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Group.001",
          "from_node_name": "Offset2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Group",
          "to_node_name": "Rotate",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Group.002",
          "from_node_name": "Offset2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "X",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "Y",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "X",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "Y",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Angle",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Group",
          "to_node_name": "Rotate",
          "to_socket": {
            "name": "Angle",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 144.09686279296875,
            "width": 251.00799560546875
          },
          "id": 0,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": -0.5,
              "name": "X",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -0.5,
              "name": "Y",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -266.1534423828125,
            "y": 147.09686279296875
          },
          "name": "Group.001",
          "node_name": "Offset2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 144.35757446289062,
            "width": 251.00799560546875
          },
          "id": 1,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "X",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Y",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 504.08026123046875,
            "y": 236.35757446289062
          },
          "name": "Group.002",
          "node_name": "Offset2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 145.72637939453125,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -422.26226806640625,
            "y": -28.27362060546875
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 145.44046020507812,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -429.20025634765625,
            "y": -184.55953979492188
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 16,
            "width": 16
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -496.3094482421875,
            "y": -93.95269775390625
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -504.08026123046875,
            "y": -236.3575439453125
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 128.23492431640625,
            "width": 140
          },
          "id": 6,
          "inputs": [],
          "location": {
            "x": -937.8812866210938,
            "y": -6.765076160430908
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Angle",
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
            "height": 67.65579223632812,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1035.185791015625,
            "y": 159.65579223632812
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 122.55850219726562,
            "width": 338.69921875
          },
          "id": 8,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "Angle",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 66.93484497070312,
            "y": 202.55850219726562
          },
          "name": "Group",
          "node_name": "Rotate",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "CenterU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "CenterV",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Angle",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static Scale2DGroup(uVW_0, centerU_1, centerV_2, scale_3) {
    var material = new ScatterField('Scale2D')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "centerU_1": 1,
      "centerV_2": 2,
      "scale_3": 3
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.centerU_1 = centerU_1;
    material.centerV_2 = centerV_2;
    material.scale_3 = scale_3;

    material.definition = {
      "links": [
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 6,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 8,
          "from_node": "Group.002",
          "from_node_name": "Offset2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "X",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Group.001",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "Y",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Group.001",
          "from_node_name": "Offset2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
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
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Mix",
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
          "to": 8,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "X",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Group.002",
          "to_node_name": "Offset2D",
          "to_socket": {
            "name": "Y",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -496.3094482421875,
            "y": -93.95269775390625
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -504.08026123046875,
            "y": -236.3575439453125
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 145.8878173828125,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -594.3011474609375,
            "y": -202.1121826171875
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 146.08604431152344,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -543.5310668945312,
            "y": 36.08604431152344
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 147.63572692871094,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 277.173828125,
            "y": 205.63572692871094
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
          "blend_type": "MULTIPLY",
          "dimensions": {
            "height": 166.43893432617188,
            "width": 140
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 1,
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
            "x": 109.3028335571289,
            "y": 430.4389343261719
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
          "dimensions": {
            "height": 144.161376953125,
            "width": 251.00799560546875
          },
          "id": 6,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": -0.5,
              "name": "X",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -0.5,
              "name": "Y",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -270.473388671875,
            "y": 210.161376953125
          },
          "name": "Group.001",
          "node_name": "Offset2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 67.01251220703125,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1397.7978515625,
            "y": 297.01251220703125
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 144.99789428710938,
            "width": 251.0079345703125
          },
          "id": 8,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "X",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Y",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 892.2864990234375,
            "y": 287.9978942871094
          },
          "name": "Group.002",
          "node_name": "Offset2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 146.67083740234375,
            "width": 140
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 273.9553527832031,
            "y": 44.67084503173828
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
            "height": 133.46302795410156,
            "width": 140
          },
          "id": 10,
          "inputs": [],
          "location": {
            "x": -1066.4554443359375,
            "y": 180.46302795410156
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Scale",
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
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "CenterU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "CenterV",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Scale",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static SmoothStepGroup(value_0, e1_1, e2_2) {
    var material = new ScatterField('SmoothStep')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "value_0": 0,
      "e1_1": 1,
      "e2_2": 2
    }
    material.outputs = {
      "Value": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0
    }
    material.value_0 = value_0;
    material.e1_1 = e1_1;
    material.e2_2 = e2_2;

    material.definition = {
      "links": [
        {
          "from": 7,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Group Input",
          "from_socket": {
            "name": "e1",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Group Input",
          "from_socket": {
            "name": "e2",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.011",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.012",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.012",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.015",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.015",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.016",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.014",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.017",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.016",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.017",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.017",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Group Input",
          "from_socket": {
            "name": "e1",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.011",
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
            "height": 146,
            "width": 140
          },
          "id": 0,
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
            "x": -430,
            "y": 70
          },
          "name": "Math.010",
          "operation": "SUBTRACT",
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
            "height": 146,
            "width": 140
          },
          "id": 1,
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
            "x": -430,
            "y": -90
          },
          "name": "Math.011",
          "operation": "SUBTRACT",
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
            "height": 146,
            "width": 140
          },
          "id": 2,
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
            "x": -230,
            "y": 10
          },
          "name": "Math.012",
          "operation": "DIVIDE",
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
          "use_clamp": true
        },
        {
          "dimensions": {
            "height": 146,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 10,
            "y": -70
          },
          "name": "Math.015",
          "operation": "MULTIPLY",
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
            "height": 146,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 10,
            "y": 90
          },
          "name": "Math.014",
          "operation": "POWER",
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
            "height": 146,
            "width": 140
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 3,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 230,
            "y": -70
          },
          "name": "Math.016",
          "operation": "SUBTRACT",
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
            "height": 146,
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
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 430,
            "y": 30
          },
          "name": "Math.017",
          "operation": "MULTIPLY",
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
            "height": 108,
            "width": 140
          },
          "id": 7,
          "inputs": [],
          "location": {
            "x": -740,
            "y": 20
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "e1",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "e2",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
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
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 720,
            "y": 20
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "e1",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "e2",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static SwitchGroup(condition_0, true_1, false_2) {
    var material = new ScatterField('Switch')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "condition_0": 0,
      "true_1": 1,
      "false_2": 2
    }
    material.outputs = {
      "Result": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Result": 0
    }
    material.condition_0 = condition_0;
    material.true_1 = true_1;
    material.false_2 = false_2;

    material.definition = {
      "links": [
        {
          "from": 5,
          "from_node": "Group Input",
          "from_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.013",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.015",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.016",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.016",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.014",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.014",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.013",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.015",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Group Input",
          "from_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.016",
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
            "height": 152,
            "width": 140
          },
          "id": 0,
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
            "x": -80,
            "y": 260
          },
          "name": "Math.013",
          "operation": "MULTIPLY",
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
            "height": 151,
            "width": 140
          },
          "id": 1,
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
            "x": 100,
            "y": -40
          },
          "name": "Math.016",
          "operation": "MULTIPLY",
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
            "height": 67,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 820,
            "y": 100
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 151,
            "width": 140
          },
          "id": 3,
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
            "x": 420,
            "y": 120
          },
          "name": "Math.014",
          "operation": "ADD",
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
            "height": 151.9431610107422,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 1,
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
            "x": -136.89065551757812,
            "y": 46.94316101074219
          },
          "name": "Math.015",
          "operation": "SUBTRACT",
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
          "use_clamp": true
        },
        {
          "dimensions": {
            "height": 113.76117706298828,
            "width": 140
          },
          "id": 5,
          "inputs": [],
          "location": {
            "x": -530.912353515625,
            "y": 25.76117706298828
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0,
          "name": "Condition",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "True",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "False",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tile_every_N_rowGroup(uVW_0, tileU_1, tileV_2, n_3) {
    var material = new ScatterField('tile_every_N_row')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "tileV_2": 2,
      "n_3": 3
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.tileV_2 = tileV_2;
    material.n_3 = n_3;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Input",
          "from_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Input",
          "from_socket": {
            "name": "tileV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Input",
          "from_socket": {
            "name": "N",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Group.002",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "True",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Group.002",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "False",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Group.002",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Group.003",
          "to_node_name": "Floor",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Group.003",
          "from_node_name": "Floor",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 114.98306274414062,
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
            }
          ],
          "location": {
            "x": -1386.90234375,
            "y": 229.98306274414062
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
            "height": 128.73403930664062,
            "width": 140
          },
          "id": 1,
          "inputs": [],
          "location": {
            "x": -1696.2969970703125,
            "y": -47.265953063964844
          },
          "name": "Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "N",
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
            "height": 147.2672119140625,
            "width": 140
          },
          "id": 2,
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
            "x": -899.4497680664062,
            "y": 323.2672119140625
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 114.69146728515625,
            "width": 147.7581787109375
          },
          "id": 3,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 879.24755859375,
            "y": 454.69146728515625
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
            "height": 122.76556396484375,
            "width": 253.58740234375
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 229.55087280273438,
            "y": 477.76556396484375
          },
          "name": "Group",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 145.89031982421875,
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
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -677.532958984375,
            "y": -323.10968017578125
          },
          "name": "Math.002",
          "operation": "MODULO",
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
            "height": 145.05804443359375,
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
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -429.6025695800781,
            "y": -311.94195556640625
          },
          "name": "Math.004",
          "operation": "ABSOLUTE",
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
            "height": 145.2244873046875,
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
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -203.39578247070312,
            "y": -303.7755126953125
          },
          "name": "Math.003",
          "operation": "GREATER_THAN",
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
            "height": 67.3907470703125,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1357.9642333984375,
            "y": 466.3907470703125
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 145.56307983398438,
            "width": 140
          },
          "id": 9,
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
            "x": -917.0349731445312,
            "y": 10.563079833984375
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 100.21592712402344,
            "width": 140
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -575.28076171875,
            "y": 184.21592712402344
          },
          "name": "Group.003",
          "node_name": "Floor",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 147.8214111328125,
            "width": 140
          },
          "id": 11,
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
            "x": -124.21126556396484,
            "y": 238.8214111328125
          },
          "name": "Math.006",
          "operation": "ADD",
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
            "height": 147.15750122070312,
            "width": 143.8880615234375
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
              "default_value": 0.3499999940395355,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -397.5849609375,
            "y": 237.15750122070312
          },
          "name": "Math.005",
          "operation": "MULTIPLY",
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
            "height": 141.58364868164062,
            "width": 260.81866455078125
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 0,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 771.8383178710938,
            "y": -63.416351318359375
          },
          "name": "Group.002",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 122.2271728515625,
            "width": 249.0439453125
          },
          "id": 14,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 274.88604736328125,
            "y": 176.2271728515625
          },
          "name": "Group.001",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "tileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "tileV",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "N",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tile_singleGroup(value_0, max_1) {
    var material = new ScatterField('tile_single')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "value_0": 0,
      "max_1": 1
    }
    material.outputs = {
      "Value": "NodeSocketFloat",
      "Floor": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "Value": 0,
      "Floor": 1
    }
    material.value_0 = value_0;
    material.max_1 = max_1;

    material.definition = {
      "links": [
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "max",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.008",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Group",
          "from_node_name": "Switch",
          "from_socket": {
            "name": "Result",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Group",
          "to_node_name": "Switch",
          "to_socket": {
            "name": "Condition",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Math.011",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Math.012",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Floor",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Math.012",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 150.90087890625,
            "width": 140
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -837.792236328125,
            "y": -443.09912109375
          },
          "name": "Math.006",
          "operation": "MULTIPLY",
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
            "height": 150.18646240234375,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -141.85818481445312,
            "y": -339.81353759765625
          },
          "name": "Math.008",
          "operation": "MULTIPLY",
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
            "height": 150.6712646484375,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 93.69147491455078,
            "y": -454.3287353515625
          },
          "name": "Math.010",
          "operation": "SUBTRACT",
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
            "height": 150.86444091796875,
            "width": 140
          },
          "id": 3,
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
            "x": -931.140625,
            "y": -76.13556671142578
          },
          "name": "Math.002",
          "operation": "ABSOLUTE",
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
            "height": 16,
            "width": 16
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -892.816162109375,
            "y": -365.21209716796875
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -694.405029296875,
            "y": -109.44142150878906
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 89.85824584960938,
            "width": 140
          },
          "id": 6,
          "inputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 2,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 1740.7734375,
            "y": 171.85824584960938
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
          "id": 7,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1219.074462890625,
            "y": 325.62091064453125
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 92.26185607910156,
            "width": 140
          },
          "id": 8,
          "inputs": [],
          "location": {
            "x": -1467.3648681640625,
            "y": 28.261859893798828
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "max",
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
            "height": 151.98202514648438,
            "width": 140
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -554.9788208007812,
            "y": 102.9820327758789
          },
          "name": "Math.011",
          "operation": "MULTIPLY",
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
            "height": 151.62960815429688,
            "width": 140
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -387.27069091796875,
            "y": 92.6296157836914
          },
          "name": "Math.012",
          "operation": "SUBTRACT",
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
            "height": 152.37130737304688,
            "width": 139.99993896484375
          },
          "id": 11,
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
            "x": 960.4778442382812,
            "y": 312.3713073730469
          },
          "name": "Math.001",
          "operation": "ABSOLUTE",
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
            "height": 149.32415771484375,
            "width": 140
          },
          "id": 12,
          "inputs": [
            {
              "default_value": 0,
              "name": "Condition",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "True",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "False",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -305.5039978027344,
            "y": 313.32415771484375
          },
          "name": "Group",
          "node_name": "Switch",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Result",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 152.21902465820312,
            "width": 140
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -527.319580078125,
            "y": 324.2190246582031
          },
          "name": "Math",
          "operation": "LESS_THAN",
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
            "height": 150.45513916015625,
            "width": 237.17984008789062
          },
          "id": 14,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": -1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 393.2011413574219,
            "y": -81.54485321044922
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
            "height": 152.45736694335938,
            "width": 140
          },
          "id": 15,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 742.7965698242188,
            "y": 187.45736694335938
          },
          "name": "Math.009",
          "operation": "SUBTRACT",
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
            "height": 150.8728485107422,
            "width": 140
          },
          "id": 16,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -571.828369140625,
            "y": -177.1271514892578
          },
          "name": "Math.007",
          "operation": "MODULO",
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
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "max",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tile_uvwGroup(uVW_0, tileU_1, tileV_2) {
    var material = new ScatterField('tile_uvw')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "tileV_2": 2
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.tileV_2 = tileV_2;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 6,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "tileV",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 3,
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
            "height": 107.43384552001953,
            "width": 140
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": -1430.79248046875,
            "y": -6.566157817840576
          },
          "name": "Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 114.79913330078125,
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
            }
          ],
          "location": {
            "x": -937.2485961914062,
            "y": 343.79913330078125
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
            "height": 147.9610595703125,
            "width": 140
          },
          "id": 2,
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
            "x": -574.3641967773438,
            "y": 315.9610595703125
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 147.3173828125,
            "width": 140
          },
          "id": 3,
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
            "x": -566.6683349609375,
            "y": 143.3173828125
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 144.41941833496094,
            "width": 249.0439453125
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -165.90621948242188,
            "y": 191.41941833496094
          },
          "name": "Group.001",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 114.3795166015625,
            "width": 140
          },
          "id": 5,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 257.1907653808594,
            "y": 278.3795166015625
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
            "height": 67.22900390625,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 573.9462280273438,
            "y": 191.22900390625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 144.85159301757812,
            "width": 253.58740234375
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
              "default_value": 1,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -172.72145080566406,
            "y": 355.8515930175781
          },
          "name": "Group",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "tileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "tileV",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tile_uvw_2Group(uVW_0, tile_1, maxU_2, maxV_3) {
    var material = new ScatterField('tile_uvw_2')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tile_1": 1,
      "maxU_2": 2,
      "maxV_3": 3
    }
    material.outputs = {
      "UVW": "NodeSocketVector"
    }
    material.outputIndexes = {
      "UVW": 0
    }
    material.uVW_0 = uVW_0;
    material.tile_1 = tile_1;
    material.maxU_2 = maxU_2;
    material.maxV_3 = maxV_3;

    material.definition = {
      "links": [
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 11,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
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
          "from": 9,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Group",
          "to_node_name": "tile_single",
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
          "to": 3,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "max",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
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
          "from": 8,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "max",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "tile",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Input",
          "from_socket": {
            "name": "tile",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 114.79913330078125,
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
            }
          ],
          "location": {
            "x": -937.2485961914062,
            "y": 343.79913330078125
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
            "height": 147.9610595703125,
            "width": 140
          },
          "id": 1,
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
            "x": -497.5052490234375,
            "y": 315.9610595703125
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 145.64471435546875,
            "width": 140
          },
          "id": 2,
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
            "x": -1012.2650756835938,
            "y": -264.35528564453125
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
            "height": 141.02569580078125,
            "width": 249.0439453125
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 32.263519287109375,
            "y": -31.97430419921875
          },
          "name": "Group.001",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 145.76634216308594,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -852.4508056640625,
            "y": -35.23366165161133
          },
          "name": "Math.004",
          "operation": "MULTIPLY",
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
            "height": 147.08885192871094,
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
            "x": -483.67694091796875,
            "y": 138.08885192871094
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
            "height": 145.82904052734375,
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
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -798.8012084960938,
            "y": -258.17095947265625
          },
          "name": "Math.005",
          "operation": "MULTIPLY",
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
            "height": 16,
            "width": 16
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1206.68994140625,
            "y": -26.171485900878906
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1190.638427734375,
            "y": -225.4678497314453
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 144.8431854248047,
            "width": 253.58740234375
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 24.382869720458984,
            "y": 239.8431854248047
          },
          "name": "Group",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 114.18911743164062,
            "width": 140
          },
          "id": 10,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 635.4060668945312,
            "y": 159.18911743164062
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
            "height": 67.72598266601562,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "name": "",
              "socket_index": 1,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 950.291748046875,
            "y": 151.72598266601562
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 145.83523559570312,
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
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1021.0134887695312,
            "y": -39.16476821899414
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
            "height": 133.54873657226562,
            "width": 140
          },
          "id": 13,
          "inputs": [],
          "location": {
            "x": -2609.62646484375,
            "y": 170.54873657226562
          },
          "name": "Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "tile",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxV",
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
            "height": 145.11868286132812,
            "width": 140
          },
          "id": 14,
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
            "x": -2028.3538818359375,
            "y": -283.8813171386719
          },
          "name": "Math.006",
          "operation": "DIVIDE",
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
            "height": 145.852783203125,
            "width": 140
          },
          "id": 15,
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
            "x": -1818.1187744140625,
            "y": -256.147216796875
          },
          "name": "Math.007",
          "operation": "MULTIPLY",
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
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "tile",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "MaxV",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tile_uvw_offsetGroup(uVW_0, tileU_1, maxU_2, maxV_3, offsetU_4, offsetV_5, random$Seed_6) {
    var material = new ScatterField('tile_uvw_offset')
    material.type = 'GROUP';
    material.isGroup = true;
    material.conversion = {
      "uVW_0": 0,
      "tileU_1": 1,
      "maxU_2": 2,
      "maxV_3": 3,
      "offsetU_4": 4,
      "offsetV_5": 5,
      "random$Seed_6": 6
    }
    material.outputs = {
      "UVW": "NodeSocketVector",
      "random": "NodeSocketFloat",
      "tileID": "NodeSocketFloat"
    }
    material.outputIndexes = {
      "UVW": 0,
      "random": 1,
      "tileID": 2
    }
    material.uVW_0 = uVW_0;
    material.tileU_1 = tileU_1;
    material.maxU_2 = maxU_2;
    material.maxV_3 = maxV_3;
    material.offsetU_4 = offsetU_4;
    material.offsetV_5 = offsetV_5;
    material.random$Seed_6 = random$Seed_6;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 7,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "max",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "max",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.003",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 8,
          "from_node": "Reroute.004",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Math.006",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.006",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.007",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Math.008",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Group",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.009",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Group.001",
          "to_node_name": "tile_single",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "OffsetU",
            "socket_index": 4,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "OffsetV",
            "socket_index": 5,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Floor",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Group.002",
          "to_node_name": "Random",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Floor",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Group.002",
          "to_node_name": "Random",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "Random Seed",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          },
          "to": 19,
          "to_node": "Group.002",
          "to_node_name": "Random",
          "to_socket": {
            "name": "seed",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 13,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxU",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          },
          "to": 9,
          "to_node": "Reroute.003",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Input",
          "from_socket": {
            "name": "MaxV",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          },
          "to": 8,
          "to_node": "Reroute.004",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Math.010",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Math.008",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 1,
          "from_node": "Math.011",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.009",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.007",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.011",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Math.010",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Combine XYZ.001",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Combine XYZ.001",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Combine XYZ.001",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 16,
          "to_node": "Group Output",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 17,
          "from_node": "Group",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Floor",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 14,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Group.001",
          "from_node_name": "tile_single",
          "from_socket": {
            "name": "Floor",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Group Output",
          "to_socket": {
            "name": "tileID",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Group.002",
          "from_node_name": "Random",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Group Output",
          "to_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        }
      ],
      "nodes": [
        {
          "dimensions": {
            "height": 204.327392578125,
            "width": 140
          },
          "id": 0,
          "inputs": [],
          "location": {
            "x": -2731.9111328125,
            "y": 725.327392578125
          },
          "name": "Input",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 7,
              "type": "NodeSocketVirtual"
            }
          ],
          "type": "NodeGroupInput"
        },
        {
          "dimensions": {
            "height": 152.783447265625,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -706.5335083007812,
            "y": 759.783447265625
          },
          "name": "Math.011",
          "operation": "MULTIPLY",
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
            "height": 152.41070556640625,
            "width": 140
          },
          "id": 2,
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
            "x": -376.6014404296875,
            "y": 1014.4107055664062
          },
          "name": "Math.008",
          "operation": "ADD",
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
            "height": 152.571044921875,
            "width": 140
          },
          "id": 3,
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
            "x": -355.37701416015625,
            "y": 687.571044921875
          },
          "name": "Math.009",
          "operation": "ADD",
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
            "height": 150.2701416015625,
            "width": 140
          },
          "id": 4,
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
            "x": -2007.50048828125,
            "y": -48.7298583984375
          },
          "name": "Math.006",
          "operation": "DIVIDE",
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
            "height": 16,
            "width": 16
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1586.3236083984375,
            "y": 284.40252685546875
          },
          "name": "Reroute.001",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 152.938720703125,
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
              "default_value": 1,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -914.7003173828125,
            "y": 1120.938720703125
          },
          "name": "Math.010",
          "operation": "MULTIPLY",
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
            "height": 119.43310546875,
            "width": 140
          },
          "id": 7,
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
            "x": -1705.400634765625,
            "y": 1072.43310546875
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
            "height": 16,
            "width": 16
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2328.6484375,
            "y": 48.840057373046875
          },
          "name": "Reroute.004",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2276.52197265625,
            "y": 211.39901733398438
          },
          "name": "Reroute.003",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1635.66064453125,
            "y": 209.20089721679688
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 151.02444458007812,
            "width": 140
          },
          "id": 11,
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
            "x": -1774.677490234375,
            "y": 55.024444580078125
          },
          "name": "Math.007",
          "operation": "MULTIPLY",
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
            "height": 119.39138793945312,
            "width": 140
          },
          "id": 12,
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
              "default_value": 1,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1177.73291015625,
            "y": 342.3913879394531
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
            "height": 16,
            "width": 16
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1994.741455078125,
            "y": 361.69512939453125
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "dimensions": {
            "height": 152.62890625,
            "width": 140
          },
          "id": 14,
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
            "x": 633.5459594726562,
            "y": 946.62890625
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
            "height": 152.5028076171875,
            "width": 140
          },
          "id": 15,
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
            "x": 802.927978515625,
            "y": 949.5028076171875
          },
          "name": "Math.001",
          "operation": "ADD",
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
            "height": 111.1939697265625,
            "width": 140
          },
          "id": 16,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "name": "",
              "socket_index": 3,
              "type": "NodeSocketVirtual"
            }
          ],
          "location": {
            "x": 2159.806640625,
            "y": 814.1939697265625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "dimensions": {
            "height": 149.5035400390625,
            "width": 253.58741760253906
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 211.46214294433594,
            "y": 676.5035400390625
          },
          "name": "Group",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 149.62408447265625,
            "width": 249.0439453125
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "max",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 196.91439819335938,
            "y": 357.62408447265625
          },
          "name": "Group.001",
          "node_name": "tile_single",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Floor",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 149.8126220703125,
            "width": 400
          },
          "id": 19,
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
              "name": "seed",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1149.7674560546875,
            "y": 747.8126220703125
          },
          "name": "Group.002",
          "node_name": "Random",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "UVW",
          "socket_index": 0,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 3,
          "name": "tileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetU",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetV",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Random Seed",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static dist_mtl_(args) {
    let { scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, rotate2DCenterU_3, rotate2DCenterV_4, rotate2DAngle_5, nGonTilesOffsetTileU_6, nGonTilesOffsetBlend_7, nGonTilesOffsetRandomness_8, nGonTilesOffsetN_9, nGonTilesOffsetNB_10, nGonTilesOffsetOffsetU_11, nGonTilesOffsetOffsetV_12, nGonTilesOffsetRotate$A_13, nGonTilesOffsetRotate$B_14, nGonTilesOffsetMaxU_15, nGonTilesOffsetMaxV_16, mathValue_17, math001Value_18, mixFac_19, mixColor2_20, emission$ViewerStrength_21, tile_uvw_offsettileU_22, tile_uvw_offsetMaxU_23, tile_uvw_offsetMaxV_24, tile_uvw_offsetOffsetU_25, tile_uvw_offsetOffsetV_26, tile_uvw_offsetRandom$Seed_27, mix001Fac_28, mix003Fac_29, mix003Color2_30, mix002Fac_31, mix002Color2_32 } = args;
    return ScatterField.dist_mtl(scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, rotate2DCenterU_3, rotate2DCenterV_4, rotate2DAngle_5, nGonTilesOffsetTileU_6, nGonTilesOffsetBlend_7, nGonTilesOffsetRandomness_8, nGonTilesOffsetN_9, nGonTilesOffsetNB_10, nGonTilesOffsetOffsetU_11, nGonTilesOffsetOffsetV_12, nGonTilesOffsetRotate$A_13, nGonTilesOffsetRotate$B_14, nGonTilesOffsetMaxU_15, nGonTilesOffsetMaxV_16, mathValue_17, math001Value_18, mixFac_19, mixColor2_20, emission$ViewerStrength_21, tile_uvw_offsettileU_22, tile_uvw_offsetMaxU_23, tile_uvw_offsetMaxV_24, tile_uvw_offsetOffsetU_25, tile_uvw_offsetOffsetV_26, tile_uvw_offsetRandom$Seed_27, mix001Fac_28, mix003Fac_29, mix003Color2_30, mix002Fac_31, mix002Color2_32)
  }
  static dist_mtl(scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, rotate2DCenterU_3, rotate2DCenterV_4, rotate2DAngle_5, nGonTilesOffsetTileU_6, nGonTilesOffsetBlend_7, nGonTilesOffsetRandomness_8, nGonTilesOffsetN_9, nGonTilesOffsetNB_10, nGonTilesOffsetOffsetU_11, nGonTilesOffsetOffsetV_12, nGonTilesOffsetRotate$A_13, nGonTilesOffsetRotate$B_14, nGonTilesOffsetMaxU_15, nGonTilesOffsetMaxV_16, mathValue_17, math001Value_18, mixFac_19, mixColor2_20, emission$ViewerStrength_21, tile_uvw_offsettileU_22, tile_uvw_offsetMaxU_23, tile_uvw_offsetMaxV_24, tile_uvw_offsetOffsetU_25, tile_uvw_offsetOffsetV_26, tile_uvw_offsetRandom$Seed_27, mix001Fac_28, mix003Fac_29, mix003Color2_30, mix002Fac_31, mix002Color2_32) {
    var material = new ScatterField('dist_mtl')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "scale2DCenterU_0": {
        "node": "Group.001",
        "socket_index": 1,
        "input_index": 0,
        "input": "CenterU"
      },
      "scale2DCenterV_1": {
        "node": "Group.001",
        "socket_index": 2,
        "input_index": 1,
        "input": "CenterV"
      },
      "scale2DScale_2": {
        "node": "Group.001",
        "socket_index": 3,
        "input_index": 2,
        "input": "Scale"
      },
      "rotate2DCenterU_3": {
        "node": "Group",
        "socket_index": 1,
        "input_index": 3,
        "input": "CenterU"
      },
      "rotate2DCenterV_4": {
        "node": "Group",
        "socket_index": 2,
        "input_index": 4,
        "input": "CenterV"
      },
      "rotate2DAngle_5": {
        "node": "Group",
        "socket_index": 3,
        "input_index": 5,
        "input": "Angle"
      },
      "nGonTilesOffsetTileU_6": {
        "node": "Group.002",
        "socket_index": 1,
        "input_index": 6,
        "input": "TileU"
      },
      "nGonTilesOffsetBlend_7": {
        "node": "Group.002",
        "socket_index": 3,
        "input_index": 7,
        "input": "Blend"
      },
      "nGonTilesOffsetRandomness_8": {
        "node": "Group.002",
        "socket_index": 4,
        "input_index": 8,
        "input": "Randomness"
      },
      "nGonTilesOffsetN_9": {
        "node": "Group.002",
        "socket_index": 5,
        "input_index": 9,
        "input": "N"
      },
      "nGonTilesOffsetNB_10": {
        "node": "Group.002",
        "socket_index": 6,
        "input_index": 10,
        "input": "NB"
      },
      "nGonTilesOffsetOffsetU_11": {
        "node": "Group.002",
        "socket_index": 7,
        "input_index": 11,
        "input": "OffsetU"
      },
      "nGonTilesOffsetOffsetV_12": {
        "node": "Group.002",
        "socket_index": 8,
        "input_index": 12,
        "input": "OffsetV"
      },
      "nGonTilesOffsetRotate$A_13": {
        "node": "Group.002",
        "socket_index": 9,
        "input_index": 13,
        "input": "Rotate A"
      },
      "nGonTilesOffsetRotate$B_14": {
        "node": "Group.002",
        "socket_index": 10,
        "input_index": 14,
        "input": "Rotate B"
      },
      "nGonTilesOffsetMaxU_15": {
        "node": "Group.002",
        "socket_index": 11,
        "input_index": 15,
        "input": "MaxU"
      },
      "nGonTilesOffsetMaxV_16": {
        "node": "Group.002",
        "socket_index": 12,
        "input_index": 16,
        "input": "MaxV"
      },
      "mathValue_17": {
        "node": "Math",
        "socket_index": 1,
        "input_index": 17,
        "input": "Value"
      },
      "math001Value_18": {
        "node": "Math.001",
        "socket_index": 1,
        "input_index": 18,
        "input": "Value"
      },
      "mixFac_19": {
        "node": "Mix",
        "socket_index": 0,
        "input_index": 19,
        "input": "Fac"
      },
      "mixColor2_20": {
        "node": "Mix",
        "socket_index": 2,
        "input_index": 20,
        "input": "Color2"
      },
      "emission$ViewerStrength_21": {
        "node": "Emission Viewer",
        "socket_index": 1,
        "input_index": 21,
        "input": "Strength"
      },
      "tile_uvw_offsettileU_22": {
        "node": "Group.003",
        "socket_index": 1,
        "input_index": 22,
        "input": "tileU"
      },
      "tile_uvw_offsetMaxU_23": {
        "node": "Group.003",
        "socket_index": 2,
        "input_index": 23,
        "input": "MaxU"
      },
      "tile_uvw_offsetMaxV_24": {
        "node": "Group.003",
        "socket_index": 3,
        "input_index": 24,
        "input": "MaxV"
      },
      "tile_uvw_offsetOffsetU_25": {
        "node": "Group.003",
        "socket_index": 4,
        "input_index": 25,
        "input": "OffsetU"
      },
      "tile_uvw_offsetOffsetV_26": {
        "node": "Group.003",
        "socket_index": 5,
        "input_index": 26,
        "input": "OffsetV"
      },
      "tile_uvw_offsetRandom$Seed_27": {
        "node": "Group.003",
        "socket_index": 6,
        "input_index": 27,
        "input": "Random Seed"
      },
      "mix001Fac_28": {
        "node": "Mix.001",
        "socket_index": 0,
        "input_index": 28,
        "input": "Fac"
      },
      "mix003Fac_29": {
        "node": "Mix.003",
        "socket_index": 0,
        "input_index": 29,
        "input": "Fac"
      },
      "mix003Color2_30": {
        "node": "Mix.003",
        "socket_index": 2,
        "input_index": 30,
        "input": "Color2"
      },
      "mix002Fac_31": {
        "node": "Mix.002",
        "socket_index": 0,
        "input_index": 31,
        "input": "Fac"
      },
      "mix002Color2_32": {
        "node": "Mix.002",
        "socket_index": 2,
        "input_index": 32,
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
    material.scale2DCenterU_0 = scale2DCenterU_0;
    material.scale2DCenterV_1 = scale2DCenterV_1;
    material.scale2DScale_2 = scale2DScale_2;
    material.rotate2DCenterU_3 = rotate2DCenterU_3;
    material.rotate2DCenterV_4 = rotate2DCenterV_4;
    material.rotate2DAngle_5 = rotate2DAngle_5;
    material.nGonTilesOffsetTileU_6 = nGonTilesOffsetTileU_6;
    material.nGonTilesOffsetBlend_7 = nGonTilesOffsetBlend_7;
    material.nGonTilesOffsetRandomness_8 = nGonTilesOffsetRandomness_8;
    material.nGonTilesOffsetN_9 = nGonTilesOffsetN_9;
    material.nGonTilesOffsetNB_10 = nGonTilesOffsetNB_10;
    material.nGonTilesOffsetOffsetU_11 = nGonTilesOffsetOffsetU_11;
    material.nGonTilesOffsetOffsetV_12 = nGonTilesOffsetOffsetV_12;
    material.nGonTilesOffsetRotate$A_13 = nGonTilesOffsetRotate$A_13;
    material.nGonTilesOffsetRotate$B_14 = nGonTilesOffsetRotate$B_14;
    material.nGonTilesOffsetMaxU_15 = nGonTilesOffsetMaxU_15;
    material.nGonTilesOffsetMaxV_16 = nGonTilesOffsetMaxV_16;
    material.mathValue_17 = mathValue_17;
    material.math001Value_18 = math001Value_18;
    material.mixFac_19 = mixFac_19;
    material.mixColor2_20 = mixColor2_20;
    material.emission$ViewerStrength_21 = emission$ViewerStrength_21;
    material.tile_uvw_offsettileU_22 = tile_uvw_offsettileU_22;
    material.tile_uvw_offsetMaxU_23 = tile_uvw_offsetMaxU_23;
    material.tile_uvw_offsetMaxV_24 = tile_uvw_offsetMaxV_24;
    material.tile_uvw_offsetOffsetU_25 = tile_uvw_offsetOffsetU_25;
    material.tile_uvw_offsetOffsetV_26 = tile_uvw_offsetOffsetV_26;
    material.tile_uvw_offsetRandom$Seed_27 = tile_uvw_offsetRandom$Seed_27;
    material.mix001Fac_28 = mix001Fac_28;
    material.mix003Fac_29 = mix003Fac_29;
    material.mix003Color2_30 = mix003Color2_30;
    material.mix002Fac_31 = mix002Fac_31;
    material.mix002Color2_32 = mix002Color2_32;

    material.definition = {
      "links": [
        {
          "from": 6,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Group.001",
          "to_node_name": "Scale2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Group.001",
          "from_node_name": "Scale2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 2,
          "to_node": "Group",
          "to_node_name": "Rotate2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 10,
          "from_node": "Emission Viewer",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 11,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 7,
          "from_node": "Texture Coordinate.001",
          "from_socket": {
            "name": "Object",
            "socket_index": 3,
            "type": "NodeSocketVector"
          },
          "to": 9,
          "to_node": "Mix",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 9,
          "from_node": "Mix",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
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
          "from": 2,
          "from_node": "Group",
          "from_node_name": "Rotate2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Group.002",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 8,
          "from_node": "Gradient Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 4,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math",
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
          "from": 5,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Group.002",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 12,
          "to_node": "Group.003",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 7,
          "from_node": "Texture Coordinate.001",
          "from_socket": {
            "name": "Object",
            "socket_index": 3,
            "type": "NodeSocketVector"
          },
          "to": 14,
          "to_node": "Mix.003",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 15,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 13,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 13,
          "from_node": "Mix.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 17,
          "to_node": "Gradient Texture.001",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
          "from_node": "Group.003",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 18,
          "to_node": "Mix.002",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 14,
          "from_node": "Mix.003",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 15,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 18,
          "from_node": "Mix.002",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 13,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 15,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 16,
          "to_node": "Gradient Texture.002",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 17,
          "from_node": "Gradient Texture.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 10,
          "to_node": "Emission Viewer",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 1,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 2,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 4
          },
          "to": 2,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 5
          },
          "to": 2,
          "to_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 3,
          "to_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 7
          },
          "to": 3,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 3,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 3,
          "to_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "NB",
            "type": "NodeSocketFloat",
            "socket_index": 10
          },
          "to": 3,
          "to_socket": {
            "name": "NB",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 11
          },
          "to": 3,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 7
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 12
          },
          "to": 3,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 8
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate A",
            "type": "NodeSocketFloat",
            "socket_index": 13
          },
          "to": 3,
          "to_socket": {
            "name": "Rotate A",
            "type": "NodeSocketFloat",
            "socket_index": 9
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate B",
            "type": "NodeSocketFloat",
            "socket_index": 14
          },
          "to": 3,
          "to_socket": {
            "name": "Rotate B",
            "type": "NodeSocketFloat",
            "socket_index": 10
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 15
          },
          "to": 3,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 11
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 16
          },
          "to": 3,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 12
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 17
          },
          "to": 4,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 18
          },
          "to": 5,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 19
          },
          "to": 9,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 20
          },
          "to": 9,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 2
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 21
          },
          "to": 10,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "tileU",
            "type": "NodeSocketFloat",
            "socket_index": 22
          },
          "to": 12,
          "to_socket": {
            "name": "tileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 23
          },
          "to": 12,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 24
          },
          "to": 12,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 25
          },
          "to": 12,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 26
          },
          "to": 12,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 27
          },
          "to": 12,
          "to_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 28
          },
          "to": 13,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 29
          },
          "to": 14,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 30
          },
          "to": 14,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 2
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 31
          },
          "to": 18,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 19,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 32
          },
          "to": 18,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 2
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 270.3894348144531,
            "width": 240
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
            }
          ],
          "location": {
            "x": -827.0792846679688,
            "y": 499.3894348144531
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 166.18975830078125,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.299999952316284,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -469.222412109375,
            "y": 494.18975830078125
          },
          "name": "Group.001",
          "node_name": "Scale2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 2,
          "dimensions": {
            "height": 166.61407470703125,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -225.84454345703125,
            "y": 543.6140747070312
          },
          "name": "Group",
          "node_name": "Rotate2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 3,
          "dimensions": {
            "height": 364.33941650390625,
            "width": 262.6826477050781
          },
          "id": 3,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 3,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 5,
              "name": "NB",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "OffsetU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "OffsetV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 9,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate B",
              "socket_index": 10,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 11,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 12,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 397.3409118652344,
            "y": 660.3394165039062
          },
          "name": "Group.002",
          "node_name": "NGonTilesOffset",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 4,
          "dimensions": {
            "height": 147.8636474609375,
            "width": 140
          },
          "id": 4,
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
            "x": -174.52639770507812,
            "y": 813.8636474609375
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
          "child_def": 5,
          "dimensions": {
            "height": 147.87615966796875,
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
              "default_value": 0.20000000298023224,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 45.473602294921875,
            "y": 809.8761596679688
          },
          "name": "Math.001",
          "operation": "ADD",
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
          "child_def": 6,
          "dimensions": {
            "height": 232.57830810546875,
            "width": 140
          },
          "id": 6,
          "inputs": [],
          "location": {
            "x": -1162.802001953125,
            "y": 467.57830810546875
          },
          "name": "Texture Coordinate",
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
          "child_def": 7,
          "dimensions": {
            "height": 232.4793701171875,
            "width": 220.98486328125
          },
          "id": 7,
          "inputs": [],
          "location": {
            "x": -1166.232421875,
            "y": 1078.4793701171875
          },
          "name": "Texture Coordinate.001",
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
          "child_def": 8,
          "dimensions": {
            "height": 122.83831787109375,
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
            "x": -407.48382568359375,
            "y": 845.8383178710938
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
          "blend_type": "MULTIPLY",
          "child_def": 9,
          "dimensions": {
            "height": 166.36590576171875,
            "width": 140
          },
          "id": 9,
          "inputs": [
            {
              "default_value": 1,
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
                0.30000001192092896,
                0.30000001192092896,
                0.30000001192092896,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -636.042724609375,
            "y": 832.3659057617188
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
          "child_def": 10,
          "dimensions": {
            "height": 92.093505859375,
            "width": 140
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
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 649.1237182617188,
            "y": 1345.093505859375
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
          "child_def": 11,
          "dimensions": {
            "height": 89.6571044921875,
            "width": 140
          },
          "id": 11,
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
            "x": 974.3375244140625,
            "y": 1335.6571044921875
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 12,
          "dimensions": {
            "height": 276.241455078125,
            "width": 140
          },
          "id": 12,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -252.4933624267578,
            "y": 1287.241455078125
          },
          "name": "Group.003",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "blend_type": "SUBTRACT",
          "child_def": 13,
          "dimensions": {
            "height": 166.3131103515625,
            "width": 140
          },
          "id": 13,
          "inputs": [
            {
              "default_value": 1,
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
            "x": 161.36032104492188,
            "y": 1448.3131103515625
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
          "blend_type": "MULTIPLY",
          "child_def": 14,
          "dimensions": {
            "height": 166.403076171875,
            "width": 140
          },
          "id": 14,
          "inputs": [
            {
              "default_value": 1,
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
                0.31111541390419006,
                0.31111541390419006,
                0.31111541390419006,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -683.4129638671875,
            "y": 1401.403076171875
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
          "child_def": 15,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 15,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -251.07925415039062,
            "y": 1452.684326171875
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "child_def": 16,
          "dimensions": {
            "height": 122.525146484375,
            "width": 140
          },
          "gradient_type": "SPHERICAL",
          "id": 16,
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
            "x": -252.55877685546875,
            "y": 1662.525146484375
          },
          "name": "Gradient Texture.002",
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
          "child_def": 17,
          "dimensions": {
            "height": 122.288330078125,
            "width": 140
          },
          "gradient_type": "SPHERICAL",
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
            "x": 394.08367919921875,
            "y": 1524.288330078125
          },
          "name": "Gradient Texture.001",
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
          "blend_type": "MULTIPLY",
          "child_def": 18,
          "dimensions": {
            "height": 166.1629638671875,
            "width": 140
          },
          "id": 18,
          "inputs": [
            {
              "default_value": 1,
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
            "x": -53.75128936767578,
            "y": 1286.1629638671875
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
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 19,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.299999952316284,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 3,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 5,
              "name": "NB",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "OffsetU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "OffsetV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 9,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate B",
              "socket_index": 10,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 11,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 12,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0.30000001192092896,
                0.30000001192092896,
                0.30000001192092896,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0.31111541390419006,
                0.31111541390419006,
                0.31111541390419006,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
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
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2.299999952316284,
          "name": "Scale",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Angle",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 3,
          "name": "TileU",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "N",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 5,
          "name": "NB",
          "socket_index": 10,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "OffsetU",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "OffsetV",
          "socket_index": 12,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate A",
          "socket_index": 13,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate B",
          "socket_index": 14,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 15,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 17,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Value",
          "socket_index": 18,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 19,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.30000001192092896,
            0.30000001192092896,
            0.30000001192092896,
            1
          ],
          "name": "Color2",
          "socket_index": 20,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Strength",
          "socket_index": 21,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 10,
          "name": "tileU",
          "socket_index": 22,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "MaxU",
          "socket_index": 23,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "MaxV",
          "socket_index": 24,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetU",
          "socket_index": 25,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetV",
          "socket_index": 26,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Random Seed",
          "socket_index": 27,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 28,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 29,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.31111541390419006,
            0.31111541390419006,
            0.31111541390419006,
            1
          ],
          "name": "Color2",
          "socket_index": 30,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 31,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.5,
            0.5,
            0.5,
            1
          ],
          "name": "Color2",
          "socket_index": 32,
          "type": "NodeSocketColor"
        }
      ]
    }
    return Layout.process(material);
  }


  static dist_mtl001_(args) {
    let { scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, combine$XYZZ_3, tile_uvw_offsettileU_4, tile_uvw_offsetMaxU_5, tile_uvw_offsetMaxV_6, tile_uvw_offsetOffsetU_7, tile_uvw_offsetOffsetV_8, tile_uvw_offsetRandom$Seed_9, mix002Fac_10, mix002Color2_11, mix003Fac_12, mix003Color2_13, mix001Fac_14, rotate2DCenterU_15, rotate2DCenterV_16, rotate2DAngle_17, math002Value_18, nGonTilesTileU_19, nGonTilesBlend_20, nGonTilesRandomness_21, nGonTilesN_22, nGonTilesMaxU_23, nGonTilesMaxV_24, mathValue_25, emission$ViewerStrength_26, diffuse$BSDFColor_27, diffuse$BSDFRoughness_28, diffuse$BSDFNormal_29, displacementMidlevel_30, displacementScale_31, displacementNormal_32 } = args;
    return ScatterField.dist_mtl001(scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, combine$XYZZ_3, tile_uvw_offsettileU_4, tile_uvw_offsetMaxU_5, tile_uvw_offsetMaxV_6, tile_uvw_offsetOffsetU_7, tile_uvw_offsetOffsetV_8, tile_uvw_offsetRandom$Seed_9, mix002Fac_10, mix002Color2_11, mix003Fac_12, mix003Color2_13, mix001Fac_14, rotate2DCenterU_15, rotate2DCenterV_16, rotate2DAngle_17, math002Value_18, nGonTilesTileU_19, nGonTilesBlend_20, nGonTilesRandomness_21, nGonTilesN_22, nGonTilesMaxU_23, nGonTilesMaxV_24, mathValue_25, emission$ViewerStrength_26, diffuse$BSDFColor_27, diffuse$BSDFRoughness_28, diffuse$BSDFNormal_29, displacementMidlevel_30, displacementScale_31, displacementNormal_32)
  }
  static dist_mtl001(scale2DCenterU_0, scale2DCenterV_1, scale2DScale_2, combine$XYZZ_3, tile_uvw_offsettileU_4, tile_uvw_offsetMaxU_5, tile_uvw_offsetMaxV_6, tile_uvw_offsetOffsetU_7, tile_uvw_offsetOffsetV_8, tile_uvw_offsetRandom$Seed_9, mix002Fac_10, mix002Color2_11, mix003Fac_12, mix003Color2_13, mix001Fac_14, rotate2DCenterU_15, rotate2DCenterV_16, rotate2DAngle_17, math002Value_18, nGonTilesTileU_19, nGonTilesBlend_20, nGonTilesRandomness_21, nGonTilesN_22, nGonTilesMaxU_23, nGonTilesMaxV_24, mathValue_25, emission$ViewerStrength_26, diffuse$BSDFColor_27, diffuse$BSDFRoughness_28, diffuse$BSDFNormal_29, displacementMidlevel_30, displacementScale_31, displacementNormal_32) {
    var material = new ScatterField('dist_mtl.001')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "scale2DCenterU_0": {
        "node": "Group.001",
        "socket_index": 1,
        "input_index": 0,
        "input": "CenterU"
      },
      "scale2DCenterV_1": {
        "node": "Group.001",
        "socket_index": 2,
        "input_index": 1,
        "input": "CenterV"
      },
      "scale2DScale_2": {
        "node": "Group.001",
        "socket_index": 3,
        "input_index": 2,
        "input": "Scale"
      },
      "combine$XYZZ_3": {
        "node": "Combine XYZ",
        "socket_index": 2,
        "input_index": 3,
        "input": "Z"
      },
      "tile_uvw_offsettileU_4": {
        "node": "Group.003",
        "socket_index": 1,
        "input_index": 4,
        "input": "tileU"
      },
      "tile_uvw_offsetMaxU_5": {
        "node": "Group.003",
        "socket_index": 2,
        "input_index": 5,
        "input": "MaxU"
      },
      "tile_uvw_offsetMaxV_6": {
        "node": "Group.003",
        "socket_index": 3,
        "input_index": 6,
        "input": "MaxV"
      },
      "tile_uvw_offsetOffsetU_7": {
        "node": "Group.003",
        "socket_index": 4,
        "input_index": 7,
        "input": "OffsetU"
      },
      "tile_uvw_offsetOffsetV_8": {
        "node": "Group.003",
        "socket_index": 5,
        "input_index": 8,
        "input": "OffsetV"
      },
      "tile_uvw_offsetRandom$Seed_9": {
        "node": "Group.003",
        "socket_index": 6,
        "input_index": 9,
        "input": "Random Seed"
      },
      "mix002Fac_10": {
        "node": "Mix.002",
        "socket_index": 0,
        "input_index": 10,
        "input": "Fac"
      },
      "mix002Color2_11": {
        "node": "Mix.002",
        "socket_index": 2,
        "input_index": 11,
        "input": "Color2"
      },
      "mix003Fac_12": {
        "node": "Mix.003",
        "socket_index": 0,
        "input_index": 12,
        "input": "Fac"
      },
      "mix003Color2_13": {
        "node": "Mix.003",
        "socket_index": 2,
        "input_index": 13,
        "input": "Color2"
      },
      "mix001Fac_14": {
        "node": "Mix.001",
        "socket_index": 0,
        "input_index": 14,
        "input": "Fac"
      },
      "rotate2DCenterU_15": {
        "node": "Group",
        "socket_index": 1,
        "input_index": 15,
        "input": "CenterU"
      },
      "rotate2DCenterV_16": {
        "node": "Group",
        "socket_index": 2,
        "input_index": 16,
        "input": "CenterV"
      },
      "rotate2DAngle_17": {
        "node": "Group",
        "socket_index": 3,
        "input_index": 17,
        "input": "Angle"
      },
      "math002Value_18": {
        "node": "Math.002",
        "socket_index": 1,
        "input_index": 18,
        "input": "Value"
      },
      "nGonTilesTileU_19": {
        "node": "Group.004",
        "socket_index": 1,
        "input_index": 19,
        "input": "TileU"
      },
      "nGonTilesBlend_20": {
        "node": "Group.004",
        "socket_index": 3,
        "input_index": 20,
        "input": "Blend"
      },
      "nGonTilesRandomness_21": {
        "node": "Group.004",
        "socket_index": 4,
        "input_index": 21,
        "input": "Randomness"
      },
      "nGonTilesN_22": {
        "node": "Group.004",
        "socket_index": 5,
        "input_index": 22,
        "input": "N"
      },
      "nGonTilesMaxU_23": {
        "node": "Group.004",
        "socket_index": 7,
        "input_index": 23,
        "input": "MaxU"
      },
      "nGonTilesMaxV_24": {
        "node": "Group.004",
        "socket_index": 8,
        "input_index": 24,
        "input": "MaxV"
      },
      "mathValue_25": {
        "node": "Math",
        "socket_index": 1,
        "input_index": 25,
        "input": "Value"
      },
      "emission$ViewerStrength_26": {
        "node": "Emission Viewer",
        "socket_index": 1,
        "input_index": 26,
        "input": "Strength"
      },
      "diffuse$BSDFColor_27": {
        "node": "Diffuse BSDF",
        "socket_index": 0,
        "input_index": 27,
        "input": "Color"
      },
      "diffuse$BSDFRoughness_28": {
        "node": "Diffuse BSDF",
        "socket_index": 1,
        "input_index": 28,
        "input": "Roughness"
      },
      "diffuse$BSDFNormal_29": {
        "node": "Diffuse BSDF",
        "socket_index": 2,
        "input_index": 29,
        "input": "Normal"
      },
      "displacementMidlevel_30": {
        "node": "Displacement",
        "socket_index": 1,
        "input_index": 30,
        "input": "Midlevel"
      },
      "displacementScale_31": {
        "node": "Displacement",
        "socket_index": 2,
        "input_index": 31,
        "input": "Scale"
      },
      "displacementNormal_32": {
        "node": "Displacement",
        "socket_index": 3,
        "input_index": 32,
        "input": "Normal"
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
    material.scale2DCenterU_0 = scale2DCenterU_0;
    material.scale2DCenterV_1 = scale2DCenterV_1;
    material.scale2DScale_2 = scale2DScale_2;
    material.combine$XYZZ_3 = combine$XYZZ_3;
    material.tile_uvw_offsettileU_4 = tile_uvw_offsettileU_4;
    material.tile_uvw_offsetMaxU_5 = tile_uvw_offsetMaxU_5;
    material.tile_uvw_offsetMaxV_6 = tile_uvw_offsetMaxV_6;
    material.tile_uvw_offsetOffsetU_7 = tile_uvw_offsetOffsetU_7;
    material.tile_uvw_offsetOffsetV_8 = tile_uvw_offsetOffsetV_8;
    material.tile_uvw_offsetRandom$Seed_9 = tile_uvw_offsetRandom$Seed_9;
    material.mix002Fac_10 = mix002Fac_10;
    material.mix002Color2_11 = mix002Color2_11;
    material.mix003Fac_12 = mix003Fac_12;
    material.mix003Color2_13 = mix003Color2_13;
    material.mix001Fac_14 = mix001Fac_14;
    material.rotate2DCenterU_15 = rotate2DCenterU_15;
    material.rotate2DCenterV_16 = rotate2DCenterV_16;
    material.rotate2DAngle_17 = rotate2DAngle_17;
    material.math002Value_18 = math002Value_18;
    material.nGonTilesTileU_19 = nGonTilesTileU_19;
    material.nGonTilesBlend_20 = nGonTilesBlend_20;
    material.nGonTilesRandomness_21 = nGonTilesRandomness_21;
    material.nGonTilesN_22 = nGonTilesN_22;
    material.nGonTilesMaxU_23 = nGonTilesMaxU_23;
    material.nGonTilesMaxV_24 = nGonTilesMaxV_24;
    material.mathValue_25 = mathValue_25;
    material.emission$ViewerStrength_26 = emission$ViewerStrength_26;
    material.diffuse$BSDFColor_27 = diffuse$BSDFColor_27;
    material.diffuse$BSDFRoughness_28 = diffuse$BSDFRoughness_28;
    material.diffuse$BSDFNormal_29 = diffuse$BSDFNormal_29;
    material.displacementMidlevel_30 = displacementMidlevel_30;
    material.displacementScale_31 = displacementScale_31;
    material.displacementNormal_32 = displacementNormal_32;

    material.definition = {
      "links": [
        {
          "from": 12,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 1,
          "to_node": "Group.001",
          "to_node_name": "Scale2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Group.001",
          "from_node_name": "Scale2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 13,
          "to_node": "Group",
          "to_node_name": "Rotate2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 6,
          "to_node": "Group.003",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Texture Coordinate.001",
          "from_socket": {
            "name": "Object",
            "socket_index": 3,
            "type": "NodeSocketVector"
          },
          "to": 3,
          "to_node": "Separate XYZ",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 10,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 10,
          "from_node": "Mix.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 11,
          "to_node": "Gradient Texture.001",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 6,
          "from_node": "Group.003",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Mix.002",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 8,
          "from_node": "Mix.003",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 2,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 9,
          "to_node": "Gradient Texture.002",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 7,
          "from_node": "Mix.002",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 10,
          "to_node": "Mix.001",
          "to_socket": {
            "name": "Color2",
            "socket_index": 2,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 5,
          "from_node": "Combine XYZ",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Mix.003",
          "to_socket": {
            "name": "Color1",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "X",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Separate XYZ",
          "from_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Combine XYZ",
          "to_socket": {
            "name": "Y",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Gradient Texture.001",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 14,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Group",
          "from_node_name": "Rotate2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 16,
          "to_node": "Group.004",
          "to_node_name": "NGonTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 16,
          "from_node": "Group.004",
          "from_node_name": "NGonTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 18,
          "to_node": "Emission Viewer",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 14,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Group.004",
          "to_node_name": "NGonTiles",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Gradient Texture.001",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 16,
          "to_node": "Group.004",
          "to_node_name": "NGonTiles",
          "to_socket": {
            "name": "Rotate A",
            "socket_index": 6,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 16,
          "from_node": "Group.004",
          "from_node_name": "NGonTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 19,
          "from_node": "Diffuse BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 20,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 18,
          "from_node": "Emission Viewer",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 20,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 20,
          "from_node": "Add Shader",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 15,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 17,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 21,
          "to_node": "Displacement",
          "to_socket": {
            "name": "Height",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Displacement",
          "from_socket": {
            "name": "Displacement",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 15,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Displacement",
            "socket_index": 2,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 1,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Z",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 5,
          "to_socket": {
            "name": "Z",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "tileU",
            "type": "NodeSocketFloat",
            "socket_index": 4
          },
          "to": 6,
          "to_socket": {
            "name": "tileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 5
          },
          "to": 6,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 6,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 7
          },
          "to": 6,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 6,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 6,
          "to_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 10
          },
          "to": 7,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 11
          },
          "to": 7,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 12
          },
          "to": 8,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 13
          },
          "to": 8,
          "to_socket": {
            "name": "Color2",
            "type": "NodeSocketColor",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 14
          },
          "to": 10,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 15
          },
          "to": 13,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 16
          },
          "to": 13,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 17
          },
          "to": 13,
          "to_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 18
          },
          "to": 14,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 19
          },
          "to": 16,
          "to_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 20
          },
          "to": 16,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 21
          },
          "to": 16,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 22
          },
          "to": 16,
          "to_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 23
          },
          "to": 16,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 7
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 24
          },
          "to": 16,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 8
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 25
          },
          "to": 17,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 26
          },
          "to": 18,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 27
          },
          "to": 19,
          "to_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 28
          },
          "to": 19,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 29
          },
          "to": 19,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Midlevel",
            "type": "NodeSocketFloat",
            "socket_index": 30
          },
          "to": 21,
          "to_socket": {
            "name": "Midlevel",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 31
          },
          "to": 21,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 22,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 32
          },
          "to": 21,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 3
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 270.3894348144531,
            "width": 240
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
            }
          ],
          "location": {
            "x": -827.0792846679688,
            "y": 499.3894348144531
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 166.18975830078125,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -469.222412109375,
            "y": 494.18975830078125
          },
          "name": "Group.001",
          "node_name": "Scale2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 2,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 2,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": 7.086151123046875,
            "y": 1452.684326171875
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "child_def": 3,
          "dimensions": {
            "height": 114.4910888671875,
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
            }
          ],
          "location": {
            "x": -859.9918823242188,
            "y": 1393.4910888671875
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
          "child_def": 4,
          "dimensions": {
            "height": 232.1053466796875,
            "width": 220.98486328125
          },
          "id": 4,
          "inputs": [],
          "location": {
            "x": -1367.6005859375,
            "y": 1248.1053466796875
          },
          "name": "Texture Coordinate.001",
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
          "child_def": 5,
          "dimensions": {
            "height": 114.528564453125,
            "width": 140
          },
          "id": 5,
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
            "x": -646.2987060546875,
            "y": 1402.528564453125
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
          "child_def": 6,
          "dimensions": {
            "height": 276.21826171875,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -441.5972900390625,
            "y": 1204.21826171875
          },
          "name": "Group.003",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "blend_type": "MULTIPLY",
          "child_def": 7,
          "dimensions": {
            "height": 166.7469482421875,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 1,
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
                0.20000000298023224,
                0.20000000298023224,
                0,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -166.222412109375,
            "y": 1277.7469482421875
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
          "blend_type": "MULTIPLY",
          "child_def": 8,
          "dimensions": {
            "height": 166.176025390625,
            "width": 140
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 1,
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
                0.20000000298023224,
                0.20000000298023224,
                0.5,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -427.3498229980469,
            "y": 1518.176025390625
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
          "child_def": 9,
          "dimensions": {
            "height": 122.4735107421875,
            "width": 140
          },
          "gradient_type": "SPHERICAL",
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
            }
          ],
          "location": {
            "x": 151.59893798828125,
            "y": 1699.4735107421875
          },
          "name": "Gradient Texture.002",
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
          "blend_type": "SUBTRACT",
          "child_def": 10,
          "dimensions": {
            "height": 166.7630615234375,
            "width": 140
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 1,
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
            "x": 382.68487548828125,
            "y": 1581.7630615234375
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
          "child_def": 11,
          "dimensions": {
            "height": 122.4114990234375,
            "width": 140
          },
          "gradient_type": "SPHERICAL",
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
            "x": 739.2684326171875,
            "y": 1631.4114990234375
          },
          "name": "Gradient Texture.001",
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
          "child_def": 12,
          "dimensions": {
            "height": 232.82427978515625,
            "width": 140
          },
          "id": 12,
          "inputs": [],
          "location": {
            "x": -1367.697998046875,
            "y": 518.8242797851562
          },
          "name": "Texture Coordinate",
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
          "child_def": 13,
          "dimensions": {
            "height": 166.61407470703125,
            "width": 140
          },
          "id": 13,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -225.84454345703125,
            "y": 543.6140747070312
          },
          "name": "Group",
          "node_name": "Rotate2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 14,
          "dimensions": {
            "height": 147.615478515625,
            "width": 139.99993896484375
          },
          "id": 14,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1005.5435180664062,
            "y": 1484.615478515625
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
          "child_def": 15,
          "dimensions": {
            "height": 89.91314697265625,
            "width": 140
          },
          "id": 15,
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
            "x": 2987.974609375,
            "y": 987.9131469726562
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 16,
          "dimensions": {
            "height": 276.216064453125,
            "width": 262.6826171875
          },
          "id": 16,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1690.0030517578125,
            "y": 1112.216064453125
          },
          "name": "Group.004",
          "node_name": "NGonTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 17,
          "dimensions": {
            "height": 147.845458984375,
            "width": 140
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 2363.21142578125,
            "y": 730.845458984375
          },
          "name": "Math",
          "operation": "MULTIPLY",
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
          "child_def": 18,
          "dimensions": {
            "height": 92.1759033203125,
            "width": 194.9140625
          },
          "id": 18,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 254.19998168945312,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 2384.338623046875,
            "y": 1176.1759033203125
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
          "child_def": 19,
          "dimensions": {
            "height": 114.23876953125,
            "width": 150
          },
          "id": 19,
          "inputs": [
            {
              "default_value": [
                0.043837182223796844,
                0.043837182223796844,
                0.043837182223796844,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 2357.18505859375,
            "y": 1379.23876953125
          },
          "name": "Diffuse BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfDiffuse"
        },
        {
          "child_def": 20,
          "dimensions": {
            "height": 92.4820556640625,
            "width": 140
          },
          "id": 20,
          "inputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Shader",
              "socket_index": 1,
              "type": "NodeSocketShader"
            }
          ],
          "location": {
            "x": 2649.51806640625,
            "y": 1351.4820556640625
          },
          "name": "Add Shader",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeAddShader"
        },
        {
          "child_def": 21,
          "dimensions": {
            "height": 0,
            "width": 0
          },
          "id": 21,
          "inputs": [
            {
              "default_value": 0,
              "name": "Height",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Midlevel",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Scale",
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
          "location": {
            "x": 2675.593017578125,
            "y": 859.3792724609375
          },
          "name": "Displacement",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Displacement",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeDisplacement"
        },
        {
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 22,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Z",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0.20000000298023224,
                0.20000000298023224,
                0,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0.20000000298023224,
                0.20000000298023224,
                0.5,
                1
              ],
              "name": "Color2",
              "socket_index": 2,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 254.19998168945312,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": [
                0.043837182223796844,
                0.043837182223796844,
                0.043837182223796844,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "Midlevel",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Scale",
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
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Scale",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Z",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 10,
          "name": "tileU",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "MaxU",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "MaxV",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetU",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetV",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Random Seed",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 10,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.20000000298023224,
            0.20000000298023224,
            0,
            1
          ],
          "name": "Color2",
          "socket_index": 11,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 12,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0.20000000298023224,
            0.20000000298023224,
            0.5,
            1
          ],
          "name": "Color2",
          "socket_index": 13,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 14,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 15,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Angle",
          "socket_index": 17,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.8999999761581421,
          "name": "Value",
          "socket_index": 18,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 10,
          "name": "TileU",
          "socket_index": 19,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Blend",
          "socket_index": 20,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 21,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6,
          "name": "N",
          "socket_index": 22,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 23,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 24,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 5,
          "name": "Value",
          "socket_index": 25,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 254.19998168945312,
          "name": "Strength",
          "socket_index": 26,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0.043837182223796844,
            0.043837182223796844,
            0.043837182223796844,
            1
          ],
          "name": "Color",
          "socket_index": 27,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0,
          "name": "Roughness",
          "socket_index": 28,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 29,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "Midlevel",
          "socket_index": 30,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Scale",
          "socket_index": 31,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 32,
          "type": "NodeSocketVector"
        }
      ]
    }
    return Layout.process(material);
  }


  static hexa_mtl_(args) {
    let { mathValue_0, bumpStrength_1, bumpDistance_2, bumpNormal_3, math001Value_4, emissionColor_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11, hexaTilesScale_12, hexaTilesSize_13, hexaTilesBlend_14, hexaTilesRandomness_15, hexaTilesRotate_16, hexaTilesSides_17, noise$TextureVector_18, noise$TextureScale_19, noise$TextureDetail_20, noise$TextureDistortion_21, math005Value_22, hexaTilesScale_23, hexaTilesSize_24, hexaTilesBlend_25, hexaTilesRandomness_26, hexaTilesRotate_27, hexaTilesSides_28, hexaTilesScale_29, hexaTilesBlend_30, hexaTilesRandomness_31, hexaTilesRotate_32, hexaTilesSides_33 } = args;
    return ScatterField.hexa_mtl(mathValue_0, bumpStrength_1, bumpDistance_2, bumpNormal_3, math001Value_4, emissionColor_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11, hexaTilesScale_12, hexaTilesSize_13, hexaTilesBlend_14, hexaTilesRandomness_15, hexaTilesRotate_16, hexaTilesSides_17, noise$TextureVector_18, noise$TextureScale_19, noise$TextureDetail_20, noise$TextureDistortion_21, math005Value_22, hexaTilesScale_23, hexaTilesSize_24, hexaTilesBlend_25, hexaTilesRandomness_26, hexaTilesRotate_27, hexaTilesSides_28, hexaTilesScale_29, hexaTilesBlend_30, hexaTilesRandomness_31, hexaTilesRotate_32, hexaTilesSides_33)
  }
  static hexa_mtl(mathValue_0, bumpStrength_1, bumpDistance_2, bumpNormal_3, math001Value_4, emissionColor_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11, hexaTilesScale_12, hexaTilesSize_13, hexaTilesBlend_14, hexaTilesRandomness_15, hexaTilesRotate_16, hexaTilesSides_17, noise$TextureVector_18, noise$TextureScale_19, noise$TextureDetail_20, noise$TextureDistortion_21, math005Value_22, hexaTilesScale_23, hexaTilesSize_24, hexaTilesBlend_25, hexaTilesRandomness_26, hexaTilesRotate_27, hexaTilesSides_28, hexaTilesScale_29, hexaTilesBlend_30, hexaTilesRandomness_31, hexaTilesRotate_32, hexaTilesSides_33) {
    var material = new ScatterField('hexa_mtl')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "mathValue_0": {
        "node": "Math",
        "socket_index": 1,
        "input_index": 0,
        "input": "Value"
      },
      "bumpStrength_1": {
        "node": "Bump",
        "socket_index": 0,
        "input_index": 1,
        "input": "Strength"
      },
      "bumpDistance_2": {
        "node": "Bump",
        "socket_index": 1,
        "input_index": 2,
        "input": "Distance"
      },
      "bumpNormal_3": {
        "node": "Bump",
        "socket_index": 3,
        "input_index": 3,
        "input": "Normal"
      },
      "math001Value_4": {
        "node": "Math.001",
        "socket_index": 1,
        "input_index": 4,
        "input": "Value"
      },
      "emissionColor_5": {
        "node": "Emission",
        "socket_index": 0,
        "input_index": 5,
        "input": "Color"
      },
      "hexaTilesScale_6": {
        "node": "Group.003",
        "socket_index": 1,
        "input_index": 6,
        "input": "Scale"
      },
      "hexaTilesSize_7": {
        "node": "Group.003",
        "socket_index": 2,
        "input_index": 7,
        "input": "Size"
      },
      "hexaTilesBlend_8": {
        "node": "Group.003",
        "socket_index": 3,
        "input_index": 8,
        "input": "Blend"
      },
      "hexaTilesRandomness_9": {
        "node": "Group.003",
        "socket_index": 4,
        "input_index": 9,
        "input": "Randomness"
      },
      "hexaTilesRotate_10": {
        "node": "Group.003",
        "socket_index": 5,
        "input_index": 10,
        "input": "Rotate"
      },
      "hexaTilesSides_11": {
        "node": "Group.003",
        "socket_index": 6,
        "input_index": 11,
        "input": "Sides"
      },
      "hexaTilesScale_12": {
        "node": "Group.005",
        "socket_index": 1,
        "input_index": 12,
        "input": "Scale"
      },
      "hexaTilesSize_13": {
        "node": "Group.005",
        "socket_index": 2,
        "input_index": 13,
        "input": "Size"
      },
      "hexaTilesBlend_14": {
        "node": "Group.005",
        "socket_index": 3,
        "input_index": 14,
        "input": "Blend"
      },
      "hexaTilesRandomness_15": {
        "node": "Group.005",
        "socket_index": 4,
        "input_index": 15,
        "input": "Randomness"
      },
      "hexaTilesRotate_16": {
        "node": "Group.005",
        "socket_index": 5,
        "input_index": 16,
        "input": "Rotate"
      },
      "hexaTilesSides_17": {
        "node": "Group.005",
        "socket_index": 6,
        "input_index": 17,
        "input": "Sides"
      },
      "noise$TextureVector_18": {
        "node": "Noise Texture",
        "socket_index": 0,
        "input_index": 18,
        "input": "Vector"
      },
      "noise$TextureScale_19": {
        "node": "Noise Texture",
        "socket_index": 1,
        "input_index": 19,
        "input": "Scale"
      },
      "noise$TextureDetail_20": {
        "node": "Noise Texture",
        "socket_index": 2,
        "input_index": 20,
        "input": "Detail"
      },
      "noise$TextureDistortion_21": {
        "node": "Noise Texture",
        "socket_index": 3,
        "input_index": 21,
        "input": "Distortion"
      },
      "math005Value_22": {
        "node": "Math.005",
        "socket_index": 1,
        "input_index": 22,
        "input": "Value"
      },
      "hexaTilesScale_23": {
        "node": "Group.004",
        "socket_index": 1,
        "input_index": 23,
        "input": "Scale"
      },
      "hexaTilesSize_24": {
        "node": "Group.004",
        "socket_index": 2,
        "input_index": 24,
        "input": "Size"
      },
      "hexaTilesBlend_25": {
        "node": "Group.004",
        "socket_index": 3,
        "input_index": 25,
        "input": "Blend"
      },
      "hexaTilesRandomness_26": {
        "node": "Group.004",
        "socket_index": 4,
        "input_index": 26,
        "input": "Randomness"
      },
      "hexaTilesRotate_27": {
        "node": "Group.004",
        "socket_index": 5,
        "input_index": 27,
        "input": "Rotate"
      },
      "hexaTilesSides_28": {
        "node": "Group.004",
        "socket_index": 6,
        "input_index": 28,
        "input": "Sides"
      },
      "hexaTilesScale_29": {
        "node": "Group.002",
        "socket_index": 1,
        "input_index": 29,
        "input": "Scale"
      },
      "hexaTilesBlend_30": {
        "node": "Group.002",
        "socket_index": 3,
        "input_index": 30,
        "input": "Blend"
      },
      "hexaTilesRandomness_31": {
        "node": "Group.002",
        "socket_index": 4,
        "input_index": 31,
        "input": "Randomness"
      },
      "hexaTilesRotate_32": {
        "node": "Group.002",
        "socket_index": 5,
        "input_index": 32,
        "input": "Rotate"
      },
      "hexaTilesSides_33": {
        "node": "Group.002",
        "socket_index": 6,
        "input_index": 33,
        "input": "Sides"
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
    material.mathValue_0 = mathValue_0;
    material.bumpStrength_1 = bumpStrength_1;
    material.bumpDistance_2 = bumpDistance_2;
    material.bumpNormal_3 = bumpNormal_3;
    material.math001Value_4 = math001Value_4;
    material.emissionColor_5 = emissionColor_5;
    material.hexaTilesScale_6 = hexaTilesScale_6;
    material.hexaTilesSize_7 = hexaTilesSize_7;
    material.hexaTilesBlend_8 = hexaTilesBlend_8;
    material.hexaTilesRandomness_9 = hexaTilesRandomness_9;
    material.hexaTilesRotate_10 = hexaTilesRotate_10;
    material.hexaTilesSides_11 = hexaTilesSides_11;
    material.hexaTilesScale_12 = hexaTilesScale_12;
    material.hexaTilesSize_13 = hexaTilesSize_13;
    material.hexaTilesBlend_14 = hexaTilesBlend_14;
    material.hexaTilesRandomness_15 = hexaTilesRandomness_15;
    material.hexaTilesRotate_16 = hexaTilesRotate_16;
    material.hexaTilesSides_17 = hexaTilesSides_17;
    material.noise$TextureVector_18 = noise$TextureVector_18;
    material.noise$TextureScale_19 = noise$TextureScale_19;
    material.noise$TextureDetail_20 = noise$TextureDetail_20;
    material.noise$TextureDistortion_21 = noise$TextureDistortion_21;
    material.math005Value_22 = math005Value_22;
    material.hexaTilesScale_23 = hexaTilesScale_23;
    material.hexaTilesSize_24 = hexaTilesSize_24;
    material.hexaTilesBlend_25 = hexaTilesBlend_25;
    material.hexaTilesRandomness_26 = hexaTilesRandomness_26;
    material.hexaTilesRotate_27 = hexaTilesRotate_27;
    material.hexaTilesSides_28 = hexaTilesSides_28;
    material.hexaTilesScale_29 = hexaTilesScale_29;
    material.hexaTilesBlend_30 = hexaTilesBlend_30;
    material.hexaTilesRandomness_31 = hexaTilesRandomness_31;
    material.hexaTilesRotate_32 = hexaTilesRotate_32;
    material.hexaTilesSides_33 = hexaTilesSides_33;

    material.definition = {
      "links": [
        {
          "from": 23,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 14,
          "to_node": "Mapping.002",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 22,
          "to_node": "Group.002",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 0,
          "to_node": "ColorRamp",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 2,
          "from_node": "Bump",
          "from_socket": {
            "name": "Normal",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 12,
          "to_node": "Glossy BSDF",
          "to_socket": {
            "name": "Normal",
            "socket_index": 2,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 3,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 3,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "Bump",
          "to_socket": {
            "name": "Height",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 15,
          "to_node": "Group.003",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 22,
          "from_node": "Group.002",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Group.003",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 10,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 10,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Group.004",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 21,
          "to_node": "Group.004",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 16,
          "from_node": "Group.005",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 7,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 7,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Glossy BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 13,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 11,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "ColorRamp.001",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 6,
          "from_node": "ColorRamp.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 12,
          "to_node": "Glossy BSDF",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 5,
          "from_node": "Emission",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 13,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 16,
          "from_node": "Group.005",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Emission",
          "to_socket": {
            "name": "Strength",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Mapping.002",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 9,
          "to_node": "Reroute.001",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 9,
          "from_node": "Reroute.001",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 16,
          "to_node": "Group.005",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 13,
          "from_node": "Add Shader",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 8,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 19,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 17,
          "to_node": "ColorRamp.002",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 18,
          "from_node": "Reroute.002",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 22,
          "to_node": "Group.002",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "ColorRamp.002",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 18,
          "to_node": "Reroute.002",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 0,
          "from_node": "ColorRamp",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 20,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 20,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 12,
          "to_node": "Glossy BSDF",
          "to_socket": {
            "name": "Roughness",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          },
          "to": 2,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Distance",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 2,
          "to_socket": {
            "name": "Distance",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 3
          },
          "to": 2,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 4
          },
          "to": 3,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 5
          },
          "to": 5,
          "to_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 15,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 7
          },
          "to": 15,
          "to_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 15,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 15,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 10
          },
          "to": 15,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 11
          },
          "to": 15,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 12
          },
          "to": 16,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 13
          },
          "to": 16,
          "to_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 14
          },
          "to": 16,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 15
          },
          "to": 16,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 16
          },
          "to": 16,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 17
          },
          "to": 16,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 18
          },
          "to": 19,
          "to_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 0
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 19
          },
          "to": 19,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 20
          },
          "to": 19,
          "to_socket": {
            "name": "Detail",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 21
          },
          "to": 19,
          "to_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 22
          },
          "to": 20,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 23
          },
          "to": 21,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 24
          },
          "to": 21,
          "to_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 25
          },
          "to": 21,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 26
          },
          "to": 21,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 27
          },
          "to": 21,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 28
          },
          "to": 21,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 29
          },
          "to": 22,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 30
          },
          "to": 22,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 31
          },
          "to": 22,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 32
          },
          "to": 22,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 24,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 33
          },
          "to": 22,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
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
                  0.26253658533096313,
                  0.26253658533096313,
                  0.26253658533096313,
                  1
                ],
                "position": 1
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 212.117431640625,
            "width": 240
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": -3117.57861328125,
            "y": 925.117431640625
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
          "child_def": 1,
          "dimensions": {
            "height": 152.98626708984375,
            "width": 140
          },
          "id": 1,
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
            "x": -3403.75830078125,
            "y": 579.9862670898438
          },
          "name": "Math",
          "operation": "SUBTRACT",
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
          "child_def": 2,
          "dimensions": {
            "height": 171.7432861328125,
            "width": 140
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.20000000298023224,
              "name": "Strength",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.10000000149011612,
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
            "x": -2873.89208984375,
            "y": 639.7432861328125
          },
          "name": "Bump",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeBump"
        },
        {
          "child_def": 3,
          "dimensions": {
            "height": 152.25762939453125,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -3193.2412109375,
            "y": 592.2576293945312
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
          "child_def": 4,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 4,
          "inputs": [
            {
              "default_value": 0,
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -3768.859375,
            "y": 719.9475708007812
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "child_def": 5,
          "dimensions": {
            "height": 97.2857666015625,
            "width": 140
          },
          "id": 5,
          "inputs": [
            {
              "default_value": [
                0.004960020072758198,
                0.8000000715255737,
                0.02701071836054325,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -2547.91015625,
            "y": 595.2857666015625
          },
          "name": "Emission",
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
          "child_def": 6,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.045228391885757446,
                  0.045228391885757446,
                  0.045228391885757446,
                  1
                ],
                "position": 0
              },
              {
                "color": [
                  0.4662012755870819,
                  0.4662012755870819,
                  0.4662012755870819,
                  1
                ],
                "position": 0.06818182021379471
              },
              {
                "color": [
                  0,
                  1,
                  0.9502312541007996,
                  1
                ],
                "position": 0.39090925455093384
              },
              {
                "color": [
                  0.6323658227920532,
                  0,
                  1,
                  1
                ],
                "position": 0.7181820869445801
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 212.295654296875,
            "width": 240
          },
          "id": 6,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": -4019.03173828125,
            "y": 1088.295654296875
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
          "child_def": 7,
          "dimensions": {
            "height": 152.74932861328125,
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
            "x": -4342.90576171875,
            "y": 717.7493286132812
          },
          "name": "Math.004",
          "operation": "ADD",
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
          "child_def": 8,
          "dimensions": {
            "height": 119.27685546875,
            "width": 100
          },
          "id": 8,
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
            "x": -1468.7261962890625,
            "y": 1054.27685546875
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 9,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 9,
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
            "x": -6240.79736328125,
            "y": 823.2017211914062
          },
          "name": "Reroute.001",
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
          "child_def": 10,
          "dimensions": {
            "height": 152.330810546875,
            "width": 140
          },
          "id": 10,
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
            "x": -5245.2587890625,
            "y": 1089.330810546875
          },
          "name": "Math.002",
          "operation": "SUBTRACT",
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
          "child_def": 11,
          "dimensions": {
            "height": 152.762939453125,
            "width": 140
          },
          "id": 11,
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
            "x": -4788.86572265625,
            "y": 1105.762939453125
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
          "child_def": 12,
          "dimensions": {
            "height": 149.0972900390625,
            "width": 150
          },
          "distribution": "GGX",
          "id": 12,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0.4472135901451111,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": -2569.92822265625,
            "y": 1055.0972900390625
          },
          "name": "Glossy BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfGlossy"
        },
        {
          "child_def": 13,
          "dimensions": {
            "height": 97.217529296875,
            "width": 140
          },
          "id": 13,
          "inputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Shader",
              "socket_index": 1,
              "type": "NodeSocketShader"
            }
          ],
          "location": {
            "x": -2095.124267578125,
            "y": 1057.217529296875
          },
          "name": "Add Shader",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeAddShader"
        },
        {
          "child_def": 14,
          "dimensions": {
            "height": 275.08062744140625,
            "width": 240
          },
          "id": 14,
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
            "x": -7140.7822265625,
            "y": 853.0806274414062
          },
          "name": "Mapping.002",
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 15,
          "dimensions": {
            "height": 215.1776123046875,
            "width": 259.0478515625
          },
          "id": 15,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.6000000238418579,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5722.81298828125,
            "y": 1024.1776123046875
          },
          "name": "Group.003",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 16,
          "dimensions": {
            "height": 215.112060546875,
            "width": 259.0478515625
          },
          "id": 16,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.19999998807907104,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.05000000074505806,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5721.61962890625,
            "y": 449.112060546875
          },
          "name": "Group.005",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 17,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.42708802223205566,
                  0.42708802223205566,
                  0.42708802223205566,
                  1
                ],
                "position": 0
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 0.6000002026557922
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 212.6993408203125,
            "width": 240
          },
          "id": 17,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": -6390.859375,
            "y": 1198.6993408203125
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
          "child_def": 18,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 18,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -6058.1494140625,
            "y": 1164.7418212890625
          },
          "name": "Reroute.002",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "child_def": 19,
          "dimensions": {
            "height": 163.7293701171875,
            "width": 140
          },
          "id": 19,
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
            "x": -6712.31689453125,
            "y": 1165.7293701171875
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
          "child_def": 20,
          "dimensions": {
            "height": 152.10736083984375,
            "width": 140
          },
          "id": 20,
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
            "x": -2843.75341796875,
            "y": 990.1073608398438
          },
          "name": "Math.005",
          "operation": "POWER",
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
          "child_def": 21,
          "dimensions": {
            "height": 215.51373291015625,
            "width": 259.0478515625
          },
          "id": 21,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
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
              "default_value": 0.9800000190734863,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.05000000074505806,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5735.072265625,
            "y": 743.5137329101562
          },
          "name": "Group.004",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 22,
          "dimensions": {
            "height": 215.1942138671875,
            "width": 259.0478515625
          },
          "id": 22,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5752.71728515625,
            "y": 1336.1942138671875
          },
          "name": "Group.002",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 23,
          "dimensions": {
            "height": 237.985595703125,
            "width": 140
          },
          "id": 23,
          "inputs": [],
          "location": {
            "x": -7402.888671875,
            "y": 878.985595703125
          },
          "name": "Texture Coordinate",
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
            "height": 108,
            "width": 140
          },
          "id": 24,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Strength",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Distance",
              "socket_index": 1,
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
            },
            {
              "default_value": 2,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": [
                0.004960020072758198,
                0.8000000715255737,
                0.02701071836054325,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.6000000238418579,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.19999998807907104,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.05000000074505806,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
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
            },
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.9800000190734863,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.05000000074505806,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5700000524520874,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 30,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.20000000298023224,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Strength",
          "socket_index": 1,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Distance",
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
        },
        {
          "default_value": 2,
          "name": "Value",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0.004960020072758198,
            0.8000000715255737,
            0.02701071836054325,
            1
          ],
          "name": "Color",
          "socket_index": 5,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 30,
          "name": "Scale",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.6000000238418579,
          "name": "Size",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Blend",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Randomness",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.5700000524520874,
          "name": "Rotate",
          "socket_index": 10,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Sides",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 30,
          "name": "Scale",
          "socket_index": 12,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.19999998807907104,
          "name": "Size",
          "socket_index": 13,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.05000000074505806,
          "name": "Blend",
          "socket_index": 14,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Randomness",
          "socket_index": 15,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.5700000524520874,
          "name": "Rotate",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Sides",
          "socket_index": 17,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Vector",
          "socket_index": 18,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 5,
          "name": "Scale",
          "socket_index": 19,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2,
          "name": "Detail",
          "socket_index": 20,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Distortion",
          "socket_index": 21,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Value",
          "socket_index": 22,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 10,
          "name": "Scale",
          "socket_index": 23,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.9800000190734863,
          "name": "Size",
          "socket_index": 24,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.05000000074505806,
          "name": "Blend",
          "socket_index": 25,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 26,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.5700000524520874,
          "name": "Rotate",
          "socket_index": 27,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Sides",
          "socket_index": 28,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 30,
          "name": "Scale",
          "socket_index": 29,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Blend",
          "socket_index": 30,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "Randomness",
          "socket_index": 31,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate",
          "socket_index": 32,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Sides",
          "socket_index": 33,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static Material_(args) {
    let { diffuse$BSDFColor_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, emissionStrength_3, invertFac_4, emission$ViewerStrength_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11 } = args;
    return ScatterField.Material(diffuse$BSDFColor_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, emissionStrength_3, invertFac_4, emission$ViewerStrength_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11)
  }
  static Material(diffuse$BSDFColor_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, emissionStrength_3, invertFac_4, emission$ViewerStrength_5, hexaTilesScale_6, hexaTilesSize_7, hexaTilesBlend_8, hexaTilesRandomness_9, hexaTilesRotate_10, hexaTilesSides_11) {
    var material = new ScatterField('Material')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "diffuse$BSDFColor_0": {
        "node": "Diffuse BSDF",
        "socket_index": 0,
        "input_index": 0,
        "input": "Color"
      },
      "diffuse$BSDFRoughness_1": {
        "node": "Diffuse BSDF",
        "socket_index": 1,
        "input_index": 1,
        "input": "Roughness"
      },
      "diffuse$BSDFNormal_2": {
        "node": "Diffuse BSDF",
        "socket_index": 2,
        "input_index": 2,
        "input": "Normal"
      },
      "emissionStrength_3": {
        "node": "Emission",
        "socket_index": 1,
        "input_index": 3,
        "input": "Strength"
      },
      "invertFac_4": {
        "node": "Invert",
        "socket_index": 0,
        "input_index": 4,
        "input": "Fac"
      },
      "emission$ViewerStrength_5": {
        "node": "Emission Viewer",
        "socket_index": 1,
        "input_index": 5,
        "input": "Strength"
      },
      "hexaTilesScale_6": {
        "node": "Group",
        "socket_index": 1,
        "input_index": 6,
        "input": "Scale"
      },
      "hexaTilesSize_7": {
        "node": "Group",
        "socket_index": 2,
        "input_index": 7,
        "input": "Size"
      },
      "hexaTilesBlend_8": {
        "node": "Group",
        "socket_index": 3,
        "input_index": 8,
        "input": "Blend"
      },
      "hexaTilesRandomness_9": {
        "node": "Group",
        "socket_index": 4,
        "input_index": 9,
        "input": "Randomness"
      },
      "hexaTilesRotate_10": {
        "node": "Group",
        "socket_index": 5,
        "input_index": 10,
        "input": "Rotate"
      },
      "hexaTilesSides_11": {
        "node": "Group",
        "socket_index": 6,
        "input_index": 11,
        "input": "Sides"
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
    material.diffuse$BSDFColor_0 = diffuse$BSDFColor_0;
    material.diffuse$BSDFRoughness_1 = diffuse$BSDFRoughness_1;
    material.diffuse$BSDFNormal_2 = diffuse$BSDFNormal_2;
    material.emissionStrength_3 = emissionStrength_3;
    material.invertFac_4 = invertFac_4;
    material.emission$ViewerStrength_5 = emission$ViewerStrength_5;
    material.hexaTilesScale_6 = hexaTilesScale_6;
    material.hexaTilesSize_7 = hexaTilesSize_7;
    material.hexaTilesBlend_8 = hexaTilesBlend_8;
    material.hexaTilesRandomness_9 = hexaTilesRandomness_9;
    material.hexaTilesRotate_10 = hexaTilesRotate_10;
    material.hexaTilesSides_11 = hexaTilesSides_11;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Diffuse BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 3,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 2,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 7,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 8,
          "to_node": "Group",
          "to_node_name": "HexaTiles",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Emission",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 3,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 5,
          "from_node": "Invert",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 4,
          "to_node": "Emission",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 8,
          "from_node": "Group",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "Invert",
          "to_socket": {
            "name": "Color",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 8,
          "from_node": "Group",
          "from_node_name": "HexaTiles",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 6,
          "to_node": "Emission Viewer",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 6,
          "from_node": "Emission Viewer",
          "from_socket": {
            "name": "Emission",
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
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          },
          "to": 1,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          },
          "to": 1,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 4,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          },
          "to": 5,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 5
          },
          "to": 6,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 8,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 7
          },
          "to": 8,
          "to_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 8,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 8,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 10
          },
          "to": 8,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 9,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 11
          },
          "to": 8,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 89,
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
            "x": 460,
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
            "height": 114,
            "width": 150
          },
          "id": 1,
          "inputs": [
            {
              "default_value": [
                0.043837182223796844,
                0.043837182223796844,
                0.043837182223796844,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 10,
            "y": 300
          },
          "name": "Diffuse BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfDiffuse"
        },
        {
          "child_def": 2,
          "dimensions": {
            "height": 232.1649169921875,
            "width": 140
          },
          "id": 2,
          "inputs": [],
          "location": {
            "x": -1037.114990234375,
            "y": 387.1649169921875
          },
          "name": "Texture Coordinate",
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
          "child_def": 3,
          "dimensions": {
            "height": 92.76531982421875,
            "width": 140
          },
          "id": 3,
          "inputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Shader",
              "socket_index": 1,
              "type": "NodeSocketShader"
            }
          ],
          "location": {
            "x": 240,
            "y": 294.76531982421875
          },
          "name": "Add Shader",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeAddShader"
        },
        {
          "child_def": 4,
          "dimensions": {
            "height": 92.4195556640625,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 117.6064453125,
            "y": 155.4195556640625
          },
          "name": "Emission",
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
          "child_def": 5,
          "dimensions": {
            "height": 92.93354797363281,
            "width": 140
          },
          "id": 5,
          "inputs": [
            {
              "default_value": 1,
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
              "name": "Color",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -63.20740509033203,
            "y": 149.9335479736328
          },
          "name": "Invert",
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
          "type": "ShaderNodeInvert"
        },
        {
          "child_def": 6,
          "dimensions": {
            "height": 30,
            "width": 87
          },
          "id": 6,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 460,
            "y": 340
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
          "child_def": 7,
          "dimensions": {
            "height": 270.3116455078125,
            "width": 240
          },
          "id": 7,
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
            "x": -796.509765625,
            "y": 411.3116455078125
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 8,
          "dimensions": {
            "height": 210.3045654296875,
            "width": 169.68359375
          },
          "id": 8,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 62.39999771118164,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -444.10064697265625,
            "y": 403.3045654296875
          },
          "name": "Group",
          "node_name": "HexaTiles",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 9,
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
                0.043837182223796844,
                0.043837182223796844,
                0.043837182223796844,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 62.39999771118164,
              "name": "Scale",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.8999999761581421,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Sides",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": [
            0.043837182223796844,
            0.043837182223796844,
            0.043837182223796844,
            1
          ],
          "name": "Color",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0,
          "name": "Roughness",
          "socket_index": 1,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 2,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 1,
          "name": "Strength",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 4,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1,
          "name": "Strength",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 62.39999771118164,
          "name": "Scale",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.8999999761581421,
          "name": "Size",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Randomness",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate",
          "socket_index": 10,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Sides",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static N_GonMtl_(args) {
    let { emission$ViewerStrength_0, nGonTilesOffsetTileU_1, nGonTilesOffsetRandomness_2, nGonTilesOffsetN_3, nGonTilesOffsetNB_4, nGonTilesOffsetOffsetU_5, nGonTilesOffsetOffsetV_6, nGonTilesOffsetRotate$B_7, nGonTilesOffsetMaxU_8, nGonTilesOffsetMaxV_9, noise$TextureVector_10, noise$TextureScale_11, noise$TextureDetail_12, noise$TextureDistortion_13, invertFac_14, rGB$CurvesFac_15, scale2DCenterU_16, scale2DCenterV_17, scale2DScale_18, rotate2DCenterU_19, rotate2DCenterV_20, rotate2DAngle_21 } = args;
    return ScatterField.N_GonMtl(emission$ViewerStrength_0, nGonTilesOffsetTileU_1, nGonTilesOffsetRandomness_2, nGonTilesOffsetN_3, nGonTilesOffsetNB_4, nGonTilesOffsetOffsetU_5, nGonTilesOffsetOffsetV_6, nGonTilesOffsetRotate$B_7, nGonTilesOffsetMaxU_8, nGonTilesOffsetMaxV_9, noise$TextureVector_10, noise$TextureScale_11, noise$TextureDetail_12, noise$TextureDistortion_13, invertFac_14, rGB$CurvesFac_15, scale2DCenterU_16, scale2DCenterV_17, scale2DScale_18, rotate2DCenterU_19, rotate2DCenterV_20, rotate2DAngle_21)
  }
  static N_GonMtl(emission$ViewerStrength_0, nGonTilesOffsetTileU_1, nGonTilesOffsetRandomness_2, nGonTilesOffsetN_3, nGonTilesOffsetNB_4, nGonTilesOffsetOffsetU_5, nGonTilesOffsetOffsetV_6, nGonTilesOffsetRotate$B_7, nGonTilesOffsetMaxU_8, nGonTilesOffsetMaxV_9, noise$TextureVector_10, noise$TextureScale_11, noise$TextureDetail_12, noise$TextureDistortion_13, invertFac_14, rGB$CurvesFac_15, scale2DCenterU_16, scale2DCenterV_17, scale2DScale_18, rotate2DCenterU_19, rotate2DCenterV_20, rotate2DAngle_21) {
    var material = new ScatterField('N_GonMtl')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "emission$ViewerStrength_0": {
        "node": "Emission Viewer",
        "socket_index": 1,
        "input_index": 0,
        "input": "Strength"
      },
      "nGonTilesOffsetTileU_1": {
        "node": "Group.007",
        "socket_index": 1,
        "input_index": 1,
        "input": "TileU"
      },
      "nGonTilesOffsetRandomness_2": {
        "node": "Group.007",
        "socket_index": 4,
        "input_index": 2,
        "input": "Randomness"
      },
      "nGonTilesOffsetN_3": {
        "node": "Group.007",
        "socket_index": 5,
        "input_index": 3,
        "input": "N"
      },
      "nGonTilesOffsetNB_4": {
        "node": "Group.007",
        "socket_index": 6,
        "input_index": 4,
        "input": "NB"
      },
      "nGonTilesOffsetOffsetU_5": {
        "node": "Group.007",
        "socket_index": 7,
        "input_index": 5,
        "input": "OffsetU"
      },
      "nGonTilesOffsetOffsetV_6": {
        "node": "Group.007",
        "socket_index": 8,
        "input_index": 6,
        "input": "OffsetV"
      },
      "nGonTilesOffsetRotate$B_7": {
        "node": "Group.007",
        "socket_index": 10,
        "input_index": 7,
        "input": "Rotate B"
      },
      "nGonTilesOffsetMaxU_8": {
        "node": "Group.007",
        "socket_index": 11,
        "input_index": 8,
        "input": "MaxU"
      },
      "nGonTilesOffsetMaxV_9": {
        "node": "Group.007",
        "socket_index": 12,
        "input_index": 9,
        "input": "MaxV"
      },
      "noise$TextureVector_10": {
        "node": "Noise Texture",
        "socket_index": 0,
        "input_index": 10,
        "input": "Vector"
      },
      "noise$TextureScale_11": {
        "node": "Noise Texture",
        "socket_index": 1,
        "input_index": 11,
        "input": "Scale"
      },
      "noise$TextureDetail_12": {
        "node": "Noise Texture",
        "socket_index": 2,
        "input_index": 12,
        "input": "Detail"
      },
      "noise$TextureDistortion_13": {
        "node": "Noise Texture",
        "socket_index": 3,
        "input_index": 13,
        "input": "Distortion"
      },
      "invertFac_14": {
        "node": "Invert",
        "socket_index": 0,
        "input_index": 14,
        "input": "Fac"
      },
      "rGB$CurvesFac_15": {
        "node": "RGB Curves",
        "socket_index": 0,
        "input_index": 15,
        "input": "Fac"
      },
      "scale2DCenterU_16": {
        "node": "Group.001",
        "socket_index": 1,
        "input_index": 16,
        "input": "CenterU"
      },
      "scale2DCenterV_17": {
        "node": "Group.001",
        "socket_index": 2,
        "input_index": 17,
        "input": "CenterV"
      },
      "scale2DScale_18": {
        "node": "Group.001",
        "socket_index": 3,
        "input_index": 18,
        "input": "Scale"
      },
      "rotate2DCenterU_19": {
        "node": "Group",
        "socket_index": 1,
        "input_index": 19,
        "input": "CenterU"
      },
      "rotate2DCenterV_20": {
        "node": "Group",
        "socket_index": 2,
        "input_index": 20,
        "input": "CenterV"
      },
      "rotate2DAngle_21": {
        "node": "Group",
        "socket_index": 3,
        "input_index": 21,
        "input": "Angle"
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
    material.emission$ViewerStrength_0 = emission$ViewerStrength_0;
    material.nGonTilesOffsetTileU_1 = nGonTilesOffsetTileU_1;
    material.nGonTilesOffsetRandomness_2 = nGonTilesOffsetRandomness_2;
    material.nGonTilesOffsetN_3 = nGonTilesOffsetN_3;
    material.nGonTilesOffsetNB_4 = nGonTilesOffsetNB_4;
    material.nGonTilesOffsetOffsetU_5 = nGonTilesOffsetOffsetU_5;
    material.nGonTilesOffsetOffsetV_6 = nGonTilesOffsetOffsetV_6;
    material.nGonTilesOffsetRotate$B_7 = nGonTilesOffsetRotate$B_7;
    material.nGonTilesOffsetMaxU_8 = nGonTilesOffsetMaxU_8;
    material.nGonTilesOffsetMaxV_9 = nGonTilesOffsetMaxV_9;
    material.noise$TextureVector_10 = noise$TextureVector_10;
    material.noise$TextureScale_11 = noise$TextureScale_11;
    material.noise$TextureDetail_12 = noise$TextureDetail_12;
    material.noise$TextureDistortion_13 = noise$TextureDistortion_13;
    material.invertFac_14 = invertFac_14;
    material.rGB$CurvesFac_15 = rGB$CurvesFac_15;
    material.scale2DCenterU_16 = scale2DCenterU_16;
    material.scale2DCenterV_17 = scale2DCenterV_17;
    material.scale2DScale_18 = scale2DScale_18;
    material.rotate2DCenterU_19 = rotate2DCenterU_19;
    material.rotate2DCenterV_20 = rotate2DCenterV_20;
    material.rotate2DAngle_21 = rotate2DAngle_21;

    material.definition = {
      "links": [
        {
          "from": 1,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Mapping",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 0,
          "from_node": "Mapping",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 10,
          "to_node": "Group.001",
          "to_node_name": "Scale2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 4,
          "from_node": "Emission Viewer",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 3,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 10,
          "from_node": "Group.001",
          "from_node_name": "Scale2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 11,
          "to_node": "Group",
          "to_node_name": "Rotate2D",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 5,
          "from_node": "Group.007",
          "from_node_name": "NGonTilesOffset",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 4,
          "to_node": "Emission Viewer",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 11,
          "from_node": "Group",
          "from_node_name": "Rotate2D",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 2,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "Rotate A",
            "socket_index": 9,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 9,
          "to_node": "ColorRamp",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 9,
          "from_node": "ColorRamp",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 2,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 7,
          "from_node": "Invert",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 8,
          "to_node": "RGB Curves",
          "to_socket": {
            "name": "Color",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 6,
          "from_node": "Noise Texture",
          "from_socket": {
            "name": "Fac",
            "socket_index": 1,
            "type": "NodeSocketFloatFactor"
          },
          "to": 7,
          "to_node": "Invert",
          "to_socket": {
            "name": "Color",
            "socket_index": 1,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 8,
          "from_node": "RGB Curves",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 5,
          "to_node": "Group.007",
          "to_node_name": "NGonTilesOffset",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 4,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 5,
          "to_socket": {
            "name": "TileU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 5,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 5,
          "to_socket": {
            "name": "N",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "NB",
            "type": "NodeSocketFloat",
            "socket_index": 4
          },
          "to": 5,
          "to_socket": {
            "name": "NB",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 5
          },
          "to": 5,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 7
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 5,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 8
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate B",
            "type": "NodeSocketFloat",
            "socket_index": 7
          },
          "to": 5,
          "to_socket": {
            "name": "Rotate B",
            "type": "NodeSocketFloat",
            "socket_index": 10
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 5,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 11
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 5,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 12
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Vector",
            "type": "NodeSocketVector",
            "socket_index": 10
          },
          "to": 6,
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
            "socket_index": 11
          },
          "to": 6,
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
            "socket_index": 12
          },
          "to": 6,
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
            "socket_index": 13
          },
          "to": 6,
          "to_socket": {
            "name": "Distortion",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 14
          },
          "to": 7,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 15
          },
          "to": 8,
          "to_socket": {
            "name": "Fac",
            "type": "NodeSocketFloatFactor",
            "socket_index": 0
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 16
          },
          "to": 10,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 17
          },
          "to": 10,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 18
          },
          "to": 10,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 19
          },
          "to": 11,
          "to_socket": {
            "name": "CenterU",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 20
          },
          "to": 11,
          "to_socket": {
            "name": "CenterV",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 12,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 21
          },
          "to": 11,
          "to_socket": {
            "name": "Angle",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 275.01513671875,
            "width": 240
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
            }
          ],
          "location": {
            "x": -7171.84375,
            "y": 750.01513671875
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 237.2784423828125,
            "width": 140
          },
          "id": 1,
          "inputs": [],
          "location": {
            "x": -7440.90185546875,
            "y": 714.2784423828125
          },
          "name": "Texture Coordinate",
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
          "child_def": 2,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 2,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Input",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -6464.3623046875,
            "y": 969.050537109375
          },
          "name": "Reroute",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0,
                1
              ],
              "name": "Output",
              "socket_index": 0,
              "type": "NodeSocketColor"
            }
          ],
          "type": "NodeReroute"
        },
        {
          "child_def": 3,
          "dimensions": {
            "height": 119.578369140625,
            "width": 140
          },
          "id": 3,
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
            "x": -5223.67138671875,
            "y": 995.578369140625
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 4,
          "dimensions": {
            "height": 97.6092529296875,
            "width": 140
          },
          "id": 4,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5466.75439453125,
            "y": 998.6092529296875
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
          "child_def": 5,
          "dimensions": {
            "height": 369.4053955078125,
            "width": 259.0478515625
          },
          "id": 5,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 5,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.6000000238418579,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.2499999701976776,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6.099999904632568,
              "name": "NB",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "OffsetU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "OffsetV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate A",
              "socket_index": 9,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate B",
              "socket_index": 10,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 11,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 12,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -5826.85693359375,
            "y": 982.4053955078125
          },
          "name": "Group.007",
          "node_name": "NGonTilesOffset",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 6,
          "dimensions": {
            "height": 163.8221435546875,
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
              "default_value": 2.9000000953674316,
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
              "default_value": 0,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -7089.01904296875,
            "y": 1336.8221435546875
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
          "child_def": 7,
          "dimensions": {
            "height": 97.242431640625,
            "width": 140
          },
          "id": 7,
          "inputs": [
            {
              "default_value": 1,
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
              "name": "Color",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -6449.25634765625,
            "y": 1323.242431640625
          },
          "name": "Invert",
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
          "type": "ShaderNodeInvert"
        },
        {
          "child_def": 8,
          "dimensions": {
            "height": 342.4813232421875,
            "width": 240
          },
          "id": 8,
          "inputs": [
            {
              "default_value": 1,
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
              "name": "Color",
              "socket_index": 1,
              "type": "NodeSocketColor"
            }
          ],
          "location": {
            "x": -6174.28173828125,
            "y": 1320.4813232421875
          },
          "name": "RGB Curves",
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
          "type": "ShaderNodeRGBCurve"
        },
        {
          "child_def": 9,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.1663372814655304,
                  0.1663372814655304,
                  0.1663372814655304,
                  1
                ],
                "position": 0.2045455276966095
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 1
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 212.37890625,
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
            "x": -6813.23095703125,
            "y": 1201.37890625
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
          "child_def": 10,
          "dimensions": {
            "height": 171.8155517578125,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.299999952316284,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -6813.9873046875,
            "y": 744.8155517578125
          },
          "name": "Group.001",
          "node_name": "Scale2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 11,
          "dimensions": {
            "height": 171.2398681640625,
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
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.6999999284744263,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -6570.609375,
            "y": 794.2398681640625
          },
          "name": "Group",
          "node_name": "Rotate2D",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeGroup"
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
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 5,
              "name": "TileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Randomness",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "N",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 6.099999904632568,
              "name": "NB",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "OffsetU",
              "socket_index": 7,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.5,
              "name": "OffsetV",
              "socket_index": 8,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rotate B",
              "socket_index": 10,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxU",
              "socket_index": 11,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "MaxV",
              "socket_index": 12,
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
              "default_value": 2.9000000953674316,
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
              "default_value": 0,
              "name": "Distortion",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 1,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.299999952316284,
              "name": "Scale",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "CenterV",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.6999999284744263,
              "name": "Angle",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 1,
          "name": "Strength",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 5,
          "name": "TileU",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Randomness",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 4,
          "name": "N",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 6.099999904632568,
          "name": "NB",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.5,
          "name": "OffsetU",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.5,
          "name": "OffsetV",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Rotate B",
          "socket_index": 7,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxU",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "MaxV",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Vector",
          "socket_index": 10,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 2.9000000953674316,
          "name": "Scale",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Detail",
          "socket_index": 12,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Distortion",
          "socket_index": 13,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 14,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 1,
          "name": "Fac",
          "socket_index": 15,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 17,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2.299999952316284,
          "name": "Scale",
          "socket_index": 18,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterU",
          "socket_index": 19,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5,
          "name": "CenterV",
          "socket_index": 20,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.6999999284744263,
          "name": "Angle",
          "socket_index": 21,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static SimpleHexGM_(args) {
    let { nodeGroupScale_0, nodeGroupSize_1, nodeGroupBlend_2, nodeGroupRandomness_3, nodeGroupRotate_4, nodeGroupSides_5 } = args;
    return ScatterField.SimpleHexGM(nodeGroupScale_0, nodeGroupSize_1, nodeGroupBlend_2, nodeGroupRandomness_3, nodeGroupRotate_4, nodeGroupSides_5)
  }
  static SimpleHexGM(nodeGroupScale_0, nodeGroupSize_1, nodeGroupBlend_2, nodeGroupRandomness_3, nodeGroupRotate_4, nodeGroupSides_5) {
    var material = new ScatterField('SimpleHexGM')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "nodeGroupScale_0": {
        "node": "SimpleHexG",
        "socket_index": 0,
        "input_index": 0,
        "input": "Scale"
      },
      "nodeGroupSize_1": {
        "node": "SimpleHexG",
        "socket_index": 1,
        "input_index": 1,
        "input": "Size"
      },
      "nodeGroupBlend_2": {
        "node": "SimpleHexG",
        "socket_index": 2,
        "input_index": 2,
        "input": "Blend"
      },
      "nodeGroupRandomness_3": {
        "node": "SimpleHexG",
        "socket_index": 3,
        "input_index": 3,
        "input": "Randomness"
      },
      "nodeGroupRotate_4": {
        "node": "SimpleHexG",
        "socket_index": 4,
        "input_index": 4,
        "input": "Rotate"
      },
      "nodeGroupSides_5": {
        "node": "SimpleHexG",
        "socket_index": 5,
        "input_index": 5,
        "input": "Sides"
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
    material.nodeGroupScale_0 = nodeGroupScale_0;
    material.nodeGroupSize_1 = nodeGroupSize_1;
    material.nodeGroupBlend_2 = nodeGroupBlend_2;
    material.nodeGroupRandomness_3 = nodeGroupRandomness_3;
    material.nodeGroupRotate_4 = nodeGroupRotate_4;
    material.nodeGroupSides_5 = nodeGroupSides_5;

    material.definition = {
      "links": [
        {
          "from": 0,
          "from_node": "SimpleHexG",
          "from_node_name": "NodeGroup",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
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
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 0,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 0
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 1
          },
          "to": 0,
          "to_socket": {
            "name": "Size",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 2
          },
          "to": 0,
          "to_socket": {
            "name": "Blend",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 3
          },
          "to": 0,
          "to_socket": {
            "name": "Randomness",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 4
          },
          "to": 0,
          "to_socket": {
            "name": "Rotate",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 2,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 5
          },
          "to": 0,
          "to_socket": {
            "name": "Sides",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 215.2254638671875,
            "width": 293.1162109375
          },
          "id": 0,
          "inputs": [
            {
              "default_value": 16.599998474121094,
              "name": "Scale",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.7000000476837158,
              "name": "Size",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5999999642372131,
              "name": "Randomness",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.7999999523162842,
              "name": "Rotate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "Sides",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -6495.63818359375,
            "y": 1241.2254638671875
          },
          "name": "SimpleHexG",
          "node_name": "NodeGroup",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 1,
          "dimensions": {
            "height": 119.3173828125,
            "width": 140
          },
          "id": 1,
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
            "x": -6111.12646484375,
            "y": 1219.3173828125
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
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
              "default_value": 16.599998474121094,
              "name": "Scale",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.7000000476837158,
              "name": "Size",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Blend",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5999999642372131,
              "name": "Randomness",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.7999999523162842,
              "name": "Rotate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 4,
              "name": "Sides",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 16.599998474121094,
          "name": "Scale",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.7000000476837158,
          "name": "Size",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Blend",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.5999999642372131,
          "name": "Randomness",
          "socket_index": 3,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.7999999523162842,
          "name": "Rotate",
          "socket_index": 4,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 4,
          "name": "Sides",
          "socket_index": 5,
          "type": "NodeSocketFloat"
        }
      ]
    }
    return Layout.process(material);
  }


  static tri_mtrl_(args) {
    let { math001Value_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, glossy$BSDFColor_3, glossy$BSDFRoughness_4, glossy$BSDFNormal_5, fresnelIOR_6, fresnelNormal_7, nGonRorate_8, tile_uvw_offsetMaxU_9, tile_uvw_offsetMaxV_10, tile_uvw_offsetOffsetU_11, tile_uvw_offsetOffsetV_12, tile_uvw_offsetRandom$Seed_13, tile_uvw_offsetMaxU_14, tile_uvw_offsetMaxV_15, tile_uvw_offsetOffsetU_16, tile_uvw_offsetOffsetV_17, tile_uvw_offsetRandom$Seed_18, math005Value_19, nGonRorate_20, emission$ViewerStrength_21, displacementMidlevel_22, displacementScale_23, displacementNormal_24 } = args;
    return ScatterField.tri_mtrl(math001Value_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, glossy$BSDFColor_3, glossy$BSDFRoughness_4, glossy$BSDFNormal_5, fresnelIOR_6, fresnelNormal_7, nGonRorate_8, tile_uvw_offsetMaxU_9, tile_uvw_offsetMaxV_10, tile_uvw_offsetOffsetU_11, tile_uvw_offsetOffsetV_12, tile_uvw_offsetRandom$Seed_13, tile_uvw_offsetMaxU_14, tile_uvw_offsetMaxV_15, tile_uvw_offsetOffsetU_16, tile_uvw_offsetOffsetV_17, tile_uvw_offsetRandom$Seed_18, math005Value_19, nGonRorate_20, emission$ViewerStrength_21, displacementMidlevel_22, displacementScale_23, displacementNormal_24)
  }
  static tri_mtrl(math001Value_0, diffuse$BSDFRoughness_1, diffuse$BSDFNormal_2, glossy$BSDFColor_3, glossy$BSDFRoughness_4, glossy$BSDFNormal_5, fresnelIOR_6, fresnelNormal_7, nGonRorate_8, tile_uvw_offsetMaxU_9, tile_uvw_offsetMaxV_10, tile_uvw_offsetOffsetU_11, tile_uvw_offsetOffsetV_12, tile_uvw_offsetRandom$Seed_13, tile_uvw_offsetMaxU_14, tile_uvw_offsetMaxV_15, tile_uvw_offsetOffsetU_16, tile_uvw_offsetOffsetV_17, tile_uvw_offsetRandom$Seed_18, math005Value_19, nGonRorate_20, emission$ViewerStrength_21, displacementMidlevel_22, displacementScale_23, displacementNormal_24) {
    var material = new ScatterField('tri_mtrl')
    material.isGroup = true;
    material.type = 'GROUP';
    material.conversion = {
      "math001Value_0": {
        "node": "Math.001",
        "socket_index": 1,
        "input_index": 0,
        "input": "Value"
      },
      "diffuse$BSDFRoughness_1": {
        "node": "Diffuse BSDF",
        "socket_index": 1,
        "input_index": 1,
        "input": "Roughness"
      },
      "diffuse$BSDFNormal_2": {
        "node": "Diffuse BSDF",
        "socket_index": 2,
        "input_index": 2,
        "input": "Normal"
      },
      "glossy$BSDFColor_3": {
        "node": "Glossy BSDF",
        "socket_index": 0,
        "input_index": 3,
        "input": "Color"
      },
      "glossy$BSDFRoughness_4": {
        "node": "Glossy BSDF",
        "socket_index": 1,
        "input_index": 4,
        "input": "Roughness"
      },
      "glossy$BSDFNormal_5": {
        "node": "Glossy BSDF",
        "socket_index": 2,
        "input_index": 5,
        "input": "Normal"
      },
      "fresnelIOR_6": {
        "node": "Fresnel",
        "socket_index": 0,
        "input_index": 6,
        "input": "IOR"
      },
      "fresnelNormal_7": {
        "node": "Fresnel",
        "socket_index": 1,
        "input_index": 7,
        "input": "Normal"
      },
      "nGonRorate_8": {
        "node": "Group",
        "socket_index": 4,
        "input_index": 8,
        "input": "Rorate"
      },
      "tile_uvw_offsetMaxU_9": {
        "node": "Group.007",
        "socket_index": 2,
        "input_index": 9,
        "input": "MaxU"
      },
      "tile_uvw_offsetMaxV_10": {
        "node": "Group.007",
        "socket_index": 3,
        "input_index": 10,
        "input": "MaxV"
      },
      "tile_uvw_offsetOffsetU_11": {
        "node": "Group.007",
        "socket_index": 4,
        "input_index": 11,
        "input": "OffsetU"
      },
      "tile_uvw_offsetOffsetV_12": {
        "node": "Group.007",
        "socket_index": 5,
        "input_index": 12,
        "input": "OffsetV"
      },
      "tile_uvw_offsetRandom$Seed_13": {
        "node": "Group.007",
        "socket_index": 6,
        "input_index": 13,
        "input": "Random Seed"
      },
      "tile_uvw_offsetMaxU_14": {
        "node": "Group.008",
        "socket_index": 2,
        "input_index": 14,
        "input": "MaxU"
      },
      "tile_uvw_offsetMaxV_15": {
        "node": "Group.008",
        "socket_index": 3,
        "input_index": 15,
        "input": "MaxV"
      },
      "tile_uvw_offsetOffsetU_16": {
        "node": "Group.008",
        "socket_index": 4,
        "input_index": 16,
        "input": "OffsetU"
      },
      "tile_uvw_offsetOffsetV_17": {
        "node": "Group.008",
        "socket_index": 5,
        "input_index": 17,
        "input": "OffsetV"
      },
      "tile_uvw_offsetRandom$Seed_18": {
        "node": "Group.008",
        "socket_index": 6,
        "input_index": 18,
        "input": "Random Seed"
      },
      "math005Value_19": {
        "node": "Math.005",
        "socket_index": 1,
        "input_index": 19,
        "input": "Value"
      },
      "nGonRorate_20": {
        "node": "Group.001",
        "socket_index": 4,
        "input_index": 20,
        "input": "Rorate"
      },
      "emission$ViewerStrength_21": {
        "node": "Emission Viewer",
        "socket_index": 1,
        "input_index": 21,
        "input": "Strength"
      },
      "displacementMidlevel_22": {
        "node": "Displacement",
        "socket_index": 1,
        "input_index": 22,
        "input": "Midlevel"
      },
      "displacementScale_23": {
        "node": "Displacement",
        "socket_index": 2,
        "input_index": 23,
        "input": "Scale"
      },
      "displacementNormal_24": {
        "node": "Displacement",
        "socket_index": 3,
        "input_index": 24,
        "input": "Normal"
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
    material.math001Value_0 = math001Value_0;
    material.diffuse$BSDFRoughness_1 = diffuse$BSDFRoughness_1;
    material.diffuse$BSDFNormal_2 = diffuse$BSDFNormal_2;
    material.glossy$BSDFColor_3 = glossy$BSDFColor_3;
    material.glossy$BSDFRoughness_4 = glossy$BSDFRoughness_4;
    material.glossy$BSDFNormal_5 = glossy$BSDFNormal_5;
    material.fresnelIOR_6 = fresnelIOR_6;
    material.fresnelNormal_7 = fresnelNormal_7;
    material.nGonRorate_8 = nGonRorate_8;
    material.tile_uvw_offsetMaxU_9 = tile_uvw_offsetMaxU_9;
    material.tile_uvw_offsetMaxV_10 = tile_uvw_offsetMaxV_10;
    material.tile_uvw_offsetOffsetU_11 = tile_uvw_offsetOffsetU_11;
    material.tile_uvw_offsetOffsetV_12 = tile_uvw_offsetOffsetV_12;
    material.tile_uvw_offsetRandom$Seed_13 = tile_uvw_offsetRandom$Seed_13;
    material.tile_uvw_offsetMaxU_14 = tile_uvw_offsetMaxU_14;
    material.tile_uvw_offsetMaxV_15 = tile_uvw_offsetMaxV_15;
    material.tile_uvw_offsetOffsetU_16 = tile_uvw_offsetOffsetU_16;
    material.tile_uvw_offsetOffsetV_17 = tile_uvw_offsetOffsetV_17;
    material.tile_uvw_offsetRandom$Seed_18 = tile_uvw_offsetRandom$Seed_18;
    material.math005Value_19 = math005Value_19;
    material.nGonRorate_20 = nGonRorate_20;
    material.emission$ViewerStrength_21 = emission$ViewerStrength_21;
    material.displacementMidlevel_22 = displacementMidlevel_22;
    material.displacementScale_23 = displacementScale_23;
    material.displacementNormal_24 = displacementNormal_24;

    material.definition = {
      "links": [
        {
          "from": 12,
          "from_node": "Value",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 24,
          "from_node": "Texture Coordinate",
          "from_socket": {
            "name": "UV",
            "socket_index": 2,
            "type": "NodeSocketVector"
          },
          "to": 25,
          "to_node": "Mapping.002",
          "to_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 13,
          "from_node": "Value.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Value.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 15,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 0,
          "from_node": "Reroute",
          "from_socket": {
            "name": "Output",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 15,
          "to_node": "Group",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 12,
          "from_node": "Value",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 26,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "N",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 13,
          "from_node": "Value.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 26,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Size",
            "socket_index": 2,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 14,
          "from_node": "Value.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 26,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "Blend",
            "socket_index": 3,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 15,
          "from_node": "Group",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 3,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 26,
          "from_node": "Group.001",
          "from_node_name": "NGon",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 4,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 17,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 26,
          "to_node": "Group.001",
          "to_node_name": "NGon",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 25,
          "from_node": "Mapping.002",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 16,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 16,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 0,
          "to_node": "Reroute",
          "to_socket": {
            "name": "Input",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 18,
          "from_node": "Scale",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 16,
          "to_node": "Group.007",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 18,
          "from_node": "Scale",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 17,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "tileU",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 27,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 1,
          "to_node": "Math.001",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 27,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 2,
          "to_node": "ColorRamp",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 2,
          "from_node": "ColorRamp",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 6,
          "to_node": "Diffuse BSDF",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 16,
          "from_node": "Group.007",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 11,
          "to_node": "ColorRamp.001",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 17,
          "from_node": "Group.008",
          "from_node_name": "tile_uvw_offset",
          "from_socket": {
            "name": "random",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          },
          "to": 5,
          "to_node": "ColorRamp.002",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 3,
          "from_node": "Math.002",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 27,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 4,
          "from_node": "Math.003",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 27,
          "to_node": "Math",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 11,
          "from_node": "ColorRamp.001",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 3,
          "to_node": "Math.002",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 5,
          "from_node": "ColorRamp.002",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 4,
          "to_node": "Math.003",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 6,
          "from_node": "Diffuse BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 8,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 27,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 20,
          "to_node": "ColorRamp.003",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 20,
          "from_node": "ColorRamp.003",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 23,
          "to_node": "Emission",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 23,
          "from_node": "Emission",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 19,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 1,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 8,
          "from_node": "Mix Shader",
          "from_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 19,
          "to_node": "Add Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 9,
          "from_node": "Glossy BSDF",
          "from_socket": {
            "name": "BSDF",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 8,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Shader",
            "socket_index": 2,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 10,
          "from_node": "Fresnel",
          "from_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          },
          "to": 8,
          "to_node": "Mix Shader",
          "to_socket": {
            "name": "Fac",
            "socket_index": 0,
            "type": "NodeSocketFloatFactor"
          }
        },
        {
          "from": 20,
          "from_node": "ColorRamp.003",
          "from_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          },
          "to": 21,
          "to_node": "Math.005",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 22,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 21,
          "from_node": "Math.005",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 22,
          "to_node": "Math.004",
          "to_socket": {
            "name": "Value",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 22,
          "from_node": "Math.004",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 23,
          "to_node": "Emission",
          "to_socket": {
            "name": "Strength",
            "socket_index": 1,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 27,
          "from_node": "Math",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 28,
          "to_node": "Emission Viewer",
          "to_socket": {
            "name": "Color",
            "socket_index": 0,
            "type": "NodeSocketColor"
          }
        },
        {
          "from": 28,
          "from_node": "Emission Viewer",
          "from_socket": {
            "name": "Emission",
            "socket_index": 0,
            "type": "NodeSocketShader"
          },
          "to": 7,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Surface",
            "socket_index": 0,
            "type": "NodeSocketShader"
          }
        },
        {
          "from": 25,
          "from_node": "Mapping.002",
          "from_socket": {
            "name": "Vector",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 17,
          "to_node": "Group.008",
          "to_node_name": "tile_uvw_offset",
          "to_socket": {
            "name": "UVW",
            "socket_index": 0,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 1,
          "from_node": "Math.001",
          "from_socket": {
            "name": "Value",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          },
          "to": 29,
          "to_node": "Displacement",
          "to_socket": {
            "name": "Height",
            "socket_index": 0,
            "type": "NodeSocketFloat"
          }
        },
        {
          "from": 29,
          "from_node": "Displacement",
          "from_socket": {
            "name": "Displacement",
            "socket_index": 0,
            "type": "NodeSocketVector"
          },
          "to": 7,
          "to_node": "Group Output",
          "to_socket": {
            "name": "Displacement",
            "socket_index": 2,
            "type": "NodeSocketVector"
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 0
          },
          "to": 1,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          },
          "to": 6,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          },
          "to": 6,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 3
          },
          "to": 9,
          "to_socket": {
            "name": "Color",
            "type": "NodeSocketColor",
            "socket_index": 0
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 4
          },
          "to": 9,
          "to_socket": {
            "name": "Roughness",
            "type": "NodeSocketFloatFactor",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 5
          },
          "to": 9,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 2
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 6
          },
          "to": 10,
          "to_socket": {
            "name": "IOR",
            "type": "NodeSocketFloat",
            "socket_index": 0
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 7
          },
          "to": 10,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rorate",
            "type": "NodeSocketFloat",
            "socket_index": 8
          },
          "to": 15,
          "to_socket": {
            "name": "Rorate",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 9
          },
          "to": 16,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 10
          },
          "to": 16,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 11
          },
          "to": 16,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 12
          },
          "to": 16,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 13
          },
          "to": 16,
          "to_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 14
          },
          "to": 17,
          "to_socket": {
            "name": "MaxU",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 15
          },
          "to": 17,
          "to_socket": {
            "name": "MaxV",
            "type": "NodeSocketFloat",
            "socket_index": 3
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 16
          },
          "to": 17,
          "to_socket": {
            "name": "OffsetU",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 17
          },
          "to": 17,
          "to_socket": {
            "name": "OffsetV",
            "type": "NodeSocketFloat",
            "socket_index": 5
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 18
          },
          "to": 17,
          "to_socket": {
            "name": "Random Seed",
            "type": "NodeSocketFloat",
            "socket_index": 6
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 19
          },
          "to": 21,
          "to_socket": {
            "name": "Value",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Rorate",
            "type": "NodeSocketFloat",
            "socket_index": 20
          },
          "to": 26,
          "to_socket": {
            "name": "Rorate",
            "type": "NodeSocketFloat",
            "socket_index": 4
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 21
          },
          "to": 28,
          "to_socket": {
            "name": "Strength",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Midlevel",
            "type": "NodeSocketFloat",
            "socket_index": 22
          },
          "to": 29,
          "to_socket": {
            "name": "Midlevel",
            "type": "NodeSocketFloat",
            "socket_index": 1
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 23
          },
          "to": 29,
          "to_socket": {
            "name": "Scale",
            "type": "NodeSocketFloat",
            "socket_index": 2
          }
        },
        {
          "from": 30,
          "from_node": "Group Input",
          "from_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 24
          },
          "to": 29,
          "to_socket": {
            "name": "Normal",
            "type": "NodeSocketVector",
            "socket_index": 3
          }
        }
      ],
      "nodes": [
        {
          "child_def": 0,
          "dimensions": {
            "height": 16,
            "width": 16
          },
          "id": 0,
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
            "x": -3205.9580078125,
            "y": 1138.8209228515625
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
          "child_def": 1,
          "dimensions": {
            "height": 147.39581298828125,
            "width": 140
          },
          "id": 1,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.200000047683716,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 647.062744140625,
            "y": 745.3958129882812
          },
          "name": "Math.001",
          "operation": "MULTIPLY",
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
          "child_def": 2,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.1976335644721985,
                  0.1976335644721985,
                  0.1976335644721985,
                  1
                ],
                "position": 0
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 1
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 207.648193359375,
            "width": 240
          },
          "id": 2,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": 32.2581787109375,
            "y": 1053.648193359375
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
          "child_def": 3,
          "dimensions": {
            "height": 147.0269775390625,
            "width": 140
          },
          "id": 3,
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
            "x": -984.6549072265625,
            "y": 929.0269775390625
          },
          "name": "Math.002",
          "operation": "MULTIPLY",
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
          "child_def": 4,
          "dimensions": {
            "height": 147.0035400390625,
            "width": 140
          },
          "id": 4,
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
            "x": -1002.5885620117188,
            "y": 694.0035400390625
          },
          "name": "Math.003",
          "operation": "MULTIPLY",
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
          "child_def": 5,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.21249322593212128,
                  0.21249322593212128,
                  0.21249322593212128,
                  1
                ],
                "position": 0
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 1
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 207.0875244140625,
            "width": 232.271728515625
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
            "x": -2750.071044921875,
            "y": 552.0875244140625
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
          "child_def": 6,
          "dimensions": {
            "height": 114.3907470703125,
            "width": 150
          },
          "id": 6,
          "inputs": [
            {
              "default_value": [
                0.3484586477279663,
                0.3484586477279663,
                0.3484586477279663,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 663.52587890625,
            "y": 988.3907470703125
          },
          "name": "Diffuse BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfDiffuse"
        },
        {
          "child_def": 7,
          "dimensions": {
            "height": 89.12322998046875,
            "width": 140
          },
          "id": 7,
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
            "x": 1742.2357177734375,
            "y": 999.1232299804688
          },
          "name": "Group Output",
          "options": {},
          "outputs": [],
          "type": "NodeGroupOutput"
        },
        {
          "child_def": 8,
          "dimensions": {
            "height": 114.20843505859375,
            "width": 139.99993896484375
          },
          "id": 8,
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
            "x": 903.9160766601562,
            "y": 1021.2084350585938
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
          "child_def": 9,
          "dimensions": {
            "height": 144.57421875,
            "width": 150
          },
          "distribution": "GGX",
          "id": 9,
          "inputs": [
            {
              "default_value": [
                0.24307489395141602,
                0.24307489395141602,
                0.24307489395141602,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0.3464101552963257,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            }
          ],
          "location": {
            "x": 636.0911865234375,
            "y": 1229.57421875
          },
          "name": "Glossy BSDF",
          "options": {},
          "outputs": [
            {
              "name": "BSDF",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeBsdfGlossy"
        },
        {
          "child_def": 10,
          "dimensions": {
            "height": 92.0369873046875,
            "width": 140
          },
          "id": 10,
          "inputs": [
            {
              "default_value": 1.7999999523162842,
              "name": "IOR",
              "socket_index": 0,
              "type": "NodeSocketFloat"
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
            }
          ],
          "location": {
            "x": 642.0428466796875,
            "y": 1451.0369873046875
          },
          "name": "Fresnel",
          "options": {},
          "outputs": [
            {
              "default_value": 0,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "type": "ShaderNodeFresnel"
        },
        {
          "child_def": 11,
          "color_ramp": {
            "color_mode": "RGB",
            "elements": [
              {
                "color": [
                  0.21249322593212128,
                  0.21249322593212128,
                  0.21249322593212128,
                  1
                ],
                "position": 0
              },
              {
                "color": [
                  0.40936991572380066,
                  0.40936991572380066,
                  0.40936991572380066,
                  1
                ],
                "position": 0.25
              },
              {
                "color": [
                  0.6062465906143188,
                  0.6062465906143188,
                  0.6062465906143188,
                  1
                ],
                "position": 0.5
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 0.8089622855186462
              },
              {
                "color": [
                  1,
                  1,
                  1,
                  1
                ],
                "position": 1
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 207.44189453125,
            "width": 232.271728515625
          },
          "id": 11,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": -2739.08935546875,
            "y": 883.44189453125
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
          "child_def": 12,
          "dimensions": {
            "height": 75.4930419921875,
            "width": 140
          },
          "id": 12,
          "inputs": [],
          "location": {
            "x": -4548.88037109375,
            "y": 343.4930419921875
          },
          "name": "Value",
          "options": {},
          "outputs": [
            {
              "default_value": 3,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeValue"
        },
        {
          "child_def": 13,
          "dimensions": {
            "height": 75.38702392578125,
            "width": 140
          },
          "id": 13,
          "inputs": [],
          "location": {
            "x": -4552.568359375,
            "y": 243.38702392578125
          },
          "name": "Value.002",
          "options": {},
          "outputs": [
            {
              "default_value": 0.9200000166893005,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeValue"
        },
        {
          "child_def": 14,
          "dimensions": {
            "height": 75.85992431640625,
            "width": 140
          },
          "id": 14,
          "inputs": [],
          "location": {
            "x": -4540.037109375,
            "y": 139.85992431640625
          },
          "name": "Value.001",
          "options": {},
          "outputs": [
            {
              "default_value": 1.1100001335144043,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeValue"
        },
        {
          "child_def": 15,
          "dimensions": {
            "height": 188.000244140625,
            "width": 325.4442138671875
          },
          "id": 15,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1497.436279296875,
            "y": 811.000244140625
          },
          "name": "Group",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 16,
          "dimensions": {
            "height": 254.7119140625,
            "width": 256.995361328125
          },
          "id": 16,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10.09999942779541,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -3959.792236328125,
            "y": 941.7119140625
          },
          "name": "Group.007",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 17,
          "dimensions": {
            "height": 254.514892578125,
            "width": 256.995361328125
          },
          "id": 17,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 10,
              "name": "tileU",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7999999523162842,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7999999523162842,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.049999952316284,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7499998807907104,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 19.099998474121094,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -3949.218994140625,
            "y": 662.514892578125
          },
          "name": "Group.008",
          "node_name": "tile_uvw_offset",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0,
              "name": "random",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "tileID",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 18,
          "dimensions": {
            "height": 75.58389282226562,
            "width": 140
          },
          "id": 18,
          "inputs": [],
          "location": {
            "x": -4532.88232421875,
            "y": 466.5838928222656
          },
          "name": "Scale",
          "options": {},
          "outputs": [
            {
              "default_value": 1,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            }
          ],
          "type": "ShaderNodeValue"
        },
        {
          "child_def": 19,
          "dimensions": {
            "height": 92.9486083984375,
            "width": 140
          },
          "id": 19,
          "inputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            },
            {
              "name": "Shader",
              "socket_index": 1,
              "type": "NodeSocketShader"
            }
          ],
          "location": {
            "x": 1200.912353515625,
            "y": 1012.9486083984375
          },
          "name": "Add Shader",
          "options": {},
          "outputs": [
            {
              "name": "Shader",
              "socket_index": 0,
              "type": "NodeSocketShader"
            }
          ],
          "type": "ShaderNodeAddShader"
        },
        {
          "child_def": 20,
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
                "position": 0.4318181872367859
              },
              {
                "color": [
                  0.31053611636161804,
                  0.5083906650543213,
                  1,
                  1
                ],
                "position": 0.9090909957885742
              }
            ],
            "hue_interpolation": "NEAR",
            "interpolation": "LINEAR"
          },
          "dimensions": {
            "height": 207.7161865234375,
            "width": 240
          },
          "id": 20,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Fac",
              "socket_index": 0,
              "type": "NodeSocketFloatFactor"
            }
          ],
          "location": {
            "x": 191.79718017578125,
            "y": 567.7161865234375
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
          "child_def": 21,
          "dimensions": {
            "height": 147.3580322265625,
            "width": 140
          },
          "id": 21,
          "inputs": [
            {
              "default_value": 0.5,
              "name": "Value",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 8,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 514.9374389648438,
            "y": 385.3580322265625
          },
          "name": "Math.005",
          "operation": "MULTIPLY",
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
          "child_def": 22,
          "dimensions": {
            "height": 147.12750244140625,
            "width": 140
          },
          "id": 22,
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
            "x": 681.2376708984375,
            "y": 389.12750244140625
          },
          "name": "Math.004",
          "operation": "POWER",
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
          "child_def": 23,
          "dimensions": {
            "height": 92.1717529296875,
            "width": 140
          },
          "id": 23,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 2,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 856.401123046875,
            "y": 558.1717529296875
          },
          "name": "Emission",
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
          "child_def": 24,
          "dimensions": {
            "height": 232.242919921875,
            "width": 140
          },
          "id": 24,
          "inputs": [],
          "location": {
            "x": -5924.20751953125,
            "y": 793.242919921875
          },
          "name": "Texture Coordinate",
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
          "child_def": 25,
          "dimensions": {
            "height": 270.26116943359375,
            "width": 240
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
            "x": -5255.4814453125,
            "y": 920.2611694335938
          },
          "name": "Mapping.002",
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
          "type": "ShaderNodeMapping"
        },
        {
          "child_def": 26,
          "dimensions": {
            "height": 188.83856201171875,
            "width": 325.4442138671875
          },
          "id": 26,
          "inputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "UVW",
              "socket_index": 0,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 0.5,
              "name": "N",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Size",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.5,
              "name": "Blend",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": -1509.1954345703125,
            "y": 511.83856201171875
          },
          "name": "Group.001",
          "node_name": "NGon",
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
          "type": "ShaderNodeGroup"
        },
        {
          "child_def": 27,
          "dimensions": {
            "height": 147.532958984375,
            "width": 140
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
            "x": -402.2857666015625,
            "y": 833.532958984375
          },
          "name": "Math",
          "operation": "ADD",
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
          "child_def": 28,
          "dimensions": {
            "height": 30,
            "width": 87
          },
          "id": 28,
          "inputs": [
            {
              "default_value": [
                0.800000011920929,
                0.800000011920929,
                0.800000011920929,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            }
          ],
          "location": {
            "x": 1742.2357177734375,
            "y": 1039.123291015625
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
          "child_def": 29,
          "dimensions": {
            "height": 0,
            "width": 0
          },
          "id": 29,
          "inputs": [
            {
              "default_value": 0,
              "name": "Height",
              "socket_index": 0,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Midlevel",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Scale",
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
          "location": {
            "x": 1194.649169921875,
            "y": 872.259521484375
          },
          "name": "Displacement",
          "options": {},
          "outputs": [
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Displacement",
              "socket_index": 0,
              "type": "NodeSocketVector"
            }
          ],
          "type": "ShaderNodeDisplacement"
        },
        {
          "dimensions": {
            "height": 108,
            "width": 140
          },
          "id": 30,
          "inputs": [],
          "location": {
            "x": -620,
            "y": 0
          },
          "name": "Group Input",
          "options": {},
          "outputs": [
            {
              "default_value": 2.200000047683716,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": [
                0.24307489395141602,
                0.24307489395141602,
                0.24307489395141602,
                1
              ],
              "name": "Color",
              "socket_index": 0,
              "type": "NodeSocketColor"
            },
            {
              "default_value": 0.3464101552963257,
              "name": "Roughness",
              "socket_index": 1,
              "type": "NodeSocketFloatFactor"
            },
            {
              "default_value": [
                0,
                0,
                0
              ],
              "name": "Normal",
              "socket_index": 2,
              "type": "NodeSocketVector"
            },
            {
              "default_value": 1.7999999523162842,
              "name": "IOR",
              "socket_index": 0,
              "type": "NodeSocketFloat"
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
              "default_value": 0,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 10.09999942779541,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7999999523162842,
              "name": "MaxU",
              "socket_index": 2,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7999999523162842,
              "name": "MaxV",
              "socket_index": 3,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 2.049999952316284,
              "name": "OffsetU",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1.7499998807907104,
              "name": "OffsetV",
              "socket_index": 5,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 19.099998474121094,
              "name": "Random Seed",
              "socket_index": 6,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 8,
              "name": "Value",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Rorate",
              "socket_index": 4,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 1,
              "name": "Strength",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0,
              "name": "Midlevel",
              "socket_index": 1,
              "type": "NodeSocketFloat"
            },
            {
              "default_value": 0.10000000149011612,
              "name": "Scale",
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
          "type": "NodeGroupInput"
        }
      ],
      "defaultInputs": [
        {
          "default_value": 2.200000047683716,
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Roughness",
          "socket_index": 1,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 2,
          "type": "NodeSocketVector"
        },
        {
          "default_value": [
            0.24307489395141602,
            0.24307489395141602,
            0.24307489395141602,
            1
          ],
          "name": "Color",
          "socket_index": 3,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0.3464101552963257,
          "name": "Roughness",
          "socket_index": 4,
          "type": "NodeSocketFloatFactor"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 5,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 1.7999999523162842,
          "name": "IOR",
          "socket_index": 6,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 7,
          "type": "NodeSocketVector"
        },
        {
          "default_value": 0,
          "name": "Rorate",
          "socket_index": 8,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2,
          "name": "MaxU",
          "socket_index": 9,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2,
          "name": "MaxV",
          "socket_index": 10,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetU",
          "socket_index": 11,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "OffsetV",
          "socket_index": 12,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 10.09999942779541,
          "name": "Random Seed",
          "socket_index": 13,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.7999999523162842,
          "name": "MaxU",
          "socket_index": 14,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.7999999523162842,
          "name": "MaxV",
          "socket_index": 15,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 2.049999952316284,
          "name": "OffsetU",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1.7499998807907104,
          "name": "OffsetV",
          "socket_index": 17,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 19.099998474121094,
          "name": "Random Seed",
          "socket_index": 18,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 8,
          "name": "Value",
          "socket_index": 19,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Rorate",
          "socket_index": 20,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 1,
          "name": "Strength",
          "socket_index": 21,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0,
          "name": "Midlevel",
          "socket_index": 22,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": 0.10000000149011612,
          "name": "Scale",
          "socket_index": 23,
          "type": "NodeSocketFloat"
        },
        {
          "default_value": [
            0,
            0,
            0
          ],
          "name": "Normal",
          "socket_index": 24,
          "type": "NodeSocketVector"
        }
      ]
    }
    return Layout.process(material);
  }

}