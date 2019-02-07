import Composites from '../composites.mjs';
import Materials from '../materials.mjs';
import MaterialMovie from '../material-movie.mjs';
import JsonToPresentation from '../../conversion/json-to-presentation';
import CompositeExampleComp from '../composite/composite-example.mjs';
import TreeRoot from '../materials/tree-root.mjs';
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
        var me = this;
        var innerComposite = new CompositeExample();
        var fileName = 'rootsystem';
        var rootTextureJson = await innerComposite.buildTexture(fileName, { duration: 1 }, null, () => {
            let objects = [];
            let name = `root_system`;
            objects.push({
                name,
                type: "plane",
                scale: {
                    x: 10,
                    y: 10,
                    z: 10
                }
            });
            return objects;
        }, () => {
            return [];
        });
        if (!rootTextureJson) {
            throw 'no root texture json';
        }
        if (!rootTextureJson.camera) {
            throw 'no camera in json';
        }
        await JsonToPresentation.renderTextures({
            outputDirectory: this.options.workingDir,
            textureDir: this.options.textureDir,
            fileName: fileName,
            movieDefinition: rootTextureJson,
            blender: this.options.blender,
            camera: rootTextureJson.camera
        });

    }
    async buildTexture(filename, info, ops, buildObjects) {
        var me = this;
        ops = ops || {};
        var { raw, duration } = info;
        ops = { framesPerSecond: 24, ...ops };
        var keyframes = me.keyframes;
        me.objects.push(...buildObjects());
        me.objects.map(t => {
            me.createNoteKeyFrame(t.name);
        });
        me.objects.push(...me.addLamps());
        var composite = me.getComposite();
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
                type: "plane",
                scale: {
                    x: 10,
                    y: 10,
                    z: 10
                }
            });
        }
        return objects;
    }
    createNoteKeyFrame(name) {
        var me = this;

        var lightAnim = [];
        var frame = 10;
        var endframe = 30;

        lightAnim.push({
            frame: frame,
            value: 0,
        }, {
                frame: frame + 1,
                value: 1
            }, {
                frame: endframe - 1,
                value: 1
            }, {
                frame: endframe,
                value: 0
            })

        var gmat = TreeRoot.Roots_({
            noise$TextureScale_22: Materials.Value(`root-${name}-value`, 5),
            voronoi$TextureScale_19: Materials.Value(`root-${name}-value`, 0.690003),
            noise$TextureDetail_23: Materials.Value(`root-${name}-value`, 0.1),
            noise$TextureDistortion_24: Materials.Value(`root-${name}-value`, 0.7),
            math003Value_25: Materials.Value(`root-${name}-value`, 0.4)
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