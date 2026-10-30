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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "id": "sk-1002339-01",
    "sku": "SK-1002339-01",
    "manufacturerSku": "SK-1002339-01",
    "name": "Meta Glasses Starfire Kylie Edition",
    "variant": "Ivory Black Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "starfire",
    "model": "Starfire",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/starfire-kylie-ivory/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Black",
      "Frame color:Ivory"
    ],
    "image": "/images/catalog/fdd00d09c1422f1b.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/starfire/?variant=sk-1002339-01",
      "uz": "/uz/smart-glasses/starfire/?variant=sk-1002339-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/728754e199f0f1d6.webp",
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
    "gtin": "0815820028857",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/2aa932370aa69f91.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/908716ffef6d711a.webp",
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
    "gtin": "0815820028864",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/c031936029c6fa43.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/1f381dc505064d5e.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/6cc773fb43dc5f74.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/a96788b8e2733abb.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Classic Tortoise"
    ],
    "image": "/images/catalog/ce09ad55119221b2.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/c986c7dc8f148553.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/ad9c1a3b3db41acb.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/29a6f8a93d877ca7.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/fd4b7ae843ae8c9f.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Ruby Transitions®",
      "Frame color:Merlot"
    ],
    "image": "/images/catalog/5777858524bc4acf.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Ruby Transitions®",
      "Frame color:Merlot"
    ],
    "image": "/images/catalog/38933f7dc5751f23.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Linen"
    ],
    "image": "/images/catalog/d78cee96548128cf.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Linen"
    ],
    "image": "/images/catalog/2d051b78c5d820c2.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1001883-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1001883-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002336-01",
    "sku": "SK-1002336-01",
    "manufacturerSku": "SK-1002336-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Large with Plug-In Case Classic Black Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 279,
    "sourcePrice": 249,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-with-plug-in-case/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/7ae2476ea6b6eca8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1002336-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1002336-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002335-01",
    "sku": "SK-1002335-01",
    "manufacturerSku": "SK-1002335-01",
    "name": "Meta Glasses Adventurer",
    "variant": "Standard with Plug-In Case Classic Black Grey Lenses",
    "category": "glasses",
    "brand": "meta",
    "family": "adventurer",
    "model": "Adventurer",
    "generation": 0,
    "price": 279,
    "sourcePrice": 249,
    "source": "https://www.meta.com/ai-glasses/meta-glasses/adventurer-black-grey-with-plug-in-case/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/cd8dea36d82b74ff.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/adventurer/?variant=sk-1002335-01",
      "uz": "/uz/smart-glasses/adventurer/?variant=sk-1002335-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown Gradient",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/c6d66ebce926bbba.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Mahogany"
    ],
    "image": "/images/catalog/831aa5dc41d7e093.webp",
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
    "gtin": "0815820029038",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Light Blue Atlantic",
      "Frame color:Racing Green"
    ],
    "image": "/images/catalog/781ed88642e08aee.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/2f43e81fd685d924.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Dark Amber",
      "Frame color:Sandstone"
    ],
    "image": "/images/catalog/9f7e80a35b66d8b7.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Classic Black"
    ],
    "image": "/images/catalog/c9d404a5a4893b15.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Mahogany"
    ],
    "image": "/images/catalog/c21668efc5e18702.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/616385161d00285a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/616385161d00285a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/e329d2f083f53153.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/e329d2f083f53153.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/fe7de418bf1f3f1e.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/fe7de418bf1f3f1e.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Cosmic Blue"
    ],
    "image": "/images/catalog/4b07f19e788cfd0a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Cosmic Blue"
    ],
    "image": "/images/catalog/4b07f19e788cfd0a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/0be7a28663cc7402.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/ae93808dacc0cef9.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/bfb8abde619a8851.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/bfb8abde619a8851.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Transparent Grey"
    ],
    "image": "/images/catalog/a6308bbedddbd1a0.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Transparent Grey"
    ],
    "image": "/images/catalog/a6308bbedddbd1a0.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-2/?variant=sk-1001845-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-2/?variant=sk-1001845-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Black"
    ],
    "image": "/images/catalog/d58c8ae9627a5255.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Black"
    ],
    "image": "/images/catalog/4cd0f79d2b16a2c3.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black Polarized",
      "Frame color:Black"
    ],
    "image": "/images/catalog/6b3e96f1b8f18ed8.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Clear"
    ],
    "image": "/images/catalog/a22a01ba69f1cf84.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Deep Water Polarized",
      "Frame color:Brown Smoke"
    ],
    "image": "/images/catalog/a012bb3e0c6dfaa3.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Ruby",
      "Frame color:Warm Grey"
    ],
    "image": "/images/catalog/e4ff45c8faa822e8.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Brown Transitions®",
      "Frame color:Light Curry"
    ],
    "image": "/images/catalog/ab66149ef2c49a53.webp",
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
    "variant": "Black Prizm™ Dark Golf Lenses",
    "category": "glasses",
    "brand": "oakley",
    "family": "hstn",
    "model": "HSTN",
    "generation": 0,
    "price": 429,
    "sourcePrice": 399,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-hstn-black-prizm-dark-golf/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Dark Golf",
      "Frame color:Black"
    ],
    "image": "/images/catalog/838a3181f65bca34.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/hstn/?variant=sk-1001850-01",
      "uz": "/uz/smart-glasses/hstn/?variant=sk-1001850-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/2ecf2a1b2ad036ec.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/a4c6a7041ec6805d.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Shiny Mystic Violet"
    ],
    "image": "/images/catalog/3e3ccfaf55bf957a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Chalky Gray"
    ],
    "image": "/images/catalog/a56f1dad479c8674.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/a9c35ef2cc7c6921.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/02a1fef98e3f76a9.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Amethyst Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/a27f32f4bf2956e2.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Brown Transitions®",
      "Frame color:Shiny Transparent Peach"
    ],
    "image": "/images/catalog/46a612c3118a31c4.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ 24K",
      "Frame color:Black"
    ],
    "image": "/images/catalog/ec4d0ee2ce08a13f.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black",
      "Frame color:White"
    ],
    "image": "/images/catalog/7fc09b1b34b59b7a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Road",
      "Frame color:Black"
    ],
    "image": "/images/catalog/3d46a1e66142b6e3.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Sapphire",
      "Frame color:White"
    ],
    "image": "/images/catalog/1f78103f58aee917.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Rose Gold",
      "Frame color:White"
    ],
    "image": "/images/catalog/b948eccf1582dfd8.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Black",
      "Frame color:Black"
    ],
    "image": "/images/catalog/4e58dc629fecabcd.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Prizm™ Transitions® Ember",
      "Frame color:Black"
    ],
    "image": "/images/catalog/efb6ac600db1d3d1.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1001853-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1001853-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1003077-01",
    "sku": "SK-1003077-01",
    "manufacturerSku": "SK-1003077-01",
    "name": "Oakley Meta Vanguard",
    "variant": "Black Clear - Z87+ Certified Lens",
    "category": "glasses",
    "brand": "oakley",
    "family": "vanguard",
    "model": "Vanguard",
    "generation": 0,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/oakley-meta-vanguard-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear - Z87+ Certified",
      "Frame color:Black"
    ],
    "image": "/images/catalog/75769244e230a660.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/vanguard/?variant=sk-1003077-01",
      "uz": "/uz/smart-glasses/vanguard/?variant=sk-1003077-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/afd8ee00224c59d3.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Graphite",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/54fe8b6110d6403a.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, low bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/cd47b96b5af182c0.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/cd47b96b5af182c0.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Graphite Green Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/3f59aceb7840130b.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Emerald Transitions®",
      "Frame color:Shiny Asteroid Grey"
    ],
    "image": "/images/catalog/817a9973f9e4b914.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, low bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/d01ac9109d4452a2.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Sapphire Transitions®",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/d01ac9109d4452a2.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Matte Transparent Peach"
    ],
    "image": "/images/catalog/4d60e1a065a0a36c.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "id": "sk-1002819-01",
    "sku": "SK-1002819-01",
    "manufacturerSku": "SK-1002819-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Ray-Ban Meta (Gen 2) Blayzer Optics, Large Shiny Brick Brown, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-brick-brown-clear-gen-2/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Brick Brown"
    ],
    "image": "/images/catalog/c8332d5ce13d95ca.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1002819-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1002819-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002816-01",
    "sku": "SK-1002816-01",
    "manufacturerSku": "SK-1002816-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Ray-Ban Meta (Gen 2) Blayzer Optics, Shiny Brick Brown, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-brick-brown-clear-gen-2/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Brick Brown"
    ],
    "image": "/images/catalog/45595e2fa8773801.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1002816-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1002816-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002820-01",
    "sku": "SK-1002820-01",
    "manufacturerSku": "SK-1002820-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Ray-Ban Meta (Gen 2) Blayzer Optics, Large Shiny Transparent Ocean Blue, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-ocean-blue-clear-gen-2/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Ocean Blue"
    ],
    "image": "/images/catalog/fff3fbc5bfc66b8e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1002820-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1002820-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002818-01",
    "sku": "SK-1002818-01",
    "manufacturerSku": "SK-1002818-01",
    "name": "Ray-Ban Meta Blayzer Optics Gen 2",
    "variant": "Ray-Ban Meta (Gen 2) Blayzer Optics, Shiny Transparent Ocean Blue, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "blayzer-gen-2",
    "model": "Blayzer Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-blayzer-ocean-blue-clear-gen-2/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Ocean Blue"
    ],
    "image": "/images/catalog/1a5308795027e7b9.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/blayzer-gen-2/?variant=sk-1002818-01",
      "uz": "/uz/smart-glasses/blayzer-gen-2/?variant=sk-1002818-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "id": "sk-1002821-01",
    "sku": "SK-1002821-01",
    "manufacturerSku": "SK-1002821-01",
    "name": "Ray-Ban Meta Scriber Optics Gen 2",
    "variant": "Ray-Ban Meta (Gen 2) Scriber Optics, Shiny Transparent Dark Olive, Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "scriber-gen-2",
    "model": "Scriber Optics",
    "generation": 2,
    "price": 529,
    "sourcePrice": 499,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-scriber-dark-olive-clear-gen-2/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Transparent Dark Olive"
    ],
    "image": "/images/catalog/018d45c815335086.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/scriber-gen-2/?variant=sk-1002821-01",
      "uz": "/uz/smart-glasses/scriber-gen-2/?variant=sk-1002821-01"
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Black"
    ],
    "image": "/images/catalog/893189824a80fe8f.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear to Grey Transitions®",
      "Frame color:Sand"
    ],
    "image": "/images/catalog/59c6ee3bfb56b1d8.webp",
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
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
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
    "id": "sk-1002186-01",
    "sku": "SK-1002186-01",
    "manufacturerSku": "SK-1002186-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Havana Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-havana-green/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/d22b5ce159efb2ce.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002186-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002186-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002176-01",
    "sku": "SK-1002176-01",
    "manufacturerSku": "SK-1002176-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Havana Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-havana-green/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/c0b0eb4b5ec380c8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002176-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002176-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002192-01",
    "sku": "SK-1002192-01",
    "manufacturerSku": "SK-1002192-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Matte Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/4d26c81ace0a3904.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002192-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002192-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002178-01",
    "sku": "SK-1002178-01",
    "manufacturerSku": "SK-1002178-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Matte Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/f9cbe82083f85bc8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002178-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002178-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002187-01",
    "sku": "SK-1002187-01",
    "manufacturerSku": "SK-1002187-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Matte Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/833756a44d266e50.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002187-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002187-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002179-01",
    "sku": "SK-1002179-01",
    "manufacturerSku": "SK-1002179-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Matte Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/87831bbdad830698.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002179-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002179-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002185-01",
    "sku": "SK-1002185-01",
    "manufacturerSku": "SK-1002185-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Matte Black Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-grey/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/5c9807dc8d2a657a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002185-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002185-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002174-01",
    "sku": "SK-1002174-01",
    "manufacturerSku": "SK-1002174-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Matte Black Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-matte-black-grey/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/6be957f28daf4915.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002174-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002174-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002173-01",
    "sku": "SK-1002173-01",
    "manufacturerSku": "SK-1002173-01",
    "gtin": "8056266261459",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Shiny Black Polarized Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-shiny-black-green-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/0bf31a7f3895ee67.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002173-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002173-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002180-01",
    "sku": "SK-1002180-01",
    "manufacturerSku": "SK-1002180-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Shiny Black Polarized Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-shiny-black-green-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/5fce853e794c8b07.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002180-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002180-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002177-01",
    "sku": "SK-1002177-01",
    "manufacturerSku": "SK-1002177-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Shiny Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-shiny-black-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/3a13d1339cf7085e.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002177-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002177-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002175-01",
    "sku": "SK-1002175-01",
    "manufacturerSku": "SK-1002175-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Shiny Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-shiny-black-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/1cb46ad3e5e91810.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002175-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002175-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002193-01",
    "sku": "SK-1002193-01",
    "manufacturerSku": "SK-1002193-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Transparent Black Transitions® Aquamarine Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-transparent-black-aquamarine-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Transitions® Aquamarine",
      "Frame color:Transparent Black"
    ],
    "image": "/images/catalog/ced31d9ac1e20974.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002193-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002193-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002191-01",
    "sku": "SK-1002191-01",
    "manufacturerSku": "SK-1002191-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Transparent Black Transitions® Aquamarine Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-transparent-black-aquamarine-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Aquamarine",
      "Frame color:Transparent Black"
    ],
    "image": "/images/catalog/39b0991e34fd0c14.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002191-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002191-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002188-01",
    "sku": "SK-1002188-01",
    "manufacturerSku": "SK-1002188-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Large Transparent Matte Ocean Blue Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-transparent-matte-ocean-blue-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, high bridge",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Transparent Matte Ocean Blue"
    ],
    "image": "/images/catalog/606b924312bdb553.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002188-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002188-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002184-01",
    "sku": "SK-1002184-01",
    "manufacturerSku": "SK-1002184-01",
    "name": "Ray-Ban Meta Wayfarer Gen 3",
    "variant": "Transparent Matte Ocean Blue Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "wayfarer-gen-3",
    "model": "Wayfarer",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-wayfarer-transparent-matte-ocean-blue-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Transparent Matte Ocean Blue"
    ],
    "image": "/images/catalog/46b14799a5c6d850.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/wayfarer-gen-3/?variant=sk-1002184-01",
      "uz": "/uz/smart-glasses/wayfarer-gen-3/?variant=sk-1002184-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002189-01",
    "sku": "SK-1002189-01",
    "manufacturerSku": "SK-1002189-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Havana Brown Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-havana-brown/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Brown",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/03e299cd7dc99021.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002189-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002189-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002183-01",
    "sku": "SK-1002183-01",
    "manufacturerSku": "SK-1002183-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Havana Transitions® Brown Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-havana-brown-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Brown",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/66936d1007646e94.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002183-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002183-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002197-01",
    "sku": "SK-1002197-01",
    "manufacturerSku": "SK-1002197-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Limited Edition Milky Warm Beige Transitions® Brown Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 609,
    "sourcePrice": 579,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-milky-warm-beige-brown-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Brown",
      "Frame color:Milky Warm Beige"
    ],
    "image": "/images/catalog/99e9c99b315992a0.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002197-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002197-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002190-01",
    "sku": "SK-1002190-01",
    "manufacturerSku": "SK-1002190-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Shiny Black Polarized Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-shiny-black-green-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/d0aff710ee4a6aad.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002190-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002190-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002181-01",
    "sku": "SK-1002181-01",
    "manufacturerSku": "SK-1002181-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-shiny-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/36cba16521029cff.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002181-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002181-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002707-01",
    "sku": "SK-1002707-01",
    "manufacturerSku": "SK-1002707-01",
    "name": "Ray-Ban Meta Aviator Gen 3",
    "variant": "Transparent Umber Transitions® Jade Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "aviator-gen-3",
    "model": "Aviator",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-aviator-transparent-umber-jade-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Jade",
      "Frame color:Transparent Umber"
    ],
    "image": "/images/catalog/ddb31df6b561bec9.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/aviator-gen-3/?variant=sk-1002707-01",
      "uz": "/uz/smart-glasses/aviator-gen-3/?variant=sk-1002707-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002195-01",
    "sku": "SK-1002195-01",
    "manufacturerSku": "SK-1002195-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Havana Gradient Brown Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-havana-brown-gradient/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Gradient Brown",
      "Frame color:Havana"
    ],
    "image": "/images/catalog/6aa706d66d27600a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002195-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002195-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002198-01",
    "sku": "SK-1002198-01",
    "manufacturerSku": "SK-1002198-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Milky Grey Lilac Transitions® Copper Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-milky-grey-lilac-copper-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Copper",
      "Frame color:Milky Grey Lilac"
    ],
    "image": "/images/catalog/6d613b622ffece74.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002198-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002198-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002199-01",
    "sku": "SK-1002199-01",
    "manufacturerSku": "SK-1002199-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Shiny Black Clear Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-shiny-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Clear",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/489f7ea80979a25b.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002199-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002199-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002196-01",
    "sku": "SK-1002196-01",
    "manufacturerSku": "SK-1002196-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Shiny Black Polarized Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 509,
    "sourcePrice": 479,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-shiny-black-green-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/3b192e28ed764510.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002196-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002196-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002182-01",
    "sku": "SK-1002182-01",
    "manufacturerSku": "SK-1002182-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Shiny Black Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 559,
    "sourcePrice": 529,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-shiny-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/72902b123c8fe9b5.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002182-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002182-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002194-01",
    "sku": "SK-1002194-01",
    "manufacturerSku": "SK-1002194-01",
    "name": "Ray-Ban Meta Zena Gen 3",
    "variant": "Shiny Black Grey Lenses",
    "category": "glasses",
    "brand": "rayban",
    "family": "zena-gen-3",
    "model": "Zena",
    "generation": 3,
    "price": 479,
    "sourcePrice": 449,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-gen-3-zena-shiny-black-grey/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, high bridge",
    "color": [
      "Lens color:Grey",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/33a0ead1eaf09b17.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/zena-gen-3/?variant=sk-1002194-01",
      "uz": "/uz/smart-glasses/zena-gen-3/?variant=sk-1002194-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001922-01",
    "sku": "SK-1001922-01",
    "manufacturerSku": "SK-1001922-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Large Transparent Sky Blue Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-blue-sapphire-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, universal fit",
    "color": [
      "Lens color:Transitions® Sapphire",
      "Frame color:Transparent Sky Blue"
    ],
    "image": "/images/catalog/59d0b14b9054210b.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001922-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001922-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001918-01",
    "sku": "SK-1001918-01",
    "manufacturerSku": "SK-1001918-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Transparent Sky Blue Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-blue-sapphire-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Sapphire",
      "Frame color:Transparent Sky Blue"
    ],
    "image": "/images/catalog/78f29a487dc8061f.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001918-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001918-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001927-01",
    "sku": "SK-1001927-01",
    "manufacturerSku": "SK-1001927-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Large Matte Black on Warm Silver Clear Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 379,
    "sourcePrice": 349,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, universal fit",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/823adcbc8c5c48b8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001927-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001927-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001920-01",
    "sku": "SK-1001920-01",
    "manufacturerSku": "SK-1001920-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Matte Black on Warm Silver Clear Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 379,
    "sourcePrice": 349,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-clear/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Clear",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/a3e706cc466510a8.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001920-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001920-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001915-01",
    "sku": "SK-1001915-01",
    "manufacturerSku": "SK-1001915-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Large Matte Black on Warm Silver Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, universal fit",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/11cd097c933c99e7.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001915-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001915-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001910-01",
    "sku": "SK-1001910-01",
    "manufacturerSku": "SK-1001910-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Matte Black on Warm Silver Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/5c692b59699a9577.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001910-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001910-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002202-01",
    "sku": "SK-1002202-01",
    "manufacturerSku": "SK-1002202-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Matte Black Polarized Grey Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-grey-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Grey",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/0074eb9e4bdb4002.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1002202-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1002202-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1002203-01",
    "sku": "SK-1002203-01",
    "manufacturerSku": "SK-1002203-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Large Matte Black Polarized Grey Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-matte-black-grey-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, universal fit",
    "color": [
      "Lens color:Grey",
      "Frame color:Matte Black"
    ],
    "image": "/images/catalog/3e0044f3781164ea.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1002203-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1002203-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001914-01",
    "sku": "SK-1001914-01",
    "manufacturerSku": "SK-1001914-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Large Shiny Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-shiny-black-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Large frame, universal fit",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/65432d17b955446c.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001914-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001914-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001908-01",
    "sku": "SK-1001908-01",
    "manufacturerSku": "SK-1001908-01",
    "name": "Ray-Ban Meta Audio Burbank",
    "variant": "Shiny Black Transitions® Grey Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-burbank",
    "model": "Burbank",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-burbank-shiny-black-grey-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Grey",
      "Frame color:Shiny Black"
    ],
    "image": "/images/catalog/f41b462988e8b69a.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-burbank/?variant=sk-1001908-01",
      "uz": "/uz/smart-glasses/audio-burbank/?variant=sk-1001908-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001921-01",
    "sku": "SK-1001921-01",
    "manufacturerSku": "SK-1001921-01",
    "name": "Ray-Ban Meta Audio Clubmaster",
    "variant": "Transparent Sky Blue Transitions® Sapphire Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-clubmaster",
    "model": "Clubmaster",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-clubmaster-blue-sapphire-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Sapphire",
      "Frame color:Transparent Sky Blue"
    ],
    "image": "/images/catalog/61882ad132756429.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-clubmaster/?variant=sk-1001921-01",
      "uz": "/uz/smart-glasses/audio-clubmaster/?variant=sk-1001921-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001917-01",
    "sku": "SK-1001917-01",
    "manufacturerSku": "SK-1001917-01",
    "name": "Ray-Ban Meta Audio Clubmaster",
    "variant": "Transparent Iron Grey Polarized Grey Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-clubmaster",
    "model": "Clubmaster",
    "generation": 0,
    "price": 409,
    "sourcePrice": 379,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-clubmaster-iron-grey-polarized/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Grey",
      "Frame color:Transparent Iron Grey"
    ],
    "image": "/images/catalog/6c03061f38a710eb.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-clubmaster/?variant=sk-1001917-01",
      "uz": "/uz/smart-glasses/audio-clubmaster/?variant=sk-1001917-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001923-01",
    "sku": "SK-1001923-01",
    "manufacturerSku": "SK-1001923-01",
    "name": "Ray-Ban Meta Audio Clubmaster",
    "variant": "Transparent Orchid Transitions® Ruby Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-clubmaster",
    "model": "Clubmaster",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-clubmaster-orchid-ruby-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Ruby",
      "Frame color:Transparent Orchid"
    ],
    "image": "/images/catalog/059835625de3426d.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-clubmaster/?variant=sk-1001923-01",
      "uz": "/uz/smart-glasses/audio-clubmaster/?variant=sk-1001923-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001911-01",
    "sku": "SK-1001911-01",
    "manufacturerSku": "SK-1001911-01",
    "name": "Ray-Ban Meta Audio Clubmaster",
    "variant": "Shiny Black on Gold Transitions® Graphite Green Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-clubmaster",
    "model": "Clubmaster",
    "generation": 0,
    "price": 459,
    "sourcePrice": 429,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-clubmaster-shiny-black-graphite-green-transitions/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Transitions® Graphite Green",
      "Frame color:Shiny Black on Gold"
    ],
    "image": "/images/catalog/33d5dc09b3cefe16.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-clubmaster/?variant=sk-1001911-01",
      "uz": "/uz/smart-glasses/audio-clubmaster/?variant=sk-1001911-01"
    },
    "legacyIds": [],
    "aliases": []
  },
  {
    "id": "sk-1001913-01",
    "sku": "SK-1001913-01",
    "manufacturerSku": "SK-1001913-01",
    "name": "Ray-Ban Meta Audio Clubmaster",
    "variant": "Shiny Black on Gold Green Lenses",
    "category": "glasses",
    "brand": "audio",
    "family": "audio-clubmaster",
    "model": "Clubmaster",
    "generation": 0,
    "price": 379,
    "sourcePrice": 349,
    "source": "https://www.meta.com/ai-glasses/ray-ban-meta-audio-clubmaster-shiny-black-green/",
    "sourceCheckedAt": "2026-10-29T23:11:52.767Z",
    "sourceAvailability": "InStock",
    "size": "Standard frame, universal fit",
    "color": [
      "Lens color:Green",
      "Frame color:Shiny Black on Gold"
    ],
    "image": "/images/catalog/872b119b0df2a318.webp",
    "availability": "on_request",
    "url": {
      "ru": "/smart-glasses/audio-clubmaster/?variant=sk-1001913-01",
      "uz": "/uz/smart-glasses/audio-clubmaster/?variant=sk-1001913-01"
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
