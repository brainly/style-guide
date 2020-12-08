// @flow strict

import {useState, useRef, useEffect} from 'react';

export default function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const {current: mediaQuery} = useRef(
    window
      ? window.matchMedia('(prefers-reduced-motion: reduce)') ||
          window.matchMedia('(prefers-reduced-motion)')
      : null
  );

  useEffect(() => {
    setPrefersReducedMotion(!!mediaQuery?.matches);
    const listener = () => {
      setPrefersReducedMotion(!!mediaQuery?.matches);
    };

    mediaQuery?.addEventListener('change', listener);
    return () => {
      mediaQuery?.removeEventListener('change', listener);
    };
  }, [mediaQuery]);

  return prefersReducedMotion;
}
