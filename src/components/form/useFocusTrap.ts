import * as React from 'react';

export function useFocusTrap({
  contentRef,
  stepContainersRef,
  stepContentElementsRef,
  currentStepIndex,
}: {
  contentRef: {
    current: HTMLDivElement | null;
  };
  stepContainersRef: {
    current: Array<HTMLDivElement> | null;
  };
  stepContentElementsRef: {
    current: Array<HTMLDivElement> | null;
  };
  currentStepIndex: number;
}) {
  const trapped = React.useRef(false);

  React.useEffect(() => {
    const originalActiveElement = document.activeElement as HTMLElement;

    if (
      !stepContentElementsRef.current[currentStepIndex] ||
      !stepContainersRef.current[currentStepIndex]
    ) {
      return;
    }

    const currentStepContainerElement =
      stepContainersRef.current[currentStepIndex];
    const currentStepContentElement =
      stepContentElementsRef.current[currentStepIndex];
    const contentElement = contentRef.current;

    // Initial focus
    let isTabbingForward = true;

    function handleKeydown(event: KeyboardEvent) {
      isTabbingForward = event.key === 'Tab' && !event.shiftKey;
    }

    function handleKeyup() {
      isTabbingForward = true;
    }

    function handleFocusTrap(event: FocusEvent) {
      console.log('trapped', trapped.current);
      if (
        event.target instanceof Node &&
        currentStepContentElement.contains(event.target)
      ) {
        console.log('is descendant');
        return;
      }

      console.log('is not descendant');

      // if (!trapped.current) {
      //   focusDescendant(currentStepContentElement, isTabbingForward);
      //   trapped.current = true;
      // }
    }

    currentStepContentElement.addEventListener('keydown', handleKeydown);
    currentStepContentElement.addEventListener('keyup', handleKeyup);
    contentElement.addEventListener('focusin', handleFocusTrap);
    return () => {
      currentStepContentElement.removeEventListener('keydown', handleKeydown);
      currentStepContentElement.removeEventListener('keyup', handleKeyup);

      contentElement.removeEventListener('focusin', handleFocusTrap);
      // Should restore original focus on unmount.
      originalActiveElement?.focus();
    };
  }, [currentStepIndex, stepContainersRef, stepContentElementsRef, contentRef]);
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
