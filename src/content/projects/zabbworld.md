---
title: "ZabbWorld: Secret Stories"
order: 1
role: "Lead Client Engineer"
period: "2020 – Present"
platforms: ["Android", "iOS"]
tags: ["MMO", "Multiplayer", "Live-ops", "Mobile"]
featured: true
summary: "Lead client engineer on a 5-year social life-sim MMO — real-time multiplayer, the avatar pipeline, live-ops, and the in-game economy."
status: "Live"
cover: "/img/projects/zabbworld/banner-1.webp"
icon: "/img/projects/zabbworld/icon.webp"
hero:
  type: "video"
  src: "https://youtu.be/Q28hyKcgUow"
gallery:
  - "/img/projects/zabbworld/banner-1.webp"
  - "/img/projects/zabbworld/banner-2.webp"
  - "/img/projects/zabbworld/banner-3.webp"
  - "/img/projects/zabbworld/banner-4.webp"
  - "/img/projects/zabbworld/banner-5.webp"
  - "/img/projects/zabbworld/banner-6.webp"
  - "/img/projects/zabbworld/banner-7.webp"
tech: ["Unity (URP)", "C#", "UniTask", "Addressables", "Nakama", "Firebase", "Spine 2D", "Unity IAP"]
links:
  playstore: "https://play.google.com/store/apps/details?id=com.varisoft.zabbworld"
  appstore: "https://apps.apple.com/th/app/zabb-world/id6446196583"
  facebook: "https://web.facebook.com/ZabbWorld"
  facebookGroup: "https://web.facebook.com/groups/zabbworld/"
---

**ZabbWorld: Secret Stories** (internal namespace `ZabbWorld`) is a Thai social life-simulation MMO — a persistent, avatar-driven virtual world with player housing, careers, dozens of mini-games, marriage, clubs, voice/text chat, and a deep cosmetic + crafting + gacha economy, localized for Thailand (Songkran and Loy Krathong appear as live events).

It is the flagship of the studio and the largest project I've worked on: **21,000+ total commits**, and I am the **#1 contributor with 8,400+ authored commits over 5+ continuous years**, cutting release tags into the mainline as the lead client engineer.

## What I built

- **Core client architecture** — the staged async bootstrap (`MainGameController` + a UniTask init pipeline) and the module composition that wires the game's managers together.
- **Real-time multiplayer on Nakama** — `NetworkService` over Nakama sockets/RPC with build-flag-selected environments, plus Firebase (Crashlytics, Analytics, remote config) and Facebook / Google / Apple sign-in.
- **Avatar pipeline** — the Spine skin-builder that composites 10,000+ customization options by remapping attachments per slot, repacking atlases, and building reduced icon skins.
- **The live-ops engine** — a continuous seasonal-event machine (Songkran, Loy Krathong, Christmas, Valentine, scratch- and matching-card events, a battle pass) plus quests and daily missions — the largest live-ops surface in the game.
- **Housing & world systems** — grid-based furniture placement, farming (plant / harvest / sync), and club and board-game activities.
- **The economy** — shop & gacha (v3 flow), crafting, inventory, and auction.
- **Social systems** — world and private chat with moderation, clubs (roles, check-in, donations), marriage, and leaderboards.

## Engineering notes

- Sustained architecture investment across five years: an `AvatarSystem → AvatarSystemV2` migration, repeated localization and chat refactors, assembly splits, and Addressables load-time optimization.
- Introduced a centralized analytics event system threaded across shop, craft, career, mini-games, inventory, avatar, and networking.
- Built standalone editor tools (avatar editor, furniture grid tool) for the very systems I own — see [Unity Editor Tools](/projects/unity-editor-tools/).
