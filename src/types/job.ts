export interface Job {
  id: string;
  slug: string;
  title: string;
  companyName: string | null;
  isConfidential: boolean;
  location: string;
  workplaceType: 'on_site' | 'hybrid' | 'remote';
  employmentType: 'full_time' | 'contract' | 'c2h';
  experienceMin: number;
  experienceMax: number;
  salaryMin?: number; // In INR Lakhs
  salaryMax?: number; // In INR Lakhs
  salaryCurrency: string;
  industry: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  status: 'published' | 'draft' | 'closed';
  publishedAt: string;
}

export interface JobFilterParams {
  q?: string;
  location?: string;
  industry?: string;
  experience?: string;
  employmentType?: string;
  page?: number;
}
