import React, { useState, useEffect } from 'react';
import {
  Star,
  Check,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
} from 'lucide-react';
import {
  FormSchema,
  FormField,
  FormSection,
  FieldType,
} from '../types/formSystem';

interface FormRendererProps {
  form: FormSchema;
  onSubmit: (answers: Record<string, unknown>, participantInfo?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
  }) => Promise<void>;
  isSubmitting?: boolean;
  branding?: {
    primaryColor?: string;
    logo?: string;
  };
}

interface FieldProps {
  field: FormField;
  value: unknown;
  onChange: (value: unknown) => void;
  error?: string;
}

const TextField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="text"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={field.placeholder}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const TextAreaField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <textarea
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={field.placeholder}
    rows={4}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all resize-none`}
  />
);

const NumberField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="number"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={field.placeholder}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const EmailField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="email"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={field.placeholder}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const PhoneField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="tel"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    placeholder={field.placeholder}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const DateField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="date"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const TimeField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <input
    type="time"
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all`}
  />
);

const RadioField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <div className="space-y-2">
    {field.options?.map((option) => (
      <label
        key={option.value}
        className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
          value === option.value
            ? 'border-[#D4AF37] bg-[#D4AF37]/5'
            : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <input
          type="radio"
          name={field.fieldKey}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          className="w-4 h-4 text-[#D4AF37] border-gray-300 focus:ring-[#D4AF37]"
        />
        <span className="text-gray-700">{option.label}</span>
      </label>
    ))}
  </div>
);

