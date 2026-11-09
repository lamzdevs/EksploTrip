'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NetworkErrorViewProps {
  error?: Error & { digest?: string };
  reset?: () => void;
  title?: string;
  subtitle?: string;
  backHref?: string;
}

export default function NetworkErrorView({
  error,
  reset,
  title,
  subtitle,
  backHref = '/',
}: NetworkErrorViewProps) {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [isRetrying, setIsRetrying] = useState<boolean>(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);

      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  const handleRetry = () => {
    setIsRetrying(true);
    if (reset) {
      try {
        reset();
      } catch {
        if (typeof window !== 'undefined') {
          window.location.reload();
        }
      }
    } else if (typeof window !== 'undefined') {
      window.location.reload();
    }
    setTimeout(() => setIsRetrying(false), 2000);
  };

  const handleCopyDetails = () => {
    const text = `[EksploTrip Network/Server Error]\nStatus Online: ${isOnline ? 'Online' : 'Offline'}\nMessage: ${error?.message || 'Server timeout or network dropped'}\nDigest: ${error?.digest || 'N/A'}\nTime: ${new Date().toISOString()}\nURL: ${typeof window !== 'undefined' ? window.location.href : 'SSR'}`;
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const displayTitle =
    title ||
    (!isOnline
      ? 'Koneksi Internet Terputus'
      : 'Gagal Terhubung ke Server');

  const displaySubtitle =
    subtitle ||
    (!isOnline
      ? 'Perangkatmu saat ini tidak terhubung ke jaringan internet. Periksa sinyal seluler atau koneksi Wi-Fi Anda untuk melanjutkan penjelajahan.'
      : 'Halaman tidak dapat dimuat karena gangguan jaringan lambat atau server sedang mengalami kendala respons sementara. Silakan coba sambungkan kembali.');

  return (
    <div
      className="network-error-wrapper"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Sticky Main Navbar */}
      <Navbar variant="main" />

      <main
        role="main"
        aria-labelledby="network-error-heading"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '620px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Custom Dedicated Vector Illustration: Network / Server Disconnected */}
          <div
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              backgroundColor: !isOnline ? '#FFF1F0' : '#EBF6F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: !isOnline
                ? '0 12px 30px rgba(217, 56, 30, 0.12)'
                : '0 12px 30px rgba(50, 170, 198, 0.14)',
              transition: 'all 0.3s ease',
            }}
          >
            {!isOnline ? (
              /* Wi-Fi Off / Sinyal Terputus SVG */
              <svg
                width="96"
                height="96"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D9381E"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="1" y1="1" x2="23" y2="23" />
                <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
              </svg>
            ) : (
              /* Cloud / Server Offline with Pulse SVG */
              <svg
                width="96"
                height="96"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#32AAC6"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="M12 12v6" />
                <path d="m9 15 3 3 3-3" />
                <path d="M8 21h8" />
              </svg>
            )}

            {/* Floating Alert Ping Indicator */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: !isOnline ? '#D9381E' : '#EAB308',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              }}
              aria-hidden="true"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
            </div>
          </div>

          {/* Badge Status */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: !isOnline ? '#FFEBE8' : '#FEF3C7',
              color: !isOnline ? '#D9381E' : '#B45309',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              marginTop: '22px',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: !isOnline ? '#D9381E' : '#D97706',
              }}
            />
            <span>
              {!isOnline ? 'JARINGAN TERPUTUS' : 'KENDALA RESPON SERVER'}
            </span>
          </div>

          {/* Heading & Deskripsi */}
          <h1
            id="network-error-heading"
            style={{
              marginTop: '12px',
              fontSize: '24px',
              fontWeight: 700,
              color: '#040811',
              letterSpacing: '-0.2px',
            }}
          >
            {displayTitle}
          </h1>
          <p
            style={{
              marginTop: '8px',
              fontSize: '14px',
              lineHeight: '22px',
              color: '#64748B',
              maxWidth: '540px',
            }}
          >
            {displaySubtitle}
          </p>

          {/* Realtime Connection Status Pill */}
          <div
            style={{
              marginTop: '16px',
              padding: '8px 14px',
              borderRadius: '8px',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              fontSize: '12px',
              color: '#475569',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>
              Kondisi Jaringan Perangkat:{' '}
              <strong style={{ color: isOnline ? '#387520' : '#D9381E' }}>
                {isOnline ? 'Terdeteksi Aktif (Online)' : 'Terputus (Offline)'}
              </strong>
            </span>
          </div>

          {/* Kartu Panduan Langkah Pemulihan */}
          <aside
            aria-label="Panduan pemulihan jaringan"
            style={{
              marginTop: '20px',
              width: '100%',
              backgroundColor: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '14px 18px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#0F172A',
                marginBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#32AAC6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span>Hal yang Bisa Anda Lakukan:</span>
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '12.5px',
                color: '#475569',
              }}
            >
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#32AAC6', fontWeight: 'bold' }}>•</span>
                <span>Pastikan data seluler atau koneksi Wi-Fi Anda stabil.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#32AAC6', fontWeight: 'bold' }}>•</span>
                <span>
                  Klik tombol <strong>Coba Hubungkan Ulang</strong> di bawah ini.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#32AAC6', fontWeight: 'bold' }}>•</span>
                <span>
                  Jika sedang berada di jalur wisata tanpa sinyal, buka{' '}
                  <Link
                    href="/bantuan-darurat"
                    style={{ color: '#32AAC6', textDecoration: 'underline', fontWeight: 600 }}
                  >
                    Bantuan Darurat
                  </Link>{' '}
                  untuk melihat kontak dan panduan lapangan.
                </span>
              </li>
            </ul>
          </aside>

          {/* Tombol Aksi */}
          <div
            style={{
              marginTop: '24px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {/* Tombol Coba Hubungkan Ulang */}
            <button
              type="button"
              onClick={handleRetry}
              disabled={isRetrying}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '11px 22px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#32AAC6',
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: isRetrying ? 'not-allowed' : 'pointer',
                opacity: isRetrying ? 0.75 : 1,
                boxShadow: '0 3px 10px rgba(50, 170, 198, 0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  animation: isRetrying ? 'spin 1s linear infinite' : 'none',
                }}
                aria-hidden="true"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span>{isRetrying ? 'Menghubungkan...' : 'Coba Hubungkan Ulang'}</span>
            </button>

            {/* Tombol Kembali */}
            <Link
              href={backHref}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '11px 20px',
                borderRadius: '8px',
                border: '1.5px solid #CBD5E1',
                backgroundColor: '#FFFFFF',
                color: '#334155',
                fontSize: '13.5px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span>Kembali</span>
            </Link>

            {/* Tombol Bantuan Darurat */}
            <Link
              href="/bantuan-darurat"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '11px 20px',
                borderRadius: '8px',
                border: '1.5px solid #8ABC43',
                backgroundColor: '#F3F9ED',
                color: '#387520',
                fontSize: '13.5px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
              </svg>
              <span>Bantuan Darurat</span>
            </Link>
          </div>

          {/* Toggle Diagnostik Teknis */}
          {error && (
            <div style={{ marginTop: '28px', width: '100%', textAlign: 'left' }}>
              <button
                type="button"
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  fontSize: '12px',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>{showTechnicalDetails ? '▾ Sembunyikan Detail Server' : '▸ Detail Teknis Server'}</span>
              </button>

              {showTechnicalDetails && (
                <div
                  style={{
                    marginTop: '8px',
                    padding: '12px',
                    backgroundColor: '#0F172A',
                    color: '#94A3B8',
                    borderRadius: '6px',
                    fontFamily: 'monospace',
                    fontSize: '11.5px',
                    lineHeight: '1.5',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ color: '#E2E8F0', fontWeight: 600 }}>Server Error Info:</span>
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      style={{
                        background: '#334155',
                        border: 'none',
                        color: '#F8FAFC',
                        borderRadius: '3px',
                        padding: '2px 6px',
                        fontSize: '10.5px',
                        cursor: 'pointer',
                      }}
                    >
                      {copied ? 'Tersalin' : 'Salin'}
                    </button>
                  </div>
                  <div>Pesan: {error.message || 'Koneksi gagal'}</div>
                  {error.digest && <div>Digest: {error.digest}</div>}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
