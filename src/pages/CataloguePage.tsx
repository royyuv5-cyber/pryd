import React, { useState } from 'react';
import { ChevronRight, FileDown, CheckCircle, MessageSquare, ArrowRight, ShieldCheck, Send } from 'lucide-react';
import { Product, Category, SiteSettings } from '../types.ts';
import { api } from '../services/api.ts';
import { SEOHead } from '../components/SEOHead.tsx';

interface CataloguePageProps {
  products: Product[];
  categories: Category[];
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string, sku?: string) => void;
}

export const CataloguePage: React.FC<CataloguePageProps> = ({
  products,
  categories,
  settings,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [buyerForm, setBuyerForm] = useState({
    name: '',
    firm_name: '',
    phone: '',
    city: '',
    state: '',
    business_type: 'Wholesaler / Distributor',
  });
  const [requested, setRequested] = useState(false);
  const [loading, setLoading] = useState(false);

  const cleanWhatsApp = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');

  const handleBrochureRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerForm.name || !buyerForm.phone) return;
    setLoading(true);
    try {
      await api.submitEnquiry({
        type: 'catalogue_request',
        name: buyerForm.name,
        company_name: buyerForm.firm_name,
        phone: buyerForm.phone,
        email: '',
        city: buyerForm.city,
        state: buyerForm.state,
        quantity: 'Full B2B Product Catalogue PDF & Price Sheet',
        message: `Catalogue PDF request from ${buyerForm.name} (${buyerForm.firm_name || 'Individual Buyer'}). Business type: ${buyerForm.business_type}.`,
      });
      setRequested(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDirectWhatsAppPDF = () => {
    const msg = `Hello Primus Enterprises, my name is ${buyerForm.name || 'a wholesale dealer'}${
      buyerForm.firm_name ? ` from ${buyerForm.firm_name}` : ''
    }. Please share your complete PDF automotive lighting product catalogue and wholesale trade terms.`;
    window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title="Download B2B Automotive Catalogue | Primus Enterprises"
        description="Request the complete Primus Enterprises automotive lighting product catalogue and wholesale price list. Fog lamps, indicators, DC converters and accessories."
        canonicalUrl="https://www.primusenterprises.in.net/catalogue"
      />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111111] font-bold">DIGITAL CATALOGUE</span>
          </nav>

          <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
            B2B WHOLESALE COMPENDIUM
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Automotive Catalogue & PDF
          </h1>
          <p className="font-display text-base text-[#555555] mt-2 max-w-2xl">
            Access complete technical specifications, packaging sizes, master carton counts, and distributor terms for Primus Enterprises' entire lighting line.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Instant PDF Request Form */}
          <div className="lg:col-span-5 bg-[#F7F7F5] border border-[#E5E5E5] p-6 sm:p-8 rounded-xs space-y-5">
            <div className="border-b border-[#E5E5E5] pb-4">
              <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#D9222A] block mb-1">
                DISTRIBUTOR ACCESS
              </span>
              <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111]">
                Request B2B Price & Spec PDF
              </h2>
              <p className="font-display text-xs text-[#555555] mt-1">
                Enter your firm details to receive the latest compiled digital brochure directly on WhatsApp and email.
              </p>
            </div>

            {requested ? (
              <div className="py-8 text-center space-y-4 bg-white border border-[#E5E5E5] p-6 rounded-xs">
                <CheckCircle className="w-10 h-10 text-[#D9222A] mx-auto" />
                <h3 className="font-display font-bold text-lg text-[#111111]">
                  CATALOGUE REQUEST LOGGED
                </h3>
                <p className="font-display text-xs text-[#555555]">
                  Our New Delhi dispatch sales team has received your request. To receive the PDF instantly on your phone:
                </p>
                <button
                  onClick={handleDirectWhatsAppPDF}
                  className="w-full py-3 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Receive PDF Instantly via WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleBrochureRequest} className="space-y-4">
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={buyerForm.name}
                    onChange={(e) => setBuyerForm({ ...buyerForm, name: e.target.value })}
                    placeholder="e.g. Anil Gupta"
                    className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                  />
                </div>

                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Firm / Business Name
                  </label>
                  <input
                    type="text"
                    value={buyerForm.firm_name}
                    onChange={(e) => setBuyerForm({ ...buyerForm, firm_name: e.target.value })}
                    placeholder="e.g. Gupta Auto Traders"
                    className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                  />
                </div>

                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={buyerForm.phone}
                    onChange={(e) => setBuyerForm({ ...buyerForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={buyerForm.city}
                      onChange={(e) => setBuyerForm({ ...buyerForm, city: e.target.value })}
                      placeholder="e.g. Surat"
                      className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={buyerForm.state}
                      onChange={(e) => setBuyerForm({ ...buyerForm, state: e.target.value })}
                      placeholder="e.g. Gujarat"
                      className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Your Business Role
                  </label>
                  <select
                    value={buyerForm.business_type}
                    onChange={(e) => setBuyerForm({ ...buyerForm, business_type: e.target.value })}
                    className="w-full h-10 px-3 bg-white border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-technical"
                  >
                    <option value="Wholesaler / Distributor">Wholesaler / Regional Distributor</option>
                    <option value="Automotive Retailer">Automotive Retail Store / Spare Parts Shop</option>
                    <option value="Fleet Operator / OEM">Fleet Operator / Commercial Bodybuilder</option>
                    <option value="E-Commerce / Trader">B2B Trader / Online Seller</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-[#D9222A]" />
                    <span>{loading ? 'TRANSMITTING...' : 'REQUEST OFFICIAL BROCHURE'}</span>
                  </button>
                </div>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={handleDirectWhatsAppPDF}
                    className="text-[#D9222A] hover:underline text-xs font-technical font-semibold flex items-center justify-center gap-1 mx-auto"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Or WhatsApp Us Directly For Instant File</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Interactive Digital Catalogue Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#E5E5E5] pb-4 flex items-center justify-between">
              <div>
                <span className="font-technical text-xs font-bold uppercase tracking-wider text-[#D9222A]">
                  CURRENT INDEX
                </span>
                <h2 className="font-display font-extrabold text-2xl text-[#111111]">
                  Featured Automotive Models
                </h2>
              </div>
              <button
                onClick={() => onNavigate('/products')}
                className="font-technical text-xs font-bold uppercase text-[#111111] hover:text-[#D9222A] flex items-center gap-1"
              >
                <span>Full Catalogue ({products.length})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-4">
              {products.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onNavigate(`/products/${p.slug}`)}
                  className="p-4 bg-white border border-[#E5E5E5] hover:border-[#111111] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.primary_image}
                      alt={p.product_name}
                      className="w-16 h-16 object-cover border border-[#E5E5E5] rounded-xs bg-[#F7F7F5] flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-technical text-[10px] font-bold text-[#D9222A] uppercase">
                          {p.sku}
                        </span>
                        <span className="text-[#888888] text-[10px] font-technical">•</span>
                        <span className="font-technical text-[10px] text-[#777777]">
                          {p.voltage}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-sm text-[#111111] group-hover:text-[#D9222A] transition-colors">
                        {p.product_name}
                      </h3>
                      <p className="font-display text-xs text-[#555555] line-clamp-1">
                        {p.short_description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-[#EEEEEE]">
                    <span className="font-technical text-[11px] font-bold bg-[#F7F7F5] px-2 py-1 rounded-xs text-[#111111]">
                      MOQ: {p.minimum_order_quantity.split(' ')[0]}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-[#111111] transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
