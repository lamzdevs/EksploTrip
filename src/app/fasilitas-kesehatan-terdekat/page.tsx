import React from 'react';
import type { Metadata } from 'next';
import FasilitasKesehatanContent from '@/components/FasilitasKesehatanContent';

export const metadata: Metadata = {
  title: 'Fasilitas Kesehatan Terdekat - EksploTrip',
  description:
    'Temukan rumah sakit, puskesmas, klinik, dan apotek terdekat dari lokasimu di kawasan Bogor saat berwisata.',
};

export default function FasilitasKesehatanTerdekatPage() {
  return <FasilitasKesehatanContent />;
}
