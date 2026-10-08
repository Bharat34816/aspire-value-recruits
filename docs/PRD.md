# Product Requirements Document (PRD)
## Aspire Value Recruits (AVR) — Modern Recruitment Website

---

### 1. Executive Summary & Brand Positioning

**Brand Name:** Aspire Value Recruits (AVR)  
**Positioning:** Premium consultative recruitment partner specializing in Technology, Product, and Global Capability Center (GCC / GIC) staffing across India.  
**Primary Hubs:** Hyderabad & Bengaluru (South India Tech Corridors) with Pan-India executive coverage.  
**Core Promise:** "High-velocity, high-calibration tech hiring for India's leading GCCs and hyper-growth ventures."  
**Value Differentiation:**
- Boutique consultative approach over transactional keyword-matching.
- Verified delivery SLA: Calibrated shortlists delivered within 3–5 business days.
- 90-day replacement guarantee on permanent placements.
- Zero fee policy for job seekers: Strictly 100% free for candidates.
- Complete regulatory adherence under the Indian Digital Personal Data Protection (DPDP) Act.

---

### 2. Target Audiences & Dual-Funnel Strategy

A recruitment website serves two visitors with diametrically opposing intents. AVR separates these journeys immediately on the first screen:

```
                                  [ Aspire Value Recruits ]
                                              │
                      ┌───────────────────────┴───────────────────────┐
                      ▼                                               ▼
             [ For Employers ]                               [ For Candidates ]
     "Hire Top Tech & GCC Talent"                       "Discover Your Next Role"
              │                                               │
    • Submit Hiring Brief                                • Search & Filter Roles
    • GCC Scale-up Advisory                              • 1-Click Direct Application
    • Download Salary Benchmark Report                   • DPDP-Compliant CV Drop
    • Instant WhatsApp Consultation                      • Career Growth Resources
```

#### Audience 1: Hiring Managers, Talent Acquisition Heads & CXOs (Employers)
- **Pain Points:** Slow time-to-hire, low candidate calibration, GCC ramp-up bottlenecks, high ghosting rates.
- **Conversion Goals:** Submit hiring brief, book scoping consultation, download Salary & Hiring Benchmark Guide, engage via WhatsApp.

#### Audience 2: Senior Engineers, Tech Leads, Architects & Tech Professionals (Candidates)
- **Pain Points:** Spam recruiters, opaque salary ranges, slow interview feedback, data privacy concerns.
- **Conversion Goals:** Browse calibrated roles, apply directly with resume (frictionless CV upload), join confidential talent network, verify "No candidate charges" trust commitment.

---

### 3. Complete Information Architecture & Site Map

#### Core Pages
- `/` — Homepage: Dual-hero CTA, live job search preview, industry pillars, 4-step recruitment workflow, credibility metrics, gated lead magnet, latest insights, sticky WhatsApp CTA.
- `/about` — About Aspire Value Recruits: Philosophy, leadership, GCC footprint in Hyderabad and Bengaluru, values (transparency, calibration, speed).
- `/contact` — Office locations, direct consultation contacts, inquiry form, interactive Google Maps/office directions.

#### Employer Hub
- `/hire-talent` — Service models:
  - Permanent Tech Staffing
  - GCC & GIC Turnkey Build-outs
  - Leadership & Executive Search
  - Contract-to-Hire & Specialized SOW
- `/industries/[slug]` — Specialized domain pages:
  - `/industries/gcc-tech-centers` (Global Capability Centers)
  - `/industries/cloud-devops-platform`
  - `/industries/data-ai-ml`
  - `/industries/bfsi-fintech`
  - `/industries/product-engineering`
- `/how-we-work` — 4-Step calibrated process (Discovery Brief → Calibrated Shortlist in 72h → Assessment & Interviews → Offer & 90-day Guarantee).
- `/case-studies` — Real-world hiring turnarounds, GCC ramp-up case studies with quantitative impact.
- `/request-brief` — Comprehensive, step-by-step employer intake form for fast brief submission.

#### Candidate Hub
- `/jobs` — Interactive job search board with real-time filtering:
  - Keyword search (Title, Skills, Keywords)
  - Location (Hyderabad, Bengaluru, Remote, Hybrid, Mumbai, Pune, Delhi NCR)
  - Specialism / Industry (Cloud, Data/AI, Full Stack, DevOps, Product, Security)
  - Experience level (0-3 yrs, 3-6 yrs, 6-10 yrs, 10+ yrs / Leadership)
  - Job Type (Full-time, Contract, Hybrid, Remote)
- `/jobs/[slug]` — Detailed role page:
  - Complete Job Description, Requirements, Tech Stack, Compensation Benchmark.
  - JSON-LD `JobPosting` schema for automatic indexing in Google for Jobs.
  - Frictionless Direct Application Form with CV upload.
- `/talent-network` — General application / "Drop Your CV" for future unadvertised roles.
- `/candidate-faq` — Frequently Asked Questions addressing fee policy ("No candidate fees"), interview process, and DPDP data privacy rights.

