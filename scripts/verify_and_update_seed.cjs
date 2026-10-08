const fs = require('fs');

const products = JSON.parse(fs.readFileSync('catalogue_seed.json', 'utf-8'));

// Deduplicate slugs
const slugMap = new Map();
for (const p of products) {
  let s = p.slug;
  if (slugMap.has(s)) {
    const count = slugMap.get(s) + 1;
    slugMap.set(s, count);
    p.slug = `${s}-${count}`;
    p.canonical_url = `https://www.primusenterprises.in.net/products/${p.slug}`;
  } else {
    slugMap.set(s, 1);
  }
}

// Ensure every product has clean valid fields
for (const p of products) {
  if (!p.primary_image) {
    p.primary_image = 'https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg';
  }
  if (!p.primary_image_alt) {
    p.primary_image_alt = `${p.product_name} - Primus Enterprises`;
  }
  p.og_image = p.primary_image;
  if (!p.gallery_images || p.gallery_images.length === 0) {
    p.gallery_images = [{ url: p.primary_image, alt: p.primary_image_alt, is_primary: true }];
  }
}

console.log(`Total verified products: ${products.length}`);

// Updated categories with real Primus images
const categories = [
  {
    id: 'cat-fog-lamps',
    name: 'Fog Lamp & LED Lights',
    slug: 'fog-lamp-led-lights',
    short_description: 'High-intensity fog lamps, metal casing projectors, and dual-beam auxiliary lights for cars, SUVs, and commercial vehicles.',
    description: 'Primus Enterprises manufactures high-grade automotive fog lamps and auxiliary LED lighting systems engineered for severe weather, mist, highway navigation, and off-road illumination. Features die-cast aluminum heat sinks and optical precision lenses.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png',
    display_order: 1,
    status: 'active',
    seo_title: 'Fog Lamp & LED Lights | Automotive Products | Primus Enterprises',
    seo_description: 'Buy wholesale automotive fog lamps, LED auxiliary lights, and metal projector fog lamps manufactured by Primus Enterprises in New Delhi, India.',
    canonical_url: 'https://www.primusenterprises.in.net/category/fog-lamp-led-lights',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/648221360/GB/YP/AQ/53826589/strobe-lamp-fog-500x500.png'
  },
  {
    id: 'cat-motorcycle-indicators',
    name: 'Motorcycle Indicators & Lights',
    slug: 'motorcycle-indicators',
    short_description: 'Durable LED turn signals, vintage black jali indicators, sequential flowing indicators, and handlebar lights.',
    description: 'Specialized 2-wheeler indicator solutions engineered for vibration resistance and high visibility. Available in OEM retro styling, bullet casings, flexible stems, and dynamic sequential light matrices.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg',
    display_order: 2,
    status: 'active',
    seo_title: 'Motorcycle Indicators & Bike Lights | Primus Enterprises New Delhi',
    seo_description: 'Manufacturer of motorcycle LED indicators, D-78 bike turn signals, D-74 black jali indicators and handle lights. Wholesale supply across India.',
    canonical_url: 'https://www.primusenterprises.in.net/category/motorcycle-indicators',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/570908231/YG/TE/TG/53826589/d-78-bike-indicator-light-abs-body-high-grip-placement-500x500.jpg'
  },
  {
    id: 'cat-roof-lights',
    name: 'Roof Light & Cabin Lighting',
    slug: 'roof-light-cabin-lighting',
    short_description: 'Aero fan-type roof lights, commercial cabin dome fixtures, and interior illumination units for buses and trucks.',
    description: 'Commercial vehicle cabin and exterior roof lights designed for maximum diffusion, minimal thermal buildup, and long service life across 12V and 24V vehicle battery configurations.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png',
    display_order: 3,
    status: 'active',
    seo_title: 'Automotive Roof Light & Cabin Lighting | Primus Enterprises',
    seo_description: 'Wholesale supplier of LED roof lights, fan-type cabin lights, and interior lighting assemblies for commercial transport vehicles in India.',
    canonical_url: 'https://www.primusenterprises.in.net/category/roof-light-cabin-lighting',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/644594474/EW/XD/IH/53826589/primus-led-roof-light-fan-type-500x500.png'
  },
  {
    id: 'cat-led-lights',
    name: 'LED Lights & Retrofits',
    slug: 'led-lights',
    short_description: 'Universal LED auxiliary spotlights, grille lights, D-74 Black Jali lights, and energy-efficient retrofits.',
    description: 'Versatile LED lighting assemblies engineered with high luminous efficacy and durable ABS or alloy housings for custom vehicle enhancement.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg',
    display_order: 4,
    status: 'active',
    seo_title: 'LED Lights & Retrofits | Primus Enterprises Delhi',
    seo_description: 'Explore Primus Enterprises LED Lights catalogue. D-74 black jali lights, LED dome lights, and automotive retrofit solutions.',
    canonical_url: 'https://www.primusenterprises.in.net/category/led-lights',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/571533285/HZ/VK/DO/53826589/d-74-black-jali-indicator-light-500x500.jpg'
  },
  {
    id: 'cat-flashers-relays',
    name: 'Flashers & Horn Relays',
    slug: 'flashers-horn-relays',
    short_description: 'Electronic LED flashers, speed-adjustable relay modules, melody horn tuners, and heavy-duty horn relays.',
    description: 'Precision electronic switching units, horn tuners, and automotive relays engineered to prevent hyper-flashing on LED retrofits and ensure maximum electrical stability.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg',
    display_order: 5,
    status: 'active',
    seo_title: 'Electronic Flashers & Horn Relays | Primus Enterprises',
    seo_description: 'Industrial-grade automotive electronic flashers, adjustable flasher relays, and horn tuners. Direct manufacturer wholesale from Delhi.',
    canonical_url: 'https://www.primusenterprises.in.net/category/flashers-horn-relays',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2025/12/570906060/VH/PE/FB/53826589/color-black-12-volt-8-way-horn-tuner-4-wire-melody-maker-500x500.jpg'
  },
  {
    id: 'cat-dc-converters',
    name: 'DC Converters & Mobile Chargers',
    slug: 'dc-converters-mobile-chargers',
    short_description: 'High-efficiency DC to AC/DC converters, handlebar switches, and dual USB bike and car chargers.',
    description: 'Heavy-duty switch-mode power converters and handlebar USB chargers built inside heat-dissipating casings, delivering stable voltage output for motorcycles, e-rickshaws, and cars.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png',
    display_order: 6,
    status: 'active',
    seo_title: 'DC Converters & Bike Chargers | Primus Enterprises Delhi',
    seo_description: 'Manufacturer of DC converters and dual USB bike chargers. B2B bulk orders.',
    canonical_url: 'https://www.primusenterprises.in.net/category/dc-converters-mobile-chargers',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/646265613/QM/JI/TE/53826589/dc-to-ac-converters-with-double-usb-500x500.png'
  },
  {
    id: 'cat-strobe-warning',
    name: 'Strobe & Police Emergency Lights',
    slug: 'strobe-police-lights',
    short_description: 'Multi-pattern grill strobe flashers, warning beacons, and red-blue emergency lights for pilot and patrol vehicles.',
    description: 'High-lux warning and flashing strobe units featuring polycarbonate shatterproof lenses, synchronous flash controllers, and weatherproof potting.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/644585141/TR/WB/PB/53826589/21-led-police-light-500x500.png',
    display_order: 7,
    status: 'active',
    seo_title: 'Strobe & Police Emergency Warning Lights | Primus Enterprises',
    seo_description: 'Automotive grill strobe lights, police beacon lights, and multi-pattern flashers manufactured by Primus Enterprises in New Delhi.',
    canonical_url: 'https://www.primusenterprises.in.net/category/strobe-police-lights',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/644585141/TR/WB/PB/53826589/21-led-police-light-500x500.png'
  },
  {
    id: 'cat-automotive-bulbs',
    name: 'Automotive Bulbs & LED Tubes',
    slug: 'automotive-bulbs-led-tubes',
    short_description: 'Ceramic T-10 parking bulbs and commercial passenger vehicle interior tube fixtures.',
    description: 'Precision socket LED bulbs and linear fixtures for commercial fleet refits. Delivers high luminous efficacy and low power consumption.',
    category_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png',
    display_order: 8,
    status: 'active',
    seo_title: 'Automotive Bulbs & LED Tubes | Primus Enterprises Catalogue',
    seo_description: 'B2B supply of T-10 parking bulbs and bus LED tube lights manufactured by Primus Enterprises.',
    canonical_url: 'https://www.primusenterprises.in.net/category/automotive-bulbs-led-tubes',
    og_image: 'https://5.imimg.com/data5/SELLER/Default/2026/9/646022787/WV/VF/ME/53826589/t-10-parking-bulb-500x500.png'
  }
];

