<!-- Copilot instructions for the Yerim Oh portfolio site -->
# Copilot / AI Assistant Guidance

Purpose
- Small, static multi-page portfolio (no build tool). Make minimal, targeted edits and document changes.

Big picture
- Static HTML pages served directly: see [index.html](index.html), [projects.html](projects.html), [contact.html](contact.html).
- Single shared interactive behavior lives in [main.js](main.js): language toggle, active nav highlighting, and simple tab handling.
- Styling is centralized in [style.css](style.css) (CSS variables + responsive rules).

Key patterns & examples
- Internationalization: pairs of elements use `data-en` / `data-ko`. Toggle sets `body.ko` and stores `portfolio-lang` in localStorage. To add localized content, include both variants:

  <p data-en>English text</p>
  <p data-ko>한국어 텍스트</p>

- Tabs: add a `.tab-btn` with `data-target="<id>"` and a corresponding `.tl-view` element with that `id`. See `initTabs()` in [main.js](main.js).
- Active nav: nav links are literal HTML files (e.g., `experience.html`); `initNav()` marks `.nav-links a` by comparing `window.location.pathname`.
- Project cards: `.proj-card` elements link directly to external GitHub repos (no internal routing).

Developer workflows
- No package.json or build step. Preview locally with a static server, for example:

  macOS / Python 3:
  ```bash
  python3 -m http.server 8000
  open http://localhost:8000
  ```

- For live-reload while editing, use VS Code Live Server extension.
- There are no automated tests or CI configured in the repo; treat changes as static site edits and validate in-browser across pages.

Conventions & cautions
- Keep nav/footer consistent across pages — they are duplicated HTML fragments, not templated. Update every page when changing header/footer.
- Avoid introducing build tooling without user approval; this repo intentionally uses plain HTML/CSS/JS.
- JS is lightweight and DOM-driven; prefer small, imperative changes rather than adding heavy frameworks.

Integration points & external deps
- External links to GitHub repos and social links in `projects.html` and `contact.html` (external navigation only).
- Contact page uses `mailto:`; there is no server-side form handling in the repo.

When editing
- Prefer minimal, reversible commits. Example safe changes:
  - Add a new project card in [projects.html](projects.html) following existing `.proj-card` markup.
  - Add new localized copy by adding paired `data-en`/`data-ko` elements.
  - Extend CSS by adding variables at the top of [style.css](style.css) and using existing utility classes.

Where to look first
- Interactive behaviors: [main.js](main.js)
- Site chrome & content: [index.html](index.html), [projects.html](projects.html), [contact.html](contact.html)
- Styles and theme variables: [style.css](style.css)

Questions for the author
- Would you prefer moving shared header/footer into an include/template system (Jekyll/GitHub Pages/_includes) or keep raw HTML pages?
- Do you want automated previews (GitHub Pages) on push?

If anything in this guidance looks incomplete or you want a different tone (more/less prescriptive), tell me what to update.
