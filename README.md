# Portfolio

**Live:** https://kur3kevin-portfolio.netlify.app (also https://kur3kevin.github.io/portfolio/)

Personal portfolio: GitHub projects, AI agent skills (Claude, Codex, Hermes), and generated images/video.

Plain HTML/CSS/JS — no build step. Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Updating content

Everything is in **`data.js`**:

- `repos` — GitHub projects to feature (`featured: true` pins one to the top)
- `skills` — agent skills; put the skill folder in `skills/claude`, `skills/codex`, or `skills/hermes` and add an entry
- `media` — drop files in `media/images` or `media/videos` and add an entry

## Hosting

Netlify auto-deploys every push to `main`. GitHub Pages is also enabled:
Enable GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/`) and the site goes live at
`https://<username>.github.io/portfolio/`.
