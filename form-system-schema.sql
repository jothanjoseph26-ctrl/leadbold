-- Form Management System Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. FORMS TABLE
CREATE TABLE IF NOT EXISTS forms (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'general',
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    version INTEGER DEFAULT 1,
    branding JSONB DEFAULT '{"primaryColor": "#D4AF37", "logo": null}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published_at TIMESTAMP WITH TIME ZONE,
    created_by TEXT DEFAULT 'admin'
);

-- 2. FORM SECTIONS TABLE
CREATE TABLE IF NOT EXISTS form_sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    form_id UUID NOT NULL REFERENCES forms(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. FORM FIELDS TABLE
CREATE TABLE IF NOT EXISTS form_fields (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    form_id UUID NOT NULL REFERENCES forms(id) ON DELETE CASCADE,
    section_id UUID REFERENCES form_sections(id) ON DELETE CASCADE,
    field_key TEXT NOT NULL,
    label TEXT NOT NULL,
    field_type TEXT NOT NULL,
    help_text TEXT,
    placeholder TEXT,
    is_required BOOLEAN DEFAULT FALSE,
    default_value TEXT,
    options_json JSONB DEFAULT '[]',
    validation_json JSONB DEFAULT '{}',
    conditional_logic_json JSONB DEFAULT null,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. FORM SUBMISSIONS TABLE
CREATE TABLE IF NOT EXISTS form_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    form_id UUID NOT NULL REFERENCES forms(id) ON DELETE CASCADE,
    submission_reference TEXT UNIQUE NOT NULL,
    participant_name TEXT,
    participant_email TEXT,
    participant_company TEXT,
    participant_role TEXT,
    training_session_id UUID,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    submitted_by_ip INET,
    status TEXT DEFAULT 'submitted' CHECK (status IN ('draft', 'submitted', 'reviewed')),
    metadata JSONB DEFAULT '{}'
);

-- 5. FORM SUBMISSION ANSWERS TABLE
CREATE TABLE IF NOT EXISTS form_submission_answers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    submission_id UUID NOT NULL REFERENCES form_submissions(id) ON DELETE CASCADE,
    field_id UUID REFERENCES form_fields(id) ON DELETE SET NULL,
    field_key TEXT NOT NULL,
    answer_text TEXT,
    answer_number NUMERIC,
    answer_boolean BOOLEAN,
    answer_json JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. FORM TEMPLATES TABLE
CREATE TABLE IF NOT EXISTS form_templates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT DEFAULT 'general',
    schema_json JSONB NOT NULL,
    is_public BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    usage_count INTEGER DEFAULT 0
);

-- 7. TRAINING SESSIONS TABLE
CREATE TABLE IF NOT EXISTS training_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    location TEXT,
    start_date DATE,
    end_date DATE,
    facilitator TEXT,
    programme_type TEXT,
    form_id UUID REFERENCES forms(id),
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'ongoing', 'completed', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_forms_slug ON forms(slug);
CREATE INDEX IF NOT EXISTS idx_forms_status ON forms(status);
CREATE INDEX IF NOT EXISTS idx_form_sections_form_id ON form_sections(form_id);
CREATE INDEX IF NOT EXISTS idx_form_fields_form_id ON form_fields(form_id);
CREATE INDEX IF NOT EXISTS idx_form_fields_section_id ON form_fields(section_id);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_id ON form_submissions(form_id);
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON form_submissions(submitted_at);
CREATE INDEX IF NOT EXISTS idx_form_submission_answers_submission_id ON form_submission_answers(submission_id);
CREATE INDEX IF NOT EXISTS idx_training_sessions_form_id ON training_sessions(form_id);

-- Create update trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_forms_updated_at
    BEFORE UPDATE ON forms
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_training_sessions_updated_at
    BEFORE UPDATE ON training_sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at();

