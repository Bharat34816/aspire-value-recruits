import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getJobBySlug, INITIAL_JOBS } from '@/lib/jobs-data';
import JobApplyForm from '@/components/JobApplyForm';
import {
  MapPin,
  Clock,
  Briefcase,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ChevronLeft,
  Share2,
  MessageSquare,
} from 'lucide-react';

interface JobDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return INITIAL_JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const job = await getJobBySlug(params.slug);
  if (!job) {
    return {
      title: 'Job Not Found | Aspire Value Recruits',
    };
  }

  const locationText = `${job.location}, India`;
  return {
    title: `${job.title} in ${locationText} | Aspire Value Recruits`,
    description: `Apply for ${job.title} (${job.experienceMin}-${job.experienceMax} Yrs) in ${job.location}. Zero candidate placement fees. Direct application via AVR.`,
    openGraph: {
      title: `${job.title} | Aspire Value Recruits`,
      description: `Opportunity in ${job.location}: ${job.title}. ${job.salaryMin ? `₹${job.salaryMin}L - ₹${job.salaryMax}L PA` : 'Competitive CTC'}.`,
    },
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const job = await getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  const salaryDisplay =
    job.salaryMin && job.salaryMax
      ? `₹${job.salaryMin}L - ₹${job.salaryMax}L PA`
      : 'Competitive / Market Standard';

  // Google for Jobs JobPosting JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.publishedAt,
    validThrough: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: job.employmentType === 'full_time' ? 'FULL_TIME' : 'CONTRACTOR',
    hiringOrganization: {
      '@type': 'Organization',
      name: job.isConfidential
        ? 'Confidential Client (via Aspire Value Recruits)'
        : job.companyName || 'Aspire Value Recruits',
      sameAs: 'https://aspirevaluerecruits.com',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
        addressRegion: job.location.includes('Hyderabad') ? 'Telangana' : 'Karnataka',
        addressCountry: 'IN',
      },
    },
    ...(job.salaryMin && job.salaryMax
      ? {
          baseSalary: {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: {
              '@type': 'QuantitativeValue',
              minValue: job.salaryMin * 100000,
              maxValue: job.salaryMax * 100000,
              unitText: 'YEAR',
            },
          },
        }
      : {}),
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Aspire Value Recruits, I am interested in inquiring about the "${job.title}" role in ${job.location}. (Ref: ${job.slug})`
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-10">
      {/* Structured Data Script for Google for Jobs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Link href="/jobs" className="hover:text-cyan-400 transition flex items-center gap-1">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to All Jobs
          </Link>
          <span>/</span>
          <span className="text-slate-200 truncate max-w-xs">{job.title}</span>
        </div>

        {/* Role Header Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-950/80 text-cyan-300 border border-blue-800 text-xs font-semibold">
                  {job.industry}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold capitalize">
                  {job.workplaceType} Work Model
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {job.title}
              </h1>

              <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <Building2 className="w-4 h-4 text-cyan-400" />
                <span>{job.companyName}</span>
                {job.isConfidential && (
                  <span className="text-xs text-cyan-400 font-semibold">(Confidential Mandate)</span>
                )}
              </div>
            </div>

            {/* Quick Actions & Compensation */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
              <div className="text-left lg:text-right">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Compensation Benchmark
                </span>
                <span className="text-2xl font-bold text-emerald-400 block">{salaryDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 text-xs font-semibold transition inline-flex items-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp (+91 XXXXX XXXXX)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Specs Badges */}
          <div className="pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-medium">Location</span>
              <span className="font-bold text-slate-100 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> {job.location}
              </span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-medium">Experience</span>
              <span className="font-bold text-slate-100 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> {job.experienceMin} - {job.experienceMax} Yrs
              </span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-medium">Employment Type</span>
              <span className="font-bold text-slate-100 capitalize flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> {job.employmentType.replace('_', ' ')}
              </span>
            </div>
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
              <span className="text-slate-400 block font-medium">Candidate Fee</span>
              <span className="font-bold text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ₹0 (100% Free)
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Content: JD & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Description & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-white">About the Role</h2>
                <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              {job.responsibilities.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h3 className="text-base font-bold text-white">Key Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {job.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {job.requirements.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h3 className="text-base font-bold text-white">Skills &amp; Qualifications</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-base font-bold text-white">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {job.benefits.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h3 className="text-base font-bold text-white">Compensation &amp; Perks</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {job.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Candidate Protection Assurance Card */}
            <div className="bg-gradient-to-r from-blue-950/70 to-indigo-950/70 border border-blue-800/60 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-cyan-300 text-sm">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>The AVR Candidate Trust Guarantee</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aspire Value Recruits never charges candidates for interviews, placement, or orientation. Your resume is processed strictly under India’s Digital Personal Data Protection (DPDP) Act with verified client privacy agreements.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Apply Form */}
          <div className="lg:col-span-5 sticky top-28">
            <JobApplyForm job={job} />
          </div>
        </div>
      </div>
    </div>
  );
}
