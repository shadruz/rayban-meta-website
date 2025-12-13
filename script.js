// ========================================
// Product Data - Full Catalog
// Image mapping: Message N = N.jpg
// Display order: Gen 2 (Clear first) → Gen 1 (Clear first) → Refurbished (Clear first)
// ========================================
const products = [
    // ============ GEN 2 - WAYFARER ============
    // Clear first
    {
        id: 1,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear Matte',
        size: '50',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/11.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 2,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear Matte',
        size: '53',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/11.jpg',
        prices: { wholesale: 425, retail: 475 }
    },
    {
        id: 3,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/10.jpg',
        prices: { wholesale: 500, retail: 550 }
    },
    {
        id: 4,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/12.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 5,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Polaroid Black',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/13.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 6,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/14.jpg',
        prices: { wholesale: 500, retail: 550 }
    },
    {
        id: 7,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/15.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    // ============ GEN 2 - HEADLINER ============
    // Clear first
    {
        id: 8,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Matte Clear',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/17.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 9,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/16.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 10,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/18.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 11,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Matte Polaroid',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/19.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 12,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/20.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 13,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/21.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    // ============ GEN 2 - SKYLER ============
    {
        id: 14,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/22.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 15,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Polaroid Shiny Black',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/23.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 16,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/24.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 17,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/25.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 18,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/26.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 19,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/27.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    // ============ GEN 1 - WAYFARER ============
    // Clear first
    {
        id: 20,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Clear',
        size: '50',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/2.jpg',
        prices: { wholesale: 323, retail: 373 }
    },
    {
        id: 21,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Clear',
        size: '53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/2.jpg',
        prices: { wholesale: 328, retail: 378 }
    },
    {
        id: 22,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Chameleon',
        size: '50',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/1.jpg',
        prices: { wholesale: 410, retail: 460 }
    },
    {
        id: 23,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Chameleon',
        size: '53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/1.jpg',
        prices: { wholesale: 415, retail: 465 }
    },
    {
        id: 24,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Green',
        size: '50',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/3.jpg',
        prices: { wholesale: 323, retail: 373 }
    },
    {
        id: 25,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Green',
        size: '53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/3.jpg',
        prices: { wholesale: 328, retail: 378 }
    },
    {
        id: 26,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Polaroid Black',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/4.jpg',
        prices: { wholesale: 378, retail: 428 }
    },
    // ============ GEN 1 - SKYLER ============
    // Clear first
    {
        id: 27,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Clear',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/7.jpg',
        prices: { wholesale: 323, retail: 373 }
    },
    {
        id: 28,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/5.jpg',
        prices: { wholesale: 410, retail: 460 }
    },
    {
        id: 29,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Green',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/6.jpg',
        prices: { wholesale: 323, retail: 373 }
    },
    {
        id: 30,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Amethyst Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/8.jpg',
        prices: { wholesale: 410, retail: 460 }
    },
    {
        id: 31,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/9.jpg',
        prices: { wholesale: 410, retail: 460 }
    },
    // ============ REFURBISHED (Gen 1) ============
    // Clear first
    {
        id: 32,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Clear',
        size: '50',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/28.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 33,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Clear',
        size: '53',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/28.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 34,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny Green',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/29.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 35,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Polaroid',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/30.jpg',
        prices: { wholesale: 315, retail: 355 }
    },
    {
        id: 36,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Matte Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/31.jpg',
        prices: { wholesale: 368, retail: 410 }
    },
    {
        id: 37,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Matte Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/32.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 38,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/33.jpg',
        prices: { wholesale: 323, retail: 365 }
    },
    {
        id: 39,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Shiny',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/34.jpg',
        prices: { wholesale: 323, retail: 365 }
    },
    {
        id: 40,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/35.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 41,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/36.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 42,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Shiny Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'refurbished',
        image: 'images/37.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    // ============ OAKLEY META HSTN ============
    {
        id: 43,
        name: 'Oakley Meta HSTN',
        variant: 'Black Clear',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_1.jpg',
        prices: { wholesale: 425, retail: 450 }
    },
    {
        id: 44,
        name: 'Oakley Meta HSTN',
        variant: 'Warm Grey Ruby Prizm',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_2.jpg',
        prices: { wholesale: 425, retail: 450 }
    },
    {
        id: 45,
        name: 'Oakley Meta HSTN',
        variant: 'Black Amethyst Chameleon',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_3.jpg',
        prices: { wholesale: 505, retail: 530 }
    },
    {
        id: 46,
        name: 'Oakley Meta HSTN',
        variant: 'Clear Grey Chameleon',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_4.jpg',
        prices: { wholesale: 505, retail: 530 }
    },
    {
        id: 47,
        name: 'Oakley Meta HSTN',
        variant: 'Black Polaroid',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_5.jpg',
        prices: { wholesale: 480, retail: 500 }
    },
    {
        id: 48,
        name: 'Oakley Meta HSTN',
        variant: 'Brown Smoke Deep Water Polaroid',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/oakley_6.jpg',
        prices: { wholesale: 480, retail: 500 }
    }
];

// ========================================
// State
// ========================================
let currentCategory = 'rayban'; // rayban, rayban-limited, oakley, garmin, refurbished
let currentLang = 'ru';
let cart = [];

// Exchange Rate State (Central Bank of Uzbekistan)
let exchangeRate = 12000; // Fallback rate
let rateDate = '';
let isRateLoaded = false;

// ========================================
// Exchange Rate Functions
// ========================================
async function fetchExchangeRate() {
    try {
        // Try direct API call first
        const response = await fetch('https://cbu.uz/ru/arkhiv-kursov-valyut/json/USD/');
        const data = await response.json();
        exchangeRate = parseFloat(data[0].Rate);
        rateDate = data[0].Date;
        isRateLoaded = true;
        updateRateIndicator();
        console.log(`Exchange rate loaded: 1 USD = ${exchangeRate} UZS (${rateDate})`);
    } catch (error) {
        console.warn('Could not fetch exchange rate, using fallback:', error);
        // Keep fallback rate
        isRateLoaded = false;
    }
}

function formatPrice(usdPrice) {
    const uzsPrice = usdPrice * exchangeRate;
    // Round to nearest 10,000 (5,000 threshold)
    const roundedPrice = Math.round(uzsPrice / 10000) * 10000;
    return roundedPrice.toLocaleString('ru-RU') + ' сум';
}

function updateRateIndicator() {
    const indicator = document.getElementById('exchangeRateValue');
    if (indicator) {
        indicator.textContent = `1 USD = ${exchangeRate.toLocaleString('ru-RU')} сум`;
    }
}

// ========================================
// DOM Elements
// ========================================
const productsGrid = document.getElementById('productsGrid');
const categoryToggle = document.getElementById('categoryToggle');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotalValue = document.getElementById('cartTotalValue');
const cartPricingInfo = document.getElementById('cartPricingInfo');
const cartClear = document.getElementById('cartClear');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutModal = document.getElementById('checkoutModal');
const modalClose = document.getElementById('modalClose');
const checkoutForm = document.getElementById('checkoutForm');
const orderSummary = document.getElementById('orderSummary');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ========================================
// Translation Functions
// ========================================
function t(key) {
    return translations[currentLang][key] || key;
}

function updateLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });

    // Re-render products and cart with new language
    renderProducts();
    renderCart();
}

// ========================================
// Language Switcher
// ========================================
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;
        updateLanguage();
    });
});

