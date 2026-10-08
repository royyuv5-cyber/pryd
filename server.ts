import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { db } from './server/db.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // 301 / 302 Redirect Check for SEO integrity
  app.use((req, res, next) => {
    if (req.path.startsWith('/api/')) return next();
    const redirect = db.checkRedirect(req.path);
    if (redirect) {
      return res.redirect(redirect.status_code, redirect.to_path);
    }
    next();
  });

  // Search Engine Sitemap.xml
  app.get('/sitemap.xml', (req, res) => {
    const settings = db.getSettings();
    const xml = db.generateSitemapXml(settings.site_url || 'https://www.primusenterprises.in.net');
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });

  // Robots.txt
  app.get('/robots.txt', (req, res) => {
    const settings = db.getSettings();
    const siteUrl = settings.site_url || 'https://www.primusenterprises.in.net';
    res.type('text/plain').send(`User-agent: *\r\nAllow: /\r\nDisallow: /admin\r\nDisallow: /api/\r\n\r\nSitemap: ${siteUrl}/sitemap.xml\r\n`);
  });

  // API HEALTH
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'PRIMUS ENTERPRISES B2B API',
      timestamp: new Date().toISOString()
    });
  });

  // SETTINGS
  app.get('/api/settings', (req, res) => {
    res.json(db.getSettings());
  });

  app.put('/api/settings', (req, res) => {
    const updated = db.updateSettings(req.body);
    res.json(updated);
  });

  // CATEGORIES
  app.get('/api/categories', (req, res) => {
    res.json(db.getCategories());
  });

  app.get('/api/categories/:idOrSlug', (req, res) => {
    const cat = db.getCategoryByIdOrSlug(req.params.idOrSlug);
    if (!cat) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(cat);
  });

  app.post('/api/categories', (req, res) => {
    const saved = db.saveCategory(req.body);
    res.status(201).json(saved);
  });

  app.put('/api/categories/:id', (req, res) => {
    const saved = db.saveCategory({ ...req.body, id: req.params.id });
    res.json(saved);
  });

  app.delete('/api/categories/:id', (req, res) => {
    const success = db.deleteCategory(req.params.id);
    res.json({ success });
  });

  // PRODUCTS
  app.get('/api/products', (req, res) => {
    const { q, category, voltage, lighting_type, featured, status } = req.query;
    const products = db.getProducts({
      q: typeof q === 'string' ? q : undefined,
      category: typeof category === 'string' ? category : undefined,
      voltage: typeof voltage === 'string' ? voltage : undefined,
      lighting_type: typeof lighting_type === 'string' ? lighting_type : undefined,
      featured: featured === 'true' ? true : featured === 'false' ? false : undefined,
      status: typeof status === 'string' ? status : undefined
    });
    res.json(products);
  });

  app.get('/api/products/:idOrSlug', (req, res) => {
    const product = db.getProductByIdOrSlug(req.params.idOrSlug);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  });

  app.post('/api/products', (req, res) => {
    const saved = db.saveProduct(req.body);
    res.status(201).json(saved);
  });

  app.put('/api/products/:id', (req, res) => {
    const saved = db.saveProduct({ ...req.body, id: req.params.id });
    res.json(saved);
  });

  app.post('/api/products/:id/duplicate', (req, res) => {
    const copy = db.duplicateProduct(req.params.id);
    if (!copy) {
      return res.status(404).json({ error: 'Product to duplicate not found' });
    }
    res.status(201).json(copy);
  });

  app.delete('/api/products/:id', (req, res) => {
    const success = db.deleteProduct(req.params.id);
    res.json({ success });
  });

  // ENQUIRIES
  app.get('/api/enquiries', (req, res) => {
    res.json(db.getEnquiries());
  });

  app.post('/api/enquiries', (req, res) => {
    const created = db.addEnquiry(req.body);
    res.status(201).json(created);
  });

  app.patch('/api/enquiries/:id/status', (req, res) => {
    const updated = db.updateEnquiryStatus(req.params.id, req.body.status);
    if (!updated) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json(updated);
  });

  app.delete('/api/enquiries/:id', (req, res) => {
    const success = db.deleteEnquiry(req.params.id);
    res.json({ success });
  });

  // MEDIA LIBRARY
  app.get('/api/media', (req, res) => {
    res.json(db.getMedia());
  });

  app.post('/api/media', (req, res) => {
    const created = db.addMedia(req.body);
    res.status(201).json(created);
  });

  app.put('/api/media/:id', (req, res) => {
    const updated = db.updateMedia(req.params.id, req.body);
    if (!updated) {
      return res.status(404).json({ error: 'Media not found' });
    }
    res.json(updated);
  });

  app.delete('/api/media/:id', (req, res) => {
    const success = db.deleteMedia(req.params.id);
    res.json({ success });
  });

  // REDIRECTS
  app.get('/api/redirects', (req, res) => {
    res.json(db.getRedirects());
  });

  app.post('/api/redirects', (req, res) => {
    const created = db.addRedirect(req.body);
    res.status(201).json(created);
  });

  app.delete('/api/redirects/:id', (req, res) => {
    const success = db.deleteRedirect(req.params.id);
    res.json({ success });
  });

  // Mount Vite or Static Frontend
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`PRIMUS ENTERPRISES Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
