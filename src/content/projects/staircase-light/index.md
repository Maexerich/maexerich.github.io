---
title: Smart-Home Staircase Light
summary: Timer-based LED light for stairs outside the house. Intensity is time-dependent. Schedule is configured server-side.
date: 2025-08
featured: false
kind: Purpose-driven
role: Solo
tags: [Smart-Home, C++, Electronics, IoT]
cover: ./cover.jpg
coverAlt: A short staircase outdoors is shown. The handrail is equipped with an LED strip below, illuminating the steps.
# repo: https://github.com/maexerich/radar
media:
  # - type: image
  #   src: ./secondary_cover.jpg
  #   alt: Shows lights in action, illuminating the stairs in the early morning hours.
    # caption: The lights are shown in action, illuminating the stairs in the early morning hours.
  - type: image
    src: ./one_light_cycle.png
    alt: 24h cycle of the light intensity
    caption: Plot shows a 24h cycle of the light intensity, 0-100% on y-axis, with time along the x-axis.
---

## Elevator Pitch
For safety, stairs should be illuminated in dark conditions.
The currently installed light uses an analog outlet timer, turning the light on or off at fixed times.
Adjusting the schedule requires physical changing of the outlet timer.
Because the light is either on or off, when complete darkness is present, the high intensity of the light is unnecessary and annoying.

This project makes use of the [Smart-Home Framework](/projects/smart-home-framework/) to enable software-based scheduling including intensity control, eliminating the need for physical adjustment of timers and increasing comfort with lower intensity in complete darkness.

## Features
- [x] Illuminate stairs 💡
- [x] Software schedule for on/off (server-side adjustments are software only)
- [x] Time-of-day determines light intensity

Ideas for future improvements:
- [ ] Automatic sunrise/sunset schedule according to time of year
- [ ] Illumination based intensity control (e.g. basing intensity of light on current measured outdoor light levels)
- [ ] Motion based activation (e.g. only minimal light when no motion is detected, increase based on detected motion)

## Skills
- Breadboard prototyping (use of MOSFET switching module to switch 24V LED strip with 3V3 pin)
- Automation logic in Node-RED (MQTT message handling, time-based scheduling)
- ESP32 microcontroller with custom C++ firmware (see [Smart-Home Framework](/projects/smart-home-framework/))