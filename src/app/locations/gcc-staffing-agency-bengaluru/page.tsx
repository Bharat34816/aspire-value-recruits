import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tech & Engineering Recruitment Agency in Bengaluru | Aspire Value Recruits',
  description:
    'Dedicated technology and engineering talent acquisition partner in Bengaluru (Outer Ring Road, Bellandur, Whitefield). 72-hour shortlist SLA, AI/ML & cloud specialists.',
};

export default function BengaluruLandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" /> Bengaluru Hub: Outer Ring Road & Bellandur
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tech &amp; Engineering Executive Search in Bengaluru
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Bengaluru is Asia’s silicon capital, commanding top talent across Applied AI, Generative Models, Distributed Lakehouses, and Product Engineering. AVR delivers precision headhunting and pod staffing for Fortune 500 tech hubs along ORR and Whitefield.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition"
            >
              Hire Tech Talent in Bengaluru
            </Link>
            <Link
              href="/jobs?location=Bengaluru"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
            >
              Browse Bengaluru Jobs
            </Link>
          </div>
        </div>

        {/* Bengaluru Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Applied AI & LLM Specialists</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Targeted headhunting for engineers building vector databases, production RAG, quantization, and deep learning models.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Product & SaaS Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Staff and Principal Engineers who have built, scaled, and managed multi-tenant B2B and consumer SaaS platforms.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Leadership & VP Search</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Discrete executive mandates for Head of Engineering, Center Heads, and VP Technology with proven international alignment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
