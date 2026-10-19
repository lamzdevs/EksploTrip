'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
                  src="/assets/images/detail_katalog/logo_eksplotrip_footer.png"
                  alt="EksploTrip Logo"
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

            <nav
              className="footer-col footer-col-links"
              aria-label="Navigasi Eksplorasi"
            >
              <h4 className="footer-col-title">Eksplorasi</h4>
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
              <h4 className="footer-col-title">Dukungan</h4>
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

            <div className="footer-col footer-col-social">
              <h4 className="footer-col-title">Tetap Terhubung</h4>
              <p className="footer-social-desc">
                Temukan berbagai informasi dan rekomendasi destinasi wisata alam
                untuk membantu merencanakan perjalanan yang aman dan
                menyenangkan bersama EksploTrip.
              </p>
              <ul className="footer-social-list">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    aria-label="Instagram EksploTrip"
                  >
                    <i className="fa-brands fa-instagram"></i>
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
                    <i className="fa-brands fa-tiktok"></i>
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
                    <i className="fa-brands fa-x-twitter"></i>
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
        >
          <div
            className="eksplo-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="eksplo-modal-header">
              <h3>
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
