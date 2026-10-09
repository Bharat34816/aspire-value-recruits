'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitHiringBrief, BriefFormState } from '@/app/actions/submit-brief';
import {
  Building2,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Send,
  MessageSquare,
  ShieldCheck,
  Clock,
} from 'lucide-react';

const initialState: BriefFormState = {
  success: false,
};

function SubmitBriefButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-4 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-base shadow-md transition flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Submitting Hiring Brief...
        </>
      ) : (
        <>
          <Send className="w-5 h-5" />
          Submit Hiring Brief (Request 72hr Shortlist)
        </>
      )}
    </button>
  );
}

export default function HiringBriefForm() {
  const [state, formAction] = useFormState(submitHiringBrief, initialState);

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-slate-900">Hiring Brief Received!</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our talent acquisition leadership in Hyderabad & Bengaluru has received your mandate. An assigned practice partner will contact you within <strong>2 business hours</strong> to calibrate requirements.
          </p>
        </div>

        {state.leadRef && (
          <div className="inline-block bg-white border border-emerald-300 px-6 py-3 rounded-xl shadow-xs">
            <span className="text-xs text-slate-500 block">Brief Reference ID</span>
            <span className="text-base font-bold text-slate-900 font-mono tracking-wider">
              {state.leadRef}
            </span>
          </div>
        )}

        <div className="pt-6 border-t border-emerald-200/80 max-w-md mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20AVR%20team%2C%20I%20just%20submitted%20a%20hiring%20brief"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Priority WhatsApp Follow-up (+91 XXXXX XXXXX)
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
      {state.message && !state.success && (
        <div className="bg-rose-950/60 border border-rose-800/80 rounded-xl p-4 flex items-start gap-3 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <form action={formAction} className="space-y-6">
        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="company_website_honeypot"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {/* Section 1: Organization Details */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            1. Organization &amp; Contact Point
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Company / Organization Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                required
                placeholder="e.g. Acme Technologies India"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {state.errors?.companyName && (
                <p className="text-rose-400 text-[11px]">{state.errors.companyName[0]}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Contact Person &amp; Designation <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="contactPerson"
                required
                placeholder="e.g. Priya Sharma, VP of Talent"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Official Business Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                name="workEmail"
                required
                placeholder="priya.sharma@acme.com"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {state.errors?.workEmail && (
                <p className="text-rose-400 text-[11px]">{state.errors.workEmail[0]}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Phone Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Mandate Specs */}
        <div className="space-y-4 pt-4 border-t border-slate-800">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            2. Mandate Specifications
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Target Role Title <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                name="roleTitle"
                required
                placeholder="e.g. Principal Cloud Architect or Staff AI Eng"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Headcount Needed <span className="text-rose-400">*</span>
              </label>
              <select
                name="headcount"
                defaultValue="1"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="1">1 Role (Key Hire)</option>
                <option value="3">2 - 5 Engineers (Pod / Team Expansion)</option>
                <option value="8">6 - 15 Engineers (Turnkey Team Build-out)</option>
                <option value="20">15+ Engineers (Enterprise Ramp-up)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Hiring Model <span className="text-rose-400">*</span>
              </label>
              <select
                name="hiringModel"
                defaultValue="permanent"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="permanent">Permanent Staffing (90-Day Guarantee)</option>
                <option value="turnkey">Turnkey Scale-up</option>
                <option value="executive_search">Executive &amp; Leadership Search</option>
                <option value="contract_sow">Specialized SOW / Contract</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Target Timeline <span className="text-rose-400">*</span>
              </label>
              <select
                name="urgency"
                defaultValue="immediate"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="immediate">Immediate / Urgent (72hr SLA)</option>
                <option value="30_days">Within 30 Days</option>
                <option value="quarterly">Quarterly Planning</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Budget / CTC Bracket
              </label>
              <input
                type="text"
                name="budgetRange"
                placeholder="e.g. ₹40L - ₹60L PA"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Role Requirements / Mandate Details (Optional)
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Paste job link, core technologies required, or team context..."
              className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* SLA and Commitment Strip */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Guaranteed initial calibrated shortlist within <strong>72 business hours</strong>.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>90-Day Free Replacement Guarantee.</span>
          </div>
        </div>

        <SubmitBriefButton />
      </form>
    </div>
  );
}
