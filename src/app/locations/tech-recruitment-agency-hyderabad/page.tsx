import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, ShieldCheck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tech & GCC Recruitment Agency in Hyderabad | Aspire Value Recruits',
  description:
    'Dedicated technology and GCC staffing partner in Hyderabad (Hitec City, Financial District, Gachibowli). 72-hour shortlist SLA, zero candidate fee guarantee.',
};

export default function HyderabadLandingPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5" /> Hyderabad Hub: Hitec City & Financial District
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Specialized Tech & GCC Recruitment Agency in Hyderabad
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            From Hitec City to Financial District and Gachibowli, Hyderabad is the premier center for global enterprise platforms, cloud infrastructure, and fintech hubs. Aspire Value Recruits connects high-intent engineering talent with elite technology mandates.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition"
            >
              Hire Tech Talent in Hyderabad
            </Link>
            <Link
              href="/jobs?location=Hyderabad"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
            >
              Browse Hyderabad Jobs
            </Link>
          </div>
        </div>

        {/* Hyderabad Specific Ecosystem Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">BFSI & FinTech Corridors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Deep talent mapping across Hyderabad’s Financial District, providing tier-1 core banking, low-latency, and payments infrastructure architects.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Cloud & Distributed Platforms</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Expertise sourcing multi-cloud AWS, Azure, and GCP distributed engineers who navigate zero-downtime microservices and high-throughput workloads.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">Enterprise GCC Scaling</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Proven turnkey capacity scaling tech center headcount from 5 to 50+ engineers within 3 to 6 months with verified notice period monitoring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
