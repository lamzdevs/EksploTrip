import { Destination, EmergencyAgency } from '@/types/destination';

/**
 * ============================================================================
 * DATA DUMMY SEMENTARA UNTUK PENGEMBANGAN (MAKSIMAL 3 DESTINASI)
 * ============================================================================
 * PENTING:
 * - Seluruh item pada `DUMMY_DESTINATIONS` di bawah ini ditandai `is_dummy: true`
 *   dan `status_verifikasi: 'belum_terverifikasi'`.
 * - Data ini HANYA digunakan untuk pengujian tampilan UI, navigasi, pencarian,
 *   filter, dan halaman detail sebelum data hasil survei lapangan tersedia
 *   di database Supabase.
 * - Tidak ada klaim verifikasi lapangan, keamanan, alamat spesifik, koordinat,
 *   maupun harga tiket yang dikarang pada data dummy ini.
 * ============================================================================
 */
export const DUMMY_DESTINATIONS: Destination[] = [
  {
    id: '00000000-0000-4000-8000-000000000001',
    nama_wisata: 'Curug Cibulao',
    slug: 'curug-cibulao',
    tipe_wisata: 'curug',
    label_tipe: 'Curug',
    kecamatan: 'Kecamatan Cisarua, Kabupaten Bogor',
    alamat: null,
    deskripsi:
      'Data destinasi air terjun (curug) contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.',
    kondisi: [],
    fasilitas: [
      { nama: 'Area Parkir', status: 'Belum tersedia', ikon: 'local_parking' },
      { nama: 'Toilet & Kamar Bilas', status: 'Belum tersedia', ikon: 'wc' },
      { nama: 'Mushola', status: 'Belum tersedia', ikon: 'mosque' },
      { nama: 'Warung Makan', status: 'Belum tersedia', ikon: 'restaurant' },
      { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'Support' },
      { nama: 'Pos Kesehatan / P3K', status: 'Belum tersedia', ikon: 'medical_services' },
      { nama: 'Spot Foto', status: 'Belum tersedia', ikon: 'photo_camera' },
      { nama: 'Area Camping', status: 'Belum tersedia', ikon: 'camping' },
    ],
    ketinggian_mdpl: null,
    waktu_tempuh_parkir: null,
    jarak_trek: null,
    harga_tiket: null,
    harga_parkir_motor: null,
    harga_parkir_mobil: null,
    waktu_terbaik: null,
    tingkat_keramaian: null,
    koordinat_lat: null,
    koordinat_lng: null,
    google_maps_url: null,
    peta_jalur_url: '/assets/images/detail_katalog/peta_jalur_cibulao.png',
    catatan_jalur: [
      {
        nomor: '01',
        judul: 'Titik Awal & Parkir',
        deskripsi: 'Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan.',
      },
      {
        nomor: '02',
        judul: 'Kondisi Jalur Trekking',
        deskripsi: 'Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei.',
      },
      {
        nomor: '03',
        judul: 'Titik Rawan & Keamanan',
        deskripsi: 'Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei.',
      },
      {
        nomor: '04',
        judul: 'Estimasi Waktu Tempuh',
        deskripsi: 'Belum tersedia — durasi perjalanan dari titik parkir belum diukur.',
      },
    ],
    foto_utama: '/assets/images/beranda/list_katalog.png',
    foto_banner: '/assets/images/detail_katalog/banner_atas.png',
    galeri_visual: [
      {
        id: 'cibulao-visual-1',
        judul: 'Placeholder Dokumentasi Jalur',
        kategori: 'jalur-trekking',
        kategori_label: 'Jalur Trekking',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk jalur trekking belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'cibulao-visual-2',
        judul: 'Placeholder Dokumentasi Spot Utama',
        kategori: 'spot-utama',
        kategori_label: 'Spot Utama',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk spot utama belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'cibulao-visual-3',
        judul: 'Placeholder Dokumentasi Fasilitas',
        kategori: 'fasilitas',
        kategori_label: 'Fasilitas',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk fasilitas umum belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'cibulao-visual-4',
        judul: 'Placeholder Dokumentasi Area Parkir',
        kategori: 'area-parkir',
        kategori_label: 'Area Parkir',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk area parkir belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
    ],
    kontak_pic: null,
    status_operasional: null,
    status_verifikasi: 'belum_terverifikasi',
    catatan_survei:
      'Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.',
    is_dummy: true,
    created_at: '2026-01-01T00:00:00.000Z',
    updated_at: '2026-01-01T00:00:00.000Z',
  },
  {
    id: '00000000-0000-4000-8000-000000000002',
    nama_wisata: 'Situ Gede',
    slug: 'situ-gede',
    tipe_wisata: 'danau',
    label_tipe: 'Danau',
    kecamatan: 'Kecamatan Bogor Barat, Kota Bogor',
    alamat: null,
    deskripsi:
      'Data destinasi situ atau danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.',
    kondisi: [],
    fasilitas: [
      { nama: 'Area Parkir', status: 'Belum tersedia', ikon: 'local_parking' },
      { nama: 'Toilet & Kamar Bilas', status: 'Belum tersedia', ikon: 'wc' },
      { nama: 'Mushola', status: 'Belum tersedia', ikon: 'mosque' },
      { nama: 'Warung Makan', status: 'Belum tersedia', ikon: 'restaurant' },
      { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'Support' },
      { nama: 'Pos Kesehatan / P3K', status: 'Belum tersedia', ikon: 'medical_services' },
      { nama: 'Spot Foto', status: 'Belum tersedia', ikon: 'photo_camera' },
      { nama: 'Area Camping', status: 'Belum tersedia', ikon: 'camping' },
    ],
    ketinggian_mdpl: null,
    waktu_tempuh_parkir: null,
    jarak_trek: null,
    harga_tiket: null,
    harga_parkir_motor: null,
    harga_parkir_mobil: null,
    waktu_terbaik: null,
    tingkat_keramaian: null,
    koordinat_lat: null,
    koordinat_lng: null,
    google_maps_url: null,
    peta_jalur_url: '/assets/images/detail_katalog/peta_jalur_cibulao.png',
    catatan_jalur: [
      {
        nomor: '01',
        judul: 'Titik Awal & Parkir',
        deskripsi: 'Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan.',
      },
      {
        nomor: '02',
        judul: 'Kondisi Jalur Tepi Danau',
        deskripsi: 'Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei.',
      },
      {
        nomor: '03',
        judul: 'Titik Rawan & Keamanan',
        deskripsi: 'Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei.',
      },
      {
        nomor: '04',
        judul: 'Estimasi Waktu Tempuh',
        deskripsi: 'Belum tersedia — durasi perjalanan dari titik parkir belum diukur.',
      },
    ],
    foto_utama: '/assets/images/beranda/list_katalog.png',
    foto_banner: '/assets/images/detail_katalog/banner_atas.png',
    galeri_visual: [
      {
        id: 'situgede-visual-1',
        judul: 'Placeholder Dokumentasi Spot Utama',
        kategori: 'spot-utama',
        kategori_label: 'Spot Utama',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk kawasan danau belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'situgede-visual-2',
        judul: 'Placeholder Dokumentasi Jalur',
        kategori: 'jalur-trekking',
        kategori_label: 'Jalur Trekking',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk jalur pejalan kaki belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'situgede-visual-3',
        judul: 'Placeholder Dokumentasi Fasilitas',
        kategori: 'fasilitas',
        kategori_label: 'Fasilitas',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk fasilitas umum belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'situgede-visual-4',
        judul: 'Placeholder Dokumentasi Area Parkir',
        kategori: 'area-parkir',
        kategori_label: 'Area Parkir',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk area parkir belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
    ],
    kontak_pic: null,
    status_operasional: null,
    status_verifikasi: 'belum_terverifikasi',
    catatan_survei:
      'Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.',
    is_dummy: true,
    created_at: '2026-01-01T00:00:00.000Z',
    updated_at: '2026-01-01T00:00:00.000Z',
  },
  {
    id: '00000000-0000-4000-8000-000000000003',
    nama_wisata: 'Gunung Pancar',
    slug: 'gunung-pancar',
    tipe_wisata: 'gunung',
    label_tipe: 'Gunung',
    kecamatan: 'Kecamatan Babakan Madang, Kabupaten Bogor',
    alamat: null,
    deskripsi:
      'Data destinasi bukit atau gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.',
    kondisi: [],
    fasilitas: [
      { nama: 'Area Parkir', status: 'Belum tersedia', ikon: 'local_parking' },
      { nama: 'Toilet & Kamar Bilas', status: 'Belum tersedia', ikon: 'wc' },
      { nama: 'Mushola', status: 'Belum tersedia', ikon: 'mosque' },
      { nama: 'Warung Makan', status: 'Belum tersedia', ikon: 'restaurant' },
      { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'Support' },
      { nama: 'Pos Kesehatan / P3K', status: 'Belum tersedia', ikon: 'medical_services' },
      { nama: 'Spot Foto', status: 'Belum tersedia', ikon: 'photo_camera' },
      { nama: 'Area Camping', status: 'Belum tersedia', ikon: 'camping' },
    ],
    ketinggian_mdpl: null,
    waktu_tempuh_parkir: null,
    jarak_trek: null,
    harga_tiket: null,
    harga_parkir_motor: null,
    harga_parkir_mobil: null,
    waktu_terbaik: null,
    tingkat_keramaian: null,
    koordinat_lat: null,
    koordinat_lng: null,
    google_maps_url: null,
    peta_jalur_url: '/assets/images/detail_katalog/peta_jalur_cibulao.png',
    catatan_jalur: [
      {
        nomor: '01',
        judul: 'Titik Awal & Parkir',
        deskripsi: 'Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan.',
      },
      {
        nomor: '02',
        judul: 'Kondisi Jalur Pendakian',
        deskripsi: 'Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei.',
      },
      {
        nomor: '03',
        judul: 'Titik Rawan & Keamanan',
        deskripsi: 'Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei.',
      },
      {
        nomor: '04',
        judul: 'Estimasi Waktu Tempuh',
        deskripsi: 'Belum tersedia — durasi perjalanan dari titik parkir belum diukur.',
      },
    ],
    foto_utama: '/assets/images/beranda/list_katalog.png',
    foto_banner: '/assets/images/detail_katalog/banner_atas.png',
    galeri_visual: [
      {
        id: 'gunungpancar-visual-1',
        judul: 'Placeholder Dokumentasi Spot Utama',
        kategori: 'spot-utama',
        kategori_label: 'Spot Utama',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk kawasan bukit/gunung belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'gunungpancar-visual-2',
        judul: 'Placeholder Dokumentasi Jalur',
        kategori: 'jalur-trekking',
        kategori_label: 'Jalur Trekking',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk jalur trekking belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'gunungpancar-visual-3',
        judul: 'Placeholder Dokumentasi Fasilitas',
        kategori: 'fasilitas',
        kategori_label: 'Fasilitas',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk fasilitas umum belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
      {
        id: 'gunungpancar-visual-4',
        judul: 'Placeholder Dokumentasi Area Parkir',
        kategori: 'area-parkir',
        kategori_label: 'Area Parkir',
        tipe_media: 'foto',
        url_gambar: '/assets/images/detail_katalog/list_visual_katalog.png',
        keterangan_waktu: 'Menunggu Survei Lapangan',
        deskripsi:
          'Foto dokumentasi survei lapangan untuk area parkir belum tersedia. Gambar ini merupakan placeholder visual pengembangan.',
        badge_status: 'Data Dummy (Belum Diverifikasi)',
      },
    ],
    kontak_pic: null,
    status_operasional: null,
    status_verifikasi: 'belum_terverifikasi',
    catatan_survei:
      'Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.',
    is_dummy: true,
    created_at: '2026-01-01T00:00:00.000Z',
    updated_at: '2026-01-01T00:00:00.000Z',
  },
];

/**
 * Daftar nomor darurat resmi nasional/umum sesuai halaman Nomor Darurat Umum.
 */
export const EMERGENCY_AGENCIES: EmergencyAgency[] = [
  {
    id: 'panggilan-darurat',
    nama: 'Panggilan Darurat Terpadu',
    badge: 'Layanan 24 Jam (Bebas Pulsa)',
    nomor_tampil: '112',
    nomor_panggil: '112',
    nomor_salin: '112',
    deskripsi:
      'Nomor tunggal panggilan darurat nasional yang mengintegrasikan layanan kepolisian, pemadam kebakaran, ambulans, dan SAR.',
    ikon: 'emergency',
  },
  {
    id: 'basarnas',
    nama: 'BASARNAS (SAR Nasional)',
    badge: 'Pencarian & Pertolongan Alam',
    nomor_tampil: '115',
    nomor_panggil: '115',
    nomor_salin: '115',
    deskripsi:
      'Badan Nasional Pencarian dan Pertolongan untuk evakuasi pendaki tersesat, kecelakaan di air terjun/danau, dan bencana alam.',
    ikon: 'health_and_safety',
  },
  {
    id: 'ambulans-medis',
    nama: 'Ambulans & Gawat Darurat Medis',
    badge: 'Layanan Medis Darurat',
    nomor_tampil: '119',
    nomor_panggil: '119',
    nomor_salin: '119',
    deskripsi:
      'Public Safety Center (PSC 119) Kementerian Kesehatan untuk penanganan pertama kecelakaan fisik, hipotermia, atau cedera berat.',
    ikon: 'ambulance',
  },
  {
    id: 'kepolisian',
    nama: 'Kepolisian Republik Indonesia',
    badge: 'Keamanan & Ketertiban',
    nomor_tampil: '110',
    nomor_panggil: '110',
    nomor_salin: '110',
    deskripsi:
      'Layanan cepat kepolisian untuk pelaporan tindak kriminal, pemalakan, kehilangan barang berharga, atau gangguan keamanan di lokasi wisata.',
    ikon: 'local_police',
  },
  {
    id: 'pemadam-kebakaran',
    nama: 'Pemadam Kebakaran & Penyelamatan',
    badge: 'Kebakaran & Evakuasi Teknis',
    nomor_tampil: '113',
    nomor_panggil: '113',
    nomor_salin: '113',
    deskripsi:
      'Dinas Pemadam Kebakaran dan Penyelamatan untuk penanganan kebakaran hutan/lahan, evakuasi hewan berbisa, dan penyelamatan darurat.',
    ikon: 'fire_truck',
  },
  {
    id: 'bnpb-bpbd',
    nama: 'BNPB / Pusdalops Bencana',
    badge: 'Penanggulangan Bencana Alam',
    nomor_tampil: '117',
    nomor_panggil: '117',
    nomor_salin: '117',
    deskripsi:
      'Pusat Pengendalian Operasi Badan Nasional Penanggulangan Bencana untuk pelaporan tanah longsor, banjir bandang, atau pohon tumbang.',
    ikon: 'flood',
  },
];