// ========================================
// Render Products
// ========================================
function renderProducts() {
    // Filter products based on current category
    let filteredProducts = [];

    if (currentCategory === 'rayban') {
        filteredProducts = products.filter(p => p.condition === 'new' && p.category !== 'limited' && p.category !== 'oakley');
    } else if (currentCategory === 'rayban-limited') {
        filteredProducts = products.filter(p => p.category === 'limited');
    } else if (currentCategory === 'oakley') {
        filteredProducts = products.filter(p => p.category === 'oakley');
    } else if (currentCategory === 'garmin') {
        filteredProducts = products.filter(p => p.category === 'garmin');
    } else if (currentCategory === 'refurbished') {
        filteredProducts = products.filter(p => p.condition === 'refurbished');
    }

    // Show placeholder if no products in category
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="coming-soon-placeholder">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="64" height="64">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
                <h3>${t('catalog.comingSoon')}</h3>
                <p>Скоро здесь появятся товары</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => {
        const badgeClass = product.condition === 'new' ? 'new' : 'refurbished';
        let badgeText = product.condition === 'new' ? 'New' : 'Refurbished';
        if (product.generation) badgeText = product.generation;

        // Build product description line
        let description = product.variant || '';
        if (product.size) description += ` (${product.size})`;

        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-color">${description}</p>
                <div class="product-prices">
                    <div class="price-row price-wholesale">
                        <span class="price-current">${formatPrice(product.prices.wholesale)}</span>
                        <span class="price-label">${t('catalog.wholesale')}</span>
                    </div>
                    <div class="price-row price-retail">
                        <span class="price-current">${formatPrice(product.prices.retail)}</span>
                        <span class="price-label">${t('catalog.retail')}</span>
                    </div>
                </div>
                <button class="btn btn-secondary add-to-cart-btn" onclick="addToCart(${product.id})">${t('catalog.addToCart')}</button>
            </div>
        `;
    }).join('');
}

// ========================================
// Cart Functions
// ========================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        // Build description for cart
        let description = product.variant || '';
        if (product.size) description += ` (${product.size})`;
        if (product.generation) description += ` • ${product.generation}`;

        cart.push({
            productId,
            condition: product.condition,
            name: product.name,
            description: description,
            prices: product.prices,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(t('cart.added'));
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getTotal() {
    const totalItems = getTotalItems();
    const isWholesale = totalItems >= 10;

    return cart.reduce((sum, item) => {
        const price = isWholesale ? item.prices.wholesale : item.prices.retail;
        return sum + (price * item.quantity);
    }, 0);
}

function updateCartUI() {
    const totalItems = getTotalItems();
    cartCount.textContent = totalItems;

    renderCart();
}

function renderCart() {
    const totalItems = getTotalItems();
    const isWholesale = totalItems >= 10;

    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartEmpty.style.display = 'flex';
        cartFooter.style.display = 'none';
        return;
    }

    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';

    cartItems.innerHTML = cart.map((item, index) => {
        const price = isWholesale ? item.prices.wholesale : item.prices.retail;
        const badgeClass = item.condition === 'new' ? 'new' : 'refurbished';
        const badgeText = item.condition === 'new' ? t('catalog.new') : 'Refurbished';

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-badge ${badgeClass}">${badgeText}</span>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-color">${item.description}</p>
                    <p class="cart-item-price">${formatPrice(price)} × ${item.quantity} = <strong>${formatPrice(price * item.quantity)}</strong></p>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${index}, -1)">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${index})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    // Update pricing info
    if (isWholesale) {
        cartPricingInfo.innerHTML = `<span class="wholesale-badge">✓ ${t('cart.wholesalePrice')}</span>`;
        cartPricingInfo.classList.add('wholesale');
    } else {
        cartPricingInfo.innerHTML = `<span>${t('cart.retailPrice')}</span>`;
        cartPricingInfo.classList.remove('wholesale');
    }

    cartTotalValue.textContent = formatPrice(getTotal());
}

// ========================================
// Cart Sidebar Toggle
// ========================================
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
cartClear.addEventListener('click', clearCart);

// ========================================
// Checkout Modal
// ========================================
function openCheckout() {
    if (cart.length === 0) return;

    closeCart();

    const totalItems = getTotalItems();
    const isWholesale = totalItems >= 10;
    const priceType = isWholesale ? t('cart.wholesalePrice') : t('cart.retailPrice');

    orderSummary.innerHTML = `
        <h4>${t('checkout.orderSummary')}</h4>
        <div class="order-items">
            ${cart.map(item => {
        const price = isWholesale ? item.prices.wholesale : item.prices.retail;
        return `
                    <div class="order-item">
                        <span>${item.name} ${item.description ? `(${item.description})` : ''}</span>
                        <span>${item.quantity} ${t('cart.itemsCount')} × ${formatPrice(price)}</span>
                    </div>
                `;
    }).join('')}
        </div>
        <div class="order-total-row">
            <span>${t('checkout.totalItems')}</span>
            <span>${totalItems} ${t('cart.itemsCount')}</span>
        </div>
        <div class="order-pricing-type">${priceType}</div>
        <div class="order-total">
            <span>${t('cart.total')}</span>
            <span>${formatPrice(getTotal())}</span>
        </div>
    `;

    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = '';
}

checkoutBtn.addEventListener('click', openCheckout);
modalClose.addEventListener('click', closeCheckout);
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) closeCheckout();
});

// ========================================
// Telegram Bot Configuration
// ========================================
const TELEGRAM_BOT_TOKEN = '8068572788:AAECuusnDI9tZzwzwoAkEmDVEMmJVLD2gZU';
const TELEGRAM_CHAT_ID = '1798702419';

async function sendToTelegram(orderData) {
    const totalItems = getTotalItems();
    const isWholesale = totalItems >= 10;
    const priceType = isWholesale ? '🏷️ ОПТОВАЯ ЦЕНА' : '💰 Розничная цена';

    // Build order items list
    const itemsList = orderData.items.map(item => {
        const price = isWholesale ? item.prices.wholesale : item.prices.retail;
        return `  • ${item.name} ${item.description ? `(${item.description})` : ''} — ${item.quantity} шт. × ${formatPrice(price)}`;
    }).join('\n');

    const message = `
🛒 *НОВЫЙ ЗАКАЗ!*

👤 *Клиент:*
• Имя: ${orderData.customer.name}
• Телефон: ${orderData.customer.phone}
${orderData.customer.telegram ? `• Telegram: ${orderData.customer.telegram}` : ''}

📦 *Товары:*
${itemsList}

${priceType}
📊 Всего товаров: ${totalItems} шт.
💵 *ИТОГО: ${formatPrice(orderData.total)}*

⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Tashkent' })}
    `.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const result = await response.json();
        return result.ok;
    } catch (error) {
        console.error('Failed to send to Telegram:', error);
        return false;
    }
}

// ========================================
// Send Order via Telegram Direct Message
// ========================================
const TELEGRAM_USERNAME = 'techgeek_uz'; // Your personal Telegram username

document.getElementById('sendViaTelegram').addEventListener('click', function () {
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();

    if (!customerName) {
        showToast('Пожалуйста, введите ваше имя');
        return;
    }

    // Validate phone: must start with + and have 12-13 digits
    const phoneRegex = /^\+[0-9]{12,13}$/;
    if (!customerPhone || !phoneRegex.test(customerPhone)) {
        showToast('Введите номер в формате +998XXXXXXXXX');
        return;
    }

    const totalItems = getTotalItems();
    const isWholesale = totalItems >= 10;
    const priceType = isWholesale ? '🏷️ ОПТОВАЯ ЦЕНА' : '💰 Розничная цена';

    // Build order message
    const itemsList = cart.map(item => {
        const price = isWholesale ? item.prices.wholesale : item.prices.retail;
        return `• ${item.name} ${item.description ? `(${item.description})` : ''} — ${item.quantity} шт. × ${formatPrice(price)}`;
    }).join('\n');

    const message = `🛒 НОВЫЙ ЗАКАЗ с сайта TechGeek.uz

👤 Имя: ${customerName}
📞 Телефон: ${customerPhone}

📦 Товары:
${itemsList}

${priceType}
📊 Всего: ${totalItems} шт.
💵 ИТОГО: ${formatPrice(getTotal())}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Open Telegram with pre-filled message
    const telegramUrl = `https://t.me/${TELEGRAM_USERNAME}?text=${encodedMessage}`;
    window.open(telegramUrl, '_blank');

    // Also send notification to bot
    sendToTelegram({
        customer: { name: customerName, telegram: 'Отправлено через личное сообщение' },
        items: cart,
        total: getTotal(),
        isWholesale: isWholesale
    });

    // Clear cart
    closeCheckout();
    cart = [];
    updateCartUI();

    showToast('Заказ открыт в Telegram! Отправьте сообщение.');
});

// ========================================
// Toast Notification
// ========================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// Category Toggle
// ========================================
function setupToggle(container, callback) {
    const buttons = container.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            callback(btn.dataset);
        });
    });
}

setupToggle(categoryToggle, (data) => {
    currentCategory = data.category;
    renderProducts();
});

// ========================================
// Mobile Menu
// ========================================
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ========================================
// Smooth scroll for navigation links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Initialize
// ========================================
// Fetch exchange rate first, then render with converted prices
fetchExchangeRate().then(() => {
    renderProducts();
    renderCart();
});
renderProducts();
updateCartUI();

// ========================================
// Floating Contact Button (FAB)
// ========================================
const fabMain = document.getElementById('fabMain');
const contactFab = document.querySelector('.contact-fab');

fabMain.addEventListener('click', () => {
    contactFab.classList.toggle('open');
});

// Close FAB when clicking outside
document.addEventListener('click', (e) => {
    if (!contactFab.contains(e.target)) {
        contactFab.classList.remove('open');
    }
});
