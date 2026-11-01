import React from 'react';
import type { Metadata } from 'next';
import EdukasiPencegahanContent from '@/components/EdukasiPencegahanContent';

export const metadata: Metadata = {
  title: 'Edukasi dan Pencegahan - EksploTrip',
  description:
    'Kenali risiko, pahami langkah pencegahan, dan persiapkan diri agar perjalanan wisata di alam lebih aman, nyaman, dan menyenangkan.',
};

export default function EdukasiAliasPage() {
  return <EdukasiPencegahanContent />;
}
