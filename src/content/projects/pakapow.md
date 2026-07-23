---
title: "Pakapow: Friendship Never Ends"
order: 5
role: "Gameplay / UI Engineer"
company: "Varisoft"
period: "2020 – 2023"
platforms: ["Android", "iOS"]
tags: ["RPG", "Multiplayer", "Mobile"]
featured: true
summary: "Turn-based PvP RPG — I built the guild and battle UI on PlayFab Groups as one engineer on a large team."
status: "Delisted"
cover: "/img/projects/pakapow/banner-1.webp"
icon: "/img/projects/pakapow/icon.webp"
hero:
  type: "video"
  src: "https://www.youtube.com/watch?v=7zfBmVPyoAk"
gallery:
  - "/img/projects/pakapow/screenshot-1.webp"
  - "/img/projects/pakapow/screenshot-2.webp"
  - "/img/projects/pakapow/screenshot-3.webp"
  - "/img/projects/pakapow/screenshot-4.webp"
  - "/img/projects/pakapow/screenshot-5.webp"
tech: ["Unity", "C#", "PlayFab (Groups)", "Firebase", "Unity IAP"]
links:
  video: "https://www.youtube.com/watch?v=7zfBmVPyoAk"
  facebook: "https://web.facebook.com/PakapowGame"
---

**Pakapow: Friendship Never Ends** is a Thai mobile turn-based PvP RPG — job classes, worldmap node movement, PvP battles, guilds, and cosmetics. I worked as one gameplay / UI engineer on a large team, with my signature slice being the guild UI wired to PlayFab Groups — shipped across two separate engagements three years apart: feature work in 2020, then a return in 2023 to keep the build alive through an engine and SDK upgrade.

## What I built

- **Guild UI on PlayFab Groups** — a backend-integrated system, not reskinned UI: the application / accept / cancel flow, alert badges driven by group-application queries, and description-input validation, wired to PlayFab Groups callbacks from the client.
- **Battle UI** — team-color indicators wired from character init, fighter-action animations, and PvP enemy initialization.
- **Tutorials, casino & blacksmith** — how-to-play flows for the casino and blacksmith, plus tutorial UI fixes.
- **Character & social** — a character-data panel showing job level (extra PlayFab data), max-level XP-bar handling, and friend-list improvements.
- **Gameplay fixes** — the MageFighter invisibility passive and worldmap state handling.

## Engineering notes

- 73 authored commits across two clearly separated eras — feature work in 2020, then unrelated build maintenance three years later in 2023.
- Long-term build steward: came back in 2023 to handle the unglamorous maintenance (Unity upgrade, Firebase / Facebook SDK swaps) and keep the title building.
