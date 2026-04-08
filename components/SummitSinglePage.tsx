
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Calendar, MapPin, Users, Globe, Download, 
  ChevronDown, CheckCircle2, Shield, Zap, Info, Clock, X,
  Star, Share2, Mail, ExternalLink, Award, Presentation, Target, UserCheck, 
  ShieldAlert, BookOpen, Gift, Video, Wallet, ChevronRight
} from 'lucide-react';
import { Summit, Personnel } from '../types';
import { COLORS } from '@/constants';

interface SummitSinglePageProps {
  summit: Summit;
  personnel: Personnel[];
  onBack: () => void;
}

const SummitSinglePage: React.FC<SummitSinglePageProps> = ({ summit, personnel, onBack }) => {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1');
  const [timeLeft, setTimeLeft] = useState({ days: 15, hrs: 12, min: 45, sec: 10 });
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setIsStickyVisible(heroRef.current.getBoundingClientRect().bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.sec > 0) return { ...prev, sec: prev.sec - 1 };
        return { ...prev, sec: 59, min: prev.min - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans overflow-x-hidden">
      {/* 1. STICKY ACTION BAR */}
      <div className={`fixed top-20 left-0 w-full bg-white shadow-2xl z-[60] h-20 transition-all duration-500 transform ${isStickyVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#0A1628] flex items-center justify-center text-[#C9A962]"><Presentation className="w-5 h-5" /></div>
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-[#050505]">{summit.shortName} 2026</h4>
                <p className="text-[9px] uppercase font-black text-slate-400">{summit.location} • {summit.date}</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className="hidden lg:flex gap-4 text-[10px] font-black uppercase tracking-widest text-[#C9A962]">
                <span>{timeLeft.days}D</span><span>{timeLeft.hrs}H</span><span>{timeLeft.min}M</span>
              </div>
              <button className="px-10 py-3 bg-[#0A1628] text-[#C9A962] text-[10px] font-black uppercase tracking-widest brochure-shadow hover:bg-[#C9A962] hover:text-[#050505] transition-all">Secure Credentials</button>
           </div>
        </div>
      </div>

      {/* 2. INSTITUTIONAL HERO */}
      <header ref={heroRef} className="bg-[#050505] pt-48 pb-40 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 noise-bg opacity-[0.1]" />
        <div className="absolute inset-0 z-0">
           <img src={summit.image} className="w-full h-full object-cover grayscale opacity-30" alt="Summit Venue" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0A1628]/80 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.4em] font-black mb-16 hover:text-[#C9A962] transition-all group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Summits Calendar
          </button>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div className="space-y-10 animate-fade-in-up">
               <div className="flex items-center gap-4">
                  <div className="bg-[#C9A962] text-[#050505] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] brochure-shadow">
                    🇬🇭 {summit.location.toUpperCase()}
                  </div>
                 <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase font-black tracking-widest">
                    <Calendar className="w-4 h-4 text-[#C9A962]" /> {summit.date.toUpperCase()}
                 </div>
              </div>

              <h1 className="text-6xl md:text-[5.5rem] text-white serif font-bold leading-none">
                 {summit.shortName} <span className="text-[#C9A962]">2026</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-white text-3xl font-bold serif leading-tight">
                   {summit.title}
                </p>
                <p className="text-[#C9A962] text-2xl font-light italic serif leading-relaxed max-w-2xl">
                   "{summit.theme}"
                </p>
              </div>

              <div className="flex flex-wrap gap-12 pt-12 border-t border-white/10">
                 <div className="space-y-1">
                    <div className="text-[#C9A962] uppercase tracking-widest text-[9px] font-black">Tuition / Registration</div>
                    <div className="text-white font-bold text-2xl">{summit.price}</div>
                 </div>
                 <div className="space-y-1">
                    <div className="text-[#C9A962] uppercase tracking-widest text-[9px] font-black">Delegation Capacity</div>
                    <div className="text-white font-bold text-2xl">{summit.capacity}</div>
                 </div>
              </div>
            </div>

            <div className="bg-[#C9A962] p-12 brochure-shadow space-y-8 animate-fade-in-up [animation-delay:200ms]">
               <div className="flex items-center gap-3 text-[#050505] text-[10px] font-black uppercase tracking-widest">
                  <Clock className="w-5 h-5" /> Registration Closes In
               </div>
               <div className="grid grid-cols-4 gap-6 text-center">
                  {Object.entries(timeLeft).map(([unit, val]) => (
                    <div key={unit}>
                       <div className="text-5xl font-black text-[#050505] serif">{val}</div>
                       <div className="text-[8px] uppercase font-black text-[#050505]/60">{unit}</div>
                    </div>
                  ))}
               </div>
               <div className="bg-[#050505] text-white p-6 brochure-shadow">
                  <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest mb-4 text-[#C9A962]">
                     <ShieldAlert className="w-4 h-4" /> 47 Seats Remaining
                  </div>
                  <button className="w-full py-4 bg-[#C9A962] text-[#050505] font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all">Secure Your Place →</button>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MAIN SUMMIT ARCHITECTURE (Light Stone / High Contrast) */}
      <div className="max-w-[1400px] mx-auto px-6 py-40 grid lg:grid-cols-12 gap-32">
        
        {/* Left Column: Vision & Agenda */}
        <div className="lg:col-span-8 space-y-40">
          
          {/* Overview */}
          <section className="space-y-12">
             <div className="flex items-center gap-4 text-[#C9A962] text-[11px] font-black uppercase tracking-[0.5em]">
                <Shield className="w-5 h-5" /> Institutional Deliverables
             </div>
             <div className="space-y-12">
                <h2 className="text-5xl serif text-[#050505] leading-tight max-w-2xl font-bold">Why {summit.shortName} Matters for the Continental Agenda</h2>
                <p className="text-2xl serif text-slate-900 font-light leading-relaxed italic border-l-4 border-[#C9A962] pl-10">
                   {summit.description}
                </p>
                <div className="grid md:grid-cols-3 gap-10 pt-12">
                  {[
                    { icon: <Shield />, title: 'ETHICAL GOVERNANCE', desc: 'Build integrity into public institutions.' },
                    { icon: <Users />, title: 'STAKEHOLDER SYNERGY', desc: 'Navigate complex political environments.' },
                    { icon: <Zap />, title: 'DIGITAL REFORM', desc: 'Lead technology-driven change.' }
                  ].map((focus, i) => (
                    <div key={i} className="space-y-4">
                       <div className="p-4 bg-[#0A1628] w-fit text-[#C9A962] brochure-shadow">{focus.icon}</div>
                       <h4 className="text-sm font-black uppercase tracking-widest text-[#050505]">{focus.title}</h4>
                       <p className="text-sm text-slate-600 leading-relaxed font-medium">{focus.desc}</p>
                    </div>
                  ))}
                </div>
             </div>
          </section>

          {/* Agenda Architecture */}
          <section className="space-y-16">
             <div className="flex items-center justify-between border-b-2 border-[#050505]/10 pb-10">
                <div className="flex items-center gap-4 text-[#C9A962] text-[11px] font-black uppercase tracking-[0.5em]">
                   <Clock className="w-5 h-5" /> Summit Programme
                </div>
                <div className="flex gap-4">
                   {(['day1', 'day2'] as const).map(day => (
                     <button 
                        key={day} 
                        onClick={() => setActiveDay(day)}
                        className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest border-2 transition-all ${activeDay === day ? 'bg-[#050505] text-[#C9A962] border-[#050505] brochure-shadow scale-105' : 'bg-white text-slate-400 border-slate-200 hover:border-[#050505]'}`}
                     >
                        {day === 'day1' ? 'Wednesday, Jan 22' : 'Thursday, Jan 23'}
                     </button>
                   ))}
                </div>
             </div>

             <div className="space-y-8">
                {summit.agenda[activeDay].map((sess, i) => {
                  const sPerson = sess.personnelId ? personnel.find(p => p.id === sess.personnelId) : null;
                  return (
                    <div key={i} className="group bg-white border border-[#E5E5E3] p-10 brochure-shadow hover:border-[#050505] transition-all flex flex-col md:flex-row gap-12">
                       <div className="md:w-32 flex-none"><span className="text-2xl font-black text-[#050505] serif border-b-2 border-[#C9A962]">{sess.time}</span></div>
                       <div className="flex-1 space-y-6">
                          <div className="flex flex-col sm:flex-row justify-between gap-6">
                             <div className="space-y-2">
                                <h4 className="text-3xl serif font-bold text-[#050505] leading-tight group-hover:text-[#C9A962] transition-colors">{sess.title}</h4>
                                <p className="text-base text-slate-900 font-light leading-relaxed max-w-xl italic serif">"{sess.description}"</p>
                             </div>
                             {(sPerson || sess.speaker) && (
                               <div className="sm:text-right flex-none">
                                  <div className="text-[10px] font-black uppercase text-[#C9A962] tracking-[0.3em] mb-3">Faculty / Chair</div>
                                  <div className="flex items-center sm:justify-end gap-3">
                                     <div className="text-right">
                                        <div className="text-sm font-bold text-[#050505]">{sPerson ? sPerson.name : sess.speaker}</div>
                                        {sPerson && <div className="text-[9px] uppercase font-black text-slate-500">{sPerson.title}</div>}
                                     </div>
                                     {sPerson && <img src={sPerson.image} className="w-12 h-12 rounded-full border-2 border-[#0A1628]" />}
                                  </div>
                               </div>
                             )}
                          </div>
                       </div>
                    </div>
                  );
                })}
             </div>
          </section>

          {/* Outcomes */}
          <section className="space-y-16">
             <div className="flex items-center gap-4 text-[#C9A962] text-[11px] font-black uppercase tracking-[0.5em]">
                <Target className="w-5 h-5" /> Institutional Outcomes
             </div>
             <div className="grid md:grid-cols-2 gap-8">
                {summit.outcomes.map((out, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-[#050505] text-white brochure-shadow group hover:bg-[#C9A962] hover:text-[#050505] transition-all">
                     <CheckCircle2 className="w-6 h-6 text-[#C9A962] group-hover:text-[#050505] flex-none" />
                     <span className="text-xl serif font-medium">{out}</span>
                  </div>
                ))}
             </div>
           </section>

          {/* Summit Objectives - for Oil & Gas Summit */}
          {summit.objectives && summit.objectives.length > 0 && (
            <section className="space-y-16">
              <div className="flex items-center gap-4 text-[#C9A962] text-[11px] font-black uppercase tracking-[0.5em]">
                <Target className="w-5 h-5" /> Summit Objectives
              </div>
              <div className="bg-[#0a2a66] p-12 text-white rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {summit.objectives.map((obj, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-[#c8102e] flex-none mt-1" />
                      <span className="text-lg serif">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Why Attend - for Oil & Gas Summit */}
          {summit.whyAttend && summit.whyAttend.length > 0 && (
            <section className="space-y-16">
              <div className="flex items-center gap-4 text-[#C9A962] text-[11px] font-black uppercase tracking-[0.5em]">
                <Award className="w-5 h-5" /> Why You Must Attend
              </div>
              <div className="bg-[#c8102e] p-12 text-white rounded-xl">
                <div className="grid md:grid-cols-2 gap-6">
                  {summit.whyAttend.map((reason, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-white flex-none mt-1" />
                      <span className="text-lg serif">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Enrollment & Tiers (Deep Navy) */}
        <div className="lg:col-span-4 space-y-16">
           
           <div className="bg-[#0A1628] text-white brochure-shadow overflow-hidden sticky top-32">
              <div className="p-10 border-b border-white/10">
                 <h3 className="text-3xl serif font-bold text-[#C9A962]">Secure Delegate Seat</h3>
                 <p className="text-white/60 text-[10px] uppercase tracking-widest font-black mt-2">Limited Attendance • Board-Level Convening</p>
              </div>
              
              <div className="space-y-1">
                 <div className="p-10 hover:bg-white/5 transition-all border-b border-white/5">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-black uppercase tracking-widest">EARLY BIRD</span>
                       <span className="text-3xl font-bold serif text-[#C9A962]">₦150,000</span>
                    </div>
                    <p className="text-[10px] text-[#C9A962]/60 uppercase font-bold mb-4">Ends January 7, 2026</p>
                    <button className="w-full py-4 bg-[#C9A962] text-[#050505] text-[10px] font-black uppercase tracking-widest hover:brightness-110">Register Early →</button>
                 </div>
                 <div className="p-10 bg-white/5 border-b border-white/5">
                    <div className="flex justify-between items-start mb-2">
                       <span className="text-xs font-black uppercase tracking-widest">STANDARD</span>
                       <span className="text-3xl font-bold serif">₦180,000</span>
                    </div>
                    <p className="text-[10px] text-white/40 uppercase font-bold mb-4">After January 7, 2026</p>
                    <button className="w-full py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10">Register Standard</button>
                 </div>
              </div>

              <div className="p-10 space-y-8 bg-[#050505]">
                 <div className="text-[#C9A962] text-[10px] uppercase font-black tracking-[0.4em]">Target Delegation</div>
                 <div className="space-y-4">
                    {summit.whoShouldAttend.map((aud, i) => (
                       <div key={i} className="flex gap-4 items-center">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A962] flex-none" />
                          <span className="text-sm font-bold text-white/90">{aud}</span>
                       </div>
                    ))}
                 </div>
                 <div className="pt-8 border-t border-white/10">
                    <button className="w-full py-4 border border-white/20 text-white/60 text-[10px] font-black uppercase tracking-widest hover:text-white transition-all flex items-center justify-center gap-3">
                       <Download className="w-4 h-4 text-[#C9A962]" /> Summit Brochure PDF
                    </button>
                 </div>
              </div>
           </div>

        </div>

      </div>

      {/* 4. KEYNOTE FACULTY (Inverse Dark) */}
      <section className="py-40 bg-[#050505] border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center space-y-4">
               <div className="text-[#C9A962] text-[11px] font-black uppercase tracking-[0.6em]">Expert Leadership</div>
               <h2 className="text-6xl serif text-white">Keynote Faculty & Speakers</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
               {summit.speakerIds.map((sid) => {
                  const s = personnel.find(p => p.id === sid);
                  if (!s) return null;
                  return (
                     <div key={sid} className="bg-[#0A1628] p-12 border border-white/5 brochure-shadow text-center space-y-8 group hover:border-[#C9A962] transition-all">
                        <div className="relative w-32 h-32 mx-auto">
                           <img src={s.image} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-4 border-[#C9A962]/20" alt={s.name} />
                           <div className="absolute -bottom-2 -right-2 p-3 bg-[#C9A962] rounded-full text-[#050505] brochure-shadow"><Award className="w-5 h-5" /></div>
                        </div>
                        <div className="space-y-2">
                           <h4 className="text-2xl serif font-bold text-white leading-tight">{s.name}</h4>
                           <p className="text-[#C9A962] text-[10px] uppercase font-black tracking-widest">{s.title}</p>
                        </div>
                        <p className="text-xs text-white/40 font-light italic serif leading-relaxed line-clamp-3">"{s.bio}"</p>
                        <button className="text-[10px] font-black uppercase tracking-widest text-[#C9A962] border-b-2 border-white/10 pb-1 hover:border-[#C9A962] transition-all">View Dossier</button>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default SummitSinglePage;
