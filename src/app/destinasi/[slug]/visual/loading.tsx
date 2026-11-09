import React from 'react';
import { NavbarSkeleton, SkeletonBox, SkeletonPill } from '@/components/SkeletonLoader';

export default function Loading() {
  return (
    <div className="view-transition-wrapper skeleton-page-root" role="status" aria-busy="true" aria-label="Memuat galeri visual...">
      <NavbarSkeleton variant="detail" />
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <SkeletonBox width={240} height={28} />
          <SkeletonBox width={320} height={16} />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <SkeletonPill width={80} height={34} />
          <SkeletonPill width={100} height={34} />
          <SkeletonPill width={90} height={34} />
          <SkeletonPill width={110} height={34} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonBox key={i} width="100%" height="220px" borderRadius="12px" />
          ))}
        </div>
      </main>
    </div>
  );
}
