---
title: "Cat vs Aliens"
order: 7
role: "Solo Developer"
period: "2020"
platforms: ["Android (Huawei)"]
tags: ["Solo", "Arcade", "Mobile"]
featured: true
summary: "100% solo top-down arcade defender taken from empty project to a Huawei AppGallery release in about four weeks."
status: "Shipped"
hero:
  type: "image"
tech: ["Unity", "C#", "Huawei HMS", "Ads", "Google Sheets"]
links: {}
---

**Cat vs Aliens** (originally "Cat vs Covid") is a top-down survival / defense arcade game — you control a cat and tap to throw bombs at advancing waves of enemies, defending a barricade across ramping stages, with coins, a skins gacha, and leaderboards. I built **100% of it solo** in a roughly four-week sprint.

## What I built

- **Core gameplay** — aim-and-tap bombing, enemy variety (normal / special / boss) with physics-driven movement, a timed spawner with difficulty ramp, barricade wall-HP, lives, scoring, coin drops, and screen-shake.
- **Meta-game** — levels, a randomized skins shop (gacha), settings (music / effect / vibrate), and PlayerPrefs save / load.
- **Huawei platform integration (HMS)** — account sign-in, achievements, and leaderboards via Huawei Game Service, plus banner ads — shipping to Huawei AppGallery rather than Google / Firebase.
- **Content pipeline** — Google-Sheet-driven stage and level data.

## Engineering notes

- A pragmatic theme pivot (COVID → Aliens) handled via a folder and asset restructure without rewriting gameplay — a practical response to app-store topic sensitivity.
- Demonstrates range across mobile platforms: this title targets the Huawei ecosystem specifically, alongside my Google / Firebase and PlayFab work elsewhere.
