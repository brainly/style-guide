import * as React from 'react';

const NO_SCROLL_CLASS = 'sg-dialog-no-scroll';
const DIALOG_SELECTOR = '.js-dialog';

export function useBodyNoScroll(overlayRef: {current: HTMLDivElement | null}) {
  const cleanupRef = React.useRef(null);
  const forceCleanup = React.useCallback(() => {
    if (cleanupRef.current) cleanupRef.current();
  }, []);

  React.useEffect(() => {
    const isNestedDialog =
      overlayRef.current?.parentElement?.closest(DIALOG_SELECTOR);

    if (isNestedDialog) {
      // if dialog is nested, this logic was already fired by parent dialog
      // it prevents an issue with no cleanup when nested dialogs
      return;
    }

    const body = document.body;
    const scrollY = window.scrollY;

    if (!body) return;
    body.style.top = `-${scrollY}px`;
    body.classList.add(NO_SCROLL_CLASS);

    const cleanup = () => {
      // it can only be forced once
      cleanupRef.current = null;

      const dialogsOpenCount =
        document.querySelectorAll(DIALOG_SELECTOR).length;
      const nestedOpenDialogsCount =
        overlayRef.current?.querySelectorAll(DIALOG_SELECTOR).length | 0;

      // nested dialogs shouldn't be counted
      // as a parent for nested dialogs, this particular one should perfrom the cleanup
      const notNestedDialogsOpenCount =
        dialogsOpenCount - nestedOpenDialogsCount;

      const manyDialogsOpened = notNestedDialogsOpenCount > 1;

      if (manyDialogsOpened) {
        return;
      }

      body.style.top = '';
      body.classList.remove(NO_SCROLL_CLASS);
      window.scrollTo(0, scrollY);
    };

    cleanupRef.current = cleanup;
    return cleanup;
  }, [overlayRef]);
  return forceCleanup;
}
