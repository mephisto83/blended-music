
 if not exist "{{audio_output_window}}" mkdir "{{audio_output_window}}"
move /Y  {{audio_file}} "{{audio_output_window}}"
blender --background -P anim_video_editor.py -- "{{py_output}}" {{endframe}} "{{py_audio_output}}" "{{name}}" 