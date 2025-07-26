(ns mini-ros.state)

(defonce mode (atom :wander))

(defn active-mode? [m] (= @mode m))
