import React from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useIsFirstRender = () => {
  const isFirstRender = React.useRef(true);

  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      isFirstRender.current = false;
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return isFirstRender.current;
};
