# Casa Dodo Guatapé — Website

**Stage:** Live, ongoing optimization
**Last Updated:** 2026-04-03

## Overview
Marketing website for Casa Dodo Guatapé, a boutique accommodation property in Guatapé, Colombia. 3 apartments (201, 202, 301) with lake views. Built with Hugo (v0.124.1), hosted on Cloudflare.

## Architecture
- **Static site generator:** Hugo with hugo-story theme (heavily customized)
- **Hosting:** Cloudflare (HTTP/3, SSL, Brotli)
- **Booking engine:** LobbyPMS (embedded widget + external booking page)
- **Languages:** EN (default), ES, FR — i18n via YAML files
- **Images:** WebP format, stored in `static/images/casadodo/` with thumbs in `thumbs/` subdirectory
- **Galleries:** Mosaic layout (1 hero + 4 thumbs visible, rest hidden for lightbox)
- **Contact:** WhatsApp button (floating), JS-obfuscated email, phone
- **Schema:** LodgingBusiness + FAQPage JSON-LD
- **DNS:** Cloudflare — SPF + DMARC records in place

## Goals
- [x] SEO audit fixes (from C+ to B, targeting A)
- [ ] Image optimization (further compression if needed)
- [ ] Backlink strategy (Links score: F)
- [ ] Analytics implementation (Plausible or GA4)
- [ ] Social presence (Twitter, LinkedIn, YouTube)

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-03 | WebP at quality=95, not 85 or 100 | JPGs were already compressed; q85 caused visible pixelation, q100 made files larger than JPGs. q95 is visually lossless at ~same file size. |
| 2026-04-03 | Remove hidden thumbnail img tags from gallery mosaic | 39 hidden images were being fetched by browsers despite display:none. Lightbox only needs the `<a href>` — saves ~3.1MB on page load. |
| 2026-04-03 | Hamburger menu instead of inline nav links | Navbar was too crowded on mobile with inline links. Hamburger keeps it clean, works on all sizes. |
| 2026-04-03 | Calendar icon for Book Now on mobile | Full "Book Now" button was too large on mobile, text was wrapping. Icon-only keeps it compact. |
| 2026-04-03 | Keep original JPG files alongside WebP | No deletion of originals — keeps fallback option, repo size is not a priority vs. site performance. |
| 2026-04-03 | Plausible analytics deferred | Config param exists (commented out) and script was wired but removed — user not ready to set up Plausible account yet. |
| 2026-04-03 | demo.js removed from JS bundle | 562-line theme dev tool (style picker) — dead code in production, saved ~15KB minified. |
| 2026-04-03 | Email obfuscation via JS concatenation | Plaintext email was scrapable. JS builds the mailto link at runtime from split user+domain. |
| 2026-04-03 | Pet friendly as 4th feature, 4-column grid | Property welcomes pets — added to features section with paw icon, changed grid from 3 to 4 columns. |
