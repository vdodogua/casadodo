# Casa Dodo Guatape

Website for Casa Dodo Guatape — a boutique hotel with 1-3 bedroom apartments and an Asian fusion restaurant downstairs.

Live: https://casadodoguatape.com/

## Stack

- **SSG**: Hugo with [hugo-story](https://themes.gohugo.io/themes/hugo-story/) theme
- **Bookings**: LobbyPMS (integrates with Booking.com and Airbnb)
- **Hosting**: Render
- **Multilingual**: EN, ES, FR

## Site Structure

### Main page (single page)

- [x] Header (logo left, language switcher + Book Now CTA right)
- [x] Hero banner with front photo
- [x] Rating badges (Airbnb, Booking.com, Kayak)
- [x] Features (3-column: apartments, activities, amenities)
- [x] Testimonials
- [x] Apartment 201 — spotlight text + amenities icons + mosaic gallery (2 bed / 2 bath, sleeps 4)
- [x] Apartment 202 — spotlight text + amenities icons + mosaic gallery (1 bed / 1 bath, sleeps 2) — alt background
- [x] Apartment 301 — spotlight text + amenities icons + mosaic gallery (3 bed / 3 bath, sleeps 6)
- [x] Disclaimer (stairs only)
- [x] About section
- [x] Location / contact + Google Map
- [x] How to get there (bus, flight, private transportation)
- [x] Testimonials (second set)
- [x] Blog links
- [x] Footer

### Thank you page (`/thank-you/`)

- [x] Trilingual (EN/ES/FR) on a single page
- [x] Used as LobbyPMS post-booking redirect
- [x] Excluded from search engines (noindex) and sitemap

## Key Files

- `config.toml` — all content, gallery entries, site params
- `themes/hugo-story/layouts/index.html` — page layout (partials order)
- `themes/hugo-story/layouts/partials/` — spotlight, gallery, banner, features, etc.
- `themes/hugo-story/assets/css/own.css` — custom CSS overrides
- `i18n/` — en.yaml, es.yaml, fr.yaml
- `themes/hugo-story/assets/sass/` — theme SASS (components, layout)
- `themes/hugo-story/assets/js/main.js` — theme JS (lightbox, scroll, galleries)

## Image Dimensions

- Hero banner: 1440 x 960
- Spotlight: 800 x 600
- Gallery: 1200 x 900
- Thumbnail: 600 x 450

## Completed Improvements

- [x] Gallery mosaic layout (hero + 4 thumbnails, lightbox with nav)
- [x] Amenities icons per apartment (beds, baths, kitchen, outdoor, sleeps)
- [x] Visual hierarchy (alternating background on apt 202)
- [x] Spacing & dividers (yellow dividers removed, breathing room added)
- [x] Thank you page (trilingual, noindex, single URL for LobbyPMS)
- [x] How to get there section (bus, flight, private transportation)
- [x] SEO (HotelRoom schema, FAQ schema, geo meta, improved titles)

## TODO

- [ ] Add Google Analytics (need measurement ID `G-XXXXXXX`)

## Dev

```bash
hugo server -D --port 1313
```
