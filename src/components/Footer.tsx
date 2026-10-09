import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageSquare, ShieldCheck, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900">
      {/* Upper Footer: Value Proposition & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-zinc-900/90 px-3 py-1.5 rounded-xl border border-zinc-800 inline-flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Aspire Value Recruits Logo"
                  width={140}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                <span className="text-sky-400 font-extrabold">A</span>spire{' '}
                <span className="text-sky-400 font-extrabold">V</span>alue{' '}
                <span className="text-sky-400 font-extrabold">R</span>ecruits
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Executive technology recruitment consultancy founded by <strong className="text-zinc-200">Vishnu Vardhan Reddy Alavala</strong>, delivering calibrated engineering leadership mandates across Pan-India tech corridors.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hello%20Aspire%20Value%20Recruits"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-zinc-400" />
                WhatsApp: +91 XXXXX XXXXX
              </a>
            </div>
          </div>

          {/* Employers Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">For Employers</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/hire-talent" className="hover:text-white transition">
                  Talent Solutions
                </Link>
              </li>
              <li>
                <Link href="/request-brief" className="hover:text-white transition">
                  Request a Hiring Brief
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-white transition">
                  Recruitment SLA &amp; Process
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Client Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Candidates Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">For Candidates</h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/jobs" className="hover:text-white transition">
                  Browse Active Jobs
                </Link>
              </li>
              <li>
                <Link href="/talent-network" className="hover:text-white transition">
                  Drop Your Resume
                </Link>
              </li>
              <li>
                <Link href="/candidate-faq" className="hover:text-white transition">
                  Candidate FAQ
                </Link>
              </li>
              <li>
                <span className="inline-block text-[11px] text-zinc-300 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  Strictly ₹0 Candidate Fee
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Contact &amp; Support</h3>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <a href="mailto:contact@aspirevaluerecruits.com" className="hover:text-white transition">
                  contact@aspirevaluerecruits.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* DPDP Trust Notice */}
        <div className="mt-12 pt-6 border-t border-zinc-900 bg-zinc-950/80 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <p className="text-xs text-zinc-300">
              <strong className="text-white">DPDP Act (India) Adherence:</strong> Your candidate records are encrypted and confidential. We never share profiles without explicit consent.
            </p>
          </div>
          <div className="text-xs text-zinc-400 shrink-0">
            Inquiries: <a href="mailto:privacy@aspirevaluerecruits.com" className="text-zinc-300 hover:underline">privacy@aspirevaluerecruits.com</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-zinc-300 font-semibold">
              <span className="text-sky-400 font-bold">A</span>spire{' '}
              <span className="text-sky-400 font-bold">V</span>alue{' '}
              <span className="text-sky-400 font-bold">R</span>ecruits (<span className="text-sky-400 font-bold">AVR</span>)
            </span>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-zinc-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
