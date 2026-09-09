import React from 'react';
import { 
  Globe2, 
  ArrowRight, 
  Anchor, 
  Clock, 
  FileCheck, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../types';
import { MARKET_CORRIDORS } from '../data/markets';

interface MarketsHubViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const MarketsHubView: React.FC<MarketsHubViewProps> = ({ onNavigate, onOpenRFQ }) => {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="bg-[#0B192C] text-white py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#DFC17B]">
              INTERNATIONAL SUPPLY ROUTES
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              GLOBAL TRADE CORRIDORS: <br />
              <span className="gold-gradient-text">INDIAN SUPPLY CONNECTING THE WORLD</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Navantara Exim maintains active export shipping channels and regulatory compliance frameworks across five major global trade corridors. Explore destination-specific port routes, ocean transit times, customs requirements, and tariff benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Corridors Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MARKET_CORRIDORS.map((m) => (
              <div
                key={m.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A059] transition-all flex flex-col justify-between group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{m.flag}</span>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                      {m.targetPorts.length} Major Ports
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-[#0B192C] group-hover:text-[#C5A059] transition-colors">
                    {m.name}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {m.overview}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{m.transitTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Anchor className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className="truncate">{m.targetPorts.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span className="truncate">{m.complianceCertifications[0]}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/markets/${m.slug}` as PageRoute)}
                    className="text-xs font-bold text-[#0B192C] group-hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                  >
                    Corridor Details →
                  </button>

                  <button
                    onClick={() => onOpenRFQ(undefined)}
                    className="px-3 py-1.5 rounded bg-[#0B192C] text-[#C5A059] text-xs font-bold hover:bg-[#152A4A] transition-colors"
                  >
                    Quote Route
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
