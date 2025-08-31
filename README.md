# Adeept Robot

Clojure project to control the [Adeept RaspberyPI Robot Car](https://www.adeept.com/awr_p0122.html)

## Prerequisits

Install pigpio

```bash
sudo apt install pigpiod
```

## Development

You can use Docker or start manually.

### Docker

```bash
docker-compose up
```

### Frontend

Starts the frontend watcher for development

```bash
make frontend-dev
```

### Server

Starts the robot server and web server

```bash
make server
```

## Build

### Frontend

Build the frontend on a regular well resourced computer (not the PI) as it may not have enough resource to run in development mode.

```bash
make frontend-release
```

Now copy the built files to the pi. E.g:

```bash
scp -r ./resources user@raspberrypi.local:/path/to/project/
```

## Run

### Web server + robot server (development mode)

This is safe to run on the RaspberryPI

```bash
make server
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
