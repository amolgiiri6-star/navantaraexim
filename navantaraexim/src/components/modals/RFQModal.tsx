import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  Globe 
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../../data/products';

interface RFQModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCategory?: string;
  defaultCategory?: string;
  defaultProduct?: string;
}

export const RFQModal: React.FC<RFQModalProps> = ({ 
  isOpen, 
  onClose, 
  preselectedCategory,
  defaultCategory,
  defaultProduct = ''
}) => {
  const initialCategory = preselectedCategory || defaultCategory || 'essential-oils';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    whatsapp: '',
    targetCategory: initialCategory,
    requirementDetails: defaultProduct ? `Inquiring about: ${defaultProduct}` : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (preselectedCategory || defaultCategory) {
      setFormData((prev) => ({
        ...prev,
        targetCategory: preselectedCategory || defaultCategory || 'essential-oils'
      }));
    }
    if (defaultProduct) {
      setFormData((prev) => ({
        ...prev,
        requirementDetails: `Inquiring about: ${defaultProduct}`
      }));
    }
  }, [preselectedCategory, defaultCategory, defaultProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'NVX-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRefId('');
    setFormData({
      name: '',
      company: '',
      country: '',
      email: '',
      whatsapp: '',
      targetCategory: 'essential-oils',
      requirementDetails: ''
    });
    onClose();
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Navantara Exim Trade Desk, I have an inquiry regarding Indian product supply (Ref: ${refId || 'NVX-ENQUIRY'}). Name: ${formData.name || 'International Buyer'}, Category: ${formData.targetCategory}.`
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#081321]/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#0B192C] text-white rounded-2xl shadow-2xl border border-[#C5A059]/40 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 bg-[#081321] border-b border-white/10 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.25em]">
                Indian Supplier • Export Partner
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              GET IN TOUCH WITH NAVANTARA EXIM
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <p className="text-[11px] font-bold text-[#C5A059] tracking-widest uppercase">
                  Enquiry Successfully Submitted
                </p>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Thank you, {formData.name || 'Valued Buyer'}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                  We have received your requirement. An export specialist from our India trade desk will review your details and respond directly via email or WhatsApp.
                </p>
              </div>

              <div className="p-4 bg-[#081321] rounded-xl border border-white/10 max-w-sm mx-auto text-xs space-y-1">
                <p className="text-white/50">Reference Number</p>
                <p className="font-mono text-base font-bold text-[#DFC17B]">{refId}</p>
                <p className="text-[10px] text-white/40 pt-1">Pune, Maharashtra, India • Trade Operations</p>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={openWhatsApp}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp Now</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-white/70 leading-relaxed">
                We are here to assist international buyers with Indian product supply, export requirements and trade-related enquiries. Tell us what you need.
              </p>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Full Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Johnathan Davis"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Company / Organization */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Company / Organization <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pacific Coast Trading LLC"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Business Email <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="buyer@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Phone / WhatsApp <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Country / Destination */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Buyer Country <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, UAE, United Kingdom"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                {/* Target Product Category */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                    Product Category <span className="text-[#C5A059]">*</span>
                  </label>
                  <select
                    value={formData.targetCategory}
                    onChange={(e) => setFormData({ ...formData, targetCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white outline-none cursor-pointer"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.slug} className="bg-[#0B192C] text-white">
                        {cat.title}
                      </option>
                    ))}
                    <option value="general-sourcing" className="bg-[#0B192C] text-white">
                      General Product Supply / Export Inquiry
                    </option>
                    <option value="supplier-verification" className="bg-[#0B192C] text-white">
                      Supplier & Product Verification Request
                    </option>
                  </select>
                </div>
              </div>

              {/* Requirement Details */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider">
                  Product / Requirement Details <span className="text-[#C5A059]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what you are looking for (e.g. product type, expected volume, packaging preference, target timeline)..."
                  value={formData.requirementDetails}
                  onChange={(e) => setFormData({ ...formData, requirementDetails: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#081321] border border-white/15 focus:border-[#C5A059] rounded-lg text-xs text-white placeholder-white/30 outline-none transition-colors resize-y"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
                <div className="text-[11px] text-white/50 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Direct Trade Desk: info@navantaraexim.com</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 sm:flex-none px-7 py-3 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Enquiry</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
