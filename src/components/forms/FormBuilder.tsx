import React, { useState, useCallback } from 'react';
import {
  Plus,
  Trash2,
  Copy,
  GripVertical,
  Settings,
  Eye,
  Save,
  Send,
  ChevronDown,
  ChevronUp,
  X,
  Check,
  AlertCircle,
  FileText,
  List,
  Hash,
  Mail,
  Phone,
  Calendar,
  CheckSquare,
  Circle,
  Star,
  AlignLeft,
  Link,
  Clock,
  Upload,
  EyeOff,
  Heading,
  Minus,
  BarChart3,
  PenTool,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import {
  FormSchema,
  FormSection,
  FormField,
  FieldType,
  FIELD_TYPE_LABELS,
  generateId,
  generateFieldKey,
  createEmptyField,
  createEmptySection,
  FormFieldOption,
} from '../types/formSystem';

interface FormBuilderProps {
  form: FormSchema;
  onChange: (form: FormSchema) => void;
  onSave: () => void;
  onPublish: () => void;
  onPreview: () => void;
  isSaving?: boolean;
}

const fieldTypes: { type: FieldType; icon: React.ElementType; category: string }[] = [
  { type: 'text', icon: FileText, category: 'Basic' },
  { type: 'textarea', icon: AlignLeft, category: 'Basic' },
  { type: 'number', icon: Hash, category: 'Basic' },
  { type: 'email', icon: Mail, category: 'Basic' },
  { type: 'phone', icon: Phone, category: 'Basic' },
  { type: 'date', icon: Calendar, category: 'Basic' },
  { type: 'time', icon: Clock, category: 'Basic' },
  { type: 'url', icon: Link, category: 'Basic' },
  { type: 'radio', icon: Circle, category: 'Choice' },
  { type: 'checkbox', icon: CheckSquare, category: 'Choice' },
  { type: 'select', icon: ChevronDown, category: 'Choice' },
  { type: 'multiselect', icon: List, category: 'Choice' },
  { type: 'rating', icon: Star, category: 'Rating' },
  { type: 'likert', icon: BarChart3, category: 'Rating' },
  { type: 'matrix', icon: Grid3X3, category: 'Rating' },
  { type: 'acknowledgement', icon: Check, category: 'Special' },
  { type: 'signature', icon: PenTool, category: 'Special' },
  { type: 'file', icon: Upload, category: 'Special' },
  { type: 'section_header', icon: Heading, category: 'Layout' },
  { type: 'divider', icon: Minus, category: 'Layout' },
  { type: 'hidden', icon: EyeOff, category: 'Layout' },
];

const Grid3X3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

interface FieldEditorProps {
  field: FormField;
  onChange: (field: FormField) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  allFields: FormField[];
}

const FieldEditor: React.FC<FieldEditorProps> = ({ field, onChange, onDelete, onDuplicate, allFields }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleOptionAdd = () => {
    const newOption: FormFieldOption = {
      label: `Option ${(field.options?.length || 0) + 1}`,
      value: `option_${(field.options?.length || 0) + 1}`,
    };
    onChange({
      ...field,
      options: [...(field.options || []), newOption],
    });
  };
  
  const handleOptionChange = (index: number, key: 'label' | 'value', value: string) => {
    const newOptions = [...(field.options || [])];
    newOptions[index] = { ...newOptions[index], [key]: value };
    onChange({ ...field, options: newOptions });
  };
  
  const handleOptionRemove = (index: number) => {
    const newOptions = [...(field.options || [])];
    newOptions.splice(index, 1);
    onChange({ ...field, options: newOptions });
  };
  
  const hasOptions = ['radio', 'checkbox', 'select', 'multiselect'].includes(field.type);
  const hasValidation = ['text', 'textarea', 'number', 'email', 'url'].includes(field.type);
  
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-3 bg-white border-b border-gray-200 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <GripVertical className="w-4 h-4 text-gray-400 cursor-grab" />
          <span className="font-medium text-gray-700">{field.label || 'Untitled Field'}</span>
          <span className="text-xs text-gray-500 px-2 py-0.5 bg-gray-100 rounded">{FIELD_TYPE_LABELS[field.type]}</span>
          {field.required && <span className="text-xs text-red-500">Required</span>}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onDuplicate(); }}
            className="p-1 text-gray-400 hover:text-gray-600"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
              <input
                type="text"
                value={field.label}
                onChange={(e) => onChange({ ...field, label: e.target.value, fieldKey: generateFieldKey(e.target.value) || field.fieldKey })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Field Key</label>
              <input
                type="text"
                value={field.fieldKey}
                onChange={(e) => onChange({ ...field, fieldKey: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-mono text-sm"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Help Text</label>
            <input
              type="text"
              value={field.helpText || ''}
              onChange={(e) => onChange({ ...field, helpText: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              placeholder="Optional help text for participants"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Placeholder</label>
            <input
              type="text"
              value={field.placeholder || ''}
              onChange={(e) => onChange({ ...field, placeholder: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={field.required}
                onChange={(e) => onChange({ ...field, required: e.target.checked })}
                className="w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
              />
              <span className="text-sm text-gray-700">Required</span>
            </label>
          </div>
          
          {hasOptions && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
              <div className="space-y-2">
                {field.options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={option.label}
                      onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                      placeholder="Label"
                    />
                    <input
                      type="text"
                      value={option.value}
                      onChange={(e) => handleOptionChange(index, 'value', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent font-mono text-sm"
                      placeholder="Value"
                    />
                    <button
                      type="button"
                      onClick={() => handleOptionRemove(index)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleOptionAdd}
                  className="flex items-center gap-2 text-sm text-[#D4AF37] hover:text-[#b8962e]"
                >
                  <Plus className="w-4 h-4" /> Add Option
                </button>
              </div>
            </div>
          )}
          
          {field.type === 'rating' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Rating</label>
              <input
                type="number"
                min={3}
                max={10}
                value={field.maxRating || 5}
                onChange={(e) => onChange({ ...field, maxRating: parseInt(e.target.value) })}
                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>
          )}
          
          {field.type === 'likert' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scale</label>
                <input
                  type="number"
                  min={3}
                  max={10}
                  value={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Statements (one per line)</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  placeholder="I understand the material well&#10;I can apply this knowledge&#10;..."
                />
              </div>
            </div>
          )}
          
          {hasValidation && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Length</label>
                <input
                  type="number"
                  min={0}
                  value={field.validation?.minLength || ''}
                  onChange={(e) => onChange({
                    ...field,
                    validation: { ...field.validation, minLength: parseInt(e.target.value) || undefined }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Length</label>
                <input
                  type="number"
                  min={0}
                  value={field.validation?.maxLength || ''}
                  onChange={(e) => onChange({
                    ...field,
                    validation: { ...field.validation, maxLength: parseInt(e.target.value) || undefined }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                />
              </div>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Default Value</label>
            <input
              type="text"
              value={field.defaultValue || ''}
              onChange={(e) => onChange({ ...field, defaultValue: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface SectionEditorProps {
  section: FormSection;
  sectionIndex: number;
  onChange: (section: FormSection) => void;
  onDelete: () => void;
  onAddField: (type: FieldType) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  canMoveUp: boolean;
  canMoveDown: boolean;
}

const SectionEditor: React.FC<SectionEditorProps> = ({
  section,
  sectionIndex,
  onChange,
  onDelete,
  onAddField,
  onMoveUp,
  onMoveDown,
  canMoveUp,
  canMoveDown,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showFieldPicker, setShowFieldPicker] = useState(false);
  
  const groupedFields = fieldTypes.reduce((acc, field) => {
    if (!acc[field.category]) acc[field.category] = [];
    acc[field.category].push(field);
    return acc;
  }, {} as Record<string, typeof fieldTypes>);
  
  const handleFieldDuplicate = (fieldIndex: number) => {
    const field = section.fields[fieldIndex];
    const newField: FormField = {
      ...field,
      id: generateId(),
      fieldKey: `${field.fieldKey}_copy`,
      label: `${field.label} (Copy)`,
    };
    const newFields = [...section.fields];
    newFields.splice(fieldIndex + 1, 0, newField);
    onChange({ ...section, fields: newFields });
  };
  
  const handleFieldDelete = (fieldIndex: number) => {
    const newFields = [...section.fields];
    newFields.splice(fieldIndex, 1);
    onChange({ ...section, fields: newFields });
  };
  
  const handleFieldChange = (fieldIndex: number, updatedField: FormField) => {
    const newFields = [...section.fields];
    newFields[fieldIndex] = updatedField;
    onChange({ ...section, fields: newFields });
  };
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onMoveUp(); }}
              disabled={!canMoveUp}
              className="p-0.5 text-gray-400 hover:text-gray-600 disabled:opacity-30"
            >
              <ChevronUp className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onMoveDown(); }}
              disabled={!canMoveDown}
              className="p-0.5 text-gray-400 hover:text-gray-600 disabled:opacity-30"
            >
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <span className="font-semibold text-gray-800">Section {sectionIndex + 1}: {section.title}</span>
          <span className="text-xs text-gray-500">({section.fields.length} fields)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onDelete(); }}
            className="p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
              <input
                type="text"
                value={section.title}
                onChange={(e) => onChange({ ...section, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <input
                type="text"
                value={section.description || ''}
                onChange={(e) => onChange({ ...section, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            {section.fields.map((field, fieldIndex) => (
              <FieldEditor
                key={field.id}
                field={field}
                onChange={(updated) => handleFieldChange(fieldIndex, updated)}
                onDelete={() => handleFieldDelete(fieldIndex)}
                onDuplicate={() => handleFieldDuplicate(fieldIndex)}
                allFields={section.fields}
              />
            ))}
          </div>
          
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowFieldPicker(!showFieldPicker)}
              className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-md hover:bg-[#b8962e] transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Field
            </button>
            
            {showFieldPicker && (
              <div className="absolute z-10 top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                {Object.entries(groupedFields).map(([category, fields]) => (
                  <div key={category} className="p-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">{category}</div>
                    <div className="grid grid-cols-2 gap-1">
                      {fields.map((f) => (
                        <button
                          key={f.type}
                          type="button"
                          onClick={() => {
                            onAddField(f.type);
                            setShowFieldPicker(false);
                          }}
                          className="flex items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          <f.icon className="w-4 h-4 text-gray-500" />
                          {FIELD_TYPE_LABELS[f.type]}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const FormBuilder: React.FC<FormBuilderProps> = ({
  form,
  onChange,
  onSave,
  onPublish,
  onPreview,
  isSaving = false,
}) => {
  const [showFieldPicker, setShowFieldPicker] = useState(false);
  
  const handleAddSection = () => {
    const newSection = createEmptySection(`Section ${form.sections.length + 1}`);
    onChange({
      ...form,
      sections: [...form.sections, newSection],
    });
  };
  
  const handleSectionChange = (index: number, updatedSection: FormSection) => {
    const newSections = [...form.sections];
    newSections[index] = updatedSection;
    onChange({ ...form, sections: newSections });
  };
  
  const handleSectionDelete = (index: number) => {
    const newSections = [...form.sections];
    newSections.splice(index, 1);
    onChange({ ...form, sections: newSections });
  };
  
  const handleSectionMoveUp = (index: number) => {
    if (index === 0) return;
    const newSections = [...form.sections];
    [newSections[index - 1], newSections[index]] = [newSections[index], newSections[index - 1]];
    onChange({ ...form, sections: newSections });
  };
  
  const handleSectionMoveDown = (index: number) => {
    if (index === form.sections.length - 1) return;
    const newSections = [...form.sections];
    [newSections[index], newSections[index + 1]] = [newSections[index + 1], newSections[index]];
    onChange({ ...form, sections: newSections });
  };
  
  const handleAddFieldToSection = (sectionIndex: number, type: FieldType) => {
    const section = form.sections[sectionIndex];
    const newField = createEmptyField(type);
    newField.orderIndex = section.fields.length;
    
    const updatedSection = {
      ...section,
      fields: [...section.fields, newField],
    };
    handleSectionChange(sectionIndex, updatedSection);
  };
  
  const handleFormTitleChange = (title: string) => {
    onChange({
      ...form,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    });
  };
  
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex-1 max-w-2xl">
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleFormTitleChange(e.target.value)}
            className="w-full text-2xl font-bold text-gray-900 border-none focus:outline-none focus:ring-0"
            placeholder="Form Title"
          />
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 text-xs font-medium rounded ${
              form.status === 'published' ? 'bg-green-100 text-green-700' :
              form.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {form.status.charAt(0).toUpperCase() + form.status.slice(1)}
            </span>
            <span className="text-xs text-gray-500">/form/{form.slug}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onPreview}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button
            type="button"
            onClick={onSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          >
            <Save className="w-4 h-4" /> {isSaving ? 'Saving...' : 'Save Draft'}
          </button>
          {form.status === 'draft' ? (
            <button
              type="button"
              onClick={onPublish}
              className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              <Send className="w-4 h-4" /> Publish
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 px-4 py-2 text-white bg-gray-400 rounded-md cursor-not-allowed"
              disabled
            >
              <Check className="w-4 h-4" /> Published
            </button>
          )}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Form Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={form.description || ''}
                  onChange={(e) => onChange({ ...form, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  placeholder="Form description..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => onChange({ ...form, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                >
                  <option value="general">General</option>
                  <option value="feedback">Feedback</option>
                  <option value="assessment">Assessment</option>
                  <option value="registration">Registration</option>
                  <option value="survey">Survey</option>
                  <option value="evaluation">Evaluation</option>
                </select>
              </div>
            </div>
          </div>
          
          {form.sections.map((section, index) => (
            <SectionEditor
              key={section.id}
              section={section}
              sectionIndex={index}
              onChange={(updated) => handleSectionChange(index, updated)}
              onDelete={() => handleSectionDelete(index)}
              onAddField={(type) => handleAddFieldToSection(index, type)}
              onMoveUp={() => handleSectionMoveUp(index)}
              onMoveDown={() => handleSectionMoveDown(index)}
              canMoveUp={index > 0}
              canMoveDown={index < form.sections.length - 1}
            />
          ))}
          
          <button
            type="button"
            onClick={handleAddSection}
            className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
