'use client';

import React from 'react';
import ErrorView from '@/components/ErrorView';

export default function DestinationDetailError({
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
      title="Gagal Memuat Detail Destinasi"
      subtitle="Terjadi kendala saat mengambil rincian informasi dan data lapangan destinasi wisata ini. Silakan coba muat ulang atau pilih destinasi lainnya di katalog."
      customBackHref="/eksplorasi"
      customBackLabel="Ke Katalog Eksplorasi"
    />
  );
}
