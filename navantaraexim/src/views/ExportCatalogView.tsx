import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  CheckCircle, 
  Sparkles, 
  MessageCircle, 
  BookOpen, 
  ShieldCheck,
  Package
} from 'lucide-react';
import { PageRoute } from '../types';
import { PRODUCT_CATEGORIES } from '../data/products';

interface ExportCatalogViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const ExportCatalogView: React.FC<ExportCatalogViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const [downloadRequested, setDownloadRequested] = useState(false);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setDownloadRequested(true);
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Navantara Exim Trade Desk, please send the official 2026 Wholesale Export Catalog PDF directly to my WhatsApp.");
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DFC17B]">
              OFFICIAL 2026 EDITION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              DOWNLOAD THE COMPLETE <br />
              <span className="gold-gradient-text">NAVANTARA EXIM EXPORT DOSSIER</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Access comprehensive technical specifications, MOQ tiers, chemical assays, and packaging options across our complete range of Essential Oils, Cosmetics, Powders, Perfumes & Attars, Deodorants, Fabrics, and Specialty Goods.
            </p>
          </div>
        </div>
      </section>

      {/* Download Form & Catalog Summary */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: What's inside */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                WHAT'S INCLUDED IN THE 2026 DOSSIER
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0B192C]">
                Detailed Technical Catalog & Sourcing Guide
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Full 7-Category Product Index:</strong> Botanical names, extraction methods, purity standards, and HS Codes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Private Label & Packaging Dielines:</strong> Standard bottle sizes, carton tolerances, and custom printing minimums.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Sample COA & SDS Templates:</strong> Sample laboratory test certificates illustrating standard analytical parameters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Ocean & Air Shipping Schedules:</strong> Transit day matrix from JNPT / Mundra to USA, UAE, UK, EU, and Africa.</span>
                </li>
              </ul>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={openWhatsApp}
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Catalog via WhatsApp
                </button>
              </div>
            </div>

            {/* Right: Instant Request Card */}
            <div className="lg:col-span-5 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
              {downloadRequested ? (
                <div className="text-center space-y-4 py-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0B192C]">Catalog Dispatched</h3>
                  <p className="text-xs text-slate-600">
                    A copy has been routed to <strong>{email}</strong>. You can also view the digital catalog live right now.
                  </p>
                  <button
                    onClick={() => onNavigate('/products')}
                    className="px-6 py-3 rounded-xl bg-[#0B192C] text-[#C5A059] font-bold text-xs uppercase tracking-wider hover:bg-[#152A4A] transition-colors"
                  >
                    Explore Digital Catalog Online
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDownload} className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#0B192C]">
                    Request Instant PDF Download
                  </h3>
                  <p className="text-xs text-slate-600">
                    Enter your business email to receive the full 48-page export catalog.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Global Traders"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-[#C5A059] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-[#C5A059] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0B192C] text-[#C5A059] font-bold text-xs uppercase tracking-wider hover:bg-[#152A4A] transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Export Catalog 2026
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
