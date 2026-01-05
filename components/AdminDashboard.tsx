
import React, { useState, useMemo } from 'react';
import { 
  LayoutDashboard, BookOpen, Users, Settings, LogOut, Plus, 
  Search, Filter, Edit2, Trash2, Eye, ChevronRight, X,
  Save, Layout, MessageSquare, Zap, Clock, Globe, Briefcase, 
  CreditCard, MapPin, Award, Target, UserPlus, HelpCircle, BarChart3, TrendingUp, 
  UserCheck, Shield, FileText, Download, Trash, CheckCircle2, AlertCircle, Mail, Phone, ExternalLink, Presentation, Book, Image as ImageIcon, PlusCircle, ListChecks, GraduationCap
} from 'lucide-react';
import { DetailedCourse, CurriculumModule, FAQItem } from '@/constants';
import { Summit, Article, AgendaSession, Personnel } from '../types';

interface AdminDashboardProps {
  courses: DetailedCourse[];
  summits: Summit[];
  insights: Article[];
  personnel: Personnel[];
  onExit: () => void;
  onUpdateCourse: (course: DetailedCourse) => void;
  onAddCourse: (course: DetailedCourse) => void;
  onDeleteCourse: (id: string) => void;
  onUpdateSummit: (summit: Summit) => void;
  onAddSummit: (summit: Summit) => void;
  onDeleteSummit: (id: string) => void;
  onUpdateInsight: (insight: Article) => void;
  onAddInsight: (insight: Article) => void;
  onDeleteInsight: (id: string) => void;
  onUpdatePersonnel: (p: Personnel) => void;
  onAddPersonnel: (p: Personnel) => void;
  onDeletePersonnel: (id: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  courses, summits, insights, personnel, onExit, 
  onUpdateCourse, onAddCourse, onDeleteCourse,
  onUpdateSummit, onAddSummit, onDeleteSummit,
  onUpdateInsight, onAddInsight, onDeleteInsight,
  onUpdatePersonnel, onAddPersonnel, onDeletePersonnel
}) => {
  const [activeTab, setActiveTab] = useState<'programs' | 'summits' | 'personnel' | 'users'>('programs');
  
  // Editors State
  const [editingCourse, setEditingCourse] = useState<DetailedCourse | null>(null);
  const [editingSummit, setEditingSummit] = useState<Summit | null>(null);
  const [editingPerson, setEditingPerson] = useState<Personnel | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editorType, setEditorType] = useState<'course' | 'summit' | 'personnel' | null>(null);
  
  // Personnel Picker State
  const [isPersonnelPickerOpen, setIsPersonnelPickerOpen] = useState(false);
  const [pickerTarget, setPickerTarget] = useState<{ type: 'course-fac' | 'summit-spk' | 'agenda-spk', day?: 'day1' | 'day2', sessionIdx?: number } | null>(null);

  const [activeAgendaDay, setActiveAgendaDay] = useState<'day1' | 'day2'>('day1');

  // --- HANDLERS ---

  const handleEditCourse = (course: DetailedCourse) => {
    setEditingCourse(JSON.parse(JSON.stringify(course))); 
    setEditorType('course');
    setIsEditorOpen(true);
  };

  const handleEditSummit = (summit: Summit) => {
    setEditingSummit(JSON.parse(JSON.stringify(summit)));
    setEditorType('summit');
    setIsEditorOpen(true);
  };

  const handleEditPersonnel = (p: Personnel) => {
    setEditingPerson(JSON.parse(JSON.stringify(p)));
    setEditorType('personnel');
    setIsEditorOpen(true);
  };

  const handleCreateNew = () => {
    if (activeTab === 'programs') {
      const newCourse: DetailedCourse = {
        id: `c-${Date.now()}`,
        title: 'New Program',
        subtitle: '',
        category: 'Leadership',
        duration: '5 Days',
        level: 'Executive',
        location: 'Local',
        venueAddress: 'LeadBold Campus',
        format: 'In-person',
        description: '',
        longDescription: '',
        outcomes: [],
        nextSession: 'TBD 2026',
        price: '₦0',
        audience: [],
        prerequisites: [],
        curriculum: [],
        facilitatorIds: [],
        faqs: [],
        impactStats: []
      };
      setEditingCourse(newCourse);
      setEditorType('course');
    } else if (activeTab === 'summits') {
      const newSummit: Summit = {
        id: `s-${Date.now()}`,
        shortName: 'NEW',
        title: 'New Summit',
        date: 'TBD',
        isoDate: '2026-01-01',
        location: 'TBD',
        venue: 'TBD',
        theme: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1540575861501-7c90b707a27d',
        capacity: '0 Leaders',
        attendees: '0 Expected',
        speakerIds: [],
        price: '₦0',
        status: 'Soon',
        whoShouldAttend: [],
        outcomes: [],
        agenda: { day1: [], day2: [] }
      };
      setEditingSummit(newSummit);
      setEditorType('summit');
    } else if (activeTab === 'personnel') {
      const newP: Personnel = {
        id: `p-${Date.now()}`,
        name: 'New Person',
        title: 'Expert',
        image: 'https://i.pravatar.cc/300',
        bio: '',
        credentials: [],
        category: 'Faculty'
      };
      setEditingPerson(newP);
      setEditorType('personnel');
    }
    setIsEditorOpen(true);
  };

  const saveContent = () => {
    if (editorType === 'course' && editingCourse) {
      const exists = courses.find(c => c.id === editingCourse.id);
      if (exists) onUpdateCourse(editingCourse); else onAddCourse(editingCourse);
    } else if (editorType === 'summit' && editingSummit) {
      const exists = summits.find(s => s.id === editingSummit.id);
      if (exists) onUpdateSummit(editingSummit); else onAddSummit(editingSummit);
    } else if (editorType === 'personnel' && editingPerson) {
      const exists = personnel.find(p => p.id === editingPerson.id);
      if (exists) onUpdatePersonnel(editingPerson); else onAddPersonnel(editingPerson);
    }
    setIsEditorOpen(false);
  };

  const handlePickPersonnel = (pId: string) => {
    if (!pickerTarget) return;

    if (pickerTarget.type === 'course-fac' && editingCourse) {
      if (!editingCourse.facilitatorIds.includes(pId)) {
        setEditingCourse({ ...editingCourse, facilitatorIds: [...editingCourse.facilitatorIds, pId] });
      }
    } else if (pickerTarget.type === 'summit-spk' && editingSummit) {
      if (!editingSummit.speakerIds.includes(pId)) {
        setEditingSummit({ ...editingSummit, speakerIds: [...editingSummit.speakerIds, pId] });
      }
    } else if (pickerTarget.type === 'agenda-spk' && editingSummit && pickerTarget.day && pickerTarget.sessionIdx !== undefined) {
      const updated = { ...editingSummit.agenda };
      updated[pickerTarget.day][pickerTarget.sessionIdx].personnelId = pId;
      setEditingSummit({ ...editingSummit, agenda: updated });
    }
    setIsPersonnelPickerOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] flex font-sans">
      <aside className="w-72 bg-[#050505] text-white flex flex-col fixed h-full z-50">
        <div className="p-8 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] serif">LB</div>
          <span className="text-xl serif font-bold tracking-tight">LeadBold Admin</span>
        </div>
        <nav className="flex-1 p-6 space-y-2">
          <button onClick={() => setActiveTab('programs')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm uppercase tracking-widest font-bold transition-all ${activeTab === 'programs' ? 'bg-[#D4AF37] text-[#050505]' : 'text-white/40 hover:bg-white/5'}`}><GraduationCap className="w-4 h-4" /> Academy Hub</button>
          <button onClick={() => setActiveTab('summits')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm uppercase tracking-widest font-bold transition-all ${activeTab === 'summits' ? 'bg-[#D4AF37] text-[#050505]' : 'text-white/40 hover:bg-white/5'}`}><Presentation className="w-4 h-4" /> Summit Hub</button>
          <button onClick={() => setActiveTab('personnel')} className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm uppercase tracking-widest font-bold transition-all ${activeTab === 'personnel' ? 'bg-[#D4AF37] text-[#050505]' : 'text-white/40 hover:bg-white/5'}`}><UserCheck className="w-4 h-4" /> Personnel Dir.</button>
        </nav>
        <div className="p-6 border-t border-white/5">
          <button onClick={onExit} className="w-full flex items-center gap-4 px-6 py-4 rounded-sm text-sm uppercase tracking-widest font-bold text-white/40 hover:text-white transition-all"><LogOut className="w-4 h-4" /> Exit</button>
        </div>
      </aside>

      <main className="flex-1 ml-72 p-12 overflow-y-auto h-screen">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl serif text-[#050505] uppercase tracking-tighter">
              {activeTab === 'programs' ? `Academic Portfolio (${courses.length})` : activeTab === 'summits' ? `Summit Hub (${summits.length})` : 'Institutional Directory'}
            </h1>
            <p className="text-slate-400 text-[10px] uppercase tracking-widest font-black">Manage Core LeadBold Assets</p>
          </div>
          <button onClick={handleCreateNew} className="bg-[#050505] text-white px-8 py-4 text-[10px] uppercase tracking-widest font-black flex items-center gap-2 hover:bg-[#D4AF37] hover:text-[#050505] transition-all brochure-shadow"><Plus className="w-4 h-4" /> Create New</button>
        </header>

        {/* --- LIST VIEWS --- */}
        <div className="grid gap-4">
          {activeTab === 'programs' && courses.map(c => (
            <div key={c.id} className="bg-white border border-[#E5E5E3] p-6 flex items-center justify-between brochure-shadow group">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#D4AF37]"><GraduationCap /></div>
                 <div><h3 className="font-bold text-[#050505] group-hover:text-[#D4AF37] transition-colors">{c.title}</h3><p className="text-[9px] uppercase tracking-widest text-slate-400">{c.category} • {c.level} Tier • {c.price}</p></div>
               </div>
               <div className="flex gap-2">
                 <button onClick={() => handleEditCourse(c)} className="p-3 hover:bg-[#D4AF37]/10 text-slate-400 hover:text-[#D4AF37] transition-all"><Edit2 className="w-4 h-4" /></button>
                 <button onClick={() => onDeleteCourse(c.id)} className="p-3 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
               </div>
            </div>
          ))}

          {activeTab === 'summits' && summits.map(s => (
            <div key={s.id} className="bg-white border border-[#E5E5E3] p-6 flex items-center justify-between brochure-shadow group">
               <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-slate-50 flex items-center justify-center text-[#D4AF37]"><Presentation /></div>
                 <div><h3 className="font-bold text-[#050505] group-hover:text-[#D4AF37] transition-colors">{s.shortName} • {s.title}</h3><p className="text-[9px] uppercase tracking-widest text-slate-400">{s.location} • {s.date}</p></div>
               </div>
               <div className="flex gap-2">
                 <button onClick={() => handleEditSummit(s)} className="p-3 hover:bg-[#D4AF37]/10 text-slate-400 hover:text-[#D4AF37] transition-all"><Edit2 className="w-4 h-4" /></button>
                 <button onClick={() => onDeleteSummit(s.id)} className="p-3 hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4" /></button>
               </div>
            </div>
          ))}

          {activeTab === 'personnel' && (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {personnel.map(p => (
                <div key={p.id} className="bg-white border border-[#E5E5E3] p-6 flex items-center gap-4 brochure-shadow">
                  <img src={p.image} className="w-14 h-14 rounded-full grayscale object-cover" />
                  <div className="flex-1"><h4 className="font-bold text-[#050505]">{p.name}</h4><p className="text-[9px] uppercase tracking-widest text-slate-400">{p.title}</p></div>
                  <button onClick={() => handleEditPersonnel(p)} className="p-2 text-slate-200 hover:text-[#D4AF37] transition-all"><Edit2 className="w-4 h-4" /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* --- CONTENT ARCHITECT (RESTORED POWER EDITOR) --- */}
      {isEditorOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-end">
           <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-md" onClick={() => setIsEditorOpen(false)} />
           <div className="relative bg-[#F2F2F0] w-full max-w-6xl h-full shadow-2xl animate-fade-in-right flex flex-col">
              <header className="p-8 border-b border-[#E5E5E3] bg-[#FAFAF9] flex items-center justify-between sticky top-0 z-20">
                <div>
                  <h3 className="text-2xl serif text-[#050505] uppercase tracking-tighter">Architect Portal</h3>
                  <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Institutional Repository Deployment</p>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => setIsEditorOpen(false)} className="px-6 py-3 border border-slate-300 bg-white text-slate-500 text-[10px] uppercase font-bold tracking-widest">Discard</button>
                  <button onClick={saveContent} className="px-10 py-3 bg-[#D4AF37] text-[#050505] text-[10px] uppercase font-black tracking-widest brochure-shadow flex items-center gap-2"><Save className="w-4 h-4" /> Commit Changes</button>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-12 space-y-12 pb-32">
                
                {/* --- ACADEMY EDITOR (RESTORED MULTI-FIELD) --- */}
                {editorType === 'course' && editingCourse && (
                  <div className="space-y-12">
                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-8">
                       <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border-b pb-4"><Layout className="w-4 h-4" /> Institutional Metadata</div>
                       <div className="grid grid-cols-2 gap-8">
                          <div className="col-span-2 space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Program Title</label><input value={editingCourse.title} onChange={e => setEditingCourse({...editingCourse, title: e.target.value})} className="w-full border-b py-3 text-xl serif focus:border-[#D4AF37] outline-none" /></div>
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Course Category</label><select value={editingCourse.category} onChange={e => setEditingCourse({...editingCourse, category: e.target.value as any})} className="w-full border-b py-3 text-xs outline-none"><option>Leadership</option><option>Strategy</option><option>Governance</option><option>Finance</option><option>Management</option><option>HR</option><option>Communication</option><option>Specialized</option></select></div>
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Academic Level</label><select value={editingCourse.level} onChange={e => setEditingCourse({...editingCourse, level: e.target.value as any})} className="w-full border-b py-3 text-xs outline-none"><option>Executive</option><option>Professional</option><option>Foundational</option></select></div>
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Fee/Tuition</label><input value={editingCourse.price} onChange={e => setEditingCourse({...editingCourse, price: e.target.value})} className="w-full border-b py-3 text-sm font-bold outline-none" /></div>
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Venues/Locations</label><input value={editingCourse.venueAddress} onChange={e => setEditingCourse({...editingCourse, venueAddress: e.target.value})} className="w-full border-b py-3 text-sm outline-none" /></div>
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Upcoming Dates</label><input value={editingCourse.nextSession} onChange={e => setEditingCourse({...editingCourse, nextSession: e.target.value})} className="w-full border-b py-3 text-sm outline-none" /></div>
                       </div>
                    </section>

                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-6">
                       <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"><UserCheck className="w-4 h-4" /> Faculty Directory Links</div>
                          <button onClick={() => { setPickerTarget({ type: 'course-fac' }); setIsPersonnelPickerOpen(true); }} className="text-[9px] font-black uppercase bg-[#050505] text-white px-4 py-2">+ Add from Directory</button>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          {editingCourse.facilitatorIds.map(fid => {
                             const p = personnel.find(px => px.id === fid);
                             return p ? (
                               <div key={fid} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 group">
                                  <div className="flex items-center gap-3"><img src={p.image} className="w-10 h-10 rounded-full grayscale" /><div><p className="text-xs font-bold">{p.name}</p><p className="text-[8px] uppercase text-slate-400">{p.title}</p></div></div>
                                  <button onClick={() => setEditingCourse({...editingCourse, facilitatorIds: editingCourse.facilitatorIds.filter(id => id !== fid)})}><X className="w-4 h-4 text-red-300 opacity-0 group-hover:opacity-100" /></button>
                               </div>
                             ) : null;
                          })}
                       </div>
                    </section>

                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-6">
                       <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"><Zap className="w-4 h-4" /> Full Curriculum Modules</div>
                          <button onClick={() => setEditingCourse({...editingCourse, curriculum: [...editingCourse.curriculum, { title: 'New Module', overview: '', topics: [] }]})} className="text-[9px] font-black uppercase text-[#D4AF37] hover:underline">+ Add Slot</button>
                       </div>
                       <div className="space-y-6">
                          {editingCourse.curriculum.map((mod, i) => (
                             <div key={i} className="p-8 bg-slate-50 border border-slate-200 space-y-4 group relative">
                                <button onClick={() => setEditingCourse({...editingCourse, curriculum: editingCourse.curriculum.filter((_, idx) => idx !== i)})} className="absolute top-4 right-4 text-red-300 opacity-0 group-hover:opacity-100"><Trash2 className="w-4 h-4" /></button>
                                <input value={mod.title} onChange={e => { const upd = [...editingCourse.curriculum]; upd[i].title = e.target.value; setEditingCourse({...editingCourse, curriculum: upd}); }} className="bg-transparent font-bold text-lg serif border-b focus:border-[#D4AF37] outline-none w-full" placeholder="Module Title" />
                                <textarea value={mod.overview} onChange={e => { const upd = [...editingCourse.curriculum]; upd[i].overview = e.target.value; setEditingCourse({...editingCourse, curriculum: upd}); }} className="w-full p-4 text-sm bg-white border outline-none focus:border-[#D4AF37]" placeholder="Module Overview..." rows={2} />
                             </div>
                          ))}
                       </div>
                    </section>

                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-6">
                       <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"><Users className="w-4 h-4" /> Who Should Attend</div>
                          <button onClick={() => setEditingCourse({...editingCourse, audience: [...editingCourse.audience, { role: 'New Role', desc: '' }]})} className="text-[9px] font-black uppercase text-[#D4AF37] hover:underline">+ Add Entry</button>
                       </div>
                       <div className="space-y-4">
                          {editingCourse.audience.map((aud, i) => (
                             <div key={i} className="flex gap-4 p-4 bg-slate-50 border relative group">
                                <input value={aud.role} onChange={e => { const upd = [...editingCourse.audience]; upd[i].role = e.target.value; setEditingCourse({...editingCourse, audience: upd}); }} className="font-bold text-xs outline-none bg-transparent border-b w-1/3" placeholder="Target Role" />
                                <input value={aud.desc} onChange={e => { const upd = [...editingCourse.audience]; upd[i].desc = e.target.value; setEditingCourse({...editingCourse, audience: upd}); }} className="text-xs outline-none bg-transparent border-b flex-1" placeholder="Why this program?" />
                                <button onClick={() => setEditingCourse({...editingCourse, audience: editingCourse.audience.filter((_, idx) => idx !== i)})}><X className="text-red-300 opacity-0 group-hover:opacity-100" /></button>
                             </div>
                          ))}
                       </div>
                    </section>
                  </div>
                )}

                {/* --- SUMMIT EDITOR (RESTORED MULTI-FIELD) --- */}
                {editorType === 'summit' && editingSummit && (
                  <div className="space-y-12">
                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-8">
                       <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest border-b pb-4"><Presentation className="w-4 h-4" /> Convening Parameters</div>
                       <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                          <div className="space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Short Code</label><input value={editingSummit.shortName} onChange={e => setEditingSummit({...editingSummit, shortName: e.target.value})} className="w-full border-b py-3 text-sm font-bold outline-none" /></div>
                          <div className="col-span-2 space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Full Academic Title</label><input value={editingSummit.title} onChange={e => setEditingSummit({...editingSummit, title: e.target.value})} className="w-full border-b py-3 text-sm font-bold outline-none" /></div>
                          <div className="col-span-full space-y-2"><label className="text-[9px] uppercase font-bold text-slate-400">Strategic Theme</label><input value={editingSummit.theme} onChange={e => setEditingSummit({...editingSummit, theme: e.target.value})} className="w-full border-b py-3 text-lg serif italic text-[#D4AF37] outline-none" /></div>
                       </div>
                    </section>

                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-6">
                       <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"><Users className="w-4 h-4" /> High-Level Speaker Faculty</div>
                          <button onClick={() => { setPickerTarget({ type: 'summit-spk' }); setIsPersonnelPickerOpen(true); }} className="text-[10px] font-black uppercase bg-[#050505] text-white px-4 py-2 hover:bg-[#D4AF37] transition-all">+ Add Speaker</button>
                       </div>
                       <div className="grid grid-cols-3 gap-4">
                          {editingSummit.speakerIds.map(sid => {
                             const p = personnel.find(px => px.id === sid);
                             return p ? (
                               <div key={sid} className="flex flex-col items-center p-4 bg-slate-50 border border-slate-200 text-center relative group">
                                  <button onClick={() => setEditingSummit({...editingSummit, speakerIds: editingSummit.speakerIds.filter(id => id !== sid)})} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-3 h-3 text-red-300" /></button>
                                  <img src={p.image} className="w-12 h-12 rounded-full grayscale mb-2" />
                                  <p className="text-[10px] font-bold truncate w-full">{p.name}</p>
                               </div>
                             ) : null;
                          })}
                       </div>
                    </section>

                    <section className="bg-white p-10 border border-slate-200 brochure-shadow space-y-8">
                       <div className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-3 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest"><Clock className="w-4 h-4" /> Multi-Day Programme</div>
                          <div className="flex gap-2">
                             {['day1', 'day2'].map(d => (
                               <button key={d} onClick={() => setActiveAgendaDay(d as any)} className={`px-6 py-2 text-[9px] font-black uppercase border transition-all ${activeAgendaDay === d ? 'bg-[#050505] text-white' : 'bg-white text-slate-300 border-slate-200'}`}>{d}</button>
                             ))}
                          </div>
                       </div>
                       <div className="space-y-4">
                          {editingSummit.agenda[activeAgendaDay].map((sess, idx) => (
                             <div key={idx} className="p-6 bg-slate-50 border border-slate-200 space-y-4 relative group">
                                <div className="grid grid-cols-4 gap-6">
                                   <div className="space-y-1"><label className="text-[8px] uppercase font-black text-slate-300">Time</label><input value={sess.time} onChange={e => { const upd = {...editingSummit.agenda}; upd[activeAgendaDay][idx].time = e.target.value; setEditingSummit({...editingSummit, agenda: upd}); }} className="w-full bg-white border border-slate-100 px-2 py-1 text-xs outline-none" /></div>
                                   <div className="col-span-2 space-y-1"><label className="text-[8px] uppercase font-black text-slate-300">Session Title</label><input value={sess.title} onChange={e => { const upd = {...editingSummit.agenda}; upd[activeAgendaDay][idx].title = e.target.value; setEditingSummit({...editingSummit, agenda: upd}); }} className="w-full bg-white border border-slate-100 px-2 py-1 text-xs outline-none" /></div>
                                   <div className="space-y-1">
                                      <label className="text-[8px] uppercase font-black text-slate-300">Personnel Selection</label>
                                      {sess.personnelId ? (
                                        <div className="flex items-center gap-2 bg-white px-2 py-1 border h-8">
                                          <img src={personnel.find(px => px.id === sess.personnelId)?.image} className="w-5 h-5 rounded-full grayscale" />
                                          <span className="text-[9px] font-bold truncate max-w-[60px]">{personnel.find(px => px.id === sess.personnelId)?.name}</span>
                                          <button onClick={() => { const upd = {...editingSummit.agenda}; delete upd[activeAgendaDay][idx].personnelId; setEditingSummit({...editingSummit, agenda: upd}); }}><X className="w-2 h-2 text-red-300" /></button>
                                        </div>
                                      ) : (
                                        <button onClick={() => { setPickerTarget({ type: 'agenda-spk', day: activeAgendaDay, sessionIdx: idx }); setIsPersonnelPickerOpen(true); }} className="w-full bg-[#050505] text-[#D4AF37] text-[8px] uppercase font-black h-8">Link Faculty</button>
                                      )}
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </section>
                  </div>
                )}
              </div>
           </div>
        </div>
      )}

      {/* --- PERSONNEL PICKER MODAL --- */}
      {isPersonnelPickerOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-12 bg-[#050505]/80 backdrop-blur-md">
           <div className="bg-white w-full max-w-2xl h-[70vh] flex flex-col brochure-shadow animate-scale-up">
              <header className="p-6 border-b flex items-center justify-between bg-slate-50">
                 <div><h4 className="text-xl serif font-bold">Institutional Selection</h4><p className="text-[9px] uppercase tracking-widest font-black text-slate-400">Personnel Association Hub</p></div>
                 <button onClick={() => setIsPersonnelPickerOpen(false)} className="p-2 hover:bg-white rounded-full"><X /></button>
              </header>
              <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-[#FAFAF9]">
                 {personnel.map(p => (
                   <button key={p.id} onClick={() => handlePickPersonnel(p.id)} className="w-full flex items-center gap-4 p-4 hover:bg-white border border-transparent hover:border-[#D4AF37] transition-all text-left group brochure-shadow">
                      <img src={p.image} className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover" />
                      <div className="flex-1">
                         <div className="font-bold text-sm text-[#050505] group-hover:text-[#D4AF37]">{p.name}</div>
                         <div className="text-[9px] uppercase tracking-widest text-slate-400 font-black">{p.title} • {p.organization}</div>
                      </div>
                      <Plus className="w-5 h-5 text-slate-200 group-hover:text-[#D4AF37]" />
                   </button>
                 ))}
              </div>
           </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-right { animation: fade-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes scale-up { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-scale-up { animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
