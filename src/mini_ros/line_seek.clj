(ns mini-ros.line-seek
  (:require [clojure.core.async :refer [go <! timeout]]
            [mini-ros.core :refer [subscribe publish!]]))

(defn line-seek!
  "Perform a short search pattern to relocate a lost line.
  If a line is found mid-sequence, cancel the rest and return true.
  If no line is found, return false."
  []
  (let [detected? (atom false)
        status-ch (subscribe :line/status)]

    ;; Start a watcher to listen for a line appearance
    (go
      (loop []
        (when-let [{:keys [payload]} (<! status-ch)]
          (when (some true? (vals payload))
            (reset! detected? true))
          (when-not @detected?
            (recur)))))

    ;; Define the seek sequence (each step is [command delay-ms])
    (let [steps [[:left    100]
                 [:forward 100]
                 [:right   200]
                 [:forward 100]
                 [:left    100]]]

      ;; Run sequence unless interrupted
      (go
        (loop [[step & rest] steps]
          (when (and step (not @detected?))
            (let [[cmd dur] step]
              (publish! :motor/cmd cmd)
              (<! (timeout dur))
              (recur rest))))))

    ;; Wait for the whole sequence to finish
    ;; or early exit if interrupted
    (go
      (<! (timeout 700)) ; max sequence time buffer
      (when @detected?
        (publish! :log "✅ Line found during seek!"))
      @detected?))) ; return whether line was found
