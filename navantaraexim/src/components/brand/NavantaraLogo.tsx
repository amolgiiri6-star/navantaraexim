import React from 'react';
import { OfficialStampLogo } from './OfficialStampLogo';

interface LogoProps {
  variant?: 'horizontal' | 'stamp' | 'compact' | 'footer' | 'stacked';
  className?: string;
  showTagline?: boolean;
}

export const NavantaraLogo: React.FC<LogoProps> = ({ 
  variant = 'horizontal', 
  className = '', 
}) => {
  if (variant === 'stamp') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2.5 w-[300px] ${className}`}>
        <OfficialStampLogo size="lg" />
        <div className="w-full flex items-center justify-center px-4 py-2 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 shadow-sm">
          <span className="font-serif text-xs font-bold text-white uppercase tracking-[0.25em] text-center whitespace-nowrap leading-none indent-[0.25em]">
            Your GROWTH Stamp
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center space-y-2 w-[220px] ${className}`}>
        <OfficialStampLogo size="md" />
        <div className="w-full flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 shadow-sm">
          <span className="font-serif text-[11px] font-bold text-white uppercase tracking-[0.22em] text-center whitespace-nowrap leading-none indent-[0.22em]">
            Your GROWTH Stamp
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3 select-none shrink-0 ${className}`}>
        <div className="shrink-0 transition-transform duration-300 hover:scale-105">
          <OfficialStampLogo size="xs" showShadow={false} />
        </div>
        <div className="flex flex-col justify-center shrink-0">
          <div className="flex items-center whitespace-nowrap leading-none">
            <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white leading-none whitespace-nowrap inline-flex items-baseline">
              <span>NAVANTARA</span>
              <span className="text-[#C5A059] ml-1.5">EXIM</span>
              <sup className="text-[8.5px] font-bold text-[#DFC17B] ml-0.5 select-none tracking-normal align-super">TM</sup>
            </span>
          </div>
          <p className="text-[10px] text-white font-semibold tracking-wider uppercase mt-0.5 whitespace-nowrap">
            Your GROWTH Stamp
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 select-none shrink-0 ${className}`}>
        <div className="shrink-0 transition-transform duration-300 hover:scale-105">
          <OfficialStampLogo size="sm" showShadow={true} />
        </div>
        <div className="space-y-1 shrink-0">
          <div className="flex items-center whitespace-nowrap leading-none">
            <span className="font-serif text-2xl font-black tracking-wider text-white whitespace-nowrap inline-flex items-baseline">
              <span>NAVANTARA</span>
              <span className="text-[#C5A059] ml-2">EXIM</span>
              <sup className="text-xs font-bold text-[#DFC17B] ml-1 select-none tracking-normal align-super">TM</sup>
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#DFC17B] whitespace-nowrap">
            Seamless Trade. Global Trust.
          </p>
          <p className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
            India-Based Sourcing &amp; Export Partner
          </p>
        </div>
      </div>
    );
  }

  // Default: Horizontal Header Logo with the authentic Official Postage Stamp Logo
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 group cursor-pointer select-none shrink-0 ${className}`}>
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <OfficialStampLogo size="xs" showShadow={true} />
      </div>
      <div className="flex flex-col justify-center shrink-0">
        <div className="flex items-center whitespace-nowrap leading-none">
          <span className="font-serif text-lg sm:text-xl md:text-2xl font-black tracking-wider text-white leading-none whitespace-nowrap group-hover:text-amber-100 transition-colors inline-flex items-baseline">
            <span>NAVANTARA</span>
            <span className="text-[#C5A059] ml-1.5 sm:ml-2">EXIM</span>
            <sup className="text-[9px] sm:text-[10.5px] font-bold text-[#DFC17B] ml-0.5 select-none tracking-normal align-super">TM</sup>
          </span>
        </div>
        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#DFC17B]/90 mt-1 hidden sm:block whitespace-nowrap">
          Seamless Trade. Global Trust.
        </span>
      </div>
    </div>
  );
};
