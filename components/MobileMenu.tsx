
import React, { useState } from 'react';
import { X, ChevronDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { MEGA_MENU_DATA } from '../menuData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onSearchOpen }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const navItems = Object.values(MEGA_MENU_DATA);

  return (
    <div className="fixed inset-0 z-[60] bg-[#0A1628] flex flex-col animate-fade-in-up">
      {/* Institutional Background Texture */}
      <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 h-20 px-6 flex items-center justify-between border-b border-white/10 bg-[#0A1628]/80 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-[#C9A962] flex items-center justify-center font-bold text-[#C9A962] text-lg serif">LB</div>
          <span className="text-white text-xl font-bold tracking-tight serif">LEADBOLD</span>
        </div>
        <button onClick={onClose} className="p-2 text-white/60 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-1 overflow-y-auto no-scrollbar pb-32">
        <div className="px-6 py-8 space-y-2">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-white/5">
              <button 
                onClick={() => toggleSection(item.id)}
                className="w-full py-6 flex items-center justify-between group"
              >
                <span className={`text-2xl serif transition-colors ${expandedSection === item.id ? 'text-[#C9A962]' : 'text-white'}`}>
                  {item.overview.title.replace('STRATEGIC ', '').replace('SCHOOLS OF ', '')}
                </span>
                <ChevronDown className={`w-5 h-5 text-[#C9A962] transition-transform duration-300 ${expandedSection === item.id ? 'rotate-180' : ''}`} />
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedSection === item.id ? 'max-h-[1200px] pb-10' : 'max-h-0'
                }`}
              >
                <div className="space-y-8 pl-2 border-l border-[#C9A962]/20">
                  {/* Overview Snippet */}
                  <p className="text-white/60 text-sm leading-relaxed font-light italic">
                    {item.overview.description}
                  </p>

                  {/* Nav Groups */}
                  <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-[#C9A962] uppercase tracking-widest text-[10px] font-bold opacity-60">
                        {item.navigation1.header}
                      </h4>
                      <div className="space-y-4">
                        {item.navigation1.links.map((link, i) => (
                          <a key={i} href={link.href} className="block group" onClick={onClose}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-white font-medium">{link.title}</span>
                              {link.badge && (
                                <span className="px-1.5 py-0.5 bg-[#C9A962]/10 text-[#C9A962] text-[8px] uppercase font-bold rounded">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            {link.description && <p className="text-white/30 text-xs">{link.description}</p>}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-[#C9A962] uppercase tracking-widest text-[10px] font-bold opacity-60">
                        {item.navigation2.header}
                      </h4>
                      <div className="space-y-4">
                        {item.navigation2.links.map((link, i) => (
                          <a key={i} href={link.href} className="block group" onClick={onClose}>
                            <span className="text-white font-medium">{link.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Featured Card (Simplified) */}
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg space-y-4">
                    <h5 className="text-[#C9A962] uppercase tracking-widest text-[10px] font-bold">
                      {item.featured.subtitle}
                    </h5>
                    <div className="space-y-2">
                      <p className="text-white font-serif text-lg leading-tight">{item.featured.title}</p>
                      <button className="flex items-center gap-2 text-[#C9A962] text-[10px] uppercase font-bold">
                        {item.featured.cta} <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Utility Links */}
        <div className="px-6 py-8 border-t border-white/10 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <a href="#partners" className="text-white/60 uppercase tracking-widest text-xs font-bold py-4 px-6 border border-white/10 flex items-center justify-between" onClick={onClose}>
              Partners <ArrowRight className="w-4 h-4 text-[#C9A962]" />
            </a>
            <a href="#" className="text-white/60 uppercase tracking-widest text-xs font-bold py-4 px-6 border border-white/10 flex items-center justify-between" onClick={onClose}>
              Contact <ArrowRight className="w-4 h-4 text-[#C9A962]" />
            </a>
          </div>
          <button 
            onClick={() => { onSearchOpen(); onClose(); }}
            className="w-full py-4 bg-white/5 border border-white/10 text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-3"
          >
            Institutional Search
          </button>
        </div>
      </div>

      {/* Fixed Bottom Action */}
      <div className="relative z-20 p-6 bg-[#0A1628] border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <button className="w-full py-5 bg-[#C9A962] text-[#0A1628] font-bold uppercase tracking-[0.2em] text-xs shadow-lg shadow-[#C9A962]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
