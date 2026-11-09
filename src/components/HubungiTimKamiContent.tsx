'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: 'Berapa lama waktu respon dari tim EksploTrip?',
    answer:
      'Untuk pesan melalui WhatsApp dan media sosial, tim kami biasanya merespon dalam hitungan menit selama jam operasional. Untuk formulir dan email, respon maksimal 1x24 jam kerja.',
  },
  {
    question: 'Apa saja yang bisa saya laporkan?',
    answer:
      'Kamu dapat melaporkan kejadian pungli di area wisata, jalur berbahaya yang belum terverifikasi, kesalahan info tiket/jam buka, fasilitas umum yang rusak, serta kendala keamanan lainnya.',
  },
  {
    question: 'Bagaimana jika saya menemukan informasi destinasi yang tidak akurat?',
    answer:
      'Silakan kirimkan laporan kepada kami melalui formulir dengan kategori "Saran & Masukan", atau langsung kirimkan bukti foto dan koordinat lokasi ke WhatsApp kami agar segera diperbarui oleh tim kurator.',
  },
  {
    question: 'Apakah saya bisa mengajukan kerjasama atau sponsor?',
    answer:
      'Tentu saja! Pengelola destinasi, komunitas pecinta alam, dan brand pendukung petualangan dapat berkolaborasi dengan memilih kategori "Kerjasama & Sponsorship" atau menghubungi email info@eksplotrip.com.',
  },
  {
    question: 'Di jam berapa tim EksploTrip tersedia?',
    answer:
      'Layanan chat WhatsApp dan DM Instagram aktif setiap hari Senin - Minggu pukul 08.00 - 21.00 WIB. Layanan kantor dan panggilan telepon tersedia pada hari kerja Senin - Jumat pukul 08.00 - 17.00 WIB.',
  },
  {
    question: 'Apakah tersedia bantuan khusus saat keadaan darurat?',
    answer:
      'Untuk kondisi darurat keselamatan atau evakuasi di lokasi wisata, segera gunakan menu Nomor Darurat di Bantuan Darurat untuk langsung menghubungi Polisi (110), Ambulans (118), atau BNPB (119).',
  },
];

