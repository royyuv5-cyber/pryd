import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, FileDown, ArrowUpRight, MessageSquare } from 'lucide-react';
import { SiteSettings, Category } from '../types.ts';

interface FooterProps {
  settings: SiteSettings;
  categories: Category[];
  onNavigate: (path: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  settings,
  categories,
  onNavigate,
  onOpenEnquiry,
}) => {
  const cleanPhone = (settings.phone || '+919811234567').replace(/[^0-9]/g, '');
  const cleanWhatsApp = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');

  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] text-[#111111] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Header */}
        <div className="border border-[#E5E5E5] bg-[#F7F7F5] p-6 mb-16 rounded-xs grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xs bg-white border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 text-[#D9222A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                DIRECT MANUFACTURER & WHOLESALE
              </h4>
              <p className="font-display text-xs text-[#555555] mt-1">
                Verified B2B automotive lighting & electrical components engineered for Indian road durability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xs bg-white border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 text-[#D9222A]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                NEW DELHI DISPATCH HUB
              </h4>
              <p className="font-display text-xs text-[#555555] mt-1">
                Daily freight dispatch from Sant Nagar, Burari, New Delhi to distributors across all Indian states.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xs bg-white border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 text-[#D9222A]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                B2B BULK ENQUIRY ASSISTANCE
              </h4>
              <p className="font-display text-xs text-[#555555] mt-1">
                Direct WhatsApp and quotation response for state wholesalers, fleet operators and retailers.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Column Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-[#E5E5E5]">
          {/* Column 1: Brand & Registration */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#111111] flex items-center justify-center rounded-xs">
                <span className="font-display font-black text-white text-base">P</span>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-[#111111]">
                PRIMUS ENTERPRISES
              </span>
            </div>
            <p className="font-display text-xs text-[#555555] leading-relaxed">
              Manufacturer, wholesaler and distributor of high-durability automotive fog lamps, motorcycle indicators, DC-DC step-down converters, electronic flashers and commercial vehicle lighting.
            </p>
            <div className="space-y-1.5 pt-2 text-xs font-technical text-[#555555]">
              <div className="flex items-center gap-2">
                <span className="text-[#888888] uppercase text-[10px] tracking-wider">ESTABLISHED:</span>
                <span className="font-bold text-[#111111]">{settings.established_year || '2016'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#888888] uppercase text-[10px] tracking-wider">GSTIN:</span>
                <span className="font-bold text-[#111111]">{settings.gstin}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#888888] uppercase text-[10px] tracking-wider">PROPRIETOR:</span>
                <span className="font-bold text-[#111111]">{settings.ceo_name}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product Categories */}
          <div>
            <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              PRODUCT CATEGORIES
            </h3>
            <ul className="space-y-2.5 text-xs font-technical">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate(`/category/${cat.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#555555] hover:text-[#D9222A] transition-colors flex items-center justify-between w-full group text-left cursor-pointer"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#D9222A]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: B2B Navigation */}
          <div>
            <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              COMMERCIAL CATALOGUE
            </h3>
            <ul className="space-y-2.5 text-xs font-technical text-[#555555]">
              <li>
                <button
                  onClick={() => {
                    onNavigate('/products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Complete Product Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/catalogue');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#111111] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#D9222A]" />
                  Download B2B PDF Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Manufacturing & Quality Assurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry()}
                  className="hover:text-[#111111] transition-colors cursor-pointer"
                >
                  Request Wholesale Quotation
                </button>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111111] transition-colors"
                >
                  XML Sitemap (Google Index)
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('/admin');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#888888] hover:text-[#D9222A] transition-colors cursor-pointer pt-2"
                >
                  Admin CMS Login →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Address & Contact */}
          <div>
            <h3 className="font-technical text-xs font-bold uppercase tracking-[0.14em] text-[#111111] mb-4">
              FACTORY & DISPATCH OFFICE
            </h3>
            <div className="space-y-3 text-xs font-display text-[#555555]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D9222A] flex-shrink-0 mt-0.5" />
                <span>
                  {settings.address}, {settings.city} - {settings.pincode}, {settings.country}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D9222A] flex-shrink-0" />
                <a href={`tel:${cleanPhone}`} className="hover:text-[#111111] font-technical font-semibold">
                  {settings.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D9222A] flex-shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-[#111111] font-technical">
                  {settings.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
                    'Hello Primus Enterprises, I am contacting you from the official website catalogue for B2B wholesale enquiries.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-[#F7F7F5] border border-[#E5E5E5] hover:border-[#111111] text-[#111111] font-technical text-xs font-bold rounded-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D9222A]" />
                  <span>WhatsApp Business Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SEO & Copyright Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-technical text-[#777777]">
          <div>
            © {new Date().getFullYear()} PRIMUS ENTERPRISES. All Rights Reserved. Automotive Lighting & Electrical B2B Catalogue.
          </div>
          <div className="flex items-center gap-6">
            <span>New Delhi, India</span>
            <span>•</span>
            <span>Non-Transactional B2B Platform</span>
            <span>•</span>
            <a href="/robots.txt" className="hover:text-[#111111]">robots.txt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
