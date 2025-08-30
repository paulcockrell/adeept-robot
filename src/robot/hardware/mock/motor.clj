(ns robot.hardware.mock.motor)

(defn create-motor
  "Creates a mock motor map.
  Parameters:
  - name: string label for the motor (used in ID naming)
  Returns: map with keys :name"
  [name]
  {:name name})

(defn set-direction!
  "Sets the motor direction.
  Parameters:
  - motor: map from `create-motor`
  - forward?: boolean indicating forward (true) or backward (false)"
  [{:keys [name]} forward?]
  (println "[Mock Motor - set-direction!]" name "forward?" forward?))

(defn set-speed!
  "Sets the PWM speed for a motor.
  Parameters:
  - motor: map from `create-motor`
  - duty: float (0.0–1.0), interpreted as percentage of full speed"
  [{:keys [name]} duty]
  (let [speed (* 100 duty)]
    (println "[Mock Motor - set-speed!]" name "speed" speed)))

(defn stop-motor!
  "Stops a single motor by disabling PWM and setting direction pins LOW.
  Parameters:
  - motor: map from `create-motor`"
  [{:keys [name]}]
  (println "[Mock Motor - stop-motor!]" name))

(defn drive!
  "Drives the robot based on direction and individual motor speeds.
  Accepts:
  - motors: {:left-motor m1 :right-motor m2}
  - cmd:    {:dir :forward/:backward/:left/:right
             :left-motor-speed n
             :right-motor-speed n}"
  [{:keys [left-motor right-motor]}
   {:keys [dir left-motor-speed right-motor-speed]}]
  ;; Set motor directions
  (case dir
    :forward (do
               (set-direction! left-motor true)
               (set-direction! right-motor true))
    :backward (do
                (set-direction! left-motor false)
                (set-direction! right-motor false))
    :left (do
            (set-direction! left-motor false)
            (set-direction! right-motor true))
    :right (do
             (set-direction! left-motor true)
             (set-direction! right-motor false))
    ;; Default (stop): safe fallback
    (do
      (stop-motor! left-motor)
      (stop-motor! right-motor)))

  ;; Set speeds
  (set-speed! left-motor (or left-motor-speed 1.0))
  (set-speed! right-motor (or right-motor-speed 1.0)))

(defn stop-all!
  "Stops all motors in a collection.
  Parameters:
  - motors: sequence of motor maps"
  [{:keys [left-motor right-motor]}]
  (stop-motor! left-motor)
  (stop-motor! right-motor))
