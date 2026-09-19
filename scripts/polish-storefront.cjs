// Shared presentation pass, also applied to legacy editorial pages after each build.
const fs=require('node:fs');
const path=require('node:path');
const swaps=[
 ['Под заказ, на складе нет. Заявка не является оплатой или подтверждённой покупкой. Возможность поставки, срок и итоговую сумму в сумах согласуем до оформления.','Поставка по индивидуальному заказу. Цена и срок доставки согласовываются перед оформлением. Заявка позволяет уточнить условия без обязательства покупки.'],
 ['Buyurtma asosida, omborda yo‘q. So‘rov to‘lov yoki tasdiqlangan xarid emas. Yetkazish imkoniyati, muddati va so‘mdagi yakuniy summa oldindan kelishiladi.','Individual buyurtma asosida yetkaziladi. Narx va yetkazish muddati buyurtmadan oldin kelishiladi. So‘rov xarid majburiyatisiz shartlarni aniqlash imkonini beradi.'],
 ['Под заказ · на складе нет','Поставка по индивидуальному заказу'],
 ['Buyurtma asosida · omborda yo‘q','Individual buyurtma asosida'],
 ['под заказ, на складе нет','по индивидуальному заказу'],
 ['Под заказ, на складе нет','Поставка по индивидуальному заказу'],
 ['buyurtma asosida, omborda yo‘q','individual buyurtma asosida'],
 ['Возможность поставки, цену и срок подтверждаем до оформления.','Возможность поставки, цена и срок доставки согласовываются перед оформлением.'],
 ['Возможность закупки конкретного варианта проверим перед подтверждением.','Условия поставки выбранной комплектации уточняются индивидуально.'],
 ['Под заказ. Возможность закупки и срок подтвердим до оформления.','Условия поставки выбранной комплектации уточняются перед оформлением.'],
 ['Не обещаем доступность всех функций в Узбекистане.','Доступность отдельных функций в Узбекистане может быть ограничена.'],
 ['Цену и срок поставки подтверждаем до оформления.','Цена и срок поставки согласовываются перед оформлением.'],
 ['возможность поставки и размер браслета согласуем отдельно.','возможность поставки и размер браслета согласовываются индивидуально.'],
 ['Срок согласуем. Доставка за наш счёт.','Согласованный срок. Бесплатная доставка.'],
 ['срок поставки согласуем заранее','срок поставки согласовывается заранее'],
 ['срок поставки согласуем до оформления','срок поставки согласовывается до оформления'],
 ['Точный интервал согласуем с вами.','Интервал доставки согласовывается индивидуально.'],
 ['Возможность поставки и срок подтвердим в Telegram до оформления.','Условия и срок поставки согласовываются в Telegram перед оформлением.'],
 ['Сумма в сумах ориентировочная. Итог подтвердим при заказе.','Пересчёт в сумы ориентировочный. Итоговая цена согласовывается перед оформлением.'],
 ['Выберите модель, цвет и размер — привезём под заказ.','Модели, цвета и размеры — с поставкой по индивидуальному заказу.'],
 ['Все варианты — под заказ. Поставка начинается только после согласования; оплаты на сайте нет.','Все варианты доступны для индивидуального заказа. Поставка оформляется после согласования условий. Оплата на сайте не требуется.'],
 ['Не путайте с цельным спортивным щитком Vanguard.','В отличие от Vanguard, модель имеет раздельные линзы и повседневный силуэт.'],
 ['Подробности подписки Life уточним перед заказом.','Условия подписки Life уточняются перед оформлением.'],
 ['При подтверждённом дефекте обратную доставку оплачиваем мы.','При подтверждённом заводском дефекте обратная доставка осуществляется за счёт TechGeek.uz.'],
 ['Нужна партия? Обсудим опт','Оптовая цена на партию — по запросу'],
 ];
function walk(d='.'){return fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.name.startsWith('.')||['node_modules','scripts','tests','data'].includes(x.name)?[]:x.isDirectory()?walk(path.join(d,x.name)):x.name.endsWith('.html')?[path.join(d,x.name)]:[]);}
const files=[...walk(),'catalog-ui.js','storefront.js','merchant-feed.xml'];
for(const file of files){
 if(path.basename(file).startsWith('yandex_')) continue;
 let s=fs.readFileSync(file,'utf8');
 for(const [a,b]of swaps)s=s.replaceAll(a,b);
 if(file.endsWith('.html')){
  s=s.replace(/<span class="lens-callout"[\s\S]*?<\/span\s*>\s*<\/span\s*>/g,'');
  s=s.replace(/(<span class="brand-mark"[^>]*>)t<span>g<\/span\s*>\s*<\/span/g,'$1</span');
  s=s.replace(/<link\b[^>]*rel="icon"[^>]*>/g,'<link rel="icon" type="image/svg+xml" href="/brand-icon.svg?v=2">');
  if(!s.includes('rel="icon"')&&s.includes('</head>'))s=s.replace('</head>','<link rel="icon" type="image/svg+xml" href="/brand-icon.svg?v=2"></head>');
  s=s.replace(/Итоговую сумму и способ\s*оплаты согласуем перед покупкой\./g,'Итоговая цена и способ оплаты согласовываются перед оформлением.');
  s=s.replace(/Откроется чат с готовым текстом заказа\. Отправьте сообщение — мы\s*подтвердим наличие и договоримся о доставке\./g,'В Telegram откроется подготовленная заявка. После её отправки согласовываются комплектация, актуальная цена и срок доставки.');
  if(file.endsWith('smart-glasses/display/index.html'))s=s.replace('Добавить в заявку','Уточнить цену').replace('So‘rovga qo‘shish','Narxni aniqlash');
 }
 fs.writeFileSync(file,s);
}
// Preserve the original logo pixels; use its luminance as an SVG mask, not a new mark.
const logo=fs.readFileSync('images/logo.png').toString('base64');
fs.writeFileSync('brand-icon.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><defs><mask id="brand" maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="640" style="mask-type:luminance"><image href="data:image/png;base64,${logo}" x="-64" y="-64" width="768" height="768"/></mask></defs><rect width="640" height="640" rx="145" fill="#3152f4"/><rect width="640" height="640" fill="white" mask="url(#brand)"/></svg>`);
