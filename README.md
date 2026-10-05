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

Add `email: "you@example.com"` to `_config.yml` with the public address you
want visitors to use. The mailto link appears only when an address is configured.
Add real dates and additional work details only when
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
bundle install
bundle exec jekyll serve --livereload
```

Then open `http://localhost:4000`. To check the build alone, run
`bundle exec jekyll build`. If Bundler is not available, install Ruby and Bundler
using the official Jekyll documentation for your operating system. Do not add
`package.json` or a Node application to this repository.

## Lighthouse

With the local site running, run Lighthouse against the home page and each
internal page at both a mobile width around 375px and a desktop width around
1280px. The target is 90 or higher for Performance, Accessibility, Best
Practices, and SEO. The site avoids remote fonts, third-party scripts, and
tracking to keep those scores high. In Chrome DevTools, open **Lighthouse**,
select all four categories, select **Mobile** or **Desktop**, then generate
a report. Use the Device Toolbar to check widths of 375px and 1280px separately.

## Assumptions and content still needed

- This is a GitHub user site, with the repository name matching the username.
- Employment dates, Samagra job title, and a public email address are intentionally
  not invented. Supply these to replace the labeled placeholders.
- The internship wording retains the supplied “summer 2026” timeline. Update it
  when your recruiting focus changes.
- The design references the supplied site's warm palette and typography only;
  biography and achievements come exclusively from the pasted text.

## Important choices

GitHub Pages supports the SEO and sitemap plugins used here without a custom
build workflow. `baseurl` is empty for a user site and internal links use
`relative_url`. System fonts avoid remote font requests, and the site works
without JavaScript; the optional theme toggle is the only enhancement.

## Verification

The initial build was checked using Jekyll 3.10 in safe mode. All four pages
and the 404 page were checked at 375px and 1280px with no horizontal overflow.
Navigation, anchor targets, theme persistence, and reading without JavaScript
were checked.

Lighthouse results on the local Jekyll preview:

| Page | Mobile Performance | Desktop Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- | --- |
| Home | 99 | 100 | 100 | 100 | 100 |
| About | 99 | 100 | 100 | 100 | 100 |
| Work Experience | 100 | 100 | 100 | 100 | 100 |
| Contact | 100 | 100 | 100 | 100 | 100 |

Scores are measurements of the preview, not guarantees for the published site.
Re-run Lighthouse after publishing or changing content.