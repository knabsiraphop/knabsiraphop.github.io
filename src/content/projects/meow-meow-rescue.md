---
title: "Rescue Meow Meow"
order: 4
role: "Sole Programmer"
company: "Varisoft"
period: "2020 – 2021"
platforms: ["WebGL"]
tags: ["Sole programmer", "WebGL", "Puzzle"]
featured: true
summary: "Sole programmer on a physics sprite-cutting puzzle shipped on Thai PBS Kids (WebGL) — started as the 'Wooden Castle' prototype."
status: "Shipped"
cover: "/img/projects/meow-meow-rescue/gameplay.webp"
hero:
  type: "image"
  src: "/img/projects/meow-meow-rescue/promo.webp"
gallery:
  - "/img/projects/meow-meow-rescue/gameplay.webp"
  - "/img/projects/meow-meow-rescue/title.webp"
  - "/img/projects/meow-meow-rescue/gameplay-2.webp"
  - "/img/projects/meow-meow-rescue/gameplay-3.webp"
  - "/img/projects/meow-meow-rescue/gameplay-4.webp"
  - "/img/projects/meow-meow-rescue/gameplay-5.webp"
tech: ["Unity", "C#", "WebGL", "Firebase Auth + Cloud Functions", "UniTask", "Spine", "Smart Slicer 2D Pro"]
links:
  play: "https://knabsiraphop.itch.io/rescue-meowmeow-portfolio-demo"
  site: "https://kids.thaipbs.or.th/games/5fe1a3c76ca51f3ff97d5f0d"
---

**Rescue Meow Meow** (which began as the prototype "Wooden Castle") is a 2D physics sprite-cutting puzzle game built for **Thai PBS Kids** and embedded as a WebGL build on thaipbskids.com. You slash a line to slice wooden obstacles and drop a target number of cats past a goal line, under a cut limit and a time limit, earning 1–3 stars per stage.

I was the **sole programmer** across two repositories (~42 commits, ~6,800 lines authored) over roughly 2.5 months, working alongside an artist and a game designer.

## What I built

- **Cutting gameplay** — `Physics2D.LinecastAll` along the swipe → sprite-cutter → re-parent the two halves, with cut-count and time limits and a star-scoring formula. Migrated the cutting library from UnitySpriteCutter to [Smart Slicer 2D Pro](https://assetstore.unity.com/packages/tools/physics/smart-slicer-2d-pro-109353), with resolution-aware cut force.
- **Backend, iterated three ways** — WebGL JS-interop Firestore → a pure-C# Firebase REST client (UniTask, Identity Toolkit auth, token refresh, Cloud Functions) → URL-param identity read from the Thai PBS Kids host page.
- **Global leaderboard & cloud save** — top-N plus full list with the player's own row injected, plus cloud-save and quest-save Cloud Functions.
- **Content pipeline** — a Google Sheets → JSON importer (RSG Promises + reflection) feeding stage / bonus / star tables.
- **Polish** — Spine cat animation, day / night parallax backgrounds, Thai font handling, and a WebGL post-build fix patching Unity's loader UA regex for browser compatibility.

## Play it

The original Thai PBS Kids build is offline (its backend is no longer running), so I've put up a **[standalone WebGL demo on itch.io](https://knabsiraphop.itch.io/rescue-meowmeow-portfolio-demo)** that runs the core cutting gameplay without the backend. The page is password-protected — use **`meowmeow`** to access it.