-- Insert default form templates
INSERT INTO form_templates (name, description, category, schema_json) VALUES
(
    'Training Feedback Form',
    'Comprehensive training feedback and assessment form',
    'feedback',
    '{
      "title": "Training Feedback Form",
      "description": "Please share your feedback about the training",
      "sections": [
        {
          "id": "participant_info",
          "title": "Participant Information",
          "fields": [
            {"id": "full_name", "fieldKey": "full_name", "type": "text", "label": "Full Name", "required": true},
            {"id": "email", "fieldKey": "email", "type": "email", "label": "Email Address", "required": true},
            {"id": "company", "fieldKey": "company", "type": "text", "label": "Company / Organisation", "required": true}
          ]
        },
        {
          "id": "feedback",
          "title": "Training Feedback",
          "fields": [
            {"id": "rating", "fieldKey": "rating", "type": "rating", "label": "Overall Rating", "required": true, "maxRating": 5},
            {"id": "recommend", "fieldKey": "recommend", "type": "radio", "label": "Would you recommend this training?", "required": true, "options": [{"label": "Yes", "value": "yes"}, {"label": "No", "value": "no"}]},
            {"id": "comments", "fieldKey": "comments", "type": "textarea", "label": "Additional Comments", "required": false}
          ]
        }
      ]
    }'::jsonb
),
(
    'Event Registration Form',
    'Standard event registration with attendee details',
    'registration',
    '{
      "title": "Event Registration",
      "description": "Register for this event",
      "sections": [
        {
          "id": "personal_info",
          "title": "Personal Information",
          "fields": [
            {"id": "full_name", "fieldKey": "full_name", "type": "text", "label": "Full Name", "required": true},
            {"id": "email", "fieldKey": "email", "type": "email", "label": "Email", "required": true},
            {"id": "phone", "fieldKey": "phone", "type": "phone", "label": "Phone Number", "required": false},
            {"id": "organisation", "fieldKey": "organisation", "type": "text", "label": "Organisation", "required": true},
            {"id": "role", "fieldKey": "role", "type": "text", "label": "Job Title", "required": true}
          ]
        },
        {
          "id": "preferences",
          "title": "Preferences",
          "fields": [
            {"id": "dietary", "fieldKey": "dietary", "type": "select", "label": "Dietary Requirements", "required": false, "options": [{"label": "None", "value": "none"}, {"label": "Vegetarian", "value": "vegetarian"}, {"label": "Vegan", "value": "vegan"}, {"label": "Halal", "value": "halal"}, {"label": "Kosher", "value": "kosher"}]},
            {"id": "accessibility", "fieldKey": "accessibility", "type": "checkbox", "label": "Accessibility Requirements", "required": false, "options": [{"label": "Wheelchair access needed", "value": "wheelchair"}]}
          ]
        }
      ]
    }'::jsonb
),
(
    'Leadership Assessment',
    'Leadership competencies assessment form',
    'assessment',
    '{
      "title": "Leadership Assessment",
      "description": "Evaluate leadership competencies",
      "sections": [
        {
          "id": "self_assessment",
          "title": "Self Assessment",
          "fields": [
            {"id": "strategic_thinking", "fieldKey": "strategic_thinking", "type": "likert", "label": "Strategic Thinking", "required": true, "scale": 5, "labels": ["Needs Development", "Developing", "Competent", "Proficient", "Expert"]},
            {"id": "communication", "fieldKey": "communication", "type": "likert", "label": "Communication Skills", "required": true, "scale": 5, "labels": ["Needs Development", "Developing", "Competent", "Proficient", "Expert"]},
            {"id": "team_leadership", "fieldKey": "team_leadership", "type": "likert", "label": "Team Leadership", "required": true, "scale": 5, "labels": ["Needs Development", "Developing", "Competent", "Proficient", "Expert"]},
            {"id": "decision_making", "fieldKey": "decision_making", "type": "likert", "label": "Decision Making", "required": true, "scale": 5, "labels": ["Needs Development", "Developing", "Competent", "Proficient", "Expert"]}
          ]
        },
        {
          "id": "goals",
          "title": "Development Goals",
          "fields": [
            {"id": "strengths", "fieldKey": "strengths", "type": "textarea", "label": "What are your key strengths?", "required": true},
            {"id": "areas_for_growth", "fieldKey": "areas_for_growth", "type": "textarea", "label": "Areas for growth", "required": true},
            {"id": "development_goals", "fieldKey": "development_goals", "type": "textarea", "label": "Development goals for next 6 months", "required": false}
          ]
        }
      ]
    }'::jsonb
);
