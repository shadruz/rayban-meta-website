# TechGeek.uz

On-request retail catalog in Tashkent: 13 smart-glasses families (103 size/color SKUs) and WHOOP MG Life. Nothing is advertised as locally in stock. Production: https://www.techgeek.uz/

## Catalog source and regeneration

- `data/meta-source.json`: dated public Meta Store US snapshot; `data/families.cjs`: model-specific RU/UZ editorial content; `data/catalog.json`: normalized variants. Glasses use the source price + USD 30; WHOOP retains its separately authorized USD 355 price.
- `node scripts/import-meta-catalog.cjs` retrieves the 13 observed official families. `node scripts/prepare-catalog.cjs` validates USD prices and downloads correctly matched product imagery. Both require network and deliberate human review of the resulting diff; they are NOT scheduled price updates.
- `npm run build:catalog` builds the runtime catalog, model pages, homepage cards, sitemap and merchant feed from the checked-in data. Run `npm run check` and `npm test` afterward. Archived Gen 1 G15 Transitions SKUs are excluded because Meta's current selector exposes their Graphite Green replacements instead.
- Categories: glasses / fitness. Glasses have brand, family, generation, color and size. One model page groups its variants; existing Clear/Chameleon/WHOOP URLs remain valid. `/smart-glasses/` is the category hub, `/smart-glasses/{family}/` model pages, `/uz/` their Uzbek equivalents.
- All transactions start as enquiries, not paid or confirmed purchases. Supply dates are not invented. Merchant feed and schema use OutOfStock while fulfillment is unconfirmed; do not switch to backorder without a real visible dispatch date. Source availability is not TechGeek stock.

## Local development

Use Node.js 22. No dependencies or install step are required.

```sh
npm run dev
npm run check
npm test
```

The development server binds only to `http://127.0.0.1:4173`. It serves the site and `/api/exchange-rate`, returns the designed 404 page with a real 404 status, and does not serve dotfiles or development/API source directories. This server is for local previews only.

## Architecture and content

- `index.html` contains the complete indexable storefront; `styles.css` supplies the responsive visual system. Fonts and product images are local.
- `catalog.js` owns the active products, USD reference prices, aliases, validated cart quantities and Telegram draft totals. `storefront.js` handles the language/currency switch, filters and persistent cart. Archived `script.js` and `translations.js` are not loaded by the new storefront.
- Russian and Uzbek product, buying-guide and delivery pages retain their existing paths and canonical/hreflang metadata. Shared page styles are in `product-page.css` and `seo-page.css`.
- When a price or availability changes, update the catalog data and regenerate; review legacy editorial price mentions too. `npm run check` catches differences between every SKU, variant selector, Product JSON-LD and feed. Update the affected sitemap `lastmod` dates.
- `/api/exchange-rate` is a dependency-free Vercel Node function. It fetches the Central Bank of Uzbekistan USD rate with a timeout, validates the quote, and returns `{ rate, date, source }`. Successful responses cache at the CDN for one hour; failure returns 503 without inventing a price. UZS conversion is indicative; the merchant confirms the final amount.
- Checkout opens a **draft** in Telegram. The customer sends the message and the merchant confirms the order. There is no online payment or server-side order database. Cart contents are stored locally; do not add secrets or customer details to public JavaScript or analytics.
- `analytics.js` records product interactions and contact actions. `techgeek:checkout-opened` represents opening the Telegram draft, not a sent message, paid order or completed purchase.

## Checks and deployment

`npm run check` checks local references/assets, every JSON-LD block, canonical/sitemap consistency, active stock and price consistency. `npm test` exercises cart input validation, totals, order drafts and the exchange-rate API failure paths. GitHub Actions runs both on pull requests and pushes to `main`.

The connected Vercel project is `shadruzs-projects/rayban-meta-website`. Branch pushes produce previews; merging into `main` updates the existing production deployment and domain. No static build command is needed. `vercel.json` configures the API duration and response security headers.

Before merging, inspect the preview on desktop/mobile, RU/UZ, filter and currency switches, cart quantity/removal and product-to-cart links. Check `/api/exchange-rate`, `merchant-feed.xml`, `sitemap.xml` and a nonexistent URL. After merging, confirm the new Vercel production commit status and repeat the essential checks on the live domain. A deployment does not guarantee search-engine indexing or rankings.
