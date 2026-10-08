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
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden space-y-4 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white">Mandates &amp; Active Jobs</h3>
          <p className="text-xs text-slate-400">Manage listings, publication status, and view applicant pipelines.</p>
        </div>
        <button
          type="button"
          onClick={() => alert('New job creation modal: Available with Supabase connection.')}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition"
        >
          <PlusCircle className="w-4 h-4" /> Add New Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">Role Title</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Experience</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-800/50 transition">
                <td className="py-3 px-4">
                  <div className="font-bold text-white">{job.title}</div>
                  <div className="text-[11px] text-slate-400">{job.industry}</div>
                </td>
                <td className="py-3 px-4 font-medium text-slate-300">{job.location}</td>
                <td className="py-3 px-4 text-slate-400">{job.experienceMin}-{job.experienceMax} Yrs</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      job.status === 'published'
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <Link
                    href={`/jobs/${job.slug}`}
                    target="_blank"
                    className="p-1.5 text-slate-400 hover:text-cyan-400 inline-block"
                    title="View Public Page"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleJobStatus(job.id)}
                    className="text-[11px] font-semibold px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
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
