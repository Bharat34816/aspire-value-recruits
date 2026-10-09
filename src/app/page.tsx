import React from 'react';
import type { Metadata } from 'next';
import HomeInteractiveExperience from '@/components/HomeInteractiveExperience';

export const metadata: Metadata = {
  title: 'Aspire Value Recruits (AVR) | Precision Tech & Executive Recruitment Agency',
  description:
    'Aspire Value Recruits connects high-growth enterprises and global innovation centers with elite technology talent across India. Pre-screened 72-hour shortlists backed by a 90-day guarantee.',
};

export default function HomePage() {
  return <HomeInteractiveExperience />;
}
