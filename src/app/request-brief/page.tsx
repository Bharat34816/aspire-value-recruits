import React from 'react';
import type { Metadata } from 'next';
import HiringBriefForm from '@/components/HiringBriefForm';
import { Building2, Clock, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Request a Hiring Brief | Aspire Value Recruits',
  description:
    'Submit your technology hiring brief for Hyderabad and Bengaluru tech hubs. Calibrated candidate shortlists delivered within 72 hours, backed by a 90-day replacement guarantee.',
};

export default function RequestBriefPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            Employer Mandate Intake • Hyderabad & Bengaluru Tech Corridors
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Initiate a Precision Hiring Mandate
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate resume spam. Outline your technical requirements below to receive a calibrated slate of 3–5 pre-vetted senior candidates within 72 hours.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" /> 72-Hour Calibrated SLA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 90-Day Replacement Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" /> 94% 12-Month Retention
            </span>
          </div>
        </div>

        {/* The Intake Form */}
        <HiringBriefForm />
      </div>
    </div>
  );
}
