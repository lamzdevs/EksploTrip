'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ErrorViewProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  subtitle?: string;
  customBackHref?: string;
  customBackLabel?: string;
}

export default function ErrorView({
  error,
  reset,
  title = 'Ups, Terjadi Kendala Saat Memuat Halaman',
  subtitle = 'Maaf, halaman ini mengalami gangguan teknis sementara. Jangan khawatir, data penjelajahanmu tetap aman.',
  customBackHref = '/',
  customBackLabel = 'Kembali ke Beranda',
}: ErrorViewProps) {
  const [isRetrying, setIsRetrying] = useState(false);
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  useEffect(() => {
    // Log error untuk monitoring telemetri / debugging
    console.error('EksploTrip App Error:', error);
  }, [error]);

  const handleRetry = () => {
    setIsRetrying(true);
    try {
      reset();
    } catch (e) {
      console.warn('Retry error failed:', e);
      window.location.reload();
    } finally {
      setTimeout(() => setIsRetrying(false), 1200);
    }
  };

  return (
    <div className="view-transition-wrapper error-page-wrapper">
      <Navbar variant="main" />

      <main>
        <section className="search-error-section" aria-labelledby="error-heading" style={{ paddingBottom: '40px' }}>
          {/* Ilustrasi Error */}
          <div className="error-illustration-wrap">
            <img
              src="/assets/images/search_error/tidak_ditemukan.webp"
              alt="Ilustrasi terjadi kendala teknis"
              width={455}
              height={249}
              fetchPriority="high"
              decoding="sync"
              className="error-illustration-img"
            />
          </div>

          {/* Badge Alert */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#FFEBE8',
              color: '#D9381E',
              fontSize: '13px',
              fontWeight: 600,
              marginTop: '16px',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
              error
            </span>
            <span>Kendala Terdeteksi</span>
          </div>

          {/* Title & Subtitle */}
          <h1 className="error-title" id="error-heading" style={{ marginTop: '14px' }}>
            {title}
          </h1>
          <p className="error-desc" style={{ maxWidth: '640px' }}>
            {subtitle}
          </p>

          {/* Panduan Pemulihan (Tips Card) */}
          <aside className="search-tips-card" aria-labelledby="error-tips-heading" style={{ marginTop: '20px' }}>
            <div className="tips-icon-circle" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ color: '#FFFFFF', fontSize: '22px' }}>
                lightbulb
              </span>
            </div>
            <div className="tips-content">
              <h2 className="tips-title" id="error-tips-heading">
                Langkah yang Dapat Dilakukan:
              </h2>
              <ul className="tips-list">
                <li>Periksa kestabilan koneksi internet atau jaringan selulermu.</li>
                <li>Klik tombol <strong>Coba Lagi</strong> di bawah untuk memuat ulang sistem secara aman.</li>
                <li>Jika kendala masih berlanjut, kembali ke <strong>Beranda</strong> atau akses <strong>Bantuan Darurat</strong>.</li>
              </ul>
            </div>
          </aside>

          {/* Tombol Aksi */}
          <div className="error-actions" style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Tombol Coba Lagi */}
            <button
              type="button"
              onClick={handleRetry}
              disabled={isRetrying}
              className="btn-retry-error"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#32AAC6',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: 600,
                cursor: isRetrying ? 'not-allowed' : 'pointer',
                opacity: isRetrying ? 0.75 : 1,
                boxShadow: '0 4px 12px rgba(50, 170, 198, 0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: '18px',
                  animation: isRetrying ? 'spin 1s linear infinite' : 'none',
                }}
              >
                refresh
              </span>
              <span>{isRetrying ? 'Sedang Memuat...' : 'Coba Lagi'}</span>
            </button>

            {/* Tombol Kembali */}
            <Link
              href={customBackHref}
              className="btn-reset-search"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1.5px solid #32AAC6',
                backgroundColor: '#FFFFFF',
                color: '#32AAC6',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                home
              </span>
              <span>{customBackLabel}</span>
            </Link>

            {/* Tombol Bantuan Darurat */}
            <Link
              href="/bantuan-darurat"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '8px',
                border: '1.5px solid #467434',
                backgroundColor: '#F3F8F0',
                color: '#467434',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                support_agent
              </span>
              <span>Bantuan Darurat</span>
            </Link>
          </div>

          {/* Detail Teknis Error (Collapsible) */}
          {error?.message && (
            <div style={{ marginTop: '28px', maxWidth: '650px', width: '100%', textAlign: 'left' }}>
              <button
                type="button"
                onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748B',
                  fontSize: '12.5px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  {showTechnicalDetails ? 'expand_less' : 'expand_more'}
                </span>
                <span>{showTechnicalDetails ? 'Sembunyikan detail teknis' : 'Lihat detail teknis'}</span>
              </button>

              {showTechnicalDetails && (
                <div
                  style={{
                    marginTop: '8px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#F1F5F9',
                    border: '1px solid #E2E8F0',
                    fontSize: '12px',
                    color: '#334155',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                  }}
                >
                  <p><strong>Pesan:</strong> {error.message}</p>
                  {error.digest && <p style={{ marginTop: '4px' }}><strong>Kode Digest:</strong> {error.digest}</p>}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Banner Bawah */}
        <section className="banner-bottom-section" aria-label="Banner Pemandangan">
          <picture className="cta-banner-picture">
            <source
              media="(max-width: 640px)"
              srcSet="/assets/images/beranda/banner_bawah_mobile.webp"
            />
            <img
              src="/assets/images/beranda/banner_bawah.webp"
              alt="Pemandangan bukit dan danau di Bogor"
              width={1440}
              height={233}
              loading="lazy"
              decoding="async"
              className="bottom-banner-img"
            />
          </picture>
        </section>
      </main>

      <Footer />
    </div>
  );
}
