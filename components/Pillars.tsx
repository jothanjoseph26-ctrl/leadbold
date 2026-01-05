
import React from 'react';
import { PILLARS, COLORS } from '@/constants';
import { ArrowRight } from 'lucide-react';

const Pillars: React.FC = () => {
  return (
    <section id="pillars" className="py-32 bg-[#050505] relative border-b border-white/5">
      <div className="absolute inset-0 noise-bg opacity-[0.1]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center max-w-3xl mx-auto space-y-4">
          <p className="text-[#C9A962] uppercase tracking-[0.4em] text-[10px] font-bold">Integrated Excellence</p>
          <h2 className="text-5xl md:text-7xl text-white serif">The Four Pillars</h2>
          <div className="w-24 h-1 bg-[#C9A962] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className="group relative h-[500px] bg-[#0A1628] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#C9A962]/50 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <div className="p-12 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-10 transform transition-transform group-hover:scale-110 duration-700">
                    {pillar.icon}
                  </div>
                  <h3 className="text-4xl serif mb-6 text-white">{pillar.title}</h3>
                  <p className="text-white/60 leading-relaxed text-xl font-light italic serif">
                    "{pillar.description}"
                  </p>
                </div>
                <div className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-bold text-[#C9A962]">
                  Explore Pillar <ArrowRight className="ml-3 w-4 h-4" />
                </div>
              </div>

              <div className="absolute inset-0 bg-[#C9A962] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out p-12 flex flex-col justify-between z-20">
                <div className="space-y-10">
                  <div className="h-[1px] w-20 bg-[#050505]" />
                  <h4 className="text-[#050505] serif text-3xl font-bold">Core Specializations</h4>
                  <ul className="space-y-4">
                    {pillar.details?.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-4 text-[#050505]/80 text-lg font-bold">
                        <span className="w-1.5 h-1.5 bg-[#050505] rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-[#050505] text-[#C9A962] text-xs uppercase tracking-widest font-black hover:brightness-110 transition-all">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
