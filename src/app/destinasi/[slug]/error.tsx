'use client';

import React, { useEffect } from 'react';
import NetworkErrorView from '@/components/NetworkErrorView';

interface DestinationErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DestinationError({
  error,
  reset,
}: DestinationErrorProps) {
  useEffect(() => {
    console.error('[EksploTrip Destination Fetch Error]:', error);
  }, [error]);

  return (
    <NetworkErrorView
      error={error}
      reset={reset}
      title="Gagal Memuat Informasi Destinasi"
      subtitle="Data survei destinasi ini tidak dapat dimuat karena gangguan jaringan atau kendala server database. Pastikan koneksimu stabil lalu coba lagi."
      backHref="/eksplorasi"
    />
  );
}
