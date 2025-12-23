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
    },
    // ============ OAKLEY META VANGUARD ============
    {
        id: 52,
        name: 'Oakley Meta Vanguard',
        variant: 'Prizm Sapphire',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/vanguard_Vanguard1.jpg',
        prices: { wholesale: 525, retail: 550 }
    },
    {
        id: 53,
        name: 'Oakley Meta Vanguard',
        variant: 'Prizm 24K',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/vanguard_Vanguard2.jpg',
        prices: { wholesale: 525, retail: 550 }
    },
    {
        id: 54,
        name: 'Oakley Meta Vanguard',
        variant: 'Prizm Black',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/vanguard_Vanguard3.jpg',
        prices: { wholesale: 525, retail: 550 }
    },
    {
        id: 55,
        name: 'Oakley Meta Vanguard',
        variant: 'Prizm Road',
        size: '',
        generation: '',
        condition: 'new',
        category: 'oakley',
        image: 'images/vanguard_Vanguard4.jpg',
        prices: { wholesale: 525, retail: 550 }
    },
    // ============ GARMIN WATCHES ============
    {
        id: 49,
        name: 'Garmin Fenix 8',
        variant: '47mm AMOLED Sapphire, Carbon Gray DLC Titanium',
        size: 'Black/Pebble Gray Silicone Band',
        generation: '',
        condition: 'new',
        category: 'garmin',
        image: 'images/garmin_1.jpg',
        prices: { wholesale: 1180, retail: 1180 }
    },
    {
        id: 50,
        name: 'Garmin Forerunner 165',
        variant: '43mm',
        size: 'Black/Slate Gray',
        generation: '',
        condition: 'new',
        category: 'garmin',
        image: 'images/garmin_2.jpg',
        prices: { wholesale: 300, retail: 300 }
    },
    {
        id: 51,
        name: 'Garmin Forerunner 570',
        variant: '47mm Slate Gray Aluminum',
        size: 'Translucent Black/Black Band',
        generation: '',
        condition: 'new',
        category: 'garmin',
        image: 'images/garmin_3.jpg',
        prices: { wholesale: 600, retail: 600 }
    },
    // ============ WHOOP WRISTBANDS ============
    {
        id: 57,
        name: 'Whoop Peak',
        variant: 'with 12-month membership',
        size: '',
        generation: '',
        condition: 'new',
        category: 'whoop',
        image: 'images/whoop_Whoop1.jpg',
        prices: { wholesale: 240, retail: 290 }
    },
    {
        id: 58,
        name: 'Whoop One',
        variant: 'with 12-month membership',
        size: '',
        generation: '',
        condition: 'new',
        category: 'whoop',
        image: 'images/whoop_Whoop2.jpg',
        prices: { wholesale: 215, retail: 240 }
    },
    {
        id: 59,
        name: 'Whoop Life',
        variant: 'with 12-month membership',
        size: '',
        generation: '',
        condition: 'new',
        category: 'whoop',
        image: 'images/whoop_Whoop3.jpg',
        prices: { wholesale: 335, retail: 365 }
    },
    // ============ PLAYSTATION ============
    {
        id: 60,
        name: 'PlayStation 5 Pro Console',
        variant: '',
        size: '',
        generation: '',
        condition: 'new',
        category: 'playstation',
        image: 'images/ps5-1.webp',
        prices: { wholesale: 0, retail: 0 },
        comingSoon: true
    },
    {
        id: 61,
        name: 'PlayStation 5 Digital Edition Console',
        variant: '825 GB',
        size: '',
        generation: '',
        condition: 'new',
        category: 'playstation',
        image: 'images/ps5-2.webp',
        prices: { wholesale: 0, retail: 0 },
        comingSoon: true
    },
    {
        id: 62,
        name: 'PlayStation 5 Console',
        variant: '1 TB',
        size: '',
        generation: '',
        condition: 'new',
        category: 'playstation',
        image: 'images/ps5-3.webp',
        prices: { wholesale: 0, retail: 0 },
        comingSoon: true
    },
    {
        id: 63,
        name: 'PlayStation 5 Console',
        variant: 'Certified Refurbished',
        size: '',
        generation: '',
        condition: 'refurbished',
        category: 'playstation',
        image: 'images/ps5-4.webp',
        prices: { wholesale: 0, retail: 0 },
        comingSoon: true
    },
];

// ========================================
// In-Stock Products (Product IDs that are currently available)
// ========================================
const inStockProducts = [
    // Example: Product ID 1 is in stock (Ray-Ban Meta Wayfarer Clear Matte 50)
    1
];

