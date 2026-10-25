'use client';

import React, { useState } from 'react';
import { Destination } from '@/types/destination';
import {
  DestinationCard,
  PlaceholderSlotCard,
} from '@/components/DestinationCard';
import { filterDestinationsList } from '@/lib/destinations';
import Footer from '@/components/Footer';

interface EksplorasiContentProps {
  destinations: Destination[];
  source?: 'supabase' | 'local_dummy';
  errorMessage?: string | null;
}

const ITEMS_PER_PAGE = 12;
const SLOT_TYPES: Array<'curug' | 'danau' | 'gunung'> = [
  'curug',
  'danau',
  'gunung',
];

export default function EksplorasiContent({
  destinations,
}: EksplorasiContentProps) {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isFiltered = selectedType !== 'all' || selectedCondition !== 'all';

  const filteredDestinations = filterDestinationsList(destinations, {
    type: selectedType,
    condition: selectedCondition,
  });

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handleSelectCondition = (condition: string) => {
    setSelectedCondition(condition);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedType('all');
    setSelectedCondition('all');
    setCurrentPage(1);
  };

  const totalRealPages = Math.max(
    1,
    Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE)
  );
  const totalPages = totalRealPages;

  const getPaginationNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [
        1,
        '...',
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSlice = filteredDestinations.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  );

  // Preserve 12-card grid layout on unfiltered view matching Figma
  const placeholderCount = !isFiltered
    ? Math.max(0, ITEMS_PER_PAGE - currentSlice.length)
    : 0;

  return (
    <div className="view-transition-wrapper">
      <main>
        {/* Hero Banner */}
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/eksplorasi_destinasi/banner_atas.png"
              alt="Pemandangan danau dan gunung di Bogor"
              className="hero-banner-img"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">eco</span>
              <span>Eksplorasi Destinasi</span>
            </div>
            <h1 className="hero-title">
              Eksplorasi Wisata
              <br />
              Keindahan Alam di Bogor
              <br />
              yang <strong>Aman &amp; Transparan</strong>
            </h1>
            <p className="hero-desc">
              Temukan berbagai destinasi wisata alam di Bogor, mulai dari curug,
              danau, hingga jalur bukit trekking. Pilih destinasi favoritmu dan
              nikmati perjalanan yang lebih aman, nyaman, dan terencana.
            </p>
          </div>
        </section>

        {/* Filter Destinasi */}
        <section className="filter-section">
          <div className="filter-container">
            <div
              className="filter-card"
              role="group"
              aria-labelledby="filter-type-title"
            >
              <div className="filter-title" id="filter-type-title">
                <span className="material-symbols-outlined">landscape</span>
                <span>Tipe Destinasi</span>
              </div>
              <div className="filter-buttons" id="type-filter-group">
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedType === 'all' ? 'active' : ''
                  }`}
                  data-type="all"
                  onClick={() => handleSelectType('all')}
                >
                  Semua
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedType === 'curug' ? 'active' : ''
                  }`}
                  data-type="curug"
                  onClick={() => handleSelectType('curug')}
                >
                  <span className="material-symbols-outlined">water_drop</span>
                  <span>Curug/Air Terjun</span>
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedType === 'danau' ? 'active' : ''
                  }`}
                  data-type="danau"
                  onClick={() => handleSelectType('danau')}
                >
                  <span className="material-symbols-outlined">waves</span>
                  <span>Situ/Danau</span>
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedType === 'gunung' ? 'active' : ''
                  }`}
                  data-type="gunung"
                  onClick={() => handleSelectType('gunung')}
                >
                  <span className="material-symbols-outlined">landscape</span>
                  <span>Gunung/Bukit</span>
                </button>
              </div>
            </div>

            <div
              className="filter-card"
              role="group"
              aria-labelledby="filter-condition-title"
            >
              <div className="filter-title" id="filter-condition-title">
                <span className="material-symbols-outlined">groups</span>
                <span>Kondisi &amp; Kebutuhan</span>
              </div>
              <div className="filter-buttons" id="condition-filter-group">
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedCondition === 'all' ? 'active' : ''
                  }`}
                  data-condition="all"
                  onClick={() => handleSelectCondition('all')}
                >
                  Semua
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedCondition === 'ramah-pemula' || selectedCondition === 'cocok-pemula' ? 'active' : ''
                  }`}
                  data-condition="pemula"
                  onClick={() => handleSelectCondition('ramah-pemula')}
                >
                  <span className="material-symbols-outlined">footprint</span>
                  <span>Ramah Pemula</span>
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedCondition === 'ramah-keluarga' ? 'active' : ''
                  }`}
                  data-condition="keluarga"
                  onClick={() => handleSelectCondition('ramah-keluarga')}
                >
                  <span className="material-symbols-outlined">
                    family_restroom
                  </span>
                  <span>Ramah Keluarga</span>
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedCondition === 'rute-ekstrem' ? 'active' : ''
                  }`}
                  data-condition="ekstrem"
                  onClick={() => handleSelectCondition('rute-ekstrem')}
                >
                  <span className="material-symbols-outlined">landscape</span>
                  <span>Rute Ekstrem</span>
                </button>
                <button
                  type="button"
                  className={`filter-btn ${
                    selectedCondition === 'dekat-parkiran' ? 'active' : ''
                  }`}
                  data-condition="parkir"
                  onClick={() => handleSelectCondition('dekat-parkiran')}
                >
                  <span className="material-symbols-outlined">
                    local_parking
                  </span>
                  <span>Dekat Parkiran</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Daftar Destinasi */}
        <section className="destinations-section" id="katalog-destinasi">
          <div className="destinations-header">
            <div className="destinations-title-group">
              <h2 className="destinations-title">
                Daftar Destinasi Wisata Alam di Bogor
              </h2>
              <p className="destinations-subtitle">
                Eksplorasi berbagai destinasi wisata alam terbaik dengan
                informasi lengkap dan terverifikasi.
              </p>
            </div>
          </div>

          {isFiltered && filteredDestinations.length === 0 ? (
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: 18,
                padding: '44px 32px',
                textAlign: 'center',
                boxShadow: 'var(--card-shadow)',
                marginBottom: 32,
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 44, color: '#568942', marginBottom: 10 }}
              >
                info
              </span>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#040811',
                  marginBottom: 8,
                }}
              >
                Belum Ada Destinasi Terverifikasi untuk Filter Kondisi Ini
              </h3>
              <p
                style={{
                  maxWidth: 520,
                  margin: '0 auto 20px auto',
                  color: '#444444',
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                Tidak ada destinasi yang cocok dengan kombinasi filter yang Anda
                pilih. Coba pilih kriteria lain atau reset filter untuk melihat
                semua destinasi.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="eksplo-modal-btn"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 18 }}
                >
                  restart_alt
                </span>
                Reset Filter Katalog
              </button>
            </div>
          ) : (
            <div className="cards-grid" id="destinations-grid">
              {currentSlice.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  destination={dest}
                  fromOrigin="eksplorasi"
                />
              ))}
              {Array.from({ length: placeholderCount }).map((_, idx) => {
                const slotNum =
                  (currentPage - 1) * ITEMS_PER_PAGE +
                  currentSlice.length +
                  idx +
                  1;
                return (
                  <PlaceholderSlotCard
                    key={`eksplorasi-slot-${slotNum}`}
                    slotNumber={slotNum}
                    categoryType={SLOT_TYPES[idx % SLOT_TYPES.length]}
                  />
                );
              })}
            </div>
          )}

          {/* Pagination */}
          <nav
            className="pagination-nav"
            aria-label="Navigasi halaman destinasi"
          >
            <div className="pagination-wrapper">
              <button
                type="button"
                className="pagi-btn pagi-prev"
                id="btn-prev"
                aria-label="Halaman sebelumnya"
                disabled={currentPage <= 1}
                aria-disabled={currentPage <= 1}
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage((p) => p - 1);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }
                }}
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <ul className="pagi-numbers" id="pagi-numbers">
                {getPaginationNumbers().map((item, idx) => {
                  if (item === '...') {
                    return (
                      <li key={`ellipsis-${idx}`} className="pagi-ellipsis">
                        <span>…</span>
                      </li>
                    );
                  }
                  const pageNum = Number(item);
                  return (
                    <li key={pageNum}>
                      <button
                        type="button"
                        className={`pagi-num ${
                          currentPage === pageNum ? 'active' : ''
                        }`}
                        data-page={pageNum}
                        aria-current={
                          currentPage === pageNum ? 'page' : undefined
                        }
                        onClick={() => {
                          setCurrentPage(pageNum);
                          window.scrollTo({ top: 320, behavior: 'smooth' });
                        }}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <button
                type="button"
                className="pagi-btn pagi-next"
                id="btn-next"
                aria-label="Halaman berikutnya"
                disabled={currentPage >= totalPages}
                aria-disabled={currentPage >= totalPages}
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage((p) => p + 1);
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }
                }}
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </nav>
        </section>

        {/* Banner Bawah */}
        <section className="banner-bottom-section">
          <div className="banner-bottom-wrapper">
            <img
              src="/assets/images/eksplorasi_destinasi/banner_bawah.png"
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
