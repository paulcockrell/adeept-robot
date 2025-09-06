(ns robot.mini-ros.state)

(defonce robot-state
  (atom {:operating-mode :idle  ;; high-level mode
         :sub-mode       :stop  ;; curent action within mode
         :lock-owner     nil})) ;; who currently has motor control

(def valid-states
  {:idle #{:stop}
   :manual #{:stop :avoid-obstacle :forward :backward :left :right}
   :sentient #{:stop :avoid-obstacle :wander :line-follow}
   :programmable #{:stop :avoid-obstacle :running-program :paused}})

(defonce shutting-down? (atom false))

(defn get-mode []
  (:operating-mode @robot-state))

(defn get-sub-mode []
  (:sub-mode @robot-state))

(defn get-lock-owner []
  (:lock-owner @robot-state))

(defn active-mode?
  ([sub] (= (:sub-mode @robot-state) sub))
  ([op sub]
   (contains? (op @robot-state) sub)))

(defn set-mode! [op sub]
  (if (contains? (valid-states op) sub)
    (do
      (swap! robot-state assoc
             :operating-mode op
             :sub-mode sub
             :lock-owner nil) ;; auto-release lock on mode change

      ;; Change neopixel colour to visually display state of robot
      (case [op sub]
        [:sentient :line-follow] (neopixel/send-command! "set" 0 0 255) ; blue
        [:sentient :line-seek] (neopixel/send-command! "set" 255 255 0) ; yellow
        [:sentient :wander] (neopixel/send-command! "set" 0 255 0) ; green
        [:sentient :avoid] neopixel/send-command! "set" 255 0 0)) ; red

    (throw (ex-info "Invalid state transition"
                    {:operating-mode op :sub-mode sub}))))
