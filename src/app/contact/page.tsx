import React from 'react';
import type { Metadata } from 'next';
import { MapPin, Mail, Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Aspire Value Recruits | Hyderabad & Bengaluru Hubs',
  description:
    'Get in touch with Aspire Value Recruits. Connect with our engineering search teams in Hyderabad and Bengaluru via email, phone, or instant WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Partners
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are expanding an engineering center or seeking your next leadership mandate, our team is ready to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Instant WhatsApp Connect</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fastest response channel for talent queries and urgent hiring briefs. Available Monday through Saturday.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hello%20Aspire%20Value%20Recruits"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition inline-flex items-center justify-center gap-2"
              >
                Chat on WhatsApp ↗
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Direct Email Desks</h2>
            <div className="space-y-2 text-xs text-slate-600">
              <p>
                <strong>Employer Mandates:</strong><br />
                <a href="mailto:hiring@aspirevaluerecruits.com" className="text-blue-600 hover:underline">
                  hiring@aspirevaluerecruits.com
                </a>
              </p>
              <p>
                <strong>Candidate Careers:</strong><br />
                <a href="mailto:careers@aspirevaluerecruits.com" className="text-blue-600 hover:underline">
                  careers@aspirevaluerecruits.com
                </a>
              </p>
              <p>
                <strong>DPDP Privacy Desk:</strong><br />
                <a href="mailto:privacy@aspirevaluerecruits.com" className="text-blue-600 hover:underline">
                  privacy@aspirevaluerecruits.com
                </a>
              </p>
            </div>
          </div>

          {/* Card 3: Phones */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Phone Support</h2>
            <div className="space-y-2 text-xs text-slate-600">
              <p>
                <strong>Direct Desk:</strong><br />
                +91 98765 43210 / +91 40 2345 6789
              </p>
              <p>
                <strong>Hours of Operation:</strong><br />
                Monday – Friday: 9:00 AM – 7:00 PM IST<br />
                Saturday: 10:00 AM – 2:00 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Visit Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" /> Hyderabad Hub
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                4th Floor, Tech Park Towers, Hitec City Main Road, Madhapur, Hyderabad, Telangana 500081
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" /> Bengaluru Hub
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                7th Floor, Prestige Tech Vista, Outer Ring Road, Bellandur, Bengaluru, Karnataka 560103
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
