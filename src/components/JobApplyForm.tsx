'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { submitApplication, ApplyFormState } from '@/app/actions/apply';
import { Job } from '@/types/job';
import {
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  FileText,
  Lock,
  Loader2,
  ShieldCheck,
  Send,
} from 'lucide-react';

interface JobApplyFormProps {
  job: Job;
}

const initialState: ApplyFormState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Submitting Application Securely...
        </>
      ) : (
        <>
          <Send className="w-4 h-4" />
          Submit Application (Zero Fee)
        </>
      )}
    </button>
  );
}

export default function JobApplyForm({ job }: JobApplyFormProps) {
  const [state, formAction] = useFormState(submitApplication, initialState);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName(null);
    }
  };

  if (state.success) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Thank you for applying for <strong>{job.title}</strong>. Your candidate dossier has been registered in our private applicant system.
          </p>
        </div>

        {state.applicationRef && (
          <div className="inline-block bg-white border border-emerald-300 px-5 py-2.5 rounded-xl shadow-xs">
            <span className="text-xs text-slate-500 block">Reference ID</span>
            <span className="text-base font-bold text-slate-900 font-mono tracking-wider">
              {state.applicationRef}
            </span>
          </div>
        )}

        <div className="pt-4 border-t border-emerald-200/80 max-w-md mx-auto text-xs text-slate-500 space-y-1">
          <p className="flex items-center justify-center gap-1.5 font-medium text-emerald-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Free Candidate Representation • DPDP Encrypted
          </p>
          <p>Our recruitment consultants in Hyderabad & Bengaluru will reach out within 72 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="text-xl font-bold text-white">Direct Application Form</h3>
        <p className="text-xs text-slate-400 mt-1">
          Applying for <span className="font-semibold text-cyan-400">{job.title}</span> • Strictly ₹0 Placement Charge
        </p>
      </div>

      {state.message && !state.success && (
        <div className="bg-rose-950/60 border border-rose-800/80 rounded-xl p-4 flex items-start gap-3 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <input type="hidden" name="jobId" value={job.id} />
        <input type="hidden" name="jobSlug" value={job.slug} />
        <input type="hidden" name="jobTitle" value={job.title} />

        {/* Anti-spam honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_url_check"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {/* Row 1: Full Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="e.g. Ramesh Varma"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {state.errors?.fullName && (
              <p className="text-rose-400 text-[11px]">{state.errors.fullName[0]}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="ramesh.varma@example.com"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {state.errors?.email && (
              <p className="text-rose-400 text-[11px]">{state.errors.email[0]}</p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Current Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Phone Number <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {state.errors?.phone && (
              <p className="text-rose-400 text-[11px]">{state.errors.phone[0]}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Current City <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              name="currentLocation"
              required
              placeholder="e.g. Hyderabad, Bengaluru"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Row 3: Experience & Notice Period */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Total Experience (Years) <span className="text-rose-400">*</span>
            </label>
            <input
              type="number"
              step="0.5"
              name="totalExperienceYears"
              required
              min="0"
              placeholder="e.g. 8.5"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">
              Notice Period (Days) <span className="text-rose-400">*</span>
            </label>
            <select
              name="noticePeriodDays"
              required
              defaultValue="30"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="0">Immediate Joiner / Serving Notice</option>
              <option value="15">15 Days</option>
              <option value="30">30 Days</option>
              <option value="60">60 Days</option>
              <option value="90">90 Days</option>
            </select>
          </div>
        </div>

        {/* Row 4: Compensation benchmarks (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Current Annual CTC (₹ Lakhs)</label>
            <input
              type="number"
              step="0.5"
              name="currentCtc"
              placeholder="e.g. 32"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Expected Annual CTC (₹ Lakhs)</label>
            <input
              type="number"
              step="0.5"
              name="expectedCtc"
              placeholder="e.g. 45"
              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Row 5: LinkedIn URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">LinkedIn Profile URL (Optional)</label>
          <input
            type="url"
            name="linkedinUrl"
            placeholder="https://linkedin.com/in/username"
            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-700 bg-slate-950 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Row 6: Resume Upload Box */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-300 block">
            Upload Resume / CV <span className="text-rose-400">*</span>{' '}
            <span className="text-slate-400 font-normal">(PDF, DOC, DOCX up to 5 MB)</span>
          </label>
          <div className="border-2 border-dashed border-slate-700 hover:border-cyan-400 rounded-2xl p-5 text-center transition bg-slate-950/60">
            <input
              type="file"
              id="resume-upload"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="resume-upload" className="cursor-pointer block space-y-2">
              <UploadCloud className="w-8 h-8 text-cyan-400 mx-auto" />
              {selectedFileName ? (
                <div className="flex items-center justify-center gap-2 text-xs font-semibold text-white">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  <span>{selectedFileName}</span>
                </div>
              ) : (
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-cyan-400">Click to browse file</span> or drag &amp; drop
                </div>
              )}
              <span className="text-[11px] text-slate-500 block">Encrypted in private storage</span>
            </label>
          </div>
          {state.errors?.resume && (
            <p className="text-rose-400 text-[11px]">{state.errors.resume[0]}</p>
          )}
        </div>

        {/* Row 7: Mandatory DPDP Act Consent Checkbox */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-300">
            <input
              type="checkbox"
              name="dpdpConsent"
              required
              className="mt-0.5 rounded border-slate-700 text-blue-600 focus:ring-cyan-400"
            />
            <span>
              I consent to Aspire Value Recruits processing my professional details under the{' '}
              <strong className="text-white">Digital Personal Data Protection (DPDP) Act</strong> for candidate representation. I acknowledge that AVR never charges candidate fees and will never disclose my profile without consent.{' '}
              <Link href="/privacy-policy" className="text-cyan-400 underline">
                View Privacy Policy
              </Link>
              .
            </span>
          </label>
          {state.errors?.dpdpConsent && (
            <p className="text-rose-400 text-[11px]">{state.errors.dpdpConsent[0]}</p>
          )}
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
