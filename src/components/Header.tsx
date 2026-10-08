'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Building2, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg">
      {/* Top Trust & Compliance Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-indigo-900/60 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              DPDP Act (India) Compliant
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="font-medium text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
              Strictly ₹0 Candidate Placement Fee
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-slate-300">Hubs: <strong>Hyderabad</strong> &amp; <strong>Bengaluru</strong></span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] shadow-sm transition"
            >
              WhatsApp Direct ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              A
            </div>
            <div>
              <div className="font-black text-white text-lg tracking-tight group-hover:text-cyan-400 transition">
                Aspire Value Recruits
              </div>
              <div className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 uppercase tracking-widest">
                Tech &amp; GCC Executive Search
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-bold text-slate-300">
            <Link href="/" className="px-3 py-2 rounded-xl text-cyan-400 hover:bg-slate-800 transition">
              Home
            </Link>
            <Link href="/jobs" className="px-3 py-2 rounded-xl hover:text-cyan-400 hover:bg-slate-800 transition">
              Browse Jobs
            </Link>
            <Link href="/hire-talent" className="px-3 py-2 rounded-xl hover:text-cyan-400 hover:bg-slate-800 transition">
              Hire Talent
            </Link>
            <Link href="/insights" className="px-3 py-2 rounded-xl hover:text-cyan-400 hover:bg-slate-800 transition text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Founder &amp; Insights
            </Link>
            <Link href="/salary-guide" className="px-3 py-2 rounded-xl hover:text-cyan-400 hover:bg-slate-800 transition">
              Salary Guide 2026
            </Link>
            <Link href="/admin" className="px-3 py-2 rounded-xl text-amber-400 hover:bg-amber-950/40 border border-amber-500/30 transition">
              Admin Portal
            </Link>
          </nav>

          {/* Dual CTAs (Desktop) */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/jobs"
              className="hidden sm:inline-flex px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              Find a Job
            </Link>
            <Link
              href="/request-brief"
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4" />
              I&apos;m Hiring
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-300">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">
              Home
            </Link>
            <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">
              Browse Jobs
            </Link>
            <Link href="/hire-talent" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">
              Hire Talent (Employers)
            </Link>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800 text-cyan-300">
              Founder &amp; Insights
            </Link>
            <Link href="/salary-guide" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800">
              2026 Salary Guide
            </Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-800 text-amber-400">
              Admin Portal
            </Link>
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/request-brief"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs shadow-md"
            >
              I&apos;m Hiring (Submit Brief)
            </Link>
            <Link
              href="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs"
            >
              Find a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
