export type TipeWisata = 'curug' | 'danau' | 'gunung';

export type StatusVerifikasi =
  | 'belum_terverifikasi'
  | 'proses_survei'
  | 'terverifikasi';

export type KondisiWisata =
  | 'ramah-keluarga'
  | 'akses-mudah'
  | 'jalur-bagus'
  | 'fasilitas-lengkap'
  | 'sedang-hits'
  | 'cocok-pemula';

export interface FasilitasItem {
  nama: string;
  status: string;
  ikon: string;
}

export interface CatatanJalurItem {
  nomor: string;
  judul: string;
  deskripsi: string;
}

export interface GaleriVisualItem {
  id: string;
  judul: string;
  kategori: 'jalur-trekking' | 'spot-utama' | 'fasilitas' | 'area-parkir';
  kategori_label: string;
  tipe_media: 'foto' | 'video';
  url_gambar: string;
  keterangan_waktu: string;
  deskripsi: string;
  badge_status: string;
}

export interface KontakPic {
  nama: string;
  jabatan: string;
  telepon: string | null;
  whatsapp: string | null;
}

export interface Destination {
  id: string;
  nama_wisata: string;
  slug: string;
  tipe_wisata: TipeWisata;
  label_tipe: string;
  kecamatan: string;
  alamat: string | null;
  deskripsi: string | null;
  kondisi: KondisiWisata[];
  fasilitas: FasilitasItem[];
  ketinggian_mdpl: number | null;
  waktu_tempuh_parkir: string | null;
  jarak_trek: string | null;
  harga_tiket: number | null;
  harga_parkir_motor: number | null;
  harga_parkir_mobil: number | null;
  waktu_terbaik: string | null;
  tingkat_keramaian: string | null;
  koordinat_lat: number | null;
  koordinat_lng: number | null;
  google_maps_url: string | null;
  peta_jalur_url: string | null;
  catatan_jalur: CatatanJalurItem[];
  foto_utama: string;
  foto_banner: string;
  galeri_visual: GaleriVisualItem[];
  kontak_pic: KontakPic | null;
  status_operasional: string | null;
  status_verifikasi: StatusVerifikasi;
  catatan_survei: string | null;
  /**
   * Penanda eksplisit bahwa data ini adalah data dummy sementara untuk
   * pengujian tampilan & fungsionalitas sebelum data survei asli tersedia.
   */
  is_dummy: boolean;
  created_at: string;
  updated_at: string;
}

export interface EmergencyAgency {
  id: string;
  nama: string;
  badge: string;
  nomor_tampil: string;
  nomor_panggil: string;
  nomor_salin: string;
  deskripsi: string;
  ikon: string;
}
