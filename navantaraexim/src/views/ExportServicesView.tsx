import React, { useState } from 'react';
import { 
  Ship, 
  FileCheck, 
  Package, 
  ShieldCheck, 
  ArrowRight, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Clock,
  FileText,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';

interface ExportServicesViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ExportServicesView: React.FC<ExportServicesViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to discuss export support services and logistics from India."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  const faqs = [
    {
      q: "Which ports do you export through?",
      a: "Our primary ocean freight gateways are Nhava Sheva (JNPT) and Mundra Port on India's western coast, offering high-frequency sailing connections to the US, Middle East, Europe, and Asia. For time-sensitive or high-value consignments, we also coordinate air freight dispatch through Mumbai Air Cargo (BOM)."
    },
    {
      q: "Can you support different Incoterms (FOB, CIF, CFR)?",
      a: "Yes. We support all standard Incoterms 2020 commercial terms including FOB (Free on Board at Indian port), CIF (Cost, Insurance & Freight to your destination port), CFR (Cost and Freight), and EXW (Ex-Works for buyers with established freight forwarders)."
    },
    {
      q: "Do you provide export documentation?",
      a: "Yes. Every export consignment is supported by a complete documentation package including Commercial Invoice, Packing List, Certificate of Origin (Chamber / GSP / CEPA), Bill of Lading (B/L) or Airway Bill (AWB), Certificate of Analysis (COA), and phytosanitary certificates where required."
    },
    {
      q: "How do you handle special packaging for liquid and botanical products?",
      a: "Depending on the product, we coordinate UN-certified aluminum canisters or HDPE drums for essential oils, multi-wall moisture-proof foil bags for botanical extracts and personal care powders, and heat-treated ISPM-15 wooden pallets with corner protectors."
    }
  ];

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
            <span className="text-[#DFC17B] font-semibold">Export Support</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              SERVICES & LOGISTICS
            </div>

            {/* Heading requested by prompt */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              EXPORT SUPPORT SERVICES
            </h1>

            {/* Subheading requested by prompt */}
            <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold">
              Facilitating smooth export operations, documentation and logistics from India.
            </p>

            <p className="text-sm text-white/75 leading-relaxed font-normal">
              Navantara Exim provides end-to-end export support, eliminating customs complications, container stuffing errors, and shipment delays. We coordinate every stage—from factory packaging standards and laboratory test documentation to port terminal delivery at Nhava Sheva (JNPT) and Mundra.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ()}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>DISCUSS EXPORT REQUIREMENTS</span>
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

      {/* 6 Key Areas of Export Support */}
      <section className="py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Export Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              What We Manage For Your Consignments
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Clear operational oversight across each milestone between the Indian production facility and your destination port.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Export documentation preparation */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Export Documentation Preparation
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Complete preparation of Commercial Invoices, Packing Lists, Certificates of Origin (Chamber / GSP / CEPA), Bill of Lading, and phytosanitary certificates formatted for destination customs.
              </p>
            </div>

            {/* 2. Packaging and labeling coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Packaging & Labeling Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Coordination of UN-compliant packaging, HDPE drums, composite canisters, multiwall moisture bags, batch labeling, and ISPM-15 heat-treated export palletization.
              </p>
            </div>

            {/* 3. Port logistics coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Port Logistics Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Direct management of container movements to India’s primary export terminals: JNPT (Nhava Sheva), Mundra Port, and Mumbai Air Cargo (BOM).
              </p>
            </div>

            {/* 4. Shipping and freight coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Shipping & Freight Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Aligning container bookings (FCL / LCL), ocean carrier scheduling, space reservation during peak seasons, and sea-freight rate transparency.
              </p>
            </div>

            {/* 5. Customs-related documentation support */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Customs-Related Documentation Support
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Indian customs EDI filings, Shipping Bills, export declarations, and HS code harmonisation to ensure smooth clearance at departure and arrival ports.
              </p>
            </div>

            {/* 6. Order tracking and shipment follow-up */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                Order Tracking & Shipment Follow-Up
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Continuous milestone monitoring from factory gate departure to port gate-in, vessel loading, sailing confirmation, and tracking handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-[#081321] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Export Logistics FAQs
            </h2>
            <p className="text-xs sm:text-sm text-white/70">
              Clear answers regarding port connections, Incoterms, and documentation handling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0B192C] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <h3 className="font-serif font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </h3>
                  <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#C5A059] shrink-0">
                    {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#0B192C] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            Export Operations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Planning an Export Consignment from India?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Contact Navantara Exim to coordinate packaging, documentation, port terminal handling, and ocean freight logistics.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              DISCUSS EXPORT REQUIREMENTS
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
