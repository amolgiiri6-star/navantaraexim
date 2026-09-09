import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  FlaskConical, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Download,
  AlertCircle
} from 'lucide-react';
import { PageRoute } from '../types';

interface QualityDocumentationViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const QualityDocumentationView: React.FC<QualityDocumentationViewProps> = ({ 
  onNavigate, 
  onOpenRFQ 
}) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DFC17B]">
              LABORATORY TESTING & COMPLIANCE
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              QUALITY ASSURANCE & <br />
              <span className="gold-gradient-text">BATCH DOCUMENTATION DOSSIER</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Every international shipment arranged by Navantara Exim is accompanied by rigorous analytical documentation. We test representative batch samples in NABL-accredited and ISO 17025-certified analytical testing laboratories.
            </p>
          </div>
        </div>
      </section>

      {/* Standard Shipping Dossier Documents */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">AUDIT-READY DOSSIERS</span>
            <h2 className="font-serif text-3xl font-bold text-[#0B192C]">Standard Shipping & Quality Documents</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <FileCheck className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Certificate of Analysis (COA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specific gravity, refractive index, optical rotation, active constituent assay percentage, heavy metals (Pb, As, Cd, Hg), and microbial limits.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <FlaskConical className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">GC-MS Chromatography</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gas Chromatography-Mass Spectrometry fingerprint proving chiral authenticity, botanical species purity, and total absence of synthetic petroleum extenders.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Safety Data Sheet (SDS/MSDS)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive 16-section Globally Harmonized System (GHS) compliant documentation covering chemical handling, toxicological data, and emergency transport procedures.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Certificate of Origin</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Government-certified preferential or non-preferential Certificates of Origin issued by Indian Export Promotion Councils / Chamber of Commerce for customs tariff reduction.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <FileText className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Phytosanitary & Fumigation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plant Quarantine Organization of India certificates and ISPM-15 certified container fumigation for botanical extracts, seeds, and wooden pallets.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <CheckCircle className="w-8 h-8 text-[#C5A059]" />
              <h3 className="font-serif text-lg font-bold text-[#0B192C]">Bill of Lading & Commercial Invoice</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Master Bill of Lading (or Seaway Bill) and detailed commercial invoices cross-verified with Indian ICEGATE customs portal declarations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
