
import React, { useState } from 'react';
import { 
  ArrowRight, Shield, Target, Award, Users, Globe, BookOpen, 
  Zap, Quote, CheckCircle2, Star, Briefcase, TrendingUp, 
  Building2, Flame, MapPin, Mail, Phone, Download, FileText,
  Search, ExternalLink, ChevronRight, X, Heart, Archive, Scale, Lightbulb, ShieldCheck, UserCheck, Check, Sparkles, Network, GraduationCap
} from 'lucide-react';
import { Personnel } from '../types';
import { CORE_VALUES, CLIENT_LIST } from '@/constants';

type AboutSubView = 'about-main' | 'about-story' | 'about-vision' | 'about-philosophy' | 'about-leadership' | 'about-partnerships' | 'about-careers' | 'about-press' | 'about-reports' | 'about-clients';

interface AboutPortalProps {
  currentSubView: AboutSubView;
  personnel: Personnel[];
  onViewChange: (view: string) => void;
}

const AboutPortal: React.FC<AboutPortalProps> = ({ currentSubView, personnel, onViewChange }) => {
  
  const renderStory = () => (
    <div className="animate-fade-in space-y-32">
      <section className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl lg:text-7xl serif font-bold text-[#050505]">From a Conversation to a Continental Mandate.</h2>
        <p className="text-2xl text-slate-600 font-light leading-relaxed serif italic border-l-4 border-[#D4AF37] pl-10">
          "LeadBold was forged in 2018 as an answer to a single, haunting question: Why do Africa's most brilliant individuals struggle to build resilient institutions?"
        </p>
        <div className="space-y-8 text-lg text-slate-500 leading-relaxed font-light">
          <p>We saw ministers with visionary plans blocked by systemic bottlenecks. We saw CEOs of major parastatals lacking the strategic frameworks to manage legacy cultures. We saw a leadership gap that wasn't about talent—it was about institutional logic.</p>
          <div className="p-12 bg-[#0A1628] text-white brochure-shadow space-y-8">
             <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-widest">Our Promise</h3>
             <p className="text-2xl serif font-light leading-relaxed italic">"At LeadBold Consulting, we do not merely deliver programs — we shape leaders, transform institutions, and build enduring legacies of excellence."</p>
             <p className="text-sm text-white/40 uppercase tracking-[0.2em] font-bold">Consistently Exceeding Expectations Since 2018</p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-3 gap-12">
        {[
          { year: '2018', title: 'The Abuja Inception', desc: 'Launching with a focused mandate on federal parastatal reform and strategic governance.' },
          { year: '2021', title: 'Continental Expansion', desc: 'Expanding to 15 countries and launching flagship international summits in London and Paris.' },
          { year: '2026', title: 'Institutional Standard', desc: 'Recognized as the gold standard for executive development and policy transformation across Africa.' }
        ].map((milestone, i) => (
          <div key={i} className="p-12 bg-white border border-slate-100 brochure-shadow space-y-6">
            <div className="text-5xl font-black text-[#D4AF37]/20 serif italic">{milestone.year}</div>
            <h3 className="text-2xl serif font-bold">{milestone.title}</h3>
            <p className="text-sm text-slate-400 font-light leading-relaxed">{milestone.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );

  const renderVision = () => (
    <div className="animate-fade-in space-y-32">
      <section className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em]">The Strategic North Star</span>
            <h2 className="text-6xl serif font-bold text-[#050505]">Shaping Africa's <br /> Legacy.</h2>
          </div>
          <div className="space-y-12">
            <div className="p-10 bg-[#0A1628] text-white brochure-shadow space-y-6">
              <h3 className="text-xl font-bold text-[#D4AF37] uppercase tracking-widest">Our Vision</h3>
              <p className="text-2xl serif font-light italic opacity-80">"To be a globally respected leadership and human capacity development institution, shaping transformational leaders, strengthening institutions, and driving sustainable national progress."</p>
            </div>
            <div className="p-10 bg-white border border-slate-100 brochure-shadow space-y-6">
              <h3 className="text-xl font-bold text-[#050505] uppercase tracking-widest">Our Mission</h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed italic serif">"To design and deliver world-class leadership, governance, and performance solutions that empower individuals and institutions to operate at the highest levels of excellence, integrity, and impact."</p>
            </div>
          </div>
        </div>
        <div className="relative group">
           <img src="/company.jpg" className="w-full aspect-[4/5] object-cover grayscale brochure-shadow group-hover:grayscale-0 transition-all duration-1000" alt="Institutional logic" />
           <div className="absolute inset-0 bg-[#D4AF37]/10" />
        </div>
      </section>
    </div>
  );

  const renderPhilosophy = () => (
    <div className="animate-fade-in space-y-32">
      <section className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
           <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em]">Institutional Foundation</span>
           <h2 className="text-5xl lg:text-7xl serif font-bold text-[#050505]">Our Core Values</h2>
        </div>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto italic serif">
          "At LeadBold, excellence is not an aspiration; it is our operational culture. These ten pillars define every engagement, every program, and every institutional partnership."
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {CORE_VALUES.map((val, i) => (
          <div key={i} className="bg-white p-8 border border-slate-100 brochure-shadow hover:border-[#D4AF37] transition-all group h-[280px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="text-3xl font-black text-[#D4AF37]/20 serif italic">{val.id}</div>
              <h3 className="text-lg serif font-black uppercase tracking-tighter group-hover:text-[#D4AF37] transition-colors">{val.title}</h3>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light line-clamp-4">{val.desc}</p>
            </div>
            <div className="w-8 h-[1px] bg-slate-100 group-hover:w-full group-hover:bg-[#D4AF37] transition-all" />
          </div>
        ))}
      </div>
    </div>
  );

  const renderLeadership = () => (
    <div className="animate-fade-in space-y-32">
      <section className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-6xl serif font-bold text-[#050505]">Our Domestic & Global Team</h2>
        <p className="text-xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto">
          LeadBold Consulting is powered by a multi-disciplinary team of professionals drawn from diverse sectors including governance, energy, procurement, policy, and academia.
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
         <div className="p-12 bg-[#0A1628] text-white brochure-shadow space-y-6">
            <div className="flex items-center gap-4 text-[#D4AF37] uppercase tracking-widest text-xs font-black"><MapPin className="w-5 h-5" /> Domestic Core</div>
            <h3 className="text-3xl serif font-bold">Nigeria Based Expertise</h3>
            <p className="text-white/60 leading-relaxed font-light italic serif text-lg">
              "Based in Abuja, our domestic team consists of certiﬁed leadership experts and strategic consultants who bring deep understanding of local and regional institutional frameworks."
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               {['Abuja', 'Lagos', 'Kano', 'Port Harcourt'].map(loc => <span key={loc} className="px-4 py-1.5 border border-white/10 text-[10px] font-black uppercase tracking-widest">{loc} Hub</span>)}
            </div>
         </div>
         <div className="p-12 bg-white border border-slate-100 brochure-shadow space-y-6">
            <div className="flex items-center gap-4 text-[#D4AF37] uppercase tracking-widest text-xs font-black"><Globe className="w-5 h-5" /> Global Network</div>
            <h3 className="text-3xl serif font-bold text-[#050505]">International Faculty</h3>
            <p className="text-slate-500 leading-relaxed font-light italic serif text-lg">
              "Subject-matter experts, former public sector leaders, and academic partners from Europe and North America. This blend enables globally competitive solutions with strong local relevance."
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               {['London', 'Paris', 'New York', 'Accra', 'Geneva'].map(loc => <span key={loc} className="px-4 py-1.5 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">{loc} Faculty</span>)}
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {personnel.map(p => (
          <div key={p.id} className="bg-white border border-slate-100 p-10 brochure-shadow text-center space-y-6 group hover:border-[#D4AF37] transition-all">
             <div className="relative w-32 h-32 mx-auto">
                <img src={p.image} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-2 border-[#D4AF37]/10" alt={p.name} />
             </div>
             <div>
                <h3 className="text-xl serif font-bold text-[#050505]">{p.name}</h3>
                <p className="text-[#D4AF37] text-[9px] uppercase font-black tracking-widest mt-1">{p.title}</p>
             </div>
             <p className="text-[10px] text-slate-400 font-light leading-relaxed line-clamp-3 italic">"{p.bio}"</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderClients = () => (
    <div className="animate-fade-in space-y-32">
       <section className="text-center space-y-12">
          <div className="space-y-4">
             <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em]">The Institutional Record</span>
             <h2 className="text-6xl serif font-bold text-[#050505]">Trusted by the Best.</h2>
          </div>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-4xl mx-auto serif italic">
            "LeadBold Consulting is a trusted partner of choice for organisations that seek world-class performance across the public and private sectors."
          </p>
       </section>

       <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-10">
             <div className="p-10 bg-[#0A1628] text-white brochure-shadow sticky top-40 space-y-8">
                <div className="p-4 bg-white/5 w-fit rounded brochure-shadow"><Briefcase className="w-8 h-8 text-[#D4AF37]" /></div>
                <h3 className="text-3xl serif font-bold">Institutional Portfolio</h3>
                <p className="text-white/40 text-sm font-light leading-relaxed">We have delivered integrated human capacity development and strategic consultancy solutions to over 50 federal ministries, departments, and international agencies.</p>
                <button className="w-full py-4 bg-[#D4AF37] text-[#050505] font-black uppercase text-[10px] tracking-widest hover:brightness-110 transition-all">Request Partnership Proposal</button>
             </div>
          </div>
          <div className="lg:col-span-8">
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 border-l border-slate-100 pl-12">
                {CLIENT_LIST.map((client, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-slate-50 group hover:translate-x-2 transition-transform cursor-default">
                     <CheckCircle2 className="w-4 h-4 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#050505] transition-colors leading-relaxed">{client}</span>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </div>
  );

  /* Added missing render functions for About portal sub-views */
  const renderPartnerships = () => (
    <div className="animate-fade-in space-y-12 text-center py-20">
       <div className="p-16 bg-white border border-slate-100 brochure-shadow inline-block">
          <Network className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl serif font-bold text-[#050505] mb-4">Strategic Partnerships</h2>
          <p className="text-slate-500 max-w-lg mx-auto">We collaborate with global institutions to bridge the leadership gap. Information on our partnership models will be available shortly.</p>
       </div>
    </div>
  );

  const renderCareers = () => (
    <div className="animate-fade-in space-y-12 text-center py-20">
       <div className="p-16 bg-white border border-slate-100 brochure-shadow inline-block">
          <Briefcase className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl serif font-bold text-[#050505] mb-4">Join Our Faculty</h2>
          <p className="text-slate-500 max-w-lg mx-auto">We are always looking for subject-matter experts and seasoned practitioners to join our global team.</p>
       </div>
    </div>
  );

  const renderPress = () => (
    <div className="animate-fade-in space-y-12 text-center py-20">
       <div className="p-16 bg-white border border-slate-100 brochure-shadow inline-block">
          <FileText className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl serif font-bold text-[#050505] mb-4">Press Center</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Institutional announcements, media kits, and official statements from LeadBold Consulting.</p>
       </div>
    </div>
  );

  const renderReports = () => (
    <div className="animate-fade-in space-y-12 text-center py-20">
       <div className="p-16 bg-white border border-slate-100 brochure-shadow inline-block">
          <Archive className="w-16 h-16 text-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl serif font-bold text-[#050505] mb-4">Institutional Reports</h2>
          <p className="text-slate-500 max-w-lg mx-auto">Access our annual impact reports and strategic policy findings.</p>
       </div>
    </div>
  );

  const renderCurrentSubView = () => {
    switch (currentSubView) {
      case 'about-main': return renderVision();
      case 'about-story': return renderStory();
      case 'about-vision': return renderVision();
      case 'about-philosophy': return renderPhilosophy();
      case 'about-leadership': return renderLeadership();
      case 'about-clients': return renderClients();
      case 'about-partnerships': return renderPartnerships();
      case 'about-careers': return renderCareers();
      case 'about-press': return renderPress();
      case 'about-reports': return renderReports();
      default: return renderVision();
    }
  };

  const navItems = [
    { id: 'about-vision', label: 'Vision & Mission' },
    { id: 'about-story', label: 'Our Story' },
    { id: 'about-philosophy', label: 'Core Values' },
    { id: 'about-leadership', label: 'Our Team' },
    { id: 'about-clients', label: 'Our Clients' },
    { id: 'about-partnerships', label: 'Partnerships' },
    { id: 'about-careers', label: 'Careers' },
    { id: 'about-press', label: 'Press Center' },
    { id: 'about-reports', label: 'Reports' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] pt-20 flex flex-col">
      <div className="absolute inset-0 noise-bg opacity-[0.03] pointer-events-none" />
      
      <div className="border-b border-slate-200 bg-white sticky top-20 z-40 brochure-shadow">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar flex items-center h-20 gap-8">
           <button onClick={() => onViewChange('home')} className="flex-none p-4 text-slate-300 hover:text-[#050505] transition-colors">
             <X className="w-5 h-5" />
           </button>
           <div className="h-6 w-[1px] bg-slate-200" />
           {navItems.map(item => (
             <button 
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex-none text-[10px] font-black uppercase tracking-widest py-8 relative transition-all ${currentSubView === item.id ? 'text-[#050505]' : 'text-slate-400 hover:text-[#D4AF37]'}`}
             >
                {item.label}
                {currentSubView === item.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] animate-fade-in" />}
             </button>
           ))}
        </div>
      </div>

      <main className="flex-1 max-w-[1400px] mx-auto px-6 py-32 relative z-10 w-full">
         {renderCurrentSubView()}
      </main>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AboutPortal;
