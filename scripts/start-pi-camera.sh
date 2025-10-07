#!/usr/bin/env bash
set -euo pipefail

DEVICE=${DEVICE:-/dev/video10}
WIDTH=${WIDTH:-640}
HEIGHT=${HEIGHT:-480}
FPS=${FPS:-10}
LABEL=${LABEL:-PiCam}
V4L2_OPTIONS=${V4L2_OPTIONS:-"video_nr=${DEVICE#/dev/video} card_label=${LABEL} exclusive_caps=1"}

echo "[camera] loading v4l2loopback (${V4L2_OPTIONS})"
sudo modprobe v4l2loopback ${V4L2_OPTIONS}

echo "[camera] starting libcamera → v4l2 loop (${WIDTH}x${HEIGHT}@${FPS}fps)"
exec libcamera-vid \
  --width "${WIDTH}" \
  --height "${HEIGHT}" \
  --framerate "${FPS}" \
  --codec yuv420 \
  --inline \
  --timeout 0 \
  --nopreview \
  --output - |
  gst-launch-1.0 fdsrc ! video/x-h264,framerate=${FPS}/1 \
    ! h264parse ! v4l2sink device="${DEVICE}"
