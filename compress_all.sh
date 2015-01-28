#!/bin/bash

for f in video_org/*.mp4
do
  echo $f
  filename=$(basename "$f")
  extension="${filename##*.}"
  filename="${filename%.*}"
  echo $filename
  ffmpeg -i "${f}" -acodec mp2 "video/${filename}.mp4"
done


