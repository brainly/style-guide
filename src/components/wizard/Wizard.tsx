import React from 'react';
import Button, {ButtonPropsType} from '../buttons/Button';
import Icon, {TYPE} from '../icons/Icon';
import Flex from '../flex/Flex';
import ProgressBar from '../progress-bar/ProgressBar';
import Text from '../text/Text';
import Box from '../box/Box';
import Headline from '../text/Headline';
import Counter from '../counters/Counter';
import UnstyledButton from '../buttons/UnstyledButton';

const WizardContext = React.createContext<{
  currentStep: number;
  stepsLength: number;
  next(): void;
  prev(): void;
}>({
  currentStep: 0,
  stepsLength: 0,
  next: () => null,
  prev: () => null,
});

const WizardStepContext = React.createContext<{
  index: number;
}>({
  index: 0,
});

type WizardProgressBarPropsType = {
  children: React.ReactNode;
};

const WizardProgressBar = ({children}: WizardProgressBarPropsType) => {
  const {stepsLength, currentStep} = useWizard();

  return (
    <div className="wizard-progress-bar">
      <Box padding="s">
        <Text size="medium" weight="bold" align="to-center">
          {children}
        </Text>
      </Box>
      {stepsLength > 0 ? (
        <ProgressBar
          maxValue={stepsLength}
          value={currentStep}
          noBorderRadius
        />
      ) : null}
    </div>
  );
};

const WizardNavigation = () => {
  const {prev, next, currentStep, stepsLength} = useWizard();
  const handleUp = React.useCallback(() => {
    prev();
  }, [prev]);

  const handleDown = React.useCallback(() => {
    next();
  }, [next]);

  return (
    <Flex className="sg-wizard-navigation">
      <UnstyledButton
        className="sg-wizard-navigation__button"
        onClick={handleUp}
        disabled={currentStep === 0}
      >
        <Icon type={TYPE.ARROW_UP} color="icon-black" />
      </UnstyledButton>
      <div className="sg-wizard-navigation__separator" />
      <UnstyledButton
        className="sg-wizard-navigation__button"
        onClick={handleDown}
        disabled={currentStep === stepsLength - 1}
      >
        <Icon type={TYPE.ARROW_DOWN} color="icon-black" />
      </UnstyledButton>
    </Flex>
  );
};

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
  wizardRef,
  stepOuterRef,
  stepInnerRef,
  currentStep,
}: {
  wizardRef: React.MutableRefObject<HTMLDivElement>;
  stepOuterRef: React.MutableRefObject<HTMLElement[]>;
  stepInnerRef: React.MutableRefObject<HTMLElement[]>;
  currentStep: number;
}) {
  React.useEffect(() => {
    if (!stepInnerRef.current[currentStep]) {
      return;
    }

    const currentStepInner = stepInnerRef.current[currentStep];
    const currentStepOuter = stepOuterRef.current[currentStep];
    const wizardElement = wizardRef.current;

    // Initial focus
    let isTabbingForward = true;

    function handleKeydown(event: KeyboardEvent) {
      isTabbingForward = event.key === 'Tab' && !event.shiftKey;
    }

    function handleKeyup() {
      isTabbingForward = true;
    }

    function handleStepFocusIn(event: FocusEvent) {
      if (
        event.target instanceof Node &&
        currentStepInner.contains(event.target)
      ) {
        return;
      }

      focusDescendant(currentStepInner, isTabbingForward);
    }

    function handleWizardFocusIn(event) {
      if (!currentStepOuter.contains(event.target)) {
        focusDescendant(currentStepInner, isTabbingForward);
      }
    }

    currentStepInner.addEventListener('keydown', handleKeydown);
    currentStepInner.addEventListener('keyup', handleKeyup);
    currentStepOuter.addEventListener('focusin', handleStepFocusIn);
    wizardElement.addEventListener('focusin', handleWizardFocusIn);
    return () => {
      currentStepInner.removeEventListener('keydown', handleKeydown);
      currentStepInner.removeEventListener('keyup', handleKeyup);
      currentStepOuter.removeEventListener('focusin', handleStepFocusIn);
      wizardElement.removeEventListener('focusin', handleWizardFocusIn);
    };
  }, [currentStep, stepInnerRef, stepOuterRef, wizardRef]);
}

type WizardPropsType = {
  onComplete?(): void;
  children: React.ReactNode;
};

