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
  { nama: 'Penyewaan Pelampung', status: 'Belum tersedia', ikon: 'support' },
  { nama: 'Pos Kesehatan / P3K', status: 'Belum tersedia', ikon: 'medical_services' },
  { nama: 'Spot Foto', status: 'Belum tersedia', ikon: 'photo_camera' },
  { nama: 'Area Camping', status: 'Belum tersedia', ikon: 'camping' },
];

export const KONDISI_LABEL_MAP: Record<string, string> = {
  'ramah-keluarga': 'Ramah Keluarga',
  'akses-mudah': 'Akses Mudah',
  'jalur-bagus': 'Jalur Bagus',
  'fasilitas-lengkap': 'Fasilitas Lengkap',
  'sedang-hits': 'Sedang Hits',
  'cocok-pemula': 'Cocok Pemula',
  'dekat-parkiran': 'Dekat Parkiran',
  'rute-ekstrem': 'Rute Ekstrem',
  'ramah-pemula': 'Ramah Pemula',
  'ramah keluarga': 'Ramah Keluarga',
  'akses mudah': 'Akses Mudah',
  'jalur bagus': 'Jalur Bagus',
  'fasilitas lengkap': 'Fasilitas Lengkap',
  'sedang hits': 'Sedang Hits',
  'cocok pemula': 'Cocok Pemula',
  'dekat parkiran': 'Dekat Parkiran',
  'rute ekstrem': 'Rute Ekstrem',
  'ramah pemula': 'Ramah Pemula',
};

