'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type EduTab = 'edukasi' | 'pencegahan' | 'tips_umum';

interface EduCard {
  id: string;
  categoryBadge: 'Edukasi' | 'Pencegahan' | 'Tips Umum';
  title: string;
  desc: string;
  illustrationType: 'risiko_alam' | 'privasi_sosmed' | 'hak_perempuan' | 'cuaca_ekstrem' | 'cegah_kehilangan' | 'hindari_area';
  details: string[];
}

const TAB_DATA: Record<EduTab, EduCard[]> = {
  edukasi: [
    {
      id: 'risiko_alam',
      categoryBadge: 'Edukasi',
      title: 'Kenali Risiko di Alam Bebas',
      desc: 'Pelajari potensi bahaya saat mendaki, berwisata di alam, dan cara mengenalinya sejak dini.',
      illustrationType: 'risiko_alam',
      details: [
        'Kenali kontur medan dan risiko hipotermia saat berada di ketinggian.',
        'Waspadai perubahan debit air tiba-tiba saat berada di sekitar curug atau aliran sungai.',
        'Bawa selalu peta jalur, peluit, dan kompas cadangan selain navigasi ponsel.',
      ],
    },
    {
      id: 'privasi_sosmed',
      categoryBadge: 'Edukasi',
      title: 'Jaga Privasi di Media Sosial',
      desc: 'Hindari membagikan lokasi real-time, foto pribadi, dan informasi perjalanan secara berlebihan.',
      illustrationType: 'privasi_sosmed',
      details: [
        'Tunda mengunggah lokasi spesifik hingga kamu telah berpindah ke tempat lain.',
        'Jangan membagikan nomor kamar, nama homestay, atau tiket perjalanan secara publik.',
        'Pastikan pengaturan privasi akun media sosial kamu terkunci dari orang tidak dikenal.',
      ],
    },
    {
      id: 'hak_perempuan',
      categoryBadge: 'Edukasi',
      title: 'Pahami Hak dan Perempuan',
      desc: 'Kenali hak-hakmu sebagai perempuan saat bepergian dan cara mendapatkan bantuan jika mengalami kekerasan.',
      illustrationType: 'hak_perempuan',
      details: [
        'Kamu berhak menolak segala bentuk perlakuan atau perkataan yang tidak pantas.',
        'Catat kontak layanan darurat SAPA 129 (KemenPPPA) dan pos jaga keamanan terdekat.',
        'Jangan ragu meminta bantuan petugas berseragam jika merasa tidak aman.',
      ],
    },
    {
      id: 'cuaca_ekstrem',
      categoryBadge: 'Pencegahan',
      title: 'Waspada Cuaca Ekstrem',
      desc: 'Perhatikan prakiraan cuaca dan hindari perjalanan saat kondisi cuaca berbahaya.',
      illustrationType: 'cuaca_ekstrem',
      details: [
        'Selalu periksa prakiraan cuaca BMKG setempat sebelum memulai perjalanan.',
        'Hindari berteduh di bawah pohon rindang atau tebing curam saat hujan deras disertai angin.',
        'Siapkan jas hujan berkualitas dan kantong tahan air (dry bag) untuk barang elektronik.',
      ],
    },
    {
      id: 'cegah_kehilangan',
      categoryBadge: 'Pencegahan',
      title: 'Cegah Kehilangan Barang',
      desc: 'Gunakan tas yang aman, jangan membawa barang berharga berlebihan, dan selalu jaga barang bawaan.',
      illustrationType: 'cegah_kehilangan',
      details: [
        'Gunakan tas selempang depan atau backpack dengan resleting tersembunyi.',
        'Simpan dokumen penting dan uang cadangan di kantong terpisah.',
        'Lakukan pengecekan ganda pada barang bawaan sebelum meninggalkan area istirahat.',
      ],
    },
    {
      id: 'hindari_area',
      categoryBadge: 'Pencegahan',
      title: 'Hindari Area Berisiko',
      desc: 'Jauhi area sepi, rawan longsor, dan lokasi yang tidak direkomendasikan untuk wisatawan.',
      illustrationType: 'hindari_area',
      details: [
        'Tetap ikuti jalur wisata resmi dan patuhi rambu peringatan larangan masuk.',
        'Hindari menjelajahi tebing curam atau tepi jurang demi mengambil swafoto.',
        'Kembalilah ke titik kumpul atau pos registrasi sebelum petang tiba.',
      ],
    },
  ],
  pencegahan: [
    {
      id: 'cuaca_ekstrem_p',
      categoryBadge: 'Pencegahan',
      title: 'Waspada Cuaca Ekstrem',
      desc: 'Perhatikan prakiraan cuaca dan hindari perjalanan saat kondisi cuaca berbahaya.',
      illustrationType: 'cuaca_ekstrem',
      details: [
        'Periksa prakiraan cuaca harian dan pantau awan kumulonimbus di area pegunungan.',
        'Batalkan atau tunda aktivitas susur sungai jika langit di hulu mulai gelap.',
        'Kenakan pakaian bertingkat (layering) untuk mengantisipasi penurunan suhu mendadak.',
      ],
    },
    {
      id: 'cegah_kehilangan_p',
      categoryBadge: 'Pencegahan',
      title: 'Cegah Kehilangan Barang',
      desc: 'Gunakan tas yang aman, jangan membawa barang berharga berlebihan, dan selalu jaga barang bawaan.',
      illustrationType: 'cegah_kehilangan',
      details: [
        'Pasang gantungan kunci atau tali pengaman pada ponsel dan dompet kamu.',
        'Gunakan gembok TSA pada ransel utama saat dititipkan atau di bagasi umum.',
        'Foto nomor seri perangkat penting sebelum berangkat untuk memudahkan pelaporan.',
      ],
    },
    {
      id: 'hindari_area_p',
      categoryBadge: 'Pencegahan',
      title: 'Hindari Area Berisiko',
      desc: 'Jauhi area sepi, rawan longsor, dan lokasi yang tidak direkomendasikan untuk wisatawan.',
      illustrationType: 'hindari_area',
      details: [
        'Jangan berjalan sendirian di lorong atau jalur setapak yang minim penerangan.',
        'Perhatikan tanda-tanda retakan tanah atau batu gugur di lereng bukit.',
        'Selalu lapor ke pos ranger mengenai rute dan estimasi waktu kembali kamu.',
      ],
    },
    {
      id: 'cegah_pungli',
      categoryBadge: 'Pencegahan',
      title: 'Kenali & Hindari Praktik Pungli',
      desc: 'Pastikan bertransaksi hanya pada loket resmi dan meminta karcis retribusi yang sah.',
      illustrationType: 'risiko_alam',
      details: [
        'Minta tiket masuk resmi yang memiliki stempel instansi pemerintah atau pengelola.',
        'Tolak tarif parkir di luar ketentuan yang tercantum di papan pengumuman resmi.',
        'Laporkan ke pihak berwajib melalui saluran Hubungi Tim Kami jika menemukan pungli.',
      ],
    },
    {
      id: 'kebugaran_fisik',
      categoryBadge: 'Pencegahan',
      title: 'Jaga Kebugaran & Hidrasi',
      desc: 'Persiapkan fisik yang prima dan minum air secara berkala untuk mencegah kelelahan ekstrem.',
      illustrationType: 'hak_perempuan',
      details: [
        'Bawa botol air minum minimal 1.5 liter untuk rute pendakian sedang.',
        'Jangan memaksakan diri jika merasa pusing, mual, atau detak jantung tidak teratur.',
        'Bawa camilan berenergi tinggi seperti madu, cokelat, atau kurma.',
      ],
    },
    {
      id: 'sinyal_darurat',
      categoryBadge: 'Pencegahan',
      title: 'Ketahui Sinyal Komunikasi Darurat',
      desc: 'Kuasai kode peluit dan tanda SOS visual jika terjadi kendala tanpa sinyal ponsel.',
      illustrationType: 'privasi_sosmed',
      details: [
        'Tiupan peluit 3 kali beruntun adalah sinyal internasional untuk meminta bantuan darurat.',
        'Nyalakan lampu senter berkedip 3 kali pendek, 3 kali panjang, 3 kali pendek (SOS).',
        'Tetap berada di lokasi aman terbuka agar mudah terpantau oleh tim pencari (SAR).',
      ],
    },
  ],
  tips_umum: [
    {
      id: 'etika_wisata',
      categoryBadge: 'Tips Umum',
      title: 'Etika Berwisata Ramah Lingkungan',
      desc: 'Terapkan prinsip Leave No Trace: bawa pulang sampahmu dan hargai kearifan lokal.',
      illustrationType: 'hindari_area',
      details: [
        'Bawa kantong sampah sendiri dan jangan tinggalkan puntung rokok atau plastik di alam.',
        'Hormati adat istiadat dan pakaian sopan di sekitar pemukiman warga desa wisata.',
        'Jangan memetik bunga edelweis atau merusak tanaman liar di cagar alam.',
      ],
    },
    {
      id: 'persiapan_dokumen',
      categoryBadge: 'Tips Umum',
      title: 'Salinan Digital Dokumen Penting',
      desc: 'Simpan foto KTP, asuransi perjalanan, dan kontak darurat di penyimpanan cloud terenkripsi.',
      illustrationType: 'cegah_kehilangan',
      details: [
        'Simpan foto KTP dan kartu keluarga di Google Drive atau cloud yang bisa diakses offline.',
        'Beri tanda kepemilikan nama dan nomor darurat di label dalam ransel kamu.',
        'Pastikan keluarga terdekat memegang salinan rencana perjalanan lengkap kamu.',
      ],
    },
    {
      id: 'aplikasi_pendukung',
      categoryBadge: 'Tips Umum',
      title: 'Gunakan Aplikasi Peta Offline',
      desc: 'Unduh area peta Bogor dan Puncak di Google Maps sebelum sinyal internet terputus.',
      illustrationType: 'privasi_sosmed',
      details: [
        'Fitur Offline Maps di Google Maps bekerja tanpa koneksi seluler menggunakan GPS satelit.',
        'Simpan bookmark titik pos jaga, klinik, dan tempat parkir resmi sebelum berangkat.',
        'Gunakan aplikasi kompas bawaan smartphone yang tidak memerlukan kuota data.',
      ],
    },
    {
      id: 'perlengkapan_p3k',
      categoryBadge: 'Tips Umum',
      title: 'Kelengkapan Kotak Obat Personal (P3K)',
      desc: 'Bawa obat-obatan pribadi, perban elastis, antiseptik, dan obat alergi di kantong luar ransel.',
      illustrationType: 'risiko_alam',
      details: [
        'Siapkan plester luka, betadine, kasa steril, dan minyak kayu putih/balsam hangat.',
        'Bawa obat pribadi seperti inhaler asma atau antihistamin jika memiliki riwayat khusus.',
        'Sertakan oralit untuk mengantisipasi diare atau dehidrasi mendadak.',
      ],
    },
    {
      id: 'pemandu_resmi',
      categoryBadge: 'Tips Umum',
      title: 'Gunakan Jasa Pemandu Resmi',
      desc: 'Dapatkan pendampingan dari ranger lokal bersertifikat untuk rute alam yang menantang.',
      illustrationType: 'hak_perempuan',
      details: [
        'Pemandu lokal bersertifikat memahami perubahan medan, cuaca, dan flora fauna lokal.',
        'Menyewa pemandu juga memberdayakan ekonomi masyarakat sekitar destinasi wisata.',
        'Pastikan pemandu kamu terdaftar di koperasi atau asosiasi pemandu wisata resmi.',
      ],
    },
    {
      id: 'antisipasi_dingin',
      categoryBadge: 'Tips Umum',
      title: 'Atasi Penurunan Suhu dan Angin',
      desc: 'Lindungi tubuh dengan jaket windproof dan kupluk saat beraktivitas di puncak berkabut.',
      illustrationType: 'cuaca_ekstrem',
      details: [
        'Suhu di kawasan Puncak dan Gunung Luhur dapat turun drastis di bawah 17°C di malam hari.',
        'Hindari memakai pakaian berbahan jeans basah karena mempercepat hilangnya panas tubuh.',
        'Konsumsi minuman hangat dan makanan berkuah saat beristirahat.',
      ],
    },
  ],
};

