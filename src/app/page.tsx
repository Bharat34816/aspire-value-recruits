import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Award,
  Zap,
  Users,
  Layers,
  MapPin,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aspire Value Recruits (AVR) | Tech & GCC Recruitment Agency',
  description:
    'Aspire Value Recruits connects high-growth enterprises and GCCs with elite technology talent across India. Pre-screened 72-hour shortlists backed by a 90-day guarantee.',
};

const PRACTICE_AREAS = [
  {
    title: 'Global Capability Centers (GCCs)',
    tag: 'GCC Scale-Up',
    description:
      'Turnkey engineering ramp-ups, from foundational lead pods to 100+ engineer centers across major Indian tech corridors.',
    roles: ['Director of Engineering', 'VP Technology', 'Platform Lead', 'Engineering Manager'],
    highlights: 'Headcount strategy, market compensation mapping, and local talent pipeline build-out.',
  },
  {
    title: 'Generative AI & Machine Learning',
    tag: 'Next-Gen Intelligence',
    description:
      'Staff ML researchers, custom fine-tuning specialists, production RAG engineers, and vector database architects.',
    roles: ['Staff GenAI Engineer', 'MLOps Lead', 'AI Research Scientist', 'RAG Architect'],
    highlights: 'Deep architectural vetting in PyTorch, LangChain, vLLM, and distributed model inference.',
  },
  {
    title: 'Cloud Platforms & DevOps / SRE',
    tag: 'Infrastructure Resilience',
    description:
      'Multi-cloud AWS & Azure architects, GitOps practitioners, Kubernetes operators, and zero-downtime platform leads.',
    roles: ['Principal Cloud Architect', 'SRE Practice Lead', 'DevSecOps Specialist', 'Kubernetes Lead'],
    highlights: 'System design evaluation, infrastructure-as-code proficiency, and cloud security audits.',
  },
  {
    title: 'FinTech & Core Systems',
    tag: 'Mission-Critical Engineering',
    description:
      'High-frequency trading engineers, zero-fault payment gateways, and banking microservice specialists.',
    roles: ['Core Banking Eng Lead', 'FinTech Security Architect', 'Latency Engineer', 'Staff Backend Lead'],
    highlights: 'Strict verification of distributed ledger, Kafka streaming, and PCI-DSS compliance experience.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Mandate Scoping & Calibration',
    description:
      'We meet directly with hiring managers to map system architecture requirements, cultural nuances, and compensation boundaries.',
  },
  {
    number: '02',
    title: 'Targeted Technical Vetting',
    description:
      'Every candidate undergoes rigorous hands-on technical evaluation, notice period verification, and motivation alignment.',
  },
  {
    number: '03',
    title: '72-Hour Calibrated Shortlist',
    description:
      'We present 3 to 5 interview-ready candidate dossiers with complete background context and verified compensation expectations.',
  },
  {
    number: '04',
    title: 'Smooth Onboarding & 90-Day Warranty',
    description:
      'We manage offer negotiations, counter-offer risk mitigation, and back every permanent placement with a 90-day free replacement warranty.',
  },
];

