import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Candidate FAQ | Aspire Value Recruits',
  description:
    'Frequently asked questions for job seekers and candidates. Learn about our zero fee policy, interview process, and DPDP privacy protections.',
};

const FAQS = [
  {
    question: 'Does Aspire Value Recruits charge candidates any placement or registration fee?',
    answer:
      'Strictly NO. AVR never charges candidates any money under any circumstances—no registration fee, no interview scheduling fee, no document charge, and no cut from your CTC. Our services are 100% free for applicants. All our fees are billed strictly to hiring client enterprises.',
  },
  {
    question: 'How is my resume protected under the Indian DPDP Act?',
    answer:
      'Your resume and contact information are encrypted in a private cloud bucket. We never publish your profile publicly, and we never share your CV with any hiring manager or employer without your prior affirmative consent and alignment on the role.',
  },
  {
    question: 'What types of roles do you specialize in?',
    answer:
      'We specialize in senior technology and engineering mandates: Cloud Architecture, Distributed Systems, Platform & DevOps, Generative AI / LLM Engineering, Data Lakehouses, FinTech backend systems, and Engineering Leadership (Director / VP / CPO) across Hyderabad and Bengaluru.',
  },
  {
    question: 'How does the AVR interview coordination process work?',
    answer:
      'Once our partner screens your profile and you approve representing your candidacy to the client, we present your calibrated dossier directly to hiring decision-makers. We manage scheduling, prep insights, feedback synchronization, and offer negotiations.',
  },
  {
    question: 'How can I request deletion of my data from your database?',
    answer:
      'In accordance with India’s Digital Personal Data Protection Act, you can email privacy@aspirevaluerecruits.com at any time requesting data deletion. Your dossier will be purged from our candidate systems within 7 business days.',
  },
];

export default function CandidateFAQPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            Transparency & Candidate Rights
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Candidate Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about our representation, our fee-free policy, and data privacy.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs"
            >
              <h2 className="text-base font-bold text-slate-900 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span>{faq.question}</span>
              </h2>
              <p className="text-sm text-slate-600 pl-8 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
          <ShieldCheck className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900">Ready to Explore Calibrated Roles?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Browse our active GCC openings or drop your CV into our confidential talent network.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/jobs"
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition"
            >
              Browse Active Jobs
            </Link>
            <Link
              href="/talent-network"
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition"
            >
              Drop Your CV (Confidential)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