export default function EdukasiPencegahanContent() {
  const [activeTab, setActiveTab] = useState<EduTab>('edukasi');
  const [selectedCardForModal, setSelectedCardForModal] = useState<EduCard | null>(null);

  const renderIllustration = (type: EduCard['illustrationType']) => {
    switch (type) {
      case 'risiko_alam':
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#F0FDFA" rx="10" />
            {/* Mountains background */}
            <path d="M-10 110 L60 40 L130 110 Z" fill="#99F6E4" opacity="0.6" />
            <path d="M80 110 L150 30 L220 110 Z" fill="#5EEAD4" opacity="0.7" />
            <path d="M140 110 L190 55 L240 110 Z" fill="#2DD4BF" opacity="0.5" />
            {/* Hiker with backpack & hat */}
            <circle cx="110" cy="52" r="9" fill="#FBD38D" />
            <ellipse cx="110" cy="46" rx="15" ry="4" fill="#F59E0B" />
            {/* Backpack */}
            <rect x="94" y="60" width="10" height="24" rx="4" fill="#0D9488" />
            {/* Body */}
            <path d="M102 61 C102 58 118 58 118 61 L120 90 L100 90 Z" fill="#EF4444" />
            {/* Map in hands */}
            <rect x="114" y="66" width="14" height="18" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="117" y1="72" x2="125" y2="72" stroke="#0D9488" strokeWidth="1.5" />
            <line x1="117" y1="77" x2="123" y2="77" stroke="#0D9488" strokeWidth="1.5" />
          </svg>
        );
      case 'privasi_sosmed':
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#F0F9FF" rx="10" />
            {/* Mountain wave */}
            <path d="M0 110 L60 65 L130 110 Z" fill="#BAE6FD" opacity="0.7" />
            <path d="M90 110 L160 50 L230 110 Z" fill="#7DD3FC" opacity="0.5" />
            {/* Smartphone */}
            <rect x="92" y="24" width="36" height="66" rx="6" fill="#FFFFFF" stroke="#64748B" strokeWidth="2.5" />
            <rect x="97" y="32" width="26" height="42" rx="3" fill="#F1F5F9" />
            <path d="M104 42 Q110 46 114 40 T116 56" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
            {/* Pin */}
            <circle cx="114" cy="38" r="4" fill="#EF4444" />
            {/* Wifi waves */}
            <path d="M135 34 A10 10 0 0 1 143 42" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <path d="M139 30 A15 15 0 0 1 149 42" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            {/* Green Shield Check */}
            <circle cx="140" cy="74" r="11" fill="#10B981" />
            <path d="M136 74 L139 77 L145 71" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'hak_perempuan':
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#FAF5FF" rx="10" />
            {/* Mountains */}
            <path d="M-20 110 L50 45 L120 110 Z" fill="#E9D5FF" opacity="0.8" />
            <path d="M70 110 L150 35 L230 110 Z" fill="#D8B4FE" opacity="0.6" />
            {/* Female traveler side profile looking right */}
            <circle cx="130" cy="50" r="9" fill="#FBD38D" />
            <path d="M123 50 C123 40 137 40 137 50 C137 57 134 62 134 66 L124 66 Z" fill="#1E293B" />
            {/* Blue jacket */}
            <path d="M124 67 C124 62 140 62 140 67 L142 95 L122 95 Z" fill="#E11D48" />
            {/* Backpack on back (left) */}
            <rect x="115" y="65" width="9" height="24" rx="4" fill="#0D9488" />
          </svg>
        );
      case 'cuaca_ekstrem':
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#F0FDF4" rx="10" />
            {/* Mountains */}
            <path d="M-10 110 L55 55 L120 110 Z" fill="#BBF7D0" opacity="0.7" />
            <path d="M70 110 L145 42 L220 110 Z" fill="#86EFAC" opacity="0.5" />
            {/* Sun */}
            <circle cx="85" cy="42" r="14" fill="#F59E0B" />
            {/* Rain Cloud */}
            <path
              d="M125 66 C131 66 136 61 136 55 C136 49.5 131.5 45 126 44.5 C124.5 35 116 28 106 28 C97 28 89.5 34 87.5 42.5 C87 42.5 86 42.5 85.5 42.5 C80 42.5 75 47 75 52.5 C75 58 79.5 62.5 85 62.8 L125 66Z"
              fill="#93C5FD"
            />
            {/* Raindrops */}
            <line x1="92" y1="72" x2="89" y2="82" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="105" y1="72" x2="102" y2="82" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="118" y1="72" x2="115" y2="82" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        );
      case 'cegah_kehilangan':
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#F8FAFC" rx="10" />
            {/* Mountains */}
            <path d="M0 110 L70 50 L140 110 Z" fill="#CBD5E1" opacity="0.6" />
            <path d="M100 110 L160 45 L220 110 Z" fill="#94A3B8" opacity="0.5" />
            {/* Male Hiker with backpack */}
            <circle cx="95" cy="48" r="9" fill="#FBD38D" />
            <path d="M88 44 C88 38 102 38 102 44 Z" fill="#334155" />
            <rect x="79" y="56" width="9" height="25" rx="3" fill="#0D9488" />
            <path d="M88 58 C88 54 104 54 104 58 L105 88 L87 88 Z" fill="#F97316" />
            {/* Shield Checkmark */}
            <circle cx="135" cy="62" r="14" fill="#10B981" />
            <path d="M130 62 L134 66 L141 58" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'hindari_area':
      default:
        return (
          <svg width="100%" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="220" height="110" fill="#F0FDF4" rx="10" />
            {/* Pine Trees */}
            <path d="M45 85 L35 70 H38 L30 55 H34 L26 40 L34 55 H30 L38 70 H35 Z" fill="#86EFAC" />
            <path d="M175 85 L165 68 H169 L160 52 H164 L155 36 L164 52 H160 L169 68 H165 Z" fill="#86EFAC" />
            {/* Tent */}
            <polygon points="108,40 76,86 140,86" fill="#0D9488" />
            <polygon points="108,40 108,86 140,86" fill="#14B8A6" />
            {/* Campfire */}
            <path d="M152 86 L156 76 L160 86 Z" fill="#F59E0B" />
            <path d="M154 86 L156 79 L158 86 Z" fill="#EF4444" />
          </svg>
        );
    }
  };

  return (
    <div className="view-transition-wrapper">
      {/* Navbar: Variant main with Bantuan Darurat active */}
      <Navbar variant="main" activeMainTab="bantuan" />

      <main className="edukasi-page-main">
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
        <div className="edukasi-container">
          {/* Breadcrumb Navigation */}
          <div className="faskes-breadcrumb-bar">
            <Link href="/bantuan-darurat" className="faskes-back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Kembali ke Bantuan Darurat</span>
            </Link>
          </div>

          {/* Section Header Banner */}
          <div className="edukasi-header-banner">
            <div className="edukasi-shield-icon-box" aria-hidden="true">
              <svg width="42" height="46" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Green shield */}
                <path d="M12 0L0 4.5V13.5C0 21.2 5.1 28.3 12 30C18.9 28.3 24 21.2 24 13.5V4.5L12 0Z" fill="#15803D" />
                {/* Academic / Graduation Hat Icon */}
                <path d="M12 8L5 12L12 16L19 12L12 8Z" fill="#FFFFFF" />
                <path d="M8 14.5V18.5C8 19.5 9.8 20.5 12 20.5C14.2 20.5 16 19.5 16 18.5V14.5L12 17L8 14.5Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="edukasi-header-text">
              <h2 className="edukasi-main-title">Edukasi dan Pencegahan</h2>
              <p className="edukasi-subtitle">
                Kenali risiko, pahami langkah pencegahan, dan persiapkan diri agar perjalanan lebih aman,
                nyaman, dan menyenangkan.
              </p>
            </div>
          </div>

          {/* 3. Filter Tabs Bar */}
          <div className="edukasi-filter-tabs-bar" role="tablist" aria-label="Kategori Edukasi">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'edukasi'}
              className={`btn-edu-tab ${activeTab === 'edukasi' ? 'active-edu-tab' : ''}`}
              onClick={() => setActiveTab('edukasi')}
            >
              <span className="material-symbols-outlined edu-tab-icon">menu_book</span>
              <span>Edukasi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'pencegahan'}
              className={`btn-edu-tab ${activeTab === 'pencegahan' ? 'active-edu-tab' : ''}`}
              onClick={() => setActiveTab('pencegahan')}
            >
              <span className="material-symbols-outlined edu-tab-icon">shield</span>
              <span>Pencegahan Berdasarkan Situasi</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'tips_umum'}
              className={`btn-edu-tab ${activeTab === 'tips_umum' ? 'active-edu-tab' : ''}`}
              onClick={() => setActiveTab('tips_umum')}
            >
              <span className="material-symbols-outlined edu-tab-icon">lightbulb</span>
              <span>Tips Umum</span>
            </button>
          </div>

          {/* 4. Two-Column Layout: Grid Cards (Left) + Sidebar (Right) */}
          <div className="edukasi-layout-grid">
            {/* === LEFT CONTENT AREA: 6 Cards === */}
            <div className="edukasi-cards-grid">
              {TAB_DATA[activeTab].map((card) => (
                <article key={card.id} className="edu-card-item">
                  {/* Card Illustration + Badge */}
                  <div className="edu-card-ill-wrapper">
                    <span
                      className={`edu-badge-tag ${
                        card.categoryBadge === 'Edukasi'
                          ? 'badge-tag-edu'
                          : card.categoryBadge === 'Pencegahan'
                          ? 'badge-tag-pencegahan'
                          : 'badge-tag-tips'
                      }`}
                    >
                      {card.categoryBadge}
                    </span>
                    <div className="edu-card-svg-container">
                      {renderIllustration(card.illustrationType)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="edu-card-body">
                    <h3 className="edu-card-title">{card.title}</h3>
                    <p className="edu-card-desc">{card.desc}</p>
                    <button
                      type="button"
                      className="btn-read-more"
                      onClick={() => setSelectedCardForModal(card)}
                    >
                      <span>Baca Selengkapnya</span>
                      <span className="material-symbols-outlined read-arrow-icon">arrow_forward</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* === RIGHT SIDEBAR === */}
            <aside className="edukasi-right-sidebar">
              {/* Card 1: Informasi Penting Links */}
              <div className="sidebar-info-penting-card">
                <div className="info-penting-header">
                  <div className="info-shield-circle">
                    <span className="material-symbols-outlined">shield</span>
                  </div>
                  <div>
                    <h4 className="info-penting-title">Informasi Penting</h4>
                    <p className="info-penting-sub">
                      Beberapa hal yang perlu kamu ketahui sebelum dan selama perjalanan.
                    </p>
                  </div>
                </div>

                <div className="info-links-list">
                  {/* Link 1 */}
                  <Link href="/nomor-darurat-umum" className="info-link-item">
                    <div className="link-item-icon bg-icon-green">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div className="link-item-texts">
                      <span className="link-title">Daftar Nomor Darurat</span>
                      <span className="link-desc">Polisi, ambulans, dan layanan penting</span>
                    </div>
                    <span className="material-symbols-outlined link-chevron">chevron_right</span>
                  </Link>

                  {/* Link 2 */}
                  <button
                    type="button"
                    className="info-link-item btn-link-modal"
                    onClick={() =>
                      setSelectedCardForModal({
                        id: 'lapor_kehilangan',
                        categoryBadge: 'Pencegahan',
                        title: 'Prosedur Lapor Kehilangan',
                        desc: 'Langkah awal yang harus dilakukan jika kehilangan barang saat berwisata.',
                        illustrationType: 'cegah_kehilangan',
                        details: [
                          'Segera laporkan ke pos pengelola destinasi atau satpam terdekat.',
                          'Catat waktu dan lokasi terakhir barang kamu berada.',
                          'Kunjungi Polsek terdekat untuk membuat Surat Keterangan Tanda Lapor Kehilangan (SKTLK).',
                          'Hubungi bank untuk memblokir kartu debit/kredit jika dompet ikut hilang.',
                        ],
                      })
                    }
                  >
                    <div className="link-item-icon bg-icon-teal">
                      <span className="material-symbols-outlined">description</span>
                    </div>
                    <div className="link-item-texts">
                      <span className="link-title">Prosedur Lapor Kehilangan</span>
                      <span className="link-desc">Langkah awal saat kehilangan barang</span>
                    </div>
                    <span className="material-symbols-outlined link-chevron">chevron_right</span>
                  </button>

                  {/* Link 3 */}
                  <Link href="/tips-keamanan-wanita" className="info-link-item">
                    <div className="link-item-icon bg-icon-amber">
                      <span className="material-symbols-outlined">lightbulb</span>
                    </div>
                    <div className="link-item-texts">
                      <span className="link-title">Tips Traveling Aman</span>
                      <span className="link-desc">Persiapan sebelum berangkat</span>
                    </div>
                    <span className="material-symbols-outlined link-chevron">chevron_right</span>
                  </Link>

                  {/* Link 4 */}
                  <button
                    type="button"
                    className="info-link-item btn-link-modal"
                    onClick={() =>
                      setSelectedCardForModal({
                        id: 'simpan_info',
                        categoryBadge: 'Edukasi',
                        title: 'Simpan Informasi Penting',
                        desc: 'Dokumen penting, nomor darurat, dan data kontak keluarga.',
                        illustrationType: 'privasi_sosmed',
                        details: [
                          'Bawa fotokopi KTP dan simpan salinan digitalnya di ponsel kamu.',
                          'Catat nomor telepon keluarga terdekat di buku catatan fisik.',
                          'Simpan nomor call center asuransi atau pengelola wisata.',
                          'Pastikan baterai ponsel dan powerbank selalu terisi penuh.',
                        ],
                      })
                    }
                  >
                    <div className="link-item-icon bg-icon-blue">
                      <span className="material-symbols-outlined">folder</span>
                    </div>
                    <div className="link-item-texts">
                      <span className="link-title">Simpan Informasi Penting</span>
                      <span className="link-desc">Dokumen, kontak, dan data darurat</span>
                    </div>
                    <span className="material-symbols-outlined link-chevron">chevron_right</span>
                  </button>
                </div>
              </div>

              {/* Card 2: Quote Box with Mountain Silhouette */}
              <div className="sidebar-quote-box">
                <div className="quote-scenery-thumb">
                  <svg width="68" height="42" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 60 L40 20 L80 60 Z" fill="#99F6E4" opacity="0.8" />
                    <path d="M50 60 L80 30 L110 60 Z" fill="#2DD4BF" opacity="0.6" />
                    <circle cx="25" cy="55" r="8" fill="#10B981" />
                    <circle cx="35" cy="55" r="6" fill="#059669" />
                  </svg>
                </div>
                <blockquote className="quote-text">
                  &ldquo;Perjalanan yang aman berawal dari pengetahuan yang cukup.&rdquo;
                </blockquote>
              </div>

              {/* Card 3: Bersama Ciptakan Perjalanan yang Aman */}
              <div className="sidebar-co-action-card">
                <div className="co-action-header">
                  <div className="co-tree-icon">
                    <span className="material-symbols-outlined">park</span>
                  </div>
                  <div>
                    <h5 className="co-action-title">Bersama Ciptakan Perjalanan yang Aman</h5>
                    <p className="co-action-desc">Edukasi hari ini, perjalanan yang lebih baik esok.</p>
                  </div>
                </div>
                <div className="co-action-slogan">
                  <span>Jelajah Dengan Aman</span>
                  <span className="slogan-heart">♡</span>
                </div>
              </div>
            </aside>
          </div>

          {/* 5. Bottom Advice Bar */}
          <div className="edukasi-bottom-bar">
            <div className="bottom-bar-left">
              <span className="material-symbols-outlined info-circle-icon">info</span>
              <p className="bottom-bar-text">
                <strong>Tips tambahan:</strong> Selalu ikuti arahan petugas, kenali lingkungan sekitar,
                dan jangan ragu untuk meminta bantuan jika merasa tidak aman.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Detail Panduan when clicking "Baca Selengkapnya" */}
        {selectedCardForModal && (
          <div
            className="edu-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-edu-title"
            onClick={() => setSelectedCardForModal(null)}
          >
            <div
              className="edu-modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="edu-modal-top">
                <span className="edu-modal-badge">{selectedCardForModal.categoryBadge}</span>
                <button
                  type="button"
                  className="btn-close-modal"
                  aria-label="Tutup panduan"
                  onClick={() => setSelectedCardForModal(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <h3 id="modal-edu-title" className="edu-modal-title">
                {selectedCardForModal.title}
              </h3>
              <p className="edu-modal-desc">{selectedCardForModal.desc}</p>

              <div className="edu-modal-checklist-box">
                <h4 className="checklist-heading">Poin Panduan Keselamatan:</h4>
                <ul className="modal-checklist">
                  {selectedCardForModal.details.map((point, idx) => (
                    <li key={idx} className="modal-checklist-item">
                      <span className="material-symbols-outlined check-icon">check_circle</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                className="btn-modal-understand"
                onClick={() => setSelectedCardForModal(null)}
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
