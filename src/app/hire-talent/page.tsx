import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Zap,
  Users,
  Award,
  MessageSquare,
  FileText,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire Tech & GCC Talent | Aspire Value Recruits',
  description:
    'Dedicated technology and GCC staffing solutions in Hyderabad & Bengaluru. 72-hour shortlist SLA, consultative calibration, and 90-day replacement guarantee.',
};

const SERVICES = [
  {
    title: 'GCC Turnkey Engineering Build-Outs',
    tag: 'Flagship Solution',
    description:
      'End-to-end talent acquisition programs for Fortune 500 enterprises building out or expanding Global Capability Centers in Hyderabad & Bengaluru. We calibrate hiring velocity, compensation bands, and tech culture.',
    icon: Building2,
    benefits: ['Scale from 5 to 100+ engineers in 6 months', 'Zero-conflict talent mapping', 'Complete market compensation analytics'],
  },
  {
    title: 'Senior & Executive Tech Search',
    tag: 'Boutique Advisory',
    description:
      'Confidential executive mandate execution for Engineering Directors, Principal Architects, VP of Technology, and Chief Product Officers. 100% discrete search with high offer-acceptance calibration.',
    icon: Award,
    benefits: ['Confidential representation', 'Dual-blind candidate matching', 'Comprehensive leadership vetting'],
  },
  {
    title: 'Permanent Specialized Engineering Staffing',
    tag: 'Core Practice',
    description:
      'Calibrated shortlists of 3 to 5 vetted engineers per role within 72 hours. Spanning Cloud, DevOps, Distributed Systems, AI/ML, and High-Scale Full Stack.',
    icon: Zap,
    benefits: ['72-hour shortlist delivery SLA', 'Notice period buyout guidance', '90-day free replacement guarantee'],
  },
  {
    title: 'Specialized Tech SOW & Contract-to-Hire',
    tag: 'Agile Delivery',
    description:
      'Flexible, high-velocity engineering capacity for project crunches, cloud migrations, and platform modernizations without increasing permanent headcount.',
    icon: Users,
    benefits: ['Immediate availability within 14 days', 'Flexible billing and compliance', 'Seamless conversion options'],
  },
];

export default function HireTalentPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise & GCC Talent Acquisition
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Consultative Talent Delivery Built for High-Growth Tech Corridors
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Stop sorting through hundreds of unfiltered resumes. Aspire Value Recruits delivers calibrated slates of pre-screened tech talent within 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-md flex items-center gap-2"
            >
              Submit a Hiring Brief <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%20AVR%2C%20I%20would%20like%20to%20discuss%20hiring%20talent."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-semibold text-sm transition inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Direct Partner
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.description}</p>
                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {srv.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* The AVR SLA & 90-Day Guarantee Callout */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
              Quality Assurance
            </span>
            <h2 className="text-3xl font-bold tracking-tight">
              Our 90-Day Unconditional Replacement Guarantee
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We stand behind every placement we make. In the rare event that an engineer departs within the first 90 calendar days of joining, we provide a fully calibrated replacement candidate with zero additional recruitment fees.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800 text-center">
            <div className="space-y-1">
              <span className="text-3xl font-extrabold text-blue-400">72 Hours</span>
              <span className="text-xs text-slate-400 block">First Shortlist SLA</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold text-emerald-400">94.2%</span>
              <span className="text-xs text-slate-400 block">First-Year Retention</span>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold text-blue-400">1 : 3</span>
              <span className="text-xs text-slate-400 block">Interview to Offer Ratio</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to Build or Scale Your Team?
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Take 2 minutes to submit your hiring brief or request our latest 2026 GCC Salary Benchmark Report.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-brief"
              className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition shadow-md"
            >
              Submit Hiring Brief
            </Link>
            <Link
              href="/salary-guide"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition"
            >
              Download Salary Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
