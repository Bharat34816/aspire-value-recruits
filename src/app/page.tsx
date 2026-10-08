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
  Sparkles,
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

const PRACTICE_CORRIDORS = [
  {
    code: 'GCC',
    title: 'Global Capability Centers',
    description: 'Turnkey engineering ramp-ups from initial seed pods to 100+ engineer centers in Hitec City & Outer Ring Road.',
    count: '32 Active Mandates',
    color: 'from-blue-950/60 to-slate-900 border-blue-800/40 text-cyan-400',
  },
  {
    code: 'AI',
    title: 'Generative AI & LLM Systems',
    description: 'Staff ML researchers, custom fine-tuning specialists, production RAG engineers, and vector database architects.',
    count: '19 Active Mandates',
    color: 'from-purple-950/60 to-slate-900 border-purple-800/40 text-purple-400',
  },
  {
    code: 'SRE',
    title: 'Cloud Platforms & DevOps',
    description: 'Multi-cloud AWS & Azure architects, GitOps practitioners, Kubernetes operators, and platform resilience leads.',
    count: '24 Active Mandates',
    color: 'from-emerald-950/60 to-slate-900 border-emerald-800/40 text-emerald-400',
  },
  {
    code: 'PAY',
    title: 'FinTech & Core Banking',
    description: 'High-frequency trading engineers, zero-fault payment gateways, and core banking microservices.',
    count: '15 Active Mandates',
    color: 'from-amber-950/60 to-slate-900 border-amber-800/40 text-amber-400',
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-950 text-slate-100 space-y-20 pb-20">
      {/* 1. HERO WITH GLOW AND COLOR ACCENTS */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 py-20 px-4 border-b border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            Hyderabad &amp; Bengaluru’s Premier Tech Calibration Agency
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Bridging High-Caliber Minds with India’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Elite Tech Corridors &amp; GCCs
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We reject transactional resume spam. Aspire Value Recruits operates a precision calibration engine delivering pre-screened candidate dossiers within <strong>72 hours</strong>, backed by an unconditional <strong>90-day replacement guarantee</strong>.
          </p>

          {/* Dual Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-brief"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" /> I&apos;m Hiring (Submit Mandate Brief)
            </Link>
            <Link
              href="/jobs"
              className="px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-extrabold text-sm transition inline-flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-cyan-400" /> Explore Verified Roles (Zero Fee)
            </Link>
            <Link
              href="/insights"
              className="px-6 py-4 rounded-2xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 font-bold text-sm transition inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" /> Meet Our Founder &amp; Mission
            </Link>
          </div>

          {/* RECRUITMENT QUOTATION FEATURE BANNER */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-900 border border-cyan-500/30 p-8 sm:p-10 text-left shadow-2xl relative overflow-hidden">
            <span className="text-[11px] font-extrabold text-cyan-400 tracking-widest uppercase block mb-2">
              ✦ FOUNDER&apos;S PHILOSOPHY ON RECRUITMENT
            </span>
            <blockquote className="text-lg sm:text-2xl font-semibold text-slate-100 italic leading-relaxed">
              &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
            </blockquote>
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-white text-lg shadow-md">
                  VA
                </div>
                <div>
                  <span className="font-extrabold text-white text-sm block">Vishnu Vardhan Reddy Alavala</span>
                  <span className="text-xs text-cyan-400 font-medium">Founder &amp; Managing Director, Aspire Value Recruits</span>
                </div>
              </div>
              <Link
                href="/insights"
                className="text-xs font-bold text-indigo-300 hover:text-white underline inline-flex items-center gap-1"
              >
                Read Leadership Vision &amp; Articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* KEY METRICS BANNER */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <span className="text-3xl font-black text-cyan-400 block">72 hrs</span>
              <span className="text-xs text-slate-400">First Shortlist SLA</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <span className="text-3xl font-black text-emerald-400 block">94.2%</span>
              <span className="text-xs text-slate-400">12-Month Retention</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <span className="text-3xl font-black text-indigo-400 block">450+</span>
              <span className="text-xs text-slate-400">Tech Leaders Placed</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <span className="text-3xl font-black text-amber-400 block">₹0 Fee</span>
              <span className="text-xs text-slate-400">Strictly Free for Candidates</span>
            </div>
          </div>

          {/* Interactive Live Search */}
          <div className="mt-8 max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-4">
            <form action="/jobs" method="GET" className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-5 relative">
                <Search className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="q"
                  placeholder="Role, skill (e.g. Cloud Architect, AI, Go)..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="md:col-span-4 relative">
                <MapPin className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
                <select
                  name="location"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-700 bg-slate-950 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  defaultValue=""
                >
                  <option value="">All Locations</option>
                  <option value="Hyderabad">Hyderabad (Hitec City)</option>
                  <option value="Bengaluru">Bengaluru (Bellandur / Whitefield)</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <button
                  type="submit"
                  className="w-full h-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                >
                  Search Jobs <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 2. COLORFUL PRACTICE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">DOMAIN EXPERTISE</span>
          <h2 className="text-3xl font-black text-white">Dedicated Tech &amp; GCC Corridors</h2>
          <p className="text-xs sm:text-sm text-slate-400">Deep functional specialization in the highest-growth tech verticals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_CORRIDORS.map((p) => (
            <div
              key={p.code}
              className={`bg-gradient-to-b ${p.color} border rounded-3xl p-6 hover:shadow-xl transition-all space-y-4`}
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-950/80 flex items-center justify-center font-black text-lg border border-slate-800">
                {p.code}
              </div>
              <h3 className="font-extrabold text-lg text-white">{p.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              <div className="pt-2 text-xs font-bold">{p.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 4-STEP CALIBRATION ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border border-indigo-800/50 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">OUR FORMULA</span>
            <h2 className="text-3xl font-black text-white">The AVR 4-Stage Calibration Engine</h2>
            <p className="text-xs text-slate-300">How we consistently deliver top-quartile talent with zero CV spam.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-xs font-black text-cyan-400 uppercase">Stage 01</span>
              <h4 className="font-bold text-white text-base">Architectural Scoping</h4>
              <p className="text-xs text-slate-400">We map system design expectations, cultural markers, and compensation bounds.</p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-xs font-black text-indigo-400 uppercase">Stage 02</span>
              <h4 className="font-bold text-white text-base">72-Hour Calibrated Slate</h4>
              <p className="text-xs text-slate-400">3 to 5 pre-screened candidate dossiers with verified notice periods and intent.</p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-xs font-black text-purple-400 uppercase">Stage 03</span>
              <h4 className="font-bold text-white text-base">Round Synchronization</h4>
              <p className="text-xs text-slate-400">Full interview logistics and counter-offer risk mitigation.</p>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
              <span className="text-xs font-black text-emerald-400 uppercase">Stage 04</span>
              <h4 className="font-bold text-white text-base">90-Day Guarantee</h4>
              <p className="text-xs text-slate-400">Unconditional free replacement guarantee on all permanent placements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED OPENINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Opportunities</span>
            <h2 className="text-3xl font-bold text-white tracking-tight mt-1">
              Featured Calibrated Openings
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Hand-vetted engineering and leadership mandates across Hyderabad &amp; Bengaluru.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:underline"
          >
            View All Open Roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURED_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {job.company} {job.isConfidential && '• Confidential Client'}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    {job.workType}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/40">
                    {job.salary}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-medium bg-slate-950 text-slate-400 border border-slate-800 px-2 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">{job.posted}</span>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition flex items-center gap-1.5"
                >
                  View JD &amp; Apply
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GATED VALUE LEAD MAGNET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-indigo-700/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/60 text-blue-200 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-blue-300" />
              Free Industry Resource • October 2026 Edition
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              India GCC &amp; Tech Compensation Benchmarks 2026
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Comprehensive salary guides, notice period buyout dynamics, and talent availability reports across Hyderabad &amp; Bengaluru.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="/salary-guide"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-white text-blue-900 font-bold text-sm rounded-xl hover:bg-blue-50 transition shadow-md"
            >
              Download Salary Guide Free <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
