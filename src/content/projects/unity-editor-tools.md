---
title: "ZabbWorld Editor Tools"
order: 9
role: "Tools Engineer (Solo)"
company: "Varisoft"
period: "2022 – 2025"
platforms: ["Unity Editor"]
tags: ["Tools", "Sole programmer"]
featured: false
summary: "Standalone Unity editor tools that mirror the MMO's avatar and furniture pipelines for content QA."
status: "Internal tool"
cover: "/img/projects/unity-editor-tools/cover.webp"
hero:
  type: "image"
  src: "/img/projects/unity-editor-tools/avatar-costume.webp"
gallery:
  - "/img/projects/unity-editor-tools/avatar-animation.webp"
  - "/img/projects/unity-editor-tools/furniture-tool.webp"
tech: ["Unity Editor", "C#", "Spine", "UniTask", "Object Pooling"]
links: {}
---

Two standalone Unity tools I built to support [ZabbWorld](/projects/zabbworld/)'s two biggest content-customization surfaces — used by artists and developers to validate content outside the full game.

## MwAvatarEditor

A long-lived editor / QA tool (~5,000 lines authored) that lets 2D artists check their own costume and appearance art against the *real* avatar rendering pipeline. Drop part PNGs in a folder, cycle costume and appearance parts per body slot, tint appearance and skin colors, apply patterns, play any skeleton animation or face emotion, attach action props, and rotate the character front / back.

- Spine skin compositing via attachment remapping; CPU pixel compositing for recolor and pattern (multiply blend).
- Loads user-supplied parts straight from disk — no reimport needed.
- A 2025 sync ported the live game's functional-skin, action-tool, and skin-separator runtime so the editor stays faithful to production.

## FurnitureTestTool

A focused grid-placement harness for the housing system, built so new 3D artists can size their models correctly before handing them to Unity. Load a furniture model, set its L/W/H footprint (the blocking volume) on an isometric tile grid, rotate it, and confirm it occupies the tiles the design expects — no engineer or full game build required.

## Engineering notes

- The whole value is fidelity: these tools reuse production classes (swapping Addressables / skin-manager persistence for `Resources.Load` and disk reads) rather than re-implementing them.
