(function () {
    'use strict';

    const productByPath = {
        '/ray-ban-meta-gen-1-clear/': { id: 'RBM-G1-CLEAR', name: 'Ray-Ban Meta Gen 1 Clear', price: 280 },
        '/uz/ray-ban-meta-gen-1-clear/': { id: 'RBM-G1-CLEAR', name: 'Ray-Ban Meta Gen 1 Clear', price: 280 },
        '/ray-ban-meta-gen-1-chameleon/': { id: 'RBM-G1-CHAMELEON', name: 'Ray-Ban Meta Gen 1 Chameleon', price: 350 },
        '/uz/ray-ban-meta-gen-1-chameleon/': { id: 'RBM-G1-CHAMELEON', name: 'Ray-Ban Meta Gen 1 Chameleon', price: 350 },
        '/whoop-mg-life/': { id: 'WHOOP-MG-LIFE', name: 'WHOOP MG Life 5.0', price: 355 },
        '/uz/whoop-mg-life/': { id: 'WHOOP-MG-LIFE', name: 'WHOOP MG Life 5.0', price: 355 }
    };

    function sendEvent(eventName, parameters) {
        const payload = Object.assign({
            page_path: window.location.pathname,
            page_language: document.documentElement.lang || 'ru'
        }, parameters || {});

        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, payload);
            return;
        }

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(Object.assign({ event: eventName }, payload));
    }

    function getLocation(element) {
        const section = element.closest('section, header, footer, nav, aside');
        return element.dataset.analyticsLocation || (section && section.id) || (section && section.tagName.toLowerCase()) || 'page';
    }

    document.addEventListener('click', function (event) {
        const target = event.target.closest('a, button');
        if (!target) return;

        const href = target.getAttribute('href') || '';
        const location = getLocation(target);
        const label = (target.textContent || target.getAttribute('aria-label') || '').trim().slice(0, 100);

        if (href.startsWith('tel:')) {
            sendEvent('phone_clicked', { link_location: location });
            return;
        }

        if (href.includes('t.me/')) {
            const eventName = target.classList.contains('wholesale-link') ? 'wholesale_request_clicked' : 'telegram_clicked';
            sendEvent(eventName, { link_location: location, link_text: label });
            return;
        }

        if (href.includes('instagram.com/')) {
            sendEvent('instagram_clicked', { link_location: location });
            return;
        }

        if (target.classList.contains('add-to-cart-btn')) {
            const card = target.closest('.product-card');
            sendEvent('add_to_cart', {
                product_id: card ? card.dataset.productId || '' : '',
                item_name: card ? (card.querySelector('.product-name') || {}).textContent || '' : '',
                currency: 'USD'
            });
            return;
        }

        if (href && Object.prototype.hasOwnProperty.call(productByPath, new URL(href, window.location.origin).pathname)) {
            const product = productByPath[new URL(href, window.location.origin).pathname];
            sendEvent('product_clicked', {
                item_id: product.id,
                item_name: product.name,
                value: product.price,
                currency: 'USD',
                link_location: location
            });
        }
    });

    document.addEventListener('techgeek:order-sent', function (event) {
        sendEvent('lead_form_submitted', { form_name: 'checkout' });
        sendEvent('telegram_order_sent', Object.assign({ checkout_type: 'retail' }, event.detail || {}));
    });

    const currentProduct = productByPath[window.location.pathname];
    if (currentProduct) {
        sendEvent('product_viewed', {
            item_id: currentProduct.id,
            item_name: currentProduct.name,
            value: currentProduct.price,
            currency: 'USD'
        });
    }
}());
