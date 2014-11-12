#!/bin/bash

ffmpeg -i $1 -vcodec copy -acodec copy out.mp4

