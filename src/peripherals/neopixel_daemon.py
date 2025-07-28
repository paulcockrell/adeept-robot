#!/usr/bin/env python3
import sys
from rpi_ws281x import *
import time

# Setup LED strip
LED_COUNT = 16
LED_PIN = 12
LED_FREQ_HZ = 800000
LED_DMA = 10
LED_BRIGHTNESS = 255
LED_INVERT = False
LED_CHANNEL = 0

strip = Adafruit_NeoPixel(
    LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL
)
strip.begin()

def set_color(r, g, b):
    for i in range(strip.numPixels()):
        strip.setPixelColor(i, Color(r, g, b))
    strip.show()

def clear():
    set_color(0, 0, 0)

print("🟢 LED Daemon started", flush=True)

for line in sys.stdin:
    parts = line.strip().split()
    if not parts:
        continue

    cmd = parts[0].lower()

    if cmd == "set" and len(parts) == 4:
        r, g, b = map(int, parts[1:])
        set_color(r, g, b)
    elif cmd == "clear":
        clear()
    elif cmd == "exit":
        clear()
        print("🛑 LED Daemon exiting", flush=True)
        break
    else:
        print(f"Unknown command: {line.strip()}", flush=True)

