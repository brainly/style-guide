// @flow strict

import * as React from 'react';

export function useFocusTrap(ref: {current: HTMLDivElement | null}) {
  React.useEffect(() => {
    const originalActiveElement = document.activeElement;
    const dialogElement = ref.current;

    if (!dialogElement) {
      return;
    }

    // Initial focus
    focusFirstDescendant(dialogElement);

    let isTabbingForward = false;

    function handleKeydown(event: KeyboardEvent) {
      isTabbingForward = event.key === 'Tab' && !event.shiftKey;
    }

    function handleKeyup() {
      isTabbingForward = false;
    }

    function handleFocusTrap(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        dialogElement.contains(event.target)
      ) {
        return;
      }

      if (isTabbingForward) {
        focusFirstDescendant(dialogElement);
      } else {
        focusLastDescendant(dialogElement);
      }
    }

    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    document.addEventListener('focusin', handleFocusTrap);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keyup', handleKeyup);
      document.removeEventListener('focusin', handleFocusTrap);

      // Should restore original focus on unmount.
      originalActiveElement?.focus();
    };
  }, [ref]);
}

// https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
function focusFirstDescendant(element: HTMLElement) {
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i];

    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
}

function focusLastDescendant(element: HTMLElement) {
  for (let i = element.children.length - 1; i >= 0; i--) {
    const child = element.children[i];

    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
}

function attemptFocus(element: HTMLElement) {
  if (!isFocusable(element)) {
    return false;
  }

  try {
    element.focus();
  } catch {}

  return document.activeElement === element;
}

// https://w3c.github.io/aria-practices/examples/js/utils.js
function isFocusable(element: HTMLElement) {
  if (element.tabIndex < 0 || element.getAttribute('disabled')) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return (
        !!element.getAttribute('href') &&
        element.getAttribute('rel') !== 'ignore'
      );
    case 'INPUT':
      return element.getAttribute('type') !== 'hidden';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
}
