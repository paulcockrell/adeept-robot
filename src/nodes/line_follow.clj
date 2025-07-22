(ns nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [publish!]]
            [peripherals.ldr :as ldr]))

(defonce line-follow-status (atom {:left false :middle false :right false}))

(defn start-line-follow-node [ldr-sensor]
  (go-loop []
    (let [status (ldr/status ldr-sensor)]
      (reset! line-follow-status status)
      (cond
        (:left status)   (publish! :line/cmd :left)
        (:right status)  (publish! :line/cmd :right)
        (:middle status) (publish! :line/cmd :forward)
        :else            (publish! :line/cmd :stop)))
    (<! (timeout 100))
    (recur)))

(defn lost-line? []
  (every? false? (val @line-follow-status)))

(defn found-line? []
  (not (lost-line?)))
