# EksploTrip (Explore Trip)

Platform eksplorasi destinasi wisata alam di wilayah Bogor dan sekitarnya yang berfokus pada informasi wisata yang aman, informatif, dan transparan.

- **Live Production:** [https://eksplotrip.vercel.app](https://eksplotrip.vercel.app)
- **Figma Design:** [EksploTrip Design](https://www.figma.com/design/ukAlWKC26nDW0Vz3H2Soe1/EksploTrip.?node-id=1-5&t=yUC5JvY8NfJNOu1T-1)
- **Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Supabase (PostgreSQL), Vercel CI/CD

---

## Fitur Utama
1. **Eksplorasi Destinasi Alam:** Katalog terkurasi wisata alam di Bogor lengkap dengan transparansi tarif resmi, rute, fasilitas, dan crowd meter.
2. **Bantuan Darurat Terpadu:** Panggilan darurat 112/110/118/119/115, direktori faskes terdekat, dan tips penanganan cepat.
3. **Fitur Keselamatan & Edukasi:** Informasi perkiraan cuaca real-time, tips keamanan khusus solo traveler wanita, dan panduan pencegahan kecelakaan di alam.
4. **Estimasi Biaya & Transparansi:** Kalkulator estimasi biaya perjalanan per orang untuk mencegah pungutan liar.

---

## Sprint Minggu ke-9: Usability Testing Iterations & Fixes

Berdasarkan hasil temuan pengujian kegunaan (*Usability Testing*) pada perangkat pengguna:

- **Fixes #1:** `[Bug] Modal content clipping on mobile viewport (Faskes & Education)`
  - Mengubah struktur modal/drawer menjadi responsif dengan `min-h-fit w-full` dan `overflow-y-auto` agar seluruh konten dapat diakses penuh pada layar mobile tanpa terpotong.
- **Fixes #2:** `[UX] Missing empty search state and freeze handling on iOS Safari`
  - Menambahkan atribut form standar (`action="/search" method="GET"`), tombol submit aktif, penanganan penekanan Enter pada keyboard iOS dengan auto-blur, serta tampilan dedikasi *Empty State* "Destinasi Tidak Ditemukan" dengan ikon inline SVG yang kebal terhadap restriksi in-app browser (Instagram/Safari).
- **Fixes #3:** `[UI Enhancement] Add elevation & drop-shadow to Emergency Tips container`
  - Menyelaraskan kontainer ikon tips keselamatan dengan gaya langkah darurat (`border-radius: 12px`, latar hijau lembut `rgba(55, 94, 39, 0.08)`, dan warna ikon `#375E27`) serta menambahkan elevasi dan efek bayangan (*drop-shadow*) untuk hierarki visual yang lebih baik di mobile dan desktop.
