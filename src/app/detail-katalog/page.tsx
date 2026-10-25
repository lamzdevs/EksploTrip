import React from 'react';
import type { Metadata } from 'next';
import DetailKatalogContent from '@/components/DetailKatalogContent';
import { getDestinations } from '@/lib/destinations';
import { DUMMY_DESTINATIONS } from '@/data/destinations';

export const metadata: Metadata = {
  title: 'Detail Destinasi - EksploTrip',
  description:
    'Informasi detail destinasi wisata alam, kalkulator biaya end-to-end, katalog visual, peta rute, dan kontak darurat.',
};

interface DetailKatalogPageProps {
  searchParams: Promise<{ slug?: string; from?: string }>;
}

export default async function DetailKatalogPage({
  searchParams,
}: DetailKatalogPageProps) {
  const { slug, from } = await searchParams;
  const { destinations } = await getDestinations();

  const selected =
    (slug
      ? destinations.find(
          (item) => item.slug.toLowerCase() === slug.toLowerCase()
        )
      : destinations[0]) || DUMMY_DESTINATIONS[0];

  return (
    <DetailKatalogContent
      destination={selected}
      allDestinations={destinations}
      fromOrigin={from}
    />
  );
}
