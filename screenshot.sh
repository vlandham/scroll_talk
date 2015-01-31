#!/bin/bash

for f in video/*.mp4
do
  echo $f
  filename=$(basename "$f")
  extension="${filename##*.}"
  filename="${filename%.*}"
  echo $filename
  ffmpeg -ss 00:00:01.01 -i "${f}" -y -f image2 -vcodec mjpeg -vframes 1 "screen/${filename}.jpg"
done


