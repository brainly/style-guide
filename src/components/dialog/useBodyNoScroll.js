// @flow strict

import * as React from 'react';

const NO_SCROLL_CLASS = 'sg-dialog-no-scroll';
const DIALOG_SELECTOR = '.js-dialog';

export function useBodyNoScroll() {
  React.useEffect(() => {
    const body = document.body;
    const scrollY = window.scrollY;

    if (!body) return;
    body.style.top = `-${scrollY}px`;
    body.classList.add(NO_SCROLL_CLASS);

    return () => {
      const manyDialogsOpened =
        document.querySelectorAll(DIALOG_SELECTOR).length > 1;

      if (manyDialogsOpened) {
        return;
      }

      body.style.top = '';
      body.classList.remove(NO_SCROLL_CLASS);
      window.scrollTo(0, scrollY);
    };
  }, []);
}