#### Trust, Lead Magnet & Legal
- `/salary-guide` — Gated 2026 GCC & Tech Salary Guide (Lead magnet capturing high-intent employer & senior talent contacts).
- `/insights` — Articles and recruitment intelligence (GCC trends, salary benchmarks, hiring metrics).
- `/privacy-policy` — Compliant privacy policy explaining data storage, retention, and DPDP deletion requests.
- `/terms` — Terms of Service and agency disclaimer.

#### Admin Dashboard
- `/admin` — Secure admin workspace protected by Supabase Auth with strict email allow-list:
  - Job management (Create, Edit, Publish, Archive, Close).
  - Applicant tracking per job (Review candidate profiles, download CV via secure short-lived signed URLs).
  - Application lifecycle updates (`new`, `under_review`, `shortlisted`, `rejected`, `hired`).
  - Employer leads tracker (Review submitted briefs and contact requests).
  - CSV export for pipeline reporting.

---

### 4. Technical Architecture & Stack

| Layer | Chosen Technology | Architectural Purpose |
|---|---|---|
| **Framework** | Next.js 14+ (App Router) + TypeScript Strict | High SEO performance, Server Side Rendering (SSR), Server Actions, fast routing |
| **Styling** | Tailwind CSS + Lucide Icons + Radix UI / shadcn/ui primitives | Clean, responsive design system; accessible interactive UI components |
| **Database** | Supabase (PostgreSQL with Row Level Security) | Relational integrity for jobs, applications, and leads; strict security boundaries |
| **Authentication** | Supabase Auth | Admin dashboard protection with email allow-list and session cookies |
| **File Storage** | Supabase Storage (Private bucket `resumes`) | Secure, private file storage accessible only through short-lived signed URLs |
| **Form Validation** | Zod + React Hook Form | Full dual-sided validation (strict schema checks on client and server) |
| **Transactional Email** | Resend | Immediate applicant confirmation receipt + agency instant lead alert |
| **SEO & Discovery** | Schema.org JSON-LD (`JobPosting`, `Organization`), dynamic `sitemap.xml`, `robots.txt` | Top indexing on Google for Jobs and regional organic search |
| **Analytics & Telemetry** | Google Analytics 4 + Google Search Console | Funnel performance tracking, job view drop-off monitoring |

---

### 5. Compliance & Trust Specifications (India-Focused)

1. **Digital Personal Data Protection (DPDP) Act Compliance:**
   - Candidate application forms include an explicit, un-ticked consent checkbox linking to `/privacy-policy`.
   - Stored resumes are placed in a strictly **private** bucket—no direct public URL access.
   - Candidates are provided with an explicit self-service or email mechanism to request data erasure (`privacy@aspirevaluerecruits.com`).
   - Clear CV retention policy (e.g. 12-month active consideration cycle).

2. **Candidate Zero-Fee Policy:**
   - Highlighted banner and footer badge: *"Aspire Value Recruits never charges candidates any fees for recruitment or placement services. Beware of fraudulent offers."*

3. **WhatsApp Instant Engagement:**
   - WhatsApp Click-to-Chat button strategically integrated for rapid responses:
     - Pre-filled message for Employers: *"Hello Aspire Value Recruits team, I would like to discuss hiring tech talent for my team."*
     - Pre-filled message for Candidates: *"Hello Aspire Value Recruits team, I would like to inquire about current opportunities."*

4. **SEO Regional Anchors:**
   - Target landing pages configured for localized organic authority:
     - *"Top Tech Recruitment Agency in Hyderabad"*
     - *"GCC Staffing & Capability Center Hiring in Bengaluru"*

---

### 6. Phase-by-Phase Roadmap

- **Phase 0:** Requirements & Design Docs (PRD, Design System, Database Schema).
- **Phase 1:** Project Scaffold (Next.js App Router, Tailwind, TypeScript, Header with Dual CTA, Footer, Home placeholder).
- **Phase 2:** Database & Security (Supabase migrations, RLS policies, indexes, schemas).
- **Phase 3:** Public Job Board (`/jobs`, search, filters, pagination, `/jobs/[slug]`, JSON-LD schema).
- **Phase 4:** Application Flow (Zod server action, resume upload to private bucket, Resend notifications, honeypot spam protection).
- **Phase 5:** Employer Funnel (`/hire-talent`, `/request-brief`, lead capture, WhatsApp CTA).
- **Phase 6:** Admin Dashboard (`/admin`, auth gate, job management, candidate pipeline, signed CV download).
- **Phase 7:** Content, Trust & Localized SEO (`/about`, `/contact`, `/salary-guide`, regional landing pages, metadata).
- **Phase 8:** Lead Magnet & Conversion Polish (Gated salary benchmark download, promo banners).
- **Phase 9:** Production Verification & Launch (Lighthouse 90+ targets, mobile responsive stress-test, build verification).
