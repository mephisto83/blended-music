import bpy
if 'Camera' in bpy.data.objects: 
    bpy.context.scene.camera = bpy.data.objects['Camera']