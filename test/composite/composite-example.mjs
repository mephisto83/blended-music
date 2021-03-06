
        import Materials from '../materials';
export default class CompositeClass extends Materials {
    constructor(name) {
        super(name);
        this.name = name;
        this.type = null;
    }
    static CompositeNames(){
        return ["Scene"]
    }
    static Types() {
       var res = super.Types();
        return {
            ...res
        }
    }

    
    
            static Scene_(args) {
                var {filterFac_0,viewerAlpha_1,viewerZ_2,blurSize_3,mixFac_4,mix001Fac_5,math001Value_6,compositeAlpha_7,compositeZ_8} = args;
                return CompositeClass.Scene(filterFac_0,viewerAlpha_1,viewerZ_2,blurSize_3,mixFac_4,mix001Fac_5,math001Value_6,compositeAlpha_7,compositeZ_8);
            }
            static Scene(filterFac_0,viewerAlpha_1,viewerZ_2,blurSize_3,mixFac_4,mix001Fac_5,math001Value_6,compositeAlpha_7,compositeZ_8) {
                var material = new CompositeClass('Scene')
                material.isGroup = false;
                material.type = 'GROUP';
                material.conversion = {
  "filterFac_0": {
    "node": "Filter",
    "node_index": 0,
    "socket_index": 0,
    "input_index": 0,
    "input": "Fac"
  },
  "viewerAlpha_1": {
    "node": "Viewer",
    "node_index": 1,
    "socket_index": 1,
    "input_index": 1,
    "input": "Alpha"
  },
  "viewerZ_2": {
    "node": "Viewer",
    "node_index": 1,
    "socket_index": 2,
    "input_index": 2,
    "input": "Z"
  },
  "blurSize_3": {
    "node": "Blur",
    "node_index": 2,
    "socket_index": 1,
    "input_index": 3,
    "input": "Size"
  },
  "mixFac_4": {
    "node": "Mix",
    "node_index": 3,
    "socket_index": 0,
    "input_index": 4,
    "input": "Fac"
  },
  "mix001Fac_5": {
    "node": "Mix.001",
    "node_index": 5,
    "socket_index": 0,
    "input_index": 5,
    "input": "Fac"
  },
  "math001Value_6": {
    "node": "Math.001",
    "node_index": 7,
    "socket_index": 1,
    "input_index": 6,
    "input": "Value"
  },
  "compositeAlpha_7": {
    "node": "Composite",
    "node_index": 8,
    "socket_index": 1,
    "input_index": 7,
    "input": "Alpha"
  },
  "compositeZ_8": {
    "node": "Composite",
    "node_index": 8,
    "socket_index": 2,
    "input_index": 8,
    "input": "Z"
  }
};
                material.outputs = {
  "Image": "NodeSocketColor",
  "Alpha": "NodeSocketFloat",
  "Z": "NodeSocketFloat"
};
                material.outputIndexes = {
  "Image": 0,
  "Alpha": 1,
  "Z": 2
};
                material.filterFac_0 = filterFac_0;
                material.viewerAlpha_1 = viewerAlpha_1;
                material.viewerZ_2 = viewerZ_2;
                material.blurSize_3 = blurSize_3;
                material.mixFac_4 = mixFac_4;
                material.mix001Fac_5 = mix001Fac_5;
                material.math001Value_6 = math001Value_6;
                material.compositeAlpha_7 = compositeAlpha_7;
                material.compositeZ_8 = compositeZ_8;
                
                material.definition = {
  "links": [
    {
      "from": 6,
      "from_node": "Render Layers",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 0,
      "to_node": "Filter",
      "to_socket": {
        "name": "Image",
        "socket_index": 1,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 0,
      "from_node": "Filter",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 2,
      "to_node": "Blur",
      "to_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 2,
      "from_node": "Blur",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 3,
      "to_node": "Mix",
      "to_socket": {
        "name": "Image",
        "socket_index": 1,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 2,
      "from_node": "Blur",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 3,
      "to_node": "Mix",
      "to_socket": {
        "name": "Image",
        "socket_index": 2,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 3,
      "from_node": "Mix",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 4,
      "to_node": "RGB to BW",
      "to_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 4,
      "from_node": "RGB to BW",
      "from_socket": {
        "name": "Val",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 9,
      "to_node": "Math",
      "to_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 4,
      "from_node": "RGB to BW",
      "from_socket": {
        "name": "Val",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 9,
      "to_node": "Math",
      "to_socket": {
        "name": "Value",
        "socket_index": 1,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 9,
      "from_node": "Math",
      "from_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 5,
      "to_node": "Mix.001",
      "to_socket": {
        "name": "Image",
        "socket_index": 1,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 5,
      "from_node": "Mix.001",
      "from_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      },
      "to": 7,
      "to_node": "Math.001",
      "to_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      }
    },
    {
      "from": 9,
      "from_node": "Math",
      "from_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 5,
      "to_node": "Mix.001",
      "to_socket": {
        "name": "Image",
        "socket_index": 2,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 9,
      "from_node": "Math",
      "from_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 1,
      "to_node": "Viewer",
      "to_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      }
    },
    {
      "from": 9,
      "from_node": "Math",
      "from_socket": {
        "name": "Value",
        "socket_index": 0,
        "type": "NodeSocketFloat"
      },
      "to": 8,
      "to_node": "Composite",
      "to_socket": {
        "name": "Image",
        "socket_index": 0,
        "type": "NodeSocketColor"
      }
    }
  ],
  "nodes": [
    {
      "child_def": 0,
      "dimensions": {
        "height": 127.15988159179688,
        "width": 140
      },
      "filter_type": "SOBEL",
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
            1,
            1,
            1,
            1
          ],
          "name": "Image",
          "socket_index": 1,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": -188.19912719726562,
        "y": 275.1598815917969
      },
      "name": "Filter",
      "options": {},
      "outputs": [
        {
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "type": "CompositorNodeFilter"
    },
    {
      "child_def": 1,
      "dimensions": {
        "height": 119.58636474609375,
        "width": 140
      },
      "id": 1,
      "inputs": [
        {
          "default_value": [
            0,
            0,
            0,
            1
          ],
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Alpha",
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
        "x": 1199.5478515625,
        "y": 266.58636474609375
      },
      "name": "Viewer",
      "options": {},
      "outputs": [],
      "type": "CompositorNodeViewer"
    },
    {
      "aspect_correction": "Y",
      "child_def": 2,
      "dimensions": {
        "height": 261.70306396484375,
        "width": 140
      },
      "factor_x": 10,
      "factor_y": 10,
      "filter_type": "FAST_GAUSS",
      "id": 2,
      "inputs": [
        {
          "default_value": [
            1,
            1,
            1,
            1
          ],
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 0.20000000298023224,
          "name": "Size",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ],
      "location": {
        "x": -2.05718994140625,
        "y": 286.70306396484375
      },
      "name": "Blur",
      "options": {},
      "outputs": [
        {
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "size_x": 100,
      "size_y": 100,
      "type": "CompositorNodeBlur",
      "use_bokeh": false,
      "use_extended_bounds": false,
      "use_gamma_correction": false,
      "use_relative": true,
      "use_variable_size": true
    },
    {
      "blend_type": "ADD",
      "child_def": 3,
      "dimensions": {
        "height": 171.99302673339844,
        "width": 140
      },
      "id": 3,
      "inputs": [
        {
          "default_value": 1,
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
          "name": "Image",
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
          "name": "Image",
          "socket_index": 2,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": 217.94281005859375,
        "y": 230.99302673339844
      },
      "name": "Mix",
      "options": {},
      "outputs": [
        {
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "type": "CompositorNodeMixRGB",
      "use_clamp": true
    },
    {
      "child_def": 4,
      "dimensions": {
        "height": 75.21812438964844,
        "width": 100
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
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": 402.0623779296875,
        "y": 213.21812438964844
      },
      "name": "RGB to BW",
      "options": {},
      "outputs": [
        {
          "name": "Val",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        }
      ],
      "type": "CompositorNodeRGBToBW"
    },
    {
      "blend_type": "ADD",
      "child_def": 5,
      "dimensions": {
        "height": 171.84423828125,
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
            1,
            1,
            1,
            1
          ],
          "name": "Image",
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
          "name": "Image",
          "socket_index": 2,
          "type": "NodeSocketColor"
        }
      ],
      "location": {
        "x": 764.5698852539062,
        "y": 261.84423828125
      },
      "name": "Mix.001",
      "options": {},
      "outputs": [
        {
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        }
      ],
      "type": "CompositorNodeMixRGB",
      "use_clamp": false
    },
    {
      "child_def": 6,
      "dimensions": {
        "height": 284.0254821777344,
        "width": 240
      },
      "id": 6,
      "inputs": [],
      "location": {
        "x": -479.22802734375,
        "y": 323.0254821777344
      },
      "name": "Render Layers",
      "options": {},
      "outputs": [
        {
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "name": "Alpha",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Depth",
          "socket_index": 2,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Normal",
          "socket_index": 3,
          "type": "NodeSocketVector"
        },
        {
          "name": "UV",
          "socket_index": 4,
          "type": "NodeSocketVector"
        },
        {
          "name": "Vector",
          "socket_index": 5,
          "type": "NodeSocketVector"
        },
        {
          "name": "Color",
          "socket_index": 6,
          "type": "NodeSocketColor"
        },
        {
          "name": "Diffuse",
          "socket_index": 7,
          "type": "NodeSocketColor"
        },
        {
          "name": "Spec",
          "socket_index": 8,
          "type": "NodeSocketColor"
        },
        {
          "name": "Shadow",
          "socket_index": 9,
          "type": "NodeSocketColor"
        },
        {
          "name": "AO",
          "socket_index": 10,
          "type": "NodeSocketColor"
        },
        {
          "name": "Reflect",
          "socket_index": 11,
          "type": "NodeSocketColor"
        },
        {
          "name": "Refract",
          "socket_index": 12,
          "type": "NodeSocketColor"
        },
        {
          "name": "Indirect",
          "socket_index": 13,
          "type": "NodeSocketColor"
        },
        {
          "name": "IndexOB",
          "socket_index": 14,
          "type": "NodeSocketFloat"
        },
        {
          "name": "IndexMA",
          "socket_index": 15,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Mist",
          "socket_index": 16,
          "type": "NodeSocketFloat"
        },
        {
          "name": "Emit",
          "socket_index": 17,
          "type": "NodeSocketColor"
        },
        {
          "name": "Env",
          "socket_index": 18,
          "type": "NodeSocketColor"
        },
        {
          "name": "DiffDir",
          "socket_index": 19,
          "type": "NodeSocketColor"
        },
        {
          "name": "DiffInd",
          "socket_index": 20,
          "type": "NodeSocketColor"
        },
        {
          "name": "DiffCol",
          "socket_index": 21,
          "type": "NodeSocketColor"
        },
        {
          "name": "GlossDir",
          "socket_index": 22,
          "type": "NodeSocketColor"
        },
        {
          "name": "GlossInd",
          "socket_index": 23,
          "type": "NodeSocketColor"
        },
        {
          "name": "GlossCol",
          "socket_index": 24,
          "type": "NodeSocketColor"
        },
        {
          "name": "TransDir",
          "socket_index": 25,
          "type": "NodeSocketColor"
        },
        {
          "name": "TransInd",
          "socket_index": 26,
          "type": "NodeSocketColor"
        },
        {
          "name": "TransCol",
          "socket_index": 27,
          "type": "NodeSocketColor"
        },
        {
          "name": "SubsurfaceDir",
          "socket_index": 28,
          "type": "NodeSocketColor"
        },
        {
          "name": "SubsurfaceInd",
          "socket_index": 29,
          "type": "NodeSocketColor"
        },
        {
          "name": "SubsurfaceCol",
          "socket_index": 30,
          "type": "NodeSocketColor"
        }
      ],
      "type": "CompositorNodeRLayers"
    },
    {
      "child_def": 7,
      "dimensions": {
        "height": 152.85140991210938,
        "width": 139.99993896484375
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
          "default_value": 0.10000000149011612,
          "name": "Value",
          "socket_index": 1,
          "type": "NodeSocketFloat"
        }
      ],
      "location": {
        "x": 966.2944946289062,
        "y": 403.8514099121094
      },
      "name": "Math.001",
      "operation": "GREATER_THAN",
      "options": {},
      "outputs": [
        {
          "name": "Value",
          "socket_index": 0,
          "type": "NodeSocketFloat"
        }
      ],
      "type": "CompositorNodeMath",
      "use_clamp": true
    },
    {
      "child_def": 8,
      "dimensions": {
        "height": 119.949462890625,
        "width": 140
      },
      "id": 8,
      "inputs": [
        {
          "default_value": [
            0,
            0,
            0,
            1
          ],
          "name": "Image",
          "socket_index": 0,
          "type": "NodeSocketColor"
        },
        {
          "default_value": 1,
          "name": "Alpha",
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
        "x": 1173.67138671875,
        "y": 452.949462890625
      },
      "name": "Composite",
      "options": {},
      "outputs": [],
      "type": "CompositorNodeComposite"
    },
    {
      "child_def": 9,
      "dimensions": {
        "height": 152.99996948242188,
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
        "x": 539.5479125976562,
        "y": 216.99996948242188
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
      "type": "CompositorNodeMath",
      "use_clamp": false
    }
  ],
  "defaultInputs": [
    {
      "default_value": 1,
      "name": "Fac",
      "socket_index": 0,
      "type": "NodeSocketFloatFactor",
      "node_index": 0
    },
    {
      "default_value": 1,
      "name": "Alpha",
      "socket_index": 1,
      "type": "NodeSocketFloat",
      "node_index": 1
    },
    {
      "default_value": 1,
      "name": "Z",
      "socket_index": 2,
      "type": "NodeSocketFloat",
      "node_index": 1
    },
    {
      "default_value": 0.20000000298023224,
      "name": "Size",
      "socket_index": 1,
      "type": "NodeSocketFloat",
      "node_index": 2
    },
    {
      "default_value": 1,
      "name": "Fac",
      "socket_index": 0,
      "type": "NodeSocketFloatFactor",
      "node_index": 3
    },
    {
      "default_value": 1,
      "name": "Fac",
      "socket_index": 0,
      "type": "NodeSocketFloatFactor",
      "node_index": 5
    },
    {
      "default_value": 0.10000000149011612,
      "name": "Value",
      "socket_index": 1,
      "type": "NodeSocketFloat",
      "node_index": 7
    },
    {
      "default_value": 1,
      "name": "Alpha",
      "socket_index": 1,
      "type": "NodeSocketFloat",
      "node_index": 8
    },
    {
      "default_value": 1,
      "name": "Z",
      "socket_index": 2,
      "type": "NodeSocketFloat",
      "node_index": 8
    }
  ]
}
                return material;
            }
            
}