// ========================================
// State
// ========================================
let currentCategory = 'instock'; // instock, rayban, rayban-limited, oakley, garmin, refurbished
let currentFeatureCategory = 'rayban'; // For features section
let currentLang = 'ru';
let cart = [];

// ========================================
// Features Data by Category (Multilingual)
// ========================================
const featuresData = {
    ru: {
        rayban: [
            { icon: 'camera', title: '12MP Камера', desc: 'Ультраширокоугольная камера с 3K Ultra HD видео 60fps. Снимайте моменты без телефона.' },
            { icon: 'ai', title: 'Meta AI', desc: 'Голосовой ассистент с ИИ. Просто скажите "Hey Meta" для вопросов и переводов.' },
            { icon: 'audio', title: 'Премиум звук', desc: 'Открытые динамики с улучшенными басами и 5 микрофонов с шумоподавлением 90%.' },
            { icon: 'battery', title: '8 часов работы', desc: 'До 8 часов активного использования. Кейс даёт ещё 48 часов. Быстрая зарядка 50% за 20 мин.' },
            { icon: 'storage', title: '32GB Память', desc: 'Встроенная память на 500+ фото или 100 видео по 30 сек. Wi-Fi 6 для быстрой передачи.' },
            { icon: 'streaming', title: 'Стриминг', desc: 'Прямые трансляции в Instagram и Facebook. IPX4 защита от воды и пота.' }
        ],
        oakley: [
            { icon: 'camera', title: '12MP Камера', desc: 'Ультраширокоугольная камера с 3K Ultra HD видео. Отличная стабилизация для спорта.' },
            { icon: 'lens', title: 'PRIZM Линзы', desc: 'Поляризованные линзы Oakley PRIZM усиливают цвета и снижают блики для активного отдыха.' },
            { icon: 'ai', title: 'Meta AI', desc: 'Голосовой ассистент ИИ. Узнавайте о погоде, силе ветра и получайте советы в реальном времени.' },
            { icon: 'audio', title: 'Открытые динамики', desc: 'Музыка, подкасты и звонки. 5 микрофонов для чистых голосовых команд.' },
            { icon: 'battery', title: '8 часов работы', desc: 'До 8 часов активного использования, 19 часов в режиме ожидания. Кейс даёт 48 часов.' },
            { icon: 'durability', title: 'IPX4 Защита', desc: 'Защита от брызг, дождя и пота. Идеально для тренировок и активного образа жизни.' }
        ],
        garmin: [
            { icon: 'display', title: 'AMOLED Дисплей', desc: 'Яркий сенсорный AMOLED экран с высоким разрешением. Always-on режим доступен.' },
            { icon: 'gps', title: 'Multi-Band GPS', desc: 'Точная навигация с поддержкой GPS, GLONASS, Galileo, QZSS. SatIQ для оптимизации батареи.' },
            { icon: 'health', title: 'Мониторинг здоровья', desc: 'ЧСС, HRV, SpO2, температура кожи, стресс, Body Battery, качество сна и восстановление.' },
            { icon: 'sports', title: 'Спортивные режимы', desc: 'Более 30 режимов: бег, плавание, велосипед, триатлон. Тренировочные планы и VO2 Max.' },
            { icon: 'battery', title: 'До 29 дней', desc: 'До 29 дней в режиме смарт-часов (Fenix 8). 14+ часов с GPS высокой точности.' },
            { icon: 'durability', title: '10 ATM / Дайвинг', desc: 'Водонепроницаемость 10 ATM. Fenix 8 подходит для дайвинга до 40м. Сапфировое стекло.' }
        ],
        whoop: [
            { icon: 'heart', title: 'Мониторинг 24/7', desc: 'Непрерывное отслеживание: ЧСС, HRV, SpO2, температура кожи, частота дыхания.' },
            { icon: 'sleep', title: 'Sleep Coach', desc: 'Анализ стадий сна (лёгкий, глубокий, REM). Будильник с вибрацией в оптимальное время.' },
            { icon: 'recovery', title: 'Recovery Score', desc: 'Ежедневная оценка восстановления показывает, когда тренироваться, а когда отдыхать.' },
            { icon: 'strain', title: 'Strain Coach', desc: 'Оптимальная нагрузка на день. Автоматическое определение и отслеживание тренировок.' },
            { icon: 'battery', title: '5 дней работы', desc: 'Батарея на 4-5 дней. Зарядка на запястье через водонепроницаемый powerpack.' },
            { icon: 'design', title: 'Без экрана', desc: 'Компактный дизайн на 33% меньше. IP68 (10м). Сменные ремешки SuperKnit и HydroKnit.' }
        ],
        playstation: [
            { icon: 'display', title: '18 TFLOPS GPU', desc: 'Графика на 45% мощнее базовой PS5. 60 вычислительных блоков RDNA с поддержкой трассировки лучей.' },
            { icon: 'ai', title: 'PSSR AI', desc: 'PlayStation Spectral Super Resolution — ИИ-апскейлинг для чёткой картинки в 4K и выше.' },
            { icon: 'storage', title: '2 ТБ SSD', desc: 'Сверхбыстрый NVMe SSD на 2 ТБ. Скорость чтения 5.5 ГБ/с. Больше игр без удаления.' },
            { icon: 'streaming', title: '8K / 120fps', desc: 'Поддержка 8K Ultra HD и 4K при 120 fps. Game Boost для обратной совместимости.' },
            { icon: 'gps', title: 'Wi-Fi 7', desc: 'Новейший стандарт Wi-Fi 7 для быстрых загрузок и стабильного онлайн-гейминга.' },
            { icon: 'sports', title: 'Ray Tracing 2x', desc: 'Улучшенная трассировка лучей в 2-3 раза быстрее. Реалистичные отражения и освещение.' }
        ]
    },
    uz: {
        rayban: [
            { icon: 'camera', title: '12MP Kamera', desc: '3K Ultra HD video 60fps bilan ultrakeng burchakli kamera. Telefonsiz lahzalarni suratga oling.' },
            { icon: 'ai', title: 'Meta AI', desc: "Sun'iy intellektli ovozli yordamchi. Savollar va tarjimalar uchun \"Hey Meta\" deb ayting." },
            { icon: 'audio', title: 'Premium ovoz', desc: "Yaxshilangan basslar bilan ochiq dinamiklar va 90% shovqin filtrlash bilan 5 ta mikrofon." },
            { icon: 'battery', title: '8 soat ishlash', desc: "8 soatgacha faol foydalanish. Quti yana 48 soat beradi. 20 daqiqada 50% tez quvvatlash." },
            { icon: 'storage', title: '32GB Xotira', desc: "500+ ta rasm yoki 30 soniyalik 100 ta video uchun xotira. Tez uzatish uchun Wi-Fi 6." },
            { icon: 'streaming', title: 'Striming', desc: "Instagram va Facebook-da jonli efirlar. Suv va terdan IPX4 himoya." }
        ],
        oakley: [
            { icon: 'camera', title: '12MP Kamera', desc: '3K Ultra HD video bilan ultrakeng burchakli kamera. Sport uchun ajoyib stabilizatsiya.' },
            { icon: 'lens', title: 'PRIZM Linzalar', desc: "Oakley PRIZM polarizatsiyalangan linzalar ranglarni kuchaytiradi va faol dam olish uchun yorqinlikni kamaytiradi." },
            { icon: 'ai', title: 'Meta AI', desc: "Sun'iy intellektli ovozli yordamchi. Ob-havo, shamol kuchi haqida bilib oling va real vaqtda maslahatlar oling." },
            { icon: 'audio', title: 'Ochiq dinamiklar', desc: "Musiqa, podkastlar va qo'ng'iroqlar. Aniq ovozli buyruqlar uchun 5 ta mikrofon." },
            { icon: 'battery', title: '8 soat ishlash', desc: "8 soatgacha faol foydalanish, 19 soat kutish rejimida. Quti 48 soat beradi." },
            { icon: 'durability', title: 'IPX4 Himoya', desc: "Sachratishlar, yomg'ir va terdan himoya. Mashqlar va faol turmush tarzi uchun ideal." }
        ],
        garmin: [
            { icon: 'display', title: 'AMOLED Displey', desc: "Yuqori aniqlikdagi yorqin sensorli AMOLED ekran. Always-on rejimi mavjud." },
            { icon: 'gps', title: 'Multi-Band GPS', desc: "GPS, GLONASS, Galileo, QZSS qo'llab-quvvatlashi bilan aniq navigatsiya. Batareyani optimallashtirish uchun SatIQ." },
            { icon: 'health', title: "Sog'liqni kuzatish", desc: "Yurak urishi, HRV, SpO2, teri harorati, stress, Body Battery, uyqu sifati va tiklanish." },
            { icon: 'sports', title: 'Sport rejimlari', desc: "30 dan ortiq rejim: yugurish, suzish, velosiped, triathlon. Mashq rejalari va VO2 Max." },
            { icon: 'battery', title: '29 kungacha', desc: "Smart-soat rejimida 29 kungacha (Fenix 8). Yuqori aniqlikdagi GPS bilan 14+ soat." },
            { icon: 'durability', title: '10 ATM / Sho\'ng\'in', desc: "10 ATM suv o'tkazmaslik. Fenix 8 40m gacha sho'ng'ish uchun mos. Sapfir oynasi." }
        ],
        whoop: [
            { icon: 'heart', title: 'Monitoring 24/7', desc: "Doimiy kuzatish: yurak urishi, HRV, SpO2, teri harorati, nafas chastotasi." },
            { icon: 'sleep', title: 'Sleep Coach', desc: "Uyqu bosqichlarini tahlil qilish (yengil, chuqur, REM). Optimal vaqtda vibratsiyali budilnik." },
            { icon: 'recovery', title: 'Recovery Score', desc: "Kundalik tiklanish bahosi qachon mashq qilish va qachon dam olish kerakligini ko'rsatadi." },
            { icon: 'strain', title: 'Strain Coach', desc: "Kun uchun optimal yuk. Mashqlarni avtomatik aniqlash va kuzatish." },
            { icon: 'battery', title: '5 kun ishlash', desc: "4-5 kunlik batareya. Suv o'tkazmaydigan powerpack orqali bilakda quvvatlash." },
            { icon: 'design', title: 'Ekransiz', desc: "33% kichikroq ixcham dizayn. IP68 (10m). SuperKnit va HydroKnit almashtiradigan tasmalar." }
        ],
        playstation: [
            { icon: 'display', title: '18 TFLOPS GPU', desc: "Asosiy PS5 dan 45% kuchliroq grafika. Ray tracing bilan 60 ta RDNA hisoblash bloklari." },
            { icon: 'ai', title: 'PSSR AI', desc: "PlayStation Spectral Super Resolution — 4K va undan yuqori aniq tasvir uchun AI apskeyling." },
            { icon: 'storage', title: '2 TB SSD', desc: "2 TB da o'ta tez NVMe SSD. O'qish tezligi 5.5 GB/s. Ko'proq o'yinlar o'chirilmasdan." },
            { icon: 'streaming', title: '8K / 120fps', desc: "8K Ultra HD va 120 fps da 4K qo'llab-quvvatlaydi. Orqaga moslik uchun Game Boost." },
            { icon: 'gps', title: 'Wi-Fi 7', desc: "Tez yuklab olish va barqaror onlayn o'yin uchun eng yangi Wi-Fi 7 standarti." },
            { icon: 'sports', title: 'Ray Tracing 2x', desc: "2-3 marta tezroq yaxshilangan nur kuzatuvi. Realistik akslar va yoritish." }
        ]
    }
};

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
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryDropdownBtn = document.getElementById('categoryDropdownBtn');
const categoryMenu = document.getElementById('categoryMenu');
const selectedCategoryEl = document.getElementById('selectedCategory');
// Features dropdown elements
const featuresGrid = document.getElementById('featuresGrid');
const featuresDropdown = document.getElementById('featuresDropdown');
const featuresDropdownBtn = document.getElementById('featuresDropdownBtn');
const featuresMenu = document.getElementById('featuresMenu');
const selectedFeatureCategoryEl = document.getElementById('selectedFeatureCategory');
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

    // Re-render products, cart, and features with new language
    renderProducts();
    renderCart();
    renderFeatures();
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

    if (currentCategory === 'instock') {
        filteredProducts = products.filter(p => inStockProducts.includes(p.id));
    } else if (currentCategory === 'rayban') {
        filteredProducts = products.filter(p => p.condition === 'new' && p.category !== 'limited' && p.category !== 'oakley' && p.category !== 'garmin' && p.category !== 'whoop' && p.category !== 'playstation');
    } else if (currentCategory === 'rayban-limited') {
        filteredProducts = products.filter(p => p.category === 'limited');
    } else if (currentCategory === 'oakley') {
        filteredProducts = products.filter(p => p.category === 'oakley');
    } else if (currentCategory === 'garmin') {
        filteredProducts = products.filter(p => p.category === 'garmin');
    } else if (currentCategory === 'whoop') {
        filteredProducts = products.filter(p => p.category === 'whoop');
    } else if (currentCategory === 'playstation') {
        filteredProducts = products.filter(p => p.category === 'playstation');
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

        // Handle coming soon products
        if (product.comingSoon) {
            const comingSoonText = currentLang === 'uz' ? 'Tez orada' : 'Скоро';
            return `
                <div class="product-card product-coming-soon">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                    </div>
                    <span class="product-badge coming-soon">${comingSoonText}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-color">${description}</p>
                    <div class="product-prices">
                        <div class="price-coming-soon">
                            <span>${currentLang === 'uz' ? 'Narx tez orada' : 'Цена уточняется'}</span>
                        </div>
                    </div>
                    <button class="btn btn-secondary add-to-cart-btn" disabled>${comingSoonText}</button>
                </div>
            `;
        }

        // Handle in-stock products (special card with ribbon and booking button)
        if (currentCategory === 'instock') {
            const instockText = currentLang === 'uz' ? 'Mavjud' : 'В наличии';
            const bookText = currentLang === 'uz' ? 'Band qilish' : 'Забронировать';
            const telegramMessage = encodeURIComponent(`Здравствуйте! Хочу забронировать товар:\n\n${product.name}\n${description}\nЦена: ${formatPrice(product.prices.retail)}\n\nПрошу подтвердить наличие.`);
            const telegramLink = `https://t.me/techgeek_uz?text=${telegramMessage}`;

            return `
                <div class="product-card product-instock">
                    <div class="instock-ribbon">${instockText}</div>
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
                    <a href="${telegramLink}" target="_blank" class="btn btn-primary book-btn">${bookText}</a>
                </div>
            `;
        }

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
// Feature Icons SVG
// ========================================
const featureIcons = {
    camera: '<circle cx="12" cy="12" r="3"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    ai: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>',
    audio: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    battery: '<rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="10" x2="23" y2="14"/>',
    storage: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><line x1="2" y1="10" x2="22" y2="10"/>',
    streaming: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    lens: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>',
    durability: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    display: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    gps: '<circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"/>',
    health: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    sports: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    sleep: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    recovery: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>',
    strain: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    design: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
};

// ========================================
// Render Features
// ========================================
function renderFeatures() {
    const langData = featuresData[currentLang] || featuresData.ru;
    const features = langData[currentFeatureCategory] || [];

    featuresGrid.innerHTML = features.map(feature => {
        const iconPath = featureIcons[feature.icon] || featureIcons.camera;
        return `
            <div class="feature-card">
                <div class="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${iconPath}
                    </svg>
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.desc}</p>
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
// Category Dropdown
// ========================================
// Toggle dropdown open/close
categoryDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    categoryDropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!categoryDropdown.contains(e.target)) {
        categoryDropdown.classList.remove('open');
    }
});

// Handle category selection
categoryMenu.querySelectorAll('.category-option').forEach(option => {
    option.addEventListener('click', () => {
        // Update active state
        categoryMenu.querySelectorAll('.category-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Update selected text
        selectedCategoryEl.textContent = option.textContent;

        // Update current category and render
        currentCategory = option.dataset.category;
        renderProducts();

        // Close dropdown
        categoryDropdown.classList.remove('open');
    });
});

// ========================================
// Features Dropdown
// ========================================
// Toggle features dropdown open/close
featuresDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    featuresDropdown.classList.toggle('open');
});

// Close features dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!featuresDropdown.contains(e.target)) {
        featuresDropdown.classList.remove('open');
    }
});

// Handle features category selection
featuresMenu.querySelectorAll('.category-option').forEach(option => {
    option.addEventListener('click', () => {
        // Update active state
        featuresMenu.querySelectorAll('.category-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Update selected text
        selectedFeatureCategoryEl.textContent = option.textContent;

        // Update current feature category and render
        currentFeatureCategory = option.dataset.feature;
        renderFeatures();

        // Close dropdown
        featuresDropdown.classList.remove('open');
    });
});

// Initial render of features
renderFeatures();

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

// ========================================
// Hero Image Carousel
// ========================================
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextHeroSlide() {
    // Add exit class to current slide
    heroSlides[currentSlide].classList.add('exit');
    heroSlides[currentSlide].classList.remove('active');

    // Move to next slide
    currentSlide = (currentSlide + 1) % heroSlides.length;

    // Activate next slide
    heroSlides[currentSlide].classList.remove('exit');
    heroSlides[currentSlide].classList.add('active');
}

// Auto-rotate every 2 seconds
setInterval(nextHeroSlide, 2000);
