import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Icon, {TYPE} from '../icons/Icon';
import cc from 'classnames';
import Transition, {TransitionEffectType} from '../transition/Transition';

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
      return false;
    }
  }
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

function useControlTabbing({
  changeStep,
  contentRef,
  stepContentElementsRef,
  currentStepIndex,
  stepCount,
  setShouldFocusFirstElement,
}: {
  contentRef: {
    current: HTMLDivElement | null;
  };
  stepContentElementsRef: {
    current: Array<HTMLDivElement> | null;
  };
  currentStepIndex: number;
  changeStep: (step: number) => void;
  stepCount: number;
  setShouldFocusFirstElement: (val: boolean) => void;
}) {
  React.useEffect(() => {
    if (!stepContentElementsRef.current[currentStepIndex]) {
      return;
    }

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
      if (
        event.target instanceof Node &&
        currentStepContentElement.contains(event.target)
      ) {
        return;
      }

      if (isTabbingForward) {
        if (currentStepIndex < stepCount - 1) {
          // focus last element to prevent focusing element on incoming step
          focusDescendant(currentStepContentElement, !isTabbingForward);
          setShouldFocusFirstElement(true);
          changeStep(currentStepIndex + 1);
        } else {
          focusDescendant(currentStepContentElement, isTabbingForward);
        }
      } else if (currentStepIndex > 0) {
        // focus last element to prevent focusing element on incoming step
        focusDescendant(currentStepContentElement, isTabbingForward);
        setShouldFocusFirstElement(false);
        changeStep(currentStepIndex - 1);
      } else {
        focusDescendant(currentStepContentElement, isTabbingForward);
      }
    }

    currentStepContentElement.addEventListener('keydown', handleKeydown);
    currentStepContentElement.addEventListener('keyup', handleKeyup);
    contentElement.addEventListener('focusin', handleFocusTrap);
    return () => {
      currentStepContentElement.removeEventListener('keydown', handleKeydown);
      currentStepContentElement.removeEventListener('keyup', handleKeyup);

      contentElement.removeEventListener('focusin', handleFocusTrap);
    };
  }, [
    currentStepIndex,
    stepContentElementsRef,
    contentRef,
    changeStep,
    stepCount,
    setShouldFocusFirstElement,
  ]);
}

type FormContextType = {
  isLastStep: boolean;
  currentStepIndex: number;
  changeStep: (step: number) => void;
};

export const FormContext = React.createContext<FormContextType>(
  {} as FormContextType
);

const overlayEffect: TransitionEffectType = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    duration: 'moderate1',
    easing: 'linear',
  },
  exit: {
    opacity: 0,
    duration: 'moderate1',
    easing: 'linear',
  },
};

export const Form: React.FunctionComponent = ({children}) => {
  // state & refs
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const stepContentElementsRef = React.useRef<Array<HTMLDivElement>>([]);
  const steps = React.Children.toArray(children);
  const [shouldFocusFirstElement, setShouldFocusFirstElement] =
    React.useState(null);

  const changeStep = React.useCallback(
    index => {
      const stepNode: HTMLElement = stepContentElementsRef.current[index];

      if (index < 0 || index > steps.length - 1) {
        return;
      }

      setCurrentStepIndex(index);

      if (contentRef) {
        contentRef.current.style.transform = `translateY(-${
          index === 0 ? stepNode.offsetTop : stepNode.offsetTop - 100
        }px)`;
      }
    },
    [steps]
  );

  // handle arrow buttons navigation
  const handleUp = React.useCallback(() => {
    changeStep(currentStepIndex - 1);
  }, [currentStepIndex, changeStep]);

  const handleDown = React.useCallback(() => {
    changeStep(currentStepIndex + 1);
  }, [currentStepIndex, changeStep]);

  const buttonPrevClassNames = cc('sg-form-navigation__button-prev', {
    'sg-form-navigation__button-prev--hidden': currentStepIndex === 0,
    'sg-form-navigation__button-prev--bottom':
      currentStepIndex === 0 || currentStepIndex === steps.length - 1,
  });

  const buttonNextClassNames = cc('sg-form-navigation__button-next', {
    'sg-form-navigation__button-next--hidden':
      currentStepIndex === steps.length - 1,
  });

  // handle arrow keys navigation
  const handleArrowNavigation = React.useCallback(
    event => {
      switch (event.key) {
        case 'ArrowUp': {
          setShouldFocusFirstElement(true);
          changeStep(currentStepIndex - 1);
          break;
        }
        case 'ArrowDown': {
          setShouldFocusFirstElement(true);
          changeStep(currentStepIndex + 1);
          break;
        }
        default: {
          //
        }
      }
    },
    [changeStep, currentStepIndex]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', handleArrowNavigation);

    return () => {
      window.removeEventListener('keydown', handleArrowNavigation);
    };
  });

  // handle tabbing
  useControlTabbing({
    contentRef,
    stepContentElementsRef,
    currentStepIndex,
    stepCount: steps.length,
    changeStep,
    setShouldFocusFirstElement,
  });

  // handle focus on step change animation end
  React.useEffect(() => {
    const contentRefLocal = contentRef.current;

    function handleScrollEnd(event) {
      if (
        shouldFocusFirstElement !== null &&
        event.target === event.currentTarget
      ) {
        focusDescendant(
          stepContentElementsRef.current[currentStepIndex],
          shouldFocusFirstElement
        );
      }
    }

    contentRefLocal.addEventListener('transitionend', handleScrollEnd);

    return () => {
      contentRefLocal.removeEventListener('transitionend', handleScrollEnd);
    };
  }, [contentRef, currentStepIndex, shouldFocusFirstElement]);

  return (
    <FormContext.Provider
      value={{
        currentStepIndex,
        changeStep,
        isLastStep: currentStepIndex === steps.length - 1,
      }}
    >
      <div className="sg-form">
        <div className="sg-form-content" ref={contentRef}>
          <div tabIndex={0} />
          {steps.map((child, index) => (
            <div
              key={index}
              className="sg-form-step-area"
              ref={ref => {
                stepContentElementsRef.current[index] = ref;
              }}
            >
              {child}
              <Transition
                active={currentStepIndex !== index}
                effect={overlayEffect}
              >
                <span className="sg-form-step-area__overlay" />
              </Transition>
            </div>
          ))}
          <div tabIndex={0} />
        </div>
        <Flex direction="column" className="sg-form-navigation">
          <Button
            className={buttonPrevClassNames}
            variant="solid-light"
            iconOnly
            icon={<Icon type={TYPE.ARROW_UP} color="icon-black" />}
            onClick={currentStepIndex > 0 ? handleUp : null}
          />
          <Flex marginTop="s">
            <Button
              className={buttonNextClassNames}
              variant="solid-light"
              iconOnly
              icon={<Icon type={TYPE.ARROW_DOWN} color="icon-black" />}
              onClick={currentStepIndex < steps.length - 1 ? handleDown : null}
            />
          </Flex>
        </Flex>
      </div>
    </FormContext.Provider>
  );
};

type FormStepPropsType = {
  children: (FormContextType) => React.ReactNode;
};

export const FormStep: React.FunctionComponent<FormStepPropsType> = ({
  children,
}) => {
  const {changeStep, currentStepIndex} = React.useContext(FormContext);

  return (
    <div className="sg-form-step">
      <div className="sg-form-step-content">
        {children({changeStep, currentStepIndex})}
      </div>
    </div>
  );
};
