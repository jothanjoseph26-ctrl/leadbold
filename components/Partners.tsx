
import React from 'react';

const tier1 = ['NOUN Institutional', 'World Economic Forum', 'African Union Commission'];
const tier2 = ['University of Lagos', 'Economic Council', 'UN Development Hub', 'Global Diplomacy Inst'];

const Partners: React.FC = () => {
  return (
    <section id="partners" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#C9A962] uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Strategic Alliances</p>
          <h2 className="text-5xl serif text-[#0A1628]">Trust Through Association</h2>
          <p className="text-slate-500 mt-4 font-light">Collaborating with the world's leading institutions to deliver unprecedented value.</p>
        </div>

        <div className="space-y-20">
          {/* Strategic Partners */}
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            {tier1.map((p, i) => (
              <div key={i} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
                 <span className="text-2xl md:text-3xl font-bold tracking-tighter serif text-slate-800 uppercase italic">
                   {p}
                 </span>
              </div>
            ))}
          </div>

          <div className="h-[1px] w-24 bg-[#E5E5E3] mx-auto" />

          {/* Program Partners */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {tier2.map((p, i) => (
              <div key={i} className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
                 <span className="text-lg md:text-xl font-semibold tracking-tight text-slate-600 uppercase">
                   {p}
                 </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 p-12 bg-white border border-[#E5E5E3] text-center">
           <button className="px-10 py-4 border-2 border-[#0A1628] text-[#0A1628] text-xs uppercase tracking-widest font-bold hover:bg-[#0A1628] hover:text-white transition-all">
             Explore Partnership Models
           </button>
           <p className="mt-6 text-slate-400 text-xs font-semibold uppercase tracking-widest">
             Join 50+ institutions building Africa's leadership capacity
           </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
