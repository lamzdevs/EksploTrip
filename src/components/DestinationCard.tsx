'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import {
  formatBogorLocation,
  formatKondisiTag,
  normalizeAssetUrl,
} from '@/lib/destinationUtils';

const FALLBACK_CARD_IMG = '/assets/images/beranda/list_katalog.webp';

interface DestinationCardProps {
  destination: Destination;
  fromOrigin?: 'beranda' | 'eksplorasi' | 'search';
  priority?: boolean;
}

export function DestinationCard({
  destination,
  fromOrigin = 'eksplorasi',
  priority = false,
}: DestinationCardProps) {
  const [imgSrc, setImgSrc] = useState(
    normalizeAssetUrl(destination.foto_utama) || FALLBACK_CARD_IMG
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [imgSrc]);

  const isVerified =
    !destination.is_dummy && destination.status_verifikasi === 'terverifikasi';

  const badgeIcon =
    destination.tipe_wisata === 'curug'
      ? 'water_drop'
      : destination.tipe_wisata === 'danau'
      ? 'waves'
      : 'landscape';

  const badgeLabel =
    destination.tipe_wisata === 'curug'
      ? 'Curug/Air Terjun'
      : destination.tipe_wisata === 'danau'
      ? 'Situ/Danau'
      : 'Gunung/Bukit';

  const detailUrl = fromOrigin
    ? `/destinasi/${destination.slug}?from=${fromOrigin}`
    : `/destinasi/${destination.slug}`;

  return (
    <Link
      href={detailUrl}
      className="destination-card"
      prefetch={false}
    >
      <div className={`card-media ${!isLoaded ? 'card-media-skeleton skeleton-shimmer' : ''}`}>
        <span className="card-badge">
          <span className="material-symbols-outlined">{badgeIcon}</span>
          <span>{badgeLabel}</span>
        </span>
        <img
          ref={imgRef}
          src={imgSrc}
          alt={destination.nama_wisata}
          width={407}
          height={265}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : undefined}
          className={`card-img ${isLoaded ? 'card-img-loaded' : 'card-img-loading'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setImgSrc(FALLBACK_CARD_IMG);
            setIsLoaded(true);
          }}
        />
      </div>
      <div className="card-body">
        <div className="card-header-row">
          <h3 className="card-title">{destination.nama_wisata}</h3>
          <span className="card-location">
            <span className="material-symbols-outlined">location_on</span>
            <span>{formatBogorLocation(destination.kecamatan)}</span>
          </span>
        </div>

        <ul className="card-tags">
          {isVerified && destination.kondisi.length > 0 ? (
            destination.kondisi.slice(0, 4).map((tag, idx) => (
              <li key={idx}>{formatKondisiTag(tag)}</li>
            ))
          ) : (
            <>
              <li>Data Dummy</li>
              <li>Kondisi: Belum Tersedia</li>
              <li>Menunggu Survei</li>
              <li>Belum Terverifikasi</li>
            </>
          )}
        </ul>

        <div className="card-footer-row">
          <span
            className={`card-verified ${isVerified ? '' : 'unverified-dummy'}`}
          >
            <span className="material-symbols-outlined">
              {isVerified ? 'verified' : 'info'}
            </span>
            <span>{isVerified ? 'Terverifikasi' : 'Belum Diverifikasi'}</span>
          </span>
          <span
            className="card-action-btn"
            aria-hidden="true"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

interface PlaceholderSlotCardProps {
  slotNumber: number;
  categoryType?: 'curug' | 'danau' | 'gunung';
}

/**
 * Komponen kartu slot placeholder untuk mempertahankan tata letak grid
 * sesuai desain Figma (6 kartu pada Beranda, 12 kartu pada Eksplorasi)
 * tanpa membuat data destinasi fiktif melebihi batas maksimal 3 data dummy.
 */
export function PlaceholderSlotCard({
  slotNumber,
  categoryType = 'curug',
}: PlaceholderSlotCardProps) {
  const badgeIcon =
    categoryType === 'curug'
      ? 'water_drop'
      : categoryType === 'danau'
      ? 'waves'
      : 'landscape';

  const badgeLabel =
    categoryType === 'curug'
      ? 'Curug/Air Terjun'
      : categoryType === 'danau'
      ? 'Situ/Danau'
      : 'Gunung/Bukit';

  return (
    <article
      className="destination-card placeholder-slot-card"
    >
      <div className="card-media">
        <span className="card-badge">
          <span className="material-symbols-outlined">{badgeIcon}</span>
          <span>{badgeLabel}</span>
        </span>
        <img
          src={FALLBACK_CARD_IMG}
          alt="Slot Data Survei Belum Tersedia"
          width={407}
          height={265}
          loading="lazy"
          decoding="async"
          className="card-img"
        />
      </div>
      <div className="card-body">
        <div className="card-header-row">
          <h3 className="card-title">Slot Survei #{slotNumber}</h3>
          <span className="card-location">
            <span className="material-symbols-outlined">schedule</span>
            <span>Menunggu Data</span>
          </span>
        </div>

        <ul className="card-tags">
          <li>Slot Katalog</li>
          <li>Belum Ada Data</li>
          <li>Menunggu Survei</li>
          <li>Kondisi: Belum Tersedia</li>
        </ul>

        <div className="card-footer-row">
          <span className="card-verified">
            <span className="material-symbols-outlined">pending</span>
            <span>Menunggu Hasil Survei</span>
          </span>
          <span
            className="card-action-btn"
            style={{ opacity: 0.45, cursor: 'default' }}
            aria-hidden="true"
          >
            <span className="material-symbols-outlined">hourglass_empty</span>
          </span>
        </div>
      </div>
    </article>
  );
}
