import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Work & Recruitment SLA | Aspire Value Recruits',
  description:
    'Our 4-stage calibrated talent acquisition engine delivering pre-screened slates in 72 hours with a 90-day replacement guarantee.',
};

export default function HowWeWorkPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            Delivery Methodology
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            The AVR 4-Stage Calibration Engine
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Eliminating candidate spam through deep technical vetting, genuine availability verification, and mutual culture fit.
          </p>
        </div>

        {/* 4 Stages Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase">Phase 01</span>
            <h2 className="text-xl font-bold text-slate-900">Discovery & Calibration Call</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We conduct a 30-minute scoping call with your engineering leads. Rather than just taking a generic job spec, we map architectural decisions, tech stack versions, target companies, compensation ceiling, and culture markers.
            </p>
            <div className="text-xs font-semibold text-slate-500 pt-2">Timeline: Day 0</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase">Phase 02</span>
            <h2 className="text-xl font-bold text-slate-900">72-Hour Calibrated Slate</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We present 3 to 5 precisely calibrated candidate dossiers. Each profile includes verified CTC expectations, notice period feasibility, verified reason for leaving, and an AVR technical summary note.
            </p>
            <div className="text-xs font-semibold text-blue-600 pt-2">Timeline: 72 Business Hours</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase">Phase 03</span>
            <h2 className="text-xl font-bold text-slate-900">Interview Coordination & Pulse Check</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We handle end-to-end interview scheduling and post-round debriefs. We continuously monitor counter-offer risks and notice period progression to eliminate drop-offs before offer rollout.
            </p>
            <div className="text-xs font-semibold text-slate-500 pt-2">Timeline: Continuous</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase">Phase 04</span>
            <h2 className="text-xl font-bold text-slate-900">Closing & 90-Day Guarantee</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We manage offer alignment to ensure high acceptance rates. Following onboarding, our 90-day replacement guarantee activates automatically: in case of early departure, we replace the role free of charge.
            </p>
            <div className="text-xs font-semibold text-emerald-600 pt-2">Protected for 90 Days</div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Experience Calibrated Hiring
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Submit your hiring requirements to receive your first candidate slate within 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
            >
              Request a Hiring Brief
            </Link>
            <Link
              href="/hire-talent"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
