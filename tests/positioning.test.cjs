'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('broad positioning retains specific catalog links and bilingual order safeguards', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  assert.match(html, /<title>\s*Интернет-магазин гаджетов под заказ в Ташкенте/);
  const section = html.match(/<section id="gadgets-on-request"[\s\S]*?<\/section>/)?.[0];
  assert.ok(section);
  for (const route of ['/smart-glasses/', '/whoop-mg-life/', '/dostavka-i-garantiya/']) {
    assert.ok(section.includes('href="' + route + '"'));
  }
  assert.match(section, /не любой товар доступен к поставке/);
  assert.match(section, /не является оплатой или подтверждённой покупкой/);
  assert.match(section, /data-uz=/);
  const sitemap = fs.readFileSync('sitemap.xml', 'utf8');
  assert.match(sitemap, /<loc>https:\/\/www\.techgeek\.uz\/<\/loc><lastmod>2026-09-21<\/lastmod>/);
});
