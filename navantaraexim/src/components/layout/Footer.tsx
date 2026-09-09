import React from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send,
  Building2,
  Award
} from 'lucide-react';
import { PageRoute } from '../../types';
import { PRODUCT_CATEGORIES } from '../../data/products';
import { NavantaraLogo } from '../brand/NavantaraLogo';
import { SocialMediaSection } from '../common/SocialMediaSection';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenRFQ }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about Indian product supply and export requirements."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#081321] text-slate-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust & Credentials Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0B192C] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Indian Supplier & Partner</p>
              <p className="text-xs text-slate-400">Registered Exporter from India</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0B192C] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Supplier & Quality Review</p>
              <p className="text-xs text-slate-400">Batch COA & Lab Documentation</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0B192C] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Port Logistics Coordination</p>
              <p className="text-xs text-slate-400">Nhava Sheva (JNPT) & Mundra Ports</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0B192C] border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Direct Trade Response</p>
              <p className="text-xs text-slate-400">+91 90 4949 6585</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-white/10">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-5">
            <div 
              onClick={() => onNavigate('/')} 
              className="cursor-pointer select-none"
            >
              <NavantaraLogo variant="footer" />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              <strong>Navantara Exim</strong> is an India-based supplier and export partner providing selected Indian products to international buyers, distributors, brands and commercial businesses.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#DFC17B] uppercase">
              <span>SEAMLESS TRADE</span>
              <span>•</span>
              <span>GLOBAL TRUST</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenRFQ()}
                className="px-4 py-2.5 rounded-lg bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Request Enquiry</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="px-4 py-2.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors border border-emerald-500/30 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>

          {/* Column 2: Products Portfolio */}
          <div className="space-y-4">
            <p className="text-white font-serif font-bold text-sm tracking-wide uppercase border-l-2 border-[#C5A059] pl-2.5">
              Product Portfolio
            </p>
            <ul className="space-y-2 text-xs">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate(`/products/${cat.slug}` as PageRoute);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-[#C5A059] transition-colors text-left flex items-center justify-between w-full group py-0.5"
                  >
                    <span>{cat.title}</span>
                    <span className="text-slate-600 group-hover:text-[#C5A059] transition-colors">›</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('/products')}
                  className="text-xs font-semibold text-[#C5A059] hover:underline"
                >
                  View All Products →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <p className="text-white font-serif font-bold text-sm tracking-wide uppercase border-l-2 border-[#C5A059] pl-2.5">
              Export & Trade Services
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/services/export-support')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Export Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/supplier-verification')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Supplier & Product Verification
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/trade-consultancy')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Trade & Business Consultancy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services/procurement-coordination')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors text-left"
                >
                  Procurement Coordination
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={() => onNavigate('/services')}
                  className="text-xs font-semibold text-[#C5A059] hover:underline"
                >
                  All Services Overview →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Global Markets */}
          <div className="space-y-4">
            <p className="text-white font-serif font-bold text-sm tracking-wide uppercase border-l-2 border-[#C5A059] pl-2.5">
              Global Markets
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/markets/usa')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>🇺🇸</span> United States
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/markets/uae-gcc')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>🇦🇪</span> UAE & GCC (CEPA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/markets/uk')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>🇬🇧</span> United Kingdom
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/markets/south-asia')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>🌏</span> South Asia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/markets/africa')}
                  className="text-slate-300 hover:text-[#C5A059] transition-colors flex items-center gap-1.5"
                >
                  <span>🌍</span> Africa
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate Address & Contact Details */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 border-b border-white/10">
          <div>
            <p className="text-white font-semibold mb-1">Company Location</p>
            <p className="text-slate-300">Navantara Exim</p>
            <p>Pune, Maharashtra, India</p>
            <p className="mt-1 text-slate-500">Ocean Freight Gateways: JNPT (Nhava Sheva) & Mundra Port</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-1">Contact & Enquiries</p>
            <p>
              Email:{' '}
              <a href="mailto:info@navantaraexim.com" className="text-[#C5A059] hover:underline">
                info@navantaraexim.com
              </a>
            </p>
            <p>
              Phone / WhatsApp:{' '}
              <a href="tel:+919049496585" className="text-slate-300 hover:text-[#C5A059]">
                +91 90 4949 6585
              </a>
            </p>
            <p className="text-slate-500">Serving international buyers and commercial importers globally</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-1">Export Integrity & Verification</p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Navantara Exim is an India-based supplier and export partner. We assist international buyers with Indian product supply, quality review, packaging coordination, and export documentation.
            </p>
          </div>
        </div>

        {/* Social Media Links Strip */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">Official Social Media & Channels</p>
            <p className="text-[11px] text-slate-400">Connect with Navantara Exim on our verified digital profiles</p>
          </div>
          <SocialMediaSection variant="footer" />
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Navantara Exim. All rights reserved. Seamless Trade. Global Trust.
          </p>

          <div className="flex items-center gap-5">
            <button onClick={() => onNavigate('/about')} className="hover:text-slate-300 transition-colors">
              About Us
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/services')} className="hover:text-slate-300 transition-colors">
              Export Services
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('/contact')} className="hover:text-slate-300 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
