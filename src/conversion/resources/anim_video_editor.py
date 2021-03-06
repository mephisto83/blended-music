import os
import bpy
import json
from bpy import context
import sys
argv = sys.argv
try:
    index = argv.index("--") + 1
except:
    index = len(argv)

argv = argv[index:]
print(argv)
if(argv[0]):
	relPath = argv[0]

if(argv[1]):
	count = int(argv[1])

if(argv[2]):
	relAudioPath = argv[2]

renderPath = "default"
if(argv[3]):
	renderPath = argv[3]+"_"

render_out_path = False
if(argv[4]):
    render_out_path = argv[4]
  # --> ['example', 'args', '123']

chunk_mapping_path = False
if(argv[5]):
    chunk_mapping_path = argv[5]

image_mapping_path = False
if(argv[6]):
    image_mapping_path = argv[6]

scene = context.scene

chunk_map = False
image_map = False
# read chunk map contents
if chunk_mapping_path:
    f = open(chunk_mapping_path, 'r')
    filecontents = f.read()
    chunk_map = json.loads(filecontents)

# read image map contents
if image_mapping_path:
    f = open(image_mapping_path, 'r')
    filecontents = f.read()
    image_map = json.loads(filecontents)


print("starting ")

#path = "./1/"
path =os.path.dirname(os.path.realpath(__file__))+relPath
path_audio =os.path.dirname(os.path.realpath(__file__))+relAudioPath
files = os.listdir(path)
files.sort()
_scene = bpy.data.scenes[0]
_scene.render.resolution_x = 1920
_scene.render.resolution_y = 1080
_scene.render.image_settings.file_format = 'FFMPEG'
# _scene.codec = 'H264'
# _scene.constant_rate_factor = 'HIGH'
_scene.render.ffmpeg.format = 'MPEG4'

if render_out_path:
    _scene.render.filepath = render_out_path
else:    
    _scene.render.filepath = "//output/" + renderPath
_scene.render.ffmpeg.audio_codec = 'MP3'

print(files[0])
# create the sequencer data
scene.sequence_editor_create()
seq = False
if image_map and chunk_map:
    ok = 1
    for file in files:
        file_num = file.split(".png")[0]
        num = int(file_num)
        length = image_map[str(num)]
        filepath = os.path.join(path, file)
        seq = scene.sequence_editor.sequences.new_image(
            name="image"+str(num),
            filepath=filepath,
            channel=1, 
            frame_start=num)
        seq.frame_final_duration = length

else:
    filepath = os.path.join(path, files[0])
    print(filepath)

    # bpy.context.area.type = "VIEW_3D"
    seq = scene.sequence_editor.sequences.new_image(
            name="MyStrip",
            filepath=filepath,
            channel=1, frame_start=1)

    # add the rest of the images.
    for f in files[1:count]:
        seq.elements.append(f)

files_audio = os.listdir(path_audio)
filepath_audio = os.path.join(path_audio, files_audio[0])
print(filepath_audio)
scene.sequence_editor.sequences.new_sound(
        name="MyStrip",
        filepath=filepath_audio,
        channel=2, frame_start=1)
bpy.context.scene.frame_end = count

bpy.ops.render.render(animation=True) 

print("rendered")