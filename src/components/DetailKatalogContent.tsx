'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import { formatBogorLocation } from '@/lib/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DetailKatalogContentProps {
  destination: Destination;
  allDestinations?: Destination[];
}

export default function DetailKatalogContent({
  destination,
  allDestinations = [],
}: DetailKatalogContentProps) {
  const [ticketQty, setTicketQty] = useState<number>(1);
  const [parkingQty, setParkingQty] = useState<number>(1);
  const [showStaticMap, setShowStaticMap] = useState<boolean>(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const isVerified =
    !destination.is_dummy && destination.status_verifikasi === 'terverifikasi';

  const hasVerifiedPricing = destination.harga_tiket !== null;
  const ticketPrice = destination.harga_tiket ?? 0;
  const parkingPrice = destination.harga_parkir_motor ?? 0;
  const totalEstimated = ticketQty * ticketPrice + parkingQty * parkingPrice;

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Fallback
    }
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2000);
  };

  const handleDownloadOfflineMap = () => {
    const a = document.createElement('a');
    a.href =
      destination.peta_jalur_url ||
      '/assets/images/detail_katalog/peta_jalur_cibulao.png';
    a.download = `Peta_Jalur_${destination.slug}_EksploTrip.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formattedLocation = formatBogorLocation(destination.kecamatan);
  const shortKecamatan = formattedLocation.split(',')[0].trim();

  const visualSummaryItems = [
    {
      title: 'Akses Jalan',
      desc: isVerified
        ? 'Kondisi jalan menuju lokasi telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Area Parkir',
      desc: isVerified
        ? 'Area parkir kendaraan telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Fasilitas Sekitar',
      desc: isVerified
        ? 'Ketersediaan fasilitas umum telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Jalur Trekking',
      desc: isVerified
        ? 'Kondisi fisik jalur trekking telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Kondisi Spot Utama',
      desc: isVerified
        ? 'Kondisi spot utama wisata telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Toilet & Kamar Bilas',
      desc: isVerified
        ? 'Kondisi sanitasi dan kamar bilas telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
  ];

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="detail-back"
        backHref="/eksplorasi"
        backLabel="Kembali"
      />

      <main>
        {/* 1. Hero Banner Section */}
        <section className="hero-detail-section">
          <div className="hero-detail-bg">
            <img
              src={
                destination.foto_banner ||
                '/assets/images/detail_katalog/banner_atas.png'
              }
              alt={`${destination.nama_wisata} ${shortKecamatan}`}
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
                    {tag}
                  </span>
                ))
              ) : (
                <>
                  <span className="hero-tag-pill">Data Dummy Pengembangan</span>
                  <span className="hero-tag-pill">Kondisi: Belum Tersedia</span>
                  <span className="hero-tag-pill">Menunggu Survei</span>
                </>
              )}
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

            {allDestinations.length > 1 && (
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  marginTop: 14,
                }}
              >
                {allDestinations.map((item) => {
                  const active = item.slug === destination.slug;
                  return (
                    <Link
                      key={item.id}
                      href={`/destinasi/${item.slug}`}
                      style={{
                        padding: '4px 12px',
                        borderRadius: 999,
                        fontSize: 11.5,
                        fontWeight: 600,
                        backgroundColor: active
                          ? '#8ABC43'
                          : 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        border: '1px solid rgba(255, 255, 255, 0.35)',
                      }}
                    >
                      {item.nama_wisata}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Main Cards Layout */}
        <div className="detail-main-layout">
          {/* 2. Ringkasan Destinasi (Overview Strip) */}
          <section
            className="destination-overview-card"
            aria-label="Ringkasan Destinasi"
          >
            <div className="overview-item">
              <div className="overview-icon">
                <span className="material-symbols-outlined">
                  {destination.tipe_wisata === 'curug'
                    ? 'water_drop'
                    : destination.tipe_wisata === 'danau'
                    ? 'waves'
                    : 'landscape'}
                </span>
              </div>
              <div>
                <h2 className="overview-info-title">Tipe Destinasi</h2>
                <p className="overview-info-desc">
                  {destination.tipe_wisata === 'curug'
                    ? 'Curug / Air Terjun'
                    : destination.tipe_wisata === 'danau'
                    ? 'Situ / Danau'
                    : 'Gunung / Bukit'}
                </p>
              </div>
            </div>

            <div className="overview-divider" aria-hidden="true"></div>

            <div className="overview-item">
              <div className="overview-icon">
                <span className="material-symbols-outlined">hiking</span>
              </div>
              <div>
                <h2 className="overview-info-title">Kondisi Rute</h2>
                <p className="overview-info-desc">
                  {isVerified && destination.kondisi.length > 0 ? (
                    destination.kondisi.slice(0, 2).join(' / ')
                  ) : (
                    <>
                      Belum tersedia
                      <br />
                      (Menunggu Survei)
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="overview-divider" aria-hidden="true"></div>

            <div className="overview-item">
              <div className="overview-icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <div>
                <h2 className="overview-info-title">Status Verifikasi</h2>
                <p className="overview-info-desc">
                  {isVerified ? (
                    <>
                      Terverifikasi
                      <br />
                      Survei Lapangan
                    </>
                  ) : (
                    <>
                      Data Dummy
                      <br />
                      Belum Diverifikasi
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="overview-divider" aria-hidden="true"></div>

            <div className="overview-item">
              <div className="overview-icon">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <h2 className="overview-info-title">Nikmati Alamnya</h2>
                <p className="overview-info-desc">Hargai Aturannya</p>
              </div>
            </div>
          </section>

          {/* 3. Grid Row 1: Kalkulator Biaya & Katalog Visual */}
          <section className="grid-row-equal">
            {/* 3A. Kalkulator Biaya End-to-End */}
            <article className="calculator-card">
              <div className="card-section-header">
                <div className="header-left-group">
                  <div className="header-icon-box">
                    <span className="material-symbols-outlined">calculate</span>
                  </div>
                  <div>
                    <h2 className="card-title">Kalkulator Biaya End-to-End</h2>
                    <p className="card-subtitle">
                      Simulasikan total biaya perjalanan sebelum berangkat.
                    </p>
                  </div>
                </div>
              </div>

              <form
                id="cost-calculator-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="calc-stepper-row">
                  {/* Box Tiket Masuk */}
                  <div className="calc-item-box">
                    <span className="calc-item-title">Tiket Masuk</span>
                    <span className="calc-item-price">
                      {hasVerifiedPricing
                        ? `Rp. ${ticketPrice.toLocaleString('id-ID')}`
                        : 'Belum tersedia'}
                    </span>
                    <span className="calc-item-badge">
                      {hasVerifiedPricing ? 'Tarif Resmi' : 'Data Dummy'}
                    </span>
                    <span className="calc-item-sub">
                      {hasVerifiedPricing
                        ? '(Per Pengunjung)'
                        : '(Menunggu Survei)'}
                    </span>

                    <div className="calc-stepper">
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-dec-ticket"
                        aria-label="Kurangi jumlah tiket"
                        onClick={() =>
                          setTicketQty((prev) => Math.max(1, prev - 1))
                        }
                      >
                        &minus;
                      </button>
                      <input
                        type="number"
                        id="input-ticket-qty"
                        className="step-input"
                        value={ticketQty}
                        min={1}
                        max={99}
                        onChange={(e) =>
                          setTicketQty(
                            Math.max(1, parseInt(e.target.value, 10) || 1)
                          )
                        }
                        aria-label="Jumlah tiket pengunjung"
                      />
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-inc-ticket"
                        aria-label="Tambah jumlah tiket"
                        onClick={() =>
                          setTicketQty((prev) => Math.min(99, prev + 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Box Parkir */}
                  <div className="calc-item-box">
                    <span className="calc-item-title">Parkir</span>
                    <span className="calc-item-price">
                      {destination.harga_parkir_motor !== null
                        ? `Rp. ${parkingPrice.toLocaleString('id-ID')}`
                        : 'Belum tersedia'}
                    </span>
                    <span className="calc-item-sub">
                      {destination.harga_parkir_motor !== null
                        ? '(Area Parkir Resmi)'
                        : '(Menunggu Survei)'}
                    </span>

                    <div className="calc-stepper">
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-dec-parking"
                        aria-label="Kurangi jumlah kendaraan"
                        onClick={() =>
                          setParkingQty((prev) => Math.max(0, prev - 1))
                        }
                      >
                        &minus;
                      </button>
                      <input
                        type="number"
                        id="input-parking-qty"
                        className="step-input"
                        value={parkingQty}
                        min={0}
                        max={99}
                        onChange={(e) =>
                          setParkingQty(
                            Math.max(0, parseInt(e.target.value, 10) || 0)
                          )
                        }
                        aria-label="Jumlah kendaraan parkir"
                      />
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-inc-parking"
                        aria-label="Tambah jumlah kendaraan"
                        onClick={() =>
                          setParkingQty((prev) => Math.min(99, prev + 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Total Box */}
                <div className="calc-total-box">
                  <div className="calc-total-icon">
                    <span className="material-symbols-outlined">
                      receipt_long
                    </span>
                  </div>
                  <div>
                    <span className="calc-total-title">
                      Total Estimasi Biaya ({ticketQty} Tiket, {parkingQty}{' '}
                      Kendaraan)
                    </span>
                    <div className="calc-total-price" id="calc-total-display">
                      {hasVerifiedPricing
                        ? `Rp. ${totalEstimated.toLocaleString('id-ID')}`
                        : 'Belum tersedia (Menunggu Survei)'}
                    </div>
                  </div>
                </div>

                {/* Reset / Recalc Button */}
                <button
                  type="button"
                  className="btn-recalc"
                  id="btn-recalc"
                  onClick={() => {
                    setTicketQty(1);
                    setParkingQty(1);
                  }}
                >
                  <span className="material-symbols-outlined">restart_alt</span>
                  <span>Hitung Ulang</span>
                </button>
              </form>

              <div className="calc-disclaimer">
                <span className="material-symbols-outlined">info</span>
                <span>
                  {hasVerifiedPricing
                    ? 'Harga dapat berubah sewaktu-waktu sesuai kebijakan pengelola.'
                    : 'Harga tiket masuk & parkir resmi belum tersedia karena data ini masih berupa data dummy pengembangan.'}
                </span>
              </div>
            </article>

            {/* 3B. Katalog Visual */}
            <article className="visual-catalog-card">
              <div className="card-section-header">
                <div className="header-left-group">
                  <div className="header-icon-box">
                    <span className="material-symbols-outlined">grid_view</span>
                  </div>
                  <div>
                    <h2 className="card-title">Katalog Visual</h2>
                    <p className="card-subtitle">
                      Informasi kondisi lapangan secara jujur dan real di
                      lokasi.
                    </p>
                  </div>
                </div>

                <Link
                  href={`/destinasi/${destination.slug}/visual`}
                  className="btn-see-all-visual"
                >
                  <span>Lihat Semua Visual</span>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className="visual-items-grid">
                {visualSummaryItems.map((item, idx) => (
                  <div key={idx} className="visual-card-item">
                    <div className="visual-thumb-wrapper">
                      <img
                        src="/assets/images/detail_katalog/list_visual_katalog.png"
                        alt={`${item.title} ${destination.nama_wisata}`}
                        className="visual-thumb-img"
                      />
                    </div>
                    <div className="visual-item-info">
                      <h3 className="visual-item-title">{item.title}</h3>
                      <p className="visual-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          {/* 4. Grid Row 2: Peta Interaktif (Google Maps) & Indikator Keramaian */}
          <section className="grid-row-map-crowd" id="peta-jalur">
            {/* 4A. Peta Interaktif & Status Jalur */}
            <article className="interactive-map-card">
              <div className="card-section-header">
                <div className="header-left-group">
                  <div className="header-icon-box">
                    <span className="material-symbols-outlined">map</span>
                  </div>
                  <div>
                    <h2 className="card-title">
                      Peta Interaktif &amp; Status Jalur
                    </h2>
                    <p className="card-subtitle">
                      Navigasi rute resmi jika membutuhkan bantuan atau
                      informasi lebih lanjut.
                    </p>
                  </div>
                </div>

                <div className="map-header-actions">
                  <button
                    type="button"
                    className={`btn-map-action ${
                      showStaticMap ? 'teal' : 'outline'
                    }`}
                    id="btn-toggle-map"
                    onClick={() => setShowStaticMap((prev) => !prev)}
                    title="Ganti antara Google Maps & Peta Rute Resmi"
                  >
                    <span className="material-symbols-outlined">layers</span>
                    <span id="toggle-map-label">
                      {showStaticMap ? 'Google Maps' : 'Peta Rute'}
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn-map-action teal"
                    id="btn-download-map"
                    onClick={handleDownloadOfflineMap}
                    title="Unduh panduan rute offline"
                  >
                    <span className="material-symbols-outlined">download</span>
                    <span>Unduh Peta Offline</span>
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div
                className={`map-canvas-container ${
                  showStaticMap ? 'show-static' : ''
                }`}
                id="map-container"
              >
                {destination.koordinat_lat !== null &&
                destination.koordinat_lng !== null ? (
                  <iframe
                    src={`https://maps.google.com/maps?q=${destination.koordinat_lat},${destination.koordinat_lng}&t=k&z=16&ie=UTF8&iwloc=B&output=embed`}
                    className="google-maps-iframe"
                    title={`Google Maps ${destination.nama_wisata}`}
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      `${destination.nama_wisata} ${destination.kecamatan}`
                    )}&t=k&z=14&ie=UTF8&iwloc=B&output=embed`}
                    className="google-maps-iframe"
                    title={`Peta Area ${destination.nama_wisata}`}
                    loading="lazy"
                    allowFullScreen
                  />
                )}

                <img
                  src={
                    destination.peta_jalur_url ||
                    '/assets/images/detail_katalog/peta_jalur_cibulao.png'
                  }
                  alt={`Peta Jalur Rute ${destination.nama_wisata}`}
                  className="static-map-img"
                  id="static-map-img"
                />

                {/* Floating Official Legend Panel on Left */}
                <div className="map-legend-overlay">
                  <ul className="legend-list">
                    <li className="legend-item">
                      <span
                        className="legend-line-icon"
                        aria-hidden="true"
                      ></span>
                      <span>Rute resmi</span>
                    </li>
                    <li className="legend-item">
                      <span className="legend-p-box" aria-hidden="true">
                        P
                      </span>
                      <span>Parkir</span>
                    </li>
                    <li className="legend-item">
                      <span
                        className="legend-badge-icon"
                        style={{ color: '#E24438' }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          location_on
                        </span>
                      </span>
                      <span>{destination.nama_wisata}</span>
                    </li>
                    <li className="legend-item">
                      <span
                        className="legend-badge-icon"
                        style={{ color: '#0D6EFD' }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          directions_walk
                        </span>
                      </span>
                      <span>Pos registrasi</span>
                    </li>
                    <li className="legend-item">
                      <span
                        className="legend-badge-icon"
                        style={{ color: '#E6A700' }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 18,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          warning
                        </span>
                      </span>
                      <span>Titik licin (waspada)</span>
                    </li>
                    <li className="legend-divider" aria-hidden="true"></li>
                    <li className="legend-item">
                      <span
                        className="legend-badge-icon"
                        style={{ color: '#E24438' }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 16,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          report
                        </span>
                      </span>
                      <div>
                        <span>Titik pungli</span>
                        <small>(hanya di kotak petunjuk)</small>
                      </div>
                    </li>
                    <li className="legend-item">
                      <span
                        className="legend-badge-icon"
                        style={{ color: '#795548' }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{
                            fontSize: 16,
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          pets
                        </span>
                      </span>
                      <div>
                        <span>Hewan buas</span>
                        <small>(hanya di kotak petunjuk)</small>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Floating Travel Time Pill on Map */}
                <div className="map-time-pill">
                  <span className="material-symbols-outlined">hiking</span>
                  <div>
                    <div className="map-time-text">
                      {destination.waktu_tempuh_parkir || 'Belum tersedia'}
                    </div>
                    <div className="map-time-sub">
                      ({destination.jarak_trek || 'Menunggu Survei'})
                    </div>
                  </div>
                </div>

                {/* Direct Link to Google Maps */}
                <a
                  href={
                    destination.google_maps_url ||
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${destination.nama_wisata} ${destination.kecamatan}`
                    )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-direct-link"
                  title="Buka di aplikasi Google Maps"
                >
                  <span>Buka di Google Maps</span>
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </article>

            {/* 4B. Indikator Keramaian */}
            <article className="crowd-indicator-card">
              <div className="card-section-header">
                <div className="header-left-group">
                  <div className="header-icon-box">
                    <span className="material-symbols-outlined">bar_chart</span>
                  </div>
                  <div>
                    <h2 className="card-title">Indikator Keramaian</h2>
                    <p className="card-subtitle">
                      Update pantauan kepadatan pengunjung.
                    </p>
                  </div>
                </div>
              </div>

              <div className="crowd-gauge-box">
                <div
                  style={{
                    position: 'relative',
                    width: 260,
                    height: 145,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}
                >
                  <svg
                    viewBox="0 0 260 145"
                    width="260"
                    height="145"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="crowdGaugeGrad"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#568942" />
                        <stop offset="55%" stopColor="#8ABC43" />
                        <stop offset="100%" stopColor="#F1C40F" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 24 130 A 106 106 0 0 1 236 130"
                      fill="none"
                      stroke="#7A7A7A"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 24 130 A 106 106 0 0 1 82 36"
                      fill="none"
                      stroke="url(#crowdGaugeGrad)"
                      strokeWidth="22"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginBottom: 4,
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 42,
                        color: '#568942',
                        fontVariationSettings: "'FILL' 1",
                        lineHeight: 1,
                      }}
                    >
                      groups
                    </span>
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: '#040811',
                        marginTop: 2,
                      }}
                    >
                      {destination.tingkat_keramaian || 'Sedang'}
                    </span>
                    <span
                      style={{
                        fontSize: 11.5,
                        color: '#444444',
                      }}
                    >
                      16% - 79%
                    </span>
                  </div>
                </div>
              </div>

              <div className="best-time-box">
                <div className="best-time-icon">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <div className="best-time-label">
                    Waktu terbaik berkunjung
                  </div>
                  <div className="best-time-val">
                    {destination.waktu_terbaik ||
                      'Belum tersedia (Menunggu Survei)'}
                  </div>
                  <div className="best-time-sub">
                    Untuk menghindari antrean dan kepadatan pengunjung.
                  </div>
                </div>
              </div>
            </article>
          </section>

          {/* 5. Grid Row 3: Kontak PIC & Bantuan Darurat */}
          <section className="contact-section-card" id="kontak-pic">
            <div className="card-section-header">
              <div className="header-left-group">
                <div className="header-icon-box">
                  <span className="material-symbols-outlined">
                    contact_page
                  </span>
                </div>
                <div>
                  <h2 className="card-title">
                    Kontak PIC &amp; Bantuan Darurat
                  </h2>
                  <p className="card-subtitle">
                    Hubungi narahubung resmi jika membutuhkan bantuan atau
                    informasi lebih lanjut.
                  </p>
                </div>
              </div>
            </div>

            <div className="contacts-grid">
              {/* Contact 1: Pokdarwis */}
              <div className="contact-card-item">
                <div className="contact-header-row">
                  <div className="contact-icon-circle green">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h3 className="contact-info-title">
                      {destination.kontak_pic?.nama || 'Pokdarwis / Pengelola'}
                    </h3>
                    <p className="contact-info-role">Narahubung Resmi</p>
                  </div>
                </div>
                <div className="contact-footer-row">
                  <span className="contact-phone-num">
                    {destination.kontak_pic?.telepon || 'Belum tersedia'}
                  </span>
                  <button
                    type="button"
                    className={`btn-copy-contact ${
                      copiedKey === 'pic' ? 'copied' : ''
                    }`}
                    onClick={() =>
                      handleCopy(
                        'pic',
                        destination.kontak_pic?.telepon || 'Belum tersedia'
                      )
                    }
                    aria-label="Salin kontak Pokdarwis"
                  >
                    <span className="material-symbols-outlined">
                      {copiedKey === 'pic' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedKey === 'pic' ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              {/* Contact 2: Pos Ranger / SAR */}
              <div className="contact-card-item">
                <div className="contact-header-row">
                  <div className="contact-icon-circle red">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Pos Ranger / SAR</h3>
                    <p className="contact-info-role">PJLH / Perhutani</p>
                  </div>
                </div>
                <div className="contact-footer-row">
                  <span className="contact-phone-num">Nomor 115</span>
                  <button
                    type="button"
                    className={`btn-copy-contact ${
                      copiedKey === 'sar' ? 'copied' : ''
                    }`}
                    onClick={() => handleCopy('sar', '115')}
                    aria-label="Salin nomor SAR 115"
                  >
                    <span className="material-symbols-outlined">
                      {copiedKey === 'sar' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedKey === 'sar' ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              {/* Contact 3: Darurat 112 */}
              <div className="contact-card-item">
                <div className="contact-header-row">
                  <div className="contact-icon-circle orange">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      call
                    </span>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Darurat</h3>
                    <p className="contact-info-role">(Bebas Pulsa)</p>
                  </div>
                </div>
                <div className="contact-footer-row">
                  <span className="contact-phone-num">Nomor 112</span>
                  <button
                    type="button"
                    className={`btn-copy-contact ${
                      copiedKey === '112' ? 'copied' : ''
                    }`}
                    onClick={() => handleCopy('112', '112')}
                    aria-label="Salin nomor darurat 112"
                  >
                    <span className="material-symbols-outlined">
                      {copiedKey === '112' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedKey === '112' ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>

              {/* Contact 4: Pemandu Lokal */}
              <div className="contact-card-item">
                <div className="contact-header-row">
                  <div className="contact-icon-circle yellow">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                  </div>
                  <div>
                    <h3 className="contact-info-title">Pemandu Lokal</h3>
                    <p className="contact-info-role">Jasa Pemandu Wisata</p>
                  </div>
                </div>
                <div className="contact-footer-row">
                  <span className="contact-phone-num">Belum tersedia</span>
                  <button
                    type="button"
                    className={`btn-copy-contact ${
                      copiedKey === 'guide' ? 'copied' : ''
                    }`}
                    onClick={() => handleCopy('guide', 'Belum tersedia')}
                    aria-label="Salin kontak Pemandu Lokal"
                  >
                    <span className="material-symbols-outlined">
                      {copiedKey === 'guide' ? 'check' : 'content_copy'}
                    </span>
                    <span>{copiedKey === 'guide' ? 'Tersalin!' : 'Salin'}</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 6. Banner Bawah */}
        <section className="bottom-banner-section" aria-label="Banner Pemandangan">
          <img
            src="/assets/images/detail_katalog/banner_bawah.png"
            alt="Pemandangan pegunungan dan hutan pinus Bogor"
            className="bottom-banner-img"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
