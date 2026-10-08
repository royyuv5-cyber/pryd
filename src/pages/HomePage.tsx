import React, { useState } from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Factory, Truck, CheckCircle2, Search, SlidersHorizontal } from 'lucide-react';
import { Product, Category, SiteSettings } from '../types.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { SEOHead } from '../components/SEOHead.tsx';

interface HomePageProps {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string, sku?: string) => void;
  onOpenSearch: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  categories,
  settings,
  onNavigate,
  onOpenEnquiry,
  onOpenSearch,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  const featuredProducts = products.filter((p) => p.featured && p.status === 'published');
  const displayFeatured = featuredProducts.length > 0 ? featuredProducts : products.slice(0, 6);

  const cleanWhatsAppNumber = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const heroWhatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    'Hello Primus Enterprises, I would like to enquire about your automotive lighting and electrical catalogue for wholesale.'
  )}`;

  // Filtered discovery products
  const discoveryProducts = products.filter((p) => {
    if (activeCategoryFilter !== 'all' && p.category_id !== activeCategoryFilter) return false;
    if (heroSearchQuery) {
      const q = heroSearchQuery.toLowerCase();
      return (
        p.product_name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.voltage.toLowerCase().includes(q) ||
        p.lighting_type.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="bg-white">
      <SEOHead
        title="PRIMUS ENTERPRISES | Automotive Lighting & Electrical B2B Catalogue"
        description="Explore Primus Enterprises' complete range of automotive lighting, LED fog lamps, motorcycle indicators, DC converters & electrical accessories. Direct wholesale manufacturer in New Delhi."
        canonicalUrl="https://www.primusenterprises.in.net/"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative border-b border-[#E5E5E5] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F7F7F5] border border-[#E5E5E5] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#D9222A]"></span>
                <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#111111]">
                  B2B AUTOMOTIVE PRODUCT CATALOGUE • NEW DELHI
                </span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[1.08] tracking-tight">
                PRECISION LIGHTING. <br />
                <span className="text-[#111111]">BUILT FOR THE ROAD.</span>
              </h1>

              <p className="font-display text-base sm:text-lg text-[#555555] max-w-xl leading-relaxed">
                Explore Primus Enterprises' comprehensive range of precision automotive lighting and electrical accessories engineered for motorcycles, passenger cars, commercial vehicles and e-mobility fleets.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('/products')}
                  className="px-6 py-4 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP ENQUIRY</span>
                </a>
              </div>

              {/* Hero Technical Proof Strips */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E5E5E5]">
                <div className="border-l-2 border-[#111111] pl-3">
                  <span className="block font-technical text-[10px] font-bold uppercase text-[#777777]">SUPPLY MODEL</span>
                  <span className="font-technical text-xs font-bold text-[#111111]">Manufacturer / Wholesale</span>
                </div>
                <div className="border-l-2 border-[#111111] pl-3">
                  <span className="block font-technical text-[10px] font-bold uppercase text-[#777777]">VOLTAGE RANGE</span>
                  <span className="font-technical text-xs font-bold text-[#111111]">12V • 24V • 48V-60V DC</span>
                </div>
                <div className="border-l-2 border-[#D9222A] pl-3">
                  <span className="block font-technical text-[10px] font-bold uppercase text-[#777777]">LOGISTICS</span>
                  <span className="font-technical text-xs font-bold text-[#D9222A]">Pan-India Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Hero Product Stage (Featured Primus G-15 Projector) */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-xs p-5 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#EEEEEE]">
                  <div>
                    <span className="font-technical text-[10px] font-bold text-[#D9222A] uppercase tracking-wider block">
                      FLAGSHIP SPEC
                    </span>
                    <span className="font-display font-bold text-sm text-[#111111]">
                      G-15 Metal Dual-Beam Fog Lamp
                    </span>
                  </div>
                  <span className="font-technical text-[11px] font-bold bg-[#F7F7F5] border border-[#E5E5E5] px-2 py-0.5 rounded-xs">
                    PE-FL-G15
                  </span>
                </div>

                <div className="relative aspect-4/3 my-4 bg-[#FFFFFF] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                    alt="G-15 Metal Fog Lamp 12V-24V - Primus Enterprises"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-2 left-2 bg-white/95 border border-[#E5E5E5] text-[#111111] font-technical text-[10px] font-semibold px-2 py-1 rounded-xs">
                    Optical Convex Glass • Die-Cast Alloy Shell
                  </div>
                </div>

                {/* Specs Bar */}
                <div className="grid grid-cols-3 gap-2 p-2.5 bg-[#F7F7F5] border border-[#EEEEEE] rounded-xs text-center text-xs font-technical">
                  <div>
                    <span className="text-[10px] text-[#777777] block">DUAL BEAM</span>
                    <span className="font-bold text-[#111111]">3000K / 6000K</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] block">WATERPROOF</span>
                    <span className="font-bold text-[#111111]">IP68 Sealed</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] block">MIN ORDER</span>
                    <span className="font-bold text-[#D9222A]">20 Pairs</span>
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    onClick={() => onNavigate('/products/g-15-metal-fog-lamp-12v-24v')}
                    className="w-full py-2.5 bg-white hover:bg-[#111111] hover:text-white border border-[#111111] font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Engineering Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT CATEGORIES */}
      <section className="py-16 bg-[#FFFFFF] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E5E5E5]">
            <div>
              <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                SYSTEMATIC CATEGORIZATION
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Automotive Product Range
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/products')}
              className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#D9222A] flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All Catalogue Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => onNavigate(`/category/${cat.slug}`)}
                className="bg-white border border-[#E5E5E5] hover:border-[#111111] rounded-xs overflow-hidden transition-all duration-200 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="aspect-16/10 bg-[#F7F7F5] overflow-hidden relative border-b border-[#EEEEEE]">
                    <img
                      src={cat.category_image}
                      alt={cat.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-white/90 border border-[#E5E5E5] text-[#111111] font-technical text-[10px] font-bold px-2 py-0.5 rounded-xs">
                      {cat.product_count !== undefined ? `${cat.product_count} Products` : 'Catalogue'}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-base text-[#111111] group-hover:text-[#D9222A] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="font-display text-xs text-[#555555] mt-1.5 line-clamp-2 leading-relaxed">
                      {cat.short_description}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-[#EEEEEE] flex items-center justify-between font-technical text-xs font-bold text-[#111111] group-hover:text-[#D9222A] transition-colors">
                    <span>EXPLORE CATEGORY</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED PRODUCTS */}
      <section className="py-16 bg-[#F7F7F5] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#E5E5E5]">
            <div>
              <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                ENGINEERED SPECIFICATIONS
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Featured Product Showcase
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/products')}
                className="px-4 py-2 bg-white hover:bg-[#111111] hover:text-white border border-[#111111] font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Browse Full Catalogue
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayFeatured.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                settings={settings}
                onViewProduct={(slug) => onNavigate(`/products/${slug}`)}
                onOpenEnquiry={(name, sku) => onOpenEnquiry(name, sku)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY PRIMUS ENTERPRISES */}
      <section className="py-16 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-2">
              MANUFACTURING & WHOLESALE STANDARDS
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
              Why Wholesale Distributors Choose Primus
            </h2>
            <p className="font-display text-sm text-[#555555] mt-3">
              Based in Bengali Colony, Sant Nagar, Burari, New Delhi, Primus Enterprises specializes in high-reliability automotive electrical components built for rigorous Indian transport conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                AUTOMOTIVE PRODUCT RANGE
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Comprehensive specialized portfolio spanning fog lamps, motorcycle indicators, DC step-down converters, electronic flasher relays, and commercial vehicle roof lights.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                QUALITY-FOCUSED PRODUCTS
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Tested against severe vibration, ingress water penetration, and thermal overload. Die-cast aluminum housings and epoxy potting ensure sustained road life.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                PAN-INDIA BUSINESS SUPPORT
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Centralized dispatch from our North Delhi facility with established transport tie-ups providing secure palletized and carton delivery to all states and union territories.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                WHOLESALE & B2B SUPPORT
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Direct factory pricing with competitive tiered margins for regional stockists, fleet suppliers, and automotive electrical retailers with complete GST tax invoicing.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                REAL SPECIFICATION HONESTY
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                No inflated lumen claims or fake specifications. Every operating voltage, wattage rating, and material composition is documented with technical precision.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-[#FFFFFF] hover:border-[#111111] transition-colors">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] font-bold mb-4 rounded-xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                RAPID WHATSAPP QUOTES
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Enquire directly on WhatsApp with pre-filled product SKU information for instant response on dispatch schedule, MOQ carton weights, and distributor rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PRODUCT DISCOVERY & SPEC SEARCH */}
      <section className="py-16 bg-[#F7F7F5] border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                FAST SPECIFICATION RETRIEVAL
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                Live Product Discovery
              </h2>
            </div>
            <p className="font-display text-xs text-[#555555] max-w-sm">
              Search by SKU code (e.g. "G-15", "D-78"), voltage ("12V", "24V"), or product application.
            </p>
          </div>

          {/* Search Controls */}
          <div className="bg-white border border-[#E5E5E5] p-4 rounded-xs mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-[#777777] absolute left-3 top-3" />
              <input
                type="text"
                value={heroSearchQuery}
                onChange={(e) => setHeroSearchQuery(e.target.value)}
                placeholder="Search 'G-15', '12V', 'indicator', 'fan'..."
                className="w-full h-10 pl-9 pr-4 text-xs font-display border border-[#E5E5E5] focus:border-[#111111] outline-hidden rounded-xs"
              />
            </div>

            {/* Category Segmented Filter */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              <button
                onClick={() => setActiveCategoryFilter('all')}
                className={`px-3 py-1.5 font-technical text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategoryFilter === 'all'
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#F7F7F5] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
                }`}
              >
                All Products ({products.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategoryFilter(c.id)}
                  className={`px-3 py-1.5 font-technical text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategoryFilter === c.id
                      ? 'bg-[#111111] text-white'
                      : 'bg-[#F7F7F5] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
                  }`}
                >
                  {c.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discoveryProducts.slice(0, 8).map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                settings={settings}
                onViewProduct={(slug) => onNavigate(`/products/${slug}`)}
                onOpenEnquiry={(name, sku) => onOpenEnquiry(name, sku)}
              />
            ))}
          </div>

          {discoveryProducts.length === 0 && (
            <div className="py-12 text-center bg-white border border-[#E5E5E5] p-8 rounded-xs text-[#555555]">
              <p className="font-display font-semibold text-sm text-[#111111]">No products found matching your filter criteria.</p>
              <button
                onClick={() => {
                  setHeroSearchQuery('');
                  setActiveCategoryFilter('all');
                }}
                className="mt-3 px-4 py-2 bg-[#111111] text-white font-technical text-xs font-bold uppercase rounded-xs cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6 — B2B ENQUIRY CTA */}
      <section className="py-20 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3 py-1 bg-[#222222] border border-[#333333] font-technical text-[11px] font-bold uppercase tracking-[0.2em] text-[#D9222A] rounded-full">
              B2B PROCUREMENT & WHOLESALE CONTRACTS
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              LOOKING FOR AUTOMOTIVE PRODUCTS IN BULK?
            </h2>

            <p className="font-display text-base text-[#AAAAAA] leading-relaxed">
              Talk directly to Primus Enterprises in New Delhi. We assist distributors, OEM bodybuilders, state stockists and fleet procurement managers with wholesale pricing, carton packing, and priority freight dispatch.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#E5E5E5] text-[#111111] font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>SEND ENQUIRY FORM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-technical text-[#777777]">
              <span>BURARI, NEW DELHI, INDIA</span>
              <span>•</span>
              <span>TEL: {settings.phone}</span>
              <span>•</span>
              <span>GSTIN: {settings.gstin}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
