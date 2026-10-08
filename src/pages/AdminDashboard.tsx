import React, { useState, useEffect } from 'react';
import {
  Package,
  Layers,
  Inbox,
  Image as ImageIcon,
  Settings as SettingsIcon,
  Compass,
  Plus,
  Edit2,
  Trash2,
  Copy,
  ExternalLink,
  Save,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Search,
  Eye,
  FileText,
  Sliders,
  X,
  Phone,
  MessageSquare
} from 'lucide-react';
import { Product, Category, SiteSettings, Enquiry, MediaItem, RedirectItem, APlusBlock } from '../types.ts';
import { api } from '../services/api.ts';
import { SEOHead } from '../components/SEOHead.tsx';

interface AdminDashboardProps {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  onRefreshData: () => void;
  onNavigate: (path: string) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  products,
  categories,
  settings,
  onRefreshData,
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<'products' | 'categories' | 'enquiries' | 'media' | 'settings' | 'seo'>('products');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Direct access for user convenience, with password lock toggle

  // Sub-states
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [redirects, setRedirects] = useState<RedirectItem[]>([]);
  const [settingsForm, setSettingsForm] = useState<SiteSettings>(settings);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [loading, setLoading] = useState(false);

  // New Redirect Form
  const [newRedirect, setNewRedirect] = useState({ from_path: '', to_path: '', status_code: 301 as 301 | 302 });

  // New Media Form
  const [newMediaUrl, setNewMediaUrl] = useState('');
  const [newMediaName, setNewMediaName] = useState('');
  const [newMediaAlt, setNewMediaAlt] = useState('');

  // Load backend data
  const loadEnquiries = async () => {
    const data = await api.getEnquiries();
    setEnquiries(data);
  };

  const loadMedia = async () => {
    const data = await api.getMedia();
    setMediaList(data);
  };

  const loadRedirects = async () => {
    const data = await api.getRedirects();
    setRedirects(data);
  };

  useEffect(() => {
    loadEnquiries();
    loadMedia();
    loadRedirects();
  }, []);

