(ns robot.mini-ros.state)

(defonce robot-state
  (atom {:operating-mode :idle  ;; high-level mode
         :sub-mode       :stop  ;; curent action within mode
         :lock-owner     nil})) ;; who currently has motor control

(def valid-states
  {:idle #{:stop}
   :manual #{:stop :forward :backward :left :right}
   :sentient #{:stop :avoid-obstacle :explore :follow-line}
   :programmable #{:stop :running-program :paused}})

(defonce shutting-down? (atom false))

(defn active-mode? [op sub] 
  (contains? (op @robot-state) sub))

(defn set-mode! [op sub]
  (if (contains? (valid-states op) sub)
    (swap! robot-state assoc
           :operating-mode op
           :sub-mode sub
           :lock-owner nil) ;; auto-release lock on mode change
    (throw (ex-info "Invalid state transition"
                    {:operating-mode op :sub-mode sub}))))
