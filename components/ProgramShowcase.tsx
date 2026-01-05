
import React from 'react';
import { ALL_COURSES, COLORS } from '@/constants';
import { DetailedCourse } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ProgramShowcaseProps {
  courses?: DetailedCourse[];
}

const ProgramShowcase: React.FC<ProgramShowcaseProps> = ({ courses = ALL_COURSES }) => {
  return (
    <section id="schools" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-bold">Curated Excellence</p>
          <h2 className="text-5xl md:text-6xl text-[#050505] serif">Institutional Programs</h2>
        </div>
        <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#050505] hover:text-[#D4AF37] transition-colors border-b border-[#050505] pb-1">
          View All Programs <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-8 px-6 md:px-32 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory">
        {courses.slice(0, 6).map((program) => (
          <div 
            key={program.id}
            className="flex-none w-[300px] md:w-[450px] group cursor-pointer snap-start"
          >
            <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-gradient-to-br from-[#D4AF37] to-[#B8860B]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#050505] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                {program.duration}
              </div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="px-6 py-2 border border-white text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-[#050505] transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-2">{program.category}</p>
            <h3 className="text-2xl serif text-[#050505] mb-3 group-hover:text-[#D4AF37] transition-colors">{program.title}</h3>
            <p className="text-slate-500 font-light leading-relaxed">{program.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3">
        {[1,2,3].map(i => (
          <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === 1 ? 'w-10 bg-[#D4AF37]' : 'w-2 bg-[#E5E5E3]'}`} />
        ))}
      </div>
    </section>
  );
};

export default ProgramShowcase;
