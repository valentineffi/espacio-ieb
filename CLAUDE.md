# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the Project

No build step or package manager. Open `index.html` directly in a browser, or serve it with any static file server:

```bash
python3 -m http.server 8080
# or
npx serve .
```

## Architecture

This is a **single-page static website** — no bundler, no npm. React 18 and Babel are loaded via CDN and transpilation happens in the browser at runtime.

**Key files:**
- [index.html](index.html) — the entire application: HTML structure, SEO metadata (Open Graph, JSON-LD schemas), and a large inline `<script type="text/babel">` containing all React component code
- [app.jsx](app.jsx) — a reference/backup copy of the JSX from index.html; kept in sync manually but not directly executed
- [styles.css](styles.css) — all layout and component styles
- [assets/colors_and_type.css](assets/colors_and_type.css) — design system foundation: all CSS custom properties for color tokens, typography scale, and semantic role definitions
- [annotator.js](annotator.js) — a standalone feedback annotation tool injected at the bottom of index.html; activated by the "✏ Anotar" button

**React components live inside the `<script type="text/babel">` block in index.html.** When editing React logic or JSX, edit that block — not app.jsx. If app.jsx is kept as a sync copy, update it too.

## Design System

Enforced entirely via CSS custom properties defined in [assets/colors_and_type.css](assets/colors_and_type.css).

Color philosophy: **60/30/10** — Black (dominant), White (secondary), Yellow accent (`--color-amarillo`).

Typography: Poly Sans family (Slim 300, Neutral 400, Median 500, Bulky 700 + Italic and Mono variants), served from local OTF files in [assets/fonts/](assets/fonts/).

Pattern assets (SVGs for backgrounds): [assets/tramas/](assets/tramas/) — diagonal, grid, isometric, radial.

Logo variants: [assets/logos/](assets/logos/) — monogram and full branding on dark/light backgrounds.

## Content

Espacio IEB — a professional workspace and community for independent financial advisors in Argentina (Grupo IEB, located in Núñez, Buenos Aires). The page has 11 sections: Nav, Hero, Market Ticker, Why, What Is, Benefits, Community, Audience, Infrastructure, Backing, Access Model, FAQ, Footer.

JSON-LD schemas embedded in `<head>`: Organization, LocalBusiness, FinancialService, FAQPage.
