import React from 'react';
import { 
  ArrowLeft, 
  Anchor, 
  Clock, 
  ShieldCheck, 
  FileText, 
  CheckCircle, 
  ChevronRight, 
  Globe, 
  MapPin, 
  AlertCircle,
  Package,
  Send
} from 'lucide-react';
import { PageRoute, MarketCorridor } from '../types';
import { MARKET_CORRIDORS } from '../data/markets';
import { EditableImage } from '../components/common/EditableImage';

interface MarketDetailViewProps {
  corridorSlug?: string;
  corridor?: MarketCorridor;
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const MarketDetailView: React.FC<MarketDetailViewProps> = ({ 
  corridorSlug, 
  corridor, 
  onNavigate, 
  onOpenRFQ 
}) => {
  const activeCorridor = corridor || MARKET_CORRIDORS.find(m => m.slug === corridorSlug) || MARKET_CORRIDORS[0];

  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('/markets')} className="hover:text-white transition-colors cursor-pointer">Markets</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#DFC17B] font-semibold">{activeCorridor.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#152A4A] border border-[#C5A059]/40 text-[#DFC17B] text-xs font-bold uppercase tracking-widest">
                <span className="text-base">{activeCorridor.flag}</span>
                <span>TRADE CORRIDOR GUIDE</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                EXPORTING FROM INDIA TO <br />
                <span className="gold-gradient-text">{activeCorridor.name.toUpperCase()}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {activeCorridor.overview}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenRFQ(undefined)}
                  className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>REQUEST ROUTE QUOTE &amp; TRANSIT ESTIMATE</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden relative border border-white/10 site-img-box shadow-2xl">
                <EditableImage
                  storageKey={`market_img_${activeCorridor.slug}`}
                  defaultSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                  alt={`${activeCorridor.name} Maritime & Trade Gateway`}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  badgeLabel="Change Gateway Photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90 font-mono bg-[#081321]/90 p-2 rounded-lg border border-white/10 pointer-events-none">
                  Gateway: {activeCorridor.targetPorts[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-16 bg-[#081321] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Ports & Transit */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <Anchor className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-lg font-bold text-white">Ports &amp; Transit Times</h3>
              </div>
              <div className="text-xs space-y-3 text-white/80">
                <div>
                  <p className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Indian Origin Ports:</p>
                  <p className="font-medium text-white mt-0.5">Nhava Sheva (JNPT), Mundra, Chennai</p>
                </div>
                <div>
                  <p className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Destination Discharge Ports:</p>
                  <ul className="list-disc list-inside mt-1 space-y-0.5 text-white/90">
                    {activeCorridor.targetPorts.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-white/40 font-semibold uppercase tracking-wider text-[10px]">Average Transit Duration:</p>
                  <p className="font-bold text-[#DFC17B] mt-0.5 font-mono">{activeCorridor.transitTime}</p>
                </div>
              </div>
            </div>

            {/* Box 2: Regulations & Compliance */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-lg font-bold text-white">Compliance &amp; Certifications</h3>
              </div>
              <ul className="text-xs space-y-2.5 text-white/80">
                {activeCorridor.complianceCertifications.map((reg, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Top In-Demand Categories */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C5A059]" />
                <h3 className="font-serif text-lg font-bold text-white">High Demand Products</h3>
              </div>
              <div className="space-y-2">
                {activeCorridor.keyProducts.map((prod, i) => (
                  <div key={i} className="p-2.5 bg-white/5 rounded-lg border border-white/10 text-xs font-semibold text-white flex items-center justify-between">
                    <span className="truncate max-w-[200px]">{prod}</span>
                    <span className="text-[#C5A059] text-[10px] font-mono shrink-0">Export Ready</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tariffs and Duties Box */}
          <div className="p-6 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 space-y-2">
            <h4 className="font-serif text-sm font-bold text-[#DFC17B] uppercase tracking-wider">
              Tariffs, Customs Rules &amp; Bilateral Trade Framework
            </h4>
            <p className="text-xs text-white/80 leading-relaxed font-mono">
              {activeCorridor.tariffsAndDuties}
            </p>
          </div>

          {/* Trade Route CTA Banner */}
          <div className="rounded-2xl bg-gradient-to-r from-[#07111D] via-[#0B192C] to-[#07111D] border-2 border-[#C5A059] text-white p-8 text-center space-y-4 shadow-2xl">
            <h3 className="font-serif text-2xl font-bold">Shipping to {activeCorridor.name}?</h3>
            <p className="text-xs text-white/70 max-w-xl mx-auto">
              Our freight operations desk provides locked CIF/FOB quotations including all port terminal handling, export documentation, and ocean vessel scheduling.
            </p>
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#0B192C] font-bold text-xs uppercase tracking-wider hover:bg-[#DFC17B] transition-colors cursor-pointer shadow-lg"
            >
              Get Landed Cost &amp; Schedule for {activeCorridor.name}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
