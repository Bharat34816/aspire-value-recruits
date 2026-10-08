# Database Schema & Security Architecture
## Aspire Value Recruits (AVR)

---

### 1. Database Overview

The application utilizes Supabase (PostgreSQL 15+) with Row Level Security (RLS) enabled on all tables.
The architecture enforces strict segregation between public read access for active jobs, anonymous write access for applicant and lead submissions, and restricted administrative read/write access.

---

### 2. Entity Relationship Summary

```
   ┌──────────────────┐               ┌─────────────────────┐
   │      JOBS        │◄──────────────┤    APPLICATIONS     │
   │──────────────────│ 1           N │─────────────────────│
   │ id (UUID, PK)    │               │ id (UUID, PK)       │
   │ slug (TEXT, UQ)  │               │ job_id (UUID, FK)   │
   │ title (TEXT)     │               │ candidate_id (UUID) ├──┐
   │ status (ENUM)    │               │ resume_url (TEXT)   │  │
   └──────────────────┘               │ status (ENUM)       │  │
                                      └─────────────────────┘  │
   ┌──────────────────┐                                        │
   │  EMPLOYER_LEADS  │               ┌─────────────────────┐  │
   │──────────────────│               │     CANDIDATES      │◄─┘
   │ id (UUID, PK)    │               │─────────────────────│
   │ company_name     │               │ id (UUID, PK)       │
   │ hiring_brief     │               │ email (TEXT, UQ)    │
   │ status (ENUM)    │               │ full_name (TEXT)    │
   └──────────────────┘               └─────────────────────┘
```

---

### 3. Table Definitions

#### 1. `jobs`
Stores published, draft, and closed job listings.
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `slug` (TEXT, Unique, Indexed) — SEO URL slug (e.g. `senior-cloud-architect-hyderabad`)
- `title` (TEXT, Not Null) — Role title
- `company_name` (TEXT, Nullable) — Client company name (null if confidential)
- `is_confidential` (BOOLEAN, Default `false`)
- `location` (TEXT, Not Null, Indexed) — e.g. "Hyderabad", "Bengaluru", "Remote"
- `workplace_type` (TEXT, Default `'hybrid'`) — `'on_site'`, `'hybrid'`, `'remote'`
- `employment_type` (TEXT, Default `'full_time'`) — `'full_time'`, `'contract'`, `'c2h'`
- `experience_min` (INTEGER, Not Null) — Min years of experience
- `experience_max` (INTEGER, Not Null) — Max years of experience
- `salary_min` (NUMERIC, Nullable) — Minimum annual salary in INR (Lakhs)
- `salary_max` (NUMERIC, Nullable) — Maximum annual salary in INR (Lakhs)
- `salary_currency` (TEXT, Default `'INR'`)
- `description` (TEXT, Not Null) — Detailed job description (Markdown / HTML)
- `requirements` (TEXT[], Default `'{}'`) — Key qualifications list
- `skills` (TEXT[], Default `'{}'`, Indexed GIN) — Tech tags (e.g. `['AWS', 'Kubernetes', 'Go']`)
- `industry` (TEXT, Not Null, Indexed) — e.g. "GCC & Tech Centers", "FinTech", "Cloud & Platform"
- `status` (TEXT, Default `'draft'`, Indexed) — `'draft'`, `'published'`, `'closed'`, `'archived'`
- `published_at` (TIMESTAMPTZ, Nullable)
- `created_at` (TIMESTAMPTZ, Default `now()`)
- `updated_at` (TIMESTAMPTZ, Default `now()`)

#### 2. `candidates`
Stores candidate talent profiles (created or updated upon CV submission).
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `email` (TEXT, Unique, Not Null, Indexed)
- `full_name` (TEXT, Not Null)
- `phone` (TEXT, Not Null)
- `current_location` (TEXT, Not Null)
- `total_experience_years` (NUMERIC, Not Null)
- `notice_period_days` (INTEGER, Default `30`)
- `current_ctc` (NUMERIC, Nullable)
- `expected_ctc` (NUMERIC, Nullable)
- `primary_skills` (TEXT[], Default `'{}'`)
- `linkedin_url` (TEXT, Nullable)
- `dpdp_consent_granted` (BOOLEAN, Not Null, Default `false`)
- `dpdp_consent_timestamp` (TIMESTAMPTZ, Nullable)
- `created_at` (TIMESTAMPTZ, Default `now()`)
- `updated_at` (TIMESTAMPTZ, Default `now()`)

