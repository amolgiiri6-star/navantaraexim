import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Building2,
  Mail,
  Send
} from 'lucide-react';
import { PageRoute } from '../../types';
import { PRODUCT_CATEGORIES } from '../../data/products';
import { NavantaraLogo } from '../brand/NavantaraLogo';
import { SocialMediaSection } from '../common/SocialMediaSection';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenRFQ: (initialCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate, onOpenRFQ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [marketsDropdownOpen, setMarketsDropdownOpen] = useState(false);

  const productsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const marketsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAllDropdownTimeouts = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    if (marketsTimeoutRef.current) clearTimeout(marketsTimeoutRef.current);
  };

  const handleProductsEnter = () => {
    clearAllDropdownTimeouts();
    setServicesDropdownOpen(false);
    setMarketsDropdownOpen(false);
    setProductsDropdownOpen(true);
  };

  const handleProductsLeave = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    productsTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 300);
  };

  const handleServicesEnter = () => {
    clearAllDropdownTimeouts();
    setProductsDropdownOpen(false);
    setMarketsDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300);
  };

  const handleMarketsEnter = () => {
    clearAllDropdownTimeouts();
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setMarketsDropdownOpen(true);
  };

  const handleMarketsLeave = () => {
    if (marketsTimeoutRef.current) clearTimeout(marketsTimeoutRef.current);
    marketsTimeoutRef.current = setTimeout(() => {
      setMarketsDropdownOpen(false);
    }, 300);
  };

  // Close dropdowns on outside click and cleanup timeouts
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.nav-dropdown-wrapper')) {
        setProductsDropdownOpen(false);
        setServicesDropdownOpen(false);
        setMarketsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearAllDropdownTimeouts();
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (route: PageRoute) => {
    clearAllDropdownTimeouts();
    onNavigate(route);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
    setMarketsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about Indian product supply and export requirements."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B192C] text-white border-b border-white/10 shadow-lg">
      {/* Top Announcement & Quick Contact Strip */}
      <div className="bg-[#081321] text-white/75 text-xs px-4 py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <strong className="text-[#C5A059] font-bold tracking-widest uppercase text-[10px] sm:text-[11px]">
                INDIAN SUPPLIER • EXPORT PARTNER
              </strong>
            </span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-white/60 text-[11px]">
              <Building2 className="w-3.5 h-3.5 text-[#C5A059]" />
              Pune, Maharashtra, India • Port Dispatch at JNPT / Mundra
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <a 
              href="mailto:info@navantaraexim.com" 
              className="hidden lg:flex items-center gap-1.5 text-white/70 hover:text-white text-[11px] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>info@navantaraexim.com</span>
            </a>

            <button 
              onClick={openWhatsApp}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-xs cursor-pointer"
              title="Chat with Navantara Exim on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500/20 text-emerald-400" />
              <span>+91 90 4949 6585</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('/')} 
            className="cursor-pointer select-none shrink-0"
          >
            <NavantaraLogo variant="horizontal" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 text-xs font-bold uppercase tracking-wider xl:tracking-widest text-white/80 shrink-0">
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick('/')}
              className={`py-1 transition-all ${
                currentRoute === '/' 
                  ? 'text-white border-b-2 border-[#C5A059]' 
                  : 'hover:text-white'
              }`}
            >
              Home
            </button>

            {/* 2. PRODUCTS (with Dropdown) */}
            <div 
              className="relative nav-dropdown-wrapper py-2"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <button
                type="button"
                onClick={() => handleNavClick('/products')}
                className={`flex items-center gap-1.5 py-1 transition-all cursor-pointer ${
                  currentRoute.startsWith('/products') 
                    ? 'text-white border-b-2 border-[#C5A059]' 
                    : 'hover:text-white'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C5A059] transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-1.5 w-80 z-50"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  {/* Invisible hit-area bridge spanning between button and menu */}
                  <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="bg-[#0B192C] text-white rounded-xl shadow-2xl border border-white/10 py-3 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between">
                      <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                        Product Portfolio
                      </p>
                      <span className="text-[10px] text-white/50">{PRODUCT_CATEGORIES.length} Categories</span>
                    </div>
                    <div className="py-1">
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleNavClick(`/products/${cat.slug}` as PageRoute)}
                          className="w-full text-left px-4 py-2.5 hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <div>
                            <p className="text-xs font-bold text-white group-hover:text-[#C5A059] transition-colors">
                              {cat.title}
                            </p>
                            <p className="text-[10px] text-white/50 line-clamp-1">{cat.subtitle}</p>
                          </div>
                          <span className="text-xs text-white/40 group-hover:translate-x-1 group-hover:text-[#C5A059] transition-transform">→</span>
                        </button>
                      ))}
                      <div className="pt-2 mt-1 border-t border-white/10 px-4">
                        <button 
                          type="button"
                          onClick={() => handleNavClick('/products')} 
                          className="text-[11px] font-bold text-[#C5A059] hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                        >
                          All Product Categories →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. SERVICES (with Dropdown) */}
            <div 
              className="relative nav-dropdown-wrapper py-2"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                type="button"
                onClick={() => handleNavClick('/services')}
                className={`flex items-center gap-1.5 py-1 transition-all cursor-pointer ${
                  ['/services', '/services/export-support', '/services/supplier-verification', '/services/trade-consultancy', '/services/procurement-coordination', '/export-services', '/consultancy', '/supplier-verification'].includes(currentRoute)
                    ? 'text-white border-b-2 border-[#C5A059]' 
                    : 'hover:text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C5A059] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-1.5 w-80 z-50"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  {/* Invisible hit-area bridge spanning between button and menu */}
                  <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="bg-[#0B192C] text-white rounded-xl shadow-2xl border border-white/10 py-3 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-4 py-2 border-b border-white/10 bg-white/5">
                      <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.2em]">
                        Export & Trade Services
                      </p>
                    </div>
                    <div className="py-1">
                      <button
                        type="button"
                        onClick={() => handleNavClick('/services/export-support')}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/10 block group cursor-pointer"
                      >
                        <p className="text-xs font-bold text-white group-hover:text-[#C5A059]">Export Support</p>
                        <p className="text-[10px] text-white/50">Documentation, packaging, freight & shipment coordination</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavClick('/services/supplier-verification')}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/10 block group cursor-pointer"
                      >
                        <p className="text-xs font-bold text-white group-hover:text-[#C5A059]">Supplier & Product Verification</p>
                        <p className="text-[10px] text-white/50">Factory review, credibility check & lab testing reports</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavClick('/services/trade-consultancy')}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/10 block group cursor-pointer"
                      >
                        <p className="text-xs font-bold text-white group-hover:text-[#C5A059]">Trade & Business Consultancy</p>
                        <p className="text-[10px] text-white/50">Export advisory, market readiness & regulatory guidance</p>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleNavClick('/services/procurement-coordination')}
                        className="w-full text-left px-4 py-2.5 hover:bg-white/10 block group cursor-pointer"
                      >
                        <p className="text-xs font-bold text-white group-hover:text-[#C5A059]">Procurement Coordination</p>
                        <p className="text-[10px] text-white/50">Vendor discovery, sample coordination & batch scheduling</p>
                      </button>
                      <div className="pt-2 mt-1 border-t border-white/10 px-4">
                        <button 
                          type="button"
                          onClick={() => handleNavClick('/services')} 
                          className="text-[11px] font-bold text-[#C5A059] hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                        >
                          View All Services Overview →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. MARKETS */}
            <div 
              className="relative nav-dropdown-wrapper py-2"
              onMouseEnter={handleMarketsEnter}
              onMouseLeave={handleMarketsLeave}
            >
              <button
                type="button"
                onClick={() => handleNavClick('/markets')}
                className={`flex items-center gap-1.5 py-1 transition-all cursor-pointer ${
                  currentRoute.startsWith('/markets') 
                    ? 'text-white border-b-2 border-[#C5A059]' 
                    : 'hover:text-white'
                }`}
              >
                <span>Markets</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C5A059] transition-transform duration-200 ${marketsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {marketsDropdownOpen && (
                <div 
                  className="absolute left-0 top-full pt-1.5 w-72 z-50"
                  onMouseEnter={handleMarketsEnter}
                  onMouseLeave={handleMarketsLeave}
                >
                  {/* Invisible hit-area bridge spanning between button and menu */}
                  <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent pointer-events-auto" />

                  <div className="bg-[#0B192C] text-white rounded-xl shadow-2xl border border-white/10 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      type="button"
                      onClick={() => handleNavClick('/markets/usa')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span>🇺🇸 United States</span>
                      <span className="text-[10px] text-[#C5A059]">FDA / MoCRA</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/markets/uae-gcc')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span>🇦🇪 UAE & GCC</span>
                      <span className="text-[10px] text-[#C5A059]">India-UAE CEPA</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/markets/uk')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span>🇬🇧 United Kingdom</span>
                      <span className="text-[10px] text-[#C5A059]">UK REACH / MHRA</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/markets/south-asia')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span>🌏 South Asia</span>
                      <span className="text-[10px] text-[#C5A059]">SAFTA Tariff</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNavClick('/markets/africa')}
                      className="w-full text-left px-4 py-2.5 hover:bg-white/10 flex items-center justify-between text-xs cursor-pointer"
                    >
                      <span>🌍 Africa</span>
                      <span className="text-[10px] text-[#C5A059]">Direct Ocean Trade</span>
                    </button>
                    <div className="pt-2 mt-1 border-t border-white/10 px-4">
                      <button 
                        type="button"
                        onClick={() => handleNavClick('/markets')} 
                        className="text-[11px] font-bold text-[#C5A059] hover:underline uppercase tracking-wider cursor-pointer"
                      >
                        Global Trade Hub →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. ABOUT US */}
            <button
              onClick={() => handleNavClick('/about')}
              className={`py-1 transition-all ${
                currentRoute === '/about' 
                  ? 'text-white border-b-2 border-[#C5A059]' 
                  : 'hover:text-white'
              }`}
            >
              About Us
            </button>

            {/* 6. CONTACT */}
            <button
              onClick={() => handleNavClick('/contact')}
              className={`py-1 transition-all ${
                currentRoute === '/contact' 
                  ? 'text-white border-b-2 border-[#C5A059]' 
                  : 'hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTA: REQUEST ENQUIRY */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            <button
              onClick={() => onOpenRFQ()}
              className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#DFC17B] text-[#0B192C] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Enquiry</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenRFQ()}
              className="px-3.5 py-1.5 rounded-lg bg-[#C5A059] text-[#0B192C] font-bold text-[11px] uppercase tracking-wider"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#C5A059] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081321] border-b border-white/10 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          {/* Mobile Drawer Brand Header */}
          <div 
            onClick={() => handleNavClick('/')}
            className="pb-3 border-b border-white/10 flex items-center gap-3 cursor-pointer"
          >
            <NavantaraLogo variant="compact" />
          </div>

          <div className="space-y-1 text-sm font-semibold uppercase tracking-wider">
            <button
              onClick={() => handleNavClick('/')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/products')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white flex items-center justify-between"
            >
              <span>Products</span>
              <span className="text-xs text-[#C5A059]">6 Categories</span>
            </button>
            <div className="pl-6 space-y-1 text-xs font-normal normal-case text-white/70">
              {PRODUCT_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleNavClick(`/products/${cat.slug}` as PageRoute)}
                  className="block w-full text-left py-1 hover:text-[#C5A059]"
                >
                  • {cat.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('/services')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
            >
              Services
            </button>
            <div className="pl-6 space-y-1 text-xs font-normal normal-case text-white/70">
              <button onClick={() => handleNavClick('/services/export-support')} className="block w-full text-left py-1 hover:text-[#C5A059]">
                • Export Support
              </button>
              <button onClick={() => handleNavClick('/services/supplier-verification')} className="block w-full text-left py-1 hover:text-[#C5A059]">
                • Supplier & Product Verification
              </button>
              <button onClick={() => handleNavClick('/services/trade-consultancy')} className="block w-full text-left py-1 hover:text-[#C5A059]">
                • Trade & Business Consultancy
              </button>
              <button onClick={() => handleNavClick('/services/procurement-coordination')} className="block w-full text-left py-1 hover:text-[#C5A059]">
                • Procurement Coordination
              </button>
            </div>

            <button
              onClick={() => handleNavClick('/markets')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
            >
              Markets
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="block w-full text-left py-2 px-3 rounded-lg hover:bg-white/5 text-white"
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRFQ();
              }}
              className="w-full py-3 rounded-xl bg-[#C5A059] text-[#0B192C] font-bold text-xs uppercase tracking-wider text-center"
            >
              Request Enquiry
            </button>

            <button
              onClick={openWhatsApp}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 90 4949 6585</span>
            </button>

            <div className="pt-2">
              <p className="text-[10px] text-white/50 mb-2 uppercase tracking-wider font-semibold">Official Social Channels</p>
              <SocialMediaSection variant="footer" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
