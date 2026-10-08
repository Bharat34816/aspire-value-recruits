-- ==============================================================================
-- Aspire Value Recruits (AVR) - Initial Database Schema Migration
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. JOBS TABLE
CREATE TABLE IF NOT EXISTS public.jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    company_name TEXT,
    is_confidential BOOLEAN DEFAULT FALSE,
    location TEXT NOT NULL,
    workplace_type TEXT DEFAULT 'hybrid',
    employment_type TEXT DEFAULT 'full_time',
    experience_min INTEGER NOT NULL DEFAULT 0,
    experience_max INTEGER NOT NULL DEFAULT 10,
    salary_min NUMERIC,
    salary_max NUMERIC,
    salary_currency TEXT DEFAULT 'INR',
    description TEXT NOT NULL,
    requirements TEXT[] DEFAULT '{}',
    skills TEXT[] DEFAULT '{}',
    industry TEXT NOT NULL,
    status TEXT DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for Jobs
CREATE INDEX IF NOT EXISTS idx_jobs_slug ON public.jobs(slug);
CREATE INDEX IF NOT EXISTS idx_jobs_location ON public.jobs(location);
CREATE INDEX IF NOT EXISTS idx_jobs_industry ON public.jobs(industry);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON public.jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_skills ON public.jobs USING GIN(skills);

-- 2. CANDIDATES TABLE
CREATE TABLE IF NOT EXISTS public.candidates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    current_location TEXT NOT NULL,
    total_experience_years NUMERIC NOT NULL,
    notice_period_days INTEGER DEFAULT 30,
    current_ctc NUMERIC,
    expected_ctc NUMERIC,
    primary_skills TEXT[] DEFAULT '{}',
    linkedin_url TEXT,
    dpdp_consent_granted BOOLEAN NOT NULL DEFAULT FALSE,
    dpdp_consent_timestamp TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_candidates_email ON public.candidates(email);

-- 3. APPLICATIONS TABLE
CREATE TABLE IF NOT EXISTS public.applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID REFERENCES public.jobs(id) ON DELETE SET NULL,
    candidate_id UUID REFERENCES public.candidates(id) ON DELETE CASCADE,
    resume_file_path TEXT NOT NULL,
    cover_note TEXT,
    status TEXT DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_applications_job_id ON public.applications(job_id);
CREATE INDEX IF NOT EXISTS idx_applications_candidate_id ON public.applications(candidate_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);

-- 4. EMPLOYER LEADS TABLE
CREATE TABLE IF NOT EXISTS public.employer_leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    work_email TEXT NOT NULL,
    phone TEXT NOT NULL,
    role_title TEXT NOT NULL,
    headcount INTEGER DEFAULT 1,
    hiring_model TEXT DEFAULT 'permanent',
    urgency TEXT DEFAULT 'medium',
    budget_range TEXT,
    message TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_employer_leads_email ON public.employer_leads(work_email);
CREATE INDEX IF NOT EXISTS idx_employer_leads_status ON public.employer_leads(status);

-- 5. CONTACT MESSAGES TABLE
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    is_resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. ADMIN USERS ALLOWLIST TABLE
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    role TEXT DEFAULT 'recruiter',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_admin_users_email ON public.admin_users(email);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

-- Enable RLS on all tables
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employer_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Helper check function for admin authentication
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_users
        WHERE email = auth.jwt() ->> 'email'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- JOBS POLICIES:
-- 1. Public can read published jobs
CREATE POLICY "Public read published jobs"
ON public.jobs FOR SELECT
USING (status = 'published');

-- 2. Authenticated admins can perform all actions on jobs
CREATE POLICY "Admin full access jobs"
ON public.jobs FOR ALL
TO authenticated
USING (public.is_admin());

-- CANDIDATES POLICIES:
-- 1. Public can insert candidate profiles via application flow
CREATE POLICY "Public insert candidate"
ON public.candidates FOR INSERT
WITH CHECK (true);

-- 2. Admins can view and update candidates
CREATE POLICY "Admin full access candidates"
ON public.candidates FOR ALL
TO authenticated
USING (public.is_admin());

-- APPLICATIONS POLICIES:
-- 1. Public can insert applications
CREATE POLICY "Public insert application"
ON public.applications FOR INSERT
WITH CHECK (true);

-- 2. Admins can view and manage applications
CREATE POLICY "Admin full access applications"
ON public.applications FOR ALL
TO authenticated
USING (public.is_admin());

-- EMPLOYER LEADS POLICIES:
-- 1. Public can insert leads
CREATE POLICY "Public insert employer leads"
ON public.employer_leads FOR INSERT
WITH CHECK (true);

-- 2. Admins can view and manage leads
CREATE POLICY "Admin full access employer leads"
ON public.employer_leads FOR ALL
TO authenticated
USING (public.is_admin());

-- CONTACT MESSAGES POLICIES:
-- 1. Public can insert contact messages
CREATE POLICY "Public insert contact messages"
ON public.contact_messages FOR INSERT
WITH CHECK (true);

-- 2. Admins can view and manage contact messages
CREATE POLICY "Admin full access contact messages"
ON public.contact_messages FOR ALL
TO authenticated
USING (public.is_admin());

-- ADMIN USERS POLICIES:
-- 1. Admins can view admin list
CREATE POLICY "Admin view admin list"
ON public.admin_users FOR SELECT
TO authenticated
USING (public.is_admin());
