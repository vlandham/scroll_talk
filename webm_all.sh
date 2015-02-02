#!/bin/bash

for f in video/*.mp4
do
  echo $f
  filename=$(basename "$f")
  extension="${filename##*.}"
  filename="${filename%.*}"
  echo $filename
  ffmpeg -i "${f}" -c:v libvpx -crf 10 -b:v 1M -c:a libvorbis "webm/${filename}.webm"
done


