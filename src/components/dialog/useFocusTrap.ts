import * as React from 'react';

export function useFocusTrap({
  dialogRef,
  overlayRef,
}: {
  dialogRef: {
    current: HTMLDivElement | null;
  };
  overlayRef: {
    current: HTMLDivElement | null;
  };
}) {
  React.useEffect(() => {
    const originalActiveElement = document.activeElement as HTMLElement;
    const overlayElement = overlayRef.current;
    const dialogElement = dialogRef.current;

    if (!dialogElement || !overlayElement) {
      return;
    }

    // Initial focus
    focusDescendant(dialogElement, true);
    let isTabbingForward = true;

    function handleKeydown(event: KeyboardEvent) {
      isTabbingForward = event.key === 'Tab' && !event.shiftKey;
    }

    function handleKeyup() {
      isTabbingForward = true;
    }

    function handleFocusTrap(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        // @ts-ignore TS18047
        dialogElement.contains(event.target)
      ) {
        return;
      }

      // @ts-ignore TS2345
      focusDescendant(dialogElement, isTabbingForward);
    }

    dialogElement.addEventListener('keydown', handleKeydown);
    dialogElement.addEventListener('keyup', handleKeyup);
    overlayElement.addEventListener('focusin', handleFocusTrap);
    return () => {
      dialogElement.removeEventListener('keydown', handleKeydown);
      dialogElement.removeEventListener('keyup', handleKeyup);
      overlayElement.removeEventListener('focusin', handleFocusTrap);
      // Should restore original focus on unmount.
      originalActiveElement?.focus();
    };
  }, [dialogRef, overlayRef]);
}

function focusDescendant(element: HTMLElement, isTabbingForward: boolean) {
  const descendantFocused = isTabbingForward
    ? focusFirstDescendant(element)
    : focusLastDescendant(element);

  return descendantFocused || attemptFocus(element);
}

// https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/js/dialog.js
function focusFirstDescendant(element: HTMLElement) {
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i] as HTMLElement;

    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
}

function focusLastDescendant(element: HTMLElement) {
  for (let i = element.children.length - 1; i >= 0; i--) {
    const child = element.children[i] as HTMLElement;

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
  if (element.tabIndex < -1 || element.getAttribute('disabled')) {
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

    default: {
      return element.tabIndex >= -1;
    }
  }
}
