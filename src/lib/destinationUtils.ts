import { Destination } from '@/types/destination';

/**
 * Maps legacy .png/.jpg or deduplicated folder paths (including live Supabase DB rows)
 * to the canonical deduplicated .webp assets in /public/assets/.
 */
const LEGACY_ASSET_MAP: Record<string, string> = {
  // Canonical shared top banner
  '/assets/images/beranda/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/eksplorasi_destinasi/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/bantuan_darurat/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/nomor_darurat_umum/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/search_error/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/search_succes/banner_atas.png': '/assets/images/beranda/banner_atas.webp',
  '/assets/images/detail_katalog/banner_atas.png': '/assets/visual/curug_cibulao/banner_curug_cibulao.webp',

  // Canonical shared bottom banner
  '/assets/images/beranda/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/eksplorasi_destinasi/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/bantuan_darurat/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/detail_katalog/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/detail_visual/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/nomor_darurat_umum/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/search_error/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',
  '/assets/images/search_succes/banner_bawah.png': '/assets/images/beranda/banner_bawah.webp',

  // Canonical logos
  '/assets/images/beranda/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/detail_katalog/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/detail_visual/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/eksplorasi_destinasi/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/bantuan_darurat/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/nomor_darurat_umum/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/search_error/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',
  '/assets/images/search_succes/logo_eksplotrip_navbar.png': '/assets/images/beranda/logo_eksplotrip_navbar.webp',

  '/assets/images/detail_katalog/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/beranda/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/beranda/logo_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/detail_visual/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/eksplorasi_destinasi/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/bantuan_darurat/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/nomor_darurat_umum/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/search_error/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
  '/assets/images/search_succes/logo_eksplotrip_footer.png': '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',

  '/assets/images/beranda/logo_aiplo.png': '/assets/images/beranda/logo_aiplo.webp',
  '/assets/images/bantuan_darurat/logo_aiplo.png': '/assets/images/beranda/logo_aiplo.webp',
  '/assets/images/eksplorasi_destinasi/logo_aiplo.png': '/assets/images/beranda/logo_aiplo.webp',
  '/assets/images/search_error/logo_aiplo.png': '/assets/images/beranda/logo_aiplo.webp',

  // Canonical catalog card placeholder
  '/assets/images/beranda/list_katalog.png': '/assets/images/beranda/list_katalog.webp',
  '/assets/images/eksplorasi_destinasi/list_katalog.png': '/assets/images/beranda/list_katalog.webp',
  '/assets/images/search_succes/list_katalog.png': '/assets/images/beranda/list_katalog.webp',
};

export function normalizeAssetUrl(url?: string | null): string {
  if (!url) return '';
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (LEGACY_ASSET_MAP[trimmed]) {
    return LEGACY_ASSET_MAP[trimmed];
  }
  if (trimmed.startsWith('/assets/') && /\.(png|jpe?g)$/i.test(trimmed)) {
    return trimmed.replace(/\.(png|jpe?g)$/i, '.webp');
  }
  return trimmed;
}

/**
 * Strips heavy detail-only fields (38-item galeri_visual, fasilitas, catatan_jalur, etc.)
 * before passing card lists into Client Components so RSC HTML payload stays tiny.
 */
export function toCardDestination(d: Destination): Destination {
  return {
    ...d,
    foto_utama: normalizeAssetUrl(d.foto_utama) || '/assets/images/beranda/list_katalog.webp',
    foto_banner: normalizeAssetUrl(d.foto_banner) || '/assets/visual/curug_cibulao/banner_curug_cibulao.webp',
    fasilitas: [],
    catatan_jalur: [],
    galeri_visual: [],
    kontak_pic: null,
    catatan_survei: null,
    peta_jalur_url: null,
  };
}

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

export interface LiveCrowdStatus {
  level: 'Sepi' | 'Sedang' | 'Ramai';
  percentage: string;
  percentValue: number;
  dashLength: number;
  themeColor: string;
  arcPath: string;
  isHolidayOrWeekend: boolean;
}

export function getLiveCrowdStatus(
  destination: {
    jam_ramai_weekend?: string | null;
    tingkat_keramaian?: string | null;
  },
  customDate?: Date
): LiveCrowdStatus {
  const now = customDate || new Date();
  const day = now.getDay();
  const curHour = now.getHours() + now.getMinutes() / 60;

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;

  const isWeekend = day === 0 || day === 6;
  const isHoliday = INDONESIA_HOLIDAYS_SET.has(dateKey);
  const isHolidayOrWeekend = isWeekend || isHoliday;
  const isFridayEvening = day === 5 && curHour >= 16;

  const ARC_BASE_PATH = 'M 24 130 A 106 106 0 0 1 236 130';
  const TOTAL_ARC_LENGTH = 333.01;

  const calcDash = (pct: number) =>
    Math.round((pct / 100) * TOTAL_ARC_LENGTH * 10) / 10;

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

  if (peakRanges.length === 0) {
    peakRanges.push({ start: 10, end: 14 });
  }

  const isInsidePeak = peakRanges.some(
    (r) => curHour >= r.start && curHour <= r.end
  );
  const isBufferPeak = peakRanges.some(
    (r) => curHour >= r.start - 1 && curHour <= r.end + 1
  );

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
