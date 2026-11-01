import React from 'react';
import type { Metadata } from 'next';
import FasilitasKesehatanContent from '@/components/FasilitasKesehatanContent';

export const metadata: Metadata = {
  title: 'Fasilitas Darurat & Kesehatan Terdekat - EksploTrip',
  description:
    'Temukan rumah sakit, puskesmas, klinik, dan apotek terdekat dari lokasimu di kawasan Bogor saat berwisata.',
};

export default function FasilitasDaruratPage() {
  return <FasilitasKesehatanContent />;
}