export function formatKondisiTag(tag?: string | null): string {
  if (!tag) return '';
  const clean = String(tag).trim();
  const normalizedKey = clean.toLowerCase().replace(/_/g, '-');
  if (KONDISI_LABEL_MAP[normalizedKey]) {
    return KONDISI_LABEL_MAP[normalizedKey];
  }
  return clean
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Memformat tingkat keramaian menjadi 3 indikator ringkas: 'Sepi' | 'Sedang' | 'Ramai'
 * tanpa teks tambahan atau tanda kurung.
 */
export function formatKeramaian(val?: string | null): 'Sepi' | 'Sedang' | 'Ramai' {
  if (!val) return 'Sedang';
  const clean = String(val).replace(/\s*\(.*?\)/g, '').toLowerCase().trim();
  if (clean.includes('sepi') || clean.includes('rendah')) {
    return 'Sepi';
  }
  if (clean.includes('ramai') || clean.includes('tinggi') || clean.includes('padat')) {
    return 'Ramai';
  }
  return 'Sedang';
}

const INDONESIA_HOLIDAYS_SET = new Set<string>([
  // 2025
  '2025-01-01', '2025-01-27', '2025-01-29', '2025-03-29', '2025-03-31', '2025-04-01',
  '2025-04-18', '2025-05-01', '2025-05-12', '2025-05-29', '2025-06-01', '2025-06-06',
  '2025-06-27', '2025-08-17', '2025-09-05', '2025-12-25', '2025-12-26',
  // 2026
  '2026-01-01', '2026-01-16', '2026-02-17', '2026-03-20', '2026-03-21', '2026-03-22',
  '2026-03-23', '2026-03-24', '2026-04-03', '2026-05-01', '2026-05-14', '2026-05-27',
  '2026-05-31', '2026-06-01', '2026-06-16', '2026-08-17', '2026-08-25', '2026-12-25',
  '2026-12-26',
  // 2027
  '2027-01-01', '2027-02-06', '2027-02-07', '2027-03-10', '2027-03-11', '2027-03-26',
  '2027-05-01', '2027-05-06', '2027-05-16', '2027-06-01', '2027-08-17', '2027-12-25',
]);

/**
 * Menghitung tingkat keramaian secara real-time dan otomatis berdasarkan:
 * 1. Hari saat ini (Senin - Minggu)
 * 2. Jam saat ini (00:00 - 23:59)
 * 3. Status Hari Libur Nasional & Cuti Bersama Indonesia (Tanggal Merah)
 * 4. Jam Ramai Akhir Pekan (dari kolom CSV v3 `jam_ramai_weekend`)
 */
export interface LiveCrowdStatus {
  level: 'Sepi' | 'Sedang' | 'Ramai';
  percentage: string;
  percentValue: number;
  dashLength: number;
  themeColor: string;
  arcPath: string;
  isHolidayOrWeekend: boolean;
}

/**
 * Menghitung tingkat keramaian secara real-time dan otomatis berdasarkan:
 * 1. Hari kalender berjalan (Senin s/d Minggu)
 * 2. Jam lokal saat ini
 * 3. Kalender Hari Libur Nasional & Cuti Bersama resmi Indonesia (Tanggal Merah)
 * 4. Jam Ramai Akhir Pekan (dari kolom CSV v3 `jam_ramai_weekend`)
 */
export function getLiveCrowdStatus(
  destination: {
    jam_ramai_weekend?: string | null;
    tingkat_keramaian?: string | null;
  },
  customDate?: Date
): LiveCrowdStatus {
  const now = customDate || new Date();
  const day = now.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
  const curHour = now.getHours() + now.getMinutes() / 60;

  // Format YYYY-MM-DD
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;

  const isWeekend = day === 0 || day === 6;
  const isHoliday = INDONESIA_HOLIDAYS_SET.has(dateKey);
  const isHolidayOrWeekend = isWeekend || isHoliday;
  const isFridayEvening = day === 5 && curHour >= 16;

  // Jalur busur konsisten: Semicircle R=106 dari (24, 130) ke (236, 130)
  // Total keliling busur = Math.PI * 106 = 333.01
  const ARC_BASE_PATH = 'M 24 130 A 106 106 0 0 1 236 130';
  const TOTAL_ARC_LENGTH = 333.01;

  const calcDash = (pct: number) =>
    Math.round(((pct / 100) * TOTAL_ARC_LENGTH) * 10) / 10;

  // 1. Parse interval jam ramai dari CSV jika tersedia
  const peakRanges: Array<{ start: number; end: number }> = [];
  if (destination.jam_ramai_weekend) {
    const rawSegments = destination.jam_ramai_weekend.split(/[,;]/);
    for (const seg of rawSegments) {
      const match = seg.match(/(\d{1,2})[.:](\d{2})\s*-\s*(\d{1,2})[.:](\d{2})/);
      if (match) {
        const start = parseInt(match[1], 10) + parseInt(match[2], 10) / 60;
        const end = parseInt(match[3], 10) + parseInt(match[4], 10) / 60;
        peakRanges.push({ start, end });
      }
    }
  }

  // Jika tidak ada data spesifik, gunakan jam ramai standar wisata alam (10:00 - 14:00)
  if (peakRanges.length === 0) {
    peakRanges.push({ start: 10, end: 14 });
  }

  const isInsidePeak = peakRanges.some(
    (r) => curHour >= r.start && curHour <= r.end
  );
  const isBufferPeak = peakRanges.some(
    (r) => curHour >= r.start - 1 && curHour <= r.end + 1
  );

  // 2. KONDISI A: HARI KERJA BIASA (Senin - Kamis, dan Jumat sebelum sore bukan tanggal merah)
  // Di hari kerja biasa, wisata alam hampir selalu sepi karena masyarakat bekerja/sekolah.
  if (!isHolidayOrWeekend) {
    if (isFridayEvening) {
      return {
        level: 'Sedang',
        percentage: '40% - 60%',
        percentValue: 50,
        dashLength: calcDash(50),
        themeColor: '#D97706',
        arcPath: ARC_BASE_PATH,
        isHolidayOrWeekend,
      };
    }
    // Jam makan siang hari kerja (11.30 - 13.30) ada sedikit pengunjung lokal santai
    if (curHour >= 11.5 && curHour <= 13.5) {
      return {
        level: 'Sepi',
        percentage: '15% - 30%',
        percentValue: 25,
        dashLength: calcDash(25),
        themeColor: '#568942',
        arcPath: ARC_BASE_PATH,
        isHolidayOrWeekend,
      };
    }
    return {
      level: 'Sepi',
      percentage: '10% - 25%',
      percentValue: 20,
      dashLength: calcDash(20),
      themeColor: '#568942',
      arcPath: ARC_BASE_PATH,
      isHolidayOrWeekend,
    };
  }

  // 3. KONDISI B: AKHIR PEKAN (SABTU & MINGGU) ATAU TANGGAL MERAH / CUTI BERSAMA
  if (isInsidePeak) {
    return {
      level: 'Ramai',
      percentage: '80% - 95%',
      percentValue: 85,
      dashLength: calcDash(85),
      themeColor: '#DC2626',
      arcPath: ARC_BASE_PATH,
      isHolidayOrWeekend,
    };
  }

  if (isBufferPeak) {
    return {
      level: 'Sedang',
      percentage: '45% - 70%',
      percentValue: 55,
      dashLength: calcDash(55),
      themeColor: '#D97706',
      arcPath: ARC_BASE_PATH,
      isHolidayOrWeekend,
    };
  }

  // Siang hari di akhir pekan di luar jam puncak
  if (curHour >= 8 && curHour <= 17) {
    return {
      level: 'Sedang',
      percentage: '35% - 50%',
      percentValue: 45,
      dashLength: calcDash(45),
      themeColor: '#D97706',
      arcPath: ARC_BASE_PATH,
      isHolidayOrWeekend,
    };
  }

  // Malam / subuh di luar jam sunrise akhir pekan
  return {
    level: 'Sepi',
    percentage: '15% - 30%',
    percentValue: 20,
    dashLength: calcDash(20),
    themeColor: '#568942',
    arcPath: ARC_BASE_PATH,
    isHolidayOrWeekend,
  };
}

/**
 * Memformat nama lokasi agar ringkas tanpa kata "Kecamatan" maupun "Kabupaten/Kota",
 * langsung menjadi "<Nama Kecamatan>, Bogor" (contoh: "Cisarua, Bogor").
 */
export function formatBogorLocation(raw?: string | null): string {
  if (!raw) return 'Belum tersedia';
  const trimmed = raw.trim();
  if (!trimmed || trimmed.toLowerCase() === 'belum tersedia') {
    return 'Belum tersedia';
  }
  const firstPart = trimmed
    .split(',')[0]
    .replace(/^(kecamatan|kec\.?)\s+/i, '')
    .replace(/\b(kabupaten|kab\.?|kota)\s+bogor\b/gi, '')
    .trim();

  if (!firstPart) return 'Bogor';
  if (
    /\bbogor\b$/i.test(firstPart) &&
    !/bogor\s+(barat|timur|utara|selatan|tengah)/i.test(firstPart)
  ) {
    return firstPart;
  }
  return `${firstPart}, Bogor`;
}

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
      ? String(row.peta_jalur_url)
      : '/assets/images/detail_katalog/peta_jalur_cibulao.png',
    catatan_jalur: catatanJalurRaw,
    foto_utama: row.foto_utama
      ? String(row.foto_utama)
      : '/assets/images/beranda/list_katalog.png',
    foto_banner: row.foto_banner
      ? String(row.foto_banner)
      : '/assets/visual/curug_cibulao/banner_curug_cibulao.png',
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

    const supabaseDestinations = data.map((row) =>
      normalizeRowToDestination(row as Record<string, unknown>)
    );

    // Gabungkan data terverifikasi dari Supabase dengan data dummy yang belum diverifikasi
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
      item.kondisi.some((k) => {
        const normK = String(k).toLowerCase().replace(/[-_]+/g, ' ').trim();
        const normC = condition.toLowerCase().replace(/[-_]+/g, ' ').trim();
        if (normC === 'dekat parkiran') {
          return normK === 'dekat parkiran';
        }
        if (normC === 'rute ekstrem') {
          return normK === 'rute ekstrem';
        }
        if (normC === 'ramah pemula' || normC === 'cocok pemula') {
          return normK === 'ramah pemula' || normK === 'cocok pemula';
        }
        if (normC === 'ramah keluarga') {
          return normK === 'ramah keluarga';
        }
        return normK === normC || k === condition;
      });

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
