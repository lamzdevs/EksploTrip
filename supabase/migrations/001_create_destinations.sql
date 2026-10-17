-- ==============================================================================
-- EKSPLOTRIP - SUPABASE DATABASE MIGRATION
-- File: supabase/migrations/001_create_destinations.sql
-- Deskripsi: Skema tabel `destinations`, trigger `updated_at`, indeks pencarian,
--            serta kebijakan keamanan Row Level Security (RLS).
-- ==============================================================================

-- Pastikan ekstensi pgcrypto tersedia untuk gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Pembuatan Tabel `destinations`
CREATE TABLE IF NOT EXISTS public.destinations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama_wisata TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    tipe_wisata TEXT NOT NULL CHECK (tipe_wisata IN ('curug', 'danau', 'gunung')),
    kecamatan TEXT NOT NULL,
    alamat TEXT NULL,
    deskripsi TEXT NULL,

    -- Informasi kondisi/kebutuhan wisata (contoh: ['ramah-keluarga', 'akses-mudah', 'jalur-bagus'])
    kondisi TEXT[] NOT NULL DEFAULT '{}',

    -- Daftar fasilitas terstruktur dalam format JSONB
    -- Contoh elemen: [{"nama": "Area Parkir", "status": "Tersedia", "ikon": "local_parking"}]
    fasilitas JSONB NOT NULL DEFAULT '[]'::jsonb,

    -- Statistik & parameter teknis lapangan (nullable jika belum disurvei)
    ketinggian_mdpl INTEGER NULL,
    waktu_tempuh_parkir TEXT NULL,
    jarak_trek TEXT NULL,
    harga_tiket INTEGER NULL,
    harga_parkir_motor INTEGER NULL,
    harga_parkir_mobil INTEGER NULL,
    waktu_terbaik TEXT NULL,
    tingkat_keramaian TEXT NULL,

    -- Lokasi & Peta
    koordinat_lat NUMERIC(10, 7) NULL,
    koordinat_lng NUMERIC(10, 7) NULL,
    google_maps_url TEXT NULL,
    peta_jalur_url TEXT NULL,
    catatan_jalur JSONB NOT NULL DEFAULT '[]'::jsonb,

    -- Media & Dokumentasi Visual
    foto_utama TEXT NULL,
    galeri_visual JSONB NOT NULL DEFAULT '[]'::jsonb,

    -- Kontak Pengelola / PIC Lapangan
    kontak_pic JSONB NULL,

    -- Status Operasional & Verifikasi Survei
    status_operasional TEXT NULL,
    status_verifikasi TEXT NOT NULL DEFAULT 'belum_terverifikasi'
        CHECK (status_verifikasi IN ('belum_terverifikasi', 'proses_survei', 'terverifikasi')),
    catatan_survei TEXT NULL,

    -- Timestamps
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Indeks untuk mempercepat pencarian dan pemfilteran katalog
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON public.destinations (slug);
CREATE INDEX IF NOT EXISTS idx_destinations_tipe_wisata ON public.destinations (tipe_wisata);
CREATE INDEX IF NOT EXISTS idx_destinations_status_verifikasi ON public.destinations (status_verifikasi);
CREATE INDEX IF NOT EXISTS idx_destinations_kecamatan ON public.destinations (kecamatan);

-- 3. Fungsi & Trigger otomatis untuk memperbarui kolom `updated_at`
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_destinations_updated_at ON public.destinations;
CREATE TRIGGER trg_destinations_updated_at
    BEFORE UPDATE ON public.destinations
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- ==============================================================================
-- 4. KEAMANAN DATABASE: ROW LEVEL SECURITY (RLS)
-- ==============================================================================
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;

-- Kebijakan 1: Publik (anon & authenticated) HANYA dapat membaca destinasi
-- yang sudah diverifikasi dan layak dipublikasikan (status_verifikasi = 'terverifikasi').
DROP POLICY IF EXISTS "Publik hanya dapat membaca destinasi terverifikasi" ON public.destinations;
CREATE POLICY "Publik hanya dapat membaca destinasi terverifikasi"
    ON public.destinations
    FOR SELECT
    TO anon, authenticated
    USING (status_verifikasi = 'terverifikasi');

-- Kebijakan 2: Pengguna terautentikasi dengan role admin di app_metadata
-- dapat membaca seluruh data (termasuk draft / proses_survei) untuk keperluan verifikasi.
DROP POLICY IF EXISTS "Admin dapat membaca seluruh data destinasi" ON public.destinations;
CREATE POLICY "Admin dapat membaca seluruh data destinasi"
    ON public.destinations
    FOR SELECT
    TO authenticated
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Kebijakan 3: Hanya Admin terautentikasi yang diizinkan melakukan INSERT.
-- Pengunjung anonim TIDAK memiliki izin tulis apa pun.
DROP POLICY IF EXISTS "Hanya admin yang dapat menambah destinasi" ON public.destinations;
CREATE POLICY "Hanya admin yang dapat menambah destinasi"
    ON public.destinations
    FOR INSERT
    TO authenticated
    WITH CHECK ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Kebijakan 4: Hanya Admin terautentikasi yang diizinkan melakukan UPDATE.
DROP POLICY IF EXISTS "Hanya admin yang dapat memperbarui destinasi" ON public.destinations;
CREATE POLICY "Hanya admin yang dapat memperbarui destinasi"
    ON public.destinations
    FOR UPDATE
    TO authenticated
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
    WITH CHECK ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- Kebijakan 5: Hanya Admin terautentikasi yang diizinkan melakukan DELETE.
DROP POLICY IF EXISTS "Hanya admin yang dapat menghapus destinasi" ON public.destinations;
CREATE POLICY "Hanya admin yang dapat menghapus destinasi"
    ON public.destinations
    FOR DELETE
    TO authenticated
    USING ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

-- ==============================================================================
-- CATATAN:
-- Data dummy pengembangan TIDAK dimasukkan secara otomatis ke database produksi
-- untuk menjaga integritas data hasil survei lapangan.
-- ==============================================================================
