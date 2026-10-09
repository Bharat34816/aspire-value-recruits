'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Award,
  MessageSquare,
  Sparkles,
  Calculator,
} from 'lucide-react';

const MODEL_DETAILS = {
  permanent: {
    title: 'Permanent Specialized Engineering Staffing',
    badge: '72-Hour SLA Backed',
    desc: 'Our flagship service model. We deliver 3 to 5 precisely calibrated engineering dossiers within 72 business hours. All candidates are pre-screened for technical depth, offer acceptance intent, and notice period feasibility.',
    points: [
      '72-Hour Calibrated Slate delivery guarantee.',
      'Notice period buyout advisory and active counter-offer monitoring.',
      'Backed by our 90-Day Free Replacement Guarantee.',
    ],
  },
  turnkey: {
    title: 'Turnkey GCC & Engineering Center Build-Outs',
    badge: 'High-Volume Scale (0 to 100+)',
    desc: 'Dedicated talent acquisition infrastructure for Fortune 500 enterprises building out or expanding Global Capability Centers in Hyderabad & Bengaluru. We manage talent mapping, compensation benchmarks, and cross-functional pod hiring.',
    points: [
      'Capacity to scale from seed pods to 100+ engineers in 6 months.',
      'Dedicated AVR practice leads embedded in your talent operations.',
      'Zero-conflict talent mapping across competing tech hubs.',
    ],
  },
  executive: {
    title: 'Executive & Leadership Search',
    badge: 'Confidential Practice',
    desc: 'Discrete executive mandate execution for Engineering Directors, Principal Architects, VP of Technology, and Chief Product Officers. We maintain active advisory relationships with India’s top 1% tech leaders.',
    points: [
      'Confidential dual-blind candidate representation.',
      'Long-Term Incentive (LTI) and equity structuring advisory.',
      'Proven high offer-acceptance rate (over 92%).',
    ],
  },
  contract: {
    title: 'Specialized Tech SOW & Contract Capacity',
    badge: 'Rapid 14-Day Deployment',
    desc: 'Flexible, high-velocity engineering capacity for critical cloud migrations, architecture modernizations, or crunch periods without increasing permanent headcounts.',
    points: [
      'Deployment ready within 14 calendar days.',
      'Transparent billing and regulatory employment compliance.',
      'Seamless conversion to permanent placement option.',
    ],
  },
};

