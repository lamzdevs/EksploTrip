import React from 'react';
import type { Metadata } from 'next';
import MainViewSlider from '@/components/MainViewSlider';
import { getCardDestinations } from '@/lib/destinations';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Bantuan Darurat - EksploTrip',
  description:
    'Panduan langkah keadaan darurat, tips keselamatan di alam, informasi bantuan cepat, dan FAQ keamanan wisata.',
};

export default async function BantuanDaruratPage() {
  const { destinations, source, error } = await getCardDestinations();

  return (
    <MainViewSlider
      initialTab="bantuan"
      destinations={destinations}
      source={source}
      errorMessage={error}
    />
  );
}
