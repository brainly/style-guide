// @flow strict

import * as React from 'react';

const FOCUSABLE_ELEMENT_SELECTOR =
  // eslint-disable-next-line max-len
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not(disabled), iframe, [tabindex="0"], [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(ref: {current: HTMLDivElement | null}) {
  React.useEffect(() => {
    const dialogElement = ref.current;

    if (!dialogElement) {
      return;
    }

    let isTabbingBackward = false;

    function handleTabKeydown(event: KeyboardEvent) {
      isTabbingBackward = event.key === 'Tab' && event.shiftKey;
    }

    function handleTabKeyup() {
      isTabbingBackward = false;
    }

    function handleBeforeFocusChange(event: FocusEvent) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
      // when tabbing in or out a page, the relatedTarget
      // property may be set to null for security reasons
      const nextElement = event.relatedTarget;

      if (
        !(nextElement instanceof Node) ||
        dialogElement.contains(nextElement)
      ) {
        return;
      }

      // prevent focusing on the next element
      // when it is outside the dialog parent
      event.preventDefault();

      const focusableElements = dialogElement.querySelectorAll(
        FOCUSABLE_ELEMENT_SELECTOR
      );

      if (isTabbingBackward) {
        focusableElements[focusableElements.length - 1]?.focus();
      } else {
        focusableElements[0]?.focus();
      }
    }

    window.addEventListener('keydown', handleTabKeydown);
    window.addEventListener('keyup', handleTabKeyup);
    dialogElement.addEventListener('focusout', handleBeforeFocusChange);

    return () => {
      window.addEventListener('keydown', handleTabKeydown);
      window.addEventListener('keyup', handleTabKeyup);
      dialogElement.removeEventListener('focusout', handleBeforeFocusChange);
    };
  }, [ref]);
}