export default function HireTalentPage() {
  const [selectedModel, setSelectedModel] = useState<keyof typeof MODEL_DETAILS>('permanent');
  const [calcDomain, setCalcDomain] = useState('cloud');
  const [calcCount, setCalcCount] = useState('1');

  const currentInfo = MODEL_DETAILS[selectedModel];

  // Dynamic SLA calculations
  let calculatedSla = '72 Business Hours';
  let calculatedPool = '420+ Pre-Mapped Candidates';

  if (calcCount === '10') {
    calculatedSla = '5 to 7 Days (Full Pod)';
    calculatedPool = '1,200+ Verified Engineers';
  } else if (calcDomain === 'leadership') {
    calculatedSla = '5 Business Days';
    calculatedPool = '85+ Senior Tech Leaders';
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 space-y-16 relative overflow-hidden bg-cyber-grid">
      {/* FLOATING AMBIENT GLOW */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[90px] animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 border border-blue-800/60 rounded-3xl p-8 sm:p-14 shadow-2xl space-y-6 text-center relative overflow-hidden">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            ENTERPRISE &amp; GCC TALENT SOLUTIONS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            High-Velocity Engineering Capacity for Hyderabad &amp; Bengaluru
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Say goodbye to hundreds of irrelevant resumes. Receive a calibrated slate of 3 to 5 pre-screened, offer-ready tech candidates within 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-brief"
              className="shimmer-button px-8 py-4 rounded-2xl text-white font-black text-xs shadow-xl transition transform hover:-translate-y-1 inline-flex items-center gap-2"
            >
              Submit a Mandate Brief <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%20Vishnu%20and%20AVR%20Team%2C%20I%20want%20to%20discuss%20hiring%20talent"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg transition inline-flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Practice Lead
            </a>
          </div>
        </div>

        {/* Interactive Service Model Selector */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-cyan-400 tracking-widest uppercase">
              FLEXIBLE ENGAGEMENTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Choose Your Talent Delivery Model
            </h2>
            <p className="text-xs text-slate-400">
              Click a model below to explore scope, SLA, and warranty specifications.
            </p>
          </div>

          {/* Model Selection Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            <button
              type="button"
              onClick={() => setSelectedModel('permanent')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                selectedModel === 'permanent'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-1 ring-cyan-400'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Permanent Search (72hr SLA)
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel('turnkey')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                selectedModel === 'turnkey'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-1 ring-cyan-400'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Turnkey GCC Build-outs
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel('executive')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                selectedModel === 'executive'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-1 ring-cyan-400'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Executive &amp; Director Search
            </button>
            <button
              type="button"
              onClick={() => setSelectedModel('contract')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition ${
                selectedModel === 'contract'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-1 ring-cyan-400'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Specialized Tech Contract / SOW
            </button>
          </div>

          {/* Dynamic Details Box */}
          <div className="max-w-4xl mx-auto glass-panel border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
              <h3 className="text-xl font-black text-white">{currentInfo.title}</h3>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-extrabold text-[11px] border border-cyan-500/40 w-fit">
                {currentInfo.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{currentInfo.desc}</p>
            <ul className="space-y-2 border-t border-slate-800 pt-4">
              {currentInfo.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="/request-brief"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-md transition inline-flex items-center gap-1.5"
              >
                Initiate This Engagement <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 90-Day Guarantee Seal WITH ROTATING METALLIC RING */}
        <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border border-amber-600/40 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-3 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/40">
              <ShieldCheck className="w-4 h-4" /> QUALITY WARRANTY CERTIFICATE
            </div>
            <h3 className="text-2xl font-black text-white">Our 90-Day Free Replacement Guarantee</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We share mutual accountability with hiring managers. If any permanent placement departs within the first 90 calendar days for any reason, Aspire Value Recruits provides a fully calibrated replacement candidate with zero additional recruitment fees.
            </p>
          </div>
          {/* Animated 3D Seal */}
          <div className="shrink-0 relative w-40 h-40 flex items-center justify-center">
            {/* Rotating Outer Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 p-1 animate-spin-slow opacity-80" />
            {/* Static Inner Gold Core */}
            <div className="relative w-36 h-36 rounded-full bg-slate-950 border border-amber-500/40 flex flex-col items-center justify-center text-center p-2 shadow-2xl shadow-amber-500/30">
              <span className="text-amber-400 font-black text-3xl tracking-tight">90</span>
              <span className="text-white text-[11px] font-extrabold uppercase tracking-widest">DAYS</span>
              <span className="text-amber-300 text-[9px] uppercase font-bold tracking-wider">GUARANTEED</span>
            </div>
          </div>
        </div>

        {/* Interactive Feasibility Calculator */}
        <div className="glass-panel border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-black text-cyan-400 uppercase flex items-center gap-1.5">
              <Calculator className="w-4 h-4" /> INTERACTIVE ESTIMATOR
            </span>
            <h3 className="text-xl font-bold text-white">Instant Mandate Feasibility Calculator</h3>
            <p className="text-xs text-slate-400">
              Estimate candidate availability and SLA in Hyderabad &amp; Bengaluru for your open role.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">Tech Domain</label>
              <select
                value={calcDomain}
                onChange={(e) => setCalcDomain(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white mt-1"
              >
                <option value="cloud">Cloud / DevOps Architecture</option>
                <option value="ai">Generative AI / Data</option>
                <option value="fintech">FinTech / Core Banking</option>
                <option value="leadership">Engineering Leadership (Dir/VP)</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">Target Location</label>
              <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white mt-1">
                <option value="hyd">Hyderabad (Hitec City)</option>
                <option value="blr">Bengaluru (Bellandur / ORR)</option>
                <option value="both">Both Corridors</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-400 uppercase">Headcount</label>
              <select
                value={calcCount}
                onChange={(e) => setCalcCount(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white mt-1"
              >
                <option value="1">1 Key Hire</option>
                <option value="3">3 Engineers (Pod)</option>
                <option value="10">10+ Engineers (Scale-up)</option>
              </select>
            </div>
          </div>

          <div className="p-4 bg-slate-950/90 rounded-2xl border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-slate-400 block">Calculated First Slate Delivery:</span>
              <span className="text-lg font-black text-cyan-400">{calculatedSla}</span>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs text-slate-400 block">Talent Pool In Orbit:</span>
              <span className="text-lg font-black text-emerald-400">{calculatedPool}</span>
            </div>
            <Link
              href="/request-brief"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl transition shadow-md"
            >
              Request This Slate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
