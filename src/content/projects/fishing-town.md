---
title: "Fishing Town"
order: 7
role: "Client / UI Engineer"
period: "2021"
platforms: ["WebGL"]
tags: ["RPG", "WebGL"]
featured: false
summary: "Shipped rod-enhance, repair, inventory, and telemetry features in a focused 5-day release sprint on a live title."
status: "Shipped"
cover: "/img/projects/fishing-town/gameplay.webp"
hero:
  type: "image"
  src: "/img/projects/fishing-town/gameplay.webp"
tech: ["Unity", "C#", "WebGL", "REST API", "UniTask"]
links:
  facebook: "https://web.facebook.com/Fishingtownbsc2021/"
---

**Fishing Town** is a server-authoritative fishing RPG built by a large team. I contributed as one client / UI engineer during an intense 5-day release sprint (42 commits, ~19 code-bearing, roughly +750/−330 lines of C#), shipping rod-enhancement, repair, inventory, currency, and telemetry features.

## What I built

- **Rod enhancement** — the upgrade detail panel (per-rarity catch-rate tables with a color-coded next-level preview), server-driven requirements, an optional protection / "blessing" toggle, pre-flight cost validation with precise "Not Enough X" messages, and success / fail feedback.
- **Repair system** — a new "rods in the blacksmith" status screen (infinite-scroll), enhance-level-aware repair pricing, and a live repair-completion countdown.
- **Inventory** — material stacking, single-rod in-place refresh, and type-aware sorting (fish by rarity / id / size, rods by rarity / id / enhance).
- **Currency & deposit** — widened the in-game currency to `long` for large balances and hardened the deposit flow with `TryParse` and explicit error popups instead of throwing parses.
- **Telemetry & gating** — built on the sprint's final day: a fire-and-forget activity-log system instrumented across the entire fishing loop (every action, every outcome, every map transition), and a boot-time server-status check that blocks play during maintenance windows.

## Engineering notes

- Worked within an existing finite-state-machine UI architecture, adding each new screen as a state + panel consistently with the codebase's patterns.
- Under release pressure, the sprint leaned hard into defensive hardening — throwing parses swapped for `TryParse`, null-ownership and negative-duration guards, re-entrant particle feedback — the unglamorous work that decides whether a feature survives contact with real players.
