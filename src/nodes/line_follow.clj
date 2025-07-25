(ns nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.motor-arbiter :refer [publish-drive! active-source?]]
            [peripherals.ldr :as ldr]))

(defonce line-follow-status (atom {:left false :middle false :right false}))

(defn found-line? []
  (some true? (vals @line-follow-status)))

(defn lost-line? []
  (not (found-line?)))

(defn start-line-follow-node [ldr-sensor]
  (go-loop []
    (when (active-source? :line-follow/cmd)
      (let [status (ldr/status ldr-sensor)]
        (reset! line-follow-status status)
        (let [{:keys [left middle right]} status]
          (cond
            ;; Centered 
            (and middle (not left) (not right))
            (publish-drive :line-follow/cmd 0.9 0.9)

            ;; Slight left correction 
            (and left middle)
            (publish-drive :line-follow/cmd 0.85 0.95)

            ;; Slight right correction 
            (and right middle)
            (publish-drive :line-follow/cmd 0.95 0.85)

            ;; Hard left 
            (and left (not right) (not middle))
            (publish-drive :line-follow/cmd 0.7 1.0)

            ;; Hard right 
            (and right (not left) (not middle))
            (publish-drive :line-follow/cmd 1.0 0.7)

            ;; Else lost line
            :else
            (publish-drive :line-follow/cmd 0 0)))))
    (<! (timeout 100))
    (recur)))
