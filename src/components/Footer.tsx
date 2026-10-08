import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, MessageSquare, ShieldCheck, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Value Proposition & Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-bold text-white text-xl tracking-tight">
                Aspire Value Recruits
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premium recruitment consultancy founded by <strong>Vishnu Vardhan Reddy Alavala</strong>, specializing in Technology, Product, and Global Capability Center (GCC) talent delivery across Hyderabad, Bengaluru, and Pan-India.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210?text=Hello%20Aspire%20Value%20Recruits"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900 text-xs font-medium transition"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Employers Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">For Employers</h3>
            <ul className="space-y-2 text-sm text-slate-400">
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
                  Recruitment SLA & Process
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="hover:text-white transition">
                  2026 GCC Salary Guide
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
            <ul className="space-y-2 text-sm text-slate-400">
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
                <span className="inline-block text-xs text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Strictly ₹0 Candidate Fee
                </span>
              </li>
            </ul>
          </div>

          {/* Locations & Contact Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Offices & Presence</h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Hyderabad Hub:</strong><br />
                  Hitec City, Madhapur, Hyderabad, Telangana 500081
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Bengaluru Hub:</strong><br />
                  Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:contact@aspirevaluerecruits.com" className="hover:text-white transition">
                  contact@aspirevaluerecruits.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & DPDP Trust Notice */}
        <div className="mt-12 pt-8 border-t border-slate-900 bg-slate-900/60 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <p className="text-xs text-slate-300">
              <strong>DPDP Act (India) Adherence:</strong> Your data and resumes are stored securely in private encrypted storage. We never share candidate profiles without explicit affirmative consent.
            </p>
          </div>
          <div className="text-xs text-slate-400 shrink-0">
            For data inquiries: <a href="mailto:privacy@aspirevaluerecruits.com" className="text-blue-400 hover:underline">privacy@aspirevaluerecruits.com</a>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Aspire Value Recruits (AVR). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition">
              Terms of Service
            </Link>
            <Link href="/admin" className="hover:text-slate-300 transition text-slate-600">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
