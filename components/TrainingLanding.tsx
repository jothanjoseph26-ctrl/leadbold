
import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, Filter, ArrowRight, Clock, BookOpen, GraduationCap, X, 
  ChevronDown, Globe, Layout, Briefcase, Download, HelpCircle, Flame, CheckCircle2,
  Heart, ExternalLink, Columns, RotateCcw, Check, Scale, Shield, Target, Award,
  Users, Zap, Play, BarChart3, TrendingUp, Building2, Quote, UserCheck, MessageSquare,
  FileText, Lightbulb, Star, Share2
} from 'lucide-react';
import { COLORS, DetailedCourse } from '@/constants';
import { Personnel } from '../types';

interface TrainingLandingProps {
  courses: DetailedCourse[];
  personnel: Personnel[];
  onBack: () => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onViewSingle: (course: DetailedCourse) => void;
  onEnroll: (course: DetailedCourse) => void;
}

const TrainingLanding: React.FC<TrainingLandingProps> = ({ 
  courses, 
  personnel,
  onBack, 
  bookmarks, 
  onToggleBookmark, 
  onViewSingle, 
  onEnroll 
}) => {
  const [activeTab, setActiveTab] = useState<'live' | 'case' | 'peer' | 'coaching' | 'action'>('live');
  const [activeStep, setActiveStep] = useState(1);

  // Filter 4 Flagship courses for the flagship section
  const flagships = useMemo(() => {
    return courses.filter(c => 
      ['Leadership', 'Finance', 'Strategy', 'Governance'].includes(c.category)
    ).slice(0, 4);
  }, [courses]);

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex flex-col relative overflow-x-hidden font-sans text-[#0A1628]">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative h-screen min-h-[850px] w-full bg-[#0A1628] flex flex-col lg:flex-row overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-[0.05] pointer-events-none" />
        <div className="lg:w-[60%] flex flex-col justify-center px-6 lg:px-24 pt-32 lg:pt-48 pb-20 relative z-10">
          <button 
            onClick={onBack} 
            className="flex items-center gap-3 text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-black mb-12 hover:translate-x-[-4px] transition-transform w-fit group"
          >
            <X className="w-4 h-4" /> Exit Portal
          </button>
          <div className="space-y-10 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] block animate-pulse">LeadBold Schools of Leadership & Strategy</span>
              <h1 className="text-5xl lg:text-8xl text-white serif leading-[1.05] font-bold tracking-tight">Develop the Leaders <br /> Your Organization <br /> <span className="text-[#D4AF37]">Desperately Needs</span></h1>
            </div>
            <p className="text-white/60 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl italic serif">"Executive education programs that build strategic thinkers, principled decision-makers, and transformation leaders for Africa's most ambitious institutions."</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-y border-white/10 py-10 max-w-4xl">
              {[{ label: 'GRADUATES', val: '1,200+' }, { label: 'FLAGSHIPS', val: '4' }, { label: 'COMPLETION', val: '95%' }, { label: 'COUNTRIES', val: '15' }].map(s => (
                <div key={s.label}>
                  <div className="text-4xl serif text-white font-bold">{s.val}</div>
                  <div className="text-[9px] uppercase tracking-widest font-black text-[#D4AF37] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="px-14 py-6 bg-[#D4AF37] text-[#050505] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:brightness-110 transition-all scale-105">Explore Programs</button>
              <button className="px-14 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">Download 2026 Prospectus</button>
            </div>
            <div className="flex items-center gap-3 pt-6 text-[10px] uppercase font-black text-white/40 tracking-widest"><GraduationCap className="w-5 h-5 text-[#D4AF37]" /> Accredited by National Open University of Nigeria (NOUN)</div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-[40%] relative bg-[#050505] border-l border-white/10 overflow-hidden items-center justify-center p-20 pt-48">
           <div className="relative group cursor-pointer w-full aspect-[4/5]">
              <img src="media/company.jpg" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 bg-[#D4AF37] p-8 brochure-shadow translate-y-12 group-hover:translate-y-0 transition-transform duration-700">
                 <Quote className="w-8 h-8 text-[#050505]/20 mb-4" />
                 <p className="text-lg serif text-[#050505] font-bold leading-relaxed italic">"LeadBold's Leadership Intelligence Program fundamentally changed how I approach strategy. Within 6 months, I was promoted to Director."</p>
                 <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#050505]/10" />
                    <div>
                       <div className="text-[10px] font-black uppercase text-[#050505]">Chidinma Okafor, PhD</div>
                       <div className="text-[8px] font-bold text-[#050505]/60 uppercase tracking-widest">Federal Ministry of Finance</div>
                    </div>
                 </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full bg-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform"><Play className="fill-current w-8 h-8 ml-1" /></div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 2: THE LEADERSHIP GAP */}
      <section className="py-40 bg-[#FAFAF9] border-b border-[#E5E5E3]">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
          <div className="text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.5em]">The Crisis Hiding in Plain Sight</div>
          <h2 className="text-5xl lg:text-7xl serif text-[#050505] leading-tight font-bold">The Leadership Execution Gap</h2>
          <div className="relative py-20">
             <div className="text-[12rem] lg:text-[18rem] font-black text-[#D4AF37]/5 leading-none absolute inset-0 flex items-center justify-center pointer-events-none serif italic">67%</div>
             <div className="relative z-10 space-y-6">
                <div className="text-7xl lg:text-9xl font-black text-[#D4AF37] serif italic">67%</div>
                <p className="text-xl lg:text-3xl text-slate-800 font-light leading-relaxed max-w-2xl mx-auto">of African organizations report they lack the leadership capacity required for sustained growth.</p>
                <div className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] pt-4">Source: McKinsey Africa Leadership Report, 2025</div>
             </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12 pt-20">
             {[
               { icon: <Shield className="w-8 h-8" />, stat: '70%', label: 'FAILURE RATE', desc: 'Change initiatives fail due to poor leadership execution.' },
               { icon: <Target className="w-8 h-8" />, stat: '45%', label: 'VACANCY GAP', desc: 'Leadership positions go unfilled due to talent scarcity.' },
               { icon: <BarChart3 className="w-8 h-8" />, stat: '82%', label: 'UNPREPAREDNESS', desc: 'Executives feel unprepared for future complexity.' },
             ].map(item => (
               <div key={item.label} className="p-10 bg-white border border-slate-200 brochure-shadow space-y-6 text-left hover:border-[#D4AF37] transition-all">
                  <div className="text-[#D4AF37]">{item.icon}</div>
                  <div><div className="text-5xl font-black serif text-[#050505]">{item.stat}</div><div className="text-[10px] font-black text-[#D4AF37] tracking-widest mt-2">{item.label}</div></div>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE LEADBOLD DIFFERENCE */}
      <section className="py-40 bg-[#050505] text-white relative">
         <div className="absolute inset-0 noise-bg opacity-[0.1]" />
         <div className="max-w-[1400px] mx-auto px-6 relative z-10">
            <div className="mb-32 flex flex-col md:flex-row items-end justify-between border-b border-white/10 pb-16">
               <h2 className="text-6xl serif text-white font-bold leading-tight">Institutional Positioning</h2>
               <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-[10px] font-black max-w-xs text-right">Why serious leaders choose LeadBold Schools.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { id: '01', title: 'LEADERSHIP FROM THE INSIDE OUT', desc: 'Organizations only grow to the level of their leaders\' internal capacity. We develop self-aware, disciplined, values-driven leaders.', features: ['Personal mastery first', 'Character development', 'Authentic leadership'] },
                 { id: '02', title: 'STRATEGY AS EXECUTION DISCIPLINE', desc: 'Strategy is meaningless without leaders who can translate it into action. We teach the daily discipline of strategic execution.', features: ['Strategic thinking', 'Decision frameworks', 'Resource allocation'] },
                 { id: '03', title: 'REAL-WORLD APPLICATION', desc: 'Leadership is learned by doing, not by listening. Every session includes practical tools and immediate workplace application.', features: ['African case studies', 'Simulation exercises', 'Action planning'] }
               ].map(card => (
                 <div key={card.id} className="group bg-[#0A1628] p-12 border border-white/5 brochure-shadow hover:border-[#D4AF37]/50 transition-all flex flex-col h-[550px]">
                    <div className="flex justify-between items-start mb-10"><Zap className="w-12 h-12 text-[#D4AF37]" /><span className="text-5xl serif font-black text-white/5">{card.id}</span></div>
                    <h3 className="text-2xl serif text-white font-bold leading-tight mb-4 uppercase tracking-tight">{card.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{card.desc}</p>
                    <ul className="space-y-4 pt-6 border-t border-white/5">
                       {card.features.map(feat => <li key={feat} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/30"><CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> {feat}</li>)}
                    </ul>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4: FLAGSHIP PATHWAYS */}
      <section className="py-40 bg-white">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-32 text-center space-y-4">
               <div className="text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.5em]">2026 Academic Prospectus</div>
               <h2 className="text-6xl serif text-[#050505] font-bold">Four Transformational Pathways</h2>
               <div className="w-32 h-1 bg-[#D4AF37] mx-auto" />
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
               {flagships.map(course => (
                 <div key={course.id} className="group relative bg-[#050505] overflow-hidden min-h-[600px] flex flex-col justify-end p-12 lg:p-20 hover:-translate-y-2 transition-all duration-700 brochure-shadow">
                    <div className="absolute inset-0 z-0"><img src="media/brochure.jpg" className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000" /><div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" /></div>
                    <div className="relative z-10 space-y-8">
                       <div className="flex items-center gap-4"><Award className="w-10 h-10 text-[#D4AF37]" /><span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37]">Flagship Program</span></div>
                       <div className="space-y-4"><h3 className="text-4xl lg:text-5xl serif text-white leading-tight font-bold">{course.title}</h3><p className="text-xl text-[#D4AF37] font-light italic serif">"{course.subtitle || 'Equipping leaders for modern complexity.'}"</p></div>
                       <div className="w-20 h-1 bg-white/10 group-hover:w-full group-hover:bg-[#D4AF37] transition-all duration-700" />
                       <p className="text-base text-white/60 leading-relaxed font-light max-w-xl line-clamp-3 group-hover:line-clamp-none transition-all duration-700">{course.description}</p>
                       <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                          {[{ l: 'Duration', v: course.duration }, { l: 'Level', v: course.level }, { l: 'Capacity', v: '25 Max' }].map(it => <div key={it.l} className="text-center"><div className="text-xl font-bold text-white serif">{it.v}</div><div className="text-[8px] font-black uppercase tracking-widest text-white/30">{it.l}</div></div>)}
                       </div>
                       <div className="flex flex-col sm:flex-row gap-4 pt-10">
                          <button onClick={() => onViewSingle(course)} className="flex-1 py-5 bg-[#D4AF37] text-[#050505] font-black uppercase tracking-widest text-[10px] brochure-shadow hover:brightness-110 transition-all">View Program Details</button>
                          <button className="flex-1 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">Download Curriculum</button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5: METHODOLOGY */}
      <section className="py-40 bg-[#0A1628] text-white relative">
         <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center space-y-32">
            <h2 className="text-6xl serif">Our Learning Philosophy</h2>
            <div className="grid lg:grid-cols-5 gap-12 relative">
               <div className="absolute top-[88px] left-0 w-full h-[2px] bg-white/5 hidden lg:block" />
               {[
                 { id: 1, step: 'ASSESS', time: 'Week 1', desc: 'Leadership baseline audit.' },
                 { id: 2, step: 'LEARN', time: 'Weeks 2-12', desc: 'Frameworks and tools.' },
                 { id: 3, step: 'APPLY', time: 'Weeks 13-18', desc: 'Real-world simulations.' },
                 { id: 4, step: 'LEAD', time: 'Weeks 19-22', desc: 'Transformation execution.' },
                 { id: 5, step: 'TRANSFORM', time: 'Post-Program', desc: 'Institutionalize change.' }
               ].map(s => (
                 <div key={s.id} onClick={() => setActiveStep(s.id)} className={`cursor-pointer transition-all duration-500 ${activeStep === s.id ? '-translate-y-4' : ''}`}>
                    <div className={`w-16 h-16 rounded-full border-4 border-[#0A1628] flex items-center justify-center text-xl font-bold mb-10 mx-auto transition-all ${activeStep === s.id ? 'bg-[#D4AF37] text-[#050505]' : 'bg-[#050505] border-white/10'}`}>{s.id}</div>
                    <h4 className={`text-xl serif font-black ${activeStep === s.id ? 'text-[#D4AF37]' : 'text-white/20'}`}>{s.step}</h4>
                    <p className="text-xs text-white/30 mt-2">{s.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: COMPLETE LEARNING EXPERIENCE SHOWCASE (DETAILED TABS) */}
      <section className="py-40 bg-white" id="experience-showcase">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl lg:text-7xl serif text-[#050505] font-bold">Inside a LeadBold Program</h2>
            <p className="text-slate-500 text-xl font-light max-w-2xl mx-auto leading-relaxed serif italic">
              "Experience the LeadBold Learning Model: Our programs combine five integrated methods designed to develop different leadership capabilities."
            </p>
          </div>

          {/* TAB NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8 mb-20 border-b border-slate-100 pb-2">
            {[
              { id: 'live', label: 'Live Sessions', icon: <GraduationCap className="w-5 h-5" /> },
              { id: 'case', label: 'Case Studies', icon: <BarChart3 className="w-5 h-5" /> },
              { id: 'peer', label: 'Peer Learning', icon: <Users className="w-5 h-5" /> },
              { id: 'coaching', label: 'Coaching', icon: <Target className="w-5 h-5" /> },
              { id: 'action', label: 'Action Projects', icon: <FileText className="w-5 h-5" /> }
            ].map(tab => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-6 py-6 flex items-center gap-3 transition-all group ${activeTab === tab.id ? 'text-[#050505]' : 'text-slate-400 hover:text-[#D4AF37]'}`}
              >
                <span className={`p-2 rounded-lg transition-colors ${activeTab === tab.id ? 'bg-[#D4AF37] text-[#050505]' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
                  {tab.icon}
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-[-2px] left-0 w-full h-1 bg-[#D4AF37] animate-fade-in shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* TAB CONTENT AREA */}
          <div className="relative min-h-[800px] animate-fade-in">
            
            {/* TAB 1: LIVE SESSIONS */}
            {activeTab === 'live' && (
              <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-12">
                   <div className="aspect-[4/3] relative overflow-hidden brochure-shadow rounded-sm group">
                      <img src="https://leadboldconsulting.co.uk/wp-content/uploads/2023/09/company.jpg" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Executive Classroom" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#050505] cursor-pointer hover:scale-110 transition-transform"><Play className="fill-current w-5 h-5 ml-1" /></div>
                         <div className="flex-1"><p className="text-[10px] font-black uppercase tracking-widest">Inside a Live Session</p><p className="text-[8px] font-bold opacity-60 uppercase">Duration: 2:15 • Facilitation Style Preview</p></div>
                      </div>
                   </div>
                   <div className="bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] p-10 space-y-6">
                      <Quote className="w-10 h-10 text-[#D4AF37]/20" />
                      <p className="text-xl serif text-slate-800 italic leading-relaxed">"The live sessions transformed how I think about strategy. The facilitator didn't just teach frameworks—he showed us how to apply them to our actual organizational challenges."</p>
                      <div className="flex items-center gap-4 pt-4 border-t border-[#D4AF37]/10">
                         <div className="w-10 h-10 rounded-full bg-slate-200" />
                         <div><p className="text-xs font-bold">Oluwaseun Adeyemi</p><p className="text-[9px] uppercase font-black text-[#D4AF37]">Director of Strategy, Telecoms</p></div>
                      </div>
                      <div className="pt-4 flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest border-t border-[#D4AF37]/10"><BarChart3 className="w-4 h-4 text-[#D4AF37]" /> Session Satisfaction: 4.8/5.0 Average</div>
                   </div>
                </div>
                <div className="space-y-16">
                   <div className="space-y-6">
                      <h3 className="text-5xl serif text-[#050505] font-bold leading-tight">Interactive <br /> <span className="text-[#D4AF37]">Live Sessions</span></h3>
                      <p className="text-xl text-[#D4AF37] font-light italic serif">Where Frameworks Meet Real-World Application</p>
                      <p className="text-lg text-slate-600 leading-relaxed font-light">Expert-led sessions combining rigorous academic frameworks with battle-tested methodologies from Africa's most successful organizations.</p>
                   </div>
                   <div className="space-y-8">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#050505] border-b pb-4">Session Format Architecture</h4>
                      {[
                        { t: 'Practitioner-Led Instruction', d: 'Facilitators with 20+ years of senior leadership experience—not just academic theorists.' },
                        { t: 'Socratic Questioning', d: 'Deep inquiry that challenges assumptions and builds critical thinking capacity.' },
                        { t: 'Interactive Learning Model', d: '60% discussion and application, 40% content delivery—opposite of traditional lectures.' },
                        { t: 'Real-Time Integration', d: 'Frameworks introduced, then immediately applied to participants\' actual challenges.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 group">
                           <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#050505] transition-all"><Check className="w-5 h-5" /></div>
                           <div className="space-y-1"><h5 className="font-bold text-sm uppercase tracking-tight">{item.t}</h5><p className="text-xs text-slate-400 font-light leading-relaxed">{item.d}</p></div>
                        </div>
                      ))}
                   </div>
                   <div className="grid grid-cols-3 gap-4 pt-10 border-t">
                      {['IN-PERSON', 'VIRTUAL LIVE', 'HYBRID'].map(f => (
                         <div key={f} className="p-6 bg-[#FAFAF9] border border-slate-100 text-center group hover:border-[#D4AF37] transition-all">
                            <Globe className="w-6 h-6 mx-auto mb-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                            <p className="text-[9px] font-black uppercase tracking-widest">{f}</p>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {/* TAB 2: CASE STUDIES */}
            {activeTab === 'case' && (
              <div className="space-y-24">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                   <div className="space-y-4">
                      <h3 className="text-5xl lg:text-7xl serif text-[#050505] font-bold leading-tight">Case-Based Learning</h3>
                      <p className="text-xl text-[#D4AF37] font-light italic serif">African Leadership Challenges, Strategic Solutions</p>
                   </div>
                   <p className="text-lg text-slate-600 leading-relaxed font-light">Traditional business schools use global cases from the 1980s. LeadBold uses real leadership challenges from contemporary African organizations—challenges you face every day.</p>
                   <div className="grid grid-cols-3 gap-12 pt-10">
                      {[
                        { step: '01', l: 'INDIVIDUAL ANALYSIS', d: 'Analyze organizational context and ambiguity independently.' },
                        { step: '02', l: 'SMALL GROUP DEBATE', d: 'Challenge assumptions in cohorts of 5-6 participants.' },
                        { step: '03', l: 'FACILITATED DEBRIEF', d: 'Extract leadership principles with faculty expert.' }
                      ].map(s => (
                        <div key={s.step} className="space-y-4">
                           <div className="text-5xl font-black text-[#D4AF37]/10 serif italic">{s.step}</div>
                           <p className="text-[10px] font-black uppercase tracking-widest">{s.l}</p>
                           <p className="text-xs text-slate-400 font-light">{s.d}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                   {[
                     { t: 'Ministry Transformation', c: 'A new Permanent Secretary inherits a legacy system with skeptical stakeholders. Budget cuts loom. Political pressure mounts.', f: ['Kotter\'s Model', 'Stakeholder Mapping'] },
                     { t: 'Budget Crisis: Resources', c: 'Revenue shortfall forces a 30% budget cut. Board demands results despite reduced resources. Morale plummets.', f: ['Resource Allocation', 'Change Communication'] },
                     { t: 'Team Dysfunction', c: 'You inherit a senior team marked by silos and blame culture. Projects stall. CEO questions your leadership.', f: ['Team Development', 'Performance Mgmt'] }
                   ].map((caseStudy, i) => (
                     <div key={i} className="bg-white p-12 border border-slate-100 brochure-shadow group hover:border-[#D4AF37] transition-all flex flex-col justify-between h-[500px]">
                        <div className="space-y-8">
                           <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.3em]">CASE STUDY #0{i+1}</div>
                           <h4 className="text-2xl serif font-bold leading-tight uppercase tracking-tighter">"{caseStudy.t}"</h4>
                           <p className="text-sm text-slate-500 italic serif leading-relaxed">"{caseStudy.c}"</p>
                           <div className="space-y-3 pt-6 border-t border-slate-50">
                              <p className="text-[8px] font-black uppercase text-slate-300 tracking-widest">Frameworks Applied</p>
                              <div className="flex flex-wrap gap-2">
                                 {caseStudy.f.map(f => <span key={f} className="px-3 py-1 bg-slate-50 text-[9px] font-bold text-slate-400 border">{f}</span>)}
                              </div>
                           </div>
                        </div>
                        <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#050505] group-hover:text-[#D4AF37] transition-colors">View Full Case <ArrowRight className="w-4 h-4" /></button>
                     </div>
                   ))}
                </div>

                <div className="bg-[#0A1628] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center gap-20 brochure-shadow">
                   <div className="lg:w-1/3 space-y-8">
                      <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Proven Institutional Impact</div>
                      <div className="space-y-6">
                        {[{v: '45+', l: 'Original Cases'}, {v: '89%', l: 'Application Rate'}].map(s => (
                          <div key={s.l}><div className="text-7xl font-bold serif text-[#D4AF37] italic leading-none">{s.v}</div><div className="text-[9px] uppercase font-black text-white/40 tracking-widest mt-2">{s.l}</div></div>
                        ))}
                      </div>
                   </div>
                   <div className="flex-1 space-y-10 border-l border-white/5 pl-12 lg:pl-20">
                      <p className="text-3xl serif font-light italic text-white/80 leading-relaxed">"The case studies were uncomfortably realistic—they felt like situations I'd faced or would face. The debriefs forced me to defend my thinking."</p>
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-white/10" />
                         <div><p className="font-bold text-lg serif">Dr. Funmilayo Oladipo</p><p className="text-[10px] uppercase font-black text-[#D4AF37]">Director-General, Planning Commission</p></div>
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* TAB 3: PEER LEARNING */}
            {activeTab === 'peer' && (
              <div className="space-y-32">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="space-y-10">
                      <h3 className="text-5xl lg:text-7xl serif text-[#050505] font-bold leading-tight">Cohort-Based <br /> <span className="text-[#D4AF37]">Peer Learning</span></h3>
                      <p className="text-xl text-slate-600 leading-relaxed font-light serif italic">"At LeadBold, your cohort becomes your leadership think tank. The most valuable learning often happens between sessions—in the WhatsApp groups and over coffee."</p>
                      <div className="grid grid-cols-2 gap-6 pt-10">
                         {[
                           { i: <RotateCcw />, t: 'Diverse Perspectives', d: 'Public, private, and NGO synergy.' },
                           { i: <Globe />, t: 'Lifetime Network', d: 'Lifelong friends and referral sources.' },
                           { i: <Shield />, t: 'Safe Vulnerability', d: 'Space to test ideas and share failures.' },
                           { i: <Target />, t: 'Accountability', d: 'Peer check-ins ensure 95% completion.' }
                         ].map((item, i) => (
                           <div key={i} className="p-8 bg-[#FAFAF9] border border-slate-100 hover:border-[#D4AF37] transition-all space-y-4">
                              <div className="text-[#D4AF37]">{item.i}</div>
                              <h5 className="text-[11px] font-black uppercase tracking-tight">{item.t}</h5>
                              <p className="text-[10px] text-slate-400 font-light">{item.d}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="relative group">
                      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952" className="w-full aspect-[4/5] object-cover brochure-shadow grayscale group-hover:grayscale-0 transition-all duration-1000" />
                      <div className="absolute inset-0 bg-[#0A1628]/20" />
                      <div className="absolute -bottom-10 -left-10 bg-[#D4AF37] p-10 brochure-shadow max-w-xs space-y-4">
                         <h5 className="font-black uppercase tracking-widest text-[10px]">Cohort Connection</h5>
                         <p className="text-sm font-bold text-[#050505] leading-relaxed">"My cohort became my board of advisors. One decision made in our monthly peer clinic saved my organization ₦50 million."</p>
                         <p className="text-[9px] font-black uppercase opacity-60">— Ibrahim Musa, CFO</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-12">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#050505] border-b pb-4 text-center">Structured Peer Activities</h4>
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {['PEER ADVISORY GROUPS', 'LEADERSHIP CASE CLINICS', 'STRATEGY SPRINTS', 'LEARNING PARTNERS'].map(act => (
                        <div key={act} className="p-8 border border-slate-100 bg-white brochure-shadow hover:-translate-y-2 transition-all group">
                           <div className="w-10 h-10 border-b-2 border-[#D4AF37] mb-6 flex items-center justify-center font-black text-[#D4AF37]">{act.charAt(0)}</div>
                           <h5 className="text-sm font-black uppercase tracking-tighter mb-4 text-[#050505]">{act}</h5>
                           <p className="text-xs text-slate-400 leading-relaxed font-light">Structured 90-minute monthly protocols ensuring deep peer-to-peer accountability and insight exchange.</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {/* TAB 4: COACHING */}
            {activeTab === 'coaching' && (
              <div className="grid lg:grid-cols-12 gap-20 items-start">
                <div className="lg:col-span-4 space-y-12">
                   <div className="bg-[#050505] text-white p-12 brochure-shadow space-y-10">
                      <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Coaching Tiers</div>
                      <div className="space-y-12">
                         {[
                           { l: 'Tier 1', t: 'FACILITATOR COACHING', d: 'Monthly 30-min conceptual integration.' },
                           { l: 'Tier 2', t: 'EXECUTIVE PAIRING', d: 'Bi-weekly behavioral change cycles.' },
                           { l: 'Tier 3', t: 'STRATEGIC ADVISORY', d: 'C-suite level board-governance advisory.' }
                         ].map(tier => (
                           <div key={tier.l} className="space-y-3 group cursor-pointer">
                              <p className="text-[9px] font-black text-[#D4AF37] group-hover:translate-x-2 transition-transform">{tier.l}</p>
                              <h4 className="text-xl serif font-bold group-hover:text-[#D4AF37] transition-colors">{tier.t}</h4>
                              <p className="text-xs text-white/40 font-light">{tier.d}</p>
                           </div>
                         ))}
                      </div>
                      <button className="w-full py-5 border border-[#D4AF37]/40 text-[#D4AF37] font-black uppercase text-[10px] tracking-widest hover:bg-[#D4AF37] hover:text-[#050505] transition-all">Request Coaching Details</button>
                   </div>
                   <div className="p-8 border border-slate-100 bg-[#FAFAF9] space-y-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#050505]">Coaching Impact</p>
                      <div className="space-y-4">
                         {[{v: '94%', l: 'Behavior Change'}, {v: '87%', l: 'Goal Achievement'}, {v: '81%', l: 'Promotion Rate'}].map(s => (
                           <div key={s.l} className="flex justify-between items-center border-b pb-2"><span className="text-[10px] font-bold text-slate-400 uppercase">{s.l}</span><span className="text-xl font-bold serif text-[#D4AF37]">{s.v}</span></div>
                         ))}
                      </div>
                   </div>
                </div>
                <div className="lg:col-span-8 space-y-16">
                   <div className="space-y-6">
                      <h3 className="text-5xl lg:text-7xl serif text-[#050505] font-bold leading-tight">Executive <br /> <span className="text-[#D4AF37]">Coaching</span></h3>
                      <p className="text-xl text-[#D4AF37] font-light italic serif">One-on-One Support for Your Unique Challenges</p>
                      <p className="text-lg text-slate-600 leading-relaxed font-light">Leadership development isn't one-size-fits-all. While cohorts build collective wisdom, coaching provides personalized guidance tailored to your specific organizational context.</p>
                   </div>
                   <div className="space-y-12">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#050505] border-b pb-4">The Coaching Journey</h4>
                      <div className="grid md:grid-cols-4 gap-8">
                         {[
                           { s: 'Assessment', d: '360° feedback & style audit.' },
                           { s: 'Troubleshoot', d: 'Regular real-situation sessions.' },
                           { s: 'Calibration', d: 'Mid-program progress review.' },
                           { s: 'Sustaining', d: 'Post-program habits creation.' }
                         ].map((st, i) => (
                           <div key={i} className="space-y-4 relative">
                              {i < 3 && <div className="hidden lg:block absolute top-4 left-[80%] w-full h-[1px] bg-[#D4AF37]/20" />}
                              <div className="w-10 h-10 rounded-full bg-[#050505] text-[#D4AF37] flex items-center justify-center font-bold serif">{i+1}</div>
                              <h5 className="font-bold text-xs uppercase tracking-tight">{st.s}</h5>
                              <p className="text-[10px] text-slate-400 leading-relaxed">{st.d}</p>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="space-y-10 pt-10 border-t">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#050505]">Master Coach Faculty</h4>
                      <div className="grid grid-cols-3 gap-8">
                         {[
                           { n: 'Adanna Nwosu', s: 'Executive Presence', b: 'Former COO, Fortune 500' },
                           { n: 'Tunde Bakare', s: 'Strategic Change', b: 'Former CEO, Leading Bank' },
                           { n: 'Zainab Mohammed', s: 'Public Sector Excellence', b: 'Former Perm. Secretary' }
                         ].map(c => (
                           <div key={c.n} className="space-y-4 group cursor-pointer">
                              <div className="aspect-square bg-slate-50 border border-slate-100 grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden"><img src={`https://i.pravatar.cc/300?u=${c.n}`} className="w-full h-full object-cover" /></div>
                              <div className="space-y-1"><h5 className="font-black text-[10px] uppercase tracking-tighter group-hover:text-[#D4AF37] transition-colors">{c.n}</h5><p className="text-[8px] uppercase text-[#D4AF37] font-black">{c.s}</p><p className="text-[8px] text-slate-400 italic">{c.b}</p></div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </div>
            )}

            {/* TAB 5: ACTION PROJECTS */}
            {activeTab === 'action' && (
              <div className="space-y-32">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                   <div className="space-y-6">
                      <h3 className="text-5xl lg:text-7xl serif text-[#050505] font-bold leading-tight">Action Learning <span className="text-[#D4AF37]">Projects</span></h3>
                      <p className="text-xl text-[#D4AF37] font-light italic serif">Turn Theory Into Measurable Organizational Impact</p>
                   </div>
                   <p className="text-lg text-slate-600 leading-relaxed font-light">Leadership isn't academic. It's applied. Every program culminates in a real organizational project you tackle using program frameworks, with coaching support, measured by tangible results.</p>
                   <div className="grid grid-cols-4 gap-8 pt-10">
                      {['STRATEGIC INITIATIVES', 'OPERATIONAL IMPROVEMENT', 'ORGANIZATIONAL CULTURE', 'POLICY & GOVERNANCE'].map(cat => (
                        <div key={cat} className="p-8 bg-[#FAFAF9] border border-slate-100 hover:border-[#D4AF37] transition-all group">
                           <Lightbulb className="w-8 h-8 mx-auto mb-6 text-slate-200 group-hover:text-[#D4AF37] transition-all" />
                           <h5 className="text-[10px] font-black uppercase tracking-tight leading-tight">{cat}</h5>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                   {[
                     { t: 'Performance Turnaround', l: 'Director, Ministry of Industry', r: '67% improvement in target achievement.', d: 'Staff morale was at an all-time low. I implemented a performance management system that redefined departmental logic.' },
                     { t: 'Digital Banking Transformation', l: 'Head of Digital, Commercial Bank', r: 'Digital volume up ₦180B.', d: 'Legacy systems were blocking growth. Developed an 18-month roadmap that grew mobile banking users by 340%.' },
                     { t: 'Leadership Pipeline', l: 'CHRO, Oil & Gas Major', r: 'Internal promotion rate up 78%.', d: 'Weak succession planning was a critical risk. Designed a 3-tier development program now adopted company-wide.' }
                   ].map((proj, i) => (
                     <div key={i} className="bg-[#050505] text-white p-12 brochure-shadow group hover:border-[#D4AF37] border border-white/5 transition-all flex flex-col justify-between h-[550px]">
                        <div className="space-y-8">
                           <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">ALUMNI PROJECT</div>
                           <h4 className="text-2xl serif font-bold leading-tight">"{proj.t}"</h4>
                           <p className="text-xs text-white/40 font-light leading-relaxed">{proj.d}</p>
                           <div className="p-6 bg-[#D4AF37] text-[#050505] brochure-shadow">
                              <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60">Result Impact</p>
                              <p className="text-lg font-bold serif leading-tight">✓ {proj.r}</p>
                           </div>
                        </div>
                        <div className="space-y-2 pt-6 border-t border-white/5">
                           <p className="text-[10px] font-bold text-[#D4AF37]">{proj.l}</p>
                           <p className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors cursor-pointer">View Case Study PDF →</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="bg-[#FAFAF9] p-12 lg:p-20 border border-slate-100 flex flex-col lg:flex-row items-center gap-20 brochure-shadow">
                   <div className="lg:w-1/2 space-y-10">
                      <h4 className="text-4xl serif font-bold text-[#050505]">Project Support Structure</h4>
                      <p className="text-lg text-slate-500 font-light leading-relaxed italic serif">"You don't do this alone. Your Action Learning Project is supported by three distinct institutional layers."</p>
                      <div className="grid gap-6">
                         {[
                           { t: 'Faculty Coaching', d: 'Monthly consultation on strategy and pivots.' },
                           { t: 'Peer Advisory Group', d: 'Bi-weekly feedback sessions from fellow leaders.' },
                           { t: 'Resource Library', d: 'Full access to LeadBold\'s implementation toolkits.' }
                         ].map(s => (
                           <div key={s.t} className="flex items-start gap-4 p-6 bg-white border border-slate-100 group hover:border-[#D4AF37] transition-all">
                              <CheckCircle2 className="w-6 h-6 text-[#D4AF37] flex-none" />
                              <div className="space-y-1"><h5 className="font-bold text-xs uppercase tracking-widest">{s.t}</h5><p className="text-[10px] text-slate-400 font-light">{s.d}</p></div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="lg:w-1/2 bg-[#0A1628] p-12 lg:p-20 text-white space-y-10 brochure-shadow">
                      <div className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Project Assessment Criteria</div>
                      <div className="space-y-8">
                         {[
                           { l: 'Strategic Relevance', p: '20%' },
                           { l: 'Framework Application', p: '25%' },
                           { l: 'Implementation Quality', p: '25%' },
                           { l: 'Measurable Results', p: '20%' },
                           { l: 'Learning & Reflection', p: '10%' }
                         ].map(cr => (
                           <div key={cr.l} className="space-y-2">
                              <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest"><span>{cr.l}</span><span>{cr.p}</span></div>
                              <div className="h-[2px] bg-white/5 w-full"><div className="h-full bg-[#D4AF37]" style={{ width: cr.p }} /></div>
                           </div>
                         ))}
                      </div>
                      <p className="text-xs text-white/30 italic leading-relaxed pt-10 border-t border-white/5">The Action Learning Project transforms you from a student of leadership to a proven leader who delivers measurable institutional results.</p>
                   </div>
                </div>
              </div>
            )}
          </div>

          {/* FINAL SECTION CTA */}
          <div className="mt-40 bg-[#D4AF37] p-16 lg:p-24 text-center space-y-12 brochure-shadow">
             <div className="space-y-4">
                <h3 className="text-5xl lg:text-7xl serif text-[#050505] font-bold leading-tight">Ready to Experience This <br /> Learning Model?</h3>
                <p className="text-xl font-medium text-[#050505]/60 serif italic max-w-2xl mx-auto">"Join our next cohort to transform your leadership capability through rigorous application and expert guidance."</p>
             </div>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="px-16 py-6 bg-[#050505] text-[#D4AF37] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:scale-105 transition-all">Start Your Application</button>
                <div className="text-left space-y-1 hidden lg:block border-l border-[#050505]/10 pl-8">
                   <p className="text-[9px] font-black uppercase tracking-widest text-[#050505]/40">Next Info Session</p>
                   <p className="text-lg font-bold serif text-[#050505]">January 15, 2026 • 6:00 PM</p>
                   <button className="text-[10px] font-black uppercase tracking-widest text-[#050505] underline hover:no-underline">RSVP to Session →</button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO WE SERVE */}
      <section className="py-40 bg-[#FAFAF9]">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-32 space-y-4">
               <h2 className="text-6xl serif text-[#050505] font-bold">Built for Ambitious Leaders</h2>
               <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-black">Is this portal right for you?</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
               {[
                 { title: 'SENIOR MANAGERS', desc: 'Transitioning to executive roles with expanded institutional mandates.', icon: <Briefcase /> },
                 { title: 'BUSINESS EXECUTIVES', desc: 'C-suite and directors driving organizational transformation.', icon: <TrendingUp /> },
                 { title: 'PUBLIC SECTOR LEADERS', desc: 'Permanent Secretaries and DGs shaping national policy.', icon: <Building2 /> },
                 { title: 'ENTREPRENEURS', desc: 'Founders building scalable and resilient African institutions.', icon: <Flame /> },
                 { title: 'HIGH-POTENTIAL PROS', desc: 'Fast-trackers identified for strategic leadership pipelines.', icon: <Users /> },
                 { title: 'ORGANIZATIONAL TEAMS', desc: 'Groups seeking systematic capability development.', icon: <Shield /> }
               ].map(card => (
                 <div key={card.title} className="p-12 bg-white border border-slate-200 brochure-shadow hover:border-[#D4AF37] transition-all space-y-8 group">
                    <div className="text-[#D4AF37] p-4 bg-[#FAFAF9] w-fit rounded group-hover:scale-110 transition-transform">{card.icon}</div>
                    <h3 className="text-2xl serif font-bold text-[#050505]">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{card.desc}</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] flex items-center gap-2 group-hover:translate-x-2 transition-all">Explore Track <ArrowRight className="w-4 h-4" /></button>
                 </div>
               ))}
            </div>
            <div className="bg-[#D4AF37] p-16 lg:p-24 brochure-shadow grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-10 text-[#050505]">
                  <h3 className="text-5xl serif font-bold leading-tight">Institutional Prerequisites</h3>
                  <p className="text-xl font-medium opacity-80 serif">"To ensure cohort quality and learning effectiveness, all candidates must meet our institutional standards."</p>
                  <ul className="grid sm:grid-cols-2 gap-8">
                     {['Minimum 5 years experience', 'Leading a strategic team', 'Bachelor degree or equivalent', 'Organizational sponsorship', 'Full attendance commitment'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest border-b border-[#050505]/10 pb-2"><Check className="w-4 h-4" /> {item}</li>
                     ))}
                  </ul>
               </div>
               <div className="bg-[#050505] text-white p-12 brochure-shadow space-y-8 text-center">
                  <h4 className="text-2xl serif font-bold">Unsure of your eligibility?</h4>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Speak with a program advisor to find the most suitable pathway for your current leadership stage.</p>
                  <button className="w-full py-5 bg-[#D4AF37] text-[#050505] font-black uppercase text-xs tracking-widest hover:brightness-110 transition-all">Schedule Discovery Call</button>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 8: IMPACT & OUTCOMES */}
      <section className="py-40 bg-[#050505] text-white relative">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-32 space-y-4">
               <div className="text-[#D4AF37] text-[11px] font-black uppercase tracking-[0.6em]">Proven Institutional Proof</div>
               <h2 className="text-6xl serif text-white">The ROI of Development</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-20 text-center mb-40">
               {[{ val: '89%', label: 'PROMOTED WITHIN 12 MOS' }, { val: '4.9/5', label: 'GRADUATE SATISFACTION' }, { val: '94%', label: 'IMPLEMENTED LEARNINGS' }].map(stat => (
                 <div key={stat.label}><div className="text-9xl font-black serif text-[#D4AF37] italic opacity-80">{stat.val}</div><div className="text-[11px] font-black uppercase tracking-[0.4em] text-white/40 mt-8">{stat.label}</div></div>
               ))}
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
               {[
                 { title: 'CAREER ADVANCEMENT', icon: <TrendingUp />, items: ['89% promoted within 12 months', '67% received expanded scope', 'Avg 15-25% salary increase'] },
                 { title: 'ORGANIZATIONAL IMPACT', icon: <Building2 />, items: ['94% implemented work learnings', '78% led success transformation', '85% report performance gains'] },
                 { title: 'PERSONAL MASTERY', icon: <Target />, items: ['96% report improved self-awareness', '91% stronger emotional intelligence', '88% better decision making'] },
               ].map(card => (
                 <div key={card.title} className="p-12 bg-white/5 border border-white/5 brochure-shadow space-y-8 hover:bg-white/10 transition-all">
                    <div className="text-[#D4AF37]">{card.icon}</div>
                    <h3 className="text-2xl serif font-bold">{card.title}</h3>
                    <ul className="space-y-6">
                       {card.items.map(i => <li key={i} className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/40"><Check className="w-4 h-4 text-[#D4AF37] flex-none" /> {i}</li>)}
                    </ul>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 9: FACULTY */}
      <section className="py-40 bg-[#FAFAF9]">
         <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-6xl serif text-[#050505] font-bold text-center mb-32">World-Class Faculty</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-20">
               {personnel.slice(0, 4).map(f => (
                 <div key={f.id} className="bg-white p-10 border border-slate-200 brochure-shadow text-center space-y-8 group hover:border-[#D4AF37] transition-all">
                    <div className="relative w-40 h-40 mx-auto"><img src={f.image} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-4 border-[#D4AF37]/10" /><div className="absolute -bottom-2 -right-2 p-3 bg-[#D4AF37] rounded-full text-[#050505] brochure-shadow"><Award className="w-6 h-6" /></div></div>
                    <div className="space-y-2"><h3 className="text-2xl serif font-bold text-[#050505]">{f.name}</h3><p className="text-[#D4AF37] text-[10px] uppercase font-black tracking-widest">{f.title}</p></div>
                    <p className="text-xs text-slate-500 font-light italic leading-relaxed line-clamp-4">"{f.bio}"</p>
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#050505] border-b border-slate-100 pb-1 hover:border-[#D4AF37] transition-all">Full Dossier →</button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 10: ENROLLMENT PATHWAY */}
      <section className="py-40 bg-white">
         <div className="max-w-[1400px] mx-auto px-6 text-center space-y-32">
            <h2 className="text-6xl serif text-[#050505] font-bold">Your Enrollment Journey</h2>
            <div className="grid lg:grid-cols-5 gap-8 relative">
               <div className="absolute top-[50px] left-0 w-full h-1 bg-slate-50 hidden lg:block" />
               {[
                 { step: '01', title: 'EXPLORE', time: '1-2 Days', desc: 'Choose the pathway that aligns with goals.' },
                 { step: '02', title: 'APPLY', time: '15 Minutes', desc: 'Complete high-level online reflection.' },
                 { step: '03', title: 'INTERVIEW', time: '30 Minutes', desc: 'Video call with faculty for fit.' },
                 { step: '04', title: 'ENROLL', time: 'Same Day', desc: 'Receive credentials and orientation pack.' },
                 { step: '05', title: 'BEGIN', time: 'Next Intake', desc: 'Access portal and join your cohort.' }
               ].map(s => (
                 <div key={s.step} className="relative z-10 space-y-8 group">
                    <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-3xl font-black serif text-[#D4AF37] mx-auto brochure-shadow group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">{s.step}</div>
                    <h4 className="text-2xl serif font-bold text-[#050505] tracking-tight">{s.title}</h4>
                    <p className="text-sm text-slate-400 font-light leading-relaxed px-4">{s.desc}</p>
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-16 py-7 bg-[#050505] text-[#D4AF37] font-black uppercase tracking-[0.2em] text-sm brochure-shadow hover:scale-105 transition-all">Start Application Now</button>
               <button className="px-16 py-7 border border-slate-200 text-[#050505] font-black uppercase tracking-[0.2em] text-sm hover:bg-slate-50 transition-all">Schedule Info Session</button>
            </div>
         </div>
      </section>

      {/* FINAL CONVERSION CTA */}
      <section className="py-48 bg-[#0A1628] text-white relative overflow-hidden border-t border-white/10">
         <div className="absolute inset-0 noise-bg opacity-[0.1]" />
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-16">
            <h2 className="text-6xl md:text-[8rem] serif leading-[0.9] font-bold">Don't Just Learn. <br /> <span className="text-[#D4AF37]">Lead Transformation.</span></h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
               {[{ title: 'Leadership Intelligence Program', date: 'March 2026', seats: '15 Remaining' }, { title: 'Financial Intelligence Program', date: 'April 2026', seats: 'Registration Open' }].map(c => (
                 <div key={c.title} className="p-10 bg-white/5 border border-white/10 brochure-shadow flex flex-col justify-between hover:bg-white/10 transition-all cursor-pointer group">
                    <h4 className="text-2xl serif font-bold group-hover:text-[#D4AF37] mb-6 transition-colors">{c.title}</h4>
                    <button className="w-full py-5 bg-[#D4AF37] text-[#050505] font-black text-xs uppercase tracking-widest">Apply To This Cohort →</button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <style>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default TrainingLanding;
