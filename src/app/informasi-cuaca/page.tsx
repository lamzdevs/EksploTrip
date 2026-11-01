import React from 'react';
import type { Metadata } from 'next';
import InformasiCuacaContent from '@/components/InformasiCuacaContent';

export const metadata: Metadata = {
  title: 'Informasi Cuaca - EksploTrip',
  description:
    'Cek kondisi cuaca terkini dan prakiraan cuaca 5 hari ke depan di wilayah Bogor untuk merencanakan perjalanan wisata dengan aman.',
};

export default function InformasiCuacaPage() {
  return <InformasiCuacaContent />;
}
