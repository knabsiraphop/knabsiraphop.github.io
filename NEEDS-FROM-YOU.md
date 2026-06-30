# 📋 What the site still needs from you

The site is fully built and deploys as-is. Every item below is **optional polish** — until
you add an asset, the page shows a clean "coming soon" placeholder, nothing is broken.

Tackle these in any order.

---

## ✅ Already done (using what we had)

- **Headshot** — your existing photo, optimized to `public/img/headshot.jpg` (45 KB). Replace if you want a different one.
- **Résumé** — `Siraphop_Puriwattanakul_Resume_30_06.pdf` copied to `public/resume/Siraphop_Puriwattanakul_Resume.pdf`. Re-export over this file to update.
- **Contact links** — email, GitHub, LinkedIn wired from `src/data/site.ts`. ⚠️ **Please verify the LinkedIn URL** (`linkedin.com/in/siraphop-p`).

---

## 1. 🎮 Playable WebGL builds (you said you have some)

Drop each build into `public/games/<slug>/`, then set `hero.src: "/games/<slug>/"` in the project file.
**Build with "Decompression Fallback" ON** (Unity → Player Settings → Publishing) or it won't load on GitHub Pages.

| Project | Slug / folder | Have a build? |
|---|---|---|
| Once Pro Shoot | `public/games/once-pro-shoot/` | ☐ |
| Rescue Meow Meow | `public/games/meow-meow-rescue/` | ☐ |

> Tell me which builds you have and I'll wire them in.

## 2. 🖼️ Screenshots / cover images

Drop images in `public/img/projects/<slug>/` and set `cover:` (card) + `hero.src:` (detail) in each file.
Best impact first:

| Project | Needs |
|---|---|
| ZabbWorld: Secret Stories | cover + a few screenshots (and a trailer if you have one) |
| Dream Runner X | cover + screenshots |
| Pakapow | cover + screenshots |
| Cat vs Aliens | cover + screenshots |
| Fishing Town | cover + screenshots |
| Unity Editor Tools | a screenshot of the avatar / furniture tool |
| Freelance | one image per project (Mascot / SolarYield / AvatarCustom) |

## 3. 🎬 Trailers (optional)

For any project with a YouTube video, set in its frontmatter:
```yaml
hero:
  type: "video"
  src: "https://youtu.be/XXXXXXXXXXX"
```
ZabbWorld is currently set to `type: video` and shows a "trailer coming soon" placeholder.

## 4. 🔗 Store / external links (optional)

If any title is publicly listed, add links in the project's frontmatter:
```yaml
links:
  playstore: "https://play.google.com/store/apps/details?id=..."
  appstore: "https://apps.apple.com/app/id..."
  play: "https://...."      # external playable build
```

## 5. ✨ Nice-to-haves (optional)

- **Custom social-share image** — a 1200×630 PNG at `public/img/og-default.png`, then change the default in `src/layouts/BaseLayout.astro` (currently falls back to your headshot).
- **Apple touch icon** — a 180×180 PNG `public/apple-touch-icon.png` for iOS bookmarks.
- **Custom domain** — e.g. `siraphop.dev` (point DNS at GitHub Pages, add a `CNAME` file).

---

## 🚀 To put it online

1. Create a GitHub repo named exactly **`knabsiraphop.github.io`**.
2. Push this folder to `main` (steps printed in chat / see `README.md`).
3. Repo **Settings → Pages → Source = GitHub Actions**.
4. Done — it builds and deploys automatically at **https://knabsiraphop.github.io**.
