'use client';

import React, { useState } from 'react';
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
  ChevronDown,
  Layers,
  Check,
  SlidersHorizontal,
} from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    company: 'Tier-1 Global Capability Center',
    isConfidential: true,
    location: 'Hyderabad (Hitec City)',
    category: 'Cloud',
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
    category: 'AI',
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
    category: 'Cloud',
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
    location: 'Bengaluru (Whitefield)',
    category: 'GCC',
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
    color: 'from-blue-600/20 via-indigo-950/60 to-slate-900 border-blue-500/40 text-cyan-400',
    glowColor: 'shadow-blue-500/10',
    salaryBand: '₹40L - ₹90L PA',
    roles: ['Director of Engineering', 'Platform Architect', 'Staff Microservices Eng'],
    hotSkills: ['System Design', 'Enterprise Multi-tenant', 'Kubernetes'],
  },
  {
    code: 'AI',
    title: 'Generative AI & LLM Systems',
    description: 'Staff ML researchers, custom fine-tuning specialists, production RAG engineers, and vector database architects.',
    count: '19 Active Mandates',
    color: 'from-purple-600/20 via-slate-900 to-indigo-950 border-purple-500/40 text-purple-400',
    glowColor: 'shadow-purple-500/10',
    salaryBand: '₹45L - ₹85L PA',
    roles: ['Staff GenAI Engineer', 'MLOps Lead', 'RAG Pipeline Architect'],
    hotSkills: ['LangChain', 'vLLM', 'Pinecone/Qdrant', 'PyTorch'],
  },
  {
    code: 'SRE',
    title: 'Cloud Platforms & DevOps',
    description: 'Multi-cloud AWS & Azure architects, GitOps practitioners, Kubernetes operators, and platform resilience leads.',
    count: '24 Active Mandates',
    color: 'from-emerald-600/20 via-slate-900 to-slate-950 border-emerald-500/40 text-emerald-400',
    glowColor: 'shadow-emerald-500/10',
    salaryBand: '₹35L - ₹75L PA',
    roles: ['Principal Cloud Architect', 'SRE Practice Lead', 'DevSecOps Specialist'],
    hotSkills: ['AWS Well-Architected', 'Terraform', 'Kubernetes', 'Go'],
  },
  {
    code: 'PAY',
    title: 'FinTech & Core Banking',
    description: 'High-frequency trading engineers, zero-fault payment gateways, and core banking microservices.',
    count: '15 Active Mandates',
    color: 'from-amber-600/20 via-slate-900 to-amber-950/40 border-amber-500/40 text-amber-400',
    glowColor: 'shadow-amber-500/10',
    salaryBand: '₹38L - ₹70L PA',
    roles: ['Core Banking Eng Lead', 'FinTech Security Architect', 'Latency Engineer'],
    hotSkills: ['Distributed Ledger', 'Zero-Fault Kafka', 'PCI-DSS', 'Java/Go'],
  },
];

