import React from 'react';
import type { Metadata } from 'next';
import DetailVisualContent from '@/components/DetailVisualContent';
import { getDestinations } from '@/lib/destinations';
import { DUMMY_DESTINATIONS } from '@/data/destinations';

export const metadata: Metadata = {
  title: 'Katalog Visual Destinasi | EksploTrip',
  description:
    'Dokumentasi visual kondisi lapangan jalur trekking, fasilitas, dan spot wisata.',
};

interface DetailVisualPageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function DetailVisualPage({
  searchParams,
}: DetailVisualPageProps) {
  const { slug } = await searchParams;
  const { destinations } = await getDestinations();

  const selected =
    (slug
      ? destinations.find(
          (item) => item.slug.toLowerCase() === slug.toLowerCase()
        )
      : destinations[0]) || DUMMY_DESTINATIONS[0];

  return <DetailVisualContent destination={selected} />;
}
