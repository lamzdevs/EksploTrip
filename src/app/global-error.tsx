'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('[EksploTrip Fatal Global Error]:', error);
  }, [error]);

  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kendala Jaringan / Server - EksploTrip</title>
      </head>
      <body
        style={{
          margin: 0,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: '#FFFFFF',
          color: '#040811',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '24px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '480px', width: '100%' }}>
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              backgroundColor: '#FFEBE8',
              color: '#D9381E',
              margin: '0 auto 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="1" y1="1" x2="23" y2="23" />
              <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
              <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
              <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
              <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
            </svg>
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 10px' }}>
            Gagal Terhubung ke Server
          </h1>
          <p
            style={{
              fontSize: '14px',
              lineHeight: '22px',
              color: '#64748B',
              margin: '0 0 24px',
            }}
          >
            Sistem tidak dapat memuat halaman karena gangguan jaringan atau
            server sedang tidak merespons.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: '11px 22px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#32AAC6',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Coba Lagi
            </button>
            <Link
              href="/"
              style={{
                padding: '11px 22px',
                borderRadius: '8px',
                border: '1.5px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                color: '#334155',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Beranda
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
