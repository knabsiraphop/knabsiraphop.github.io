# knabsiraphop.github.io

Personal portfolio for **Siraphop Puriwattanakul (Knab)** — Unity Game Developer.
Dark, game-styled multi-page site built with [Astro](https://astro.build), with playable
WebGL demos, per-project deep-dives, and a downloadable résumé.

Live URL (after deploy): **https://knabsiraphop.github.io**

---

## Develop

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the built site locally |

Requires Node 18.20.8+ / 20.3+ / 22+.

---

## Project structure

```
src/
  content/projects/*.md   # one markdown file per project (the source of truth)
  content.config.ts       # project frontmatter schema
  pages/                  # index.astro, projects/index.astro, projects/[slug].astro, 404.astro
  components/             # Nav, Footer, Hero bits, ProjectCard, SkillsGrid, WebGLEmbed, Icon
  layouts/BaseLayout.astro
  styles/global.css       # dark theme tokens + base styles
  data/site.ts            # name, contact links, skills
public/
  img/projects/           # screenshots / covers   (see its README)
  games/                  # Unity WebGL builds      (see its README)
  resume/                 # the résumé PDF
  headshot is at img/headshot.jpg
```

## Adding / editing content

- **Edit a project:** change its file in `src/content/projects/`. Frontmatter controls the
  card and detail header; the markdown body is the "What I built" section.
- **Add a screenshot or cover:** drop the image in `public/img/projects/<slug>/` and set
  `cover` / `hero.src` in the project's frontmatter. See `public/img/projects/README.md`.
- **Add a playable WebGL demo:** put the build in `public/games/<slug>/` and set
  `hero.type: "webgl"` + `hero.src: "/games/<slug>/"`. See `public/games/README.md`
  (note the GitHub Pages compression setting).
- **Update contact links / skills:** edit `src/data/site.ts`.
- **Update the résumé:** replace `public/resume/Siraphop_Puriwattanakul_Resume.pdf`.

Missing media never breaks the build — the site shows a styled "coming soon" placeholder
until you add the real asset.

---

## Deploy (GitHub Pages)

1. Create a GitHub repo named exactly **`knabsiraphop.github.io`**.
2. Push this folder to its `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

The site is served at the domain root, so `astro.config.mjs` keeps `base` as `/`.
