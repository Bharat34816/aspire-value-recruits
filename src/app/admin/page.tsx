import React from 'react';
import type { Metadata } from 'next';
import AdminDashboard from '@/components/AdminDashboard';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Admin Operations Portal | Aspire Value Recruits',
  description: 'Internal applicant tracking, mandate management, and candidate review portal.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/40 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              Restricted Recruiter &amp; Partner Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Recruitment Operations Center
            </h1>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Authenticated Session (Team Allow-list Active)</span>
          </div>
        </div>

        {/* Dashboard Components */}
        <AdminDashboard />
      </div>
    </div>
  );
}
