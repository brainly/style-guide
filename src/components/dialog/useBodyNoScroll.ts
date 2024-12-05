import * as React from 'react';

const NO_SCROLL_CLASS = 'sg-dialog-no-scroll';

export function useBodyNoScroll(overlayRef: {current: HTMLDivElement | null}) {
  const cleanupRef = React.useRef(null);
  const forceCleanup = React.useCallback(() => {
    // @ts-ignore TS2349
    if (cleanupRef.current) cleanupRef.current();
  }, []);

  React.useEffect(() => {
    const body = document.body;

    if (!body) return;

    const initialBodyClassList = body.classList.value;
    const initialBodyStyleTop = body.style.top;
    const initialScrollY = window.scrollY;

    if (initialBodyClassList.includes(NO_SCROLL_CLASS)) {
      return;
    }

    body.style.top = `-${initialScrollY}px`;
    body.classList.add(NO_SCROLL_CLASS);

    const cleanup = () => {
      // it can only be forced once
      cleanupRef.current = null;

      body.style.top = initialBodyStyleTop;
      body.className = initialBodyClassList;
      window.scrollTo(0, initialScrollY);
    };

    // @ts-ignore TS2322
    cleanupRef.current = cleanup;
    return cleanup;
  }, [overlayRef]);
  return forceCleanup;
}
