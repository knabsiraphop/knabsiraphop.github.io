---
title: "Rescue Meow Meow"
order: 4
role: "Solo Developer"
period: "2020 – 2021"
platforms: ["WebGL"]
tags: ["Solo", "WebGL", "Puzzle"]
featured: true
summary: "Solo-built physics sprite-cutting puzzle shipped on Thai PBS Kids (WebGL) — started as the 'Wooden Castle' prototype."
status: "Shipped"
hero:
  type: "webgl"
tech: ["Unity", "C#", "WebGL", "Firebase Auth + Cloud Functions", "UniTask", "Spine", "Slicer2D"]
links: {}
---

**Rescue Meow Meow** (which began as the prototype "Wooden Castle") is a 2D physics sprite-cutting puzzle game built for **Thai PBS Kids** and embedded as a WebGL build on thaipbskids.com. You slash a line to slice wooden obstacles and drop a target number of cats past a goal line, under a cut limit and a time limit, earning 1–3 stars per stage.

Built **solo** across two repositories (~42 commits, ~6,800 lines authored) over roughly 2.5 months.

## What I built

- **Cutting gameplay** — `Physics2D.LinecastAll` along the swipe → sprite-cutter → re-parent the two halves, with cut-count and time limits and a star-scoring formula. Migrated the cutting library from UnitySpriteCutter to Slicer2D, with resolution-aware cut force.
- **Backend, iterated three ways** — WebGL JS-interop Firestore → a pure-C# Firebase REST client (UniTask, Identity Toolkit auth, token refresh, Cloud Functions) → URL-param identity read from the Thai PBS Kids host page.
- **Global leaderboard & cloud save** — top-N plus full list with the player's own row injected, plus cloud-save and quest-save Cloud Functions.
- **Content pipeline** — a Google Sheets → JSON importer (RSG Promises + reflection) feeding stage / bonus / star tables.
- **Polish** — Spine cat animation, day / night parallax backgrounds, Thai font handling, and a WebGL post-build fix patching Unity's loader UA regex for browser compatibility.
