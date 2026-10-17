import { DUMMY_DESTINATIONS } from '@/data/destinations';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import {
  CatatanJalurItem,
  Destination,
  FasilitasItem,
  GaleriVisualItem,
  KondisiWisata,
  KontakPic,
  StatusVerifikasi,
  TipeWisata,
} from '@/types/destination';

export interface DestinationsResult {
  destinations: Destination[];
  source: 'supabase' | 'local_dummy';
  error: string | null;
}

const DEFAULT_FASILTAS: FasilitasItem[] = [
  { nama: 'Area Parkir', status: 'Belum tersedia', ikon: 'local_parking' },
  { nama: 'Toilet & Kamar Bilas', status: 'Belum tersedia', ikon: 'wc' },
  { nama: 'Mushola', status: 'Belum tersedia', ikon: 'mosque' },
  { nama: 'Warung Makan', status: 'Belum tersedia', ikon: 'restaurant' },
  { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'Support' },
  { nama: 'Pos Kesehatan / P3K', status: 'Belum tersedia', ikon: 'medical_services' },
  { nama: 'Spot Foto', status: 'Belum tersedia', ikon: 'photo_camera' },
  { nama: 'Area Camping', status: 'Belum tersedia', ikon: 'camping' },
];

function mapTipeLabel(tipe: TipeWisata): string {
  switch (tipe) {
    case 'curug':
      return 'Curug';
    case 'danau':
      return 'Danau';
    case 'gunung':
      return 'Gunung';
    default:
      return 'Destinasi';
  }
}

function normalizeRowToDestination(row: Record<string, unknown>): Destination {
  const tipe = (row.tipe_wisata as TipeWisata) || 'curug';
  const fasilitasRaw = Array.isArray(row.fasilitas)
    ? (row.fasilitas as FasilitasItem[])
    : DEFAULT_FASILTAS;
  const catatanJalurRaw = Array.isArray(row.catatan_jalur)
    ? (row.catatan_jalur as CatatanJalurItem[])
    : [];
  const galeriRaw = Array.isArray(row.galeri_visual)
    ? (row.galeri_visual as GaleriVisualItem[])
    : [];
  const kondisiRaw = Array.isArray(row.kondisi)
    ? (row.kondisi as KondisiWisata[])
    : [];

  return {
    id: String(row.id ?? ''),
    nama_wisata: String(row.nama_wisata ?? 'Destinasi Wisata'),
    slug: String(row.slug ?? ''),
    tipe_wisata: tipe,
    label_tipe: mapTipeLabel(tipe),
    kecamatan: String(row.kecamatan ?? 'Belum tersedia'),
    alamat: row.alamat ? String(row.alamat) : null,
    deskripsi: row.deskripsi ? String(row.deskripsi) : null,
    kondisi: kondisiRaw,
    fasilitas: fasilitasRaw.length > 0 ? fasilitasRaw : DEFAULT_FASILTAS,
    ketinggian_mdpl:
      typeof row.ketinggian_mdpl === 'number' ? row.ketinggian_mdpl : null,
    waktu_tempuh_parkir: row.waktu_tempuh_parkir
      ? String(row.waktu_tempuh_parkir)
      : null,
    jarak_trek: row.jarak_trek ? String(row.jarak_trek) : null,
    harga_tiket: typeof row.harga_tiket === 'number' ? row.harga_tiket : null,
    harga_parkir_motor:
      typeof row.harga_parkir_motor === 'number'
        ? row.harga_parkir_motor
        : null,
    harga_parkir_mobil:
      typeof row.harga_parkir_mobil === 'number'
        ? row.harga_parkir_mobil
        : null,
    waktu_terbaik: row.waktu_terbaik ? String(row.waktu_terbaik) : null,
    tingkat_keramaian: row.tingkat_keramaian
      ? String(row.tingkat_keramaian)
      : null,
    koordinat_lat:
      typeof row.koordinat_lat === 'number' ? row.koordinat_lat : null,
    koordinat_lng:
      typeof row.koordinat_lng === 'number' ? row.koordinat_lng : null,
    google_maps_url: row.google_maps_url ? String(row.google_maps_url) : null,
    peta_jalur_url: row.peta_jalur_url
      ? String(row.peta_jalur_url)
      : '/assets/images/detail_katalog/peta_jalur_cibulao.png',
    catatan_jalur: catatanJalurRaw,
    foto_utama: row.foto_utama
      ? String(row.foto_utama)
      : '/assets/images/beranda/list_katalog.png',
    foto_banner: '/assets/images/detail_katalog/banner_atas.png',
    galeri_visual: galeriRaw,
    kontak_pic: (row.kontak_pic as KontakPic) || null,
    status_operasional: row.status_operasional
      ? String(row.status_operasional)
      : null,
    status_verifikasi:
      (row.status_verifikasi as StatusVerifikasi) || 'belum_terverifikasi',
    catatan_survei: row.catatan_survei ? String(row.catatan_survei) : null,
    is_dummy: false,
    created_at: String(row.created_at ?? new Date().toISOString()),
    updated_at: String(row.updated_at ?? new Date().toISOString()),
  };
}

