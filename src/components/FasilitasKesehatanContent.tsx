'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export type FacilityCategory = 'rs' | 'puskesmas' | 'klinik' | 'apotek';

export interface HealthcareFacility {
  id: string;
  name: string;
  category: FacilityCategory;
  categoryLabel: string;
  distanceKm: number;
  distanceText: string;
  hours: string;
  is24Hours: boolean;
  address: string;
  phone: string;
  phoneDisplay: string;
  district: string;
  mapCoords: { x: number; y: number }; // Percentage 0-100 on SVG map
  gmapsUrl: string;
}

const DISTRICT_OPTIONS = [
  'Kecamatan Cisarua, Bogor',
  'Kecamatan Megamendung, Bogor',
  'Kecamatan Ciawi, Bogor',
  'Kecamatan Sukamakmur, Bogor',
  'Kecamatan Babakan Madang, Bogor',
  'Kecamatan Tamansari, Bogor',
  'Kecamatan Pamijahan, Bogor',
];

const INITIAL_FACILITIES: HealthcareFacility[] = [
  {
    id: 'faskes-1',
    name: 'RSUD Ciawi',
    category: 'rs',
    categoryLabel: 'Rumah Sakit',
    distanceKm: 2.3,
    distanceText: '2,3 km',
    hours: 'Buka 24 jam',
    is24Hours: true,
    address: 'Jl. Raya Puncak No. 345, Ciawi, Kab. Bogor',
    phone: 'tel:02518240797',
    phoneDisplay: '(0251) 8240797',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 23, y: 35 },
    gmapsUrl: 'https://maps.google.com/?q=RSUD+Ciawi+Bogor',
  },
  {
    id: 'faskes-2',
    name: 'Puskesmas Cisarua',
    category: 'puskesmas',
    categoryLabel: 'Puskesmas',
    distanceKm: 3.1,
    distanceText: '3,1 km',
    hours: '07.00 - 14.00',
    is24Hours: false,
    address: 'Jl. Raya Cisarua No. 12, Cisarua, Kab. Bogor',
    phone: 'tel:02518254215',
    phoneDisplay: '(0251) 8254215',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 42, y: 22 },
    gmapsUrl: 'https://maps.google.com/?q=Puskesmas+Cisarua+Bogor',
  },
  {
    id: 'faskes-3',
    name: 'Klinik Sehat Bersama',
    category: 'klinik',
    categoryLabel: 'Klinik',
    distanceKm: 1.8,
    distanceText: '1,8 km',
    hours: '08.00 - 21.00',
    is24Hours: false,
    address: 'Jl. Raya Puncak KM 78, Cisarua, Kab. Bogor',
    phone: 'tel:02518257000',
    phoneDisplay: '(0251) 8257000',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 50, y: 40 },
    gmapsUrl: 'https://maps.google.com/?q=Klinik+Cisarua+Bogor',
  },
  {
    id: 'faskes-4',
    name: 'Apotek Kimia Farma',
    category: 'apotek',
    categoryLabel: 'Apotek',
    distanceKm: 2.6,
    distanceText: '2,6 km',
    hours: '07.00 - 22.00',
    is24Hours: false,
    address: 'Jl. Raya Ciawi No. 101, Ciawi, Kab. Bogor',
    phone: 'tel:02518241234',
    phoneDisplay: '(0251) 8241234',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 79, y: 56 },
    gmapsUrl: 'https://maps.google.com/?q=Apotek+Kimia+Farma+Ciawi+Bogor',
  },
  {
    id: 'faskes-5',
    name: 'RS Paru Dr. M. Goenawan',
    category: 'rs',
    categoryLabel: 'Rumah Sakit',
    distanceKm: 5.4,
    distanceText: '5,4 km',
    hours: 'Buka 24 jam',
    is24Hours: true,
    address: 'Jl. Raya Puncak KM 83, Cisarua, Kab. Bogor',
    phone: 'tel:02518253630',
    phoneDisplay: '(0251) 8253630',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 48, y: 78 },
    gmapsUrl: 'https://maps.google.com/?q=RSPG+Cisarua+Bogor',
  },
  {
    id: 'faskes-6',
    name: 'Puskesmas Megamendung',
    category: 'puskesmas',
    categoryLabel: 'Puskesmas',
    distanceKm: 6.2,
    distanceText: '6,2 km',
    hours: '07.00 - 14.00',
    is24Hours: false,
    address: 'Jl. Raya Megamendung No. 56, Megamendung, Kab. Bogor',
    phone: 'tel:02518256110',
    phoneDisplay: '(0251) 8256110',
    district: 'Kecamatan Cisarua, Bogor',
    mapCoords: { x: 70, y: 32 },
    gmapsUrl: 'https://maps.google.com/?q=Puskesmas+Megamendung+Bogor',
  },
];

