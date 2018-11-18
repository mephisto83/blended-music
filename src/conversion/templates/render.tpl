import bpy
if '{{camera}}' in bpy.data.objects: 
    bpy.context.scene.camera = bpy.data.objects['{{camera}}']