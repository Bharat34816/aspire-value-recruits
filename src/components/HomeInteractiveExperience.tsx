'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Zap,
  Users,
  Layers,
  MapPin,
  ChevronRight,
  Sparkles,
  Sliders,
  Check,
  TrendingUp,
  Cpu,
  Server,
  CreditCard,
  Rocket,
} from 'lucide-react';

interface PracticeArea {
  id: string;
  title: string;
  tag: string;
  iconName: 'rocket' | 'cpu' | 'server' | 'creditCard';
  description: string;
  roles: string[];
  competencies: string[];
  benchmarkCtc: string;
  typicalSla: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'scaleup',
    title: 'Enterprise Engineering & Tech Hubs',
    tag: 'Enterprise Scale-Up',
    iconName: 'rocket',
    description:
      'Turnkey engineering ramp-ups, from foundational lead pods to 100+ engineer centers across major Indian tech corridors.',
    roles: ['Director of Engineering', 'VP Technology', 'Platform Lead', 'Engineering Manager'],
    competencies: ['Engineering Leadership', 'Distributed Pod Building', 'Market Salary Mapping', 'Headcount Strategy'],
    benchmarkCtc: '₹50L - ₹95L PA',
    typicalSla: '72 Hours to First Slate',
  },
  {
    id: 'genai',
    title: 'Generative AI & Machine Learning',
    tag: 'Next-Gen Intelligence',
    iconName: 'cpu',
    description:
      'Staff ML researchers, custom fine-tuning specialists, production RAG engineers, and vector database architects.',
    roles: ['Staff GenAI Engineer', 'MLOps Lead', 'AI Research Scientist', 'RAG Architect'],
    competencies: ['PyTorch', 'LangChain', 'vLLM Inference', 'Vector Databases', 'Llama 3 / Mistral'],
    benchmarkCtc: '₹48L - ₹75L PA',
    typicalSla: '72 Hours to First Slate',
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms & DevOps / SRE',
    tag: 'Infrastructure Resilience',
    iconName: 'server',
    description:
      'Multi-cloud AWS & Azure architects, GitOps practitioners, Kubernetes operators, and zero-downtime platform leads.',
    roles: ['Principal Cloud Architect', 'SRE Practice Lead', 'DevSecOps Specialist', 'Kubernetes Lead'],
    competencies: ['AWS / Azure Multi-Cloud', 'Kubernetes / Helm', 'Terraform IaC', 'GitOps / ArgoCD'],
    benchmarkCtc: '₹42L - ₹70L PA',
    typicalSla: '72 Hours to First Slate',
  },
  {
    id: 'fintech',
    title: 'FinTech & Core Systems',
    tag: 'Mission-Critical Engineering',
    iconName: 'creditCard',
    description:
      'High-frequency trading engineers, zero-fault payment gateways, and banking microservice specialists.',
    roles: ['Core Banking Eng Lead', 'FinTech Security Architect', 'Latency Engineer', 'Staff Backend Lead'],
    competencies: ['High-Concurrency Go/Java', 'Kafka Event Streaming', 'PCI-DSS Compliance', 'Low-Latency Design'],
    benchmarkCtc: '₹45L - ₹80L PA',
    typicalSla: '72 Hours to First Slate',
  },
];

const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Mandate Scoping & Calibration',
    shortDesc: 'Deep architectural and compensation alignment.',
    detailed:
      'We meet directly with engineering managers and directors to map system architecture requirements, cultural nuances, and compensation boundaries before sourcing begins.',
    deliverable: 'Calibrated Mandate Dossier & Market Salary Benchmark',
  },
  {
    number: '02',
    title: 'Targeted Technical Vetting',
    shortDesc: 'Hands-on system design & coding evaluation.',
    detailed:
      'Every candidate undergoes rigorous hands-on technical vetting, notice period verification, buyout feasibility mapping, and motivation alignment.',
    deliverable: 'Technical Competency Scorecard & Intent Audit',
  },
  {
    number: '03',
    title: '72-Hour Calibrated Shortlist',
    shortDesc: '3 to 5 interview-ready dossiers delivered fast.',
    detailed:
      'We present 3 to 5 interview-ready candidate dossiers with complete background context, verified expectations, and availability slots.',
    deliverable: 'Interview-Ready Slate with Zero CV Spam',
  },
  {
    number: '04',
    title: 'Smooth Onboarding & 90-Day Warranty',
    shortDesc: 'Offer negotiation & unconditional replacement guarantee.',
    detailed:
      'We manage offer negotiations, counter-offer risk mitigation, and back every permanent placement with a 90-day free replacement warranty.',
    deliverable: 'Zero-Drop Closing & 90-Day Full Replacement Protection',
  },
];

