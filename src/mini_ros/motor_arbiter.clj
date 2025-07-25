(ns mini-ros.motor-arbiter
  (:require [clojure.core.async :refer [<! go-loop]]
            [mini-ros.core :refer [subscribe]]))

(defonce active-source (atom :line/cmd))

(defn set-active-source! [src]
  (reset! active-source src))

(defn active-source? [src] 
  (= @active-source src))

(defn motor-arbiter-node [motors drive! stop!]
  (doseq [topic [:line/cmd :avoidance/cmd :wander/cmd]]
    (let [ch (subscribe topic)]
      (println "📡 Subscribed to topic" topic)

      (go-loop []
        (let [{:keys [payload]} (<! ch)]
          (when (= topic @active-source)
            (if (= payload :stop)
              (stop! motors)
              (drive! motors payload))))
        (recur)))))
