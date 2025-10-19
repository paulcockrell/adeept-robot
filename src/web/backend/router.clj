(ns web.backend.router
  (:require [taoensso.sente :as sente]
            [clojure.string :as str]
            [compojure.route :as route]
            [compojure.core :as comp :refer (defroutes GET POST)]
            [web.backend.endpoints :as endpoints]
            [web.backend.handlers :as handlers]
            [web.backend.socket :as socket]))

(defroutes ring-routes
  ;; Sente websocket/ajax
  (GET  "/chsk" ring-req (socket/ring-ajax-get-or-ws-handshake ring-req))
  (POST "/chsk" ring-req (socket/ring-ajax-post ring-req))

  (GET "/camera" [] endpoints/camera-handler)

  ;; Static files under resources/public (css, js, images, etc.)
  (route/resources "/")

  ;; Fallback: for SPA routes, always serve index.html
  (GET "*" req (endpoints/home-handler req)))

(defonce router_ (atom nil))

(defn stop! []
  (when-let [stop-fn @router_] (stop-fn)))

(defn start! []
  (stop!)
  (reset! router_ (sente/start-server-chsk-router!
                    socket/ch-chsk handlers/event-msg-handler)))

