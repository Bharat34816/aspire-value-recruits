'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Building2, Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-850 shadow-md">
      {/* Top Trust & Compliance Bar - Muted Black */}
      <div className="bg-[#050507] text-zinc-400 text-xs py-2 px-4 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 text-zinc-300 font-medium text-[11px] border border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              DPDP Act (India) Compliant
            </span>
            <span className="hidden md:inline text-zinc-700">•</span>
            <span className="font-medium text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded text-[11px] border border-zinc-800">
              Strictly ₹0 Candidate Placement Fee
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 font-medium text-[11px] transition"
            >
              WhatsApp: +91 XXXXX XXXXX ↗
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand with A V R Highlighted */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="bg-zinc-900/90 px-3 py-1.5 rounded-xl border border-zinc-800 group-hover:border-zinc-700 transition flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Aspire Value Recruits Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-white text-lg tracking-tight">
                <span className="text-sky-400 font-extrabold">A</span>spire{' '}
                <span className="text-sky-400 font-extrabold">V</span>alue{' '}
                <span className="text-sky-400 font-extrabold">R</span>ecruits
              </div>
              <div className="text-[11px] font-medium text-zinc-400 tracking-wider">
                Connecting Talent with Opportunity
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-semibold text-zinc-400">
            <Link href="/" className="px-3 py-2 rounded-lg text-white hover:bg-zinc-900 transition">
              Home
            </Link>
            <Link href="/jobs" className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-900 transition">
              Browse Jobs
            </Link>
            <Link href="/hire-talent" className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-900 transition">
              Hire Talent
            </Link>
            <Link href="/insights" className="px-3 py-2 rounded-lg hover:text-white hover:bg-zinc-900 transition">
              Founder &amp; Insights
            </Link>
          </nav>

          {/* Production CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/jobs"
              className="hidden sm:inline-flex px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition items-center gap-1.5"
            >
              <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
              Find a Job
            </Link>
            <Link
              href="/request-brief"
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-white hover:bg-zinc-200 text-black shadow-sm transition inline-flex items-center gap-1.5"
            >
              <Building2 className="w-3.5 h-3.5" />
              I&apos;m Hiring
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1.5 text-sm font-medium text-zinc-300">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Home
            </Link>
            <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Browse Jobs
            </Link>
            <Link href="/hire-talent" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Hire Talent (Employers)
            </Link>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-md hover:bg-zinc-900">
              Founder &amp; Insights
            </Link>
          </div>
          <div className="pt-3 border-t border-zinc-850 flex flex-col gap-2">
            <Link
              href="/request-brief"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold text-xs shadow-sm"
            >
              I&apos;m Hiring (Submit Brief)
            </Link>
            <Link
              href="/jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-medium text-xs border border-zinc-800"
            >
              Find a Job
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
