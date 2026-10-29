const fs=require('node:fs');
const crypto=require('node:crypto');
const source=require('../data/meta-source.json');
const families=require('../data/families.cjs');
async function main(){
 const products=[]; const assets=new Map();
 for(let i=0;i<families.length;i++){
  const f=families[i];
  for(const p of source.families[i].products){
   // Old G15 Transitions SKUs remain in Meta JSON-LD but are not in its current selector.
   if(['899-00607-01','899-00600-01'].includes(p.sku)) continue;
   // Display: Meta sells glasses + Neural Band bundles (band size is agreed separately); list one
   // variant per frame colour and size, kept only while a matching bundle is in stock.
   const bundles=source.families[i].products.filter(x=>x.name.includes('Neural Band'));
   if(f.id==='display'&&p.name.includes('Neural Band')) continue;
   const inStock=f.id==='display'?bundles.some(x=>x.availability?.endsWith('/InStock')&&x.size===p.size&&String(x.color)===String(p.color)):p.availability?.endsWith('/InStock');
   // Catalog lists only variants that Meta currently sells (no out-of-stock or pre-order SKUs).
   if(!inStock) continue;
   if(p.currency!=='USD'||!Number.isFinite(p.price)||!p.images?.length)throw Error('Incomplete source '+p.sku);
   const id=p.sku.toLowerCase();
   const image='/images/catalog/'+crypto.createHash('sha256').update(p.images[0]).digest('hex').slice(0,16)+'.webp';
   assets.set(image,p.images[0]);
   const variant=p.name.replace(f.name,'').replace(/^Ray-Ban Meta (Wayfarer|Skyler|Headliner|Blayzer Optics|Scriber Optics)\s*\(Gen [12]\)[,\s]*/,'').replace(/^Meta (Adventurer|Fury|Starfire Kylie Edition)\s*/,'').replace(/^Oakley Meta (HSTN|Vanguard)[,\s]*/,'').replace(/^Ray-Ban Meta\s+\(Gen 3\)\s+(Limited Edition\s+)?(Wayfarer|Aviator|Zena)\s*/,'$1').replace(/^Ray-Ban Meta Audio (Burbank|Clubmaster)\s*/,'').replace(/\s{2,}/g,' ').trim();
   const route=f.route;
   products.push({id,sku:p.sku,manufacturerSku:p.sku,gtin:p.gtin,name:f.name,variant,category:'glasses',brand:f.brand,family:f.id,model:f.model,generation:f.generation,price:f.id==='display'?null:p.price+30,sourcePrice:p.price,source:p.url,sourceCheckedAt:source.checkedAt,sourceAvailability:'InStock',size:p.size,color:p.color,image,availability:'on_request',url:{ru:route+'?variant='+id,uz:'/uz'+route+'?variant='+id},legacyIds:[],aliases:[]});
  }
 }
 products.push({id:'whoop',sku:'WHOOP-MG-LIFE',name:'WHOOP MG Life 5.0',variant:'Life · 12 months',category:'fitness',brand:'whoop',family:'whoop',model:'MG Life',generation:5,price:355,image:'/images/store-whoop.webp',availability:'on_request',url:{ru:'/whoop-mg-life/',uz:'/uz/whoop-mg-life/'},legacyIds:['59'],aliases:['whoop-mg-life','whoop-mg-life-5']});
 fs.mkdirSync('images/catalog',{recursive:true});
 for(const [path,url] of assets){if(fs.existsSync('.'+path))continue;const r=await fetch(url);if(!r.ok||!r.headers.get('content-type')?.startsWith('image/'))throw Error('Image unavailable '+url);fs.writeFileSync('.'+path,Buffer.from(await r.arrayBuffer()));}
 products.forEach(p=>{p.variant=p.variant.replace(/^,\s*/,'');});
 fs.writeFileSync('data/catalog.json',JSON.stringify(products,null,2)+'\n');
 console.log(products.length+' SKU / '+assets.size+' unique images');
}
main().catch(e=>{console.error(e);process.exitCode=1});
