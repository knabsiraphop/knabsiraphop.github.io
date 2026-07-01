---
title: "Knock Knock Run"
order: 6
role: "Unity Developer — Launch & Stabilization"
period: "2022"
platforms: ["Android"]
tags: ["Multiplayer", "Horror", "Mobile"]
featured: false
summary: "Multiplayer survival-horror — I picked the project up for its final stretch, stabilized the build, and led the launch to Google Play."
status: "Delisted"
cover: "/img/projects/knock-knock-run/banner.webp"
icon: "/img/projects/knock-knock-run/icon.webp"
hero:
  type: "image"
  src: "/img/projects/knock-knock-run/banner.webp"
gallery:
  - "/img/projects/knock-knock-run/screenshot-1.webp"
  - "/img/projects/knock-knock-run/screenshot-2.webp"
  - "/img/projects/knock-knock-run/screenshot-3.webp"
tech: ["Unity 2019", "C#", "Nakama", "Firebase"]
links:
  facebook: "https://web.facebook.com/KnockKnockRun"
---

**Knock Knock Run** is a Thai mobile multiplayer survival-horror game: players share a room, hunt for keys, restore power, and try to escape while a ghost stalks them — cooperate and you survive, get caught alone and you don't. Real-time multiplayer runs on Nakama, with a separate backend engineer owning the server; I worked the Unity client side, the same split I ran on ZabbWorld.

## What I did

I joined for the project's critical final phase, after the previous developer left, and my job was to get it out the door:

- **Stabilized for launch** — tracked down and fixed the launch-blocking bugs and cleaned up the rough edges left in the build.
- **Polished the gameplay** — tightened the moment-to-moment mechanics so the search-and-escape loop actually felt playable.
- **Optimized performance** — profiled and trimmed to keep it running smoothly on Android hardware.
- **Owned the release** — ran the final development cycle and led the deployment to the Google Play Store for a clean launch.

## Engineering notes

- Came in cold on someone else's codebase and drove it to a shippable state — the unglamorous, high-pressure kind of work that decides whether a game actually launches.
- Client-side integration against the Nakama-backed multiplayer, with Firebase for the supporting services.
- Shipped to Android; the title has since been taken down from the store.
