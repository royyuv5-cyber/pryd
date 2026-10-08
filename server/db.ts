import fs from 'fs';
import path from 'path';
import { Product, Category, SiteSettings, Enquiry, MediaItem, RedirectItem } from '../src/types.ts';
import { initialProducts, initialCategories, initialSiteSettings, initialRedirects } from './seedData.ts';

interface DatabaseSchema {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  enquiries: Enquiry[];
  media: MediaItem[];
  redirects: RedirectItem[];
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const DB_FILE = path.resolve(DATA_DIR, 'db.json');

class DatabaseService {
  private data: DatabaseSchema;

  constructor() {
    this.ensureDirectory();
    this.data = this.loadDatabase();
  }

  private ensureDirectory() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  private loadDatabase(): DatabaseSchema {
    if (fs.existsSync(DB_FILE)) {
      try {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        if (parsed.products && parsed.categories && parsed.settings) {
          return parsed;
        }
      } catch (err) {
        console.error('Failed to parse db.json, recreating with initial seed data:', err);
      }
    }

    // Default initial seed
    const defaultData: DatabaseSchema = {
      products: initialProducts,
      categories: initialCategories,
      settings: initialSiteSettings,
      enquiries: [
        {
          id: 'enq-sample-1',
          type: 'wholesale_quote',
          name: 'Rajesh Sharma',
          company_name: 'Sharma Auto Spares (Wholesale Distributor)',
          email: 'rajesh.sharma@autospares.in',
          phone: '+91 98200 12345',
          city: 'Jaipur',
          state: 'Rajasthan',
          product_id: 'prod-g15-metal-fog-lamp',
          product_name: 'G-15 Metal Fog Lamp 12V-24V Dual Color',
          sku: 'PE-FL-G15',
          quantity: '80 Pairs (2 Master Cartons)',
          message: 'Please share dealer wholesale rate for Rajasthan state distribution, GST invoice terms and dispatch timeline.',
          status: 'new',
          created_at: new Date(Date.now() - 3600000 * 5).toISOString()
        }
      ],
      media: initialProducts.map((p, idx) => ({
        id: `media-init-${idx + 1}`,
        name: `${p.product_name} - Primary Photo`,
        url: p.primary_image,
        alt: p.primary_image_alt || `${p.product_name} - Primus Enterprises`,
        caption: `Standard studio catalogue shot for ${p.sku}`,
        size_kb: 142,
        created_at: p.created_at
      })),
      redirects: initialRedirects
    };

    this.saveToDisk(defaultData);
    return defaultData;
  }

