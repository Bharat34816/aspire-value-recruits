import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Client Case Studies & Hiring Turnarounds | Aspire Value Recruits',
  description:
    'Real-world enterprise engineering ramp-ups and executive hiring case studies across Hyderabad and Bengaluru. Review our delivery track record.',
};

const CASE_STUDIES = [
  {
    tag: 'Enterprise Turnkey Scale-up • Hyderabad',
    title: 'Scaling a Fortune 500 Payments Technology Center from 0 to 45 Engineers in 90 Days',
    client: 'Global FinTech Enterprise (Confidential Client)',
    summary:
      'The client needed to establish their primary Asian Core Platform Engineering center in Hitec City, Hyderabad with an aggressive SLA for zero-defect core payment architects.',
    challenges: [
      'High competition from established mega tech hubs in Hitec City.',
      'Complex multi-cloud tech stack (AWS EKS, Kafka, Go, high-concurrency microservices).',
      'Over 40% historical offer rejection rate in the local market.',
    ],
    results: [
      'Delivered 45 accepted offers within 90 days.',
      'Achieved a 93.3% offer acceptance rate via calibrated closing negotiations.',
      'Zero candidate departures during the first 12 months (100% retention).',
    ],
  },
  {
    tag: 'Executive Search • Bengaluru',
    title: 'Recruiting a Head of Applied AI & LLM Systems for a US Unicorn',
    client: 'Enterprise AI SaaS Firm',
    summary:
      'The client had struggled for 5 months through generic staffing agencies before partnering exclusively with AVR for confidential leadership outreach.',
    challenges: [
      'Extreme scarcity of engineers with hands-on multi-modal LLM deployment experience in India.',
      'Candidate needed to manage a hybrid team across San Francisco and Bengaluru.',
    ],
    results: [
      'Presented 3 fully calibrated executive profiles in 5 business days.',
      'Candidate onboarded within 45 days with buy-out facilitation.',
      'Subsequently expanded to staffing the entire 12-person applied AI research pod.',
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            Proven Delivery Track Record
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Technology Talent Case Studies
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            How we partner with tech centers in Hyderabad and Bengaluru to solve difficult hiring bottlenecks.
          </p>
        </div>

        <div className="space-y-8">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.title}
              className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {cs.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">{cs.client}</span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900">{cs.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{cs.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h3 className="text-xs font-bold uppercase text-slate-700 tracking-wider">
                    Core Challenges
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {cs.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
                  <h3 className="text-xs font-bold uppercase text-emerald-800 tracking-wider">
                    Quantified Outcomes
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-emerald-950 font-medium">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Have an Ambitious Hiring Target?</h2>
          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Discuss your target headcount and calibration requirements with our engineering partners.
          </p>
          <div className="pt-2">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition inline-flex items-center gap-2"
            >
              Submit Hiring Brief <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
