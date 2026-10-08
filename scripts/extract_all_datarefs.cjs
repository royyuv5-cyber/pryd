const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.startsWith('cat_') && f.endsWith('.html'));

console.log(`Found ${files.length} category files to parse.`);

const allProducts = [];
const seenProductIds = new Set();
const seenProductNames = new Set();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf-8');
  
  // Extract category title and slug
  const titleMatch = html.match(/<title>(.*?)(?:Trader|Wholesaler|Manufacturer|from New Delhi|-)/i);
  const catTitle = titleMatch ? titleMatch[1].trim() : file.replace('cat_', '').replace('.html', '');
  const catSlug = file.replace('cat_', '').replace('.html', '');

  // Extract all dataref arrays: dataref\d+\s*=\s*(?:eval\()?(\[\{[\s\S]*?\}\])
  // Or match directly all objects with "prd_name"
  const regex = /\{"img_id":[\s\S]*?"prd_name":"([\s\S]*?)"[\s\S]*?"isq_det_form":(\[[\s\S]*?\])\}/g;
  
  let match;
  let countInFile = 0;
  
  // Also search for JSON blocks
  // Find all dataref = eval([ ... ])
  const datarefRegex = /dataref\d*\s*=\s*(?:new Object\(\);\s*dataref\d*\s*=\s*)?(?:eval\()?(\[\{[\s\S]*?\}\]\)?);/g;
  let drMatch;
  while ((drMatch = datarefRegex.exec(html)) !== null) {
    try {
      let rawJson = drMatch[1];
      if (rawJson.endsWith(')')) rawJson = rawJson.slice(0, -1);
      // Clean up rawJson
      const parsedArr = eval(rawJson);
      if (Array.isArray(parsedArr)) {
        for (const item of parsedArr) {
          if (item.prd_name && !seenProductNames.has(item.prd_name.toLowerCase())) {
            seenProductNames.add(item.prd_name.toLowerCase());
            item._categoryTitle = catTitle;
            item._categorySlug = catSlug;
            item._sourceFile = file;
            allProducts.push(item);
            countInFile++;
          }
        }
      }
    } catch(err) {
      // ignore eval error
    }
  }

  // Also check if there are description paragraphs or multiimg in the HTML for these products
  console.log(`File: ${file} -> Category: ${catTitle} -> Extracted: ${countInFile} products`);
}

console.log(`\n========================================`);
console.log(`TOTAL UNIQUE FACTUAL PRODUCTS EXTRACTED: ${allProducts.length}`);
console.log(`========================================\n`);

fs.writeFileSync('all_primus_products.json', JSON.stringify(allProducts, null, 2));

// Print summary of products
console.log('Sample extracted products:');
allProducts.slice(0, 10).forEach((p, idx) => {
  console.log(`${idx + 1}. [${p._categoryTitle}] ${p.prd_name} | Price: ${p.prd_price || 'N/A'} | Image: ${p.img_path}`);
});
