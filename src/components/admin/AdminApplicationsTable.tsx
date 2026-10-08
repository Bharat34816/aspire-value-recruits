'use client';

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, XCircle, Clock, ShieldCheck } from 'lucide-react';

interface MockApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  noticePeriod: string;
  status: 'new' | 'shortlisted' | 'rejected';
  date: string;
  resumeFile: string;
}

const INITIAL_APPLICATIONS: MockApplication[] = [
  {
    id: 'APP-101',
    name: 'Suresh Nambiar',
    email: 'suresh.nambiar@gmail.com',
    phone: '+91 98451 23456',
    role: 'Principal Cloud Architect',
    experience: '13.5 Yrs',
    noticePeriod: '15 Days',
    status: 'shortlisted',
    date: '2026-10-07',
    resumeFile: 'Suresh_Nambiar_AWS_Architect.pdf',
  },
  {
    id: 'APP-102',
    name: 'Ananya Reddy',
    email: 'ananya.reddy@outlook.com',
    phone: '+91 97012 34567',
    role: 'Staff Generative AI Engineer',
    experience: '8 Yrs',
    noticePeriod: '30 Days',
    status: 'new',
    date: '2026-10-08',
    resumeFile: 'Ananya_Reddy_GenAI_LLM.pdf',
  },
  {
    id: 'APP-103',
    name: 'Karthik Subbaraman',
    email: 'karthik.s@techmail.com',
    phone: '+91 99887 76655',
    role: 'Lead DevOps & Platform Engineer',
    experience: '9 Yrs',
    noticePeriod: '0 Days (Immediate)',
    status: 'new',
    date: '2026-10-08',
    resumeFile: 'Karthik_Kubernetes_Platform.pdf',
  },
];

export default function AdminApplicationsTable() {
  const [applications, setApplications] = useState<MockApplication[]>(INITIAL_APPLICATIONS);

  const updateStatus = (id: string, newStatus: 'new' | 'shortlisted' | 'rejected') => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const exportCSV = () => {
    const headers = ['ID,Name,Email,Phone,Role,Experience,NoticePeriod,Status,Date\n'];
    const rows = applications.map(
      (a) =>
        `"${a.id}","${a.name}","${a.email}","${a.phone}","${a.role}","${a.experience}","${a.noticePeriod}","${a.status}","${a.date}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `avr-applications-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden space-y-4 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Candidate Pipeline & Applications</h3>
          <p className="text-xs text-slate-500">Secure DPDP-compliant review desk with signed-URL CV download.</p>
        </div>
        <button
          type="button"
          onClick={exportCSV}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition"
        >
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
            <tr>
              <th className="py-3 px-4">Candidate</th>
              <th className="py-3 px-4">Role Applied</th>
              <th className="py-3 px-4">Exp & Notice</th>
              <th className="py-3 px-4">Resume CV</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Update Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-slate-50/80 transition">
                <td className="py-3 px-4">
                  <div className="font-bold text-slate-900">{app.name}</div>
                  <div className="text-[11px] text-slate-500">{app.email} • {app.phone}</div>
                </td>
                <td className="py-3 px-4 font-medium text-slate-700">{app.role}</td>
                <td className="py-3 px-4 text-slate-600">
                  <div>{app.experience}</div>
                  <div className="text-[11px] text-blue-600 font-medium">{app.noticePeriod}</div>
                </td>
                <td className="py-3 px-4">
                  <button
                    type="button"
                    onClick={() =>
                      alert(`Generating secure signed URL for ${app.resumeFile} (Valid for 60 seconds)`)
                    }
                    className="inline-flex items-center gap-1 text-blue-600 hover:underline font-medium text-[11px]"
                  >
                    <FileText className="w-3.5 h-3.5 text-blue-500" />
                    <span>Download CV</span>
                  </button>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      app.status === 'shortlisted'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : app.status === 'rejected'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right space-x-1">
                  <button
                    type="button"
                    onClick={() => updateStatus(app.id, 'shortlisted')}
                    className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-[10px]"
                  >
                    Shortlist
                  </button>
                  <button
                    type="button"
                    onClick={() => updateStatus(app.id, 'rejected')}
                    className="px-2 py-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold text-[10px]"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
