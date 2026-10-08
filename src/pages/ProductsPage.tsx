import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronRight, X, ArrowUpDown, FileDown } from 'lucide-react';
import { Product, Category, SiteSettings } from '../types.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { SEOHead } from '../components/SEOHead.tsx';

interface ProductsPageProps {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string, sku?: string) => void;
  initialCategorySlug?: string;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  categories,
  settings,
  onNavigate,
  onOpenEnquiry,
  initialCategorySlug,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategorySlug || 'all');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name_asc' | 'sku_asc'>('featured');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (p.status !== 'published') return false;

      // Category filter
      if (selectedCategory !== 'all') {
        const cat = categories.find((c) => c.slug === selectedCategory || c.id === selectedCategory);
        if (cat && p.category_id !== cat.id) return false;
      }

      // Voltage filter
      if (selectedVoltage !== 'all') {
        if (!p.voltage.toLowerCase().includes(selectedVoltage.toLowerCase())) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matches =
          p.product_name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.product_code.toLowerCase().includes(q) ||
          p.short_description.toLowerCase().includes(q) ||
          p.voltage.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q)) ||
          p.applications.some((a) => a.toLowerCase().includes(q));
        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'name_asc') {
        return a.product_name.localeCompare(b.product_name);
      }
      if (sortBy === 'sku_asc') {
        return a.sku.localeCompare(b.sku);
      }
      return 0;
    });
  }, [products, categories, selectedCategory, selectedVoltage, searchQuery, sortBy]);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory || c.id === selectedCategory);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Primus Enterprises Automotive Products Catalogue',
    description: 'B2B automotive lighting and electrical accessories showcase manufactured by Primus Enterprises, New Delhi.',
    url: 'https://www.primusenterprises.in.net/products',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Primus Enterprises',
      url: 'https://www.primusenterprises.in.net'
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title="Complete Automotive Product Catalogue | Primus Enterprises"
        description="Browse all Primus Enterprises automotive lighting products: fog lamps, motorcycle indicators, DC converters, electronic flashers and roof lights. Wholesale supply across India."
        canonicalUrl="https://www.primusenterprises.in.net/products"
        structuredData={structuredData}
      />

      {/* Header & Breadcrumb */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111111] font-bold">AUTOMOTIVE PRODUCTS</span>
            {activeCategoryObj && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#D9222A] font-bold">{activeCategoryObj.name.toUpperCase()}</span>
              </>
            )}
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                B2B WHOLESALE SPECIFICATION REPOSITORY
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
                {activeCategoryObj ? activeCategoryObj.name : 'Automotive Product Catalogue'}
              </h1>
              <p className="font-display text-sm text-[#555555] mt-1.5 max-w-2xl">
                {activeCategoryObj
                  ? activeCategoryObj.description
                  : 'Engineered lighting and electrical assemblies manufactured for two-wheelers, four-wheelers, commercial fleets and electric vehicles.'}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/catalogue')}
                className="px-4 py-2.5 bg-white border border-[#111111] text-[#111111] font-technical text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#111111] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <FileDown className="w-4 h-4 text-[#D9222A]" />
                <span>Request Full PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Search & Filter Control Bar */}
        <div className="bg-[#FFFFFF] border border-[#E5E5E5] p-4 rounded-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-[#777777] absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by SKU, name, voltage, material..."
                className="w-full h-10 pl-9 pr-8 text-xs font-display border border-[#E5E5E5] focus:border-[#111111] outline-hidden rounded-xs bg-[#F7F7F5]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-3 text-[#777777] hover:text-[#111111]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Select */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 px-3 text-xs font-technical border border-[#E5E5E5] focus:border-[#111111] outline-hidden rounded-xs bg-[#F7F7F5] text-[#111111] font-semibold"
              >
                <option value="all">All Categories ({products.length})</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Voltage Filter */}
            <div className="md:col-span-2">
              <select
                value={selectedVoltage}
                onChange={(e) => setSelectedVoltage(e.target.value)}
                className="w-full h-10 px-3 text-xs font-technical border border-[#E5E5E5] focus:border-[#111111] outline-hidden rounded-xs bg-[#F7F7F5] text-[#111111]"
              >
                <option value="all">All Voltages</option>
                <option value="12V">12V DC</option>
                <option value="24V">24V DC / 12V-24V</option>
                <option value="48V">48V / 60V (EV)</option>
              </select>
            </div>

            {/* Sort */}
            <div className="md:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full h-10 px-3 text-xs font-technical border border-[#E5E5E5] focus:border-[#111111] outline-hidden rounded-xs bg-[#F7F7F5] text-[#111111]"
              >
                <option value="featured">Featured First</option>
                <option value="name_asc">Name (A-Z)</option>
                <option value="sku_asc">SKU Code</option>
              </select>
            </div>
          </div>

          {/* Quick Active Filter Badges */}
          {(selectedCategory !== 'all' || selectedVoltage !== 'all' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EEEEEE] text-xs font-technical">
              <span className="text-[#777777] uppercase text-[10px]">ACTIVE FILTERS:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs text-[#111111]">
                  Category: {activeCategoryObj?.name}
                  <button onClick={() => setSelectedCategory('all')} className="hover:text-[#D9222A]">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedVoltage !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs text-[#111111]">
                  Voltage: {selectedVoltage}
                  <button onClick={() => setSelectedVoltage('all')} className="hover:text-[#D9222A]">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs text-[#111111]">
                  Query: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-[#D9222A]">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedVoltage('all');
                  setSearchQuery('');
                }}
                className="text-[#D9222A] hover:underline text-[11px] ml-2"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-technical text-[#777777] mb-6">
          <span>
            SHOWING <strong className="text-[#111111]">{filteredProducts.length}</strong> AUTOMOTIVE PRODUCTS
          </span>
          <span>B2B EX-FACTORY DISPATCH</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                settings={settings}
                onViewProduct={(slug) => onNavigate(`/products/${slug}`)}
                onOpenEnquiry={(name, sku) => onOpenEnquiry(name, sku)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#F7F7F5] border border-[#E5E5E5] p-8 rounded-xs space-y-3">
            <h3 className="font-display font-bold text-base text-[#111111]">No products matched your exact filter parameters</h3>
            <p className="font-display text-xs text-[#555555] max-w-md mx-auto">
              Please modify your search keyword or voltage filter, or contact Primus Enterprises directly for custom automotive manufacturing.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedVoltage('all');
                setSearchQuery('');
              }}
              className="mt-3 px-5 py-2.5 bg-[#111111] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
