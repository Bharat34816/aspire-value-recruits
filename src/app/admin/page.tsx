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
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              Restricted Recruiter & Partner Portal
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recruitment Operations Center
            </h1>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Authenticated Session (Team Allow-list Active)</span>
          </div>
        </div>

        {/* Dashboard Components */}
        <AdminDashboard />
      </div>
    </div>
  );
}
