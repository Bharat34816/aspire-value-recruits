'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { requestSalaryGuide, SalaryGuideFormState } from '@/app/actions/salary-guide';
import {
  FileText,
  Download,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Building2,
  MapPin,
  Loader2,
} from 'lucide-react';

const initialState: SalaryGuideFormState = {
  success: false,
};

function DownloadSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" /> Unlocking Benchmark PDF...
        </>
      ) : (
        <>
          <Download className="w-4 h-4" /> Download 2026 Salary Guide Free
        </>
      )}
    </button>
  );
}

export default function SalaryGuidePage() {
  const [state, formAction] = useFormState(requestSalaryGuide, initialState);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            Annual Market Intelligence • October 2026 Release
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            India Tech & GCC Compensation Guide 2026
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Granular salary benchmarking across Hyderabad & Bengaluru tech corridors. Covering Cloud, Generative AI, DevOps, Platform Architecture, and VP-level compensation bands.
          </p>
        </div>

        {/* 2-Column: Details and Gated Download Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Report Contents */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900">What’s Inside the 2026 Report</h2>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900">Hyderabad & Bengaluru GCC Salary Bands:</strong> 25th, 50th, 75th, and 90th percentile fixed CTC breakdowns across 40+ engineering roles.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900">Generative AI & LLM Premium Index:</strong> Real data on talent premiums commanded by prompt engineers, vector pipeline architects, and fine-tuning specialists.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900">Notice Period Buyout & Offer Drop Rates:</strong> Analysis of counter-offers, 90-day vs 30-day notice drop rates, and retention strategies.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-slate-900">Executive Search Multipliers:</strong> Retention incentives, joining bonuses, and Long-Term Incentive (LTI) structures for VP and Director appointments.
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-50 p-3.5 rounded-xl">
                <span className="text-xl font-bold text-blue-600 block">40+</span>
                <span className="text-[11px] text-slate-500">Roles Analyzed</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl">
                <span className="text-xl font-bold text-emerald-600 block">3,500+</span>
                <span className="text-[11px] text-slate-500">Offers Surveyed</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl">
                <span className="text-xl font-bold text-slate-800 block">48 Pages</span>
                <span className="text-[11px] text-slate-500">PDF Report</span>
              </div>
            </div>
          </div>

          {/* Right Column: Download Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-slate-900">Download Free Report</h3>
              <p className="text-xs text-slate-500 mt-1">Instant digital access • Zero charges</p>
            </div>

            {state.success ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Access Unlocked!</h4>
                <p className="text-xs text-slate-600">
                  {state.message}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setHasDownloaded(true);
                      alert('Download triggered! The Aspire Value Recruits 2026 Salary Guide is downloading.');
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Download 2026 Report PDF
                  </button>
                  {hasDownloaded && (
                    <p className="text-[11px] text-emerald-700 font-medium mt-2">
                      A copy has also been registered to your email.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="middle_name_check"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Anand Krishna"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Work / Professional Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="anand@company.com"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Company Name or Job Title</label>
                  <input
                    type="text"
                    name="companyOrRole"
                    required
                    placeholder="e.g. TA Director / Engineering Head"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">City Location</label>
                  <select
                    name="city"
                    required
                    defaultValue="Hyderabad"
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-2.5 text-[11px] text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>
                      I agree to receive the report and relevant GCC hiring updates from Aspire Value Recruits under the DPDP Act.
                    </span>
                  </label>
                </div>

                <DownloadSubmitButton />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
