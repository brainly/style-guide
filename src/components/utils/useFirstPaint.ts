import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export const useFirstPaint = (cb: () => void) => {
  useIsomorphicLayoutEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      cb();
    });

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [cb]);
};
