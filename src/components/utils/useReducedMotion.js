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

    if (!mediaQuery) {
      return;
    }

    const handleChange = () => {
      setMatch(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [supportsMatchMedia]);
  return matches;
}
