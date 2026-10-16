# Sapiens4 landing page

Production: https://sapiens4.ai/

Static HTML, CSS, and JavaScript, published by GitHub Pages from `main` at the repository root. No build step is required. Keep `CNAME` set to `sapiens4.ai`.

Run a local preview with `python3 -m http.server 8768` and open http://127.0.0.1:8768/.

The sun/moon control defaults to light and remembers a visitor’s explicit choice in localStorage. The ticker supports pause/resume and respects reduced motion. Workspace content is an interactive illustration, with no connection to a live Sapiens4 instance.

The gradient logo comes from the Sapiens4 app’s `web/shell/bootstrap.js`. The favicon is a black 4 on pale neon pink; its filenames are distinct from the original favicon to refresh browser caches. The page mark retains the original gradient symbol without a background rectangle. Product structure and feature descriptions are based on `aleski-green/sapiens4` revision `a674948`.

Google Fonts supplies DM Sans and IBM Plex Mono, with local font fallbacks.

SEO/GEO additions are limited to head metadata, WebSite/SoftwareApplication JSON-LD, `robots.txt`, `sitemap.xml`, and `/llms.txt`. The visible landing-page copy, styling, and interactions are unchanged. Discovery files distinguish preview branches from the main release.
