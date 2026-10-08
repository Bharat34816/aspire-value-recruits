'use client';

import React, { useState } from 'react';
import AdminJobsTable from './admin/AdminJobsTable';
import AdminApplicationsTable from './admin/AdminApplicationsTable';
import AdminLeadsTable from './admin/AdminLeadsTable';
import { Briefcase, Users, Building2, ShieldCheck, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications' | 'leads'>('applications');

  return (
    <div className="space-y-8">
      {/* Top Admin Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold uppercase">Active Mandates</div>
          <div className="text-2xl font-extrabold text-blue-600 mt-1">6</div>
          <div className="text-[11px] text-slate-400 mt-0.5">Hyderabad & Bengaluru</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold uppercase">New Applications</div>
          <div className="text-2xl font-extrabold text-emerald-600 mt-1">3</div>
          <div className="text-[11px] text-slate-400 mt-0.5">DPDP Encrypted Resumes</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold uppercase">Employer Leads</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1">2</div>
          <div className="text-[11px] text-slate-400 mt-0.5">72-hr SLA Monitored</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
          <div className="text-xs text-slate-500 font-semibold uppercase">Auth Security</div>
          <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5 mt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Admin Allowlist
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">team@aspirevaluerecruits.com</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('applications')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center gap-2 ${
            activeTab === 'applications'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Users className="w-4 h-4" />
          Applications Pipeline
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center gap-2 ${
            activeTab === 'jobs'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          Mandates & Jobs
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('leads')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center gap-2 ${
            activeTab === 'leads'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Building2 className="w-4 h-4" />
          Employer Briefs
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === 'applications' && <AdminApplicationsTable />}
      {activeTab === 'jobs' && <AdminJobsTable />}
      {activeTab === 'leads' && <AdminLeadsTable />}
    </div>
  );
}
