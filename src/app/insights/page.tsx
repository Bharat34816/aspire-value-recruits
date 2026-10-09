import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  FileText,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Founder & Insights | Aspire Value Recruits',
  description:
    'Meet Vishnu Vardhan Reddy Alavala, Founder & Managing Director of Aspire Value Recruits. Explore our mission, leadership vision, and recruitment insights.',
};

const INSIGHTS_ARTICLES = [
  {
    tag: 'GCC Executive Report',
    title: 'The Rise of Mega-GCCs in Hyderabad: What Tech Leaders Seek in 2026',
    description:
      'How Fortune 500 tech hubs in Hitec City are shifting from offshore support centers into strategic innovation powerhouses commanding core architecture decisions.',
    date: 'October 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Ethics & Compliance',
    title: 'Why DPDP Act Compliance is the New Benchmark in Executive Search',
    description:
      'Senior technologists in India demand confidentiality and affirmative consent. How AVR implements private encrypted candidate vaults.',
    date: 'October 2026',
    readTime: '4 min read',
  },
  {
    tag: 'Talent Acquisition Strategy',
    title: 'Solving the 90-Day Notice Period Dilemma in Indian Tech Corridors',
    description:
      'Proven techniques for engineering directors and TA heads to eliminate offer drop-offs from 35% down to under 6% via calibrated closing.',
    date: 'October 2026',
    readTime: '6 min read',
  },
];

export default function InsightsPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-16 space-y-16 relative overflow-hidden bg-cyber-grid">
      {/* FLOATING AMBIENT GLOW */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[90px] animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Hero Header */}
        <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 border border-indigo-800/60 rounded-3xl p-8 sm:p-14 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            LEADERSHIP, MISSION &amp; STRATEGIC INSIGHTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Pioneering Calibrated Recruitment in India’s Tech Corridors
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            The Indian recruitment landscape hosts over 23,000 agencies, yet hiring leaders still struggle with miscalibrated resumes and endless screening hours. Aspire Value Recruits was founded to redefine the standard.
          </p>
        </div>

        {/* Founder Profile & Core Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Founder Dossier */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-indigo-950/60 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                VA
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Vishnu Vardhan Reddy Alavala</h3>
                <div className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider mt-0.5">
                  Founder & Managing Director
                </div>
                <div className="text-xs text-slate-400 mt-1">Aspire Value Recruits (AVR)</div>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-5">
              <p>
                <strong>Vishnu Vardhan Reddy Alavala</strong> established Aspire Value Recruits with a single governing principle: <em>hiring must be consultative, calibrated, and deeply ethical.</em>
              </p>
              <p>
                Under his leadership, AVR has evolved from an executive search firm into a high-velocity talent delivery partner powering Global Capability Centers (GCCs), FinTech giants, and Tier-1 engineering hubs across Hyderabad and Bengaluru.
              </p>
              <p>
                Vishnu pioneered AVR’s zero-fee candidate policy, complete DPDP Act data safeguards, and our industry-first 72-hour calibrated shortlist commitment.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded-lg bg-blue-950 text-blue-300 border border-blue-800/40 font-bold">Tech Headhunter</span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-950 text-purple-300 border border-purple-800/40 font-bold">GCC Scaler</span>
              <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-800/40 font-bold">Talent Strategist</span>
            </div>
          </div>

          {/* Mission & Principles */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl">
            <div className="space-y-3">
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider">FOUNDATIONAL PILLARS</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">Our Mission & Principles</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                To build the most trustworthy, calibrated talent bridge between high-impact engineers and visionary enterprises in Hyderabad and Bengaluru.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-cyan-400 font-extrabold text-sm">01. Precision Calibration</div>
                <p className="text-xs text-slate-400 leading-relaxed">We deliver 3 to 5 deeply qualified candidates rather than 50 unvetted resumes. Every profile matches technical, cultural, and budget criteria.</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-emerald-400 font-extrabold text-sm">02. Absolute Candidate Trust</div>
                <p className="text-xs text-slate-400 leading-relaxed">Strict ₹0 candidate placement charges. No fees, no salary deductions, and zero compromises on confidentiality.</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-purple-400 font-extrabold text-sm">03. DPDP Act Compliance</div>
                <p className="text-xs text-slate-400 leading-relaxed">Resumes stored only in encrypted private cloud storage. We never share a candidate profile without explicit consent.</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl space-y-2">
                <div className="text-amber-400 font-extrabold text-sm">04. 90-Day Guarantee</div>
                <p className="text-xs text-slate-400 leading-relaxed">Unconditional 90-day replacement warranty. We share complete accountability for every hire made.</p>
              </div>
            </div>

            {/* Quotation Callout */}
            <div className="bg-gradient-to-r from-blue-950/90 to-indigo-950/90 p-6 rounded-2xl border border-blue-700/40 flex items-center gap-4">
              <span className="text-4xl font-serif text-cyan-400">&ldquo;</span>
              <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
                <span className="block text-xs font-bold text-cyan-400 not-italic mt-2">
                  — Vishnu Vardhan Reddy Alavala, Founder & Managing Director
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Thought Leadership Articles */}
        <div className="space-y-6">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">RECRUITMENT INTELLIGENCE</span>
              <h3 className="text-2xl font-black text-white mt-1">Articles & Market Analysis</h3>
            </div>
            <Link href="/salary-guide" className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1">
              Download 2026 Salary Report <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_ARTICLES.map((art) => (
              <div
                key={art.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 hover:shadow-xl transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase">{art.tag}</span>
                  <h4 className="font-extrabold text-base text-white">{art.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{art.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
