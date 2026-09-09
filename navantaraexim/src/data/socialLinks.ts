export interface SocialLink {
  id: string;
  name: string;
  url: string;
  handle: string;
  description: string;
  color: string;
  badgeBg: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/navantara-exim/about/?viewAsMember=true',
    handle: 'navantara-exim',
    description: 'Corporate updates, export capabilities & trade network',
    color: '#0A66C2',
    badgeBg: 'bg-[#0A66C2]/15 text-[#60A5FA] border-[#0A66C2]/30 hover:border-[#0A66C2] hover:bg-[#0A66C2]/25'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/navantaraexim?utm_source=qr&igsi=dnAxNGl0Zm5jaHFl',
    handle: '@navantaraexim',
    description: 'Product visuals, batch previews & factory packaging',
    color: '#E1306C',
    badgeBg: 'bg-[#E1306C]/15 text-[#F472B6] border-[#E1306C]/30 hover:border-[#E1306C] hover:bg-[#E1306C]/25'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1EwguE9mzi/',
    handle: 'Navantara Exim',
    description: 'Company announcements, buyer guides & trade news',
    color: '#1877F2',
    badgeBg: 'bg-[#1877F2]/15 text-[#93C5FD] border-[#1877F2]/30 hover:border-[#1877F2] hover:bg-[#1877F2]/25'
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/NavantaraExim',
    handle: '@NavantaraExim',
    description: 'Instant trade market updates & export announcements',
    color: '#FFFFFF',
    badgeBg: 'bg-white/10 text-white border-white/20 hover:border-white/50 hover:bg-white/20'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'http://youtube.com/NavantaraExim',
    handle: '@NavantaraExim',
    description: 'Product showcases, packaging reels & export insight videos',
    color: '#FF0000',
    badgeBg: 'bg-[#FF0000]/15 text-[#F87171] border-[#FF0000]/30 hover:border-[#FF0000] hover:bg-[#FF0000]/25'
  },
  {
    id: 'threads',
    name: 'Threads',
    url: 'https://www.threads.com/@navantaraexim',
    handle: '@navantaraexim',
    description: 'Trade discussions & product announcements',
    color: '#E2E8F0',
    badgeBg: 'bg-slate-700/30 text-slate-200 border-slate-600/40 hover:border-slate-400 hover:bg-slate-700/50'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'http://t.me/NavantaraExim',
    handle: '@NavantaraExim',
    description: 'Direct trade channel & quick commercial enquiries',
    color: '#229ED9',
    badgeBg: 'bg-[#229ED9]/15 text-[#38BDF8] border-[#229ED9]/30 hover:border-[#229ED9] hover:bg-[#229ED9]/25'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Desk',
    url: 'https://wa.me/message/QUNHP346GHLZB1',
    handle: 'Direct Trade Chat',
    description: 'Instant quote & sample enquiry messaging',
    color: '#25D366',
    badgeBg: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/25'
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    url: 'https://in.pinterest.com/navantaraexim/',
    handle: '@navantaraexim',
    description: 'Curated Indian product boards, textiles & fragrances',
    color: '#E60023',
    badgeBg: 'bg-[#E60023]/15 text-[#FB7185] border-[#E60023]/30 hover:border-[#E60023] hover:bg-[#E60023]/25'
  }
];