/**
 * Mengambil daftar destinasi dari Supabase jika sudah terkonfigurasi.
 * Jika Supabase belum dikonfigurasi, tabel kosong, atau terjadi kendala jaringan,
 * fungsi ini secara aman mengembalikan maksimal 3 data dummy lokal (`DUMMY_DESTINATIONS`).
 */
export async function getDestinations(): Promise<DestinationsResult> {
  if (!isSupabaseConfigured()) {
    return {
      destinations: DUMMY_DESTINATIONS,
      source: 'local_dummy',
      error: null,
    };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      destinations: DUMMY_DESTINATIONS,
      source: 'local_dummy',
      error: null,
    };
  }

  try {
    const { data, error } = await supabase
      .from('destinations')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) {
      return {
        destinations: DUMMY_DESTINATIONS,
        source: 'local_dummy',
        error: `Koneksi database belum siap (${error.message}). Menampilkan data dummy pengembangan.`,
      };
    }

    if (!data || data.length === 0) {
      return {
        destinations: DUMMY_DESTINATIONS,
        source: 'local_dummy',
        error: null,
      };
    }

    return {
      destinations: data.map((row) =>
        normalizeRowToDestination(row as Record<string, unknown>)
      ),
      source: 'supabase',
      error: null,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown network error';
    return {
      destinations: DUMMY_DESTINATIONS,
      source: 'local_dummy',
      error: `Gagal memuat dari Supabase (${message}). Menampilkan data dummy pengembangan.`,
    };
  }
}

/**
 * Mengambil satu destinasi berdasarkan `slug`.
 * Mendukung data dari Supabase maupun fallback data dummy lokal.
 */
export async function getDestinationBySlug(
  slug: string
): Promise<{ destination: Destination | null; source: 'supabase' | 'local_dummy' }> {
  const normalizedSlug = slug.trim().toLowerCase();

  if (isSupabaseConfigured()) {
    const supabase = getSupabaseClient();
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('destinations')
          .select('*')
          .eq('slug', normalizedSlug)
          .maybeSingle();

        if (!error && data) {
          return {
            destination: normalizeRowToDestination(data as Record<string, unknown>),
            source: 'supabase',
          };
        }
      } catch {
        // Fallback ke data dummy lokal apabila query gagal
      }
    }
  }

  const foundDummy =
    DUMMY_DESTINATIONS.find((item) => item.slug.toLowerCase() === normalizedSlug) ||
    null;

  return {
    destination: foundDummy,
    source: 'local_dummy',
  };
}

/**
 * Memfilter daftar destinasi berdasarkan kata kunci pencarian, tipe wisata,
 * dan kondisi/kebutuhan wisata.
 */
export function filterDestinationsList(
  destinations: Destination[],
  options: {
    query?: string;
    type?: string;
    condition?: string;
  }
): Destination[] {
  const q = (options.query || '').trim().toLowerCase();
  const type = (options.type || 'all').trim().toLowerCase();
  const condition = (options.condition || 'all').trim().toLowerCase();

  return destinations.filter((item) => {
    const matchType = type === 'all' || item.tipe_wisata === type;
    const matchCondition =
      condition === 'all' ||
      item.kondisi.includes(condition as KondisiWisata);

    if (!q) {
      return matchType && matchCondition;
    }

    const searchableText = [
      item.nama_wisata,
      item.label_tipe,
      item.tipe_wisata,
      item.kecamatan,
      item.deskripsi || '',
      item.slug.replace(/-/g, ' '),
    ]
      .join(' ')
      .toLowerCase();

    const matchQuery = searchableText.includes(q);
    return matchType && matchCondition && matchQuery;
  });
}
