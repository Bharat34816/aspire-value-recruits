import React from 'react';
import Link from 'next/link';
import { SearchX, Home, Briefcase } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-6 shadow-sm">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center">
          <SearchX className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Page Not Found</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            The page or mandate listing you are looking for does not exist or has been archived.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition inline-flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link
            href="/jobs"
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition inline-flex items-center gap-1.5"
          >
            <Briefcase className="w-4 h-4" /> Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
