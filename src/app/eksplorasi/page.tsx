import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import EksplorasiContent from '@/components/EksplorasiContent';
import { getDestinations } from '@/lib/destinations';

export const metadata: Metadata = {
  title: 'Eksplorasi Destinasi - EksploTrip',
  description:
    'Temukan berbagai pilihan destinasi wisata alam curug, situ/danau, dan bukit/gunung di Bogor.',
};

export default async function EksplorasiPage() {
  const { destinations, source, error } = await getDestinations();

  return (
    <>
      <Navbar variant="main" activeMainTab="eksplorasi" />
      <EksplorasiContent
        destinations={destinations}
        source={source}
        errorMessage={error}
      />
    </>
  );
}
