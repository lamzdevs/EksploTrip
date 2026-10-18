'use client';

import React, { useMemo, useState } from 'react';
import { Destination } from '@/types/destination';
import { formatBogorLocation } from '@/lib/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DetailVisualContentProps {
  destination: Destination;
}

interface VisualCardData {
  id: number;
  type: 'photo' | 'video';
  cat: 'alam' | 'fasilitas' | 'aktivitas' | 'lainnya';
  title: string;
  badgeText: string;
  thumb: string;
}

const DEFAULT_20_VISUAL_SLOTS: VisualCardData[] = [
  { id: 1, type: 'photo', cat: 'alam', title: 'Slot Visual #1 - Spot Utama Alam (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 2, type: 'video', cat: 'alam', title: 'Slot Video #2 - Panorama Suasana Utama (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 3, type: 'photo', cat: 'alam', title: 'Slot Visual #3 - Kondisi Lingkungan Sekitar (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 4, type: 'video', cat: 'alam', title: 'Slot Video #4 - Dokumentasi Kondisi Alam (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 5, type: 'photo', cat: 'alam', title: 'Slot Visual #5 - Sudut Pandang Area Wisata (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 6, type: 'photo', cat: 'fasilitas', title: 'Slot Visual #6 - Area Istirahat Pengunjung (Menunggu Survei)', badgeText: 'Placeholder Fasilitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 7, type: 'video', cat: 'aktivitas', title: 'Slot Video #7 - Aktivitas Wisatawan (Menunggu Survei)', badgeText: 'Placeholder Aktivitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 8, type: 'photo', cat: 'alam', title: 'Slot Visual #8 - Kondisi Pagi Hari (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 9, type: 'video', cat: 'alam', title: 'Slot Video #9 - Suasana Hutan & Jalur (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 10, type: 'photo', cat: 'fasilitas', title: 'Slot Visual #10 - Plang Petunjuk & Keselamatan (Menunggu Survei)', badgeText: 'Placeholder Fasilitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 11, type: 'photo', cat: 'alam', title: 'Slot Visual #11 - Pepohonan Sekitar Kawasan (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 12, type: 'photo', cat: 'fasilitas', title: 'Slot Visual #12 - Fasilitas Pendukung (Menunggu Survei)', badgeText: 'Placeholder Fasilitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 13, type: 'photo', cat: 'alam', title: 'Slot Visual #13 - Lanskap Utama Destinasi (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 14, type: 'photo', cat: 'aktivitas', title: 'Slot Visual #14 - Jalur Trekking Menuju Lokasi (Menunggu Survei)', badgeText: 'Placeholder Aktivitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 15, type: 'photo', cat: 'fasilitas', title: 'Slot Visual #15 - Gazebo & Warung Sekitar (Menunggu Survei)', badgeText: 'Placeholder Fasilitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 16, type: 'video', cat: 'alam', title: 'Slot Video #16 - Lanskap Kawasan Wisata (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 17, type: 'video', cat: 'aktivitas', title: 'Slot Video #17 - Panduan Jalur Lapangan (Menunggu Survei)', badgeText: 'Placeholder Aktivitas', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 18, type: 'photo', cat: 'alam', title: 'Slot Visual #18 - Kondisi Alam Pegunungan (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 19, type: 'video', cat: 'alam', title: 'Slot Video #19 - Eksplorasi Jalur Wisata (Menunggu Survei)', badgeText: 'Placeholder Alam', thumb: '/assets/images/detail_visual/list_visual.png' },
  { id: 20, type: 'photo', cat: 'lainnya', title: 'Slot Visual #20 - Area Parkir & Pintu Masuk (Menunggu Survei)', badgeText: 'Placeholder Lainnya', thumb: '/assets/images/detail_visual/list_visual.png' },
];

export default function DetailVisualContent({
  destination,
}: DetailVisualContentProps) {
  const [activeMediaTab, setActiveMediaTab] = useState<'all' | 'video'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lightboxItem, setLightboxItem] = useState<VisualCardData | null>(null);

  const isVerified =
    !destination.is_dummy && destination.status_verifikasi === 'terverifikasi';

  const formattedLocation = formatBogorLocation(destination.kecamatan);
  const shortKecamatan = formattedLocation.split(',')[0].trim();

  const filteredItems = useMemo(() => {
    return DEFAULT_20_VISUAL_SLOTS.filter((item) => {
      const matchMedia =
        activeMediaTab === 'all' ? true : item.type === 'video';
      const matchCat =
        activeCategory === 'all' ? true : item.cat === activeCategory;
      return matchMedia && matchCat;
    });
  }, [activeMediaTab, activeCategory]);

  const photoCount = filteredItems.filter((i) => i.type === 'photo').length;
  const videoCount = filteredItems.filter((i) => i.type === 'video').length;

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="detail-back"
        backHref={`/destinasi/${destination.slug}`}
        backLabel="Kembali"
      />

      <main>
        {/* Hero Banner Section */}
        <section
          className="hero-detail-section"
          aria-label={`Informasi Utama ${destination.nama_wisata}`}
        >
          <div className="hero-detail-bg">
            <img
              src="/assets/images/detail_visual/banner_atas.png"
              alt={destination.nama_wisata}
              className="hero-detail-img"
            />
            <div className="hero-detail-overlay"></div>
          </div>

          <div className="hero-detail-content">
            <div className="hero-verified-badge">
              <span className="material-symbols-outlined">eco</span>
              <span>
                {isVerified
                  ? 'Destinasi Terverifikasi'
                  : 'Data Dummy (Belum Diverifikasi)'}
              </span>
            </div>

            <h1 className="hero-detail-title">
              {destination.nama_wisata},
              <span className="highlight-cisarua">{shortKecamatan}</span>
            </h1>

            <p className="hero-detail-desc">
              {destination.deskripsi || 'Belum tersedia'}
            </p>

            <div className="hero-tags-row">
              <span className="hero-tag-pill">Data Dummy Pengembangan</span>
              <span className="hero-tag-pill">Placeholder Visual</span>
              <span className="hero-tag-pill">Menunggu Survei</span>
            </div>

            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <span className="material-symbols-outlined">location_on</span>
                <span>{formattedLocation}</span>
              </div>
              <div className="hero-meta-item">
                <span className="material-symbols-outlined">landscape</span>
                <span>
                  {destination.ketinggian_mdpl !== null
                    ? `+ ${destination.ketinggian_mdpl} Mdpl`
                    : 'Ketinggian: Belum tersedia'}
                </span>
              </div>
              <div className="hero-meta-item">
                <span className="material-symbols-outlined">hiking</span>
                <span>
                  {destination.waktu_tempuh_parkir ||
                    'Waktu tempuh: Belum tersedia'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Cards Layout */}
        <div className="detail-main-layout">
          <section
            className="visual-catalog-main-card"
            aria-label="Katalog Visual Kondisi Nyata"
          >
            {/* Card Header */}
            <div className="card-section-header">
              <div className="header-left-group">
                <div className="header-icon-box">
                  <span className="material-symbols-outlined">grid_view</span>
                </div>
                <div>
                  <h2 className="card-title">Katalog Visual (Tanpa Filter)</h2>
                  <p className="card-subtitle">
                    Informasi kondisi lapangan secara jujur dan real di lokasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab & Filter Toolbar */}
            <div className="visual-filter-toolbar">
              <div className="media-type-tabs" role="tablist">
                <button
                  type="button"
                  className={`media-tab-btn ${
                    activeMediaTab === 'all' ? 'active' : ''
                  }`}
                  id="tab-foto"
                  role="tab"
                  aria-selected={activeMediaTab === 'all'}
                  onClick={() => {
                    setActiveMediaTab('all');
                    setCurrentPage(1);
                  }}
                >
                  <span className="material-symbols-outlined">photo_camera</span>
                  <span>Foto</span>
                </button>
                <button
                  type="button"
                  className={`media-tab-btn ${
                    activeMediaTab === 'video' ? 'active' : ''
                  }`}
                  id="tab-video"
                  role="tab"
                  aria-selected={activeMediaTab === 'video'}
                  onClick={() => {
                    setActiveMediaTab('video');
                    setCurrentPage(1);
                  }}
                >
                  <span className="material-symbols-outlined">
                    smart_display
                  </span>
                  <span>Video</span>
                </button>
              </div>

              <div
                className="category-pills-group"
                role="group"
                aria-label="Filter Kategori Visual"
              >
                {[
                  { key: 'all', label: 'Semua' },
                  { key: 'alam', label: 'Alam' },
                  { key: 'fasilitas', label: 'Fasilitas' },
                  { key: 'aktivitas', label: 'Aktivitas' },
                  { key: 'lainnya', label: 'Lainnya' },
                ].map((pill) => (
                  <button
                    key={pill.key}
                    type="button"
                    className={`cat-pill-btn ${
                      activeCategory === pill.key ? 'active' : ''
                    }`}
                    onClick={() => {
                      setActiveCategory(pill.key);
                      setCurrentPage(1);
                    }}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Items Grid (4 Cols x 5 Rows = 20 Items) */}
            <div className="visual-grid-container" id="visual-grid-container">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="visual-item-card"
                  data-type={item.type}
                  data-cat={item.cat}
                  data-title={item.title}
                  tabIndex={0}
                  onClick={() => setLightboxItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxItem(item);
                    }
                  }}
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="visual-card-thumb"
                  />
                  {item.type === 'video' && (
                    <div className="video-play-indicator">
                      <span className="material-symbols-outlined">
                        play_arrow
                      </span>
                    </div>
                  )}
                  <div className="visual-type-badge">
                    <span className="material-symbols-outlined">
                      {item.type === 'video' ? 'play_arrow' : 'image'}
                    </span>
                    <span>{item.badgeText}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Bar */}
            <div className="visual-pagination-bar">
              <div className="media-total-count">
                <span className="material-symbols-outlined media-count-icon">
                  image
                </span>
                <span className="media-count-text">
                  {photoCount} slot foto dan {videoCount} slot video (Placeholder
                  Pengembangan)
                </span>
              </div>

              <nav
                className="visual-pagination"
                aria-label="Navigasi Halaman Galeri"
              >
                <button
                  type="button"
                  className="btn-page-arrow prev-page"
                  aria-label="Halaman Sebelumnya"
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`btn-page-num ${
                      currentPage === num ? 'active' : ''
                    }`}
                    aria-current={currentPage === num ? 'page' : undefined}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  type="button"
                  className="btn-page-arrow next-page"
                  aria-label="Halaman Berikutnya"
                  disabled={currentPage >= 4}
                  onClick={() => setCurrentPage((p) => Math.min(4, p + 1))}
                >
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </nav>
            </div>
          </section>
        </div>

        {/* 3. Banner Bawah Section */}
        <section className="bottom-banner-section" aria-label="Banner Pemandangan">
          <img
            src="/assets/images/detail_visual/banner_bawah.png"
            alt="Pemandangan pegunungan dan hutan pinus Bogor"
            className="bottom-banner-img"
          />
        </section>
      </main>

      <Footer />

      {/* 5. LIGHTBOX MODAL PREVIEW */}
      <div
        className={`lightbox-modal ${lightboxItem ? 'active' : ''}`}
        id="lightbox-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        onClick={() => setLightboxItem(null)}
      >
        {lightboxItem && (
          <div
            className="lightbox-content-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close-lightbox"
              id="btn-close-lightbox"
              aria-label="Tutup Preview"
              onClick={() => setLightboxItem(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="lightbox-media-wrapper">
              <img
                src={lightboxItem.thumb}
                alt={lightboxItem.title}
                id="lightbox-img"
              />
            </div>
            <div className="lightbox-info-bar">
              <div>
                <h3 className="lightbox-title" id="lightbox-title">
                  {lightboxItem.title}
                </h3>
                <p className="lightbox-subtitle" id="lightbox-subtitle">
                  Placeholder Visual Pengembangan — Dokumentasi asli akan
                  ditampilkan setelah survei lapangan selesai
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
