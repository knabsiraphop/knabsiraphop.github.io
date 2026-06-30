---
title: "Pakapow: Friendship Never Ends"
order: 5
role: "Gameplay / UI Engineer"
period: "2020 – 2023"
platforms: ["Android", "iOS"]
tags: ["RPG", "Multiplayer", "Mobile"]
featured: true
summary: "Turn-based PvP RPG — I built the PlayFab-backed guild system and battle UI as one engineer on a large team."
status: "Shipped"
hero:
  type: "image"
tech: ["Unity", "C#", "PlayFab (Groups)", "Firebase", "Unity IAP"]
links: {}
---

**Pakapow: Friendship Never Ends** is a Thai mobile turn-based PvP RPG — job classes, worldmap node movement, PvP battles, guilds, and cosmetics. I worked as one gameplay / UI engineer on a large team, with my signature feature being the guild system built directly on PlayFab.

## What I built

- **Guild system (PlayFab Groups)** — the application / accept / cancel flow, alert badges driven by group-application queries, and description-input validation. My largest authored slice and a real backend-integrated feature.
- **Battle UI** — team-color indicators wired from character init, fighter-action animations, and PvP enemy initialization.
- **Tutorials, casino & blacksmith** — how-to-play flows for the casino and blacksmith, plus tutorial UI fixes.
- **Character & social** — a character-data panel showing job level (extra PlayFab data), max-level XP-bar handling, and friend-list improvements.
- **Gameplay fixes** — the MageFighter invisibility passive and worldmap state handling.

## Engineering notes

- Long-term build steward: years later I handled the unglamorous maintenance (Unity upgrade, obfuscator, Firebase / Facebook SDK swaps) to keep the title building.
- Across the studio's titles I've shipped against three different backends — **PlayFab** here, a bespoke REST API on [Fishing Town](/projects/fishing-town/), and Firebase on the casual titles.
