import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  Package, 
  Award, 
  FileText, 
  Search, 
  Truck, 
  Layers, 
  Building2, 
  PhoneCall, 
  ChevronRight,
  Send,
  Download,
  Users,
  FlaskConical,
  Clock,
  Handshake,
  CheckCircle,
  FileCheck,
  Ship,
  Plane,
  Anchor,
  Compass,
  MessageCircle
} from 'lucide-react';
import { PageRoute } from '../types';
import { PRODUCT_CATEGORIES } from '../data/products';
import { OfficialStampLogo } from '../components/brand/OfficialStampLogo';
import { getImageFromIDB, getCachedImageSync } from '../utils/imageStorage';
import { EditableImage } from '../components/common/EditableImage';

const DEFAULT_HERO_BANNER = '/default-hero-banner.jpg';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (category?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenRFQ }) => {
  // Directly load custom banner from synchronous cache if present, then permanent static asset, then fallback
  const [bannerBgImage, setBannerBgImage] = useState<string>(() => {
    const cached = getCachedImageSync('navantara_custom_banner_bg');
    if (cached) return cached;
    return '/default-hero-banner.jpg';
  });

  useEffect(() => {
    let isMounted = true;

    // Retrieve saved custom banner from IndexedDB
    getImageFromIDB('navantara_custom_banner_bg').then((idbImg) => {
      if (idbImg && isMounted) {
        setBannerBgImage(idbImg);
        return;
      }

      // If no IDB image, test if /custom-hero-banner.png loads, otherwise use DEFAULT_HERO_BANNER
      const img = new Image();
      img.onload = () => {
        if (isMounted) setBannerBgImage('/custom-hero-banner.png?t=' + Date.now());
      };
      img.onerror = () => {
        if (isMounted) setBannerBgImage(DEFAULT_HERO_BANNER);
      };
      img.src = '/custom-hero-banner.png?t=' + Date.now();
    });

    const handleAssetsReady = () => {
      const cached = getCachedImageSync('navantara_custom_banner_bg');
      if (cached && isMounted) {
        setBannerBgImage(cached);
      }
    };

    window.addEventListener('navantara-assets-ready', handleAssetsReady);

    return () => {
      isMounted = false;
      window.removeEventListener('navantara-assets-ready', handleAssetsReady);
    };
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about Indian product supply and export requirements."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <div className="space-y-0 bg-[#0B192C] text-white">
      {/* 1. HERO SECTION */}
      <section 
        className="relative min-h-[640px] lg:min-h-[740px] bg-[#081321] text-white flex items-center overflow-hidden border-b border-white/10"
      >
        {/* Render banner image only when available - zero old images behind it, zero flash */}
        {bannerBgImage && (
          <div 
            className="absolute inset-0 bg-cover bg-right lg:bg-center pointer-events-none"
            style={{
              backgroundImage: `url('${bannerBgImage}')`
            }}
          />
        )}

        {/* Soft edge fade on the left side only to protect typography readability without altering the ship, cranes, map or plane */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081321]/80 via-[#081321]/30 to-transparent lg:w-3/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Core Headline & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border-l-4 border-[#C5A059] text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">
                <span>INDIAN SUPPLIER • EXPORT PARTNER</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                SOURCE. VERIFY.<br />
                EXPORT. <span className="text-[#C5A059]">GROW.</span>
              </h1>

              {/* Subheading */}
              <p className="font-serif text-xl sm:text-2xl text-[#DFC17B] font-semibold tracking-wide">
                Indian Products. Global Supply.
              </p>

              {/* Body */}
              <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed font-normal">
                Navantara Exim is an India-based supplier and export partner providing selected Indian products to international buyers, distributors, brands and commercial businesses. We help buyers connect with Indian product supply while supporting product coordination, supplier verification, quality-related information, export documentation, packaging and shipment requirements.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-5">
                <button
                  onClick={() => onNavigate('/products')}
                  className="px-8 sm:px-10 py-4 bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold uppercase tracking-widest text-xs sm:text-sm shadow-xl transition-all cursor-pointer flex items-center gap-2.5 group"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onNavigate('/contact')}
                  className="px-8 sm:px-10 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold uppercase tracking-widest text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2.5"
                >
                  <span>CONTACT US</span>
                </button>
              </div>

              {/* Supporting Quick Links Under Hero */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-white/60">
                <span className="text-white/40">Quick Navigation:</span>
                <button 
                  onClick={() => onNavigate('/products')} 
                  className="text-white hover:text-[#C5A059] transition-colors underline underline-offset-4 decoration-[#C5A059]/60 font-semibold"
                >
                  PRODUCTS
                </button>
                <span className="text-white/30">•</span>
                <button 
                  onClick={() => onNavigate('/services/export-support')} 
                  className="text-white hover:text-[#C5A059] transition-colors underline underline-offset-4 decoration-[#C5A059]/60 font-semibold"
                >
                  EXPORT SERVICES
                </button>
                <span className="text-white/30">•</span>
                <button 
                  onClick={() => onNavigate('/services/supplier-verification')} 
                  className="text-white hover:text-[#C5A059] transition-colors underline underline-offset-4 decoration-[#C5A059]/60 font-semibold"
                >
                  SUPPLIER VERIFICATION
                </button>
              </div>
            </div>

            {/* Right Column: Logo and GROWTH Stamp - centered tagline, pure white font, zero dots */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start text-center lg:text-right lg:self-start lg:pt-3 xl:pt-1 lg:translate-x-6 xl:translate-x-10">
              <div className="w-[190px] flex flex-col items-center">
                <OfficialStampLogo size="banner" />
                <div className="w-full mt-3 flex items-center justify-center py-2 px-3 rounded-full bg-[#081321] border-2 border-[#DFC17B] shadow-2xl backdrop-blur-md">
                  <span className="font-serif text-[10.5px] sm:text-[11px] font-extrabold text-white tracking-[0.18em] uppercase text-center whitespace-nowrap leading-none indent-[0.18em]">
                    Your GROWTH Stamp
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: INDIAN PRODUCTS. GLOBAL SUPPLY. */}
      <section className="py-16 sm:py-20 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] block">
                Overview & Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Indian Products. Global Supply.
              </h2>
              <div className="w-16 h-1 bg-[#C5A059]" />
            </div>

            <div className="lg:col-span-7 space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
              <p>
                India is one of the world's most versatile production hubs for essential oils, artisanal perfumes & attars, natural deodorants, cosmetics, fine textiles, personal care powders, and specialized regional goods. However, navigating regional suppliers, batch quality testing, export packaging, and international shipping protocols can be complex.
              </p>
              <p>
                <strong>Navantara Exim</strong> operates on the ground in India to bridge this gap. We coordinate directly with regional manufacturing facilities, verify suppliers and product specifications, facilitate laboratory documentation, and manage export logistics so that international buyers receive reliable, compliant product supply on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT CATEGORIES */}
      <section className="py-20 sm:py-24 bg-[#081321] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
                B2B Product Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Selected Indian Product Categories
              </h2>
              <p className="text-sm text-white/70 max-w-xl">
                Explore our core product categories supplied to international distributors, wholesalers, retailers, and commercial buyers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/products')}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                className="group rounded-2xl bg-[#0B192C] border border-white/10 hover:border-[#C5A059]/60 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Category Card Image */}
                <div className="relative overflow-hidden bg-black site-img-box">
                  <EditableImage 
                    storageKey={`cat_img_${cat.id}`}
                    defaultSrc={cat.heroImage} 
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    containerClassName="w-full h-full"
                    badgeLabel="Change Photo"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent opacity-80 pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                    <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest bg-[#081321]/80 px-2.5 py-1 rounded-sm border border-white/10">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                      {cat.summary}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Key Products Included:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.productRange.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-[11px] text-white/80 bg-white/5 px-2 py-0.5 rounded-sm">
                          {item.split('(')[0].trim()}
                        </span>
                      ))}
                      {cat.productRange.length > 3 && (
                        <span className="text-[10px] text-[#C5A059] self-center">
                          +{cat.productRange.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate(`/products/${cat.slug}` as PageRoute)}
                      className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
                    >
                      View Products
                    </button>
                    <button
                      onClick={() => onOpenRFQ(cat.slug)}
                      className="flex-1 py-2.5 rounded-lg bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] text-xs font-extrabold uppercase tracking-wider transition-colors text-center cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY NAVANTARA EXIM */}
      <section className="py-20 sm:py-24 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
              Our Core Strengths
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Work With Navantara Exim
            </h2>
            <p className="text-sm text-white/70">
              A structured commercial approach designed to eliminate uncertainty and streamline product supply from India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1: India-Based Supply */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                1. India-Based Supply
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Direct access to verified Indian manufacturers and regional supply clusters across Maharashtra, Gujarat, Uttar Pradesh, Tamil Nadu, and Rajasthan.
              </p>
            </div>

            {/* Pillar 2: Product Coordination */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                2. Product Coordination
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Hands-on assistance with product selection, technical specifications, custom packaging coordination, and multi-item consolidation.
              </p>
            </div>

            {/* Pillar 3: Supplier Verification */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                3. Supplier Verification
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Helping international buyers evaluate supplier credibility, factory operations, business registrations, and genuine product legitimacy.
              </p>
            </div>

            {/* Pillar 4: Quality & Documentation */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                4. Quality & Documentation
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Supporting Certificate of Analysis (COA), testing reports, MSDS, batch documentation, phytosanitary papers, and destination compliance.
              </p>
            </div>

            {/* Pillar 5: Export Support */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Ship className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                5. Export Support
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Managing export packing, container stuffing, port coordination at Nhava Sheva (JNPT) and Mundra, ocean Bill of Lading, and customs filings.
              </p>
            </div>

            {/* Pillar 6: International Trade Support */}
            <div className="p-8 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white">
                6. International Trade Support
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Structured communication for international buyers across global time zones, clear commercial terms, and transparent milestone tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE WORK (6-STEP PROCESS) */}
      <section className="py-20 sm:py-24 bg-[#081321] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
              Transparent Execution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              How We Work
            </h2>
            <p className="text-sm text-white/70">
              Our 6-step collaborative process coordinates requirements smoothly from initial enquiry to international shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">01</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 1</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                ENQUIRE
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Buyer shares their product requirement, specifications, volume or target market through our enquiry form or direct trade desk.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">02</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 2</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                UNDERSTAND YOUR REQUIREMENT
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We review the requirement, evaluate product feasibility, determine destination regulatory criteria, and confirm available supply options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">03</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 3</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                PRODUCT & SUPPLIER REVIEW
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Coordination with verified suppliers, review of product availability, specifications, and testing information (depending on product and requirement).
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">04</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 4</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                COMMERCIAL DISCUSSION
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Transparent discussion regarding pricing, commercial terms, delivery timelines, packaging formats, and destination documentation requirements.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">05</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 5</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                DOCUMENTATION & PREPARATION
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Preparing export documentation, packaging coordination, batch labeling, and inspection or lab testing verification where required.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 relative overflow-hidden space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif font-black text-[#C5A059]">06</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Step 6</span>
              </div>
              <h3 className="font-serif text-base font-bold text-white uppercase tracking-wide">
                EXPORT / SHIPMENT
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Dispatch through major Indian ports (JNPT Nhava Sheva, Mundra, or Air Cargo) with container tracking and full shipping documentation handed over.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-white/50 italic">
              * Note: Sample delivery, inspection protocols, and order minimums are determined depending on specific product category and buyer requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL MARKETS */}
      <section className="py-20 sm:py-24 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
                International Reach
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Global Export Markets
              </h2>
              <p className="text-sm text-white/70 max-w-xl">
                Serving importers, distributors, and brands across strategic regional corridors with regulatory alignment and logistics coordination.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/markets')}
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-white transition-colors flex items-center gap-2 self-start md:self-auto cursor-pointer"
            >
              <span>Explore All Corridors</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* USA */}
            <div 
              onClick={() => onNavigate('/markets/usa')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇺🇸</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  North America
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">United States</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Supplying essential oils, artisanal fragrances, cosmetics, and textiles with FDA, MoCRA, and US Customs documentation support.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* UAE & GCC */}
            <div 
              onClick={() => onNavigate('/markets/uae-gcc')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇦🇪</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  CEPA Tariff Benefits
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">UAE & GCC</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Preferential trade access via India-UAE CEPA for cosmetics, fine fragrances, attars, textiles, and personal care powders into Dubai and Jebel Ali.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* UK */}
            <div 
              onClick={() => onNavigate('/markets/uk')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🇬🇧</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  United Kingdom
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">United Kingdom</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Export supply of pure essential oils, artisanal perfumes & attars, and shirting fabrics aligned with UK REACH and British import standards.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* South Asia */}
            <div 
              onClick={() => onNavigate('/markets/south-asia')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌏</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  Regional Trade
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">South Asia</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct cross-border and regional maritime supply of fabrics, raw personal care ingredients, and specialty goods under regional trade agreements.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Africa */}
            <div 
              onClick={() => onNavigate('/markets/africa')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌍</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  Maritime Corridors
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Africa</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Direct ocean freight lines from Nhava Sheva (JNPT) to East & West African ports (Mombasa, Dar es Salaam, Durban) for wholesale products.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Other International Markets */}
            <div 
              onClick={() => onNavigate('/markets')}
              className="p-6 rounded-2xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 cursor-pointer transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌐</span>
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-sm">
                  Worldwide
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Other International Markets</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Coordinating international shipments to Europe, Australia, Southeast Asia, and Latin America with customized packaging and documentation.
              </p>
              <div className="pt-2 text-xs font-semibold text-[#DFC17B] flex items-center gap-1">
                <span>View Market Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPORT SUPPORT */}
      <section className="py-20 sm:py-24 bg-[#081321] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
                Complete Logistics Management
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Export Support From Factory to Port
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Exporting from India requires meticulous attention to packaging standards, dangerous goods rules for aromatics, container stuffing, customs clearance, and port handover. Navantara Exim manages this entire operational chain.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Export Documentation</h4>
                    <p className="text-xs text-white/70">Commercial Invoices, Packing Lists, Certificate of Origin, Bill of Lading, and phytosanitary certificates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Packaging Coordination</h4>
                    <p className="text-xs text-white/70">UN-approved aluminum flasks, HDPE drums, composite canisters, multiwall moisture-barrier bags, and palletization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Ship className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Freight & Shipment Coordination</h4>
                    <p className="text-xs text-white/70">Container loading at Nhava Sheva (JNPT) and Mundra, air cargo connections, and ocean freight tracking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Trade Documentation Support</h4>
                    <p className="text-xs text-white/70">FOB, CIF, CFR, and EXW support aligned with Incoterms 2020 and destination customs requirements.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/services/export-support')}
                  className="px-8 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Learn About Export Support
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl site-img-box-hero">
                <EditableImage 
                  storageKey="home_logistics_operations"
                  defaultSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Export Port Logistics" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                  badgeLabel="Change Logistics Image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081321] via-transparent to-transparent opacity-90 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0B192C]/90 border border-white/10 backdrop-blur-md space-y-2 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-bold text-[#DFC17B] uppercase tracking-widest">
                      Active Shipping Hubs
                    </span>
                  </div>
                  <p className="text-xs text-white font-semibold">
                    Gateway Port Dispatch: JNPT (Nhava Sheva) • Mundra Port • Mumbai Air Cargo
                  </p>
                  <p className="text-[11px] text-white/60">
                    Seamless customs filings and verified Bill of Lading generation for international consignees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: SUPPLIER & PRODUCT VERIFICATION */}
      <section className="py-20 sm:py-24 bg-[#0B192C] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#081321] border border-[#C5A059]/30 relative overflow-hidden">
            {/* Background graphic elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C5A059]/40 rounded-full text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Independent Verification Support</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  VERIFY BEFORE YOU BUY
                </h2>

                <p className="text-base sm:text-lg text-[#DFC17B] font-medium leading-relaxed">
                  Reduce risk when buying from India with our independent supplier and product verification support.
                </p>

                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Whether you are purchasing products through Navantara Exim or evaluating an independent Indian vendor you discovered yourself, our on-the-ground verification service gives you ground reality before committing funds.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Factory & supplier operational review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Business credibility & GST / IEC check</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Product availability & batch review</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Laboratory testing coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-white/80 sm:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Pre-dispatch quality inspection & packing verification</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => onNavigate('/services/supplier-verification')}
                    className="px-8 py-4 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-lg"
                  >
                    Request Supplier Verification
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Chat With Trade Specialist</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="p-6 rounded-2xl bg-[#0B192C] border border-white/10 w-full max-w-sm space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mx-auto">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Independent Buyer Protection
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Protect your capital and prevent substandard consignments with verifiable on-site audits and physical batch checks across Indian manufacturing clusters.
                  </p>
                  <div className="p-3 bg-[#081321] rounded-xl border border-white/5 text-[11px] text-white/60">
                    Pune • Mumbai • Ahmedabad • Surat • Kannauj • Coimbatore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 sm:py-24 bg-[#081321] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.3em]">
            Start Your Sourcing Enquiry
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            HAVE A PRODUCT REQUIREMENT FROM INDIA?
          </h2>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tell us what you are looking for. We will assist you with product availability, supply coordination and export support.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-10 py-4.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs sm:text-sm uppercase tracking-widest transition-all shadow-xl hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <span>CONTACT NAVANTARA EXIM</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenRFQ()}
              className="px-8 py-4.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-[#C5A059]" />
              <span>SUBMIT REQUIREMENT ONLINE</span>
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50">
            <span>Email: <strong className="text-white">info@navantaraexim.com</strong></span>
            <span>•</span>
            <span>WhatsApp: <strong className="text-emerald-400">+91 90 4949 6585</strong></span>
            <span>•</span>
            <span>Location: <strong className="text-white">Pune, Maharashtra, India</strong></span>
          </div>
        </div>
      </section>
    </div>
  );
};
