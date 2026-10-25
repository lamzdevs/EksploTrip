import React from 'react';
import type { Metadata } from 'next';
import SearchContent from '@/components/SearchContent';
import { filterDestinationsList, getDestinations } from '@/lib/destinations';

export const metadata: Metadata = {
  title: 'Hasil Pencarian Destinasi - EksploTrip',
  description: 'Hasil pencarian destinasi wisata alam di Bogor pada EksploTrip.',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string; status?: string; from?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = '', status, from } = await searchParams;
  const { destinations } = await getDestinations();

  const trimmedQuery = q.trim();
  const forceError = status === 'error';

  const matchingResults = forceError
    ? []
    : trimmedQuery
    ? filterDestinationsList(destinations, { query: trimmedQuery })
    : destinations;

  const resolvedFrom: 'beranda' | 'eksplorasi' =
    from === 'beranda' ? 'beranda' : 'eksplorasi';

  return (
    <SearchContent
      query={trimmedQuery}
      results={matchingResults}
      forceError={forceError}
      fromOrigin={resolvedFrom}
    />
  );
}
