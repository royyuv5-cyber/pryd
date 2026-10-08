import React from 'react';
import { ChevronRight, ArrowRight, FileDown, Layers, HelpCircle } from 'lucide-react';
import { Category, Product, SiteSettings } from '../types.ts';
import { ProductCard } from '../components/ProductCard.tsx';
import { SEOHead } from '../components/SEOHead.tsx';

interface CategoryPageProps {
  category: Category;
  products: Product[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string, sku?: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  products,
  settings,
  onNavigate,
  onOpenEnquiry,
}) => {
  const categoryProducts = products.filter(
    (p) => p.category_id === category.id && p.status === 'published'
  );

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: category.seo_title || `${category.name} | Primus Enterprises`,
      description: category.seo_description || category.description,
      url: category.canonical_url || `https://www.primusenterprises.in.net/category/${category.slug}`,
      isPartOf: {
        '@type': 'WebSite',
        name: 'Primus Enterprises',
        url: 'https://www.primusenterprises.in.net'
      }
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
          name: 'Categories',
          item: 'https://www.primusenterprises.in.net/categories',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `https://www.primusenterprises.in.net/category/${category.slug}`,
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title={category.seo_title || `${category.name} | Automotive Products | Primus Enterprises`}
        description={category.seo_description || category.short_description}
        canonicalUrl={category.canonical_url || `https://www.primusenterprises.in.net/category/${category.slug}`}
        ogImage={category.og_image || category.category_image}
        structuredData={structuredData}
      />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3 text-[#AAAAAA]" />
            <button onClick={() => onNavigate('/categories')} className="hover:text-[#111111] cursor-pointer">
              CATEGORIES
            </button>
            <ChevronRight className="w-3 h-3 text-[#AAAAAA]" />
            <span className="text-[#D9222A] font-bold">{category.name.toUpperCase()}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
                CATEGORY CLASSIFICATION
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
                {category.name}
              </h1>
              <p className="font-display text-sm text-[#555555] mt-2 max-w-3xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => onOpenEnquiry(category.name)}
                className="px-5 py-2.5 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer shadow-xs"
              >
                Category Wholesale Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center justify-between text-xs font-technical text-[#777777] mb-6 pb-2 border-b border-[#EEEEEE]">
          <span>
            SHOWING <strong className="text-[#111111]">{categoryProducts.length}</strong> PRODUCTS IN {category.name.toUpperCase()}
          </span>
          <button
            onClick={() => onNavigate('/products')}
            className="text-[#111111] hover:text-[#D9222A] flex items-center gap-1 cursor-pointer"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((prod) => (
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
          <div className="py-16 text-center bg-[#F7F7F5] border border-[#E5E5E5] p-8 rounded-xs space-y-3">
            <h3 className="font-display font-bold text-base text-[#111111]">
              Catalogue items currently undergoing specification update
            </h3>
            <p className="font-display text-xs text-[#555555] max-w-md mx-auto">
              Please contact Primus Enterprises on WhatsApp for current stock availability in {category.name}.
            </p>
            <button
              onClick={() => onOpenEnquiry(category.name)}
              className="mt-3 px-5 py-2.5 bg-[#D9222A] text-white font-technical text-xs font-bold uppercase rounded-xs cursor-pointer"
            >
              Enquire For This Category
            </button>
          </div>
        )}

        {/* Category Educational FAQ */}
        <div className="mt-16 p-8 border border-[#E5E5E5] bg-[#F7F7F5] rounded-xs max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-4 h-4 text-[#D9222A]" />
            <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
              B2B PROCUREMENT NOTES FOR {category.name.toUpperCase()}
            </h3>
          </div>
          <p className="font-display text-xs text-[#555555] leading-relaxed">
            All units supplied within the {category.name} range are packaged in standard master cartons with individual protective inner boxing. Batch compliance with Indian automotive voltage spikes (up to 32V on commercial chassis) is standard across all electronic configurations.
          </p>
        </div>
      </div>
    </div>
  );
};
