(ns mini-ros.state)

(defonce mode (atom :wander))
(defonce shutting-down? (atom false))

(defn active-mode? [m] (= @mode m))
