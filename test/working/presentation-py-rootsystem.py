
import bpy
bpy.data.scenes["Scene"].presentation_settings = ".\\presentation-json-rootsystem.json"
bpy.ops.object.presentation_blender_maker()  
bpy.ops.wm.save_as_mainfile(filepath=".\\presentation-bl-rootsystem.blend",copy=True) 
