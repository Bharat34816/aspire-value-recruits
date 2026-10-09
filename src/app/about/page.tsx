import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, ShieldCheck, Award, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Aspire Value Recruits | Tech & Executive Recruitment Firm',
  description:
    'Aspire Value Recruits (AVR) is a specialized executive search and tech recruitment consultancy with hubs in Hyderabad & Bengaluru. Learn about our mission and leadership.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            About Aspire Value Recruits
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Consultative Partners in India’s Tech Super-Corridors
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Founded to bridge the widening gap between high-context technology organizations and traditional, transactional recruitment agencies.
          </p>
        </div>

        {/* Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-5">
            <h2 className="text-2xl font-bold text-slate-900">Why We Exist</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              India hosts over 23,000 generalist staffing agencies, yet engineering leaders and TA directors still spend dozens of hours reviewing miscalibrated resumes.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Aspire Value Recruits (AVR) operates differently. We are functional specialists focused squarely on <strong>Global Innovation &amp; Tech Hubs</strong>, <strong>Enterprise Cloud</strong>, and <strong>Generative AI Engineering</strong> across Hyderabad and Bengaluru.
            </p>
            <div className="pt-2">
              <span className="text-xs font-semibold text-blue-600 block">
                “Fewer profiles. Higher calibration. Guaranteed retention.”
              </span>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 space-y-6">
            <h3 className="text-xl font-bold">Our Operating Pillars</h3>
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white">Strict ₹0 Candidate Policy:</strong> We champion candidate trust. We never charge applicants fees for representation, interviews, or career advice.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white">DPDP Act Data Privacy:</strong> Complete security of resumes and sensitive candidate personal information.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white">90-Day Placement Warranty:</strong> Tangible accountability behind every hire delivered.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hub Presence */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Our Tech Hub Footprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Hyderabad Hub (Hitec City)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Positioned in the heart of Cyberabad, serving tier-1 BFSI technology centers, enterprise cloud engineering centers, and semiconductor software hubs in Hitec City and Financial District.
              </p>
            </div>

            <div className="border border-slate-100 rounded-2xl p-6 bg-slate-50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Bengaluru Hub (Bellandur)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Anchored along the Outer Ring Road tech corridor, partnering with AI research labs, enterprise SaaS unicorns, and global technology centers in Bellandur and Whitefield.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
