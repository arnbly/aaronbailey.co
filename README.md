# aaronbailey.co

Personal portfolio site. Built with [Astro](https://astro.build) — static output, zero JS by default, deploys to GitHub Pages.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

---

## Before you publish — checklist

A few things to verify before pushing live:

**Content**
- [ ] Confirm email address in `src/components/About.astro` and `src/components/Contact.astro`
- [ ] Update LinkedIn URL in `src/components/About.astro` and `src/components/Contact.astro`
- [ ] Drop your résumé PDF at `public/resume.pdf` (linked from the About section)
- [ ] Review and edit the About copy in `src/components/About.astro`
- [ ] Review the three design principles in `src/components/Philosophy.astro`

**Work**
- [ ] Edit project narratives in `src/data/work.js`
- [ ] Add cover images: drop PNGs/JPGs in `public/images/` and update `modal-cover` in `src/components/Work.astro`

**Headshot**
- [ ] The current photo (`headshot-1.png`) is a 500×500 crop — replace with a higher-res landscape or portrait shot for best results in the hero panel

---

## Deployment to GitHub Pages

### 1. Create a GitHub repository

Go to [github.com/new](https://github.com/new) and create a new repository. The name can be anything (e.g. `aaronbailey-portfolio` or `aaronbailey.co`).

### 2. Push this code

```bash
cd /Users/aabailey/aaronbailey-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

In your repo on GitHub:
1. Go to **Settings → Pages**
2. Under **Build and deployment**, select **GitHub Actions** as the source
3. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`

### 4. Set up your custom domain DNS

In your domain registrar (wherever you manage `aaronbailey.co`), add these records:

**A records** (apex domain `@`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**AAAA records** (IPv6, optional but recommended):
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**CNAME record** (`www` subdomain):
```
www  →  YOUR_USERNAME.github.io
```

DNS changes can take up to 24 hours to propagate, though usually much faster.

### 5. Add custom domain in GitHub

In **Settings → Pages → Custom domain**, enter `aaronbailey.co` and save. GitHub will automatically provision an SSL certificate via Let's Encrypt.

---

## Adding a writing article

When you're ready to publish, create a Markdown file in `src/content/writing/` (you'll need to add that collection — ask Claude for help setting it up). Each `.md` file becomes a page automatically.

---

## Project structure

```
src/
  components/     # Page sections (Nav, Hero, Work, About, etc.)
  data/
    work.js       # Project content — edit this to update case studies
  pages/
    index.astro   # Main page
  styles/
    global.css    # All styles + design tokens
public/
  images/         # Logos, headshot, project images
  CNAME           # Custom domain config (aaronbailey.co)
  resume.pdf      # Drop your résumé here
.github/
  workflows/
    deploy.yml    # Auto-deploy to GitHub Pages on push
```
