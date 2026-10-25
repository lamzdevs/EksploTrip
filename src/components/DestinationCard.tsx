'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Destination } from '@/types/destination';
import { formatBogorLocation, formatKondisiTag } from '@/lib/destinations';

interface DestinationCardProps {
  destination: Destination;
  fromOrigin?: 'beranda' | 'eksplorasi' | 'search';
}

export function DestinationCard({
  destination,
  fromOrigin = 'eksplorasi',
}: DestinationCardProps) {
  const [imgSrc, setImgSrc] = useState(
    destination.foto_utama || '/assets/images/beranda/list_katalog.png'
  );

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
      aria-label={`Lihat detail ${destination.nama_wisata}`}
    >
      <div className="card-media">
        <span className="card-badge">
          <span className="material-symbols-outlined">{badgeIcon}</span>
          <span>{badgeLabel}</span>
        </span>
        <img
          src={imgSrc}
          alt={destination.nama_wisata}
          className="card-img"
          onError={() => setImgSrc('/assets/images/beranda/list_katalog.png')}
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
      aria-label={`Slot destinasi survei ${slotNumber} belum tersedia`}
    >
      <div className="card-media">
        <span className="card-badge">
          <span className="material-symbols-outlined">{badgeIcon}</span>
          <span>{badgeLabel}</span>
        </span>
        <img
          src="/assets/images/beranda/list_katalog.png"
          alt="Slot Data Survei Belum Tersedia"
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
