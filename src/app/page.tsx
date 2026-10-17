import React from 'react';
import Navbar from '@/components/Navbar';
import BerandaContent from '@/components/BerandaContent';
import { getDestinations } from '@/lib/destinations';

export default async function HomePage() {
  const { destinations, source } = await getDestinations();

  return (
    <>
      <Navbar variant="main" activeMainTab="beranda" />
      <BerandaContent destinations={destinations} source={source} />
    </>
  );
}