const FEATURED_ROLES = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    category: 'cloud',
    company: 'Tier-1 Global Technology Center',
    isConfidential: true,
    location: 'Hyderabad',
    experience: '12-16 Yrs',
    salary: '₹55L - ₹75L PA',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'System Design'],
  },
  {
    id: '2',
    slug: 'staff-generative-ai-engineer',
    title: 'Staff Generative AI / LLM Engineer',
    category: 'genai',
    company: 'Enterprise AI Innovation Hub',
    isConfidential: false,
    location: 'Bengaluru',
    experience: '7-11 Yrs',
    salary: '₹48L - ₹65L PA',
    skills: ['Python', 'LangChain', 'PyTorch', 'Vector DBs'],
  },
  {
    id: '3',
    slug: 'lead-devops-platform-engineer',
    title: 'Lead DevOps & Platform Engineer',
    category: 'cloud',
    company: 'FinTech Innovation Hub',
    isConfidential: true,
    location: 'Hyderabad',
    experience: '8-12 Yrs',
    salary: '₹38L - ₹50L PA',
    skills: ['Kubernetes', 'CI/CD', 'Docker', 'Go', 'GCP'],
  },
  {
    id: '4',
    slug: 'head-of-product-engineering',
    title: 'Head of Product Engineering',
    category: 'leadership',
    company: 'High-Growth Global SaaS',
    isConfidential: false,
    location: 'Bengaluru',
    experience: '14-18 Yrs',
    salary: '₹70L - ₹95L PA',
    skills: ['Engineering Leadership', 'Microservices', 'System Design'],
  },
  {
    id: '5',
    slug: 'senior-full-stack-engineer-fintech',
    title: 'Senior Full Stack Engineer (Next.js / Node.js)',
    category: 'fintech',
    company: 'Global Financial Technology Hub',
    isConfidential: true,
    location: 'Hyderabad',
    experience: '5-8 Yrs',
    salary: '₹28L - ₹40L PA',
    skills: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: '6',
    slug: 'lead-data-engineer-snowflake-databricks',
    title: 'Lead Data Engineer (Snowflake & Databricks)',
    category: 'genai',
    company: 'Fortune 100 Technology Hub',
    isConfidential: false,
    location: 'Bengaluru',
    experience: '9-13 Yrs',
    salary: '₹42L - ₹56L PA',
    skills: ['Snowflake', 'Databricks', 'Apache Spark', 'Python'],
  },
];

