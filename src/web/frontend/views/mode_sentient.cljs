(ns web.frontend.views.mode-sentient
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [web.frontend.views.components.camera-viewport :as camera-viewport]
            [web.frontend.layout.layout :as layout]))

(defn on-mount []
  (println "Entering sentient mode")
  (rf/dispatch [:command/mode-sentient]))

(defn on-dismount []
  (println "Leaving sentient mode"))

(defn mode-sentient []
  (ra/with-let [_ (on-mount)]

    [layout/layout
     [:section.mode-manual
      [:hgroup
       [:div.heading-icon
        [:span.material-symbols-outlined "joystick"]
        [:h1 "Sentient mode"]
        [:small
         [:p.muted "Sentient mode lets the Robot expore the world, if it detects a line, it will follow it, if it detects obstacles, it avoids them, otherwise it goes for a nice walk."]]]]
      [:div.grid
       [:article.motor-controls
        [:header "Camera"]
        [:div.body
         [camera-viewport/camera-viewport]]]]]]

    (finally (on-dismount))))
