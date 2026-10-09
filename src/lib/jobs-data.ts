import { Job, JobFilterParams } from '@/types/job';
import { supabase } from './supabase';

export const INITIAL_JOBS: Job[] = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    companyName: 'Tier-1 Global Technology Center',
    isConfidential: true,
    location: 'Hyderabad',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 12,
    experienceMax: 16,
    salaryMin: 55,
    salaryMax: 75,
    salaryCurrency: 'INR',
    industry: 'Cloud & Distributed Systems',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'System Architecture', 'Microservices'],
    description: `We are exclusively partnering with a world-leading Fortune 50 enterprise building out its core Technology & Innovation Hub in Hitec City, Hyderabad. They are looking for a visionary Principal Cloud Architect to spearhead multi-cloud migration, distributed cloud topology, and enterprise resilience across global transactional systems.`,
    responsibilities: [
      'Architect enterprise-scale hybrid and multi-cloud solutions processing millions of daily transactions.',
      'Define cloud governance, IaC guardrails using Terraform, and FinOps optimization frameworks.',
      'Mentor 40+ engineering team members across Hyderabad and North America tech centers.',
      'Drive zero-downtime microservice transitions on AWS EKS and Azure Kubernetes Service.',
    ],
    requirements: [
      '12+ years of experience in distributed software systems with at least 5 years in lead cloud architectural roles.',
      'Hands-on mastery of AWS (EKS, IAM, Transit Gateway, RDS) or Azure enterprise equivalents.',
      'Proven background in high-availability distributed computing, event-driven design (Kafka), and automated CI/CD.',
      'Bachelor’s or Master’s in Computer Science or equivalent engineering degree.',
    ],
    benefits: [
      'Comprehensive executive medical insurance covering family and dependents.',
      'Flexible hybrid working schedule (2 days onsite in Hitec City, Hyderabad).',
      'Annual equity grant and performance bonus benchmarked at top 10% tier.',
      'Relocation assistance package for candidates moving to Hyderabad.',
    ],
    status: 'published',
    publishedAt: '2026-10-06T10:00:00Z',
  },
  {
    id: '2',
    slug: 'staff-generative-ai-engineer',
    title: 'Staff Generative AI / LLM Engineer',
    companyName: 'Enterprise AI Innovation Hub',
    isConfidential: false,
    location: 'Bengaluru',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 7,
    experienceMax: 11,
    salaryMin: 48,
    salaryMax: 65,
    salaryCurrency: 'INR',
    industry: 'Data & Generative AI',
    skills: ['Python', 'PyTorch', 'LangChain', 'LlamaIndex', 'Vector DBs', 'RAG', 'vLLM'],
    description: `Join an elite Applied AI Engineering Center in Bellandur, Bengaluru. You will design, fine-tune, and deploy domain-specific LLM agent workflows, proprietary Retrieval-Augmented Generation (RAG) pipelines, and low-latency inference services serving over 10M enterprise users globally.`,
    responsibilities: [
      'Architect and scale production RAG pipelines integrating hybrid search, rerankers, and vector databases (Pinecone / Milvus).',
      'Optimize open-source foundation models (Llama 3, Mistral) via quantization, LoRA fine-tuning, and vLLM serving.',
      'Build evaluation frameworks (Ragas, TruLens) for measuring model hallucinations, toxicity, and task accuracy.',
      'Partner closely with product leaders to turn experimental generative AI use-cases into enterprise SLAs.',
    ],
    requirements: [
      '7+ years in software engineering with 3+ years dedicated to deep learning and generative AI architectures.',
      'Deep fluency with Python, PyTorch, LangChain, Hugging Face ecosystem, and modern vector architectures.',
      'Experience optimizing GPU latency, CUDA acceleration, and concurrent inference pipelines.',
      'Track record of deploying production-grade AI systems, not just notebook prototypes.',
    ],
    benefits: [
      'Cutting-edge H100 GPU compute access and dedicated research lab budget.',
      'Generous learning and conference budget (NeurIPS, ICML, CVPR sponsorship).',
      'Subsidized transport and premium healthcare coverage.',
    ],
    status: 'published',
    publishedAt: '2026-10-07T12:30:00Z',
  },
  {
    id: '3',
    slug: 'lead-devops-platform-engineer',
    title: 'Lead DevOps & Platform Engineer',
    companyName: 'FinTech Innovation Hub',
    isConfidential: true,
    location: 'Hyderabad',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 8,
    experienceMax: 12,
    salaryMin: 38,
    salaryMax: 50,
    salaryCurrency: 'INR',
    industry: 'Cloud & Distributed Systems',
    skills: ['Kubernetes', 'Helm', 'Docker', 'Go', 'Prometheus', 'ArgoCD', 'Terraform'],
    description: `A tier-1 global FinTech is expanding its core engineering platform footprint in Financial District, Hyderabad. As Lead DevOps & Platform Engineer, you will build self-service developer platforms, internal developer portals (Backstage), and bulletproof continuous deployment pipelines with automated compliance controls.`,
    responsibilities: [
      'Engineer developer platforms enabling 200+ engineers to deploy safely to production with 1-click workflows.',
      'Manage multi-region production Kubernetes clusters with automated scaling and disaster recovery.',
      'Enforce security-as-code and vulnerability scanning across container registries and supply chain.',
      'Champion GitOps paradigms using ArgoCD and automated canary rollouts.',
    ],
    requirements: [
      '8+ years in infrastructure, DevOps, or platform engineering in high-compliance financial environments.',
      'Deep Kubernetes internals expertise, CNI/CSI drivers, Helm chart authoring, and ingress controllers.',
      'Proficiency in Go or Python for internal tooling and Kubernetes operator development.',
      'Strong knowledge of observability stacks (Prometheus, Grafana, OpenTelemetry, Loki).',
    ],
    benefits: [
      'Competitive base salary + annual retention incentive.',
      'Comprehensive health coverage for self, spouse, children, and parents.',
      'Wellness stipend and home office setup allowance.',
    ],
    status: 'published',
    publishedAt: '2026-10-05T08:15:00Z',
  },
  {
    id: '4',
    slug: 'head-of-product-engineering',
    title: 'Head of Product Engineering',
    companyName: 'Global Enterprise SaaS',
    isConfidential: false,
    location: 'Bengaluru',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 14,
    experienceMax: 18,
    salaryMin: 70,
    salaryMax: 95,
    salaryCurrency: 'INR',
    industry: 'Product Engineering',
    skills: ['Engineering Management', 'System Design', 'Microservices', 'Distributed Systems', 'Java', 'React'],
    description: `Leading product engineering teams building core B2B workflow solutions used by over 40% of the Fortune 500. This role reports directly to the VP of Engineering (US) and commands complete ownership of the Bengaluru engineering hub spanning 80+ engineers, product managers, and architects.`,
    responsibilities: [
      'Own end-to-end architecture, quality, delivery, and scalability across 4 high-revenue product lines.',
      'Scale engineering organization from 80 to 150 engineers over the next 18 months in Bengaluru.',
      'Establish rigorous engineering metrics (DORA metrics, code velocity, uptime SLAs of 99.99%).',
      'Partner with US leadership to align quarterly roadmap and technical debt allocation.',
    ],
    requirements: [
      '14+ years of overall tech experience with 6+ years managing managers and engineering organizations.',
      'Previous background having designed distributed distributed cloud systems at scale.',
      'Exceptional executive communication and stakeholder management across global time zones.',
      'Strong hiring track record in Bengaluru and Indian tech corridors.',
    ],
    benefits: [
      'Lucrative US stock option package (RSUs).',
      'Executive leadership coaching and annual global summit travel.',
      'Full family healthcare with zero copay.',
    ],
    status: 'published',
    publishedAt: '2026-10-08T09:00:00Z',
  },
  {
    id: '5',
    slug: 'senior-full-stack-engineer-fintech',
    title: 'Senior Full Stack Engineer (Next.js / Node.js)',
    companyName: 'Global Financial Technology Hub',
    isConfidential: true,
    location: 'Hyderabad',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 5,
    experienceMax: 8,
    salaryMin: 28,
    salaryMax: 40,
    salaryCurrency: 'INR',
    industry: 'FinTech & BFSI',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL', 'Tailwind CSS'],
    description: `Exciting opportunity for a high-craft Full Stack Engineer to build high-performance financial management dashboards, real-time analytics portals, and customer onboarding journeys for a world-class banking tech center in Hyderabad.`,
    responsibilities: [
      'Develop pixel-perfect, accessible, and responsive user interfaces with Next.js App Router and Tailwind CSS.',
      'Design high-throughput backend APIs with Node.js, Express/Fastify, and PostgreSQL.',
      'Implement strict client/server validations, JWT authentication flows, and automated end-to-end tests.',
    ],
    requirements: [
      '5+ years building full stack web applications with modern TypeScript, React, and Node.js.',
      'Solid command of SQL schema design, indexing, and transactional integrity.',
      'Passion for micro-interactions, Core Web Vitals optimization, and high-quality code craftsmanship.',
    ],
    benefits: [
      'Competitive salary with biannual appraisal review cycle.',
      'Medical insurance coverage with corporate OPD perks.',
      'Free cab facilities within Hyderabad city limits.',
    ],
    status: 'published',
    publishedAt: '2026-10-07T16:00:00Z',
  },
  {
    id: '6',
    slug: 'lead-data-engineer-snowflake-databricks',
    title: 'Lead Data Engineer (Snowflake & Databricks)',
    companyName: 'Fortune 100 Technology Hub',
    isConfidential: false,
    location: 'Bengaluru',
    workplaceType: 'hybrid',
    employmentType: 'full_time',
    experienceMin: 9,
    experienceMax: 13,
    salaryMin: 42,
    salaryMax: 56,
    salaryCurrency: 'INR',
    industry: 'Data & Generative AI',
    skills: ['Snowflake', 'Databricks', 'Apache Spark', 'Python', 'dbt', 'Airflow', 'Kafka'],
    description: `Leading modern data lakehouse initiatives across a multi-terabyte analytical platform in Whitefield, Bengaluru. Design real-time streaming architectures, dbt transformation layers, and data governance frameworks.`,
    responsibilities: [
      'Architect petabyte-scale data pipelines using Apache Spark, Databricks, and Snowflake.',
      'Implement modern data modeling principles (medallion architecture, star schemas) with dbt.',
      'Establish real-time data ingestion pipelines using Kafka and Spark Structured Streaming.',
    ],
    requirements: [
      '9+ years in data engineering with deep hands-on expertise in Spark, Python, and SQL.',
      'Proven experience scaling Databricks clusters and optimizing Snowflake compute warehouses.',
      'Strong grasp of data quality, schema evolution, and data mesh principles.',
    ],
    benefits: [
      'Tier-1 salary + performance incentives.',
      'Comprehensive outpatient and inpatient insurance.',
      'Flexible wellness allowance and education sponsorship.',
    ],
    status: 'published',
    publishedAt: '2026-10-06T14:20:00Z',
  },
];

