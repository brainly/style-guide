import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Icon, {TYPE} from '../icons/Icon';
import cc from 'classnames';
import {useFollowFocus} from './useFollowFocus';
import {useFocusTrap} from './useFocusTrap';

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

function focusFirstDescendant(element: HTMLElement) {
  for (let i = 0; i < element.children.length; i++) {
    const child = element.children[i] as HTMLElement;

    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
}

type FormContextType = {
  isLastStep: boolean;
  currentStepIndex: number;
  changeStep: (step: number) => void;
};

export const FormContext = React.createContext<FormContextType>(
  {} as FormContextType
);

export const Form: React.FunctionComponent = ({children}) => {
  // state & refs
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const contentRef = React.useRef(null);
  const stepContainersRef = React.useRef<Array<HTMLDivElement>>([]);
  const stepContentElementsRef = React.useRef<Array<HTMLDivElement>>([]);
  const steps = React.Children.toArray(children);

  const changeStep = React.useCallback(
    index => {
      const stepNode: HTMLElement = stepContainersRef.current[index];

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
          changeStep(currentStepIndex - 1);
          focusFirstDescendant(stepContainersRef.current[currentStepIndex - 1]);
          break;
        }
        case 'ArrowDown': {
          changeStep(currentStepIndex + 1);
          focusFirstDescendant(stepContainersRef.current[currentStepIndex + 1]);
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

  // change step when focus went outside current step
  useFollowFocus({
    contentRef,
    changeStep,
    currentStepIndex,
    stepContainersRef,
  });

  // useFocusTrap({
  //   stepContainersRef,
  //   stepContentElementsRef,
  //   currentStepIndex,
  //   contentRef,
  // });

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
          {steps.map((child, index) => (
            <div
              key={index}
              ref={ref => {
                stepContainersRef.current[index] = ref;
              }}
            >
              <div
                className="sg-form-step-area"
                tabIndex={-1}
                ref={ref => {
                  stepContentElementsRef.current[index] = ref;
                }}
              >
                {child}
                {currentStepIndex !== index ? (
                  <span className="sg-form-step-area__overlay" />
                ) : null}
              </div>
            </div>
          ))}
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
