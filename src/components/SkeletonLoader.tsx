import React from 'react';

/**
 * Loading Skeleton Components
 * Memberikan visual feedback instan saat terjadi lag, server latency, atau koneksi jaringan lemot.
 */

// 1. Shimmer Item Primitives
export function SkeletonBox({
  width = '100%',
  height = '20px',
  borderRadius = '8px',
  className = '',
  style = {},
}: {
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`skeleton-shimmer skeleton-box ${className}`}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

export function SkeletonPill({
  width = '80px',
  height = '24px',
  className = '',
}: {
  width?: string | number;
  height?: string | number;
  className?: string;
}) {
  return (
    <div
      className={`skeleton-shimmer skeleton-pill ${className}`}
      style={{ width, height, borderRadius: '9999px' }}
      aria-hidden="true"
    />
  );
}

// 2. Navbar Skeleton
export function NavbarSkeleton({ variant = 'main' }: { variant?: 'main' | 'detail' }) {
  if (variant === 'detail') {
    return (
      <header className="detail-navbar skeleton-navbar-container" role="status" aria-busy="true">
        <div className="detail-navbar-container">
          <div className="navbar-brand">
            <SkeletonBox width={81} height={40} borderRadius="8px" />
          </div>
          <div className="btn-back-nav skeleton-shimmer skeleton-pill" style={{ width: 120, height: 38 }} />
        </div>
      </header>
    );
  }

  return (
    <header className="navbar skeleton-navbar-container" role="status" aria-busy="true">
      <div className="navbar-container">
        <div className="navbar-brand">
          <SkeletonBox width={81} height={40} borderRadius="8px" />
        </div>

        {/* Desktop Nav Tabs */}
        <div className="navbar-menu desktop-only-flex" style={{ gap: '24px' }}>
          <SkeletonPill width={80} height={32} />
          <SkeletonPill width={130} height={32} />
          <SkeletonPill width={110} height={32} />
        </div>

        {/* Right Search & AI */}
        <div className="navbar-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <SkeletonBox width={220} height={40} borderRadius="20px" className="desktop-only-block" />
          <div className="skeleton-shimmer skeleton-circle" style={{ width: 38, height: 38 }} />
        </div>
      </div>

      {/* Mobile Search & Tabs Skeleton */}
      <div className="navbar-mobile-search mobile-only-block" style={{ padding: '8px 16px' }}>
        <SkeletonBox width="100%" height={40} borderRadius="20px" />
      </div>
      <div className="navbar-mobile-tabs mobile-only-flex" style={{ padding: '8px 16px', gap: '8px', justifyContent: 'space-between' }}>
        <SkeletonPill width="30%" height={34} />
        <SkeletonPill width="35%" height={34} />
        <SkeletonPill width="30%" height={34} />
      </div>
    </header>
  );
}

// 3. Hero Banner Skeleton
export function HeroBannerSkeleton({
  height = 280,
}: {
  badgeText?: string;
  height?: number;
}) {
  return (
    <section
      className="hero-section skeleton-hero-wrapper"
      style={{ minHeight: height }}
      role="status"
      aria-busy="true"
    >
      <div className="hero-bg-wrapper skeleton-shimmer" style={{ background: '#dce5ea' }}>
        <div className="hero-overlay" />
      </div>
      <div className="hero-content" style={{ zIndex: 3 }}>
        <div className="hero-badge skeleton-hero-badge">
          <SkeletonPill width={120} height={26} />
        </div>
        <div className="skeleton-hero-titles" style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <SkeletonBox width="70%" height="32px" borderRadius="6px" />
          <SkeletonBox width="50%" height="28px" borderRadius="6px" />
        </div>
        <div className="skeleton-hero-desc" style={{ marginTop: '14px', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonBox width="95%" height="16px" />
          <SkeletonBox width="80%" height="16px" />
        </div>
        <div className="skeleton-hero-tags" style={{ display: 'flex', gap: '8px', marginTop: '18px' }}>
          <SkeletonPill width={85} height={24} />
          <SkeletonPill width={95} height={24} />
          <SkeletonPill width={90} height={24} />
          <SkeletonPill width={80} height={24} />
        </div>
      </div>
    </section>
  );
}

// 4. Destination Card Skeleton
export function CardSkeleton() {
  return (
    <article className="destination-card skeleton-card-item" role="status" aria-busy="true">
      <div className="card-media skeleton-shimmer" style={{ minHeight: '220px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
          <SkeletonPill width={110} height={26} />
        </div>
      </div>
      <div className="card-body" style={{ padding: '16px' }}>
        <div className="card-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <SkeletonBox width="55%" height="22px" />
          <SkeletonBox width="35%" height="16px" />
        </div>
        <div className="card-tags" style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <SkeletonPill width={70} height={22} />
          <SkeletonPill width={85} height={22} />
          <SkeletonPill width={65} height={22} />
          <SkeletonPill width={80} height={22} />
        </div>
        <div className="card-footer-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px', borderTop: '1px solid #f0f0f0' }}>
          <SkeletonPill width={100} height={24} />
          <div className="skeleton-shimmer skeleton-circle" style={{ width: 30, height: 30 }} />
        </div>
      </div>
    </article>
  );
}

// 5. Grid of Card Skeletons
export function CardsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="cards-grid skeleton-cards-grid" aria-label="Memuat daftar destinasi..." role="status" aria-busy="true">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={`skeleton-card-${i}`} />
      ))}
    </div>
  );
}

