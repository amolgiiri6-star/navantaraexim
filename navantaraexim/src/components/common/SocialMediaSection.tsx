import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  AtSign, 
  Send, 
  MessageCircle, 
  Pin, 
  ExternalLink,
  Share2
} from 'lucide-react';
import { SOCIAL_LINKS, SocialLink } from '../../data/socialLinks';

interface SocialMediaSectionProps {
  variant?: 'contact' | 'footer' | 'compact';
  title?: string;
  subtitle?: string;
}

export const getSocialIcon = (id: string, className = "w-5 h-5") => {
  switch (id) {
    case 'linkedin':
      return <Linkedin className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'facebook':
      return <Facebook className={className} />;
    case 'x':
      return <Twitter className={className} />;
    case 'youtube':
      return <Youtube className={className} />;
    case 'threads':
      return <AtSign className={className} />;
    case 'telegram':
      return <Send className={className} />;
    case 'whatsapp':
      return <MessageCircle className={className} />;
    case 'pinterest':
      return <Pin className={className} />;
    default:
      return <Share2 className={className} />;
  }
};

export const SocialMediaSection: React.FC<SocialMediaSectionProps> = ({
  variant = 'contact',
  title = "Official Social & Digital Channels",
  subtitle = "Follow and connect with Navantara Exim across our verified platforms for product showcases, export updates, and direct communication."
}) => {
  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-150 group cursor-pointer ${link.badgeBg}`}
            title={`${link.name}: ${link.handle}`}
            aria-label={link.name}
          >
            {getSocialIcon(link.id, "w-4 h-4 transition-transform group-hover:scale-110")}
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
          >
            {getSocialIcon(link.id, "w-3.5 h-3.5 text-[#C5A059]")}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Default 'contact' layout (Full grid for the bottom of Contact Us page)
  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-[0.2em] mb-1">
          <Share2 className="w-4 h-4" />
          <span>Verified Online Presence</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-2xl">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {SOCIAL_LINKS.map((link: SocialLink) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-[#081321] border border-white/10 hover:border-[#C5A059]/60 hover:bg-[#081321]/90 transition-all duration-200 group flex flex-col justify-between"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${link.badgeBg} shrink-0`}>
                  {getSocialIcon(link.id, "w-5 h-5")}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-[#DFC17B] transition-colors flex items-center gap-1.5">
                    {link.name}
                  </h4>
                  <p className="text-[11px] text-white/50 font-mono">
                    {link.handle}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </div>

            <p className="text-[11px] text-white/60 line-clamp-2 leading-relaxed mt-1">
              {link.description}
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] text-[#C5A059]">
              <span className="font-semibold uppercase tracking-wider">Connect Profile</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
