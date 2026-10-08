import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Zap, Layers } from 'lucide-react';
import { Product } from '../types.ts';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (slug: string) => void;
  onSelectCategory: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const filteredProducts = q
    ? products.filter((p) => {
        return (
          p.product_name.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q) ||
          p.product_code.toLowerCase().includes(q) ||
          p.voltage.toLowerCase().includes(q) ||
          p.lighting_type.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          (p.category_name && p.category_name.toLowerCase().includes(q)) ||
          p.features.some((f) => f.toLowerCase().includes(q)) ||
          p.applications.some((a) => a.toLowerCase().includes(q)) ||
          p.compatibility.some((c) => c.toLowerCase().includes(q))
        );
      })
    : [];

  const quickPills = ['G-15', '12V', 'Indicator', 'Fan Type', 'DC Converter', 'Flasher', 'T-10'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white border border-[#111111] max-w-2xl w-full rounded-xs shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E5E5E5] flex items-center gap-3 bg-[#F7F7F5]">
          <Search className="w-5 h-5 text-[#555555] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product name, SKU (e.g. G-15), 12V, voltage, category, application..."
            className="w-full bg-transparent text-sm sm:text-base font-display text-[#111111] placeholder-[#888888] outline-hidden"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="text-[#888888] hover:text-[#111111] p-1"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="font-technical text-[10px] text-[#888888] border border-[#E5E5E5] px-1.5 py-0.5 rounded-xs">
              ESC
            </span>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="p-4 bg-white border-b border-[#E5E5E5]">
            <span className="font-technical text-[11px] font-bold uppercase tracking-wider text-[#777777] block mb-2">
              POPULAR SPEC SEARCHES
            </span>
            <div className="flex flex-wrap gap-1.5">
              {quickPills.map((pill) => (
                <button
                  key={pill}
                  onClick={() => setQuery(pill)}
                  className="px-2.5 py-1 bg-[#F7F7F5] hover:bg-[#111111] hover:text-white border border-[#E5E5E5] font-technical text-xs text-[#555555] rounded-xs transition-colors cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#E5E5E5] p-2 bg-white">
          {query && filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-[#555555] space-y-2">
              <p className="font-display text-sm font-semibold text-[#111111]">
                No exact match found for "{query}"
              </p>
              <p className="font-display text-xs text-[#777777]">
                Try searching for general keywords like "fog lamp", "indicator", "12V", or "flasher".
              </p>
            </div>
          ) : (
            filteredProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => {
                  onSelectProduct(prod.slug);
                  onClose();
                }}
                className="p-3 hover:bg-[#F7F7F5] rounded-xs cursor-pointer flex items-center justify-between gap-4 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={prod.primary_image}
                    alt={prod.primary_image_alt || prod.product_name}
                    className="w-12 h-12 object-cover rounded-xs border border-[#E5E5E5] flex-shrink-0 bg-[#F7F7F5]"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-technical text-[10px] font-bold text-[#D9222A] uppercase tracking-wider">
                        {prod.sku}
                      </span>
                      <span className="font-technical text-[10px] text-[#777777]">
                        {prod.voltage}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-[#111111] truncate group-hover:text-[#D9222A] transition-colors">
                      {prod.product_name}
                    </h4>
                    <p className="font-display text-xs text-[#555555] truncate max-w-md">
                      {prod.category_name} • {prod.lighting_type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="hidden sm:inline font-technical text-[11px] text-[#777777]">
                    MOQ: {prod.minimum_order_quantity.split(' ')[0]}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#F7F7F5] border-t border-[#E5E5E5] flex items-center justify-between text-[11px] font-technical text-[#777777]">
          <span>Direct indexing from Primus Enterprises B2B Database</span>
          <button
            onClick={onClose}
            className="hover:text-[#111111] underline cursor-pointer"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};