const CheckboxField: React.FC<FieldProps> = ({ field, value, onChange, error }) => {
  const values = (value as string[]) || [];
  
  return (
    <div className="space-y-2">
      {field.options?.map((option) => (
        <label
          key={option.value}
          className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
            values.includes(option.value)
              ? 'border-[#D4AF37] bg-[#D4AF37]/5'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <input
            type="checkbox"
            value={option.value}
            checked={values.includes(option.value)}
            onChange={(e) => {
              if (e.target.checked) {
                onChange([...values, option.value]);
              } else {
                onChange(values.filter((v) => v !== option.value));
              }
            }}
            className="w-4 h-4 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const SelectField: React.FC<FieldProps> = ({ field, value, onChange, error }) => (
  <select
    value={value as string || ''}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full px-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all bg-white`}
  >
    <option value="">{field.placeholder || 'Select an option'}</option>
    {field.options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const RatingField: React.FC<FieldProps> = ({ field, value, onChange }) => {
  const maxRating = field.maxRating || 5;
  const currentValue = (value as number) || 0;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className="p-1 transition-transform hover:scale-110"
          >
            <Star
              className={`w-8 h-8 ${
                rating <= currentValue
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      {field.helpText && (
        <p className="text-sm text-gray-500">{field.helpText}</p>
      )}
    </div>
  );
};

const LikertField: React.FC<FieldProps> = ({ field, value, onChange }) => {
  const values = (value as Record<string, number>) || {};
  const statements = field.likertConfig?.statements || [];
  const labels = field.likertConfig?.labels || ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
  const scale = field.likertConfig?.scale || 5;
  
  return (
    <div className="space-y-4">
      {statements.length > 0 ? (
        statements.map((statement, idx) => (
          <div key={idx} className="space-y-2">
            <p className="font-medium text-gray-700">{statement}</p>
            <div className="flex gap-2">
              {Array.from({ length: scale }, (_, i) => i + 1).map((option) => (
                <label
                  key={option}
                  className={`flex-1 text-center p-3 border rounded-lg cursor-pointer transition-all ${
                    values[statement] === option
                      ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${field.fieldKey}-${idx}`}
                    value={option}
                    checked={values[statement] === option}
                    onChange={() => onChange({ ...values, [statement]: option })}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 px-1">
              <span>{labels[0]}</span>
              <span>{labels[labels.length - 1]}</span>
            </div>
          </div>
        ))
      ) : (
        <div className="space-y-2">
          <div className="flex gap-2">
            {Array.from({ length: scale }, (_, i) => i + 1).map((option) => (
              <label
                key={option}
                className={`flex-1 text-center p-3 border rounded-lg cursor-pointer transition-all ${
                  value === option
                    ? 'border-[#D4AF37] bg-[#D4AF37]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name={field.fieldKey}
                  value={option}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  className="sr-only"
                />
                <span className="text-sm font-medium">{option}</span>
              </label>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>{labels[0]}</span>
            <span>{labels[labels.length - 1]}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const AcknowledgementField: React.FC<FieldProps> = ({ field, value, onChange }) => (
  <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
    <input
      type="checkbox"
      checked={value as boolean || false}
      onChange={(e) => onChange(e.target.checked)}
      className="w-5 h-5 mt-0.5 text-[#D4AF37] border-gray-300 rounded focus:ring-[#D4AF37]"
    />
    <span className="text-gray-700">{field.label}</span>
  </label>
);

const SignatureField: React.FC<FieldProps> = ({ field, value, onChange }) => (
  <div className="space-y-2">
    <p className="text-sm text-gray-600">{field.helpText || 'Type your full name as a digital signature'}</p>
    <input
      type="text"
      value={value as string || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your full name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent italic"
    />
    <p className="text-xs text-gray-400">By typing your name, you agree that this serves as your legal signature.</p>
  </div>
);

const SectionHeader: React.FC<FieldProps> = ({ field }) => (
  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
    {field.label}
  </h3>
);

const Divider: React.FC<FieldProps> = () => (
  <hr className="my-6 border-gray-200" />
);

interface FieldRendererProps {
  field: FormField;
  value: unknown;
  onChange: (value: unknown) => void;
  error?: string;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, value, onChange, error }) => {
  const props: FieldProps = { field, value, onChange, error };
  
  switch (field.type) {
    case 'text':
      return <TextField {...props} />;
    case 'textarea':
      return <TextAreaField {...props} />;
    case 'number':
      return <NumberField {...props} />;
    case 'email':
      return <EmailField {...props} />;
    case 'phone':
      return <PhoneField {...props} />;
    case 'date':
      return <DateField {...props} />;
    case 'time':
      return <TimeField {...props} />;
    case 'radio':
      return <RadioField {...props} />;
    case 'checkbox':
      return <CheckboxField {...props} />;
    case 'select':
      return <SelectField {...props} />;
    case 'rating':
      return <RatingField {...props} />;
    case 'likert':
      return <LikertField {...props} />;
    case 'acknowledgement':
      return <AcknowledgementField {...props} />;
    case 'signature':
      return <SignatureField {...props} />;
    case 'section_header':
      return <SectionHeader {...props} />;
    case 'divider':
      return <Divider />;
    default:
      return <TextField {...props} />;
  }
};

export const FormRenderer: React.FC<FormRendererProps> = ({
  form,
  onSubmit,
  isSubmitting = false,
  branding,
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [participantInfo, setParticipantInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
  });
  
  const primaryColor = branding?.primaryColor || form.branding?.primaryColor || '#D4AF37';
  
  const validateSection = (sectionIndex: number): boolean => {
    const section = form.sections[sectionIndex];
    const newErrors: Record<string, string> = {};
    
    section.fields.forEach((field) => {
      if (field.type === 'section_header' || field.type === 'divider') return;
      
      const value = answers[field.fieldKey];
      
      if (field.required) {
        if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
          newErrors[field.fieldKey] = 'This field is required';
        }
      }
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFieldChange = (fieldKey: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [fieldKey]: value }));
    if (errors[fieldKey]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldKey];
        return newErrors;
      });
    }
  };
  
  const handleNext = () => {
    if (validateSection(currentSection)) {
      setCurrentSection((prev) => Math.min(prev + 1, form.sections.length - 1));
    }
  };
  
  const handlePrevious = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 0));
  };
  
  const handleSubmit = async () => {
    if (!validateSection(currentSection)) return;
    
    try {
      await onSubmit(answers, participantInfo);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };
  
  const section = form.sections[currentSection];
  const progress = ((currentSection + 1) / form.sections.length) * 100;
  
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your response has been submitted successfully. We appreciate your feedback.
          </p>
          <button
            onClick={() => {
              setAnswers({});
              setCurrentSection(0);
              setIsSubmitted(false);
            }}
            className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#b8962e] transition-colors"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[#050505] px-8 py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">{form.title}</h1>
              {branding?.logo && (
                <img src={branding.logo} alt="Logo" className="h-10" />
              )}
            </div>
            {form.description && (
              <p className="text-gray-400">{form.description}</p>
            )}
            
            <div className="mt-6">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Section {currentSection + 1} of {form.sections.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#D4AF37] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="px-8 py-8">
            {currentSection === 0 && form.sections[0]?.title.toLowerCase().includes('participant') && (
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Participant Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={participantInfo.name}
                      onChange={(e) => setParticipantInfo({ ...participantInfo, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-2 focus:-none focus:ringring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={participantInfo.email}
                      onChange={(e) => setParticipantInfo({ ...participantInfo, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organisation *</label>
                    <input
                      type="text"
                      value={participantInfo.company}
                      onChange={(e) => setParticipantInfo({ ...participantInfo, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                      type="text"
                      value={participantInfo.role}
                      onChange={(e) => setParticipantInfo({ ...participantInfo, role: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {section && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">{section.title}</h2>
                {section.description && (
                  <p className="text-gray-600 mb-6">{section.description}</p>
                )}
                
                <div className="space-y-6">
                  {section.fields.map((field) => {
                    if (field.type === 'section_header') {
                      return (
                        <h3 key={field.id} className="text-lg font-semibold text-gray-900 mt-8 mb-4 pb-2 border-b border-gray-200">
                          {field.label}
                        </h3>
                      );
                    }
                    
                    return (
                      <div key={field.id}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <FieldRenderer
                          field={field}
                          value={answers[field.fieldKey]}
                          onChange={(value) => handleFieldChange(field.fieldKey, value)}
                          error={errors[field.fieldKey]}
                        />
                        {errors[field.fieldKey] && (
                          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors[field.fieldKey]}
                          </p>
                        )}
                        {field.helpText && !errors[field.fieldKey] && (
                          <p className="mt-1 text-sm text-gray-500">{field.helpText}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentSection === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  currentSection === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                disabled={currentSection === 0}
              >
                <ChevronLeft className="w-5 h-5" /> Previous
              </button>
              
              {currentSection < form.sections.length - 1 ? (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#b8962e] transition-colors"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'} <Check className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Powered by Leadbold Consulting
        </p>
      </div>
    </div>
  );
};

export default FormRenderer;
