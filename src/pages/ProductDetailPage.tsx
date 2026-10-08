import React, { useState } from 'react';
import {
  ChevronRight,
  MessageSquare,
  FileDown,
  ShieldCheck,
  Zap,
  CheckCircle2,
  HelpCircle,
  Truck,
  ArrowRight,
  Maximize2,
  Share2,
  Sliders,
  Layers,
  ChevronDown
} from 'lucide-react';
import { Product, SiteSettings } from '../types.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { SEOHead } from '../components/SEOHead.tsx';

interface ProductDetailPageProps {
  product: Product;
  relatedProducts: Product[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName: string, sku: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  relatedProducts,
  settings,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.primary_image);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'applications' | 'faqs'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  const cleanWhatsApp = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const dynamicWhatsAppMsg = `Hello Primus Enterprises, I am interested in ${product.product_name} (SKU: ${product.sku}). Please share wholesale details, MOQ and availability.`;
  const whatsAppUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(dynamicWhatsAppMsg)}`;

  const shouldShowPrice = (settings.show_price_globally || product.show_price) && product.price;

  // Schema.org Product and BreadcrumbList Structured Data
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.product_name,
      image: [product.primary_image, ...product.gallery_images.map((g) => g.url)],
      description: product.short_description,
      sku: product.sku,
      mpn: product.product_code,
      brand: {
        '@type': 'Brand',
        name: product.brand || 'PRIMUS ENTERPRISES',
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'Primus Enterprises',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New Delhi',
          postalCode: '110084',
          addressCountry: 'India',
        },
      },
      // Note: No fake ratings or fake review spam
      category: product.category_name,
      material: product.material,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.primusenterprises.in.net/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: product.category_name || 'Catalogue',
          item: `https://www.primusenterprises.in.net/category/${product.category_id}`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: product.product_name,
          item: `https://www.primusenterprises.in.net/products/${product.slug}`,
        },
      ],
    },
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const allImages = [
    { url: product.primary_image, alt: product.primary_image_alt || product.product_name },
    ...product.gallery_images.filter((g) => g.url !== product.primary_image),
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title={product.seo_title || `${product.product_name} | Primus Enterprises`}
        description={product.seo_description || product.short_description}
        canonicalUrl={product.canonical_url || `https://www.primusenterprises.in.net/products/${product.slug}`}
        ogImage={product.og_image || product.primary_image}
        noIndex={product.status !== 'published' || product.robots_index === false}
        structuredData={structuredData}
      />

      {/* Breadcrumbs */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center flex-wrap gap-2 text-xs font-technical text-[#777777]">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3 text-[#AAAAAA]" />
            <button onClick={() => onNavigate('/products')} className="hover:text-[#111111] cursor-pointer">
              PRODUCTS
            </button>
            {product.category_name && (
              <>
                <ChevronRight className="w-3 h-3 text-[#AAAAAA]" />
                <button
                  onClick={() => onNavigate(`/category/${product.category_id}`)}
                  className="hover:text-[#111111] cursor-pointer"
                >
                  {product.category_name.toUpperCase()}
                </button>
              </>
            )}
            <ChevronRight className="w-3 h-3 text-[#AAAAAA]" />
            <span className="text-[#111111] font-bold truncate max-w-xs sm:max-w-md">
              {product.product_name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Visual Staging Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Main Image Frame */}
            <div className="bg-white border border-[#E5E5E5] rounded-xs aspect-4/3 relative flex items-center justify-center p-8 overflow-hidden group">
              <img
                src={selectedImage}
                alt={product.primary_image_alt || `${product.product_name} - Primus Enterprises`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="100%" height="100%" fill="%23F7F7F5"/><text x="50%" y="46%" font-family="sans-serif" font-weight="bold" font-size="16" fill="%23111111" text-anchor="middle">PRIMUS ENTERPRISES</text><text x="50%" y="54%" font-family="sans-serif" font-size="12" fill="%23777777" text-anchor="middle">Official Automotive Component</text></svg>`;
                }}
                className="w-full h-full object-contain transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-[#111111] text-white font-technical text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs">
                  {product.voltage}
                </span>
                <span className="bg-[#F7F7F5] border border-[#E5E5E5] text-[#111111] font-technical text-[10px] font-bold px-2 py-0.5 rounded-xs">
                  {product.ip_rating || 'IP68'}
                </span>
              </div>
              <button
                onClick={handleShare}
                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white border border-[#E5E5E5] text-[#555555] hover:text-[#111111] rounded-xs transition-colors cursor-pointer text-xs font-technical flex items-center gap-1.5"
                title="Share product link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>
            </div>

            {/* Thumbnail Navigation Row */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img.url)}
                    className={`w-20 h-20 rounded-xs border p-1 bg-white flex-shrink-0 cursor-pointer transition-colors ${
                      selectedImage === img.url
                        ? 'border-[#111111] ring-1 ring-[#111111]'
                        : 'border-[#E5E5E5] hover:border-[#888888]'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect width="100%" height="100%" fill="%23F7F7F5"/><text x="50%" y="55%" font-family="sans-serif" font-weight="bold" font-size="9" fill="%23111111" text-anchor="middle">PRIMUS</text></svg>`;
                      }}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Quality & Manufacturing Assurance Box */}
            <div className="border border-[#E5E5E5] bg-[#F7F7F5] p-5 rounded-xs grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#D9222A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-technical font-bold uppercase block text-[#111111]">
                    VIBRATION TESTED
                  </span>
                  <span className="text-[#555555] text-[11px]">
                    Built for extreme Indian road shocks & bumps.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Zap className="w-4 h-4 text-[#D9222A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-technical font-bold uppercase block text-[#111111]">
                    VOLTAGE STABLE
                  </span>
                  <span className="text-[#555555] text-[11px]">
                    Constant current IC prevents burnout surges.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-[#D9222A] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-technical font-bold uppercase block text-[#111111]">
                    DELHI DISPATCH
                  </span>
                  <span className="text-[#555555] text-[11px]">
                    Secure carton packaging for interstate transport.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Commercial Product Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              {/* Category & Origin Header */}
              <div className="flex items-center justify-between text-xs font-technical text-[#777777] mb-2">
                <span className="uppercase font-bold tracking-wider text-[#D9222A]">
                  {product.category_name}
                </span>
                <span className="uppercase tracking-wider">
                  ORIGIN: {product.country_of_origin}
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight leading-tight">
                {product.product_name}
              </h1>

              {/* SKU & Code Line */}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#EEEEEE] text-xs font-technical">
                <span className="text-[#777777]">SKU:</span>
                <span className="font-bold text-[#111111] bg-[#F7F7F5] px-2 py-0.5 border border-[#E5E5E5] rounded-xs">
                  {product.sku}
                </span>
                <span className="text-[#777777] ml-2">CODE:</span>
                <span className="font-bold text-[#555555]">{product.product_code}</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="font-display text-sm text-[#555555] leading-relaxed border-b border-[#EEEEEE] pb-4">
              {product.short_description}
            </p>

            {/* Optional Price Display */}
            {shouldShowPrice && (
              <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs flex items-baseline justify-between">
                <div>
                  <span className="font-technical text-[10px] uppercase text-[#777777] block">
                    INDICATIVE B2B RATE
                  </span>
                  <span className="font-display font-black text-2xl text-[#111111]">
                    ₹{product.price?.toLocaleString('en-IN')}
                  </span>
                  {product.price_unit && (
                    <span className="font-technical text-xs text-[#555555] ml-1">/ {product.price_unit}</span>
                  )}
                </div>
                <span className="font-technical text-[10px] text-[#777777] uppercase">
                  Ex-Factory Delhi (Excl. GST)
                </span>
              </div>
            )}

            {/* Key Commercial Metrics Table */}
            <div className="border border-[#E5E5E5] rounded-xs divide-y divide-[#EEEEEE] text-xs font-technical">
              <div className="grid grid-cols-2 p-2.5 bg-white">
                <span className="text-[#777777] uppercase">MINIMUM ORDER (MOQ)</span>
                <span className="font-bold text-[#D9222A] text-right">{product.minimum_order_quantity}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-[#F7F7F5]">
                <span className="text-[#777777] uppercase">PACKAGING SIZE</span>
                <span className="font-semibold text-[#111111] text-right">{product.pack_size}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-white">
                <span className="text-[#777777] uppercase">OPERATING VOLTAGE</span>
                <span className="font-semibold text-[#111111] text-right">{product.voltage}</span>
              </div>
              <div className="grid grid-cols-2 p-2.5 bg-[#F7F7F5]">
                <span className="text-[#777777] uppercase">WARRANTY TERMS</span>
                <span className="font-semibold text-[#111111] text-right">{product.warranty}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-2.5 pt-2">
              {/* WhatsApp Direct CTA */}
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2.5 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WHATSAPP WHOLESALE ENQUIRY</span>
              </a>

              {/* Quotation Form Modal Trigger */}
              <button
                onClick={() => onOpenEnquiry(product.product_name, product.sku)}
                className="w-full py-3.5 px-4 bg-white hover:bg-[#111111] hover:text-white border border-[#111111] text-[#111111] font-technical text-xs font-bold uppercase tracking-[0.1em] rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>REQUEST WRITTEN QUOTATION</span>
              </button>

              <div className="text-center pt-1">
                <span className="font-technical text-[10px] text-[#777777] uppercase tracking-wider">
                  Direct Response From Mr. Satyadev Pandit / Factory Sales Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs / Detailed Technical Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="border-b border-[#E5E5E5] flex gap-4 overflow-x-auto">
          {[
            { id: 'overview', label: 'PRODUCT OVERVIEW' },
            { id: 'specs', label: 'SPECIFICATION MATRIX' },
            { id: 'applications', label: 'VEHICLE COMPATIBILITY' },
            { id: 'faqs', label: 'TECHNICAL FAQS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 font-technical text-xs font-bold uppercase tracking-[0.12em] border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#D9222A] text-[#111111]'
                  : 'border-transparent text-[#777777] hover:text-[#111111]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#D9222A] mb-2">
                  ENGINEERING DESCRIPTION
                </h3>
                <p className="font-display text-sm text-[#333333] leading-relaxed max-w-4xl">
                  {product.long_description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
                  KEY FEATURES & DESIGN ADVANTAGES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs flex items-start gap-2.5 text-xs font-display text-[#111111]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D9222A] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-4xl">
              <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
                FULL TECHNICAL DATA SHEET
              </h3>
              <div className="border border-[#E5E5E5] rounded-xs overflow-hidden">
                <table className="w-full text-xs font-display">
                  <tbody className="divide-y divide-[#EEEEEE]">
                    {[
                      { label: 'PRODUCT SKU / MODEL', value: product.sku },
                      { label: 'PRODUCT CODE', value: product.product_code },
                      { label: 'BRAND', value: product.brand },
                      { label: 'OPERATING VOLTAGE', value: product.voltage },
                      { label: 'POWER WATTAGE', value: product.wattage },
                      { label: 'LIGHT SOURCE', value: product.light_source },
                      { label: 'LIGHTING TYPE', value: product.lighting_type },
                      { label: 'OPTICAL LENS TYPE', value: product.lens_type },
                      { label: 'CHASSIS / BODY MATERIAL', value: product.material },
                      { label: 'INGRESS RATING', value: product.ip_rating },
                      { label: 'COLOUR SPECIFICATION', value: product.colour },
                      { label: 'MINIMUM ORDER QUANTITY', value: product.minimum_order_quantity },
                      { label: 'STANDARD PACKAGING', value: product.pack_size },
                      { label: 'WARRANTY COVERAGE', value: product.warranty },
                      { label: 'COUNTRY OF MANUFACTURE', value: product.country_of_origin },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F7F7F5]'}>
                        <td className="py-2.5 px-4 font-technical text-[11px] font-bold text-[#555555] uppercase tracking-wider w-1/3">
                          {row.label}
                        </td>
                        <td className="py-2.5 px-4 font-semibold text-[#111111]">
                          {row.value || 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div className="max-w-4xl space-y-6">
              <div>
                <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-3">
                  INTENDED AUTOMOTIVE APPLICATIONS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#F7F7F5] border border-[#E5E5E5] text-xs font-technical text-[#111111] rounded-xs"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-3">
                  COMPATIBLE CHASSIS & VEHICLE MAKES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-display">
                  {product.compatibility.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white border border-[#E5E5E5] rounded-xs flex items-center gap-2 text-[#333333]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D9222A] rounded-full"></span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faqs' && (
            <div className="max-w-3xl space-y-4">
              <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
                FREQUENTLY ASKED WHOLESALE QUESTIONS
              </h3>
              <div className="space-y-3">
                <div className="p-4 border border-[#E5E5E5] rounded-xs bg-[#F7F7F5]">
                  <h4 className="font-display font-bold text-sm text-[#111111]">
                    How does Primus Enterprises handle transport freight for this product?
                  </h4>
                  <p className="font-display text-xs text-[#555555] mt-1.5 leading-relaxed">
                    Goods are packed in reinforced master cartons with internal cushioning and dispatched through licensed road transport agencies from Delhi to transport hubs across India on a "Freight To-Pay" or prepaid basis.
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] rounded-xs bg-[#F7F7F5]">
                  <h4 className="font-display font-bold text-sm text-[#111111]">
                    Can I request sample units before booking a master carton?
                  </h4>
                  <p className="font-display text-xs text-[#555555] mt-1.5 leading-relaxed">
                    Yes, verified B2B dealers and distributors can order sample testing units. Contact our sales desk on WhatsApp for sample dispatch terms.
                  </p>
                </div>
                <div className="p-4 border border-[#E5E5E5] rounded-xs bg-[#F7F7F5]">
                  <h4 className="font-display font-bold text-sm text-[#111111]">
                    Is GST invoice provided with every consignment?
                  </h4>
                  <p className="font-display text-xs text-[#555555] mt-1.5 leading-relaxed">
                    Yes, 100% of commercial supplies are dispatched with a standard tax invoice carrying Primus Enterprises GSTIN: {settings.gstin}.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* A+ PRODUCT CONTENT SECTION */}
      {product.a_plus_enabled && product.a_plus_blocks && product.a_plus_blocks.length > 0 && (
        <section className="mt-12 pt-16 border-t border-[#E5E5E5] bg-[#F7F7F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-technical text-xs font-bold uppercase tracking-[0.18em] text-[#D9222A] block mb-1">
                A+ ENGINEERING DOSSIER
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111]">
                Technical Architecture & Performance
              </h2>
            </div>

            <div className="space-y-12 max-w-5xl mx-auto">
              {product.a_plus_blocks.map((block) => (
                <div key={block.id} className="bg-white border border-[#E5E5E5] p-6 sm:p-10 rounded-xs">
                  {block.type === 'hero' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        {block.subtitle && (
                          <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#D9222A] block mb-1">
                            {block.subtitle}
                          </span>
                        )}
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111]">
                          {block.title}
                        </h3>
                        {block.content && (
                          <p className="font-display text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed">
                            {block.content}
                          </p>
                        )}
                      </div>
                      {block.image && (
                        <div className="aspect-16/10 bg-[#F7F7F5] border border-[#EEEEEE] overflow-hidden rounded-xs">
                          <img
                            src={block.image}
                            alt={block.image_alt || block.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {block.type === 'features_grid' && (
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-[#111111] mb-6 border-b border-[#EEEEEE] pb-3">
                        {block.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {block.bullets?.map((b, idx) => (
                          <div key={idx} className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs text-xs font-display text-[#111111] flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center font-technical text-[10px] font-bold flex-shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {block.type === 'tech_matrix' && (
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-[#111111] mb-6 border-b border-[#EEEEEE] pb-3">
                        {block.title}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {block.specs?.map((spec, idx) => (
                          <div key={idx} className="flex justify-between py-2 border-b border-[#EEEEEE] text-xs">
                            <span className="font-technical text-[#777777] uppercase">{spec.label}</span>
                            <span className="font-bold text-[#111111] text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {block.type === 'faq' && (
                    <div>
                      <h3 className="font-display font-extrabold text-xl text-[#111111] mb-6 border-b border-[#EEEEEE] pb-3">
                        {block.title}
                      </h3>
                      <div className="space-y-4">
                        {block.faqs?.map((faq, idx) => (
                          <div key={idx} className="p-4 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                            <h4 className="font-display font-bold text-sm text-[#111111]">
                              {faq.question}
                            </h4>
                            <p className="font-display text-xs text-[#555555] mt-1.5 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-16 pt-16 border-t border-[#E5E5E5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E5E5]">
              <div>
                <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                  RELATED AUTOMOTIVE LIGHTING
                </span>
                <h3 className="font-display font-extrabold text-2xl text-[#111111]">
                  More from {product.category_name}
                </h3>
              </div>
              <button
                onClick={() => onNavigate(`/category/${product.category_id}`)}
                className="font-technical text-xs font-bold uppercase text-[#111111] hover:text-[#D9222A] flex items-center gap-1 cursor-pointer"
              >
                <span>View Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.slice(0, 3).map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  settings={settings}
                  onViewProduct={(slug) => {
                    onNavigate(`/products/${slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onOpenEnquiry={(name, sku) => onOpenEnquiry(name, sku)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
