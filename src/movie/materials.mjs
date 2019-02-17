export default class Materials {
    constructor(name) {
        this.name = name;
        this.type = null;
    }
    animate(animation) {
        this.animation = animation;
        return this;
    }
    static HasShaderOutput(material) {
        if (material) {
            if (material.outputs) {
                return !!Object.keys(material.outputs).find(key => {
                    return material.outputs[key] === 'NodeSocketShader';
                })
            }
            return true;
        }
        return false;
    }
    out(key) {
        this.$output = key;
        return this;
    }
    static Types() {
        return {
            Emission: "ShaderNodeEmission",
            Output: "ShaderNodeOutputMaterial",
            CompositeOutput: "CompositorNodeComposite",
            Color: "ShaderNodeMixRGB",
            Value: "ShaderNodeValue",
            Mix: "ShaderNodeMixShader",
            Diffuse: "ShaderNodeBsdfDiffuse",
            WorldOutput: "ShaderNodeOutputWorld",
            Background: "ShaderNodeBackground"
        }
    }
    static CompositeOutput(name, image) {
        var composite = new Materials(name);
        composite.type = Materials.Types().CompositeOutput;
        composite.image = image;
        return composite;
    }
    static Output(name, surface) {
        var material = new Materials(name);
        material.type = Materials.Types().Output;
        material.surface = surface;

        return material;
    }
    
    static StandardOut(material) {
        if (material && material.outputIndexes) {
            if (material.outputIndexes['Surface']) {
                return material.outputIndexes['Surface'];
            }
            Object.keys(material.outputs)[0] || 0;
        }
        return 0;
    }
    static Custom(name, customgroup) {
        var material = new Materials(name);
        material.type = 'CUSTOM';
        material.custom = customgroup;

        return material;
    }

    static Composite(name, customgroup) {
        var material = new Materials(name);
        material.type = 'CUSTOM_COMPOSITE';
        material.custom = customgroup;

        return material;
    }

    static WorldOutput(name, surface) {
        var material = new Materials(name);
        material.type = Materials.Types().WorldOutput;
        material.surface = surface;

        return material;
    }

    static Background(name, color, strength) {
        var material = new Materials(name);
        material.type = Materials.Types().Background;
        material.color = color;
        material.strength = strength;

        return material;
    }

    static Emission(name, color, strength) {
        var material = new Materials(name);
        material.type = Materials.Types().Emission;
        material.color = color;
        material.strength = strength;
        return material;
    }

    static Color(name, color1) {
        var material = new Materials(name);
        material.type = Materials.Types().Color;
        material.color1 = color1;
        return material;
    }
    static Mix(name, factor, val1, val2) {
        var material = new Materials(name);
        material.type = Materials.Types().Mix;
        material.factor = factor;
        material.input1 = val1;
        material.input2 = val2;
        return material;
    }

    static Diffuse(name, color, roughness, normal) {
        var material = new Materials(name)
        material.type = Materials.Types().Diffuse;
        material.color = color;
        material.roughness = roughness;
        material.normal = normal;

        return material;
    }
    static Value(name, value) {
        var material = new Materials(name);
        material.type = Materials.Types().Value;
        material.value = value;

        return material;
    }
}