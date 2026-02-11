
import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Heart, Shield } from 'lucide-react';
import { COLORS } from '@/constants';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  onSearchOpen: () => void;
  onSavedOpen: () => void;
  onAdminClick: () => void;
  bookmarkCount?: number;
  onViewChange: (view: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onSearchOpen,
  onSavedOpen,
  onAdminClick,
  bookmarkCount = 0,
  onViewChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [adminClicks, setAdminClicks] = useState(0);
  const [showAdminAccess, setShowAdminAccess] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null);

  const handleLogoClick = () => {
    setAdminClicks(prev => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowAdminAccess(true);
        setAdminClicks(0);
        return 0;
      }
      return newCount;
    });
  };

  const navItems = [
    { label: 'Consulting', id: 'consulting' },
    { label: 'Schools', id: 'schools' },
    { label: 'Summits', id: 'summits' },
    { label: 'Insights', id: 'insights' },
    { label: 'About', id: 'about' },
  ];

  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMegaMenu(id);
    }, 150);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveMegaMenu(null);
    }, 300);
  };

  return (
    <>
      <div className={`fixed inset-0 bg-[#050505]/60 backdrop-blur-sm z-40 transition-opacity duration-500 pointer-events-none ${activeMegaMenu ? 'opacity-100' : 'opacity-0'}`} />

      <nav 
        className="fixed top-0 left-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => { handleLogoClick(); onViewChange('home'); }}>
            <div className="w-10 h-10 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-xl serif group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all">LB</div>
            <div className="flex flex-col -space-y-1">
              <span className="text-white text-2xl font-bold tracking-tight serif hidden sm:block">LEADBOLD</span>
              <span className="text-[#D4AF37] text-[8px] uppercase tracking-[0.4em] font-bold hidden sm:block">Consulting</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id} className="relative py-8 cursor-pointer group" onMouseEnter={() => handleMouseEnter(item.id)}>
                <div className="flex items-center gap-1.5">
                  <span className={`text-sm uppercase tracking-[0.15em] font-bold transition-all duration-300 ${activeMegaMenu === item.id ? 'text-[#D4AF37]' : 'text-white/80 group-hover:text-white'}`}>
                    {item.label}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMegaMenu === item.id ? 'rotate-180 text-[#D4AF37]' : 'text-white/40'}`} />
                </div>
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${activeMegaMenu === item.id ? 'w-full' : 'w-0'}`} />
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-3 lg:space-x-6">
            <div className="hidden xl:flex items-center space-x-6 text-white/50 text-xs uppercase tracking-widest font-bold">
              {showAdminAccess && (
                <button onClick={onAdminClick} className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors">
                  <Shield className="w-4 h-4" /> Admin
                </button>
              )}
              <button 
                onClick={onSavedOpen}
                className="relative group cursor-pointer hover:text-[#D4AF37] transition-colors flex items-center gap-2"
              >
                 <Heart className="w-4 h-4" /> Saved 
                 {bookmarkCount > 0 && <span className="absolute -top-2 -right-3 w-4 h-4 bg-[#D4AF37] text-[#050505] text-[8px] flex items-center justify-center font-black rounded-full">{bookmarkCount}</span>}
              </button>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-4">
              <button onClick={onSearchOpen} className="text-white/60 hover:text-[#D4AF37] transition-colors p-2">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block px-8 py-2.5 bg-[#D4AF37] text-[#050505] text-[10px] uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all duration-300">
                Apply Now
              </button>
              <button className="lg:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <MegaMenu 
          activeId={activeMegaMenu} 
          onClose={() => setActiveMegaMenu(null)} 
          onViewChange={onViewChange}
        />
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onSearchOpen={onSearchOpen} />
    </>
  );
};

export default Navbar;