export default function FasilitasKesehatanContent() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>(
    DISTRICT_OPTIONS[0]
  );
  // Default checked: all categories checked so user sees everything, or customizable
  const [selectedCategories, setSelectedCategories] = useState<FacilityCategory[]>([
    'rs',
    'puskesmas',
    'klinik',
    'apotek',
  ]);
  const [sortBy, setSortBy] = useState<'terdekat' | '24jam' | 'nama'>('terdekat');
  const [activeFacilityId, setActiveFacilityId] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isLocating, setIsLocating] = useState<boolean>(false);
  const [locatingFeedback, setLocatingFeedback] = useState<string | null>(null);

  // Toggle Category Checkbox
  const handleToggleCategory = (cat: FacilityCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cat)) {
        // If it's the last one, don't uncheck all or allow empty
        if (prev.length === 1) return prev;
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  };

  // GPS Locate Action
  const handleUseGPS = () => {
    if (!navigator.geolocation) {
      setLocatingFeedback('Browser tidak mendukung geolokasi');
      setTimeout(() => setLocatingFeedback(null), 3000);
      return;
    }
    setIsLocating(true);
    setLocatingFeedback('Mencari titik koordinat GPS...');
    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLocating(false);
        setLocatingFeedback('Lokasi terdeteksi di sekitar Cisarua, Bogor');
        setSelectedDistrict(DISTRICT_OPTIONS[0]);
        setTimeout(() => setLocatingFeedback(null), 3500);
      },
      () => {
        setIsLocating(false);
        setLocatingFeedback('Menggunakan estimasi: Cisarua, Bogor');
        setSelectedDistrict(DISTRICT_OPTIONS[0]);
        setTimeout(() => setLocatingFeedback(null), 3500);
      },
      { timeout: 5000 }
    );
  };

  // Filtered and Sorted Facilities
  const filteredFacilities = useMemo(() => {
    const result = INITIAL_FACILITIES.filter((f) =>
      selectedCategories.includes(f.category)
    );

    if (sortBy === 'terdekat') {
      result.sort((a, b) => a.distanceKm - b.distanceKm);
    } else if (sortBy === '24jam') {
      result.sort((a, b) => (b.is24Hours ? 1 : 0) - (a.is24Hours ? 1 : 0));
    } else if (sortBy === 'nama') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategories, sortBy]);

  // Zoom Map controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 1.8));
  };
  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.8));
  };

  // Category Icon & Color Helper
  const getCategoryMeta = (cat: FacilityCategory) => {
    switch (cat) {
      case 'rs':
        return {
          bg: '#EF4444',
          badgeText: '#DC2626',
          badgeBg: '#FEF2F2',
          icon: 'local_hospital',
          label: 'Rumah Sakit',
        };
      case 'puskesmas':
        return {
          bg: '#10B981',
          badgeText: '#059669',
          badgeBg: '#ECFDF5',
          icon: 'add_box',
          label: 'Puskesmas',
        };
      case 'klinik':
        return {
          bg: '#3B82F6',
          badgeText: '#2563EB',
          badgeBg: '#EFF6FF',
          icon: 'local_pharmacy',
          label: 'Klinik',
        };
      case 'apotek':
        return {
          bg: '#8B5CF6',
          badgeText: '#7C3AED',
          badgeBg: '#F5F3FF',
          icon: 'medication',
          label: 'Apotek',
        };
    }
  };

  return (
    <div className="view-transition-wrapper">
      {/* Navbar: Variant main with Bantuan Darurat active */}
      <Navbar variant="main" activeMainTab="bantuan" />

      <main className="faskes-page-main">
        {/* 1. Hero Banner */}
        <section className="hero-section" aria-label="Banner Bantuan Darurat">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/bantuan_darurat/banner_atas.png"
              alt="Pemandangan danau dan bukit pegunungan Bogor"
              className="hero-banner-img"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-badge faskes-hero-badge">
              <span className="material-symbols-outlined">health_and_safety</span>
              <span>Bantuan Darurat</span>
            </div>
            <h1 className="hero-title">
              Jangan Panik, Kami
              <br />
              Siap <strong className="hero-highlight-green">Membantu.</strong>
            </h1>
            <p className="hero-desc">
              Jika kamu mengalami kendala darurat, memerlukan pertolongan, atau
              membutuhkan informasi penting selama perjalanan, segera hubungi
              nomor darurat berikut.
            </p>
          </div>
        </section>

        {/* 2. Main Content Wrapper */}
        <div className="faskes-container">
          {/* Breadcrumb Navigation Link */}
          <div className="faskes-breadcrumb-bar">
            <Link href="/bantuan-darurat" className="faskes-back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Kembali ke Bantuan Darurat</span>
            </Link>
          </div>

          {/* Section Header: Shield Icon + Title */}
          <div className="faskes-header-banner">
            <div className="faskes-shield-icon-box" aria-hidden="true">
              <svg
                width="34"
                height="38"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L0 4.5V13.5C0 21.2 5.1 28.3 12 30C18.9 28.3 24 21.2 24 13.5V4.5L12 0Z"
                  fill="#2E7D32"
                />
                <rect x="10.5" y="8" width="3" height="12" rx="1" fill="white" />
                <rect x="6" y="12.5" width="12" height="3" rx="1" fill="white" />
              </svg>
            </div>
            <div className="faskes-header-text">
              <h2 className="faskes-title">Fasilitas Kesehatan Terdekat</h2>
              <p className="faskes-subtitle">
                Temukan rumah sakit, puskesmas, atau klinik terdekat dari lokasi
                kamu. Pastikan kesehatan dan keselamatan selama perjalanan.
              </p>
            </div>
          </div>

          {/* 3. Two-Column Layout: Sidebar + Main Area */}
          <div className="faskes-layout-grid">
            {/* === LEFT SIDEBAR === */}
            <aside className="faskes-sidebar">
              {/* Card 1: Lokasi Kamu Saat Ini */}
              <div className="faskes-card-sidebar">
                <div className="faskes-sidebar-title-row">
                  <span className="material-symbols-outlined icon-sidebar-green">
                    location_on
                  </span>
                  <h3 className="faskes-sidebar-heading">Lokasi Kamu Saat Ini</h3>
                </div>

                <div className="faskes-location-input-box">
                  <select
                    className="faskes-select-district"
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    aria-label="Pilih Kecamatan Lokasi Kamu"
                  >
                    {DISTRICT_OPTIONS.map((dist, idx) => (
                      <option key={idx} value={dist}>
                        {dist}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    className={`btn-gps-locate ${isLocating ? 'locating' : ''}`}
                    onClick={handleUseGPS}
                    title="Deteksi Lokasi GPS"
                    aria-label="Deteksi Lokasi GPS"
                  >
                    <span className="material-symbols-outlined">my_location</span>
                  </button>
                </div>

                {locatingFeedback && (
                  <p className="faskes-feedback-text">{locatingFeedback}</p>
                )}
              </div>

              {/* Card 2: Jenis Fasilitas (Checkboxes) */}
              <div className="faskes-card-sidebar">
                <div className="faskes-sidebar-title-row">
                  <span className="material-symbols-outlined icon-sidebar-green">
                    health_and_safety
                  </span>
                  <h3 className="faskes-sidebar-heading">Jenis Fasilitas</h3>
                </div>

                <div className="faskes-category-list">
                  {/* Rumah Sakit */}
                  <label className="faskes-checkbox-row">
                    <div className="category-label-group">
                      <div className="category-icon-square icon-rs">
                        <span className="material-symbols-outlined">
                          local_hospital
                        </span>
                      </div>
                      <span className="category-name">Rumah Sakit</span>
                    </div>
                    <input
                      type="checkbox"
                      className="faskes-checkbox-input"
                      checked={selectedCategories.includes('rs')}
                      onChange={() => handleToggleCategory('rs')}
                    />
                    <span className="custom-checkbox-mark"></span>
                  </label>

                  {/* Puskesmas */}
                  <label className="faskes-checkbox-row">
                    <div className="category-label-group">
                      <div className="category-icon-square icon-puskesmas">
                        <span className="material-symbols-outlined">add_box</span>
                      </div>
                      <span className="category-name">Puskesmas</span>
                    </div>
                    <input
                      type="checkbox"
                      className="faskes-checkbox-input"
                      checked={selectedCategories.includes('puskesmas')}
                      onChange={() => handleToggleCategory('puskesmas')}
                    />
                    <span className="custom-checkbox-mark"></span>
                  </label>

                  {/* Klinik */}
                  <label className="faskes-checkbox-row">
                    <div className="category-label-group">
                      <div className="category-icon-square icon-klinik">
                        <span className="material-symbols-outlined">
                          local_pharmacy
                        </span>
                      </div>
                      <span className="category-name">Klinik</span>
                    </div>
                    <input
                      type="checkbox"
                      className="faskes-checkbox-input"
                      checked={selectedCategories.includes('klinik')}
                      onChange={() => handleToggleCategory('klinik')}
                    />
                    <span className="custom-checkbox-mark"></span>
                  </label>

                  {/* Apotek */}
                  <label className="faskes-checkbox-row">
                    <div className="category-label-group">
                      <div className="category-icon-square icon-apotek">
                        <span className="material-symbols-outlined">
                          medication
                        </span>
                      </div>
                      <span className="category-name">Apotek</span>
                    </div>
                    <input
                      type="checkbox"
                      className="faskes-checkbox-input"
                      checked={selectedCategories.includes('apotek')}
                      onChange={() => handleToggleCategory('apotek')}
                    />
                    <span className="custom-checkbox-mark"></span>
                  </label>
                </div>
              </div>

              {/* Card 3: Tips */}
              <div className="faskes-card-sidebar faskes-card-tips">
                <div className="faskes-sidebar-title-row">
                  <span className="material-symbols-outlined icon-tips-yellow">
                    lightbulb
                  </span>
                  <h3 className="faskes-sidebar-heading">Tips</h3>
                </div>
                <p className="faskes-tips-text">
                  Simpan informasi kontak dan lokasi fasilitas kesehatan sebelum
                  berangkat, agar lebih mudah saat dibutuhkan.
                </p>
              </div>
            </aside>

            {/* === RIGHT MAIN CONTENT === */}
            <section className="faskes-main-content">
              {/* 3A. Interactive / Stylized Map Card */}
              <div className="faskes-map-card">
                {/* Map Overlay Header: "Lihat di Google Maps" */}
                <div className="map-top-bar">
                  <a
                    href={`https://www.google.com/maps/search/Fasilitas+Kesehatan+terdekat+di+${encodeURIComponent(
                      selectedDistrict
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-open-gmaps"
                  >
                    <span>Lihat di Google Maps</span>
                    <span className="material-symbols-outlined icon-external">
                      open_in_new
                    </span>
                  </a>
                </div>

                {/* Map Zoom Controls */}
                <div className="map-zoom-controls">
                  <button
                    type="button"
                    className="btn-zoom"
                    onClick={handleZoomIn}
                    aria-label="Perbesar Peta"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                  <button
                    type="button"
                    className="btn-zoom"
                    onClick={handleZoomOut}
                    aria-label="Perkecil Peta"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                </div>

                {/* SVG Vector Map Rendering */}
                <div
                  className="map-viewport"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <svg
                    viewBox="0 0 800 380"
                    className="map-vector-svg"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    {/* Background Terrain */}
                    <rect width="800" height="380" fill="#E8F5E9" />

                    {/* Mountain Contours & Hills */}
                    <path
                      d="M-50,180 Q100,80 250,160 T550,120 T850,190 L850,380 L-50,380 Z"
                      fill="#D8EED8"
                      opacity="0.85"
                    />
                    <path
                      d="M-50,230 Q140,140 320,210 T620,180 T850,240 L850,380 L-50,380 Z"
                      fill="#C8E6C9"
                      opacity="0.75"
                    />
                    <path
                      d="M-50,290 Q180,220 380,270 T720,240 T850,290 L850,380 L-50,380 Z"
                      fill="#B6DFC0"
                      opacity="0.6"
                    />

                    {/* River Curves */}
                    <path
                      d="M-20,60 Q120,90 220,170 T480,260 T750,320"
                      fill="none"
                      stroke="#B3E5FC"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M320,20 Q360,110 440,180 T680,230"
                      fill="none"
                      stroke="#B3E5FC"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Road Network Lines */}
                    <path
                      d="M-20,240 Q150,200 350,210 T650,140 T820,100"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M180,390 Q280,250 490,190 T780,170"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeDasharray="6 3"
                    />
                    <path
                      d="M480,-10 Q490,140 500,200 T460,390"
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="4"
                    />
                  </svg>

                  {/* Pulsing "Lokasi Kamu" Beacon */}
                  <div
                    className="map-user-beacon"
                    style={{ left: '49%', top: '52%' }}
                  >
                    <div className="user-pulse-ring"></div>
                    <div className="user-pulse-dot"></div>
                    <div className="user-beacon-card">
                      <span className="beacon-blue-dot"></span>
                      <span>Lokasi kamu</span>
                    </div>
                  </div>

                  {/* Facility Pins on Map */}
                  {filteredFacilities.map((fac) => {
                    const meta = getCategoryMeta(fac.category);
                    const isActive = activeFacilityId === fac.id;
                    return (
                      <div
                        key={fac.id}
                        className={`map-facility-pin pin-${fac.category} ${
                          isActive ? 'active-pin' : ''
                        }`}
                        style={{
                          left: `${fac.mapCoords.x}%`,
                          top: `${fac.mapCoords.y}%`,
                        }}
                        onClick={() => {
                          setActiveFacilityId(fac.id);
                          const el = document.getElementById(fac.id);
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }}
                      >
                        <div
                          className="pin-circle"
                          style={{ backgroundColor: meta.bg }}
                        >
                          <span className="material-symbols-outlined">
                            {meta.icon}
                          </span>
                        </div>
                        {/* Tooltip on hover */}
                        <div className="pin-tooltip">
                          <strong>{fac.name}</strong>
                          <span>{fac.distanceText} • {fac.hours}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3B. Facilities Cards List Section */}
              <div className="faskes-cards-section">
                {/* List Header */}
                <div className="faskes-list-header-row">
                  <h3 className="faskes-list-heading">
                    Daftar Fasilitas Kesehatan Terdekat
                  </h3>
                  <div className="faskes-sort-container">
                    <span className="sort-label">Urutkan:</span>
                    <select
                      className="faskes-sort-select"
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(e.target.value as 'terdekat' | '24jam' | 'nama')
                      }
                      aria-label="Urutkan Fasilitas"
                    >
                      <option value="terdekat">Terdekat</option>
                      <option value="24jam">Buka 24 Jam</option>
                      <option value="nama">Nama A-Z</option>
                    </select>
                  </div>
                </div>

                {/* Cards Grid: 3 columns */}
                {filteredFacilities.length === 0 ? (
                  <div className="faskes-empty-state">
                    <span className="material-symbols-outlined empty-icon">
                      search_off
                    </span>
                    <p>Tidak ada fasilitas kesehatan dengan kategori terpilih.</p>
                    <button
                      type="button"
                      className="btn-reset-filter"
                      onClick={() =>
                        setSelectedCategories(['rs', 'puskesmas', 'klinik', 'apotek'])
                      }
                    >
                      Pilih Semua Kategori
                    </button>
                  </div>
                ) : (
                  <div className="faskes-grid-cards">
                    {filteredFacilities.map((fac) => {
                      const meta = getCategoryMeta(fac.category);
                      const isHighlighted = activeFacilityId === fac.id;
                      return (
                        <article
                          key={fac.id}
                          id={fac.id}
                          className={`faskes-item-card ${
                            isHighlighted ? 'highlighted-card' : ''
                          }`}
                          onMouseEnter={() => setActiveFacilityId(fac.id)}
                          onMouseLeave={() => setActiveFacilityId(null)}
                        >
                          {/* Top: Icon + Name + Badge + Arrow */}
                          <div className="faskes-card-header">
                            <div
                              className="faskes-card-type-icon"
                              style={{ backgroundColor: meta.bg }}
                            >
                              <span className="material-symbols-outlined">
                                {meta.icon}
                              </span>
                            </div>

                            <div className="faskes-card-title-group">
                              <h4 className="faskes-card-name">{fac.name}</h4>
                              <span
                                className="faskes-card-badge"
                                style={{
                                  color: meta.badgeText,
                                  backgroundColor: meta.badgeBg,
                                }}
                              >
                                {meta.label}
                              </span>
                            </div>

                            <a
                              href={fac.gmapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-card-arrow"
                              title="Buka Navigasi Rute"
                              aria-label={`Buka Navigasi rute ke ${fac.name}`}
                            >
                              <span className="material-symbols-outlined">
                                chevron_right
                              </span>
                            </a>
                          </div>

                          {/* Info Row: Distance + Hours */}
                          <div className="faskes-info-row">
                            <div className="info-item">
                              <span className="material-symbols-outlined info-icon">
                                location_on
                              </span>
                              <span>{fac.distanceText}</span>
                            </div>
                            <div className="info-item">
                              <span className="material-symbols-outlined info-icon">
                                schedule
                              </span>
                              <span>{fac.hours}</span>
                            </div>
                          </div>

                          {/* Address */}
                          <p className="faskes-card-address">{fac.address}</p>

                          {/* Action Button: Hubungi */}
                          <a href={fac.phone} className="btn-call-faskes">
                            <span className="material-symbols-outlined">call</span>
                            <span>Hubungi</span>
                          </a>
                        </article>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
