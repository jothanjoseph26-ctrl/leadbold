import React from 'react';
import { MapPin, Users, Calendar, ArrowRight } from 'lucide-react';
import { FLAGSHIP_SUMMITS } from '@/constants';
import { Summit } from '@/types';

interface SummitFeatureProps {
  onViewAll?: () => void;
  onViewFeatured?: (id: string) => void;
  summits?: Summit[];
}

const SummitFeature: React.FC<SummitFeatureProps> = ({ onViewAll, onViewFeatured, summits = FLAGSHIP_SUMMITS }) => {
  const featured = summits[0];

  return (
    <section id="summits" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 space-y-4">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Join the Conversation</p>
          <h2 className="text-5xl md:text-7xl text-[#050505] serif">Next Major Event</h2>
        </div>

        <div className="grid lg:grid-cols-2 bg-white shadow-2xl overflow-hidden border border-[#E5E5E3] min-h-[760px]">
          <div className="p-12 lg:p-20 flex flex-col justify-between space-y-12">
            <div className="space-y-10">
              <div className="inline-flex px-4 py-1 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest">
                {featured.date}
              </div>

              <div className="space-y-4">
                <h3 className="text-5xl serif text-[#050505] leading-tight">{featured.shortName}</h3>
                <p className="text-2xl italic text-[#D4AF37] serif">"{featured.theme}"</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
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

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                {featured.outcomes.map((outcome) => (
                  <div key={outcome} className="px-4 py-3 border border-[#D4AF37]/30 text-[#050505] text-[10px] uppercase tracking-[0.2em] font-bold">
                    {outcome}
                  </div>
                ))}
                <div className="px-4 py-3 border border-[#D4AF37]/30 text-[#050505] text-[10px] uppercase tracking-[0.2em] font-bold">
                  Leadership Development
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => onViewFeatured?.(featured.id)}
                className="px-10 py-4 bg-[#D4AF37] text-[#050505] text-xs uppercase tracking-widest font-bold transition-all hover:scale-105"
              >
                Register Now
              </button>
              <button
                onClick={onViewAll}
                className="px-10 py-4 border border-[#050505] text-[#050505] text-xs uppercase tracking-widest font-bold transition-all hover:bg-[#050505] hover:text-white"
              >
                View 2026 Calendar
              </button>
            </div>
          </div>

          <div className="bg-[#050505] text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-[0.06] pointer-events-none" />

            <div className="relative z-10 space-y-12">
              <div className="space-y-4 border-b border-white/10 pb-8">
                <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-black">Why {featured.shortName} Matters</p>
                <h3 className="text-4xl serif leading-tight">{featured.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {featured.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-black">Availability</p>
                  <div className="text-6xl serif text-[#D4AF37]">47</div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-bold">Seats Remaining</p>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-black">Delegate Seat</p>
                  <div className="text-3xl serif text-white">{featured.price}</div>
                  <p className="text-sm text-[#22C55E] uppercase tracking-[0.2em] font-bold">Registration Open</p>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-black">Target Delegation</p>
                  <ul className="space-y-3 text-white/75 text-sm leading-relaxed">
                    {featured.whoShouldAttend.slice(0, 3).map((attendee, i) => (
                      <li key={i}>{attendee}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-black">What Delegates Gain</p>
                  <ul className="space-y-3 text-white/75 text-sm leading-relaxed">
                    {featured.outcomes.slice(0, 3).map((outcome, i) => (
                      <li key={i}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={() => onViewFeatured?.(featured.id)}
              className="relative z-10 mt-12 inline-flex items-center gap-3 text-[#D4AF37] text-xs uppercase tracking-[0.25em] font-black hover:text-white transition-colors"
            >
              Download The Summit Brochure
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummitFeature;
