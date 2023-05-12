import React from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useIsAfterFirstPaint = () => {
  const afterDOMRender = React.useRef(false);

  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      afterDOMRender.current = true;
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return afterDOMRender;
};
