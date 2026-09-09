import React from 'react';
import { 
  Layers, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Package, 
  FlaskConical, 
  Brush, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';

interface PrivateLabelViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const PrivateLabelView: React.FC<PrivateLabelViewProps> = ({ onNavigate, onOpenRFQ }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DFC17B]">
              TURNKEY CONTRACT MANUFACTURING & OEM
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              BUILD YOUR BRAND WITH <br />
              <span className="gold-gradient-text">INDIAN SUPPLY & PRIVATE LABEL</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We help international brands, retailers, and distributors launch custom-formulated, beautifully packaged products with authentic Indian raw materials. From formulation bench tests to custom dielines and international compliance.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenRFQ('private-label')}
                className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold text-sm uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
              >
                START PRIVATE LABEL PROJECT
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Speak with OEM Specialist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Step Turnkey Workflow */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              THE OEM LIFECYCLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B192C]">
              Step-by-Step Private Label Process
            </h2>
            <p className="text-sm text-slate-600">
              Clear, milestone-gated development protecting your proprietary formulations and brand standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Product Brief', desc: 'Define target application, active ingredients, sensory profile, and volume goals.' },
              { num: '02', title: 'Formulation', desc: 'R&D chemists formulate lab bench batches meeting global clean-beauty & purity benchmarks.' },
              { num: '03', title: 'Sample Approval', desc: 'Physical samples air-couriered to your desk for fragrance, texture, and stability evaluation.' },
              { num: '04', title: 'Packaging & Dielines', desc: 'Selection of primary bottles/jars, secondary boxes, silk-screening, and barcode integration.' },
              { num: '05', title: 'Regulatory Dossier', desc: 'Preparation of CPSR, IFRA certificates, microbial testing, and INCI ingredient listings.' },
              { num: '06', title: 'Commercial Production', desc: 'ISO 22716 / GMP facility mass production under cleanroom conditions.' },
              { num: '07', title: 'Quality Assurance', desc: 'Batch chemical assay, torque testing on caps, and random carton AQL 2.5 inspection.' },
              { num: '08', title: 'Global Export', desc: 'Export palletization, ocean/air freight booking, and delivery to your warehouse.' }
            ].map((step) => (
              <div key={step.num} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#C5A059] transition-all group">
                <span className="text-2xl font-mono font-bold text-[#C5A059] block mb-2">{step.num}</span>
                <h3 className="font-serif text-base font-bold text-[#0B192C] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Capabilities & Packaging Formats */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">PACKAGING & FINISHES</span>
            <h2 className="font-serif text-3xl font-bold text-[#0B192C]">Bespoke Packaging Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <FlaskConical className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Glass Droppers & Amber Vials</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                10ml, 30ml, 50ml, and 100ml amber, cobalt blue, frosted, or clear glass with child-resistant, tamper-evident pipette droppers. Perfect for essential oils and face serums.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <Package className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Airless Pumps & Heavy Jars</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Double-wall acrylic, opal glass, and post-consumer recycled (PCR) jars with gold, rose-gold, and matte black anodized aluminum closures for luxury skincare creams.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
              <Brush className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Custom Printing & Hot Stamping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Precision UV screen printing, embossed metallic gold foiling, soft-touch matte lamination on outer cartons, and bilingual compliance labels conforming to US FDA and EU standards.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0B192C] text-white p-8 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold">Ready to Formulate Your Brand’s Next Best-Seller?</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Our formulation consultants evaluate your target price point and recommend ingredient ratios, packaging templates, and minimum batch sizes.
            </p>
            <button
              onClick={() => onOpenRFQ('private-label')}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#0B192C] font-bold text-xs uppercase tracking-wider hover:bg-[#DFC17B] transition-colors"
            >
              Request Private Label Project Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
