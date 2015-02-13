#!/bin/bash

ffmpeg -i "$1" -c:v libvpx -crf 4 -b:v 1M -c:a libvorbis "outfile.webm"


