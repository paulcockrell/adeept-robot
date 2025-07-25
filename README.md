# Adeept Robot

Clojure project to control the [Adeept RaspberyPI Robot Car](https://www.adeept.com/awr_p0122.html)

## Prerequisits

Install pigpio

```bash
sudo apt install pigpiod
```

## Run

The project is in RnD stages, so at the moment all that can be done is run
a demo of motor control. This can be run using the following command:

```bash
sudo clojure -X:robot
```

## Logic diagram

      +-------------------+                            +--------------------+
      |   Sensor Inputs   |                            |  Actuators         |
      |-------------------|                            |--------------------|
      | - Line tracker    |--[:line/status         ]-->| - Motors           |
      | - Ultrasound      |--[:ultrasound/distance ]-->| - Servos (optional)|
      +-------------------+                            +--------------------+
                ⬇
      +--------------------+
      |    Brain (FSM)     |
      |--------------------|
      | - Mode FSM         |
      | - Listens to       |
      |   sensor events    |
      | - Sets active mode |
      +--------------------+
                ⬇
      [set-active-source! :wander/cmd]
                ⬇
      +--------------------+
      |   Behavior Nodes   |
      |--------------------|
      | - line-follow      |
      | - wander           |
      | - avoidance        |
      | Each always running|
      | Only emit motor    |
      | commands if        |
      | (active-source?)   |
      +--------------------+
                ⬇
      [e.g. (publish! :wander/cmd :left)]
                ⬇
      +--------------------------+
      |    Motor Arbiter         |
      |--------------------------|
      | Subscribes to cmd topics |
      | e.g. :wander/cmd         |
      | Filters by active source |
      | Sends to motors          |
      +--------------------------+

🔁 Control Loop Flow Example

Here’s a typical control cycle with a wandering robot:

1. Brain FSM decides mode:

- Calls (set-active-source! :wander/cmd)
- Sets @mode to :wander

1. Wander Node is always running, but now:

- active-source? :wander/cmd is true
- It begins publishing commands like :left, :forward every second

1. Motor Arbiter:

- Sees the :wander/cmd
- Accepts it because :wander/cmd == active-source
- Calls drive! or stop!

1. Ultrasound detects obstacle:

- Avoidance Node (also always running) detects < threshold
- It:
  - Calls (set-active-source! :avoidance/cmd)
  - Publishes :avoidance/cmd :backward, :left, etc

1. Motor Arbiter now sees:

- :avoidance/cmd takes over (higher priority)
- Wander commands ignored

1. After avoidance routine:

- Avoidance node resets to :line-seek/cmd
- Brain eventually returns to :line-follow or :wander
