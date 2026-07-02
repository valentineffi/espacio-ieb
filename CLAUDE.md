# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

Serve the folder with any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

**Build step (required after editing UI):** the JSX in [app.jsx](app.jsx) is compiled to `app.js` — `index.html` loads the compiled `app.js`, not the JSX. After any change to `app.jsx`, run:

```bash
node compile.js   # app.jsx → app.js (Babel, classic runtime)
```

The contact form is a Cloudflare Pages Function ([functions/api/contact.js](functions/api/contact.js)) that sends mail via Resend; local testing of that endpoint needs `wrangler pages dev`.

## Architecture

This is a **single-page static website** — no bundler at runtime. React 18 is **self-hosted** (`assets/react.production.min.js`, `assets/react-dom.production.min.js`) and loaded with `defer`; there is no in-browser Babel — JSX is pre-compiled to `app.js` at build time.

**Key files:**
- [app.jsx](app.jsx) — **source of truth** for all React components. Edit this, then `node compile.js`.
- `app.js` — compiled output loaded by `index.html`. **Do not edit by hand.**
- [index.html](index.html) — HTML shell, SEO metadata (Open Graph, JSON-LD schemas), `<noscript>` crawler fallback, and inline CSS `:root` tokens. Loads `app.js`.
- [functions/api/contact.js](functions/api/contact.js) — Cloudflare Pages Function for the contact form (Resend).
- [styles.css](styles.css) — component/layout styles. **Used directly only by the secondary pages** (faq/sobre/privacidad, which `<link>` it).
- [assets/colors_and_type.css](assets/colors_and_type.css) — design system foundation: CSS custom properties for color tokens and typography
- [annotator.js](annotator.js) — standalone feedback annotation tool; only injected on localhost

> ⚠️ **CSS is duplicated for the homepage.** `index.html` does **not** link `styles.css` — its CSS is fully **inlined** in a `<style>` block (a PageSpeed optimization done once by [patch-index.js](patch-index.js), which is a one-time migration, not a repeatable build). Any CSS change for the homepage must be made **in both** `styles.css` (source of truth / secondary pages) **and** the inline `<style>` in `index.html`. Editing only `styles.css` has no effect on the homepage.

> ⚠️ **Image sizing gotcha:** `<img>` tags with both `width` and `height` attributes ignore CSS `aspect-ratio` unless you also set `height: auto`. Photo slots (`.espacio-ieb-*`, `.hosp-card-media`, `.gf-mockup`) rely on this.

## Design System

Enforced entirely via CSS custom properties defined in [assets/colors_and_type.css](assets/colors_and_type.css).

Color philosophy: **60/30/10** — Black (dominant), White (secondary), Yellow accent (`--color-amarillo`).

Typography: Poly Sans family (Slim 300, Neutral 400, Median 500, Bulky 700 + Italic and Mono variants), served from local OTF files in [assets/fonts/](assets/fonts/).

Pattern assets (SVGs for backgrounds): [assets/tramas/](assets/tramas/) — diagonal, grid, isometric, radial.

Logo variants: [assets/logos/](assets/logos/) — monogram and full branding on dark/light backgrounds.

## Content & Brand

**IEB External Advisors** — the program brand for Grupo IEB's proposal to independent financial advisors and agentes productores in Argentina (Núñez, Buenos Aires). "Grupo IEB" is the umbrella organization; "Espacio IEB" is the name of the physical workspace (one section), not the site brand.

- **Primary domain:** `www.iebexternaladvisors.com.ar`
- **Contact form recipient:** `iebexternaladvisors@grupoieb.com.ar` (via `CONTACT_TO` env var in the Cloudflare Function)

Landing sections (in [app.jsx](app.jsx)): Nav, Hero, Simulador, Partners, Grupo IEB, Espacio IEB (office photos), Hospitalities (venue benefits), Grow Finance (white-label app), Tecnología, FAQ, Acceso (contact form), Footer.

Photos live in [assets/fotos/](assets/fotos/) (optimized from the raw `Fotos Espacio/` folder). Brand assets in [assets/logos/](assets/logos/): `ieb-monogram-on-dark.svg` (favicon) + PNG raster sizes; social card is `og-image.jpg` (1200×630).

JSON-LD schemas embedded in `index.html`: Organization (Grupo IEB), LocalBusiness + FinancialService (Espacio IEB), WebPage/WebSite (IEB External Advisors), BreadcrumbList, FAQPage.

> **Fonts:** Poly Sans files in `assets/fonts/` are trial versions — a commercial license (or a Google Fonts substitute) is required before public go-live under the real domain.
