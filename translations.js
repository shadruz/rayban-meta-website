// ========================================
// Translations (Russian & Uzbek)
// Product names, colors stay in English
// ========================================
const translations = {
    ru: {
        // Navigation
        'nav.catalog': 'Каталог',
        'nav.instock': 'В наличии',
        'nav.features': 'Характеристики',
        'nav.delivery': 'Доставка и гарантия',

        // Hero
        'hero.badge': 'В наличии в Ташкенте',
        'hero.title': 'Ray-Ban Meta и WHOOP',
        'hero.titleAccent': 'в Ташкенте',
        'hero.subtitle': 'Оригинальные умные очки с камерой и фитнес-браслеты по выгодной цене. Проверяем комплектность, даём гарантию подлинности и доставляем по Узбекистану.',
        'hero.btnCatalog': 'Смотреть товары в наличии',
        'hero.btnFeatures': 'Спросить в Telegram',
        'hero.warranty': 'Гарантия 1 месяц на заводской брак',
        'stock.quickTitle': 'Сейчас в наличии:',

        // Catalog
        'catalog.title': 'В наличии в Ташкенте',
        'catalog.subtitle': 'Оригинальные Ray-Ban Meta Gen 1 и WHOOP MG Life с гарантией подлинности',
        'catalog.category': 'Категория:',
        'catalog.rayban': 'Ray-Ban Gen 1-2',
        'catalog.raybanLimited': 'Ray-Ban Meta Limited',
        'catalog.oakley': 'Oakley Meta',
        'catalog.garmin': 'Garmin',
        'catalog.whoop': 'WHOOP',
        'catalog.refurbished': 'Ray-Ban Meta Refurbished',
        'catalog.comingSoon': 'Скоро в продаже',
        'catalog.priceInfo': 'Розничную цену уточняйте по телефону или в Telegram. Опт — от 25 шт.',
        'catalog.addToCart': 'В корзину',
        'catalog.new': 'Новый',
        'catalog.retail': 'розница',
        'catalog.wholesale': 'опт от 10 шт',
        'catalog.instock': 'В наличии',
        'catalog.preorder': 'Под заказ',
        'catalog.details': 'Подробнее',
        'catalog.book': 'Забронировать',

        // Features
        'features.title': 'Возможности и характеристики',
        'features.subtitle': 'Подробные спецификации наших продуктов',
        'features.camera': '12MP Камера',
        'features.cameraDesc': 'Ультраширокоугольная камера для фото и видео. Снимайте моменты без телефона в руках.',
        'features.aiDesc': 'Голосовой ассистент с искусственным интеллектом. Просто скажите "Hey Meta".',
        'features.sound': 'Премиум звук',
        'features.soundDesc': 'Встроенные динамики с открытым дизайном. Слушайте музыку и принимайте звонки.',
        'features.battery': '4+ часов работы',
        'features.batteryDesc': 'До 4 часов активного использования. Зарядный кейс дает еще 32 часа дополнительно.',
        'features.streaming': 'Стриминг',
        'features.streamingDesc': 'Прямые трансляции в Instagram и Facebook одним касанием.',
        'features.privacy': 'Приватность',
        'features.privacyDesc': 'LED-индикатор при записи. Физическая кнопка отключения камеры и микрофона.',

        // Trust
        'trust.title': 'Покупка без лишнего риска',
        'trust.subtitle': 'Проверяем товар до передачи и остаёмся на связи после покупки',
        'trust.authTitle': 'Гарантия подлинности',
        'trust.authText': 'Продаём оригинальные устройства в заводской комплектации. Перед покупкой можно уточнить маркировку и комплект поставки.',
        'trust.warrantyTitle': 'Гарантия на заводской брак',
        'trust.warrantyText': 'Даём 1 месяц гарантии на заводской брак и заранее объясняем условия проверки устройства.',
        'trust.deliveryTitle': 'Доставка по Узбекистану',
        'trust.deliveryText': 'Согласуем удобный способ получения в Ташкенте или отправку в другой город. Срок и стоимость подтверждаем до заказа.',
        'trust.call': 'Позвонить +998 99 299 99 00',

        // FAQ
        'faq.title': 'Частые вопросы',
        'faq.subtitle': 'Коротко о наличии, оригинальности и доставке',
        'faq.stockQuestion': 'Какие модели сейчас в наличии?',
        'faq.stockAnswer': 'Ray-Ban Meta Gen 1 Wayfarer с прозрачными линзами, Ray-Ban Meta Gen 1 Wayfarer Matte Chameleon и WHOOP MG Life 5.0. Актуальное количество уточняйте перед заказом.',
        'faq.originalQuestion': 'Товары оригинальные?',
        'faq.originalAnswer': 'Да, мы продаём оригинальные устройства в заводской комплектации и предоставляем гарантию подлинности.',
        'faq.deliveryQuestion': 'Есть доставка по Ташкенту и Узбекистану?',
        'faq.deliveryAnswer': 'Да. Способ, срок и стоимость доставки зависят от города и согласовываются до подтверждения заказа.',
        'faq.priceQuestion': 'Как узнать актуальную розничную цену?',
        'faq.priceAnswer': 'Позвоните по номеру +998 99 299 99 00 или напишите в Telegram. Цены в каталоге указаны для оптового заказа от 25 штук.',

        // Footer
        'footer.desc': 'Розничные и оптовые поставки из США, Европы, ОАЭ',
        'footer.rights': 'Все права защищены.',
        'footer.disclaimer1': 'Данный веб-сайт является информационной витриной и каталогом товаров. Мы не осуществляем продажу товаров непосредственно через этот сайт. На сайте отсутствуют механизмы онлайн-оплаты, денежные транзакции и платёжные посредники.',
        'footer.disclaimer2': 'Все представленные цены носят ознакомительный характер. Для оформления заказа свяжитесь с нами через указанные контакты. Окончательные условия сделки согласовываются индивидуально.',
        'footer.privacy': 'Отправляя свои контактные данные (имя, номер телефона), вы даёте согласие на их обработку для связи с вами по вопросам заказа. Мы не передаём ваши данные третьим лицам и используем их исключительно для обработки вашего запроса.',

        // Cart
        'cart.title': 'Корзина',
        'cart.empty': 'Корзина пуста',
        'cart.total': 'Итого:',
        'cart.clear': 'Очистить всё',
        'cart.checkout': 'Оформить заказ',
        'cart.retailPrice': 'Розничная цена (менее 10 шт.)',
        'cart.wholesalePrice': 'Оптовая цена (от 10 шт.)',
        'cart.itemsCount': 'шт.',
        'cart.added': 'Добавлено в корзину',

        // Checkout
        'checkout.title': 'Оформление заказа',
        'checkout.name': 'Имя',
        'checkout.namePlaceholder': 'Ваше имя',
        'checkout.phone': 'Телефон',
        'checkout.submit': 'Отправить заказ',
        'checkout.success': 'Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.',
        'checkout.orderSummary': 'Ваш заказ',
        'checkout.totalItems': 'Всего товаров:',

        // Rate
        'rate.label': 'Курс ЦБ:',

        // Contact
        'contact.call': 'Позвонить'
    },
    uz: {
        // Navigation
        'nav.catalog': 'Katalog',
        'nav.instock': 'Mavjud',
        'nav.features': 'Xususiyatlar',
        'nav.delivery': 'Yetkazib berish va kafolat',

        // Hero
        'hero.badge': 'Toshkentda mavjud',
        'hero.title': 'Ray-Ban Meta va WHOOP',
        'hero.titleAccent': 'Toshkentda',
        'hero.subtitle': "Kamerali original aqlli ko'zoynaklar va fitnes-bilaguzuklar qulay narxda. Komplektni tekshiramiz, originalligiga kafolat beramiz va O'zbekiston bo'ylab yetkazamiz.",
        'hero.btnCatalog': "Mavjud mahsulotlarni ko'rish",
        'hero.btnFeatures': 'Telegram orqali so‘rash',
        'hero.warranty': 'Zavod nuqsoni uchun 1 oylik kafolat',
        'stock.quickTitle': 'Hozir mavjud:',

        // Catalog
        'catalog.title': 'Toshkentda mavjud',
        'catalog.subtitle': 'Originallik kafolati bilan Ray-Ban Meta Gen 1 va WHOOP MG Life',
        'catalog.category': 'Kategoriya:',
        'catalog.rayban': 'Ray-Ban Gen 1-2',
        'catalog.raybanLimited': 'Ray-Ban Meta Limited',
        'catalog.oakley': 'Oakley Meta',
        'catalog.garmin': 'Garmin',
        'catalog.whoop': 'WHOOP',
        'catalog.refurbished': 'Ray-Ban Meta Refurbished',
        'catalog.comingSoon': 'Tez orada sotuvda',
        'catalog.priceInfo': 'Chakana narxni telefon yoki Telegram orqali aniqlang. Ulgurji buyurtma — 25 donadan.',
        'catalog.addToCart': 'Savatga',
        'catalog.new': 'Yangi',
        'catalog.retail': 'chakana',
        'catalog.wholesale': 'ulgurji 10+ dona',
        'catalog.instock': 'Mavjud',
        'catalog.preorder': 'Buyurtma asosida',
        'catalog.details': 'Batafsil',
        'catalog.book': 'Band qilish',

        // Features
        'features.title': 'Imkoniyatlar va xususiyatlar',
        'features.subtitle': 'Mahsulotlarimizning batafsil texnik xususiyatlari',
        'features.camera': '12MP Kamera',
        'features.cameraDesc': 'Foto va video uchun ultrakeng burchakli kamera. Telefonsiz lahzalarni suratga oling.',
        'features.aiDesc': 'Sun\'iy intellektli ovozli yordamchi. Shunchaki "Hey Meta" deb ayting.',
        'features.sound': 'Premium ovoz',
        'features.soundDesc': 'Ochiq dizaynli o\'rnatilgan dinamiklar. Musiqa tinglang va qo\'ng\'iroqlarni qabul qiling.',
        'features.battery': '4+ soat ishlash',
        'features.batteryDesc': '4 soatgacha faol foydalanish. Quvvatlash qutisi yana 32 soat qo\'shimcha beradi.',
        'features.streaming': 'Striming',
        'features.streamingDesc': 'Instagram va Facebook-da jonli efirlar bir tegish bilan.',
        'features.privacy': 'Maxfiylik',
        'features.privacyDesc': 'Yozish paytida LED indikatori. Kamera va mikrofonni o\'chirish uchun jismoniy tugma.',

        // Trust
        'trust.title': 'Xavfsiz va tushunarli xarid',
        'trust.subtitle': 'Mahsulotni topshirishdan oldin tekshiramiz va xariddan keyin ham aloqada bo‘lamiz',
        'trust.authTitle': 'Originallik kafolati',
        'trust.authText': 'Original qurilmalarni zavod komplektida sotamiz. Xariddan oldin markirovka va komplektni aniqlashtirish mumkin.',
        'trust.warrantyTitle': 'Zavod nuqsoniga kafolat',
        'trust.warrantyText': 'Zavod nuqsoniga 1 oy kafolat beramiz va tekshirish shartlarini oldindan tushuntiramiz.',
        'trust.deliveryTitle': 'O‘zbekiston bo‘ylab yetkazib berish',
        'trust.deliveryText': 'Toshkentda qulay topshirish usulini yoki boshqa shaharga jo‘natishni kelishamiz. Muddat va narx buyurtmadan oldin tasdiqlanadi.',
        'trust.call': '+998 99 299 99 00 raqamiga qo‘ng‘iroq qilish',

        // FAQ
        'faq.title': 'Ko‘p so‘raladigan savollar',
        'faq.subtitle': 'Mavjudlik, originallik va yetkazib berish haqida qisqacha',
        'faq.stockQuestion': 'Hozir qaysi modellar mavjud?',
        'faq.stockAnswer': 'Shaffof linzali Ray-Ban Meta Gen 1 Wayfarer, Ray-Ban Meta Gen 1 Wayfarer Matte Chameleon va WHOOP MG Life 5.0 mavjud. Aniq sonini buyurtmadan oldin tekshiring.',
        'faq.originalQuestion': 'Mahsulotlar originalmi?',
        'faq.originalAnswer': 'Ha, original qurilmalarni zavod komplektida sotamiz va originalligiga kafolat beramiz.',
        'faq.deliveryQuestion': 'Toshkent va O‘zbekiston bo‘ylab yetkazib berish bormi?',
        'faq.deliveryAnswer': 'Ha. Yetkazib berish usuli, muddati va narxi shaharga qarab buyurtmani tasdiqlashdan oldin kelishiladi.',
        'faq.priceQuestion': 'Chakana narxni qanday bilish mumkin?',
        'faq.priceAnswer': '+998 99 299 99 00 raqamiga qo‘ng‘iroq qiling yoki Telegram orqali yozing. Katalogdagi narxlar 25 donadan ulgurji buyurtma uchun ko‘rsatilgan.',

        // Footer
        'footer.desc': 'AQSh, Yevropa, BAA dan chakana va ulgurji yetkazib berish',
        'footer.rights': 'Barcha huquqlar himoyalangan.',
        'footer.disclaimer1': 'Ushbu veb-sayt axborot vitrini va mahsulotlar katalogidir. Biz ushbu sayt orqali to\'g\'ridan-to\'g\'ri mahsulot sotmaymiz. Saytda onlayn to\'lov mexanizmlari, pul operatsiyalari va to\'lov vositalari mavjud emas.',
        'footer.disclaimer2': 'Barcha ko\'rsatilgan narxlar tanishuv xarakteriga ega. Buyurtma berish uchun ko\'rsatilgan kontaktlar orqali biz bilan bog\'laning. Bitimning yakuniy shartlari individual ravishda kelishiladi.',
        'footer.privacy': 'Kontakt ma\'lumotlaringizni (ism, telefon raqami) yuborar ekansiz, buyurtma bo\'yicha siz bilan bog\'lanish uchun ularni qayta ishlashga rozilik bildirasiz. Biz sizning ma\'lumotlaringizni uchinchi shaxslarga bermaymiz va faqat so\'rovingizni ko\'rib chiqish uchun foydalanamiz.',

        // Cart
        'cart.title': 'Savat',
        'cart.empty': 'Savat bo\'sh',
        'cart.total': 'Jami:',
        'cart.clear': 'Hammasini tozalash',
        'cart.checkout': 'Buyurtma berish',
        'cart.retailPrice': 'Chakana narx (10 tadan kam)',
        'cart.wholesalePrice': 'Ulgurji narx (10+ dona)',
        'cart.itemsCount': 'dona',
        'cart.added': 'Savatga qo\'shildi',

        // Checkout
        'checkout.title': 'Buyurtmani rasmiylashtirish',
        'checkout.name': 'Ism',
        'checkout.namePlaceholder': 'Ismingiz',
        'checkout.phone': 'Telefon',
        'checkout.submit': 'Buyurtmani yuborish',
        'checkout.success': 'Buyurtma muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.',
        'checkout.orderSummary': 'Sizning buyurtmangiz',
        'checkout.totalItems': 'Jami mahsulotlar:',

        // Rate
        'rate.label': 'MB kursi:',

        // Contact
        'contact.call': 'Qo\'ng\'iroq qilish'
    }
};