  const showNotification = (text: string, type: 'success' | 'error' = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // Product Actions
  const handleCreateProduct = () => {
    const newProd: Product = {
      id: `new-${Date.now()}`,
      product_name: 'New Primus Automotive Product',
      slug: `new-product-${Date.now()}`,
      sku: 'PE-NEW-01',
      product_code: 'PRIMUS-NEW',
      category_id: categories[0]?.id || 'cat-fog-lamps',
      category_name: categories[0]?.name || 'Fog Lamp & LED Lights',
      short_description: 'High-performance automotive lighting component manufactured by Primus Enterprises.',
      long_description: 'Detailed engineering overview and operational characteristics designed for Indian transport conditions.',
      features: ['High-thermal conductivity casing', 'Vibration-resistant electrical circuit', 'Weather-sealed ingress protection'],
      applications: ['Universal 12V automotive installations'],
      compatibility: ['Standard Indian vehicle wiring harnesses'],
      brand: 'PRIMUS ENTERPRISES',
      material: 'Die-Cast Aluminum Alloy & Optical Acrylic',
      colour: 'Matte Black',
      voltage: '12V DC',
      wattage: '30W',
      light_source: 'Automotive Grade High Lumen LEDs',
      lighting_type: 'Auxiliary Lighting Unit',
      lens_type: 'Optical Convex Glass',
      body_material: 'Die-Cast Aluminum',
      ip_rating: 'IP67 Waterproof',
      pack_size: 'Box of 2 Units',
      minimum_order_quantity: '50 Pieces',
      country_of_origin: 'India',
      warranty: '12 Months Manufacturer Warranty',
      status: 'draft',
      featured: false,
      show_price: false,
      price: 500,
      price_unit: 'Piece',
      primary_image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      primary_image_alt: 'New Primus Automotive Product - Primus Enterprises',
      gallery_images: [
        {
          url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          alt: 'Primary View - Primus Enterprises',
          is_primary: true
        }
      ],
      seo_title: 'New Automotive Product | Primus Enterprises',
      seo_description: 'Wholesale automotive component manufactured by Primus Enterprises in New Delhi.',
      seo_keywords: 'Primus Enterprises, automotive lighting, wholesale India',
      canonical_url: '',
      og_title: '',
      og_description: '',
      og_image: '',
      robots_index: true,
      robots_follow: true,
      a_plus_enabled: false,
      a_plus_blocks: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    setEditingProduct(newProd);
  };

  const handleSaveProduct = async (prod: Product) => {
    setLoading(true);
    try {
      await api.saveProduct(prod);
      showNotification(`Product "${prod.product_name}" saved successfully!`);
      setEditingProduct(null);
      onRefreshData();
    } catch (e) {
      showNotification('Failed to save product. Check required fields.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDuplicate = async (id: string) => {
    setLoading(true);
    try {
      await api.duplicateProduct(id);
      showNotification('Product duplicated as draft.');
      onRefreshData();
    } catch (e) {
      showNotification('Failed to duplicate product.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}" from the catalogue database?`)) {
      setLoading(true);
      try {
        await api.deleteProduct(id);
        showNotification(`Product "${name}" deleted.`);
        onRefreshData();
      } catch (e) {
        showNotification('Failed to delete product.', 'error');
      } finally {
        setLoading(false);
      }
    }
  };

  // Category Actions
  const handleSaveCategory = async (cat: Category) => {
    setLoading(true);
    try {
      await api.saveCategory(cat);
      showNotification(`Category "${cat.name}" updated!`);
      setEditingCategory(null);
      onRefreshData();
    } catch (e) {
      showNotification('Failed to save category.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id: string, name: string) => {
    if (confirm(`Delete category "${name}"? Products in this category will need reassignment.`)) {
      setLoading(true);
      try {
        await api.deleteCategory(id);
        showNotification(`Category "${name}" removed.`);
        onRefreshData();
      } catch (e) {
        showNotification('Failed to remove category.', 'error');
      } finally {
        setLoading(false);
      }
    }
  };

  // Enquiry status
  const handleEnquiryStatus = async (id: string, status: Enquiry['status']) => {
    try {
      await api.updateEnquiryStatus(id, status);
      setEnquiries(enquiries.map(e => e.id === id ? { ...e, status } : e));
      showNotification('Enquiry status updated.');
    } catch (e) {
      showNotification('Failed to update enquiry status.', 'error');
    }
  };

  // Media
  const handleAddMedia = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMediaUrl) return;
    try {
      const added = await api.addMedia({
        name: newMediaName || 'Automotive Product Photo',
        url: newMediaUrl,
        alt: newMediaAlt || `${newMediaName || 'Product'} - Primus Enterprises`,
        caption: '',
        size_kb: 120,
      });
      setMediaList([added, ...mediaList]);
      setNewMediaUrl('');
      setNewMediaName('');
      setNewMediaAlt('');
      showNotification('Image added to Media Library.');
    } catch (err) {
      showNotification('Failed to add media item.', 'error');
    }
  };

  // Settings Save
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updated = await api.updateSettings(settingsForm);
      showNotification('Site settings & business details updated successfully!');
      onRefreshData();
    } catch (e) {
      showNotification('Failed to update settings.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Redirect Add
  const handleAddRedirect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRedirect.from_path || !newRedirect.to_path) return;
    try {
      const added = await api.addRedirect(newRedirect);
      setRedirects([...redirects, added]);
      setNewRedirect({ from_path: '', to_path: '', status_code: 301 });
      showNotification('301 Redirect rule registered.');
    } catch (e) {
      showNotification('Failed to save redirect rule.', 'error');
    }
  };

  const handleDeleteRedirect = async (id: string) => {
    try {
      await api.deleteRedirect(id);
      setRedirects(redirects.filter(r => r.id !== id));
      showNotification('Redirect rule removed.');
    } catch (e) {
      showNotification('Failed to delete redirect.', 'error');
    }
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen text-[#111111] pb-24">
      <SEOHead
        title="Admin CMS & Catalogue Control | Primus Enterprises"
        description="Primus Enterprises internal product content management system."
        noIndex={true}
      />

      {/* Top Admin Header */}
      <div className="bg-[#111111] text-white border-b border-[#333333] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#D9222A] flex items-center justify-center font-display font-extrabold text-white text-xs rounded-xs">
              P
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-tight block">
                PRIMUS ENTERPRISES CMS
              </span>
              <span className="font-technical text-[9px] text-[#AAAAAA] uppercase tracking-wider block">
                Catalogue & Enquiry Engine • New Delhi
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-technical">
            <button
              onClick={() => onNavigate('/')}
              className="text-[#AAAAAA] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Live Website</span>
            </button>
            <button
              onClick={onRefreshData}
              className="p-1.5 text-[#AAAAAA] hover:text-white rounded-xs transition-colors cursor-pointer"
              title="Refresh Catalogue"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {message && (
        <div
          className={`max-w-md mx-auto my-3 p-3 text-xs font-technical flex items-center gap-2 rounded-xs border shadow-md animate-in fade-in duration-150 ${
            message.type === 'success'
              ? 'bg-green-50 text-green-900 border-green-200'
              : 'bg-red-50 text-red-900 border-red-200'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#E5E5E5] sticky top-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-4 overflow-x-auto">
            {[
              { id: 'products', label: 'Products', icon: Package, badge: products.length },
              { id: 'categories', label: 'Categories', icon: Layers, badge: categories.length },
              { id: 'enquiries', label: 'Enquiries', icon: Inbox, badge: enquiries.filter(e => e.status === 'new').length },
              { id: 'media', label: 'Media Library', icon: ImageIcon },
              { id: 'settings', label: 'Site Settings', icon: SettingsIcon },
              { id: 'seo', label: 'SEO & Redirects', icon: Compass },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setEditingProduct(null);
                    setEditingCategory(null);
                  }}
                  className={`py-3.5 px-3 border-b-2 font-technical text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'border-[#D9222A] text-[#111111]'
                      : 'border-transparent text-[#777777] hover:text-[#111111]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive
                          ? 'bg-[#111111] text-white'
                          : 'bg-[#F7F7F5] text-[#555555] border border-[#E5E5E5]'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ================= TAB 1: PRODUCTS ================= */}
        {activeTab === 'products' && (
          <div>
            {!editingProduct ? (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-display font-bold text-xl text-[#111111]">
                      Product Catalogue Management
                    </h2>
                    <p className="font-display text-xs text-[#555555]">
                      Manage specifications, images, A+ content, and SEO for all automotive products.
                    </p>
                  </div>

                  <button
                    onClick={handleCreateProduct}
                    className="px-4 py-2.5 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Product</span>
                  </button>
                </div>

                {/* Table of Products */}
                <div className="bg-white border border-[#E5E5E5] rounded-xs overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs font-display">
                      <thead className="bg-[#F7F7F5] border-b border-[#E5E5E5] font-technical text-[11px] font-bold text-[#555555] uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4">Item</th>
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4">SKU / Code</th>
                          <th className="py-3 px-4">Voltage</th>
                          <th className="py-3 px-4">MOQ</th>
                          <th className="py-3 px-4">Status</th>
                          <th className="py-3 px-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EEEEEE]">
                        {products.map((p) => (
                          <tr key={p.id} className="hover:bg-[#FDFDFD] transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={p.primary_image}
                                  alt={p.product_name}
                                  className="w-10 h-10 object-cover border border-[#E5E5E5] rounded-xs bg-[#F7F7F5]"
                                />
                                <div>
                                  <span className="font-bold text-[#111111] block leading-tight">
                                    {p.product_name}
                                  </span>
                                  <span className="font-technical text-[10px] text-[#777777]">
                                    {p.lighting_type}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-technical text-[#555555]">
                              {p.category_name}
                            </td>
                            <td className="py-3 px-4 font-technical font-bold text-[#111111]">
                              {p.sku}
                            </td>
                            <td className="py-3 px-4 font-technical text-[#555555]">
                              {p.voltage}
                            </td>
                            <td className="py-3 px-4 font-technical text-[#D9222A] font-bold">
                              {p.minimum_order_quantity.split(' ')[0]} {p.minimum_order_quantity.split(' ')[1] || 'PCS'}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`font-technical text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                  p.status === 'published'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-amber-100 text-amber-800'
                                }`}
                              >
                                {p.status}
                              </span>
                              {p.featured && (
                                <span className="ml-1 font-technical text-[9px] font-bold uppercase px-1.5 py-0.2 bg-[#D9222A] text-white rounded-full">
                                  ★
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-4 text-right space-x-1">
                              <button
                                onClick={() => onNavigate(`/products/${p.slug}`)}
                                className="p-1.5 text-[#555555] hover:text-[#111111] hover:bg-[#F7F7F5] rounded-xs"
                                title="View on site"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setEditingProduct({ ...p })}
                                className="p-1.5 text-[#555555] hover:text-[#111111] hover:bg-[#F7F7F5] rounded-xs"
                                title="Edit product"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDuplicate(p.id)}
                                className="p-1.5 text-[#555555] hover:text-[#111111] hover:bg-[#F7F7F5] rounded-xs"
                                title="Duplicate product"
                              >
                                <Copy className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(p.id, p.product_name)}
                                className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xs"
                                title="Delete product"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : (
              /* Product Editor */
              <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 rounded-xs space-y-6">
                <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4">
                  <div>
                    <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#D9222A] block">
                      PRODUCT EDITOR
                    </span>
                    <h2 className="font-display font-extrabold text-2xl text-[#111111]">
                      {editingProduct.id.startsWith('new-') ? 'Create New Automotive Product' : `Editing: ${editingProduct.product_name}`}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="px-3 py-2 border border-[#E5E5E5] font-technical text-xs font-semibold rounded-xs hover:bg-[#F7F7F5] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSaveProduct(editingProduct)}
                      disabled={loading}
                      className="px-5 py-2 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <Save className="w-4 h-4" />
                      <span>{loading ? 'Saving...' : 'Save Product'}</span>
                    </button>
                  </div>
                </div>

                {/* Form Sections */}
                <div className="space-y-6">
                  {/* Basic Information */}
                  <div className="space-y-4">
                    <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
                      1. General Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Product Name *</label>
                        <input
                          type="text"
                          value={editingProduct.product_name}
                          onChange={(e) => setEditingProduct({ ...editingProduct, product_name: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">SKU / Model Number *</label>
                        <input
                          type="text"
                          value={editingProduct.sku}
                          onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Product Code</label>
                        <input
                          type="text"
                          value={editingProduct.product_code}
                          onChange={(e) => setEditingProduct({ ...editingProduct, product_code: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">URL Slug *</label>
                        <input
                          type="text"
                          value={editingProduct.slug}
                          onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Category *</label>
                        <select
                          value={editingProduct.category_id}
                          onChange={(e) => {
                            const cat = categories.find(c => c.id === e.target.value);
                            setEditingProduct({
                              ...editingProduct,
                              category_id: e.target.value,
                              category_name: cat?.name || editingProduct.category_name
                            });
                          }}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Catalogue Status</label>
                        <select
                          value={editingProduct.status}
                          onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as any })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        >
                          <option value="published">Published (Visible to Buyers)</option>
                          <option value="draft">Draft (Hidden)</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Short Description</label>
                        <textarea
                          rows={2}
                          value={editingProduct.short_description}
                          onChange={(e) => setEditingProduct({ ...editingProduct, short_description: e.target.value })}
                          className="w-full p-2.5 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Detailed Technical Description</label>
                        <textarea
                          rows={2}
                          value={editingProduct.long_description}
                          onChange={(e) => setEditingProduct({ ...editingProduct, long_description: e.target.value })}
                          className="w-full p-2.5 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div className="space-y-4">
                    <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
                      2. Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Voltage (e.g. 12V DC, 12V-24V)</label>
                        <input
                          type="text"
                          value={editingProduct.voltage}
                          onChange={(e) => setEditingProduct({ ...editingProduct, voltage: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Wattage</label>
                        <input
                          type="text"
                          value={editingProduct.wattage}
                          onChange={(e) => setEditingProduct({ ...editingProduct, wattage: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Ingress IP Rating</label>
                        <input
                          type="text"
                          value={editingProduct.ip_rating}
                          onChange={(e) => setEditingProduct({ ...editingProduct, ip_rating: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Minimum Order Quantity (MOQ)</label>
                        <input
                          type="text"
                          value={editingProduct.minimum_order_quantity}
                          onChange={(e) => setEditingProduct({ ...editingProduct, minimum_order_quantity: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Pack Size</label>
                        <input
                          type="text"
                          value={editingProduct.pack_size}
                          onChange={(e) => setEditingProduct({ ...editingProduct, pack_size: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Body Material</label>
                        <input
                          type="text"
                          value={editingProduct.body_material}
                          onChange={(e) => setEditingProduct({ ...editingProduct, body_material: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Lens Type</label>
                        <input
                          type="text"
                          value={editingProduct.lens_type}
                          onChange={(e) => setEditingProduct({ ...editingProduct, lens_type: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Warranty Term</label>
                        <input
                          type="text"
                          value={editingProduct.warranty}
                          onChange={(e) => setEditingProduct({ ...editingProduct, warranty: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical focus:border-[#111111] outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Imagery & Alt Text */}
                  <div className="space-y-4">
                    <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
                      3. Imagery & Alt Text Management
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Primary Image URL *</label>
                        <input
                          type="text"
                          value={editingProduct.primary_image}
                          onChange={(e) => setEditingProduct({ ...editingProduct, primary_image: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                        <div className="mt-2 w-24 h-24 border border-[#E5E5E5] p-1 bg-[#F7F7F5] rounded-xs">
                          <img src={editingProduct.primary_image} alt="Preview" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Image Alt Text (SEO critical) *</label>
                        <input
                          type="text"
                          value={editingProduct.primary_image_alt || ''}
                          onChange={(e) => setEditingProduct({ ...editingProduct, primary_image_alt: e.target.value })}
                          placeholder="e.g. G-15 Metal Fog Lamp 12V-24V - Primus Enterprises"
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                        <p className="font-technical text-[10px] text-[#777777] mt-1">
                          Default pattern: "[Product Name] - Primus Enterprises"
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SEO Metadata */}
                  <div className="space-y-4">
                    <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111] border-b border-[#EEEEEE] pb-2">
                      4. Google SEO Configuration
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">SEO Meta Title</label>
                        <input
                          type="text"
                          value={editingProduct.seo_title}
                          onChange={(e) => setEditingProduct({ ...editingProduct, seo_title: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block font-technical text-xs font-bold text-[#555555] mb-1">SEO Meta Description</label>
                        <input
                          type="text"
                          value={editingProduct.seo_description}
                          onChange={(e) => setEditingProduct({ ...editingProduct, seo_description: e.target.value })}
                          className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display focus:border-[#111111] outline-hidden"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Price Controls & Featured Toggle */}
                  <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs flex flex-wrap items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer font-technical text-xs font-bold text-[#111111]">
                      <input
                        type="checkbox"
                        checked={editingProduct.featured}
                        onChange={(e) => setEditingProduct({ ...editingProduct, featured: e.target.checked })}
                        className="w-4 h-4 accent-[#D9222A]"
                      />
                      <span>Mark as Featured Product (Homepage Showcase)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer font-technical text-xs font-bold text-[#111111]">
                      <input
                        type="checkbox"
                        checked={editingProduct.show_price}
                        onChange={(e) => setEditingProduct({ ...editingProduct, show_price: e.target.checked })}
                        className="w-4 h-4 accent-[#D9222A]"
                      />
                      <span>Display B2B Wholesale Price Publicly</span>
                    </label>

                    {editingProduct.show_price && (
                      <div className="flex items-center gap-2">
                        <span className="font-technical text-xs text-[#555555]">Price (₹):</span>
                        <input
                          type="number"
                          value={editingProduct.price || 0}
                          onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                          className="w-24 h-8 px-2 border border-[#E5E5E5] rounded-xs text-xs font-technical bg-white"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5] flex justify-end gap-3">
                  <button
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 border border-[#E5E5E5] font-technical text-xs font-semibold rounded-xs hover:bg-[#F7F7F5]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveProduct(editingProduct)}
                    disabled={loading}
                    className="px-6 py-2.5 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: CATEGORIES ================= */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-xl text-[#111111]">
                  Automotive Product Categories
                </h2>
                <p className="font-display text-xs text-[#555555]">
                  Control category routing, descriptions, image banners and Google SEO tags.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingCategory({
                    id: `cat-${Date.now()}`,
                    name: 'New Category',
                    slug: `new-category-${Date.now()}`,
                    short_description: 'Automotive accessory classification.',
                    description: 'Comprehensive category description for wholesale automotive buyers.',
                    category_image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
                    display_order: categories.length + 1,
                    status: 'active',
                    seo_title: 'Automotive Accessories | Primus Enterprises',
                    seo_description: 'Wholesale automotive components manufactured by Primus Enterprises in New Delhi.',
                    canonical_url: '',
                    og_image: '',
                  });
                }}
                className="px-4 py-2.5 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4" />
                <span>Add Category</span>
              </button>
            </div>

            {editingCategory ? (
              <div className="bg-white border border-[#E5E5E5] p-6 rounded-xs space-y-4 mb-6">
                <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Edit Category: {editingCategory.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Category Name *</label>
                    <input
                      type="text"
                      value={editingCategory.name}
                      onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                      className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Slug *</label>
                    <input
                      type="text"
                      value={editingCategory.slug}
                      onChange={(e) => setEditingCategory({ ...editingCategory, slug: e.target.value })}
                      className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Image URL</label>
                    <input
                      type="text"
                      value={editingCategory.category_image}
                      onChange={(e) => setEditingCategory({ ...editingCategory, category_image: e.target.value })}
                      className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Display Order</label>
                    <input
                      type="number"
                      value={editingCategory.display_order}
                      onChange={(e) => setEditingCategory({ ...editingCategory, display_order: parseInt(e.target.value) || 1 })}
                      className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Full Description</label>
                    <textarea
                      rows={3}
                      value={editingCategory.description}
                      onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                      className="w-full p-2.5 border border-[#E5E5E5] rounded-xs text-xs font-display"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    onClick={() => setEditingCategory(null)}
                    className="px-4 py-2 border border-[#E5E5E5] font-technical text-xs rounded-xs"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveCategory(editingCategory)}
                    className="px-5 py-2 bg-[#111111] text-white font-technical text-xs font-bold uppercase rounded-xs"
                  >
                    Save Category
                  </button>
                </div>
              </div>
            ) : null}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((c) => (
                <div key={c.id} className="bg-white border border-[#E5E5E5] p-5 rounded-xs flex flex-col justify-between">
                  <div>
                    <div className="aspect-16/9 bg-[#F7F7F5] rounded-xs overflow-hidden mb-3 border border-[#EEEEEE]">
                      <img src={c.category_image} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center justify-between text-xs font-technical text-[#777777] mb-1">
                      <span>ORDER: {c.display_order}</span>
                      <span className="font-bold text-[#111111]">{c.product_count || 0} Products</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-[#111111]">{c.name}</h3>
                    <p className="font-display text-xs text-[#555555] mt-1 line-clamp-2">{c.short_description}</p>
                    <span className="font-technical text-[10px] text-[#888888] block mt-1">/category/{c.slug}</span>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EEEEEE] flex justify-between items-center text-xs font-technical">
                    <button
                      onClick={() => onNavigate(`/category/${c.slug}`)}
                      className="text-[#555555] hover:text-[#111111] flex items-center gap-1"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                    <div className="space-x-2">
                      <button
                        onClick={() => setEditingCategory({ ...c })}
                        className="text-[#111111] font-bold hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(c.id, c.name)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: ENQUIRIES & LEADS ================= */}
        {activeTab === 'enquiries' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-xl text-[#111111]">
                  Wholesale Enquiries & B2B Leads
                </h2>
                <p className="font-display text-xs text-[#555555]">
                  Live customer quote requests, brochure submissions, and contact form transmissions.
                </p>
              </div>
              <button
                onClick={loadEnquiries}
                className="px-3 py-1.5 bg-white border border-[#E5E5E5] text-xs font-technical rounded-xs flex items-center gap-1.5 hover:bg-[#F7F7F5]"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Leads</span>
              </button>
            </div>

            <div className="bg-white border border-[#E5E5E5] rounded-xs overflow-hidden">
              {enquiries.length === 0 ? (
                <div className="py-16 text-center text-[#555555] text-xs font-display">
                  No enquiry submissions yet. Enquiries from the website quote modals and contact forms appear here in real time.
                </div>
              ) : (
                <div className="divide-y divide-[#EEEEEE]">
                  {enquiries.map((enq) => (
                    <div key={enq.id} className="p-5 hover:bg-[#FAFAFA] transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-technical text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                              enq.status === 'new'
                                ? 'bg-red-100 text-[#D9222A]'
                                : enq.status === 'quoted'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {enq.status.toUpperCase()}
                          </span>
                          <span className="font-technical text-[11px] font-bold text-[#111111]">
                            {enq.name}
                          </span>
                          {enq.company_name && (
                            <span className="font-display text-xs text-[#555555]">
                              ({enq.company_name})
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3 text-xs font-technical text-[#777777]">
                          <span>{new Date(enq.created_at).toLocaleString('en-IN')}</span>
                          <select
                            value={enq.status}
                            onChange={(e) => handleEnquiryStatus(enq.id, e.target.value as any)}
                            className="text-[11px] border border-[#E5E5E5] rounded-xs px-2 py-0.5 bg-white font-technical"
                          >
                            <option value="new">New Lead</option>
                            <option value="in_progress">In Progress</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-display text-[#555555] my-2 bg-[#F7F7F5] p-3 rounded-xs border border-[#EEEEEE]">
                        <div>
                          <strong className="text-[#111111] font-technical uppercase text-[10px] block">PHONE:</strong>
                          <a href={`tel:${enq.phone}`} className="font-technical font-semibold text-[#111111] hover:underline">
                            {enq.phone}
                          </a>
                        </div>
                        {enq.email && (
                          <div>
                            <strong className="text-[#111111] font-technical uppercase text-[10px] block">EMAIL:</strong>
                            <a href={`mailto:${enq.email}`} className="font-technical text-[#111111] hover:underline">
                              {enq.email}
                            </a>
                          </div>
                        )}
                        <div>
                          <strong className="text-[#111111] font-technical uppercase text-[10px] block">LOCATION:</strong>
                          <span>{enq.city || 'N/A'}{enq.state ? `, ${enq.state}` : ''}</span>
                        </div>
                      </div>

                      {enq.product_name && (
                        <div className="text-xs font-technical text-[#111111] my-1">
                          <span className="text-[#777777]">REQUESTED PRODUCT: </span>
                          <strong className="text-[#D9222A]">{enq.product_name}</strong>
                          {enq.sku && <span className="text-[#555555] ml-1">({enq.sku})</span>}
                          {enq.quantity && <span className="ml-2 font-bold bg-white px-2 py-0.5 border border-[#E5E5E5] rounded-xs">QTY: {enq.quantity}</span>}
                        </div>
                      )}

                      <p className="font-display text-xs text-[#333333] mt-2 italic bg-white p-2.5 border border-[#EEEEEE] rounded-xs">
                        "{enq.message}"
                      </p>

                      <div className="mt-3 flex items-center gap-2">
                        <a
                          href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${enq.name}, this is Mr. Satyadev Pandit from Primus Enterprises, Burari, New Delhi regarding your wholesale enquiry for ${enq.product_name || 'automotive lighting'}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-[11px] font-bold uppercase rounded-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Reply On WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 4: MEDIA LIBRARY ================= */}
        {activeTab === 'media' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-display font-bold text-xl text-[#111111]">
                  Product Media & Alt-Text Library
                </h2>
                <p className="font-display text-xs text-[#555555]">
                  Manage high-resolution photography, WebP assets, and Google-indexable image alt texts.
                </p>
              </div>
            </div>

            {/* Quick Add Media URL */}
            <form onSubmit={handleAddMedia} className="bg-white border border-[#E5E5E5] p-5 rounded-xs mb-8 space-y-4">
              <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                Register New Media Asset URL
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <input
                    type="text"
                    required
                    value={newMediaName}
                    onChange={(e) => setNewMediaName(e.target.value)}
                    placeholder="Asset Title (e.g. G-15 Fog Lamp Front Shot)"
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
                <div>
                  <input
                    type="url"
                    required
                    value={newMediaUrl}
                    onChange={(e) => setNewMediaUrl(e.target.value)}
                    placeholder="Image URL (HTTPS link or uploaded asset)"
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={newMediaAlt}
                    onChange={(e) => setNewMediaAlt(e.target.value)}
                    placeholder="SEO Alt Text (e.g. G-15 Fog Lamp - Primus Enterprises)"
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
              >
                Register Image to Media Library
              </button>
            </form>

            {/* Media Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mediaList.map((m) => (
                <div key={m.id} className="bg-white border border-[#E5E5E5] rounded-xs overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="aspect-square bg-[#F7F7F5] border-b border-[#EEEEEE] overflow-hidden p-2 flex items-center justify-center">
                      <img src={m.url} alt={m.alt} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-3 space-y-1">
                      <span className="font-display font-bold text-xs text-[#111111] block truncate">{m.name}</span>
                      <span className="font-technical text-[10px] text-[#777777] block">
                        ALT: <span className="text-[#111111] italic">{m.alt || 'No alt text set'}</span>
                      </span>
                    </div>
                  </div>
                  <div className="p-3 border-t border-[#EEEEEE] flex justify-between items-center text-xs font-technical">
                    <button
                      onClick={() => {
                        navigator.clipboard?.writeText(m.url);
                        showNotification('Image URL copied to clipboard.');
                      }}
                      className="text-[#555555] hover:text-[#111111] flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" />
                      <span>Copy URL</span>
                    </button>
                    <button
                      onClick={async () => {
                        if (confirm(`Delete image "${m.name}"?`)) {
                          await api.deleteMedia(m.id);
                          setMediaList(mediaList.filter(item => item.id !== m.id));
                          showNotification('Image deleted from library.');
                        }
                      }}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 5: SITE SETTINGS ================= */}
        {activeTab === 'settings' && (
          <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 rounded-xs">
            <div className="border-b border-[#E5E5E5] pb-4 mb-6">
              <h2 className="font-display font-bold text-xl text-[#111111]">
                Global Site & Business Configuration
              </h2>
              <p className="font-display text-xs text-[#555555]">
                Configure official contact coordinates, GSTIN, WhatsApp hotline, price display toggles, and Search Console IDs.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Company Name</label>
                  <input
                    type="text"
                    value={settingsForm.company_name}
                    onChange={(e) => setSettingsForm({ ...settingsForm, company_name: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Proprietor / CEO Name</label>
                  <input
                    type="text"
                    value={settingsForm.ceo_name}
                    onChange={(e) => setSettingsForm({ ...settingsForm, ceo_name: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">GSTIN Number</label>
                  <input
                    type="text"
                    value={settingsForm.gstin}
                    onChange={(e) => setSettingsForm({ ...settingsForm, gstin: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Primary Phone</label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">WhatsApp Business Number</label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp_number}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp_number: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Official Email</label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#EEEEEE]">
                <div className="sm:col-span-2">
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Factory & Dispatch Address</label>
                  <input
                    type="text"
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">City & Pincode</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settingsForm.city}
                      onChange={(e) => setSettingsForm({ ...settingsForm, city: e.target.value })}
                      className="w-2/3 h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                    />
                    <input
                      type="text"
                      value={settingsForm.pincode}
                      onChange={(e) => setSettingsForm({ ...settingsForm, pincode: e.target.value })}
                      className="w-1/3 h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Header Announcement Bar</label>
                  <input
                    type="text"
                    value={settingsForm.header_announcement || ''}
                    onChange={(e) => setSettingsForm({ ...settingsForm, header_announcement: e.target.value })}
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-display"
                  />
                </div>
              </div>

              {/* Price & Commercial Toggles */}
              <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs space-y-3">
                <h4 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                  B2B Commercial Controls
                </h4>
                <label className="flex items-center gap-2 cursor-pointer font-technical text-xs font-bold text-[#111111]">
                  <input
                    type="checkbox"
                    checked={settingsForm.show_price_globally}
                    onChange={(e) => setSettingsForm({ ...settingsForm, show_price_globally: e.target.checked })}
                    className="w-4 h-4 accent-[#D9222A]"
                  />
                  <span>Show Indicative Prices Across Entire Website (Global Toggle)</span>
                </label>
                <p className="font-display text-xs text-[#555555]">
                  When disabled, products emphasize "Get Wholesale Quote" and individual prices remain hidden unless explicitly toggled on a specific product.
                </p>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4" />
                  <span>{loading ? 'Saving...' : 'Save Site Settings'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ================= TAB 6: SEO & REDIRECTS ================= */}
        {activeTab === 'seo' && (
          <div className="space-y-8">
            {/* Sitemap & Robots.txt Status */}
            <div className="bg-white border border-[#E5E5E5] p-6 rounded-xs space-y-4">
              <h2 className="font-display font-bold text-xl text-[#111111]">
                Google Search Console & Indexing Health
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-technical text-xs font-bold uppercase text-[#111111]">
                      XML SITEMAP
                    </span>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D9222A] font-technical text-xs flex items-center gap-1 hover:underline font-bold"
                    >
                      <span>Open Live XML</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="font-display text-xs text-[#555555] mt-2">
                    Dynamic XML sitemap automatically lists every published product, category, and static page with lastmod and changefreq tags for Googlebot.
                  </p>
                </div>

                <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-technical text-xs font-bold uppercase text-[#111111]">
                      ROBOTS.TXT CRAWLER RULES
                    </span>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D9222A] font-technical text-xs flex items-center gap-1 hover:underline font-bold"
                    >
                      <span>Open robots.txt</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="font-display text-xs text-[#555555] mt-2">
                    Directs Googlebot to index all catalogue pages, disallows private admin paths, and points to the sitemap location.
                  </p>
                </div>
              </div>
            </div>

            {/* 301 Redirect Rules Management */}
            <div className="bg-white border border-[#E5E5E5] p-6 rounded-xs space-y-6">
              <div>
                <h3 className="font-display font-bold text-lg text-[#111111]">
                  301 Permanent Redirect Manager
                </h3>
                <p className="font-display text-xs text-[#555555]">
                  Preserve Google link equity and eliminate 404 broken links from old catalogue URLs.
                </p>
              </div>

              <form onSubmit={handleAddRedirect} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">Old URL Path</label>
                  <input
                    type="text"
                    required
                    value={newRedirect.from_path}
                    onChange={(e) => setNewRedirect({ ...newRedirect, from_path: e.target.value })}
                    placeholder="/old-catalog-page.html"
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold text-[#555555] mb-1">New Target Path</label>
                  <input
                    type="text"
                    required
                    value={newRedirect.to_path}
                    onChange={(e) => setNewRedirect({ ...newRedirect, to_path: e.target.value })}
                    placeholder="/products"
                    className="w-full h-10 px-3 border border-[#E5E5E5] rounded-xs text-xs font-technical"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full h-10 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase rounded-xs cursor-pointer"
                  >
                    Add 301 Rule
                  </button>
                </div>
              </form>

              <div className="border border-[#E5E5E5] rounded-xs overflow-hidden">
                <table className="w-full text-left text-xs font-technical">
                  <thead className="bg-[#F7F7F5] border-b border-[#E5E5E5] text-[#555555] uppercase text-[10px]">
                    <tr>
                      <th className="py-2.5 px-4">From Path</th>
                      <th className="py-2.5 px-4">Redirects To</th>
                      <th className="py-2.5 px-4">Code</th>
                      <th className="py-2.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EEEEEE]">
                    {redirects.map((r) => (
                      <tr key={r.id}>
                        <td className="py-2.5 px-4 text-[#111111] font-bold">{r.from_path}</td>
                        <td className="py-2.5 px-4 text-[#D9222A]">{r.to_path}</td>
                        <td className="py-2.5 px-4 text-[#555555]">{r.status_code}</td>
                        <td className="py-2.5 px-4 text-right">
                          <button
                            onClick={() => handleDeleteRedirect(r.id)}
                            className="text-red-600 hover:underline"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
