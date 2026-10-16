# Sapiens4 landing page

Production: https://sapiens4.ai/

Static HTML, CSS, and JavaScript, published by GitHub Pages from `main` at the repository root. No build step is required. Keep `CNAME` set to `sapiens4.ai`.

Run a local preview with `python3 -m http.server 8768` and open http://127.0.0.1:8768/.

The sun/moon control defaults to light and remembers a visitor’s explicit choice in localStorage. The ticker supports pause/resume and respects reduced motion. Workspace content is an interactive illustration, with no connection to a live Sapiens4 instance.

The gradient logo comes from the Sapiens4 app’s `web/shell/bootstrap.js`. The favicon retains its white background; the page mark removes only the background rectangle. Platform and main-release descriptions were checked against `aleski-green/sapiens4` revision `71e93cb`. Alternative engine support links to `kimi-engine`; remote control links to `codex/remote-control-mvp`. Both are explicitly labeled previews.

Licensing copy follows `license/LICENSING.md`: free community use under the Sustainable Use License, source-available rather than OSI-approved open source. Remote copy describes end-to-end encryption through a relay, not a direct P2P network connection.

Search and discovery: canonical and social metadata, matching SoftwareApplication/WebSite/FAQPage JSON-LD, `robots.txt`, `sitemap.xml`, and a concise `/llms.txt` product-facts summary. Keep FAQ structured data and product facts aligned with visible copy. These aid discovery but do not guarantee ranking or rich results.

Google Fonts supplies DM Sans and IBM Plex Mono, with local font fallbacks.
