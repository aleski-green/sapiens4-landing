# Sapiens4 landing page

Production: https://sapiens4.ai/

Static HTML, CSS, and JavaScript, published by GitHub Pages from `main` at the repository root. No build step is required. Keep `CNAME` set to `sapiens4.ai`.

Run a local preview with `python3 -m http.server 8769` and open http://127.0.0.1:8769/.

The four Sapis are Chiefy (team lead), Curio (initiative master), Buildly (maker), and Nerd (PC fixes and organization). Their original cool-crew artwork is in `assets/mascot-crew.png`; CSS positions each character without modifying the source image. Page accents use the four card colors and neutral grays. Header branding is black in light mode and white in dark mode; the footer uses a smaller monochrome mark.

Each page opening randomly starts dark (70%) or light (30%). The sun/moon control changes the theme for the current visit without persisting it. The ticker supports pause/resume and respects reduced motion.

The Corpora prototype is an interactive illustration, with no connection to a live Sapiens4 instance. It retains its three-column desktop layout on all devices. Below 1120px of available space, the entire prototype scales proportionally to fit. Safe-area insets protect the fixed header and page content on iOS.

The macOS, Windows, and Linux setup controls open the same prompt-copy dialog. The installer prompt explicitly points to https://github.com/sapiens4ai/sapiens4 and asks the user's harness to follow the setup guide for their OS.

Google Fonts supplies DM Sans and IBM Plex Mono, with local font fallbacks. Discovery files include WebSite/SoftwareApplication JSON-LD, `robots.txt`, `sitemap.xml`, and `/llms.txt`.
