(ns web.backend.main
  (:require [web.backend.router :as router]
            [web.backend.env :as env]
            [web.backend.server :as server]))

(defn start! []
  (let [port (if env/is-rpi? 80 3000)]
    (router/start!)
    (server/start! port)))

(defn stop! []
  (router/stop!)
  (server/stop!))

(defn -main [] (start!))
