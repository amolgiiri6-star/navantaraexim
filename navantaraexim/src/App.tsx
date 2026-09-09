import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RFQModal } from './components/modals/RFQModal';
import { LivePublishSyncBar } from './components/common/LivePublishSyncBar';

// Views
import { HomeView } from './views/HomeView';
import { ProductsHubView } from './views/ProductsHubView';
import { CategoryDetailView } from './views/CategoryDetailView';
import { ServicesOverviewView } from './views/ServicesOverviewView';
import { ExportServicesView } from './views/ExportServicesView';
import { SupplierVerificationView } from './views/SupplierVerificationView';
import { ConsultancyView } from './views/ConsultancyView';
import { ProcurementView } from './views/ProcurementView';
import { MarketsHubView } from './views/MarketsHubView';
import { MarketDetailView } from './views/MarketDetailView';
import { QualityDocumentationView } from './views/QualityDocumentationView';
import { ExportCatalogView } from './views/ExportCatalogView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

export default function App() {
  // Routing State
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname as PageRoute;
    const validRoutes: PageRoute[] = [
      '/',
      '/products',
      '/products/essential-oils',
      '/products/cosmetics',
      '/products/personal-care',
      '/products/textiles',
      '/products/perfumes-attars',
      '/products/botanical-products',
      '/products/speciality-goods',
      // Legacy slugs for seamless backwards compatibility
      '/products/cosmetics-skincare',
      '/products/powders-personal-care',
      '/products/attars-fragrances',
      '/products/shirting-fabrics',
      '/products/specialty-products',
      '/services',
      '/services/export-support',
      '/services/supplier-verification',
      '/services/trade-consultancy',
      '/services/procurement-coordination',
      '/export-services',
      '/consultancy',
      '/supplier-verification',
      '/markets',
      '/markets/usa',
      '/markets/uae-gcc',
      '/markets/uk',
      '/markets/europe',
      '/markets/africa',
      '/markets/south-asia',
      '/request-quote',
      '/export-catalog',
      '/about',
      '/quality-documentation',
      '/contact'
    ];
    return validRoutes.includes(path) ? path : '/';
  });

  // RFQ Modal State
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqCategory, setRfqCategory] = useState<string | undefined>(undefined);
  const [rfqProduct, setRfqProduct] = useState<string | undefined>(undefined);

  // Synchronize browser history and scroll
  const handleNavigate = (route: PageRoute) => {
    if (route === '/request-quote') {
      setRfqModalOpen(true);
      return;
    }

    setCurrentRoute(route);
    try {
      window.history.pushState({ route }, '', route);
    } catch {
      // In sandboxed iframes pushState might be restricted
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.route) {
        setCurrentRoute(event.state.route);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenRFQ = (category?: string, product?: string) => {
    setRfqCategory(category);
    setRfqProduct(product);
    setRfqModalOpen(true);
  };

  const handleCloseRFQ = () => {
    setRfqModalOpen(false);
    setRfqCategory(undefined);
    setRfqProduct(undefined);
  };

  // WhatsApp quick trigger
  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Navantara Exim Trade Desk, I would like to enquire about Indian product supply and export requirements."
    );
    window.open(`https://wa.me/919049496585?text=${text}`, '_blank');
  };

  // Render current view based on currentRoute
  const renderCurrentView = () => {
    // 1. Home
    if (currentRoute === '/') {
      return <HomeView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 2. Products Hub
    if (currentRoute === '/products') {
      return <ProductsHubView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 3. Product Category Detail (e.g. /products/essential-oils)
    if (currentRoute.startsWith('/products/')) {
      const slug = currentRoute.replace('/products/', '');
      return (
        <CategoryDetailView 
          categorySlug={slug} 
          onNavigate={handleNavigate} 
          onOpenRFQ={handleOpenRFQ} 
        />
      );
    }

    // 4. Services Overview
    if (currentRoute === '/services') {
      return <ServicesOverviewView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 5. Export Support
    if (currentRoute === '/services/export-support' || currentRoute === '/export-services') {
      return <ExportServicesView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 6. Supplier & Product Verification
    if (currentRoute === '/services/supplier-verification' || currentRoute === '/supplier-verification') {
      return <SupplierVerificationView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 7. Trade & Business Consultancy
    if (currentRoute === '/services/trade-consultancy' || currentRoute === '/consultancy') {
      return <ConsultancyView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 8. Procurement Coordination
    if (currentRoute === '/services/procurement-coordination') {
      return <ProcurementView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 9. Markets Hub
    if (currentRoute === '/markets') {
      return <MarketsHubView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 10. Market Corridor Detail (e.g. /markets/usa)
    if (currentRoute.startsWith('/markets/')) {
      const slug = currentRoute.replace('/markets/', '');
      return (
        <MarketDetailView 
          corridorSlug={slug} 
          onNavigate={handleNavigate} 
          onOpenRFQ={handleOpenRFQ} 
        />
      );
    }

    // 11. Quality Documentation
    if (currentRoute === '/quality-documentation') {
      return <QualityDocumentationView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 13. Export Catalog
    if (currentRoute === '/export-catalog') {
      return <ExportCatalogView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 14. About Us
    if (currentRoute === '/about') {
      return <AboutView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // 15. Contact Us
    if (currentRoute === '/contact') {
      return <ContactView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
    }

    // Fallback
    return <HomeView onNavigate={handleNavigate} onOpenRFQ={handleOpenRFQ} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B192C] text-white antialiased selection:bg-[#C5A059] selection:text-[#0B192C]">
      {/* Live Publishing & Preview Synchronization Bar */}
      <LivePublishSyncBar />

      {/* Global Navbar */}
      <Navbar 
        currentRoute={currentRoute} 
        onNavigate={handleNavigate} 
        onOpenRFQ={handleOpenRFQ} 
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Global Corporate Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenRFQ={handleOpenRFQ} 
      />

      {/* B2B Enquiry RFQ Modal */}
      <RFQModal 
        isOpen={rfqModalOpen} 
        onClose={handleCloseRFQ} 
        preselectedCategory={rfqCategory}
        preselectedProduct={rfqProduct}
      />

      {/* Floating WhatsApp Support Trigger */}
      <aside 
        aria-label="Direct trade chat support"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 group"
      >
        <div className="hidden md:flex bg-[#081321] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-2 border border-white/10 rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity">
          Trade Desk WhatsApp
        </div>
        <button
          onClick={openWhatsApp}
          className="w-13 h-13 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all cursor-pointer border-2 border-emerald-400"
          title="Direct WhatsApp with Navantara Exim Trade Desk"
          aria-label="Direct WhatsApp with Navantara Exim Trade Desk"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.508 0-9.987 4.479-9.987 9.988 0 1.757.464 3.488 1.347 5.025l-1.432 5.216 5.305-1.424a9.978 9.978 0 0 0 4.767 1.193h.005c5.507 0 9.987-4.479 9.987-9.988 0-2.67-1.035-5.174-2.915-7.054A9.903 9.903 0 0 0 12.012 2z"></path>
          </svg>
        </button>
      </aside>
    </div>
  );
}