const Wizard = ({children, onComplete}: WizardPropsType) => {
  const wizardRef = React.useRef<HTMLDivElement>();
  const stepOuterRef = React.useRef<Array<HTMLElement>>([]);
  const stepInnerRef = React.useRef<Array<HTMLElement>>([]);
  const childrenArray = React.Children.toArray(children);
  const stepElements = childrenArray.filter(reactNode => {
    return React.isValidElement(reactNode) && reactNode.type === WizardStep;
  });

  const progressBarElement = childrenArray.find(reactNode => {
    return (
      React.isValidElement(reactNode) && reactNode.type === WizardProgressBar
    );
  });

  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const next = React.useCallback(() => {
    if (currentStep < stepElements.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  }, [currentStep, stepElements, onComplete]);

  const prev = React.useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  useControlTabbing({
    wizardRef,
    stepOuterRef,
    stepInnerRef,
    currentStep,
  });

  return (
    <div className="sg-wizard" ref={wizardRef}>
      <WizardContext.Provider
        value={{
          currentStep,
          stepsLength: stepElements.length,
          next,
          prev,
        }}
      >
        <Flex direction="column" fullHeight>
          {progressBarElement}
          <div className="sg-wizard-steps">
            <div
              className="sg-wizard-steps-scroll"
              style={{transform: `translateY(-${currentStep * 100}%)`}}
            >
              {stepElements.map((step, index) => {
                return (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    key={index}
                    className="sg-wizard-step"
                    style={{
                      transform: `translateY(${index * 100}%)`,
                    }}
                    ref={ref => {
                      stepOuterRef.current[index] = ref;
                    }}
                  >
                    <Flex
                      direction="column"
                      className="sg-wizard-step-viewer"
                      ref={ref => {
                        stepOuterRef.current[index] = ref;
                      }}
                    >
                      <div tabIndex={0} />
                      <WizardStepContext.Provider value={{index}}>
                        <div
                          ref={ref => {
                            stepInnerRef.current[index] = ref;
                          }}
                        >
                          {step}
                        </div>
                      </WizardStepContext.Provider>
                      <div tabIndex={0} />
                    </Flex>
                  </Flex>
                );
              })}
            </div>
            <WizardNavigation />
          </div>
        </Flex>
      </WizardContext.Provider>
    </div>
  );
};

const WizardStep: React.FunctionComponent<
  {
    as?: 'form' | 'div';
    onSubmit?: (
      event: React.FormEvent<HTMLFormElement>,
      next: () => void
    ) => void;
  } & Omit<React.HTMLAttributes<HTMLElement>, 'onSubmit'>
> = ({children, onSubmit, as = 'form', ...props}) => {
  const {next} = React.useContext(WizardContext);

  if (as === 'div') {
    return <div>{children}</div>;
  } else {
    const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = event => {
      event.preventDefault();

      if (onSubmit) {
        onSubmit(event, next);
      } else {
        next();
      }
    };

    return (
      <form onSubmit={handleFormSubmit} {...props}>
        {children}
      </form>
    );
  }
};

const WizardStepSubmit: React.FunctionComponent<{
  hint?: string;
  variant?: ButtonPropsType['variant'];
}> = ({variant = 'solid', hint = 'press', children}) => {
  return (
    <Flex marginTop="l">
      <Flex marginRight="s">
        <Button variant={variant}>{children}</Button>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="xs">
          <Text color="text-gray-50" noWrap size="small">
            {hint}&nbsp;
            <Text inherited weight="bold" as="span">
              Enter
            </Text>
          </Text>
        </Flex>
        <Box color="gray-20" padding="xxs" className="sg-wizard-footer__icon">
          <Icon size={24} type="keyboard" color="icon-gray-50" />
        </Box>
      </Flex>
    </Flex>
  );
};

const WizardStepTitle: React.FunctionComponent<{
  subtitle?: string;
}> = ({children, subtitle}) => {
  const {index} = React.useContext(WizardStepContext);

  return (
    <Flex direction="column" marginBottom="l">
      <Flex>
        <Flex marginRight="s">
          {typeof index === 'number' ? (
            <Counter color="achromatic">{index + 1}</Counter>
          ) : null}
        </Flex>
        <Headline size="medium">{children}</Headline>
      </Flex>
      {subtitle ? (
        <Flex marginTop="s">
          <Text size="small">{subtitle}</Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

const WizardTitle: React.FunctionComponent<{
  subtitle?: string;
}> = ({children, subtitle}) => {
  return (
    <Flex marginBottom="l" direction="column">
      <Flex marginBottom="xs">
        <Headline size="xlarge">{children}</Headline>
      </Flex>
      {subtitle ? <Text size="medium">{subtitle}</Text> : null}
    </Flex>
  );
};

const WizardExport: typeof Wizard & {
  Title: typeof WizardTitle;
  ProgressBar: typeof WizardProgressBar;
} = Object.assign(Wizard, {
  Title: WizardTitle,
  ProgressBar: WizardProgressBar,
});

const WizardStepExport: typeof WizardStep & {
  Submit: typeof WizardStepSubmit;
  Title: typeof WizardStepTitle;
} = Object.assign(WizardStep, {
  Submit: WizardStepSubmit,
  Title: WizardStepTitle,
});

const useWizard = () => {
  const {prev, next, stepsLength, currentStep} =
    React.useContext(WizardContext);

  return {
    prev,
    next,
    stepsLength,
    currentStep,
  };
};

export {WizardExport as Wizard, WizardStepExport as WizardStep, useWizard};
