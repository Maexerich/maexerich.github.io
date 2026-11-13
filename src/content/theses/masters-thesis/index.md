---
draft: false
title: Single Beam Imaging Sonar for Underwater SLAM
summary: Integrated sonar, collected data, developed sonar accumulation framework, and used ICP for relative pose estimation.
date: 2026-06-14
kind: Master's thesis
institution: CSIRO, Australia
cover: ./cover.jpg
coverAlt: A black underwater remotely operated vehicle (SRV-8) with orange thrusters and a camera dome.
tags: [Sonar, Robotics, ICP, ROS1, Python]
pdf: thesis/master-thesis/MA-thesis-report.pdf
links: [{ label: "GitHub", url: "https://github.com/Maexerich/Sonar" },{ label: "PDF", url: "https://github.com/Maexerich/Sonar/blob/main/report.pdf"}]
---

**Problem** Underwater navigation remains an open research question.
The harsh underwater environment limits conventional sensing for SLAM; vision systems (camera, lidar) may be limited by turbidity and overall illumination, GPS and radar are unavailable due to electromagnetic attenuation.
This makes sonar, an active acoustic sensor, the most common and important sensing modality for robust underwater navigation.


**My thesis** investigated the applicability of using a single-beam imaging sonar for underwater SLAM.
While my work was cut short by time, I developed a sonar accumulation framework to create 'scans' from single sonar beams and used ICP for relative pose estimation between scans.


*A pan is an accumulation of sonar beams over a panning motion of the ROV.*
| Source pan — `t₀` (green) | Target pan — `t₁` (orange) | Ground-truth aligned |
|:---:|:---:|:---:|
| ![Source sonar pan](./GT_Alignment_sparse_echuca260417_E04_03_014.png) | ![Target sonar pan](./GT_Alignment_sparse_echuca260417_E04_03_015.png) | ![Registered overlay](./GT_Alignment_sparse_echuca_Overlay.png) |