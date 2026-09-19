(function (root) {
  "use strict";

  // US Meta Store snapshot + $30 per glasses SKU. All products are on request.
  const products = [
  {
    "id": "sk-1001901-01",
    "sku": "SK-1001901-01",
    "manufacturerSku": "SK-1001901-01",
    "name": "Meta Glasses Starfire Kylie Edition",
    "variant": "Classic Black Black Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "starfire",
    "model": "Starfire",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/starfire-kylie-black-black/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Black",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/15ab25beaac248d5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/starfire/?variant=sk-1001901-01",
      "uz": "/uz/smart-glasses/starfire/?variant=sk-1001901-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001903-01",
    "sku": "SK-1001903-01",
    "manufacturerSku": "SK-1001903-01",
    "name": "Meta Glasses Starfire Kylie Edition",
    "variant": "Dark Tortoise Chocolate Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "starfire",
    "model": "Starfire",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/starfire-kylie-tortoise-chocolate/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Chocolate",
      "Frame color:Dark Tortoise"
    ],
    "image": "/images/catalog/7f834a938d097498.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/starfire/?variant=sk-1001903-01",
      "uz": "/uz/smart-glasses/starfire/?variant=sk-1001903-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001904-01",
    "sku": "SK-1001904-01",
    "manufacturerSku": "SK-1001904-01",
    "name": "Meta Glasses Starfire Kylie Edition",
    "variant": "Classic Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "starfire",
    "model": "Starfire",
    "generation": 0,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/starfire-kylie-black-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/90afde2bf58422e7.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/starfire/?variant=sk-1001904-01",
      "uz": "/uz/smart-glasses/starfire/?variant=sk-1001904-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001887-01",
    "sku": "SK-1001887-01",
    "manufacturerSku": "SK-1001887-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Black Clear Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/eff9c13b15bd4034.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001887-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001887-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001879-01",
    "sku": "SK-1001879-01",
    "manufacturerSku": "SK-1001879-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Black Clear Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/6c6c9304db7cea55.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001879-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001879-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001888-01",
    "sku": "SK-1001888-01",
    "manufacturerSku": "SK-1001888-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Tortoise Clear Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-tortoise-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/d3780721ab1daa2c.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001888-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001888-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001880-01",
    "sku": "SK-1001880-01",
    "manufacturerSku": "SK-1001880-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Tortoise Clear Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-tortoise-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/9a4d1fed5b9cd6df.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001880-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001880-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001889-01",
    "sku": "SK-1001889-01",
    "manufacturerSku": "SK-1001889-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Black Brown Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-brown/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/15fa4076dd1b471d.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001889-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001889-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001881-01",
    "sku": "SK-1001881-01",
    "manufacturerSku": "SK-1001881-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Black Brown Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-brown/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/e0e04a0b7df4c5a1.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001881-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001881-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001890-01",
    "sku": "SK-1001890-01",
    "manufacturerSku": "SK-1001890-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Tortoise Brown Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-tortoise-brown/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/77c3b6f5db8345da.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001890-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001890-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001882-01",
    "sku": "SK-1001882-01",
    "manufacturerSku": "SK-1001882-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Tortoise Brown Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-tortoise-brown/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/7b13e4653d077f44.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001882-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001882-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001893-01",
    "sku": "SK-1001893-01",
    "manufacturerSku": "SK-1001893-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Black Polar Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 359,
    "sourcePrice": 329,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-polar/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/c497327f4e02e307.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001893-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001893-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001885-01",
    "sku": "SK-1001885-01",
    "manufacturerSku": "SK-1001885-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Black Polar Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 359,
    "sourcePrice": 329,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-polar/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/eccc8b89ac43d446.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001885-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001885-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001894-01",
    "sku": "SK-1001894-01",
    "manufacturerSku": "SK-1001894-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Classic Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/6f5d3be13cabca53.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001894-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001894-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001886-01",
    "sku": "SK-1001886-01",
    "manufacturerSku": "SK-1001886-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Classic Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/4e301f2ef563fa2e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001886-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001886-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001892-01",
    "sku": "SK-1001892-01",
    "manufacturerSku": "SK-1001892-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Merlot Transitions® Ruby Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-merlot-ruby-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Ruby Transitions®",
      "Frame color:Merlot"
    ],
    "image": "/images/catalog/9e263e0812def54a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001892-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001892-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001884-01",
    "sku": "SK-1001884-01",
    "manufacturerSku": "SK-1001884-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Merlot Transitions® Ruby Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-merlot-ruby-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Ruby Transitions®",
      "Frame color:Merlot"
    ],
    "image": "/images/catalog/8642c35df07430c1.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001884-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001884-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001891-01",
    "sku": "SK-1001891-01",
    "manufacturerSku": "SK-1001891-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large Linen Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-linen-sapphire-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Linen"
    ],
    "image": "/images/catalog/8bd87fedc9133159.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001891-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001891-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001883-01",
    "sku": "SK-1001883-01",
    "manufacturerSku": "SK-1001883-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard Linen Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-linen-sapphire-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Linen"
    ],
    "image": "/images/catalog/b6f21c6843961050.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001883-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001883-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001895-01",
    "sku": "SK-1001895-01",
    "manufacturerSku": "SK-1001895-01",
    "name": "Meta Glasses Fury",
    "variant": "Classic Black Brown Gradient Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-black-brown-gradient/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown Gradient",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/07ddceff664ab8c5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001895-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001895-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001896-01",
    "sku": "SK-1001896-01",
    "manufacturerSku": "SK-1001896-01",
    "name": "Meta Glasses Fury",
    "variant": "Mahogany Green Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-mahogany-green/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Mahogany"
    ],
    "image": "/images/catalog/43fbf0cb78e93ce6.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001896-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001896-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001897-01",
    "sku": "SK-1001897-01",
    "manufacturerSku": "SK-1001897-01",
    "name": "Meta Glasses Fury",
    "variant": "Racing Green Light Blue Atlantic Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-racing-green-blue-atlantic/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Light Blue Atlantic",
      "Frame color:Racing Green"
    ],
    "image": "/images/catalog/99fb393cd62ed365.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001897-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001897-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001899-01",
    "sku": "SK-1001899-01",
    "manufacturerSku": "SK-1001899-01",
    "name": "Meta Glasses Fury",
    "variant": "Classic Black Polar Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 359,
    "sourcePrice": 329,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-black-grey-polar/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/004eb8eaea919e55.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001899-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001899-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001898-01",
    "sku": "SK-1001898-01",
    "manufacturerSku": "SK-1001898-01",
    "name": "Meta Glasses Fury",
    "variant": "Sandstone Dark Amber Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 329,
    "sourcePrice": 299,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-sandstone-amber/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Dark Amber",
      "Frame color:Sandstone"
    ],
    "image": "/images/catalog/4965856024c72223.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001898-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001898-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001900-01",
    "sku": "SK-1001900-01",
    "manufacturerSku": "SK-1001900-01",
    "name": "Meta Glasses Fury",
    "variant": "Classic Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-black-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/fa7f6cf758a0d71f.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1001900-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1001900-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002104-01",
    "sku": "SK-1002104-01",
    "manufacturerSku": "SK-1002104-01",
    "name": "Meta Glasses Fury",
    "variant": "Mahogany Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "fury",
    "model": "Fury",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/fury-mahogany-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Mahogany"
    ],
    "image": "/images/catalog/dc56786eef58e127.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/fury/?variant=sk-1002104-01",
      "uz": "/uz/smart-glasses/fury/?variant=sk-1002104-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001200-01",
    "sku": "SK-1001200-01",
    "manufacturerSku": "SK-1001200-01",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Matte Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/1deb60c2d3f115d2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001200-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001200-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001199-01",
    "sku": "SK-1001199-01",
    "manufacturerSku": "SK-1001199-01",
    "gtin": "8056262721391",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Matte Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/1deb60c2d3f115d2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001199-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001199-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001203-01",
    "sku": "SK-1001203-01",
    "manufacturerSku": "SK-1001203-01",
    "gtin": "8056262721346",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Shiny Black Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-black-green-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/82f3653716cb8c36.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001203-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001203-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001202-01",
    "sku": "SK-1001202-01",
    "manufacturerSku": "SK-1001202-01",
    "gtin": "8056262721339",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Shiny Black Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-black-green-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/82f3653716cb8c36.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001202-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001202-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001238-01",
    "sku": "SK-1001238-01",
    "manufacturerSku": "SK-1001238-01",
    "gtin": "8056262721421",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Matte Black Polar Gradient Graphite Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 439,
    "sourcePrice": 409,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-polarized-graphite-gradient-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/a3b5504c9518859e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001238-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001238-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001237-01",
    "sku": "SK-1001237-01",
    "manufacturerSku": "SK-1001237-01",
    "gtin": "8056262721414",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Matte Black Polar Gradient Graphite Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 439,
    "sourcePrice": 409,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-polarized-graphite-gradient-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/a3b5504c9518859e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001237-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001237-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001242-01",
    "sku": "SK-1001242-01",
    "manufacturerSku": "SK-1001242-01",
    "gtin": "8056262721445",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Shiny Cosmic Blue Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-cosmic-blue-sapphire-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Cosmic Blue"
    ],
    "image": "/images/catalog/a0fc54941496bb64.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001242-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001242-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001241-01",
    "sku": "SK-1001241-01",
    "manufacturerSku": "SK-1001241-01",
    "gtin": "8056262721438",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Shiny Cosmic Blue Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-cosmic-blue-sapphire-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Cosmic Blue"
    ],
    "image": "/images/catalog/a0fc54941496bb64.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001241-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001241-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001251-01",
    "sku": "SK-1001251-01",
    "manufacturerSku": "SK-1001251-01",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-black-green-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/9537319dbef4b1a2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001251-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001251-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001250-01",
    "sku": "SK-1001250-01",
    "manufacturerSku": "SK-1001250-01",
    "gtin": "8056262721292",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-black-green-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/baafdc898ab5c1e0.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001250-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001250-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001247-01",
    "sku": "SK-1001247-01",
    "manufacturerSku": "SK-1001247-01",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Matte Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-grey-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/213813318102724a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001247-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001247-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001246-01",
    "sku": "SK-1001246-01",
    "manufacturerSku": "SK-1001246-01",
    "gtin": "8056262721377",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Matte Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-matte-black-grey-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/213813318102724a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001246-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001246-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001846-01",
    "sku": "SK-1001846-01",
    "manufacturerSku": "SK-1001846-01",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Large Shiny Transparent Grey Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-grey-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Transparent Grey"
    ],
    "image": "/images/catalog/2929ca03e542a426.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001846-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001846-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001845-01",
    "sku": "SK-1001845-01",
    "manufacturerSku": "SK-1001845-01",
    "name": "Ray-Ban Meta Wayfarer Gen 2",
    "variant": "Shiny Transparent Grey Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-2",
    "model": "Wayfarer",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-wayfarer-shiny-grey-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Transparent Grey"
    ],
    "image": "/images/catalog/2929ca03e542a426.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001845-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001845-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1000830-01",
    "sku": "SK-1000830-01",
    "manufacturerSku": "SK-1000830-01",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Matte Black / Clear to Graphite Green Transitions®, Large",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 314,
    "sourcePrice": 284,
    "source": "https://www.meta.com/ai-glasses/wayfarer-matte-black-clear-green-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/a2f5a586703af537.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=sk-1000830-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=sk-1000830-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "chameleon",
    "sku": "RBM-G1-CHAMELEON",
    "manufacturerSku": "SK-1000829-01",
    "gtin": "8056262326787",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Matte Black / Clear to Graphite Green Transitions®, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 314,
    "sourcePrice": 284,
    "source": "https://www.meta.com/ai-glasses/wayfarer-matte-black-clear-green-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/3600f5b1f8c1eb81.webp",
    "availability": "on_request",
    "url": {
      "ru": "/ray-ban-meta-gen-1-chameleon/",
      "uz": "/uz/ray-ban-meta-gen-1-chameleon/"
    },
    "legacyIds": [
      "22",
      "23"
    ],
    "aliases": [
      "gen1-chameleon",
      "ray-ban-meta-gen-1-chameleon"
    ]
  },
  {
    "id": "899-00605-01",
    "sku": "899-00605-01",
    "manufacturerSku": "899-00605-01",
    "gtin": "8056597988377",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Shiny Black / G15 Green, Large",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/wayfarer-shiny-black-plano-g15-green/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/7d39159e6b806faf.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=899-00605-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=899-00605-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "899-00598-01",
    "sku": "899-00598-01",
    "manufacturerSku": "899-00598-01",
    "gtin": "8056597988377",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Shiny Black / Green, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/wayfarer-shiny-black-plano-g15-green/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/ad745acee8a8737e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=899-00598-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=899-00598-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "899-00604-01",
    "sku": "899-00604-01",
    "manufacturerSku": "899-00604-01",
    "gtin": "8056597874816",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Shiny Black / Clear, Large",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/wayfarer-shiny-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/ee3bb0de9b5d6cd2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=899-00604-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=899-00604-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "clear",
    "sku": "RBM-G1-CLEAR",
    "manufacturerSku": "899-00597-01",
    "gtin": "8056597769440",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Shiny Black / Clear, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/wayfarer-shiny-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/751082655a9b1298.webp",
    "availability": "on_request",
    "url": {
      "ru": "/ray-ban-meta-gen-1-clear/",
      "uz": "/uz/ray-ban-meta-gen-1-clear/"
    },
    "legacyIds": [
      "20",
      "21"
    ],
    "aliases": [
      "gen1-clear",
      "ray-ban-meta-gen-1-clear"
    ]
  },
  {
    "id": "899-00606-01",
    "sku": "899-00606-01",
    "manufacturerSku": "899-00606-01",
    "gtin": "8056597988421",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Matte Black / Gradient Graphite Polarized, Large",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 277,
    "sourcePrice": 247,
    "source": "https://www.meta.com/ai-glasses/wayfarer-matte-black-graphite-polar-gradient/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/1cbce9ec5a8fe2d2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=899-00606-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=899-00606-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "899-00599-01",
    "sku": "899-00599-01",
    "manufacturerSku": "899-00599-01",
    "gtin": "8056597982788",
    "name": "Ray-Ban Meta Wayfarer Gen 1",
    "variant": "Matte Black / Gradient Graphite Polarized, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-1",
    "model": "Wayfarer",
    "generation": 1,
    "price": 277,
    "sourcePrice": 247,
    "source": "https://www.meta.com/ai-glasses/wayfarer-matte-black-graphite-polar-gradient/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/1cbce9ec5a8fe2d2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-1/?variant=899-00599-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-1/?variant=899-00599-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001194-01",
    "sku": "SK-1001194-01",
    "manufacturerSku": "SK-1001194-01",
    "gtin": "0888392682857",
    "name": "Oakley Meta HSTN",
    "variant": "Black / Clear to Amethyst Transitions®",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-black-amethyst-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Black"
    ],
    "image": "/images/catalog/ffac5fce745ccfa8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001194-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001194-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001233-01",
    "sku": "SK-1001233-01",
    "manufacturerSku": "SK-1001233-01",
    "gtin": "0888392682901",
    "name": "Oakley Meta HSTN",
    "variant": "Black / Clear",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Black"
    ],
    "image": "/images/catalog/33f51b2252c6fba4.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001233-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001233-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001195-01",
    "sku": "SK-1001195-01",
    "manufacturerSku": "SK-1001195-01",
    "gtin": "0888392682864",
    "name": "Oakley Meta HSTN",
    "variant": "Black / Prizm Black Polarized",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-black-prizm-black-polarized/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black Polarized",
      "Frame color:Black"
    ],
    "image": "/images/catalog/53b26172d96bfff5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001195-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001195-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001196-01",
    "sku": "SK-1001196-01",
    "manufacturerSku": "SK-1001196-01",
    "gtin": "0888392682888",
    "name": "Oakley Meta HSTN",
    "variant": "Clear / Clear to Grey Transitions®",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-clear-grey-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Clear"
    ],
    "image": "/images/catalog/e3cf5b6aaabb6671.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001196-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001196-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001197-01",
    "sku": "SK-1001197-01",
    "manufacturerSku": "SK-1001197-01",
    "gtin": "0888392682895",
    "name": "Oakley Meta HSTN",
    "variant": "Brown Smoke / Prizm Deep Water Polarized",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-light-brown-prizm-deep-water-polarized/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Deep Water Polarized",
      "Frame color:Brown Smoke"
    ],
    "image": "/images/catalog/4310b8f4a0e26717.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001197-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001197-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001193-01",
    "sku": "SK-1001193-01",
    "manufacturerSku": "SK-1001193-01",
    "gtin": "0888392682871",
    "name": "Oakley Meta HSTN",
    "variant": "Warm Grey / Prizm Ruby",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-warm-grey-ruby-prizm/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Ruby",
      "Frame color:Warm Grey"
    ],
    "image": "/images/catalog/ec92e0f068b5abbe.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001193-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001193-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001849-01",
    "sku": "SK-1001849-01",
    "manufacturerSku": "SK-1001849-01",
    "name": "Oakley Meta HSTN",
    "variant": "Light Curry Transitions® Brown Lenses",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-curry-brown-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Brown Transitions®",
      "Frame color:Light Curry"
    ],
    "image": "/images/catalog/d6813e3ac0a9766e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001849-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001849-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001850-01",
    "sku": "SK-1001850-01",
    "manufacturerSku": "SK-1001850-01",
    "name": "Oakley Meta HSTN",
    "variant": "Black Prizm™  Dark Golf Lenses",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-black-prizm-dark-golf/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Dark Golf",
      "Frame color:Black"
    ],
    "image": "/images/catalog/f0b310500cf84d09.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001850-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001850-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1000380-01",
    "sku": "SK-1000380-01",
    "manufacturerSku": "SK-1000380-01",
    "gtin": "8056262526262",
    "name": "Ray-Ban Meta Skyler Gen 1",
    "variant": "Shiny Chalky Gray / Clear to Sapphire Transitions®, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-1",
    "model": "Skyler",
    "generation": 1,
    "price": 314,
    "sourcePrice": 284,
    "source": "https://www.meta.com/ai-glasses/skyler-shiny-chalky-gray-sapphire-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Chalky Gray"
    ],
    "image": "/images/catalog/a54b15b84e4adedd.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-1/?variant=sk-1000380-01",
      "uz": "/uz/smart-glasses/skyler-gen-1/?variant=sk-1000380-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001166-01",
    "sku": "SK-1001166-01",
    "manufacturerSku": "SK-1001166-01",
    "gtin": "8056262043790",
    "name": "Ray-Ban Meta Skyler Gen 1",
    "variant": "Shiny Black / G15 Green, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-1",
    "model": "Skyler",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/skyler-shiny-black-g15-green-standard/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/744efc59453c3374.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-1/?variant=sk-1001166-01",
      "uz": "/uz/smart-glasses/skyler-gen-1/?variant=sk-1001166-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001167-01",
    "sku": "SK-1001167-01",
    "manufacturerSku": "SK-1001167-01",
    "gtin": "8056597983563",
    "name": "Ray-Ban Meta Skyler Gen 1",
    "variant": "Shiny Black / Clear, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-1",
    "model": "Skyler",
    "generation": 1,
    "price": 254,
    "sourcePrice": 224,
    "source": "https://www.meta.com/ai-glasses/skyler-shiny-black-clear/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/e407a08c215086e5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-1/?variant=sk-1001167-01",
      "uz": "/uz/smart-glasses/skyler-gen-1/?variant=sk-1001167-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "899-00697-01",
    "sku": "899-00697-01",
    "manufacturerSku": "899-00697-01",
    "gtin": "8056262166185",
    "name": "Ray-Ban Meta Skyler Gen 1",
    "variant": "Shiny Black / Cerulean Blue Transitions®, Standard",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-1",
    "model": "Skyler",
    "generation": 1,
    "price": 314,
    "sourcePrice": 284,
    "source": "https://www.meta.com/ai-glasses/skyler-shiny-black-blue-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Tint to Cerulean Blue Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/06f052289f8c8a47.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-1/?variant=899-00697-01",
      "uz": "/uz/smart-glasses/skyler-gen-1/?variant=899-00697-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001235-01",
    "sku": "SK-1001235-01",
    "manufacturerSku": "SK-1001235-01",
    "gtin": "8056262721230",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Black Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-black-green-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/bbc2cd7eedc2c3bf.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001235-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001235-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001240-01",
    "sku": "SK-1001240-01",
    "manufacturerSku": "SK-1001240-01",
    "gtin": "8056262721254",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Black Polar Gradient Graphite Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 439,
    "sourcePrice": 409,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-black-polarized-black-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/186a5e3b7bda74fe.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001240-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001240-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001244-01",
    "sku": "SK-1001244-01",
    "manufacturerSku": "SK-1001244-01",
    "gtin": "8056262758175",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Mystic Violet Transitions® Amethyst Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-mystic-violet-amethyst-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Shiny Mystic Violet"
    ],
    "image": "/images/catalog/83752a70b702e133.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001244-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001244-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001249-01",
    "sku": "SK-1001249-01",
    "manufacturerSku": "SK-1001249-01",
    "gtin": "8056262721261",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Chalky Gray Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-chalky-gray-sapphire-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Chalky Gray"
    ],
    "image": "/images/catalog/2ae9751e9ce5a5c7.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001249-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001249-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001254-01",
    "sku": "SK-1001254-01",
    "manufacturerSku": "SK-1001254-01",
    "gtin": "8056262721223",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-black-green-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/f01b33ee55593428.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001254-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001254-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001370-01",
    "sku": "SK-1001370-01",
    "manufacturerSku": "SK-1001370-01",
    "gtin": "8056262729953",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/3bd30139c92e3206.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001370-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001370-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001253-01",
    "sku": "SK-1001253-01",
    "manufacturerSku": "SK-1001253-01",
    "gtin": "8056262721247",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Black Transitions® Amethyst Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-black-amethyst-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/77b75e1a7a7e45ce.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001253-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001253-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001848-01",
    "sku": "SK-1001848-01",
    "manufacturerSku": "SK-1001848-01",
    "name": "Ray-Ban Meta Skyler Gen 2",
    "variant": "Shiny Transparent Peach Transitions® Brown Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "skyler-gen-2",
    "model": "Skyler",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-skyler-shiny-peach-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Brown Transitions®",
      "Frame color:Shiny Transparent Peach"
    ],
    "image": "/images/catalog/a44d7d46f13a1bfd.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/skyler-gen-2/?variant=sk-1001848-01",
      "uz": "/uz/smart-glasses/skyler-gen-2/?variant=sk-1001848-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001204-01",
    "sku": "SK-1001204-01",
    "manufacturerSku": "SK-1001204-01",
    "gtin": "0888392690371",
    "name": "Oakley Meta Vanguard",
    "variant": "Black Prizm™ 24K",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-black-prizm-24k/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ 24K",
      "Frame color:Black"
    ],
    "image": "/images/catalog/dd1172816508e676.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001204-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001204-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001205-01",
    "sku": "SK-1001205-01",
    "manufacturerSku": "SK-1001205-01",
    "gtin": "0888392690388",
    "name": "Oakley Meta Vanguard",
    "variant": "White Prizm™ Black",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-white-prizm-black/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black",
      "Frame color:White"
    ],
    "image": "/images/catalog/4d7474089df55df6.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001205-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001205-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001206-01",
    "sku": "SK-1001206-01",
    "manufacturerSku": "SK-1001206-01",
    "gtin": "0888392690418",
    "name": "Oakley Meta Vanguard",
    "variant": "Black Prizm™ Road",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-black-prizm-road/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Road",
      "Frame color:Black"
    ],
    "image": "/images/catalog/38241ea667e295f3.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001206-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001206-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001207-01",
    "sku": "SK-1001207-01",
    "manufacturerSku": "SK-1001207-01",
    "gtin": "0888392690395",
    "name": "Oakley Meta Vanguard",
    "variant": "White Prizm™ Sapphire",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-white-prizm-sapphire/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Sapphire",
      "Frame color:White"
    ],
    "image": "/images/catalog/7a17facff60e9e10.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001207-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001207-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001854-01",
    "sku": "SK-1001854-01",
    "manufacturerSku": "SK-1001854-01",
    "name": "Oakley Meta Vanguard",
    "variant": "White Prizm™ Rose Gold Lens",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-white-prizm-rose-gold/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Rose Gold",
      "Frame color:White"
    ],
    "image": "/images/catalog/74ed7bc8a388c509.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001854-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001854-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001852-01",
    "sku": "SK-1001852-01",
    "manufacturerSku": "SK-1001852-01",
    "name": "Oakley Meta Vanguard",
    "variant": "Black Prizm™ Black Lens",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-black-prizm-black/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black",
      "Frame color:Black"
    ],
    "image": "/images/catalog/bd8ffc9743682c76.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001852-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001852-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001853-01",
    "sku": "SK-1001853-01",
    "manufacturerSku": "SK-1001853-01",
    "name": "Oakley Meta Vanguard",
    "variant": "Black Prizm™ Transitions® Ember Lens",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 609,
    "sourcePrice": 579,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-black-prizm-transitions/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Transitions® Ember",
      "Frame color:Black"
    ],
    "image": "/images/catalog/128d33da5551e36d.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001853-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001853-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001201-01",
    "sku": "SK-1001201-01",
    "manufacturerSku": "SK-1001201-01",
    "gtin": "8056262721322",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Matte Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-matte-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/67007d468c128383.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001201-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001201-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001239-01",
    "sku": "SK-1001239-01",
    "manufacturerSku": "SK-1001239-01",
    "gtin": "8056262721353",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Matte Black Polar Gradient Graphite Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 439,
    "sourcePrice": 409,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-matte-black-polarized-black-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/3561ddc46f8a532c.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001239-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001239-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001236-01",
    "sku": "SK-1001236-01",
    "manufacturerSku": "SK-1001236-01",
    "gtin": "8056262720011",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Low Bridge Fit Shiny Black Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-black-green-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, low bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/98d7ca016e6536a4.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001236-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001236-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001234-01",
    "sku": "SK-1001234-01",
    "manufacturerSku": "SK-1001234-01",
    "gtin": "8056262721285",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Shiny Black Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-black-green-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/98d7ca016e6536a4.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001234-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001234-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001252-01",
    "sku": "SK-1001252-01",
    "manufacturerSku": "SK-1001252-01",
    "gtin": "8056262721278",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-black-green-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/05f31cb2827f8f3f.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001252-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001252-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001243-01",
    "sku": "SK-1001243-01",
    "manufacturerSku": "SK-1001243-01",
    "gtin": "8056262721360",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Shiny Asteroid Grey Transitions Emerald Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-asteroid-grey-emerald-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Emerald Transitions®",
      "Frame color:Shiny Asteroid Grey"
    ],
    "image": "/images/catalog/1c844dcbce8b28c1.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001243-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001243-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001245-01",
    "sku": "SK-1001245-01",
    "manufacturerSku": "SK-1001245-01",
    "gtin": "8056262720042",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Low Bridge Fit Shiny Black Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-black-sapphire-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, low bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/9537e2f84cdc7d6c.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001245-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001245-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001248-01",
    "sku": "SK-1001248-01",
    "manufacturerSku": "SK-1001248-01",
    "gtin": "8056262721315",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Shiny Black Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-shiny-black-sapphire-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/9537e2f84cdc7d6c.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001248-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001248-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001847-01",
    "sku": "SK-1001847-01",
    "manufacturerSku": "SK-1001847-01",
    "name": "Ray-Ban Meta Headliner Gen 2",
    "variant": "Matte Transparent Peach Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "headliner-gen-2",
    "model": "Headliner",
    "generation": 2,
    "price": 489,
    "sourcePrice": 459,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-headliner-matte-peach-transitions-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Transparent Peach"
    ],
    "image": "/images/catalog/33a3789086c4a4f5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/headliner-gen-2/?variant=sk-1001847-01",
      "uz": "/uz/smart-glasses/headliner-gen-2/?variant=sk-1001847-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001962-01",
    "sku": "SK-1001962-01",
    "manufacturerSku": "SK-1001962-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Large Havana, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-havana-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/90ab16c8b002371b.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001962-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001962-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001961-01",
    "sku": "SK-1001961-01",
    "manufacturerSku": "SK-1001961-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Havana, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-havana-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/a1ab9943111901e1.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001961-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001961-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001811-01",
    "sku": "SK-1001811-01",
    "manufacturerSku": "SK-1001811-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Large Matte Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-matte-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/6144e7c504c6e454.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001811-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001811-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001807-01",
    "sku": "SK-1001807-01",
    "manufacturerSku": "SK-1001807-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Matte Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-matte-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/7c6bf432e5436198.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001807-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001807-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001810-01",
    "sku": "SK-1001810-01",
    "manufacturerSku": "SK-1001810-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Matte Transparent Ice Grey, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-matte-grey-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Transparent Ice Grey"
    ],
    "image": "/images/catalog/e7176d95125d30ec.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001810-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001810-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001814-01",
    "sku": "SK-1001814-01",
    "manufacturerSku": "SK-1001814-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Large Matte Transparent Ice Grey, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-matte-grey-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Transparent Ice Grey"
    ],
    "image": "/images/catalog/0c8a319a42ee74a5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001814-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001814-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001808-01",
    "sku": "SK-1001808-01",
    "manufacturerSku": "SK-1001808-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Shiny Transparent Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-shiny-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Black"
    ],
    "image": "/images/catalog/3eef9b79ab2b5be9.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001808-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001808-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001812-01",
    "sku": "SK-1001812-01",
    "manufacturerSku": "SK-1001812-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Large Shiny Transparent Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-shiny-black-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Black"
    ],
    "image": "/images/catalog/1319114ee1a362af.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001812-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001812-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001813-01",
    "sku": "SK-1001813-01",
    "manufacturerSku": "SK-1001813-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Large Shiny Transparent Dark Olive, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-shiny-olive-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Dark Olive"
    ],
    "image": "/images/catalog/c0fbb62abec1c1e4.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001813-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001813-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001809-01",
    "sku": "SK-1001809-01",
    "manufacturerSku": "SK-1001809-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Shiny Transparent Dark Olive, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-shiny-olive-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Dark Olive"
    ],
    "image": "/images/catalog/7fdbead3e4c2cfe9.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1001809-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1001809-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001816-01",
    "sku": "SK-1001816-01",
    "manufacturerSku": "SK-1001816-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Shiny Transparent Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-clear-shiny-black-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Black"
    ],
    "image": "/images/catalog/c20079f5f30c0d3d.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1001816-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1001816-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001963-01",
    "sku": "SK-1001963-01",
    "manufacturerSku": "SK-1001963-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Havana, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-havana-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/9d1c71af11d29d13.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1001963-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1001963-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001818-01",
    "sku": "SK-1001818-01",
    "manufacturerSku": "SK-1001818-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Shiny Transparent Stone Beige, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-shiny-beige-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Stone Beige"
    ],
    "image": "/images/catalog/d5001964f1411bee.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1001818-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1001818-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001817-01",
    "sku": "SK-1001817-01",
    "manufacturerSku": "SK-1001817-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Shiny Transparent Umber, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-shiny-umber-clear-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Umber"
    ],
    "image": "/images/catalog/78984a766f4db66d.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1001817-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1001817-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001815-01",
    "sku": "SK-1001815-01",
    "manufacturerSku": "SK-1001815-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Shiny Black, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-solid-shiny-black-gen-2/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/1772e980348f0af6.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1001815-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1001815-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001159-01",
    "sku": "SK-1001159-01",
    "manufacturerSku": "SK-1001159-01",
    "name": "Meta Ray-Ban Display + Neural Band",
    "variant": "Meta Ray-Ban Display (Large, Shiny Black, Transitions)",
    "category": "glasses",
    "brand": "display",
    "family": "display",
    "model": "Display",
    "generation": 0,
    "price": null,
    "sourcePrice": 799,
    "source": "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band-black/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Black"
    ],
    "image": "/images/catalog/6cece5932379407e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/display/?variant=sk-1001159-01",
      "uz": "/uz/smart-glasses/display/?variant=sk-1001159-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001158-01",
    "sku": "SK-1001158-01",
    "manufacturerSku": "SK-1001158-01",
    "gtin": "0815820026730",
    "name": "Meta Ray-Ban Display + Neural Band",
    "variant": "Meta Ray-Ban Display (Standard, Shiny Black, Transitions)",
    "category": "glasses",
    "brand": "display",
    "family": "display",
    "model": "Display",
    "generation": 0,
    "price": null,
    "sourcePrice": 799,
    "source": "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band-black/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Black"
    ],
    "image": "/images/catalog/082e0c253d80e843.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/display/?variant=sk-1001158-01",
      "uz": "/uz/smart-glasses/display/?variant=sk-1001158-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001226-01",
    "sku": "SK-1001226-01",
    "manufacturerSku": "SK-1001226-01",
    "gtin": "0815820027003",
    "name": "Meta Ray-Ban Display + Neural Band",
    "variant": "Meta Ray-Ban Display (Large, Shiny Sand, Transitions)",
    "category": "glasses",
    "brand": "display",
    "family": "display",
    "model": "Display",
    "generation": 0,
    "price": null,
    "sourcePrice": 799,
    "source": "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band-sand/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Sand"
    ],
    "image": "/images/catalog/35ab8161f8f0c749.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/display/?variant=sk-1001226-01",
      "uz": "/uz/smart-glasses/display/?variant=sk-1001226-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001225-01",
    "sku": "SK-1001225-01",
    "manufacturerSku": "SK-1001225-01",
    "name": "Meta Ray-Ban Display + Neural Band",
    "variant": "Meta Ray-Ban Display (Standard, Shiny Sand, Transitions)",
    "category": "glasses",
    "brand": "display",
    "family": "display",
    "model": "Display",
    "generation": 0,
    "price": null,
    "sourcePrice": 799,
    "source": "https://www.meta.com/ai-glasses/meta-ray-ban-display-glasses-and-neural-band-sand/",
    "sourceCheckedAt": "2026-09-19T06:58:15.959Z",
    "sourceAvailability": "OutOfStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Sand"
    ],
    "image": "/images/catalog/75d326dcdc7b9ffb.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/display/?variant=sk-1001225-01",
      "uz": "/uz/smart-glasses/display/?variant=sk-1001225-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "whoop",
    "sku": "WHOOP-MG-LIFE",
    "name": "WHOOP MG Life 5.0",
    "variant": "Life · 12 months",
    "category": "fitness",
    "brand": "whoop",
    "family": "whoop",
    "model": "MG Life",
    "generation": 5,
    "price": 355,
    "image": "/images/store-whoop.webp",
    "availability": "on_request",
    "url": {
      "ru": "/whoop-mg-life/",
      "uz": "/uz/whoop-mg-life/"
    },
    "legacyIds": [
      "59"
    ],
    "aliases": [
      "whoop-mg-life",
      "whoop-mg-life-5"
    ]
  }
].map(function (product) {
    Object.freeze(product.legacyIds);
    Object.freeze(product.aliases);
    Object.freeze(product.url);
    return Object.freeze(product);
  });

  function findProduct(id) {
    const value = String(id == null ? "" : id).toLowerCase();
    return products.find(function (product) {
      return (
        product.id === value ||
        product.sku.toLowerCase() === value ||
        product.legacyIds.includes(value) ||
        product.aliases.includes(value)
      );
    });
  }

  function validateCart(input) {
    if (!Array.isArray(input)) return [];
    const quantities = new Map();
    input.slice(0, 100).forEach(function (line) {
      if (!line || typeof line !== "object") return;
      const product = findProduct(line.id);
      if (!product || !Number.isSafeInteger(line.quantity) || line.quantity < 1)
        return;
      quantities.set(
        product.id,
        Math.min(99, (quantities.get(product.id) || 0) + line.quantity),
      );
    });
    return Array.from(quantities, function (entry) {
      return { id: entry[0], quantity: entry[1] };
    });
  }

  function cartTotal(cart) {
    if (validateCart(cart).some(line => findProduct(line.id).price === null)) return null;
    return validateCart(cart).reduce(function (sum, line) {
      return sum + findProduct(line.id).price * line.quantity;
    }, 0);
  }

  function orderDraft(cart, language) {
    const isUz = language === "uz";
    const valid = validateCart(cart);
    if (!valid.length) return "";
    const lines = valid.map(function (line) {
      const product = findProduct(line.id);
      if (product.price === null) return product.name + " — " + product.variant + "\n" + line.quantity + (isUz ? " dona · Narx so‘rov bo‘yicha" : " шт. · Цена по запросу");
      return (
        product.name +
        " — " +
        product.variant +
        "\n" +
        line.quantity +
        " × $" +
        product.price +
        " = $" +
        product.price * line.quantity
      );
    });
    return [
      isUz
        ? "Salom! TechGeek.uz orqali buyurtma asosida yetkazishni tasdiqlang:"
        : "Здравствуйте! Прошу подтвердить поставку под заказ на TechGeek.uz:",
      "",
      lines.join("\n\n"),
      "",
      cartTotal(valid) === null ? (isUz ? "Yakuniy narx kelishiladi." : "Итоговая цена согласовывается.") : (isUz ? "Jami: $" : "Итого: $") + cartTotal(valid),
      isUz
        ? "O‘zbekiston bo‘ylab yetkazib berish bepul."
        : "Бесплатная доставка по Узбекистану.",
      isUz
        ? "Mavjudligi, so‘mdagi yakuniy summa va yetkazish vaqtini tasdiqlab bering."
        : "Подтвердите, пожалуйста, наличие, итоговую сумму в сумах и время доставки.",
    ].join("\n");
  }

  root.TG_CATALOG = Object.freeze(products);
  root.TG_STORE = Object.freeze({
    findProduct: findProduct,
    validateCart: validateCart,
    cartTotal: cartTotal,
    orderDraft: orderDraft,
  });
})(typeof window === "undefined" ? globalThis : window);
