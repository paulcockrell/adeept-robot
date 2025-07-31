(ns web.server
  (:require [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [web.views :as views]
            [mini-ros.core :refer [publish!]]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:gen-class))

(defonce web-server (atom nil))

(defroutes app-routes
  (GET "/"
    []
    (views/home-page))
  (POST "/cmd" [cmd]
    (publish! :remote/cmd (keyword cmd))
    (str "Command sent:" cmd))
  (route/not-found "Not found"))

(def app (wrap-defaults #'app-routes site-defaults))

(defn stop
  []
  (when @web-server
    (.stop @web-server)
    (reset! web-server nil)
    (println "Web server stoped")))

(defn start
  []
  (when-not @web-server
    (reset! web-server (jetty/run-jetty #'app {:port 3000 :join? false}))
    (println "Web server running at http://localhost:3000")))
