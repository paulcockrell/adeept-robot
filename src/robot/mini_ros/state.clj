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
    (swap! robot-state assoc
           :operating-mode op
           :sub-mode sub
           :lock-owner nil) ;; auto-release lock on mode change
    (throw (ex-info "Invalid state transition"
                    {:operating-mode op :sub-mode sub}))))
