
import React from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, MessageSquare, 
  BarChart3, Target, Globe, Award, FileText, ChevronRight, X, Zap, Flame, ShieldAlert
} from 'lucide-react';
import { CONSULTING_SERVICES, COLORS } from '@/constants';

interface ConsultingLandingProps {
  onBack: () => void;
}

const ConsultingLanding: React.FC<ConsultingLandingProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#050505] font-sans overflow-x-hidden">
      
      {/* 1. INSTITUTIONAL HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="/company.jpg" className="w-full h-full object-cover" alt="LeadBold Consulting Office" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0A1628]/90 to-transparent" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-[0.08]" />

        <div className="relative z-10 max-w-6xl space-y-12 animate-fade-in-up">
          <button onClick={onBack} className="flex items-center gap-2 text-[#C9A962] text-[10px] uppercase tracking-[0.5em] font-black mx-auto mb-8 hover:scale-105 transition-all">
             <X className="w-4 h-4" /> Exit Consulting
          </button>
          
          <div className="space-y-6">
            <p className="text-[#C9A962] uppercase tracking-[0.6em] text-xs font-black">LEADBOLD STRATEGIC ADVISORY</p>
            <h1 className="text-6xl md:text-[5.5rem] text-white serif font-bold leading-[1.1] tracking-tight">Integrated Human Capacity <br /> <span className="text-[#C9A962]">Strategic Consultancy</span></h1>
            <p className="text-white/70 text-xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed italic serif">"End-to-end solutions that address leadership, governance, performance, and institutional effectiveness."</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <button className="px-14 py-6 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:brightness-110 transition-all scale-110">Request Consultation</button>
            <button className="px-14 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">View Sectors</button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID (High Contrast) */}
      <section className="py-40 bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-32 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-16">
            <div className="space-y-6">
              <h2 className="text-6xl serif text-white font-bold leading-tight">Sector Specializations</h2>
              <div className="w-24 h-1 bg-[#C9A962]" />
            </div>
            <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-black max-w-xs text-right mt-8 md:mt-0">Outcome-based advisory for complex continental sectors.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {CONSULTING_SERVICES.map((service) => (
               <div key={service.id} className="group bg-[#050505] p-12 border border-white/5 brochure-shadow hover:border-[#C9A962]/50 transition-all flex flex-col justify-between h-[520px]">
                  <div className="space-y-10">
                     <div className="text-[#C9A962] p-4 bg-white/5 w-fit rounded brochure-shadow group-hover:scale-110 transition-transform">
                        {service.icon}
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-3xl serif text-white font-bold group-hover:text-[#C9A962] transition-colors leading-tight uppercase tracking-tighter">{service.title}</h3>
                        <p className="text-sm text-white/50 leading-relaxed font-light">{service.description}</p>
                     </div>
                     <ul className="space-y-4 pt-6 border-t border-white/5">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-all">
                             <CheckCircle2 className="w-4 h-4 text-[#C9A962]" /> {feat}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <button className="w-full py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#C9A962] hover:text-[#050505] transition-all">Request Portfolio</button>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. ADVISORY PHILOSOPHY (Inverse Stone) */}
      <section className="py-40 bg-[#FAFAF9]">
         <div className="max-w-4xl mx-auto px-6 space-y-24">
            <div className="text-center space-y-10">
               <div className="flex items-center justify-center gap-4 text-[#C9A962]">
                  <div className="h-[1px] w-12 bg-current opacity-30" />
                  <span className="text-[11px] font-black uppercase tracking-[0.5em]">The Strategic Edge</span>
                  <div className="h-[1px] w-12 bg-current opacity-30" />
               </div>
               <h2 className="text-5xl lg:text-7xl serif text-[#050505] leading-tight font-bold underline underline-offset-8 decoration-[#C9A962]/30">Advising Institutions, Not Just Individuals.</h2>
               <p className="text-2xl serif text-slate-900 font-light leading-relaxed italic border-l-4 border-[#C9A962] pl-12 text-left">
                  "Our interventions build strategic thinking, ethical leadership, and performance competencies to strengthen individuals, institutions, and systems for superior performance."
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 border-t border-[#050505]/10 pt-20">
               {[
                 { title: 'Public Sector Advisory', desc: 'Enhancing transparency, accountability, and service delivery in federal parastatals.' },
                 { title: 'Global Benchmarking', desc: 'Aligning African institutions with international subiect-matter excellence standards.' },
                 { title: 'Bespoke Solutions', desc: 'Customized curriculum design and leadership audits tailored to organizational needs.' },
                 { title: 'Sector Focused', desc: 'Deep advisory in Oil & Gas, Energy, and high-impact policy sectors.' }
               ].map((item, i) => (
                 <div key={i} className="space-y-4">
                    <h4 className="text-xl serif font-bold text-[#050505] uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. FINAL CONVERSION */}
      <section className="py-48 bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
           <div className="w-[1000px] h-[1000px] border-[0.5px] border-[#C9A962] rounded-full animate-pulse" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 text-center space-y-12 relative z-10">
          <p className="text-[#C9A962] uppercase tracking-[0.5em] text-[10px] font-bold">EXCELLENCE IS OUR CULTURE</p>
          <h2 className="text-6xl md:text-9xl serif leading-[1.0] font-bold">Forge Your <span className="text-[#C9A962]">Legacy.</span></h2>
          <p className="text-white/60 text-xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed serif italic">"We consistently exceed expectations and uphold the highest professional standards to remain your trusted partner of choice."</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-16 border-t border-white/5 max-w-4xl mx-auto">
            <button className="px-16 py-7 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-sm brochure-shadow hover:scale-110 transition-all">Schedule Discovery Call</button>
            <button className="px-16 py-7 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">Request Sector Brief</button>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default ConsultingLanding;
