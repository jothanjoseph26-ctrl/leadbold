import { supabase } from '../lib/supabase';
import {
  FormSchema,
  FormSection,
  FormField,
  FormSubmission,
  FormSubmissionAnswer,
  FormTemplate,
  FormAnalytics,
  TrainingSession,
  FormFilter,
  generateSlug,
} from '../types/formSystem';

export const formService = {
  async getForms(): Promise<FormSchema[]> {
    const { data, error } = await supabase
      .from('forms')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return (data || []).map((item: Record<string, unknown>) => this.mapFormFromDb(item));
  },

  async getFormById(id: string): Promise<FormSchema | null> {
    const { data, error } = await supabase
      .from('forms')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) return null;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async getFormBySlug(slug: string): Promise<FormSchema | null> {
    const { data, error } = await supabase
      .from('forms')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (error) return null;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async createForm(form: Partial<FormSchema>): Promise<FormSchema> {
    const formData = this.mapFormToDb(form);
    const { data, error } = await supabase
      .from('forms')
      .insert(formData)
      .select()
      .single();
    
    if (error) throw error;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async updateForm(id: string, form: Partial<FormSchema>): Promise<FormSchema> {
    const formData = this.mapFormToDb(form);
    formData.updated_at = new Date().toISOString();
    
    const { data, error } = await supabase
      .from('forms')
      .update(formData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async deleteForm(id: string): Promise<void> {
    const { error } = await supabase
      .from('forms')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async publishForm(id: string): Promise<FormSchema> {
    const { data, error } = await supabase
      .from('forms')
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async unpublishForm(id: string): Promise<FormSchema> {
    const { data, error } = await supabase
      .from('forms')
      .update({
        status: 'draft',
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return this.mapFormFromDb(data as Record<string, unknown>);
  },

  async duplicateForm(id: string): Promise<FormSchema> {
    const original = await this.getFormById(id);
    if (!original) throw new Error('Form not found');
    
    const duplicate: Partial<FormSchema> = {
      ...original,
      title: `${original.title} (Copy)`,
      slug: generateSlug(`${original.title}-copy`),
      status: 'draft',
      version: 1,
    };
    
    return this.createForm(duplicate);
  },

  async getFormSubmissions(formId: string, filters?: FormFilter): Promise<FormSubmission[]> {
    let query = supabase
      .from('form_submissions')
      .select('*')
      .eq('form_id', formId)
      .order('submitted_at', { ascending: false });
    
    if (filters?.status) {
      query = query.eq('status', filters.status);
    }
    if (filters?.dateFrom) {
      query = query.gte('submitted_at', filters.dateFrom);
    }
    if (filters?.dateTo) {
      query = query.lte('submitted_at', filters.dateTo);
    }
    if (filters?.search) {
      query = query.or(`participant_name.ilike.%${filters.search}%,participant_email.ilike.%${filters.search}%,participant_company.ilike.%${filters.search}%`);
    }
    
    const { data: submissions, error } = await query;
    if (error) throw error;
    
    const submissionsWithAnswers = await Promise.all(
      (submissions || []).map(async (sub: Record<string, unknown>) => {
        const { data: answers } = await supabase
          .from('form_submission_answers')
          .select('*')
          .eq('submission_id', sub.id);
        
        return {
          ...this.mapSubmissionFromDb(sub),
          answers: (answers || []).map((a: Record<string, unknown>) => this.mapAnswerFromDb(a)),
        };
      })
    );
    
    return submissionsWithAnswers;
  },

  async getSubmissionById(submissionId: string): Promise<FormSubmission | null> {
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', submissionId)
      .single();
    
    if (error || !submission) return null;
    
    const { data: answers } = await supabase
      .from('form_submission_answers')
      .select('*')
      .eq('submission_id', submissionId);
    
    return {
      ...this.mapSubmissionFromDb(submission as Record<string, unknown>),
      answers: (answers || []).map((a: Record<string, unknown>) => this.mapAnswerFromDb(a)),
    };
  },

  async submitForm(formId: string, answers: Record<string, unknown>, participantInfo?: {
    name?: string;
    email?: string;
    company?: string;
    role?: string;
  }): Promise<FormSubmission> {
    const submissionRef = `SUB-${Date.now().toString(36).toUpperCase()}`;
    
    const { data: submission, error } = await supabase
      .from('form_submissions')
      .insert({
        form_id: formId,
        submission_reference: submissionRef,
        participant_name: participantInfo?.name,
        participant_email: participantInfo?.email,
        participant_company: participantInfo?.company,
        participant_role: participantInfo?.role,
        status: 'submitted',
        submitted_at: new Date().toISOString(),
      })
      .select()
      .single();
    
    if (error) throw error;
    
    const fields = await this.getFormFields(formId);
    const fieldMap = new Map(fields.map(f => [f.fieldKey, f]));
    
    const answersToInsert = Object.entries(answers).map(([fieldKey, value]) => {
      const field = fieldMap.get(fieldKey);
      return {
        submission_id: submission.id,
        field_id: field?.id,
        field_key: fieldKey,
        answer_text: typeof value === 'string' ? value : JSON.stringify(value),
        answer_number: typeof value === 'number' ? value : undefined,
        answer_boolean: typeof value === 'boolean' ? value : undefined,
        answer_json: typeof value === 'object' ? value : undefined,
      };
    });
    
    if (answersToInsert.length > 0) {
      const { error: answersError } = await supabase
        .from('form_submission_answers')
        .insert(answersToInsert);
      
      if (answersError) throw answersError;
    }
    
    return {
      ...this.mapSubmissionFromDb(submission as Record<string, unknown>),
      answers: answersToInsert.map(a => ({
        id: '',
        submissionId: submission.id,
        fieldId: a.field_id || undefined,
        fieldKey: a.field_key,
        answerText: a.answer_text || undefined,
        answerNumber: a.answer_number || undefined,
        answerBoolean: a.answer_boolean || undefined,
        answerJson: a.answer_json || undefined,
      })),
    };
  },

  async getFormAnalytics(formId: string): Promise<FormAnalytics> {
    const submissions = await this.getFormSubmissions(formId);
    const fields = await this.getFormFields(formId);
    
    const fieldStats: Record<string, { count: number; average?: number; distribution?: Record<string, number> }> = {};
    let totalRating = 0;
    let ratingCount = 0;
    let recommendYes = 0;
    
    fields.forEach(field => {
      fieldStats[field.fieldKey] = { count: 0, distribution: {} };
    });
    
    submissions.forEach(submission => {
      submission.answers.forEach(answer => {
        const stat = fieldStats[answer.fieldKey];
        if (stat) {
          stat.count++;
          if (answer.answerNumber !== undefined) {
            stat.average = (stat.average || 0) + answer.answerNumber;
          }
          if (answer.answerText) {
            stat.distribution = stat.distribution || {};
            stat.distribution[answer.answerText] = (stat.distribution[answer.answerText] || 0) + 1;
          }
        }
        
        if (answer.fieldKey === 'overall_rating' || answer.fieldKey.includes('rating')) {
          if (answer.answerNumber) {
            totalRating += answer.answerNumber;
            ratingCount++;
          }
        }
        
        if (answer.fieldKey.includes('recommend') && answer.answerText?.toLowerCase().includes('yes')) {
          recommendYes++;
        }
      });
    });
    
    Object.keys(fieldStats).forEach(key => {
      if (fieldStats[key].average !== undefined && fieldStats[key].count > 0) {
        fieldStats[key].average = fieldStats[key].average! / fieldStats[key].count;
      }
    });
    
    const submissionsByDate = submissions.reduce((acc, sub) => {
      const date = sub.submittedAt.split('T')[0];
      const existing = acc.find(a => a.date === date);
      if (existing) {
        existing.count++;
      } else {
        acc.push({ date, count: 1 });
      }
      return acc;
    }, [] as { date: string; count: number }[]);
    
    return {
      totalSubmissions: submissions.length,
      completionRate: submissions.length > 0 ? 100 : 0,
      averageRating: ratingCount > 0 ? totalRating / ratingCount : undefined,
      recommendationRate: submissions.length > 0 ? (recommendYes / submissions.length) * 100 : undefined,
      fieldStats,
      submissionsOverTime: submissionsByDate.sort((a, b) => a.date.localeCompare(b.date)),
    };
  },

  async exportSubmissionsToCSV(formId: string): Promise<string> {
    const submissions = await this.getFormSubmissions(formId);
    const fields = await this.getFormFields(formId);
    
    const headers = ['Submission Reference', 'Submitted At', 'Name', 'Email', 'Company', 'Role', ...fields.map(f => f.label)];
    const rows = submissions.map(sub => {
      const answerMap = new Map(sub.answers.map(a => [a.fieldKey, a.answerText || a.answerNumber || '']));
      return [
        sub.submissionReference,
        sub.submittedAt,
        sub.participantName || '',
        sub.participantEmail || '',
        sub.participantCompany || '',
        sub.participantRole || '',
        ...fields.map(f => answerMap.get(f.fieldKey) || ''),
      ];
    });
    
    return [headers.join(','), ...rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','))].join('\n');
  },

  async getTemplates(): Promise<FormTemplate[]> {
    const { data, error } = await supabase
      .from('form_templates')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return (data || []).map((item: Record<string, unknown>) => this.mapTemplateFromDb(item));
  },

  async getTemplateById(id: string): Promise<FormTemplate | null> {
    const { data, error } = await supabase
      .from('form_templates')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) return null;
    return this.mapTemplateFromDb(data as Record<string, unknown>);
  },

  async createTemplate(template: Partial<FormTemplate>): Promise<FormTemplate> {
    const { data, error } = await supabase
      .from('form_templates')
      .insert({
        name: template.name,
        description: template.description,
        category: template.category || 'general',
        schema_json: template.schemaJson,
        is_public: template.isPublic ?? true,
      })
      .select()
      .single();
    
    if (error) throw error;
    return this.mapTemplateFromDb(data as Record<string, unknown>);
  },

  async getTrainingSessions(): Promise<TrainingSession[]> {
    const { data, error } = await supabase
      .from('training_sessions')
      .select('*')
      .order('start_date', { ascending: false });
    
    if (error) throw error;
    return (data || []).map((item: Record<string, unknown>) => this.mapTrainingSessionFromDb(item));
  },

  async createTrainingSession(session: Partial<TrainingSession>): Promise<TrainingSession> {
    const { data, error } = await supabase
      .from('training_sessions')
      .insert({
        title: session.title,
        description: session.description,
        location: session.location,
        start_date: session.startDate,
        end_date: session.endDate,
        facilitator: session.facilitator,
        programme_type: session.programmeType,
        form_id: session.formId,
        status: session.status || 'scheduled',
      })
      .select()
      .single();
    
    if (error) throw error;
    return this.mapTrainingSessionFromDb(data as Record<string, unknown>);
  },

  async getFormFields(formId: string): Promise<FormField[]> {
    const { data, error } = await supabase
      .from('form_fields')
      .select('*')
      .eq('form_id', formId)
      .order('order_index');
    
    if (error) throw error;
    return (data || []).map((item: Record<string, unknown>) => this.mapFieldFromDb(item));
  },

  mapFormFromDb(data: Record<string, unknown>): FormSchema {
    return {
      id: data.id as string,
      title: data.title as string,
      slug: data.slug as string,
      description: data.description as string | undefined,
      category: (data.category as string) || 'general',
      status: (data.status as 'draft' | 'published' | 'archived') || 'draft',
      version: (data.version as number) || 1,
      branding: (data.branding as FormSchema['branding']) || { primaryColor: '#D4AF37' },
      sections: [],
      createdAt: data.created_at as string,
      updatedAt: data.updated_at as string,
      publishedAt: data.published_at as string | undefined,
      createdBy: (data.created_by as string) || 'admin',
    };
  },

  mapFormToDb(form: Partial<FormSchema>): Record<string, unknown> {
    return {
      title: form.title,
      slug: form.slug,
      description: form.description,
      category: form.category,
      status: form.status,
      version: form.version,
      branding: form.branding,
      created_by: form.createdBy,
    };
  },

  mapFieldFromDb(data: Record<string, unknown>): FormField {
    return {
      id: data.id as string,
      fieldKey: data.field_key as string,
      type: data.field_type as FormField['type'],
      label: data.label as string,
      required: data.is_required as boolean,
      placeholder: data.placeholder as string | undefined,
      helpText: data.help_text as string | undefined,
      options: (data.options_json as FormField['options']) || [],
      defaultValue: data.default_value as string | undefined,
      validation: (data.validation_json as FormField['validation']) || undefined,
      conditionalLogic: (data.conditional_logic_json as FormField['conditionalLogic']) || undefined,
      orderIndex: (data.order_index as number) || 0,
    };
  },

  mapSubmissionFromDb(data: Record<string, unknown>): FormSubmission {
    return {
      id: data.id as string,
      formId: data.form_id as string,
      submissionReference: data.submission_reference as string,
      participantName: data.participant_name as string | undefined,
      participantEmail: data.participant_email as string | undefined,
      participantCompany: data.participant_company as string | undefined,
      participantRole: data.participant_role as string | undefined,
      submittedAt: data.submitted_at as string,
      submittedByIp: data.submitted_by_ip as string | undefined,
      status: (data.status as 'draft' | 'submitted' | 'reviewed') || 'submitted',
      metadata: (data.metadata as Record<string, unknown>) || {},
      answers: [],
    };
  },

  mapAnswerFromDb(data: Record<string, unknown>): FormSubmissionAnswer {
    return {
      id: data.id as string,
      submissionId: data.submission_id as string,
      fieldId: data.field_id as string | undefined,
      fieldKey: data.field_key as string,
      answerText: data.answer_text as string | undefined,
      answerNumber: data.answer_number as number | undefined,
      answerBoolean: data.answer_boolean as boolean | undefined,
      answerJson: data.answer_json as unknown,
    };
  },

  mapTemplateFromDb(data: Record<string, unknown>): FormTemplate {
    return {
      id: data.id as string,
      name: data.name as string,
      description: data.description as string | undefined,
      category: (data.category as string) || 'general',
      schemaJson: (data.schema_json as Partial<FormSchema>) || {},
      isPublic: (data.is_public as boolean) ?? true,
      createdAt: data.created_at as string,
      usageCount: (data.usage_count as number) || 0,
    };
  },

  mapTrainingSessionFromDb(data: Record<string, unknown>): TrainingSession {
    return {
      id: data.id as string,
      title: data.title as string,
      description: data.description as string | undefined,
      location: data.location as string | undefined,
      startDate: data.start_date as string | undefined,
      endDate: data.end_date as string | undefined,
      facilitator: data.facilitator as string | undefined,
      programmeType: data.programme_type as string | undefined,
      formId: data.form_id as string | undefined,
      status: (data.status as TrainingSession['status']) || 'scheduled',
      createdAt: data.created_at as string,
      updatedAt: data.updated_at as string,
    };
  },
};
