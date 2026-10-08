import React from 'react';
import { MessageSquare, ArrowRight, Shield, Zap } from 'lucide-react';
import { Product, SiteSettings } from '../types.ts';

interface ProductCardProps {
  product: Product;
  settings: SiteSettings;
  onViewProduct: (slug: string) => void;
  onOpenEnquiry: (productName: string, sku: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  settings,
  onViewProduct,
  onOpenEnquiry,
}) => {
  const cleanWhatsAppNumber = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const whatsAppMessage = `Hello Primus Enterprises, I am interested in ${product.product_name} (SKU: ${product.sku}). Please share wholesale details, MOQ and availability.`;
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(whatsAppMessage)}`;

  const shouldShowPrice = (settings.show_price_globally || product.show_price) && product.price;

  return (
    <div className="bg-white border border-[#E5E5E5] hover:border-[#111111] transition-colors duration-150 flex flex-col justify-between group rounded-xs overflow-hidden">
      {/* Top Image Stage */}
      <div>
        <div
          onClick={() => onViewProduct(product.slug)}
          className="relative aspect-16/10 bg-[#FFFFFF] border-b border-[#EEEEEE] overflow-hidden cursor-pointer flex items-center justify-center p-4"
        >
          {/* Status / Featured Badge */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
            <span className="bg-[#F7F7F5] border border-[#E5E5E5] text-[#111111] font-technical text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              {product.category_name || 'Automotive'}
            </span>
            {product.featured && (
              <span className="bg-[#D9222A] text-white font-technical text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                FEATURED
              </span>
            )}
          </div>

          {/* SKU Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white/95 border border-[#E5E5E5] text-[#555555] font-technical text-[10px] font-bold px-2 py-0.5 rounded-xs">
              {product.sku}
            </span>
          </div>

          {/* Product Image */}
          <img
            src={product.primary_image}
            alt={product.primary_image_alt || `${product.product_name} - Primus Enterprises`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="100%" height="100%" fill="%23F7F7F5"/><text x="50%" y="45%" font-family="sans-serif" font-weight="bold" font-size="14" fill="%23111111" text-anchor="middle">PRIMUS ENTERPRISES</text><text x="50%" y="58%" font-family="sans-serif" font-size="11" fill="%23777777" text-anchor="middle">Automotive Component</text></svg>`;
            }}
            className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="p-5">
          <div className="flex items-center justify-between text-[11px] font-technical text-[#777777] mb-1.5">
            <span className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#D9222A]" />
              {product.voltage}
            </span>
            <span className="uppercase tracking-wider">{product.country_of_origin}</span>
          </div>

          <h3
            onClick={() => onViewProduct(product.slug)}
            className="font-display font-bold text-base sm:text-lg text-[#111111] group-hover:text-[#D9222A] transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {product.product_name}
          </h3>

          <p className="font-display text-xs text-[#555555] mt-2 line-clamp-2 leading-relaxed">
            {product.short_description}
          </p>

          {/* Optional Price Display if enabled by business */}
          {shouldShowPrice && (
            <div className="mt-3 pt-3 border-t border-[#EEEEEE] flex items-baseline gap-2">
              <span className="font-technical text-xs text-[#777777] uppercase">Wholesale:</span>
              <span className="font-technical font-bold text-base text-[#111111]">
                ₹{product.price?.toLocaleString('en-IN')}
              </span>
              {product.price_unit && (
                <span className="font-technical text-[11px] text-[#777777]">/ {product.price_unit}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Technical Spec Matrix & CTAs */}
      <div>
        {/* Persistent 3-Cell Spec Matrix */}
        <div className="grid grid-cols-3 border-t border-b border-[#EEEEEE] bg-[#F7F7F5] divide-x divide-[#EEEEEE] text-center py-2 px-1">
          <div className="px-1">
            <span className="block font-technical text-[9px] uppercase tracking-wider text-[#777777]">
              VOLTAGE
            </span>
            <span className="block font-technical text-[11px] font-bold text-[#111111] truncate">
              {product.voltage.split(' ')[0]}
            </span>
          </div>
          <div className="px-1">
            <span className="block font-technical text-[9px] uppercase tracking-wider text-[#777777]">
              INGRESS
            </span>
            <span className="block font-technical text-[11px] font-bold text-[#111111] truncate">
              {product.ip_rating || 'IP65'}
            </span>
          </div>
          <div className="px-1">
            <span className="block font-technical text-[9px] uppercase tracking-wider text-[#777777]">
              MIN ORDER
            </span>
            <span className="block font-technical text-[11px] font-bold text-[#D9222A] truncate">
              {product.minimum_order_quantity.split(' ')[0]} {product.minimum_order_quantity.split(' ')[1] || 'PCS'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-3 bg-white grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewProduct(product.slug)}
            className="w-full py-2.5 px-2 bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111] font-technical text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>VIEW SPEC</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onOpenEnquiry(product.product_name, product.sku)}
            className="w-full py-2.5 px-2 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-[11px] font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENQUIRE</span>
          </button>
        </div>
      </div>
    </div>
  );
};
