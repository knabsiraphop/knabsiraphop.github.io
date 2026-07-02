---
title: "Cat vs Aliens"
order: 8
role: "Sole Programmer"
company: "Varisoft"
period: "2020"
platforms: ["Android (Google Play)", "Android (Huawei AppGallery)"]
tags: ["Sole programmer", "Arcade", "Mobile"]
featured: true
summary: "Sole programmer on a top-down arcade defender — from an empty project to a Google Play and Huawei AppGallery release in about four weeks."
status: "Shipped"
cover: "/img/projects/cat-vs-aliens/icon.webp"
icon: "/img/projects/cat-vs-aliens/icon.webp"
hero:
  type: "image"
  src: "/img/projects/cat-vs-aliens/title.webp"
gallery:
  - "/img/projects/cat-vs-aliens/gameplay.webp"
  - "/img/projects/cat-vs-aliens/skins.webp"
  - "/img/projects/cat-vs-aliens/skin-select.webp"
  - "/img/projects/cat-vs-aliens/stage-clear.webp"
tech: ["Unity", "C#", "Huawei HMS", "Ads", "Google Sheets"]
links: {}
---

**Cat vs Aliens** (originally "Cat vs Covid") is a top-down survival / defense arcade game — you control a cat and tap to throw bombs at advancing waves of enemies, defending a barricade across ramping stages, with coins, a skins gacha, and leaderboards. I was the **sole programmer** — writing all of the game's code in a roughly four-week sprint — working alongside an artist and a game designer.

## What I built

- **Core gameplay** — aim-and-tap bombing, enemy variety (normal / special / boss) with physics-driven movement, a timed spawner with difficulty ramp, barricade wall-HP, lives, scoring, coin drops, and screen-shake.
- **Meta-game** — levels, a randomized skins shop (gacha), settings (music / effect / vibrate), and PlayerPrefs save / load.
- **Huawei platform integration (HMS)** — account sign-in, achievements, and leaderboards via Huawei Game Service, plus banner ads — shipped to both Google Play and Huawei AppGallery.
- **Content pipeline** — Google-Sheet-driven stage and level data.

## Engineering notes

- A pragmatic theme pivot (COVID → Aliens) handled via a folder and asset restructure without rewriting gameplay — a practical response to app-store topic sensitivity.
- Demonstrates range across mobile platforms: alongside a standard Google Play release, this title adds Huawei ecosystem support (HMS), showing range beyond my Google / Firebase and PlayFab work elsewhere.
