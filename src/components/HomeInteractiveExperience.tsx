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
  Zap,
  Users,
  Layers,
  ChevronRight,
  Sparkles,
  Check,
  Cpu,
  Server,
  CreditCard,
  Rocket,
  Clock,
  Target,
  Award,
} from 'lucide-react';
import ConstellationCanvas from './ConstellationCanvas';

interface PracticeArea {
  id: string;
  title: string;
  tag: string;
  icon: React.ReactNode;
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
    icon: <Rocket className="w-5 h-5 text-cyan-400" />,
    description:
      'Turnkey engineering ramp-ups, from foundational lead pods to 100+ engineer centers across major Indian tech corridors.',
    roles: ['Director of Engineering', 'VP Technology', 'Platform Lead', 'Engineering Manager'],
    competencies: ['Engineering Leadership', 'Distributed Pod Building', 'Headcount Strategy', 'Talent Mapping'],
    benchmarkCtc: '₹50L - ₹95L PA',
    typicalSla: '72 Hours to First Slate',
  },
  {
    id: 'genai',
    title: 'Generative AI & Machine Learning',
    tag: 'Next-Gen Intelligence',
    icon: <Cpu className="w-5 h-5 text-purple-400" />,
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
    icon: <Server className="w-5 h-5 text-blue-400" />,
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
    icon: <CreditCard className="w-5 h-5 text-emerald-400" />,
    description:
      'High-frequency trading engineers, zero-fault payment gateways, and core banking microservice specialists.',
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
    shortDesc: 'Direct architectural & compensation alignment with hiring leaders.',
    detailed:
      'We meet directly with engineering managers and directors to map system architecture requirements, cultural nuances, and compensation boundaries before sourcing begins.',
    deliverable: 'Calibrated Mandate Dossier & Market Salary Benchmark',
    metrics: '100% Requirement Accuracy • 0% Misaligned Interviews',
  },
  {
    number: '02',
    title: 'Targeted Technical Vetting',
    shortDesc: 'Hands-on system design, code review & notice audit.',
    detailed:
      'Every candidate undergoes rigorous hands-on technical vetting, notice period verification, buyout feasibility mapping, and motivation alignment.',
    deliverable: 'Technical Competency Scorecard & Intent Audit',
    metrics: '1-on-1 Code Review • Buyout Feasibility Confirmed',
  },
  {
    number: '03',
    title: '72-Hour Calibrated Slate',
    shortDesc: '3 to 5 interview-ready dossiers delivered with context.',
    detailed:
      'We present 3 to 5 interview-ready candidate dossiers with complete background context, verified expectations, and availability slots within 72 hours.',
    deliverable: 'Interview-Ready Slate with Zero CV Spam',
    metrics: 'Strict 72-Hour SLA • 3 to 5 High-Intent Profiles',
  },
  {
    number: '04',
    title: 'Onboarding & 90-Day Warranty',
    shortDesc: 'Offer closing, counter-offer mitigation & replacement guarantee.',
    detailed:
      'We manage offer negotiations, counter-offer risk mitigation, and back every permanent placement with a 90-day free replacement warranty.',
    deliverable: 'Zero-Drop Closing & 90-Day Full Replacement Protection',
    metrics: '94.2% 12-Month Retention • Unconditional Warranty',
  },
];

