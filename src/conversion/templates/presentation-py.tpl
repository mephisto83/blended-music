
import bpy
bpy.data.scenes["Scene"].presentation_settings = ".\\{{jsonfile}}"
bpy.ops.object.presentation_blender_maker()  
bpy.ops.wm.save_as_mainfile(filepath=".\\{{blendfile}}",copy=True) 
