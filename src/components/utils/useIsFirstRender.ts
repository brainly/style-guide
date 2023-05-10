import React from 'react';

export const useIsFirstRender = () => {
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  React.useLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      setIsFirstRender(false);
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return isFirstRender;
};
