import * as React from 'react';
const NO_SCROLL_CLASS = 'sg-dialog-no-scroll';
const DIALOG_SELECTOR = '.js-dialog';
export function useBodyNoScroll() {
  const cleanupRef = React.useRef(null);
  const forceCleanup = React.useCallback(() => {
    if (cleanupRef.current) cleanupRef.current();
  }, []);
  React.useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;
    if (!body) return;
    body.style.top = `-${scrollY}px`;
    body.classList.add(NO_SCROLL_CLASS);

    const cleanup = () => {
      // it can only be forced once
      cleanupRef.current = null;
      const manyDialogsOpened =
        document.querySelectorAll(DIALOG_SELECTOR).length > 1;

      if (manyDialogsOpened) {
        return;
      }

      body.style.top = '';
      body.classList.remove(NO_SCROLL_CLASS);
      window.scrollTo(0, scrollY);
    };

    cleanupRef.current = cleanup;
    return cleanup;
  }, []);
  return forceCleanup;
}
