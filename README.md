# TATHVA — Tradition Meets Trend

Static Next.js (App Router, JavaScript) site with Tailwind, GSAP ScrollTrigger and Framer Motion.
No backend, no API routes, no CMS, no generated or stock imagery.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

`next.config.mjs` uses `output: "export"`, `trailingSlash: true`, `images.unoptimized: true`.
Upload the contents of `out/` to cPanel / Netlify / Vercel / any static host.

**Note:** `npm run build` downloads Cormorant Garamond and Inter from Google Fonts at build time
(then self-hosts them). The build machine therefore needs internet access once.

## Before launch

1. Set `url` in `config/siteConfig.js` to the production domain (canonical + Open Graph).
2. Fill `visit.address / phone / email`. Empty fields are not rendered.

## Adding real photography

Drop optimized files into `public/images/` and set the path in `config/siteConfig.js`:

| Key | Used in |
| --- | --- |
| `images.logo` | Navbar + footer wordmark (falls back to text) |
| `images.boutique` | Hero background + Boutique Experience |
| `images.sarees / suits / kurtis / indoWestern / lehengas` | Category sections + hover thumbnails |

Aim for < 300 KB hero, < 150 KB others. No other code changes needed.

## Structure

- `config/siteConfig.js` — all brand copy, nav, categories, images, contact
- `hooks/useGsap.js` — gsap.matchMedia wrapper (desktop / mobile / reduced-motion + cleanup)
- `components/Reveal.jsx` — shared scroll-reveal system (`.reveal`, `.reveal-line`, `.stagger-item`, `.reveal-img`)
- `components/CategorySection.jsx` — shared editorial layout for the five category sections
- GSAP = scroll-driven animation. Framer Motion = UI interaction (menu, hover, buttons).
