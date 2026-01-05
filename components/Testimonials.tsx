
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <p className="text-[#C9A962] uppercase tracking-[0.4em] text-[10px] font-bold">Impact in Action</p>
          <h2 className="text-4xl serif text-[#0A1628] mt-2">Client Stories</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-10 bg-[#FAFAF9] border border-[#E5E5E3] relative group hover:border-[#C9A962]/30 transition-all">
              <Quote className="w-12 h-12 text-[#C9A962]/20 mb-6" />
              <p className="text-xl text-slate-700 leading-relaxed font-light italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200" />
                <div>
                  <h4 className="font-bold text-[#0A1628] text-sm">{t.author}</h4>
                  <p className="text-slate-500 text-xs uppercase tracking-widest">{t.title}</p>
                  <p className="text-[#C9A962] text-[10px] font-bold mt-1">{t.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button className="text-xs uppercase tracking-widest font-bold border-b-2 border-[#C9A962] pb-1 hover:text-[#C9A962] transition-colors">
             Read Full Case Studies
           </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
