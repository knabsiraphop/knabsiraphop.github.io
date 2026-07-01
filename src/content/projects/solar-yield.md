---
title: "SolarYield"
order: 11
role: "Unity Developer"
company: "Freelance"
period: "2021 – 2022"
platforms: ["Mobile"]
tags: ["Freelance", "Solo dev", "Simulation"]
featured: false
summary: "Solar-farm yield simulation prototype — a compressed day / night cycle, weather events, and an in-game economy on a message-bus architecture."
status: "Delivered"
cover: "/img/projects/solar-yield/title.webp"
hero:
  type: "image"
  src: "/img/projects/solar-yield/title.webp"
gallery:
  - "/img/projects/solar-yield/marketplace.webp"
  - "/img/projects/solar-yield/gameplay.webp"
  - "/img/projects/solar-yield/user-area.webp"
tech: ["Unity", "C#", "ShaderLab"]
links:
  github: "https://github.com/knabsiraphop"
---

**SolarYield** is a single-scene mobile game prototype delivered for a client — the player runs a solar-panel farm, generating electricity across a compressed day cycle and trading in **SOLA coin**, the in-game currency. I built it as the sole developer over ~7 weeks.

## What I built

- **Message-bus architecture** — a `MainGameController` singleton broadcasts a `MainGameMessage` enum to every `MainSystem` module (menu / marketplace / gameplay / user); each toggles its own `SystemUi` with no scene transitions.
- **Time & yield simulation** — a compressed day (1200s = 24h) driving electricity yield inside a solar window, capped per day, with dynamic lighting and 5-material skybox cycling from daybreak to midnight.
- **Random events** — bird-dirt and storm events that suppress yield, swap the house texture, and fire warning audio; a paid cleaning action resets state, and a paid "boost time" banks skipped yield.
- **Economy & marketplace** — four category tabs, a combo-house purchase that unlocks placement, and a quick-sell that returns 80% instantly.
