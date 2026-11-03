/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Legacy deduplicated folder paths -> single canonical WebP
      {
        source: '/assets/images/:folder(beranda|eksplorasi_destinasi|bantuan_darurat|nomor_darurat_umum|search_error|search_succes)/banner_atas.png',
        destination: '/assets/images/beranda/banner_atas.webp',
      },
      {
        source: '/assets/images/detail_katalog/banner_atas.png',
        destination: '/assets/visual/curug_cibulao/banner_curug_cibulao.webp',
      },
      {
        source: '/assets/images/:folder/banner_bawah.png',
        destination: '/assets/images/beranda/banner_bawah.webp',
      },
      {
        source: '/assets/images/:folder/logo_eksplotrip_navbar.png',
        destination: '/assets/images/beranda/logo_eksplotrip_navbar.webp',
      },
      {
        source: '/assets/images/:folder/logo_eksplotrip_footer.png',
        destination: '/assets/images/detail_katalog/logo_eksplotrip_footer.webp',
      },
      {
        source: '/assets/images/:folder/logo_aiplo.png',
        destination: '/assets/images/beranda/logo_aiplo.webp',
      },
      {
        source: '/assets/images/:folder/list_katalog.png',
        destination: '/assets/images/beranda/list_katalog.webp',
      },
      // Generic fallback for any legacy .png / .jpg under /assets/
      {
        source: '/assets/:path*.png',
        destination: '/assets/:path*.webp',
      },
      {
        source: '/assets/:path*.jpg',
        destination: '/assets/:path*.webp',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/beranda.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/eksplorasi_destinasi.html',
        destination: '/eksplorasi',
        permanent: true,
      },
      {
        source: '/bantuan_darurat.html',
        destination: '/bantuan-darurat',
        permanent: true,
      },
      {
        source: '/detail_katalog.html',
        destination: '/detail-katalog',
        permanent: true,
      },
      {
        source: '/detail_visual.html',
        destination: '/detail-visual',
        permanent: true,
      },
      {
        source: '/nomor_darurat_umum.html',
        destination: '/nomor-darurat-umum',
        permanent: true,
      },
      {
        source: '/search_success.html',
        destination: '/search',
        permanent: true,
      },
      {
        source: '/search_error.html',
        destination: '/search?status=error',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