const CALIBRATION_STAGES = [
  {
    stage: '01',
    hours: 'Hour 00 - 24',
    title: 'Architectural Scoping & ICP Mapping',
    desc: 'We map system design expectations, cultural markers, tech stack prerequisites, and salary tolerance bounds.',
    action: 'Comprehensive Mandate Calibration Call with Hiring Engineering Director.',
    deliverable: 'Ideal Candidate Profile (ICP) calibrated document with mutual sign-off.',
    metric: '100% Alignment SLA',
  },
  {
    stage: '02',
    hours: 'Hour 24 - 48',
    title: 'Algorithmic Sourcing & Deep Screening',
    desc: 'Our technical recruiter partners tap private invite-only talent vaults across Hyderabad & Bengaluru.',
    action: 'Hands-on system design inquiry, architectural code review, and background vetting.',
    deliverable: 'Pool narrowed from 60+ potential profiles down to top 5 pre-screened finalists.',
    metric: 'Top 3% Talent Filtered',
  },
  {
    stage: '03',
    hours: 'Hour 48 - 72',
    title: 'Notice Period Lock & Compensation Audit',
    desc: 'We verify buy-out feasibility, notice period commitment, and counter-offer likelihood.',
    action: 'Direct conversation on relocation, notice period buyout approvals, and expectations lock.',
    deliverable: 'Affirmative DPDP candidate consent recorded and confidential dossiers finalized.',
    metric: '94% Offer Acceptance Predictability',
  },
  {
    stage: '04',
    hours: 'Hour 72 SLA',
    title: 'Calibrated Slate Dispatch & 90-Day Guarantee',
    desc: 'Employer receives 3 to 5 pinpoint candidate dossiers ready for direct interview synchronization.',
    action: 'Direct calendar synchronization for engineering rounds; zero CV spam.',
    deliverable: '3-5 Calibrated Dossiers + 90-Day Unconditional Free Replacement Warranty.',
    metric: '90-Day Free Replacement',
  },
];

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeCorridor, setActiveCorridor] = useState<number | null>(null);
  const [showPhilosophyPillars, setShowPhilosophyPillars] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter featured jobs
  const filteredJobs = FEATURED_JOBS.filter((job) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      job.category === selectedCategory ||
      (selectedCategory === 'Hyderabad' && job.location.includes('Hyderabad')) ||
      (selectedCategory === 'Bengaluru' && job.location.includes('Bengaluru'));

    const matchesQuery =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="bg-slate-950 text-slate-100 space-y-24 pb-24 relative overflow-hidden bg-cyber-grid">
      {/* FLOATING AMBIENT GLOW ORBS */}
      <div className="absolute top-16 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[90px] animate-pulse-glow pointer-events-none" />
      <div className="absolute top-80 right-10 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[1400px] left-10 w-96 h-96 bg-indigo-600/15 rounded-full filter blur-[90px] animate-pulse-glow pointer-events-none" />

      {/* 1. HERO SECTION WITH RICH GLOW & BADGES */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          {/* Status Pill with live pulse */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-xl shadow-cyan-500/10 backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Hyderabad &amp; Bengaluru’s Premier Tech Calibration Agency</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12]">
            Bridging High-Caliber Minds with India’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Elite Tech Corridors &amp; GCCs
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            We reject transactional resume spam. Aspire Value Recruits operates a precision calibration engine delivering pre-screened candidate dossiers within <strong className="text-white">72 hours</strong>, backed by an unconditional <strong className="text-cyan-300">90-day replacement guarantee</strong>.
          </p>

          {/* Dual Hero Action Buttons with Shimmer Effects */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Link
              href="/request-brief"
              className="shimmer-button px-8 py-4 rounded-2xl text-white font-extrabold text-sm shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2.5"
            >
              <Building2 className="w-4 h-4 text-cyan-200" />
              I&apos;m Hiring (Submit Mandate Brief)
              <ArrowRight className="w-4 h-4 text-cyan-200" />
            </Link>
            <Link
              href="/jobs"
              className="px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-white font-extrabold text-sm transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg"
            >
              <Briefcase className="w-4 h-4 text-cyan-400" />
              Explore Verified Roles (Strictly ₹0 Fee)
            </Link>
            <Link
              href="/insights"
              className="px-6 py-4 rounded-2xl bg-indigo-950/70 hover:bg-indigo-900/80 border border-indigo-700/50 hover:border-cyan-400 text-indigo-300 hover:text-white font-bold text-sm transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Founder &amp; Mission
            </Link>
          </div>

          {/* RECRUITMENT QUOTATION FEATURE BANNER WITH INTERACTIVE PHILOSOPHY BREAKDOWN */}
          <div className="mt-14 max-w-4xl mx-auto animated-gradient-border p-[2px] rounded-3xl shadow-2xl shadow-blue-500/10">
            <div className="glass-panel rounded-3xl p-8 sm:p-10 text-left space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-cyan-400 tracking-widest uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  FOUNDER&apos;S PHILOSOPHY ON RECRUITMENT
                </span>
                <span className="text-xs text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                  Ethical Calibration
                </span>
              </div>

              <blockquote className="text-lg sm:text-2xl font-semibold text-slate-100 italic leading-relaxed">
                &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-cyan-500/20">
                    VA
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-sm block">Vishnu Vardhan Reddy Alavala</span>
                    <span className="text-xs text-cyan-400 font-medium">Founder &amp; Managing Director, Aspire Value Recruits</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowPhilosophyPillars(!showPhilosophyPillars)}
                    className="text-xs font-bold text-cyan-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition flex items-center gap-1.5"
                  >
                    <span>{showPhilosophyPillars ? 'Hide Principles' : 'Explore 3 Pillars of Ignition'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showPhilosophyPillars ? 'rotate-180' : ''}`} />
                  </button>
                  <Link
                    href="/insights"
                    className="text-xs font-bold text-slate-300 hover:text-white underline inline-flex items-center gap-1"
                  >
                    Read Dossier <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Toggled Philosophy Breakdown */}
              {showPhilosophyPillars && (
                <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-black uppercase text-cyan-400 tracking-wider">PILLAR 01</span>
                    <h4 className="font-bold text-sm text-white">Zero Resume Spam</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We never inundate hiring managers with dozens of resumes. Only 3 to 5 rigorously calibrated profiles are delivered per mandate.
                    </p>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">PILLAR 02</span>
                    <h4 className="font-bold text-sm text-white">Affirmative Consent</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Complete DPDP Act adherence. Candidate profiles are never submitted without explicit written authorization and privacy protection.
                    </p>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2">
                    <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">PILLAR 03</span>
                    <h4 className="font-bold text-sm text-white">Fiduciary Warranty</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Shared accountability with a comprehensive 90-day replacement guarantee on permanent placements with zero extra recruiter fees.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KEY METRICS BANNER WITH HOVER HIGHLIGHTS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
            <div className="glass-panel p-5 rounded-2xl transition transform hover:-translate-y-1 hover:border-cyan-400/50 group">
              <span className="text-3xl font-black text-cyan-400 block group-hover:scale-105 transition-transform">72 hrs</span>
              <span className="text-xs text-slate-400">First Shortlist SLA</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl transition transform hover:-translate-y-1 hover:border-emerald-400/50 group">
              <span className="text-3xl font-black text-emerald-400 block group-hover:scale-105 transition-transform">94.2%</span>
              <span className="text-xs text-slate-400">12-Month Retention</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl transition transform hover:-translate-y-1 hover:border-indigo-400/50 group">
              <span className="text-3xl font-black text-indigo-400 block group-hover:scale-105 transition-transform">450+</span>
              <span className="text-xs text-slate-400">Tech Leaders Placed</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl transition transform hover:-translate-y-1 hover:border-amber-400/50 group">
              <span className="text-3xl font-black text-amber-400 block group-hover:scale-105 transition-transform">₹0 Fee</span>
              <span className="text-xs text-slate-400">Candidate Services (DPDP)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PRACTICE CORRIDORS WITH LIVE DETAIL SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">DOMAIN EXPERTISE</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Dedicated Tech &amp; GCC Corridors</h2>
          <p className="text-xs sm:text-sm text-slate-400">Click any corridor card below to inspect salary bands, typical roles, and active talent availability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_CORRIDORS.map((p, idx) => {
            const isSelected = activeCorridor === idx;
            return (
              <div
                key={p.code}
                onClick={() => setActiveCorridor(isSelected ? null : idx)}
                className={`cursor-pointer bg-gradient-to-b ${p.color} border rounded-3xl p-6 transition-all duration-300 transform hover:-translate-y-1.5 space-y-4 shadow-xl ${
                  isSelected ? 'ring-2 ring-cyan-400 border-cyan-400 scale-[1.02]' : 'hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950/80 flex items-center justify-center font-black text-lg border border-slate-800 shadow-md">
                    {p.code}
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-900/90 text-cyan-300 border border-slate-700">
                    {isSelected ? 'Spotlight Active ▲' : 'Click to Inspect ▼'}
                  </span>
                </div>
                <h3 className="font-extrabold text-lg text-white">{p.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                <div className="pt-2 flex items-center justify-between text-xs font-bold border-t border-slate-800/60">
                  <span className="text-cyan-300">{p.count}</span>
                  <span className="text-slate-400 text-[11px]">{p.salaryBand}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Spotlight Drawer when a Corridor is clicked */}
        {activeCorridor !== null && (
          <div className="glass-panel border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Corridor Spotlight: {PRACTICE_CORRIDORS[activeCorridor].title}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Active Market Calibration in Hyderabad &amp; Bengaluru
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/request-brief"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition"
                >
                  Request Mandate in this Corridor →
                </Link>
                <button
                  type="button"
                  onClick={() => setActiveCorridor(null)}
                  className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Close ✕
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 text-xs">
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                <span className="text-slate-400 block font-bold uppercase tracking-wider">Typical Senior Roles</span>
                <ul className="space-y-1.5 text-slate-200">
                  {PRACTICE_CORRIDORS[activeCorridor].roles.map((r) => (
                    <li key={r} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                <span className="text-slate-400 block font-bold uppercase tracking-wider">Highest Demand Skills</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {PRACTICE_CORRIDORS[activeCorridor].hotSkills.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-[11px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2">
                <span className="text-slate-400 block font-bold uppercase tracking-wider">Compensation Benchmark</span>
                <div className="text-lg font-black text-emerald-400">
                  {PRACTICE_CORRIDORS[activeCorridor].salaryBand}
                </div>
                <p className="text-[11px] text-slate-400">
                  Backed by AVR&apos;s 2026 Compensation index for fixed CTC + variable structures.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 3. INTERACTIVE 72-HOUR SLA CALIBRATION SCRUBBER ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 border border-indigo-800/60 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">PRECISION TIMELINE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">The AVR 72-Hour Calibration Engine</h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Interactive timeline: click any phase below to inspect the rigorous verification AVR conducts prior to dossier release.
            </p>
          </div>

          {/* Stepper scrubber header */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {CALIBRATION_STAGES.map((stg, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stg.stage}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className={`font-black uppercase tracking-wider ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      Phase {stg.stage}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{stg.hours}</span>
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate">{stg.title}</h4>
                </button>
              );
            })}
          </div>

          {/* Dynamic Active Stage Deep-Dive Card */}
          <div className="glass-panel border-indigo-700/50 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest">
                  STAGE {CALIBRATION_STAGES[activeStage].stage} • {CALIBRATION_STAGES[activeStage].hours}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {CALIBRATION_STAGES[activeStage].title}
                </h3>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 font-bold text-xs">
                {CALIBRATION_STAGES[activeStage].metric}
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {CALIBRATION_STAGES[activeStage].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-slate-400 block font-semibold">AVR Operational Execution:</span>
                <strong className="text-white text-sm block">{CALIBRATION_STAGES[activeStage].action}</strong>
              </div>
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-slate-400 block font-semibold">Client Deliverable / Result:</span>
                <strong className="text-cyan-300 text-sm block">{CALIBRATION_STAGES[activeStage].deliverable}</strong>
              </div>
            </div>

            {/* Visual SLA Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold">
                <span>Calibration Progress: Phase {activeStage + 1} of 4</span>
                <span>{((activeStage + 1) * 25)}% SLA Completion</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(activeStage + 1) * 25}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE FEATURED OPENINGS WITH INSTANT FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Verified Opportunities</span>
            <h2 className="text-3xl font-black text-white tracking-tight mt-1">
              Featured Calibrated Openings
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Direct mandate representation for top GCCs and product enterprises. Strictly ₹0 candidate fees.
            </p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition shadow-sm"
          >
            Browse All Roles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Interactive Filter Pills Bar */}
        <div className="glass-panel rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3 text-cyan-400" /> Filter:
            </span>
            {['All', 'Cloud', 'AI', 'GCC', 'Hyderabad', 'Bengaluru'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Instant filter by skill/title..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Filtered Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="glass-panel rounded-2xl p-6 hover:border-cyan-400/80 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
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
                    <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-950/80 text-cyan-300 border border-blue-800/80">
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

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{job.posted}</span>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl transition flex items-center gap-1.5 shadow-sm"
                  >
                    View JD &amp; Apply
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 text-xs">
              No positions matched your instant filter. Try resetting search filters or explore all jobs.
            </div>
          )}
        </div>
      </section>

      {/* 5. GATED VALUE LEAD MAGNET BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-indigo-700/50 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700/60 text-blue-200 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-cyan-300" />
              Free Industry Resource • October 2026 Edition
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              India GCC &amp; Tech Compensation Benchmarks 2026
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed">
              Comprehensive salary guides, notice period buyout dynamics, and talent availability reports across Hyderabad &amp; Bengaluru.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto relative z-10">
            <Link
              href="/salary-guide"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-blue-900 font-extrabold text-sm rounded-xl hover:bg-blue-50 transition shadow-xl transform hover:-translate-y-0.5"
            >
              Download Salary Guide Free <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* FLOATING QUICK CONNECT DOCK */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <a
          href="https://wa.me/919876543210?text=Hello%20Vishnu%20and%20AVR%20Team%2C%20I%20want%20to%20discuss%20hiring%20talent"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 flex items-center gap-2 transition transform hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
