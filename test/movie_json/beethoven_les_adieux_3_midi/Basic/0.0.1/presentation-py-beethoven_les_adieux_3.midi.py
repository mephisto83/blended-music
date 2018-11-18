
import bpy
bpy.data.scenes["Scene"].presentation_settings = ".\\presentation-json-beethoven_les_adieux_3.midi.json"
bpy.ops.object.presentation_blender_maker()  
bpy.ops.wm.save_as_mainfile(filepath=".\\presentation-bl-beethoven_les_adieux_3.midi.blend",copy=True) 