export default function HomeInteractiveExperience() {
  const [audienceMode, setAudienceMode] = useState<'employer' | 'candidate'>('employer');
  const [activeDomain, setActiveDomain] = useState<string>('scaleup');
  const [activeStep, setActiveStep] = useState<number>(1);

  const selectedPractice = PRACTICE_AREAS.find((p) => p.id === activeDomain) || PRACTICE_AREAS[0];
  const selectedStepData = METHODOLOGY_STEPS[activeStep - 1] || METHODOLOGY_STEPS[0];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* 1. INTERACTIVE FULL-SCREEN CONSTELLATION CANVAS (DOTS CONNECTING TO CURSOR) */}
      <ConstellationCanvas />

      {/* 2. AMBIENT ATMOSPHERIC AURORA ORBS */}
      <div className="fixed top-1/4 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-float-slow z-0" />
      <div className="fixed bottom-1/4 -right-40 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none animate-pulse-glow z-0" />
      <div className="fixed top-2/3 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 space-y-28 sm:space-y-36 pb-32">

        {/* ========================================================================= */}
        {/* HERO SECTION WITH DUAL AUDIENCE TOGGLE */}
        {/* ========================================================================= */}
        <section className="pt-16 sm:pt-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            
            {/* Official Logo Display */}
            <div className="flex justify-center">
              <div className="bg-white/95 px-7 sm:px-9 py-4 rounded-3xl shadow-2xl shadow-cyan-500/10 border border-slate-700/40 inline-flex items-center justify-center transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Aspire Value Recruits - Connecting Talent with Opportunity"
                  width={220}
                  height={68}
                  className="h-14 sm:h-16 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Audience Mode Switcher Pill */}
            <div className="flex justify-center">
              <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md">
                <button
                  onClick={() => setAudienceMode('employer')}
                  className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    audienceMode === 'employer'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🏢 For Employers &amp; Tech Leaders
                </button>
                <button
                  onClick={() => setAudienceMode('candidate')}
                  className={`px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                    audienceMode === 'candidate'
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  💼 For Senior Technologists (₹0 Fee)
                </button>
              </div>
            </div>

            {/* Trust Compliance Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-medium shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{audienceMode === 'employer' ? 'DPDP Act (India) Compliant' : '100% Free Career Advisory'}</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-300 font-semibold">Strictly ₹0 Candidate Placement Fee</span>
            </div>

            {/* Dynamic Headline Based on Audience Mode */}
            <div className="space-y-4">
              {audienceMode === 'employer' ? (
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Precision Tech Recruitment &amp; <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                    Enterprise Executive Talent Search
                  </span>
                </h1>
              ) : (
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12]">
                  Propel Your Career with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                    Direct Enterprise Representation
                  </span>
                </h1>
              )}

              {/* Subtitle with highlighted brand */}
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {audienceMode === 'employer' ? (
                  <>
                    <span className="font-bold text-white">
                      <span className="text-cyan-400 font-black">A</span>spire{' '}
                      <span className="text-cyan-400 font-black">V</span>alue{' '}
                      <span className="text-cyan-400 font-black">R</span>ecruits (<span className="text-cyan-400 font-black">AVR</span>)
                    </span>{' '}
                    connects fast-growing tech enterprises, Global Technology Centers, and innovators with high-caliber technology leaders. We deliver pre-screened, interview-ready candidate shortlists within <strong>72 hours</strong>, backed by an unconditional <strong>90-day replacement guarantee</strong>.
                  </>
                ) : (
                  <>
                    We represent senior software architects, staff engineers, and engineering directors for high-impact roles at premier technology centers in Hyderabad &amp; Bengaluru. Strictly <strong>₹0 candidate fee</strong> and zero blind CV spam.
                  </>
                )}
              </p>
            </div>

            {/* Dynamic CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {audienceMode === 'employer' ? (
                <>
                  <Link
                    href="/request-brief"
                    className="shimmer-button px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    <span>Hire Top Tech Talent</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#practice-domains"
                    className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-white font-bold text-sm transition inline-flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Explore Practice Domains</span>
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/jobs"
                    className="shimmer-button px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-500 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                  >
                    <span>Explore Verified Openings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/talent-network"
                    className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-400 text-white font-bold text-sm transition inline-flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Drop Your CV (Confidential)</span>
                  </Link>
                </>
              )}
            </div>

            {/* 4 Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-4xl mx-auto text-left">
              {audienceMode === 'employer' ? (
                <>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-cyan-400 block font-mono">72 hrs</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Shortlist Turnaround</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-emerald-400 block font-mono">94.2%</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">12-Month Retention</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-indigo-400 block font-mono">90 Days</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Replacement Warranty</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-amber-400 block font-mono">₹0 Fee</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Candidate Commitment</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-emerald-400 block font-mono">₹0 Fee</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Zero Candidate Charges</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-cyan-400 block font-mono">100%</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">DPDP Act Protection</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-indigo-400 block font-mono">48 hrs</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Partner Feedback SLA</span>
                  </div>
                  <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                    <span className="font-display text-3xl font-black text-amber-400 block font-mono">₹50L+</span>
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Benchmark CTC Roles</span>
                  </div>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DUAL PATHWAY SPLIT CARDS */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pathway 1: For Employers */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 flex items-center justify-center font-bold border border-blue-500/30">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">For Employers &amp; Tech Leaders</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">Building an Engineering Team?</h2>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Whether scaling a 50+ engineer technology hub in Hitec City or Outer Ring Road, or seeking a specialized Staff ML researcher, we provide pre-calibrated candidate dossiers with zero CV spam.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Curated shortlists delivered strictly within 72 business hours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Verified notice periods, compensation expectations, and buy-out feasibility</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>Backed by our unconditional 90-day free replacement guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href="/request-brief"
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Request a Hiring Mandate Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Pathway 2: For Candidates */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold border border-purple-500/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest font-mono">For Senior Technologists</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-white mt-1">Seeking Your Next Leadership Role?</h2>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We represent senior software architects, staff engineers, and technology directors for high-impact roles at top product companies and global enterprises.
                </p>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-300 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Strictly ₹0 candidate placement fee — completely free career advisory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>100% DPDP Act compliance — your resume is never shared without consent</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Direct connections with hiring engineering directors and decision-makers</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href="/jobs"
                  className="w-full py-3.5 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs text-center border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <span>Browse Verified Engineering Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE PRACTICE DOMAINS EXPLORER */}
        {/* ========================================================================= */}
        <section id="practice-domains" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">PRACTICE DOMAINS</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">Areas of Deep Technical Specialization</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Select any practice area below to explore calibrated competencies, benchmark CTC bands, and typical delivery SLAs.
            </p>
          </div>

          {/* Domain Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveDomain(area.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeDomain === area.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {area.icon}
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Active Domain Spotlight Card */}
          <div className="glass-card p-8 sm:p-12 rounded-3xl space-y-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-bold font-mono">
                  {selectedPractice.icon}
                  <span>{selectedPractice.tag}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white">{selectedPractice.title}</h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">{selectedPractice.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[240px]">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block font-mono">Delivery Turnaround</span>
                  <span className="font-display text-base font-black text-cyan-400 font-mono">{selectedPractice.typicalSla}</span>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] text-slate-500 uppercase font-bold block font-mono">Benchmark Compensation</span>
                  <span className="font-display text-base font-black text-emerald-400 font-mono">{selectedPractice.benchmarkCtc}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Representative Roles Recruited</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPractice.roles.map((r) => (
                    <span
                      key={r}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700 text-xs font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Core Technical Competencies Evaluated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPractice.competencies.map((c) => (
                    <span
                      key={c}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-800/60 text-xs font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Need customized talent mapping for this discipline?
              </span>
              <Link
                href="/request-brief"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md transition flex items-center gap-2"
              >
                <span>Hire in {selectedPractice.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE 4-STEP CALIBRATION METHODOLOGY (INTERACTIVE STEP TIMELINE) */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">HOW WE OPERATE</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">The AVR 4-Step Precision Engine</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Click any milestone below to inspect vetting rigor, SLAs, and exact deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {METHODOLOGY_STEPS.map((step, idx) => {
              const stepNumber = idx + 1;
              const isSelected = activeStep === stepNumber;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(stepNumber)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-2xl border transition-all duration-300 space-y-3 transform hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-xl shadow-cyan-500/10'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`font-display text-3xl font-black font-mono ${
                      isSelected ? 'text-cyan-400' : 'text-slate-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white text-base">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.shortDesc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Spotlight Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-black text-cyan-400 font-mono">
                  {selectedStepData.number}
                </span>
                <h4 className="font-display text-lg sm:text-xl font-black text-white">
                  {selectedStepData.title}
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40 w-fit">
                {selectedStepData.metrics}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-3">
              {selectedStepData.detailed}
            </p>
            <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-slate-400">
                <span className="font-bold text-white">Guaranteed Deliverable:</span>
                <span className="text-cyan-300 ml-1.5 font-mono">{selectedStepData.deliverable}</span>
              </div>
              <Link href="/request-brief" className="text-cyan-400 font-bold hover:underline flex items-center gap-1">
                <span>Initiate Scoping Call</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPARISON MATRIX (TRADITIONAL AGENCY VS AVR PRECISION) */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">WHY AVR</span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white">
              Traditional Agency vs. AVR Precision
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              See how our engineering-first recruitment model eliminates hiring friction and CV spam.
            </p>
          </div>

          <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-900/90 border-b border-slate-800 p-4 text-xs font-black uppercase tracking-wider text-slate-300">
              <div>Evaluation Metric</div>
              <div className="text-slate-400">Traditional Agency</div>
              <div className="text-cyan-400 font-extrabold flex items-center gap-1.5">
                <span>AVR Precision Engine</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>

            <div className="divide-y divide-slate-800 text-xs sm:text-sm">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-white">Shortlist SLA</span>
                <span className="text-slate-400 text-xs">2 - 4 weeks with high drop-offs</span>
                <span className="text-emerald-400 font-extrabold text-xs">Strictly 72 business hours</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center bg-slate-950/40">
                <span className="font-bold text-white">Screening Methodology</span>
                <span className="text-slate-400 text-xs">Keyword searching &amp; CV forwarding</span>
                <span className="text-cyan-300 font-extrabold text-xs">System architecture &amp; code vetted</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-white">Replacement Warranty</span>
                <span className="text-slate-400 text-xs">30 days with disputed claims</span>
                <span className="text-indigo-300 font-extrabold text-xs">90 days unconditional replacement</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center bg-slate-950/40">
                <span className="font-bold text-white">Candidate Placement Fee</span>
                <span className="text-slate-400 text-xs">Often charged registration fees</span>
                <span className="text-amber-300 font-extrabold text-xs">Strictly ₹0 candidate charge</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-bold text-white">Data Privacy Standard</span>
                <span className="text-slate-400 text-xs">CVs blasted to public boards</span>
                <span className="text-emerald-400 font-extrabold text-xs">DPDP Act 2023 affirmative consent</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOUNDER LEADERSHIP & ETHICAL PROMISE */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-bold font-mono">
                <span>✦</span>
                <span>FOUNDER&apos;S PHILOSOPHY &amp; VALUES</span>
              </div>

              <blockquote className="font-display text-xl sm:text-2xl font-semibold text-slate-100 italic leading-relaxed">
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
                  <div className="text-[11px] text-slate-400">Pan-India Tech &amp; Engineering Executive Search</div>
                </div>
              </div>

              <Link
                href="/insights"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400 text-xs font-bold transition flex items-center gap-2"
              >
                <span>Read Full Leadership Story</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* HIGH-IMPACT CLOSING CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Ready to Build or Scale Your Engineering Organization?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition"
              >
                Submit a Mandate Brief
              </Link>
              <Link
                href="/hire-talent"
                className="px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
              >
                Explore Employer Solutions
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
