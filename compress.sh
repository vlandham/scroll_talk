#!/bin/bash

filename=$(basename "$1")
extension="${filename##*.}"
filename="${filename%.*}"
echo $filename
ffmpeg -i "$1" -acodec mp2 "${filename}_compress.mp4"
