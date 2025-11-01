(ns web.backend.main
  (:require [web.backend.router :as router]
            [web.backend.server :as server]
            [web.backend.log-forwarder :as log-forwarder]))

(defn start! [port]
  (log-forwarder/start!)
  (router/start!)
  (server/start! port))

(defn stop! []
  (log-forwarder/stop!)
  (router/stop!)
  (server/stop!))

(defn -main [] (start! 3000))