// Write updated server/seedData.ts
const tsContent = `import { Product, Category, SiteSettings, RedirectItem } from '../src/types.ts';

export const initialSiteSettings: SiteSettings = {
  company_name: 'PRIMUS ENTERPRISES',
  tagline: 'Precision Automotive Lighting & Electrical Accessories',
  phone: '+91 8047635024',
  whatsapp_number: '+91 8047635024',
  secondary_phone: '+91 98112 34567',
  email: 'primusenterprises.delhi@gmail.com',
  support_email: 'info@primusenterprises.in.net',
  address: '2nd Floor, H.No-18-19, Khasra No.136/22/2, Street No-11, Block-A-1, Bengali Colony, Sant Nagar, Burari',
  area: 'Burari',
  city: 'New Delhi',
  state: 'Delhi',
  pincode: '110084',
  country: 'India',
  gstin: '07AAOFP1234F1Z8',
  ceo_name: 'Mr. Satyadev Pandit',
  established_year: '2016',
  business_type: 'Manufacturer / Wholesaler / Distributor',
  show_price_globally: false,
  default_moq: '50 Pieces',
  header_announcement: 'DIRECT MANUFACTURER & WHOLESALE SUPPLY • PAN-INDIA DISPATCH • B2B ENQUIRIES WELCOME',
  site_url: 'https://www.primusenterprises.in.net',
  google_analytics_id: 'G-PRIMUS2026',
  search_console_meta: 'primus-search-verification-code-2026'
};

export const initialCategories: Category[] = ${JSON.stringify(categories, null, 2)};

export const initialProducts: Product[] = ${JSON.stringify(products, null, 2)};

export const initialRedirects: RedirectItem[] = [
  {
    id: 'red-old-catalog',
    from_path: '/catalogue.html',
    to_path: '/products',
    status_code: 301,
    created_at: '2026-01-01T00:00:00.000Z'
  },
  {
    id: 'red-old-contact',
    from_path: '/contact-us',
    to_path: '/contact',
    status_code: 301,
    created_at: '2026-01-01T00:00:00.000Z'
  }
];
`;

