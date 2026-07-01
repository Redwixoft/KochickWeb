# Kochick — Landing Page

Static presentation website for the **Kochick** app (gamified stroller-walking for Bratislava parents). Pure HTML/CSS/JS — **no build step**.

## Structure

```
Kochick-Web/
├── index.html            # the whole page
├── assets/
│   ├── css/styles.css    # all styling (colors from the mobile app)
│   ├── js/i18n.js        # SK / EN / UK translations + language switcher
│   ├── js/main.js        # nav, mobile menu, scroll reveal
│   └── img/              # logo, favicon, illustrations (from the app)
└── README.md
```

## Deploy

Upload the whole `Kochick-Web/` folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, plain nginx/Apache). No server, no dependencies. Just serve `index.html` as the root.

Local preview: open `index.html` in a browser, or run a static server from this folder:
```
npx serve .
# or
python -m http.server 8000
```

## Adding the real store links

Search `index.html` for `data-store="ios"` and `data-store="android"` and replace `href="#"` with the real URLs (App Store / Google Play). The buttons appear **twice** — in the hero and in the download CTA band — so update both.

## Showing only one platform (Android-only or iOS-only)

Each store button sits inside a clearly labelled HTML comment block. To hide one platform, comment out its block in **both** places (hero + CTA):

```html
<!-- ANDROID button — comment out this whole block to hide when only iOS is ready -->
<a class="store-btn" data-store="android" href="#"> ... </a>
<!-- /ANDROID -->
```

Wrap the `<a>...</a>` in `<!-- ... -->` and it disappears; the layout re-centers automatically. Do the same with the `IOS` block to hide the App Store button.

## Languages

Slovak is the default. English and Ukrainian are switched live via the SK/EN/UK toggle (choice is remembered in `localStorage`). All copy lives in `assets/js/i18n.js` — every visible string is keyed there under `sk`, `en`, `uk`. To edit wording, change the value in all three dictionaries. Company/legal data (name, address, IČO/DIČ) is intentionally the same in every language and lives directly in `index.html`.

## Assets

Illustrations and the app icon were taken from the mobile app (`Strolly-App/StrollQuest.Mobile/assets`). Replace anything in `assets/img/` with updated art as needed — keep the same filenames to avoid touching the HTML.

---

© Redwixoft s. r. o. — info@kochick.sk
