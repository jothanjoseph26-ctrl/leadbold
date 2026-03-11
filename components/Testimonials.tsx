
import React from 'react';
import { Quote } from 'lucide-react';
import { NNPC_CASE_STUDY } from '@/constants';

interface TestimonialsProps {
  onViewChange?: (view: string) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ onViewChange }) => {
  const featuredTestimonials = NNPC_CASE_STUDY.testimonials.filter((testimonial) => testimonial.featured).slice(0, 3);

  const getInitials = (name: string) =>
    name
      .replace(/\(.*?\)/g, '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-[#C9A962] uppercase tracking-[0.4em] text-[10px] font-bold">Verified Participant Feedback</p>
          <h2 className="text-4xl serif text-[#0A1628] mt-2">NNPC Program Voices</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {featuredTestimonials.map((t) => (
            <div key={t.id} className="p-10 bg-[#FAFAF9] border border-[#E5E5E3] relative group hover:border-[#C9A962]/30 transition-all">
              <Quote className="w-12 h-12 text-[#C9A962]/20 mb-6" />
              <p className="text-xl text-slate-700 leading-relaxed font-light italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0A1628] to-[#1B3A6B] text-[#D4AF37] flex items-center justify-center text-sm font-black serif">
                  {getInitials(t.name)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0A1628] text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{t.title}</p>
                  <p className="text-[#C9A962] text-[10px] font-bold mt-1">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button 
             onClick={() => onViewChange?.('case-study')}
             className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#C9A962] pb-1 hover:text-[#C9A962] transition-colors"
           >
             Read NNPC Case Study
           </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
