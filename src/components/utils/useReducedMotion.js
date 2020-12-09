// @flow strict

import {useState, useEffect} from 'react';

export default function useReducedMotion(): boolean {
  const supportsMatchMedia = typeof window !== 'undefined' && window.matchMedia;

  const [matches, setMatch] = useState(
    supportsMatchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
          window.matchMedia('(prefers-reduced-motion)').matches
      : false
  );

  useEffect(() => {
    if (!supportsMatchMedia) {
      return noop => noop;
    }
    const mediaQuery =
      window.matchMedia('(prefers-reduced-motion: reduce)') ||
      window.matchMedia('(prefers-reduced-motion)');

    const handleChange = () => {
      setMatch(mediaQuery.matches);
    };

    if (!mediaQuery) {
      return;
    }

    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [supportsMatchMedia]);
  return matches;
}
