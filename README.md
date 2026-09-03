# konstantinlaptev.pro

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro)](https://astro.build)
[![Deployed on Cloudflare](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

Personal portfolio of **Konstantin Laptev** — Video Technical Manager and Senior
disguise Operator, Dubai. Projection mapping, media server programming and
site-wide video systems for large-scale live events.

**Live:** [konstantinlaptev.pro](https://konstantinlaptev.pro)

---

## Stack

| | |
|---|---|
| Framework | [Astro](https://astro.build) 5 — SSR via the Cloudflare adapter |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 (Vite plugin) |
| Content | Astro Content Collections — markdown + JSON |
| Images | [sharp](https://sharp.pixelplumbing.com) |
| Code blocks | [Expressive Code](https://expressive-code.com) |
| Hosting | Cloudflare Pages |
| Forms | [Formspree](https://formspree.io) |

No UI framework — everything is plain Astro components.

## Getting started

```bash
npm install
cp .env.example .env     # fill in the values below
npm run dev              # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm run dev` | Dev server on port 4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm run astro ...` | Astro CLI (`astro check`, `astro add`, …) |

### Environment

| Variable | Purpose |
|---|---|
| `FORMSPREE_FORM_ID` | Contact form endpoint id. Without it the form tells visitors to email instead of failing silently. Public by design — it is visible in the request. |
| `GTM_ID` | Google Tag Manager container. Leave empty to disable. |

Set the same variables in Cloudflare Pages → Settings → Environment variables;
they are read at build time.

## Structure

```text
src/
├── assets/            # images processed at build time
├── components/
│   ├── home/          # homepage sections — hero, about, experience, projects
│   ├── navs/          # navbar, mobile nav, footer
│   ├── shared/        # background art, theme switcher, social links
│   └── ui/icons/      # inline SVG icons
├── content/
│   ├── about/         # about copy (markdown)
│   ├── experience/    # one file per role
│   └── projects/      # one file per project — the main content
├── data/              # JSON: socials, media servers, hardware, pre-production tools
├── layouts/           # base layout: meta tags, JSON-LD, theme bootstrap
├── pages/             # file-based routes
├── lib/ · utils/      # helpers
└── styles/            # global CSS, theme tokens
```

**Routes:** `/` · `/projects` · `/resources` · `/contact` · `/404` · `/robots.txt`

## Content model

Projects are the substance of the site. Each is one markdown file in
`src/content/projects/`:

```yaml
---
title: "One Za'abeel Grand Opening"
description: "Short blurb for the card — one fact that lands."
year: 2024
featured: true          # show on the homepage
order: 1                # curated position; falls back to year descending
cover_image: /projects/covers/one-zabeel-opening.jpg
image_credit: "Image: disguise"
tech: ["disguise", "Projection Mapping", "Media Servers"]
made_at: 'MediaPro International LLC'
location: 'Dubai, UAE'
external_link: "https://…"
video_url: "https://youtu.be/…"    # optional — adds a Watch Video button
---

Full description, shown in the modal.
```

Covers are 1600×900 JPEG in `public/projects/covers/`; `placeholder.png` is the
fallback. `video_url` accepts normal YouTube, `youtu.be` and Vimeo links — they
are normalised to embed URLs at runtime.

Themes: light and dark, switched via a class on `<html>` and persisted to
`localStorage`. The palette is neutral greys plus one accent — bright cyan on
dark, a deeper cyan on light so it stays readable as a text colour.

## Deployment

Pushes to `main` deploy to Cloudflare Pages automatically; pull requests get
preview deployments. `astro.config.mjs` holds the canonical site URL, which
drives the sitemap and canonical tags.

## Credits

Built on the [astro-portfolio-v3](https://github.com/lewis-kori/astro-portfolio-v3)
template by **Lewis Kori**, used under the MIT licence. The original structure,
layout system and theme switcher come from that project; the content, design
decisions and most of the components have since been reworked.

## Licence

The code is MIT — see [LICENSE](LICENSE).

**The content is not.** Project write-ups, copy and photographs are the property
of Konstantin Laptev or the credited rights holders (each project card names the
source of its image) and are not covered by the MIT licence. Please don't reuse
them.
