import React from 'react';
import type { Metadata } from 'next';
import NomorDaruratContent from '@/components/NomorDaruratContent';

export const metadata: Metadata = {
  title: 'Nomor Darurat Umum - EksploTrip',
  description:
    'Daftar nomor telepon darurat resmi Polisi, Pemadam Kebakaran, Ambulans, Taman Nasional, dan SAR/Basarnas.',
};

export default function NomorDaruratUmumPage() {
  return <NomorDaruratContent />;
}
