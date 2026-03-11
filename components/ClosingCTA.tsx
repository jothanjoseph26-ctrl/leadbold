
import React from 'react';

interface ClosingCTAProps {
  onViewChange: (view: string) => void;
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({ onViewChange }) => {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
         <div className="w-[1000px] h-[1000px] border-[0.5px] border-[#D4AF37] rounded-full animate-pulse" />
         <div className="absolute w-[800px] h-[800px] border-[0.5px] border-[#D4AF37] rounded-full rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-12">
        <p className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-bold">JOIN 1,200+ LEADERS</p>
        
        <h2 className="text-5xl md:text-7xl text-white serif leading-tight">
          Transform Your Leadership. <br />
          Transform Your Institution. <br />
          <span className="text-[#D4AF37]">Transform Your Nation.</span>
        </h2>

        <p className="text-white/60 text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Whether you're a government seeking strategic advisory, a professional pursuing executive education, or an institution building partnerships—LeadBold has a pathway for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <button onClick={() => onViewChange('consulting')} className="px-12 py-5 bg-[#D4AF37] text-[#050505] font-bold uppercase tracking-widest text-xs transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
            Start a Conversation
          </button>
          <a href="mailto:info@leadboldconsulting.co.uk?subject=Prospectus%20Request" className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/10 hover:scale-105">
            Request Prospectus
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
