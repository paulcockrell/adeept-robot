(ns robot.mini-ros.state)

(defonce mode (atom :stop))
(defonce shutting-down? (atom false))

(defn active-mode? [m] (= @mode m))
