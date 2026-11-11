'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import BerandaContent from '@/components/BerandaContent';
import { Destination } from '@/types/destination';

const EksplorasiContent = dynamic(
  () => import('@/components/EksplorasiContent'),
  { ssr: true }
);

const BantuanDaruratContent = dynamic(
  () => import('@/components/BantuanDaruratContent'),
  { ssr: true }
);

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
  const [mountedTabs, setMountedTabs] = useState<Record<MainTabKey, boolean>>({
    beranda: initialTab === 'beranda',
    eksplorasi: initialTab === 'eksplorasi',
    bantuan: initialTab === 'bantuan',
  });
  const [isSliding, setIsSliding] = useState<boolean>(false);
  const slideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }
    };
  }, []);

  const ensureTabMounted = useCallback((tab: MainTabKey) => {
    setMountedTabs((prev) => (prev[tab] ? prev : { ...prev, [tab]: true }));
  }, []);

  const handleSlideTo = useCallback(
    (targetTab: MainTabKey, updateHistory: boolean = true) => {
      if (targetTab === currentTab) return;

      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }

      setMountedTabs((prev) =>
        prev[targetTab] ? prev : { ...prev, [targetTab]: true }
      );
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

  const resolveLinkTab = (target: EventTarget | null): MainTabKey | null => {
    if (!(target instanceof HTMLElement)) return null;
    const targetLink = target.closest('a');
    if (!targetLink) return null;
    const href = targetLink.getAttribute('href');
    if (!href) return null;
    if (href === '/' || href === '/beranda.html') return 'beranda';
    if (href === '/eksplorasi' || href === '/eksplorasi_destinasi.html') {
      return 'eksplorasi';
    }
    if (href === '/bantuan-darurat' || href === '/bantuan_darurat.html') {
      return 'bantuan';
    }
    return null;
  };

  const handleContainerHover = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const tab = resolveLinkTab(e.target);
    if (tab) ensureTabMounted(tab);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tab = resolveLinkTab(e.target);
    if (tab) {
      e.preventDefault();
      handleSlideTo(tab);
    }
  };

  return (
    <>
      <Navbar
        variant="main"
        activeMainTab={currentTab}
        onTabChange={(tab) => handleSlideTo(tab)}
        onTabPreload={ensureTabMounted}
      />

      <div
        className="page-slider-viewport"
        id="slider-viewport"
        onClick={handleContainerClick}
        onMouseOver={handleContainerHover}
        onFocusCapture={handleContainerHover}
      >
        <div
          className="page-slider-track"
          id="slider-track"
          style={{
            transform: TAB_POSITIONS[currentTab],
          }}
        >
          {/* View 1: Beranda */}
          <div
            className={`page-view ${
              currentTab === 'beranda' ? 'active-view' : ''
            } ${!isSliding && currentTab !== 'beranda' ? 'collapsed-view' : ''}`}
            id="view-beranda"
            aria-hidden={currentTab !== 'beranda'}
            inert={currentTab !== 'beranda' ? true : undefined}
          >
            {mountedTabs.beranda && (
              <BerandaContent destinations={destinations} source={source} />
            )}
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
            inert={currentTab !== 'eksplorasi' ? true : undefined}
          >
            {mountedTabs.eksplorasi && (
              <EksplorasiContent
                destinations={destinations}
                source={source}
                errorMessage={errorMessage}
              />
            )}
          </div>

          {/* View 3: Bantuan Darurat */}
          <div
            className={`page-view ${
              currentTab === 'bantuan' ? 'active-view' : ''
            } ${!isSliding && currentTab !== 'bantuan' ? 'collapsed-view' : ''}`}
            id="view-bantuan"
            aria-hidden={currentTab !== 'bantuan'}
            inert={currentTab !== 'bantuan' ? true : undefined}
          >
            {mountedTabs.bantuan && <BantuanDaruratContent />}
          </div>
        </div>
      </div>
    </>
  );
}
