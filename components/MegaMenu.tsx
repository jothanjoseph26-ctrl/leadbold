
import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MEGA_MENU_DATA } from '../menuData';

interface MegaMenuProps {
  activeId: string | null;
  onClose: () => void;
  onViewChange: (view: any) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ activeId, onClose, onViewChange }) => {
  if (!activeId || !MEGA_MENU_DATA[activeId]) return null;

  const data = MEGA_MENU_DATA[activeId];

  const handleLinkClick = (e: React.MouseEvent<HTMLElement> | React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('view:')) {
      e.preventDefault();
      const view = href.split(':')[1] as any;
      onViewChange(view);
      onClose();
    } else if (href.startsWith('summit:')) {
      e.preventDefault();
      onViewChange(href);
      onClose();
    }
  };

  return (
    <div 
      className="absolute top-full left-0 w-full bg-[#050505]/98 backdrop-blur-xl border-t border-[#D4AF37] shadow-2xl overflow-hidden animate-fade-in-up origin-top z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-[1400px] mx-auto px-12 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Overview */}
        <div className="space-y-6 animate-fade-in-up [animation-delay:100ms]">
          <div className="p-3 bg-white/5 inline-block rounded-lg mb-2">
            {data.overview.icon}
          </div>
          <h3 className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold">
            {data.overview.title}
          </h3>
          <p className="text-white/80 text-lg leading-relaxed font-light">
            {data.overview.description}
          </p>
          <div className="space-y-4 pt-4">
            <button 
              onClick={(e) => handleLinkClick(e, data.overview.ctaLink || `view:${activeId}`)}
              className="w-full py-4 bg-[#D4AF37] text-[#050505] text-xs uppercase tracking-widest font-bold hover:brightness-110 transition-all"
            >
              {data.overview.cta}
            </button>
            <a href="#" className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest font-bold hover:text-white transition-colors">
              VIEW CASE STUDIES <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation 1 */}
        <div className="space-y-8 animate-fade-in-up [animation-delay:200ms]">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold opacity-60">
            {data.navigation1.header}
          </h4>
          <div className="space-y-8">
            {data.navigation1.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="group block space-y-2"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-medium group-hover:text-[#D4AF37] transition-colors">
                    {link.title}
                  </span>
                  {link.badge && (
                    <span className="px-2 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] uppercase tracking-widest font-bold rounded">
                      {link.badge}
                    </span>
                  )}
                </div>
                {link.description && (
                  <p className="text-white/40 text-sm leading-snug group-hover:text-white/60 transition-colors line-clamp-2">
                    {link.description}
                  </p>
                )}
                <div className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 3: Navigation 2 */}
        <div className="space-y-8 animate-fade-in-up [animation-delay:300ms]">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold opacity-60">
            {data.navigation2.header}
          </h4>
          <div className="space-y-6">
            {data.navigation2.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href} 
                className="group block space-y-1"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-medium group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {link.title}
                  </span>
                  {link.badge && (
                    <span className="px-2 py-0.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] uppercase tracking-widest font-bold rounded">
                      {link.badge}
                    </span>
                  )}
                </div>
                {link.description && (
                  <p className="text-white/30 text-[11px] leading-tight group-hover:text-white/60 transition-colors line-clamp-1 italic">
                    {link.description}
                  </p>
                )}
                <div className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            {data.navigation2.footerCta && (
              <a 
                href={data.navigation2.footerCta.href}
                onClick={(e) => handleLinkClick(e, data.navigation2.footerCta!.href)}
                className="inline-flex items-center justify-center w-full mt-6 py-4 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-[#050505] transition-all hover:scale-[1.02]"
              >
                {data.navigation2.footerCta.label} <ArrowRight className="w-3 h-3 ml-2" />
              </a>
            )}
          </div>
        </div>

        {/* Column 4: Featured */}
        <div className="space-y-8 animate-fade-in-up [animation-delay:400ms]">
          <h4 className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px] font-bold opacity-60">
            {data.featured.subtitle}
          </h4>
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg space-y-6 group cursor-pointer hover:border-[#D4AF37]/30 transition-all">
            {data.featured.image && (
              <div className="aspect-video overflow-hidden rounded mb-4">
                <img src={data.featured.image} alt={data.featured.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            )}
            {data.featured.metrics && (
              <div className="grid grid-cols-2 gap-6 pb-4">
                {data.featured.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-2xl serif text-[#D4AF37]">{m.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="space-y-2">
              <h5 className="text-white text-xl font-bold serif leading-tight">{data.featured.title}</h5>
              {data.featured.description && (
                <p className="text-white/50 text-sm leading-relaxed italic">{data.featured.description}</p>
              )}
            </div>
            <button className="w-full py-3 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-[#050505] transition-all flex items-center justify-center gap-2">
              {data.featured.cta} <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#050505] py-4 px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></span>
            {data.bottomBar}
          </div>
          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
             <span className="text-white text-[10px] uppercase tracking-widest">Institutional Impact Report 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
