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
    const cart=[{id:p.id,quantity:2},{id:'clear',quantity:1}];
    assert.equal(store.cartTotal(cart),null);
    assert.match(store.orderDraft(cart,'ru'),/Цена по запросу/);
    assert.match(store.orderDraft(cart,'ru'),/Итоговая цена согласовывается/);
    assert.doesNotMatch(store.orderDraft(cart,'ru'),/\$null|\$0|\$829/);
    assert.match(store.orderDraft(cart,'uz'),/Narx so‘rov bo‘yicha/);
  }
});

test("official US prices plus $30 apply to every glasses SKU; all are on request", () => {
  assert.equal(catalog.length, 104);
  assert.equal(new Set(catalog.filter(p=>p.category==='glasses').map(p=>p.family)).size,13);
  for (const p of catalog) {
    assert.equal(p.availability,'on_request');
    if(p.category==='glasses') { assert.equal(p.price,p.family==='display'?null:p.sourcePrice+30); assert.match(p.source,/^https:\/\/www.meta.com\//); }
  }
  assert.equal(store.findProduct('clear').price,254);
  assert.equal(store.findProduct('chameleon').price,314);
  assert.equal(store.findProduct('whoop').price,355);
  assert.equal(store.findProduct("21").id, "clear");
  assert.equal(store.findProduct("59").id, "whoop");
  assert.equal(store.findProduct("1"), undefined);
});

test("untrusted persisted cart data cannot change prices or add unavailable items", () => {
  const input = [
    { id: "clear", quantity: 2, price: 0.01 },
    { id: "21", quantity: 1 },
    { id: "1", quantity: 1 },
    { id: "chameleon", quantity: -3 },
    { id: "chameleon", quantity: 1.5 },
    { id: "whoop", quantity: "1" },
    null,
  ];
  assert.deepEqual(plain(store.validateCart(input)), [
    { id: "clear", quantity: 3 },
  ]);
  assert.equal(store.cartTotal(input), 762);
  assert.deepEqual(plain(store.validateCart({ id: "clear", quantity: 1 })), []);
});

test("quantities are bounded and duplicate aliases are consolidated", () => {
  assert.deepEqual(
    plain(
      store.validateCart([
        { id: "22", quantity: 80 },
        { id: "chameleon", quantity: 80 },
        { id: "clear", quantity: Number.MAX_SAFE_INTEGER + 1 },
      ]),
    ),
    [{ id: "chameleon", quantity: 99 }],
  );
});

test("Telegram draft is explicit, localized, and uses canonical totals", () => {
  const cart = [
    { id: "clear", quantity: 2 },
    { id: "whoop", quantity: 1 },
  ];
  const ru = store.orderDraft(cart, "ru");
  assert.match(ru, /Итого: \$863/);
  assert.match(ru, /итоговую сумму в сумах/);
  assert.match(ru, /Shiny Black \/ Clear/);
  assert.match(store.orderDraft(cart, "uz"), /Jami: \$863/);
  assert.equal(store.orderDraft([], "ru"), "");
});
