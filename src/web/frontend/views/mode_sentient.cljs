(ns web.frontend.views.mode-sentient
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]
            [web.frontend.layout.layout :as layout]))

(def camera-frame-timer (atom nil))

(defn on-mount []
  (println "Entering sentient mode")
  (rf/dispatch [:command/mode-sentient])
  (reset! camera-frame-timer (js/setInterval #(rf/dispatch [:tick]) 1000)))

(defn on-dismount []
  (println "Leaving sentient mode")
  (js/clearTimeout @camera-frame-timer)
  (reset! camera-frame-timer nil))

(rf/reg-event-db
 :tick
 (fn [db _]
   (assoc db :frame-timestamp (js/Date.now))))

(rf/reg-sub
 :frame-timestamp
 (fn [db _] (:frame-timestamp db)))

(defn camera-view []
  (let [ts @(rf/subscribe [:frame-timestamp])]
    [:img {:src (str "/camera-frame.jpg?t=" ts)
           :style {:max-width "100%"}}]))

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
         [camera-view]]]]]]

    (finally (on-dismount))))
