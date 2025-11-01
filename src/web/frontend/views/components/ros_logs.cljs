(ns web.frontend.views.components.ros-logs
  (:require [re-frame.core :as rf]))

(defn ros-logs []
  (let [logs @(rf/subscribe [:robot/logs])]
    [:table.striped.ros-logs
     [:tbody
      (doall
       (for [{:keys [topic payload]} (reverse logs)]
         ^{:key (random-uuid)}
         [:tr
          [:td (str topic)]
          [:td (pr-str payload)]]))]]))

