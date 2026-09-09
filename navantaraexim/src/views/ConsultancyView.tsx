import React from 'react';
import { 
  Compass, 
  Search, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  MessageCircle,
  Scale, 
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';

interface ConsultancyViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ConsultancyView: React.FC<ConsultancyViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to schedule a trade & business consultancy session regarding sourcing from India."
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
            <button onClick={() => onNavigate('/services')} className="hover:text-white transition-colors">Services</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#DFC17B] font-semibold">Trade Consultancy</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              STRATEGIC SOURCING ADVISORY
            </div>

            {/* Heading requested by prompt */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              TRADE & BUSINESS CONSULTANCY
            </h1>

            {/* Subheading requested by prompt */}
            <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold">
              Advisory support for international businesses seeking to enter, source from or navigate the Indian market.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Whether you are an established importer optimizing an existing vendor base or a foreign business evaluating Indian product supply for the first time, Navantara Exim provides practical, on-the-ground guidance across regulatory hurdles, manufacturing feasibility, and commercial negotiations.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ('trade-consultancy')}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>SCHEDULE A CONSULTATION</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Advisory Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Scope Grid */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Consultancy Modules
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Areas of Advisory Support
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Clear, practical strategic advisory tailored to your product category and international target market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Sourcing feasibility assessment */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Sourcing Feasibility Assessment
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Evaluating whether your target product can be reliably manufactured, extracted, or cultivated in India at commercially viable volumes, quality thresholds, and delivery timelines.
              </p>
            </div>

            {/* 2. Export-import regulatory guidance */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Export-Import Regulatory Guidance
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Navigating Indian DGFT export rules, destination import tariffs, Free Trade Agreements (e.g. India-UAE CEPA), and mandatory compliance documentation (COA, MSDS, Phytosanitary).
              </p>
            </div>

            {/* 3. Product category analysis */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Product Category Analysis
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                In-depth breakdown of Indian regional clusters for essential oils, botanical herbs, cosmetics, textiles, and specialty goods, mapping seasonal harvests and price dynamics.
              </p>
            </div>

            {/* 4. Vendor discovery guidance */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Vendor Discovery Guidance
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Establishing criteria to identify authentic primary distillers, mills, and manufacturers while filtering out deceptive middlemen or unverified trading listings.
              </p>
            </div>

            {/* 5. Commercial negotiation support */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Commercial Negotiation Support
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Structuring balanced commercial agreements, payment security terms (LC, TT milestones), Incoterm 2020 definitions, defect liability provisions, and realistic delivery buffers.
              </p>
            </div>

            {/* 6. On-The-Ground Representation */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                India Market Partner
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Serving as your trusted liaison in Pune and Mumbai, bridging language barriers, cultural nuances, and logistical complexities with Indian vendor networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#081321] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            Schedule Your Advisory Session
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Explore Sourcing Opportunities in India?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Tell us about your target product category or strategic expansion plans. Our trade specialists will provide structured feedback and advisory support.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ('trade-consultancy')}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              SCHEDULE A CONSULTATION
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              All Services Overview
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
