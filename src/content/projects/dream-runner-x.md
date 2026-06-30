---
title: "Dream Runner X"
order: 2
role: "Gameplay & Systems Engineer"
period: "2026 – Present"
platforms: ["Android", "iOS"]
tags: ["Live-ops", "Multiplayer", "Mobile"]
featured: true
summary: "Owner of core live-ops systems — mail, shop + IAP, gachapon, and daily rewards — on a new multiplayer running game."
status: "In development"
hero:
  type: "image"
tech: ["Unity", "C#", "Firebase", "Unity IAP (UGS 5.x)", "Addressables", "Google Sheets"]
links: {}
---

**Dream Runner X** is a new multiplayer running game in active development at the studio. I own several end-to-end live-ops systems on the client — the full data → state → UI stack for each.

## What I built

- **Mail system** — full data layer (mapper, policy, gateway, repository), a state-machine list controller, scroll-position-preserving UI, and a claim → reward flow with typed error handling, delivered over multiple SOLID refactor passes.
- **Shop + In-App Purchases** — the IAP stack on Unity Gaming Services IAP 5.x (catalog, gateway, store manager), a shop subscene with banner / carousel / costume browser, wallet pre-checks, localized error popups, and pending-order recovery on restart.
- **Gachapon** — roll flow with cost splits, rate-up detail popups, a summoning scene with rarity colors and SFX, and reward popups.
- **Daily / weekly / monthly rewards** — a board-agnostic reward system with claim guards, RPC, and correct cycle reset.
- **Title, account & settings** — Firebase SDK integration, a Google-Sheet-driven localization system (EN / TH), encrypted local save, and account create / login flows.

## Engineering notes

- Lobby and matchmaking UI: room selection, quick-join, team slots, invites, and ticket currency.
- Strong emphasis on SOLID structure — gateways, repositories, and interfaces with reusable pooled UI components.
