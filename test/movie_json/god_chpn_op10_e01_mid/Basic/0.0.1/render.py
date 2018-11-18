import bpy
if 'default_camera' in bpy.data.objects: 
    bpy.context.scene.camera = bpy.data.objects['default_camera']