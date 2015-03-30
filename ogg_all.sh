#!/bin/bash

for f in video_org/*.mp4
do
  echo $f
  filename=$(basename "$f")
  extension="${filename##*.}"
  filename="${filename%.*}"
  echo $filename
  ffmpeg -i "${f}" -acodec libvorbis -vcodec libtheora -ac 2 -ab 96k -ar 44100 -b 819200 "ogg/${filename}.ogv"
done