// 6. Full Home / Page Skeleton
export function HomePageSkeleton() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Memuat halaman EksploTrip...">
      <NavbarSkeleton variant="main" />
      <main>
        <HeroBannerSkeleton />
        <section className="destinations-section">
          <div className="destinations-header" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SkeletonBox width={280} height={28} />
              <SkeletonBox width={380} height={18} />
            </div>
            <SkeletonPill width={140} height={36} />
          </div>
          <CardsGridSkeleton count={6} />
        </section>
      </main>
    </div>
  );
}

// 7. Eksplorasi Page Skeleton
export function EksplorasiPageSkeleton() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Memuat katalog eksplorasi...">
      <NavbarSkeleton variant="main" />
      <main>
        {/* Filter Bar Skeleton */}
        <section className="filter-section" style={{ padding: '24px var(--screen-padding, 20px)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <SkeletonPill width={70} height={36} />
              <SkeletonPill width={90} height={36} />
              <SkeletonPill width={85} height={36} />
              <SkeletonPill width={100} height={36} />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <SkeletonPill width={110} height={30} />
              <SkeletonPill width={120} height={30} />
              <SkeletonPill width={105} height={30} />
              <SkeletonPill width={115} height={30} />
            </div>
          </div>
          <CardsGridSkeleton count={12} />
        </section>
      </main>
    </div>
  );
}

// 8. Detail Destinasi Skeleton (/destinasi/[slug])
export function DetailPageSkeleton() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Memuat detail destinasi...">
      <NavbarSkeleton variant="detail" />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 16px' }}>
        {/* Detail Hero Skeleton */}
        <section style={{ marginBottom: '28px' }}>
          <SkeletonBox width="100%" height="340px" borderRadius="16px" className="skeleton-shimmer" />
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <SkeletonBox width={260} height={32} />
              <SkeletonBox width={180} height={20} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <SkeletonPill width={110} height={36} />
              <SkeletonPill width={130} height={36} />
            </div>
          </div>
        </section>

        {/* 2-Column Content Skeleton */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SkeletonBox width="100%" height="240px" borderRadius="12px" />
            <SkeletonBox width="100%" height="180px" borderRadius="12px" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SkeletonBox width="100%" height="200px" borderRadius="12px" />
            <SkeletonBox width="100%" height="220px" borderRadius="12px" />
          </div>
        </div>
      </main>
    </div>
  );
}

// 9. Bantuan Darurat Skeleton
export function BantuanPageSkeleton() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Memuat panduan bantuan darurat...">
      <NavbarSkeleton variant="main" />
      <main>
        <HeroBannerSkeleton badgeText="Bantuan Darurat" />
        <section style={{ maxWidth: '1200px', margin: '24px auto', padding: '0 16px' }}>
          <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <SkeletonBox width={260} height={28} />
            <SkeletonBox width={360} height={18} />
          </div>
          {/* Steps Row Skeleton */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '36px' }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} style={{ padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #eef2f5' }}>
                <SkeletonPill width={32} height={32} />
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <SkeletonBox width="80%" height="18px" />
                  <SkeletonBox width="100%" height="14px" />
                </div>
              </div>
            ))}
          </div>
          {/* Help Cards Grid Skeleton */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} style={{ padding: '20px', background: '#fff', borderRadius: '12px', border: '1px solid #eef2f5', display: 'flex', gap: '16px' }}>
                <div className="skeleton-shimmer skeleton-circle" style={{ width: 44, height: 44, flexShrink: 0 }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <SkeletonBox width="60%" height="20px" />
                  <SkeletonBox width="90%" height="14px" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// 10. Search Results Skeleton
export function SearchPageSkeleton() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Mencari destinasi...">
      <NavbarSkeleton variant="main" />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonBox width={220} height={24} />
          <SkeletonBox width={320} height={16} />
        </div>
        <CardsGridSkeleton count={6} />
      </main>
    </div>
  );
}
