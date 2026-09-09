import React from 'react';
import { 
  PackageCheck, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Send, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  FileCheck,
  Ship,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';

interface ProcurementViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ProcurementView: React.FC<ProcurementViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to discuss procurement coordination and order consolidation in India."
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
            <span className="text-[#DFC17B] font-semibold">Procurement Coordination</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              SERVICES & TRADE EXECUTION
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              PROCUREMENT COORDINATION
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold">
              Assisting international buyers with order management, supplier follow-up and multi-item consolidation in India.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Managing orders across multiple Indian vendors often results in misaligned dispatch schedules, redundant paperwork, and inflated shipping costs. Navantara Exim acts as your coordinated trade desk in India—aligning specifications, tracking factory milestones, and consolidating goods into single, cost-effective container consignments.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ()}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISCUSS PROCUREMENT REQUIREMENTS</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              End-to-End Procurement Support
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Structured assistance across all stages of production and consignment assembly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Multi-supplier order coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Multi-Supplier Order Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Centralized management for buyers sourcing diverse categories (e.g. botanicals from Uttar Pradesh, essential oils from Maharashtra, textiles from Gujarat) under a synchronized schedule.
              </p>
            </div>

            {/* 2. Consolidation of shipments */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Consolidation of Shipments
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We receive and warehouse goods at consolidated port facilities near JNPT (Nhava Sheva) or Mundra, verifying packaging integrity before combining them into Full Container Loads (FCL).
              </p>
            </div>

            {/* 3. Production milestone follow-up */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Production Milestone Follow-Up
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Regular status reports tracking batch manufacturing progress, lab test timing, and packaging readiness to ensure target shipping vessel dates are met.
              </p>
            </div>

            {/* 4. Specification alignment */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Specification Alignment with Manufacturers
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Translating international technical, cosmetic, or botanical standards into exact vendor instructions, avoiding misunderstandings regarding grades, mesh sizes, or moisture thresholds.
              </p>
            </div>

            {/* 5. Single-point export communication */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Single-Point Export Communication
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Instead of managing 5 different vendors across varied time zones, international buyers correspond with one dedicated Navantara Exim trade coordinator who oversees all milestones.
              </p>
            </div>

            {/* 6. Packaging & Labeling Coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Packaging Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Assisting buyers with vendor-level coordination for customized export cartons, barcode labels, batch numbers, and moisture-barrier pallet wrapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#081321] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            Streamlined Supply
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Looking to Consolidate Sourcing from India?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Share your product list or current supplier details. We will assess consolidation feasibility and provide a clear coordination plan.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              DISCUSS PROCUREMENT REQUIREMENTS
            </button>
            <button
              onClick={() => onNavigate('/services/export-support')}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20"
            >
              View Export Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
