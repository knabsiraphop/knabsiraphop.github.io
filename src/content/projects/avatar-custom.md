---
title: "AvatarCustom"
order: 12
role: "Unity Developer"
company: "Freelance"
period: "2021"
platforms: ["Unity"]
tags: ["Freelance", "Sole programmer", "Tools"]
featured: false
summary: "Runtime Spine avatar-customization system — non-destructive skin-swapping with skin-tone and hair-color tinting, fully data-driven."
status: "Delivered"
cover: "/img/projects/avatar-custom/editor.webp"
hero:
  type: "image"
  src: "/img/projects/avatar-custom/editor.webp"
tech: ["Unity", "C#", "Spine"]
links:
  github: "https://github.com/knabsiraphop"
---

**AvatarCustom** is a runtime avatar-customization system for a Spine 2D character, delivered for a client. Players swap costume pieces, hair, face parts, and accessories on a live skeleton — all swaps non-destructive and applied frame-accurately via Spine's skin API.

## What I built

- **Composite-skin customizer** — `AvatarSpineCustomizer` builds a `slotToAttachmentDict` from the default skin, then batches attachment remaps into a runtime `customSkin` via `GetRemappedClone`, committing with a single `SetSkin → setup-pose → unload` pass to avoid texture leaks.
- **Color system** — per-slot tinting for 3 skin tones and 18 hair colors, driven off the JSON part map's `skin` / `hair` keys.
- **Isolated face sub-customizer** — the face runs as a separate customizer instance so face and body slot dictionaries never collide.
- **Data-driven mapping** — a `GeneratePartToSlot` loader (category → sub-part → slot list) plus `ScriptableObject` palettes and part → sprite tables, so content lives in data, not code.
- **Editor tooling** — custom Unity inspectors for the customizer and animation preview.
