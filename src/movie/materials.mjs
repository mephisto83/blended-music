export default class Materials {
    constructor(name) {
        this.name = name;
        this.type = null;
    }
    animate(animation) {
        this.animation = animation;
        return this;
    }
    static Types() {
        return {
            Emission: "ShaderNodeEmission",
            Output: "ShaderNodeOutputMaterial",
            Color: "ShaderNodeMixRGB",
            Value: "ShaderNodeValue",
            Mix: "ShaderNodeMixShader",
            Diffuse: "ShaderNodeBsdfDiffuse",
            WorldOutput: "ShaderNodeOutputWorld",
            Background: "ShaderNodeBackground"

        }
    }

    static Output(name, surface) {
        var material = new Materials(name);
        material.type = Materials.Types().Output;
        material.surface = surface;

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