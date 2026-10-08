import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Aspire Value Recruits',
  description: 'Terms of service and user agreements for Aspire Value Recruits (AVR).',
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-xs">
          <div className="border-b border-slate-100 pb-4">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
            <p className="text-xs text-slate-500 mt-1">Last Updated: October 2026</p>
          </div>

          <div className="space-y-5 text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website of Aspire Value Recruits (&quot;AVR&quot;), whether as a client seeking talent or as a candidate applying for roles, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">2. Zero Candidate Charges</h2>
              <p>
                Candidates are never charged for any services provided by AVR. Any communication, email, or third party requesting money or payment purporting to represent AVR is fraudulent and should be reported immediately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">3. Accurate Representation</h2>
              <p>
                Candidates warrant that all information, work history, educational credentials, and CTC figures provided in their resume or application submissions are accurate and truthful.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">4. Intellectual Property</h2>
              <p>
                All content, text, data analyses, salary guides, branding, and layouts on this website are the proprietary property of Aspire Value Recruits and may not be reproduced without written consent.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-slate-900">5. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Republic of India, subject to the jurisdiction of courts in Hyderabad, Telangana.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
