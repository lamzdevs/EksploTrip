# MASTER PROMPT VIBE CODING & DOKUMENTASI SISTEM - EKSPLOTRIP (NEXT.JS + SUPABASE)

Dokumen ini adalah acuan utama (single source of truth) untuk pengembangan, arsitektur, dan integrasi kode pada website **EksploTrip**. Seluruh instruksi dan standar teknis di bawah ini telah disesuaikan dengan arsitektur produksi terbaru.

---

## 1. Identitas Project & Peran Utama

- **Nama Platform:** EksploTrip
- **Tujuan Utama:** Platform eksplorasi destinasi wisata alam (Curug/Air Terjun, Situ/Danau, Bukit/Gunung) di kawasan Bogor (Kabupaten & Kota) yang berfokus pada informasi keamanan rute, transparansi fasilitas, dan verifikasi lapangan.
- **Peran Pengembang:** Senior Full-Stack Developer, UI/UX Engineer, dan Software Architect.
- **Repository GitHub:** [https://github.com/lamzdevs/EksploTrip.git](https://github.com/lamzdevs/EksploTrip.git) (Branch utama: `main`).
- **Tautan Desain & Prototipe Figma:**
  - **Figma Style Guide & High-Fidelity Design:** [Figma Hi-Fi EksploTrip](https://www.figma.com/design/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?node-id=0-1&t=lKX1yuPSSjN0HoyM-1)
  - **Figma Interactive Prototype:** [Figma Prototype EksploTrip](https://www.figma.com/proto/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?page-id=1%3A5&node-id=44-34&viewport=148%2C259%2C0.08&t=VNT7xefdW0VSZyLq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44%3A34)
  - **Figma User Flow:** [Figma User Flow EksploTrip](https://www.figma.com/design/7at9IJYSFAqIXx5M4giWUM/EKSPLOTRIP.?node-id=137-27&t=sNGIhbjTTiEWulUL-1)
  - **Figma Wireframe Low-Fidelity:** [Figma Wireframe EksploTrip](https://www.figma.com/design/7at9IJYSFAqIXx5M4giWUM/EKSPLOTRIP.?node-id=0-1&t=sNGIhbjTTiEWulUL-1)
- **Core Stack:**
  - **Framework:** Next.js 15 (App Router) + React 19
  - **Bahasa:** TypeScript (Strict Type Checking)
  - **Styling:** Vanilla Modular CSS (`globals.css`) dengan Design Tokens kustom
  - **Database:** Supabase (PostgreSQL) + Local-first fallback data TypeScript
  - **Bundler:** Turbopack (`next dev --turbopack`) & Webpack Production Build

---

## 2. Struktur Direktori Terkini

Struktur project aktif yang telah dimigrasikan dan berjalan di repository:

```text
EksploTrip/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── beranda/
│   │   │   ├── detail_katalog/
│   │   │   └── detail_visual/
│   │   └── visual/
│   │       ├── curug_cibulao/
│   │       │   └── banner_curug_cibulao.png
│   │       ├── gunung_luhur_sukamakmur/
│   │       │   └── banner_gunung_luhur_sukamakmur.png
│   │       └── situ_tamansari/
│   │           └── banner_situ_tamansari.png
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout dengan Font Poppins & Material Symbols
│   │   ├── page.tsx                  # Beranda (Hero Slider, Rekomendasi, Filter Cepat)
│   │   ├── eksplorasi/page.tsx       # Katalog lengkap 196 destinasi + filter interaktif
│   │   ├── search/page.tsx           # Halaman hasil pencarian destinasi
│   │   ├── destinasi/[slug]/         # Halaman dinamis detail destinasi
│   │   │   ├── page.tsx
│   │   │   └── visual/page.tsx       # Halaman galeri visual nyata lapangan
│   │   ├── detail-katalog/page.tsx   # Fallback & katalog preview
│   │   ├── bantuan-darurat/page.tsx  # Panduan darurat & SOP keselamatan
│   │   ├── nomor-darurat-umum/page.tsx # Direktori kontak ambulans, BPBD, SAR, Polisi
│   │   └── globals.css               # Seluruh design tokens & styling sistem
│   ├── components/
│   │   ├── Navbar.tsx                # Navigasi responsif desktop & drawer mobile
│   │   ├── Footer.tsx                # Footer resmi EksploTrip
│   │   ├── MainViewSlider.tsx        # Slider visual utama beranda
│   │   ├── DestinationCard.tsx       # Komponen kartu wisata di katalog/grid
│   │   ├── BerandaContent.tsx        # Konten landing page
│   │   ├── EksplorasiContent.tsx     # Client view katalog eksplorasi + filtering
│   │   ├── DetailKatalogContent.tsx  # Halaman detail: peta, kalkulator tiket, crowd gauge
│   │   └── DetailVisualContent.tsx   # Tampilan galeri kondisi fisik riil
│   ├── data/
│   │   └── destinations.ts           # Database TypeScript V3 (196 Destinasi + metadata)
│   ├── lib/
│   │   ├── destinations.ts           # Service layer: fetch, filter, fallback logic
│   │   └── supabase/
│   │       └── client.ts             # Supabase Browser Client instance
│   └── types/
│       └── destination.ts            # TypeScript interfaces & domain types
├── .env.example                      # Template variabel lingkungan
├── .gitignore                        # Konfigurasi proteksi file sensitif & database lokal
├── package.json
├── tsconfig.json
└── README.md
```

---

## 3. Desain, Tipografi & Identitas Visual

1. **Prinsip Utama:** Mempertahankan 100% konsistensi visual dari Figma dan implementasi HTML asli.
2. **Warna Dasar Platform:**
   - `--color-primary`: `#00828A` (Toska / Teal EksploTrip)
   - `--color-primary-hover`: `#00686E`
   - `--color-card`: `#FFFFFF`
   - `--color-bg-light`: `#F9FBFA`
   - Indikator Status: `#568942` (Sepi), `#D97706` (Sedang), `#DC2626` (Ramai)
3. **Banner Visual Destinasi:**
   - Destinasi terverifikasi memiliki banner resmi tersendiri di `public/assets/visual/{slug}/banner_{slug}.png`.
   - Destinasi yang belum diverifikasi secara visual menggunakan *graceful fallback* ke banner utama terverifikasi agar layout tetap estetik tanpa gambar pecah.
4. **Indikator Keramaian (Crowd Gauge Arc):**
   - Menggunakan jalur SVG setengah lingkaran konsentris murni (`M 24 130 A 106 106 0 0 1 236 130`) dengan `strokeDasharray`.
   - Tidak ada lengkungan bengkok ke dalam (*no weird bends*).
   - Gradien warna mulus (`gradientUnits="userSpaceOnUse"`) dengan label status bersih tanpa tanda kurung tambahan.
5. **Rekomendasi Waktu Kunjungan:**
   - Jam operasional dan waktu terbaik diformat dengan baris baru khusus (`.best-time-hours`), misalnya `(05:00 - 07:30 WIB)` berada rapi di baris kedua.

---

## 4. Sistem Peta Interaktif & Navigasi Rute

Sistem pemetaan di `DetailKatalogContent.tsx` dirancang khusus dengan integrasi Google My Maps dan Google Maps Direct Navigation:

### A. Trik Pemotongan Header Peta (CSS Smart Crop)
Google My Maps secara default menyertakan bar abu-hitam di atas iframe (`ehbc=2E312F&noprof=1`). Pada EksploTrip, header ini dipotong total melalui CSS agar peta tampil bersih:
```css
.map-canvas-container {
    position: relative;
    width: 100%;
    height: 340px;
    border-radius: 14px;
    overflow: hidden;
}

.google-maps-iframe.is-mymaps {
    position: relative;
    top: -65px;
    height: calc(100% + 65px);
}
```

### B. Tombol Aksi Peta (Pojok Kanan Bawah)
1. **"Lihat Rute" (`.btn-route`):**  
   Tombol aksi utama berwarna toska yang mengarahkan pengguna langsung ke aplikasi Google Maps dengan navigasi *turn-by-turn* aktif dari lokasi pengguna saat ini ke titik koordinat/basecamp destinasi.
2. **"Buka di Google Maps":**  
   Membuka tampilan interaktif peta layar penuh Google My Maps di tab baru (otomatis mengubah URL dari `/embed` menjadi `/viewer`).

### C. Badge Waktu Tempuh Trekking (Pojok Kanan Atas)
- Terletak di posisi `top: 14px; right: 14px;` dengan efek *frosted glass* (`backdrop-filter: blur(8px)`).
- **Aturan Bersih:** Satuan meter dihilangkan agar ringkas, hanya menampilkan waktu tempuh (contoh: `10 Menit dari Parkiran` atau `2 Jam Trekking`).
- **Kondisional:** Jika nilai waktu tempuh bernilai `'-'` (seperti Situ Tamansari yang langsung berada di samping area parkir), badge ini **otomatis disembunyikan total** agar tidak membingungkan pengguna.

---

## 5. Dataset Destinasi Versi 3 (`DATASET_VERSION = 'v3'`)

Dataset utama disimpan di `src/data/destinations.ts` yang mencakup **196 destinasi** di seluruh wilayah Kabupaten dan Kota Bogor:

### 3 Destinasi Terverifikasi Lapangan (Top Priority):
1. **Curug Cibulao (`CRG-030`):**
   - Kategori: Curug / Air Terjun (Megamendung)
   - Koordinat: `-6.6453312, 106.9518232`
   - Embed Map: `https://www.google.com/maps/d/embed?mid=1_mmqM4bM3mFCCMpHaF2LcRINzh_sC0w&ehbc=2E312F&noprof=1`
   - Rute Navigasi: `https://maps.app.goo.gl/Cxx46EtFytkKn8JV9`
   - Estimasi Waktu: `10 Menit dari Parkiran`
2. **Gunung Luhur Sukamakmur (`BKT-081`):**
   - Kategori: Bukit / Gunung (Sukamakmur)
   - Koordinat: `-6.6613992, 107.01603`
   - Embed Map: `https://www.google.com/maps/d/embed?mid=1QiziD5y8Y-VfiNle9etE4bnSTIO4me4&ehbc=2E312F`
   - Rute Navigasi: `https://maps.app.goo.gl/pu8aoLa8pC5XFbQV9`
   - Estimasi Waktu: `2 Jam Trekking`
3. **Situ Tamansari (`STU-015`):**
   - Kategori: Situ / Danau (Tamansari)
   - Koordinat: `-6.6535309, 106.7540144`
   - Embed Map: `https://www.google.com/maps/d/embed?mid=1tCCjPOI5eGmCB5nEaAClRlbxEIrF5u4&ehbc=2E312F&noprof=1`
   - Rute Navigasi: `https://maps.app.goo.gl/fPzVkcCwJjsa2T8A7`
   - Estimasi Waktu: `-` (Langsung tepi danau, badge disembunyikan)

### 193 Destinasi Siap Survei:
- Berstatus `BELUM DIVERIFIKASI`.
- Memiliki data kecamatan dan kategori yang presisi.
- Kolom fasilitas, tiket, dan jam buka ditandai placeholder yang jelas tanpa mengarang data palsu.

---

## 6. Integrasi Supabase & Resiliensi Offline

1. **Client Modular:** `src/lib/supabase/client.ts` menggunakan `@supabase/supabase-js`.
2. **Skema Tabel `destinations`:**
   - Kolom: `id` (UUID), `id_kode`, `nama_wisata`, `slug`, `tipe_wisata`, `label_tipe`, `kecamatan`, `alamat`, `deskripsi`, `kondisi` (array teks), `fasilitas` (jsonb), `harga_tiket`, `waktu_tempuh`, `jam_buka_weekday`, `jam_buka_weekend`, `jam_ramai_weekend`, `tingkat_keramaian`, `koordinat_lat`, `koordinat_lng`, `google_maps_url`, `google_maps_route_url`, `status_verifikasi`, dsb.
3. **Row Level Security (RLS):**
   - Kebijakan SELECT publik diaktifkan hanya untuk membaca data yang siap dipublikasikan.
   - Mutasi data (`INSERT`, `UPDATE`, `DELETE`) dilindungi dan hanya dapat diakses melalui role autentikasi admin.
4. **Resiliensi Local-First (Wajib Dipertahankan):**
   - Layanan di `src/lib/destinations.ts` memprioritaskan pengambilan data dari Supabase jika env `NEXT_PUBLIC_SUPABASE_URL` terisi.
   - **Jika Supabase belum disetel, offline, atau gagal dihubungi**, sistem secara otomatis beralih ke data TypeScript lokal di `src/data/destinations.ts` tanpa melempar error layar putih (crash) ke pengguna.

---

## 7. Keamanan Git & Proteksi File Sensitif (`.gitignore`)

Untuk menjaga integritas dan keamanan repository, file-file berikut **dilarang keras** masuk ke repository GitHub dan telah diabaikan melalui `.gitignore`:

- **Database lokal & Dump SQL:** `*.sql`, `supabase/seed*.sql`, `supabase/`, `.supabase/`, `*.sqlite`, `*.db`
- **File Dataset Mentah:** `*.csv` (termasuk `destinations_v3.csv`), `*.xlsx`, `*.tsv`
- **Skrip Otomasi Developer:** Folder `/scripts/`, `*.sh`, `*.bat`, `*.ps1`
- **Kredensial & Secrets:** `.env`, `.env.*`, `.env.local` (kecuali `.env.example`)
- **Build & Dependencies:** `.next/`, `node_modules/`, `out/`, `build/`, `dist/`

---

## 8. Panduan Menjalankan, Memeriksa, & Membangun Aplikasi

Sebelum melakukan push ke repository atau mendeploy:

```bash
# 1. Jalankan development server lokal dengan Turbopack
npx next dev --turbopack

# 2. Pemeriksaan tipe TypeScript (Wajib 0 error)
npm run typecheck

# 3. Pemeriksaan linting ESLint (Wajib 0 error)
npm run lint

# 4. Pengujian build produksi Next.js
npm run build
```

---

## 9. Aturan Kontribusi & Pengembangan Lanjutan

1. **Integritas Copywriting & Verifikasi:** Jangan pernah mengklaim destinasi aman atau ramah keluarga tanpa data hasil survei lapangan yang sah.
2. **Konsistensi UI:** Jangan menambahkan library komponen UI eksternal yang membebani bundle (seperti Material UI atau Chakra) jika kebutuhan styling sudah terpenuhi oleh design tokens di `globals.css`.
3. **Perlindungan Data Dummy:** Pertahankan hanya 3 destinasi terverifikasi sebagai rujukan visual utama hingga data survei gelombang berikutnya siap dirilis.
4. **Git Protocol:** Periksa `git status` sebelum melakukan commit untuk memastikan tidak ada file data mentah atau rahasia yang terunggah secara tidak sengaja.
