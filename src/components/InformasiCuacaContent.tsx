'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DayForecast {
  dayName: string;
  dateStr: string;
  iconType: 'cloud_sun' | 'rain' | 'sun';
  minTemp: number;
  maxTemp: number;
  weatherDesc: string;
  rainChance: number;
}

interface LocationWeather {
  district: string;
  currentTemp: number;
  feelsLike: number;
  condition: string;
  humidity: number;
  windSpeed: string;
  visibility: string;
  uvIndex: string;
  maxTemp: number;
  minTemp: number;
  rainfall: string;
  rainChance: number;
  skyCondition: string;
  warningText: string;
  forecast5Days: DayForecast[];
}

const WEATHER_BY_LOCATION: Record<string, LocationWeather> = {
  'Kabupaten Bogor': {
    district: 'Kabupaten Bogor',
    currentTemp: 28,
    feelsLike: 30,
    condition: 'Berawan',
    humidity: 78,
    windSpeed: '12 km/jam (Barat Daya)',
    visibility: '10 km',
    uvIndex: 'Rendah (2 dari 10)',
    maxTemp: 31,
    minTemp: 22,
    rainfall: '0.0 mm',
    rainChance: 10,
    skyCondition: 'Berawan',
    warningText: 'Tidak ada peringatan dini cuaca untuk wilayah Kabupaten Bogor saat ini.',
    forecast5Days: [
      {
        dayName: 'Sen',
        dateStr: '6 Okt',
        iconType: 'cloud_sun',
        minTemp: 22,
        maxTemp: 31,
        weatherDesc: 'Berawan',
        rainChance: 10,
      },
      {
        dayName: 'Sel',
        dateStr: '7 Okt',
        iconType: 'rain',
        minTemp: 21,
        maxTemp: 29,
        weatherDesc: 'Hujan Ringan',
        rainChance: 60,
      },
      {
        dayName: 'Rab',
        dateStr: '8 Okt',
        iconType: 'cloud_sun',
        minTemp: 22,
        maxTemp: 30,
        weatherDesc: 'Berawan',
        rainChance: 20,
      },
      {
        dayName: 'Kam',
        dateStr: '9 Okt',
        iconType: 'sun',
        minTemp: 23,
        maxTemp: 31,
        weatherDesc: 'Cerah Berawan',
        rainChance: 10,
      },
      {
        dayName: 'Jum',
        dateStr: '10 Okt',
        iconType: 'rain',
        minTemp: 22,
        maxTemp: 28,
        weatherDesc: 'Hujan Ringan',
        rainChance: 70,
      },
    ],
  },
  'Puncak & Cisarua': {
    district: 'Puncak & Cisarua',
    currentTemp: 21,
    feelsLike: 22,
    condition: 'Berkabut & Sejuk',
    humidity: 88,
    windSpeed: '15 km/jam (Selatan)',
    visibility: '4 km',
    uvIndex: 'Rendah (1 dari 10)',
    maxTemp: 24,
    minTemp: 17,
    rainfall: '1.2 mm',
    rainChance: 45,
    skyCondition: 'Mendung Berkabut',
    warningText: 'Waspada kabut tebal dan jalanan licin di jalur puncak saat sore menjelang malam.',
    forecast5Days: [
      {
        dayName: 'Sen',
        dateStr: '6 Okt',
        iconType: 'rain',
        minTemp: 17,
        maxTemp: 23,
        weatherDesc: 'Hujan Sedang',
        rainChance: 55,
      },
      {
        dayName: 'Sel',
        dateStr: '7 Okt',
        iconType: 'rain',
        minTemp: 16,
        maxTemp: 22,
        weatherDesc: 'Hujan Lebat',
        rainChance: 80,
      },
      {
        dayName: 'Rab',
        dateStr: '8 Okt',
        iconType: 'cloud_sun',
        minTemp: 17,
        maxTemp: 24,
        weatherDesc: 'Berawan Tebal',
        rainChance: 35,
      },
      {
        dayName: 'Kam',
        dateStr: '9 Okt',
        iconType: 'cloud_sun',
        minTemp: 18,
        maxTemp: 24,
        weatherDesc: 'Cerah Berawan',
        rainChance: 25,
      },
      {
        dayName: 'Jum',
        dateStr: '10 Okt',
        iconType: 'rain',
        minTemp: 17,
        maxTemp: 22,
        weatherDesc: 'Hujan Ringan',
        rainChance: 65,
      },
    ],
  },
  'Kota Bogor': {
    district: 'Kota Bogor',
    currentTemp: 27,
    feelsLike: 29,
    condition: 'Cerah Berawan',
    humidity: 75,
    windSpeed: '10 km/jam (Barat Daya)',
    visibility: '10 km',
    uvIndex: 'Sedang (4 dari 10)',
    maxTemp: 32,
    minTemp: 23,
    rainfall: '0.0 mm',
    rainChance: 15,
    skyCondition: 'Cerah Berawan',
    warningText: 'Potensi hujan kilat lokal di wilayah Bogor Barat pada sore hari.',
    forecast5Days: [
      {
        dayName: 'Sen',
        dateStr: '6 Okt',
        iconType: 'cloud_sun',
        minTemp: 23,
        maxTemp: 32,
        weatherDesc: 'Cerah Berawan',
        rainChance: 15,
      },
      {
        dayName: 'Sel',
        dateStr: '7 Okt',
        iconType: 'rain',
        minTemp: 22,
        maxTemp: 30,
        weatherDesc: 'Hujan Petir',
        rainChance: 70,
      },
      {
        dayName: 'Rab',
        dateStr: '8 Okt',
        iconType: 'cloud_sun',
        minTemp: 23,
        maxTemp: 31,
        weatherDesc: 'Berawan',
        rainChance: 25,
      },
      {
        dayName: 'Kam',
        dateStr: '9 Okt',
        iconType: 'sun',
        minTemp: 23,
        maxTemp: 32,
        weatherDesc: 'Cerah',
        rainChance: 10,
      },
      {
        dayName: 'Jum',
        dateStr: '10 Okt',
        iconType: 'rain',
        minTemp: 22,
        maxTemp: 29,
        weatherDesc: 'Hujan Ringan',
        rainChance: 60,
      },
    ],
  },
};

