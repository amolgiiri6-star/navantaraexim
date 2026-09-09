import React, { useState } from 'react';
import { 
  Search, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Package, 
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Building2,
  Filter,
  Globe2,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../types';
import { PRODUCT_CATEGORIES } from '../data/products';
import { EditableImage } from '../components/common/EditableImage';
import { ProductsHeroBackground } from '../components/products/ProductsHeroBackground';

interface ProductsHubViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string, product?: string) => void;
}

export const ProductsHubView: React.FC<ProductsHubViewProps> = ({ onNavigate, onOpenRFQ }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const openWhatsApp = (catTitle?: string) => {
    const text = encodeURIComponent(
      `Hello Navantara Exim Trade Desk, I would like to enquire about ${catTitle || 'Indian products'} for export.`
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  const filteredCategories = PRODUCT_CATEGORIES.filter(cat => {
    const matchesSearch = 
      cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.productRange.some(p => p.toLowerCase().includes(searchTerm.toLowerCase())) ||
      cat.products.some(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedCategory === 'all') return matchesSearch;
    return matchesSearch && cat.slug === selectedCategory;
  });

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* Hero Header Section with Background Image */}
      <section className="relative bg-[#081321] text-white py-16 lg:py-24 border-b border-white/10 overflow-hidden min-h-[540px] flex items-center">
        {/* Background Image Layer with Text Legibility Setting */}
        <ProductsHeroBackground />

        {/* Foreground Content with High-Contrast Glass Scrim to cope with text over image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="bg-[#060E18]/80 backdrop-blur-md p-6 sm:p-9 rounded-3xl border border-white/15 shadow-2xl space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#152A4A]/90 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#DFC17B] rounded-r-md">
                  <Globe2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>INDIAN SUPPLIER • EXPORT PARTNER</span>
                </div>
                
                {/* Heading requested by prompt */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                  PRODUCTS FROM INDIA
                </h1>

                {/* Subheading requested by prompt */}
                <p className="font-serif text-lg sm:text-xl text-[#DFC17B] font-semibold drop-shadow-sm">
                  Selected Indian products supplied to international buyers, distributors and commercial businesses.
                </p>

                <p className="text-sm text-slate-100/90 leading-relaxed font-normal">
                  Explore our core product categories sourced from verified manufacturing facilities and agricultural clusters across India. We manage product coordination, batch quality reports, export packaging, and port shipments to global destinations.
                </p>

                {/* Search & Category Filter Controls */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search products, botanicals, cosmetics, fabrics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-[#081321]/95 border border-white/25 focus:border-[#C5A059] rounded-xl text-white placeholder-white/50 text-sm outline-none transition-colors shadow-inner"
                    />
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-[#081321]/95 border border-white/25 focus:border-[#C5A059] rounded-xl text-white text-sm outline-none cursor-pointer shadow-inner"
                  >
                    <option value="all">All 6 Categories</option>
                    {PRODUCT_CATEGORIES.map(c => (
                      <option key={c.id} value={c.slug}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right side teaser pill badge */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="bg-[#081321]/80 backdrop-blur-md p-5 rounded-2xl border border-[#C5A059]/30 text-right space-y-2 shadow-2xl max-w-xs">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DFC17B] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Verified Export Hub</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  Full container load (FCL) &amp; LCL consignments dispatched from JNPT, Mundra &amp; Chennai ports to 65+ countries.
                </p>
                <div className="text-[11px] font-mono text-[#C5A059] font-semibold pt-1">
                  100% Quality &amp; COA Inspected
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Strip */}
      <section className="py-6 bg-[#081321]/60 border-b border-white/10 sticky top-[72px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#C5A059] text-[#0B192C]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              All Categories ({PRODUCT_CATEGORIES.length})
            </button>
            {PRODUCT_CATEGORIES.map(c => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.slug)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === c.slug
                    ? 'bg-[#C5A059] text-[#0B192C]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Categories & Products Grid */}
      <section className="py-16 sm:py-20 bg-[#0B192C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <p className="text-white/60 text-base">No products found matching "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="px-6 py-2.5 rounded-lg bg-[#C5A059] text-[#0B192C] font-bold text-xs uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div 
                key={cat.id} 
                className="rounded-3xl bg-[#081321] border border-white/10 overflow-hidden shadow-2xl p-6 sm:p-10 space-y-8"
              >
                {/* Category Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-8">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] bg-white/5 px-2.5 py-0.5 rounded-sm border border-white/10">
                        {cat.subtitle}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-2xl">
                      {cat.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onNavigate(`/products/${cat.slug}` as PageRoute)}
                        className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <span>View Category Details</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" />
                      </button>
                      <button
                        onClick={() => onOpenRFQ(cat.slug)}
                        className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                      >
                        Request Enquiry
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="rounded-2xl overflow-hidden relative border border-white/10 site-img-box">
                      <EditableImage 
                        storageKey={`cat_img_${cat.id}`}
                        defaultSrc={cat.heroImage} 
                        alt={cat.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                        badgeLabel="Change Category Photo"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-80 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/80 font-medium bg-[#0B192C]/90 p-2 rounded-lg border border-white/10 pointer-events-none">
                        Origin: India • Port Gateways: JNPT & Mundra
                      </div>
                    </div>
                  </div>
                </div>

                {/* Products Grid Inside This Category */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-bold text-white">
                      Featured Products in {cat.title}
                    </h3>
                    <span className="text-xs text-white/50">{cat.products.length} Products Available</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cat.products.map((p) => (
                      <div 
                        key={p.id}
                        className="p-5 rounded-2xl bg-[#0B192C] border border-white/10 hover:border-[#C5A059]/40 flex flex-col justify-between space-y-4 transition-all"
                      >
                        <div className="space-y-3">
                          <div className="rounded-xl overflow-hidden bg-black relative site-img-box-sm">
                            <EditableImage 
                              storageKey={`prod_img_${p.id}`}
                              defaultSrc={p.image} 
                              alt={p.name}
                              className="w-full h-full object-cover"
                              containerClassName="w-full h-full"
                              badgeLabel="Change"
                            />
                            {p.botanicalOrTechnicalName && (
                              <div className="absolute bottom-1.5 left-1.5 right-1.5 bg-[#081321]/90 px-2 py-0.5 rounded text-[10px] font-mono text-[#DFC17B] truncate pointer-events-none">
                                {p.botanicalOrTechnicalName}
                              </div>
                            )}
                          </div>

                          <h4 className="font-serif font-bold text-sm text-white">
                            {p.name}
                          </h4>

                          <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                            {p.description}
                          </p>

                          <div className="space-y-1 text-[11px] text-white/60 pt-2 border-t border-white/5">
                            <div><span className="text-white/40">Origin:</span> {p.origin}</div>
                            {p.packaging && <div><span className="text-white/40">Packaging:</span> {p.packaging}</div>}
                          </div>
                        </div>

                        <div className="pt-2 flex items-center gap-2">
                          <button
                            onClick={() => onOpenRFQ(cat.slug, p.name)}
                            className="w-full py-2.5 rounded-lg bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-[11px] uppercase tracking-wider transition-colors cursor-pointer text-center flex items-center justify-center gap-1"
                          >
                            <Send className="w-3 h-3" />
                            <span>Enquire</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Global Sourcing Consultation Strip */}
      <section className="py-16 bg-[#081321] border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
            Custom Requirements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Need a Specific Product Not Listed Above?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Navantara Exim maintains connections across diverse manufacturing clusters in India. Tell us your technical specifications, required volume, and destination port.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
            >
              Request Custom Product Sourcing
            </button>
            <button
              onClick={() => openWhatsApp()}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
