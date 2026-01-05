
import React from 'react';
/* Fixed: Updated import to FLAGSHIP_SUMMITS as SUMMITS is not exported from constants */
import { FLAGSHIP_SUMMITS, COLORS } from '@/constants';
import { MapPin, Calendar, Users } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <section id="summits" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl text-[#0A1628] serif mb-4">Upcoming Summits</h2>
          <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Where Leaders Convene</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#E5E5E3] hidden md:block" />
          
          <div className="space-y-24">
            {/* Fixed: Changed SUMMITS to FLAGSHIP_SUMMITS */}
            {FLAGSHIP_SUMMITS.map((summit, idx) => (
              <div key={summit.id} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`p-8 bg-white border border-[#E5E5E3] hover:border-[#C9A962] transition-colors group relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#C9A962] rounded-full hidden md:block ${idx % 2 === 0 ? '-right-[54px]' : '-left-[54px]'}`} />
                    
                    <h3 className="text-3xl serif mb-4 text-[#0A1628] group-hover:text-[#C9A962] transition-colors">{summit.title}</h3>
                    
                    <div className={`flex flex-col space-y-3 mb-6 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Calendar className="w-4 h-4 text-[#C9A962]" /> {summit.date}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin className="w-4 h-4 text-[#C9A962]" /> {summit.location}
                      </div>
                    </div>

                    <p className="text-[#0A1628] font-medium mb-6 italic">Theme: {summit.theme}</p>
                    
                    <div className={`flex items-center gap-4 mb-8 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Users className="w-4 h-4 text-[#C9A962]" />
                      <div className="flex -space-x-2">
                        {/* Fixed: Changed summit.speakers to summit.speakerIds as per the Summit type definition */}
                        {summit.speakerIds.map((_, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${i+idx}`} alt="speaker" />
                          </div>
                        ))}
                      </div>
                      {/* Fixed: Changed summit.speakers to summit.speakerIds */}
                      <span className="text-xs text-slate-400">+{summit.speakerIds.length} Speakers</span>
                    </div>

                    <button className="px-8 py-3 bg-[#0A1628] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#C9A962] transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
