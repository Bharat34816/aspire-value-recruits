'use client';

import React, { useState } from 'react';
import { Download, Building2, Phone, Mail, Clock } from 'lucide-react';

interface MockLead {
  id: string;
  company: string;
  contactPerson: string;
  email: string;
  phone: string;
  role: string;
  headcount: number;
  model: string;
  urgency: string;
  budget: string;
  status: 'new' | 'contacted' | 'scoping';
  date: string;
}

const INITIAL_LEADS: MockLead[] = [
  {
    id: 'LEAD-901',
    company: 'FinApex Global Technologies',
    contactPerson: 'Meera Deshmukh',
    email: 'meera@finapex.com',
    phone: '+91 99001 22334',
    role: 'Principal Cloud Architect',
    headcount: 2,
    model: 'Permanent (72hr SLA)',
    urgency: 'Immediate',
    budget: '₹60L - ₹75L PA',
    status: 'new',
    date: '2026-10-08',
  },
  {
    id: 'LEAD-902',
    company: 'CognitiveScale India GCC',
    contactPerson: 'Rahul Nair',
    email: 'rnair@cognitivescale.io',
    phone: '+91 98112 33445',
    role: 'Generative AI Pod (Staff + 3 Leads)',
    headcount: 4,
    model: 'Turnkey GCC Scale-up',
    urgency: 'Immediate',
    budget: '₹1.8 Cr Total Band',
    status: 'contacted',
    date: '2026-10-07',
  },
];

export default function AdminLeadsTable() {
  const [leads, setLeads] = useState<MockLead[]>(INITIAL_LEADS);

  const exportCSV = () => {
    const headers = ['ID,Company,Contact,Email,Phone,Role,Headcount,Model,Urgency,Budget,Status,Date\n'];
    const rows = leads.map(
      (l) =>
        `"${l.id}","${l.company}","${l.contactPerson}","${l.email}","${l.phone}","${l.role}",${l.headcount},"${l.model}","${l.urgency}","${l.budget}","${l.status}","${l.date}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `avr-employer-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden space-y-4 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-white">Employer Inquiries &amp; Hiring Briefs</h3>
          <p className="text-xs text-slate-400">Track and respond to incoming talent acquisition mandates.</p>
        </div>
        <button
          type="button"
          onClick={exportCSV}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition"
        >
          <Download className="w-4 h-4" /> Export Leads CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 font-semibold border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">Company &amp; Contact</th>
              <th className="py-3 px-4">Mandate &amp; Headcount</th>
              <th className="py-3 px-4">Model &amp; Urgency</th>
              <th className="py-3 px-4">Budget Range</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-800/50 transition">
                <td className="py-3 px-4">
                  <div className="font-bold text-white">{lead.company}</div>
                  <div className="text-[11px] text-slate-400">
                    {lead.contactPerson} • {lead.email}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="font-semibold text-slate-200">{lead.role}</div>
                  <div className="text-[11px] text-cyan-400 font-medium">Headcount: {lead.headcount}</div>
                </td>
                <td className="py-3 px-4 text-slate-400">
                  <div>{lead.model}</div>
                  <div className="text-[11px] text-emerald-400 font-medium">{lead.urgency}</div>
                </td>
                <td className="py-3 px-4 font-semibold text-slate-200">{lead.budget}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      lead.status === 'new'
                        ? 'bg-blue-950/60 text-cyan-300 border border-blue-800/40'
                        : 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40'
                    }`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
