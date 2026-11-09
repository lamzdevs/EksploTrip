'use client';

import React, { useEffect } from 'react';
import NetworkErrorView from '@/components/NetworkErrorView';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[EksploTrip App Error Captured]:', error);
  }, [error]);

  return <NetworkErrorView error={error} reset={reset} />;
}
