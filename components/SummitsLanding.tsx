
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Calendar, MapPin, Users, Download, 
  ChevronRight, Play, Star, Globe, Shield, Zap, Info, Clock, X, Presentation,
  Handshake, Lightbulb, Target, Award, CheckCircle2, LayoutGrid
} from 'lucide-react';
import { Summit } from '../types';
import { COLORS } from '@/constants';

interface SummitsLandingProps {
  onBack: () => void;
  onViewSummit: (summit: Summit) => void;
  summits: Summit[];
}

const SummitsLanding: React.FC<SummitsLandingProps> = ({ onBack, onViewSummit, summits }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 18, hrs: 14, min: 23, sec: 45 });
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        if (prev.min > 0) return { ...prev, min: prev.min - 1, sec: 59 };
        if (prev.hrs > 0) return { ...prev, hrs: prev.hrs - 1, min: 59, sec: 59 };
        return { ...prev, days: prev.days - 1, hrs: 23, min: 59, sec: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden font-sans">
      {/* 1. POWER ENTRANCE HERO */}
      <section className="relative h-screen w-full bg-[#0A1628] flex items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1540575861501-7c90b707a27d?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Davos Background" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0A1628]/80 to-transparent" />
        </div>
        <div className="absolute inset-0 noise-bg opacity-[0.08]" />

        <div className="relative z-10 max-w-6xl space-y-12">
          <button onClick={onBack} className="flex items-center gap-2 text-[#C9A962] text-[10px] uppercase tracking-[0.5em] font-black mx-auto mb-8 hover:scale-105 transition-all">
             <X className="w-4 h-4" /> Exit Summits
          </button>
          
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-[#C9A962] uppercase tracking-[0.6em] text-xs font-black">LEADBOLD GLOBAL LEADERSHIP SUMMITS 2026</p>
            <h1 className="text-6xl md:text-[5.5rem] text-white serif font-bold leading-[1.1] tracking-tight">Where Africa's Leaders <br /> <span className="text-[#C9A962]">Shape the Future</span></h1>
            <p className="text-white/80 text-xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed italic serif">"Eight high-level convenings across Africa and Europe bringing together ministers, executives, and change-makers."</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            {[
              { label: 'SUMMITS', val: '8' },
              { label: 'LEADERS', val: '1,500+' },
              { label: 'COUNTRIES', val: '12' },
              { label: 'CONTINENTS', val: '2' },
            ].map(stat => (
              <div key={stat.label} className="group">
                <div className="text-5xl serif text-white group-hover:text-[#C9A962] transition-colors">{stat.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#C9A962] font-black opacity-80 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
            <button className="px-14 py-6 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:brightness-110 transition-all scale-110">View 2026 Calendar</button>
            <button className="px-14 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center gap-2">
              <Download className="w-4 h-4" /> Download Overview PDF
            </button>
          </div>
        </div>

        {/* Countdown Banner */}
        {showCountdown && (
          <div className="absolute top-24 left-0 w-full bg-[#C9A962] text-[#050505] py-4 z-20 animate-fade-in brochure-shadow">
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <span className="bg-[#050505] text-white px-3 py-1 rounded text-[10px] font-black animate-pulse">URGENT</span>
                 <p className="text-[11px] font-black uppercase tracking-widest hidden md:block">Next Summit: ANPELS Lagos • Jan 22-23, 2026</p>
              </div>
              <div className="flex items-center gap-8">
                 <div className="flex gap-4 font-black text-sm">
                   <span>{timeLeft.days}D</span> <span>{timeLeft.hrs}H</span> <span>{timeLeft.min}M</span>
                 </div>
                 <button className="hidden sm:block text-[11px] font-black uppercase underline tracking-widest hover:text-[#0A1628] transition-colors">Register Now →</button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2. TIMELINE VISUALIZATION (Now High-Contrast Dark) */}
      <section className="py-40 bg-[#050505] relative overflow-hidden border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="mb-24 text-center space-y-4">
             <h2 className="text-6xl serif text-white">The 2026 Leadership Calendar</h2>
             <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">A Year of High-Level Convening</p>
          </div>

          <div className="relative pt-32 pb-20">
             {/* Timeline Axis */}
             <div className="absolute top-32 left-0 w-full h-[2px] bg-white/10" />
             <div className="absolute top-32 left-0 w-48 h-[2px] bg-[#C9A962]" /> 
             
             <div className="flex gap-16 overflow-x-auto no-scrollbar pb-12 snap-x snap-mandatory px-10">
                {summits.map((summit, idx) => (
                  <div 
                    key={summit.id} 
                    onClick={() => onViewSummit(summit)}
                    className="flex-none w-[380px] group cursor-pointer snap-start relative"
                  >
                    <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 w-5 h-5 bg-[#C9A962] rounded-full border-4 border-[#050505] z-20 group-hover:scale-150 transition-all" />
                    
                    <div className="mt-12 bg-[#0A1628] border border-white/10 p-10 brochure-shadow group-hover:border-[#C9A962]/50 transition-all relative">
                       <div className={`absolute -top-3 right-6 px-3 py-1 text-[9px] font-black uppercase tracking-widest ${summit.status === 'Open' ? 'bg-[#C9A962] text-[#050505]' : 'bg-white/5 text-white/40'}`}>
                          {summit.status === 'Open' ? 'Registration Open' : 'Soon'}
                       </div>
                       <div className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.3em] mb-4">{summit.date}</div>
                       <h3 className="text-3xl serif text-white leading-tight mb-2 group-hover:text-[#C9A962] transition-colors">{summit.shortName}</h3>
                       <p className="text-[11px] uppercase font-bold text-white/40 tracking-widest border-b border-white/5 pb-4 mb-6">{summit.location}</p>
                       <div className="flex items-center justify-between">
                          <div className="flex -space-x-3">
                            {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0A1628] overflow-hidden"><img src={`https://i.pravatar.cc/100?u=${idx+i}`} alt="Speaker" className="grayscale" /></div>)}
                            <div className="w-10 h-10 rounded-full bg-[#C9A962] border-2 border-[#0A1628] flex items-center justify-center text-[10px] font-bold text-[#050505]">+12</div>
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-[#C9A962] transition-all">Details →</span>
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP GRID (High-Contrast Navy) */}
      <section className="py-40 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-12">
             <div className="space-y-4">
                <h2 className="text-6xl serif text-white">Eight Flagship Convenings</h2>
                <div className="w-32 h-1 bg-[#C9A962]" />
             </div>
             <p className="text-[#C9A962] uppercase tracking-widest text-[10px] font-black max-w-[200px] text-right">EXCLUSIVITY THROUGH STRATEGIC ASSOCIATION</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {summits.map(summit => (
               <div key={summit.id} className="group bg-[#050505] border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#C9A962] transition-all hover:-translate-y-2 brochure-shadow">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img src={summit.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={summit.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#C9A962] text-[9px] font-black uppercase tracking-widest text-[#050505]">
                      {summit.location}
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="p-4 bg-white/5 w-fit rounded brochure-shadow group-hover:bg-[#C9A962] transition-colors">
                        <Presentation className="w-8 h-8 text-[#C9A962] group-hover:text-[#050505]" />
                      </div>
                      <h3 className="text-2xl serif text-white leading-tight group-hover:text-[#C9A962] transition-colors">{summit.shortName} <br /> <span className="text-sm font-bold uppercase tracking-widest font-sans text-white/40 group-hover:text-white/60">{summit.title.split(' ').slice(1, 4).join(' ')}</span></h3>
                      <p className="text-sm text-white/60 line-clamp-3 italic serif leading-relaxed border-l-2 border-[#C9A962]/40 pl-4">"{summit.theme}"</p>
                      
                      <div className="space-y-3 pt-6 border-t border-white/5">
                         <div className="flex items-center gap-3 text-[10px] font-black text-white/40"><Calendar className="w-4 h-4 text-[#C9A962]" /> {summit.date}</div>
                         <div className="flex items-center gap-3 text-[10px] font-black text-white/40"><Users className="w-4 h-4 text-[#C9A962]" /> {summit.capacity}</div>
                      </div>
                    </div>
                    <div className="pt-10">
                       <button onClick={() => onViewSummit(summit)} className="w-full py-4 bg-white/5 text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#C9A962] hover:text-[#050505] transition-all border border-white/10 hover:border-[#C9A962]">Register Interest</button>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. VALUE PROP SPLIT */}
      <section className="py-40 bg-[#050505] text-white relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 noise-bg opacity-[0.1]" />
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center relative z-10">
           <div className="space-y-12">
              <div className="space-y-6">
                <p className="text-[#C9A962] uppercase tracking-[0.5em] text-xs font-black">THE INSTITUTIONAL CHALLENGE</p>
                <h2 className="text-6xl md:text-8xl serif leading-tight">Leadership at a <br /> <span className="text-[#C9A962]">Crossroads</span></h2>
              </div>
              <p className="text-white/70 text-xl font-light leading-relaxed serif italic">
                 Africa stands at a pivotal moment. The question isn't whether change is coming. The question is: Will you shape it or react to it?
              </p>
              <div className="p-10 bg-[#C9A962] text-[#050505] brochure-shadow max-w-lg">
                 <div className="text-6xl font-black mb-4 serif">70%</div>
                 <p className="text-xs uppercase tracking-[0.2em] font-black leading-relaxed">of policy initiatives fail due to poor stakeholder engagement — World Economic Forum, 2025</p>
              </div>
           </div>

           <div className="space-y-12">
              <h3 className="text-4xl serif text-white">Why LeadBold Summits Matter</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { icon: <Handshake />, label: 'HIGH-LEVEL NETWORK', desc: 'Connect with 300+ ministers, CEOs, and directors.' },
                   { icon: <Lightbulb />, label: 'CUTTING-EDGE INSIGHTS', desc: 'Access frameworks and strategies from leading thinkers.' },
                   { icon: <Globe />, label: 'AFRICA-EUROPE BRIDGE', desc: 'Build partnerships across continents.' },
                   { icon: <Shield />, label: 'POLICY INFLUENCE', desc: 'Shape continental policy dialogues.' },
                   { icon: <Target />, label: 'SECTOR-SPECIFIC', desc: 'Focus on your industry challenges.' },
                   { icon: <Award />, label: 'EXCLUSIVE ACCESS', desc: 'Invitation-only networking events.' },
                 ].map(benefit => (
                   <div key={benefit.label} className="p-8 bg-white/5 border border-white/10 hover:border-[#C9A962] hover:bg-white/10 transition-all group">
                      <div className="text-[#C9A962] mb-6 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                      <h4 className="text-sm font-black uppercase tracking-widest mb-3 text-white">{benefit.label}</h4>
                      <p className="text-white/40 text-xs font-light leading-relaxed">{benefit.desc}</p>
                   </div>
                 ))}
              </div>
              <button className="text-xs uppercase tracking-[0.3em] font-black text-[#C9A962] border-b-2 border-[#C9A962]/30 pb-2 hover:border-[#C9A962] transition-all">SEE WHAT PAST ATTENDEES SAY →</button>
           </div>
        </div>
      </section>

      {/* 5. IMPACT SHOWCASE */}
      <section className="py-40 bg-[#0A1628]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-32 space-y-4">
               <h2 className="text-6xl serif text-white">2025 Impact Highlights</h2>
               <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Proven Institutional Scale</p>
            </div>

            <div className="grid md:grid-cols-4 gap-12 text-center mb-32">
               {[
                 { val: '1,487', label: 'ATTENDEES' },
                 { val: '52', label: 'SPEAKERS' },
                 { val: '7', label: 'SUMMITS' },
                 { val: '15', label: 'COUNTRIES' },
               ].map(stat => (
                 <div key={stat.label} className="space-y-2">
                    <div className="text-7xl font-bold serif text-[#C9A962]">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest font-black text-white/40">{stat.label}</div>
                 </div>
               ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 aspect-video border border-white/5 p-4 bg-[#050505]/40 brochure-shadow">
               <div className="col-span-2 bg-black relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60" alt="Summit Moments" />
                  <div className="absolute inset-0 bg-[#0A1628]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="w-20 h-20 bg-[#C9A962] rounded-full flex items-center justify-center text-[#050505] brochure-shadow scale-110 hover:scale-125 transition-transform"><Play fill="currentColor" /></button>
                  </div>
               </div>
               <div className="grid grid-rows-2 gap-8">
                  <div className="bg-black overflow-hidden"><img src="https://images.unsplash.com/photo-1540575861501-7c90b707a27d" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100" alt="Summit Moments" /></div>
                  <div className="bg-black overflow-hidden"><img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100" alt="Summit Moments" /></div>
               </div>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 bg-[#050505] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-[0.1]" />
        <div className="max-w-6xl mx-auto px-6 space-y-12 relative z-10">
          <p className="text-[#C9A962] uppercase tracking-[0.6em] text-xs font-black">DON'T MISS OUT</p>
          <h2 className="text-6xl md:text-9xl serif leading-[1.1]">The Next Generation of <br /> Leadership <span className="text-[#C9A962]">Starts Here</span></h2>
          <p className="text-white/60 text-xl lg:text-2xl font-light max-w-4xl mx-auto leading-relaxed">Join 1,500+ ministers, executives, and change-makers shaping Africa's future at our 2026 summits.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-16 border-t border-white/5 max-w-3xl mx-auto">
            <button className="px-16 py-7 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-sm brochure-shadow hover:scale-105 transition-all">Register for Next Summit</button>
            <button className="px-16 py-7 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">Download 2026 Calendar</button>
          </div>

          <div className="pt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
             {['✓ Secure registration', '✓ Satisfaction guaranteed', '✓ Group discounts', '✓ Payment plans'].map(indicator => (
               <span key={indicator} className="text-[11px] font-black uppercase tracking-widest">{indicator}</span>
             ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default SummitsLanding;
