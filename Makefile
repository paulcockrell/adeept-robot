.PHONY: repl frontend-dev frontend-release server

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
	clojure -X:server

