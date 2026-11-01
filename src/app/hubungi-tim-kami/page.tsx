import React from 'react';
import type { Metadata } from 'next';
import HubungiTimKamiContent from '@/components/HubungiTimKamiContent';

export const metadata: Metadata = {
  title: 'Hubungi Tim Kami - EksploTrip',
  description:
    'Hubungi tim EksploTrip untuk pertanyaan, saran, aduan, atau informasi tambahan terkait keamanan perjalanan wisata.',
};

export default function HubungiTimKamiPage() {
  return <HubungiTimKamiContent />;
}
