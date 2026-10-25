import React from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import {
  DestinationCard,
  PlaceholderSlotCard,
} from '@/components/DestinationCard';
import Footer from '@/components/Footer';

interface BerandaContentProps {
  destinations: Destination[];
  source?: 'supabase' | 'local_dummy';
}

const SLOT_TYPES: Array<'curug' | 'danau' | 'gunung'> = [
  'curug',
  'danau',
  'gunung',
];

export default function BerandaContent({
  destinations,
}: BerandaContentProps) {
  // Selalu prioritaskan destinasi terverifikasi di urutan paling atas beranda
  const sortedDestinations = [...destinations].sort((a, b) => {
    const aVer = a.status_verifikasi === 'terverifikasi' ? 1 : 0;
    const bVer = b.status_verifikasi === 'terverifikasi' ? 1 : 0;
    return bVer - aVer;
  });
  const displayedDestinations = sortedDestinations.slice(0, 6);
  const placeholderCount = Math.max(0, 6 - displayedDestinations.length);

  return (
    <div className="view-transition-wrapper">
      <main>
        {/* Hero Banner */}
        <section className="hero-section">
          <div className="hero-bg-wrapper">
            <img
              src="/assets/images/beranda/banner_atas.png"
              alt="Pemandangan danau dan gunung di Bogor"
              className="hero-banner-img"
            />
            <div className="hero-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="hero-badge">
              <span className="material-symbols-outlined">eco</span>
              <span>Jelajahi Alam, Jaga Bersama</span>
            </div>
            <h1 className="hero-title">
              Eksplorasi Wisata
              <br />
              Keindahan Alam di Bogor
              <br />
              yang <strong>Aman &amp; Transparan</strong>
            </h1>
            <p className="hero-desc">
              Temukan rute resmi, estimasi biaya riil, dan kondisi lapangan
              curug, danau, serta gunung atau bukit di Bogor tanpa khawatir
              pungli atau tersesat.
            </p>
            <ul className="hero-tags">
              <li>#CurugBogor</li>
              <li>#DanauIndah</li>
              <li>#TrekkingAman</li>
              <li>#BebasPungli</li>
            </ul>
          </div>
        </section>

        {/* Destinasi Wisata Populer */}
        <section className="destinations-section">
          <div className="destinations-header">
            <div className="destinations-title-group">
              <h2 className="destinations-title">
                Destinasi Wisata Alam Populer di Bogor
              </h2>
              <p className="destinations-subtitle">
                Eksplorasi berbagai destinasi wisata alam terbaik dengan
                informasi lengkap dan terverifikasi.
              </p>
            </div>
            <Link href="/eksplorasi" className="destinations-view-all">
              <span>Lihat Semua Destinasi</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="cards-grid">
            {displayedDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                fromOrigin="beranda"
              />
            ))}
            {Array.from({ length: placeholderCount }).map((_, idx) => (
              <PlaceholderSlotCard
                key={`beranda-slot-${idx + 1}`}
                slotNumber={displayedDestinations.length + idx + 1}
                categoryType={SLOT_TYPES[idx % SLOT_TYPES.length]}
              />
            ))}
          </div>
        </section>

        {/* Kenapa Pilih EksploTrip? */}
        <section className="value-prop-section">
          <div className="value-prop-card">
            <div className="value-prop-brand">
              <div className="brand-icon-wrapper">
                <span className="material-symbols-outlined brand-emblem-icon earth-eco">
                  eco
                </span>
              </div>
              <div>
                <h2 className="value-prop-title">
                  Kenapa Pilih
                  <br />
                  EksploTrip?
                </h2>
                <p className="value-prop-desc">
                  Karena perjalanan aman berawal dari informasi yang tepat.
                </p>
              </div>
            </div>

            <div className="value-prop-divider"></div>

            <ul className="value-prop-features">
              <li className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <h3 className="feature-title">Informasi Terverifikasi</h3>
                <p className="feature-desc">
                  Data resmi dari pengelola &amp; komunitas lokal
                </p>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">map</span>
                </div>
                <h3 className="feature-title">Peta &amp; Rute Aman</h3>
                <p className="feature-desc">
                  Bisa diakses offline saat sinyal hilang
                </p>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <h3 className="feature-title">Estimasi Biaya Riil</h3>
                <p className="feature-desc">Hindari overbudget dan pungli</p>
              </li>
              <li className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <h3 className="feature-title">Dukungan Komunitas</h3>
                <p className="feature-desc">
                  Bersama jaga alam dan wisata yang berkelanjutan
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-btn-wrapper">
            <Link href="/eksplorasi" className="cta-btn">
              <span>Cari Destinasi Sekarang</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="cta-banner-wrapper">
            <img
              src="/assets/images/beranda/banner_bawah.png"
              alt="Pemandangan pegunungan berkabut"
              className="cta-banner-img"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
