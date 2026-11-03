'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import BrandIcon from '@/components/BrandIcon';

type SupportDocKey = 'privasi' | 'syarat' | null;

const SUPPORT_DOCS: Record<
  Exclude<SupportDocKey, null>,
  { title: string; body: string }
> = {
  privasi: {
    title: 'Kebijakan Privasi EksploTrip',
    body: 'EksploTrip berkomitmen melindungi privasi setiap pengunjung. Kami hanya menampilkan informasi publik destinasi wisata yang telah melalui tahapan verifikasi, dan menjaga keamanan penyimpanan basis data menggunakan Row Level Security (RLS) pada Supabase.',
  },
  syarat: {
    title: 'Syarat & Ketentuan Penggunaan',
    body: 'Informasi yang tersedia di EksploTrip dirancang untuk membantu persiapan perjalanan wisata alam secara aman dan transparan. Kondisi cuaca serta lingkungan alam dapat berubah sewaktu-waktu; pengunjung tetap wajib mematuhi aturan pengelola resmi di lapangan.',
  },
};

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState<SupportDocKey>(null);

  return (
    <>
      <footer className="site-footer" role="contentinfo">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-col footer-col-brand">
              <Link href="/" aria-label="EksploTrip Beranda">
                <img
                  src="/assets/images/detail_katalog/logo_eksplotrip_footer.webp"
                  alt="EksploTrip Logo"
                  width={130}
                  height={65}
                  loading="lazy"
                  decoding="async"
                  className="footer-logo"
                />
              </Link>
              <p className="footer-brand-desc">
                EksploTrip platform informasi pertama yang dirancang khusus
                wisata alam yang membantu kamu menemukan destinasi, mengenal
                kondisi perjalanan, serta mempersiapkan perjalanan dengan
                informasi yang lebih jelas dan transparan.
              </p>
            </div>

            <div className="footer-links-group">
              <nav
                className="footer-col footer-col-links"
                aria-label="Navigasi Eksplorasi"
              >
                <h3 className="footer-col-title">Eksplorasi</h3>
                <ul className="footer-links">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/eksplorasi">Eksplorasi Destinasi</Link>
                  </li>
                  <li>
                    <Link href="/bantuan-darurat">Bantuan Darurat</Link>
                  </li>
                </ul>
              </nav>

              <nav
                className="footer-col footer-col-links"
                aria-label="Navigasi Dukungan"
              >
                <h3 className="footer-col-title">Dukungan</h3>
                <ul className="footer-links">
                  <li>
                    <Link href="/bantuan-darurat">Pusat Bantuan</Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-link-btn"
                      onClick={() => setActiveDoc('privasi')}
                    >
                      Kebijakan Privasi
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="footer-link-btn"
                      onClick={() => setActiveDoc('syarat')}
                    >
                      Syarat &amp; Ketentuan
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="footer-col footer-col-social">
              <h3 className="footer-col-title">Tetap Terhubung</h3>
              <p className="footer-social-desc">
                Temukan berbagai informasi dan rekomendasi destinasi wisata alam
                untuk membantu merencanakan perjalanan yang aman dan
                menyenangkan bersama EksploTrip.
              </p>
              <ul className="footer-social-list">
                <li>
                  <a
                    href="https://www.instagram.com/eksplotrip/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Instagram EksploTrip"
                  >
                    <BrandIcon name="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="TikTok EksploTrip"
                  >
                    <BrandIcon name="tiktok" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="X (Twitter) EksploTrip"
                  >
                    <BrandIcon name="x-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />
          <p className="footer-copyright">
            <small>
              &copy; 2026 <strong>EksploTrip</strong>. Hak Cipta Dilindungi
            </small>
          </p>
        </div>
      </footer>

      {activeDoc && (
        <div
          className="eksplo-modal-overlay"
          onClick={() => setActiveDoc(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="support-doc-modal-title"
        >
          <div
            className="eksplo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eksplo-modal-header">
              <h3 id="support-doc-modal-title">
                <span className="material-symbols-outlined">info</span>
                {SUPPORT_DOCS[activeDoc].title}
              </h3>
              <button
                type="button"
                className="eksplo-modal-close"
                onClick={() => setActiveDoc(null)}
                aria-label="Tutup informasi"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="eksplo-modal-body">
              <p>{SUPPORT_DOCS[activeDoc].body}</p>
              <div className="eksplo-modal-actions">
                <button
                  type="button"
                  className="eksplo-modal-btn"
                  onClick={() => setActiveDoc(null)}
                >
                  Mengerti
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
