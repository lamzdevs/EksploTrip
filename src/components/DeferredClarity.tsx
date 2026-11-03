'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export default function DeferredClarity() {
  useEffect(() => {
    let loaded = false;

    const loadClarity = () => {
      if (loaded || typeof window === 'undefined') return;
      loaded = true;

      events.forEach((evt) =>
        window.removeEventListener(evt, loadClarity)
      );

      if (document.getElementById('clarity-tag-script')) return;

      (function (
        c: Window & Record<string, unknown>,
        l: Document,
        a: string,
        r: string,
        i: string
      ) {
        c[a] =
          c[a] ||
          function (...args: unknown[]) {
            ((c[a] as { q?: unknown[][] }).q =
              (c[a] as { q?: unknown[][] }).q || []).push(args);
          };
        const t = l.createElement(r) as HTMLScriptElement;
        t.async = true;
        t.id = 'clarity-tag-script';
        t.src = 'https://www.clarity.ms/tag/' + i;
        const y = l.getElementsByTagName(r)[0];
        if (y && y.parentNode) {
          y.parentNode.insertBefore(t, y);
        } else {
          l.head.appendChild(t);
        }
      })(
        window as unknown as Window & Record<string, unknown>,
        document,
        'clarity',
        'script',
        'z5l0gvdpg7'
      );
    };

    const events: Array<keyof WindowEventMap> = [
      'pointerdown',
      'mousemove',
      'touchstart',
      'wheel',
      'scroll',
      'keydown',
    ];

    events.forEach((evt) =>
      window.addEventListener(evt, loadClarity, { once: true, passive: true })
    );

    return () => {
      events.forEach((evt) =>
        window.removeEventListener(evt, loadClarity)
      );
    };
  }, []);

  return null;
}
