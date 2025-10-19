(ns web.frontend.views.components.camera-viewport
  (:require [re-frame.core :as rf]
            [reagent.core :as ra]))

(def camera-frame-timer (atom nil))

(defn on-mount []
  (reset! camera-frame-timer (js/setInterval #(rf/dispatch [:tick]) 1000)))

(defn on-dismount []
  (js/clearTimeout @camera-frame-timer)
  (reset! camera-frame-timer nil))

(rf/reg-event-db
 :tick
 (fn [db _]
   (assoc db :frame-timestamp (js/Date.now))))

(rf/reg-sub
 :frame-timestamp
 (fn [db _] (:frame-timestamp db)))

(defn camera-viewport []
  (if is-rpi?
    [:img {:src "/camera"}]
    (ra/with-let [_ (on-mount)]
      (let [ts @(rf/subscribe [:frame-timestamp])]
        [:img {:src (str "/camera-frame.jpg?t=" ts)
              :style {:max-width "100%"}}])
      (finally (on-dismount)))))
