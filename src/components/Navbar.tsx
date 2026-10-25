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
  onTabChange?: (tab: 'beranda' | 'eksplorasi' | 'bantuan') => void;
}

export default function Navbar({
  variant = 'main',
  backHref = '/eksplorasi',
  backLabel = 'Kembali',
  initialSearchQuery = '',
  activeMainTab,
  onTabChange,
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
  const [isIndicatorReady, setIsIndicatorReady] = useState(false);
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

  const [overrideTab, setOverrideTab] = useState<
    'beranda' | 'eksplorasi' | 'bantuan' | null
  >(null);

  useEffect(() => {
    setOverrideTab(null);
  }, [pathname, activeMainTab]);

  const currentTab: 'beranda' | 'eksplorasi' | 'bantuan' =
    overrideTab ??
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
      setIsIndicatorReady(true);
    };

    updateIndicator();
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateIndicator);
    }
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [variant, currentTab, pathname]);

  const handleMenuClick = (
    e: React.MouseEvent,
    tab: 'beranda' | 'eksplorasi' | 'bantuan'
  ) => {
    if (onTabChange) {
      e.preventDefault();
      onTabChange(tab);
    }
  };

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      typeof window !== 'undefined' &&
      window.history.length > 1 &&
      document.referrer &&
      document.referrer.includes(window.location.host)
    ) {
      try {
        const refUrl = new URL(document.referrer);
        // Jika sebelumnya dari bantuan-darurat tetapi tujuan kembali adalah eksplorasi,
        // navigasi langsung ke backHref agar tidak mental kembali ke halaman bantuan darurat
        if (
          refUrl.pathname.startsWith('/bantuan-darurat') &&
          backHref.startsWith('/eksplorasi')
        ) {
          e.preventDefault();
          router.push(backHref);
          return;
        }
      } catch {
        // ignore URL parse errors
      }
      e.preventDefault();
      router.back();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = searchValue.trim();

    // Sesuai preferensi user:
    // Jika mencari dari halaman bantuan darurat, garis navbar langsung dialihkan ke eksplorasi
    // Jika dari beranda tetap beranda, jika dari eksplorasi tetap eksplorasi
    const fromTab: 'beranda' | 'eksplorasi' =
      currentTab === 'beranda' ? 'beranda' : 'eksplorasi';

    if (currentTab === 'bantuan') {
      setOverrideTab('eksplorasi');
      if (onTabChange) {
        onTabChange('eksplorasi');
      }
    }

    if (!trimmed) {
      if (currentTab === 'bantuan') {
        if (!onTabChange) {
          router.push('/eksplorasi');
        }
      } else if (currentTab === 'beranda') {
        if (!onTabChange) {
          router.push('/');
        }
      } else {
        if (!onTabChange) {
          router.push('/eksplorasi');
        }
      }
      return;
    }

    router.push(`/search?q=${encodeURIComponent(trimmed)}&from=${fromTab}`);
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
            onClick={handleBackClick}
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
            <ul className="nav-links has-indicator" ref={navLinksRef}>
              <li
                ref={berandaRef}
                className={`nav-item ${currentTab === 'beranda' ? 'active' : ''}`}
                id="nav-item-beranda"
              >
                <Link
                  href="/"
                  aria-current={currentTab === 'beranda' ? 'page' : undefined}
                  onClick={(e) => handleMenuClick(e, 'beranda')}
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
                  onClick={(e) => handleMenuClick(e, 'eksplorasi')}
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
                  onClick={(e) => handleMenuClick(e, 'bantuan')}
                >
                  Bantuan Darurat
                </Link>
              </li>
              <li
                className="nav-indicator"
                aria-hidden="true"
                style={{
                  transform: `translate3d(${indicatorStyle.left}px, 0, 0)`,
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity,
                  transition: isIndicatorReady
                    ? 'transform 0.42s cubic-bezier(0.25, 1, 0.35, 1), width 0.42s cubic-bezier(0.25, 1, 0.35, 1), opacity 0.25s ease'
                    : 'none',
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
                onClick={handleBackClick}
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
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleMenuClick(e, 'beranda');
            }}
          >
            <span>Beranda</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <Link
            href="/eksplorasi"
            className={currentTab === 'eksplorasi' ? 'active' : ''}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleMenuClick(e, 'eksplorasi');
            }}
          >
            <span>Eksplorasi Destinasi</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
          <Link
            href="/bantuan-darurat"
            className={currentTab === 'bantuan' ? 'active' : ''}
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleMenuClick(e, 'bantuan');
            }}
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
