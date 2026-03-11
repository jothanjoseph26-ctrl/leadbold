export type FieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'email'
  | 'phone'
  | 'date'
  | 'time'
  | 'datetime'
  | 'url'
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'multiselect'
  | 'rating'
  | 'likert'
  | 'matrix'
  | 'acknowledgement'
  | 'signature'
  | 'file'
  | 'hidden'
  | 'section_header'
  | 'divider';

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FieldValidation {
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  patternMessage?: string;
  fileTypes?: string[];
  maxFileSize?: number;
}

export interface ConditionalLogic {
  dependsOn: string;
  operator: 'equals' | 'not_equals' | 'includes' | 'not_includes' | 'greater_than' | 'less_than';
  value: string | string[] | number;
  action: 'show' | 'hide' | 'require' | 'unrequire';
}

export interface MatrixConfig {
  rows: string[];
  columns: string[];
  rowLabels?: string[];
  columnLabels?: string[];
}

export interface LikertConfig {
  scale: number;
  labels: string[];
  statements: string[];
}

export interface FormField {
  id: string;
  fieldKey: string;
  type: FieldType;
  label: string;
  required: boolean;
  placeholder?: string;
  helpText?: string;
  options?: FormFieldOption[];
  defaultValue?: string;
  validation?: FieldValidation;
  conditionalLogic?: ConditionalLogic;
  matrixConfig?: MatrixConfig;
  likertConfig?: LikertConfig;
  maxRating?: number;
  ratingLabels?: string[];
  orderIndex: number;
}

export interface FormSection {
  id: string;
  title: string;
  description?: string;
  orderIndex: number;
  fields: FormField[];
}

export interface FormBranding {
  primaryColor: string;
  logo?: string;
  secondaryColor?: string;
}

export interface FormSchema {
  id: string;
  title: string;
  slug: string;
  description?: string;
  category: string;
  status: 'draft' | 'published' | 'archived';
  version: number;
  branding: FormBranding;
  sections: FormSection[];
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  createdBy: string;
}

export interface FormSubmissionAnswer {
  id: string;
  submissionId: string;
  fieldId?: string;
  fieldKey: string;
  answerText?: string;
  answerNumber?: number;
  answerBoolean?: boolean;
  answerJson?: unknown;
}

export interface FormSubmission {
  id: string;
  formId: string;
  submissionReference: string;
  participantName?: string;
  participantEmail?: string;
  participantCompany?: string;
  participantRole?: string;
  trainingSessionId?: string;
  submittedAt: string;
  submittedByIp?: string;
  status: 'draft' | 'submitted' | 'reviewed';
  metadata?: Record<string, unknown>;
  answers: FormSubmissionAnswer[];
}

export interface FormTemplate {
  id: string;
  name: string;
  description?: string;
  category: string;
  schemaJson: Partial<FormSchema>;
  isPublic: boolean;
  createdAt: string;
  usageCount: number;
}

export interface TrainingSession {
  id: string;
  title: string;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  facilitator?: string;
  programmeType?: string;
  formId?: string;
  status: 'scheduled' | 'ongoing' | 'completed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface FormAnalytics {
  totalSubmissions: number;
  completionRate: number;
  averageRating?: number;
  recommendationRate?: number;
  fieldStats: Record<string, {
    count: number;
    average?: number;
    distribution?: Record<string, number>;
  }>;
  submissionsOverTime: { date: string; count: number }[];
}

export interface FormFilter {
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  trainingSessionId?: string;
}

export const FIELD_TYPE_LABELS: Record<FieldType, string> = {
  text: 'Short Text',
  textarea: 'Long Text',
  number: 'Number',
  email: 'Email',
  phone: 'Phone',
  date: 'Date',
  time: 'Time',
  datetime: 'Date & Time',
  url: 'URL',
  radio: 'Radio Buttons',
  checkbox: 'Checkboxes',
  select: 'Dropdown Select',
  multiselect: 'Multi-Select',
  rating: 'Star Rating',
  likert: 'Likert Scale',
  matrix: 'Matrix/Grid',
  acknowledgement: 'Agreement/Consent',
  signature: 'Signature',
  file: 'File Upload',
  hidden: 'Hidden Field',
  section_header: 'Section Heading',
  divider: 'Divider',
};

export const FIELD_TYPE_ICONS: Record<FieldType, string> = {
  text: 'Type',
  textarea: 'AlignLeft',
  number: 'Hash',
  email: 'Mail',
  phone: 'Phone',
  date: 'Calendar',
  time: 'Clock',
  datetime: 'CalendarDays',
  url: 'Link',
  radio: 'CircleDot',
  checkbox: 'CheckSquare',
  select: 'ChevronDown',
  multiselect: 'ListPlus',
  rating: 'Star',
  likert: 'BarChart3',
  matrix: 'Grid3X3',
  acknowledgement: 'CheckCircle',
  signature: 'PenTool',
  file: 'Upload',
  hidden: 'EyeOff',
  section_header: 'Heading',
  divider: 'Minus',
};

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    + '-' + Date.now().toString(36);
}

export function generateFieldKey(label: string): string {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/(^_|_$)/g, '');
}

export function createEmptyForm(): FormSchema {
  return {
    id: generateId(),
    title: 'Untitled Form',
    slug: generateSlug('Untitled Form'),
    description: '',
    category: 'general',
    status: 'draft',
    version: 1,
    branding: {
      primaryColor: '#D4AF37',
    },
    sections: [
      {
        id: generateId(),
        title: 'Section 1',
        description: '',
        orderIndex: 0,
        fields: [],
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: 'admin',
  };
}

export function createEmptyField(type: FieldType = 'text'): FormField {
  const id = generateId();
  return {
    id,
    fieldKey: generateFieldKey(`field_${id}`),
    type,
    label: `New ${FIELD_TYPE_LABELS[type] || 'Field'}`,
    required: false,
    orderIndex: 0,
  };
}

export function createEmptySection(title: string = 'New Section'): FormSection {
  return {
    id: generateId(),
    title,
    description: '',
    orderIndex: 0,
    fields: [],
  };
}
