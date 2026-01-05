-- LeadBold Database Setup Script
-- Run this in your Supabase SQL Editor to create the required tables

-- Create courses table
CREATE TABLE IF NOT EXISTS public.courses (
    id TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create summits table
CREATE TABLE IF NOT EXISTS public.summits (
    id TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create personnel table
CREATE TABLE IF NOT EXISTS public.personnel (
    id TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create insights table
CREATE TABLE IF NOT EXISTS public.insights (
    id TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.summits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.personnel ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.insights ENABLE ROW LEVEL SECURITY;

-- Create policies for anonymous access (read-only for public data)
CREATE POLICY "Allow anonymous read access on courses" ON public.courses
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous read access on summits" ON public.summits
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous read access on personnel" ON public.personnel
    FOR SELECT USING (true);

CREATE POLICY "Allow anonymous read access on insights" ON public.insights
    FOR SELECT USING (true);

-- For admin functionality, you might want to add authenticated user policies
-- These would require proper authentication setup

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER handle_updated_at_courses
    BEFORE UPDATE ON public.courses
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_summits
    BEFORE UPDATE ON public.summits
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_personnel
    BEFORE UPDATE ON public.personnel
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_updated_at_insights
    BEFORE UPDATE ON public.insights
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
