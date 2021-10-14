// @flow strict

import * as React from 'react';

const FOCUSABLE_ELEMENT_SELECTOR =
  // eslint-disable-next-line max-len
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not(disabled), iframe, [tabindex="0"], [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(ref: {current: HTMLDivElement | null}) {
  const originalActiveElement = React.useRef();

  React.useEffect(() => {
    // Should restore original focus on unmount.
    originalActiveElement.current = document.activeElement;
    return () => originalActiveElement.current?.focus();
  }, []);

  React.useEffect(() => {
    const dialogElement = ref.current;

    if (!dialogElement) {
      return;
    }

    let isTabbing = false;
    let isTabbingBackward = false;

    function handleKeydown(event: KeyboardEvent) {
      isTabbing = event.key === 'Tab';
      isTabbingBackward = isTabbing && event.shiftKey;
    }

    function handleKeyup() {
      isTabbing = false;
      isTabbingBackward = false;
    }

    function handleFocusChange(event: FocusEvent) {
      if (!isTabbing) {
        return;
      }
      const activeElement = event.target;

      // Should focus back on the element inside when
      // the active element is outside the dialog parent.
      if (
        activeElement instanceof Node &&
        !dialogElement.contains(activeElement)
      ) {
        const focusableElements = dialogElement.querySelectorAll(
          FOCUSABLE_ELEMENT_SELECTOR
        );

        if (isTabbingBackward) {
          focusableElements[focusableElements.length - 1]?.focus();
        } else {
          focusableElements[0]?.focus();
        }
      }
    }

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('keyup', handleKeyup);
    window.addEventListener('focusin', handleFocusChange);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('keyup', handleKeyup);
      window.removeEventListener('focusin', handleFocusChange);
    };
  }, [ref]);
}
