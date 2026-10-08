const fs = require('fs');

const rawProducts = JSON.parse(fs.readFileSync('all_primus_products.json', 'utf-8'));

// Helper to sanitize strings
function cleanText(str) {
  if (!str) return '';
  return str.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

// Generate clean URL slug
function createSlug(name) {
  return cleanText(name)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Category mapping
const categoryMap = {
  'motorcycle-indicator': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'bike-indicator': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'led-indicators': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'fog-lamp': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'fog-light': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'led-fog-light': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'auto-fog-led-lights': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'fog-lamp-assemblies': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'roof-light': { id: 'cat-roof-lights', name: 'Roof Light & Cabin Lighting' },
  'roof-lights': { id: 'cat-roof-lights', name: 'Roof Light & Cabin Lighting' },
  'horn-tuner': { id: 'cat-flashers-relays', name: 'Flashers & Horn Relays' },
  'horn-relay': { id: 'cat-flashers-relays', name: 'Flashers & Horn Relays' },
  'bike-flasher': { id: 'cat-flashers-relays', name: 'Flashers & Horn Relays' },
  'electronic-flasher': { id: 'cat-flashers-relays', name: 'Flashers & Horn Relays' },
  'bike-huzzard-flasher': { id: 'cat-flashers-relays', name: 'Flashers & Horn Relays' },
  'dc-converters': { id: 'cat-dc-converters', name: 'DC Converters & Mobile Chargers' },
  'mobile-charger': { id: 'cat-dc-converters', name: 'DC Converters & Mobile Chargers' },
  'strobe-light': { id: 'cat-strobe-warning', name: 'Strobe & Police Emergency Lights' },
  'police-light': { id: 'cat-strobe-warning', name: 'Strobe & Police Emergency Lights' },
  'flashing-light': { id: 'cat-strobe-warning', name: 'Strobe & Police Emergency Lights' },
  'automotive-bulbs': { id: 'cat-automotive-bulbs', name: 'Automotive Bulbs & LED Tubes' },
  'led-tube-light': { id: 'cat-automotive-bulbs', name: 'Automotive Bulbs & LED Tubes' },
  'led-lights': { id: 'cat-led-lights', name: 'LED Lights & Retrofits' },
  'led-light': { id: 'cat-led-lights', name: 'LED Lights & Retrofits' },
  'bike-light': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'handle-light': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'bike-handal-bar-lights': { id: 'cat-motorcycle-indicators', name: 'Motorcycle Indicators & Lights' },
  'led-flashlights': { id: 'cat-fog-lamps', name: 'Fog Lamp & LED Lights' },
  'led-sign-board': { id: 'cat-led-lights', name: 'LED Lights & Retrofits' },
  'e-rickshaw-handlebar-switch': { id: 'cat-dc-converters', name: 'DC Converters & Mobile Chargers' },
  'new-items': { id: 'cat-led-lights', name: 'LED Lights & Retrofits' }
};

// Map each file to its HTML content in cache for multi-image lookup
const htmlCache = {};
function getHtml(file) {
  if (!htmlCache[file] && fs.existsSync(file)) {
    htmlCache[file] = fs.readFileSync(file, 'utf-8');
  }
  return htmlCache[file] || '';
}

const formattedProducts = [];

for (const raw of rawProducts) {
  const name = cleanText(raw.prd_name);
  const slug = createSlug(name);
  const catInfo = categoryMap[raw._categorySlug] || {
    id: `cat-${raw._categorySlug}`,
    name: cleanText(raw._categoryTitle)
  };

  // Parse price
  let numericPrice = 0;
  let priceUnit = 'Piece';
  if (raw.prd_price) {
    const cleanPriceStr = cleanText(raw.prd_price);
    const priceMatch = cleanPriceStr.match(/([0-9,]+)/);
    if (priceMatch) {
      numericPrice = parseInt(priceMatch[1].replace(/,/g, ''), 10);
    }
    const unitMatch = cleanPriceStr.match(/\/\s*([A-Za-z]+)/);
    if (unitMatch) {
      priceUnit = unitMatch[1];
    }
  }

  // Parse specifications from isq_det_form
  const specs = {};
  if (Array.isArray(raw.isq_det_form)) {
    for (const s of raw.isq_det_form) {
      if (s.FK_IM_SPEC_MASTER_DESC && s.SUPPLIER_RESPONSE_DETAIL) {
        specs[s.FK_IM_SPEC_MASTER_DESC.trim()] = s.SUPPLIER_RESPONSE_DETAIL.trim();
      }
    }
  }

  // Find multi-images in the source HTML
  const html = getHtml(raw._sourceFile);
  const galleryImages = [];
  
  // High-res primary
  let primaryImage = raw.img_path || raw.img_path1;
  if (primaryImage) {
    primaryImage = primaryImage.replace('125x125', '500x500').replace('250x250', '500x500');
  }

  // Check multi-image regex around this product in HTML
  const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const prodSnippetIdx = html.indexOf(name);
  if (prodSnippetIdx > -1) {
    const snippet = html.slice(prodSnippetIdx, prodSnippetIdx + 3000);
    const multiImgMatch = snippet.match(/data-multiimg=["']([^"']+)["']/i);
    if (multiImgMatch) {
      const urls = multiImgMatch[1].split(',');
      for (const u of urls) {
        const cleanU = u.trim();
        if (cleanU && !galleryImages.some(g => g.url === cleanU)) {
          galleryImages.push({
            url: cleanU.replace('125x125', '500x500').replace('250x250', '500x500'),
            alt: `${name} View - Primus Enterprises`,
            caption: 'Studio specification view'
          });
        }
      }
    }
  }

  if (galleryImages.length === 0 && primaryImage) {
    galleryImages.push({
      url: primaryImage,
      alt: `${name} - Primus Enterprises`,
      caption: 'Main product view',
      is_primary: true
    });
  }

  const voltage = specs['Voltage'] || specs['Operating Voltage'] || '12V DC';
  const bodyMaterial = specs['Body Material'] || specs['Material'] || 'ABS / Die-Cast Alloy';
  const lightingType = specs['Light Type'] || specs['Lighting Type'] || 'Automotive LED';
  const lensType = specs['Lens Color'] ? `${specs['Lens Color']} Optical Lens` : 'Polycarbonate Optical Lens';
  const colour = specs['Lighting Color'] || specs['Color'] || 'Amber / White';
  const brand = specs['Brand'] || 'PRIMUS ENTERPRISES';
  const partNumber = specs['Part Number'] || specs['Model Number'] || raw.prd_code || `PE-${raw.prd_id || Math.floor(Math.random()*10000)}`;

  // Features
  const features = [];
  if (specs['Fitting Place']) features.push(`Fitting Placement: ${specs['Fitting Place']}`);
  if (specs['Light Type']) features.push(`Light Source Type: ${specs['Light Type']}`);
  if (specs['Lighting Color']) features.push(`Illumination Color: ${specs['Lighting Color']}`);
  if (specs['Body Material']) features.push(`Housing Material: ${specs['Body Material']} for durability`);
  if (specs['Fitment Type']) features.push(`Fitment Standard: ${specs['Fitment Type']}`);
  if (specs['Voltage']) features.push(`Electrical Input: ${specs['Voltage']}`);
  features.push('Engineered for high vibration tolerance on Indian highways');
  features.push('Tested for weather resistance and thermal dissipation');

  // Short description
  const shortDescription = `${name} manufactured by Primus Enterprises. High-durability automotive component with ${voltage} input and ${bodyMaterial} construction.`;

  // Long description
  const longDescription = `The ${name} (Part Number: ${partNumber}) is an authentic automotive component manufactured by Primus Enterprises in New Delhi. Engineered specifically for two-wheelers, four-wheelers, and commercial automotive applications, it features robust ${bodyMaterial} construction, ${voltage} electrical compatibility, and high luminous efficiency designed to withstand severe Indian road conditions. Direct factory wholesale supply available for distributors, fleet operators, and retailers.`;

  const moq = specs['Packaging Type'] ? `50 ${specs['Packaging Type']}` : `50 ${priceUnit}s`;

  formattedProducts.push({
    id: `prod-${raw.prd_id || slug}`,
    product_name: name,
    slug: slug,
    sku: `PE-${partNumber.replace(/[^A-Za-z0-9]/g, '').toUpperCase() || 'AUTO'}`,
    product_code: partNumber,
    category_id: catInfo.id,
    category_name: catInfo.name,
    short_description: shortDescription,
    long_description: longDescription,
    features: features,
    applications: [
      'Motorcycle & Scooter aftermarket fitment',
      'Passenger vehicle and commercial cabin upgrade',
      'Universal automotive electrical integration'
    ],
    compatibility: [
      'Universal 12V / 24V chassis',
      'Hero, Bajaj, TVS, Honda, Royal Enfield, Yamaha',
      'Tata, Mahindra, Ashok Leyland commercial vehicles'
    ],
    brand: 'PRIMUS ENTERPRISES',
    material: bodyMaterial,
    colour: colour,
    voltage: voltage,
    wattage: specs['Power'] || specs['Wattage'] || 'Standard Automotive Rating',
    light_source: lightingType,
    lighting_type: lightingType,
    lens_type: lensType,
    body_material: bodyMaterial,
    ip_rating: specs['Waterproof'] || 'IP67 Weatherproof',
    pack_size: specs['Packaging Type'] ? `Standard ${specs['Packaging Type']}` : 'Master Packaging',
    minimum_order_quantity: moq,
    country_of_origin: 'India',
    warranty: specs['Warranty'] || '6 Months Manufacturer Guarantee',
    status: 'published',
    featured: [
      'D-78 bike Indicator Light',
      'G-15 Metal Fog Lamp',
      'STROBE LAMP FOG',
      'Primus Led Roof Light FAN TYPE',
      'DC To AC Converters',
      'D 74 Black Jali Indicator Light',
      'double usb charger primus original',
      'Star Led Fog light mini'
    ].some(k => name.toLowerCase().includes(k.toLowerCase())),
    show_price: false,
    price: numericPrice || undefined,
    price_unit: priceUnit,
    brochure_available: true,
    primary_image: primaryImage,
    primary_image_alt: `${name} - Primus Enterprises`,
    gallery_images: galleryImages,
    technical_images: galleryImages.slice(1).map(g => g.url),
    seo_title: `${name} | Primus Enterprises`,
    seo_description: `${name} wholesale supply by Primus Enterprises, New Delhi. Direct manufacturer rates, genuine specifications, and Pan-India dispatch.`,
    seo_keywords: `${name}, Primus Enterprises, automotive lighting Delhi, wholesale bike indicator, fog light manufacturer`,
    canonical_url: `https://www.primusenterprises.in.net/products/${slug}`,
    og_title: `${name} | Primus Enterprises`,
    og_description: shortDescription,
    og_image: primaryImage,
    robots_index: true,
    robots_follow: true,
    a_plus_enabled: true,
    a_plus_blocks: [
      {
        id: `ap-${slug}-hero`,
        type: 'hero',
        title: `${name.toUpperCase()}`,
        subtitle: 'PRECISION AUTOMOTIVE MANUFACTURING • NEW DELHI',
        content: longDescription,
        image: primaryImage,
        image_alt: `${name} Technical Profile`
      },
      {
        id: `ap-${slug}-matrix`,
        type: 'tech_matrix',
        title: 'TECHNICAL SPECIFICATIONS',
        specs: Object.entries(specs).map(([k, v]) => ({ label: k, value: String(v) }))
      }
    ],
    created_at: '2026-01-15T08:00:00.000Z',
    updated_at: '2026-03-01T10:00:00.000Z'
  });
}

console.log(`Generated ${formattedProducts.length} structured Primus products!`);
fs.writeFileSync('catalogue_seed.json', JSON.stringify(formattedProducts, null, 2));

// Summary of categories with count
const counts = {};
formattedProducts.forEach(p => {
  counts[p.category_name] = (counts[p.category_name] || 0) + 1;
});
console.log('Category breakdown:');
console.table(counts);