export default function InformasiCuacaContent() {
  const [selectedLocation, setSelectedLocation] = useState<string>('Kabupaten Bogor');
  const weather = WEATHER_BY_LOCATION[selectedLocation] || WEATHER_BY_LOCATION['Kabupaten Bogor'];

  const renderWeatherIcon = (type: DayForecast['iconType'], size: number = 36) => {
    switch (type) {
      case 'rain':
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M37 28C39.76 28 42 25.76 42 23C42 20.37 39.97 18.22 37.38 18.02C36.63 12.39 31.82 8 26 8C20.62 8 16.11 11.75 15.11 16.85C14.75 16.75 14.38 16.7 14 16.7C10.69 16.7 8 19.39 8 22.7C8 25.86 10.45 28.45 13.56 28.68L37 28Z"
              fill="#93C5FD"
            />
            {/* Raindrops */}
            <line x1="16" y1="33" x2="14" y2="40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="24" y1="33" x2="22" y2="40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="33" x2="30" y2="40" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'sun':
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="10" fill="#F59E0B" />
            <line x1="24" y1="6" x2="24" y2="10" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="24" y1="38" x2="24" y2="42" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="6" y1="24" x2="10" y2="24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="24" x2="42" y2="24" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="11.3" y1="11.3" x2="14.1" y2="14.1" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="33.9" y1="33.9" x2="36.7" y2="36.7" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="11.3" y1="36.7" x2="14.1" y2="33.9" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="33.9" y1="14.1" x2="36.7" y2="11.3" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'cloud_sun':
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun */}
            <circle cx="20" cy="18" r="9" fill="#F59E0B" />
            <line x1="20" y1="5" x2="20" y2="8" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="9" y1="12" x2="11.5" y2="14" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="7" y1="22" x2="10" y2="22" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="31" y1="12" x2="28.5" y2="14" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
            {/* Cloud */}
            <path
              d="M37 36C40.31 36 43 33.31 43 30C43 26.85 40.56 24.28 37.45 24.03C36.56 18.39 31.68 14 25.75 14C20.31 14 15.74 17.73 14.73 22.84C14.37 22.75 13.99 22.7 13.6 22.7C10.29 22.7 7.6 25.39 7.6 28.7C7.6 31.86 10.05 34.45 13.16 34.68L37 36Z"
              fill="#FFFFFF"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
          </svg>
        );
    }
  };

  return (
    <div className="view-transition-wrapper">
      {/* Navbar: Variant main with Bantuan Darurat active */}
      <Navbar variant="main" activeMainTab="bantuan" />

      <main className="cuaca-page-main">
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

        {/* 2. Main Content Container */}
        <div className="cuaca-container">
          {/* Breadcrumb Navigation */}
          <div className="faskes-breadcrumb-bar">
            <Link href="/bantuan-darurat" className="faskes-back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Kembali ke Bantuan Darurat</span>
            </Link>
          </div>

          {/* Section Header with Location Selector */}
          <div className="cuaca-header-banner">
            <div className="cuaca-header-left">
              <div className="cuaca-sun-icon-box" aria-hidden="true">
                {/* Sun Behind Cloud Illustration */}
                <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="18" r="10" fill="#F59E0B" />
                  <path
                    d="M38 36C41.31 36 44 33.31 44 30C44 26.85 41.56 24.28 38.45 24.03C37.56 18.39 32.68 14 26.75 14C21.31 14 16.74 17.73 15.73 22.84C15.37 22.75 14.99 22.7 14.6 22.7C11.29 22.7 8.6 25.39 8.6 28.7C8.6 31.86 11.05 34.45 14.16 34.68L38 36Z"
                    fill="#38BDF8"
                  />
                  <path
                    d="M36 34C39 34 41.5 31.6 41.5 28.5C41.5 25.6 39.3 23.3 36.5 23.05C35.7 17.9 31.3 14 26 14C21.1 14 17 17.3 16.1 21.9C15.7 21.8 15.4 21.8 15 21.8C12 21.8 9.5 24.2 9.5 27.2C9.5 30.1 11.7 32.4 14.5 32.6L36 34Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <div className="cuaca-header-text">
                <h2 className="cuaca-main-title">Informasi Cuaca</h2>
                <p className="cuaca-subtitle">
                  Cek kondisi cuaca terkini dan prakiraan cuaca untuk merencanakan perjalananmu
                  dengan lebih aman dan nyaman.
                </p>
              </div>
            </div>

            {/* Location Selector Dropdown */}
            <div className="cuaca-location-picker">
              <span className="material-symbols-outlined location-pin-icon">location_on</span>
              <select
                aria-label="Pilih Lokasi Cuaca"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="select-location-cuaca"
              >
                <option value="Kabupaten Bogor">Kabupaten Bogor</option>
                <option value="Puncak & Cisarua">Puncak & Cisarua</option>
                <option value="Kota Bogor">Kota Bogor</option>
              </select>
              <span className="material-symbols-outlined select-arrow-icon">expand_more</span>
            </div>
          </div>

          {/* 3. Top Weather Grid: Current Weather (Hero card) + Detail Cuaca + Right Sidebar */}
          <div className="cuaca-top-layout-grid">
            {/* Left Big Card: Cuaca Saat Ini */}
            <div className="cuaca-hero-card">
              <div className="cuaca-hero-bg">
                <img
                  src="/assets/images/bantuan_darurat/banner_atas.png"
                  alt="Misty landscape"
                  className="cuaca-hero-bg-img"
                />
                <div className="cuaca-hero-bg-overlay"></div>
              </div>

              <div className="cuaca-hero-content">
                {/* Header Row */}
                <div className="hero-cuaca-header">
                  <span className="hero-cuaca-label">Cuaca Saat Ini</span>
                  <div className="hero-cuaca-meta">
                    <span className="hero-cuaca-location">{weather.district}, Jawa Barat</span>
                    <span className="hero-cuaca-timestamp">Sen, 6 Okt 2025 • 13:24 WIB</span>
                  </div>
                </div>

                {/* Main Temperature Section */}
                <div className="hero-temp-row">
                  <div className="hero-weather-icon-badge">
                    {renderWeatherIcon('cloud_sun', 54)}
                  </div>
                  <div className="hero-temp-number-box">
                    <div className="hero-temp-value">{weather.currentTemp}°C</div>
                    <div className="hero-temp-condition">{weather.condition}</div>
                    <div className="hero-temp-feels">Terasa seperti {weather.feelsLike}°C</div>
                  </div>
                </div>

                {/* Bottom Stats Row (Pill Bar) */}
                <div className="hero-cuaca-stats-bar">
                  <div className="stat-cuaca-item">
                    <span className="material-symbols-outlined stat-icon icon-water">water_drop</span>
                    <div className="stat-content">
                      <span className="stat-label">Kelembapan</span>
                      <strong className="stat-val">{weather.humidity}%</strong>
                    </div>
                  </div>

                  <div className="stat-cuaca-item">
                    <span className="material-symbols-outlined stat-icon icon-wind">air</span>
                    <div className="stat-content">
                      <span className="stat-label">Angin</span>
                      <strong className="stat-val">{weather.windSpeed}</strong>
                    </div>
                  </div>

                  <div className="stat-cuaca-item">
                    <span className="material-symbols-outlined stat-icon icon-eye">visibility</span>
                    <div className="stat-content">
                      <span className="stat-label">Jarak Pandang</span>
                      <strong className="stat-val">{weather.visibility}</strong>
                    </div>
                  </div>

                  <div className="stat-cuaca-item">
                    <span className="material-symbols-outlined stat-icon icon-uv">wb_sunny</span>
                    <div className="stat-content">
                      <span className="stat-label">Indeks UV</span>
                      <strong className="stat-val">{weather.uvIndex}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Card: Detail Cuaca */}
            <div className="cuaca-detail-card">
              <h3 className="detail-card-title">Detail Cuaca</h3>

              <div className="detail-metrics-list">
                {/* Metric 1 */}
                <div className="metric-row-item">
                  <div className="metric-icon-box text-amber">
                    <span className="material-symbols-outlined">device_thermostat</span>
                  </div>
                  <div className="metric-info">
                    <span className="metric-name">Suhu Maksimum</span>
                    <strong className="metric-value">{weather.maxTemp}°C</strong>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="metric-row-item">
                  <div className="metric-icon-box text-red">
                    <span className="material-symbols-outlined">thermostat</span>
                  </div>
                  <div className="metric-info">
                    <span className="metric-name">Suhu Minimum</span>
                    <strong className="metric-value">{weather.minTemp}°C</strong>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="metric-row-item">
                  <div className="metric-icon-box text-blue">
                    <span className="material-symbols-outlined">rainy</span>
                  </div>
                  <div className="metric-info">
                    <span className="metric-name">Curah Hujan</span>
                    <strong className="metric-value">{weather.rainfall}</strong>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="metric-row-item">
                  <div className="metric-icon-box text-teal">
                    <span className="material-symbols-outlined">umbrella</span>
                  </div>
                  <div className="metric-info">
                    <span className="metric-name">Peluang Hujan</span>
                    <strong className="metric-value">{weather.rainChance}%</strong>
                  </div>
                </div>

                {/* Metric 5 */}
                <div className="metric-row-item">
                  <div className="metric-icon-box text-yellow">
                    <span className="material-symbols-outlined">partly_cloudy_day</span>
                  </div>
                  <div className="metric-info">
                    <span className="metric-name">Kondisi Langit</span>
                    <strong className="metric-value">{weather.skyCondition}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Stack: Peringatan Dini + Tips Perjalanan */}
            <div className="cuaca-right-stack">
              {/* Card 1: Peringatan Dini */}
              <div className="warning-card-box">
                <div className="warning-icon-circle">
                  <span className="material-symbols-outlined">thunderstorm</span>
                </div>
                <h4 className="warning-title">Peringatan Dini</h4>
                <p className="warning-desc">{weather.warningText}</p>
                <div className="status-badge-aman">
                  <span className="material-symbols-outlined badge-check-icon">check_circle</span>
                  <span>Aman</span>
                </div>
              </div>

              {/* Card 2: Tips Perjalanan Saat Cuaca Mendung / Hujan */}
              <div className="tips-weather-card-box">
                <div className="tips-weather-header">
                  <div className="tips-bulb-circle">
                    <span className="material-symbols-outlined">lightbulb</span>
                  </div>
                  <h4 className="tips-weather-title">
                    Tips Perjalanan Saat Cuaca Mendung / Hujan
                  </h4>
                </div>

                <ul className="tips-checklist">
                  <li className="checklist-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <span>Bawa jas hujan dan payung.</span>
                  </li>
                  <li className="checklist-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <span>Gunakan pakaian yang nyaman dan cepat kering.</span>
                  </li>
                  <li className="checklist-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <span>Hindari area rawan longsor dan banjir.</span>
                  </li>
                  <li className="checklist-item">
                    <span className="material-symbols-outlined check-icon">check</span>
                    <span>Selalu cek update cuaca sebelum berangkat.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Bottom Section: Prakiraan Cuaca 5 Hari ke Depan */}
          <div className="cuaca-forecast-card">
            <div className="forecast-header">
              <div className="forecast-icon-badge">
                <span className="material-symbols-outlined">calendar_month</span>
              </div>
              <div>
                <h3 className="forecast-title">Prakiraan Cuaca 5 Hari ke Depan</h3>
                <p className="forecast-subtitle">
                  Berikut adalah prakiraan cuaca untuk 5 hari ke depan di wilayah {weather.district}.
                </p>
              </div>
            </div>

            {/* 5 Day Cards Grid */}
            <div className="forecast-5days-grid">
              {weather.forecast5Days.map((item, idx) => (
                <div key={idx} className="forecast-day-box">
                  <div className="forecast-day-date">
                    <strong className="day-name">{item.dayName}</strong>, {item.dateStr}
                  </div>
                  <div className="forecast-day-icon">
                    {renderWeatherIcon(item.iconType, 42)}
                  </div>
                  <div className="forecast-day-temp">
                    <strong>{item.minTemp}°</strong> / {item.maxTemp}°
                  </div>
                  <div className="forecast-day-desc">{item.weatherDesc}</div>
                  <div className="forecast-day-rain">
                    <span className="material-symbols-outlined rain-icon">water_drop</span>
                    <span>{item.rainChance}%</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Advice */}
            <div className="forecast-footer-note">
              <span className="material-symbols-outlined note-icon">info</span>
              <span>
                Informasi cuaca dapat berubah sewaktu-waktu. Pastikan untuk selalu memperbarui informasi
                sebelum dan selama perjalanan.
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
