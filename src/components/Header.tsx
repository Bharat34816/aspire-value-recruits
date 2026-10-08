'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Building2, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Trust & Compliance Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 text-center sm:flex sm:justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>DPDP Act Compliant • Strictly 100% Free for Candidates (Zero Placement Fee)</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-400">
          <span>Tech & GCC Recruitment Hubs: Hyderabad & Bengaluru</span>
          <a
            href="https://wa.me/919876543210?text=Hello%20Aspire%20Value%20Recruits%20team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-medium"
          >
            WhatsApp Direct ↗
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-blue-700 transition">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-lg leading-tight tracking-tight">
                Aspire Value Recruits
              </span>
              <span className="text-[11px] font-semibold text-blue-600 tracking-wider uppercase">
                Tech & GCC Executive Search
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link href="/jobs" className="hover:text-blue-600 transition">
              Browse Jobs
            </Link>
            <Link href="/hire-talent" className="hover:text-blue-600 transition">
              Hire Talent
            </Link>
            <Link href="/insights" className="hover:text-blue-600 transition font-semibold text-blue-600">
              Founder &amp; Insights
            </Link>
            <Link href="/how-we-work" className="hover:text-blue-600 transition">
              How We Work
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </nav>

          {/* Dual CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/jobs"
              className="px-4 py-2 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition inline-flex items-center gap-1.5"
            >
              <Briefcase className="w-4 h-4 text-slate-600" />
              Find a Job
            </Link>
            <Link
              href="/request-brief"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition inline-flex items-center gap-1.5"
            >
              <Building2 className="w-4 h-4" />
              I&apos;m Hiring
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-slate-800">
            <Link
              href="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Browse Jobs
            </Link>
            <Link
              href="/hire-talent"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Hire Talent (Employers)
            </Link>
            <Link
              href="/how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              How We Work
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              About AVR
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </div>

          {/* Dual CTAs (Mobile) */}
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/request-brief"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:bg-blue-700 transition"
            >
              I&apos;m Hiring (Submit Brief)
            </Link>
            <Link
              href="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 font-medium hover:bg-slate-200 transition"
            >
              Find a Job (Candidate Portal)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
