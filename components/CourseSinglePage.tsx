
import React, { useState, useEffect, useRef } from 'react';
/* Added missing MapPin import from lucide-react */
import { 
  ArrowLeft, Heart, Share2, Clock, Globe, Briefcase, 
  CheckCircle2, ArrowRight, Download, Users, Star, 
  ChevronDown, Zap, Shield, Target, GraduationCap,
  BookOpen, Award, ShieldAlert, Gift, Video, Wallet, ChevronRight,
  HelpCircle, MessageSquare, MapPin
} from 'lucide-react';
import { Personnel } from '../types';
import { DetailedCourse, COLORS } from '@/constants';

interface CourseSinglePageProps {
  course: DetailedCourse;
  personnel: Personnel[];
  onBack: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onEnroll: () => void;
}

const CourseSinglePage: React.FC<CourseSinglePageProps> = ({ 
  course, personnel, onBack, isBookmarked, onToggleBookmark, onEnroll 
}) => {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        // Show sticky bar after scrolling past the hero section
        setShowStickyBar(window.scrollY > heroRef.current.offsetHeight - 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const facilitators = course.facilitatorIds.map(id => personnel.find(p => p.id === id)).filter(Boolean) as Personnel[];

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans overflow-x-hidden">
      
      {/* 1. STICKY BOOKING BAR */}
      <div className={`fixed top-20 left-0 w-full bg-white shadow-2xl z-[70] h-20 transition-all duration-500 transform ${showStickyBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-[#0A1628] flex items-center justify-center text-[#C9A962] rounded-sm"><GraduationCap className="w-5 h-5" /></div>
             <div className="hidden sm:block">
                <h4 className="text-sm font-black text-[#050505] truncate max-w-[300px] uppercase tracking-tighter">{course.title}</h4>
                <p className="text-[9px] font-bold text-[#C9A962] uppercase tracking-widest">Next Intake: {course.nextSession}</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden lg:block text-right pr-6 border-r border-slate-100">
                <div className="text-[9px] uppercase font-black text-slate-400 tracking-widest">Tuition Fee</div>
                <div className="text-sm font-black text-[#050505]">{course.price}</div>
             </div>
             <div className="flex items-center gap-2">
                <button onClick={onToggleBookmark} className={`p-3 border rounded-sm transition-all ${isBookmarked ? 'bg-[#C9A962] border-[#C9A962] text-[#050505]' : 'border-slate-200 text-slate-400 hover:border-[#C9A962] hover:text-[#C9A962]'}`}>
                  <Heart className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} />
                </button>
                <button onClick={onEnroll} className="px-8 py-3 bg-[#050505] text-[#C9A962] text-[10px] uppercase font-black tracking-widest brochure-shadow hover:bg-[#C9A962] hover:text-[#050505] transition-all">Enroll Now</button>
             </div>
          </div>
        </div>
      </div>

      {/* 2. INSTITUTIONAL HERO (High Contrast Midnight) */}
      <header ref={heroRef} className="bg-[#050505] pt-40 pb-32 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 noise-bg opacity-[0.1]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <div className="w-full h-full bg-gradient-to-l from-[#C9A962]/20 to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-[0.4em] font-black mb-16 hover:text-[#C9A962] transition-all group">
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Academy Portfolio
          </button>

          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-4">
                 <div className="bg-[#C9A962] text-[#050505] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] brochure-shadow">
                   {course.location === 'International' ? '🌍 INTERNATIONAL PROGRAM' : '🇳🇬 LOCAL PROGRAM'}
                 </div>
                 <div className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">{course.category}</div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-[5.5rem] text-white serif font-bold leading-[1.05] tracking-tight">
                   {course.title.split(':').map((part, i) => (
                     <React.Fragment key={i}>{part}{i === 0 && course.title.includes(':') && ':'}<br /></React.Fragment>
                   ))}
                </h1>
                <div className="w-32 h-1 bg-[#C9A962] margin-y-4" />
                <p className="text-[#C9A962] text-2xl lg:text-3xl font-light italic serif leading-relaxed max-w-2xl">
                   "{course.subtitle || 'Equipping leaders for the complexities of modern governance.'}"
                </p>
              </div>

              <div className="flex flex-wrap gap-10 pt-10 border-t border-white/10">
                 <div className="flex items-center gap-3 text-white/80">
                    <Clock className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-xs font-black uppercase tracking-widest">{course.duration.toUpperCase()} INTENSIVE</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/80">
                    <Users className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-xs font-black uppercase tracking-widest">MAX 25 PARTICIPANTS</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/80">
                    <Award className="w-5 h-5 text-[#C9A962]" />
                    <span className="text-xs font-black uppercase tracking-widest">40 CPD HOURS</span>
                 </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                 <div className="flex gap-1 text-[#C9A962]">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                 </div>
                 <span className="text-white/40 text-[11px] font-black uppercase tracking-widest">4.9/5.0 (127 Reviews) • 1,200+ GRADUATES</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-10">
                <button onClick={onEnroll} className="px-12 py-5 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-xs brochure-shadow hover:brightness-110 transition-all scale-105">Reserve Your Spot</button>
                <button className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download Brochure
                </button>
              </div>
            </div>

            {/* Program Impact Box */}
            <div className="lg:col-span-5 bg-[#0A1628] p-12 border border-white/10 brochure-shadow space-y-10 animate-fade-in-up [animation-delay:200ms]">
               <div className="text-[#C9A962] text-[10px] font-black uppercase tracking-[0.4em]">Program Impact</div>
               <div className="space-y-12">
                  <div className="flex items-center gap-8">
                     <div className="text-7xl serif font-bold text-white leading-none">127</div>
                     <div className="text-[10px] uppercase font-black text-white/40 tracking-widest leading-relaxed">Organizations <br /> Transformed</div>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="text-7xl serif font-bold text-white leading-none">89%</div>
                     <div className="text-[10px] uppercase font-black text-white/40 tracking-widest leading-relaxed">Promoted Within <br /> 12 Months</div>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="text-7xl serif font-bold text-[#C9A962] leading-none">4.9</div>
                     <div className="text-[10px] uppercase font-black text-white/40 tracking-widest leading-relaxed">Graduate <br /> Satisfaction</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. OVERVIEW & VALUE PROP (Stone / Pure Black) */}
      <section className="py-40 bg-[#FAFAF9]">
        <div className="max-w-4xl mx-auto px-6 space-y-24 text-center">
          <div className="space-y-10">
             <div className="flex items-center justify-center gap-4 text-[#C9A962]">
                <div className="h-[1px] w-12 bg-current opacity-30" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em]">The Leadership Challenge</span>
                <div className="h-[1px] w-12 bg-current opacity-30" />
             </div>
             <h2 className="text-5xl lg:text-6xl serif text-[#050505] leading-tight font-bold">Bridging the Capability Gap</h2>
             <p className="text-xl lg:text-2xl text-slate-900 font-light leading-relaxed serif italic">
                "In today's rapidly evolving business environment, 70% of organizational change initiatives fail—not due to poor strategy, but because of inadequate leadership during transformation."
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 text-left border-t border-[#050505]/10 pt-20">
             <div className="space-y-6">
                <h3 className="text-2xl serif font-bold text-[#050505]">Our Institutional Approach</h3>
                <p className="text-lg text-slate-700 leading-relaxed font-medium">
                   This intensive program combines proven change management methodologies with real-world case studies from African and global contexts. Unlike theoretical seminars, we focus on practical tools you'll use immediately.
                </p>
             </div>
             <div className="space-y-6 bg-white p-8 border border-slate-100 shadow-sm">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C9A962]">Pedagogical Pillars</h4>
                <ul className="space-y-4">
                   {['Case-Based Leadership Simulation', 'Strategic Resilience Frameworks', 'Stakeholder Logic Models', 'Sustainable Implementation Pathways'].map(item => (
                     <li key={item} className="flex items-start gap-3 text-sm font-bold text-[#050505]">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A962] mt-0.5" /> {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* 4. LEARNING OUTCOMES (High Contrast Grid) */}
      <section className="py-40 bg-[#050505] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="text-center mb-24 space-y-4">
              <h2 className="text-5xl lg:text-7xl serif text-white">What You'll Master</h2>
              <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Transforming Practice into Proficiency</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {course.outcomes.map((out, i) => (
                <div key={i} className="group p-12 bg-[#0A1628] border border-white/5 brochure-shadow hover:border-[#C9A962]/50 transition-all flex flex-col justify-between h-[420px]">
                   <div className="space-y-8">
                      <div className="flex items-center justify-between">
                         <div className="p-4 bg-white/5 text-[#C9A962] group-hover:scale-110 transition-transform">
                            {i % 2 === 0 ? <Shield className="w-8 h-8" /> : <Target className="w-8 h-8" />}
                         </div>
                         <div className="text-5xl font-black text-white/5 serif">0{i+1}</div>
                      </div>
                      <h3 className="text-2xl serif font-bold text-white leading-tight">{out.title}</h3>
                      <p className="text-sm text-white/40 leading-relaxed font-light">{out.desc}</p>
                   </div>
                   <div className="w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-[#C9A962] transition-all duration-700" />
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 5. CURRICULUM TIMELINE (Light Stone) */}
      <section className="py-40 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-32 text-center space-y-4">
             <h2 className="text-5xl lg:text-6xl serif text-[#050505] font-bold">5-Day Intensive Journey</h2>
             <div className="w-24 h-1 bg-[#C9A962] mx-auto" />
          </div>

          <div className="relative space-y-24">
             {/* The Vertical Line */}
             <div className="absolute left-[39px] top-4 bottom-4 w-1 bg-[#050505]/5 hidden sm:block" />

             {course.curriculum.map((day, i) => (
               <div key={i} className="relative pl-0 sm:pl-32 group">
                  {/* Day Marker */}
                  <div className="absolute left-0 top-0 w-20 h-20 bg-[#050505] text-[#C9A962] flex flex-col items-center justify-center rounded-full brochure-shadow border-4 border-[#FAFAF9] z-10 hidden sm:flex">
                     <span className="text-[8px] font-black uppercase tracking-widest leading-none mb-1">Day</span>
                     <span className="text-3xl font-black serif leading-none">0{i+1}</span>
                  </div>

                  <div className="bg-white p-12 border border-slate-100 brochure-shadow hover:border-[#C9A962] transition-all">
                     <div className="mb-10 space-y-4">
                        <h3 className="text-3xl serif font-bold text-[#050505] leading-tight">{day.title}</h3>
                        <p className="text-lg text-slate-500 font-light italic serif leading-relaxed">"{day.overview}"</p>
                     </div>
                     
                     <div className="space-y-6 border-t border-slate-50 pt-8">
                        <div className="grid md:grid-cols-2 gap-8">
                           {day.topics.map((topic, j) => (
                             <div key={j} className="flex items-center gap-4 group/item">
                                <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full group-hover/item:scale-150 transition-all" />
                                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest">{topic}</span>
                             </div>
                           ))}
                        </div>
                     </div>

                     <div className="mt-12 flex items-center justify-between text-slate-400">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                           <Clock className="w-4 h-4 text-[#C9A962]" /> 9:00 AM - 5:30 PM
                        </div>
                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#C9A962] transition-colors">
                           Detailed Session Brief <ChevronRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-24 text-center">
             <button className="px-12 py-5 border-2 border-[#050505] text-[#050505] font-black uppercase tracking-widest text-xs hover:bg-[#050505] hover:text-white transition-all flex items-center justify-center gap-3 mx-auto">
                <Download className="w-5 h-5" /> Download Full Syllabus PDF
             </button>
          </div>
        </div>
      </section>

      {/* 6. WHO SHOULD ATTEND (Split Tiers) */}
      <section className="py-40 bg-[#050505] text-white relative overflow-hidden border-y border-white/5">
         <div className="absolute inset-0 noise-bg opacity-[0.1]" />
         <div className="max-w-[1400px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
               <div className="space-y-4">
                  <h2 className="text-5xl lg:text-7xl serif leading-tight">Who Will Benefit Most</h2>
                  <div className="w-24 h-1 bg-[#C9A962]" />
               </div>
               <div className="space-y-6">
                  {course.audience.map((aud, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                       <div className="w-12 h-12 rounded-full border border-[#C9A962] flex items-center justify-center flex-none mt-1 group-hover:bg-[#C9A962] group-hover:text-[#050505] transition-all">
                          <CheckCircle2 className="w-6 h-6" />
                       </div>
                       <div>
                          <p className="text-xl font-bold serif group-hover:text-[#C9A962] transition-all">{aud.role}</p>
                          <p className="text-sm text-white/40 leading-relaxed font-light mt-1">{aud.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="space-y-12">
               <div className="bg-[#C9A962] p-12 brochure-shadow text-[#050505] space-y-10">
                  <h3 className="text-3xl serif font-bold border-b border-[#050505]/20 pb-6 uppercase tracking-tight">Institutional Prerequisites</h3>
                  <div className="space-y-8">
                     <p className="text-lg font-medium">To maximize institutional impact, candidates should ideally meet the following criteria:</p>
                     <ul className="space-y-6">
                        {course.prerequisites.map((prereq, i) => (
                          <li key={i} className="flex items-start gap-4">
                             <div className="w-2 h-2 bg-[#050505] rounded-full mt-2 flex-none" />
                             <span className="text-lg font-bold">{prereq}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
                  <button className="w-full py-5 bg-[#050505] text-[#C9A962] font-black uppercase text-xs tracking-widest hover:brightness-125 transition-all">Verify My Eligibility</button>
               </div>
               
               <div className="p-10 border border-white/10 bg-[#0A1628] flex gap-8 items-center italic serif text-2xl font-light leading-relaxed">
                  <div className="text-6xl text-[#C9A962] opacity-30">“</div>
                  <p className="text-white/80">"I left with a clear roadmap, proven frameworks, and the confidence to lead our transformation. Within 6 months, we achieved what seemed impossible."</p>
               </div>
            </div>
         </div>
      </section>

      {/* 7. FACULTY & LOGISTICS (Stone / Pure Black Text) */}
      <section className="py-40 bg-[#FAFAF9]">
         <div className="max-w-[1400px] mx-auto px-6 space-y-40">
            {/* Faculty */}
            <div className="space-y-24">
               <div className="text-center space-y-4">
                  <h2 className="text-5xl lg:text-7xl serif text-[#050505] font-bold">World-Class Faculty</h2>
                  <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Expert Practitioners & Academic Scholars</p>
               </div>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {facilitators.map(f => (
                    <div key={f.id} className="bg-white p-12 border border-slate-100 brochure-shadow text-center space-y-8 group hover:border-[#C9A962] transition-all">
                       <div className="relative w-40 h-40 mx-auto">
                          <img src={f.image} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border-4 border-[#C9A962]/10" />
                          <div className="absolute -bottom-2 -right-2 p-3 bg-[#C9A962] rounded-full text-[#050505] brochure-shadow"><Award className="w-6 h-6" /></div>
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-3xl serif font-bold text-[#050505]">{f.name}</h3>
                          <p className="text-[#C9A962] text-xs uppercase font-black tracking-widest">{f.title}</p>
                          <p className="text-[10px] uppercase font-black text-slate-400">{f.organization}</p>
                       </div>
                       <p className="text-sm text-slate-900 font-medium italic leading-relaxed line-clamp-4">"{f.bio}"</p>
                       <div className="pt-6 flex flex-wrap justify-center gap-2">
                          {f.credentials.map(c => <span key={c} className="px-3 py-1 bg-slate-50 text-[9px] font-black uppercase tracking-widest text-slate-400 border border-slate-100">{c}</span>)}
                       </div>
                       <button className="text-[10px] font-black uppercase tracking-widest text-[#050505] border-b-2 border-slate-200 pb-1 hover:border-[#C9A962] transition-all">View Full Dossier</button>
                    </div>
                  ))}
               </div>
            </div>

            {/* Logistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { icon: <Clock />, label: 'DURATION', val: '5 Full Days intensive training.' },
                 { icon: <MapPin />, label: 'VENUE', val: course.venueAddress },
                 { icon: <Users />, label: 'CLASS SIZE', val: 'Strictly limited to 25 leaders.' },
                 { icon: <Globe />, label: 'FORMAT', val: course.format + ' Interactive sessions.' },
                 { icon: <Gift />, label: 'MATERIALS', val: 'Premium executive toolkits & kit.' },
                 { icon: <CheckCircle2 />, label: 'CERTIFICATE', val: 'Professional certification provided.' },
                 { icon: <MessageSquare />, label: 'FOLLOW-UP', val: '3-month post-program coaching.' },
                 { icon: <Shield />, label: 'ACCREDITATION', val: 'Institutional validation included.' }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-white border border-slate-100 brochure-shadow hover:-translate-y-2 transition-all group">
                    <div className="text-[#C9A962] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</h4>
                    <p className="text-sm font-bold text-[#050505] leading-relaxed">{item.val}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. CERTIFICATION (Midnight/Gold) */}
      <section className="py-40 bg-[#0A1628] text-white overflow-hidden relative">
         <div className="absolute inset-0 noise-bg opacity-[0.1]" />
         <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12 relative z-10">
               <div className="space-y-4">
                  <h2 className="text-5xl lg:text-7xl serif leading-tight">Professional Certification</h2>
                  <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Your Institutional Credential</p>
               </div>
               <p className="text-xl text-white/60 font-light leading-relaxed serif italic">
                  Upon successful completion of this intensive program, you will receive a frame-worthy credential recognized across Africa.
               </p>
               <div className="grid gap-6">
                  {[
                    'LeadBold Professional Certificate in Strategic Leadership',
                    'National Open University of Nigeria (NOUN) Accreditation',
                    '40 CPD Hours validated continuing education credits',
                    'Lifetime access to the global LeadBold Alumni Network'
                  ].map(item => (
                    <div key={item} className="flex gap-4 items-center p-6 bg-white/5 border border-white/5 hover:border-[#C9A962]/30 transition-all">
                       <div className="w-8 h-8 rounded-full border border-[#C9A962] flex items-center justify-center flex-none"><CheckCircle2 className="w-4 h-4 text-[#C9A962]" /></div>
                       <span className="text-lg font-bold">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative z-10 group">
               <div className="aspect-[4/3] bg-white p-12 brochure-shadow transform group-hover:rotate-1 transition-transform duration-700">
                  <div className="w-full h-full border-[10px] border-[#0A1628]/5 p-8 flex flex-col justify-between items-center text-center text-[#0A1628]">
                     <div className="w-16 h-16 border-2 border-[#C9A962] flex items-center justify-center font-bold text-2xl serif">LB</div>
                     <div className="space-y-4">
                        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C9A962]">Certificate of Excellence</div>
                        <h4 className="text-4xl serif font-bold tracking-tight">Institutional Leadership</h4>
                        <div className="h-[1px] w-24 bg-[#0A1628]/20 mx-auto" />
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic">CONFERRED TO THE BEARER FOR ACADEMIC MERIT</p>
                     </div>
                     <div className="flex justify-between w-full pt-10 border-t border-[#0A1628]/10">
                        <div className="w-20 h-1 bg-[#0A1628]/10" />
                        <div className="w-20 h-1 bg-[#0A1628]/10" />
                     </div>
                  </div>
               </div>
               <div className="absolute -bottom-10 -right-10 bg-[#C9A962] text-[#050505] p-10 brochure-shadow max-w-xs space-y-4">
                  <h5 className="font-black uppercase tracking-widest text-[10px]">Post-Program Support</h5>
                  <p className="text-sm font-bold leading-relaxed">Your learning doesn't end on Day 5. Every graduate receives a 3-month follow-up coaching session.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 9. PRICING & INVESTMENT (High Contrast) */}
      <section className="py-40 bg-[#FAFAF9]">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
               <h2 className="text-5xl lg:text-7xl serif text-[#050505] font-bold">Program Investment</h2>
               <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Transparency in Professional Development</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
               {/* Main Pricing Card */}
               <div className="lg:col-span-8 bg-[#050505] text-white p-16 brochure-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A962]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="grid md:grid-cols-2 gap-20 relative z-10">
                     <div className="space-y-10">
                        <div className="space-y-6">
                           <div className="inline-block px-4 py-1 border border-[#C9A962] text-[#C9A962] text-[9px] font-black uppercase tracking-widest rounded-full">Early Bird Open</div>
                           <div className="space-y-1">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Standard Rate</h4>
                              <div className="text-6xl font-black text-white serif">{course.price}</div>
                              <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">PER PARTICIPANT • EXCL. VAT</p>
                           </div>
                        </div>
                        <div className="space-y-6 bg-[#C9A962]/5 p-8 border border-[#C9A962]/20">
                           <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A962]">Early Bird Advantage</div>
                           <div className="text-5xl font-black text-[#C9A962] serif">{course.earlyBirdPrice || 'Save 15%'}</div>
                           <p className="text-[9px] font-bold text-[#C9A962]/60 uppercase tracking-widest">ENDS 30 DAYS PRIOR TO COMMENCEMENT</p>
                        </div>
                     </div>

                     <div className="space-y-10">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 border-b border-white/10 pb-4">Institutional Deliverables</h4>
                        <div className="grid gap-6">
                           {[
                             '5-day residential intensive training',
                             'Comprehensive workbook & digital toolkit',
                             'Executive lunch and refreshments daily',
                             'Professional certification and CPD hours',
                             '3-month post-program coaching cycle'
                           ].map(item => (
                             <div key={item} className="flex gap-4 text-xs font-bold leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-[#C9A962] flex-none" />
                                <span>{item}</span>
                             </div>
                           ))}
                        </div>
                        <button onClick={onEnroll} className="w-full py-6 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.3em] text-xs hover:scale-105 transition-all brochure-shadow">Register Interest Now</button>
                     </div>
                  </div>
               </div>

               {/* Secondary Options */}
               <div className="lg:col-span-4 space-y-8">
                  <div className="bg-white p-10 border border-slate-100 brochure-shadow group hover:border-[#C9A962] transition-all">
                     <div className="flex items-center gap-4 mb-6">
                        <Users className="w-8 h-8 text-[#C9A962]" />
                        <h4 className="text-lg font-black uppercase tracking-tighter text-[#050505]">Group Discounts</h4>
                     </div>
                     <p className="text-sm text-slate-500 font-medium mb-6">Save 20% when registering 5 or more participants from the same organization.</p>
                     <button className="text-[10px] font-black uppercase tracking-widest text-[#050505] border-b-2 border-slate-100 pb-1 hover:border-[#C9A962] transition-all">Request Group Quote</button>
                  </div>
                  <div className="bg-[#0A1628] p-10 brochure-shadow text-white border border-white/5">
                     <div className="flex items-center gap-4 mb-6">
                        <Shield className="w-8 h-8 text-[#C9A962]" />
                        <h4 className="text-lg font-black uppercase tracking-tighter">Organizational Billing</h4>
                     </div>
                     <p className="text-sm text-white/40 font-light mb-6">We provide full invoicing and organizational payment support for governments and NGOs.</p>
                     <button className="text-[10px] font-black uppercase tracking-widest text-[#C9A962] border-b-2 border-white/10 pb-1 hover:border-[#C9A962] transition-all">Setup Corporate Billing</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. FAQ SECTION (Accordion) */}
      <section className="py-40 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24 space-y-4">
               <h2 className="text-5xl lg:text-6xl serif text-[#050505] font-bold">Frequently Asked Questions</h2>
               <p className="text-[#C9A962] uppercase tracking-[0.4em] text-xs font-black">Answers to Your Institutional Inquiries</p>
            </div>

            <div className="space-y-6">
               {(course.faqs || [
                 { question: "What are the exact prerequisites for this program?", answer: "Candidates should hold a senior leadership position with at least 5 years of experience. A commitment to attend the full 5-day duration is mandatory for certification." },
                 { question: "Is accommodation included in the tuition fee?", answer: "Tuition includes all training materials, executive lunches, and refreshments. Accommodation is not included, but we offer special rates at our partner hotels." },
                 { question: "Can the program be delivered on-site for our organization?", answer: "Yes, LeadBold provides organizational packages where we tailor the curriculum to your specific challenges and deliver it at your chosen venue." },
                 { question: "How is the certification recognized?", answer: "Our certification is accredited by the National Open University of Nigeria (NOUN) and validates 40 CPD hours for professional development." }
               ]).map((faq, i) => (
                 <div key={i} className="bg-[#FAFAF9] border border-slate-100 group transition-all">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-8 flex items-center justify-between text-left"
                    >
                       <span className={`text-xl font-bold serif transition-colors ${openFaq === i ? 'text-[#C9A962]' : 'text-[#050505]'}`}>{faq.question}</span>
                       <ChevronDown className={`w-6 h-6 text-[#C9A962] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[300px] p-8 pt-0' : 'max-h-0'}`}>
                       <div className="h-[1px] bg-slate-100 w-full mb-8" />
                       <p className="text-lg text-slate-600 font-light leading-relaxed serif italic">"{faq.answer}"</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 11. FINAL CTA (Urgent Midnight) */}
      <section className="py-48 bg-[#050505] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 noise-bg opacity-[0.1]" />
        <div className="max-w-[1400px] mx-auto px-6 space-y-12 relative z-10">
          <div className="inline-block px-6 py-2 border border-[#C9A962]/30 text-[#C9A962] text-xs font-black uppercase tracking-[0.4em]">
             ⚠️ NEXT SESSION STARTING SOON • 8 SPOTS REMAINING
          </div>
          <h2 className="text-6xl md:text-9xl serif leading-[1.0] font-bold">Ready to <span className="text-[#C9A962]">Transform</span> Your Leadership?</h2>
          <p className="text-white/60 text-xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed serif italic">"Join our next cohort and build the foundations for institutional excellence."</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 pt-16 border-t border-white/5 max-w-4xl mx-auto">
            <div className="text-left space-y-2 hidden lg:block">
               <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A962]">Next Intake</div>
               <div className="text-2xl font-bold serif">{course.nextSession}</div>
               <div className="text-[9px] font-black text-white/20 uppercase tracking-widest">VICTORIA ISLAND, LAGOS</div>
            </div>
            <div className="hidden lg:block h-12 w-[1px] bg-white/10" />
            <button onClick={onEnroll} className="px-16 py-7 bg-[#C9A962] text-[#050505] font-black uppercase tracking-[0.2em] text-sm brochure-shadow hover:scale-110 transition-all">Enroll in Program — {course.price}</button>
            <button className="px-16 py-7 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all">Talk to Advisor</button>
          </div>

          <div className="pt-24 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             {['✓ Satisfaction guaranteed', '✓ Secure institutional payment', '✓ 1,200+ global graduates', '✓ NOUN accredited'].map(indicator => (
               <span key={indicator} className="text-[11px] font-black uppercase tracking-widest">{indicator}</span>
             ))}
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

export default CourseSinglePage;
