// @flow strict

import {useState, useEffect} from 'react';

export const MEDIA_QUERY = '(prefers-reduced-motion: reduce)';

export default function useReducedMotion(): boolean {
  const supportsMatchMedia =
    typeof window !== 'undefined' && 'matchMedia' in window;

  const [matches, setMatch] = useState(() =>
    supportsMatchMedia ? window.matchMedia(MEDIA_QUERY).matches : false
  );

  useEffect(() => {
    if (!supportsMatchMedia) return;
    const mediaQuery = window.matchMedia(MEDIA_QUERY);

    const listener = (mqlEvent: MediaQueryListEvent) => {
      setMatch(mqlEvent.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', listener);
    } else {
      mediaQuery.addListener(listener);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', listener);
      } else {
        mediaQuery.removeListener(listener);
      }
    };
  }, [supportsMatchMedia]);
  return matches;
}
