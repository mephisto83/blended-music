const NodeSocketFloat = 'NodeSocketFloat';
export default class Composites {
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
            CompositeOutput: "CompositorNodeComposite",
            Value: "CompositorNodeValue"
        }
    }
    static CompositeOutput(name, image) {
        var composite = new Composites(name);
        composite.type = Composites.Types().CompositeOutput;
        composite.image = image;
        return composite;
    }
    static Composite(name, customgroup) {
        var material = new Composites(name);
        material.type = 'CUSTOM_COMPOSITE';
        material.custom = customgroup;

        return material;
    }
    static Value(name, value) {
        var material = new Composites(name);
        material.type = Composites.Types().Value;
        if (value !== undefined) {
            material.value = value;
            Composites.output(material, 'value', 0, 'default_value', NodeSocketFloat, value)
        }
        return material;
    }

    static output(node, name, index, path, type, value) {
        node.outputs = node.outputs || [];
        node.outputs.push({ name, index, path, type, value })
    }
    static input(node, name, index, path, type) {
        node.outputs = node.outputs || [];
        node.outputs.push({ name, index, path, type })
    }
}