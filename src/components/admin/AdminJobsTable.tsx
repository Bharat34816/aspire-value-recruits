'use client';

import React, { useState } from 'react';
import { Job } from '@/types/job';
import { INITIAL_JOBS } from '@/lib/jobs-data';
import { Briefcase, Eye, PlusCircle, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function AdminJobsTable() {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);

  const toggleJobStatus = (jobId: string) => {
    setJobs((prev) =>
      prev.map((j) => {
        if (j.id === jobId) {
          const nextStatus = j.status === 'published' ? 'closed' : 'published';
          return { ...j, status: nextStatus };
        }
        return j;
      })
    );
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden space-y-4 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Mandates & Active Jobs</h3>
          <p className="text-xs text-slate-500">Manage listings, publication status, and view applicant pipelines.</p>
        </div>
        <button
          type="button"
          onClick={() => alert('New job creation modal: Available with Supabase connection.')}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition"
        >
          <PlusCircle className="w-4 h-4" /> Add New Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">Role Title</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Experience</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50/80 transition">
                <td className="py-3 px-4">
                  <div className="font-bold text-slate-900">{job.title}</div>
                  <div className="text-[11px] text-slate-500">{job.industry}</div>
                </td>
                <td className="py-3 px-4 font-medium text-slate-700">{job.location}</td>
                <td className="py-3 px-4 text-slate-600">{job.experienceMin}-{job.experienceMax} Yrs</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      job.status === 'published'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <Link
                    href={`/jobs/${job.slug}`}
                    target="_blank"
                    className="p-1.5 text-slate-500 hover:text-blue-600 inline-block"
                    title="View Public Page"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleJobStatus(job.id)}
                    className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    {job.status === 'published' ? 'Close' : 'Publish'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
