import Composites from '../composites.mjs';
import Materials from '../materials.mjs';
import path from 'path';
import MaterialMovie from '../material-movie.mjs';
import JsonToPresentation from '../../conversion/json-to-presentation';
import Util from '../../util/util';
import CompositeExampleComp from '../composite/composite-example.mjs';
import TreeRoot from '../materials/tree-root.mjs';
import MainRoots from '../rootsystem/main_roots.mjs';
export default class CompositeExample extends MaterialMovie {
    constructor() {
        super();
        this.level = 3;
    }
    static info() {
        return {
            name: 'Composite Example Movie',
            version: '0.0.1'
        }
    }

    static async  buildMovie(filepath, filename, info, ops) {
        var basic = new CompositeExample();

        return Promise.resolve().then(() => {
            return basic._buildMovie(filepath, filename, info, ops);
        });
    }

    addCamera() {
        var me = this;
        var default_camera = 'default_camera';
        var handles = me.getHandles();

        me.objects.push({
            "name": default_camera,
            "type": "camera"
        }, {
                "name": "default_empty",
                "type": "empty"
            });


        var frame = me.getKeyFrame(1);
        var properties = {
            "translate": {
                "x": 0,
                "y": 0,
                "z": 0,
                ...handles
            }
        };
        frame.objects.push({
            "name": default_camera,
            "translate": {
                "x": 0,
                "y": 0,
                "z": 15,
                ...handles
            },
            "target": "default_empty",
            "lens": 15.66,
            "sensor_width": 15.80
        }, {
                "name": "default_empty",
                ...properties
            });


        return default_camera;
    }

    getComposite() {
        super.getComposite();
        var compl = CompositeExampleComp.Scene_({
            blurSize_3: Composites.Value('comp1-blur-size', .078)
        });
        compl.isGroup = false;
        this._composite = {
            name: "composite-example",
            config: Materials.Composite('compl', compl)
        };

        return this._composite;
    }

    getCompositeGroups() {
        var sups = super.getCompositeGroups();
        return [...sups, ...CompositeExampleComp.CompositeNames().filter(x => x !== 'Scene').map(name => {
            return CompositeExampleComp[name]();
        })];
    }

    getMaterialGroups() {
        return TreeRoot.MaterialNames().map(name => {
            return TreeRoot[name]();
        });
    }

