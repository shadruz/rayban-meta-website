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

test("only active products and current retail prices are used", () => {
  assert.deepEqual(plain(catalog.map(({ id, price }) => ({ id, price }))), [
    { id: "clear", price: 280 },
    { id: "chameleon", price: 350 },
    { id: "whoop", price: 355 },
  ]);
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
  assert.equal(store.cartTotal(input), 840);
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
  assert.match(ru, /Итого: \$915/);
  assert.match(ru, /итоговую сумму в сумах/);
  assert.match(ru, /Shiny Clear/);
  assert.match(store.orderDraft(cart, "uz"), /Jami: \$915/);
  assert.equal(store.orderDraft([], "ru"), "");
});
