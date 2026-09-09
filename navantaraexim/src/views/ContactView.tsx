import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle, 
  Clock, 
  Building2, 
  Globe, 
  ShieldCheck
} from 'lucide-react';
import { PageRoute } from '../types';
import { SocialMediaSection } from '../components/common/SocialMediaSection';
import { OfficialStampLogo } from '../components/brand/OfficialStampLogo';

interface ContactViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about Indian product supply and export requirements."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* Header Section */}
      <section className="relative py-16 lg:py-24 bg-[#081321] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                INDIAN SUPPLIER • EXPORT PARTNER
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                GET IN TOUCH WITH NAVANTARA EXIM
              </h1>
              <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold tracking-wide">
                Indian Products. Global Supply.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
                We are here to assist you with your Indian product supply, export and trade-related requirements.
              </p>
            </div>

            {/* Right Column: Same Logo & Tagline as on Hero Banner */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-[190px] flex flex-col items-center">
                <OfficialStampLogo size="banner" />
                <div className="w-full mt-3 flex items-center justify-center py-2 px-3 rounded-full bg-[#081321] border-2 border-[#DFC17B] shadow-2xl backdrop-blur-md">
                  <span className="font-serif text-[10.5px] sm:text-[11px] font-extrabold text-white tracking-[0.18em] uppercase text-center whitespace-nowrap leading-none indent-[0.18em]">
                    Your GROWTH Stamp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 sm:py-20 bg-[#0B192C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Contact Details & Location */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  Trade Desk & Operations
                </h2>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  Connect directly with our India-based team for product availability, export coordination, and verification support.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Location */}
                <div className="p-5 rounded-xl bg-[#081321] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="mt-1 text-white/80">Pune, Maharashtra, India</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      Operational Gateways: Nhava Sheva (JNPT) & Mundra Port
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-xl bg-[#081321] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Address</h3>
                    <p className="mt-1">
                      <a 
                        href="mailto:info@navantaraexim.com" 
                        className="text-[#DFC17B] hover:underline font-semibold"
                      >
                        info@navantaraexim.com
                      </a>
                    </p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      Enquiries reviewed and responded to within 24 business hours
                    </p>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="p-5 rounded-xl bg-[#081321] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone / WhatsApp</h3>
                    <p className="mt-1">
                      <a 
                        href="tel:+919049496585" 
                        className="text-white hover:text-[#C5A059] font-semibold"
                      >
                        +91 90 4949 6585
                      </a>
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={openWhatsApp}
                        className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Chat On WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="p-5 rounded-xl bg-[#081321] border border-white/10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-[#C5A059] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Business Hours</h3>
                    <p className="mt-1 text-white/80">Monday – Saturday: 09:00 – 19:00 IST</p>
                    <p className="text-[11px] text-white/50 mt-0.5">
                      International buyer communication scheduled across global time zones
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Map Area Representation */}
              <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Geographic Hub: Pune, India
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Strategically situated in Maharashtra's primary industrial triangle, connected directly to Mumbai and the deep-water Nhava Sheva (JNPT) container terminals via expressway.
                </p>
                <div className="h-32 rounded-xl bg-[#0B192C] border border-white/10 flex items-center justify-center text-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="relative z-10">
                    <p className="text-sm font-bold text-white">Pune • Maharashtra</p>
                    <p className="text-[11px] text-[#DFC17B]">140 km from JNPT Port Gateways</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Simple Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#081321] border border-white/10 shadow-2xl">
                <div className="mb-6 space-y-1">
                  <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest">
                    Direct Contact Form
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    Send Us a Message
                  </h2>
                  <p className="text-xs text-white/70">
                    Fill out the form below with your enquiry and we will respond promptly.
                  </p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Message Received
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Navantara Exim. Your enquiry has been routed to our India trade desk. We will get back to you shortly.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <button
                        onClick={openWhatsApp}
                        className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Your Name <span className="text-[#C5A059]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Email Address <span className="text-[#C5A059]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="buyer@example.com"
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Phone / WhatsApp <span className="text-[#C5A059]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 555 123 4567"
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Country / Destination
                        </label>
                        <input
                          type="text"
                          value={form.country}
                          onChange={(e) => setForm({ ...form, country: e.target.value })}
                          placeholder="e.g. USA, UAE, UK"
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-semibold text-white/80 uppercase tracking-wider">
                          Subject / Product Area
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white outline-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0B192C]">Select Area of Interest</option>
                          <option value="Essential Oils" className="bg-[#0B192C]">Essential Oils</option>
                          <option value="Cosmetics" className="bg-[#0B192C]">Cosmetics</option>
                          <option value="Personal Care" className="bg-[#0B192C]">Personal Care</option>
                          <option value="Textiles" className="bg-[#0B192C]">Textiles</option>
                          <option value="Perfumes, Attars & Artisanal Fragrances" className="bg-[#0B192C]">Perfumes, Attars & Artisanal Fragrances</option>
                          <option value="Speciality Goods" className="bg-[#0B192C]">Speciality Goods</option>
                          <option value="Export Services" className="bg-[#0B192C]">Export Services</option>
                          <option value="Supplier Verification" className="bg-[#0B192C]">Supplier Verification</option>
                          <option value="Other" className="bg-[#0B192C]">Other Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-semibold text-white/80 uppercase tracking-wider">
                        Message / Requirement Details <span className="text-[#C5A059]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Please tell us what you need (product description, volume interest, target specifications)..."
                        className="w-full px-4 py-3 bg-[#0B192C] border border-white/15 focus:border-[#C5A059] rounded-lg text-white placeholder-white/30 outline-none transition-colors resize-y"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-white/50 text-[11px]">
                        <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>Direct response from verified export desk in India</span>
                      </div>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Social Media Channels (Contact Page Bottom) */}
      <section className="py-16 sm:py-20 bg-[#081321] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialMediaSection 
            variant="contact"
            title="Official Social & Digital Channels"
            subtitle="Connect with Navantara Exim across our verified platforms for product catalogues, export updates, batch previews, and direct communications."
          />
        </div>
      </section>
    </div>
  );
};
