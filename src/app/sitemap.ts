import { MetadataRoute } from 'next';
import { INITIAL_JOBS } from '@/lib/jobs-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aspirevaluerecruits.com';

  const staticRoutes = [
    '',
    '/jobs',
    '/hire-talent',
    '/request-brief',
    '/how-we-work',
    '/about',
    '/contact',
    '/case-studies',
    '/salary-guide',
    '/talent-network',
    '/candidate-faq',
    '/privacy-policy',
    '/terms',
    '/industries/gcc-tech-centers',
    '/industries/cloud-devops-platform',
    '/industries/data-ai-ml',
    '/industries/bfsi-fintech',
    '/locations/tech-recruitment-agency-hyderabad',
    '/locations/gcc-staffing-agency-bengaluru',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const jobRoutes = INITIAL_JOBS.map((job) => ({
    url: `${baseUrl}/jobs/${job.slug}`,
    lastModified: new Date(job.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...jobRoutes];
}
