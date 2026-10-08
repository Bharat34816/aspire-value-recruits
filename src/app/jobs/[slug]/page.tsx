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
    <div className="bg-slate-50 min-h-screen py-10">
      {/* Structured Data Script for Google for Jobs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/jobs" className="hover:text-blue-600 transition flex items-center gap-1">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to All Jobs
          </Link>
          <span>/</span>
          <span className="text-slate-800 truncate max-w-xs">{job.title}</span>
        </div>

        {/* Role Header Banner */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                  {job.industry}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold capitalize">
                  {job.workplaceType} Work Model
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {job.title}
              </h1>

              <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>{job.companyName}</span>
                {job.isConfidential && (
                  <span className="text-xs text-blue-600 font-semibold">(Confidential Mandate)</span>
                )}
              </div>
            </div>

            {/* Quick Actions & Compensation */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
              <div className="text-left lg:text-right">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Compensation Benchmark
                </span>
                <span className="text-2xl font-bold text-emerald-600 block">{salaryDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 text-xs font-semibold transition inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Inquire
                </a>
              </div>
            </div>
          </div>

          {/* Quick Specs Badges */}
          <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-400 block font-medium">Location</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> {job.location}
              </span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-400 block font-medium">Experience</span>
              <span className="font-bold text-slate-800 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" /> {job.experienceMin} - {job.experienceMax} Yrs
              </span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-400 block font-medium">Employment Type</span>
              <span className="font-bold text-slate-800 capitalize flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-blue-600" /> {job.employmentType.replace('_', ' ')}
              </span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-400 block font-medium">Candidate Fee</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> ₹0 (100% Free)
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Content: JD & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Job Description & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overview Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-slate-900">About the Role</h2>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              {job.responsibilities.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Key Responsibilities</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {job.requirements.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Skills & Qualifications</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-base font-bold text-slate-900">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {job.benefits.length > 0 && (
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Compensation & Perks</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    {job.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Candidate Protection Assurance Card */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 font-bold text-blue-900 text-sm">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span>The AVR Candidate Trust Guarantee</span>
              </div>
              <p className="text-xs text-blue-800 leading-relaxed">
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
