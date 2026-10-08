import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Aspire Value Recruits | Premium Tech & GCC Recruitment Agency in India',
  description:
    'Consultative technology and Global Capability Center (GCC) talent partner across Hyderabad and Bengaluru. Calibrated shortlists in 72 hours, zero candidate fees, and 90-day replacement guarantee.',
  keywords: [
    'recruitment agency india',
    'tech hiring hyderabad',
    'gcc recruitment bengaluru',
    'executive tech search india',
    'aspire value recruits',
    'it staffing hyderabad',
  ],
  authors: [{ name: 'Aspire Value Recruits' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aspirevaluerecruits.com'),
  openGraph: {
    title: 'Aspire Value Recruits | Tech & GCC Recruitment Agency',
    description:
      'High-velocity tech talent acquisition for India’s leading GCCs and product enterprises. Hyderabad & Bengaluru hubs.',
    url: 'https://aspirevaluerecruits.com',
    siteName: 'Aspire Value Recruits',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50/50 text-slate-900 selection:bg-blue-500 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
