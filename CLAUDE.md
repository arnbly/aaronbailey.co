# Aaron Bailey — Personal Portfolio Site

## Project overview

Personal portfolio site for Aaron Bailey, Director of Product Design. Built to serve as a credibility signal for recruiters and hiring managers reviewing his LinkedIn or resume. The site targets Director and Principal Design roles at ambitious companies.

**Live domain:** `aaronbailey.co` (domain already owned)
**Stack:** Astro 4 (static output) + plain CSS + vanilla JS
**Deploy target:** GitHub Pages via GitHub Actions

---

## Running locally

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # production build → dist/
```

The `.claude/launch.json` is already configured — use `preview_start` with the `portfolio-dev` configuration.

---

## Project structure

```
src/
  components/       # One Astro component per page section
    Nav.astro
    Hero.astro
    Work.astro       # Work list + modal logic (all in one file)
    About.astro
    Philosophy.astro
    Companies.astro
    Writing.astro
    Contact.astro
    Footer.astro
  data/
    work.js          # All case study content lives here — edit this to update work
  pages/
    index.astro      # Single page, imports all components
  styles/
    global.css       # All styles + CSS custom properties (design tokens)
public/
  images/
    logo-dark.png    # Brand mark — dark version (used in nav, footer)
    logo-light.png   # Brand mark — light version (for dark backgrounds)
    headshot-1.png   # Aaron's headshot — used in Hero
    headshot-2.png   # Alternate headshot (unused)
  CNAME             # aaronbailey.co — required for GitHub Pages custom domain
.github/
  workflows/
    deploy.yml       # Auto-builds and deploys to GitHub Pages on push to main
```

---

## Design system

Defined entirely in `src/styles/global.css` as CSS custom properties:

```css
--bg:           #F7F2EA   /* warm cream — primary background */
--bg-subtle:    #EFE8DB   /* slightly darker cream — photo panel, placeholders */
--text:         #1A1C24   /* dark navy — primary text (matches logo mark) */
--text-muted:   #8A837A   /* secondary text */
--text-faint:   #B5AFA8   /* tertiary — labels, dates, tags */
--accent:       #B8935A   /* warm amber — eyebrows, badges, hover states */
--border:       #DDD5C8   /* dividers */
```

**Typography:**
- Display / headlines: `Fraunces` (Google Fonts) — weight 200–400, italic used for emphasis
- Body / UI: `Inter` (Google Fonts) — weight 300–500

---

## Page sections (in order)

1. **Nav** — Fixed, blurs/borders on scroll. Logo mark left, nav links right.
2. **Hero** — Full-height two-column layout. Left: headline + subtext. Right: full-height photo panel. Headline uses Fraunces with italic on the word "teams".
3. **Work** — Editorial list rows (year / company / role / tags / arrow). Clicking any row opens a modal.
4. **About** — Two-column layout (label left, narrative text right). Warm, personal tone — not metrics-forward.
5. **Philosophy** — Three design principles in a 3-column grid. Italic intro quote above.
6. **Companies** — "Previously" typographic strip of past employers. Large Fraunces, muted until hover.
7. **Writing** — Placeholder section. Ready for articles — just needs the Astro content collection wired up.
8. **Contact** — Large serif CTA headline + email and LinkedIn links.
9. **Footer** — Copyright left, logo mark right (links back to top).

---

## Work modal

The modal pattern is inspired by Ryo Lu's portfolio (work.ryo.lu) — a scrollable white panel over a dimmed backdrop.

**How it works:**
- All modal logic is in `src/components/Work.astro` (bottom `<script>` block)
- Project data (copy, tags, sections) lives in `src/data/work.js`
- Modal opens on row click, closes on X / Escape / click-outside
- Smooth scale + fade entrance animation

**Current projects:**
1. `tezi` — AI Product Pivot (Founding Designer & Director, acquired by Notion)
2. `wealthfront` — Bond Ladder (Lead Product Designer)
3. `instacart` — Ads B2B Vision (Design Lead)

To add a project: add an entry to the `projects` array in `src/data/work.js`. It will appear automatically.

---

## Things still needing Aaron's input

- [ ] **Email** — `hello@aaronbailey.co` is assumed. Confirm or update in `About.astro` and `Contact.astro`.
- [ ] **LinkedIn URL** — currently `linkedin.com/in/aaronbailey`. Update in `About.astro` and `Contact.astro`.
- [ ] **Résumé PDF** — drop at `public/resume.pdf` (linked from About section as `/resume.pdf`).
- [ ] **Headshot** — `headshot-1.png` is a 500×500 square crop. A taller portrait would fill the hero panel more elegantly.
- [ ] **Work copy** — narratives in `src/data/work.js` are thoughtful placeholders. Aaron should review and adjust to his voice.
- [ ] **Work images** — modal cover and image placeholders need real screenshots. Add to `public/images/` and update `src/components/Work.astro`.
- [ ] **GitHub repo** — not yet created. See deployment instructions in `README.md`.
- [ ] **Writing section** — placeholder only. When ready, wire up an Astro content collection in `src/content/writing/`.

---

## Deployment

Not yet deployed. Full instructions are in `README.md`. Summary:

1. Create a GitHub repo and push this directory to `main`
2. Enable GitHub Pages → source: GitHub Actions (workflow is already written)
3. Set DNS records at registrar for `aaronbailey.co` (A records + CNAME for `www`)
4. Add custom domain in GitHub Settings → Pages

The `CNAME` file (`public/CNAME`) is already in place.

---

## Owner context

- **Name:** Aaron Bailey
- **Title:** Director of Product Design
- **Background:** BFA in Graphic Design + Mechanical Engineering concentration
- **Recent:** Founding Designer at Tezi (AI startup, acquired by Notion 2024)
- **Past:** Wealthfront, Instacart, Thumbtack, Earnest, RelateIQ (acq. Salesforce)
- **Positioning:** Leader/Director level — site should feel calm, confident, editorial. Not metrics-boastful. Warm + personal in the style of jasonjam.es, with the restraint of alexandrafitzroy.com.
- **Accent color:** `#B8935A` (warm amber) — can be adjusted if Aaron wants a different direction
