/**
 * Data Destinasi Wisata EksploTrip v3 (Dataset Terintegrasi CSV v3)
 * Diperbarui: 2026-10-23
 *
 * Dataset Versi 3:
 * - 3 Destinasi Terverifikasi Lapangan (Curug Cibulao, Situ Tamansari, Gunung Luhur Sukamakmur)
 *   Lengkap dengan Jam Buka, Jam Ramai Weekend, MDPL, Waktu Tempuh, Link Google Maps, dan Kontak.
 * - 193 Destinasi Belum Diverifikasi (Placeholder Siap Survei Lapangan v3).
 *
 * Total Data: 196 Destinasi
 */

import { Destination } from '@/types/destination';

export const DATASET_VERSION = 'v3';

export const DUMMY_DESTINATIONS: Destination[] = [
  {
    "id": "00000000-0000-4000-8000-000000000001",
    "id_kode": "CRG-030",
    "nama_wisata": "Curug Cibulao",
    "slug": "curug-cibulao",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": "Megamendung, Kec. Megamendung, Kabupaten Bogor, Jawa Barat",
    "deskripsi": "Destinasi air terjun alami Curug Cibulao dengan air jernih kebiruan di kawasan Megamendung Puncak. Dikelola resmi dengan jalur setapak tertata, fasilitas lengkap, dan area kolam alami yang asri.",
    "kondisi": [
      "Ramah Keluarga",
      "Rute Ekstrem",
      "Ramah Pemula",
      "Fasilitas Lengkap"
    ],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": 789,
    "waktu_tempuh_parkir": "10 Menit dari Parkiran",
    "waktu_tempuh": "10 Menit dari Parkiran",
    "jarak_trek": "400 meter",
    "harga_tiket": 17000,
    "tiket_kunjungan": 17000,
    "tiket_berenang_pelampung": 28000,
    "catatan_tiket": "Tiket kunjungan Rp 17.000, tiket + berenang + pelampung Rp 28.000.",
    "harga_parkir_motor": 10000,
    "harga_parkir_mobil": 10000,
    "waktu_terbaik": "Pagi hari (08:00 - 11:00 WIB)",
    "jam_buka_weekday": "07.00 - 17.00 WIB",
    "jam_buka_weekend": "07.00 - 17.00 WIB",
    "jam_ramai_weekend": "10.00 - 14.00",
    "tingkat_keramaian": "Sedang",
    "koordinat_lat": -6.6453312,
    "koordinat_lng": 106.9518232,
    "google_maps_url": "https://www.google.com/maps/d/embed?mid=1_mmqM4bM3mFCCMpHaF2LcRINzh_sC0w&ehbc=2E312F&noprof=1",
    "google_maps_route_url": "https://maps.app.goo.gl/Cxx46EtFytkKn8JV9",
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir Resmi",
        "deskripsi": "Area parkir beraspal luas, aman untuk motor dan mobil."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Jalur setapak berbatu rapi menyusuri hutan bambu dengan pegangan pengaman."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Bebatuan licin di sekitar kolam utama, wajib menggunakan pelampung."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Sekitar 10 menit berjalan kaki santai dari titik parkir."
      }
    ],
    "foto_utama": "/assets/images/detail_katalog/card_curug_cibulao.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "cibulao-visual-1",
        "judul": "Jalur Trekking Cibulao",
        "kategori": "jalur-trekking",
        "kategori_label": "Jalur Trekking",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Jalur setapak alami dan teduh dengan anak tangga berbatu.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "cibulao-visual-2",
        "judul": "Kolam & Spot Utama Air Terjun",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Air terjun bertingkat dengan kolam alami berwarna biru kehijauan.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "cibulao-visual-3",
        "judul": "Fasilitas Umum & Gazebo",
        "kategori": "fasilitas",
        "kategori_label": "Fasilitas",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Toilet bersih, mushola, dan warung warga sekitar.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "cibulao-visual-4",
        "judul": "Area Parkir Kendaraan",
        "kategori": "area-parkir",
        "kategori_label": "Area Parkir",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Kapasitas parkir motor dan mobil tertata rapi.",
        "badge_status": "Destinasi Terverifikasi"
      }
    ],
    "kontak_pic": {
      "nama": "Pengelola Curug Cibulao",
      "jabatan": "Ketua Pengelola Lapangan",
      "telepon": "081234567890",
      "whatsapp": "081234567890"
    },
    "akun_instagram": "@curugcibulao.official",
    "status_operasional": "Aktif / Dikelola",
    "status_verifikasi": "terverifikasi",
    "status_rekomendasi": "DIREKOMENDASIKAN",
    "skor_verifikasi": "100%",
    "catatan_survei": "Data telah diverifikasi tim lapangan EksploTrip pada survei resmi v3.",
    "is_dummy": false,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000002",
    "id_kode": "STU-015",
    "nama_wisata": "Situ Tamansari",
    "slug": "situ-tamansari",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": "Desa Tamansari, Kec. Tamansari, Kabupaten Bogor, Jawa Barat",
    "deskripsi": "Destinasi wisata danau alami Situ Tamansari yang asri di kaki Gunung Salak dengan suasana sejuk, pemandangan tenang, dan akses jalan yang ramah keluarga.",
    "kondisi": [
      "Ramah Keluarga",
      "Dekat Parkiran",
      "Ramah Pemula",
      "Fasilitas Lengkap"
    ],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Spot Foto",
        "status": "Tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": 562,
    "waktu_tempuh_parkir": "-",
    "waktu_tempuh": "-",
    "jarak_trek": "-",
    "harga_tiket": 0,
    "catatan_tiket": "tidak ada tiket masuk (Gratis)",
    "harga_parkir_motor": 2000,
    "harga_parkir_mobil": 5000,
    "waktu_terbaik": "Pagi dan Sore hari (07:00 - 10:00 & 15:30 - 17:30 WIB)",
    "jam_buka_weekday": "08.00 - 22.00 WIB",
    "jam_buka_weekend": "08.00 - 23.00 WIB",
    "jam_ramai_weekend": "07.00 - 10.00 , 15.00 - 17.30",
    "tingkat_keramaian": "Sedang",
    "koordinat_lat": -6.6535309,
    "koordinat_lng": 106.7540144,
    "google_maps_url": "https://www.google.com/maps/d/embed?mid=1tCCjPOI5eGmCB5nEaAClRlbxEIrF5u4&ehbc=2E312F&noprof=1",
    "google_maps_route_url": "https://maps.app.goo.gl/fPzVkcCwJjsa2T8A7",
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Area Parkir",
        "deskripsi": "Akses kendaraan roda dua dan roda empat langsung ke dekat tepi danau."
      },
      {
        "nomor": "02",
        "judul": "Akses Keliling Situ",
        "deskripsi": "Jalur semen datar yang mudah dilalui anak-anak maupun lansia."
      },
      {
        "nomor": "03",
        "judul": "Keamanan Tepian Air",
        "deskripsi": "Pagar pengaman sederhana di area dermaga foto, awasi anak-anak saat di tepi danau."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Hanya 5 menit dari area parkir ke bibir danau."
      }
    ],
    "foto_utama": "/assets/images/detail_katalog/card_situ_tamansari.png",
    "foto_banner": "/assets/visual/situ_tamansari/banner_situ_tamansari.png",
    "galeri_visual": [
      {
        "id": "tamansari-visual-1",
        "judul": "Tepian Situ Tamansari",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Pemandangan air danau tenang berlatar pohon pinus kaki Gunung Salak.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "tamansari-visual-2",
        "judul": "Dermaga Santai & Spot Foto",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Dermaga kayu tepi danau untuk bersantai menikmati panorama danau.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "tamansari-visual-3",
        "judul": "Deretan Warung Lokal",
        "kategori": "fasilitas",
        "kategori_label": "Fasilitas",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Warung sederhana menyediakan makanan dan minuman hangat.",
        "badge_status": "Destinasi Terverifikasi"
      },
      {
        "id": "tamansari-visual-4",
        "judul": "Area Parkir Tepi Danau",
        "kategori": "area-parkir",
        "kategori_label": "Area Parkir",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Kondisi Nyata Lapangan",
        "deskripsi": "Parkir kendaraan roda dua dan roda empat tepat di sebelah pintu masuk.",
        "badge_status": "Destinasi Terverifikasi"
      }
    ],
    "kontak_pic": {
      "nama": "Pokdarwis Tamansari",
      "jabatan": "Pengelola Wisata",
      "telepon": "081298765432",
      "whatsapp": "081298765432"
    },
    "akun_instagram": "@setutamansari_",
    "status_operasional": "Aktif / Dikelola",
    "status_verifikasi": "terverifikasi",
    "status_rekomendasi": "DIREKOMENDASIKAN DENGAN CATATAN",
    "skor_verifikasi": "100%",
    "catatan_survei": "Data telah diverifikasi tim lapangan EksploTrip pada survei resmi v3.",
    "is_dummy": false,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000003",
    "id_kode": "BKT-081",
    "nama_wisata": "Gunung Luhur Sukamakmur",
    "slug": "gunung-luhur-sukamakmur",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": "Desa Sukawangi, Kec. Sukamakmur, Kabupaten Bogor, Jawa Barat",
    "deskripsi": "Puncak perbukitan dan bumi perkemahan Gunung Luhur Sukamakmur menyajikan pemandangan lanskap pegunungan terbuka, lautan awan pagi, dan udara sejuk pegunungan.",
    "kondisi": [
      "Ramah Keluarga",
      "Dekat Parkiran",
      "Ramah Pemula",
      "Fasilitas Lengkap"
    ],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Area Camping",
        "status": "Tersedia",
        "ikon": "camping"
      },
      {
        "nama": "Spot Foto",
        "status": "Tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      }
    ],
    "ketinggian_mdpl": 1750,
    "waktu_tempuh_parkir": "2 Jam Trekking",
    "waktu_tempuh": "2 Jam Trekking",
    "jarak_trek": "250 meter",
    "harga_tiket": 25000,
    "tiket_trekking": 25000,
    "tiket_camping": 35000,
    "catatan_tiket": "Tiket trekking Rp 25.000, tiket camping Rp 35.000.",
    "harga_parkir_motor": 10000,
    "harga_parkir_mobil": 20000,
    "waktu_terbaik": "Pagi hari matahari terbit (05:00 - 07:30 WIB)",
    "jam_buka_weekday": "24 jam",
    "jam_buka_weekend": "24 jam",
    "jam_ramai_weekend": "05.00 - 14.00 , 16.00 - 17.00",
    "tingkat_keramaian": "Ramai",
    "koordinat_lat": -6.6613992,
    "koordinat_lng": 107.01603,
    "google_maps_url": "https://www.google.com/maps/d/embed?mid=1QiziD5y8Y-VfiNle9etE4bnSTIO4me4&ehbc=2E312F",
    "google_maps_route_url": "https://maps.app.goo.gl/pu8aoLa8pC5XFbQV9",
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Akses Jalan Menuju Puncak",
        "deskripsi": "Akses jalan beton dan aspal pegunungan, tanjakan curam di beberapa titik."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Camping Ground",
        "deskripsi": "Tanah rumput berundak menghadap pemandangan terbuka lembah Sukamakmur."
      },
      {
        "nomor": "03",
        "judul": "Keamanan & Cuaca",
        "deskripsi": "Angin kencang di malam hari, pastikan patok tenda terpasang kuat dan bawa jaket hangat."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Sekitar 2 jam trekking santai ke spot perkemahan puncak."
      }
    ],
    "foto_utama": "/assets/images/detail_katalog/card_gunung_luhur.png",
    "foto_banner": "/assets/visual/gunung_luhur_sukamakmur/banner_gunung_luhur_sukamakmur.png",
    "galeri_visual": [
      {
            "id": "gunungluhur-visual-1",
            "judul": "Area Camp",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/area%20camp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Area Camp"
      },
      {
            "id": "gunungluhur-visual-2",
            "judul": "Area Parkir Motor Utama",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/area%20parkir%20motor%20utama.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Area parkir khusus sepeda motor di depan loket registrasi yang tertata rapi dan aman.",
            "badge_status": "Area Parkir Motor Utama"
      },
      {
            "id": "gunungluhur-visual-3",
            "judul": "Area Parkir Mobil",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/area%20parkir%20mobil.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi area parkir kendaraan resmi yang aman dan tertata rapi di Gunung Luhur Sukamakmur.",
            "badge_status": "Area Parkir Mobil"
      },
      {
            "id": "gunungluhur-visual-4",
            "judul": "Banner Area Camp Tepi Sungai",
            "kategori": "lainnya",
            "kategori_label": "Lainnya",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/banner%20area%20camp%20tepi%20sungai.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Banner Area Camp Tepi Sungai"
      },
      {
            "id": "gunungluhur-visual-5",
            "judul": "Basecamp",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/basecamp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Basecamp"
      },
      {
            "id": "gunungluhur-visual-6",
            "judul": "Foto Spot Panca Warna MT Luhur",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/foto%20spot%20panca%20warna%20mt%20luhur.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Foto Spot Panca Warna MT Luhur pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Foto Spot Panca Warna MT Luhur"
      },
      {
            "id": "gunungluhur-visual-7",
            "judul": "Gapura Area Camp Tepi Sungai",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/gapura%20area%20camp%20tepi%20sungai.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Gapura Area Camp Tepi Sungai"
      },
      {
            "id": "gunungluhur-visual-8",
            "judul": "Gapura Selamat Mendaki 1750 MDPL",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/gapura%20selamat%20mendaki%201750%20mdpl.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Gapura Selamat Mendaki 1750 MDPL pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Gapura Selamat Mendaki 1750 MDPL"
      },
      {
            "id": "gunungluhur-visual-9",
            "judul": "Loket Registrasi dan Papan Tarif",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/loket%20registrasi%20dan%20papan%20tarif.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Pos pelayanan registrasi tiket resmi dan pengecekan perlengkapan pendaki.",
            "badge_status": "Loket Registrasi dan Papan Tarif"
      },
      {
            "id": "gunungluhur-visual-10",
            "judul": "Menuju Gapura Trekking",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/menuju%20gapura%20trekking.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi fisik jalur trekking setapak alami yang terawat menuju pos pendakian.",
            "badge_status": "Menuju Gapura Trekking"
      },
      {
            "id": "gunungluhur-visual-11",
            "judul": "Mushola Panggung Kayu Area Camp",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/mushola%20panggung%20kayu%20area%20camp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Fasilitas mushola ibadah yang bersih dan nyaman bagi pengunjung dan pendaki.",
            "badge_status": "Mushola Panggung Kayu Area Camp"
      },
      {
            "id": "gunungluhur-visual-12",
            "judul": "Pasar Bunga",
            "kategori": "lainnya",
            "kategori_label": "Lainnya",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/pasar%20bunga.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Pasar Bunga pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Pasar Bunga"
      },
      {
            "id": "gunungluhur-visual-13",
            "judul": "Peringatan Dilarang Keluar Jalur Pendakian",
            "kategori": "lainnya",
            "kategori_label": "Lainnya",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/peringatan%20dilarang%20keluar%20jalur%20pendakian.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Peringatan Dilarang Keluar Jalur Pendakian pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Peringatan Dilarang Keluar Jalur Pendakian"
      },
      {
            "id": "gunungluhur-visual-14",
            "judul": "Plang Pos 2 Sanghek",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/plang%20pos%202%20sanghek.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Plang Pos 2 Sanghek pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Plang Pos 2 Sanghek"
      },
      {
            "id": "gunungluhur-visual-15",
            "judul": "Plang Pos 5 Heuay",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/plang%20pos%205%20heuay.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Plang Pos 5 Heuay pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Plang Pos 5 Heuay"
      },
      {
            "id": "gunungluhur-visual-16",
            "judul": "Pos 1 Pendakian",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/pos%201.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Pondok peristirahatan pertama Pos 1 pada jalur resmi pendakian Gunung Luhur.",
            "badge_status": "Pos 1 Pendakian"
      },
      {
            "id": "gunungluhur-visual-17",
            "judul": "Pos 3 Peristirahatan",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/pos%203.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Pondok singgah Pos 3 di tengah jalur pendakian Gunung Luhur untuk melepas lelah.",
            "badge_status": "Pos 3 Peristirahatan"
      },
      {
            "id": "gunungluhur-visual-18",
            "judul": "Loket Registrasi Tampak Depan",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/loket%20registrasi%20tampak%20depan.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi loket pendaftaran dan pembayaran simaksi resmi dari tampak depan.",
            "badge_status": "Loket Registrasi Tampak Depan"
      },
      {
            "id": "gunungluhur-visual-19",
            "judul": "Ruang Medis Basecamp",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/ruang%20medis%20basecamp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Ruang Medis Basecamp"
      },
      {
            "id": "gunungluhur-visual-20",
            "judul": "Spot Foto Bunga",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/spot%20foto%20bunga.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Spot Foto Bunga pada dokumentasi survei lapangan resmi Gunung Luhur Sukamakmur.",
            "badge_status": "Spot Foto Bunga"
      },
      {
            "id": "gunungluhur-visual-21",
            "judul": "Tempat Wudhu Mushola Basecamp",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/tempat%20wudhu%20mushola%20basecamp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi sanitasi dan kebersihan fasilitas toilet serta tempat wudhu di kawasan Gunung Luhur.",
            "badge_status": "Tempat Wudhu Mushola Basecamp"
      },
      {
            "id": "gunungluhur-visual-22",
            "judul": "Toilet di Musholla",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/toilet%20di%20musholla.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi sanitasi dan kebersihan fasilitas toilet serta tempat wudhu di kawasan Gunung Luhur.",
            "badge_status": "Toilet di Musholla"
      },
      {
            "id": "gunungluhur-visual-23",
            "judul": "Trek Anak Tangga",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/trek%20anak%20tangga.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kondisi fisik jalur trekking setapak alami yang terawat menuju pos pendakian.",
            "badge_status": "Trek Anak Tangga"
      },
      {
            "id": "gunungluhur-visual-24",
            "judul": "Video Anak Tangga dan Jalur Berbatu",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20anak%20tangga%20dan%20jalur%20berbatu.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20anak%20tangga%20dan%20jalur%20berbatu.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video anak tangga dan jalur berbatu di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Anak Tangga dan Jalur Berbatu"
      },
      {
            "id": "gunungluhur-visual-25",
            "judul": "Video Area Camping Puncak dan Lautan Awan",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20area%20camping%20puncak%20dan%20lautan%20awan.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20area%20camping%20puncak%20dan%20lautan%20awan.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video area camping puncak dan lautan awan di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Area Camping Puncak dan Lautan Awan"
      },
      {
            "id": "gunungluhur-visual-26",
            "judul": "Video Jalur Awal Pendakian Hutan Pinus",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20awal%20pendakian%20hutan%20pinus.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20awal%20pendakian%20hutan%20pinus.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video jalur awal pendakian hutan pinus di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Jalur Awal Pendakian Hutan Pinus"
      },
      {
            "id": "gunungluhur-visual-27",
            "judul": "Video Jalur Hutan Menuju Pos 5",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20hutan%20menuju%20pos%205.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20hutan%20menuju%20pos%205.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video jalur hutan menuju pos 5 di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Jalur Hutan Menuju Pos 5"
      },
      {
            "id": "gunungluhur-visual-28",
            "judul": "Video Jalur Setapak Vegetasi Rapat Pos 5",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20setapak%20vegetasi%20rapat%20pos%205.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20setapak%20vegetasi%20rapat%20pos%205.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video jalur setapak vegetasi rapat pos 5 di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Jalur Setapak Vegetasi Rapat Pos 5"
      },
      {
            "id": "gunungluhur-visual-29",
            "judul": "Video Jalur Tanjakan Terjal Pegunungan",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20tanjakan%20terjal%20pegunungan.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20jalur%20tanjakan%20terjal%20pegunungan.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video jalur tanjakan terjal pegunungan di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Jalur Tanjakan Terjal Pegunungan"
      },
      {
            "id": "gunungluhur-visual-30",
            "judul": "Video Keasrian Hutan Pinus Sukamakmur",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20keasrian%20hutan%20pinus%20sukamakmur.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20keasrian%20hutan%20pinus%20sukamakmur.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video keasrian hutan pinus sukamakmur di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Keasrian Hutan Pinus Sukamakmur"
      },
      {
            "id": "gunungluhur-visual-31",
            "judul": "Video Keindahan Panorama Alam Terbuka",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20keindahan%20panorama%20alam%20terbuka.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20keindahan%20panorama%20alam%20terbuka.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video keindahan panorama alam terbuka di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Keindahan Panorama Alam Terbuka"
      },
      {
            "id": "gunungluhur-visual-32",
            "judul": "Video Mendekati Area Kebun Bunga",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20mendekati%20area%20kebun%20bunga.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20mendekati%20area%20kebun%20bunga.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video mendekati area kebun bunga di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Mendekati Area Kebun Bunga"
      },
      {
            "id": "gunungluhur-visual-33",
            "judul": "Video Panorama Puncak dan Punggungan Bukit",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20panorama%20puncak%20dan%20punggungan%20bukit.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20panorama%20puncak%20dan%20punggungan%20bukit.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video panorama puncak dan punggungan bukit di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Panorama Puncak dan Punggungan Bukit"
      },
      {
            "id": "gunungluhur-visual-34",
            "judul": "Video Pemandangan Puncak Gunung Luhur Terbuka",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20pemandangan%20puncak%20gunung%20luhur%20terbuka.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20pemandangan%20puncak%20gunung%20luhur%20terbuka.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video pemandangan puncak gunung luhur terbuka di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Pemandangan Puncak Gunung Luhur Terbuka"
      },
      {
            "id": "gunungluhur-visual-35",
            "judul": "Video Perjalanan Trekking Menuju Pos 3",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20perjalanan%20trekking%20menuju%20pos%203.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20perjalanan%20trekking%20menuju%20pos%203.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video perjalanan trekking menuju pos 3 di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Perjalanan Trekking Menuju Pos 3"
      },
      {
            "id": "gunungluhur-visual-36",
            "judul": "Video Spot Foto Panca Warna MT Luhur",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20spot%20foto%20panca%20warna%20mt%20luhur.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20spot%20foto%20panca%20warna%20mt%20luhur.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video spot foto panca warna mt luhur di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Spot Foto Panca Warna MT Luhur"
      },
      {
            "id": "gunungluhur-visual-37",
            "judul": "Video Suasana Pos 4 Pendakian",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20suasana%20pos%204%20pendakian.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20suasana%20pos%204%20pendakian.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video suasana pos 4 pendakian di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Suasana Pos 4 Pendakian"
      },
      {
            "id": "gunungluhur-visual-38",
            "judul": "Video Trek Setapak Hutan Pinus",
            "kategori": "aktivitas",
            "kategori_label": "Aktivitas",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20trek%20setapak%20hutan%20pinus.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20trek%20setapak%20hutan%20pinus.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video trek setapak hutan pinus di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Trek Setapak Hutan Pinus"
      },
      {
            "id": "gunungluhur-visual-39",
            "judul": "Video Vegetasi Hijau dan Bukit Sukamakmur",
            "kategori": "alam",
            "kategori_label": "Alam",
            "tipe_media": "video",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20vegetasi%20hijau%20dan%20bukit%20sukamakmur.mp4",
            "url_video": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/video%20vegetasi%20hijau%20dan%20bukit%20sukamakmur.mp4",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Dokumentasi video video vegetasi hijau dan bukit sukamakmur di kawasan wisata Gunung Luhur Sukamakmur.",
            "badge_status": "Video Vegetasi Hijau dan Bukit Sukamakmur"
      },
      {
            "id": "gunungluhur-visual-40",
            "judul": "Warung Basecamp",
            "kategori": "fasilitas",
            "kategori_label": "Fasilitas",
            "tipe_media": "foto",
            "url_gambar": "/assets/visual/gunung_luhur_sukamakmur/survei%20gunung%20luhur/warung%20basecamp.jpg",
            "keterangan_waktu": "Survei Lapangan Resmi",
            "deskripsi": "Kawasan bumi perkemahan (camping ground) berlatar pemandangan alam perbukitan terbuka.",
            "badge_status": "Warung Basecamp"
      }
],
    "kontak_pic": {
      "nama": "Pengelola Gunung Luhur",
      "jabatan": "Koordinator Wisata",
      "telepon": "0821-1999-723",
      "whatsapp": "08211999723"
    },
    "nomor_pengelola": "0821-1999-723",
    "akun_instagram": "@gunung_luhur_official",
    "status_operasional": "Aktif / Dikelola",
    "status_verifikasi": "terverifikasi",
    "status_rekomendasi": "DIREKOMENDASIKAN",
    "skor_verifikasi": "100%",
    "catatan_survei": "Data telah diverifikasi tim lapangan EksploTrip pada survei resmi v3.",
    "is_dummy": false,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000004",
    "id_kode": "CRG-001",
    "nama_wisata": "Curug Aren",
    "slug": "curug-aren",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-aren-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000005",
    "id_kode": "CRG-002",
    "nama_wisata": "Curug Asoy",
    "slug": "curug-asoy",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-asoy-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000006",
    "id_kode": "CRG-003",
    "nama_wisata": "Curug Bidadari Sentul",
    "slug": "curug-bidadari-sentul",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-bidadari-sentul-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000007",
    "id_kode": "CRG-004",
    "nama_wisata": "Curug Bingbin",
    "slug": "curug-bingbin",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-bingbin-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000008",
    "id_kode": "CRG-005",
    "nama_wisata": "Curug Cisalada",
    "slug": "curug-cisalada",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cisalada-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000009",
    "id_kode": "CRG-006",
    "nama_wisata": "Curug Dua Perjaka",
    "slug": "curug-dua-perjaka",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-dua-perjaka-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000010",
    "id_kode": "CRG-007",
    "nama_wisata": "Curug Kanyere",
    "slug": "curug-kanyere",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kanyere-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000011",
    "id_kode": "CRG-008",
    "nama_wisata": "Curug Love",
    "slug": "curug-love",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-love-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000012",
    "id_kode": "CRG-009",
    "nama_wisata": "Curug Ngumpet Bojongkoneng",
    "slug": "curug-ngumpet-bojongkoneng",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ngumpet-bojongkoneng-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000013",
    "id_kode": "CRG-010",
    "nama_wisata": "Curug Putri Kencana",
    "slug": "curug-putri-kencana",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-putri-kencana-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000014",
    "id_kode": "CRG-011",
    "nama_wisata": "Curug Cikaracak",
    "slug": "curug-cikaracak",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cikaracak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000015",
    "id_kode": "CRG-012",
    "nama_wisata": "Curug Ciberet",
    "slug": "curug-ciberet",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Ciawi, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciberet-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000016",
    "id_kode": "CRG-013",
    "nama_wisata": "Curug Ketupat",
    "slug": "curug-ketupat",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Ciawi, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ketupat-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000017",
    "id_kode": "CRG-014",
    "nama_wisata": "Curug Lembah Pelangi",
    "slug": "curug-lembah-pelangi",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cibungbulang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-lembah-pelangi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000018",
    "id_kode": "CRG-015",
    "nama_wisata": "Curug Ciawitali",
    "slug": "curug-ciawitali",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciawitali-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000019",
    "id_kode": "CRG-016",
    "nama_wisata": "Curug Ciazis",
    "slug": "curug-ciazis",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciazis-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000020",
    "id_kode": "CRG-017",
    "nama_wisata": "Curug Cipadaranten",
    "slug": "curug-cipadaranten",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cipadaranten-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000021",
    "id_kode": "CRG-018",
    "nama_wisata": "Curug Cisadane",
    "slug": "curug-cisadane",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cisadane-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000022",
    "id_kode": "CRG-019",
    "nama_wisata": "Curug Pengleseran",
    "slug": "curug-pengleseran",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigudeg, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-pengleseran-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000023",
    "id_kode": "CRG-020",
    "nama_wisata": "Curug Rahong",
    "slug": "curug-rahong",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cigudeg, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-rahong-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000024",
    "id_kode": "CRG-021",
    "nama_wisata": "Curug Putri Pelangi",
    "slug": "curug-putri-pelangi",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-putri-pelangi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000025",
    "id_kode": "CRG-022",
    "nama_wisata": "Curug Cibogo",
    "slug": "curug-cibogo",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cibogo-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000026",
    "id_kode": "CRG-023",
    "nama_wisata": "Curug Jaksa",
    "slug": "curug-jaksa",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-jaksa-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000027",
    "id_kode": "CRG-024",
    "nama_wisata": "Curug Pariuk",
    "slug": "curug-pariuk",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-pariuk-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000028",
    "id_kode": "CRG-025",
    "nama_wisata": "Curug Cibentang",
    "slug": "curug-cibentang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Ciseeng, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cibentang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000029",
    "id_kode": "CRG-026",
    "nama_wisata": "Curug Sedong",
    "slug": "curug-sedong",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Jonggol, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-sedong-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000030",
    "id_kode": "CRG-027",
    "nama_wisata": "Curug Ciaul Purasari",
    "slug": "curug-ciaul-purasari",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Leuwiliang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciaul-purasari-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000031",
    "id_kode": "CRG-028",
    "nama_wisata": "Curug Cikoneng",
    "slug": "curug-cikoneng",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Leuwiliang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cikoneng-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000032",
    "id_kode": "CRG-029",
    "nama_wisata": "Curug Buleud",
    "slug": "curug-buleud",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-buleud-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000033",
    "id_kode": "CRG-031",
    "nama_wisata": "Curug Cilember",
    "slug": "curug-cilember",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cilember-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000034",
    "id_kode": "CRG-032",
    "nama_wisata": "Curug Kembar",
    "slug": "curug-kembar",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kembar-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000035",
    "id_kode": "CRG-033",
    "nama_wisata": "Curug Naga",
    "slug": "curug-naga",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-naga-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000036",
    "id_kode": "CRG-034",
    "nama_wisata": "Curug Orok",
    "slug": "curug-orok",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-orok-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000037",
    "id_kode": "CRG-035",
    "nama_wisata": "Curug Panjang Megamendung",
    "slug": "curug-panjang-megamendung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-panjang-megamendung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000038",
    "id_kode": "CRG-036",
    "nama_wisata": "Curug Cikawung Nanggung",
    "slug": "curug-cikawung-nanggung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cikawung-nanggung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000039",
    "id_kode": "CRG-037",
    "nama_wisata": "Curug Kembar Cinyenang",
    "slug": "curug-kembar-cinyenang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kembar-cinyenang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000040",
    "id_kode": "CRG-038",
    "nama_wisata": "Curug Love Nanggung",
    "slug": "curug-love-nanggung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-love-nanggung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000041",
    "id_kode": "CRG-039",
    "nama_wisata": "Curug Sawer",
    "slug": "curug-sawer",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-sawer-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000042",
    "id_kode": "CRG-040",
    "nama_wisata": "Curug Angkasa",
    "slug": "curug-angkasa",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-angkasa-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000043",
    "id_kode": "CRG-041",
    "nama_wisata": "Curug Balong Endah",
    "slug": "curug-balong-endah",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-balong-endah-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000044",
    "id_kode": "CRG-042",
    "nama_wisata": "Curug Balong Kiara",
    "slug": "curug-balong-kiara",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-balong-kiara-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000045",
    "id_kode": "CRG-043",
    "nama_wisata": "Curug Batu Ampar",
    "slug": "curug-batu-ampar",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-batu-ampar-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000046",
    "id_kode": "CRG-044",
    "nama_wisata": "Curug Batu Pancur",
    "slug": "curug-batu-pancur",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-batu-pancur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000047",
    "id_kode": "CRG-045",
    "nama_wisata": "Curug Bidadari",
    "slug": "curug-bidadari",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-bidadari-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000048",
    "id_kode": "CRG-046",
    "nama_wisata": "Curug Cigamea",
    "slug": "curug-cigamea",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cigamea-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000049",
    "id_kode": "CRG-047",
    "nama_wisata": "Curug Cihurang",
    "slug": "curug-cihurang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cihurang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000050",
    "id_kode": "CRG-048",
    "nama_wisata": "Curug Cikawah",
    "slug": "curug-cikawah",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cikawah-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000051",
    "id_kode": "CRG-049",
    "nama_wisata": "Curug Cikuluwung",
    "slug": "curug-cikuluwung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cikuluwung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000052",
    "id_kode": "CRG-050",
    "nama_wisata": "Curug Ciparay",
    "slug": "curug-ciparay",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciparay-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000053",
    "id_kode": "CRG-051",
    "nama_wisata": "Curug Geblug",
    "slug": "curug-geblug",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-geblug-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000054",
    "id_kode": "CRG-052",
    "nama_wisata": "Curug Kondang",
    "slug": "curug-kondang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kondang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000055",
    "id_kode": "CRG-053",
    "nama_wisata": "Curug Lontar",
    "slug": "curug-lontar",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-lontar-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000056",
    "id_kode": "CRG-054",
    "nama_wisata": "Curug Pangeran",
    "slug": "curug-pangeran",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-pangeran-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000057",
    "id_kode": "CRG-055",
    "nama_wisata": "Curug Panganten Batu Ampar 1",
    "slug": "curug-panganten-batu-ampar-1",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-panganten-batu-ampar-1-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000058",
    "id_kode": "CRG-056",
    "nama_wisata": "Curug Payung",
    "slug": "curug-payung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-payung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000059",
    "id_kode": "CRG-057",
    "nama_wisata": "Curug Saderi",
    "slug": "curug-saderi",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-saderi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000060",
    "id_kode": "CRG-058",
    "nama_wisata": "Curug Sawer",
    "slug": "curug-sawer-pamijahan",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-sawer-pamijahan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000061",
    "id_kode": "CRG-059",
    "nama_wisata": "Curug Seribu",
    "slug": "curug-seribu",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-seribu-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000062",
    "id_kode": "CRG-060",
    "nama_wisata": "Curug Walet",
    "slug": "curug-walet",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-walet-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000063",
    "id_kode": "CRG-061",
    "nama_wisata": "Lembah Tepus",
    "slug": "lembah-tepus",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "lembah-tepus-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000064",
    "id_kode": "CRG-062",
    "nama_wisata": "Curug Suakan Rumpin",
    "slug": "curug-suakan-rumpin",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Rumpin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-suakan-rumpin-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000065",
    "id_kode": "CRG-063",
    "nama_wisata": "Curug Cidurian",
    "slug": "curug-cidurian",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukajaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cidurian-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000066",
    "id_kode": "CRG-064",
    "nama_wisata": "Curug Pintu Air",
    "slug": "curug-pintu-air",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukajaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-pintu-air-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000067",
    "id_kode": "CRG-065",
    "nama_wisata": "Curug Cibaliung",
    "slug": "curug-cibaliung",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cibaliung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000068",
    "id_kode": "CRG-066",
    "nama_wisata": "Curug Cibereum Rawagede",
    "slug": "curug-cibereum-rawagede",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cibereum-rawagede-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000069",
    "id_kode": "CRG-067",
    "nama_wisata": "Curug Ciburial",
    "slug": "curug-ciburial",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciburial-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000070",
    "id_kode": "CRG-068",
    "nama_wisata": "Curug Cidulang Khayangan",
    "slug": "curug-cidulang-khayangan",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cidulang-khayangan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000071",
    "id_kode": "CRG-069",
    "nama_wisata": "Curug Ciherang Sukmakmur",
    "slug": "curug-ciherang-sukmakmur",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciherang-sukmakmur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000072",
    "id_kode": "CRG-070",
    "nama_wisata": "Curug Cilandak",
    "slug": "curug-cilandak",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cilandak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000073",
    "id_kode": "CRG-071",
    "nama_wisata": "Curug Citiis Jonggol",
    "slug": "curug-citiis-jonggol",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-citiis-jonggol-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000074",
    "id_kode": "CRG-072",
    "nama_wisata": "Curug Hordeng",
    "slug": "curug-hordeng",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-hordeng-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000075",
    "id_kode": "CRG-073",
    "nama_wisata": "Curug Kembar",
    "slug": "curug-kembar-sukamakmur",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kembar-sukamakmur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000076",
    "id_kode": "CRG-074",
    "nama_wisata": "Curug Leuwi Hejo",
    "slug": "curug-leuwi-hejo",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-leuwi-hejo-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000077",
    "id_kode": "CRG-075",
    "nama_wisata": "Curug Leuwi Panjang",
    "slug": "curug-leuwi-panjang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-leuwi-panjang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000078",
    "id_kode": "CRG-076",
    "nama_wisata": "Curug Lieuk",
    "slug": "curug-lieuk",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-lieuk-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000079",
    "id_kode": "CRG-077",
    "nama_wisata": "Curug Mariuk",
    "slug": "curug-mariuk",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-mariuk-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000080",
    "id_kode": "CRG-078",
    "nama_wisata": "Curug Salangit Atas",
    "slug": "curug-salangit-atas",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-salangit-atas-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000081",
    "id_kode": "CRG-079",
    "nama_wisata": "Curug Aspi",
    "slug": "curug-aspi",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-aspi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000082",
    "id_kode": "CRG-080",
    "nama_wisata": "Curug Daun",
    "slug": "curug-daun",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-daun-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000083",
    "id_kode": "CRG-081",
    "nama_wisata": "Curug Luhur",
    "slug": "curug-luhur",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-luhur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000084",
    "id_kode": "CRG-082",
    "nama_wisata": "Curug Mading",
    "slug": "curug-mading",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-mading-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000085",
    "id_kode": "CRG-083",
    "nama_wisata": "Curug Nangka",
    "slug": "curug-nangka",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-nangka-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000086",
    "id_kode": "CRG-084",
    "nama_wisata": "Curug Country Jonggol",
    "slug": "curug-country-jonggol",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tanjung Sari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-country-jonggol-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000087",
    "id_kode": "CRG-085",
    "nama_wisata": "Curug Ciampea",
    "slug": "curug-ciampea",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciampea-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000088",
    "id_kode": "CRG-086",
    "nama_wisata": "Curug Cipeteuy",
    "slug": "curug-cipeteuy",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-cipeteuy-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000089",
    "id_kode": "CRG-087",
    "nama_wisata": "Curug Ciputri",
    "slug": "curug-ciputri",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ciputri-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000090",
    "id_kode": "CRG-088",
    "nama_wisata": "Curug Goong",
    "slug": "curug-goong",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-goong-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000091",
    "id_kode": "CRG-089",
    "nama_wisata": "Curug Kiara",
    "slug": "curug-kiara",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-kiara-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000092",
    "id_kode": "CRG-090",
    "nama_wisata": "Curug Padalarang",
    "slug": "curug-padalarang",
    "tipe_wisata": "curug",
    "label_tipe": "Curug",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi curug contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-padalarang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000093",
    "id_kode": "STU-001",
    "nama_wisata": "Situ Gede",
    "slug": "situ-gede",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Bogor Barat, Bogor",
    "kabupaten_kota": "Kota",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-gede-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000094",
    "id_kode": "STU-002",
    "nama_wisata": "Danau Gunting Kebun Raya Bogor",
    "slug": "danau-gunting-kebun-raya-bogor",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Bogor Tengah, Bogor",
    "kabupaten_kota": "Kota",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "danau-gunting-kebun-raya-bogor-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000095",
    "id_kode": "STU-003",
    "nama_wisata": "Danau Rusunawa",
    "slug": "danau-rusunawa",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Bogor Utara, Bogor",
    "kabupaten_kota": "Kota",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "danau-rusunawa-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000096",
    "id_kode": "STU-004",
    "nama_wisata": "Situ Bekang",
    "slug": "situ-bekang",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-bekang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000097",
    "id_kode": "STU-005",
    "nama_wisata": "Situ Bentenan",
    "slug": "situ-bentenan",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-bentenan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000098",
    "id_kode": "STU-006",
    "nama_wisata": "Situ Cibuntu",
    "slug": "situ-cibuntu",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-cibuntu-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000099",
    "id_kode": "STU-007",
    "nama_wisata": "Situ Cikaret",
    "slug": "situ-cikaret",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-cikaret-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000100",
    "id_kode": "STU-008",
    "nama_wisata": "Situ Citatah",
    "slug": "situ-citatah",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-citatah-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000101",
    "id_kode": "STU-009",
    "nama_wisata": "Situ Kibing",
    "slug": "situ-kibing",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cibinong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-kibing-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000102",
    "id_kode": "STU-010",
    "nama_wisata": "Danau Lido",
    "slug": "danau-lido",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "danau-lido-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000103",
    "id_kode": "STU-011",
    "nama_wisata": "Situ Ciomas Permai",
    "slug": "situ-ciomas-permai",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Ciomas, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-ciomas-permai-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000104",
    "id_kode": "STU-012",
    "nama_wisata": "Situ Iwul",
    "slug": "situ-iwul",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Parung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-iwul-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000105",
    "id_kode": "STU-013",
    "nama_wisata": "Danau Situ Cibodas",
    "slug": "danau-situ-cibodas",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Rumpin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "danau-situ-cibodas-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000106",
    "id_kode": "STU-014",
    "nama_wisata": "Situ Rawa Gede",
    "slug": "situ-rawa-gede",
    "tipe_wisata": "danau",
    "label_tipe": "Danau",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi danau contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "situ-rawa-gede-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000107",
    "id_kode": "BKT-001",
    "nama_wisata": "Bukit Batu Gajah",
    "slug": "bukit-batu-gajah",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-batu-gajah-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000108",
    "id_kode": "BKT-002",
    "nama_wisata": "Bukit Batu Gede",
    "slug": "bukit-batu-gede",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-batu-gede-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000109",
    "id_kode": "BKT-003",
    "nama_wisata": "Bukit Batu Hijau Gunung Pancar Camp Ground",
    "slug": "bukit-batu-hijau-gunung-pancar-camp-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-batu-hijau-gunung-pancar-camp-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000110",
    "id_kode": "BKT-004",
    "nama_wisata": "Bukit Batu Pandan",
    "slug": "bukit-batu-pandan",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-batu-pandan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000111",
    "id_kode": "BKT-005",
    "nama_wisata": "Bukit Paniisan",
    "slug": "bukit-paniisan",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-paniisan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000112",
    "id_kode": "BKT-006",
    "nama_wisata": "Bumi Kepanduan Sentul",
    "slug": "bumi-kepanduan-sentul",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-kepanduan-sentul-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000113",
    "id_kode": "BKT-007",
    "nama_wisata": "Camping Ground Bukit Wangun",
    "slug": "camping-ground-bukit-wangun",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-bukit-wangun-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000114",
    "id_kode": "BKT-008",
    "nama_wisata": "Goes Camp",
    "slug": "goes-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "goes-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000115",
    "id_kode": "BKT-009",
    "nama_wisata": "Gunung Ciung Camping Ground",
    "slug": "gunung-ciung-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "gunung-ciung-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000116",
    "id_kode": "BKT-010",
    "nama_wisata": "Gunung Pancar Camping Ground",
    "slug": "gunung-pancar-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "gunung-pancar-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000117",
    "id_kode": "BKT-011",
    "nama_wisata": "Lembah Hijau",
    "slug": "lembah-hijau",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "lembah-hijau-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000118",
    "id_kode": "BKT-012",
    "nama_wisata": "Lembah Pakis",
    "slug": "lembah-pakis",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "lembah-pakis-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000119",
    "id_kode": "BKT-013",
    "nama_wisata": "Sisi Cai Campground",
    "slug": "sisi-cai-campground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Babakan Madang, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "sisi-cai-campground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000120",
    "id_kode": "BKT-014",
    "nama_wisata": "Camping Ground Pancawati",
    "slug": "camping-ground-pancawati",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-pancawati-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000121",
    "id_kode": "BKT-015",
    "nama_wisata": "El Mande Camping Ground",
    "slug": "el-mande-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "el-mande-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000122",
    "id_kode": "BKT-016",
    "nama_wisata": "Garuda Huha Camp",
    "slug": "garuda-huha-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "garuda-huha-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000123",
    "id_kode": "BKT-017",
    "nama_wisata": "Halimun Camping Ground",
    "slug": "halimun-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "halimun-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000124",
    "id_kode": "BKT-018",
    "nama_wisata": "Kancah Nangkub Site – Warung Kopi Kampung & Camping Ground",
    "slug": "kancah-nangkub-site-warung-kopi-kampung-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "kancah-nangkub-site-warung-kopi-kampung-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000125",
    "id_kode": "BKT-019",
    "nama_wisata": "Lingkung Gunung Adventure Camp",
    "slug": "lingkung-gunung-adventure-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "lingkung-gunung-adventure-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000126",
    "id_kode": "BKT-020",
    "nama_wisata": "Pondok Kapilih Camping Ground",
    "slug": "pondok-kapilih-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "pondok-kapilih-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000127",
    "id_kode": "BKT-021",
    "nama_wisata": "Puncak Halimun Camp Bogor",
    "slug": "puncak-halimun-camp-bogor",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "puncak-halimun-camp-bogor-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000128",
    "id_kode": "BKT-022",
    "nama_wisata": "Tempat Camping Di Bogor",
    "slug": "tempat-camping-di-bogor",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Caringin, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "tempat-camping-di-bogor-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000129",
    "id_kode": "BKT-023",
    "nama_wisata": "Bumi Perkemahan Ciburayut",
    "slug": "bumi-perkemahan-ciburayut",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-ciburayut-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000130",
    "id_kode": "BKT-024",
    "nama_wisata": "Bumi Perkemahan Suaka Elang",
    "slug": "bumi-perkemahan-suaka-elang",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-suaka-elang-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000131",
    "id_kode": "BKT-025",
    "nama_wisata": "Camping Ground Desa Wisata Watesjaya",
    "slug": "camping-ground-desa-wisata-watesjaya",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-desa-wisata-watesjaya-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000132",
    "id_kode": "BKT-026",
    "nama_wisata": "Suaka Elang Loji Camping Ground",
    "slug": "suaka-elang-loji-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cigombong, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "suaka-elang-loji-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000133",
    "id_kode": "BKT-027",
    "nama_wisata": "Bukit Alesano Campground",
    "slug": "bukit-alesano-campground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-alesano-campground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000134",
    "id_kode": "BKT-028",
    "nama_wisata": "Bumi Perkemahan Bukit Pangkalan Hijau",
    "slug": "bumi-perkemahan-bukit-pangkalan-hijau",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-bukit-pangkalan-hijau-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000135",
    "id_kode": "BKT-029",
    "nama_wisata": "Camping Ground Bukit Gajah",
    "slug": "camping-ground-bukit-gajah",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-bukit-gajah-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000136",
    "id_kode": "BKT-030",
    "nama_wisata": "Camping Ground Rumah Merah Salak",
    "slug": "camping-ground-rumah-merah-salak",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-rumah-merah-salak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000137",
    "id_kode": "BKT-031",
    "nama_wisata": "Camping Paradise GABE",
    "slug": "camping-paradise-gabe",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-paradise-gabe-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000138",
    "id_kode": "BKT-032",
    "nama_wisata": "Clavo Hill Camp",
    "slug": "clavo-hill-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "clavo-hill-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000139",
    "id_kode": "BKT-033",
    "nama_wisata": "D'rajih Nature Camp",
    "slug": "drajih-nature-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "drajih-nature-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000140",
    "id_kode": "BKT-034",
    "nama_wisata": "Gajog Hill Camp",
    "slug": "gajog-hill-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "gajog-hill-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000141",
    "id_kode": "BKT-035",
    "nama_wisata": "Hopeland Camp",
    "slug": "hopeland-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "hopeland-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000142",
    "id_kode": "BKT-036",
    "nama_wisata": "Taneuh Polaris",
    "slug": "taneuh-polaris",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "taneuh-polaris-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000143",
    "id_kode": "BKT-037",
    "nama_wisata": "Toba Paradise Camp",
    "slug": "toba-paradise-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cijeruk, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "toba-paradise-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000144",
    "id_kode": "BKT-038",
    "nama_wisata": "Bukit Cita-Cita Camping Ground",
    "slug": "bukit-cita-cita-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-cita-cita-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000145",
    "id_kode": "BKT-039",
    "nama_wisata": "Bukit Citamiang Camping Ground",
    "slug": "bukit-citamiang-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-citamiang-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000146",
    "id_kode": "BKT-040",
    "nama_wisata": "Bukit Gunder Camping Ground & Kedai Kopi",
    "slug": "bukit-gunder-camping-ground-kedai-kopi",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Cisarua, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-gunder-camping-ground-kedai-kopi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000147",
    "id_kode": "BKT-041",
    "nama_wisata": "Bukit Cirimpak Camping Ground",
    "slug": "bukit-cirimpak-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-cirimpak-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000148",
    "id_kode": "BKT-042",
    "nama_wisata": "Bukit Kumpel / Puncak Langit Camping Ground",
    "slug": "bukit-kumpel-puncak-langit-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-kumpel-puncak-langit-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000149",
    "id_kode": "BKT-043",
    "nama_wisata": "Bukit Pinus Paseban Camp",
    "slug": "bukit-pinus-paseban-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-pinus-paseban-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000150",
    "id_kode": "BKT-044",
    "nama_wisata": "Camping Ground Eagle Hill Mega Mendung",
    "slug": "camping-ground-eagle-hill-mega-mendung",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-eagle-hill-mega-mendung-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000151",
    "id_kode": "BKT-045",
    "nama_wisata": "Campground Situhiang / Highland Camp",
    "slug": "campground-situhiang-highland-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "campground-situhiang-highland-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000152",
    "id_kode": "BKT-046",
    "nama_wisata": "Geger Paseban Camping Ground",
    "slug": "geger-paseban-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "geger-paseban-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000153",
    "id_kode": "BKT-047",
    "nama_wisata": "Lentemland Camping Ground & Coffee",
    "slug": "lentemland-camping-ground-coffee",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "lentemland-camping-ground-coffee-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000154",
    "id_kode": "BKT-048",
    "nama_wisata": "Mega Indah Camping Ground",
    "slug": "mega-indah-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "mega-indah-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000155",
    "id_kode": "BKT-049",
    "nama_wisata": "Megamendung Fun Camp",
    "slug": "megamendung-fun-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "megamendung-fun-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000156",
    "id_kode": "BKT-050",
    "nama_wisata": "Paseban Mountain View Camping Ground",
    "slug": "paseban-mountain-view-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "paseban-mountain-view-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000157",
    "id_kode": "BKT-051",
    "nama_wisata": "Pesona Bukit Damar Camp",
    "slug": "pesona-bukit-damar-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "pesona-bukit-damar-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000158",
    "id_kode": "BKT-052",
    "nama_wisata": "River Campground",
    "slug": "river-campground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "river-campground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000159",
    "id_kode": "BKT-053",
    "nama_wisata": "SQUID CAMP",
    "slug": "squid-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "squid-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000160",
    "id_kode": "BKT-054",
    "nama_wisata": "Tekad Camping Ground",
    "slug": "tekad-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "tekad-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000161",
    "id_kode": "BKT-055",
    "nama_wisata": "Villa Jago Camping Ground",
    "slug": "villa-jago-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Megamendung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "villa-jago-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000162",
    "id_kode": "BKT-056",
    "nama_wisata": "Bumi Perkemahan Cisangku",
    "slug": "bumi-perkemahan-cisangku",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-cisangku-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000163",
    "id_kode": "BKT-057",
    "nama_wisata": "Bumi Perkemahan Citalahab Central",
    "slug": "bumi-perkemahan-citalahab-central",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-citalahab-central-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000164",
    "id_kode": "BKT-058",
    "nama_wisata": "Bumi Perkemahan Halimun Salak",
    "slug": "bumi-perkemahan-halimun-salak",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-halimun-salak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000165",
    "id_kode": "BKT-059",
    "nama_wisata": "Camping Ground Desa Wisata Malasari",
    "slug": "camping-ground-desa-wisata-malasari",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Nanggung, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-desa-wisata-malasari-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000166",
    "id_kode": "BKT-060",
    "nama_wisata": "Bukit Jodi Camping Ground",
    "slug": "bukit-jodi-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-jodi-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000167",
    "id_kode": "BKT-061",
    "nama_wisata": "Bukit Kabayan Camping Ground",
    "slug": "bukit-kabayan-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-kabayan-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000168",
    "id_kode": "BKT-062",
    "nama_wisata": "Bukit Surya Salaka",
    "slug": "bukit-surya-salaka",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bukit-surya-salaka-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000169",
    "id_kode": "BKT-063",
    "nama_wisata": "Bumi Perkemahan Cidokom",
    "slug": "bumi-perkemahan-cidokom",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-cidokom-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000170",
    "id_kode": "BKT-064",
    "nama_wisata": "Bumi Perkemahan Gunung Salak",
    "slug": "bumi-perkemahan-gunung-salak",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-gunung-salak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000171",
    "id_kode": "BKT-065",
    "nama_wisata": "Bumi Perkemahan Pasir Luhur",
    "slug": "bumi-perkemahan-pasir-luhur",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-pasir-luhur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000172",
    "id_kode": "BKT-066",
    "nama_wisata": "Camping Ground Gunung Bunder Halimun Salak",
    "slug": "camping-ground-gunung-bunder-halimun-salak",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-gunung-bunder-halimun-salak-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000173",
    "id_kode": "BKT-067",
    "nama_wisata": "Camping Ground Pasir Reungit",
    "slug": "camping-ground-pasir-reungit",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-pasir-reungit-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000174",
    "id_kode": "BKT-068",
    "nama_wisata": "Curug Ngumpet Camping Ground",
    "slug": "curug-ngumpet-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "curug-ngumpet-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000175",
    "id_kode": "BKT-069",
    "nama_wisata": "Gunung Bunder Campground",
    "slug": "gunung-bunder-campground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "gunung-bunder-campground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000176",
    "id_kode": "BKT-070",
    "nama_wisata": "IDN Camping Ground Pamijahan",
    "slug": "idn-camping-ground-pamijahan",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "idn-camping-ground-pamijahan-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000177",
    "id_kode": "BKT-071",
    "nama_wisata": "Leuwi Situhiang & Camping ground",
    "slug": "leuwi-situhiang-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "leuwi-situhiang-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000178",
    "id_kode": "BKT-072",
    "nama_wisata": "Panorama Alam Camping Ground",
    "slug": "panorama-alam-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "panorama-alam-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000179",
    "id_kode": "BKT-073",
    "nama_wisata": "Pasker Camp Purwabakti",
    "slug": "pasker-camp-purwabakti",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Pamijahan, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "pasker-camp-purwabakti-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000180",
    "id_kode": "BKT-074",
    "nama_wisata": "Bumi Perkemahan Pramuka Cimandala",
    "slug": "bumi-perkemahan-pramuka-cimandala",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukaraja, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-pramuka-cimandala-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000181",
    "id_kode": "BKT-075",
    "nama_wisata": "GGCA Gunung Geulis Camp Area",
    "slug": "ggca-gunung-geulis-camp-area",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukaraja, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "ggca-gunung-geulis-camp-area-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000182",
    "id_kode": "BKT-076",
    "nama_wisata": "Camping Ground Cisarua 2 Sukamakmur",
    "slug": "camping-ground-cisarua-2-sukamakmur",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-cisarua-2-sukamakmur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000183",
    "id_kode": "BKT-077",
    "nama_wisata": "Camping Ground Curug Cipamingkis",
    "slug": "camping-ground-curug-cipamingkis",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-curug-cipamingkis-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000184",
    "id_kode": "BKT-078",
    "nama_wisata": "Camping Ground Curug Tidar",
    "slug": "camping-ground-curug-tidar",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-curug-tidar-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000185",
    "id_kode": "BKT-079",
    "nama_wisata": "Camping Ground Desa Wisata Sinarmakmur",
    "slug": "camping-ground-desa-wisata-sinarmakmur",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-desa-wisata-sinarmakmur-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000186",
    "id_kode": "BKT-080",
    "nama_wisata": "Camping Ground Puncak 2 / Cisarua Sukawangi",
    "slug": "camping-ground-puncak-2-cisarua-sukawangi",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-puncak-2-cisarua-sukawangi-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000187",
    "id_kode": "BKT-082",
    "nama_wisata": "Gunung Sabeulah Camping Ground",
    "slug": "gunung-sabeulah-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "gunung-sabeulah-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000188",
    "id_kode": "BKT-083",
    "nama_wisata": "Samudra Alam Camping Ground",
    "slug": "samudra-alam-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "samudra-alam-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000189",
    "id_kode": "BKT-084",
    "nama_wisata": "Taman Bukit Purnama Sukamakmur Camping Ground",
    "slug": "taman-bukit-purnama-sukamakmur-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "taman-bukit-purnama-sukamakmur-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000190",
    "id_kode": "BKT-085",
    "nama_wisata": "Taman Sukawangi Highland Camping Ground",
    "slug": "taman-sukawangi-highland-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "taman-sukawangi-highland-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000191",
    "id_kode": "BKT-086",
    "nama_wisata": "Telaga Gemilang Sampeuran Camping Ground",
    "slug": "telaga-gemilang-sampeuran-camping-ground",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Sukamakmur, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "telaga-gemilang-sampeuran-camping-ground-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000192",
    "id_kode": "BKT-087",
    "nama_wisata": "Bumi Perkemahan Sukamantri",
    "slug": "bumi-perkemahan-sukamantri",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "bumi-perkemahan-sukamantri-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000193",
    "id_kode": "BKT-088",
    "nama_wisata": "Herman Lantang Camp",
    "slug": "herman-lantang-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "herman-lantang-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000194",
    "id_kode": "BKT-089",
    "nama_wisata": "Tamansari Camp & Adventure Bogor",
    "slug": "tamansari-camp-adventure-bogor",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Tamansari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "tamansari-camp-adventure-bogor-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000195",
    "id_kode": "BKT-090",
    "nama_wisata": "Camping Ground Bukit SEM",
    "slug": "camping-ground-bukit-sem",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Tanjungsari, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "camping-ground-bukit-sem-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  },
  {
    "id": "00000000-0000-4000-8000-000000000196",
    "id_kode": "BKT-091",
    "nama_wisata": "MB Camp",
    "slug": "mb-camp",
    "tipe_wisata": "gunung",
    "label_tipe": "Gunung",
    "kecamatan": "Tenjolaya, Bogor",
    "kabupaten_kota": "Kabupaten",
    "alamat": null,
    "deskripsi": "Data destinasi gunung contoh untuk pengujian antarmuka pengembangan EksploTrip. Informasi detail mengenai kondisi lapangan, jalur akses, dan fasilitas akan diperbarui setelah survei lapangan resmi selesai dilaksanakan.",
    "kondisi": [],
    "fasilitas": [
      {
        "nama": "Area Parkir",
        "status": "Belum tersedia",
        "ikon": "local_parking"
      },
      {
        "nama": "Toilet & Kamar Bilas",
        "status": "Belum tersedia",
        "ikon": "wc"
      },
      {
        "nama": "Mushola",
        "status": "Belum tersedia",
        "ikon": "mosque"
      },
      {
        "nama": "Warung Makan",
        "status": "Belum tersedia",
        "ikon": "restaurant"
      },
      {
        "nama": "Penyewaan Pelampung",
        "status": "Belum tersedia",
        "ikon": "support"
      },
      {
        "nama": "Pos Kesehatan / P3K",
        "status": "Belum tersedia",
        "ikon": "medical_services"
      },
      {
        "nama": "Spot Foto",
        "status": "Belum tersedia",
        "ikon": "photo_camera"
      },
      {
        "nama": "Area Camping",
        "status": "Belum tersedia",
        "ikon": "camping"
      }
    ],
    "ketinggian_mdpl": null,
    "waktu_tempuh_parkir": null,
    "waktu_tempuh": null,
    "jarak_trek": null,
    "harga_tiket": null,
    "harga_parkir_motor": null,
    "harga_parkir_mobil": null,
    "catatan_tiket": null,
    "waktu_terbaik": null,
    "jam_buka_weekday": null,
    "jam_buka_weekend": null,
    "jam_ramai_weekend": null,
    "nomor_pengelola": null,
    "nomor_pemandu_lokal": null,
    "tingkat_keramaian": null,
    "koordinat_lat": null,
    "koordinat_lng": null,
    "google_maps_url": null,
    "google_maps_route_url": null,
    "peta_jalur_url": "/assets/images/detail_katalog/peta_jalur_cibulao.png",
    "catatan_jalur": [
      {
        "nomor": "01",
        "judul": "Titik Awal & Parkir",
        "deskripsi": "Belum tersedia — menunggu dokumentasi dan pengukuran survei lapangan."
      },
      {
        "nomor": "02",
        "judul": "Kondisi Jalur Trekking",
        "deskripsi": "Belum tersedia — kondisi fisik jalur belum diverifikasi oleh tim survei."
      },
      {
        "nomor": "03",
        "judul": "Titik Rawan & Keamanan",
        "deskripsi": "Belum tersedia — informasi potensi risiko lapangan masih menunggu hasil survei."
      },
      {
        "nomor": "04",
        "judul": "Estimasi Waktu Tempuh",
        "deskripsi": "Belum tersedia — durasi perjalanan dari titik parkir belum diukur."
      }
    ],
    "foto_utama": "/assets/images/beranda/list_katalog.png",
    "foto_banner": "/assets/visual/curug_cibulao/banner_curug_cibulao.png",
    "galeri_visual": [
      {
        "id": "mb-camp-visual-1",
        "judul": "Placeholder Dokumentasi Lapangan",
        "kategori": "spot-utama",
        "kategori_label": "Spot Utama",
        "tipe_media": "foto",
        "url_gambar": "/assets/images/detail_katalog/list_visual_katalog.png",
        "keterangan_waktu": "Menunggu Survei Lapangan",
        "deskripsi": "Foto dokumentasi survei lapangan belum tersedia. Gambar ini merupakan placeholder visual pengembangan.",
        "badge_status": "Data Dummy (Belum Diverifikasi)"
      }
    ],
    "kontak_pic": null,
    "akun_instagram": null,
    "status_operasional": "Menunggu Survei",
    "status_verifikasi": "belum_terverifikasi",
    "status_rekomendasi": "BELUM DIVERIFIKASI",
    "skor_verifikasi": "0%",
    "catatan_survei": "Data dummy sementara untuk pengujian pengembangan. Seluruh informasi fasilitas, akses, biaya, dan keamanan belum diverifikasi melalui survei lapangan.",
    "is_dummy": true,
    "created_at": "2026-01-01T00:00:00.000Z",
    "updated_at": "2026-01-01T00:00:00.000Z"
  }
];
