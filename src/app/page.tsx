import React from 'react';
import MainViewSlider from '@/components/MainViewSlider';
import { getCardDestinations } from '@/lib/destinations';

export const revalidate = 60;

export default async function HomePage() {
  const { destinations, source, error } = await getCardDestinations();

  return (
    <MainViewSlider
      initialTab="beranda"
      destinations={destinations}
      source={source}
      errorMessage={error}
    />
  );
}
