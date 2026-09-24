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

## Goal 🎯

Say in two or three sentences what problem you wanted to solve and why. Be concrete: *"Estimate the pose of a mobile robot from wheel odometry and an IMU"* is better than *"Explore sensor fusion"*.

Basic emphasis still works as expected: *italic*, **bold**, ***bold italic***, and ~~strikethrough~~ for
something you tried and abandoned. Inline `code` is handy for a file name, a flag, or a short symbol like
`ekf.py`.

## What I did

- State your own contribution first, especially if it was a team effort.
- Name the key methods and tools (for example: extended Kalman filter, ROS 2, Gazebo, C++).
- Mention what you built from scratch and what you reused.
  - Nested bullets work too, for a sub-point that belongs under the one above.
  - Keep nesting shallow — two levels is usually the most a reader will follow.

A numbered list, when the order actually matters:

1. Log raw wheel and IMU data on the robot.
2. Fuse it offline in an extended Kalman filter.
3. Compare the estimated path against ground truth from motion capture.

A checklist works well for scope or status — done items stay as a record, not just a to-do:

- [x] Wheel odometry integration
- [x] IMU bias estimation
- [ ] Loop-closure correction (future work)

## Result

Give one or two concrete outcomes: a number, a plot, a working demo, or an honest lesson learned. If the project was a learning exercise or built with AI assistance, say so here - it reads as self-aware, not as a weakness. 🙂

> A blockquote is a good place for a lesson learned or a quote from a report: "The filter diverged
> whenever the wheels slipped on tile — fixed by inflating the process noise during turns."

A small table, e.g. for a couple of measured numbers:

| Method | Mean error | Notes |
|---|---|---|
| Odometry only | 42 cm | Drifts over time |
| EKF (this project) | 6 cm | ✅ Meets the 10 cm target |
| EKF + loop closure | 3 cm | Future work |

---

## Linking to another project

A project can point to another one on this site with a normal Markdown link to that project's URL
(its folder name, e.g. `/projects/<slug>/`) — handy when one project builds on, or depends on, another:

```md
This project reuses the firmware from the [Smart-Home Framework](/projects/smart-home-framework/).
```

External links work exactly the same way: see the [Astro documentation](https://docs.astro.build) or
email `you@example.com` — most Markdown renderers auto-link a bare URL like https://example.com too.

## Inline pictures

Pictures placed next to this file are resized and optimised automatically. Reference them with normal Markdown:

```md
![Short description of the picture](./my-picture.png)
```

A fenced code block with a language tag gets syntax highlighting, e.g. Python:

```python
def fuse(odometry, imu):
    """One EKF predict/update step."""
    state = predict(state, odometry)
    return update(state, imu)
```

A couple of emoji sprinkled in sparingly can add a bit of warmth (⚠️ for a caveat, 🚀 for a highlight) —
but they read as unprofessional fast if overused, so keep it to one or two per page at most.
