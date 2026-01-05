
import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ValueProp from './components/ValueProp';
import Pillars from './components/Pillars';
import Metrics from './components/Metrics';
import ProgramShowcase from './components/ProgramShowcase';
import SummitFeature from './components/SummitFeature';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import Insights from './components/Insights';
import Methodology from './components/Methodology';
import Reach from './components/Reach';
import Engagement from './components/Engagement';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import SearchOverlay from './components/SearchOverlay';
import TrainingLanding from './components/TrainingLanding';
import CourseSinglePage from './components/CourseSinglePage';
import EnrollmentOnboarding from './components/EnrollmentOnboarding';
import AdminDashboard from './components/AdminDashboard';
import SavedProgramsOverlay from './components/SavedProgramsOverlay';
import SummitsLanding from './components/SummitsLanding';
import SummitSinglePage from './components/SummitSinglePage';
import ConsultingLanding from './components/ConsultingLanding';
import MediaStudio from './components/MediaStudio';
import AboutPortal from './components/AboutPortal';
import { DetailedCourse, ALL_COURSES, FLAGSHIP_SUMMITS, ARTICLES, INITIAL_PERSONNEL } from './constants';
import { Summit, Article, Personnel } from './types';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

export type AppView = 'home' | 'training' | 'single-course' | 'enrollment' | 'admin' | 'summits' | 'single-summit' | 'consulting' | 'media-studio' | 'about-main' | 'about-story' | 'about-vision' | 'about-philosophy' | 'about-leadership' | 'about-partnerships' | 'about-careers' | 'about-press' | 'about-reports';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeCourse, setActiveCourse] = useState<DetailedCourse | null>(null);
  const [activeSummit, setActiveSummit] = useState<Summit | null>(null);
  
  // Core State
  const [personnel, setPersonnel] = useState<Personnel[]>(INITIAL_PERSONNEL);
  const [courses, setCourses] = useState<DetailedCourse[]>(ALL_COURSES);
  const [summits, setSummits] = useState<Summit[]>(FLAGSHIP_SUMMITS);
  const [insights, setInsights] = useState<Article[]>(ARTICLES);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // 1. Initial Data Fetch from Supabase
  useEffect(() => {
    const fetchInstitutionalData = async () => {
      setIsLoading(true);
      try {
        const [
          { data: dbCourses },
          { data: dbSummits },
          { data: dbPersonnel },
          { data: dbInsights }
        ] = await Promise.all([
          supabase.from('courses').select('payload'),
          supabase.from('summits').select('payload'),
          supabase.from('personnel').select('payload'),
          supabase.from('insights').select('payload')
        ]);

        if (dbCourses?.length) setCourses(dbCourses.map(c => c.payload));
        if (dbSummits?.length) setSummits(dbSummits.map(s => s.payload));
        if (dbPersonnel?.length) setPersonnel(dbPersonnel.map(p => p.payload));
        if (dbInsights?.length) setInsights(dbInsights.map(i => i.payload));

        const saved = localStorage.getItem('leadbold_bookmarks');
        if (saved) setBookmarks(JSON.parse(saved));

      } catch (error) {
        console.error("Critical error syncing institutional data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstitutionalData();
  }, []);

  useEffect(() => {
    localStorage.setItem('leadbold_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const savedCourses = useMemo(() => {
    return courses.filter(course => bookmarks.includes(course.id.toString()));
  }, [courses, bookmarks]);

  const toggleBookmark = (courseId: string) => {
    const id = courseId.toString();
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const updateCourse = async (updated: DetailedCourse) => {
    setCourses(prev => prev.map(c => c.id === updated.id ? updated : c));
    await supabase.from('courses').upsert({ id: updated.id, payload: updated });
  };

  const addCourse = async (newCourse: DetailedCourse) => {
    setCourses(prev => [...prev, newCourse]);
    await supabase.from('courses').insert({ id: newCourse.id, payload: newCourse });
  };

  const deleteCourse = async (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
    await supabase.from('courses').delete().eq('id', id);
  };

  const updateSummit = async (updated: Summit) => {
    setSummits(prev => prev.map(s => s.id === updated.id ? updated : s));
    await supabase.from('summits').upsert({ id: updated.id, payload: updated });
  };

  const addSummit = async (newSummit: Summit) => {
    setSummits(prev => [...prev, newSummit]);
    await supabase.from('summits').insert({ id: newSummit.id, payload: newSummit });
  };

  const deleteSummit = async (id: string) => {
    setSummits(prev => prev.filter(s => s.id !== id));
    await supabase.from('summits').delete().eq('id', id);
  };

  const updateInsight = async (updated: Article) => {
    setInsights(prev => prev.map(i => i.id === updated.id ? updated : i));
    await supabase.from('insights').upsert({ id: updated.id, payload: updated });
  };

  const addInsight = async (newInsight: Article) => {
    setInsights(prev => [...prev, newInsight]);
    await supabase.from('insights').insert({ id: newInsight.id, payload: newInsight });
  };

  const deleteInsight = async (id: string) => {
    setInsights(prev => prev.filter(i => i.id !== id));
    await supabase.from('insights').delete().eq('id', id);
  };

  const updatePersonnel = async (updated: Personnel) => {
    setPersonnel(prev => prev.map(p => p.id === updated.id ? updated : p));
    await supabase.from('personnel').upsert({ id: updated.id, payload: updated });
  };

  const addPersonnel = async (newPersonnel: Personnel) => {
    setPersonnel(prev => [...prev, newPersonnel]);
    await supabase.from('personnel').insert({ id: newPersonnel.id, payload: newPersonnel });
  };

  const deletePersonnel = async (id: string) => {
    setPersonnel(prev => prev.filter(p => p.id !== id));
    await supabase.from('personnel').delete().eq('id', id);
  };

  const handleViewCourse = (course: DetailedCourse) => {
    setActiveCourse(course);
    setCurrentView('single-course');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewSummit = (summit: Summit) => {
    setActiveSummit(summit);
    setCurrentView('single-summit');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewChange = (view: string) => {
    if (view.startsWith('summit:')) {
      const id = view.split(':')[1];
      const summit = summits.find(s => s.id === id);
      if (summit) handleViewSummit(summit);
    } else if (view.startsWith('course:')) {
      const id = view.split(':')[1];
      const course = courses.find(c => c.id === id);
      if (course) handleViewCourse(course);
    } else {
      // Mapping generic category strings to their primary landing views
      const viewMap: Record<string, AppView> = {
        'about': 'about-main',
        'schools': 'training',
        'summits': 'summits',
        'insights': 'home', // or a dedicated insights view if created
        'consulting': 'consulting'
      };
      
      setCurrentView(viewMap[view] || (view as AppView));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center space-y-8">
        <div className="w-16 h-16 border-2 border-[#D4AF37] flex items-center justify-center font-bold text-[#D4AF37] text-2xl serif animate-pulse">LB</div>
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="w-8 h-8 text-[#D4AF37] animate-spin opacity-50" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Syncing LeadBold Assets</span>
        </div>
      </div>
    );
  }

  const isAboutView = currentView.startsWith('about-');

  return (
    <div className="min-h-screen">
      {currentView !== 'admin' && (
        <Navbar 
          onSearchOpen={() => setIsSearchOpen(true)} 
          onSavedOpen={() => setIsSavedOpen(true)}
          bookmarkCount={bookmarks.length} 
          onAdminClick={() => setCurrentView('admin')}
          onViewChange={handleViewChange}
        />
      )}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <SavedProgramsOverlay 
        isOpen={isSavedOpen} 
        onClose={() => setIsSavedOpen(false)} 
        savedCourses={savedCourses}
        onRemove={toggleBookmark}
        onViewCourse={handleViewCourse}
      />
      
      {currentView === 'home' && (
        <main>
          <Hero />
          <TrustBar />
          <ValueProp />
          <Pillars />
          <Metrics />
          <ProgramShowcase />
          <SummitFeature 
            onViewAll={() => setCurrentView('summits')} 
            onViewFeatured={(id) => handleViewChange(`summit:${id}`)}
          />
          <Testimonials />
          <Partners />
          <Insights articles={insights} />
          <Methodology />
          <Reach />
          <Engagement />
          <ClosingCTA />
        </main>
      )}

      {currentView === 'training' && (
        <TrainingLanding 
          courses={courses}
          personnel={personnel}
          onBack={() => setCurrentView('home')} 
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          onViewSingle={handleViewCourse}
          onEnroll={(course) => {
            setActiveCourse(course);
            setCurrentView('enrollment');
          }}
        />
      )}

      {currentView === 'single-course' && activeCourse && (
        <CourseSinglePage 
          course={activeCourse} 
          personnel={personnel}
          onBack={() => setCurrentView('training')}
          isBookmarked={bookmarks.includes(activeCourse.id)}
          onToggleBookmark={() => toggleBookmark(activeCourse.id)}
          onEnroll={() => setCurrentView('enrollment')}
        />
      )}

      {currentView === 'enrollment' && activeCourse && (
        <EnrollmentOnboarding 
          course={activeCourse} 
          onCancel={() => setCurrentView('training')} 
          onSuccess={() => setCurrentView('home')}
        />
      )}

      {currentView === 'summits' && (
        <SummitsLanding 
          onBack={() => setCurrentView('home')} 
          onViewSummit={handleViewSummit}
          summits={summits}
        />
      )}

      {currentView === 'single-summit' && activeSummit && (
        <SummitSinglePage 
          summit={activeSummit} 
          personnel={personnel}
          onBack={() => setCurrentView('summits')}
        />
      )}

      {currentView === 'consulting' && (
        <ConsultingLanding onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'media-studio' && (
        <MediaStudio onBack={() => setCurrentView('home')} />
      )}

      {isAboutView && (
        <AboutPortal 
          currentSubView={currentView as any} 
          personnel={personnel}
          onViewChange={handleViewChange}
        />
      )}

      {currentView === 'admin' && (
        <AdminDashboard 
          courses={courses}
          summits={summits}
          insights={insights}
          personnel={personnel}
          onExit={() => setCurrentView('home')}
          onUpdateCourse={updateCourse}
          onAddCourse={addCourse}
          onDeleteCourse={deleteCourse}
          onUpdateSummit={updateSummit}
          onAddSummit={addSummit}
          onDeleteSummit={deleteSummit}
          onUpdateInsight={updateInsight}
          onAddInsight={addInsight}
          onDeleteInsight={deleteInsight}
          onUpdatePersonnel={updatePersonnel}
          onAddPersonnel={addPersonnel}
          onDeletePersonnel={deletePersonnel}
        />
      )}

      {currentView !== 'admin' && <Footer />}
    </div>
  );
};

export default App;
