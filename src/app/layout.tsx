import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import DeferredClarity from '@/components/DeferredClarity';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  title: 'EksploTrip - Eksplorasi Wisata Alam Bogor yang Aman & Transparan',
  description:
    'Platform eksplorasi destinasi wisata alam di Bogor yang berfokus pada informasi wisata yang aman, informatif, dan transparan.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/beranda/banner_atas_mobile.webp"
          media="(max-width: 640px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/images/beranda/banner_atas.webp"
          media="(min-width: 641px)"
          fetchPriority="high"
        />
      </head>
      <body className={poppins.className}>
        <DeferredClarity />
        {children}
      </body>
    </html>
  );
}
