'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import { DestinationCard } from '@/components/DestinationCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SearchContentProps {
  query: string;
  results: Destination[];
  forceError?: boolean;
  fromOrigin?: 'beranda' | 'eksplorasi';
}

export default function SearchContent({
  query,
  results,
  forceError = false,
  fromOrigin = 'eksplorasi',
}: SearchContentProps) {
  const [activeOrigin, setActiveOrigin] = useState<'beranda' | 'eksplorasi'>(
    fromOrigin
  );

  useEffect(() => {
    if (fromOrigin) {
      setActiveOrigin(fromOrigin);
    }
    if (typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const f = sp.get('from');
      if (f === 'beranda' || f === 'eksplorasi') {
        setActiveOrigin(f);
      } else if (document.referrer) {
        try {
          const refUrl = new URL(document.referrer);
          if (refUrl.origin === window.location.origin) {
            if (refUrl.pathname === '/' || refUrl.pathname === '/beranda.html') {
              setActiveOrigin('beranda');
            } else if (refUrl.pathname.startsWith('/eksplorasi')) {
              setActiveOrigin('eksplorasi');
            } else if (refUrl.pathname.startsWith('/bantuan-darurat')) {
              setActiveOrigin('eksplorasi');
            }
          }
        } catch {
          // ignore
        }
      }
    }
  }, [fromOrigin]);

  const backHref = activeOrigin === 'beranda' ? '/' : '/eksplorasi';
  const hasResults = !forceError && results.length > 0;

  if (!hasResults) {
    return (
      <div className="view-transition-wrapper">
        <Navbar
          variant="main"
          initialSearchQuery={query}
          activeMainTab={activeOrigin}
        />

        <main>
          {/* Hasil Pencarian: Tidak Ditemukan */}
          <section
            className="search-error-section"
            aria-labelledby="error-heading"
          >
            <div className="error-illustration-wrap">
              <img
                src="/assets/images/search_error/tidak_ditemukan.png"
                alt="Ilustrasi papan penunjuk dengan tanda tanya"
                className="error-illustration-img"
              />
            </div>

            <h1 className="error-title" id="error-heading">
              Destinasi Tidak Ditemukan
            </h1>
            <p className="error-desc">
              Maaf, kami belum menemukan destinasi yang sesuai dengan
              pencarianmu{query ? ` ("${query}")` : ''}. Coba periksa kembali
              kata kunci, gunakan kategori yang berbeda, atau gunakan filter.
            </p>

            {/* Tips Pencarian Card */}
            <aside className="search-tips-card" aria-labelledby="tips-heading">
              <div className="tips-icon-circle" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18h6" />
                  <path d="M10 21h4" />
                  <path d="M12 2v1.5" />
                  <path d="M4.93 4.93l1.06 1.06" />
                  <path d="M2 12h1.5" />
                  <path d="M20.5 12H22" />
                  <path d="M19.07 4.93l-1.06 1.06" />
                  <path d="M15.54 14.46A5 5 0 1 0 8.46 14.46c.57.54.96 1.24 1.04 2.04h5c.08-.8.47-1.5 1.04-2.04Z" />
                  <circle
                    cx="12"
                    cy="11"
                    r="1.2"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </div>
              <div className="tips-content">
                <h2 className="tips-title" id="tips-heading">
                  Tips Pencarian:
                </h2>
                <ul className="tips-list">
                  <li>
                    Pastikan nama destinasi sudah benar (contoh: Curug Cibulao,
                    Situ Gede, Gunung Pancar)
                  </li>
                  <li>Coba gunakan kata kunci yang lebih umum (curug, danau, gunung)</li>
                  <li>Gunakan filter untuk mempersempit hasil</li>
                </ul>
              </div>
            </aside>

            {/* Action Buttons */}
            <div className="error-actions">
              <Link href="/eksplorasi" className="btn-reset-search">
                <span className="material-symbols-outlined">restart_alt</span>
                <span>Reset Pencarian</span>
              </Link>
              <Link href={backHref} className="btn-back-home">
                Kembali
              </Link>
            </div>
          </section>

          {/* Banner Bawah */}
          <section
            className="banner-bottom-section"
            aria-label="Banner Pemandangan"
          >
            <div className="banner-bottom-wrapper">
              <img
                src="/assets/images/search_error/banner_bawah.png"
                alt="Pemandangan pegunungan berkabut"
                className="banner-bottom-img"
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="main-with-back"
        backHref={backHref}
        backLabel="Kembali"
        activeMainTab={activeOrigin}
      />

      <main>
        {/* Hasil Pencarian: Ditemukan */}
        <section
          className="destinations-section"
          aria-labelledby="search-results-title"
        >
          <div className="destinations-header">
            <div className="destinations-title-group">
              <h1 className="destinations-title" id="search-results-title">
                Destinasi Wisata Alam Ditemukan
              </h1>
              <p className="destinations-subtitle">
                Berikut adalah beberapa destinasi wisata yang tersedia
                {query ? ` untuk kata kunci "${query}"` : ''}.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            {results.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                fromOrigin="search"
              />
            ))}
          </div>
        </section>

        {/* Banner Bawah */}
        <section
          className="banner-bottom-section"
          aria-label="Banner Pemandangan"
        >
          <div className="banner-bottom-wrapper">
            <img
              src="/assets/images/search_succes/banner_bawah.png"
              alt="Pemandangan pegunungan berkabut"
              className="banner-bottom-img"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
