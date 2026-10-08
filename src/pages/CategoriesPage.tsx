import React from 'react';
import { ChevronRight, ArrowRight, Layers, FileDown } from 'lucide-react';
import { Category, Product, SiteSettings } from '../types.ts';
import { SEOHead } from '../components/SEOHead.tsx';

interface CategoriesPageProps {
  categories: Category[];
  products: Product[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  categories,
  products,
  settings,
  onNavigate,
}) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title="Product Categories | Automotive Lighting & Electrical | Primus Enterprises"
        description="Explore all automotive lighting categories from Primus Enterprises: fog lamps, motorcycle indicators, DC converters, electronic flashers and commercial roof lights."
        canonicalUrl="https://www.primusenterprises.in.net/categories"
      />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111111] font-bold">CATEGORIES</span>
          </nav>

          <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
            CATALOGUE TAXONOMY
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] tracking-tight">
            Automotive Categories
          </h1>
          <p className="font-display text-sm text-[#555555] mt-1.5 max-w-2xl">
            Structured classification of Primus Enterprises' automotive components, engineered for motorcycle manufacturers, automotive retailers, fleet bodybuilders, and electrical distributors.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const count = products.filter((p) => p.category_id === cat.id && p.status === 'published').length;
            return (
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
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/95 border border-[#E5E5E5] font-technical text-xs font-bold px-2 py-0.5 rounded-xs text-[#111111]">
                      {count} Products
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-display font-bold text-lg text-[#111111] group-hover:text-[#D9222A] transition-colors">
                      {cat.name}
                    </h2>
                    <p className="font-display text-xs text-[#555555] mt-2 line-clamp-3 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#EEEEEE] flex items-center justify-between font-technical text-xs font-bold text-[#111111] group-hover:text-[#D9222A] transition-colors">
                    <span>EXPLORE PRODUCTS</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
