# TechGeek.uz

Retail storefront for three in-stock devices in Tashkent: Ray-Ban Meta Gen 1 Clear, Gen 1 Chameleon and WHOOP MG Life 5.0. Production: https://www.techgeek.uz/

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
- When a price or availability changes, update `catalog.js`, visible homepage/product/guide copy, Product JSON-LD and `merchant-feed.xml` together. `npm run check` catches differences between the active catalog, homepage, six product offers and feed. Update the affected sitemap `lastmod` dates.
- `/api/exchange-rate` is a dependency-free Vercel Node function. It fetches the Central Bank of Uzbekistan USD rate with a timeout, validates the quote, and returns `{ rate, date, source }`. Successful responses cache at the CDN for one hour; failure returns 503 without inventing a price. UZS conversion is indicative; the merchant confirms the final amount.
- Checkout opens a **draft** in Telegram. The customer sends the message and the merchant confirms the order. There is no online payment or server-side order database. Cart contents are stored locally; do not add secrets or customer details to public JavaScript or analytics.
- `analytics.js` records product interactions and contact actions. `techgeek:checkout-opened` represents opening the Telegram draft, not a sent message, paid order or completed purchase.

## Checks and deployment

`npm run check` checks local references/assets, every JSON-LD block, canonical/sitemap consistency, active stock and price consistency. `npm test` exercises cart input validation, totals, order drafts and the exchange-rate API failure paths. GitHub Actions runs both on pull requests and pushes to `main`.

The connected Vercel project is `shadruzs-projects/rayban-meta-website`. Branch pushes produce previews; merging into `main` updates the existing production deployment and domain. No static build command is needed. `vercel.json` configures the API duration and response security headers.

Before merging, inspect the preview on desktop/mobile, RU/UZ, filter and currency switches, cart quantity/removal and product-to-cart links. Check `/api/exchange-rate`, `merchant-feed.xml`, `sitemap.xml` and a nonexistent URL. After merging, confirm the new Vercel production commit status and repeat the essential checks on the live domain. A deployment does not guarantee search-engine indexing or rankings.
