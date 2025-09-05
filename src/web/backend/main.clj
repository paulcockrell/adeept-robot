(ns web.backend.main
  (:require [web.backend.router :as router]
            [web.backend.server :as server]))

(defn start! [port]
  (router/start!)
  (server/start! port))

(defn stop! []
  (router/stop!)
  (server/stop!))

(defn -main [] (start!))
