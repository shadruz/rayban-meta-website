(function (root) {
  "use strict";

  // Retail prices are USD reference prices. Only confirmed in-stock products
  // belong here; the archived collection remains in script.js.
  const products = [
    {
      id: "clear",
      sku: "RBM-G1-CLEAR",
      legacyIds: ["20", "21"],
      name: "Ray-Ban Meta",
      variant: "Gen 1 · Shiny Clear",
      category: "rayban",
      price: 280,
      image: "/images/store-clear.webp",
      url: {
        ru: "/ray-ban-meta-gen-1-clear/",
        uz: "/uz/ray-ban-meta-gen-1-clear/",
      },
      aliases: ["gen1-clear", "ray-ban-meta-gen-1-clear"],
    },
    {
      id: "chameleon",
      sku: "RBM-G1-CHAMELEON",
      legacyIds: ["22", "23"],
      name: "Ray-Ban Meta",
      variant: "Gen 1 · Matte Chameleon",
      category: "rayban",
      price: 350,
      image: "/images/store-chameleon.webp",
      url: {
        ru: "/ray-ban-meta-gen-1-chameleon/",
        uz: "/uz/ray-ban-meta-gen-1-chameleon/",
      },
      aliases: ["gen1-chameleon", "ray-ban-meta-gen-1-chameleon"],
    },
    {
      id: "whoop",
      sku: "WHOOP-MG-LIFE",
      legacyIds: ["59"],
      name: "WHOOP MG Life 5.0",
      variant: "Life · 12 months",
      category: "whoop",
      price: 355,
      image: "/images/store-whoop.webp",
      url: { ru: "/whoop-mg-life/", uz: "/uz/whoop-mg-life/" },
      aliases: ["whoop-mg-life", "whoop-mg-life-5"],
    },
  ].map(function (product) {
    Object.freeze(product.legacyIds);
    Object.freeze(product.aliases);
    Object.freeze(product.url);
    return Object.freeze(product);
  });

  function findProduct(id) {
    const value = String(id == null ? "" : id).toLowerCase();
    return products.find(function (product) {
      return (
        product.id === value ||
        product.sku.toLowerCase() === value ||
        product.legacyIds.includes(value) ||
        product.aliases.includes(value)
      );
    });
  }

  function validateCart(input) {
    if (!Array.isArray(input)) return [];
    const quantities = new Map();
    input.slice(0, 100).forEach(function (line) {
      if (!line || typeof line !== "object") return;
      const product = findProduct(line.id);
      if (!product || !Number.isSafeInteger(line.quantity) || line.quantity < 1)
        return;
      quantities.set(
        product.id,
        Math.min(99, (quantities.get(product.id) || 0) + line.quantity),
      );
    });
    return Array.from(quantities, function (entry) {
      return { id: entry[0], quantity: entry[1] };
    });
  }

  function cartTotal(cart) {
    return validateCart(cart).reduce(function (sum, line) {
      return sum + findProduct(line.id).price * line.quantity;
    }, 0);
  }

  function orderDraft(cart, language) {
    const isUz = language === "uz";
    const valid = validateCart(cart);
    if (!valid.length) return "";
    const lines = valid.map(function (line) {
      const product = findProduct(line.id);
      return (
        product.name +
        " — " +
        product.variant +
        "\n" +
        line.quantity +
        " × $" +
        product.price +
        " = $" +
        product.price * line.quantity
      );
    });
    return [
      isUz
        ? "Salom! TechGeek.uz saytidan buyurtma bermoqchiman:"
        : "Здравствуйте! Хочу заказать на TechGeek.uz:",
      "",
      lines.join("\n\n"),
      "",
      (isUz ? "Jami: $" : "Итого: $") + cartTotal(valid),
      isUz
        ? "O‘zbekiston bo‘ylab yetkazib berish bepul."
        : "Бесплатная доставка по Узбекистану.",
      isUz
        ? "Mavjudligi, so‘mdagi yakuniy summa va yetkazish vaqtini tasdiqlab bering."
        : "Подтвердите, пожалуйста, наличие, итоговую сумму в сумах и время доставки.",
    ].join("\n");
  }

  root.TG_CATALOG = Object.freeze(products);
  root.TG_STORE = Object.freeze({
    findProduct: findProduct,
    validateCart: validateCart,
    cartTotal: cartTotal,
    orderDraft: orderDraft,
  });
})(typeof window === "undefined" ? globalThis : window);
