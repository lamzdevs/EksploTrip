/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
