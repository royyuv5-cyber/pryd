import React from 'react';
import { ChevronRight, ShieldCheck, Factory, Truck, CheckCircle2, MapPin, Phone, Mail, Award } from 'lucide-react';
import { SiteSettings } from '../types.ts';
import { SEOHead } from '../components/SEOHead.tsx';

interface AboutPageProps {
  settings: SiteSettings;
  onNavigate: (path: string) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  settings,
  onNavigate,
  onOpenEnquiry,
}) => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title="About Primus Enterprises | Automotive Lighting Manufacturer New Delhi"
        description="Learn about Primus Enterprises, established in Burari, New Delhi. Manufacturer, wholesaler and distributor of automotive fog lamps, bike indicators and electrical accessories."
        canonicalUrl="https://www.primusenterprises.in.net/about"
      />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111111] font-bold">ABOUT PRIMUS</span>
          </nav>

          <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
            COMPANY PROFILE & CAPABILITIES
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Primus Enterprises
          </h1>
          <p className="font-display text-base text-[#555555] mt-2 max-w-2xl">
            Automotive lighting and electrical manufacturing firm operating from Bengali Colony, Burari, New Delhi, serving wholesalers and distributors across India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Company Overview & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111]">
              Precision Engineering for Indian Automotive Demands
            </h2>
            <p className="font-display text-sm text-[#444444] leading-relaxed">
              Established in New Delhi under the leadership of Mr. Satyadev Pandit, <strong>Primus Enterprises</strong> has developed a disciplined reputation as a manufacturer, wholesaler, and distributor specializing in automotive LED lighting, motorcycle indicators, DC step-down converters, and commercial vehicle cabin illumination.
            </p>
            <p className="font-display text-sm text-[#444444] leading-relaxed">
              Indian operating conditions—marked by severe temperature variances, monsoons, and high vibration on state highways—demand mechanical resilience. We focus our product architecture on die-cast aluminum heat sinks, impact-resistant optical acrylic lenses, silicone potting for ingress protection, and solid-state constant-current circuitry.
            </p>

            <div className="pt-4 border-t border-[#EEEEEE] grid grid-cols-2 sm:grid-cols-3 gap-4 font-technical text-xs">
              <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                <span className="text-[#777777] block text-[10px] uppercase">HEADQUARTERS</span>
                <span className="font-bold text-[#111111]">Burari, New Delhi</span>
              </div>
              <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                <span className="text-[#777777] block text-[10px] uppercase">ESTABLISHED</span>
                <span className="font-bold text-[#111111]">{settings.established_year || '2016'}</span>
              </div>
              <div className="p-3 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs">
                <span className="text-[#777777] block text-[10px] uppercase">LEADERSHIP</span>
                <span className="font-bold text-[#111111]">{settings.ceo_name}</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Specs & Verified Registration Card */}
          <div className="lg:col-span-5 bg-[#F7F7F5] border border-[#E5E5E5] p-6 rounded-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
              <ShieldCheck className="w-5 h-5 text-[#D9222A]" />
              <h3 className="font-technical text-xs font-bold uppercase tracking-wider text-[#111111]">
                OFFICIAL BUSINESS DOSSIER
              </h3>
            </div>

            <div className="space-y-3 text-xs font-display">
              <div className="flex justify-between py-1.5 border-b border-[#EEEEEE]">
                <span className="font-technical text-[#777777] uppercase text-[11px]">LEGAL NAME</span>
                <span className="font-bold text-[#111111]">PRIMUS ENTERPRISES</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#EEEEEE]">
                <span className="font-technical text-[#777777] uppercase text-[11px]">GSTIN ID</span>
                <span className="font-technical font-bold text-[#111111]">{settings.gstin}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#EEEEEE]">
                <span className="font-technical text-[#777777] uppercase text-[11px]">BUSINESS TYPE</span>
                <span className="font-semibold text-[#111111]">{settings.business_type}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#EEEEEE]">
                <span className="font-technical text-[#777777] uppercase text-[11px]">OPERATING DISPATCH</span>
                <span className="font-semibold text-[#111111]">North Delhi Central Hub</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="font-technical text-[#777777] uppercase text-[11px]">SUPPLY GEOGRAPHY</span>
                <span className="font-semibold text-[#D9222A]">Pan-India All States</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="w-full py-3 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
              >
                Connect With Wholesale Desk
              </button>
            </div>
          </div>
        </div>

        {/* Manufacturing Pillars */}
        <div className="border-t border-[#E5E5E5] pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
              OPERATIONAL DISCIPLINES
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111]">
              Our Quality and Fulfillment Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-white">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] rounded-xs mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                1. PRODUCT DEVELOPMENT
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Direct integration of customer feedback from Indian 2-wheeler mechanics, commercial bodybuilders, and EV conversion garages into mould refinement and thermal heat sink geometry.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-white">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] rounded-xs mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                2. BATCH VOLTAGE TESTING
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Every manufacturing batch undergoes burn-in testing across simulated vehicular voltage fluctuations (9V to 32V) to eliminate infant mortality of LED chips and drivers.
              </p>
            </div>

            <div className="border border-[#E5E5E5] p-6 rounded-xs bg-white">
              <div className="w-10 h-10 bg-[#F7F7F5] border border-[#E5E5E5] flex items-center justify-center text-[#D9222A] rounded-xs mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[#111111]">
                3. FREIGHT INTEGRATION
              </h3>
              <p className="font-display text-xs text-[#555555] mt-2 leading-relaxed">
                Strong logistics partnerships with Delhi transport terminals ensuring cost-effective door or godown delivery to wholesale markets across Maharashtra, Gujarat, UP, Bihar, South India and the North-East.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
