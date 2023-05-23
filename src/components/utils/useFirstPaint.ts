import {useIsomorphicLayoutEffect} from './useIsomorphicLayoutEffect';

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
