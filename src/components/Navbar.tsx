'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarProps {
  /**
   * - 'main': Navbar utama (Logo + 3 menu dengan .nav-indicator + Search form + AI button)
   * - 'detail-back': Navbar khusus Detail Katalog & Detail Visual (.detail-navbar dengan tombol Kembali)
   * - 'main-with-back': Navbar dengan 3 menu di tengah dan tombol Kembali di kanan (Nomor Darurat Umum & Search Success)
   */
  variant?: 'main' | 'detail-back' | 'main-with-back';
  backHref?: string;
  backLabel?: string;
  initialSearchQuery?: string;
  activeMainTab?: 'beranda' | 'eksplorasi' | 'bantuan';
}

export default function Navbar({
  variant = 'main',
  backHref = '/eksplorasi',
  backLabel = 'Kembali',
  initialSearchQuery = '',
  activeMainTab,
}: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(initialSearchQuery);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  const navLinksRef = useRef<HTMLUListElement | null>(null);
  const berandaRef = useRef<HTMLLIElement | null>(null);
  const eksplorasiRef = useRef<HTMLLIElement | null>(null);
  const bantuanRef = useRef<HTMLLIElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    setSearchValue(initialSearchQuery);
  }, [initialSearchQuery]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const currentTab: 'beranda' | 'eksplorasi' | 'bantuan' =
    activeMainTab ??
    (pathname.startsWith('/eksplorasi')
      ? 'eksplorasi'
      : pathname.startsWith('/bantuan-darurat') ||
        pathname.startsWith('/nomor-darurat-umum')
      ? 'bantuan'
      : 'beranda');

  useEffect(() => {
    if (variant === 'detail-back') return;

    const updateIndicator = () => {
      const container = navLinksRef.current;
      const targetEl =
        currentTab === 'eksplorasi'
          ? eksplorasiRef.current
          : currentTab === 'bantuan'
          ? bantuanRef.current
          : berandaRef.current;

      if (!container || !targetEl) return;

      const containerRect = container.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      setIndicatorStyle({
        left: targetRect.left - containerRect.left,
        width: targetRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [variant, currentTab, pathname]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = searchValue.trim();
    if (!trimmed) {
      router.push('/eksplorasi');
      return;
    }
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  if (variant === 'detail-back') {
    return (
      <header className="detail-navbar" role="banner">
        <div className="detail-navbar-container">
          <Link href="/" className="navbar-brand" aria-label="EksploTrip Beranda">
            <img
              src="/assets/images/detail_katalog/logo_eksplotrip_navbar.png"
              alt="EksploTrip Logo"
              className="navbar-brand-logo"
            />
          </Link>

          <Link
            href={backHref}
            className="btn-back-nav"
            id="btn-back-nav"
            aria-label={backLabel}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>{backLabel}</span>
          </Link>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar-container">
          <Link href="/" className="navbar-brand" aria-label="EksploTrip Beranda">
            <img
              src="/assets/images/beranda/logo_eksplotrip_navbar.png"
              alt="EksploTrip Logo"
              className="navbar-logo"
            />
          </Link>

          <nav className="navbar-menu" aria-label="Navigasi Utama">
            <ul className="nav-links" ref={navLinksRef}>
              <li
                ref={berandaRef}
                className={`nav-item ${currentTab === 'beranda' ? 'active' : ''}`}
                id="nav-item-beranda"
              >
                <Link
                  href="/"
                  aria-current={currentTab === 'beranda' ? 'page' : undefined}
                >
                  Beranda
                </Link>
              </li>
              <li
                ref={eksplorasiRef}
                className={`nav-item ${
                  currentTab === 'eksplorasi' ? 'active' : ''
                }`}
                id="nav-item-eksplorasi"
              >
                <Link
                  href="/eksplorasi"
                  aria-current={
                    currentTab === 'eksplorasi' ? 'page' : undefined
                  }
                >
                  Eksplorasi Destinasi
                </Link>
              </li>
              <li
                ref={bantuanRef}
                className={`nav-item ${currentTab === 'bantuan' ? 'active' : ''}`}
                id="nav-item-bantuan"
              >
                <Link
                  href="/bantuan-darurat"
                  aria-current={currentTab === 'bantuan' ? 'page' : undefined}
                >
                  Bantuan Darurat
                </Link>
              </li>
              <li
                className="nav-indicator"
                aria-hidden="true"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                }}
              />
            </ul>
          </nav>

          <div className="navbar-actions">
            {variant === 'main-with-back' ? (
              <Link
                href={backHref}
                className="btn-back-nav"
                aria-label={backLabel}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                <span>{backLabel}</span>
              </Link>
            ) : (
              <>
                <form
                  onSubmit={handleSearchSubmit}
                  role="search"
                  className="search-form"
                >
                  <span className="material-symbols-outlined search-icon">
                    search
                  </span>
                  <input
                    type="search"
                    name="q"
                    placeholder="Cari destinasi..."
                    aria-label="Cari destinasi"
                    className="search-input"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </form>

                <button
                  type="button"
                  aria-label="Tanya AI EksploTrip"
                  className="ai-button"
                  onClick={() => setAiModalOpen(true)}
                >
                  <img
                    src="/assets/images/beranda/logo_aiplo.png"
                    alt="AI Bot EksploTrip"
                    className="ai-logo"
                  />
                </button>
              </>
            )}

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Buka menu navigasi mobile"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <Link
            href="/"
            className={currentTab === 'beranda' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Beranda</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <Link
            href="/eksplorasi"
            className={currentTab === 'eksplorasi' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Eksplorasi Destinasi</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <Link
            href="/bantuan-darurat"
            className={currentTab === 'bantuan' ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Bantuan Darurat</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>
      </header>

      {aiModalOpen && (
        <div
          className="eksplo-modal-overlay"
          onClick={() => setAiModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="aiplo-modal-title"
        >
          <div
            className="eksplo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eksplo-modal-header">
              <h3 id="aiplo-modal-title">
                <img
                  src="/assets/images/beranda/logo_aiplo.png"
                  alt="AIplo"
                  style={{ width: 24, height: 24 }}
                />
                Asisten AI EksploTrip (AIplo)
              </h3>
              <button
                type="button"
                className="eksplo-modal-close"
                onClick={() => setAiModalOpen(false)}
                aria-label="Tutup modal AIplo"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="eksplo-modal-body">
              <p style={{ marginBottom: 12 }}>
                <strong>AIplo</strong> membantu kamu menemukan destinasi wisata
                alam di Bogor berdasarkan kondisi jalur, estimasi biaya, dan
                tingkat kesiapan perjalanan.
              </p>
              <p
                style={{
                  background: '#F4F4F4',
                  padding: '12px 16px',
                  borderRadius: 10,
                  borderLeft: '4px solid #568942',
                  fontSize: 13,
                }}
              >
                <strong>Status Pengembangan:</strong> Database saat ini berisi{' '}
                <strong>maksimal 3 data dummy</strong> untuk pengujian antarmuka
                sebelum data hasil survei lapangan resmi dimasukkan ke Supabase.
              </p>
              <div className="eksplo-modal-actions">
                <Link
                  href="/eksplorasi"
                  className="eksplo-modal-btn"
                  onClick={() => setAiModalOpen(false)}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    explore
                  </span>
                  Buka Eksplorasi Destinasi
                </Link>
                <Link
                  href="/bantuan-darurat"
                  className="eksplo-modal-btn secondary"
                  onClick={() => setAiModalOpen(false)}
                >
                  Panduan Bantuan Darurat
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
