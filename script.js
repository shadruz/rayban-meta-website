// ========================================
// Product Data - Full Catalog
// Names and colors stay in English (not translated)
// ========================================
const products = [
    // ============ NEW - GEN 1 ============
    {
        id: 1,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Chameleon',
        size: '50/53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_1_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 410, retail: 450 }
    },
    {
        id: 2,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear',
        size: '50',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_2_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 360 }
    },
    {
        id: 3,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear',
        size: '53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_3_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 328, retail: 365 }
    },
    {
        id: 4,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Green',
        size: '50',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_4_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 360 }
    },
    {
        id: 5,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Green',
        size: '53',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_5_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 328, retail: 365 }
    },
    {
        id: 6,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Polaroid Black',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_6_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 378, retail: 420 }
    },
    {
        id: 7,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_7_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 410, retail: 450 }
    },
    {
        id: 8,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Green',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_8_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 360 }
    },
    {
        id: 9,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Clear',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_9_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 360 }
    },
    {
        id: 10,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Amethyst Chameleon',
        size: '',
        generation: 'Gen 1',
        condition: 'new',
        image: 'images/photo_10_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 410, retail: 450 }
    },
    // ============ NEW - GEN 2 ============
    {
        id: 11,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_11_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 500, retail: 550 }
    },
    {
        id: 12,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear Matte',
        size: '50',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_12_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 13,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear Matte',
        size: '53',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_13_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 425, retail: 475 }
    },
    {
        id: 14,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_14_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 15,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Polaroid Black',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_15_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 16,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_16_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 17,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_17_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 18,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Clear',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_18_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 19,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_19_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 20,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Polaroid',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_20_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 21,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_21_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 22,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Green',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_22_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 420, retail: 470 }
    },
    {
        id: 23,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Polaroid Shiny Black',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_23_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 455, retail: 505 }
    },
    {
        id: 24,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_24_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 25,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_25_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    {
        id: 26,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Chameleon',
        size: '',
        generation: 'Gen 2',
        condition: 'new',
        image: 'images/photo_26_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 515, retail: 565 }
    },
    // ============ REFURBISHED ============
    {
        id: 27,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear',
        size: '50',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_27_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 28,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Clear',
        size: '53',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_28_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 29,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Green',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_29_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 281, retail: 320 }
    },
    {
        id: 30,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Polaroid',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_30_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 315, retail: 355 }
    },
    {
        id: 31,
        name: 'Ray-Ban Meta Wayfarer',
        variant: 'Chameleon',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_31_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 368, retail: 410 }
    },
    {
        id: 32,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Chameleon',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_32_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 33,
        name: 'Ray-Ban Meta Wayfarer',
        variant: '',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_33_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 365 }
    },
    {
        id: 34,
        name: 'Ray-Ban Meta Wayfarer',
        variant: '',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_34_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 323, retail: 365 }
    },
    {
        id: 35,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Chameleon',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_35_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 36,
        name: 'Ray-Ban Meta Headliner',
        variant: 'Chameleon',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_36_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 364, retail: 405 }
    },
    {
        id: 37,
        name: 'Ray-Ban Meta Skyler',
        variant: 'Chameleon',
        size: '',
        generation: '',
        condition: 'refurbished',
        image: 'images/photo_37_2025-12-09_00-50-37.jpg',
        prices: { wholesale: 364, retail: 405 }
    }
];

// ========================================
// State
// ========================================
let currentCondition = 'new';
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
    const uzsPrice = Math.round(usdPrice * exchangeRate);
    return uzsPrice.toLocaleString('ru-RU') + ' сум';
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
const conditionToggle = document.getElementById('conditionToggle');
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
    const filteredProducts = products.filter(p => p.condition === currentCondition);

    productsGrid.innerHTML = filteredProducts.map(product => {
        const badgeClass = product.condition === 'new' ? 'new' : 'refurbished';
        const badgeText = product.condition === 'new' ? t('catalog.new') : 'Refurbished';

        // Build product description line
        let description = product.variant || '';
        if (product.size) description += ` (${product.size})`;
        if (product.generation) description += ` • ${product.generation}`;

        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <span class="product-badge ${badgeClass}">${badgeText}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-color">${description}</p>
                <div class="product-prices">
                    <div class="price-row">
                        <span class="price-current">${formatPrice(product.prices.retail)}</span>
                        <span class="price-label">${t('catalog.retail')}</span>
                    </div>
                    <div class="price-row price-wholesale">
                        <span class="price-current">${formatPrice(product.prices.wholesale)}</span>
                        <span class="price-label">${t('catalog.wholesale')}</span>
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
// Checkout Form Submit
// ========================================
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(checkoutForm);
    const data = Object.fromEntries(formData);

    // Here you would send the order to your backend
    console.log('Order submitted:', {
        customer: data,
        items: cart,
        total: getTotal(),
        isWholesale: getTotalItems() >= 10
    });

    closeCheckout();
    cart = [];
    updateCartUI();
    checkoutForm.reset();

    showToast(t('checkout.success'));
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
// Condition Toggle
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

setupToggle(conditionToggle, (data) => {
    currentCondition = data.condition;
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
