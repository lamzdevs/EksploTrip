'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type HelpModalKey =
  | 'faskes'
  | 'cuaca'
  | 'wanita'
  | 'edukasi'
  | 'hubungi'
  | null;

const HELP_MODALS: Record<
  Exclude<HelpModalKey, null>,
  { title: string; icon: string; points: string[] }
> = {
  faskes: {
    title: 'Fasilitas Kesehatan Terdekat (Kawasan Bogor)',
    icon: 'local_hospital',
    points: [
      'RSUD Ciawi (Kawasan Puncak & Cisarua): Jl. Raya Puncak No. 479, Ciawi — Siaga IGD 24 Jam.',
      'RSUD Kota Bogor (Kawasan Bogor Barat & Situ Gede): Jl. Dr. Sumeru No. 120, Menteng — Siaga IGD 24 Jam.',
      'RS Pertamedika Sentul City (Kawasan Babakan Madang & Gunung Pancar): Jl. MH. Thamrin Kav. 57, Sentul City.',
      'Puskesmas Cisarua & Puskesmas Tamansari: Layanan penanganan medis dasar di sekitar kecamatan destinasi.',
    ],
  },
  cuaca: {
    title: 'Informasi Cuaca & Peringatan Dini Alam',
    icon: 'air',
    points: [
      'Pantau Prakiraan Resmi BMKG: Selalu periksa radar cuaca Jawa Barat / Bogor sebelum memulai trekking menuju air terjun atau perbukitan.',
      'Waspada Hujan di Hulu: Debit air curug dapat meningkat secara tiba-tiba meskipun di titik lokasi hanya mendung ringan.',
      'Tanda Alam Bahaya: Segera menjauh dari bibir sungai apabila air berubah keruh kecokelatan atau membawa ranting pepohonan.',
    ],
  },
  wanita: {
    title: 'Tips Keamanan & Kenyamanan Wisatawan Wanita',
    icon: 'female',
    points: [
      'Utamakan Berwisata secara Berkelompok: Hindari melintasi jalur trekking sepi seorang diri, terutama menjelang sore hari.',
      'Bagikan Lokasi Langsung (Live Location): Informasikan rencana perjalanan dan estimasi waktu kembali kepada keluarga terdekat.',
      'Simpan Nomor Pos Jaga & Darurat 112: Pastikan nomor pos pengelola resmi dan panggilan darurat 112 mudah diakses pada layar cepat ponsel.',
    ],
  },
  edukasi: {
    title: 'Edukasi Keselamatan & Pencegahan Pungli',
    icon: 'groups',
    points: [
      'Gunakan Loket & Parkir Resmi: Selalu minta karcis tiket masuk dan parkir resmi di pos registrasi utama.',
      'Cek Kalkulator Biaya EksploTrip: Bandingkan rincian harga tiket pada halaman detail destinasi sebagai referensi transparansi.',
      'Laporkan Pungutan Tidak Resmi: Catat titik lokasi dan waktu kejadian untuk dilaporkan kepada pengelola resmi atau kanal pengaduan.',
    ],
  },
  hubungi: {
    title: 'Hubungi Tim EksploTrip',
    icon: 'chat',
    points: [
      'Email Resmi: halo@eksplotrip.id (Pertanyaan umum, saran pengembangan, dan pembaruan informasi destinasi).',
      'Laporan Kondisi Lapangan: Kirimkan dokumentasi perubahan jalur atau fasilitas agar tim survei dapat memverifikasi ulang.',
      'Kondisi Darurat: Untuk keadaan darurat di lapangan, segera hubungi Layanan Darurat 112 atau BASARNAS 115.',
    ],
  },
};

