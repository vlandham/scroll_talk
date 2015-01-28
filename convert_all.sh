#!/bin/bash

i=1
for f in org/*.mov
do
  echo $f
  echo $i
  ffmpeg -i "${f}" -vcodec copy -acodec copy "out/scroll_${i}.mp4"
  $((i++))
done


