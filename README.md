# Bhavya Berlia — personal portfolio

This repository is a static Jekyll site for `bhavyaberliaa.github.io`. The
site is intentionally built with Markdown, Liquid templates, plain HTML, CSS,
and a small progressive-enhancement script. There is no backend, database,
package manifest, tracker, or form service.

## Update the content

- `index.md` contains the home page.
- `about.md` contains the personal narrative and working principles.
- `experience.md` contains work history.
- `contact.md` contains contact options and the public email placeholder.
- `_includes/` contains the shared header, footer, and SEO head.
- `assets/css/style.css` contains the visual system and responsive rules.
- `assets/js/theme.js` contains the light/dark theme toggle.

Replace `your.email@example.com` in `contact.md` with the public address you
want visitors to use. Add real dates and additional work details only when
they are available; the current placeholders are intentional.

## Publish with GitHub Pages

1. Create or use the repository named `bhavyaberliaa.github.io` under the
   `bhavyaberliaa` GitHub account.
2. Push this repository's `main` branch.
3. In GitHub, open **Settings → Pages** and choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.

The repository already contains the Jekyll configuration, sitemap, favicon, and
SEO tags needed for a root-level GitHub Pages build. No manual build step is
needed.

## Preview locally

If Ruby and Bundler are installed, run:

```bash
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`. If Bundler is not available, install Jekyll
using the official Jekyll documentation for your operating system. Do not add
`package.json` or a Node application to this repository.

## Lighthouse

With the local site running, run Lighthouse against the home page and each
internal page at both a mobile width around 375px and a desktop width around
1280px. The target is 90 or higher for Performance, Accessibility, Best
Practices, and SEO. The site avoids remote fonts, third-party scripts, and
tracking to keep those scores high.