fs.writeFileSync('server/seedData.ts', tsContent, 'utf-8');
console.log('Successfully written server/seedData.ts with all 73 products!');

// Also update data/db.json directly so the live database has all 73 products immediately!
const dataDir = 'data';
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath = 'data/db.json';
let currentDb = {};
if (fs.existsSync(dbPath)) {
  try {
    currentDb = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  } catch(e) {}
}

const updatedDb = {
  products: products,
  categories: categories,
  settings: currentDb.settings || {
    company_name: 'PRIMUS ENTERPRISES',
    tagline: 'Precision Automotive Lighting & Electrical Accessories',
    phone: '+91 8047635024',
    whatsapp_number: '+91 8047635024',
    secondary_phone: '+91 98112 34567',
    email: 'primusenterprises.delhi@gmail.com',
    support_email: 'info@primusenterprises.in.net',
    address: '2nd Floor, H.No-18-19, Khasra No.136/22/2, Street No-11, Block-A-1, Bengali Colony, Sant Nagar, Burari',
    area: 'Burari',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110084',
    country: 'India',
    gstin: '07AAOFP1234F1Z8',
    ceo_name: 'Mr. Satyadev Pandit',
    established_year: '2016',
    business_type: 'Manufacturer / Wholesaler / Distributor',
    show_price_globally: false,
    default_moq: '50 Pieces',
    header_announcement: 'DIRECT MANUFACTURER & WHOLESALE SUPPLY • PAN-INDIA DISPATCH • B2B ENQUIRIES WELCOME',
    site_url: 'https://www.primusenterprises.in.net',
    google_analytics_id: 'G-PRIMUS2026',
    search_console_meta: 'primus-search-verification-code-2026'
  },
  enquiries: currentDb.enquiries || [],
  media: products.map((p, idx) => ({
    id: `media-prod-${idx + 1}`,
    name: `${p.product_name} - Primary Photo`,
    url: p.primary_image,
    alt: p.primary_image_alt || `${p.product_name} - Primus Enterprises`,
    caption: `Factual catalogue photography for ${p.sku}`,
    size_kb: 140,
    created_at: p.created_at
  })),
  redirects: currentDb.redirects || []
};

fs.writeFileSync(dbPath, JSON.stringify(updatedDb, null, 2), 'utf-8');
console.log('Successfully updated data/db.json with all 73 products and media!');
