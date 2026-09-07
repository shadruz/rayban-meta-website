(function () {
  "use strict";
  const store = window.TG_STORE;
  if (!store) return;

  const CART_KEY = "techgeek.cart.v1";
  const LANGUAGE_KEY = "techgeek.language";
  const CURRENCY_KEY = "techgeek.currency";
  const TELEGRAM = "https://t.me/techgeek_uz";
  const words = {
    ru: {
      added: "Добавлено в корзину",
      removed: "Товар удалён",
      bag: "Корзина",
      decrease: "Уменьшить количество",
      increase: "Увеличить количество",
      remove: "Удалить",
      quantity: "Количество",
      loading: "Получаем курс ЦБ Узбекистана…",
      unavailable: "Курс ЦБ сейчас недоступен. Цены показаны в долларах.",
      approximate: "Сумма в сумах ориентировочная. Итог подтвердим при заказе.",
      source: "Курс ЦБ Узбекистана",
      empty: "Сначала добавьте товар в корзину.",
      limit: "Для партии больше 99 штук напишите нам за оптовой ценой.",
      found: "Товаров в подборке",
      draft: "Черновик заказа открыт в Telegram. Отправьте его в чате.",
      life: "Life · 12 месяцев",
      pieces: "шт.",
    },
    uz: {
      added: "Savatga qo‘shildi",
      removed: "Mahsulot olib tashlandi",
      bag: "Savat",
      decrease: "Miqdorni kamaytirish",
      increase: "Miqdorni oshirish",
      remove: "Olib tashlash",
      quantity: "Miqdor",
      loading: "O‘zbekiston Markaziy banki kursi yuklanmoqda…",
      unavailable:
        "Markaziy bank kursi hozir mavjud emas. Narxlar dollarda ko‘rsatilgan.",
      approximate:
        "So‘mdagi summa taxminiy. Yakuniy summani buyurtmada tasdiqlaymiz.",
      source: "O‘zbekiston Markaziy banki kursi",
      empty: "Avval savatga mahsulot qo‘shing.",
      limit: "99 donadan katta partiya uchun ulgurji narxni bizdan so‘rang.",
      found: "Tanlovdagi mahsulotlar",
      draft: "Buyurtma qoralamasi Telegramda ochildi. Uni chatda yuboring.",
      life: "Life · 12 oy",
      pieces: "dona",
    },
  };

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_) {
      return null;
    }
  }
  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_) {
      /* Browsing without storage still works. */
    }
  }
  function parseCart(value) {
    try {
      return store.validateCart(JSON.parse(value));
    } catch (_) {
      return [];
    }
  }
  const params = new URLSearchParams(window.location.search);
  const initialLanguage =
    params.get("lang") ||
    (window.location.pathname.startsWith("/uz/")
      ? "uz"
      : readStorage(LANGUAGE_KEY));
  let language = initialLanguage === "uz" ? "uz" : "ru";
  let currency = "USD";
  let cart = parseCart(readStorage(CART_KEY));
  let rate = null;
  let ratePending = null;
  let desiredCurrency = readStorage(CURRENCY_KEY) === "UZS" ? "UZS" : "USD";
  let toastTimer;
  let returnFocus;
  const dialog = document.getElementById("cartDialog");
  const mobileMenu = document.getElementById("mobileMenu");
  const selectAll = function (selector) {
    return Array.from(document.querySelectorAll(selector));
  };
  const text = function (key) {
    return words[language][key];
  };
  const setText = function (id, value) {
    const node = document.getElementById(id);
    if (node) node.textContent = value;
  };

  function event(name, detail) {
    document.dispatchEvent(
      new CustomEvent("techgeek:" + name, { detail: detail }),
    );
  }

  function formatPrice(value) {
    if (currency === "UZS" && rate) {
      const amount = Math.round(value * rate.value);
      return (
        "≈ " +
        amount.toLocaleString(language === "uz" ? "uz-UZ" : "ru-RU") +
        (language === "uz" ? " so‘m" : " сум")
      );
    }
    return "$" + value.toLocaleString("en-US");
  }

  function notify(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("show", "is-visible");
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("show", "is-visible");
      toast.hidden = true;
    }, 4200);
  }

  function translatedVariant(product) {
    return product.id === "whoop" ? text("life") : product.variant;
  }

  function element(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content != null) node.textContent = content;
    return node;
  }

  function quantityButton(product, direction, label) {
    const button = element(
      "button",
      "quantity-button",
      direction > 0 ? "+" : "−",
    );
    button.type = "button";
    button.dataset.quantity = product.id;
    button.dataset.delta = String(direction);
    button.setAttribute(
      "aria-label",
      label + ": " + product.name + " " + translatedVariant(product),
    );
    return button;
  }

  function renderCart() {
    const totalQuantity = cart.reduce(function (sum, line) {
      return sum + line.quantity;
    }, 0);
    const total = store.cartTotal(cart);
    selectAll("#cartCount, [data-cart-count]").forEach(function (node) {
      node.textContent = String(totalQuantity);
    });
    selectAll("[data-cart-open]").forEach(function (node) {
      node.setAttribute("aria-label", text("bag") + ": " + totalQuantity);
    });
    setText("cartTotal", formatPrice(total));
    setText("cartSubtotal", formatPrice(total));
    setText("cartCurrencyNote", currency === "UZS" ? text("approximate") : "");
    const empty = document.getElementById("cartEmpty");
    const summary = document.getElementById("cartSummary");
    if (empty) empty.hidden = totalQuantity !== 0;
    if (summary) summary.hidden = totalQuantity === 0;
    const checkout = document.getElementById("checkoutLink");
    if (checkout) {
      if (totalQuantity)
        checkout.href =
          TELEGRAM +
          "?text=" +
          encodeURIComponent(store.orderDraft(cart, language));
      else checkout.removeAttribute("href");
      checkout.setAttribute("aria-disabled", totalQuantity ? "false" : "true");
      checkout.tabIndex = totalQuantity ? 0 : -1;
      checkout.target = "_blank";
      checkout.rel = "noopener noreferrer";
    }
    const items = document.getElementById("cartItems");
    if (!items) return;
    const fragment = document.createDocumentFragment();
    cart.forEach(function (line) {
      const product = store.findProduct(line.id);
      const row = element("article", "cart-item");
      row.dataset.cartItem = product.id;
      const photo = element("img", "cart-item-image");
      photo.src = product.image;
      photo.alt = product.name + " " + product.variant;
      photo.width = 100;
      photo.height = 100;
      photo.loading = "lazy";
      const info = element("div", "cart-item-info");
      const name = element("a", "cart-item-name", product.name);
      name.href = product.url[language];
      info.append(
        name,
        element("p", "cart-item-variant", translatedVariant(product)),
        element(
          "p",
          "cart-item-price",
          formatPrice(product.price * line.quantity),
        ),
      );
      const controls = element("div", "cart-item-controls");
      const quantity = element("div", "quantity-control");
      quantity.setAttribute("role", "group");
      quantity.setAttribute(
        "aria-label",
        text("quantity") + ": " + product.name,
      );
      const amount = element("span", "quantity-value", line.quantity);
      amount.setAttribute("aria-label", line.quantity + " " + text("pieces"));
      const increase = quantityButton(product, 1, text("increase"));
      if (line.quantity >= 99) increase.disabled = true;
      quantity.append(
        quantityButton(product, -1, text("decrease")),
        amount,
        increase,
      );
      const remove = element("button", "cart-remove", text("remove"));
      remove.type = "button";
      remove.dataset.remove = product.id;
      remove.setAttribute(
        "aria-label",
        text("remove") + ": " + product.name + " " + translatedVariant(product),
      );
      controls.append(quantity, remove);
      row.append(photo, info, controls);
      fragment.append(row);
    });
    items.replaceChildren(fragment);
  }

  function persistCart() {
    cart = store.validateCart(cart);
    writeStorage(CART_KEY, JSON.stringify(cart));
    renderCart();
  }

  function addProduct(id) {
    const product = store.findProduct(id);
    if (!product) return false;
    const existing = cart.find(function (line) {
      return line.id === product.id;
    });
    if (existing && existing.quantity >= 99) {
      notify(text("limit"));
      return false;
    }
    if (existing) existing.quantity += 1;
    else cart.push({ id: product.id, quantity: 1 });
    persistCart();
    notify(text("added"));
    event("add-to-cart", {
      item_id: product.sku,
      item_name: product.name + " " + product.variant,
      quantity: 1,
      value: product.price,
      currency: "USD",
    });
    return true;
  }

  function setMenu(open) {
    if (!mobileMenu) return;
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle("is-open", open);
    selectAll("[data-menu-toggle]").forEach(function (button) {
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-controls", "mobileMenu");
    });
  }

  function closeCart() {
    if (!dialog) return;
    if (typeof dialog.close === "function") dialog.close();
    else {
      dialog.removeAttribute("open");
      document.body.classList.remove("cart-is-open");
    }
  }

  function openCart(opener) {
    if (!dialog) return;
    setMenu(false);
    returnFocus = opener || document.activeElement;
    renderCart();
    if (!dialog.open) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    document.body.classList.add("cart-is-open");
    const close = dialog.querySelector("[data-cart-close]");
    if (close) close.focus();
  }

  function updatePrices() {
    document.documentElement.dataset.currency = currency;
    selectAll("[data-price]").forEach(function (node) {
      const product = store.findProduct(node.dataset.price);
      const value = product ? product.price : Number(node.dataset.price);
      if (Number.isFinite(value) && value >= 0)
        node.textContent = formatPrice(value);
    });
    selectAll("[data-currency]").forEach(function (button) {
      const selected = button.dataset.currency.toUpperCase() === currency;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    let note = "";
    if (rate && currency === "UZS") {
      note =
        text("source") +
        ": $1 = " +
        rate.value.toLocaleString("ru-RU") +
        (language === "uz" ? " so‘m" : " сум") +
        " · " +
        rate.date +
        ". " +
        text("approximate");
    }
    setText("currencyNote", note);
    renderCart();
  }

  function setLanguage(value) {
    language = value === "uz" ? "uz" : "ru";
    writeStorage(LANGUAGE_KEY, language);
    document.documentElement.lang = language;
    selectAll("[data-ru][data-uz]").forEach(function (node) {
      node.textContent = node.dataset[language];
    });
    selectAll("[data-aria-ru][data-aria-uz]").forEach(function (node) {
      node.setAttribute(
        "aria-label",
        node.dataset[language === "uz" ? "ariaUz" : "ariaRu"],
      );
    });
    selectAll("[data-href-ru][data-href-uz]").forEach(function (node) {
      node.href = node.dataset[language === "uz" ? "hrefUz" : "hrefRu"];
    });
    selectAll("[data-product-link]").forEach(function (node) {
      const product = store.findProduct(node.dataset.productLink);
      if (product) node.href = product.url[language];
    });
    selectAll("[data-lang]").forEach(function (button) {
      const selected = button.dataset.lang === language;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    updatePrices();
  }

  function validateRate(payload) {
    let value;
    let date;
    if (Array.isArray(payload)) {
      const usd = payload.find(function (entry) {
        return entry && entry.Ccy === "USD";
      });
      if (!usd || String(usd.Nominal) !== "1")
        throw new Error("Invalid CBU currency");
      value = Number(usd.Rate);
      const dateParts = String(usd.Date).match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
      if (dateParts)
        date = dateParts[3] + "-" + dateParts[2] + "-" + dateParts[1];
    } else if (payload && payload.source === "Central Bank of Uzbekistan") {
      value = Number(payload.rate);
      date = payload.date;
    }
    const timestamp =
      typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date)
        ? Date.parse(date + "T00:00:00Z")
        : NaN;
    const age = Date.now() - timestamp;
    if (
      !Number.isFinite(value) ||
      value <= 0 ||
      !Number.isFinite(timestamp) ||
      age > 10 * 86400000 ||
      age < -2 * 86400000
    ) {
      throw new Error("Missing or stale CBU exchange rate");
    }
    return { value: value, date: date };
  }

  async function requestRate(url) {
    const controller = new AbortController();
    const timeout = window.setTimeout(function () {
      controller.abort();
    }, 6500);
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        credentials: "omit",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Exchange rate unavailable");
      return validateRate(await response.json());
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function loadRate() {
    try {
      return await requestRate("/api/exchange-rate");
    } catch (_) {
      return requestRate("https://cbu.uz/ru/arkhiv-kursov-valyut/json/USD/");
    }
  }

  async function setCurrency(value) {
    desiredCurrency = value === "UZS" ? "UZS" : "USD";
    if (desiredCurrency === "USD") {
      currency = "USD";
      writeStorage(CURRENCY_KEY, currency);
      updatePrices();
      return;
    }
    if (!rate) {
      setText("currencyNote", text("loading"));
      selectAll('[data-currency="UZS"]').forEach(function (button) {
        button.setAttribute("aria-busy", "true");
      });
      if (!ratePending) ratePending = loadRate();
      try {
        rate = await ratePending;
      } catch (_) {
        currency = "USD";
        updatePrices();
        if (desiredCurrency === "UZS") {
          setText("currencyNote", text("unavailable"));
          notify(text("unavailable"));
        }
        return;
      } finally {
        ratePending = null;
        selectAll('[data-currency="UZS"]').forEach(function (button) {
          button.removeAttribute("aria-busy");
        });
      }
    }
    if (desiredCurrency === "UZS") {
      currency = "UZS";
      writeStorage(CURRENCY_KEY, currency);
      updatePrices();
    }
  }

  function filterProducts(value) {
    if (!["all", "rayban", "whoop"].includes(value)) return;
    let shown = 0;
    selectAll(".product-card[data-category]").forEach(function (card) {
      const match = value === "all" || card.dataset.category === value;
      card.hidden = !match;
      if (match) shown += 1;
    });
    selectAll("[data-filter]").forEach(function (button) {
      const selected = button.dataset.filter === value;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    setText("filterStatus", text("found") + ": " + shown);
  }

  document.addEventListener("click", function (click) {
    const target =
      click.target instanceof Element
        ? click.target.closest("a, button")
        : null;
    if (!target) return;
    if (target.hasAttribute("data-add")) {
      click.preventDefault();
      addProduct(target.dataset.add);
    } else if (target.hasAttribute("data-cart-open")) {
      click.preventDefault();
      openCart(target);
    } else if (target.hasAttribute("data-cart-close")) {
      click.preventDefault();
      closeCart();
    } else if (target.hasAttribute("data-quantity")) {
      const line = cart.find(function (item) {
        return item.id === target.dataset.quantity;
      });
      if (!line) return;
      const delta = Number(target.dataset.delta);
      if (delta !== -1 && delta !== 1) return;
      const actionId = line.id;
      line.quantity += delta;
      persistCart();
      const replacement =
        dialog &&
        dialog.querySelector(
          '[data-quantity="' +
            actionId +
            '"][data-delta="' +
            delta +
            '"]:not(:disabled)',
        );
      if (replacement) replacement.focus();
      else if (dialog) {
        const fallback = dialog.querySelector(
          ".quantity-button:not(:disabled), [data-cart-close]",
        );
        if (fallback) fallback.focus();
      }
    } else if (target.hasAttribute("data-remove")) {
      cart = cart.filter(function (line) {
        return line.id !== target.dataset.remove;
      });
      persistCart();
      notify(text("removed"));
      if (dialog) {
        const fallback = dialog.querySelector(
          ".cart-remove, [data-cart-close]",
        );
        if (fallback) fallback.focus();
      }
    } else if (target.id === "checkoutLink") {
      if (!cart.length) {
        click.preventDefault();
        notify(text("empty"));
        return;
      }
      event("checkout-opened", {
        value: store.cartTotal(cart),
        currency: "USD",
        items_count: cart.reduce(function (sum, line) {
          return sum + line.quantity;
        }, 0),
        checkout_type: "telegram_draft",
      });
    } else if (target.hasAttribute("data-filter")) {
      filterProducts(target.dataset.filter);
    } else if (target.hasAttribute("data-lang")) {
      setLanguage(target.dataset.lang);
    } else if (target.hasAttribute("data-currency")) {
      setCurrency(target.dataset.currency.toUpperCase());
    } else if (target.hasAttribute("data-menu-toggle")) {
      setMenu(mobileMenu ? mobileMenu.hidden : false);
    }
    if (mobileMenu && mobileMenu.contains(target) && target.matches("a[href]"))
      setMenu(false);
  });

  if (dialog) {
    dialog.addEventListener("close", function () {
      document.body.classList.remove("cart-is-open");
      if (
        returnFocus &&
        returnFocus.isConnected &&
        typeof returnFocus.focus === "function"
      )
        returnFocus.focus();
    });
    dialog.addEventListener("click", function (click) {
      if (click.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (
        click.clientX < bounds.left ||
        click.clientX > bounds.right ||
        click.clientY < bounds.top ||
        click.clientY > bounds.bottom
      )
        closeCart();
    });
  }
  document.addEventListener("keydown", function (key) {
    if (key.key === "Escape" && mobileMenu && !mobileMenu.hidden) {
      setMenu(false);
      const toggle = document.querySelector("[data-menu-toggle]");
      if (toggle) toggle.focus();
    }
  });
  document.addEventListener("click", function (click) {
    if (
      mobileMenu &&
      !mobileMenu.hidden &&
      click.target instanceof Element &&
      !mobileMenu.contains(click.target) &&
      !click.target.closest("[data-menu-toggle]")
    )
      setMenu(false);
  });
  window.addEventListener("storage", function (change) {
    if (change.key === CART_KEY) {
      cart = parseCart(change.newValue);
      renderCart();
    }
  });

  setMenu(false);
  setLanguage(language);
  filterProducts("all");
  if (desiredCurrency === "UZS") setCurrency("UZS");
  const productToAdd = params.get("add");
  if (productToAdd && addProduct(productToAdd)) {
    // Consume a deep link once so refreshing cannot silently add another unit.
    params.delete("add");
    const query = params.toString();
    window.history.replaceState(
      null,
      "",
      window.location.pathname +
        (query ? "?" + query : "") +
        window.location.hash,
    );
    openCart();
  }
})();
