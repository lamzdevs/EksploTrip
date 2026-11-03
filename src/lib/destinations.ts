import { DUMMY_DESTINATIONS } from '@/data/destinations';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import {
  filterDestinationsList,
  formatBogorLocation,
  formatKeramaian,
  formatKondisiTag,
  getLiveCrowdStatus,
  KONDISI_LABEL_MAP,
  LiveCrowdStatus,
  normalizeAssetUrl,
  toCardDestination,
} from '@/lib/destinationUtils';
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

export {
  filterDestinationsList,
  formatBogorLocation,
  formatKeramaian,
  formatKondisiTag,
  getLiveCrowdStatus,
  KONDISI_LABEL_MAP,
  normalizeAssetUrl,
  toCardDestination,
};
export type { LiveCrowdStatus };

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
  { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'support' },
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
    ? (row.galeri_visual as GaleriVisualItem[]).map((g) => ({
        ...g,
        url_gambar:
          normalizeAssetUrl(g.url_gambar) ||
          '/assets/images/detail_katalog/list_visual_katalog.webp',
      }))
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
    kecamatan: formatBogorLocation(
      row.kecamatan ? String(row.kecamatan) : null
    ),
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
    google_maps_route_url: row.google_maps_route_url ? String(row.google_maps_route_url) : null,
    peta_jalur_url: row.peta_jalur_url
      ? normalizeAssetUrl(String(row.peta_jalur_url))
      : '/assets/images/beranda/list_katalog.webp',
    catatan_jalur: catatanJalurRaw,
    foto_utama: row.foto_utama
      ? normalizeAssetUrl(String(row.foto_utama))
      : '/assets/images/beranda/list_katalog.webp',
    foto_banner: row.foto_banner
      ? normalizeAssetUrl(String(row.foto_banner))
      : '/assets/visual/curug_cibulao/banner_curug_cibulao.webp',
    galeri_visual: galeriRaw,
    kontak_pic: (row.kontak_pic as KontakPic) || null,
    status_operasional: row.status_operasional
      ? String(row.status_operasional)
      : null,
    status_verifikasi:
      (row.status_verifikasi as StatusVerifikasi) || 'belum_terverifikasi',
    catatan_survei: row.catatan_survei ? String(row.catatan_survei) : null,
    id_kode: row.id_kode ? String(row.id_kode) : undefined,
    akun_instagram: row.akun_instagram ? String(row.akun_instagram) : null,
    status_rekomendasi: row.status_rekomendasi
      ? String(row.status_rekomendasi)
      : null,
    skor_verifikasi: row.skor_verifikasi ? String(row.skor_verifikasi) : null,
    catatan_tiket: row.catatan_tiket ? String(row.catatan_tiket) : null,
    jam_buka_weekday: row.jam_buka_weekday
      ? String(row.jam_buka_weekday)
      : null,
    jam_buka_weekend: row.jam_buka_weekend
      ? String(row.jam_buka_weekend)
      : null,
    waktu_tempuh: row.waktu_tempuh ? String(row.waktu_tempuh) : null,
    jam_ramai_weekend: row.jam_ramai_weekend
      ? String(row.jam_ramai_weekend)
      : null,
    nomor_pengelola: row.nomor_pengelola
      ? String(row.nomor_pengelola)
      : null,
    nomor_pemandu_lokal: row.nomor_pemandu_lokal
      ? String(row.nomor_pemandu_lokal)
      : null,
    tiket_kunjungan:
      typeof row.tiket_kunjungan === 'number' ? row.tiket_kunjungan : null,
    tiket_berenang_pelampung:
      typeof row.tiket_berenang_pelampung === 'number'
        ? row.tiket_berenang_pelampung
        : null,
    tiket_trekking:
      typeof row.tiket_trekking === 'number' ? row.tiket_trekking : null,
    tiket_camping:
      typeof row.tiket_camping === 'number' ? row.tiket_camping : null,
    is_dummy: false,
    created_at: String(row.created_at ?? new Date().toISOString()),
    updated_at: String(row.updated_at ?? new Date().toISOString()),
  };
}

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

    const supabaseDestinations = data.map((row) =>
      normalizeRowToDestination(row as Record<string, unknown>)
    );

    const existingSlugs = new Set(
      supabaseDestinations.map((d) => d.slug.toLowerCase())
    );
    const unverifiedDummies = DUMMY_DESTINATIONS.filter(
      (d) => !existingSlugs.has(d.slug.toLowerCase())
    );

    return {
      destinations: [...supabaseDestinations, ...unverifiedDummies],
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
 * Returns slimmed card-level destinations so Server Components don't serialize
 * hundreds of kilobytes of gallery/facility detail payloads into list pages.
 */
export async function getCardDestinations(): Promise<DestinationsResult> {
  const res = await getDestinations();
  return {
    ...res,
    destinations: res.destinations.map(toCardDestination),
  };
}

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
