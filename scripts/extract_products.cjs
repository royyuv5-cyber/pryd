const fs = require('fs');

const html = fs.readFileSync('temp_source.html', 'utf-8');

// Regex for products and categories
// In IndiaMART / in.net templates, products are often in blocks with title, image, price, specs
const items = [];

// Match all img tags with alt, src, data-original
const imgRegex = /<img[^>]+(?:src|data-original)=["']([^"']+)["'][^>]*>/gi;
const allImgs = [];
let m;
while ((m = imgRegex.exec(html)) !== null) {
  const fullTag = m[0];
  const src = m[1];
  const altMatch = fullTag.match(/alt=["']([^"']*)["']/i);
  const alt = altMatch ? altMatch[1] : '';
  if (src && !src.includes('Logo') && !src.includes('icon') && !src.includes('arrow') && (src.includes('imimg.com') || src.includes('.jpg') || src.includes('.png'))) {
    allImgs.push({ src, alt, fullTag });
  }
}

console.log('Valid product images extracted:', allImgs.length);
console.log('Sample images:', JSON.stringify(allImgs.slice(0, 8), null, 2));

// Look for product containers or titles
const titleRegex = /<h[234][^>]*>(.*?)<\/h[234]>/gi;
const titles = [];
while ((m = titleRegex.exec(html)) !== null) {
  const text = m[1].replace(/<[^>]+>/g, '').trim();
  if (text.length > 3) titles.push(text);
}
console.log('Headings found:', titles.length, titles.slice(0, 20));

// Find products from window.ss
const ssMatch = html.match(/window\.ss\s*=\s*(\[[^\]]+\]);/);
if (ssMatch) {
  const ssArr = eval(ssMatch[1]);
  console.log('window.ss items count:', ssArr.length);
  fs.writeFileSync('extracted_ss.json', JSON.stringify(ssArr, null, 2));
}

// Find all HTML link anchors and their nearby text/images
const anchorRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
const links = [];
while ((m = anchorRegex.exec(html)) !== null) {
  const href = m[1];
  const inner = m[2];
  if (href.endsWith('.html') && !href.includes('about') && !href.includes('contact')) {
    // Check if inner has text or img
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const imgM = inner.match(/(?:src|data-original)=["']([^"']+)["']/i);
    links.push({ href, text, img: imgM ? imgM[1] : null });
  }
}

console.log('Product/Category links found:', links.length);
fs.writeFileSync('extracted_links.json', JSON.stringify(links, null, 2));