const FEATURED_ROLES = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    company: 'Tier-1 Global Capability Center',
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
    company: 'FinTech GCC',
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
    company: 'High-Growth Global SaaS',
    isConfidential: false,
    location: 'Bengaluru',
    experience: '14-18 Yrs',
    salary: '₹70L - ₹95L PA',
    skills: ['Engineering Leadership', 'Microservices', 'System Design'],
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20 bg-slate-950 text-slate-100 bg-tech-grid">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[20rem] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Official Logo Banner */}
          <div className="flex justify-center">
            <div className="bg-white/95 px-6 sm:px-8 py-3.5 sm:py-4 rounded-3xl shadow-xl shadow-cyan-500/10 border border-slate-700/40 inline-flex items-center justify-center transform hover:scale-105 transition-all">
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

          {/* Trust Compliance Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 text-xs font-medium shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>DPDP Act (India) Compliant</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-300 font-semibold">Strictly ₹0 Candidate Fee</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Precision Tech Recruitment &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              GCC Executive Talent Search
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-white">
              <span className="text-cyan-400">A</span>spire{' '}
              <span className="text-cyan-400">V</span>alue{' '}
              <span className="text-cyan-400">R</span>ecruits (<span className="text-cyan-400">AVR</span>)
            </span>{' '}
            connects fast-growing tech enterprises, Global Capability Centers, and innovators with high-caliber technology leaders. We deliver pre-screened, interview-ready candidate shortlists within <strong>72 hours</strong>, backed by an unconditional <strong>90-day replacement guarantee</strong>.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/hire-talent"
              className="shimmer-button px-8 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Hire Top Tech Talent</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/jobs"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition inline-flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Explore Verified Roles</span>
            </Link>
          </div>

          {/* 4 Trust Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl mx-auto text-left">
            <div className="glass-panel p-4 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-cyan-400 block font-mono">72 hrs</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Shortlist Turnaround</span>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-emerald-400 block font-mono">94.2%</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">12-Month Retention</span>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-indigo-400 block font-mono">90 Days</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Replacement Warranty</span>
            </div>
            <div className="glass-panel p-4 rounded-2xl border border-slate-800">
              <span className="text-3xl font-black text-amber-400 block font-mono">₹0 Fee</span>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Candidate Commitment</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DUAL AUDIENCE SPLIT PATHWAYS (CLIENTS VS CANDIDATES) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Path 1: For Employers */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-cyan-400 flex items-center justify-center font-bold border border-blue-500/30">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">For Employers &amp; GCC Leaders</span>
                <h2 className="text-2xl font-black text-white mt-1">Building an Engineering Team?</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether scaling a 50+ engineer GCC in Hitec City or Outer Ring Road, or seeking a specialized Staff ML researcher, we provide pre-calibrated candidate dossiers with zero CV spam.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Curated shortlists delivered strictly within 72 business hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Verified notice periods, compensation expectations, and buy-out feasibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
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

          {/* Path 2: For Candidates */}
          <div className="glass-card p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold border border-purple-500/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">For Senior Technologists</span>
                <h2 className="text-2xl font-black text-white mt-1">Seeking Your Next Leadership Role?</h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                We represent senior software architects, staff engineers, and technology directors for high-impact roles at top product companies and global enterprises.
              </p>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Strictly ₹0 candidate placement fee — completely free career advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>100% DPDP Act compliance — your resume is never shared without consent</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
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
      {/* 3. CORE PRACTICE AREAS (SPECIALIZATIONS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">PRACTICE DOMAINS</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Areas of Deep Technical Specialization</h2>
          <p className="text-sm text-slate-400">
            Our practice leads have hands-on understanding of modern software systems, ensuring high-signal evaluation rather than keyword matching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.title}
              className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900 text-cyan-300 border border-slate-800">
                  {area.tag}
                </span>
                <h3 className="text-lg font-black text-white leading-snug">{area.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{area.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400">Frequent Roles:</div>
                <div className="flex flex-wrap gap-1">
                  {area.roles.map((r) => (
                    <span
                      key={r}
                      className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OUR PROVEN 4-STEP RECRUITMENT METHODOLOGY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">HOW WE OPERATE</span>
            <h2 className="text-3xl font-black text-white">The AVR 4-Step Calibration Engine</h2>
            <p className="text-xs sm:text-sm text-slate-400">
              How we consistently deliver top-quartile talent within 72 hours with zero CV spam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-slate-950/70 border border-slate-800 p-6 rounded-2xl space-y-3 relative"
              >
                <div className="text-3xl font-black text-cyan-400 font-mono opacity-80">{step.number}</div>
                <h3 className="font-bold text-white text-base">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FOUNDER PROFILE & ETHICAL PROMISE (VISHNU VARDHAN REDDY ALAVALA) */}
      {/* ========================================================================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden">
          
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
                    <span className="text-cyan-400">A</span>spire{' '}
                    <span className="text-cyan-400">V</span>alue{' '}
                    <span className="text-cyan-400">R</span>ecruits
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Pan-India Tech &amp; GCC Executive Search</div>
              </div>
            </div>

            <Link
              href="/insights"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400 text-xs font-bold transition flex items-center gap-2"
            >
              <span>Read Full Leadership Story</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. VERIFIED ACTIVE ROLES PREVIEW */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">ACTIVE MANDATES</span>
            <h2 className="text-3xl font-black text-white mt-1">Featured Open Opportunities</h2>
            <p className="text-xs text-slate-400">Strictly ₹0 candidate fee with verified compensation bounds.</p>
          </div>
          <Link
            href="/jobs"
            className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1"
          >
            <span>View All Active Roles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURED_ROLES.map((job) => (
            <div
              key={job.id}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between space-y-4"
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

              <div className="pt-2 flex justify-end">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition"
                >
                  View Details &amp; Apply →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/40 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Ready to Build or Scale Your Engineering Organization?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with{' '}
            <span className="font-bold text-white">
              <span className="text-cyan-400">A</span>spire{' '}
              <span className="text-cyan-400">V</span>alue{' '}
              <span className="text-cyan-400">R</span>ecruits
            </span>{' '}
            for calibrated technical shortlists delivered in 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition"
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
