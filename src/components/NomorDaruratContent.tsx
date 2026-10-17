'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NomorDaruratContent() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, num: string) => {
    try {
      await navigator.clipboard.writeText(num);
    } catch {
      // Fallback
    }
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((prev) => (prev === id ? null : prev));
    }, 1800);
  };

  return (
    <div className="view-transition-wrapper">
      <Navbar
        variant="main-with-back"
        backHref="/bantuan-darurat"
        backLabel="Kembali"
        activeMainTab="bantuan"
      />

      <main>
        {/* Hero Banner */}
        <section className="hero-section" aria-label="Banner Bantuan Darurat">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/nomor_darurat_umum/banner_atas.png"
              alt="Pemandangan danau dan gunung di Bogor"
              className="hero-banner-img"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">eco</span>
              <span>Butuh Bantuan?</span>
            </div>
            <h1 className="hero-title">
              Jangan Panik, Kami
              <br />
              Siap <strong>Membantu</strong>
            </h1>
            <p className="hero-desc">
              Jika kamu mengalami keadaan darurat, membutuhkan informasi
              penting, atau menghadapi kendala saat berwisata, berikut langkah
              mudah dan panduan yang bisa kamu ikuti.
            </p>
          </div>
        </section>

        {/* Nomor Darurat Umum Section */}
        <section
          className="emergency-numbers-section"
          aria-labelledby="emergency-section-title"
        >
          <div className="emergency-header-row">
            <div className="emergency-header-icon" aria-hidden="true">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div className="emergency-header-text">
              <h2
                className="emergency-main-title"
                id="emergency-section-title"
              >
                Nomor Darurat Umum
              </h2>
              <p className="emergency-sub-title">
                Pihak berwenang, layanan kesehatan, dan instansi terkait yang
                dapat dihubungi saat terjadi keadaan darurat atau membutuhkan
                bantuan.
              </p>
            </div>
          </div>

          <div className="emergency-cards-grid">
            {/* Card 1: Polisi */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-yellow"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined">
                    local_police
                  </span>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">Polisi</h3>
                  <p className="emergency-card-number">
                    <a href="tel:110">110</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Layanan kepolisian untuk keamanan, kejahatan, dan bantuan
                  darurat lainnya.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'polisi' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('polisi', '110')}
                  aria-label="Salin nomor Polisi 110"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'polisi' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'polisi' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>

            {/* Card 2: Pemadam Kebakaran */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-teal"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined icon-filled">
                    local_fire_department
                  </span>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">Pemadam Kebakaran</h3>
                  <p className="emergency-card-number">
                    <a href="tel:113">113</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Layanan pemadam kebakaran untuk kebakaran dan penyelamatan.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'damkar' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('damkar', '113')}
                  aria-label="Salin nomor Pemadam Kebakaran 113"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'damkar' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'damkar' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>

            {/* Card 3: Ambulans */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-red"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="7" cy="18" r="2" />
                    <circle cx="17" cy="18" r="2" />
                    <path d="M8 8v4" />
                    <path d="M6 10h4" />
                  </svg>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">Ambulans</h3>
                  <p className="emergency-card-number">
                    <a href="tel:118">118</a> / <a href="tel:119">119</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Layanan medis darurat untuk kondisi kesehatan serius.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'ambulans' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('ambulans', '118')}
                  aria-label="Salin nomor Ambulans 118"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'ambulans' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'ambulans' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>

            {/* Card 4: Taman Nasional G. Gede */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-green"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 18.5L9.5 6L13 12.2L16 8.5L20 18.5H4Z" />
                  </svg>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">
                    Taman Nasional G. Gede
                  </h3>
                  <p className="emergency-card-number">
                    <a href="tel:08119155815">0811-9155-815</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Bantuan dan informasi terkait kawasan konservasi dan keamanan
                  area alam.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'tnggp' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('tnggp', '0811-9155-815')}
                  aria-label="Salin nomor Taman Nasional Gunung Gede"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'tnggp' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'tnggp' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>

            {/* Card 5: SAR/ Basarnas */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-orange"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined">
                    person_search
                  </span>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">SAR/ Basarnas</h3>
                  <p className="emergency-card-number">
                    <a href="tel:115">115</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Layanan pencarian dan pertolongan kecelakaan, tersesat, dan
                  situasi darurat.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'basarnas' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('basarnas', '115')}
                  aria-label="Salin nomor SAR Basarnas 115"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'basarnas' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'basarnas' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>

            {/* Card 6: Taman Nasional G. Salak */}
            <article className="emergency-card">
              <div className="emergency-card-top">
                <div
                  className="emergency-icon-circle icon-cyan"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 18.5L9.5 6L13 12.2L16 8.5L20 18.5H4Z" />
                  </svg>
                </div>
                <div className="emergency-card-info">
                  <h3 className="emergency-card-title">
                    Taman Nasional G. Salak
                  </h3>
                  <p className="emergency-card-number">
                    <a href="tel:085721888664">0857-2188-8664</a>
                  </p>
                </div>
              </div>
              <div className="emergency-card-bottom">
                <p className="emergency-card-desc">
                  Bantuan dan informasi terkait kawasan konservasi dan keamanan
                  area alam.
                </p>
                <button
                  type="button"
                  className={`btn-copy-emergency ${
                    copiedId === 'tnghs' ? 'copied' : ''
                  }`}
                  onClick={() => handleCopy('tnghs', '0857-2188-8664')}
                  aria-label="Salin nomor Taman Nasional Gunung Salak"
                >
                  <span className="material-symbols-outlined">
                    {copiedId === 'tnghs' ? 'check' : 'file_copy'}
                  </span>
                  <span className="copy-label">
                    {copiedId === 'tnghs' ? 'Tersalin' : 'Salin'}
                  </span>
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* Banner Bawah */}
        <section className="banner-bottom-section" aria-label="Banner Pemandangan">
          <div className="banner-bottom-wrapper">
            <img
              src="/assets/images/nomor_darurat_umum/banner_bawah.png"
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
