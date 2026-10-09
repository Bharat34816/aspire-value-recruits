import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getJobs } from '@/lib/jobs-data';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import { Briefcase, SearchX, UploadCloud, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tech & Executive Job Openings in India | Aspire Value Recruits',
  description:
    'Explore curated engineering, cloud architecture, AI, and leadership mandates across Hyderabad and Bengaluru. Direct application, zero candidate fees, DPDP compliant.',
};

interface JobsPageProps {
  searchParams: {
    q?: string;
    location?: string;
    industry?: string;
    experience?: string;
    employmentType?: string;
    page?: string;
  };
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const { jobs, total } = await getJobs({
    q: searchParams.q,
    location: searchParams.location,
    industry: searchParams.industry,
    experience: searchParams.experience,
    employmentType: searchParams.employmentType,
  });

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5" />
              Direct Application Portal • Strictly ₹0 Fee Guarantee
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Calibrated Tech &amp; Leadership Mandates
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Vetted engineering, platform, and product leadership roles across Hyderabad and Bengaluru tech hubs.
            </p>
          </div>

          <div className="shrink-0 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 text-center space-y-2 shadow-lg">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Active Verified Roles
            </span>
            <span className="text-3xl font-black text-cyan-400 block">{total}</span>
            <div className="flex items-center justify-center gap-1 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>DPDP Encrypted</span>
            </div>
          </div>
        </div>

        {/* Main Content: Filters + Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Filter Sidebar */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <Suspense fallback={<div className="h-96 bg-slate-900 rounded-2xl animate-pulse border border-slate-800" />}>
              <JobFilters />
            </Suspense>
          </aside>

          {/* Right Column: Job List */}
          <section className="lg:col-span-8 xl:col-span-9 space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400 font-medium px-1">
              <span>Showing {jobs.length} of {total} positions</span>
              <span>Updated daily</span>
            </div>

            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-6 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
                  <SearchX className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="text-xl font-bold text-white">No matching jobs found</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    We couldn&apos;t find roles matching your current search parameters. Try adjusting your search query, or drop your CV to be alerted when matching roles open.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <Link
                    href="/jobs"
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition"
                  >
                    Clear All Filters
                  </Link>
                  <Link
                    href="/talent-network"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold transition inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <UploadCloud className="w-4 h-4" />
                    Drop Your CV in Talent Network
                  </Link>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
