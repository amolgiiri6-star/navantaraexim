import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Globe2, 
  Ship,
  Phone,
  Mail,
  Send,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';
import { NavantaraLogo } from '../components/brand/NavantaraLogo';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to learn more about partnering with Navantara Exim."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* Hero Header */}
      <section className="relative bg-[#081321] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#DFC17B] font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              INDIAN SUPPLIER • EXPORT PARTNER
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              ABOUT NAVANTARA EXIM
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold">
              Connecting international buyers directly with reliable Indian product supply.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Navantara Exim is an India-based supplier and export partner providing selected Indian products to international buyers, distributors, brands and commercial businesses. Operating from Pune, Maharashtra, we bridge the gap between Indian manufacturing capabilities and international buyer standards.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('/products')}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
              >
                Contact Trade Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Our Mission</h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                To serve as a dependable, transparent gateway for international enterprises seeking high-grade Indian products. We aim to remove friction in global sourcing by enforcing rigorous product verification, clear commercial terms, and diligent export execution.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Our Vision</h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                To build long-term, trusted partnerships between global importers and verified Indian manufacturing clusters, recognized worldwide for uncompromised product integrity, documentation accuracy, and reliable maritime logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy: Source. Verify. Export. Grow. */}
      <section className="py-20 bg-[#081321] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">OUR PILLARS</span>
            <h2 className="font-serif text-3xl font-bold text-white">Source. Verify. Export. Grow.</h2>
            <p className="text-xs sm:text-sm text-white/70">
              Our core operational approach guiding every transaction and international client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
              <span className="text-2xl font-serif font-black text-[#C5A059]">01. SOURCE</span>
              <h3 className="font-serif text-lg font-bold text-white">India-Based Supply</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct engagement with verified Indian agricultural producers, certified botanical distillers, cosmetic makers, and textile mills.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
              <span className="text-2xl font-serif font-black text-[#C5A059]">02. VERIFY</span>
              <h3 className="font-serif text-lg font-bold text-white">Quality Due Diligence</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Evaluating supplier operations, batch availability, Certificate of Analysis (COA), safety data sheets, and pre-dispatch physical inspection.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
              <span className="text-2xl font-serif font-black text-[#C5A059]">03. EXPORT</span>
              <h3 className="font-serif text-lg font-bold text-white">Logistics Management</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Export packaging, container loading at Nhava Sheva (JNPT) and Mundra, port customs handling, and shipping document releases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
              <span className="text-2xl font-serif font-black text-[#C5A059]">04. GROW</span>
              <h3 className="font-serif text-lg font-bold text-white">Commercial Scale</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Consistent batch quality, reliable replenishment schedules, and proactive communication to scale your distribution in global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location & Port Connectivity */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Geographic Advantage
              </span>
              <h2 className="font-serif text-3xl font-bold text-white leading-tight">
                Strategically Headquartered in Pune, Maharashtra
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                Pune is Maharashtra’s prominent commercial and industrial center, connected by modern multi-lane expressways to Mumbai and India’s premier deep-water container gateways.
              </p>

              <div className="space-y-3 text-xs text-white/80 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Proximity to Nhava Sheva (JNPT):</strong> Just 140 km from India’s largest container port, facilitating rapid container stuffing and port terminal dispatch.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ship className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Mundra Port Connectivity:</strong> Direct access to western maritime lanes connecting directly to Middle East, European, and US shipping routes.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Regional Manufacturing Access:</strong> Direct operational reach across industrial clusters in Maharashtra, Gujarat, Tamil Nadu, and Uttar Pradesh.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#081321] border border-white/10 space-y-4 text-center">
                <div className="flex justify-center">
                  <NavantaraLogo variant="stacked" />
                </div>
                <div className="pt-2 space-y-1">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Navantara Exim</p>
                  <p className="text-xs text-[#DFC17B]">Pune, Maharashtra, India</p>
                  <p className="text-[11px] text-white/60">Phone: +91 90 4949 6585</p>
                  <p className="text-[11px] text-white/60">Email: info@navantaraexim.com</p>
                </div>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full py-3 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#081321] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            Partner With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Looking for a Reliable Indian Export Partner?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Contact Navantara Exim today to discuss your product supply, quality review, or export logistics requirements.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              REQUEST ENQUIRY
            </button>
            <button
              onClick={openWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
