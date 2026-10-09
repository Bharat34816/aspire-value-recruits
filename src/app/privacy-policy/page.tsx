import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock, Mail, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & DPDP Act Compliance | Aspire Value Recruits',
  description:
    'Our privacy policy explains how Aspire Value Recruits safeguards candidate resumes and personal information under India’s Digital Personal Data Protection (DPDP) Act.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Indian DPDP Act (2023/2026) Compliant
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy & Candidate Data Protection
            </h1>
            <p className="text-xs text-slate-500">Effective Date: October 2026</p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Commitment to Candidate Data Protection</h2>
              <p>
                Aspire Value Recruits (AVR) acts as a Data Fiduciary and Data Processor under India’s Digital Personal Data Protection Act (DPDP Act). We are committed to processing candidate resumes, contact details, and career information transparently, legally, and strictly for authorized recruitment mandates.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Zero Placement Fee Guarantee</h2>
              <p>
                AVR adheres to a strict policy of never charging job applicants or candidates any registration, interview, processing, or placement fees. Our recruitment services are entirely paid by client employers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Purpose of Processing & Consent</h2>
              <p>
                When you submit your CV or fill out an application form on this website, you grant affirmative consent for AVR to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Evaluate your qualifications against active and upcoming technology and engineering openings.</li>
                <li>Share your anonymized or calibrated profile with hiring managers only after your confirmation.</li>
                <li>Communicate with you regarding relevant job opportunities via email, phone, or WhatsApp.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Private & Encrypted Resume Storage</h2>
              <p>
                Candidate resumes are stored exclusively in private, encrypted cloud storage buckets. We do not expose candidate files to public search engine crawlers or unauthenticated third parties. Recruiter access is authenticated and audited.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Right to Data Erasure & Withdrawal</h2>
              <p>
                Under the DPDP Act, you retain full rights to review your stored information or request permanent erasure from our candidate databases. To request deletion of your CV and profile, please contact our Data Protection Officer:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-900">privacy@aspirevaluerecruits.com</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
