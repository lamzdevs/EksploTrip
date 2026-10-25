'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import {
  formatBogorLocation,
  formatKondisiTag,
  getLiveCrowdStatus,
} from '@/lib/destinations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DetailKatalogContentProps {
  destination: Destination;
  allDestinations?: Destination[];
  fromOrigin?: string;
}

export default function DetailKatalogContent({
  destination,
  fromOrigin,
}: DetailKatalogContentProps) {
  const [resolvedFrom, setResolvedFrom] = useState<string | undefined>(fromOrigin);
  const [ticket1Qty, setTicket1Qty] = useState<number>(0);
  const [ticket2Qty, setTicket2Qty] = useState<number>(0);
  const [parkingMotorQty, setParkingMotorQty] = useState<number>(0);
  const [parkingMobilQty, setParkingMobilQty] = useState<number>(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (!resolvedFrom && typeof window !== 'undefined') {
      const sp = new URLSearchParams(window.location.search);
      const f = sp.get('from');
      if (f) {
        setResolvedFrom(f);
      } else if (document.referrer) {
        try {
          const refUrl = new URL(document.referrer);
          if (refUrl.origin === window.location.origin) {
            if (refUrl.pathname === '/' || refUrl.pathname === '/beranda.html') {
              setResolvedFrom('beranda');
            } else if (refUrl.pathname.startsWith('/search')) {
              setResolvedFrom('search');
            } else if (refUrl.pathname.startsWith('/eksplorasi')) {
              setResolvedFrom('eksplorasi');
            }
          }
        } catch {
          // ignore
        }
      }
    }
  }, [resolvedFrom]);

  const effectiveFrom = resolvedFrom || fromOrigin;
  const backHref =
    effectiveFrom === 'beranda'
      ? '/'
      : effectiveFrom === 'search'
      ? '/search'
      : '/eksplorasi';

  const isVerified =
    !destination.is_dummy && destination.status_verifikasi === 'terverifikasi';

  const hasVerifiedPricing =
    destination.harga_tiket !== null ||
    (isVerified && Boolean(destination.catatan_tiket?.toLowerCase().includes('tidak ada tiket')));

  // Tiket 1 (Tiket Masuk / Kunjungan / Trekking)
  const ticket1Title =
    destination.tiket_kunjungan !== undefined && destination.tiket_kunjungan !== null
      ? 'Tiket Kunjungan'
      : destination.tiket_trekking !== undefined && destination.tiket_trekking !== null
      ? 'Tiket Trekking'
      : 'Tiket Masuk';

  const ticket1Price =
    destination.tiket_kunjungan ?? destination.tiket_trekking ?? destination.harga_tiket ?? 0;

  // Tiket 2 (Tiket Berenang + Pelampung / Camping / Tambahan)
  const hasTicket2 =
    Boolean(destination.tiket_berenang_pelampung || destination.tiket_camping);

  const ticket2Title = destination.tiket_berenang_pelampung
    ? 'Tiket + Berenang + Pelampung'
    : destination.tiket_camping
    ? 'Tiket Camping'
    : 'Tiket Tambahan';

  const ticket2Price =
    destination.tiket_berenang_pelampung ?? destination.tiket_camping ?? 0;

  // Parkir Motor & Mobil
  const motorPrice = destination.harga_parkir_motor ?? 0;
  const mobilPrice =
    destination.harga_parkir_mobil ?? destination.harga_parkir_motor ?? 0;

  const totalEstimated =
    ticket1Qty * ticket1Price +
    ticket2Qty * ticket2Price +
    parkingMotorQty * motorPrice +
    parkingMobilQty * mobilPrice;

  const totalPersons = ticket1Qty + ticket2Qty;
  const totalVehicles = parkingMotorQty + parkingMobilQty;

  const liveCrowd = getLiveCrowdStatus(destination);
  const keramaianText = liveCrowd.level;
  const keramaianPercent = liveCrowd.percentage;
  const keramaianDash = liveCrowd.dashLength;
  const keramaianColor = liveCrowd.themeColor;

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
    {
      title: 'Mushola & Ibadah',
      desc: isVerified
        ? 'Kondisi mushola dan fasilitas ibadah telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Warung & Logistik',
      desc: isVerified
        ? 'Ketersediaan warung makan dan logistik telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
    {
      title: 'Spot Foto & Panorama',
      desc: isVerified
        ? 'Kondisi spot foto dan panorama alam telah diverifikasi.'
        : 'Belum tersedia — menunggu dokumentasi survei lapangan.',
    },
  ];

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="detail-back"
        backHref={backHref}
        backLabel="Kembali"
      />

      <main>
        {/* 1. Hero Banner Section */}
        <section className="hero-detail-section">
          <div className="hero-detail-bg">
            <img
              src={
                destination.foto_banner ||
                '/assets/visual/curug_cibulao/banner_curug_cibulao.png'
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
                    {formatKondisiTag(tag)}
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
              <div
                className="hero-meta-item"
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
              {(() => {
                const travelTime =
                  destination.waktu_tempuh && destination.waktu_tempuh.trim() !== '-'
                    ? destination.waktu_tempuh.trim()
                    : destination.waktu_tempuh_parkir && destination.waktu_tempuh_parkir.trim() !== '-'
                      ? destination.waktu_tempuh_parkir.trim()
                      : null;

                if (!travelTime) return null;

                return (
                  <div className="hero-meta-item">
                    <span className="material-symbols-outlined">hiking</span>
                    <span>{travelTime}</span>
                  </div>
                );
              })()}
              <a
                href={
                  destination.akun_instagram
                    ? `https://www.instagram.com/${destination.akun_instagram.replace('@', '')}/`
                    : "https://www.instagram.com/eksplotrip/?utm_source=ig_web_button_share_sheet"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hero-meta-item hero-meta-link"
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
                  {isVerified && destination.kondisi.length > 0
                    ? destination.kondisi.slice(0, 2).map(formatKondisiTag).join(' / ')
                    : 'Belum tersedia (Menunggu Survei)'}
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
                    'Terverifikasi Survei Lapangan'
                  ) : (
                    'Data Dummy (Belum Diverifikasi)'
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
                  {/* Box 1: Tiket Utama / Kunjungan / Trekking */}
                  <div
                    className="calc-item-box"
                    style={!hasTicket2 ? { gridColumn: '1 / -1' } : undefined}
                  >
                    <span className="calc-item-title">{ticket1Title}</span>
                    <span className="calc-item-price">
                      {hasVerifiedPricing
                        ? ticket1Price === 0
                          ? 'Gratis'
                          : `Rp. ${ticket1Price.toLocaleString('id-ID')}`
                        : 'Belum tersedia'}
                    </span>
                    <span className="calc-item-sub">
                      {hasVerifiedPricing
                        ? ticket1Price === 0
                          ? '(Tanpa Biaya Masuk)'
                          : '(Per Orang)'
                        : '(Menunggu Survei)'}
                    </span>

                    <div className="calc-stepper">
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-dec-ticket1"
                        aria-label={`Kurangi jumlah ${ticket1Title}`}
                        onClick={() =>
                          setTicket1Qty((prev) => Math.max(0, prev - 1))
                        }
                      >
                        &minus;
                      </button>
                      <input
                        type="number"
                        id="input-ticket1-qty"
                        className="step-input"
                        value={ticket1Qty}
                        min={0}
                        max={99}
                        onChange={(e) =>
                          setTicket1Qty(
                            Math.max(0, parseInt(e.target.value, 10) || 0)
                          )
                        }
                        aria-label={`Jumlah ${ticket1Title}`}
                      />
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-inc-ticket1"
                        aria-label={`Tambah jumlah ${ticket1Title}`}
                        onClick={() =>
                          setTicket1Qty((prev) => Math.min(99, prev + 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Box 2: Tiket Tambahan (Berenang + Pelampung / Camping jika ada) */}
                  {hasTicket2 && (
                    <div className="calc-item-box">
                      <span className="calc-item-title">{ticket2Title}</span>
                      <span className="calc-item-price">
                        Rp. {ticket2Price.toLocaleString('id-ID')}
                      </span>
                      <span className="calc-item-sub">(Per Orang)</span>

                      <div className="calc-stepper">
                        <button
                          type="button"
                          className="btn-step"
                          id="btn-dec-ticket2"
                          aria-label={`Kurangi jumlah ${ticket2Title}`}
                          onClick={() =>
                            setTicket2Qty((prev) => Math.max(0, prev - 1))
                          }
                        >
                          &minus;
                        </button>
                        <input
                          type="number"
                          id="input-ticket2-qty"
                          className="step-input"
                          value={ticket2Qty}
                          min={0}
                          max={99}
                          onChange={(e) =>
                            setTicket2Qty(
                              Math.max(0, parseInt(e.target.value, 10) || 0)
                            )
                          }
                          aria-label={`Jumlah ${ticket2Title}`}
                        />
                        <button
                          type="button"
                          className="btn-step"
                          id="btn-inc-ticket2"
                          aria-label={`Tambah jumlah ${ticket2Title}`}
                          onClick={() =>
                            setTicket2Qty((prev) => Math.min(99, prev + 1))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Box 3: Parkir Motor */}
                  <div className="calc-item-box">
                    <span className="calc-item-title">Parkir Motor</span>
                    <span className="calc-item-price">
                      {destination.harga_parkir_motor !== null
                        ? `Rp. ${motorPrice.toLocaleString('id-ID')}`
                        : 'Belum tersedia'}
                    </span>
                    <span className="calc-item-sub">
                      {destination.harga_parkir_motor !== null
                        ? '(Per Motor)'
                        : '(Menunggu Survei)'}
                    </span>

                    <div className="calc-stepper">
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-dec-motor"
                        aria-label="Kurangi jumlah motor"
                        onClick={() =>
                          setParkingMotorQty((prev) => Math.max(0, prev - 1))
                        }
                      >
                        &minus;
                      </button>
                      <input
                        type="number"
                        id="input-motor-qty"
                        className="step-input"
                        value={parkingMotorQty}
                        min={0}
                        max={99}
                        onChange={(e) =>
                          setParkingMotorQty(
                            Math.max(0, parseInt(e.target.value, 10) || 0)
                          )
                        }
                        aria-label="Jumlah kendaraan motor"
                      />
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-inc-motor"
                        aria-label="Tambah jumlah motor"
                        onClick={() =>
                          setParkingMotorQty((prev) => Math.min(99, prev + 1))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Box 4: Parkir Mobil */}
                  <div className="calc-item-box">
                    <span className="calc-item-title">Parkir Mobil</span>
                    <span className="calc-item-price">
                      {destination.harga_parkir_mobil !== null || destination.harga_parkir_motor !== null
                        ? `Rp. ${mobilPrice.toLocaleString('id-ID')}`
                        : 'Belum tersedia'}
                    </span>
                    <span className="calc-item-sub">
                      {destination.harga_parkir_mobil !== null || destination.harga_parkir_motor !== null
                        ? '(Per Mobil)'
                        : '(Menunggu Survei)'}
                    </span>

                    <div className="calc-stepper">
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-dec-mobil"
                        aria-label="Kurangi jumlah mobil"
                        onClick={() =>
                          setParkingMobilQty((prev) => Math.max(0, prev - 1))
                        }
                      >
                        &minus;
                      </button>
                      <input
                        type="number"
                        id="input-mobil-qty"
                        className="step-input"
                        value={parkingMobilQty}
                        min={0}
                        max={99}
                        onChange={(e) =>
                          setParkingMobilQty(
                            Math.max(0, parseInt(e.target.value, 10) || 0)
                          )
                        }
                        aria-label="Jumlah kendaraan mobil"
                      />
                      <button
                        type="button"
                        className="btn-step"
                        id="btn-inc-mobil"
                        aria-label="Tambah jumlah mobil"
                        onClick={() =>
                          setParkingMobilQty((prev) => Math.min(99, prev + 1))
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
                      Total Estimasi Biaya ({totalPersons} Orang, {totalVehicles} Kendaraan)
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
                    setTicket1Qty(0);
                    setTicket2Qty(0);
                    setParkingMotorQty(0);
                    setParkingMobilQty(0);
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
                  href={`/destinasi/${destination.slug}/visual${
                    effectiveFrom ? `?from=${effectiveFrom}` : ''
                  }`}
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
                  <Link
                    key={idx}
                    href={`/destinasi/${destination.slug}/visual${
                      effectiveFrom ? `?from=${effectiveFrom}` : ''
                    }`}
                    className="visual-card-item"
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
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
                  </Link>
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
              </div>

              {/* Map Container */}
              <div
                className="map-canvas-container"
                id="map-container"
              >
                {(() => {
                  const isMyMaps =
                    destination.google_maps_url &&
                    destination.google_maps_url.includes('/maps/d/');

                  const mapSrc =
                    isMyMaps && destination.google_maps_url
                      ? destination.google_maps_url
                        .replace('/viewer', '/embed')
                        .replace('/edit', '/embed')
                    : destination.koordinat_lat !== null &&
                      destination.koordinat_lng !== null
                    ? `https://maps.google.com/maps?q=${destination.koordinat_lat},${destination.koordinat_lng}&t=k&z=16&ie=UTF8&iwloc=B&output=embed`
                    : `https://maps.google.com/maps?q=${encodeURIComponent(
                        `${destination.nama_wisata} ${destination.kecamatan}`
                      )}&t=k&z=14&ie=UTF8&iwloc=B&output=embed`;

                  return (
                    <iframe
                      src={mapSrc}
                      className={`google-maps-iframe ${
                        isMyMaps ? 'is-mymaps' : ''
                      }`}
                      title={`Peta Rute & Jalur ${destination.nama_wisata}`}
                      loading="lazy"
                      allowFullScreen
                    />
                  );
                })()}

                {/* Floating Travel Time Pill on Map (Hanya tampil jika ada data estimasi waktu tempuh dan bukan '-') */}
                {(() => {
                  const travelTime =
                    destination.waktu_tempuh && destination.waktu_tempuh.trim() !== '-'
                      ? destination.waktu_tempuh.trim()
                      : destination.waktu_tempuh_parkir && destination.waktu_tempuh_parkir.trim() !== '-'
                        ? destination.waktu_tempuh_parkir.trim()
                        : null;

                  if (!travelTime) return null;

                  return (
                    <div className="map-time-pill">
                      <span className="material-symbols-outlined">hiking</span>
                      <span className="map-time-text">{travelTime}</span>
                    </div>
                  );
                })()}

                {/* Floating Direct Action Links on Bottom Right */}
                <div className="map-direct-links-group">
                  <a
                    href={
                      destination.google_maps_route_url ||
                      (destination.koordinat_lat && destination.koordinat_lng
                        ? `https://www.google.com/maps/dir/?api=1&destination=${destination.koordinat_lat},${destination.koordinat_lng}`
                        : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                            `${destination.nama_wisata} ${destination.kecamatan}`
                          )}`)
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-direct-link btn-route"
                    title="Buka petunjuk rute navigasi dari lokasi Anda"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    <span>Lihat Rute</span>
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>

                  <a
                    href={
                      destination.google_maps_url
                        ? destination.google_maps_url.replace('/embed', '/viewer')
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
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
                        gradientUnits="userSpaceOnUse"
                        x1="24"
                        y1="130"
                        x2="236"
                        y2="130"
                      >
                        <stop offset="0%" stopColor="#3E7B2F" />
                        <stop offset="25%" stopColor="#568942" />
                        <stop offset="50%" stopColor="#E5A110" />
                        <stop offset="78%" stopColor="#F97316" />
                        <stop offset="100%" stopColor="#DC2626" />
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
                      d="M 24 130 A 106 106 0 0 1 236 130"
                      fill="none"
                      stroke="url(#crowdGaugeGrad)"
                      strokeWidth="22"
                      strokeLinecap="round"
                      strokeDasharray={`${keramaianDash} 334`}
                      strokeDashoffset="0"
                      style={{
                        transition: 'stroke-dasharray 0.5s ease',
                      }}
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
                        color: keramaianColor,
                        fontVariationSettings: "'FILL' 1",
                        lineHeight: 1,
                        transition: 'color 0.4s ease',
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
                      {keramaianText}
                    </span>
                    <span
                      style={{
                        fontSize: 11.5,
                        color: '#444444',
                      }}
                    >
                      {keramaianPercent}
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
                    {(() => {
                      if (!destination.waktu_terbaik) {
                        return 'Belum tersedia (Menunggu Survei)';
                      }
                      const match = destination.waktu_terbaik.match(/^(.*?)\s*(\(.*?\))\s*$/);
                      if (match) {
                        return (
                          <>
                            <div>{match[1].trim()}</div>
                            <div className="best-time-hours">{match[2].trim()}</div>
                          </>
                        );
                      }
                      return destination.waktu_terbaik;
                    })()}
                  </div>
                  <div className="best-time-sub">
                    {destination.jam_ramai_weekend
                      ? `Jam ramai akhir pekan: ${destination.jam_ramai_weekend} WIB`
                      : 'Untuk menghindari antrean dan kepadatan pengunjung.'}
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
                    {destination.nomor_pengelola || destination.kontak_pic?.telepon || 'Belum tersedia'}
                  </span>
                  <button
                    type="button"
                    className={`btn-copy-contact ${
                      copiedKey === 'pic' ? 'copied' : ''
                    }`}
                    onClick={() =>
                      handleCopy(
                        'pic',
                        destination.nomor_pengelola || destination.kontak_pic?.telepon || 'Belum tersedia'
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
