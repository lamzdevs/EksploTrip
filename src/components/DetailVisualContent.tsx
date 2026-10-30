'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Destination } from '@/types/destination';
import { formatBogorLocation, formatKondisiTag } from '@/lib/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DetailVisualContentProps {
  destination: Destination;
  fromOrigin?: string;
}

interface VisualCardData {
  id: number | string;
  type: 'photo' | 'video';
  cat: 'alam' | 'fasilitas' | 'aktivitas' | 'lainnya';
  title: string;
  badgeText: string;
  thumb: string;
  videoUrl?: string;
  desc?: string;
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
  fromOrigin,
}: DetailVisualContentProps) {
  const [resolvedFrom, setResolvedFrom] = useState<string | undefined>(fromOrigin);
  const [activeMediaTab, setActiveMediaTab] = useState<'all' | 'video'>('all');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lightboxItem, setLightboxItem] = useState<VisualCardData | null>(null);

  useEffect(() => {
    if (!resolvedFrom && typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const f = sp.get('from');
      if (f) setResolvedFrom(f);
    }
  }, [resolvedFrom]);

  const effectiveFrom = resolvedFrom || fromOrigin;
  const backHref = `/destinasi/${destination.slug}${
    effectiveFrom ? `?from=${effectiveFrom}` : ''
  }`;

  const isVerified =
    !destination.is_dummy && destination.status_verifikasi === 'terverifikasi';

  const formattedLocation = formatBogorLocation(destination.kecamatan);
  const shortKecamatan = formattedLocation.split(',')[0].trim();

  const isCustomGaleri = Boolean(
    destination.galeri_visual && destination.galeri_visual.length > 0
  );

  const allItems: VisualCardData[] = useMemo(() => {
    if (isCustomGaleri && destination.galeri_visual) {
      return destination.galeri_visual.map((item, idx) => {
        let cat: 'alam' | 'fasilitas' | 'aktivitas' | 'lainnya' = 'alam';
        if (item.kategori === 'fasilitas' || item.kategori === 'area-parkir') {
          cat = 'fasilitas';
        } else if (
          item.kategori === 'aktivitas' ||
          item.kategori === 'jalur-trekking'
        ) {
          cat = 'aktivitas';
        } else if (item.kategori === 'lainnya') {
          cat = 'lainnya';
        } else {
          cat = 'alam';
        }

        return {
          id: item.id || idx + 1,
          type: item.tipe_media === 'video' ? 'video' : 'photo',
          cat,
          title: item.judul,
          badgeText:
            item.judul ||
            item.badge_status ||
            item.kategori_label ||
            (item.tipe_media === 'video' ? 'Video Dokumentasi' : 'Foto Survei'),
          thumb: item.url_gambar,
          videoUrl:
            item.url_video ||
            (item.tipe_media === 'video' ? item.url_gambar : undefined),
          desc: item.deskripsi || item.keterangan_waktu || '',
        };
      });
    }
    return DEFAULT_20_VISUAL_SLOTS;
  }, [destination, isCustomGaleri]);

  const filteredItems = useMemo(() => {
    return allItems.filter((item) => {
      const matchMedia =
        activeMediaTab === 'all' ? true : item.type === 'video';
      const matchCat =
        activeCategory === 'all' ? true : item.cat === activeCategory;
      return matchMedia && matchCat;
    });
  }, [allItems, activeMediaTab, activeCategory]);

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / ITEMS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const start = (validCurrentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, validCurrentPage]);

  const photoCount = filteredItems.filter((i) => i.type === 'photo').length;
  const videoCount = filteredItems.filter((i) => i.type === 'video').length;

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="detail-back"
        backHref={backHref}
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
              src={
                destination.foto_banner ||
                '/assets/visual/curug_cibulao/banner_curug_cibulao.png'
              }
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
              {isVerified && destination.kondisi.length > 0 ? (
                destination.kondisi.map((tag, idx) => (
                  <span key={idx} className="hero-tag-pill">
                    {formatKondisiTag(tag)}
                  </span>
                ))
              ) : (
                <>
                  <span className="hero-tag-pill">Data Dummy Pengembangan</span>
                  <span className="hero-tag-pill">Placeholder Visual</span>
                  <span className="hero-tag-pill">Menunggu Survei</span>
                </>
              )}
            </div>

            <div className="hero-meta-row">
              <div className="hero-meta-item hero-meta-location">
                <span className="material-symbols-outlined">location_on</span>
                <span>{formattedLocation}</span>
              </div>
              <div
                className="hero-meta-item hero-meta-schedule"
                title={`Jam Operasional: ${destination.jam_buka_weekday || 'Belum tersedia'}`}
              >
                <span className="material-symbols-outlined">schedule</span>
                <span>
                  {destination.jam_buka_weekday
                    ? destination.jam_buka_weekday === destination.jam_buka_weekend ||
                      !destination.jam_buka_weekend
                      ? destination.jam_buka_weekday
                      : `${destination.jam_buka_weekday} (Wd) | ${destination.jam_buka_weekend} (We)`
                    : 'Operasional: Belum tersedia'}
                </span>
              </div>
              <div className="hero-meta-item hero-meta-altitude">
                <span className="material-symbols-outlined">landscape</span>
                <span>
                  {destination.ketinggian_mdpl !== null
                    ? `+ ${destination.ketinggian_mdpl} Mdpl`
                    : 'Ketinggian: Belum tersedia'}
                </span>
              </div>
              <div className="hero-meta-item hero-meta-distance">
                <span className="material-symbols-outlined">hiking</span>
                <span>
                  {destination.waktu_tempuh && destination.waktu_tempuh !== '-'
                    ? destination.waktu_tempuh
                    : destination.waktu_tempuh_parkir && destination.waktu_tempuh_parkir !== '-'
                      ? destination.waktu_tempuh_parkir
                      : 'Waktu tempuh: Belum tersedia'}
                </span>
              </div>
              <a
                href={
                  destination.akun_instagram
                    ? `https://www.instagram.com/${destination.akun_instagram.replace('@', '')}/`
                    : "https://www.instagram.com/eksplotrip/?utm_source=ig_web_button_share_sheet"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hero-meta-item hero-meta-link hero-meta-instagram"
                title={`Kunjungi Instagram ${destination.akun_instagram || '@eksplotrip'}`}
                aria-label={`Instagram ${destination.akun_instagram || '@eksplotrip'}`}
              >
                <i className="fa-brands fa-instagram"></i>
                <span>{destination.akun_instagram || '@eksplotrip'}</span>
              </a>
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

            {/* Visual Items Grid */}
            <div className="visual-grid-container" id="visual-grid-container">
              {paginatedItems.map((item) => (
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
                  {item.type === 'video' ? (
                    <video
                      src={item.videoUrl || item.thumb}
                      className="visual-card-thumb"
                      muted
                      playsInline
                      preload="metadata"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  ) : (
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="visual-card-thumb"
                      loading="lazy"
                    />
                  )}
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
                  {isCustomGaleri
                    ? `${photoCount} foto dan ${videoCount} video dokumentasi survei lapangan`
                    : `${photoCount} slot foto dan ${videoCount} slot video (Placeholder Pengembangan)`}
                </span>
              </div>

              {totalPages > 1 && (
                <nav
                  className="visual-pagination"
                  aria-label="Navigasi Halaman Galeri"
                >
                  <button
                    type="button"
                    className="btn-page-arrow prev-page"
                    aria-label="Halaman Sebelumnya"
                    disabled={validCurrentPage <= 1}
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1));
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                  >
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`btn-page-num ${
                        validCurrentPage === num ? 'active' : ''
                      }`}
                      aria-current={validCurrentPage === num ? 'page' : undefined}
                      onClick={() => {
                        setCurrentPage(num);
                        window.scrollTo({ top: 380, behavior: 'smooth' });
                      }}
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="btn-page-arrow next-page"
                    aria-label="Halaman Berikutnya"
                    disabled={validCurrentPage >= totalPages}
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1));
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </nav>
              )}
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
              {lightboxItem.type === 'video' ? (
                <video
                  src={lightboxItem.videoUrl || lightboxItem.thumb}
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{ maxHeight: '75vh', maxWidth: '100%', borderRadius: '12px' }}
                  onVolumeChange={(e) => {
                    e.currentTarget.muted = true;
                  }}
                />
              ) : (
                <img
                  src={lightboxItem.thumb}
                  alt={lightboxItem.title}
                  id="lightbox-img"
                />
              )}
            </div>
            <div className="lightbox-info-bar">
              <div>
                <h3 className="lightbox-title" id="lightbox-title">
                  {lightboxItem.title}
                </h3>
                <p className="lightbox-subtitle" id="lightbox-subtitle">
                  {lightboxItem.desc ||
                    (isVerified
                      ? 'Dokumentasi visual kondisi nyata lapangan resmi terverifikasi.'
                      : 'Placeholder Visual Pengembangan — Dokumentasi asli akan ditampilkan setelah survei lapangan selesai')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
