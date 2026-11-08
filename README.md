# EksploTrip 🌿⛰️

> **Platform Eksplorasi Wisata Alam Bogor yang Aman, Informatif, dan Transparan**

EksploTrip adalah platform berbasis web untuk mengeksplorasi destinasi wisata alam (Curug / Air Terjun, Situ / Danau, Bukit / Gunung) di wilayah Kabupaten dan Kota Bogor. Platform ini dirancang untuk memberikan transparansi rute, estimasi biaya riil, status verifikasi lapangan, serta panduan bantuan darurat untuk para wisatawan alam.

---

## 🎨 Desain Figma

Desain antarmuka (UI/UX) dan prototipe EksploTrip dapat diakses melalui tautan berikut:

- **Figma Design:** [EksploTrip UI/UX Design](https://www.figma.com/design/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?node-id=1-5&t=yUC5JvY8NfJNOu1T-1)
- **Figma Interactive Prototype:** [EksploTrip Prototype](https://www.figma.com/proto/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?page-id=1%3A5&node-id=44-34&viewport=148%2C259%2C0.08&t=VNT7xefdW0VSZyLq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=44%3A34)

---

## ✨ Fitur Utama

- **Katalog Wisata Alam Terkurasi:** Informasi lengkap seputar curug, danau, dan gunung dengan filter kategori, tingkat keramaian, dan kondisi jalur.
- **Kondisi Nyata Lapangan (Visual Gallery):** Galeri foto kondisi riil trek, pos registrasi, parkiran, dan fasilitas di lokasi wisata.
- **Transparansi Biaya & Kalkulator Tiket:** Rincian tiket masuk resmi, tarif parkir, dan estimasi biaya perorangan/rombongan.
- **Pusat Bantuan Darurat:** Direktori nomor darurat penting (SAR Basarnas, Ambulans, BPBD, Kepolisian), panduan pertolongan pertama, dan pemantauan perkiraan cuaca BMKG.
- **Pencarian Cepat:** Pencarian cerdas untuk menemukan destinasi berdasarkan nama dan wilayah kecamatan di Bogor.
- **Tanya AI EksploTrip:** Asisten interaktif untuk membantu merencanakan liburan alam secara aman.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) + [React 19](https://react.dev/)
- **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** Vanilla Modular CSS dengan Design Tokens kustom (`globals.css`)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL) dengan fallback data lokal
- **Optimasi Aset:** Format gambar WebP responsif (Retina & Mobile optimized)
- **Deployment:** Vercel

---

## 🚀 Memulai (Getting Started)

### 1. Prasyarat
Pastikan kamu telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.x atau yang lebih baru)
- npm atau yarn / pnpm

### 2. Instalasi Dependensi
```bash
# Clone repository
git clone https://github.com/lamzdevs/EksploTrip.git
cd EksploTrip

# Install dependencies
npm install
```

### 3. Konfigurasi Lingkungan (.env.local)
Buat file `.env.local` di root direktori jika ingin mengintegrasikan dengan Supabase:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
*(Catatan: Aplikasi memiliki fallback data lokal, sehingga tetap dapat berjalan tanpa konfigurasi Supabase).*

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 5. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 📂 Struktur Direktori

```text
EksploTrip/
├── public/                 # Aset statis (gambar WebP, fonts woff2, icons)
├── src/
│   ├── app/                # Next.js App Router (Halaman & Layout)
│   │   ├── layout.tsx      # Root layout & font loader
│   │   ├── globals.css     # Design tokens & CSS global
│   │   ├── page.tsx        # Halaman Beranda
│   │   ├── eksplorasi/     # Halaman Eksplorasi Katalog
│   │   ├── bantuan-darurat/# Halaman Bantuan Darurat
│   │   ├── destinasi/      # Halaman Dinamis [slug] & [slug]/visual
│   │   └── search/         # Halaman Hasil Pencarian
│   ├── components/         # Komponen reusable (Navbar, Cards, Modals, Footer)
│   ├── data/               # Dataset destinasi lokal
│   ├── lib/                # Utility functions & Supabase client
│   └── types/              # Deklarasi tipe TypeScript
└── README.md
```

---

## 📄 Lisensi

Project ini dikembangkan untuk eksplorasi dan reservasi destinasi wisata alam Bogor. Hak cipta &copy; 2026 EksploTrip.
