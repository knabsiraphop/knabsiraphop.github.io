---
title: "Fishing Town"
order: 6
role: "Client / UI Engineer"
period: "2021"
platforms: ["WebGL"]
tags: ["RPG", "WebGL"]
featured: false
summary: "Shipped rod-enhance, repair, inventory, and telemetry features in a focused 5-day release sprint on a live title."
status: "Shipped"
hero:
  type: "image"
tech: ["Unity", "C#", "WebGL", "REST API", "Web3 wallet (MetaMask / WalletConnect)", "UniTask"]
links: {}
---

**Fishing Town** is a wallet-authenticated, server-authoritative fishing RPG with an on-chain token economy and NFT-like rods. I contributed as one client / UI engineer on a large team during an intense 5-day release sprint (42 commits).

## What I built

- **Rod enhancement** — the upgrade detail panel (per-rarity catch-rate tables with a color-coded next-level preview), server-driven requirements, an optional protection / "blessing" toggle, pre-flight cost validation with precise "Not Enough X" messages, and success / fail feedback.
- **Repair system** — a new "rods in the blacksmith" status screen (infinite-scroll), enhance-level-aware repair pricing, and a live repair-completion countdown.
- **Inventory** — material stacking, single-rod in-place refresh, and type-aware sorting (fish by rarity / id / size, rods by rarity / id / enhance).
- **Currency & on-chain deposit** — widened the in-game currency to `long` for large token balances and hardened the deposit / bridge flow with `TryParse` and explicit error popups.
- **Telemetry & gating** — a fire-and-forget activity-log system instrumented across the fishing loop, and a boot-time server-status check that blocks play during maintenance windows.

## Engineering notes

- Worked within an existing finite-state-machine UI architecture, adding each new screen as a state + panel consistently with the codebase's patterns.
