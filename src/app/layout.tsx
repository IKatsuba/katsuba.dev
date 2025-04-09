import { type Metadata } from 'next';

import { Providers } from '@/app/providers';
import { Layout } from '@/components/Layout';

import '@/styles/tailwind.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s - Igor Katsuba',
    default: 'Igor Katsuba - Software Engineer, JS Enthusiast, Open Source Contributor',
  },
  description:
    'I’m Igor, a software engineer based in Limassol, Cyprus. I’m the biggest fan of JS and open source.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
      <Script src="https://assets.onedollarstats.com/stonks.js" />
    </html>
  );
}
