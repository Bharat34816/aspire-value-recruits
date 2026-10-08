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
    'gcc staffing india',
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
  // Schema.org Organization Structured Data
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EmploymentAgency',
    name: 'Aspire Value Recruits',
    alternateName: 'AVR Talent',
    url: 'https://aspirevaluerecruits.com',
    logo: 'https://aspirevaluerecruits.com/logo.png',
    description:
      'Boutique technology and Global Capability Center (GCC) recruitment agency with dedicated hubs in Hyderabad and Bengaluru.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '4th Floor, Tech Park Towers, Hitec City',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500081',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '7th Floor, Prestige Tech Vista, Outer Ring Road, Bellandur',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '500103',
        addressCountry: 'IN',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Telugu', 'Kannada'],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