const LEFT_FAQS = [
  {
    id: 0,
    q: 'Apa yang harus dilakukan jika tersesat di jalur pendakian?',
    a: 'Tetap tenang dan berhenti di tempat yang aman. Hubungi nomor darurat 112 atau Basarnas 115, kirimkan koordinat lokasi terakhirmu jika ada sinyal, dan hemat daya baterai ponselmu.',
  },
  {
    id: 1,
    q: 'Bagaimana cara melaporkan adanya pungli?',
    a: 'Catat waktu, lokasi, dan bukti kejadian (foto/video/tiket tidak resmi), lalu laporkan ke pihak pengelola resmi destinasi atau melalui kanal pengaduan resmi LAPOR! (lapor.go.id).',
  },
  {
    id: 2,
    q: 'Apakah ada asuransi wisata di setiap destinasi?',
    a: 'Sebagian besar destinasi wisata alam resmi sudah mencakup asuransi pada tiket masuk resmi. Pastikan selalu meminta karcis retribusi resmi di pintu masuk.',
  },
];

const RIGHT_FAQS = [
  {
    id: 3,
    q: 'Bagaimana jika mengalami cedera saat berwisata?',
    a: 'Lakukan pertolongan pertama (P3K) sesegera mungkin, jangan memaksakan bergerak bila mengalami dislokasi/patah tulang, dan segera hubungi petugas pos jaga terdekat atau ambulans 119.',
  },
  {
    id: 4,
    q: 'Apakah ada layanan evakuasi di area wisata?',
    a: 'Destinasi pendakian gunung dan curug di Bogor umumnya memiliki posko SAR lokal dan pengelola ranger. Dalam kondisi darurat berat, tim gabungan Basarnas akan dikerahkan.',
  },
  {
    id: 5,
    q: 'Dimana saya bisa mendapatkan informasi cuaca terkini?',
    a: 'Informasi cuaca terkini dan radar hujan real-time di kawasan Bogor dapat diakses langsung melalui portal resmi BMKG (bmkg.go.id) atau aplikasi Info BMKG.',
  },
];

