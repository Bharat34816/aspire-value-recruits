import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Building2,
  Zap,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  MessageSquare,
} from 'lucide-react';

const INDUSTRY_DATA: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    marketContext: string;
    keyRoles: string[];
    metrics: { label: string; value: string }[];
  }
> = {
  'gcc-tech-centers': {
    title: 'Global Capability Centers (GCCs & GICs)',
    subtitle: 'High-Velocity GCC Talent Build-outs in Hyderabad & Bengaluru',
    description:
      'India is home to over 1,600 Global Capability Centers driving strategic software, cloud engineering, and AI transformations. We partner with Fortune 500 tech centers to scale calibrated teams from seed pods to 100+ engineer centers.',
    marketContext:
      'With Hitec City (Hyderabad) and Outer Ring Road (Bengaluru) housing premier global technology centers, our talent mapping provides verified intelligence on compensation structures, notice buyouts, and engineering retention.',
    keyRoles: [
      'Site Engineering Heads & Center Leaders',
      'Principal Distributed Systems Architects',
      'Staff Cloud & Platform Leads',
      'Autonomous Pod Leads (Engineering + QA + DevOps)',
    ],
    metrics: [
      { label: 'GCC Mandates Executed', value: '180+' },
      { label: 'Avg. Shortlist Delivery', value: '72 hrs' },
      { label: 'Offer Acceptance Rate', value: '88%' },
    ],
  },
  'cloud-devops-platform': {
    title: 'Cloud, Infrastructure & DevOps Platforms',
    subtitle: 'Zero-Downtime Multi-Cloud & Platform Engineering Talent',
    description:
      'Modern digital scale demands resilient platform engineering. We calibrate talent across Kubernetes, multi-cloud topologies (AWS, Azure, GCP), automated IaC frameworks, and SRE observabilities.',
    marketContext:
      'High competition in Bengaluru and Hyderabad means platform leads are inundated with recruiter messages. We engage high-intent senior architects through discrete, consultative representation.',
    keyRoles: [
      'Cloud Solution Architects (AWS / Azure / GCP)',
      'Site Reliability Engineers (SRE Leads)',
      'Kubernetes & Platform Developers (Go / Backstage)',
      'Cloud Security & DevSecOps Specialists',
    ],
    metrics: [
      { label: 'Architects Placed', value: '120+' },
      { label: 'Avg. Retention', value: '95%' },
      { label: 'Salary Benchmarked', value: '₹35L - ₹80L' },
    ],
  },
  'data-ai-ml': {
    title: 'Data Platforms & Generative AI',
    subtitle: 'Machine Learning, LLM Pipelines & Modern Data Lakehouses',
    description:
      'From petabyte-scale lakehouse architectures to production RAG pipelines and custom LLM fine-tuning, we provide the highest caliber of applied AI practitioners and data platform architects.',
    marketContext:
      'The transition from experimental proof-of-concepts to enterprise GenAI deployments requires rare engineering talent skilled in low-latency GPU serving and vector retrieval.',
    keyRoles: [
      'Staff Generative AI / LLM Engineers',
      'Data Lakehouse Architects (Databricks, Snowflake)',
      'MLOps & Distributed Training Infrastructure Leads',
      'Data Governance & Compliance Engineers',
    ],
    metrics: [
      { label: 'AI Practitioners Placed', value: '90+' },
      { label: 'Avg. Experience', value: '8.5 Yrs' },
      { label: 'Interview to Offer', value: '1 : 2.8' },
    ],
  },
  'bfsi-fintech': {
    title: 'FinTech, Banking Tech & BFSI',
    subtitle: 'High-Throughput Core Banking, Payments & Quantitative Trading',
    description:
      'Financial infrastructure requires zero-fault tolerance, strict regulatory adherence, and high concurrency. We recruit domain-tested engineers for payment gateways, neo-banks, and core banking GCCs.',
    marketContext:
      'Hyderabad’s Financial District and Bengaluru’s FinTech corridor represent India’s highest concentration of high-volume financial transaction engineers.',
    keyRoles: [
      'Core Banking Solution Architects',
      'High-Frequency & Low-Latency C++ / Java Leads',
      'Payment Gateway Integration Engineers',
      'Regulatory Tech & Financial Fraud Analytics Specialists',
    ],
    metrics: [
      { label: 'FinTech Placements', value: '110+' },
      { label: 'Average SLA', value: '72 hrs' },
      { label: 'Guarantee Claimed', value: '<2%' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = INDUSTRY_DATA[params.slug];
  if (!data) return { title: 'Industry Not Found' };

  return {
    title: `${data.title} Recruitment | Aspire Value Recruits`,
    description: `${data.subtitle}. Consultative staffing for Hyderabad and Bengaluru tech hubs with 72-hour shortlist SLA.`,
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const data = INDUSTRY_DATA[params.slug];
  if (!data) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/hire-talent" className="hover:text-blue-600 transition flex items-center gap-1">
            <ChevronLeft className="w-3.5 h-3.5" /> Back to Solutions
          </Link>
          <span>/</span>
          <span className="text-slate-800">{data.title}</span>
        </div>

        {/* Hero Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
              Specialized Industry Practice
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {data.title}
            </h1>
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              {data.subtitle}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
            {data.metrics.map((m) => (
              <div key={m.label} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-2xl font-bold text-blue-600 block">{m.value}</span>
                <span className="text-xs text-slate-500 block">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Market Context & Typical Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Regional Ecosystem Intelligence</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.marketContext}
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
              <Link
                href="/salary-guide"
                className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                Review 2026 Salary Benchmarks for this sector <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Key Roles Calibrated</h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {data.keyRoles.map((role) => (
                <li key={role} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Dual Action */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6">
          <h2 className="text-2xl font-bold">Initiate Mandates in {data.title}</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Speak directly with our specialized practice leads in Hyderabad and Bengaluru.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/request-brief"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition"
            >
              Submit Mandate Brief
            </Link>
            <a
              href="https://wa.me/919876543210?text=Hello%20AVR%2C%20I%20would%20like%20to%20discuss%20hiring%20in%20this%20domain"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Quick Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
