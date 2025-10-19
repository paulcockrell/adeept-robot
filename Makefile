.PHONY: repl frontend-dev frontend-release server camera

IS_RPI ?= false

# Start an nREPL server with CIDER middleware
repl:
	clojure -M:repl

# Start shadow-cljs frontend in watch mode
frontend-dev:
	clojure -M:frontend-dev

# Build shadow-cljs frontend for release
frontend-release:
	clojure -M:frontend-release

# Start robot + web server
server:
	env IS_RPI=$(IS_RPI) clojure -X:server

camera:
	@[ -p /tmp/camera.yuv ] || mkfifo /tmp/camera.yuv
	@echo "Starting libcamera-vid → /tmp/camera.yuv (YUV420p)"
	libcamera-vid -t 0 --codec yuv420 --width 640 --height 480 --framerate 15 -o /tmp/camera.yuv