  private saveToDisk(data: DatabaseSchema) {
    try {
      this.ensureDirectory();
      const tmpFile = `${DB_FILE}.tmp`;
      fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), 'utf-8');
      fs.renameSync(tmpFile, DB_FILE);
    } catch (err) {
      console.error('Error writing to db.json:', err);
    }
  }

  private persist() {
    this.saveToDisk(this.data);
  }

  // Settings
  getSettings(): SiteSettings {
    return this.data.settings;
  }

  updateSettings(updates: Partial<SiteSettings>): SiteSettings {
    this.data.settings = { ...this.data.settings, ...updates };
    this.persist();
    return this.data.settings;
  }

  // Categories
  getCategories(): Category[] {
    // Recalculate product counts dynamically
    return this.data.categories.map(cat => ({
      ...cat,
      product_count: this.data.products.filter(p => p.category_id === cat.id && p.status === 'published').length
    })).sort((a, b) => a.display_order - b.display_order);
  }

  getCategoryByIdOrSlug(idOrSlug: string): Category | undefined {
    return this.data.categories.find(c => c.id === idOrSlug || c.slug === idOrSlug);
  }

  saveCategory(category: Category): Category {
    const idx = this.data.categories.findIndex(c => c.id === category.id);
    if (idx >= 0) {
      this.data.categories[idx] = category;
    } else {
      this.data.categories.push(category);
    }
    this.persist();
    return category;
  }

  deleteCategory(id: string): boolean {
    const prevLen = this.data.categories.length;
    this.data.categories = this.data.categories.filter(c => c.id !== id);
    if (this.data.categories.length !== prevLen) {
      this.persist();
      return true;
    }
    return false;
  }

  // Products
  getProducts(query?: {
    q?: string;
    category?: string;
    voltage?: string;
    lighting_type?: string;
    featured?: boolean;
    status?: string;
  }): Product[] {
    let list = [...this.data.products];

    // Status filter
    if (query?.status) {
      list = list.filter(p => p.status === query.status);
    }

    // Featured filter
    if (query?.featured !== undefined) {
      list = list.filter(p => p.featured === query.featured);
    }

    // Category filter (by id or slug)
    if (query?.category) {
      const cat = this.getCategoryByIdOrSlug(query.category);
      if (cat) {
        list = list.filter(p => p.category_id === cat.id);
      }
    }

    // Voltage filter
    if (query?.voltage) {
      const v = query.voltage.toLowerCase();
      list = list.filter(p => p.voltage.toLowerCase().includes(v));
    }

    // Search query
    if (query?.q) {
      const q = query.q.toLowerCase().trim();
      list = list.filter(p => {
        return (
          p.product_name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.product_code.toLowerCase().includes(q) ||
          p.short_description.toLowerCase().includes(q) ||
          p.long_description.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.voltage.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.lighting_type.toLowerCase().includes(q) ||
          p.features.some(f => f.toLowerCase().includes(q)) ||
          p.applications.some(a => a.toLowerCase().includes(q)) ||
          p.compatibility.some(c => c.toLowerCase().includes(q)) ||
          (p.category_name && p.category_name.toLowerCase().includes(q))
        );
      });
    }

    // Attach latest category_name
    return list.map(p => {
      const cat = this.data.categories.find(c => c.id === p.category_id);
      return {
        ...p,
        category_name: cat ? cat.name : p.category_name
      };
    });
  }

  getProductByIdOrSlug(idOrSlug: string): Product | undefined {
    const p = this.data.products.find(item => item.id === idOrSlug || item.slug === idOrSlug);
    if (!p) return undefined;
    const cat = this.data.categories.find(c => c.id === p.category_id);
    return {
      ...p,
      category_name: cat ? cat.name : p.category_name
    };
  }

  saveProduct(product: Product): Product {
    product.updated_at = new Date().toISOString();
    const idx = this.data.products.findIndex(p => p.id === product.id);
    if (idx >= 0) {
      this.data.products[idx] = product;
    } else {
      if (!product.created_at) {
        product.created_at = new Date().toISOString();
      }
      this.data.products.unshift(product);
    }
    this.persist();
    return product;
  }

  duplicateProduct(id: string): Product | null {
    const original = this.data.products.find(p => p.id === id);
    if (!original) return null;

    const newId = `prod-${Date.now()}`;
    const newSku = `${original.sku}-COPY`;
    const newSlug = `${original.slug}-copy-${Math.floor(Math.random() * 1000)}`;

    const copy: Product = {
      ...JSON.parse(JSON.stringify(original)),
      id: newId,
      product_name: `${original.product_name} (Copy)`,
      sku: newSku,
      slug: newSlug,
      product_code: `${original.product_code}-CPY`,
      status: 'draft',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    this.data.products.unshift(copy);
    this.persist();
    return copy;
  }

  deleteProduct(id: string): boolean {
    const prevLen = this.data.products.length;
    this.data.products = this.data.products.filter(p => p.id !== id);
    if (this.data.products.length !== prevLen) {
      this.persist();
      return true;
    }
    return false;
  }

  // Enquiries
  getEnquiries(): Enquiry[] {
    return [...this.data.enquiries].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  addEnquiry(enquiry: Omit<Enquiry, 'id' | 'created_at' | 'status'> & { status?: Enquiry['status'] }): Enquiry {
    const newRecord: Enquiry = {
      ...enquiry,
      id: `enq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: enquiry.status || 'new',
      created_at: new Date().toISOString()
    };
    this.data.enquiries.unshift(newRecord);
    this.persist();
    return newRecord;
  }

  updateEnquiryStatus(id: string, status: Enquiry['status']): Enquiry | null {
    const item = this.data.enquiries.find(e => e.id === id);
    if (!item) return null;
    item.status = status;
    this.persist();
    return item;
  }

  deleteEnquiry(id: string): boolean {
    const prevLen = this.data.enquiries.length;
    this.data.enquiries = this.data.enquiries.filter(e => e.id !== id);
    if (this.data.enquiries.length !== prevLen) {
      this.persist();
      return true;
    }
    return false;
  }

  // Media
  getMedia(): MediaItem[] {
    return [...this.data.media].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  addMedia(item: Omit<MediaItem, 'id' | 'created_at'>): MediaItem {
    const newMedia: MediaItem = {
      ...item,
      id: `media-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    this.data.media.unshift(newMedia);
    this.persist();
    return newMedia;
  }

  updateMedia(id: string, updates: Partial<MediaItem>): MediaItem | null {
    const idx = this.data.media.findIndex(m => m.id === id);
    if (idx < 0) return null;
    this.data.media[idx] = { ...this.data.media[idx], ...updates };
    this.persist();
    return this.data.media[idx];
  }

  deleteMedia(id: string): boolean {
    const prevLen = this.data.media.length;
    this.data.media = this.data.media.filter(m => m.id !== id);
    if (this.data.media.length !== prevLen) {
      this.persist();
      return true;
    }
    return false;
  }

  // Redirects
  getRedirects(): RedirectItem[] {
    return this.data.redirects;
  }

  addRedirect(redirect: Omit<RedirectItem, 'id' | 'created_at'>): RedirectItem {
    const item: RedirectItem = {
      ...redirect,
      id: `red-${Date.now()}`,
      created_at: new Date().toISOString()
    };
    this.data.redirects.push(item);
    this.persist();
    return item;
  }

  deleteRedirect(id: string): boolean {
    const prevLen = this.data.redirects.length;
    this.data.redirects = this.data.redirects.filter(r => r.id !== id);
    if (this.data.redirects.length !== prevLen) {
      this.persist();
      return true;
    }
    return false;
  }

  checkRedirect(urlPath: string): RedirectItem | undefined {
    return this.data.redirects.find(r => r.from_path.toLowerCase() === urlPath.toLowerCase());
  }

  // Generate XML Sitemap
  generateSitemapXml(baseUrl: string = 'https://www.primusenterprises.in.net'): string {
    const staticRoutes = [
      { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
      { loc: `${baseUrl}/products`, priority: '0.9', changefreq: 'daily' },
      { loc: `${baseUrl}/about`, priority: '0.7', changefreq: 'monthly' },
      { loc: `${baseUrl}/catalogue`, priority: '0.8', changefreq: 'weekly' },
      { loc: `${baseUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
    ];

    const categoryRoutes = this.data.categories
      .filter(c => c.status === 'active')
      .map(c => ({
        loc: `${baseUrl}/category/${c.slug}`,
        priority: '0.85',
        changefreq: 'weekly'
      }));

    const productRoutes = this.data.products
      .filter(p => p.status === 'published' && p.robots_index !== false)
      .map(p => ({
        loc: `${baseUrl}/products/${p.slug}`,
        priority: '0.8',
        changefreq: 'weekly',
        lastmod: p.updated_at.split('T')[0]
      }));

    const allUrls = [...staticRoutes, ...categoryRoutes, ...productRoutes];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${'lastmod' in u && u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : `<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>`}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return xml;
  }
}

export const db = new DatabaseService();
