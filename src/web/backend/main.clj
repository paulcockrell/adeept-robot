(ns web.backend.main
  (:require [web.backend.router :as router]
            [web.backend.server :as server]))

(defn start! []
  (router/start!)
  (server/start! 3000))

(defn stop! []
  (router/stop!)
  (server/stop!))

(defn -main [] (start!))
