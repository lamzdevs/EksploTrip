'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type TabKey = 'sebelum' | 'perjalanan' | 'tujuan' | 'darurat';

interface TipCard {
  number: number;
  title: string;
  desc: string;
  bgClass: string;
  iconType: 'map_phone' | 'backpack' | 'people_pin' | 'social_phone' | 'woman_instinct' | 'shield_vigilant';
}

const TAB_DATA: Record<
  TabKey,
  {
    label: string;
    icon: string;
    cards: TipCard[];
  }
> = {
  sebelum: {
    label: 'Sebelum Berangkat',
    icon: 'luggage',
    cards: [
      {
        number: 1,
        title: 'Rencanakan Perjalanan dengan Matang',
        desc: 'Cari tahu informasi lokasi, transportasi, akses internet, dan nomor penting sebelum berangkat.',
        bgClass: 'bg-pastel-green',
        iconType: 'map_phone',
      },
      {
        number: 2,
        title: 'Siapkan Perlengkapan Penting',
        desc: 'Bawa barang pribadi, dokumen penting, obat-obatan, powerbank, dan perlengkapan keamanan sederhana seperti peluit atau senter.',
        bgClass: 'bg-pastel-teal',
        iconType: 'backpack',
      },
      {
        number: 3,
        title: 'Beritahu Orang Terdekat',
        desc: 'Selalu informasikan rencana perjalanan, perkiraan waktu kembali, dan lokasi kamu berada.',
        bgClass: 'bg-pastel-purple',
        iconType: 'people_pin',
      },
      {
        number: 4,
        title: 'Jaga Privasi di Media Sosial',
        desc: 'Hindari membagikan lokasi secara real-time dan terlalu banyak informasi pribadi selama perjalanan.',
        bgClass: 'bg-pastel-blue',
        iconType: 'social_phone',
      },
      {
        number: 5,
        title: 'Percaya pada Insting',
        desc: 'Jika merasa tidak nyaman atau ada hal yang mencurigakan, segera cari tempat aman dan jangan ragu meminta bantuan.',
        bgClass: 'bg-pastel-yellow',
        iconType: 'woman_instinct',
      },
      {
        number: 6,
        title: 'Tetap Waspada di Sekitar',
        desc: 'Hindari area yang sepi, perhatikan lingkungan sekitar, dan jaga jarak dengan orang yang tidak dikenal.',
        bgClass: 'bg-pastel-mint',
        iconType: 'shield_vigilant',
      },
    ],
  },
  perjalanan: {
    label: 'Saat di Perjalanan',
    icon: 'route',
    cards: [
      {
        number: 1,
        title: 'Pilih Transportasi Resmi & Terverifikasi',
        desc: 'Gunakan angkutan umum atau transportasi daring resmi dengan identitas pengemudi yang jelas.',
        bgClass: 'bg-pastel-green',
        iconType: 'map_phone',
      },
      {
        number: 2,
        title: 'Duduk di Area Ramai & Mudah Dijangkau',
        desc: 'Pilih tempat duduk di dekat pengemudi atau di gerbong/kursi yang berdekatan dengan penumpang wanita lainnya.',
        bgClass: 'bg-pastel-teal',
        iconType: 'people_pin',
      },
      {
        number: 3,
        title: 'Aktifkan Fitur Bagikan Perjalanan (Live Location)',
        desc: 'Bagikan tautan pelacak perjalanan langsung ke keluarga atau sahabat terdekat hingga tiba dengan selamat.',
        bgClass: 'bg-pastel-purple',
        iconType: 'social_phone',
      },
      {
        number: 4,
        title: 'Hindari Bepergian Larut Malam Sendirian',
        desc: 'Atur jadwal keberangkatan dan kepulangan saat kondisi jalan masih terang dan ramai pengunjung.',
        bgClass: 'bg-pastel-blue',
        iconType: 'map_phone',
      },
      {
        number: 5,
        title: 'Simpan Ponsel & Barang Berharga Aman',
        desc: 'Letakkan barang berharga di tas depan yang selalu dalam jangkauan dan pandangan mata kamu.',
        bgClass: 'bg-pastel-yellow',
        iconType: 'backpack',
      },
      {
        number: 6,
        title: 'Bersikap Tegas terhadap Hal Tidak Wajar',
        desc: 'Jangan ragu menolak ajakan yang mencurigakan dan segera hubungi pihak keamanan terdekat.',
        bgClass: 'bg-pastel-mint',
        iconType: 'shield_vigilant',
      },
    ],
  },
  tujuan: {
    label: 'Di Tempat Tujuan',
    icon: 'location_on',
    cards: [
      {
        number: 1,
        title: 'Kenali Peta & Pos Pengelola Resmi',
        desc: 'Kunjungi pos informasi pengelola resmi saat tiba untuk mendapatkan arahan jalur dan nomor jaga darurat.',
        bgClass: 'bg-pastel-green',
        iconType: 'map_phone',
      },
      {
        number: 2,
        title: 'Tetap di Jalur Wisata yang Ditentukan',
        desc: 'Jangan mencoba membuka jalur pintas sendiri di kawasan perbukitan atau curug yang sepi pengunjung.',
        bgClass: 'bg-pastel-teal',
        iconType: 'shield_vigilant',
      },
      {
        number: 3,
        title: 'Pilih Akomodasi Berkeamanan Baik',
        desc: 'Pastikan kamar hotel atau homestay memiliki kunci pintu ganda dan penerangan memadai di koridor.',
        bgClass: 'bg-pastel-purple',
        iconType: 'backpack',
      },
      {
        number: 4,
        title: 'Simpan Kontak Ranger & Pemandu Lokal',
        desc: 'Catat nama serta kontak pemandu resmi yang mendampingi selama aktivitas trekking atau jelajah alam.',
        bgClass: 'bg-pastel-blue',
        iconType: 'people_pin',
      },
      {
        number: 5,
        title: 'Waspada Berfoto di Spot Ekstrem',
        desc: 'Utamakan keselamatan daripada sudut foto, perhatikan pijakan dan pembatas jurang atau arus sungai.',
        bgClass: 'bg-pastel-yellow',
        iconType: 'woman_instinct',
      },
      {
        number: 6,
        title: 'Perhatikan Batas Waktu Operasional',
        desc: 'Kembalilah ke titik kumpul sebelum matahari terbenam untuk menghindari jalur berkabut dan minim cahaya.',
        bgClass: 'bg-pastel-mint',
        iconType: 'social_phone',
      },
    ],
  },
  darurat: {
    label: 'Jika Terjadi Keadaan Darurat',
    icon: 'crisis_alert',
    cards: [
      {
        number: 1,
        title: 'Segera Hubungi Panggilan Darurat 112 / 110',
        desc: 'Layanan bebas pulsa 112 dan Polisi 110 siap menghubungkan kamu dengan tim pertolongan terdekat.',
        bgClass: 'bg-pastel-green',
        iconType: 'social_phone',
      },
      {
        number: 2,
        title: 'Gunakan Peluit Darurat',
        desc: 'Tiup peluit tiga kali dengan jeda sebagai sinyal universal keadaan darurat untuk menarik perhatian sekitar.',
        bgClass: 'bg-pastel-teal',
        iconType: 'backpack',
      },
      {
        number: 3,
        title: 'Cari Perlindungan di Tempat Ramai',
        desc: 'Mendekatlah ke warung, pos registrasi, atau rombongan keluarga lain jika merasa diikuti atau terancam.',
        bgClass: 'bg-pastel-purple',
        iconType: 'people_pin',
      },
      {
        number: 4,
        title: 'Kirimkan Koordinat GPS ke Kontak Utama',
        desc: 'Kirimkan titik koordinat akurat melalui pesan instan sebelum daya baterai ponsel kamu menipis.',
        bgClass: 'bg-pastel-blue',
        iconType: 'map_phone',
      },
      {
        number: 5,
        title: 'Tetap Tenang & Kendalikan Emosi',
        desc: 'Tarik napas dalam, evaluasi opsi paling aman, dan hindari panik agar dapat berpikir dengan jernih.',
        bgClass: 'bg-pastel-yellow',
        iconType: 'woman_instinct',
      },
      {
        number: 6,
        title: 'Jangan Ragu Berteriak Meminta Bantuan',
        desc: 'Jika keselamatan terancam, bersuaralah lantang agar masyarakat dan petugas sekitar segera mendekat.',
        bgClass: 'bg-pastel-mint',
        iconType: 'shield_vigilant',
      },
    ],
  },
};