#### 3. `applications`
Stores specific applications tied to a job posting.
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `job_id` (UUID, References `jobs(id)` ON DELETE SET NULL, Indexed)
- `candidate_id` (UUID, References `candidates(id)` ON DELETE CASCADE, Indexed)
- `resume_file_path` (TEXT, Not Null) — Path within private Supabase Storage bucket (`resumes/candidate_id/uuid.pdf`)
- `cover_note` (TEXT, Nullable)
- `status` (TEXT, Default `'new'`, Indexed) — `'new'`, `'screening'`, `'shortlisted'`, `'client_review'`, `'rejected'`, `'hired'`
- `notes` (TEXT, Nullable) — Internal recruiter notes
- `created_at` (TIMESTAMPTZ, Default `now()`)
- `updated_at` (TIMESTAMPTZ, Default `now()`)

#### 4. `employer_leads`
Stores hiring briefs submitted by talent acquisition leaders and CXOs.
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `company_name` (TEXT, Not Null)
- `contact_person` (TEXT, Not Null)
- `work_email` (TEXT, Not Null, Indexed)
- `phone` (TEXT, Not Null)
- `role_title` (TEXT, Not Null)
- `headcount` (INTEGER, Default `1`)
- `hiring_model` (TEXT, Default `'permanent'`) — `'permanent'`, `'contract'`, `'gcc_buildout'`, `'executive_search'`
- `urgency` (TEXT, Default `'medium'`) — `'immediate'`, `'30_days'`, `'quarterly'`
- `budget_range` (TEXT, Nullable)
- `message` (TEXT, Nullable)
- `status` (TEXT, Default `'new'`, Indexed) — `'new'`, `'contacted'`, `'in_scoping'`, `'closed_won'`, `'closed_lost'`
- `created_at` (TIMESTAMPTZ, Default `now()`)

#### 5. `contact_messages`
General inquiries submitted through `/contact`.
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `name` (TEXT, Not Null)
- `email` (TEXT, Not Null)
- `phone` (TEXT, Nullable)
- `subject` (TEXT, Not Null)
- `message` (TEXT, Not Null)
- `is_resolved` (BOOLEAN, Default `false`)
- `created_at` (TIMESTAMPTZ, Default `now()`)

#### 6. `admin_users`
Admin email allow-list for access control to `/admin`.
- `id` (UUID, Primary Key, `default gen_random_uuid()`)
- `email` (TEXT, Unique, Not Null, Indexed)
- `role` (TEXT, Default `'recruiter'`) — `'admin'`, `'recruiter'`
- `created_at` (TIMESTAMPTZ, Default `now()`)

---

### 4. Row Level Security (RLS) Policies

All tables have RLS enabled: `ALTER TABLE <table_name> ENABLE ROW LEVEL SECURITY;`.

| Table | Anonymous / Public | Authenticated Admin |
|---|---|---|
| `jobs` | `SELECT` where `status = 'published'` | `SELECT`, `INSERT`, `UPDATE`, `DELETE` (ALL) |
| `candidates` | `INSERT` only (via server action) | `SELECT`, `UPDATE` (ALL) |
| `applications` | `INSERT` only (via server action) | `SELECT`, `UPDATE` (ALL) |
| `employer_leads` | `INSERT` only | `SELECT`, `UPDATE` (ALL) |
| `contact_messages` | `INSERT` only | `SELECT`, `UPDATE` (ALL) |
| `admin_users` | No access | `SELECT` where `auth.jwt() ->> 'email' = email` |

---

### 5. Storage Security (Private Resumes Bucket)

- **Bucket Name:** `resumes`
- **Bucket Public Visibility:** `false` (Private)
- **Upload Policy:** Allows authenticated server actions (or service role) to upload resume files.
- **Download Policy:** Prohibits direct anonymous access. Admins retrieve resumes via 60-second time-limited signed URLs (`supabase.storage.from('resumes').createSignedUrl(path, 60)`).
