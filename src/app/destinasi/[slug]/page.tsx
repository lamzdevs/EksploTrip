import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailKatalogContent from '@/components/DetailKatalogContent';
import { getDestinationBySlug, getDestinations } from '@/lib/destinations';

interface DestinationDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: DestinationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { destination } = await getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Destinasi Tidak Ditemukan - EksploTrip',
    };
  }

  return {
    title: `${destination.nama_wisata} - Detail Destinasi - EksploTrip`,
    description:
      destination.deskripsi ||
      `Informasi detail destinasi wisata alam ${destination.nama_wisata} di ${destination.kecamatan}.`,
  };
}

export default async function DestinationDetailPage({
  params,
}: DestinationDetailPageProps) {
  const { slug } = await params;
  const [{ destination }, { destinations }] = await Promise.all([
    getDestinationBySlug(slug),
    getDestinations(),
  ]);

  if (!destination) {
    notFound();
  }

  return (
    <DetailKatalogContent
      destination={destination}
      allDestinations={destinations}
    />
  );
}
