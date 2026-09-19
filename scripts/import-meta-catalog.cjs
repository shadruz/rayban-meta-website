// Snapshot public US product data; never copy manufacturer return/shipping policies.
const fs = require('node:fs');
const seeds = [
 'meta-glasses/starfire-kylie-black-black', 'meta-glasses/adventurer-tortoise-brown',
 'meta-glasses/fury-racing-green-blue-atlantic', 'ray-ban-meta-wayfarer-matte-black-clear-gen-2',
 'wayfarer-shiny-black-plano-g15-green', 'oakley-meta-hstn-curry-brown-transitions',
 'skyler-shiny-black-g15-green-standard', 'ray-ban-meta-skyler-shiny-black-green-gen-2',
 'oakley-meta-vanguard-black-prizm-black', 'ray-ban-meta-headliner-matte-peach-transitions-gen-2',
 'ray-ban-meta-blayzer-matte-black-clear-gen-2', 'ray-ban-meta-scriber-solid-shiny-black-gen-2',
 'meta-ray-ban-display-glasses-and-neural-band-sand'
];
async function main() {
 const families=[];
 for (const slug of seeds) {
  const source='https://www.meta.com/ai-glasses/'+slug+'/';
  const response=await fetch(source);
  if(!response.ok) throw Error(source+': '+response.status);
  const html=await response.text();
  const nodes=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1])['@graph']||[]);
  const products=nodes.filter(x=>x['@type']==='Product').map(p=>({name:p.name,sku:p.sku,gtin:p.gtin,url:p.url,color:p.color,size:p.size,price:p.offers?.price,currency:p.offers?.priceCurrency,availability:p.offers?.availability,images:p.image?.map(i=>typeof i==='string'?i:i['@id']),description:p.description,additionalProperty:p.additionalProperty}));
  families.push({source,groups:nodes.filter(x=>x['@type']==='ProductGroup'),products});
  console.log(slug, products.length, products.map(p=>p.price).join(','));
 }
 fs.mkdirSync('data',{recursive:true});
 fs.writeFileSync('data/meta-source.json',JSON.stringify({checkedAt:new Date().toISOString(),market:'US',families},null,2)+'\n');
}
main().catch(e=>{console.error(e);process.exitCode=1});
