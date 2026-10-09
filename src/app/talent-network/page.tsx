import React from 'react';
import type { Metadata } from 'next';
import JobApplyForm from '@/components/JobApplyForm';
import { UploadCloud, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Job } from '@/types/job';

export const metadata: Metadata = {
  title: 'Join Talent Network | Aspire Value Recruits',
  description:
    'Drop your CV into the confidential Aspire Value Recruits talent network. Direct representation with top technology and enterprise employers in Hyderabad & Bengaluru. ₹0 fees.',
};

const GENERAL_TALENT_JOB: Job = {
  id: 'general-talent-network',
  slug: 'talent-network-drop',
  title: 'General Tech & Leadership Talent Network',
  companyName: 'Aspire Value Recruits Client Network',
  isConfidential: true,
  location: 'Hyderabad / Bengaluru / Remote',
  workplaceType: 'hybrid',
  employmentType: 'full_time',
  experienceMin: 2,
  experienceMax: 20,
  salaryCurrency: 'INR',
  industry: 'Tech, Cloud, AI & Product',
  skills: ['Software Engineering', 'Cloud', 'Data & AI', 'DevOps', 'Product Management'],
  description:
    'Submit your profile to our confidential talent network. When high-match engineering or leadership mandates open across Hyderabad or Bengaluru technology centers, our senior partners contact you directly before public advertisement.',
  responsibilities: [],
  requirements: [],
  benefits: [],
  status: 'published',
  publishedAt: new Date().toISOString(),
};

export default function TalentNetworkPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
            <UploadCloud className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Confidential Tech Talent Network
          </h1>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Not actively searching or haven’t seen the exact role? Drop your CV here. We represent senior engineers and tech leaders across India’s premier global tech hubs. Zero candidate charges.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 pt-2">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Free Representation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> DPDP Act Protected
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Direct Partner Outreach
            </span>
          </div>
        </div>

        <JobApplyForm job={GENERAL_TALENT_JOB} />
      </div>
    </div>
  );
}