export default function BantuanDaruratContent() {
  const [openFaqIds, setOpenFaqIds] = useState<number[]>([0]);
  const [activeModal, setActiveModal] = useState<HelpModalKey>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="view-transition-wrapper">
      <main>
        {/* Hero Banner */}
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/bantuan_darurat/banner_atas.png"
              alt="Pemandangan danau dan gunung di Bogor"
              className="hero-banner-img"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">eco</span>
              <span>Bantuan Darurat</span>
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

        {/* Section 1: Tips Saat Keadaan Darurat */}
        <section className="emergency-steps-section">
          <div className="section-header-row">
            <div className="header-icon-box">
              <span className="material-symbols-outlined">add</span>
            </div>
            <div className="header-text-group">
              <h2 className="section-main-title">Tips Saat Keadaan Darurat</h2>
              <p className="section-sub-title">
                Tetap tenang, ikuti langkah berikut untuk mendapatkan bantuan
                dengan cepat.
              </p>
            </div>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-num-badge">1</span>
              <div className="step-icon-wrap">
                <span className="material-symbols-outlined">call</span>
              </div>
              <h3 className="step-title">Hubungi Nomor Darurat</h3>
              <p className="step-desc">
                Segera hubungi nomor darurat terdekat.
              </p>
            </article>

            <article className="step-card">
              <span className="step-num-badge">2</span>
              <div className="step-icon-wrap">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="step-title">Sampaikan Lokasi</h3>
              <p className="step-desc">
                Berikan informasi lokasi yang jelas dan detail.
              </p>
            </article>

            <article className="step-card">
              <span className="step-num-badge">3</span>
              <div className="step-icon-wrap">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h3 className="step-title">Jelaskan Kondisi</h3>
              <p className="step-desc">
                Sampaikan jenis bantuan yang dibutuhkan.
              </p>
            </article>

            <article className="step-card">
              <span className="step-num-badge">4</span>
              <div className="step-icon-wrap">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3 className="step-title">Tunggu Konfirmasi</h3>
              <p className="step-desc">
                Jangan meninggalkan lokasi sebelum ada konfirmasi bantuan.
              </p>
            </article>

            <article className="step-card">
              <span className="step-num-badge">5</span>
              <div className="step-icon-wrap">
                <span className="material-symbols-outlined">
                  volunteer_activism
                </span>
              </div>
              <h3 className="step-title">Tetap Tenang</h3>
              <p className="step-desc">
                Ikuti arahan petugas dan jaga keselamatan diri serta sekitar.
              </p>
            </article>
          </div>
        </section>

        {/* Section 2: Tips Keselamatan di Alam */}
        <section className="safety-tips-section">
          <div className="safety-card-container">
            <div className="safety-left-content">
              <div className="section-header-row">
                <div className="header-icon-circle">
                  <span className="material-symbols-outlined">explore</span>
                </div>
                <div className="header-text-group">
                  <h2 className="section-main-title">
                    Tips Keselamatan di Alam
                  </h2>
                  <p className="section-sub-title">
                    Persiapan yang baik, perjalanan yang lebih aman.
                  </p>
                </div>
              </div>

              <div className="safety-items-row">
                <div className="safety-item">
                  <div className="safety-item-icon">
                    <span className="material-symbols-outlined">backpack</span>
                  </div>
                  <p className="safety-item-text">
                    Gunakan perlengkapan yang sesuai.
                  </p>
                </div>

                <div className="safety-divider"></div>

                <div className="safety-item">
                  <div className="safety-item-icon">
                    <span className="material-symbols-outlined">
                      water_bottle
                    </span>
                  </div>
                  <p className="safety-item-text">
                    Bawa air minum dan makanan secukupnya.
                  </p>
                </div>

                <div className="safety-divider"></div>

                <div className="safety-item">
                  <div className="safety-item-icon">
                    <span className="material-symbols-outlined">
                      smartphone
                    </span>
                  </div>
                  <p className="safety-item-text">
                    Pastikan baterai HP penuh dan aktifkan mode offline.
                  </p>
                </div>

                <div className="safety-divider"></div>

                <div className="safety-item">
                  <div className="safety-item-icon">
                    <span className="material-symbols-outlined">checkroom</span>
                  </div>
                  <p className="safety-item-text">
                    Gunakan pakaian dan alas kaki yang nyaman.
                  </p>
                </div>

                <div className="safety-divider"></div>

                <div className="safety-item">
                  <div className="safety-item-icon">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <p className="safety-item-text">
                    Jangan berwisata sendirian, utamakan kebersamaan.
                  </p>
                </div>
              </div>
            </div>

            <div className="safety-image-wrap">
              <img
                src="/assets/images/bantuan_darurat/tips_keselamatan.png"
                alt="Tas carrier di puncak bukit pemandangan alam"
                className="safety-img"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Informasi Bantuan Cepat */}
        <section className="quick-help-section">
          <div className="quick-help-container">
            <div className="section-header-row">
              <div className="header-icon-circle">
                <span className="material-symbols-outlined">
                  health_and_safety
                </span>
              </div>
              <div className="header-text-group">
                <h2 className="section-main-title">Informasi Bantuan Cepat</h2>
                <p className="section-sub-title">
                  Akses informasi penting yang mungkin kamu butuhkan selama
                  perjalanan.
                </p>
              </div>
            </div>

            <div className="help-grid">
              {/* Card 1 */}
              <Link
                href="/nomor-darurat-umum"
                className="help-card"
                aria-label="Lihat Nomor Darurat Umum"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-red">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">Nomor Darurat Umum</h3>
                  <p className="help-card-desc">
                    Polisi, Ambulans, Pemadam Kebakaran, dan layanan darurat
                    lainnya
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </Link>

              {/* Card 2 */}
              <a
                href="#faskes-info"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('faskes');
                }}
                className="help-card"
                aria-label="Lihat Fasilitas Kesehatan Terdekat"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-green">
                    <span className="material-symbols-outlined">
                      local_hospital
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">
                    Fasilitas Kesehatan Terdekat
                  </h3>
                  <p className="help-card-desc">
                    Puskesmas, klinik, dan rumah sakit terdekat di sekitar area
                    wisata
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </a>

              {/* Card 3 */}
              <a
                href="#cuaca-info"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('cuaca');
                }}
                className="help-card"
                aria-label="Lihat Informasi Cuaca"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-blue">
                    <span className="material-symbols-outlined">air</span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">Informasi Cuaca</h3>
                  <p className="help-card-desc">
                    Cek kondisi cuaca terkini dan peringatan dini sebelum
                    berangkat
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </a>

              {/* Card 4 */}
              <a
                href="#wanita-info"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('wanita');
                }}
                className="help-card"
                aria-label="Lihat Tips Keamanan Wanita"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-orange">
                    <span className="material-symbols-outlined">female</span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">Tips Keamanan Wanita</h3>
                  <p className="help-card-desc">
                    Hal-hal yang perlu diperhatikan selama berwisata di alam.
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </a>

              {/* Card 5 */}
              <a
                href="#edukasi-info"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('edukasi');
                }}
                className="help-card"
                aria-label="Lihat Edukasi dan Pencegahan"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-orange">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">Edukasi dan Pencegahan</h3>
                  <p className="help-card-desc">
                    Kenali potensi bahaya, cara menghindari pungli dan tips
                    keselamatan lainnya.
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </a>

              {/* Card 6 */}
              <a
                href="#hubungi-info"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveModal('hubungi');
                }}
                className="help-card"
                aria-label="Hubungi Tim Kami"
              >
                <div className="help-card-top">
                  <div className="help-card-icon icon-darkgreen">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                </div>
                <div>
                  <h3 className="help-card-title">Hubungi Tim Kami</h3>
                  <p className="help-card-desc">
                    Untuk pertanyaan, saran, atau informasi tambahan.
                  </p>
                </div>
                <span className="help-card-action">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Pertanyaan yang Sering Ditanyakan (FAQ) */}
        <section className="faq-section">
          <div className="faq-container">
            <div className="section-header-row">
              <div className="header-icon-circle">
                <span className="material-symbols-outlined">help</span>
              </div>
              <div className="header-text-group">
                <h2 className="section-main-title">
                  Pertanyaan yang Sering Ditanyakan
                </h2>
                <p className="section-sub-title">
                  Temukan jawaban dari pertanyaan umum seputar bantuan darurat
                  dan keamanan wisata.
                </p>
              </div>
            </div>

            <div className="faq-grid">
              <div className="faq-column">
                {LEFT_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                      style={idx > 0 ? { marginTop: 16 } : undefined}
                    >
                      <div
                        className="faq-question"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <span className="faq-question-text">{faq.q}</span>
                        <button
                          type="button"
                          className="faq-toggle-btn"
                          aria-label="Buka jawaban"
                          aria-expanded={isOpen}
                        >
                          <span className="material-symbols-outlined">
                            keyboard_arrow_down
                          </span>
                        </button>
                      </div>
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="faq-column">
                {RIGHT_FAQS.map((faq, idx) => {
                  const isOpen = openFaqIds.includes(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                      style={idx > 0 ? { marginTop: 16 } : undefined}
                    >
                      <div
                        className="faq-question"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <span className="faq-question-text">{faq.q}</span>
                        <button
                          type="button"
                          className="faq-toggle-btn"
                          aria-label="Buka jawaban"
                          aria-expanded={isOpen}
                        >
                          <span className="material-symbols-outlined">
                            keyboard_arrow_down
                          </span>
                        </button>
                      </div>
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Banner Bawah */}
        <section className="banner-bottom-section">
          <div className="banner-bottom-wrapper">
            <img
              src="/assets/images/bantuan_darurat/banner_bawah.png"
              alt="Pemandangan pegunungan berkabut"
              className="banner-bottom-img"
            />
          </div>
        </section>
      </main>

      <Footer />

      {activeModal && (
        <div
          className="eksplo-modal-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="eksplo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eksplo-modal-header">
              <h3>
                <span className="material-symbols-outlined">
                  {HELP_MODALS[activeModal].icon}
                </span>
                {HELP_MODALS[activeModal].title}
              </h3>
              <button
                type="button"
                className="eksplo-modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Tutup panduan"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="eksplo-modal-body">
              <ul
                style={{
                  paddingLeft: 18,
                  listStyle: 'disc',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {HELP_MODALS[activeModal].points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="eksplo-modal-actions">
                <Link
                  href="/nomor-darurat-umum"
                  className="eksplo-modal-btn"
                  onClick={() => setActiveModal(null)}
                >
                  Lihat Nomor Darurat Umum
                </Link>
                <button
                  type="button"
                  className="eksplo-modal-btn secondary"
                  onClick={() => setActiveModal(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
