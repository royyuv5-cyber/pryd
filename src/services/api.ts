import { Product, Category, SiteSettings, Enquiry, MediaItem, RedirectItem } from '../types.ts';
import { initialProducts, initialCategories, initialSiteSettings, initialRedirects } from '../../server/seedData.ts';

const API_BASE = '/api';

export const api = {
  // Settings
  async getSettings(): Promise<SiteSettings> {
    try {
      const res = await fetch(`${API_BASE}/settings`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch settings error, fallback to initial', e);
    }
    return initialSiteSettings;
  },

  async updateSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
    const res = await fetch(`${API_BASE}/settings`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (!res.ok) throw new Error('Failed to update settings');
    return await res.json();
  },

  // Categories
  async getCategories(): Promise<Category[]> {
    try {
      const res = await fetch(`${API_BASE}/categories`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch categories error, fallback to initial', e);
    }
    return initialCategories;
  },

  async getCategory(idOrSlug: string): Promise<Category | null> {
    try {
      const res = await fetch(`${API_BASE}/categories/${encodeURIComponent(idOrSlug)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch category error', e);
    }
    return initialCategories.find(c => c.id === idOrSlug || c.slug === idOrSlug) || null;
  },

  async saveCategory(category: Category): Promise<Category> {
    const method = category.id && initialCategories.some(c => c.id === category.id) ? 'PUT' : 'POST';
    const url = method === 'PUT' ? `${API_BASE}/categories/${category.id}` : `${API_BASE}/categories`;
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(category),
    });
    if (!res.ok) throw new Error('Failed to save category');
    return await res.json();
  },

  async deleteCategory(id: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/categories/${id}`, { method: 'DELETE' });
    return res.ok;
  },

  // Products
  async getProducts(params?: {
    q?: string;
    category?: string;
    voltage?: string;
    lighting_type?: string;
    featured?: boolean;
    status?: string;
  }): Promise<Product[]> {
    try {
      const searchParams = new URLSearchParams();
      if (params?.q) searchParams.append('q', params.q);
      if (params?.category) searchParams.append('category', params.category);
      if (params?.voltage) searchParams.append('voltage', params.voltage);
      if (params?.lighting_type) searchParams.append('lighting_type', params.lighting_type);
      if (params?.featured !== undefined) searchParams.append('featured', String(params.featured));
      if (params?.status) searchParams.append('status', params.status);

      const res = await fetch(`${API_BASE}/products?${searchParams.toString()}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch products error, fallback to initial', e);
    }
    return initialProducts;
  },

  async getProduct(idOrSlug: string): Promise<Product | null> {
    try {
      const res = await fetch(`${API_BASE}/products/${encodeURIComponent(idOrSlug)}`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch product error', e);
    }
    return initialProducts.find(p => p.id === idOrSlug || p.slug === idOrSlug) || null;
  },

  async saveProduct(product: Product): Promise<Product> {
    const isNew = !product.id || product.id.startsWith('new-');
    const url = isNew ? `${API_BASE}/products` : `${API_BASE}/products/${product.id}`;
    const method = isNew ? 'POST' : 'PUT';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (!res.ok) throw new Error('Failed to save product');
    return await res.json();
  },

  async duplicateProduct(id: string): Promise<Product> {
    const res = await fetch(`${API_BASE}/products/${id}/duplicate`, { method: 'POST' });
    if (!res.ok) throw new Error('Failed to duplicate product');
    return await res.json();
  },

  async deleteProduct(id: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/products/${id}`, { method: 'DELETE' });
    return res.ok;
  },

  // Enquiries
  async submitEnquiry(enquiry: Omit<Enquiry, 'id' | 'created_at' | 'status'>): Promise<Enquiry> {
    const res = await fetch(`${API_BASE}/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry),
    });
    if (!res.ok) throw new Error('Failed to submit enquiry');
    return await res.json();
  },

  async getEnquiries(): Promise<Enquiry[]> {
    try {
      const res = await fetch(`${API_BASE}/enquiries`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch enquiries error', e);
    }
    return [];
  },

  async updateEnquiryStatus(id: string, status: Enquiry['status']): Promise<Enquiry> {
    const res = await fetch(`${API_BASE}/enquiries/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) throw new Error('Failed to update status');
    return await res.json();
  },

  async deleteEnquiry(id: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/enquiries/${id}`, { method: 'DELETE' });
    return res.ok;
  },

  // Media
  async getMedia(): Promise<MediaItem[]> {
    try {
      const res = await fetch(`${API_BASE}/media`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch media error', e);
    }
    return [];
  },

  async addMedia(item: Omit<MediaItem, 'id' | 'created_at'>): Promise<MediaItem> {
    const res = await fetch(`${API_BASE}/media`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!res.ok) throw new Error('Failed to add media');
    return await res.json();
  },

  async updateMedia(id: string, updates: Partial<MediaItem>): Promise<MediaItem> {
    const res = await fetch(`${API_BASE}/media/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!res.ok) throw new Error('Failed to update media');
    return await res.json();
  },

  async deleteMedia(id: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/media/${id}`, { method: 'DELETE' });
    return res.ok;
  },

  // Redirects
  async getRedirects(): Promise<RedirectItem[]> {
    try {
      const res = await fetch(`${API_BASE}/redirects`);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn('API fetch redirects error', e);
    }
    return initialRedirects;
  },

  async addRedirect(redirect: Omit<RedirectItem, 'id' | 'created_at'>): Promise<RedirectItem> {
    const res = await fetch(`${API_BASE}/redirects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(redirect),
    });
    if (!res.ok) throw new Error('Failed to add redirect');
    return await res.json();
  },

  async deleteRedirect(id: string): Promise<boolean> {
    const res = await fetch(`${API_BASE}/redirects/${id}`, { method: 'DELETE' });
    return res.ok;
  }
};
