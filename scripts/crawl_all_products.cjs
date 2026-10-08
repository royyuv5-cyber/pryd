const https = require('https');
const fs = require('fs');

const categories = [
  'motorcycle-indicator.html',
  'fog-lamp.html',
  'led-lights.html',
  'led-fog-light.html',
  'roof-light.html',
  'auto-fog-led-lights.html',
  'horn-tuner.html',
  'bike-light.html',
  'strobe-light.html',
  'mobile-charger.html',
  'fog-lamp-assemblies.html',
  'fog-light.html',
  'led-indicators.html',
  'dc-converters.html',
  'handle-light.html',
  'bike-indicator.html',
  'led-flashlights.html',
  'bike-flasher.html',
  'electronic-flasher.html',
  'bike-handal-bar-lights.html',
  'led-light.html',
  'led-tube-light.html',
  'horn-relay.html',
  'police-light.html',
  'bike-huzzard-flasher.html',
  'flashing-light.html',
  'roof-lights.html',
  'automotive-bulbs.html',
  'led-sign-board.html',
  'e-rickshaw-handlebar-switch.html',
  'new-items.html'
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
};

function fetchPage(path) {
  return new Promise((resolve) => {
    const url = `https://www.primusenterprises.in.net/${path}`;
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ path, statusCode: res.statusCode, data });
      });
    }).on('error', err => {
      console.error(`Error fetching ${path}:`, err.message);
      resolve({ path, statusCode: 500, data: '' });
    });
  });
}

function parseProductsFromHtml(html, categoryPath) {
  const products = [];
  
  // In IndiaMART template d0073, product cards are often in classes like .p-card or .prd-card or .box-shadow
  // or sections with <h3 or <h4 or <a with title
  // Let's parse all product containers
  
  // Pattern 1: Find all images with dataimg and their corresponding product titles
  // Look for product blocks
  const blockRegex = /<div[^>]*class=["'][^"']*(?:prd-card|product_card|p-card|box_shadow|col-md-[0-9]|col-sm-[0-9])[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  
  // If blockRegex doesn't match easily, let's extract by looking for headings and nearby dataimg and specs
  // Let's find all occurrences of:
  // 1) dataimg="..."
  // 2) product title from alt or nearby <a> or <h4> or <h3>
  // 3) price from ₹ or Rs or class="prc"
  // 4) specs table / list
  
  // Let's inspect dataimg occurrences
  const imgMatches = [...html.matchAll(/<img[^>]+(?:dataimg|src)=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*>/gi)];
  
  return imgMatches;
}

async function run() {
  const allResults = [];
  console.log(`Starting crawl of ${categories.length} category pages...`);
  
  for (let i = 0; i < categories.length; i++) {
    const cat = categories[i];
    const { data, statusCode } = await fetchPage(cat);
    console.log(`[${i+1}/${categories.length}] ${cat} -> status: ${statusCode}, size: ${data.length}`);
    if (data) {
      fs.writeFileSync(`cat_${cat}`, data);
    }
    // slight delay to be polite
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('Finished downloading all category pages.');
}

run();