export default function HomeInteractiveExperience() {
  // 1. Audience Switcher Mode: 'employer' vs 'candidate'
  const [audienceMode, setAudienceMode] = useState<'employer' | 'candidate'>('employer');

  // 2. Interactive Practice Area Explorer
  const [activePracticeIndex, setActivePracticeIndex] = useState<number>(0);
  const activePractice = PRACTICE_AREAS[activePracticeIndex];

  // 3. Interactive Mandate Calibration Calculator State
  const [calcSeniority, setCalcSeniority] = useState<number>(9);
  const [calcDomain, setCalcDomain] = useState<string>('ai');
  const [calcTeamSize, setCalcTeamSize] = useState<string>('single');

  // Dynamic calculation for CTC benchmark
  const calculateBenchmark = () => {
    let baseMin = calcSeniority * 4.2 + 8;
    let baseMax = calcSeniority * 5.4 + 18;

    if (calcDomain === 'ai') {
      baseMin += 6;
      baseMax += 12;
    } else if (calcDomain === 'leadership') {
      baseMin += 14;
      baseMax += 25;
    }

    if (calcTeamSize === 'pod') {
      return {
        ctc: `₹${Math.round(baseMin)}L - ₹${Math.round(baseMax)}L PA / Engineer`,
        sla: '5 to 7 Days (Complete Pod of 5+)',
        candidates: '1,200+ Vetted Network Profiles',
      };
    }

    return {
      ctc: `₹${Math.round(baseMin)}L - ₹${Math.round(baseMax)}L PA`,
      sla: '72 Business Hours',
      candidates: '450+ Pre-Calibrated Specialists',
    };
  };

  const currentCalc = calculateBenchmark();

  // 4. Interactive Methodology Step
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // 5. Interactive Comparison Toggle
  const [comparisonMode, setComparisonMode] = useState<'avr' | 'traditional'>('avr');

  // 6. Interactive Featured Roles Filter
  const [selectedRoleCategory, setSelectedRoleCategory] = useState<string>('all');

  const filteredRoles =
    selectedRoleCategory === 'all'
      ? FEATURED_ROLES.slice(0, 4)
      : FEATURED_ROLES.filter((r) => r.category === selectedRoleCategory).slice(0, 4);

  return (
    <div className="space-y-24 pb-20 bg-slate-950 text-slate-100 bg-tech-grid relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[22rem] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-[40rem] -left-20 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none animate-float-slow" />
      <div className="absolute top-[80rem] -right-20 w-[32rem] h-[32rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH AUDIENCE MODE SWITCHER */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Official Logo Banner */}
          <div className="flex justify-center">
            <div className="bg-white/95 px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl shadow-xl shadow-cyan-500/10 border border-slate-700/40 inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Aspire Value Recruits - Connecting Talent with Opportunity"
                width={260}
                height={70}
                className="h-14 sm:h-16 w-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Interactive Audience Pill Switcher */}
          <div className="inline-flex p-1 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setAudienceMode('employer')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                audienceMode === 'employer'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>For Employers &amp; Engineering Leaders</span>
            </button>
            <button
              onClick={() => setAudienceMode('candidate')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                audienceMode === 'candidate'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>For Senior Technologists</span>
            </button>
          </div>

          {/* Compliance & Trust Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-medium shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>DPDP Act (India) Compliant</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-300 font-semibold">Strictly ₹0 Candidate Fee</span>
          </div>

          {/* Dynamic Headline Based on Audience Mode */}
          <div className="transition-all duration-500 ease-out">
            {audienceMode === 'employer' ? (
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Precision Tech Recruitment &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  Executive Engineering Search
                </span>
              </h1>
            ) : (
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Accelerate Your Tech Leadership &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300">
                  Architectural Career Trajectory
                </span>
              </h1>
            )}
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-white">
              <span className="text-cyan-400 font-bold">A</span>spire{' '}
              <span className="text-cyan-400 font-bold">V</span>alue{' '}
              <span className="text-cyan-400 font-bold">R</span>ecruits (<span className="text-cyan-400 font-bold">AVR</span>)
            </span>{' '}
            {audienceMode === 'employer'
              ? 'connects fast-growing tech enterprises, global innovation centers, and innovators with high-caliber technology leaders. We deliver pre-screened, interview-ready candidate shortlists within 72 hours, backed by an unconditional 90-day replacement guarantee.'
              : 'advocates for India’s top 1% software architects, staff engineers, and tech directors. Direct connections with engineering leaders, complete DPDP confidentiality, and strictly ₹0 candidate fees.'}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {audienceMode === 'employer' ? (
              <>
                <Link
                  href="/request-brief"
                  className="shimmer-button px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Submit a Mandate Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/hire-talent"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Explore Employer Solutions</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/jobs"
                  className="shimmer-button px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-purple-500/25 transition transform hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Explore Verified Roles (₹0 Fee)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/talent-network"
                  className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>Drop Your Confidential CV</span>
                </Link>
              </>
            )}
          </div>

          {/* 4 Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto text-left">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl font-black text-cyan-400 block font-mono">72 hrs</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Shortlist Turnaround</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl font-black text-emerald-400 block font-mono">94.2%</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">12-Month Retention</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl font-black text-indigo-400 block font-mono">90 Days</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Replacement Warranty</span>
            </div>
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-3xl font-black text-amber-400 block font-mono">₹0 Fee</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Candidate Commitment</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. INTERACTIVE PRACTICE DOMAIN EXPLORER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">INTERACTIVE PRACTICE HUB</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Areas of Deep Technical Specialization</h2>
          <p className="text-sm text-slate-400">
            Click through our 4 core engineering domains to explore verified competencies, typical compensation benchmarks, and delivery SLAs.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {PRACTICE_AREAS.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActivePracticeIndex(idx)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 relative ${
                activePracticeIndex === idx
                  ? 'bg-blue-950/80 border-cyan-400 shadow-xl shadow-cyan-500/15 ring-1 ring-cyan-400'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                Domain 0{idx + 1}
              </div>
              <div className="text-sm font-extrabold text-white leading-tight">
                {area.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Practice Showcase Card with Smooth Cross-Fade */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-4xl mx-auto relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-800/60">
                  {activePractice.tag}
                </span>
                <h3 className="text-2xl font-black text-white">{activePractice.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activePractice.description}</p>
              </div>

              {/* Verified Competencies */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Verified Technical Competencies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePractice.competencies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-900 text-slate-200 px-3 py-1 rounded-lg border border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frequent Roles */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Frequent Placements:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activePractice.roles.map((r) => (
                    <span
                      key={r}
                      className="text-xs text-cyan-300 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-800/40"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Metric Box */}
            <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Compensation Benchmark</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">{activePractice.benchmarkCtc}</div>
              </div>

              <div className="space-y-1 border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Shortlist SLA</span>
                <div className="text-lg font-bold text-white font-mono">{activePractice.typicalSla}</div>
              </div>

              <div className="space-y-1 border-t border-slate-800 pt-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Placement Warranty</span>
                <div className="text-sm font-bold text-indigo-300 font-mono">90-Day Free Replacement</div>
              </div>

              <div className="pt-2">
                <Link
                  href="/request-brief"
                  className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Scope Mandate in This Domain</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE MANDATE CALIBRATION CALCULATOR */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-bold">
              <Sliders className="w-3.5 h-3.5" />
              <span>INTERACTIVE HIRING CALCULATOR</span>
            </div>
            <h2 className="text-3xl font-black text-white">Estimate Your 72-Hour Mandate Calibration</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Adjust experience seniority, technical domain, and team size to calculate instant talent pool depth and compensation benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            {/* Left Controls */}
            <div className="md:col-span-7 space-y-6">
              
              {/* 1. Technical Domain */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  1. Target Engineering Domain
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcDomain('ai')}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      calcDomain === 'ai'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Generative AI &amp; ML</div>
                    <div className="text-[10px] text-cyan-400 font-mono">LLMs, RAG, MLOps</div>
                  </button>
                  <button
                    onClick={() => setCalcDomain('cloud')}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      calcDomain === 'cloud'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Cloud &amp; DevOps / SRE</div>
                    <div className="text-[10px] text-slate-400 font-mono">AWS, Azure, K8s</div>
                  </button>
                  <button
                    onClick={() => setCalcDomain('fintech')}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      calcDomain === 'fintech'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>FinTech Core Systems</div>
                    <div className="text-[10px] text-slate-400 font-mono">Payments, Kafka, Ledger</div>
                  </button>
                  <button
                    onClick={() => setCalcDomain('leadership')}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      calcDomain === 'leadership'
                        ? 'bg-cyan-500/20 border-cyan-400 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>Engineering Leadership</div>
                    <div className="text-[10px] text-slate-400 font-mono">Director, VP Tech</div>
                  </button>
                </div>
              </div>

              {/* 2. Seniority Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-300 font-bold uppercase">2. Experience Benchmark:</span>
                  <span className="text-cyan-400 font-bold bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/60">
                    {calcSeniority}+ Years of Experience
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={16}
                  value={calcSeniority}
                  onChange={(e) => setCalcSeniority(Number(e.target.value))}
                  className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>5 Yrs (Senior Eng)</span>
                  <span>10 Yrs (Staff / Lead)</span>
                  <span>16+ Yrs (Principal / Director)</span>
                </div>
              </div>

              {/* 3. Team Size Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  3. Headcount Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCalcTeamSize('single')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-bold transition-all ${
                      calcTeamSize === 'single'
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Single Key Hire (1 Role)
                  </button>
                  <button
                    onClick={() => setCalcTeamSize('pod')}
                    className={`p-2.5 rounded-xl text-center border text-xs font-bold transition-all ${
                      calcTeamSize === 'pod'
                        ? 'bg-blue-600 text-white border-blue-500'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Engineering Pod (5+ Roles)
                  </button>
                </div>
              </div>

            </div>

            {/* Right Output Panel */}
            <div className="md:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
                ✦ Calibrated Delivery Forecast
              </div>

              <div className="space-y-1">
                <span className="text-[11px] text-slate-400">ESTIMATED CTC BENCHMARK:</span>
                <div className="text-2xl font-black text-emerald-400 font-mono">
                  {currentCalc.ctc}
                </div>
              </div>

              <div className="space-y-1 border-t border-slate-800 pt-2.5">
                <span className="text-[11px] text-slate-400">SLA DISPATCH GUARANTEE:</span>
                <div className="text-base font-bold text-amber-300 font-mono">
                  {currentCalc.sla}
                </div>
              </div>

              <div className="space-y-1 border-t border-slate-800 pt-2.5">
                <span className="text-[11px] text-slate-400">PRE-MAPPED TALENT DEPTH:</span>
                <div className="text-sm font-semibold text-white font-mono">
                  {currentCalc.candidates}
                </div>
              </div>

              <div className="space-y-1 border-t border-slate-800 pt-2.5">
                <span className="text-[11px] text-slate-400">ACCOUNTABILITY GUARANTEE:</span>
                <div className="text-xs font-semibold text-indigo-300">
                  90-Day Free Replacement Warranty
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/request-brief"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-extrabold text-xs text-center transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  <span>Request This Calibration Slate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE 4-STEP METHODOLOGY TIMELINE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">HOW WE OPERATE</span>
          <h2 className="text-3xl font-black text-white">The AVR 4-Step Calibration Engine</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click any stage to inspect our zero-spam vetting methodology and concrete deliverables.
          </p>
        </div>

        {/* Step Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative ${
                activeStepIndex === idx
                  ? 'bg-blue-950/80 border-cyan-400 shadow-xl shadow-cyan-500/20 ring-1 ring-cyan-400'
                  : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="text-3xl font-black text-cyan-400 font-mono mb-2">
                {step.number}
              </div>
              <h3 className="font-extrabold text-white text-base mb-1">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.shortDesc}</p>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Drawer */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs border border-cyan-400/40">
              {METHODOLOGY_STEPS[activeStepIndex].number}
            </span>
            <h4 className="text-xl font-black text-white">
              {METHODOLOGY_STEPS[activeStepIndex].title} — In-Depth Specification
            </h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {METHODOLOGY_STEPS[activeStepIndex].detailed}
          </p>
          <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed Deliverable: {METHODOLOGY_STEPS[activeStepIndex].deliverable}</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE COMPARISON MATRIX (AVR VS TRADITIONAL) */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">WHY CLIENTS PARTNER WITH US</span>
            <h2 className="text-3xl font-black text-white">The AVR Difference at a Glance</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We reject transactional staffing habits. See how our calibrated model delivers higher retention with zero clutter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Left: Traditional Staffing */}
            <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-4 opacity-75">
              <div className="text-xs font-extrabold text-rose-400 uppercase tracking-wider">
                Traditional Staffing Agencies
              </div>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>50+ unfiltered resumes submitted with basic keyword matches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>3 to 4 weeks of prolonged back-and-forth communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>High candidate drop-offs during 90-day notice period (35% drop rate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Ambiguous replacement policies with complex dispute procedures</span>
                </li>
              </ul>
            </div>

            {/* Right: AVR Precision Engine */}
            <div className="bg-gradient-to-br from-blue-950/70 to-slate-900 border border-cyan-500/40 p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl shadow-cyan-500/10">
              <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                <span>✦ Aspire Value Recruits Engine</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strictly 3 to 5 deeply vetted, interview-ready candidate dossiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>First calibrated shortlist presented within 72 business hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>94.2% 12-month retention through proactive notice &amp; buyout calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Unconditional 90-day free candidate replacement warranty</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FOUNDER PROFILE (VISHNU VARDHAN REDDY ALAVALA) */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden">
          
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>FOUNDER&apos;S PHILOSOPHY &amp; VALUES</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-semibold text-slate-100 italic leading-relaxed">
              &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
            </blockquote>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg border border-white/20">
                VR
              </div>
              <div>
                <div className="font-extrabold text-white text-base">Vishnu Vardhan Reddy Alavala</div>
                <div className="text-xs text-cyan-400 font-medium">
                  Founder &amp; Managing Director,{' '}
                  <span className="font-bold text-white">
                    <span className="text-cyan-400 font-bold">A</span>spire{' '}
                    <span className="text-cyan-400 font-bold">V</span>alue{' '}
                    <span className="text-cyan-400 font-bold">R</span>ecruits
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Pan-India Tech &amp; Executive Search</div>
              </div>
            </div>

            <Link
              href="/insights"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400 text-xs font-bold transition flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Read Full Leadership Story</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE FEATURED ROLES PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">ACTIVE MANDATES</span>
            <h2 className="text-3xl font-black text-white mt-1">Featured Open Opportunities</h2>
            <p className="text-xs text-slate-400">Strictly ₹0 candidate fee with verified compensation bounds.</p>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: 'All Roles' },
              { id: 'genai', label: 'GenAI & ML' },
              { id: 'cloud', label: 'Cloud / SRE' },
              { id: 'fintech', label: 'FinTech' },
              { id: 'leadership', label: 'Leadership' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedRoleCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedRoleCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRoles.map((job) => (
            <div
              key={job.id}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="text-base font-extrabold text-white hover:text-cyan-400 transition"
                  >
                    {job.title}
                  </Link>
                  {job.isConfidential ? (
                    <span className="text-[10px] bg-slate-900 text-slate-300 border border-slate-800 px-2 py-0.5 rounded font-medium">
                      Confidential
                    </span>
                  ) : (
                    <span className="text-[10px] bg-blue-950 text-cyan-300 border border-blue-800 px-2 py-0.5 rounded font-medium">
                      Verified Client
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {job.location}
                  </span>
                  <span>•</span>
                  <span>{job.experience}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-bold">{job.salary}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-slate-800/60">
                <span className="text-[11px] text-amber-300 font-medium">₹0 Placement Fee</span>
                <Link
                  href={`/jobs/${job.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition transform hover:-translate-y-0.5"
                >
                  View Details &amp; Apply →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BOTTOM CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Build or Scale Your Engineering Organization?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with{' '}
            <span className="font-bold text-white">
              <span className="text-cyan-400 font-bold">A</span>spire{' '}
              <span className="text-cyan-400 font-bold">V</span>alue{' '}
              <span className="text-cyan-400 font-bold">R</span>ecruits
            </span>{' '}
            for calibrated technical shortlists delivered in 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition transform hover:-translate-y-0.5"
            >
              Submit a Mandate Brief
            </Link>
            <Link
              href="/hire-talent"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
            >
              Explore Employer Solutions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
