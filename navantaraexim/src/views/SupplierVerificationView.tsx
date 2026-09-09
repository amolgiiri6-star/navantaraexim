import React from 'react';
import { 
  ShieldCheck, 
  Building2, 
  FileCheck, 
  FlaskConical, 
  CheckCircle2, 
  Send, 
  MessageCircle, 
  ArrowRight,
  ClipboardCheck,
  ChevronRight,
  Eye,
  FileText
} from 'lucide-react';
import { PageRoute } from '../types';

interface SupplierVerificationViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const SupplierVerificationView: React.FC<SupplierVerificationViewProps> = ({ 
  onNavigate, 
  onOpenRFQ 
}) => {
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about supplier & product verification in India."
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
            <span className="text-[#DFC17B] font-semibold">Supplier Verification</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              INDEPENDENT RISK REDUCTION
            </div>

            {/* Heading requested by prompt */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              SUPPLIER & PRODUCT VERIFICATION
            </h1>

            {/* Subtitle requested by prompt */}
            <div className="text-sm font-bold text-[#DFC17B] tracking-widest uppercase">
              VERIFY BEFORE YOU BUY
            </div>

            {/* Subheading requested by prompt */}
            <p className="font-serif text-lg sm:text-xl text-white/90 font-medium">
              Independent verification support to evaluate Indian suppliers, factories and product availability before you buy.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Entering contracts with overseas suppliers requires commercial clarity and verified facts on the ground. Navantara Exim provides objective, professional verification services for international buyers. Whether you are validating a new vendor found online or auditing batch readiness prior to final wire transfer, our team conducts structured reviews across Indian industrial regions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ('supplier-verification')}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>REQUEST SUPPLIER VERIFICATION</span>
              </button>
              <button
                onClick={openWhatsApp}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Consult On WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Services Included */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Scope of Verification
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Structured Due Diligence Modules
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Clear verification steps designed to give buyers clarity on operational legitimacy, capacity, and batch consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Factory / supplier physical check */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Factory & Facility Physical Check
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Physical on-site visit to the production plant, distillery, or warehouse to confirm operational status, active machinery, cleanroom conditions, and real operating capacity.
              </p>
            </div>

            {/* 2. Supplier credibility verification */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Supplier Credibility Verification
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Comprehensive review of legal credentials including Goods & Services Tax (GST) filing status, Importer-Exporter Code (IEC) authenticity, corporate registration, and business background.
              </p>
            </div>

            {/* 3. Product availability check */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Product Availability Check
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Direct verification of inventory levels, raw material stocks, ongoing manufacturing schedules, and realistic production lead times before deposit payment.
              </p>
            </div>

            {/* 4. Laboratory testing coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Laboratory Testing Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Independent sample collection directly from production batches, followed by submission to accredited testing laboratories for purity analysis, microbial testing, and COA validation.
              </p>
            </div>

            {/* 5. Pre-dispatch quality inspection */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Pre-Dispatch Quality Inspection
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Visual and physical inspection of finished goods, packaging integrity, labeling accuracy, batch numbers, and export palletization prior to container stuffing.
              </p>
            </div>

            {/* 6. Transparent verification report */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Transparent Verification Report
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                A structured, objective digital report complete with photographs, documented findings, lab test results, and clear observations delivered to your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Risk Reduction Message Banner */}
      <section className="py-16 bg-[#081321] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B192C] border border-[#C5A059]/30 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-white">
                Professional Risk Reduction for International Sourcing
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We believe in establishing transparent, long-term commercial relationships between international buyers and Indian suppliers. Our verification services are designed to clarify facts, establish mutual trust, and safeguard your capital throughout the procurement cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#081321] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            On-The-Ground Verification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Need to Verify an Indian Vendor or Batch?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Share supplier company name, factory location, or product sample requirements. We will outline a prompt verification proposal.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ('supplier-verification')}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              REQUEST SUPPLIER VERIFICATION
            </button>
            <button
              onClick={openWhatsApp}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-white/20 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Discuss via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
