'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <head>
        <title>Terjadi Kendala - EksploTrip</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        style={{
          margin: 0,
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: '#F4F4F4',
          color: '#040811',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '540px',
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '36px 24px',
            boxShadow: '0 4px 20px rgba(4, 8, 17, 0.1)',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#FFEBE8',
              color: '#D9381E',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '16px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>
              warning
            </span>
          </div>

          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 10px 0' }}>
            Terjadi Kendala Sistem
          </h1>
          <p style={{ fontSize: '14px', color: '#4D596A', lineHeight: '1.6', margin: '0 0 24px 0' }}>
            Aplikasi mengalami kesalahan fatal yang tidak terduga. Klik tombol di bawah untuk menyegarkan dan memuat ulang aplikasi.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#32AAC6',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                refresh
              </span>
              <span>Muat Ulang Aplikasi</span>
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = '/';
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1.5px solid #32AAC6',
                backgroundColor: '#FFFFFF',
                color: '#32AAC6',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                home
              </span>
              <span>Ke Beranda</span>
            </button>
          </div>

          {error?.message && (
            <p style={{ marginTop: '20px', fontSize: '11px', color: '#94A3B8', wordBreak: 'break-all' }}>
              Detail: {error.message}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}
