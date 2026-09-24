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

## Goal
Illuminate stairs for safety reasons in dark conditions.

## Features
- [x] Illuminate stairs 💡
- [x] Hard-coded schedule for on/off (server-side)
- [x] Intensity-based time-of-day schedule (server-side)

Ideas for future improvements:
- [ ] Automatic sunrise/sunset schedule
- [ ] Illumination based intensity control (e.g. using a light sensor & smart algorithm)
- [ ] Motion based activation

## Methods
- ESP32 microcontroller with custom C++ firmware (see [Smart-Home Framework](/projects/smart-home-framework/))
- Using 3V3 pin to power store-bought MOSFET-module to switch 24V LED strip