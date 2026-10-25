import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailVisualContent from '@/components/DetailVisualContent';
import { getDestinationBySlug } from '@/lib/destinations';

interface DestinationVisualPageProps {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({
  params,
}: DestinationVisualPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { destination } = await getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Katalog Visual Tidak Ditemukan - EksploTrip',
    };
  }

  return {
    title: `Katalog Visual - ${destination.nama_wisata} | EksploTrip`,
    description: `Dokumentasi visual kondisi lapangan ${destination.nama_wisata} di ${destination.kecamatan}.`,
  };
}

export default async function DestinationVisualPage({
  params,
  searchParams,
}: DestinationVisualPageProps) {
  const { slug } = await params;
  const sp = searchParams ? await searchParams : {};
  const fromOrigin = typeof sp.from === 'string' ? sp.from : undefined;

  const { destination } = await getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <DetailVisualContent
      destination={destination}
      fromOrigin={fromOrigin}
    />
  );
}
