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
  ChevronRight,
  Cpu,
  Server,
  CreditCard,
  Rocket,
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
    icon: <Rocket className="w-4 h-4 text-zinc-300" />,
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
    tag: 'Applied Intelligence',
    icon: <Cpu className="w-4 h-4 text-zinc-300" />,
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
    icon: <Server className="w-4 h-4 text-zinc-300" />,
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
    icon: <CreditCard className="w-4 h-4 text-zinc-300" />,
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
    <div className="relative min-h-screen bg-black text-zinc-100 overflow-x-hidden">
      {/* 1. SUBTLE MUTED CONSTELLATION CANVAS (DELICATE CONNECTING DOTS) */}
      <ConstellationCanvas />

      {/* 2. RESTRAINED MINIMAL LIGHTING */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[48rem] h-[22rem] bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* MAIN CONTENT CONTAINER */}
      <div className="relative z-10 space-y-28 sm:space-y-36 pb-32">

        {/* ========================================================================= */}
        {/* HERO SECTION WITH DUAL AUDIENCE TOGGLE */}
        {/* ========================================================================= */}
        <section className="pt-20 sm:pt-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-900">
          <div className="max-w-5xl mx-auto text-center space-y-9">
            
            {/* Official Logo Display */}
            <div className="flex justify-center">
              <div className="bg-zinc-900/90 px-6 sm:px-8 py-3.5 rounded-2xl border border-zinc-800 inline-flex items-center justify-center hover:border-zinc-700 transition">
                <Image
                  src="/logo.png"
                  alt="Aspire Value Recruits - Connecting Talent with Opportunity"
                  width={220}
                  height={68}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Audience Mode Switcher Pill */}
            <div className="flex justify-center">
              <div className="inline-flex p-1 rounded-xl bg-zinc-950 border border-zinc-800 shadow-lg">
                <button
                  onClick={() => setAudienceMode('employer')}
                  className={`px-5 sm:px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    audienceMode === 'employer'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  For Employers &amp; Tech Leaders
                </button>
                <button
                  onClick={() => setAudienceMode('candidate')}
                  className={`px-5 sm:px-6 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    audienceMode === 'candidate'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  For Senior Technologists
                </button>
              </div>
            </div>

            {/* Trust Compliance Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{audienceMode === 'employer' ? 'DPDP Act (India) Compliant' : '100% Free Career Advisory'}</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-200 font-medium">Strictly ₹0 Candidate Placement Fee</span>
            </div>

            {/* Dynamic Headline Based on Audience Mode */}
            <div className="space-y-4">
              {audienceMode === 'employer' ? (
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12]">
                  Precision Tech Recruitment &amp; <br />
                  <span className="text-zinc-400">
                    Enterprise Executive Search
                  </span>
                </h1>
              ) : (
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12]">
                  Propel Your Career with <br />
                  <span className="text-zinc-400">
                    Direct Enterprise Representation
                  </span>
                </h1>
              )}

              {/* Subtitle with highlighted brand */}
              <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                {audienceMode === 'employer' ? (
                  <>
                    <span className="font-semibold text-white">
                      <span className="text-sky-400 font-bold">A</span>spire{' '}
                      <span className="text-sky-400 font-bold">V</span>alue{' '}
                      <span className="text-sky-400 font-bold">R</span>ecruits (<span className="text-sky-400 font-bold">AVR</span>)
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

            {/* Production CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              {audienceMode === 'employer' ? (
                <>
                  <Link
                    href="/request-brief"
                    className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                  >
                    <span>Hire Top Tech Talent</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#practice-domains"
                    className="btn-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                  >
                    <span>Explore Practice Domains</span>
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/jobs"
                    className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                  >
                    <span>Explore Verified Openings</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/talent-network"
                    className="btn-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-zinc-400" />
                    <span>Drop Your CV (Confidential)</span>
                  </Link>
                </>
              )}
            </div>

            {/* 4 Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 max-w-4xl mx-auto text-left">
              {audienceMode === 'employer' ? (
                <>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">72 hrs</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Shortlist Turnaround</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">94.2%</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">12-Month Retention</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">90 Days</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Replacement Warranty</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">₹0 Fee</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Candidate Commitment</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">₹0 Fee</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Zero Candidate Charges</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">100%</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">DPDP Act Protection</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">48 hrs</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Partner Feedback SLA</span>
                  </div>
                  <div className="glass-panel p-5 rounded-xl border border-zinc-800">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white block font-mono">₹50L+</span>
                    <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Benchmark CTC Roles</span>
                  </div>
                </>
              )}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* DUAL PATHWAY SPLIT CARDS */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pathway 1: For Employers */}
            <div className="glass-card p-8 sm:p-10 rounded-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 flex items-center justify-center font-bold border border-zinc-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">For Employers &amp; Tech Leaders</span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1">Building an Engineering Team?</h2>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Whether scaling a 50+ engineer technology hub in Hitec City or Outer Ring Road, or seeking a specialized Staff ML researcher, we provide pre-calibrated candidate dossiers with zero CV spam.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Curated shortlists delivered strictly within 72 business hours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Verified notice periods, compensation expectations, and buy-out feasibility</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Backed by our unconditional 90-day free replacement guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href="/request-brief"
                  className="w-full py-3 px-5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs text-center transition flex items-center justify-center gap-2"
                >
                  <span>Request a Hiring Mandate Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 2: For Candidates */}
            <div className="glass-card p-8 sm:p-10 rounded-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 text-zinc-300 flex items-center justify-center font-bold border border-zinc-800">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">For Senior Technologists</span>
                  <h2 className="font-display text-2xl font-bold text-white mt-1">Seeking Your Next Leadership Role?</h2>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We represent senior software architects, staff engineers, and technology directors for high-impact roles at top product companies and global enterprises.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 pt-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Strictly ₹0 candidate placement fee — completely free career advisory</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>100% DPDP Act compliance — your resume is never shared without consent</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                    <span>Direct connections with hiring engineering directors and decision-makers</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Link
                  href="/jobs"
                  className="w-full py-3 px-5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs text-center border border-zinc-800 transition flex items-center justify-center gap-2"
                >
                  <span>Browse Verified Engineering Roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE PRACTICE DOMAINS EXPLORER */}
        {/* ========================================================================= */}
        <section id="practice-domains" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">PRACTICE DOMAINS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Areas of Deep Technical Specialization</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Select any practice area below to explore calibrated competencies, benchmark CTC bands, and typical delivery SLAs.
            </p>
          </div>

          {/* Domain Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PRACTICE_AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => setActiveDomain(area.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeDomain === area.id
                    ? 'bg-zinc-100 text-black shadow-sm font-semibold'
                    : 'bg-zinc-950 border border-zinc-850 text-zinc-400 hover:text-white hover:border-zinc-700'
                }`}
              >
                {area.icon}
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Active Domain Spotlight Card */}
          <div className="glass-card p-8 sm:p-10 rounded-2xl space-y-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-850 pb-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
                  {selectedPractice.icon}
                  <span>{selectedPractice.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{selectedPractice.title}</h3>
                <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">{selectedPractice.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850">
                  <span className="text-[10px] text-zinc-500 uppercase font-medium block">Delivery Turnaround</span>
                  <span className="font-display text-sm font-semibold text-white font-mono">{selectedPractice.typicalSla}</span>
                </div>
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850">
                  <span className="text-[10px] text-zinc-500 uppercase font-medium block">Benchmark Compensation</span>
                  <span className="font-display text-sm font-semibold text-white font-mono">{selectedPractice.benchmarkCtc}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Representative Roles Recruited</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPractice.roles.map((r) => (
                    <span
                      key={r}
                      className="px-3 py-1.5 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-medium"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Core Technical Competencies Evaluated</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPractice.competencies.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800 text-xs font-mono"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-850 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Need customized talent mapping for this discipline?
              </span>
              <Link
                href="/request-brief"
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition flex items-center gap-2"
              >
                <span>Hire in {selectedPractice.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* THE 4-STEP CALIBRATION METHODOLOGY (INTERACTIVE STEP TIMELINE) */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">HOW WE OPERATE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">The AVR 4-Step Precision Engine</h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
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
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-200 space-y-3 ${
                    isSelected
                      ? 'bg-zinc-900 border-zinc-600 shadow-md'
                      : 'bg-zinc-950 border-zinc-850 hover:border-zinc-700'
                  }`}
                >
                  <div
                    className={`font-display text-2xl font-bold font-mono ${
                      isSelected ? 'text-white' : 'text-zinc-600'
                    }`}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.shortDesc}</p>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Spotlight Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-850">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-850 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-bold text-white font-mono">
                  {selectedStepData.number}
                </span>
                <h4 className="font-display text-base sm:text-lg font-bold text-white">
                  {selectedStepData.title}
                </h4>
              </div>
              <span className="text-xs font-mono font-medium text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 w-fit">
                {selectedStepData.metrics}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pt-3">
              {selectedStepData.detailed}
            </p>
            <div className="mt-4 pt-3 border-t border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-zinc-400">
                <span className="font-medium text-white">Guaranteed Deliverable:</span>
                <span className="text-zinc-300 ml-1.5 font-mono">{selectedStepData.deliverable}</span>
              </div>
              <Link href="/request-brief" className="text-zinc-300 hover:text-white font-semibold flex items-center gap-1">
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
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">WHY AVR</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Traditional Agency vs. AVR Precision
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              See how our engineering-first recruitment model eliminates hiring friction and CV spam.
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-zinc-850 overflow-hidden shadow-lg">
            <div className="grid grid-cols-3 bg-zinc-950 border-b border-zinc-850 p-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              <div>Evaluation Metric</div>
              <div className="text-zinc-500">Traditional Agency</div>
              <div className="text-white font-bold flex items-center gap-1.5">
                <span>AVR Precision Engine</span>
              </div>
            </div>

            <div className="divide-y divide-zinc-900 text-xs sm:text-sm">
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-medium text-white">Shortlist SLA</span>
                <span className="text-zinc-500 text-xs">2 - 4 weeks with high drop-offs</span>
                <span className="text-zinc-200 font-semibold text-xs">Strictly 72 business hours</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center bg-zinc-950/40">
                <span className="font-medium text-white">Screening Methodology</span>
                <span className="text-zinc-500 text-xs">Keyword searching &amp; CV forwarding</span>
                <span className="text-zinc-200 font-semibold text-xs">System architecture &amp; code vetted</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-medium text-white">Replacement Warranty</span>
                <span className="text-zinc-500 text-xs">30 days with disputed claims</span>
                <span className="text-zinc-200 font-semibold text-xs">90 days unconditional replacement</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center bg-zinc-950/40">
                <span className="font-medium text-white">Candidate Placement Fee</span>
                <span className="text-zinc-500 text-xs">Often charged registration fees</span>
                <span className="text-zinc-200 font-semibold text-xs">Strictly ₹0 candidate charge</span>
              </div>
              <div className="grid grid-cols-3 p-4 items-center">
                <span className="font-medium text-white">Data Privacy Standard</span>
                <span className="text-zinc-500 text-xs">CVs blasted to public boards</span>
                <span className="text-zinc-200 font-semibold text-xs">DPDP Act 2023 affirmative consent</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FOUNDER LEADERSHIP & ETHICAL PROMISE */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-zinc-850 space-y-8 relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium">
                <span>✦</span>
                <span>FOUNDER&apos;S PHILOSOPHY &amp; VALUES</span>
              </div>

              <blockquote className="font-display text-xl sm:text-2xl font-semibold text-zinc-200 italic leading-relaxed">
                &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-zinc-850">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-white text-base">
                  VR
                </div>
                <div>
                  <div className="font-bold text-white text-base">Vishnu Vardhan Reddy Alavala</div>
                  <div className="text-xs text-zinc-400">
                    Founder &amp; Managing Director,{' '}
                    <span className="font-semibold text-white">
                      <span className="text-sky-400 font-bold">A</span>spire{' '}
                      <span className="text-sky-400 font-bold">V</span>alue{' '}
                      <span className="text-sky-400 font-bold">R</span>ecruits
                    </span>
                  </div>
                  <div className="text-[11px] text-zinc-400">Pan-India Tech &amp; Engineering Executive Search</div>
                </div>
              </div>

              <Link
                href="/insights"
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-semibold transition flex items-center gap-1.5"
              >
                <span>Read Leadership Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PRODUCTION CLOSING CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#09090b] border border-zinc-800 rounded-2xl p-8 sm:p-14 text-center space-y-6 shadow-xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Ready to Build or Scale Your Engineering Organization?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Partner with{' '}
              <span className="font-semibold text-white">
                <span className="text-sky-400 font-bold">A</span>spire{' '}
                <span className="text-sky-400 font-bold">V</span>alue{' '}
                <span className="text-sky-400 font-bold">R</span>ecruits
              </span>{' '}
              for calibrated technical shortlists delivered in 72 hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Link
                href="/request-brief"
                className="btn-primary px-7 py-3.5 text-sm inline-flex items-center gap-2"
              >
                Submit a Mandate Brief
              </Link>
              <Link
                href="/hire-talent"
                className="btn-secondary px-7 py-3.5 text-sm inline-flex items-center gap-2"
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
