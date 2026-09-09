import React, { useState, useEffect } from 'react';
import { getImageFromIDB, getCachedImageSync } from '../../utils/imageStorage';

const STORAGE_KEY = 'products_hero_bg_custom';
const DEFAULT_PRODUCTS_HERO = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=85';

export const ProductsHeroBackground: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    const cached = getCachedImageSync(STORAGE_KEY);
    if (cached) return cached;
    return '/custom-products-hero.png';
  });

  // Load saved custom image from storage on mount if available
  useEffect(() => {
    let isMounted = true;

    getImageFromIDB(STORAGE_KEY).then((savedImg) => {
      if (savedImg && isMounted) {
        setImageSrc(savedImg);
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (isMounted) setImageSrc('/custom-products-hero.png');
      };
      img.onerror = () => {
        if (isMounted) setImageSrc(DEFAULT_PRODUCTS_HERO);
      };
      img.src = '/custom-products-hero.png';
    });

    const handleAssetsReady = () => {
      const cached = getCachedImageSync(STORAGE_KEY);
      if (cached && isMounted) {
        setImageSrc(cached);
      }
    };

    window.addEventListener('navantara-assets-ready', handleAssetsReady);

    return () => {
      isMounted = false;
      window.removeEventListener('navantara-assets-ready', handleAssetsReady);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* 1. Underlying Background Image - rendered for both custom and default */}
      <img
        src={imageSrc}
        alt="Products from India Export Showcase"
        className="w-full h-full object-cover object-center"
        style={{
          filter: 'blur(2px) brightness(0.92)',
          transform: 'scale(1.03)', // prevent blurred edges from showing
        }}
        referrerPolicy="no-referrer"
      />

      {/* 2. Primary Directional Darkness Gradient for optimal text legibility */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            rgba(6, 14, 24, 0.94) 0%, 
            rgba(8, 19, 33, 0.82) 45%, 
            rgba(11, 25, 44, 0.60) 100%)`
        }}
      />

      {/* 3. Vertical Framing Vignette (soft top & bottom transitions) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081321]/90 via-transparent to-[#081321] pointer-events-none" />

      {/* 4. Subtle Hexagonal / Grid Commerce Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
    </div>
  );
};