export default function HubungiTimKamiContent() {
  // Form State
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    kategori: '',
    pesan: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Auto-dismiss toast notification after 5 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  // Accordion State: index of expanded FAQ (null if none, default 0 for preview)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth simulation of submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({
        nama: '',
        email: '',
        kategori: '',
        pesan: '',
      });
    }, 600);
  };

  return (
    <div className="view-transition-wrapper">
      {/* Navbar: Variant main with Bantuan Darurat active */}
      <Navbar variant="main" activeMainTab="bantuan" />

      <main className="hubungi-page-main">
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
        <div className="hubungi-container">
          {/* Breadcrumb Navigation */}
          <div className="faskes-breadcrumb-bar">
            <Link href="/bantuan-darurat" className="faskes-back-link">
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Kembali ke Bantuan Darurat</span>
            </Link>
          </div>

          {/* Section Header Banner */}
          <div className="hubungi-header-banner">
            <div className="hubungi-shield-icon-box" aria-hidden="true">
              <svg width="40" height="46" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Green shield */}
                <path d="M12 0L0 4.5V13.5C0 21.2 5.1 28.3 12 30C18.9 28.3 24 21.2 24 13.5V4.5L12 0Z" fill="#15803D" />
                {/* White stylized leaf */}
                <path
                  d="M16.5 8.5C14.2 8.5 10.5 10.2 8.8 12.8C7.2 15.3 7.8 18.2 9.5 19.8C11.2 21.5 14.1 22.1 16.6 20.5C19.2 18.8 20.9 15.1 20.9 12.8C20.9 10.4 18.9 8.5 16.5 8.5ZM16.5 18C15 18 13.8 17.5 12.5 16.2C11.2 14.9 10.7 13.7 10.7 12.2C12.2 12.2 13.4 12.7 14.7 14C16 15.3 16.5 16.5 16.5 18Z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
            <div className="hubungi-header-text">
              <h2 className="hubungi-main-title">Hubungi Tim Kami</h2>
              <p className="hubungi-subtitle">
                Untuk pertanyaan, saran, aduan, atau informasi tambahan terkait keamanan
                perjalanan dan layanan di EksploTrip.
              </p>
            </div>
          </div>

          {/* 3. Row of 4 Contact Channel Cards */}
          <section className="contact-channels-grid" aria-label="Saluran Kontak Tim EksploTrip">
            {/* Card 1: Telepon */}
            <div className="channel-card-item">
              <div className="channel-icon-circle bg-circle-green">
                <span className="material-symbols-outlined">call</span>
              </div>
              <h3 className="channel-title">Telepon</h3>
              <p className="channel-desc">Hubungi tim kami langsung untuk respon cepat.</p>
              <a href="tel:+6281123456789" className="channel-action-pill pill-green">
                <span className="material-symbols-outlined icon-pill">call</span>
                <span className="channel-pill-text">+62 811 2345 6789</span>
              </a>
              <span className="channel-footer-note">Senin - Jumat, 08.00 - 17.00 WIB</span>
            </div>

            {/* Card 2: Email */}
            <div className="channel-card-item">
              <div className="channel-icon-circle bg-circle-blue">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="channel-title">Email</h3>
              <p className="channel-desc">Kirim pertanyaan atau laporan melalui email.</p>
              <a href="mailto:info@eksplotrip.com" className="channel-action-pill pill-blue">
                <span className="material-symbols-outlined icon-pill">mail</span>
                <span className="channel-pill-text">info@eksplotrip.com</span>
              </a>
              <span className="channel-footer-note">Respon maksimal 1x24 jam.</span>
            </div>

            {/* Card 3: Instagram */}
            <div className="channel-card-item">
              <div className="channel-icon-circle bg-circle-pink">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="channel-title">Instagram</h3>
              <p className="channel-desc">Hubungi kami melalui DM Instagram.</p>
              <a
                href="https://instagram.com/eksplotrip"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-pill pill-pink"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-pill-svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                </svg>
                <span className="channel-pill-text">@eksplotrip</span>
              </a>
              <span className="channel-footer-note">Senin - Minggu, 08.00 - 21.00 WIB</span>
            </div>

            {/* Card 4: Pesan Langsung (WhatsApp) */}
            <div className="channel-card-item">
              <div className="channel-icon-circle bg-circle-whatsapp">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <h3 className="channel-title">Pesan Langsung</h3>
              <p className="channel-desc">Chat dengan tim kami melalui WhatsApp.</p>
              <a
                href="https://wa.me/6281123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-action-pill pill-whatsapp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="icon-pill-svg">
                  <path d="M12.031 2C6.495 2 2 6.495 2 12.031C2 13.805 2.464 15.485 3.28 16.96L2.052 21.579L6.804 20.366C8.241 21.144 9.873 21.579 11.583 21.579H12.031C17.567 21.579 22.062 17.084 22.062 11.548C22.062 6.012 17.567 2 12.031 2ZM16.657 15.65C16.444 16.248 15.38 16.78 14.887 16.887C14.444 16.983 13.864 17.039 11.895 16.223C9.378 15.18 7.747 12.636 7.621 12.467C7.495 12.298 6.6 11.109 6.6 9.875C6.6 8.641 7.228 8.042 7.458 7.781C7.688 7.52 7.959 7.462 8.162 7.462C8.326 7.462 8.51 7.462 8.674 7.472C8.848 7.481 9.08 7.414 9.302 7.946C9.534 8.506 10.095 9.875 10.163 10.01C10.231 10.145 10.279 10.319 10.182 10.512C10.086 10.706 10.009 10.802 9.854 10.976C9.7 11.15 9.536 11.363 9.401 11.498C9.246 11.643 9.082 11.807 9.256 12.107C9.43 12.406 10.029 13.382 10.909 14.165C12.049 15.18 12.986 15.508 13.295 15.653C13.604 15.798 13.788 15.769 13.972 15.556C14.155 15.344 14.774 14.619 14.996 14.29C15.218 13.962 15.441 14.01 15.711 14.107C15.982 14.203 17.431 14.919 17.74 15.073C18.05 15.228 18.253 15.305 18.33 15.431C18.407 15.556 18.407 16.146 18.195 16.744L16.657 15.65Z" />
                </svg>
                <span className="channel-pill-text">Chat WhatsApp</span>
              </a>
              <span className="channel-footer-note">Senin - Minggu, 08.00 - 21.00 WIB</span>
            </div>
          </section>

          {/* 4. Lower Section: 3-Column Layout */}
          <section className="hubungi-lower-grid" aria-label="Formulir, FAQ, dan Jam Operasional">
            {/* Column 1: Kirim Pesan Kepada Kami (Form) */}
            <div className="hubungi-card-col form-card-box">
              <div className="card-col-header">
                <div className="col-icon-circle bg-circle-blue">
                  <span className="material-symbols-outlined">edit</span>
                </div>
                <div>
                  <h3 className="col-title">Kirim Pesan Kepada Kami</h3>
                  <p className="col-subtitle">Isi formulir berikut dan tim kami akan segera merespon.</p>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Row 1: Nama & Email */}
                <div className="form-fields-row">
                  <div className="form-field-group">
                    <label htmlFor="input-nama" className="form-label">
                      Nama Lengkap <span className="required-star">*</span>
                    </label>
                    <input
                      id="input-nama"
                      type="text"
                      name="nama"
                      required
                      value={formData.nama}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama kamu"
                      className="form-input"
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="input-email" className="form-label">
                      Email <span className="required-star">*</span>
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contoh@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2: Kategori */}
                <div className="form-field-group">
                  <label htmlFor="select-kategori" className="form-label">
                    Kategori <span className="required-star">*</span>
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="select-kategori"
                      name="kategori"
                      required
                      value={formData.kategori}
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      <option value="">Pilih kategori</option>
                      <option value="pertanyaan_umum">Pertanyaan Umum</option>
                      <option value="aduan_keamanan">Aduan Keamanan / Pungli</option>
                      <option value="saran_destinasi">Saran & Masukan Destinasi</option>
                      <option value="kendala_teknis">Kendala Teknis Website</option>
                      <option value="kerjasama">Kerjasama / Sponsorship</option>
                    </select>
                    <span className="material-symbols-outlined select-chevron" aria-hidden="true">expand_more</span>
                  </div>
                </div>

                {/* Row 3: Pesan */}
                <div className="form-field-group">
                  <label htmlFor="textarea-pesan" className="form-label">
                    Pesan <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="textarea-pesan"
                    name="pesan"
                    required
                    rows={4}
                    value={formData.pesan}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan kamu di sini..."
                    className="form-textarea"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit-message"
                >
                  <span className="material-symbols-outlined btn-send-icon" aria-hidden="true">send</span>
                  <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                </button>
              </form>
            </div>

            {/* Column 2: Pertanyaan yang Sering Diajukan (FAQ Accordion) */}
            <div className="hubungi-card-col faq-card-box">
              <div className="card-col-header">
                <div className="col-icon-circle bg-circle-amber">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <div>
                  <h3 className="col-title">Pertanyaan yang Sering Diajukan</h3>
                  <p className="col-subtitle">Cari jawaban cepat untuk pertanyaan umum.</p>
                </div>
              </div>

              <div className="faq-items-list" role="region" aria-label="Daftar FAQ">
                {FAQ_LIST.map((faq, index) => {
                  const isOpen = expandedFaq === index;
                  return (
                    <div
                      key={index}
                      className={`faq-accordion-item ${isOpen ? 'expanded' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-question-btn"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                        <span className="material-symbols-outlined faq-chevron-icon">
                          {isOpen ? 'expand_less' : 'chevron_right'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="faq-answer-panel">
                          <p className="faq-answer-text">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 3: Jam Operasional & Emergency Note */}
            <div className="hubungi-card-col ops-card-box">
              {/* Top: Jam Operasional */}
              <div className="card-col-header">
                <div className="col-icon-circle bg-circle-lightgreen">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h3 className="col-title">Jam Operasional</h3>
                  <p className="col-subtitle">Tim kami siap membantu kamu pada waktu berikut.</p>
                </div>
              </div>

              <div className="ops-schedule-list">
                {/* Schedule 1 */}
                <div className="schedule-item-row">
                  <div className="schedule-icon-circle bg-sched-green">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div className="schedule-item-details">
                    <strong className="schedule-day">Senin - Jumat</strong>
                    <span className="schedule-time">08.00 - 17.00 WIB</span>
                  </div>
                </div>

                {/* Schedule 2 */}
                <div className="schedule-item-row">
                  <div className="schedule-icon-circle bg-sched-red">
                    <span className="material-symbols-outlined">calendar_month</span>
                  </div>
                  <div className="schedule-item-details">
                    <strong className="schedule-day">Sabtu - Minggu</strong>
                    <span className="schedule-time">08.00 - 21.00 WIB</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Emergency Pine Trees Note Box */}
              <div className="ops-emergency-note-box">
                <div className="emergency-note-content">
                  <div className="emergency-note-icon">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <p className="emergency-note-text">
                    Untuk keadaan darurat yang membutuhkan pertolongan segera, silakan hubungi{' '}
                    <Link href="/nomor-darurat-umum" className="emergency-note-link">
                      nomor darurat
                    </Link>{' '}
                    pada menu sebelumnya.
                  </p>
                </div>

                {/* Decorative pine trees SVG vector watermark */}
                <div className="pine-trees-decoration" aria-hidden="true">
                  <svg width="90" height="60" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Tree 1 (Small) */}
                    <path d="M75 65 L65 52 H69 L61 40 H65 L57 26 L65 40 H61 L69 52 H65 Z" fill="#BBF7D0" opacity="0.6" />
                    {/* Tree 2 (Large) */}
                    <path d="M88 68 L78 50 H83 L74 34 H79 L70 16 L79 34 H74 L83 50 H78 Z" fill="#86EFAC" opacity="0.75" />
                    {/* Tree 3 (Medium) */}
                    <path d="M96 68 L88 54 H92 L85 40 H89 L82 24 L89 40 H85 L92 54 H88 Z" fill="#BBF7D0" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Toast Notification: Pesan Berhasil Terkirim */}
      {showToast && (
        <div className="toast-notification-container" role="status" aria-live="polite">
          <div className="toast-notification">
            <div className="toast-icon-wrap" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <div className="toast-body">
              <h4 className="toast-title">Pesan Berhasil Terkirim!</h4>
              <p className="toast-desc">
                Terima kasih atas pesan kamu. Tim EksploTrip akan segera menghubungi kamu melalui email dalam waktu maksimal 1x24 jam kerja.
              </p>
            </div>
            <button
              type="button"
              className="toast-close-btn"
              onClick={() => setShowToast(false)}
              aria-label="Tutup notifikasi"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="toast-progress-bar" />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
