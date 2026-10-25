import React from 'react';
import MainViewSlider from '@/components/MainViewSlider';
import { getDestinations } from '@/lib/destinations';

export default async function HomePage() {
  const { destinations, source, error } = await getDestinations();

  return (
    <MainViewSlider
      initialTab="beranda"
      destinations={destinations}
      source={source}
      errorMessage={error}
    />
  );
}
