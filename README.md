# Rust & Roll Hauling — Website

One-page static site for Rust & Roll Hauling (junk removal · junk/scrap cars · light equipment hauling, North San Diego County). No build step, no backend — plain HTML/CSS/JS.

**Published files:** `index.html` · `robots.txt` · `sitemap.xml`
(Internal docs `SETUP.md` and `landing-page-copy.md` are git-ignored — they stay local, not on the public site.)

## Preview locally

```powershell
& "$env:LocalAppData\Programs\Python\Python314\python.exe" -m http.server 8000
```
Then open http://localhost:8000. (Serving over http — not double-clicking the file — correctly tests the quote form and the robots/sitemap paths.)

## Publish (first time)

```powershell
git init
git add .
git commit -m "Initial site"
# create an empty repo on github.com (e.g. rust-and-roll-site), then:
git remote add origin https://github.com/<your-username>/rust-and-roll-site.git
git branch -M main
git push -u origin main
```

Then pick one host:

- **GitHub Pages:** repo → Settings → Pages → Source = `main` branch, root → live at `https://<your-username>.github.io/rust-and-roll-site/`
- **Netlify:** app.netlify.com → Add new site → Import from Git → pick the repo → Deploy

Both are free, include HTTPS, and **auto-redeploy on every `git push`** — so updates are just: edit → commit → push.

## Custom domain

Buy `rustandrollhauling.com` (Cloudflare/Namecheap) and add it in Pages or Netlify domain settings. The SEO tags already point at that domain.

> ⚠️ **If you launch on a `*.github.io` or `*.netlify.app` subdomain instead of the custom domain,** update the URLs in `index.html` (`<link rel="canonical">` and `og:url`), `robots.txt`, and `sitemap.xml` to match — otherwise search engines and share previews point at the wrong address.

## Post-launch upgrades (optional, never block go-live)

- **Web3Forms key** → form emails you instead of opening a pre-filled text (see local `SETUP.md`)
- **Calendar embed** → real bookable slots
- **Photos** → 2–3 before/after shots + a 1200×630 `og-image.jpg` for share previews

## Note

This repo holds **only** the website. Don't add resumes, business plans, client docs, or any personal files — those stay in the private Workplace tree, off GitHub.
