import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Package, 
  Layers, 
  MessageCircle, 
  ChevronRight,
  Building2,
  Users,
  FileCheck,
  Sparkles,
  Droplets,
  FlaskConical,
  Wind,
  Flame,
  Tag,
  Filter,
  Star,
  Scissors,
  Award,
  Info,
  Check,
  ExternalLink,
  Sliders,
  Eye,
  BookOpen,
  Leaf,
  Heart,
  Download
} from 'lucide-react';
import { PageRoute, ProductCategory } from '../types';
import { PRODUCT_CATEGORIES, findCategoryBySlug } from '../data/products';
import { EditableImage } from '../components/common/EditableImage';

interface CategoryDetailViewProps {
  category?: ProductCategory;
  categorySlug?: string;
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string, product?: string) => void;
}

export const CategoryDetailView: React.FC<CategoryDetailViewProps> = ({ 
  category: propCategory,
  categorySlug,
  onNavigate, 
  onOpenRFQ 
}) => {
  // Resolve category safely from prop or slug
  const activeCategory = propCategory || (categorySlug ? findCategoryBySlug(categorySlug) : undefined) || PRODUCT_CATEGORIES[0];

  const isTextiles = activeCategory.id === 'textiles';
  const isPerfumes = activeCategory.id === 'perfumes-attars';
  const isCosmetics = activeCategory.id === 'cosmetics';
  const isSpecialty = activeCategory.id === 'speciality-products';

  const [selectedHsnFilter, setSelectedHsnFilter] = useState<string>('all');
  const [activeWeaveTab, setActiveWeaveTab] = useState<'4-thread' | '3-thread'>('4-thread');
  const [activeCosmeticTab, setActiveCosmeticTab] = useState<'brushes-engineering' | 'raw-materials' | 'clean-beauty' | 'customs-compliance'>('brushes-engineering');
  const [activeSpecialtyTab, setActiveSpecialtyTab] = useState<'hsn-breakdown' | 'curing-processing' | 'regulatory-compliance'>('hsn-breakdown');

  const displayedProducts = activeCategory.products.filter((p) => {
    if (isSpecialty) {
      if (selectedHsnFilter === 'all') return true;
      if (selectedHsnFilter === '24039910') return p.hsnCode === '24039910';
      if (selectedHsnFilter === '24039920') return p.hsnCode === '24039920';
      if (selectedHsnFilter === '24039930') return p.hsnCode === '24039930';
      if (selectedHsnFilter === '24039940') return p.hsnCode === '24039940';
      if (selectedHsnFilter === '24039970') return p.hsnCode === '24039970';
      return true;
    }
    if (isCosmetics) {
      if (selectedHsnFilter === 'all') return true;
      if (selectedHsnFilter === '96033020') return p.hsnCode === '96033020';
      if (selectedHsnFilter === '96033010') return p.hsnCode === '96033010';
      if (selectedHsnFilter === '96033090') return p.hsnCode === '96033090';
      if (selectedHsnFilter === '9603') return p.hsnCode?.startsWith('9603');
      if (selectedHsnFilter === '33079090') return p.hsnCode === '33079090';
      if (selectedHsnFilter === 'wipes-sheets') {
        return p.hsnCode === '33079090' && (
          p.name.toLowerCase().includes('wipe') || 
          p.name.toLowerCase().includes('sheet')
        );
      }
      return true;
    }
    if (isPerfumes) {
      if (selectedHsnFilter === 'all') return true;
      if (selectedHsnFilter === '33019031') return p.hsnCode === '33019031';
      if (selectedHsnFilter === '33030020') return p.hsnCode === '33030020';
      if (selectedHsnFilter === '33030030') return p.hsnCode === '33030030';
      if (selectedHsnFilter === '33019060') return p.hsnCode === '33019060';
      if (selectedHsnFilter === '3301') return p.hsnCategory?.includes('Sub-Chapter 3301');
      if (selectedHsnFilter === '33072000') return p.hsnCode === '33072000';
      return true;
    }
    if (isTextiles) {
      if (selectedHsnFilter === 'all') return true;
      if (selectedHsnFilter === '52083310') return p.hsnCode === '52083310';
      if (selectedHsnFilter === 'twill-4th') {
        return p.hsnCode === '52083310' && (
          p.botanicalOrTechnicalName?.includes('2/2') || 
          p.botanicalOrTechnicalName?.includes('3/1') || 
          p.name.toLowerCase().includes('4-thread') ||
          p.name.toLowerCase().includes('herringbone') ||
          p.name.toLowerCase().includes('satin')
        );
      }
      if (selectedHsnFilter === 'twill-3th') {
        return p.hsnCode === '52083310' && (
          p.botanicalOrTechnicalName?.includes('2/1') || 
          p.name.toLowerCase().includes('3-thread') ||
          p.name.toLowerCase().includes('peach')
        );
      }
      if (selectedHsnFilter === '52083120') return p.hsnCode === '52083120';
      if (selectedHsnFilter === '52083990') return p.hsnCode === '52083990';
      if (selectedHsnFilter === '53091910') return p.hsnCode === '53091910';
      return true;
    }
    return true;
  });

  const openWhatsApp = (productName?: string) => {
    const text = encodeURIComponent(
      `Hello Navantara Exim Trade Desk, I would like to enquire about ${productName || activeCategory.title} from India.`
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* Category Hero Section */}
      <section className="relative bg-[#081321] text-white py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <button onClick={() => onNavigate('/products')} className="hover:text-white transition-colors">Products</button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#DFC17B] font-semibold">{activeCategory.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border-l-4 border-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                {isTextiles ? (
                  <>
                    <Star className="w-3.5 h-3.5 text-[#DFC17B] fill-[#DFC17B]" />
                    <span>PRIMARY EXPORT FOCUS • HS 52083310 TWILL SHIRTING</span>
                  </>
                ) : isCosmetics ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#DFC17B]" />
                    <span>HS 9603.30 PRECISION BRUSHES &amp; HS 33079090 CLEAN-BEAUTY</span>
                  </>
                ) : isSpecialty ? (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>TOBACCO BOARD REGISTERED • CHAPTER 24 SPECIALTY EXPORTS</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>INDIAN SUPPLIER • EXPORT PARTNER</span>
                  </>
                )}
              </div>

              {/* H1 as instructed: [PRODUCT CATEGORY] FROM INDIA */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {activeCategory.title.toUpperCase()} FROM INDIA
              </h1>

              <p className="font-serif text-lg text-[#DFC17B] font-medium">
                {isTextiles 
                  ? "HS 52083310: Woven fabrics of cotton, containing ≥ 85% cotton by weight, weighing not more than 200 g/m² - Dyed: 3-thread or 4-thread twill shirting."
                  : isCosmetics
                  ? "HS 9603.30: Cosmetic Brushes (96033020), Artists' Brushes (96033010), Applicators (96033090) & HS 33079090 Botanical Formulations"
                  : isSpecialty
                  ? "HS 2403.99: Chewing Tobacco, Filter Khaini, Compounded Preparations, Jarda, Snuff & Cut-Tobacco"
                  : activeCategory.subtitle
                }
              </p>

              {/* Short buyer-focused introduction */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                {isTextiles ? (
                  <>
                    Specialized Indian mill supply centered on official tariff classification <strong className="text-[#DFC17B]">HS 52083310</strong>. Woven from 100% combed compact Indian Shankar-6 and Suvin long-staple cotton (≥ 85% cotton purity) on high-speed air-jet and dobby looms. Calibrated strictly below 200 g/m² for executive 3-thread (2/1) and 4-thread (2/2 & 3/1) twills with continuous vat/reactive dyeing, liquid ammonia silk finishes, residual shrinkage &lt; 1.8%, and OEKO-TEX Standard 100 certification.
                  </>
                ) : isCosmetics ? (
                  <>
                    Dual-stream Indian export excellence spanning <strong className="text-[#DFC17B] font-mono">Customs Tariff Heading HS 9603.30</strong> precision applicator brushes and <strong className="text-emerald-300 font-mono">HS 33079090</strong> clean-beauty botanical formulations. We supply global brands and educational institutions with <strong className="text-white">cruelty-free synthetic PBT cosmetic brushes (HS 96033020)</strong> with micro-tapered zero-shed filaments, <strong className="text-white">high-demand artists&apos; &amp; writing brushes (HS 96033010)</strong> engineered for fine arts academies and school boards (EN71-3 / ASTM D-4236 certified), <strong className="text-white">hygienic specialty silicone applicators (HS 96033090)</strong> for zero product waste, and organic Indian botanical formulations (cold-stabilized aloe vera, wild vetiver, and soapnut herbal bases) commanding high clean-beauty premiums.
                  </>
                ) : isSpecialty ? (
                  <>
                    Export-grade Indian manufactured tobacco and specialty preparations under Chapter 24 (<strong className="text-[#DFC17B] font-mono">Customs Tariff Heading HS 2403.99</strong>). Sourced from registered primary processing facilities across Gujarat, Andhra Pradesh, and Uttar Pradesh with full Tobacco Board of India RCMC compliance, DPPQS Phytosanitary certification, CORESTA testing standards, multi-layer hermetic nitrogen barrier packaging, and destination-customized statutory health warning compliance for authorized international distributors.
                  </>
                ) : (
                  <>
                    {activeCategory.summary} India is an internationally renowned supply origin for {activeCategory.title.toLowerCase()}, backed by deep agricultural cultivation, traditional processing expertise, and modern export facilities. Navantara Exim helps international buyers connect with verified Indian product supply, coordinate specifications, and manage export documentation and shipping seamlessly.
                  </>
                )}
              </p>

              {/* Key Technical Highlights Badges for Textiles */}
              {isTextiles && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Customs Tariff</span>
                    <span className="text-xs font-mono font-bold text-[#DFC17B]">HS 52083310</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Fiber Purity</span>
                    <span className="text-xs font-bold text-white">≥ 85% Cotton</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Fabric Weight</span>
                    <span className="text-xs font-bold text-white">≤ 200 g/m² (GSM)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Weave Types</span>
                    <span className="text-xs font-bold text-[#DFC17B]">3 & 4-Thread Twill</span>
                  </div>
                </div>
              )}

              {/* Key Technical Highlights Badges for Cosmetics & HS 9603.30 / HS 33079090 */}
              {isCosmetics && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Customs Tariffs</span>
                    <span className="text-xs font-mono font-bold text-[#DFC17B]">HS 9603.30 • 3307.90</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Filament Drive</span>
                    <span className="text-xs font-bold text-white">Cruelty-Free PBT</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Sector Testing</span>
                    <span className="text-xs font-bold text-white">EN71-3 &amp; ASTM D-4236</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-[#C5A059]/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Market Focus</span>
                    <span className="text-xs font-bold text-[#DFC17B]">Educational &amp; Clean-Beauty</span>
                  </div>
                </div>
              )}

              {/* Key Technical Highlights Badges for Specialty Goods / Tobacco HS 2403.99 */}
              {isSpecialty && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Customs Tariff</span>
                    <span className="text-xs font-mono font-bold text-amber-400">HS 2403.99</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Statutory Board</span>
                    <span className="text-xs font-bold text-white">Tobacco Board (RCMC)</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Quality Standards</span>
                    <span className="text-xs font-bold text-white">CORESTA &amp; GRL Tested</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-amber-500/30">
                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-wider">Export Packaging</span>
                    <span className="text-xs font-bold text-amber-400">Nitrogen Sealed Cans</span>
                  </div>
                </div>
              )}

              <div className="pt-3 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenRFQ(activeCategory.slug)}
                  className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {isTextiles 
                      ? 'ENQUIRE ABOUT SHIRTING FABRICS' 
                      : isCosmetics 
                      ? 'ENQUIRE ABOUT BRUSHES & CLEAN-BEAUTY' 
                      : isSpecialty
                      ? 'ENQUIRE ABOUT CHAPTER 24 TOBACCO EXPORT'
                      : 'ENQUIRE ABOUT THIS PRODUCT'}
                  </span>
                </button>

                <button
                  onClick={() => openWhatsApp(isTextiles ? 'HS 52083310 Shirting Fabrics' : isCosmetics ? 'HS 9603.30 Applicator Brushes & HS 33079090 Clean-Beauty Formulations' : isSpecialty ? 'HS 2403.99 Specialty Tobacco Preparations' : undefined)}
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-white/20 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Trade Desk</span>
                </button>
              </div>
            </div>

            {/* Category Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#C5A059]/40 shadow-2xl bg-[#0B192C] site-img-box-hero">
                <EditableImage
                  storageKey={`cat_img_${activeCategory.id}_v2`}
                  defaultSrc={activeCategory.heroImage}
                  alt={`${activeCategory.title} export from India`}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  badgeLabel="Change Category Photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-75 pointer-events-none" />
                {!isCosmetics && (
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B192C]/90 border border-white/10 backdrop-blur-md pointer-events-none">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/60">
                        {isTextiles ? 'Primary HS Code Focus:' : isSpecialty ? 'Primary Customs Tariff:' : 'Export Operations:'}
                      </span>
                      <span className="text-[#DFC17B] font-bold flex items-center gap-1 font-mono">
                        {isTextiles ? (
                          <>
                            <Tag className="w-3.5 h-3.5 text-[#C5A059]" /> HS 52083310 (Dyed Twill)
                          </>
                        ) : isSpecialty ? (
                          <>
                            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> HS 2403.99 Specialty Tobacco
                          </>
                        ) : (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> JNPT & Mundra Dispatch
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE SECTION */}
      <section className="py-14 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Target Commercial Buyers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Who We Serve
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                We provide reliable supply coordination and export support to established business entities worldwide.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
              {[
                { title: 'Importers', desc: 'Direct international import consignment coordination' },
                { title: 'Wholesalers', desc: 'Volume batch orders and container-load supply' },
                { title: 'Distributors', desc: 'Regional stock replenishment and supply contracts' },
                { title: 'Retailers', desc: 'Packaged shelf-ready goods and multi-item consolidations' },
                { title: 'Brands', desc: 'Formulation-grade ingredients and custom packaging coordination' },
                { title: 'Commercial Buyers', desc: 'Institutional and industrial raw material supply' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#081321] border border-white/10 text-center space-y-1.5">
                  <Users className="w-5 h-5 text-[#C5A059] mx-auto" />
                  <p className="font-bold text-xs text-white uppercase tracking-wider">{item.title}</p>
                  <p className="text-[11px] text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PORTFOLIO SECTION */}
      <section className="py-16 sm:py-20 bg-[#081321] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                Verified Product Portfolio
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeCategory.title} Product Range
              </h2>
              <p className="text-xs sm:text-sm text-white/70">
                Selected export-grade catalog classified under official international customs tariffs with full batch documentation.
              </p>
            </div>
            <button
              onClick={() => onOpenRFQ(activeCategory.slug)}
              className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors self-start sm:self-auto cursor-pointer shadow-md"
            >
              Enquire For Entire Category
            </button>
          </div>

          {/* Primary Spotlight Banner for Textiles / Shirting Fabrics (HS 52083310) */}
          {isTextiles && (
            <div className="rounded-2xl bg-gradient-to-r from-[#07111D] via-[#0B192C] to-[#07111D] border-2 border-[#C5A059] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-xs font-bold uppercase tracking-wider text-[#DFC17B]">
                    <Star className="w-3.5 h-3.5 fill-[#DFC17B] text-[#DFC17B]" />
                    <span>PRIMARY EXPORT SPECIALIZATION: HS 52083310</span>
                  </div>
                  <span className="text-xs font-mono text-[#DFC17B] bg-black/40 px-3 py-1 rounded-md border border-white/10">
                    WCO Chapter 52 • Cotton Shirting Tariff
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Woven fabrics of cotton, containing ≥ 85% cotton by weight, weighing not more than 200 g/m² - Dyed: 3-thread or 4-thread twill shirting.
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed max-w-4xl">
                    Customs classification <strong className="text-[#DFC17B] font-mono">HS 52083310</strong> is India’s signature high-volume export category for luxury dress shirts and corporate uniforms. By strictly maintaining ≥ 85% natural cotton purity and keeping finished fabric weight ≤ 200 g/m², consignments qualify for frictionless international customs clearance and preferential duty benefits under global trade agreements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[#C5A059] tracking-wider">HS Tariff Code</span>
                      <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <p className="font-mono text-base font-bold text-[#DFC17B]">5208.33.10</p>
                    <p className="text-[11px] text-white/60">Dyed 3-thread & 4-thread twill shirting fabrics</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[#C5A059] tracking-wider">Fiber Purity Rule</span>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">≥ 85% Cotton</p>
                    <p className="text-[11px] text-white/60">Combed compact Indian Shankar-6 & Suvin fibers</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[#C5A059] tracking-wider">Weight Ceiling</span>
                      <Sliders className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">≤ 200 g/m²</p>
                    <p className="text-[11px] text-white/60">Calibrated 115–160 GSM for executive shirting drape</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-[#C5A059] tracking-wider">Dyeing & Finish</span>
                      <Award className="w-3.5 h-3.5 text-[#C5A059]" />
                    </div>
                    <p className="font-mono text-base font-bold text-[#DFC17B]">Vat / Reactive</p>
                    <p className="text-[11px] text-white/60">Continuous Pad-Steam, Liquid Ammonia, OEKO-TEX 100</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="text-white/40">Verified Weaving Hubs:</span>
                    <span className="text-white font-medium">Ahmedabad, Coimbatore, Surat, Ichalkaranji</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'HS 52083310 Swatch Book')}
                      className="px-4 py-2 bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center gap-1.5 text-xs"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Request HS 52083310 Swatch Hangers</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Primary Spotlight Banner for Cosmetics (HS 9603.30 Applicator Brushes & HS 33079090 Clean-Beauty) */}
          {isCosmetics && (
            <div className="rounded-2xl bg-gradient-to-r from-[#061814] via-[#0B211E] to-[#081321] border-2 border-emerald-500/70 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-xs font-bold uppercase tracking-wider text-emerald-300">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                    <span>PRECISION APPLICATOR BRUSHES (HS 9603.30) &amp; CLEAN-BEAUTY (HS 33079090)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#DFC17B] bg-black/50 px-3 py-1 rounded-md border border-[#DFC17B]/40">
                      HS 9603.30 Brushes
                    </span>
                    <span className="text-xs font-mono text-emerald-300 bg-black/50 px-3 py-1 rounded-md border border-emerald-500/40">
                      HS 3307.90 Formulations
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Cruelty-Free Synthetic PBT Brushes, Educational Fine Arts Applicators &amp; Clean-Beauty Formulations
                  </h3>
                  <p className="text-sm text-emerald-100/85 leading-relaxed max-w-4xl">
                    Sourcing directly from GMP cleanroom facilities and precision brush manufacturing lines across India. Driven by <strong className="text-[#DFC17B]">cruelty-free synthetic PBT micro-tapered filaments (HS 96033020)</strong> rapidly replacing animal hair in global beauty markets, <strong className="text-white">institutional artists&apos; and writing brushes (HS 96033010)</strong> serving high-demand educational and fine arts academies, <strong className="text-teal-300">hygienic zero-waste silicone applicators (HS 96033090)</strong>, and <strong className="text-emerald-300">organic Indian botanical preparations (HS 33079090)</strong> commanding 35–60% clean-label retail premiums.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {/* Card 1: HS 96033020 Cosmetic Brushes */}
                  <div className="p-4 rounded-xl bg-white/5 border border-amber-500/30 space-y-1.5 hover:border-amber-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-300 tracking-wider">HS 96033020</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Cosmetic Brushes</p>
                    <p className="text-[11px] text-[#DFC17B] font-semibold">Cruelty-free synthetic PBT filaments drive</p>
                    <p className="text-[10px] text-white/60">Zero animal shed, seamless double-crimped ferrules, FSC hardwood handles</p>
                  </div>

                  {/* Card 2: HS 96033010 Artists' & Writing Brushes */}
                  <div className="p-4 rounded-xl bg-white/5 border border-indigo-500/30 space-y-1.5 hover:border-indigo-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-indigo-300 tracking-wider">HS 96033010</span>
                      <Award className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Artists&apos; &amp; Writing</p>
                    <p className="text-[11px] text-indigo-200 font-semibold">High educational &amp; fine arts demand</p>
                    <p className="text-[10px] text-white/60">Multi-diameter reservoir, needlepoint snap, EN 71-3 / ASTM D-4236 non-toxic</p>
                  </div>

                  {/* Card 3: HS 96033090 Other Applicators */}
                  <div className="p-4 rounded-xl bg-white/5 border border-teal-500/30 space-y-1.5 hover:border-teal-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-teal-300 tracking-wider">HS 96033090</span>
                      <Package className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Other Applicator Brushes</p>
                    <p className="text-[11px] text-teal-200 font-semibold">Medical silicone &amp; micro-tools</p>
                    <p className="text-[10px] text-white/60">100% non-porous zero product waste, aesthetic clinical spatulas &amp; doe-foot</p>
                  </div>

                  {/* Card 4: HS 33079090 Clean-Beauty Botanical */}
                  <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/30 space-y-1.5 hover:border-emerald-400 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-emerald-400 tracking-wider">HS 33079090</span>
                      <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Clean-Beauty Formulations</p>
                    <p className="text-[11px] text-emerald-200 font-semibold">Organic Indian botanical bases</p>
                    <p className="text-[10px] text-white/60">Cold-stabilized aloe vera, wild vetiver, drawer sheets &amp; herbal cleansing wipes</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-emerald-500/20 text-xs">
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="text-white/40">Manufacturing &amp; Cleanroom Clusters:</span>
                    <span className="text-white font-medium">Maharashtra, Tamil Nadu, Gujarat, Uttar Pradesh &amp; Kannauj</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'HS 9603.30 Precision Brush Production Samples (Cosmetics & Fine Arts)')}
                      className="px-4 py-2 bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center gap-1.5 text-xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Request HS 9603 Brush Samples</span>
                    </button>
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'HS 33079090 Clean-Beauty Formulation Dossier')}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-[#07111D] font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center gap-1.5 text-xs"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Request Formulation Dossier</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Primary Spotlight Banner for Specialty Goods (HS 2403.99 Manufactured Tobacco & Preparations) */}
          {isSpecialty && (
            <div className="rounded-2xl bg-gradient-to-r from-[#191007] via-[#24170A] to-[#0A1624] border-2 border-amber-600/80 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-xs font-bold uppercase tracking-wider text-amber-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>CHAPTER 24 EXPORT FOCUS: HS 2403.99 SPECIALTY TOBACCO PREPARATIONS</span>
                  </div>
                  <span className="text-xs font-mono text-amber-300 bg-black/50 px-3 py-1 rounded-md border border-amber-500/40">
                    WCO Chapter 24 • Customs Tariff Heading 2403.99
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Export-Calibrated Manufactured Tobacco &amp; Heritage Preparations under HS 2403.99
                  </h3>
                  <p className="text-sm text-amber-100/85 leading-relaxed max-w-4xl">
                    India ranks as the <strong className="text-white">world&rsquo;s second-largest tobacco producer and exporter</strong>. Under customs tariff heading <strong className="text-amber-400 font-mono">HS 2403.99</strong>, Navantara Exim connects international licensed importers with primary processing clusters across Gujarat, Andhra Pradesh, and Uttar Pradesh. Consignments are backed by <strong className="text-white">Tobacco Board of India RCMC clearance</strong>, <strong className="text-amber-300">DPPQS Phytosanitary certification</strong>, <strong className="text-white">CORESTA testing standards</strong>, and hermetic nitrogen-flushed barrier packaging.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">HS 24039910</span>
                      <Tag className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Chewing Tobacco &amp; Khaini</p>
                    <p className="text-[11px] text-white/60">Portioned micro-porous filter sachets &amp; calibrated loose flakes</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">HS 24039920</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Compounded Preparations</p>
                    <p className="text-[11px] text-white/60">Cardamom, clove, kewra &amp; saffron infused masticatory blends</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">HS 24039930</span>
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Jarda Scented Tobacco</p>
                    <p className="text-[11px] text-white/60">Heritage Zafrani &amp; silver-leaf decoctions aged in sealed tins</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">HS 24039940 &amp; 70</span>
                      <Scissors className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="font-mono text-base font-bold text-white">Snuff &amp; Cut-Tobacco</p>
                    <p className="text-[11px] text-white/60">Micro-milled nasal snuff &amp; 0.6mm-1.0mm shredded FCV/Burley rag</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-amber-500/20 text-xs">
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="text-white/40">Primary Processing Hubs &amp; Dispatch Ports:</span>
                    <span className="text-white font-medium">Gujarat, Andhra Pradesh, Uttar Pradesh | Nhava Sheva (JNPT) &amp; Mundra</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'Chapter 24 HS 2403.99 Export Spec Dossier')}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-[#140C04] font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow flex items-center gap-1.5 text-xs"
                    >
                      <Package className="w-3.5 h-3.5" />
                      <span>Request Chapter 24 Spec Dossier</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive HSN Filter Tabs for Shirting Fabrics (Textiles) */}
          {isTextiles && (
            <div className="bg-[#0B192C] p-4 sm:p-5 rounded-2xl border border-[#C5A059]/40 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC17B]">
                  <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Filter Shirting Fabrics by HSN Classification & Weave:</span>
                </div>
                <span className="text-[11px] font-mono text-white/50">
                  Showing {displayedProducts.length} of {activeCategory.products.length} fabrics
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { id: 'all', label: 'All Shirting & Weaves', count: activeCategory.products.length, primary: false },
                  { id: '52083310', label: '★ HS 52083310: 3/4-Thread Dyed Twill', count: activeCategory.products.filter(p => p.hsnCode === '52083310').length, primary: true },
                  { id: 'twill-4th', label: '4-Thread Twill (2/2 & 3/1)', count: activeCategory.products.filter(p => p.hsnCode === '52083310' && (p.botanicalOrTechnicalName?.includes('2/2') || p.botanicalOrTechnicalName?.includes('3/1') || p.name.includes('4-Thread') || p.name.includes('Herringbone') || p.name.includes('Satin'))).length, primary: false },
                  { id: 'twill-3th', label: '3-Thread Twill (2/1)', count: activeCategory.products.filter(p => p.hsnCode === '52083310' && (p.botanicalOrTechnicalName?.includes('2/1') || p.name.includes('3-Thread') || p.name.includes('Peach'))).length, primary: false },
                  { id: '52083120', label: 'Poplin (52083120)', count: activeCategory.products.filter(p => p.hsnCode === '52083120').length, primary: false },
                  { id: '52083990', label: 'Oxford (52083990)', count: activeCategory.products.filter(p => p.hsnCode === '52083990').length, primary: false },
                  { id: '53091910', label: 'Pure Linen (53091910)', count: activeCategory.products.filter(p => p.hsnCode === '53091910').length, primary: false },
                ].map((tab) => {
                  const isActive = selectedHsnFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedHsnFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A059] text-[#0B192C] font-bold shadow-md shadow-[#C5A059]/20 ring-2 ring-[#DFC17B]'
                          : tab.primary
                          ? 'bg-[#C5A059]/15 hover:bg-[#C5A059]/25 text-[#DFC17B] border border-[#C5A059]/50 font-semibold'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-[#0B192C]/20 text-[#0B192C]' : 'bg-white/10 text-white/60'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive HSN Filter Tabs for Cosmetics Category */}
          {isCosmetics && (
            <div className="bg-[#0B192C] p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Filter className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Filter by Export HS Classification &amp; Product Specification:</span>
                </div>
                <span className="text-[11px] font-mono text-white/50">
                  Showing {displayedProducts.length} of {activeCategory.products.length} products
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { id: 'all', label: 'All Cosmetics & Brushes', count: activeCategory.products.length, primary: false },
                  { id: '96033020', label: '★ HS 96033020: Cosmetic Brushes (Synthetic PBT)', count: activeCategory.products.filter(p => p.hsnCode === '96033020').length, primary: true },
                  { id: '96033010', label: '★ HS 96033010: Artists\' & Writing Brushes', count: activeCategory.products.filter(p => p.hsnCode === '96033010').length, primary: true },
                  { id: '96033090', label: '★ HS 96033090: Other Applicator Brushes', count: activeCategory.products.filter(p => p.hsnCode === '96033090').length, primary: true },
                  { id: '33079090', label: 'HS 33079090: Botanical Clean-Beauty', count: activeCategory.products.filter(p => p.hsnCode === '33079090').length, primary: false },
                  { id: 'wipes-sheets', label: 'Herbal Wipes & Sheets (33079090)', count: activeCategory.products.filter(p => p.hsnCode === '33079090' && (p.name.toLowerCase().includes('wipe') || p.name.toLowerCase().includes('sheet'))).length, primary: false },
                ].map((tab) => {
                  const isActive = selectedHsnFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedHsnFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500 text-[#07111D] font-bold shadow-md shadow-emerald-500/20 ring-2 ring-emerald-300'
                          : tab.primary
                          ? 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 font-semibold'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-[#07111D]/20 text-[#07111D]' : 'bg-white/10 text-white/60'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive HSN Filter Tabs for Perfumes & Attars Category */}
          {activeCategory.id === 'perfumes-attars' && (
            <div className="bg-[#0B192C] p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC17B]">
                  <Filter className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Filter by 8-Digit Export HSN Classification:</span>
                </div>
                <span className="text-[11px] font-mono text-white/50">
                  Showing {displayedProducts.length} of {activeCategory.products.length} items
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { id: 'all', label: 'All Export Categories', count: activeCategory.products.length },
                  { id: '33019031', label: 'Attars in Fixed Oil (33019031)', count: activeCategory.products.filter(p => p.hsnCode === '33019031').length },
                  { id: '33030020', label: 'Rose Water (33030020)', count: activeCategory.products.filter(p => p.hsnCode === '33030020').length },
                  { id: '33030030', label: 'Keora Water (33030030)', count: activeCategory.products.filter(p => p.hsnCode === '33030030').length },
                  { id: '33019060', label: 'Aqueous Distillates (33019060)', count: activeCategory.products.filter(p => p.hsnCode === '33019060').length },
                  { id: '3301', label: 'Key Essential Oils (Sub-Chapter 3301)', count: activeCategory.products.filter(p => p.hsnCategory?.includes('Sub-Chapter 3301')).length },
                  { id: '33072000', label: 'Roll-Ons & Deodorants (33072000)', count: activeCategory.products.filter(p => p.hsnCode === '33072000').length },
                ].map((tab) => {
                  const isActive = selectedHsnFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedHsnFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-[#C5A059] text-[#0B192C] font-bold shadow-md shadow-[#C5A059]/20'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-[#0B192C]/20 text-[#0B192C]' : 'bg-white/10 text-white/60'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Interactive HSN Filter Tabs for Specialty Goods (Chapter 24 Tobacco HS 2403.99) */}
          {isSpecialty && (
            <div className="bg-[#0B192C] p-4 sm:p-5 rounded-2xl border border-amber-500/40 space-y-3 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
                  <Filter className="w-3.5 h-3.5 text-amber-400" />
                  <span>Filter by 8-Digit Customs Tariff Heading (HS 2403.99):</span>
                </div>
                <span className="text-[11px] font-mono text-white/50">
                  Showing {displayedProducts.length} of {activeCategory.products.length} products
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  { id: 'all', label: 'All Chapter 24 Products', count: activeCategory.products.length, primary: false },
                  { id: '24039910', label: '★ HS 24039910: Chewing Tobacco / Filter Khaini', count: activeCategory.products.filter(p => p.hsnCode === '24039910').length, primary: true },
                  { id: '24039920', label: 'HS 24039920: Preparations Containing Chewing Tobacco', count: activeCategory.products.filter(p => p.hsnCode === '24039920').length, primary: false },
                  { id: '24039930', label: 'HS 24039930: Jarda Scented Tobacco', count: activeCategory.products.filter(p => p.hsnCode === '24039930').length, primary: false },
                  { id: '24039940', label: 'HS 24039940: Snuff (Nasal & Oral)', count: activeCategory.products.filter(p => p.hsnCode === '24039940').length, primary: false },
                  { id: '24039970', label: 'HS 24039970: Cut-Tobacco (Rag Cut Shredded)', count: activeCategory.products.filter(p => p.hsnCode === '24039970').length, primary: false },
                ].map((tab) => {
                  const isActive = selectedHsnFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedHsnFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-medium transition-all flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-[#140C04] font-bold shadow-md shadow-amber-500/20 ring-2 ring-amber-300'
                          : tab.primary
                          ? 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 font-semibold'
                          : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5'
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? 'bg-[#140C04]/20 text-[#140C04]' : 'bg-white/10 text-white/60'
                      }`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((p) => {
              const is52083310 = p.hsnCode === '52083310';
              const is33079090 = p.hsnCode === '33079090';
              const is240399 = p.hsnCode?.startsWith('240399');
              const is96033020 = p.hsnCode === '96033020';
              const is96033010 = p.hsnCode === '96033010';
              const is96033090 = p.hsnCode === '96033090';
              const is9603 = is96033020 || is96033010 || is96033090;
              return (
                <div 
                  key={p.id}
                  className={`rounded-2xl bg-[#0B192C] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg group ${
                    is52083310
                      ? 'border-2 border-[#C5A059] hover:border-[#DFC17B] ring-1 ring-[#C5A059]/30 shadow-[#C5A059]/10 shadow-xl'
                      : is33079090
                      ? 'border-2 border-emerald-500/70 hover:border-emerald-400 ring-1 ring-emerald-500/30 shadow-emerald-950/40 shadow-xl'
                      : is240399
                      ? 'border-2 border-amber-600/70 hover:border-amber-400 ring-1 ring-amber-500/30 shadow-amber-950/40 shadow-xl'
                      : is96033020
                      ? 'border-2 border-amber-500/70 hover:border-amber-400 ring-1 ring-amber-500/30 shadow-amber-950/40 shadow-xl'
                      : is96033010
                      ? 'border-2 border-indigo-500/70 hover:border-indigo-400 ring-1 ring-indigo-500/30 shadow-indigo-950/40 shadow-xl'
                      : is96033090
                      ? 'border-2 border-teal-500/70 hover:border-teal-400 ring-1 ring-teal-500/30 shadow-teal-950/40 shadow-xl'
                      : 'border border-white/10 hover:border-[#C5A059]/50'
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black site-img-box">
                    <EditableImage
                      storageKey={`prod_img_${p.id}`}
                      defaultSrc={p.image}
                      alt={p.name}
                      className="block w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      containerClassName="w-full h-full"
                      badgeLabel="Change"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-70 pointer-events-none" />
                    
                    {/* Botanical / Technical Name Pill */}
                    {p.botanicalOrTechnicalName && (
                      <div className="absolute bottom-3 left-3 bg-[#081321]/95 px-2.5 py-1 rounded-sm border border-white/10 text-[10px] font-mono text-[#DFC17B] italic pointer-events-none backdrop-blur-sm">
                        {p.botanicalOrTechnicalName}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      {p.hsnCategory && (
                        <div className={`text-[10px] font-bold uppercase tracking-wider ${
                          is33079090 ? 'text-emerald-400' : is96033020 ? 'text-amber-400' : is96033010 ? 'text-indigo-400' : is96033090 ? 'text-teal-400' : is240399 ? 'text-amber-400' : 'text-[#C5A059]'
                        }`}>
                          {p.hsnCategory}
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                        <span>{p.name}</span>
                      </h3>
                      <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                        {p.description}
                      </p>
                    </div>

                    {/* Key Technical Specs Badges for HS 52083310 */}
                    {is52083310 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-white/5 border border-[#C5A059]/20 text-[11px]">
                        <div>
                          <span className="text-white/40 block text-[9px] uppercase font-bold">Cotton Content:</span>
                          <span className="text-[#DFC17B] font-semibold">≥ 85% (100% Combed)</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[9px] uppercase font-bold">Weight Limit:</span>
                          <span className="text-white font-semibold">≤ 200 g/m² (GSM)</span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Specs Badges for HS 96033020 Cosmetic Brushes */}
                    {is96033020 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-amber-950/40 border border-amber-500/30 text-[11px]">
                        <div>
                          <span className="text-amber-300/70 block text-[9px] uppercase font-bold">Filament Spec:</span>
                          <span className="text-amber-200 font-semibold text-[10px] leading-tight">Synthetic PBT (Zero Shed)</span>
                        </div>
                        <div>
                          <span className="text-amber-300/70 block text-[9px] uppercase font-bold">Ferrule &amp; Handle:</span>
                          <span className="text-[#DFC17B] font-semibold text-[10px]">Seamless Alum • Birch</span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Specs Badges for HS 96033010 Artists' & Writing Brushes */}
                    {is96033010 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-[11px]">
                        <div>
                          <span className="text-indigo-300/70 block text-[9px] uppercase font-bold">Sector Demand:</span>
                          <span className="text-indigo-200 font-semibold text-[10px] leading-tight">Educational &amp; Fine Arts</span>
                        </div>
                        <div>
                          <span className="text-indigo-300/70 block text-[9px] uppercase font-bold">Testing Compliance:</span>
                          <span className="text-[#DFC17B] font-semibold text-[10px]">EN71-3 &amp; ASTM D-4236</span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Specs Badges for HS 96033090 Other Applicators */}
                    {is96033090 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-teal-950/40 border border-teal-500/30 text-[11px]">
                        <div>
                          <span className="text-teal-300/70 block text-[9px] uppercase font-bold">Applicator Head:</span>
                          <span className="text-teal-200 font-semibold text-[10px] leading-tight">Medical Silicone &amp; Micro-Fibers</span>
                        </div>
                        <div>
                          <span className="text-teal-300/70 block text-[9px] uppercase font-bold">Formulation Lift:</span>
                          <span className="text-[#DFC17B] font-semibold text-[10px]">100% Zero Waste Spatula</span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Specs Badges for HS 33079090 Clean-Beauty */}
                    {is33079090 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-[11px]">
                        <div>
                          <span className="text-emerald-300/70 block text-[9px] uppercase font-bold">Organic Indian Base:</span>
                          <span className="text-emerald-200 font-semibold text-[10px] leading-tight">Aloe, Vetiver &amp; Herbal</span>
                        </div>
                        <div>
                          <span className="text-emerald-300/70 block text-[9px] uppercase font-bold">Export Premium:</span>
                          <span className="text-[#DFC17B] font-semibold text-[10px]">Clean-Beauty Margin</span>
                        </div>
                      </div>
                    )}

                    {/* Key Technical Specs Badges for HS 2403.99 Specialty Tobacco */}
                    {is240399 && (
                      <div className="grid grid-cols-2 gap-2 py-2 px-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-[11px]">
                        <div>
                          <span className="text-amber-300/70 block text-[9px] uppercase font-bold">Tobacco Board Status:</span>
                          <span className="text-amber-200 font-semibold text-[10px] leading-tight">RCMC Registered Consignment</span>
                        </div>
                        <div>
                          <span className="text-amber-300/70 block text-[9px] uppercase font-bold">Packaging Sealing:</span>
                          <span className="text-[#DFC17B] font-semibold text-[10px]">Airtight Hermetic Barrier</span>
                        </div>
                      </div>
                    )}

                    {/* Supply Information: Real Details Only */}
                    <div className="space-y-2 pt-3 border-t border-white/10 text-xs">
                      {p.hsnCode && (
                        <div className="flex justify-between items-center text-white/70">
                          <span className="text-white/40">Export Tariff (HSN):</span>
                          <span className={`font-mono font-bold px-2 py-0.5 rounded border ${
                            is52083310
                              ? 'text-[#DFC17B] bg-[#C5A059]/20 border-[#C5A059]'
                              : is33079090
                              ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/40'
                              : is96033020
                              ? 'text-amber-300 bg-amber-500/10 border-amber-500/40'
                              : is96033010
                              ? 'text-indigo-300 bg-indigo-500/10 border-indigo-500/40'
                              : is96033090
                              ? 'text-teal-300 bg-teal-500/10 border-teal-500/40'
                              : is240399
                              ? 'text-amber-300 bg-amber-500/10 border-amber-500/40'
                              : 'text-[#DFC17B] bg-[#C5A059]/10 border-[#C5A059]/30'
                          }`}>
                            {p.hsnCode}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center text-white/70">
                        <span className="text-white/40">Origin & Cluster:</span>
                        <span className="font-medium text-white">{p.origin}</span>
                      </div>
                      {p.packaging && (
                        <div className="flex justify-between items-center text-white/70">
                          <span className="text-white/40">Packaging:</span>
                          <span className="font-medium text-white text-right max-w-[60%]">{p.packaging}</span>
                        </div>
                      )}
                      {p.grade && (
                        <div className="flex justify-between items-center text-white/70">
                          <span className="text-white/40">Grade / Quality:</span>
                          <span className={`font-medium ${is33079090 ? 'text-emerald-300' : is96033020 ? 'text-amber-300' : is96033010 ? 'text-indigo-300' : is96033090 ? 'text-teal-300' : is240399 ? 'text-amber-300' : 'text-[#DFC17B]'}`}>{p.grade}</span>
                        </div>
                      )}
                      {p.leadTime && (
                        <div className="flex justify-between items-center text-white/70">
                          <span className="text-white/40">Sample / Batch Prep:</span>
                          <span className="font-medium text-white">{p.leadTime}</span>
                        </div>
                      )}
                    </div>

                    {/* General Applications */}
                    {p.applications && p.applications.length > 0 && (
                      <div className="pt-2">
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1.5">Common Applications:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.applications.map((app, i) => (
                            <span key={i} className="text-[10px] text-white/80 bg-white/5 px-2 py-0.5 rounded-sm">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action CTA */}
                    <div className="pt-4 space-y-2">
                      <button
                        onClick={() => onOpenRFQ(activeCategory.slug, p.name)}
                        className={`w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer shadow-md flex items-center justify-center gap-1.5 ${
                          is33079090
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-[#07111D]'
                            : is240399
                            ? 'bg-amber-500 hover:bg-amber-400 text-[#140C04]'
                            : 'bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C]'
                        }`}
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>
                          {is33079090 
                            ? 'Enquire for Clean-Beauty Batch' 
                            : isTextiles 
                            ? 'Enquire About This Fabric' 
                            : is240399
                            ? 'Enquire for Export Consignment'
                            : 'Enquire for Supply Batch'}
                        </span>
                      </button>

                      {isTextiles && (
                        <button
                          onClick={() => onOpenRFQ(activeCategory.slug, `Sample Swatch: ${p.name}`)}
                          className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-semibold text-[11px] uppercase tracking-wider transition-colors text-center cursor-pointer border border-white/10 flex items-center justify-center gap-1.5"
                        >
                          <Package className="w-3 h-3 text-[#C5A059]" />
                          <span>Request Swatch Hanger (Courier)</span>
                        </button>
                      )}

                      {is33079090 && (
                        <button
                          onClick={() => onOpenRFQ(activeCategory.slug, `Lab Formulation Sample: ${p.name}`)}
                          className="w-full py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-emerald-200 font-semibold text-[11px] uppercase tracking-wider transition-colors text-center cursor-pointer border border-emerald-500/30 flex items-center justify-center gap-1.5"
                        >
                          <Package className="w-3 h-3 text-emerald-400" />
                          <span>Request 200ml / Sachet Lab Sample</span>
                        </button>
                      )}

                      {is240399 && (
                        <button
                          onClick={() => onOpenRFQ(activeCategory.slug, `Technical COA & Spec Dossier: ${p.name} (HS ${p.hsnCode})`)}
                          className="w-full py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 hover:text-amber-200 font-semibold text-[11px] uppercase tracking-wider transition-colors text-center cursor-pointer border border-amber-500/30 flex items-center justify-center gap-1.5"
                        >
                          <FileCheck className="w-3 h-3 text-amber-400" />
                          <span>Request Export COA &amp; Specification</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {displayedProducts.length === 0 && (
            <div className="p-12 text-center bg-[#0B192C] rounded-2xl border border-white/10 space-y-3">
              <p className="text-white/70 text-sm">No products found under this specific HSN filter.</p>
              <button
                onClick={() => setSelectedHsnFilter('all')}
                className="px-4 py-2 bg-[#C5A059] text-[#0B192C] font-bold text-xs rounded-lg uppercase tracking-wider"
              >
                Reset Filter
              </button>
            </div>
          )}

          {/* Technical Specification Matrix for Shirting Fabrics */}
          {isTextiles && (
            <div className="pt-6 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFC17B]">
                    <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Technical Weave & Tariff Matrix</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Mill Construction Specification Summary
                  </h3>
                  <p className="text-xs text-white/70">
                    Comparative breakdown of yarn counts, weight limits (&le; 200 g/m&sup2;), weave structures, and customs classifications.
                  </p>
                </div>
                <button
                  onClick={() => onOpenRFQ(activeCategory.slug, 'Full Shirting Technical Spec Sheet')}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20 self-start sm:self-auto flex items-center gap-1.5 cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Download Spec Sheet / RFQ</span>
                </button>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0B192C]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#07111D] border-b border-white/10 text-[#DFC17B] uppercase tracking-wider font-mono text-[10px]">
                      <th className="py-4 px-4 font-bold">Fabric Name & Construction</th>
                      <th className="py-4 px-4 font-bold">Tariff (HSN)</th>
                      <th className="py-4 px-4 font-bold">Weave Geometry</th>
                      <th className="py-4 px-4 font-bold">Yarn Count (Warp &times; Weft)</th>
                      <th className="py-4 px-4 font-bold">Weight (GSM)</th>
                      <th className="py-4 px-4 font-bold">Width</th>
                      <th className="py-4 px-4 font-bold">Dyeing / Finish</th>
                      <th className="py-4 px-4 font-bold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80">
                    {[
                      {
                        name: 'Executive Royal Oxford Twill',
                        hsn: '52083310',
                        isKey: true,
                        weave: '4-Thread Twill (2/2)',
                        count: '100/2 &times; 100/2 Giza/Suvin',
                        gsm: '135 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Liquid Ammonia + Easy Care',
                      },
                      {
                        name: 'Superfine 2/1 Micro Twill Shirting',
                        hsn: '52083310',
                        isKey: true,
                        weave: '3-Thread Twill (2/1)',
                        count: '80/1 &times; 80/1 Compact',
                        gsm: '120 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Continuous Pad-Steam Vat',
                      },
                      {
                        name: 'Premium 4-Thread Cavalry & Diagonal Twill',
                        hsn: '52083310',
                        isKey: true,
                        weave: '4-Thread Twill (3/1)',
                        count: '60/1 &times; 60/1 High-Twist',
                        gsm: '145 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Silk-Touch Mercerized',
                      },
                      {
                        name: 'Luxury 4-Thread Herringbone Twill',
                        hsn: '52083310',
                        isKey: true,
                        weave: '4-Thread Broken Twill (2/2 Chevron)',
                        count: '70/1 &times; 70/1 Combed',
                        gsm: '132 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Zero-Formaldehyde Pre-Shrunk',
                      },
                      {
                        name: 'High-Count Peach-Finish 3-Thread Twill',
                        hsn: '52083310',
                        isKey: true,
                        weave: '3-Thread Twill (2/1)',
                        count: '80/2 &times; 80/2 Two-Fold',
                        gsm: '138 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Carbon-Peached Cashmere Touch',
                      },
                      {
                        name: 'Classic Combed Cotton Poplin Shirting',
                        hsn: '52083120',
                        isKey: false,
                        weave: 'Plain Weave (1/1)',
                        count: '50s &times; 50s Shankar-6',
                        gsm: '110 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Reactive Dyed Clean Finish',
                      },
                      {
                        name: 'Two-Fold Royal Oxford Shirting',
                        hsn: '52083990',
                        isKey: false,
                        weave: 'Basket Weave (2/2 Oxford)',
                        count: '80/2 &times; 80/2 Two-Fold',
                        gsm: '142 g/m&sup2; (&le; 200)',
                        width: '58" (147 cm)',
                        finish: 'Double Mercerized Pinpoint',
                      },
                      {
                        name: 'Pure Flax Linen Shirting Fabric',
                        hsn: '53091910',
                        isKey: false,
                        weave: 'Plain Weave 100% Linen',
                        count: '60 Lea &times; 60 Lea Pure Flax',
                        gsm: '150 g/m&sup2; (Pure Flax)',
                        width: '56" (142 cm)',
                        finish: 'AERO Soft Tumble Washed',
                      },
                    ].map((row, i) => (
                      <tr 
                        key={i} 
                        className={`hover:bg-white/5 transition-colors ${
                          row.isKey ? 'bg-[#C5A059]/5' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4 font-medium text-white flex items-center gap-2">
                          {row.isKey && (
                            <Star className="w-3 h-3 text-[#DFC17B] fill-[#DFC17B] shrink-0" />
                          )}
                          <span>{row.name}</span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold">
                          <span className={`px-2 py-0.5 rounded text-[11px] ${
                            row.isKey 
                              ? 'bg-[#C5A059]/20 text-[#DFC17B] border border-[#C5A059]/40' 
                              : 'bg-white/5 text-white/70'
                          }`}>
                            {row.hsn}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-white/90 font-medium">
                          {row.weave}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-white/70">
                          <span dangerouslySetInnerHTML={{ __html: row.count }} />
                        </td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-[#DFC17B]">
                          <span dangerouslySetInnerHTML={{ __html: row.gsm }} />
                        </td>
                        <td className="py-3.5 px-4 text-white/70">
                          {row.width}
                        </td>
                        <td className="py-3.5 px-4 text-white/70">
                          {row.finish}
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => onOpenRFQ(activeCategory.slug, row.name)}
                            className="px-3 py-1.5 rounded-md bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                          >
                            Enquire
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* DEDICATED EXPORT TARIFF & DISTILLATION REGULATION MATRIX (CHAPTER 33) */}
      {activeCategory.id === 'perfumes-attars' && (
        <section className="py-20 bg-[#07111D] border-b border-white/10 relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFC17B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-14">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                <Tag className="w-3.5 h-3.5" />
                <span>EXPORT TARIFF CLASSIFICATION GUIDE • CHAPTER 33</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Most Exported Indian Fragrance Categories by 8-Digit HSN Code
              </h2>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                India’s aromatic exports are precisely regulated under Chapter 33 of the Harmonized System. Navantara Exim structures all international consignments under verified 8-digit HSN codes to guarantee customs clearance speed, tariff precision, and full laboratory compliance at destination ports.
              </p>
            </div>

            {/* 6 Primary HSN Export Categories Requested by User */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Category 1: Attars in Fixed Oil Base (HSN 33019031) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      HSN 33019031
                    </span>
                    <Flame className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Attars in Fixed Oil Base
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Traditional Indian attars formulated by distilling natural raw ingredients (such as alluvial clay for Mitti Attar, saffron, vetiver, or jasmine) directly into a base of natural fixed carrier oils (sandalwood or cold-pressed botanical oils).
                  </p>
                  <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Process:</strong> Hydro-distilled in copper deg & bhapka condensing units</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Purity:</strong> 100% Non-Alcoholic, Halal-ready, zero petrochemicals</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">Mitti, Ruh Khus, Shamama</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Category 2: Rose Water / Gulab Jal (HSN 33030020) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      HSN 33030020
                    </span>
                    <Droplets className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Rose Water / Gulab Jal
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Traditional hydro-distilled rose petal distillate exported in high volumes as cosmetic skin mists, toners, and clean-beauty formulation bases.
                  </p>
                  <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Origin:</strong> Fresh morning Damask roses (<em>Rosa damascena</em>) from Kannauj</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Format:</strong> High volatile oil fraction, single & double hydro-distilled</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">Pure Gulab Jal Mists</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Category 3: Keora Water (HSN 33030030) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      HSN 33030030
                    </span>
                    <Sparkles className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Keora Water (Pandanus Distillate)
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Natural distillate of <em>Pandanus odoratissimus</em> flowers used extensively in premium cosmetics and culinary sectors.
                  </p>
                  <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Harvest:</strong> Aromatic male flower spadices from coastal Ganjam and Kannauj</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Scent Profile:</strong> Intensely sweet floral-honeyed, natural skin refresher</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">Pandanus Hydro-Distillate</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Category 4: Aqueous Distillates & Solutions of Essential Oils (HSN 33019060) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      HSN 33019060
                    </span>
                    <Wind className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Aqueous Distillates & Solutions of Essential Oils
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Generic natural floral waters and botanical hydrosols distilled from pure aromatic plants for clean-label formulation bases.
                  </p>
                  <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Scope:</strong> Vetiver (Khus), Jasmine Sambac, Lavender, and Chamomile waters</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Standards:</strong> Micro-filtered, zero synthetic parabens or glycols</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">Botanical Hydrosols</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Category 5: Key Exported Essential Oils (Sub-Chapter 3301) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg md:col-span-2 lg:col-span-2">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      Sub-Chapter 3301 • 6 Core 8-Digit Codes
                    </span>
                    <FlaskConical className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Key Exported Essential Oils
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Single-origin 100% pure volatile essential oils steam-distilled across India’s agricultural biomes, classified under specific 8-digit tariff lines:
                  </p>
                  
                  {/* Grid of the 6 explicit HSN codes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-2">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Rose Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012938</span>
                      </div>
                      <p className="text-[11px] text-white/70">Pure Ruh Gulab otto volatile oil</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Lemongrass Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012942</span>
                      </div>
                      <p className="text-[11px] text-white/70">High-citral (75%+) volatile oil</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Palmarosa Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012933</span>
                      </div>
                      <p className="text-[11px] text-white/70">High natural geraniol (88%+)</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Patchouli Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012934</span>
                      </div>
                      <p className="text-[11px] text-white/70">Cellar-aged patchoulol fixative</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Davana Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012944</span>
                      </div>
                      <p className="text-[11px] text-white/70">Adaptive fruity-herbaceous profile</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-[#DFC17B] font-mono font-bold">
                        <span>Sandalwood Oil</span>
                        <span className="bg-[#C5A059]/20 px-1.5 py-0.5 rounded">HSN 33012937</span>
                      </div>
                      <p className="text-[11px] text-white/70"><em>Santalum album</em> 90%+ santalols</p>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">Gas Chromatography Verified • UN Drums</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              {/* Category 6: Roll-Ons, Sticks & Deodorant Creams (HSN 33072000) */}
              <div className="p-7 rounded-2xl bg-[#0B192C] border border-[#C5A059]/40 hover:border-[#DFC17B] transition-all space-y-4 flex flex-col justify-between shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#DFC17B] font-mono text-xs font-bold">
                      HSN 33072000
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Roll-Ons, Sticks & Deodorant Creams
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Non-aerosol, water/oil-based emulsions, or alcohol-free solids formulated for clean-label body care with natural active minerals and botanical hydrosols.
                  </p>
                  <div className="space-y-1.5 pt-2 text-[11px] text-white/60">
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Composition:</strong> Natural potassium alum, zinc ricinoleate, Khus water</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-[#DFC17B] font-bold">•</span>
                      <span><strong>Format:</strong> Frosted glass roll-ons, paperboard push-up tubes, tins</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#DFC17B]">
                  <span className="font-mono">0% Aerosol • Aluminum-Free</span>
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

            </div>

            {/* Technical Verification & Export Assurances */}
            <div className="p-8 rounded-2xl bg-[#0B192C] border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <FlaskConical className="w-4 h-4 text-[#C5A059]" />
                    <span>GC-MS Profiling & Purity Assays</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Each distillation batch undergoes Gas Chromatography-Mass Spectrometry chiral analysis to map volatile active compounds, verify chemical biomarkers, and certify zero petrochemical dilution.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <FileCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>IFRA 50th & Global Safety Dossiers</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Complete International Fragrance Association (IFRA) usage certificates, 26-allergen declaration breakdowns, and Cosmetic Product Safety Report (CPSR) dossiers provided for EU, UK, and US customs.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white font-serif font-bold text-base">
                    <Package className="w-4 h-4 text-[#C5A059]" />
                    <span>DG vs Non-DG Export Packaging</span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Complete UN-certified packaging and dangerous goods logistics for volatile essential oils alongside seamless Non-DG declaration clearance for traditional non-alcoholic oil-base attars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DEDICATED HS 52083310 TECHNICAL DOSSIER & WEAVE ARCHITECTURE SECTION */}
      {isTextiles && (
        <section className="py-20 bg-[#07111D] border-b border-white/10 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DFC17B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
            
            {/* Header with Definitive Tariff Box */}
            <div className="space-y-6">
              <div className="space-y-3 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border-l-4 border-[#C5A059] text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  <Star className="w-3.5 h-3.5 fill-[#DFC17B] text-[#DFC17B]" />
                  <span>EXPORT TARIFF CLASSIFICATION GUIDE • HS 52083310</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  HS 52083310: 3-Thread & 4-Thread Dyed Twill Shirting Guide
                </h2>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  Navantara Exim coordinates high-volume international mill supply under official customs tariff code <strong className="text-[#DFC17B] font-mono">5208.33.10</strong>. Below is the full statutory definition, weave physics analysis, and compliance verification dossier for global garment brands and procurement directors.
                </p>
              </div>

              {/* Exact Tariff Definition Callout Banner */}
              <div className="p-6 rounded-2xl bg-[#0B192C] border-2 border-[#C5A059] shadow-xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#DFC17B] tracking-wider block">
                      Official Harmonized System Tariff Nomenclature:
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                      &ldquo;Product Category: Woven fabrics of cotton, containing &ge; 85% cotton by weight, weighing not more than 200 g/m&sup2; - Dyed: 3-thread or 4-thread twill shirting.&rdquo;
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'HS 52083310 Export Pricing & Mill Capacity')}
                      className="px-6 py-3 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                    >
                      Enquire HS 52083310
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Weave Architecture Comparison (3-Thread vs 4-Thread Twill) */}
            <div className="space-y-8 bg-[#0B192C] p-6 sm:p-10 rounded-2xl border border-white/10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                    Loom & Weave Mechanics
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    3-Thread vs 4-Thread Twill Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
                    Twill shirting fabrics derive their distinct diagonal drape and lustre from thread float ratios. Toggle between the two statutory structures to compare weave geometry.
                  </p>
                </div>

                {/* Weave Switcher Tabs */}
                <div className="flex items-center p-1.5 rounded-xl bg-[#07111D] border border-white/10 self-start md:self-auto">
                  <button
                    onClick={() => setActiveWeaveTab('4-thread')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeWeaveTab === '4-thread'
                        ? 'bg-[#C5A059] text-[#0B192C] shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    4-Thread Twill (2/2 & 3/1)
                  </button>
                  <button
                    onClick={() => setActiveWeaveTab('3-thread')}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeWeaveTab === '3-thread'
                        ? 'bg-[#C5A059] text-[#0B192C] shadow-md'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    3-Thread Twill (2/1)
                  </button>
                </div>
              </div>

              {/* Weave Content Display */}
              {activeWeaveTab === '4-thread' ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C5A059]/15 text-[#DFC17B] text-xs font-mono font-bold">
                      <span>INTERLACING RATIO: 2/2 & 3/1 (4 HARNESS REPEAT)</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Executive 4-Thread Twill: Heavy Drape, Natural Sheen & Wrinkle Recovery
                    </h4>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      In a 4-thread twill weave, the float pattern steps across four warp and weft yarns, creating pronounced diagonal ribs at an optical 45-degree angle. This structure provides exceptional body, fluid drape, and allows fabric to recover from creasing significantly faster than plain weave poplins.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Common Formats</span>
                        <p className="text-xs font-semibold text-white">2/2 Balanced Twill, 3/1 Warp-Faced, Herringbone Chevron</p>
                        <p className="text-[11px] text-white/60">Yarn counts from 60/1 up to 120/2 two-fold combed Egyptian/Giza</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Weight Profile</span>
                        <p className="text-xs font-semibold text-white">130 &ndash; 160 g/m&sup2; (GSM)</p>
                        <p className="text-[11px] text-white/60">Calibrated strictly under the 200 g/m&sup2; statutory ceiling</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Drape & Hand Feel</span>
                        <p className="text-xs font-semibold text-white">Substantial, Silk-Treated, Luxurious</p>
                        <p className="text-[11px] text-white/60">Liquid ammonia immersion locks fiber cross-sections for smooth skin-feel</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">End Garments</span>
                        <p className="text-xs font-semibold text-white">Executive Business Shirts, Formal Dress Attire</p>
                        <p className="text-[11px] text-white/60">Signature choice for international luxury menswear labels</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Weave Simulation Diagram */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07111D] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span className="font-mono text-[#DFC17B]">2/2 Twill Weave Point Matrix (4&times;4 Repeat)</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Optical 45&deg; Ridge</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2 aspect-square max-w-[280px] mx-auto p-4 bg-black/40 rounded-xl border border-white/10">
                      {/* Row 1 */}
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      {/* Row 2 */}
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      {/* Row 3 */}
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      {/* Row 4 */}
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                    </div>

                    <div className="text-[11px] text-white/60 text-center">
                      Gold cells represent warp floats over weft, producing the unbroken 45&deg; twill diagonal line.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C5A059]/15 text-[#DFC17B] text-xs font-mono font-bold">
                      <span>INTERLACING RATIO: 2/1 (3 HARNESS REPEAT)</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                      Crisp 3-Thread Twill: Lightweight, High-Breathability & Subtle Texture
                    </h4>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      In a 3-thread twill weave, each warp thread crosses over two weft threads and under one (2/1 structure). This creates a steeper, finer diagonal wale line (approximately 63 degrees) on a lighter fabric weight, yielding superior breathability in warm climates while retaining twill softness.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Common Formats</span>
                        <p className="text-xs font-semibold text-white">2/1 Micro-Twill, Peached Carbon-Finish Twill</p>
                        <p className="text-[11px] text-white/60">Yarn counts typically 70s, 80/1, 80/2 combed compact</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Weight Profile</span>
                        <p className="text-xs font-semibold text-white">115 &ndash; 138 g/m&sup2; (GSM)</p>
                        <p className="text-[11px] text-white/60">Featherweight executive comfort with high opacity</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">Drape & Hand Feel</span>
                        <p className="text-xs font-semibold text-white">Crisp, Airy, Gentle Micro-Peach Texture</p>
                        <p className="text-[11px] text-white/60">Carbon-peaching creates ultra-soft velvety surface</p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#C5A059]">End Garments</span>
                        <p className="text-xs font-semibold text-white">Year-Round Business Casual, Lightweight Uniforms</p>
                        <p className="text-[11px] text-white/60">Favored for tropical climate corporate dress codes</p>
                      </div>
                    </div>
                  </div>

                  {/* Visual Weave Simulation Diagram */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-[#07111D] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span className="font-mono text-[#DFC17B]">2/1 Twill Weave Point Matrix (3&times;3 Repeat)</span>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Steeper 63&deg; Ridge</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 aspect-square max-w-[280px] mx-auto p-4 bg-black/40 rounded-xl border border-white/10">
                      {/* Row 1 */}
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      {/* Row 2 */}
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      {/* Row 3 */}
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                      <div className="rounded-md bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/40">Weft</div>
                      <div className="rounded-md bg-[#C5A059] flex items-center justify-center text-[10px] font-mono font-bold text-[#0B192C]">Warp</div>
                    </div>

                    <div className="text-[11px] text-white/60 text-center">
                      2 warp floats over 1 weft produces a steeper wale angle and featherweight feel.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* The 4 Statutory Customs Rules for HS 52083310 */}
            <div className="space-y-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                  Customs Regulatory Guide
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Four Legal Determinants of Heading HS 5208.33.10
                </h3>
                <p className="text-xs sm:text-sm text-white/70">
                  To eliminate customs disputes and anti-dumping reclassifications at destination borders, every shipment must strictly substantiate these 4 criteria:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC17B] font-mono font-bold text-sm">
                    01
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Cotton Purity Threshold (&ge; 85%)
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Heading 5208 strictly requires cotton content to be 85% or more by weight. Consignments use 100% combed Shankar-6 or Suvin cotton, certified through ISO 1833 chemical dissolution reports.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC17B] font-mono font-bold text-sm">
                    02
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Weight Ceiling (&le; 200 g/m&sup2;)
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Heading 5208 applies only to fabrics weighing not more than 200 g/m&sup2;. Fabrics over 200 GSM fall into 5209 (denim/workwear). Our shirting fabrics are precision calibrated between 115 and 160 GSM.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC17B] font-mono font-bold text-sm">
                    03
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    Dyed State Classification
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Sub-heading 5208.33 specifies &lsquo;Dyed&rsquo; fabrics, distinct from unbleached (5208.1X) or bleached (5208.2X). Finished via continuous pad-steam vat dyeing with high colorfastness to washing.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC17B] font-mono font-bold text-sm">
                    04
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">
                    3-Thread / 4-Thread Twill Weave
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Tariff item 5208.33.10 explicitly designates &lsquo;3-thread or 4-thread twill shirting&rsquo;. Every consignment includes pick-glass yarn count documentation confirming either 2/1, 2/2, or 3/1 interlacing.
                  </p>
                </div>
              </div>
            </div>

            {/* Laboratory Quality Benchmarks & Fast-Track Sampling */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Lab Benchmarks */}
              <div className="lg:col-span-7 p-8 rounded-2xl bg-[#0B192C] border border-white/10 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
                    Quality Assurance Protocol
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    Laboratory Testing & Quality Certifications
                  </h4>
                  <p className="text-xs text-white/70">
                    All exported shirting batches conform to international textile lab testing protocols prior to container loading:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#DFC17B]">ISO 105-C06</span>
                    <p className="text-white font-semibold">Colorfastness to Domestic Laundering</p>
                    <p className="text-white/60 text-[11px]">Grade 4&ndash;5 minimum (zero staining onto multi-fiber adjacent fabrics)</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#DFC17B]">ISO 6330 / AATCC 135</span>
                    <p className="text-white font-semibold">Dimensional Stability (Shrinkage)</p>
                    <p className="text-white/60 text-[11px]">Residual shrinkage &lt; 1.8% warp and weft after 5 standard washes</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#DFC17B]">OEKO-TEX Standard 100</span>
                    <p className="text-white font-semibold">Harmful Substance Clearance</p>
                    <p className="text-white/60 text-[11px]">Class II (direct skin contact certified), 100% Azo-free dyestuffs</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#DFC17B]">ASTM D5034 / D1424</span>
                    <p className="text-white font-semibold">Tensile & Tear Strength</p>
                    <p className="text-white/60 text-[11px]">Grab breaking strength &gt; 350 N, tear strength &gt; 18 N</p>
                  </div>
                </div>
              </div>

              {/* Fast-Track Sampling & Courier Dispatch */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#07111D] border-2 border-[#C5A059]/40 space-y-6 flex flex-col justify-between shadow-xl">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#DFC17B] text-xs font-bold uppercase tracking-wider">
                    <Package className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Rapid Buyer Sampling</span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-white">
                    Request Physical Swatch Hangers & Lab Dips
                  </h4>

                  <p className="text-xs text-white/75 leading-relaxed">
                    We maintain ready-to-ship physical fabric swatch cards and hanger books for all HS 52083310 constructions. Dispatched within 24 hours via DHL Express or FedEx to commercial buyers worldwide.
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Full A4 Swatch Hangers with selvedge count marks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Pantone TCX / TPX custom lab dips in 3 business days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Sample yardage cuts (10&ndash;50 meters) for sample shirt tailoring</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={() => onOpenRFQ(activeCategory.slug, 'HS 52083310 Physical Swatch Hanger Pack')}
                    className="w-full py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Order HS 52083310 Swatch Pack</span>
                  </button>

                  <button
                    onClick={() => openWhatsApp('HS 52083310 Shirting Fabric Swatches & Mill Pricing')}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inquire via WhatsApp Desk</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* DEDICATED HS 9603 & HS 3307 COSMETICS, BRUSHES & CLEAN-BEAUTY TECHNICAL DOSSIER */}
      {isCosmetics && (
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#071512] via-[#091F1A] to-[#0B192C] border-b border-emerald-500/30 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Section Header */}
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                <span>DUAL-STREAM EXPORT ARCHITECTURE • HS 9603.30 BRUSHES &amp; HS 33079090 CLEAN-BEAUTY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Precision Applicator Engineering &amp; Certified Clean-Beauty Formulations
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/85 leading-relaxed">
                Navantara Exim delivers a turnkey export architecture spanning two high-margin commercial verticals: <strong className="text-white">Precision Applicators &amp; Brushes</strong> classified under customs heading <strong className="text-[#DFC17B] font-mono">HS 9603.30</strong> (cruelty-free cosmetic brushes 96033020, educational &amp; fine arts brushes 96033010, and specialty applicators 96033090) alongside <strong className="text-white">Organic Botanical Clean-Beauty Preparations</strong> under customs heading <strong className="text-emerald-300 font-mono">HS 33079090</strong>.
              </p>
            </div>

            {/* Interactive Dossier Navigation Tabs */}
            <div className="flex flex-wrap gap-3 border-b border-emerald-500/20 pb-4">
              <button
                onClick={() => setActiveCosmeticTab('brushes-engineering')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeCosmeticTab === 'brushes-engineering'
                    ? 'bg-amber-500 text-[#07111D] shadow-lg shadow-amber-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>1. Precision Brushes &amp; Applicators (HS 9603.30 Series)</span>
              </button>

              <button
                onClick={() => setActiveCosmeticTab('raw-materials')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeCosmeticTab === 'raw-materials'
                    ? 'bg-emerald-500 text-[#07111D] shadow-lg shadow-emerald-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>2. Organic Indian Raw Materials (Aloe, Vetiver &amp; Herbal Bases)</span>
              </button>

              <button
                onClick={() => setActiveCosmeticTab('clean-beauty')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeCosmeticTab === 'clean-beauty'
                    ? 'bg-emerald-500 text-[#07111D] shadow-lg shadow-emerald-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <Award className="w-4 h-4 text-[#DFC17B]" />
                <span>3. Clean-Beauty Specification Matrix (HS 33079090 Catalog)</span>
              </button>

              <button
                onClick={() => setActiveCosmeticTab('customs-compliance')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeCosmeticTab === 'customs-compliance'
                    ? 'bg-emerald-500 text-[#07111D] shadow-lg shadow-emerald-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>4. Customs Determinants &amp; Global Regulatory Dossier (EU/MoCRA/ASTM)</span>
              </button>
            </div>

            {/* TAB CONTENT 0: PRECISION BRUSHES & APPLICATORS (HS 9603.30 SERIES) */}
            {activeCosmeticTab === 'brushes-engineering' && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>HS 9603.30 Tariff Subheadings: Precision Engineering &amp; Global Demand Drivers</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                    Under World Customs Organization (WCO) Chapter 96, heading <strong className="text-white font-mono">9603.30</strong> specifically isolates artists&apos; brushes, writing brushes, cosmetic brushes, and specialty applicators. Global consumer shifts towards certified cruelty-free personal care and rigorous safety standards in educational institutions make Indian synthetic PBT engineering the premier alternative to natural animal hairs.
                  </p>
                </div>

                {/* 3 Detailed HS Code Deep-Dives */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Card 1: HS 96033020 */}
                  <div className="p-6 rounded-2xl bg-[#081714] border-2 border-amber-500/40 space-y-4 hover:border-amber-400 transition-all shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/40">
                          HS 96033020
                        </span>
                        <span className="text-[10px] uppercase font-bold text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
                          High Growth
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Cosmetic Application Brushes (Synthetic PBT Filaments)
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed">
                        Formulated with ultra-fine, cruelty-free Polybutylene Terephthalate (PBT) synthetic filaments ranging from 0.05mm to 0.07mm diameter. Chemically etched and micro-tapered tips recreate the gentle pickup and diffusion of sable or goat hair without animal cruelty.
                      </p>
                      
                      <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Key Market Driver:</span>
                          <span className="text-amber-200 font-semibold">Cruelty-free synthetic PBT filaments drive massive brand transitions in EU/US</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Ferrule Construction:</span>
                          <span className="text-white">Seamless anodized aluminum or copper, double-crimped to prevent bristle shedding</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Handle Ergonomics:</span>
                          <span className="text-white">FSC-certified birch wood with waterproof, multi-layer polyurethane lacquer</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-amber-300">MOQ: 1,000 sets</span>
                      <button
                        onClick={() => onOpenRFQ(activeCategory.slug, 'HS 96033020 Cruelty-Free Cosmetic Brushes (Synthetic PBT)')}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#07111D] font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Inquire HS 96033020
                      </button>
                    </div>
                  </div>

                  {/* Card 2: HS 96033010 */}
                  <div className="p-6 rounded-2xl bg-[#081714] border-2 border-indigo-500/40 space-y-4 hover:border-indigo-400 transition-all shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 font-mono font-bold text-xs border border-indigo-500/40">
                          HS 96033010
                        </span>
                        <span className="text-[10px] uppercase font-bold text-indigo-200 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                          Institutional Volume
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Artists&apos; Brushes &amp; Fine Writing Brushes
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed">
                        High sustained demand in worldwide educational, university, and fine arts atelier sectors. Engineered with specialized water-reservoir belly bell geometry that holds watercolors, acrylics, and calligraphy inks for continuous smooth strokes.
                      </p>
                      
                      <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Key Market Driver:</span>
                          <span className="text-indigo-200 font-semibold">High volume procurement contracts in educational and fine arts sectors</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Safety &amp; Toxicity Certs:</span>
                          <span className="text-white">EN71-3 (Heavy Metal Non-Migration) and ASTM D-4236 non-toxic compliance</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Snapback Elasticity:</span>
                          <span className="text-white">High-tensile memory nylon-PBT blend maintains point integrity across 10,000 cycles</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-indigo-300">MOQ: 2,500 units</span>
                      <button
                        onClick={() => onOpenRFQ(activeCategory.slug, 'HS 96033010 Artists Brushes & Writing Brushes')}
                        className="px-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Inquire HS 96033010
                      </button>
                    </div>
                  </div>

                  {/* Card 3: HS 96033090 */}
                  <div className="p-6 rounded-2xl bg-[#081714] border-2 border-teal-500/40 space-y-4 hover:border-teal-400 transition-all shadow-xl flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 font-mono font-bold text-xs border border-teal-500/40">
                          HS 96033090
                        </span>
                        <span className="text-[10px] uppercase font-bold text-teal-200 bg-teal-950/60 px-2 py-0.5 rounded border border-teal-500/30">
                          Cleanroom Spec
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-white">
                        Other Related Precision Applicator Brushes
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed">
                        Covers specialized cosmetic and clinical applicator tools: silicone facial mask spatulas, micro-flocked lip wands, lash extension isolation tools, and dermatological serum applicators designed for zero product waste and non-porous hygiene.
                      </p>
                      
                      <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Key Market Driver:</span>
                          <span className="text-teal-200 font-semibold">Professional aesthetic clinics, spas, and sterile single-use packaging</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Material Purity:</span>
                          <span className="text-white">BPA-free platinum silicone, lint-free microfibers, medical-grade polystyrene</span>
                        </div>
                        <div>
                          <span className="text-white/40 block text-[10px] uppercase font-bold">Hygiene Assurance:</span>
                          <span className="text-white">Autoclavable or individually sanitized blister packing (Class 100,000 cleanroom)</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-teal-300">MOQ: 5,000 units</span>
                      <button
                        onClick={() => onOpenRFQ(activeCategory.slug, 'HS 96033090 Other Related Applicator Brushes')}
                        className="px-3 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#07111D] font-bold text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Inquire HS 96033090
                      </button>
                    </div>
                  </div>
                </div>

                {/* Technical Specification Matrix for HS 9603.30 Series */}
                <div className="overflow-x-auto rounded-2xl border border-amber-500/30 bg-[#081714]">
                  <table className="w-full text-left text-xs text-white/80 border-collapse">
                    <thead>
                      <tr className="bg-amber-950/50 border-b border-amber-500/30 text-amber-300 font-mono text-[11px] uppercase tracking-wider">
                        <th className="p-4">Tariff Heading</th>
                        <th className="p-4">Commodity Description</th>
                        <th className="p-4">Filament / Head Material</th>
                        <th className="p-4">Ferrule &amp; Handle Engineering</th>
                        <th className="p-4">Primary International Markets</th>
                        <th className="p-4">Compliances</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-amber-300 font-bold">HS 9603.30.10</td>
                        <td className="p-4 font-bold text-white">Artists&apos; brushes, writing brushes</td>
                        <td className="p-4">Synthetic fine-point PBT nylon blend with high liquid reservoir</td>
                        <td className="p-4">Seamless nickel-plated brass ferrule, lacquered beech wood</td>
                        <td className="p-4 text-white/90">Schools, Universities, Fine Art Retailers (EU, US, Japan)</td>
                        <td className="p-4 font-mono text-xs text-emerald-300">EN71-3, ASTM D-4236</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-amber-300 font-bold">HS 9603.30.20</td>
                        <td className="p-4 font-bold text-white">Brushes for application of cosmetics</td>
                        <td className="p-4">Cruelty-free synthetic PBT micro-filaments (0.05&ndash;0.07mm)</td>
                        <td className="p-4">Double-crimped aluminum/copper ferrule, FSC birch handle</td>
                        <td className="p-4 text-white/90">Clean-beauty cosmetic brands, OEM private label (US, UK, UAE)</td>
                        <td className="p-4 font-mono text-xs text-emerald-300">ISO 22716, Cruelty-Free</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-amber-300 font-bold">HS 9603.30.90</td>
                        <td className="p-4 font-bold text-white">Other related applicator brushes</td>
                        <td className="p-4">Food-grade flexible silicone, micro-flocked tips, spoolie wire</td>
                        <td className="p-4">Ergonomic acrylic, stainless steel, or biodegradable bamboo</td>
                        <td className="p-4 text-white/90">Dermatology clinics, aesthetic spas, retail makeup toolkits</td>
                        <td className="p-4 font-mono text-xs text-emerald-300">BPA-Free, REACH Compliant</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB CONTENT 1: ORGANIC INDIAN RAW MATERIALS */}
            {activeCosmeticTab === 'raw-materials' && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-emerald-400" />
                    <span>Why Organic Indian Botanical Bases Unlock Export Margins</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                    Mainstream cosmetic formulations rely heavily on cheap synthetic surfactants (Sodium Lauryl Sulfate), synthetic carbomers, parabens, and artificial musk fixatives. By contrast, Navantara Exim leverages India&apos;s geographical advantage in indigenous Ayurvedic flora to formulate 100% biodegradable, sulfate-free, and cruelty-free preparations that seamlessly earn ECOCERT, COSMOS Organic, and Leaping Bunny endorsements.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Organic Indian Aloe Vera */}
                  <div className="p-6 rounded-2xl bg-[#081714] border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-colors shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                          <Droplets className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-white">Organic Indian Aloe Vera</h4>
                          <span className="text-[11px] font-mono text-emerald-400 italic">Aloe barbadensis Miller</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        Therapeutic Base
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-emerald-100/80 leading-relaxed">
                      <p>
                        <strong className="text-white">Regional Cultivation:</strong> Certified organic arid farming belts in Rajasthan (Thar Basin) and Gujarat (Kutch), yielding exceptionally dense active polysaccharide profiles.
                      </p>
                      <p>
                        <strong className="text-white">Active Biomarkers:</strong> High Acemannan concentration (&gt; 1,200 mg/L). Cold-stabilized within 3 hours of harvest; decolorized and debittered to guarantee barbaloin &lt; 1 ppm.
                      </p>
                      <p>
                        <strong className="text-white">Role in HS 33079090 Formulations:</strong> Replaces inert demineralized water in botanical wipes, pre-moistened sheets, and cosmetic formulations (40%+ v/v), providing soothing dermal hydration that neutralizes skin redness.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-300/70">Clean-Beauty Advantage:</span>
                      <span className="font-bold text-[#DFC17B]">Eliminates Synthetic Carbomers</span>
                    </div>
                  </div>

                  {/* Card 2: Wild-Harvested Indian Vetiver Root (Khus) */}
                  <div className="p-6 rounded-2xl bg-[#081714] border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-colors shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                          <Wind className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-white">Wild Indian Vetiver Root (Khus)</h4>
                          <span className="text-[11px] font-mono text-emerald-400 italic">Chrysopogon zizanioides</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        Aromatic &amp; Preservative
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-emerald-100/80 leading-relaxed">
                      <p>
                        <strong className="text-white">Regional Cultivation:</strong> Riverine wild-harvests along alluvial floodplains in Kannauj and Uttar Pradesh, hydro-distilled using traditional copper alembics or modern steam distillation.
                      </p>
                      <p>
                        <strong className="text-white">Active Biomarkers:</strong> Rich in Khusimol, &alpha;-vetivone, and &beta;-vetivone sesquiterpenoids displaying natural antimicrobial and tranquilizing aromatic properties.
                      </p>
                      <p>
                        <strong className="text-white">Role in HS 33079090 Formulations:</strong> Natural fragrance fixative and insect-deterrent active in scent-infused wardrobe drawer sheets, linen mists, and soothing botanical fresheners.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-300/70">Clean-Beauty Advantage:</span>
                      <span className="font-bold text-[#DFC17B]">Replaces Toxic Naphthalene</span>
                    </div>
                  </div>

                  {/* Card 3: Herbal Saponin Surfactant Base */}
                  <div className="p-6 rounded-2xl bg-[#081714] border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-colors shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-white">Herbal Saponin Surfactant Base</h4>
                          <span className="text-[11px] font-mono text-emerald-400 italic">Sapindus mukorossi &amp; Shikakai</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        100% Sulfate-Free
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-emerald-100/80 leading-relaxed">
                      <p>
                        <strong className="text-white">Regional Cultivation:</strong> Sustainably gathered by tribal cooperatives across the Western Ghats and Central Indian organic forest belts.
                      </p>
                      <p>
                        <strong className="text-white">Active Biomarkers:</strong> Triterpenoid saponins with natural cleansing foam capability, gentle micellar lift, and balanced natural lipid retention.
                      </p>
                      <p>
                        <strong className="text-white">Role in HS 33079090 Formulations:</strong> Natural plant-derived micellar cleansing active for pre-moistened cleansing wipes and gentle botanical formulations without stripping epidermal lipid barriers.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-300/70">Clean-Beauty Advantage:</span>
                      <span className="font-bold text-[#DFC17B]">Zero SLS/SLES &amp; 1,4-Dioxane</span>
                    </div>
                  </div>

                  {/* Card 4: Cold-Pressed Virgin Neem & Botanical Synergies */}
                  <div className="p-6 rounded-2xl bg-[#081714] border border-emerald-500/30 space-y-4 hover:border-emerald-400 transition-colors shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                          <Heart className="w-5 h-5 text-rose-400" />
                        </div>
                        <div>
                          <h4 className="font-serif text-base font-bold text-white">Cold-Pressed Organic Neem</h4>
                          <span className="text-[11px] font-mono text-emerald-400 italic">Azadirachta indica seed oil</span>
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                        Anti-Pruritic Active
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-emerald-100/80 leading-relaxed">
                      <p>
                        <strong className="text-white">Regional Cultivation:</strong> Organic certified single-estate cold presses across Tamil Nadu, Karnataka, and Kerala.
                      </p>
                      <p>
                        <strong className="text-white">Active Biomarkers:</strong> High-titer Azadirachtin (&gt; 1,500 ppm), nimbin, and salannin delivering natural antiparasitic and antifungal coat protection.
                      </p>
                      <p>
                        <strong className="text-white">Role in HS 33079090 Formulations:</strong> Provides gentle botanical barrier efficacy and insect-deterrent action in scent-infused drawer liners, pre-moistened botanical wipes, and cosmetic fabric care preparations.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px]">
                      <span className="text-emerald-300/70">Clean-Beauty Advantage:</span>
                      <span className="font-bold text-[#DFC17B]">EPA Minimum-Risk Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: CLEAN-BEAUTY SPECIFICATION MATRIX */}
            {activeCosmeticTab === 'clean-beauty' && (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-white">
                      Export Specification Matrix for HS 33079090 Formulations
                    </h3>
                    <p className="text-xs text-emerald-100/70">
                      Standard private label &amp; contract manufacturing parameters configured for ocean &amp; air freight export.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenRFQ(activeCategory.slug, 'HS 33079090 Full Technical Specification Sheet')}
                    className="px-4 py-2 rounded-lg bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Spec Sheet (PDF)</span>
                  </button>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-emerald-500/30 bg-[#081714]">
                  <table className="w-full text-left text-xs text-white/80 border-collapse">
                    <thead>
                      <tr className="bg-emerald-950/60 border-b border-emerald-500/30 text-emerald-300 font-mono text-[11px] uppercase tracking-wider">
                        <th className="p-4">Product Line</th>
                        <th className="p-4">Customs Tariff</th>
                        <th className="p-4">Organic Indian Actives</th>
                        <th className="p-4">Substrate / Delivery Format</th>
                        <th className="p-4">Clean-Beauty Purity</th>
                        <th className="p-4">Export MOQ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-500/15">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">
                          Pre-Moistened Herbal Cosmetic &amp; Cleansing Wipes
                        </td>
                        <td className="p-4 font-mono text-emerald-300 font-bold">HS 33079090</td>
                        <td className="p-4">Organic Aloe Barbadensis, Rose hydrosol, Vetiver distillate</td>
                        <td className="p-4">100% Biodegradable Bamboo / FSC Viscose (60 GSM embossed)</td>
                        <td className="p-4 text-emerald-300">Alcohol-Free, Zero Parabens, Flushable</td>
                        <td className="p-4 font-mono font-bold text-[#DFC17B]">5,000 retail packs</td>
                      </tr>

                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">
                          Scent-Infused Herbal Wardrobe &amp; Drawer Sheets
                        </td>
                        <td className="p-4 font-mono text-emerald-300 font-bold">HS 33079090</td>
                        <td className="p-4">Wild Kannauj Vetiver (Khus), Sandalwood extract, Neem essence</td>
                        <td className="p-4">Acid-free cellulose botanical absorbent paper (120 GSM)</td>
                        <td className="p-4 text-emerald-300">Zero Synthetic Musk, Moth-Deterrent</td>
                        <td className="p-4 font-mono font-bold text-[#DFC17B]">2,500 boxed gift sets</td>
                      </tr>

                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-bold text-white">
                          Biodegradable Facial Exfoliating Fiber Pads
                        </td>
                        <td className="p-4 font-mono text-emerald-300 font-bold">HS 33079090</td>
                        <td className="p-4">Indian Aloe extract, Vetiver root fibers, Papaya fruit enzymes</td>
                        <td className="p-4">Double-sided textured plant fiber pads (60 count canister)</td>
                        <td className="p-4 text-emerald-300">Hypoallergenic, Micro-Exfoliating</td>
                        <td className="p-4 font-mono font-bold text-[#DFC17B]">3,000 canisters</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 text-xs space-y-1">
                    <span className="font-bold text-white block">Private Label Packaging:</span>
                    <span className="text-emerald-100/70">Custom silk-screen printing, hot-foil stamping, biodegradable pouches, and outer carton design.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 text-xs space-y-1">
                    <span className="font-bold text-white block">Batch Certificate of Analysis:</span>
                    <span className="text-emerald-100/70">Every consignment is dispatched with heavy metals (&lt; 2 ppm Pb/As), microbial count (&lt; 100 CFU/g), and HPLC testing.</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 text-xs space-y-1">
                    <span className="font-bold text-white block">Temperature-Stable Palletization:</span>
                    <span className="text-emerald-100/70">Foil-wrapped thermal blankets and silica dessicants protect formulations in reefer/dry containers.</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: CUSTOMS & REGULATORY DOSSIER */}
            {activeCosmeticTab === 'customs-compliance' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#081714] border border-emerald-500/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">
                        Global Customs Determinants for HS 3307.90.90
                      </h3>
                      <p className="text-xs text-emerald-100/70">
                        Ensuring zero customs delays across US CBP, EU Customs, and UK Border Force.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs text-emerald-100/80 leading-relaxed">
                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 space-y-2">
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block">
                        1. Animal Grooming Preparations vs Medicines:
                      </span>
                      <p>
                        Under WCO Explanatory Notes to Heading 3307, animal shampoos, coat washes, and deodorizing mists are classified under <strong className="text-emerald-300 font-mono">3307.90.90</strong> provided they do not claim therapeutic disease eradication (which falls under Chapter 30). Our formulations are documented specifically as cosmetic grooming and dermal care preparations to prevent pharmaceutical cross-classification delays.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 space-y-2">
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block">
                        2. Impregnated Papers &amp; Wipes Classification:
                      </span>
                      <p>
                        WCO Chapter Note 4 to Chapter 33 directs that paper, wadding, felt, and nonwovens impregnated, coated, or covered with perfume or cosmetics clear under Heading <strong className="text-emerald-300 font-mono">3307.90</strong> rather than Chapter 48 (paper) or Chapter 56 (wadding). This ensures clean duty rates and simplified trade clearance.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 space-y-2">
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block">
                        3. EU Regulation (EC) No 1223/2009 Compliance:
                      </span>
                      <p>
                        Consignments include full Cosmetic Product Safety Reports (CPSR Part A &amp; B), Toxicological Risk Assessments (TRA), CPNP registration documentation, and INCI ingredient listings matching European cosmetics inventory.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-emerald-500/20 space-y-2">
                      <span className="font-bold text-white uppercase text-[11px] tracking-wider block">
                        4. US MoCRA 2022 &amp; FDA Registration Readiness:
                      </span>
                      <p>
                        Production cleanrooms hold FDA Cosmetic Establishment Registration numbers. Formulations comply with fragrance allergen disclosures, safety substantiation records, and Good Manufacturing Practices under ISO 22716.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-[#071917] to-[#0B192C] border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold text-white">Need destination-specific cosmetic compliance support?</span>
                    <p className="text-xs text-emerald-100/70">
                      Our trade compliance desk prepares tailored safety dossiers and customs clearance packs for North America, the UK, Europe, Australia, and GCC countries.
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenRFQ(activeCategory.slug, 'HS 33079090 Customs & Safety Dossier')}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#07111D] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow whitespace-nowrap"
                  >
                    Consult Compliance Desk
                  </button>
                </div>
              </div>
            )}

            {/* Fast-Track Formulation Sampling Studio Strip */}
            <div className="p-8 rounded-2xl bg-[#061814] border-2 border-emerald-500/40 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-300">
                  <Package className="w-4 h-4 text-emerald-400" />
                  <span>PILOT FORMULATION LAB SAMPLES &amp; SWATCHES</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Request 200ml Formulation Pilot Batches &amp; Sample Swatches
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl">
                  Evaluate real organic Indian aloe, vetiver, and herbal bases before committing to container or contract manufacturing volumes. Dispatched via express courier within 3 business days.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenRFQ(activeCategory.slug, 'HS 33079090 Formulation Sample Box (Herbal Wipes + Scent-Infused Drawer Sheets + Botanical Bases)')}
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#07111D] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request HS 33079090 Sample Box</span>
                </button>

                <button
                  onClick={() => openWhatsApp('HS 33079090 Clean-Beauty Formulations & Organic Indian Raw Materials')}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20 flex items-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Cosmetic Desk</span>
                </button>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* DEDICATED CHAPTER 24 SPECIALTY TOBACCO TECHNICAL DOSSIER & COMPLIANCE SECTION */}
      {isSpecialty && (
        <section className="py-20 bg-gradient-to-b from-[#0f0a04] via-[#07111D] to-[#0B192C] border-b border-white/10 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-16">
            
            {/* Section Header */}
            <div className="space-y-6">
              <div className="space-y-3 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border-l-4 border-amber-500 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>CHAPTER 24 TARIFF DOSSIER • HS 2403.99 MANUFACTURED TOBACCO</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Indian Specialty Tobacco Export Guide &amp; HS Code Classification
                </h2>
                <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
                  India is the world&apos;s second-largest tobacco producer, cultivated across nutrient-rich black cotton soils and river deltas. Navantara Exim connects international licensed tobacco importers and brand owners directly with verified processing mills under official customs tariff heading <strong className="text-amber-400 font-mono">HS 2403.99</strong>. Every consignment complies with Tobacco Board of India statutory clearance, CORESTA scientific standards, and destination country warning regulations.
                </p>
              </div>

              {/* Exact Tariff Definition Callout Banner */}
              <div className="p-6 rounded-2xl bg-[#140D06] border-2 border-amber-500/70 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2 max-w-3xl">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider block">
                      Official Harmonized System Tariff Nomenclature (Chapter 24):
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-white leading-snug">
                      &ldquo;Heading 2403: Other manufactured tobacco and manufactured tobacco substitutes; &lsquo;homogenized&rsquo; or &lsquo;reconstituted&rsquo; tobacco; tobacco extracts and essences - Other: Subheading 2403.99: Other.&rdquo;
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => onOpenRFQ(activeCategory.slug, 'Chapter 24 HS 2403.99 Consignment Specification')}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#140C04] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                    >
                      Enquire HS 2403.99
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Dossier Navigation Tabs */}
            <div className="flex flex-wrap gap-3 border-b border-amber-500/20 pb-4">
              <button
                onClick={() => setActiveSpecialtyTab('hsn-breakdown')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeSpecialtyTab === 'hsn-breakdown'
                    ? 'bg-amber-500 text-[#140C04] shadow-lg shadow-amber-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <Tag className="w-4 h-4 text-amber-400" />
                <span>1. 8-Digit Customs Tariff Matrix (HS 24039910 to 24039970)</span>
              </button>

              <button
                onClick={() => setActiveSpecialtyTab('curing-processing')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeSpecialtyTab === 'curing-processing'
                    ? 'bg-amber-500 text-[#140C04] shadow-lg shadow-amber-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <Flame className="w-4 h-4 text-amber-400" />
                <span>2. Agronomy, Curing &amp; Compounding Architecture</span>
              </button>

              <button
                onClick={() => setActiveSpecialtyTab('regulatory-compliance')}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeSpecialtyTab === 'regulatory-compliance'
                    ? 'bg-amber-500 text-[#140C04] shadow-lg shadow-amber-500/20 font-extrabold'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/10'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>3. Tobacco Board, Phytosanitary &amp; Port Logistics</span>
              </button>
            </div>

            {/* TAB CONTENT 1: 8-DIGIT HSN CODE MATRIX */}
            {activeSpecialtyTab === 'hsn-breakdown' && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#140D06] border border-amber-500/30 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Tag className="w-5 h-5 text-amber-400" />
                    <span>Statutory 8-Digit Customs Classification Breakdown for International Import</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                    Customs clearance across international borders requires exact alignment with destination tariff nomenclatures. The Directorate General of Foreign Trade (DGFT) and Indian Customs classify manufactured tobacco under specific 8-digit tariff items under heading 2403.99:
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-amber-500/30 shadow-xl">
                  <table className="w-full text-left text-xs border-collapse bg-[#081321]">
                    <thead>
                      <tr className="border-b border-amber-500/30 bg-[#140D06] text-amber-400 font-mono text-[11px] uppercase">
                        <th className="py-4 px-4 font-bold">HSN Code</th>
                        <th className="py-4 px-4 font-bold">Statutory Product Description</th>
                        <th className="py-4 px-4 font-bold">Physical Form &amp; Cut</th>
                        <th className="py-4 px-4 font-bold">Typical Moisture &amp; pH</th>
                        <th className="py-4 px-4 font-bold">Standard Export Packaging</th>
                        <th className="py-4 px-4 font-bold">Primary Export Corridors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-white/80 font-sans">
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-300">2403 99 10</td>
                        <td className="py-4 px-4 font-medium text-white">Chewing Tobacco / Filter Khaini</td>
                        <td className="py-4 px-4">Flakes, granular crumb &amp; portioned micro-porous fleece sachets</td>
                        <td className="py-4 px-4 font-mono">Moisture: 18–26%<br />pH: 8.0–9.2 (alkalized)</td>
                        <td className="py-4 px-4">Catch-cover foil sachets, round composite tins (50g–100g)</td>
                        <td className="py-4 px-4">GCC, North America, Southeast Asia</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-300">2403 99 20</td>
                        <td className="py-4 px-4 font-medium text-white">Preparations Containing Chewing Tobacco</td>
                        <td className="py-4 px-4">Compounded masticatory blends (areca nut, spices, lime &amp; tobacco)</td>
                        <td className="py-4 px-4 font-mono">Moisture: 8–15%<br />Water Activity: &lt; 0.65 aw</td>
                        <td className="py-4 px-4">Multi-layer hermetic pouches, sealed metal canisters</td>
                        <td className="py-4 px-4">Middle East, East Africa, UK, Singapore</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-300">2403 99 30</td>
                        <td className="py-4 px-4 font-medium text-white">Jarda Scented Tobacco</td>
                        <td className="py-4 px-4">Sun-cured cured leaves infused with kewra, saffron &amp; sandalwood attars</td>
                        <td className="py-4 px-4 font-mono">Moisture: 12–18%<br />Aromatic Index: High</td>
                        <td className="py-4 px-4">Sealed tinplate cans (25g, 50g, 100g) with tamper-evident ring pull</td>
                        <td className="py-4 px-4">UAE, Saudi Arabia, Bahrain, UK, USA</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-300">2403 99 40</td>
                        <td className="py-4 px-4 font-medium text-white">Snuff (Dry Nasal &amp; Moist Oral)</td>
                        <td className="py-4 px-4">Micro-pulverized fine powder (60–120 mesh) or moist fermented granules</td>
                        <td className="py-4 px-4 font-mono">Dry: 4–8% moisture<br />Moist: 45–55% moisture</td>
                        <td className="py-4 px-4">Airtight plastic canisters, glass jars, aluminum tins</td>
                        <td className="py-4 px-4">Germany, Scandinavia, UK, South Africa</td>
                      </tr>
                      <tr className="hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-mono font-bold text-amber-300">2403 99 70</td>
                        <td className="py-4 px-4 font-medium text-white">Cut-Tobacco (Rag-Cut Shredded)</td>
                        <td className="py-4 px-4">Precision slit shredded lamina (0.6mm–1.0mm) &amp; roll-your-own strips</td>
                        <td className="py-4 px-4 font-mono">Moisture: 12–14.5%<br />Filling Power: 5.5–6.8 cm³/g</td>
                        <td className="py-4 px-4">C-48 corrugated cartons with PE barrier liners (100kg–200kg)</td>
                        <td className="py-4 px-4">Global cigarette manufacturers &amp; RYO blenders</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: AGRONOMY, CURING & PROCESSING */}
            {activeSpecialtyTab === 'curing-processing' && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#140D06] border border-amber-500/30 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <span>Leaf Agronomy, Primary Curing &amp; Secondary Manufacturing Process</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                    Indian tobacco varieties (<em className="text-amber-300">Nicotiana tabacum</em> and <em className="text-amber-300">Nicotiana rustica</em>) are cultivated in distinct agro-climatic zones that yield unique chemistry, nicotine strength, and leaf elasticity suited for specialty processing:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Step 1: Agronomy & Cultivation */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                      <Leaf className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">1. Origin &amp; Cultivation</h4>
                    <ul className="text-xs text-white/70 space-y-2">
                      <li>• <strong className="text-white">Gujarat (Charotar/Anand):</strong> High-nicotine Rustica tobacco optimized for chewing tobacco, khaini, and bidi production.</li>
                      <li>• <strong className="text-white">Andhra Pradesh (Guntur/Prakasam):</strong> World-renowned FCV (Flue-Cured Virginia) and light air-cured Burley with rich leaf elasticity.</li>
                      <li>• <strong className="text-white">Uttar Pradesh (Farrukhabad):</strong> Heritage chewing tobacco and aromatic dark sun-cured Jarda cultivars.</li>
                    </ul>
                  </div>

                  {/* Step 2: Curing & Fermentation */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                      <Flame className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">2. Curing &amp; Maturation</h4>
                    <ul className="text-xs text-white/70 space-y-2">
                      <li>• <strong className="text-white">Sun-Curing:</strong> Leaves spread on burlap mats in open tropical sunlight for 14–21 days to develop deep amber color and earthy bite.</li>
                      <li>• <strong className="text-white">Flue-Curing:</strong> Temperature and humidity-controlled barns for 5–7 days to caramelize sugars and stabilize yellow golden tone.</li>
                      <li>• <strong className="text-white">Aging:</strong> 6 to 18 months of bale aging under monitored cellar conditions to round off harsh ammoniacal volatiles.</li>
                    </ul>
                  </div>

                  {/* Step 3: Compounding & Blending */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-4 hover:border-amber-500/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white">3. Compounding &amp; Cutting</h4>
                    <ul className="text-xs text-white/70 space-y-2">
                      <li>• <strong className="text-white">Precision Slit Shredding:</strong> Rotary knife cutting at 30 to 50 cuts per inch (cpi) for uniform rag burn and density.</li>
                      <li>• <strong className="text-white">Natural Attar Infusion:</strong> Hydro-distilled kewra water, rose attar, menthol crystals, and green cardamom extracts.</li>
                      <li>• <strong className="text-white">Alkalization (Khaini):</strong> Food-grade slaked lime (calcium hydroxide) conditioning to achieve precise bio-available nicotine release.</li>
                    </ul>
                  </div>
                </div>

                {/* Quality & Laboratory Testing Callout */}
                <div className="p-6 rounded-2xl bg-white/5 border border-amber-500/30 grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Testing Protocol</span>
                    <p className="font-mono text-sm font-bold text-white">CORESTA Methods</p>
                    <p className="text-[11px] text-white/60">Standardized scientific physical and chemical determination</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Purity Standard</span>
                    <p className="font-mono text-sm font-bold text-white">GRL Residue Screen</p>
                    <p className="text-[11px] text-white/60">Tested for organochlorines, heavy metals &amp; mycotoxins</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Moisture Control</span>
                    <p className="font-mono text-sm font-bold text-white">Karl Fischer Titration</p>
                    <p className="text-[11px] text-white/60">Strictly held within contract parameters (&plusmn;0.5%)</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Shelf Stability</span>
                    <p className="font-mono text-sm font-bold text-white">Hermetic Nitrogen Seal</p>
                    <p className="text-[11px] text-white/60">Prevents oxidation and maintains aroma for 24+ months</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: STATUTORY COMPLIANCE & EXPORT LOGISTICS */}
            {activeSpecialtyTab === 'regulatory-compliance' && (
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-[#140D06] border border-amber-500/30 space-y-2">
                  <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <span>Statutory Clearance, Regulatory Documentation &amp; Port Logistics</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                    Exporting tobacco from India is governed by strict statutory frameworks overseen by the Tobacco Board of India (Ministry of Commerce and Industry) and destination customs authorities. Navantara Exim manages all statutory compliance end-to-end:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Document 1: Tobacco Board Registration */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-white">
                      <FileCheck className="w-5 h-5 text-amber-400" />
                      <span>Tobacco Board RCMC Clearance</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Every exporter must hold an active Registration-cum-Membership Certificate (RCMC) as a Registered Exporter of Manufactured Tobacco from the Tobacco Board of India. All consignments are registered with valid shipping bills and commercial invoices.
                    </p>
                  </div>

                  {/* Document 2: Phytosanitary & Fumigation */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-white">
                      <ShieldCheck className="w-5 h-5 text-amber-400" />
                      <span>DPPQS Phytosanitary &amp; Fumigation Certificate</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Inspected by the Directorate of Plant Protection, Quarantine &amp; Storage (DPPQS), Government of India. Full Phosphine (Aluminium Phosphide) or Methyl Bromide container fumigation certificates provided to certify shipments free of Lasioderma serricorne (tobacco beetle).
                    </p>
                  </div>

                  {/* Document 3: Statutory Health Warning Customization */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-white">
                      <BookOpen className="w-5 h-5 text-amber-400" />
                      <span>Destination Health Warning Compliance</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Packaging artwork is customized strictly according to destination country public health legislation—including bilingual text warnings (e.g., Arabic/English for GCC, FDA-compliant disclosures for the US, and EU TPD warning text) with required surface coverage ratios.
                    </p>
                  </div>

                  {/* Document 4: Port Loading & Containerization */}
                  <div className="p-6 rounded-2xl bg-[#081321] border border-amber-500/30 space-y-3">
                    <div className="flex items-center gap-2 font-serif text-base font-bold text-white">
                      <Package className="w-5 h-5 text-amber-400" />
                      <span>Nhava Sheva (JNPT) &amp; Mundra Marine Logistics</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Stuffed into clean, odorless 20ft and 40ft High Cube containers equipped with high-absorption calcium chloride desiccant poles to prevent container sweat during tropical marine crossings. Direct sailings to Jebel Ali, Rotterdam, Hamburg, Singapore, and New York.
                    </p>
                  </div>
                </div>

                {/* Verification CTA */}
                <div className="p-6 rounded-2xl bg-[#140D06] border border-amber-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h4 className="font-serif text-base font-bold text-white">Require an Export Compliance Audit or Sample Testing Dossier?</h4>
                    <p className="text-xs text-amber-100/70">Our trade compliance officers can provide full COA, pesticide screening reports, and packaging mockups for your target market.</p>
                  </div>
                  <button
                    onClick={() => onOpenRFQ(activeCategory.slug, 'Chapter 24 Regulatory Audit & COA Dossier')}
                    className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#140C04] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shrink-0 shadow"
                  >
                    Request Compliance Dossier
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              Export Coordination
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Supply & Export Information for {activeCategory.title}
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Navantara Exim provides comprehensive supply management tailored to destination regulatory standards and commercial preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Packaging Formats</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Export-compliant packaging including UN aluminum canisters, HDPE drums, composite canisters, multiwall moisture bags, and reinforced palletization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Batch Documentation</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Every shipment includes Certificate of Analysis (COA), technical data sheets (TDS), safety data sheets (MSDS), and Certificate of Origin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Supplier Coordination</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct engagement with verified manufacturing facilities across India’s specialized industrial and agricultural production clusters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#081321] border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-white">Pre-Shipment Inspection</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Independent batch sampling and lab testing review prior to container loading at Nhava Sheva (JNPT) or Mundra Port.
              </p>
            </div>
          </div>

          {/* Bottom CTA Strip */}
          <div className="p-8 rounded-2xl bg-[#081321] border border-[#C5A059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif text-xl font-bold text-white">
                Ready to enquire about {activeCategory.title} from India?
              </h3>
              <p className="text-xs text-white/70">
                Contact our trade desk with your product requirements, volume interest, or target delivery timelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenRFQ(activeCategory.slug)}
                className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
              >
                Enquire Now
              </button>
              <button
                onClick={() => openWhatsApp()}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
