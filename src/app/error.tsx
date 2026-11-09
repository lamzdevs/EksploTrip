'use client';

import React from 'react';
import ErrorView from '@/components/ErrorView';

export default function RootError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorView
      error={error}
      reset={reset}
      title="Ups, Terjadi Kendala Saat Memuat Halaman"
      subtitle="Maaf, terjadi gangguan teknis sementara pada sistem. Silakan coba muat ulang atau kembali ke beranda."
    />
  );
}
