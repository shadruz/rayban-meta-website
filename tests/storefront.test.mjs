import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const context = vm.createContext({});
vm.runInContext(
  await readFile(new URL("../catalog.js", import.meta.url), "utf8"),
  context,
);
const { TG_CATALOG: catalog, TG_STORE: store } = context;
const plain = (value) => JSON.parse(JSON.stringify(value));

test('Display quote prices never become zero or a fixed cart total', () => {
  for (const p of catalog.filter(p=>p.family==='display')) {
    assert.equal(p.price,null);
    const cart=[{id:p.id,quantity:2},{id:'sk-1002178-01',quantity:1}];
    assert.equal(store.cartTotal(cart),null);
    assert.match(store.orderDraft(cart,'ru'),/Цена по запросу/);
    assert.match(store.orderDraft(cart,'ru'),/Итоговая цена согласовывается/);
    assert.doesNotMatch(store.orderDraft(cart,'ru'),/\$null|\$0|\$829/);
    assert.match(store.orderDraft(cart,'uz'),/Narx so‘rov bo‘yicha/);
  }
});

test("official US prices plus $30 apply to every glasses SKU; all are on request", () => {
  assert.equal(catalog.length, 144);
  assert.equal(new Set(catalog.filter(p=>p.category==='glasses').map(p=>p.family)).size,16);
  for (const p of catalog) {
    assert.equal(p.availability,'on_request');
    if(p.category==='glasses') { assert.equal(p.sourceAvailability,'InStock'); assert.equal(p.price,p.family==='display'?null:p.sourcePrice+30); assert.match(p.source,/^https:\/\/www.meta.com\//); }
  }
  assert.equal(store.findProduct('sk-1002178-01').price,479);
  assert.equal(store.findProduct('sk-1002175-01').price,559);
  // Retired Gen 1 Clear/Chameleon SKUs (no longer sold by Meta) are not orderable.
  assert.equal(store.findProduct('clear'), undefined);
  assert.equal(store.findProduct('whoop').price,355);
  assert.equal(store.findProduct("21"), undefined);
  assert.equal(store.findProduct("59").id, "whoop");
  assert.equal(store.findProduct("1"), undefined);
});

test("untrusted persisted cart data cannot change prices or add unavailable items", () => {
  const input = [
    { id: "sk-1002178-01", quantity: 2, price: 0.01 },
    { id: "21", quantity: 1 },
    { id: "1", quantity: 1 },
    { id: "sk-1002175-01", quantity: -3 },
    { id: "sk-1002175-01", quantity: 1.5 },
    { id: "whoop", quantity: "1" },
    null,
  ];
  // "21" was the retired Gen 1 Clear legacy id: it is dropped, not remapped to another product.
  assert.deepEqual(plain(store.validateCart(input)), [
    { id: "sk-1002178-01", quantity: 2 },
  ]);
  assert.equal(store.cartTotal(input), 958);
  assert.deepEqual(plain(store.validateCart({ id: "sk-1002178-01", quantity: 1 })), []);
});

test("quantities are bounded and duplicate aliases are consolidated", () => {
  assert.deepEqual(
    plain(
      store.validateCart([
        { id: "59", quantity: 80 },
        { id: "whoop", quantity: 80 },
        { id: "sk-1002178-01", quantity: Number.MAX_SAFE_INTEGER + 1 },
      ]),
    ),
    [{ id: "whoop", quantity: 99 }],
  );
});

test("Telegram draft is explicit, localized, and uses canonical totals", () => {
  const cart = [
    { id: "sk-1002178-01", quantity: 2 },
    { id: "whoop", quantity: 1 },
  ];
  const ru = store.orderDraft(cart, "ru");
  assert.match(ru, /Итого: \$1313/);
  assert.match(ru, /итоговую сумму в сумах/);
  assert.match(ru, /Matte Black Clear Lenses/);
  assert.match(store.orderDraft(cart, "uz"), /Jami: \$1313/);
  assert.equal(store.orderDraft([], "ru"), "");
});
