(function(){
 'use strict';
 const store=window.TG_STORE;if(!store)return;
 const lang=()=>document.documentElement.lang==='uz'?'uz':'ru';
 function select(select){
  const p=store.findProduct(select.value);if(!p)return;
  const container=select.closest('[data-product-detail],.product-card');if(!container)return;
  const image=container.querySelector('[data-detail-image],.product-picture img');
  if(image){image.src=p.image;image.alt=p.name+' '+p.variant;}
  container.querySelectorAll('[data-price]').forEach(n=>{n.dataset.price=p.id;n.textContent='$'+p.price;});
  container.querySelectorAll('[data-product-link]').forEach(n=>{n.dataset.productLink=p.id;n.href=p.url[lang()];});
  const add=container.querySelector('[data-add]');if(add)add.dataset.add=p.id;
  const price=container.querySelector('[data-detail-price]');if(price)price.textContent='$'+p.price;
  const order=container.querySelector('[data-detail-order]');if(order)order.href='/?add='+encodeURIComponent(p.id)+'&lang='+lang();
  const source=container.querySelector('[data-detail-source]');if(source&&p.source)source.href=p.source;
  const status=container.querySelector('[data-source-status]');
  if(status&&p.sourceAvailability==='OutOfStock')status.textContent=lang()==='ru'?'На момент сверки этот вариант недоступен в интернет-магазине Meta. Возможность поставки уточняется отдельно.':'Tekshiruv vaqtida bu variant Meta onlayn do‘konida mavjud emas. Yetkazish imkoniyati alohida aniqlanadi.';
  else if(status)status.textContent=lang()==='ru'?'Под заказ. Возможность закупки и срок подтвердим до оформления.':'Buyurtma asosida. Xarid imkoniyati va muddat oldindan tasdiqlanadi.';
  if(container.hasAttribute('data-product-detail')){
   const url=new URL(location.href);url.searchParams.set('variant',p.id);history.replaceState(null,'',url);
   document.querySelectorAll('a[lang]').forEach(a=>{const destination=new URL(a.href);if(destination.origin===location.origin){destination.searchParams.set('variant',p.id);a.href=destination.pathname+destination.search;}});
  }
  document.dispatchEvent(new CustomEvent('techgeek:variant-changed'));
 }
 document.querySelectorAll('[data-variant-select]').forEach(n=>{
  const requested=new URLSearchParams(location.search).get('variant');
  if(n.closest('[data-product-detail]')&&requested&&Array.from(n.options).some(o=>o.value===requested)){n.value=requested;select(n);}
  else if(n.closest('[data-product-detail]'))select(n);
  n.addEventListener('change',()=>select(n));
 });
 const grid=document.getElementById('productsGrid');if(!grid)return;
 let category='all';const cards=Array.from(grid.querySelectorAll('.product-card'));
 function filter(){
  const brand=document.getElementById('catalogBrand')?.value||'all';
  const gen=document.getElementById('catalogGeneration')?.value||'all';
  const sort=document.getElementById('catalogSort')?.value||'default';
  const ordered=[...cards];if(sort!=='default')ordered.sort((a,b)=>(Number(a.dataset.minPrice)-Number(b.dataset.minPrice))*(sort==='desc'?-1:1));
  let count=0;ordered.forEach(c=>{c.hidden=!((category==='all'||c.dataset.category===category)&&(brand==='all'||c.dataset.brand===brand)&&(gen==='all'||c.dataset.category==='glasses'&&c.dataset.generation===gen));if(!c.hidden)count++;grid.append(c)});
  const status=document.getElementById('filterStatus');if(status)status.textContent=count?(lang()==='ru'?'Моделей: ':'Modellar: ')+count:(lang()==='ru'?'Нет моделей с такими фильтрами. Выберите другую линейку или поколение.':'Bu filtrlar bo‘yicha model yo‘q. Boshqa turkum yoki avlodni tanlang.');
 }
 document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;filter();}));
 ['catalogBrand','catalogGeneration','catalogSort'].forEach(id=>document.getElementById(id)?.addEventListener('change',filter));
 filter();
})();
