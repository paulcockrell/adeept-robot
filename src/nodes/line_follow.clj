(ns nodes.line-follow
  (:require [clojure.core.async :refer [go-loop timeout <!]]
            [mini-ros.core :refer [publish!]]
            [peripherals.line-track :as line]))

(defn start-line-follow-node [sensor]
  (go-loop []
    (let [status (line/status sensor)]
      (cond
        (:middle status) (publish! :line/cmd :forward)
        (:left status)   (publish! :line/cmd :left)
        (:right status)  (publish! :line/cmd :right)
        :else            (publish! :line/cmd :stop)))
    (<! (timeout 100))
    (recur)))

