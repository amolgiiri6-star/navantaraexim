import React from 'react';
import { 
  Ship, 
  ShieldCheck, 
  Compass, 
  PackageCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck, 
  Send, 
  MessageCircle,
  Building2,
  Layers,
  Award
} from 'lucide-react';
import { PageRoute } from '../types';

interface ServicesOverviewViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ServicesOverviewView: React.FC<ServicesOverviewViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to inquire about your export and trade services."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* Hero Header */}
      <section className="relative bg-[#081321] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              INDIAN SUPPLIER • EXPORT PARTNER
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              EXPORT & TRADE SERVICES
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold">
              Professional export, verification and trade support services for buyers sourcing from India.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Navantara Exim provides structured commercial and operational support to international businesses. From independent supplier checks to multi-factory consolidation, batch documentation, and port logistics, we make doing business in India transparent and dependable.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ()}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Discuss Service Requirements</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Trade Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Services Grid */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Core Service Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Structured Trade Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Clear, specialized support designed for international distributors, importers, and commercial brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Export Support */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Ship className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest">Service 01</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Export Support</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Facilitating smooth export operations, documentation, and port logistics from India. We coordinate export packaging, customs filings, shipping line bookings, and port terminal dispatch through Nhava Sheva (JNPT), Mundra, and Mumbai Air Cargo.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Commercial Invoices, Packing Lists & Certificates of Origin</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>UN-approved packaging & ISPM-15 export palletization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>FOB, CIF, CFR shipment execution & container stuffing</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/export-support')}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Export Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Service 2: Supplier & Product Verification */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest">Service 02</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Supplier & Product Verification</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Independent verification support to evaluate Indian suppliers, factories, and product availability before you buy. Reduce risk with on-the-ground physical checks, business credibility audits, and independent laboratory testing coordination.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Factory & manufacturing facility physical verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Legal entity, GST, IEC & regulatory legitimacy review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Batch sampling, COA audit & pre-dispatch inspection</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/supplier-verification')}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Supplier Verification</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Service 3: Trade & Business Consultancy */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest">Service 03</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Trade & Business Consultancy</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Advisory support for international businesses seeking to enter, source from, or navigate the Indian market. We provide category feasibility studies, regulatory landscape analysis, and supplier discovery frameworks.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Sourcing feasibility & regional manufacturing analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Export-import regulatory, tariff & CEPA guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Commercial contract alignment & structured terms</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/trade-consultancy')}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Trade Consultancy</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>

            {/* Service 4: Procurement Coordination */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/50 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest">Service 04</span>
                  <h3 className="font-serif text-2xl font-bold text-white">Procurement Coordination</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Assisting international buyers with multi-supplier order management, production follow-up, and multi-item consolidation in India. Single-point coordination prevents fragmented communications and reduces shipping costs.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Multi-supplier order tracking & milestone management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Consolidation into shared container loads (FCL / LCL)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Single-point export communication & invoice grouping</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/procurement-coordination')}
                  className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Procurement Coordination</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-[#081321] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            On-The-Ground Trade Support
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Have a Specific Export or Verification Need in India?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Contact our trade desk in Pune, India. We are ready to assist you with order coordination, supplier checks, or logistics planning.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              Request Trade Service Support
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
