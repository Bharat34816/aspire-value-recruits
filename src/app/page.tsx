import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Building2,
  Search,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Users,
  FileText,
  ChevronRight,
  MessageSquare,
} from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    company: 'Tier-1 Global Capability Center',
    isConfidential: true,
    location: 'Hyderabad (Hitec City)',
    workType: 'Hybrid',
    experience: '12-16 Yrs',
    salary: '₹55L - ₹75L PA',
    skills: ['AWS', 'Terraform', 'Distributed Systems', 'Kubernetes'],
    posted: '2 days ago',
  },
  {
    id: '2',
    slug: 'staff-generative-ai-engineer',
    title: 'Staff Generative AI / LLM Engineer',
    company: 'Enterprise AI Innovation Hub',
    isConfidential: false,
    location: 'Bengaluru (Bellandur)',
    workType: 'Hybrid',
    experience: '7-11 Yrs',
    salary: '₹48L - ₹65L PA',
    skills: ['Python', 'LangChain', 'PyTorch', 'Vector DBs', 'RAG'],
    posted: '1 day ago',
  },
  {
    id: '3',
    slug: 'lead-devops-platform-engineer',
    title: 'Lead DevOps & Platform Engineer',
    company: 'FinTech GCC',
    isConfidential: true,
    location: 'Hyderabad (Financial District)',
    workType: 'Hybrid',
    experience: '8-12 Yrs',
    skills: ['Kubernetes', 'CI/CD', 'Docker', 'Go', 'GCP'],
    salary: '₹38L - ₹50L PA',
    posted: '3 days ago',
  },
  {
    id: '4',
    slug: 'head-of-product-engineering',
    title: 'Head of Product Engineering',
    company: 'High-Growth Global SaaS',
    isConfidential: false,
    location: 'Bengaluru / Hybrid',
    workType: 'Full-time',
    experience: '14-18 Yrs',
    salary: '₹70L - ₹95L PA',
    skills: ['Engineering Leadership', 'Microservices', 'System Design'],
    posted: 'Just now',
  },
];

