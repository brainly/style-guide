import React from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useFirstPaint = () => {
  const afterDOMRender = React.useRef(true);

  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      afterDOMRender.current = false;
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return afterDOMRender;
};