export default function TipsKeamananWanitaContent() {
  const [activeTab, setActiveTab] = useState<TabKey>('sebelum');

  // Helper to render crisp matching SVG illustration for each card
  const renderCardIllustration = (type: TipCard['iconType']) => {
    switch (type) {
      case 'map_phone':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="15" width="42" height="70" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
            <rect x="35" y="22" width="22" height="40" rx="4" fill="#F1F5F9" />
            <path d="M40 32 Q46 38 52 30 T54 50" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
            <circle cx="53" cy="28" r="4.5" fill="#EF4444" />
            <path d="M53 32 L53 35" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
            {/* Green Shield Checkmark */}
            <circle cx="70" cy="65" r="14" fill="#10B981" />
            <path d="M65 65 L69 69 L76 61" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'backpack':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Backpack main body */}
            <rect x="28" y="28" width="40" height="50" rx="10" fill="#0D9488" />
            <rect x="34" y="44" width="28" height="24" rx="5" fill="#14B8A6" />
            <path d="M38 28 C38 20 58 20 58 28" stroke="#0F766E" strokeWidth="4" strokeLinecap="round" />
            <rect x="38" y="34" width="20" height="4" rx="2" fill="#FFFFFF" opacity="0.8" />
            {/* Green Shield Checkmark */}
            <circle cx="70" cy="65" r="14" fill="#10B981" />
            <path d="M65 65 L69 69 L76 61" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'people_pin':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Group of 3 people */}
            <circle cx="48" cy="30" r="8" fill="#64748B" />
            <path d="M32 54 C32 44 64 44 64 54" fill="#94A3B8" />
            <circle cx="34" cy="38" r="6" fill="#94A3B8" />
            <path d="M22 58 C22 50 46 50 46 58" fill="#CBD5E1" />
            <circle cx="62" cy="38" r="6" fill="#94A3B8" />
            <path d="M50 58 C50 50 74 50 74 58" fill="#CBD5E1" />
            {/* Location pin */}
            <circle cx="72" cy="62" r="12" fill="#0D9488" />
            <circle cx="72" cy="62" r="4.5" fill="#FFFFFF" />
          </svg>
        );
      case 'social_phone':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="28" y="16" width="38" height="66" rx="8" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
            <rect x="34" y="24" width="26" height="44" rx="4" fill="#F8FAFC" />
            <circle cx="47" cy="42" r="8" fill="#EF4444" />
            <circle cx="47" cy="42" r="3.5" fill="#FFFFFF" />
            {/* Wifi/Privacy Signal Wave */}
            <path d="M72 26 A14 14 0 0 1 78 34" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M76 22 A20 20 0 0 1 84 34" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        );
      case 'woman_instinct':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Woman avatar */}
            <circle cx="46" cy="32" r="11" fill="#FBD38D" />
            {/* Hair */}
            <path d="M34 32 C34 18 58 18 58 32 C58 40 56 46 56 50 L36 50 C36 46 34 40 34 32 Z" fill="#2D3748" />
            <path d="M30 64 C30 52 62 52 62 64" fill="#63B3ED" />
            {/* Shield */}
            <circle cx="72" cy="60" r="13" fill="#10B981" />
            <path d="M67 60 L71 64 L77 56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'shield_vigilant':
        return (
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Shield with heart */}
            <path d="M50 16 L28 26 V48 C28 66 38 80 50 86 C62 80 72 66 72 48 V26 L50 16 Z" fill="#10B981" />
            <path d="M50 42 C50 36 42 34 39 39 C35 44 50 56 50 56 C50 56 65 44 61 39 C58 34 50 36 50 42 Z" fill="#FFFFFF" />
          </svg>
        );
    }
  };

  return (
    <div className="view-transition-wrapper">
      {/* Navbar: Variant main with Bantuan Darurat active */}
      <Navbar variant="main" activeMainTab="bantuan" />

      <main className="tips-wanita-main">
        {/* 1. Hero Banner */}
        <section className="hero-section" aria-label="Banner Bantuan Darurat">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/beranda/banner_atas.webp"
              alt="Pemandangan danau dan bukit pegunungan Bogor"
              width={1440}
              height={280}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
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
        <div className="tips-wanita-container">
          {/* Breadcrumb Navigation */}
          <div className="faskes-breadcrumb-bar">
            <Link href="/bantuan-darurat" className="faskes-back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Kembali ke Bantuan Darurat</span>
            </Link>
          </div>

          {/* Section Header: Shield with Heart Icon + Title */}
          <div className="tips-wanita-header-banner">
            <div className="tips-shield-icon-box" aria-hidden="true">
              <svg width="36" height="42" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L0 4.5V13.5C0 21.2 5.1 28.3 12 30C18.9 28.3 24 21.2 24 13.5V4.5L12 0Z" fill="#15803D" />
                <path d="M12 11.5 C12 8.5 7.5 7.5 6 10.5 C4.2 13.5 12 21 12 21 C12 21 19.8 13.5 18 10.5 C16.5 7.5 12 8.5 12 11.5 Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="tips-header-text">
              <h2 className="tips-main-title">Tips Keamanan Wanita</h2>
              <p className="tips-subtitle">
                Perjalanan yang aman dimulai dari persiapan. Berikut beberapa tips yang bisa
                membantu kamu tetap aman dan nyaman selama bepergian.
              </p>
            </div>
          </div>

          {/* 3. Main Grid Layout: Left Content + Right Sidebar */}
          <div className="tips-wanita-layout-grid">
            {/* === LEFT CONTENT AREA === */}
            <div className="tips-left-content">
              {/* Filter Tabs Row */}
              <div className="tips-filter-tabs-bar" role="tablist" aria-label="Kategori Tips Keamanan">
                {(Object.keys(TAB_DATA) as TabKey[]).map((tabKey) => {
                  const tab = TAB_DATA[tabKey];
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`btn-filter-tab ${isActive ? 'active-tab' : ''}`}
                      onClick={() => setActiveTab(tabKey)}
                    >
                      <span className="material-symbols-outlined tab-icon">
                        {tab.icon}
                      </span>
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* 6 Tip Cards Grid */}
              <div className="tips-cards-grid">
                {TAB_DATA[activeTab].cards.map((card) => (
                  <article
                    key={card.number}
                    className={`tip-card-item ${card.bgClass}`}
                  >
                    {/* Top: Badge Number + Illustration */}
                    <div className="tip-card-top-row">
                      <span className="tip-badge-number">{card.number}</span>
                      <div className="tip-card-illustration">
                        {renderCardIllustration(card.iconType)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="tip-card-body">
                      <h3 className="tip-card-title">{card.number}. {card.title}</h3>
                      <p className="tip-card-desc">{card.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* === RIGHT SIDEBAR === */}
            <aside className="tips-right-sidebar">
              {/* Card 1: Perjalanan Aman, Perempuan Hebat */}
              <div className="sidebar-empowerment-card">
                <div className="empowerment-header">
                  <div className="empowerment-avatar">
                    <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="50" fill="#E0F2FE" />
                      <circle cx="50" cy="40" r="18" fill="#FBD38D" />
                      {/* Hair with side fringe */}
                      <path d="M28 40 C28 20 72 20 72 40 C72 52 68 58 68 62 L32 62 C32 58 28 52 28 40 Z" fill="#1E293B" />
                      <path d="M22 88 C22 70 78 70 78 88" fill="#0284C7" />
                    </svg>
                  </div>
                  <h3 className="empowerment-title">
                    Perjalanan Aman,
                    <br />
                    Perempuan Hebat
                  </h3>
                </div>
                <p className="empowerment-desc">
                  Kamu berhak merasa aman, nyaman, dan bebas menjelajahi dunia.
                  Jangan ragu untuk meminta bantuan jika diperlukan. Kami selalu ada untuk kamu.
                </p>
              </div>

              {/* Card 2: Quick Nomor Darurat Box */}
              <div className="sidebar-quick-emergency-card">
                <div className="quick-emergency-header">
                  <div className="emergency-call-bubble">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="quick-emergency-title">Nomor Darurat</h4>
                    <p className="quick-emergency-sub">
                      Hubungi jika kamu membutuhkan pertolongan segera.
                    </p>
                  </div>
                </div>
                <Link href="/nomor-darurat-umum" className="btn-go-emergency">
                  <span>Lihat Nomor Darurat</span>
                  <span className="material-symbols-outlined icon-arrow">arrow_forward</span>
                </Link>
              </div>

              {/* Card 3: Kontak Penting Lainnya */}
              <div className="sidebar-contacts-card">
                <h4 className="contacts-card-heading">Kontak Penting Lainnya</h4>

                <div className="contacts-list">
                  {/* Polisi */}
                  <a href="tel:110" className="contact-list-item">
                    <div className="contact-item-icon bg-icon-green">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div className="contact-item-info">
                      <span className="contact-name">Polisi</span>
                      <strong className="contact-num">110</strong>
                    </div>
                  </a>

                  {/* Ambulans / Gawat Darurat */}
                  <a href="tel:118" className="contact-list-item">
                    <div className="contact-item-icon bg-icon-purple">
                      <span className="material-symbols-outlined">local_hospital</span>
                    </div>
                    <div className="contact-item-info">
                      <span className="contact-name">Ambulans / Gawat Darurat</span>
                      <strong className="contact-num">118</strong>
                    </div>
                  </a>

                  {/* Puskesmas / Klinik Terdekat */}
                  <Link href="/fasilitas-kesehatan-terdekat" className="contact-list-item">
                    <div className="contact-item-icon bg-icon-blue">
                      <span className="material-symbols-outlined">add_location_alt</span>
                    </div>
                    <div className="contact-item-info">
                      <span className="contact-name">Puskesmas / Klinik Terdekat</span>
                      <strong className="contact-num">(0251) 832-1234</strong>
                    </div>
                  </Link>

                  {/* BNPB (Info Bencana) */}
                  <a href="tel:119" className="contact-list-item">
                    <div className="contact-item-icon bg-icon-navy">
                      <span className="material-symbols-outlined">shield</span>
                    </div>
                    <div className="contact-item-info">
                      <span className="contact-name">BNPB (Info Bencana)</span>
                      <strong className="contact-num">119</strong>
                    </div>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* 4. Bottom Advice Bar */}
          <div className="tips-bottom-advice-bar">
            <div className="advice-left-group">
              <div className="advice-bulb-icon">
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <p className="advice-text">
                <strong>Tips tambahan:</strong> Unduh aplikasi peta offline, simpan lokasi penting,
                dan gunakan transportasi resmi atau yang terpercaya.
              </p>
            </div>
            <div className="advice-slogan">
              <span>Jelajah Dengan Aman</span>
              <span className="slogan-heart">♡</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