const INDUSTRIES = [
  {
    title: 'Global Capability Centers (GCCs)',
    description: 'Turnkey engineering build-outs and specialized leadership search for Fortune 500 tech hubs.',
    icon: Building2,
    count: '32 Active Roles',
  },
  {
    title: 'Cloud & Distributed Systems',
    description: 'Enterprise architects, cloud migration leads, and Site Reliability Engineers for modern platforms.',
    icon: Zap,
    count: '24 Active Roles',
  },
  {
    title: 'Data, Analytics & Generative AI',
    description: 'Staff ML scientists, LLM prompt engineers, data platform architects, and MLOps specialists.',
    icon: TrendingUp,
    count: '19 Active Roles',
  },
  {
    title: 'FinTech, Payments & BFSI Tech',
    description: 'Core banking engineers, high-frequency trading developers, and compliance systems leads.',
    icon: Award,
    count: '15 Active Roles',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION WITH DUAL AUDIENCE CTAs */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              India&apos;s Dedicated Tech & GCC Recruitment Consultancy
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              High-Velocity Tech Hiring for India’s Premier{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy underline-offset-8">
                GCCs & Ventures
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Boutique consultative talent acquisition in <strong>Hyderabad</strong> and <strong>Bengaluru</strong>. Calibrated shortlists delivered in 72 hours, backed by a 90-day replacement guarantee.
            </p>

            {/* Equal Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/request-brief"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <Building2 className="w-5 h-5" />
                I&apos;m Hiring (Submit Brief)
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/jobs"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition flex items-center justify-center gap-2"
              >
                <Briefcase className="w-5 h-5 text-blue-600" />
                Find a Job (Candidate Portal)
              </Link>
            </div>

            {/* Trust Assurance Strip */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Fee for Job Seekers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>72-Hour Calibrated Shortlists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>DPDP Act (India) Compliant</span>
              </div>
            </div>

            {/* Recruitment Quotation Banner */}
            <div className="mt-10 max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 p-8 text-white text-left shadow-xl border border-blue-700/50 relative overflow-hidden">
              <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest block mb-2">
                ✦ FOUNDER&apos;S PHILOSOPHY ON RECRUITMENT
              </span>
              <blockquote className="text-base sm:text-xl font-medium italic text-slate-100 leading-relaxed">
                &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-blue-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-sm">
                    VA
                  </div>
                  <div>
                    <span className="font-bold text-sm block">Vishnu Vardhan Reddy Alavala</span>
                    <span className="text-xs text-blue-200">Founder &amp; Managing Director, Aspire Value Recruits</span>
                  </div>
                </div>
                <Link
                  href="/insights"
                  className="text-xs font-bold text-cyan-300 hover:text-white underline"
                >
                  Read Mission &amp; Insights →
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Live Job Search Bar Box */}
          <div className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200/90 p-4 sm:p-5">
            <form action="/jobs" method="GET" className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5 relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="q"
                  placeholder="Role, skill (e.g. Cloud Architect, AI, Go)..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-4 relative">
                <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="location"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-700"
                  defaultValue=""
                >
                  <option value="">All Locations</option>
                  <option value="Hyderabad">Hyderabad (Hitec City / Financial Dist)</option>
                  <option value="Bengaluru">Bengaluru (Bellandur / Whitefield)</option>
                  <option value="Remote">Remote (India)</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full h-full py-3 px-6 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Search Jobs
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. REPUTATION & PROOF METRICS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">72 hrs</div>
              <div className="text-xs sm:text-sm text-slate-400">Avg. First Shortlist SLA</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">94.2%</div>
              <div className="text-xs sm:text-sm text-slate-400">12-Month Candidate Retention</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">450+</div>
              <div className="text-xs sm:text-sm text-slate-400">Tech & GCC Leaders Placed</div>
            </div>
            <div className="space-y-1 pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">₹0</div>
              <div className="text-xs sm:text-sm text-slate-400">Candidate Placement Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED CALIBRATED ROLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">Opportunities</div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Featured Calibrated Openings
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Hand-vetted engineering and leadership mandates across Hyderabad & Bengaluru.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
          >
            View All Open Roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {job.company} {job.isConfidential && '• Confidential Client'}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {job.workType}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {job.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">{job.posted}</span>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 rounded-lg transition flex items-center gap-1.5"
                >
                  View JD & Apply
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRACTICE AREAS / INDUSTRIES */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Domain Focus</span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Specialized Practice Corridors</h2>
            <p className="text-sm text-slate-600">
              We focus on deep functional verticals rather than generic, unfocused staffing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:shadow-md transition space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{ind.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{ind.description}</p>
                  <div className="pt-2 text-xs font-semibold text-blue-600">{ind.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. 4-STEP CALIBRATED RECRUITMENT SLA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">How We Work</span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            The AVR 4-Stage Calibration Engine
          </h2>
          <p className="text-sm text-slate-600">
            A structured, transparent delivery pipeline eliminating CV spam and wasted interview hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-blue-600 uppercase">Step 01</div>
            <h3 className="font-bold text-slate-900 text-base">In-Depth Discovery</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We dissect technical requirements, architectural context, team dynamics, compensation bands, and cultural expectations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-blue-600 uppercase">Step 02</div>
            <h3 className="font-bold text-slate-900 text-base">72-Hour Calibrated Slate</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Delivery of 3 to 5 precisely calibrated candidate dossiers—every profile pre-screened for tech competence and offer acceptance intent.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-blue-600 uppercase">Step 03</div>
            <h3 className="font-bold text-slate-900 text-base">Coordinated Rounds</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hands-on candidate coordination, notice period monitoring, interview scheduling, and feedback synchronization.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
            <div className="text-xs font-bold text-blue-600 uppercase">Step 04</div>
            <h3 className="font-bold text-slate-900 text-base">Offer & 90-Day Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pre-closing negotiations to avoid buyouts or dropouts, backed by our comprehensive 90-day free replacement guarantee.
            </p>
          </div>
        </div>
      </section>

      {/* 6. GATED VALUE LEAD MAGNET: SALARY BENCHMARK GUIDE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/60 text-blue-200 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-blue-300" />
              Free Industry Resource • October 2026 Edition
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              India GCC & Tech Compensation Benchmarks 2026
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Comprehensive salary guides, notice period buyout dynamics, and talent availability reports across Hyderabad, Bengaluru, and Pune. Essential intelligence for hiring managers and senior talent.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/salary-guide"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-white text-blue-900 font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-md"
            >
              Download Salary Guide Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FINAL DUAL CTA & WHATSAPP STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 pt-10">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Ready to Elevate Your Hiring or Advance Your Career?
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto text-base">
          Connect directly with our specialized engineering recruitment partners in Hyderabad and Bengaluru.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/request-brief"
            className="px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition"
          >
            Submit Hiring Brief
          </Link>
          <a
            href="https://wa.me/919876543210?text=Hello%20Aspire%20Value%20Recruits"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
