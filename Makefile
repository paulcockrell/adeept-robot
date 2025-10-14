.PHONY: repl frontend-dev frontend-release server

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
	libcamera-vid -t 0 --codec mjpeg --width 640 --height 480 --framerate 15 -o - \
	| ffmpeg -loglevel error -f mjpeg -i - -f mpjpeg -q:v 7 -r 15 -listen 1 http://0.0.0.0:8081/stream.mjpg
