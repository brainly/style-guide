import React from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useIsFirstRender = () => {
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setIsFirstRender(false);
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return isFirstRender;
};
