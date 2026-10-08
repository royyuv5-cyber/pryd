import React, { useState } from 'react';
import { Search, Phone, MessageSquare, Menu, X, FileText, ChevronRight, ShieldCheck } from 'lucide-react';
import { SiteSettings } from '../types.ts';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  settings: SiteSettings;
  onOpenSearch: () => void;
  onOpenEnquiry: (productName?: string, sku?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  settings,
  onOpenSearch,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'CATEGORIES', path: '/categories' },
    { label: 'ABOUT', path: '/about' },
    { label: 'CATALOGUE', path: '/catalogue' },
    { label: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanWhatsAppNumber = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const whatsAppUrl = `https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(
    'Hello Primus Enterprises, I would like to enquire about wholesale automotive products, MOQ and pricing catalogue.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E5E5]">
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] text-white py-1.5 px-4 text-xs font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D9222A] animate-pulse"></span>
            <span className="font-technical text-[11px] uppercase tracking-wider text-[#E5E5E5]">
              {settings.header_announcement || 'DIRECT MANUFACTURER & WHOLESALE SUPPLY • PAN-INDIA DISPATCH'}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] font-technical text-[#AAAAAA]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D9222A]" />
              GST REGISTERED: {settings.gstin || '07AAOFP1234F1Z8'}
            </span>
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="hover:text-white transition-colors flex items-center gap-1 text-[#E5E5E5]"
            >
              <Phone className="w-3 h-3 text-[#D9222A]" />
              {settings.phone}
            </a>
            <button
              onClick={() => handleNavClick('/admin')}
              className="hover:text-white text-[10px] text-[#777777] uppercase tracking-widest pl-2 border-l border-[#333333]"
            >
              CMS Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#111111] border border-[#111111] flex items-center justify-center rounded-sm shadow-xs">
                <span className="font-display font-extrabold text-white text-lg tracking-tighter">P</span>
                <span className="w-1.5 h-1.5 bg-[#D9222A] rounded-full self-end mb-1 ml-0.5"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-[18px] sm:text-[20px] tracking-tight text-[#111111] leading-tight flex items-center gap-1">
                  PRIMUS <span className="text-[#555555] font-semibold">ENTERPRISES</span>
                </span>
                <span className="font-technical text-[9px] uppercase tracking-[0.2em] text-[#777777] font-semibold">
                  AUTOMOTIVE LIGHTING & ELECTRICAL • NEW DELHI
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`relative py-2 font-technical text-[13px] font-bold tracking-[0.08em] transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#111111]'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9222A]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-[#555555] hover:text-[#111111] hover:bg-[#F7F7F5] rounded-sm transition-colors border border-[#E5E5E5] flex items-center gap-2 cursor-pointer"
              title="Search catalogue (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#111111]" />
              <span className="hidden xl:inline font-technical text-xs text-[#777777]">Search specs...</span>
            </button>

            {/* WhatsApp Direct CTA */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-[12px] font-bold tracking-[0.06em] uppercase rounded-sm transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WHATSAPP</span>
            </a>

            {/* Enquiry Modal Trigger */}
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111] font-technical text-[12px] font-bold tracking-[0.06em] uppercase rounded-sm transition-colors cursor-pointer"
            >
              <span>ENQUIRY</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#111111] border border-[#E5E5E5] rounded-sm"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] border border-[#E5E5E5] rounded-sm"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#111111]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5E5E5] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? currentPath === '/'
                  : currentPath.startsWith(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full flex items-center justify-between py-3 px-3 text-left font-technical text-sm font-bold tracking-wider rounded-sm ${
                    isActive
                      ? 'bg-[#F7F7F5] text-[#D9222A]'
                      : 'text-[#111111] hover:bg-[#F7F7F5]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#888888]" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E5E5E5] space-y-2.5">
            <button
              onClick={() => {
                onOpenEnquiry();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#111111] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-sm text-center"
            >
              SEND B2B WHOLESALE ENQUIRY
            </button>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#D9222A] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-sm text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>DIRECT WHATSAPP CHAT</span>
            </a>
          </div>

          <div className="pt-2 text-[11px] font-technical text-[#777777] flex justify-between items-center">
            <span>BURARI, NEW DELHI, INDIA</span>
            <button
              onClick={() => handleNavClick('/admin')}
              className="text-[#D9222A] underline font-semibold"
            >
              ADMIN CMS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
