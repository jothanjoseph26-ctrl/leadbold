
import React from 'react';
import { COLORS } from '@/constants';

const Reach: React.FC = () => {
  return (
    <section className="py-32 bg-[#0A1628] text-white relative overflow-hidden">
      {/* Abstract Map Background Simulation */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-[#C9A962] stroke-[0.1]">
           <path d="M40 10 Q 50 0 60 10 T 70 30 T 60 50 T 40 70 T 30 50 Z" />
           <circle cx="45" cy="20" r="1" fill={COLORS.gold} />
           <circle cx="55" cy="35" r="1.5" fill={COLORS.gold} />
           <circle cx="60" cy="50" r="1" fill={COLORS.gold} />
           <circle cx="35" cy="45" r="0.8" fill={COLORS.gold} />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <p className="text-[#C9A962] uppercase tracking-[0.5em] text-[10px] font-bold">Global Presence</p>
            <h2 className="text-5xl md:text-7xl serif">15 Countries. One Mission.</h2>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-4xl text-[#C9A962] serif mb-2">47</h4>
              <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Programs Delivered</p>
            </div>
            <div>
              <h4 className="text-4xl text-[#C9A962] serif mb-2">12</h4>
              <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Summit Locations</p>
            </div>
          </div>

          <div className="space-y-4">
             <p className="text-white/60 text-lg font-light leading-relaxed">
               Our regional presence ensures that our frameworks are context-sensitive and immediately applicable to the specific governance challenges of each nation.
             </p>
             <div className="flex flex-wrap gap-4 pt-4">
               {['West Africa', 'East Africa', 'Southern Africa', 'Central Africa'].map(region => (
                 <span key={region} className="px-4 py-2 bg-white/5 border border-white/10 text-white/60 text-[10px] uppercase tracking-widest font-bold">
                   {region}
                 </span>
               ))}
             </div>
          </div>
          
          <button className="text-xs uppercase tracking-widest font-bold border-b border-[#C9A962] pb-1 hover:text-[#C9A962] transition-colors">
            View Regional Impact Reports
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reach;
