# WebGL builds go here

Drop each Unity WebGL build in its own folder named after the project slug, e.g.:

```
public/games/once-pro-shoot/      <- contains index.html, Build/, TemplateData/
public/games/meow-meow-rescue/
```

Then in the matching content file (`src/content/projects/<slug>.md`) set:

```yaml
hero:
  type: "webgl"
  src: "/games/<slug>/"          # note the trailing slash
  poster: "/img/projects/<slug>/poster.jpg"   # optional thumbnail behind the Play button
```

The site lazy-loads the build only when the visitor clicks **▶ Play in browser**, so large builds don't slow the page.

## IMPORTANT — GitHub Pages compression

GitHub Pages does not send the `Content-Encoding` header Unity expects for Brotli/Gzip
builds, which makes them fail to load. When you produce the build, in Unity:

**Player Settings → Publishing Settings →**
- enable **Decompression Fallback**, **or**
- set **Compression Format = Disabled**.

Either option makes the build load correctly on GitHub Pages.
