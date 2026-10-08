import React from 'react';
import Link from 'next/link';
import { Job } from '@/types/job';
import { MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  const salaryDisplay =
    job.salaryMin && job.salaryMax
      ? `₹${job.salaryMin}L - ₹${job.salaryMax}L PA`
      : 'Competitive / Industry Standard';

  return (
    <article className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition tracking-tight">
              <Link href={`/jobs/${job.slug}`}>{job.title}</Link>
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
              <span>{job.companyName}</span>
              {job.isConfidential && (
                <span className="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3 text-blue-600" />
                  Confidential Mandate
                </span>
              )}
            </div>
          </div>
          <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 capitalize">
            {job.workplaceType}
          </span>
        </div>

        {/* Core Attributes */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>
              {job.experienceMin}-{job.experienceMax} Yrs
            </span>
          </div>
          <div className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            {salaryDisplay}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {job.description}
        </p>

        {/* Skills Tag Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {job.skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 5 && (
            <span className="text-[11px] font-medium text-slate-400 self-center">
              +{job.skills.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Footer / Action */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          {new Date(job.publishedAt).toLocaleDateString('en-IN', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <Link
          href={`/jobs/${job.slug}`}
          className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 group-hover:bg-blue-600 rounded-lg transition inline-flex items-center gap-1.5 shadow-xs"
        >
          View Role & Apply
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
