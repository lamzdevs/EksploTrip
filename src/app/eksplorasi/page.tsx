import React from 'react';
import type { Metadata } from 'next';
import MainViewSlider from '@/components/MainViewSlider';
import { getCardDestinations } from '@/lib/destinations';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Eksplorasi Destinasi - EksploTrip',
  description:
    'Temukan berbagai pilihan destinasi wisata alam curug, situ/danau, dan bukit/gunung di Bogor.',
};

export default async function EksplorasiPage() {
  const { destinations, source, error } = await getCardDestinations();

  return (
    <MainViewSlider
      initialTab="eksplorasi"
      destinations={destinations}
      source={source}
      errorMessage={error}
    />
  );
}