export async function getJobs(params?: JobFilterParams): Promise<{ jobs: Job[]; total: number }> {
  // If Supabase credentials are configured, try fetching from Supabase
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co'
  ) {
    try {
      let query = supabase.from('jobs').select('*', { count: 'exact' }).eq('status', 'published');

      if (params?.q) {
        query = query.ilike('title', `%${params.q}%`);
      }
      if (params?.location) {
        query = query.ilike('location', `%${params.location}%`);
      }
      if (params?.industry) {
        query = query.eq('industry', params.industry);
      }

      const { data, count, error } = await query;
      if (!error && data && data.length > 0) {
        const mappedJobs: Job[] = data.map((d: any) => ({
          id: d.id,
          slug: d.slug,
          title: d.title,
          companyName: d.company_name,
          isConfidential: d.is_confidential || false,
          location: d.location,
          workplaceType: d.workplace_type || 'hybrid',
          employmentType: d.employment_type || 'full_time',
          experienceMin: d.experience_min,
          experienceMax: d.experience_max,
          salaryMin: d.salary_min,
          salaryMax: d.salary_max,
          salaryCurrency: d.salary_currency || 'INR',
          industry: d.industry,
          skills: d.skills || [],
          description: d.description,
          responsibilities: d.requirements || [],
          requirements: d.requirements || [],
          benefits: [],
          status: d.status,
          publishedAt: d.published_at || d.created_at,
        }));
        return { jobs: mappedJobs, total: count || mappedJobs.length };
      }
    } catch (e) {
      // Fallback below
    }
  }

  // Built-in fallback catalog
  let filtered = [...INITIAL_JOBS];

  if (params?.q) {
    const queryStr = params.q.toLowerCase().trim();
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(queryStr) ||
        j.skills.some((s) => s.toLowerCase().includes(queryStr)) ||
        j.description.toLowerCase().includes(queryStr)
    );
  }

  if (params?.location) {
    const locStr = params.location.toLowerCase().trim();
    filtered = filtered.filter((j) => j.location.toLowerCase().includes(locStr));
  }

  if (params?.industry) {
    filtered = filtered.filter((j) => j.industry === params.industry);
  }

  if (params?.experience) {
    if (params.experience === '0-4') {
      filtered = filtered.filter((j) => j.experienceMin <= 4);
    } else if (params.experience === '5-9') {
      filtered = filtered.filter((j) => j.experienceMin >= 5 && j.experienceMin <= 9);
    } else if (params.experience === '10+') {
      filtered = filtered.filter((j) => j.experienceMin >= 10);
    }
  }

  if (params?.employmentType) {
    filtered = filtered.filter((j) => j.employmentType === params.employmentType);
  }

  return { jobs: filtered, total: filtered.length };
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  // Check Supabase first if configured
  if (
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-url.supabase.co'
  ) {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (!error && data) {
        return {
          id: data.id,
          slug: data.slug,
          title: data.title,
          companyName: data.company_name,
          isConfidential: data.is_confidential || false,
          location: data.location,
          workplaceType: data.workplace_type || 'hybrid',
          employmentType: data.employment_type || 'full_time',
          experienceMin: data.experience_min,
          experienceMax: data.experience_max,
          salaryMin: data.salary_min,
          salaryMax: data.salary_max,
          salaryCurrency: data.salary_currency || 'INR',
          industry: data.industry,
          skills: data.skills || [],
          description: data.description,
          responsibilities: data.requirements || [],
          requirements: data.requirements || [],
          benefits: [],
          status: data.status,
          publishedAt: data.published_at || data.created_at,
        };
      }
    } catch (e) {
      // Fallback
    }
  }

  const job = INITIAL_JOBS.find((j) => j.slug === slug);
  return job || null;
}
