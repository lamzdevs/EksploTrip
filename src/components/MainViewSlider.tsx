'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import BerandaContent from '@/components/BerandaContent';
import EksplorasiContent from '@/components/EksplorasiContent';
import BantuanDaruratContent from '@/components/BantuanDaruratContent';
import { Destination } from '@/types/destination';

export type MainTabKey = 'beranda' | 'eksplorasi' | 'bantuan';

interface MainViewSliderProps {
  initialTab?: MainTabKey;
  destinations: Destination[];
  source: 'supabase' | 'local_dummy';
  errorMessage?: string | null;
}

const TAB_POSITIONS: Record<MainTabKey, string> = {
  beranda: 'translate3d(0%, 0, 0)',
  eksplorasi: 'translate3d(calc(-100% / 3), 0, 0)',
  bantuan: 'translate3d(calc(-200% / 3), 0, 0)',
};

const TAB_URLS: Record<MainTabKey, string> = {
  beranda: '/',
  eksplorasi: '/eksplorasi',
  bantuan: '/bantuan-darurat',
};

const TAB_TITLES: Record<MainTabKey, string> = {
  beranda: 'EksploTrip - Eksplorasi Wisata Alam Bogor yang Aman & Transparan',
  eksplorasi: 'Eksplorasi Destinasi - EksploTrip',
  bantuan: 'Bantuan Darurat - EksploTrip',
};

export default function MainViewSlider({
  initialTab = 'beranda',
  destinations,
  source,
  errorMessage,
}: MainViewSliderProps) {
  const [currentTab, setCurrentTab] = useState<MainTabKey>(initialTab);
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const slideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }
    };
  }, []);

  const handleSlideTo = useCallback(
    (targetTab: MainTabKey, updateHistory: boolean = true) => {
      if (targetTab === currentTab) return;

      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }

      // Expand views during sliding so content doesn't clip
      setIsSliding(true);
      setCurrentTab(targetTab);

      if (updateHistory) {
        try {
          window.history.pushState({ tab: targetTab }, '', TAB_URLS[targetTab]);
        } catch (e) {
          console.warn('history.pushState restricted:', e);
        }
      }

      if (TAB_TITLES[targetTab]) {
        document.title = TAB_TITLES[targetTab];
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      slideTimeoutRef.current = setTimeout(() => {
        setIsSliding(false);
        window.scrollTo(0, 0);
      }, 540);
    },
    [currentTab]
  );

  // Synchronize browser history (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      let target: MainTabKey = 'beranda';
      if (path.startsWith('/eksplorasi')) {
        target = 'eksplorasi';
      } else if (
        path.startsWith('/bantuan-darurat') ||
        path.startsWith('/nomor-darurat-umum')
      ) {
        target = 'bantuan';
      }
      handleSlideTo(target, false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handleSlideTo]);

  // Intercept in-page links to primary tabs (e.g. CTA buttons, footer links, section links)
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const targetLink = (e.target as HTMLElement).closest('a');
    if (!targetLink) return;

    const href = targetLink.getAttribute('href');
    if (!href) return;

    if (href === '/' || href === '/beranda.html') {
      e.preventDefault();
      handleSlideTo('beranda');
    } else if (href === '/eksplorasi' || href === '/eksplorasi_destinasi.html') {
      e.preventDefault();
      handleSlideTo('eksplorasi');
    } else if (
      href === '/bantuan-darurat' ||
      href === '/bantuan_darurat.html'
    ) {
      e.preventDefault();
      handleSlideTo('bantuan');
    }
  };

  return (
    <>
      <Navbar
        variant="main"
        activeMainTab={currentTab}
        onTabChange={(tab) => handleSlideTo(tab)}
      />

      <div
        className="page-slider-viewport"
        id="slider-viewport"
        onClick={handleContainerClick}
      >
        <div
          className="page-slider-track"
          id="slider-track"
          style={{
            transform: TAB_POSITIONS[currentTab],
            transition: isMounted
              ? 'transform 0.52s cubic-bezier(0.25, 1, 0.35, 1)'
              : 'none',
          }}
        >
          {/* View 1: Beranda */}
          <div
            className={`page-view ${
              currentTab === 'beranda' ? 'active-view' : ''
            } ${!isSliding && currentTab !== 'beranda' ? 'collapsed-view' : ''}`}
            id="view-beranda"
            aria-hidden={currentTab !== 'beranda'}
          >
            <BerandaContent destinations={destinations} source={source} />
          </div>

          {/* View 2: Eksplorasi Destinasi */}
          <div
            className={`page-view ${
              currentTab === 'eksplorasi' ? 'active-view' : ''
            } ${
              !isSliding && currentTab !== 'eksplorasi' ? 'collapsed-view' : ''
            }`}
            id="view-eksplorasi"
            aria-hidden={currentTab !== 'eksplorasi'}
          >
            <EksplorasiContent
              destinations={destinations}
              source={source}
              errorMessage={errorMessage}
            />
          </div>

          {/* View 3: Bantuan Darurat */}
          <div
            className={`page-view ${
              currentTab === 'bantuan' ? 'active-view' : ''
            } ${!isSliding && currentTab !== 'bantuan' ? 'collapsed-view' : ''}`}
            id="view-bantuan"
            aria-hidden={currentTab !== 'bantuan'}
          >
            <BantuanDaruratContent />
          </div>
        </div>
      </div>
    </>
  );
}
