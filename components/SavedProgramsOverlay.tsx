
import React from 'react';
import { X, Heart, ArrowRight, Trash2, GraduationCap } from 'lucide-react';
import { DetailedCourse } from '@/constants';

interface SavedProgramsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  savedCourses: DetailedCourse[];
  onRemove: (id: string) => void;
  onViewCourse: (course: DetailedCourse) => void;
}

const SavedProgramsOverlay: React.FC<SavedProgramsOverlayProps> = ({ 
  isOpen, onClose, savedCourses, onRemove, onViewCourse 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] bg-[#050505]/95 backdrop-blur-md animate-fade-in flex justify-end">
      <div className="absolute inset-0 noise-bg opacity-[0.05]" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#FAFAF9] h-full shadow-2xl animate-fade-in-right flex flex-col">
        <header className="p-8 border-b border-[#E5E5E3] bg-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-full text-[#D4AF37]">
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-2xl serif text-[#050505]">Saved Programs</h3>
              <p className="text-[10px] uppercase tracking-widest font-black text-slate-400">Your Institutional Portfolio ({savedCourses.length})</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {savedCourses.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-40">
              <GraduationCap className="w-16 h-16 stroke-1 text-slate-300" />
              <div className="space-y-2">
                <p className="serif text-xl">Your archive is empty</p>
                <p className="text-xs uppercase tracking-widest">Explore our programs to begin curation</p>
              </div>
            </div>
          ) : (
            savedCourses.map((course) => (
              <div key={course.id} className="group bg-white border border-[#E5E5E3] p-6 hover:border-[#D4AF37] transition-all brochure-shadow flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-widest font-black text-[#D4AF37] px-2 py-0.5 bg-[#D4AF37]/10 rounded">
                      {course.category}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest font-black text-slate-400">
                      {course.duration}
                    </span>
                  </div>
                  <h4 className="text-xl serif text-[#050505] group-hover:text-[#D4AF37] transition-colors">{course.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{course.description}</p>
                </div>
                
                <div className="flex md:flex-col justify-end gap-2">
                  <button 
                    onClick={() => { onViewCourse(course); onClose(); }}
                    className="flex-1 md:flex-none p-3 bg-[#050505] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050505] transition-all flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => onRemove(course.id)}
                    className="flex-1 md:flex-none p-3 border border-slate-200 text-slate-300 hover:text-red-500 hover:border-red-100 transition-all flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {savedCourses.length > 0 && (
          <footer className="p-8 bg-white border-t border-[#E5E5E3]">
            <button 
              onClick={onClose}
              className="w-full py-4 bg-[#050505] text-white text-[10px] uppercase tracking-widest font-black brochure-shadow hover:bg-[#D4AF37] hover:text-[#050505] transition-all"
            >
              Back to Catalog
            </button>
          </footer>
        )}
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fade-in-right { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default SavedProgramsOverlay;
