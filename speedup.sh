#!/bin/bash

echo $1
filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"
echo $filename
ffmpeg -i "${1}" -filter:v "setpts=0.7*PTS" "webm_fast/${filename}_1_5x.webm"
ffmpeg -i "${1}" -filter:v "setpts=0.5*PTS" "webm_fast/${filename}_2x.webm"


