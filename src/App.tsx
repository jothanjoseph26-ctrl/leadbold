import React, { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ValueProp from '../components/ValueProp';
import Pillars from '../components/Pillars';
import Metrics from '../components/Metrics';
import ProgramShowcase from '../components/ProgramShowcase';
import SummitFeature from '../components/SummitFeature';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Insights from '../components/Insights';
import Methodology from '../components/Methodology';
import Reach from '../components/Reach';
import Engagement from '../components/Engagement';
import ClosingCTA from '../components/ClosingCTA';
import Footer from '../components/Footer';
import SearchOverlay from '../components/SearchOverlay';
import TrainingLanding from '../components/TrainingLanding';
import CourseSinglePage from '../components/CourseSinglePage';
import EnrollmentOnboarding from '../components/EnrollmentOnboarding';
import AdminDashboard from '../components/AdminDashboard';
import SavedProgramsOverlay from '../components/SavedProgramsOverlay';
import SummitsLanding from '../components/SummitsLanding';
import SummitSinglePage from '../components/SummitSinglePage';
import ConsultingLanding from '../components/ConsultingLanding';
import MediaStudio from '../components/MediaStudio';
import AboutPortal from '../components/AboutPortal';
import { DetailedCourse, ALL_COURSES, FLAGSHIP_SUMMITS, ARTICLES, INITIAL_PERSONNEL } from '@/constants';
import { Summit, Article, Personnel } from './types';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';
import FormDashboard from './components/forms/FormDashboard';
import FormBuilder from './components/forms/FormBuilder';
import FormRenderer from './components/forms/FormRenderer';
import { FormSchema, FormSubmission, generateSlug } from './types/formSystem';
import { geomechanicsFeedbackForm } from './data/formTemplates';

export type AppView = 'home' | 'training' | 'single-course' | 'enrollment' | 'admin' | 'summits' | 'single-summit' | 'consulting' | 'media-studio' | 'about-main' | 'about-story' | 'about-vision' | 'about-philosophy' | 'about-leadership' | 'about-partnerships' | 'about-careers' | 'about-press' | 'about-reports' | 'forms-dashboard' | 'forms-builder' | 'forms-public' | 'forms-submissions';

const App: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [activeCourse, setActiveCourse] = useState<DetailedCourse | null>(null);
  const [activeSummit, setActiveSummit] = useState<Summit | null>(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  // Core State
  const [personnel, setPersonnel] = useState<Personnel[]>(INITIAL_PERSONNEL);
  const [courses, setCourses] = useState<DetailedCourse[]>(ALL_COURSES);
  const [summits, setSummits] = useState<Summit[]>(FLAGSHIP_SUMMITS);
  const [insights, setInsights] = useState<Article[]>(ARTICLES);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  
  // Form System State
  const [forms, setForms] = useState<FormSchema[]>([]);
  const [activeForm, setActiveForm] = useState<FormSchema | null>(null);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [isSavingForm, setIsSavingForm] = useState(false);

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
        console.warn("Supabase data fetch failed, using default data:", error);
        // Use default data from constants if Supabase fails
        setCourses(ALL_COURSES);
        setSummits(FLAGSHIP_SUMMITS);
        setPersonnel(INITIAL_PERSONNEL);
        setInsights(ARTICLES);

        const saved = localStorage.getItem('leadbold_bookmarks');
        if (saved) setBookmarks(JSON.parse(saved));
      } finally {
        setIsLoading(false);
      }
    };

    fetchInstitutionalData();
  }, []);

  useEffect(() => {
    localStorage.setItem('leadbold_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Load forms from localStorage
  useEffect(() => {
    const storedForms = localStorage.getItem('leadbold_forms');
    if (storedForms) {
      setForms(JSON.parse(storedForms));
    } else {
      const defaultForms = [
        { ...geomechanicsFeedbackForm, status: 'published' as const },
      ];
      setForms(defaultForms);
      localStorage.setItem('leadbold_forms', JSON.stringify(defaultForms));
    }
  }, []);

  useEffect(() => {
    if (forms.length > 0) {
      localStorage.setItem('leadbold_forms', JSON.stringify(forms));
    }
  }, [forms]);

  const savedCourses = useMemo(() => {
    return courses.filter(course => bookmarks.includes(course.id.toString()));
  }, [courses, bookmarks]);

  const toggleBookmark = (courseId: string) => {
    const id = courseId.toString();
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const handleAdminAccess = () => {
    const adminPassword = process.env.VITE_ADMIN_PASSWORD || 'leadbold2026';
    const enteredPassword = prompt('Enter Admin Password:');

    if (enteredPassword === adminPassword) {
      setIsAdminAuthenticated(true);
      setCurrentView('admin');
    } else if (enteredPassword !== null) {
      alert('Incorrect password. Access denied.');
    }
  };

  const updateCourse = async (updated: DetailedCourse) => {
    setCourses(prev => prev.map(c => c.id === updated.id ? updated : c));
    try {
      await supabase.from('courses').upsert({ id: updated.id, payload: updated });
    } catch (error) {
      console.warn("Failed to update course in Supabase:", error);
    }
  };

  const addCourse = async (newCourse: DetailedCourse) => {
    setCourses(prev => [...prev, newCourse]);
    try {
      await supabase.from('courses').insert({ id: newCourse.id, payload: newCourse });
    } catch (error) {
      console.warn("Failed to add course to Supabase:", error);
    }
  };

  const deleteCourse = async (id: string) => {
    setCourses(prev => prev.filter(c => c.id !== id));
    try {
      await supabase.from('courses').delete().eq('id', id);
    } catch (error) {
      console.warn("Failed to delete course from Supabase:", error);
    }
  };

  const updateSummit = async (updated: Summit) => {
    setSummits(prev => prev.map(s => s.id === updated.id ? updated : s));
    try {
      await supabase.from('summits').upsert({ id: updated.id, payload: updated });
    } catch (error) {
      console.warn("Failed to update summit in Supabase:", error);
    }
  };

  const addSummit = async (newSummit: Summit) => {
    setSummits(prev => [...prev, newSummit]);
    try {
      await supabase.from('summits').insert({ id: newSummit.id, payload: newSummit });
    } catch (error) {
      console.warn("Failed to add summit to Supabase:", error);
    }
  };

  const deleteSummit = async (id: string) => {
    setSummits(prev => prev.filter(s => s.id !== id));
    try {
      await supabase.from('summits').delete().eq('id', id);
    } catch (error) {
      console.warn("Failed to delete summit from Supabase:", error);
    }
  };

  const updateInsight = async (updated: Article) => {
    setInsights(prev => prev.map(i => i.id === updated.id ? updated : i));
    try {
      await supabase.from('insights').upsert({ id: updated.id, payload: updated });
    } catch (error) {
      console.warn("Failed to update insight in Supabase:", error);
    }
  };

  const addInsight = async (newInsight: Article) => {
    setInsights(prev => [...prev, newInsight]);
    try {
      await supabase.from('insights').insert({ id: newInsight.id, payload: newInsight });
    } catch (error) {
      console.warn("Failed to add insight to Supabase:", error);
    }
  };

  const deleteInsight = async (id: string) => {
    setInsights(prev => prev.filter(i => i.id !== id));
    try {
      await supabase.from('insights').delete().eq('id', id);
    } catch (error) {
      console.warn("Failed to delete insight from Supabase:", error);
    }
  };

  const updatePersonnel = async (updated: Personnel) => {
    setPersonnel(prev => prev.map(p => p.id === updated.id ? updated : p));
    try {
      await supabase.from('personnel').upsert({ id: updated.id, payload: updated });
    } catch (error) {
      console.warn("Failed to update personnel in Supabase:", error);
    }
  };

  const addPersonnel = async (newPersonnel: Personnel) => {
    setPersonnel(prev => [...prev, newPersonnel]);
    try {
      await supabase.from('personnel').insert({ id: newPersonnel.id, payload: newPersonnel });
    } catch (error) {
      console.warn("Failed to add personnel to Supabase:", error);
    }
  };

  const deletePersonnel = async (id: string) => {
    setPersonnel(prev => prev.filter(p => p.id !== id));
    try {
      await supabase.from('personnel').delete().eq('id', id);
    } catch (error) {
      console.warn("Failed to delete personnel from Supabase:", error);
    }
  };

  // Form System Handlers
  const handleViewFormsDashboard = () => {
    setCurrentView('forms-dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCreateForm = (form: FormSchema) => {
    setActiveForm(form);
    setCurrentView('forms-builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditForm = (form: FormSchema) => {
    setActiveForm(form);
    setCurrentView('forms-builder');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviewForm = (form: FormSchema) => {
    setActiveForm(form);
    setCurrentView('forms-public');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewSubmissions = (form: FormSchema) => {
    setActiveForm(form);
    const stored = localStorage.getItem(`leadbold_submissions_${form.id}`);
    setFormSubmissions(stored ? JSON.parse(stored) : []);
    setCurrentView('forms-submissions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (updatedForm: FormSchema) => {
    setActiveForm(updatedForm);
    setForms(prev => prev.map(f => f.id === updatedForm.id ? updatedForm : f));
  };

  const handleSaveForm = async () => {
    if (!activeForm) return;
    setIsSavingForm(true);
    try {
      setForms(prev => prev.map(f => f.id === activeForm.id ? activeForm : f));
      localStorage.setItem('leadbold_forms', JSON.stringify(forms));
      alert('Form saved successfully!');
    } finally {
      setIsSavingForm(false);
    }
  };

  const handlePublishForm = async () => {
    if (!activeForm) return;
    const publishedForm = { ...activeForm, status: 'published' as const, publishedAt: new Date().toISOString() };
    setActiveForm(publishedForm);
    setForms(prev => prev.map(f => f.id === publishedForm.id ? publishedForm : f));
    localStorage.setItem('leadbold_forms', JSON.stringify(forms));
    alert('Form published successfully!');
  };

  const handleFormSubmit = async (answers: Record<string, unknown>, participantInfo?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
  }) => {
    if (!activeForm) return;
    
    const submission: FormSubmission = {
      id: `sub_${Date.now()}`,
      formId: activeForm.id,
      submissionReference: `SUB-${Date.now().toString(36).toUpperCase()}`,
      participantName: participantInfo?.name,
      participantEmail: participantInfo?.email,
      participantCompany: participantInfo?.company,
      participantRole: participantInfo?.role,
      submittedAt: new Date().toISOString(),
      status: 'submitted',
      answers: Object.entries(answers).map(([fieldKey, answerText]) => ({
        id: `ans_${Date.now()}_${fieldKey}`,
        submissionId: `sub_${Date.now()}`,
        fieldKey,
        answerText: typeof answerText === 'string' ? answerText : JSON.stringify(answerText),
      })),
    };

    const updatedSubmissions = [...formSubmissions, submission];
    setFormSubmissions(updatedSubmissions);
    localStorage.setItem(`leadbold_submissions_${activeForm.id}`, JSON.stringify(updatedSubmissions));
  };

  const handleBackToForms = () => {
    setActiveForm(null);
    setFormSubmissions([]);
    setCurrentView('forms-dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          onAdminClick={handleAdminAccess}
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
          <ProgramShowcase courses={courses} />
          <SummitFeature
            onViewAll={() => setCurrentView('summits')}
            onViewFeatured={(id: string) => handleViewChange(`summit:${id}`)}
            summits={summits}
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

      {currentView === 'admin' && isAdminAuthenticated && (
        <AdminDashboard 
          courses={courses}
          summits={summits}
          insights={insights}
          personnel={personnel}
          onExit={() => {
            setIsAdminAuthenticated(false);
            setCurrentView('home');
          }}
          onFormsClick={() => setCurrentView('forms-dashboard')}
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

      {currentView === 'forms-dashboard' && (
        <FormDashboard
          forms={forms}
          onCreateForm={handleCreateForm}
          onEditForm={handleEditForm}
          onPreviewForm={handlePreviewForm}
          onViewSubmissions={handleViewSubmissions}
          onUpdateForm={(updatedForms: any) => {
            if (Array.isArray(updatedForms)) {
              setForms(updatedForms);
            }
          }}
        />
      )}

      {currentView === 'forms-builder' && activeForm && (
        <div className="min-h-screen bg-gray-100">
          <div className="bg-[#050505] px-8 py-4 flex items-center justify-between">
            <button
              onClick={handleBackToForms}
              className="text-white hover:text-[#D4AF37] font-medium"
            >
              ← Back to Forms
            </button>
            <h1 className="text-white font-semibold">Form Builder</h1>
            <div className="w-20"></div>
          </div>
          <FormBuilder
            form={activeForm}
            onChange={handleFormChange}
            onSave={handleSaveForm}
            onPublish={handlePublishForm}
            onPreview={() => handlePreviewForm(activeForm)}
            isSaving={isSavingForm}
          />
        </div>
      )}

      {currentView === 'forms-public' && activeForm && (
        <FormRenderer
          form={activeForm}
          onSubmit={handleFormSubmit}
        />
      )}

      {currentView === 'forms-submissions' && activeForm && (
        <div className="min-h-screen bg-gray-50">
          <div className="bg-[#050505] text-white px-8 py-6">
            <button
              onClick={handleBackToForms}
              className="text-white hover:text-[#D4AF37] font-medium mb-2"
            >
              ← Back to Forms
            </button>
            <h1 className="text-2xl font-bold">{activeForm.title}</h1>
            <p className="text-gray-400 mt-1">Submissions</p>
          </div>
          <div className="p-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">All Submissions ({formSubmissions.length})</h2>
                  <button className="px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-[#b8962e]">
                    Export CSV
                  </button>
                </div>
              </div>
              {formSubmissions.length === 0 ? (
                <div className="p-12 text-center">
                  <p className="text-gray-500">No submissions yet</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {formSubmissions.map((submission) => (
                    <div key={submission.id} className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">{submission.participantName || 'Anonymous'}</p>
                          <p className="text-sm text-gray-500">{submission.participantCompany || 'No company'}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {new Date(submission.submittedAt).toLocaleString()}
                          </p>
                        </div>
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                          {submission.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {currentView !== 'admin' && <Footer />}
    </div>
  );
};

export default App;