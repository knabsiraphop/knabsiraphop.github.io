---
title: "Once Pro Shoot"
order: 3
role: "Sole Developer"
company: "Varisoft"
period: "2021"
platforms: ["WebGL"]
tags: ["Solo dev", "WebGL", "Arcade"]
featured: true
summary: "Sole developer on a WebGL arcade shoot-'em-up with a data-driven balancing pipeline and an online leaderboard."
status: "Shipped"
cover: "/img/projects/once-pro-shoot/gameplay.webp"
hero:
  type: "image"
  src: "/img/projects/once-pro-shoot/start.webp"
gallery:
  - "/img/projects/once-pro-shoot/gameplay.webp"
tech: ["Unity", "C#", "WebGL", "Firebase", "UniTask", "Spine", "Google Sheets API"]
links: {}
---

**Once Pro Shoot** is a 2D vertical shoot-'em-up with a candy / dessert theme, built for mobile-web (WebGL). You drag to move a princess at the bottom of the screen and tap or hold to fire upward at descending dessert enemies and bosses; collecting power-ups triggers a temporary power mode, and game-over posts your score to an online leaderboard.

I was the **sole developer** — every line of the game's code across all branches (~4,900 lines authored) — working alongside an artist and a game designer.

## What I built

- **Full gameplay** — a `GameplayManager` orchestrating the stage loop, an HP / heart system with a degrading princess skin, power-up → power mode, scoring, and responsive portrait / landscape canvas scaling.
- **Clean inheritance hierarchy** — `BaseMoveObject` / `BaseSpawnObject` subclassed by enemy, boss, and item controllers; pooled bullets and projectiles.
- **Data-driven balancing** — a Google Sheets → JSON import tool (Sheets API v4 + reflection) so enemy / boss / power / level tuning lives in a spreadsheet, not code.
- **Online leaderboard** — Firebase (UniTask REST) for username registration and score submission, with a race-guarded leaderboard fetch.
- **WebGL-mobile polish** — native mobile-keyboard interop via a `.jslib` bridge, logger disabled in builds, and custom blur and additive shaders.

## Engineering notes

- Reuses a studio "engine layer" I maintained across titles — singletons, object pooling, and an audio system with mixer math and BGM cross-fade.
