import React from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useFirstPaint = (after: () => void) => {
  const nextFrame = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (nextFrame.current) {
      after();
    }
  }, [nextFrame.current]);

  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      nextFrame.current = true;
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);
};
