#!/bin/bash

for f in video_org/*.mp4
do
  echo $f
  filename=$(basename "$f")
  extension="${filename##*.}"
  filename="${filename%.*}"
  echo $filename
  ffmpeg -i "${f}" -c:v libvpx -crf 4 -b:v 1M -c:a libvorbis "webm_org/${filename}.webm"
done


