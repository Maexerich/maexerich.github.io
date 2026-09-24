---
title: Example Project
summary: A placeholder project that shows every field the site supports - a cover picture, a media gallery mixing a picture, a GIF and a video, and a link to the code.
date: 2026-09-01
featured: false
kind: Learning project
role: Solo
tags: [Python, Robotics, Estimation]
cover: ./cover.png
coverAlt: A blue trajectory curve ending in a yellow dot on a dark grid.
# `media` is a list, shown together below the text in a responsive grid, in this order.
# Mix as many `image` / `gif` / `video` entries as the project needs - one picture, ten
# pictures, a gif and two videos, whatever fits. Leave the list empty (or omit `media`
# entirely) for a text-only project.
media:
  - type: video
    src: projects/example-project/demo.mp4
    poster: projects/example-project/demo-poster.jpg
    caption: The same animation as a short video (6 s, no sound).
  - type: image
    src: ./extra-view.png
    alt: A second still of the same trajectory plot, zoomed in on the endpoint.
    caption: A closer look at the estimated endpoint.
  - type: gif
    src: projects/example-project/demo.gif
    alt: Looping animation of the dot following the trajectory.
  - type: video
    src: projects/example-project/demo.mp4
    poster: projects/example-project/demo-poster.jpg
    caption: The same animation as a short video (6 s, no sound).
repo: https://github.com/maexerich/radar
links:
  - label: Project report (PDF)
    url: https://example.com/report.pdf
---

This page is the template for every project on the site. Copy the folder, change the text and swap the media. Delete this example once you have added your first real project.

## Goal

Say in two or three sentences what problem you wanted to solve and why. Be concrete: *"Estimate the pose of a mobile robot from wheel odometry and an IMU"* is better than *"Explore sensor fusion"*.

## What I did

- State your own contribution first, especially if it was a team effort.
- Name the key methods and tools (for example: extended Kalman filter, ROS 2, Gazebo, C++).
- Mention what you built from scratch and what you reused.

## Result

Give one or two concrete outcomes: a number, a plot, a working demo, or an honest lesson learned. If the project was a learning exercise or built with AI assistance, say so here - it reads as self-aware, not as a weakness.

## Inline pictures

Pictures placed next to this file are resized and optimised automatically. Reference them with normal Markdown:

```md
![Short description of the picture](./my-picture.png)
```
