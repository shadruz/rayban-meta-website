"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const origin = "https://www.techgeek.uz";
const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const ignored = new Set(["node_modules", "scripts", "tests", "dist", "build"]);

function filesIn(directory = "") {
  return fs
    .readdirSync(path.join(root, directory), { withFileTypes: true })
    .flatMap((entry) => {
      if (
        entry.name.startsWith(".") ||
        ignored.has(entry.name) ||
        entry.isSymbolicLink()
      )
        return [];
      const file = path.posix.join(directory, entry.name);
      return entry.isDirectory() ? filesIn(file) : [file];
    });
}

function resolveLocal(reference, from) {
  if (
    !reference ||
    reference.startsWith("#") ||
    /^(?:data|mailto|tel|javascript):/i.test(reference)
  )
    return null;
  const url = new URL(
    reference.replace(/&amp;/g, "&"),
    new URL("/" + from, origin),
  );
  if (url.origin !== origin) return null;
  let local = decodeURIComponent(url.pathname).replace(/^\//, "");
  if (!local || local.endsWith("/")) local += "index.html";
  const absolute = path.resolve(root, local);
  if (!absolute.startsWith(root + path.sep))
    throw new Error("Path outside website");
  if (fs.existsSync(absolute) && fs.statSync(absolute).isDirectory())
    local += "/index.html";
  return local;
}

function checkReference(reference, from) {
  try {
    const file = resolveLocal(reference, from);
    if (file)
      assert(
        fs.existsSync(path.join(root, file)),
        `${from}: missing local target ${reference}`,
      );
  } catch (error) {
    errors.push(`${from}: invalid reference ${reference} (${error.message})`);
  }
}

function objects(value) {
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap(objects);
  return [value, ...Object.values(value).flatMap(objects)];
}

const context = vm.createContext({});
vm.runInContext(read("catalog.js"), context, { filename: "catalog.js" });
const catalog = context.TG_CATALOG;
assert(
  Array.isArray(catalog) && catalog.length === 3,
  "catalog.js: exactly three confirmed in-stock products are expected",
);
assert(
  new Set(catalog.map((product) => product.id)).size === catalog.length,
  "catalog.js: duplicate product IDs",
);

const sitemap = read("sitemap.xml");
const sitemapUrls = [...sitemap.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(
  (match) => match[1].trim(),
);
assert(sitemapUrls.length > 0, "sitemap.xml: no URLs found");
assert(
  new Set(sitemapUrls).size === sitemapUrls.length,
  "sitemap.xml: duplicate URLs",
);
for (const url of sitemapUrls) checkReference(url, "sitemap.xml");

const htmlFiles = filesIn().filter((file) => file.endsWith(".html"));
const schemaByFile = new Map();
const canonicalByFile = new Map();
for (const file of htmlFiles) {
  const html = read(file);
  for (const tag of html.matchAll(
    /<(?:a|link|img|script|source|video)\b[^>]*>/gi,
  )) {
    for (const attribute of tag[0].matchAll(
      /\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi,
    )) {
      checkReference(attribute[1], file);
    }
    for (const attribute of tag[0].matchAll(
      /\bsrcset\s*=\s*["']([^"']+)["']/gi,
    )) {
      if (!attribute[1].startsWith("data:")) {
        for (const candidate of attribute[1].split(","))
          checkReference(candidate.trim().split(/\s+/)[0], file);
      }
    }
  }
  assert(
    !/<script\b[^>]*\bsrc\s*=\s*["'](?:\/)?script\.js["']/i.test(html),
    `${file}: archived script.js must not be loaded`,
  );

  const nodes = [];
  for (const script of html.matchAll(
    /<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      nodes.push(...objects(JSON.parse(script[1])));
    } catch (error) {
      errors.push(`${file}: invalid JSON-LD (${error.message})`);
    }
  }
  schemaByFile.set(file, nodes);

  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].find((match) =>
    /\brel=["']canonical["']/i.test(match[0]),
  );
  const canonical =
    canonicalTag && /\bhref=["']([^"']+)["']/i.exec(canonicalTag[0])?.[1];
  if (canonical) {
    canonicalByFile.set(file, canonical);
    assert(
      canonical === origin + "/" + file.replace(/index\.html$/, ""),
      `${file}: canonical does not match its route`,
    );
    assert(
      sitemapUrls.includes(canonical),
      `${file}: canonical missing from sitemap.xml`,
    );
  } else if (
    !/\bnoindex\b/i.test(html) &&
    !/^yandex_[a-z0-9]+\.html$/i.test(file)
  ) {
    errors.push(`${file}: indexable page has no canonical`);
  }
}
for (const url of sitemapUrls) {
  const file = resolveLocal(url, "sitemap.xml");
  assert(
    canonicalByFile.get(file) === url,
    `sitemap.xml: ${url} has no matching page canonical`,
  );
}
for (const file of filesIn().filter((name) => name.endsWith(".css"))) {
  for (const match of read(file).matchAll(
    /url\(\s*["']?([^\s)"']+)["']?\s*\)/g,
  ))
    checkReference(match[1], file);
}

const homepage = read("index.html");
const cards = [
  ...homepage.matchAll(/<article\b[^>]*\bdata-product-id=["']([^"']+)["']/g),
].map((match) => match[1]);
assert(
  cards.length === 3 && catalog.every((product) => cards.includes(product.id)),
  "index.html: in-stock cards do not match catalog.js",
);
const feed = read("merchant-feed.xml");
const feedItems = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(
  (match) => match[1],
);
assert(
  feedItems.length === catalog.length,
  "merchant-feed.xml: product count differs from catalog.js",
);
const feedField = (item, field) =>
  new RegExp(`<g:${field}>([\\s\\S]*?)<\\/g:${field}>`).exec(item)?.[1].trim();

for (const product of catalog) {
  assert(
    Number.isFinite(product.price) && product.price > 0,
    `catalog.js: invalid price for ${product.id}`,
  );
  checkReference(product.image, "catalog.js");
  const prices = [
    ...homepage.matchAll(
      new RegExp(
        `<(?:strong|span)\\b[^>]*data-price=["']${product.id}["'][^>]*>([^<]+)<`,
        "g",
      ),
    ),
  ];
  assert(
    prices.length > 0 &&
      prices.every(
        (match) => Number(match[1].replace(/[^\d.]/g, "")) === product.price,
      ),
    `index.html: visible ${product.id} price differs from catalog.js`,
  );

  for (const route of Object.values(product.url)) {
    const file = resolveLocal(route, "catalog.js");
    const nodes = schemaByFile.get(file) || [];
    const schemaProduct = nodes.find((node) =>
      (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes(
        "Product",
      ),
    );
    assert(schemaProduct, `${file}: missing Product structured data`);
    const offer = schemaProduct?.offers;
    assert(
      offer &&
        Number(offer.price) === product.price &&
        offer.priceCurrency === "USD",
      `${file}: Product Offer price differs from catalog.js`,
    );
    assert(
      offer?.availability === "https://schema.org/InStock",
      `${file}: product must be InStock`,
    );
    if (fs.existsSync(path.join(root, file))) {
      const visiblePrice =
        /class=["']product-price["'][^>]*>\s*<strong>\$(\d+(?:\.\d+)?)<\/strong>/.exec(
          read(file),
        );
      assert(
        visiblePrice && Number(visiblePrice[1]) === product.price,
        `${file}: visible retail price differs from catalog.js`,
      );
    }
  }

  const item = feedItems.find(
    (entry) => feedField(entry, "id") === product.sku,
  );
  assert(item, `merchant-feed.xml: missing ${product.sku}`);
  if (item) {
    const price = /^(\d+(?:\.\d+)?) USD$/.exec(feedField(item, "price") || "");
    assert(
      price && Number(price[1]) === product.price,
      `merchant-feed.xml: price mismatch for ${product.sku}`,
    );
    assert(
      feedField(item, "availability") === "in_stock",
      `merchant-feed.xml: availability mismatch for ${product.sku}`,
    );
    assert(
      feedField(item, "link") === origin + product.url.ru,
      `merchant-feed.xml: product URL mismatch for ${product.sku}`,
    );
    checkReference(feedField(item, "image_link"), "merchant-feed.xml");
  }
}

if (errors.length) {
  console.error(errors.map((error) => "FAIL " + error).join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Site checks passed: ${htmlFiles.length} HTML pages, ${sitemapUrls.length} sitemap URLs, ${catalog.length} products; local links/assets, JSON-LD and retail/feed prices agree.`,
  );
}
