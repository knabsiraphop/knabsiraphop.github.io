# Project images go here

Suggested layout — one folder per project slug:

```
public/img/projects/zabbworld/cover.jpg
public/img/projects/zabbworld/screenshot-1.jpg
public/img/projects/pakapow/cover.jpg
```

Wire them up in `src/content/projects/<slug>.md`:

```yaml
cover: "/img/projects/<slug>/cover.jpg"   # card thumbnail (16:9 looks best, ~1280x720)
hero:
  type: "image"
  src: "/img/projects/<slug>/cover.jpg"   # large image on the detail page
```

For a YouTube trailer instead of an image, use:

```yaml
hero:
  type: "video"
  src: "https://youtu.be/XXXXXXXXXXX"      # or the full watch URL
```

Until a `cover` / `hero.src` is set, the site shows a styled "coming soon" placeholder —
nothing breaks, so you can fill these in any time.
