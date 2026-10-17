import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BantuanDaruratContent from '@/components/BantuanDaruratContent';

export const metadata: Metadata = {
  title: 'Bantuan Darurat - EksploTrip',
  description:
    'Panduan langkah keadaan darurat, tips keselamatan di alam, informasi bantuan cepat, dan FAQ keamanan wisata.',
};

export default function BantuanDaruratPage() {
  return (
    <>
      <Navbar variant="main" activeMainTab="bantuan" />
      <BantuanDaruratContent />
    </>
  );
}
