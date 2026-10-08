import React, { useState } from 'react';
import { X, CheckCircle, MessageSquare, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { api } from '../services/api.ts';
import { SiteSettings } from '../types.ts';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  sku?: string;
  productId?: string;
  settings: SiteSettings;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productName = '',
  sku = '',
  productId = '',
  settings,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    quantity: '50 Pieces (Minimum Order Quantity)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await api.submitEnquiry({
        type: 'wholesale_quote',
        name: formData.name,
        company_name: formData.company_name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        product_id: productId,
        product_name: productName || 'General Catalogue Request',
        sku: sku,
        quantity: formData.quantity,
        message: formData.message || `Wholesale quote request for ${productName || 'Primus Automotive Products'}.`,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit enquiry. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  const cleanWhatsApp = (settings.whatsapp_number || '+919811234567').replace(/[^0-9]/g, '');
  const whatsAppDirectMsg = `Hello Primus Enterprises, my name is ${formData.name || 'a buyer'}${
    formData.company_name ? ` from ${formData.company_name}` : ''
  }. I am interested in wholesale pricing for ${productName || 'automotive lighting products'}${
    sku ? ` (SKU: ${sku})` : ''
  }. Quantity: ${formData.quantity}.`;

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(whatsAppDirectMsg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#111111] max-w-lg w-full p-6 sm:p-8 rounded-xs shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#888888] hover:text-[#111111] p-1.5 rounded-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-[#F7F7F5] border border-[#E5E5E5] text-[#D9222A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-display font-extrabold text-xl text-[#111111]">
              ENQUIRY TRANSMITTED
            </h3>
            <p className="font-display text-sm text-[#555555]">
              Thank you! Primus Enterprises wholesale sales desk in Burari, New Delhi has received your enquiry. We will share pricing terms and MOQ availability promptly.
            </p>
            <div className="pt-4 border-t border-[#E5E5E5] space-y-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FOLLOW UP INSTANTLY ON WHATSAPP</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 bg-white border border-[#E5E5E5] text-[#555555] hover:text-[#111111] font-technical text-xs font-semibold rounded-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-[#E5E5E5] pb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-[#D9222A] rounded-full"></span>
                <span className="font-technical text-[11px] font-bold uppercase tracking-widest text-[#777777]">
                  B2B COMMERCIAL ENQUIRY
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl text-[#111111]">
                Wholesale Quote & Availability
              </h2>
              {productName && (
                <div className="mt-2 p-2.5 bg-[#F7F7F5] border border-[#E5E5E5] rounded-xs text-xs font-technical">
                  <span className="text-[#777777] uppercase text-[10px]">PRODUCT: </span>
                  <span className="font-bold text-[#111111]">{productName}</span>
                  {sku && <span className="ml-2 text-[#D9222A] font-bold">({sku})</span>}
                </div>
              )}
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-[#D9222A] text-xs rounded-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Company / Firm Name
                  </label>
                  <input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    placeholder="e.g. Kumar Auto Agencies"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="buyer@domain.com"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    City & State
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
                <div>
                  <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Order Quantity Required
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 50 Pairs / 2 Cartons"
                    className="w-full h-10 px-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                  />
                </div>
              </div>

              <div>
                <label className="block font-technical text-xs font-bold uppercase tracking-wider text-[#111111] mb-1">
                  Enquiry Details / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention delivery timeline, GST invoice requirement, or custom packaging needs..."
                  className="w-full p-3 border border-[#E5E5E5] focus:border-[#111111] outline-hidden text-sm rounded-xs font-display"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 h-11 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="h-11 px-4 bg-[#D9222A] hover:bg-[#B20017] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP DIRECT</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-technical text-[#777777] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#555555]" />
                <span>Direct B2B enquiry to Primus Enterprises factory sales team. No spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
