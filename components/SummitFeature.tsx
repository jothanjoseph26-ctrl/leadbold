
import React from 'react';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { COLORS, FLAGSHIP_SUMMITS } from '@/constants';
import { Summit } from '@/types';

interface SummitFeatureProps {
  onViewAll?: () => void;
  onViewFeatured?: (id: string) => void;
  summits?: Summit[];
}

const SummitFeature: React.FC<SummitFeatureProps> = ({ onViewAll, onViewFeatured, summits = FLAGSHIP_SUMMITS }) => {
  const featured = summits[0]; // ANPELS

  return (
    <section id="summits" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Join the Conversation</p>
          <h2 className="text-5xl md:text-7xl text-[#050505] serif">Next Major Event</h2>
        </div>

        <div className="flex flex-col lg:flex-row bg-white shadow-2xl overflow-hidden border border-[#E5E5E3]">
          <div className="lg:w-3/5 p-12 lg:p-20 space-y-10">
            <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest rounded-full">
              {featured.date}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-5xl serif text-[#050505] leading-tight">{featured.shortName} 2026</h3>
              <p className="text-2xl italic text-[#D4AF37] serif">"{featured.theme}"</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
              <div className="flex items-center gap-3 text-slate-500">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-medium">{featured.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Users className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-medium">{featured.capacity}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-sm font-medium">Flagship Convening</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               {featured.outcomes.map(outcome => (
                 <span key={outcome} className="px-4 py-2 border border-[#D4AF37]/30 text-[#050505] text-[10px] uppercase tracking-widest font-bold">
                   • {outcome}
                 </span>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-10">
              <button 
                onClick={() => onViewFeatured?.(featured.id)} 
                className="px-10 py-4 bg-[#D4AF37] text-[#050505] text-xs uppercase tracking-widest font-bold transition-all hover:scale-105"
              >
                Register Now
              </button>
              <button onClick={onViewAll} className="px-10 py-4 border border-[#050505] text-[#050505] text-xs uppercase tracking-widest font-bold transition-all hover:bg-[#050505] hover:text-white">
                View 2026 Calendar
              </button>
            </div>
          </div>

          <div className="lg:w-2/5 relative bg-[#050505] p-12 flex items-center justify-center">
             <div className="grid grid-cols-3 gap-4">
                {[1,2,3,4,5,6,7,8,9].map(i => (
                  <div key={i} className="aspect-square bg-white/5 border border-white/10 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Speaker" className="w-full h-full object-cover" />
                  </div>
                ))}
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-40 pointer-events-none" />
             <div className="absolute bottom-8 text-center text-white/40 text-[10px] uppercase tracking-widest font-bold">
               Keynote Speaker Faculty
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummitFeature;
