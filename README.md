# Yaksha Research Labs

Professional static cybersecurity research and education website designed for GitHub Pages.

## Project structure

- `index.html` — homepage
- `research/` — research index and article pages
- `labs/` — laboratory index and lab pages
- `challenges/` — research challenge index and pages
- `learning-paths/` — structured learning routes
- `field-notes/` — shorter practical observations
- `research-log/` — living research activity
- `open-research/` — open research questions
- `resources/` — curated references
- `content/` — reusable Markdown content/data source
- `public/assets/` — CSS and JavaScript
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `CNAME` — custom domain

## Local development

This first version is intentionally dependency-light and can be previewed with any static HTTP server. For example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages deployment

1. Create a GitHub repository, for example `yaksha-research-labs`.
2. Push the project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **GitHub Actions**.
5. The included workflow publishes the repository as a static site.
6. The `CNAME` file sets the custom domain to `yaksharesearchlabs.com`.
7. Configure DNS at the domain registrar to point the custom domain at GitHub Pages.

No server-side runtime, database, API key or application secret is required.

## Adding content

The public pages are generated as static HTML in this initial implementation. To add a research article, create a Markdown source file under `content/research/` using the existing metadata fields, then create its corresponding static route under `research/<slug>/index.html`.

The same pattern applies to:

- `content/labs/`
- `content/challenges/`
- `content/field-notes/`
- `content/learning-paths/`

The reusable content model is intentionally kept separate from presentation so a future Astro/Jekyll migration can consume the same content files.

## Site configuration

The primary domain is currently `https://yaksharesearchlabs.com`. Update the canonical URLs in the generated HTML and `public/sitemap.xml` if the domain changes. The contact address is intentionally represented as `research [at] yaksharesearchlabs.com` until the real mailbox is configured.

## Design principles

Research. Experiment. Understand.

The site deliberately avoids a course-marketplace aesthetic, fabricated social proof, invasive analytics and unnecessary backend functionality.
