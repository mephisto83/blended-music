
import bpy
bpy.data.scenes["Scene"].presentation_settings = ".\\presentation-json-god_chpn_op10_e01.mid.json"
bpy.ops.object.presentation_blender_maker()  
bpy.ops.wm.save_as_mainfile(filepath=".\\presentation-bl-god_chpn_op10_e01.mid.blend",copy=True) 
