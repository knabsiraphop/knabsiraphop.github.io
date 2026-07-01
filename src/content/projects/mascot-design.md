---
title: "Mascot Design"
order: 10
role: "Unity Developer"
company: "Freelance"
period: "2021"
platforms: ["Windows", "macOS"]
tags: ["Freelance", "Solo dev", "Tools"]
featured: false
summary: "Standalone Spine mascot creator — a client desktop app with a skin customizer, bone scaling, and high-res PNG / JPG export."
status: "Delivered"
cover: "/img/projects/mascot-design/mascot-list.webp"
hero:
  type: "image"
  src: "/img/projects/mascot-design/mascot-list.webp"
gallery:
  - "/img/projects/mascot-design/screenshot-1.webp"
  - "/img/projects/mascot-design/screenshot-2.webp"
tech: ["Unity", "C#", "Spine 4.0", "Newtonsoft.Json"]
links:
  github: "https://github.com/knabsiraphop"
---

**Mascot Design** is a standalone Unity **desktop app** (Spine 4.0) delivered for a client — users build and customize a 2D mascot, then export a high-resolution PNG / JPG. I built it as the sole developer over ~3 months (22 commits on `develop`).

## What I built

- **Stack-based panel navigation** — a static `PanelControl` singleton driving a `Stack<Panel>` of prefab screens (start / editor / export / file browser / popup), each pushed and popped by `PanelType`.
- **Spine skin customizer** — a composite `customSkin` layered over the default: attachment remapping per part via a JSON part → slot map, `GetRemappedClone` runtime region attachments, per-part color tinting, and a 5-level face-mask system.
- **Editor UI** — category tabs (head / hair / face / body / costume / prop), a JSON-driven item grid, bone-scale and symmetric eye-spacing sliders, and a hex color picker.
- **Custom image import** — native OS file dialogs (`StandaloneFileBrowser`) to pull user images into the hat / shirt slots, with in-app `SimpleFileBrowser` picking.
- **Offscreen export** — reconstructs the mascot at 1080×1080, plays any Spine animation, and renders a `RenderTexture` to PNG (or JPG on a white background) via a native save dialog.
- **Persistence** — Newtonsoft JSON save / load of the full mascot spec (item ids, scale, color) plus imported images to disk.
