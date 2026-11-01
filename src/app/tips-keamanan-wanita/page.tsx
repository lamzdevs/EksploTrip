import React from 'react';
import type { Metadata } from 'next';
import TipsKeamananWanitaContent from '@/components/TipsKeamananWanitaContent';

export const metadata: Metadata = {
  title: 'Tips Keamanan Wanita - EksploTrip',
  description:
    'Panduan dan tips keamanan berwisata bagi perempuan saat menjelajahi alam dan destinasi wisata.',
};

export default function TipsKeamananWanitaPage() {
  return <TipsKeamananWanitaContent />;
}
