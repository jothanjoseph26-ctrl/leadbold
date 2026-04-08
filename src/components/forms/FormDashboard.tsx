import React, { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  FileText,
  Edit,
  Eye,
  Trash2,
  Copy,
  Send,
  BarChart3,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  Filter,
} from 'lucide-react';
import { FormSchema, createEmptyForm, generateSlug } from '../../types/formSystem';
import { geomechanicsFeedbackForm, trainingFeedbackTemplate, eventRegistrationTemplate } from '../../data/formTemplates';

interface FormDashboardProps {
  forms?: FormSchema[];
  onCreateForm?: (form: FormSchema) => void;
  onEditForm?: (form: FormSchema) => void;
  onViewSubmissions?: (form: FormSchema) => void;
  onPreviewForm?: (form: FormSchema) => void;
  onUpdateForm?: (form: FormSchema) => void;
}

export const FormDashboard: React.FC<FormDashboardProps> = ({
  forms: formsProp,
  onCreateForm,
  onEditForm,
  onViewSubmissions,
  onPreviewForm,
  onUpdateForm,
}) => {
  const [localForms, setLocalForms] = useState<FormSchema[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showNewFormModal, setShowNewFormModal] = useState(false);

  const displayForms = formsProp || localForms;

  useEffect(() => {
    if (!formsProp) {
      const storedForms = localStorage.getItem('leadbold_forms');
      if (storedForms) {
        setLocalForms(JSON.parse(storedForms));
      } else {
        const defaultForms = [
          { ...geomechanicsFeedbackForm, status: 'published' as const },
        ];
        setLocalForms(defaultForms);
        localStorage.setItem('leadbold_forms', JSON.stringify(defaultForms));
      }
    }
  }, [formsProp]);

  useEffect(() => {
    if (!formsProp && localForms.length > 0) {
      localStorage.setItem('leadbold_forms', JSON.stringify(localForms));
    }
  }, [localForms, formsProp]);

  const filteredForms = displayForms.filter((form) => {
    const matchesSearch = form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || form.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleCreateForm = (template?: Partial<FormSchema>) => {
    let newForm: FormSchema;
    
    if (template) {
      newForm = {
        ...createEmptyForm(),
        ...template,
        id: `form_${Date.now()}`,
        slug: generateSlug(template.title || 'new-form'),
      };
    } else {
      newForm = {
        ...createEmptyForm(),
        id: `form_${Date.now()}`,
        slug: generateSlug('new-form'),
      };
    }
    
    if (formsProp && onCreateForm) {
      onCreateForm(newForm);
    } else {
      const updatedForms = [newForm, ...localForms];
      setLocalForms(updatedForms);
      setShowNewFormModal(false);
      onEditForm?.(newForm);
    }
  };

  const handleDuplicateForm = (form: FormSchema) => {
    const duplicate: FormSchema = {
      ...form,
      id: `form_${Date.now()}`,
      title: `${form.title} (Copy)`,
      slug: generateSlug(`${form.title}-copy`),
      status: 'draft',
      version: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    if (formsProp && onUpdateForm) {
      onUpdateForm(duplicate);
    } else {
      setLocalForms([duplicate, ...localForms]);
    }
  };

  const handleDeleteForm = (formId: string) => {
    if (confirm('Are you sure you want to delete this form? This action cannot be undone.')) {
      if (formsProp && onUpdateForm) {
        const updated = displayForms.filter((f) => f.id !== formId);
        onUpdateForm(updated as any);
      } else {
        setLocalForms(localForms.filter((f) => f.id !== formId));
      }
    }
  };

  const handlePublishForm = (formId: string) => {
    const updated = displayForms.map((f) => 
      f.id === formId 
        ? { ...f, status: 'published' as const, publishedAt: new Date().toISOString() }
        : f
    );
    
    if (formsProp && onUpdateForm) {
      onUpdateForm(updated as any);
    } else {
      setLocalForms(updated);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
            <CheckCircle className="w-3 h-3" /> Published
          </span>
        );
      case 'draft':
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-700 rounded-full">
            <Clock className="w-3 h-3" /> Draft
          </span>
        );
      case 'archived':
        return (
          <span className="flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
            <XCircle className="w-3 h-3" /> Archived
          </span>
        );
      default:
        return null;
    }
  };

  const stats = {
    total: displayForms.length,
    published: displayForms.filter((f) => f.status === 'published').length,
    draft: displayForms.filter((f) => f.status === 'draft').length,
    totalSubmissions: 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#050505] text-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Form Management</h1>
            <p className="text-gray-400 mt-1">Create, manage, and analyze your forms</p>
          </div>
          <button
            onClick={() => setShowNewFormModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-black font-medium rounded-lg hover:bg-[#b8962e] transition-colors"
          >
            <Plus className="w-5 h-5" /> Create Form
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Forms</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Published</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.published}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Drafts</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.draft}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Edit className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Submissions</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">{stats.totalSubmissions}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search forms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredForms.length === 0 ? (
              <div className="p-12 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No forms found</h3>
                <p className="text-gray-500 mb-6">Get started by creating your first form</p>
                <button
                  onClick={() => setShowNewFormModal(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-[#b8962e]"
                >
                  <Plus className="w-5 h-5" /> Create Form
                </button>
              </div>
            ) : (
              filteredForms.map((form) => (
                <div key={form.id} className="p-6 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{form.title}</h3>
                      {getStatusBadge(form.status)}
                    </div>
                    <p className="text-gray-500 mt-1 line-clamp-1">{form.description}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <span>/form/{form.slug}</span>
                      <span>{form.sections?.length || 0} sections</span>
                      <span>Updated {new Date(form.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => { console.log('Preview clicked', form.id); onPreviewForm?.(form); }}
                      className="p-3 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                      title="Preview"
                      type="button"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => { console.log('Edit clicked', form.id); onEditForm?.(form); }}
                      className="p-3 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                      title="Edit"
                      type="button"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => onViewSubmissions?.(form)}
                      className="p-3 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors cursor-pointer"
                      title="Submissions"
                      type="button"
                    >
                      <BarChart3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDuplicateForm(form)}
                      className="p-3 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors cursor-pointer"
                      title="Duplicate"
                      type="button"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                    {form.status === 'published' ? (
                      <button
                        onClick={() => {
                          const url = `${window.location.origin}/forms/${form.slug}`;
                          navigator.clipboard.writeText(url);
                          alert('Form URL copied to clipboard!');
                        }}
                        className="p-3 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
                        title="Copy Link"
                        type="button"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    ) : (
                      <button
                        onClick={() => handlePublishForm(form.id)}
                        className="p-3 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                        title="Publish"
                        type="button"
                      >
                        <Send className="w-5 h-5" />
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteForm(form.id)}
                      className="p-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete"
                      type="button"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {showNewFormModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Create New Form</h2>
              <p className="text-gray-500 mt-1">Start from scratch or use a template</p>
            </div>
            <div className="p-6 space-y-3">
              <button
                onClick={() => handleCreateForm()}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
              >
                <div className="font-medium text-gray-900">Blank Form</div>
                <div className="text-sm text-gray-500">Start with a completely empty form</div>
              </button>
              <button
                onClick={() => handleCreateForm(geomechanicsFeedbackForm)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
              >
                <div className="font-medium text-gray-900">Geomechanics Training Feedback</div>
                <div className="text-sm text-gray-500">Full training feedback with all sections</div>
              </button>
              <button
                onClick={() => handleCreateForm(trainingFeedbackTemplate)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
              >
                <div className="font-medium text-gray-900">Standard Training Feedback</div>
                <div className="text-sm text-gray-500">Basic training evaluation form</div>
              </button>
              <button
                onClick={() => handleCreateForm(eventRegistrationTemplate)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-colors"
              >
                <div className="font-medium text-gray-900">Event Registration</div>
                <div className="text-sm text-gray-500">Participant registration with preferences</div>
              </button>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowNewFormModal(false)}
                className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDashboard;
