import React, { useState } from 'react';
import { ChevronRight, MapPin, Phone, Mail, MessageSquare, Send, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import { SiteSettings } from '../types.ts';
import { api } from '../services/api.ts';
import { SEOHead } from '../components/SEOHead.tsx';

interface ContactPageProps {
  settings: SiteSettings;
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  settings,
  onNavigate,
}) => {
  const [form, setForm] = useState({
    name: '',
    firm: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const cleanPhone = (settings.phone || '+919811234567').replace(/[^0-9]/g, '');
  const cleanWhatsApp = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setLoading(true);
    try {
      await api.submitEnquiry({
        type: 'contact_form',
        name: form.name,
        company_name: form.firm,
        phone: form.phone,
        email: form.email,
        city: form.city,
        state: form.state,
        message: form.message || 'Direct enquiry submitted via Contact Us page.',
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const whatsAppDirectUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    'Hello Primus Enterprises, I am contacting you regarding automotive lighting wholesale supplies.'
  )}`;

  return (
    <div className="bg-white min-h-screen pb-20">
      <SEOHead
        title="Contact Primus Enterprises | Automotive Lighting Burari New Delhi"
        description="Contact Primus Enterprises in Sant Nagar, Burari, New Delhi for automotive lighting wholesale and B2B distributor enquiries. Phone, WhatsApp, and factory address."
        canonicalUrl="https://www.primusenterprises.in.net/contact"
      />

      {/* Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F7F7F5] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-technical text-[#777777] mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-[#111111] cursor-pointer">
              HOME
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#111111] font-bold">CONTACT & DISPATCH</span>
          </nav>

          <span className="font-technical text-[11px] font-bold uppercase tracking-[0.16em] text-[#D9222A] block mb-1">
            FACTORY & WHOLESALE DESK
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            Contact Primus Enterprises
          </h1>
          <p className="font-display text-base text-[#555555] mt-2 max-w-2xl">
            Reach out directly for wholesale dealership allocations, bulk freight enquiries, and automotive electrical orders.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Address & Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#E5E5E5] bg-[#F7F7F5] p-6 rounded-xs space-y-4">
              <h2 className="font-technical text-xs font-bold uppercase tracking-[0.16em] text-[#111111] border-b border-[#E5E5E5] pb-3">
                REGISTERED FACTORY & WAREHOUSE
              </h2>

              <div className="space-y-4 text-xs font-display">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D9222A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111] font-technical uppercase">FACTORY ADDRESS:</strong>
                    <p className="text-[#555555] leading-relaxed mt-1">
                      {settings.address},<br />
                      {settings.city} - {settings.pincode}, {settings.state}, {settings.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#EEEEEE]">
                  <Phone className="w-5 h-5 text-[#D9222A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111] font-technical uppercase">DIRECT PHONE:</strong>
                    <a href={`tel:${cleanPhone}`} className="text-[#111111] font-technical font-bold hover:underline block mt-0.5">
                      {settings.phone}
                    </a>
                    {settings.secondary_phone && (
                      <a href={`tel:${settings.secondary_phone.replace(/[^0-9]/g, '')}`} className="text-[#555555] font-technical block mt-0.5">
                        {settings.secondary_phone}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#EEEEEE]">
                  <Mail className="w-5 h-5 text-[#D9222A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111] font-technical uppercase">EMAIL DESK:</strong>
                    <a href={`mailto:${settings.email}`} className="text-[#111111] font-technical hover:underline block mt-0.5">
                      {settings.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#EEEEEE]">
                  <Clock className="w-5 h-5 text-[#D9222A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#111111] font-technical uppercase">BUSINESS HOURS:</strong>
                    <p className="text-[#555555] mt-0.5">
                      Monday to Saturday: 09:30 AM – 07:30 PM IST<br />
                      Sunday: Closed (Wholesale Dispatch On Weekdays)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-[#E5E5E5]">
                <a
                  href={whatsAppDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>DIRECT WHATSAPP CHAT</span>
                </a>
              </div>
            </div>

            {/* GSTIN & Registration Card */}
            <div className="border border-[#E5E5E5] p-5 rounded-xs bg-white text-xs font-technical space-y-2">
              <div className="flex justify-between items-center text-[#777777]">
                <span>GST REGISTRATION:</span>
                <span className="font-bold text-[#111111]">{settings.gstin}</span>
              </div>
              <div className="flex justify-between items-center text-[#777777]">
                <span>KEY PERSON:</span>
                <span className="font-bold text-[#111111]">{settings.ceo_name}</span>
              </div>
              <div className="flex justify-between items-center text-[#777777]">
                <span>DELHI POLICE JURISDICTION:</span>
                <span className="text-[#111111]">Burari PS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wholesale Enquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E5E5E5] p-6 sm:p-10 rounded-xs">
            <div className="border-b border-[#E5E5E5] pb-4 mb-6">
              <span className="font-technical text-[10px] font-bold uppercase tracking-widest text-[#D9222A] block mb-1">
                COMMERCIAL INQUIRY
              </span>
              <h2 className="font-display font-extrabold text-2xl text-[#111111]">
                Send Factory Message
              </h2>
              <p className="font-display text-xs text-[#555555] mt-1">
                Fill in your firm details for custom manufacturing, state distributor queries or bulk quotation requests.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#D9222A] mx-auto" />
                <h3 className="font-display font-bold text-xl text-[#111111]">
                  MESSAGE TRANSMITTED TO BURARI DESK
                </h3>
                <p className="font-display text-sm text-[#555555] max-w-md mx-auto">
                  Thank you! Primus Enterprises has logged your commercial inquiry. A sales representative will review your requirement and reach out shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#111111] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Satyendra Rao"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Firm / Company Name
                    </label>
                    <input
                      type="text"
                      value={form.firm}
                      onChange={(e) => setForm({ ...form, firm: e.target.value })}
                      placeholder="e.g. Rao Auto Corporation"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98110 00000"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="business@domain.com"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. New Delhi / Indore"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                  <div>
                    <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      value={form.state}
                      onChange={(e) => setForm({ ...form, state: e.target.value })}
                      placeholder="e.g. Madhya Pradesh"
                      className="w-full h-11 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Requirements & Quantity Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Specify the products you need (e.g. G-15 Fog Lamps, D-78 indicators, DC Converters), estimated carton order, or dealership questions..."
                    className="w-full p-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-xs rounded-xs font-display"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'SENDING INQUIRY...' : 'SUBMIT B2B INQUIRY'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