    async buildResources() {

        await this.buildMainRootSystem({
            fileName: 'alt_root_0'
        });
        await this.buildMainRootSystem({
            fileName: 'alt_root_1',
            noise: 4,
            compositeBlurSize: .2,
            voronoi: 0.590003,
            noiseDetail: 0.15,
            noiseDistortion: .87,
            mathValue: 0.44
        });
        await this.buildMainRootSystem({
            fileName: 'alt_root_2',
            compositeBlurSize: .3,
            noise: 8,
            voronoi: 0.690003,
            noiseDetail: 0.35,
            noiseDistortion: .97,
            mathValue: 0.64
        });
        var files = ['alt_root_0', 'alt_root_1', 'alt_root_2'].map(t => `${this.options.workingDir}${path.sep}output${path.sep}${t}${path.sep}0001.exr`);
        var height_map_file = "height_map.json";
        var operations = {
            "height_map": height_map_file,
            "scale_z": 1,
            "scale_x": .01,
            "scale_y": .01,
            "files": files,// ["rootsystem_0001.exr", "alt_root_1_0001.exr", "alt_root_2_0001.exr"],
            "height": 1080,
            "width": 1920,
            "ops": [{
                "op": "add",
                "objects": files,
                "out": `${this.options.workingDir}${path.sep}_new.exr`
            }],
            "result": "new",
            "outfile": this.options.workingDir
        };

        let jsonFile = `${this.options.extPyrDir}${path.sep}py-exr.json`;
        await Util.writeJsonToFile(jsonFile, operations);
        await Util.executeSpawnCmd(`${this.options.python}`, [
            this.options.extPyr,
            jsonFile
        ], {
                detached: true,
                cwd: this.options.workingDir
            });

        await Util.copyFile(`${this.options.workingDir}${path.sep}${height_map_file}`, `${this.options._dir_path}${path.sep}${height_map_file}`)

        await Util.clearDirectory(`${this.options.workingDir}${path.sep}*`);
        // 
        /*
        operations = {
            "height_map": "height_map.json",
            "files": ["rootsystem_0001.exr", "alt_root_1_0001.exr", "alt_root_2_0001.exr"],
            "height": 1080,
            "width": 1920,
            "ops": [{"op":"add", "objects": ["rootsystem_0001.exr", "alt_root_1_0001.exr", "alt_root_2_0001.exr"], "out": "new.exr" }],
            "result": "new",
            "outfolder": None
        }
         */
    }
    async buildMainRootSystem(ops) {
        var me = this;
        var innerComposite = new MainRoots();
        if (ops) {
            Object.assign(innerComposite, ops);
        }
        innerComposite.options = { ... this.options };
        await innerComposite.buildMainRootSystem();

    }
    attachMaterial(name) {
        var me = this;
        var gmat = TreeRoot.Roots_({
            noise$TextureScale_22: Materials.Value(`root-${name}-value1`, 5),
            voronoi$TextureScale_19: Materials.Value(`root-${name}-val2ue`, 0.690003),
            noise$TextureDetail_23: Materials.Value(`root-${name}-valu3e`, 0.1),
            noise$TextureDistortion_24: Materials.Value(`root-${name}-4value`, 0.7),
            math003Value_25: Materials.Value(`root-${name}-valu5e`, 0.4)
        });

        var res = {
            name: name,
            materialConfig: Materials.Output(`root-${name}`,
                Materials.Custom(
                    `root-custom-${name}`,
                    gmat.out(Materials.StandardOut(gmat))
                )
            ),
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        }

        let keyframe = me.getKeyFrame(1);
        keyframe.objects.push(res);

        return res;
    }
    async buildTexture(filename, info, ops, buildObjects, attachMaterial) {
        var me = this;
        ops = ops || {};
        var { raw, duration, composite } = info;
        ops = { framesPerSecond: 24, ...ops };
        var keyframes = me.keyframes;
        me.objects.push(...buildObjects());
        me.objects.map(t => {
            attachMaterial(t.name);
        });
        me.objects.push(...me.addLamps());
        composite = composite || me.getComposite();
        var camera = me.addCamera();
        var mapping = {
            1: 1
        };

        return {
            mapping,
            materialGroups: me.getMaterialGroups(),
            compositeGroups: me.getCompositeGroups(),
            materials: me.getMaterials(),
            world: me.getWorlds(),
            composite,
            file: filename,
            file_format: 'OPEN_EXR',
            start: 1,
            orginalName: filename,
            end: 1,
            fileName: filename,
            keyframes: me.keyframes,
            objects: me.objects,
            startFrame: 1,
            endFrame: 1,
            renderEngine: me.renderEngine(),
            camera
        }
    }
    async constructMovie(raw) {
        var me = this;
        var objs = me.buildObjects();
        objs.map(t => {
            me.createNoteKeyFrame(t.name);
        });
        me.objects.push(...objs);
        me.objects.push(...me.addLamps());

        await me.buildResources();
    }
    addLamps() {
        var me = this;
        var objects = [];
        objects.push({
            "name": "default_sun",
            "strength": 3,
            "type": "lamp",
            "light": "SUN"
        });


        var frame = me.getKeyFrame(1);
        frame.objects.push({
            "name": "default_sun",
            "type": "lamp",
            "light": "SUN",
            "strength": 3,
            "rotation": { "x": 0, "y": -80, "z": 0 }
        })

        me.keyframes.push(frame);
        return objects;
    }
    buildObjects() {
        var objects = [];
        var useWeb = true;
        if (useWeb) {
            var index = 0;
            let name = `face-${index}`;
            objects.push({
                name,
                type: "ngon-surface",
                file: `${this.options._dir_path}${path.sep}height_map.json`,
                scale: {
                    x: 1,
                    y: 1,
                    z: 1
                }
            });
        }
        return objects;
    }
    createNoteKeyFrame(name) {
        var me = this;

        var gmat = TreeRoot.Roots_({
            noise$TextureScale_22: Materials.Value(`root-${name}-value1`, 5),
            voronoi$TextureScale_19: Materials.Value(`root-${name}-val2ue`, 0.690003),
            noise$TextureDetail_23: Materials.Value(`root-${name}-valu3e`, 0.1),
            noise$TextureDistortion_24: Materials.Value(`root-${name}-4value`, 0.7),
            math003Value_25: Materials.Value(`root-${name}-valu5e`, 0.4)
        });
        var res = {
            name: name,
            materialConfig: Materials.Output(`root-${name}`,
                Materials.Custom(
                    `root-custom-${name}`,
                    gmat.out(Materials.StandardOut(gmat))
                )
            ),
            position: {
                y: 0,
                x: 0,
                z: 0
            }
        }

        let keyframe = me.getKeyFrame(1);
        keyframe.objects.push(res);

        return res;
    }
}