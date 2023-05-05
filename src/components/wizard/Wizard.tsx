import React from 'react';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';
import Flex from '../flex/Flex';
import ProgressBar from '../progress-bar/ProgressBar';
import classNames from 'classnames';
import Text from '../text/Text';
import Box from '../box/Box';
import Headline from '../text/Headline';
import Counter from '../counters/Counter';

/**
 * Wizard
 * - renders current step
 * - renders navigation
 * - handle submit event
 * - handle next button click event
 * - renders next button
 * - renders keyboard hint
 */

type WizardProps = {
  onSubmit?(event: SubmitEvent): void;
  onNext?(step: number): boolean;
  title?: string;
};

const WizardContext = React.createContext<{
  currentStep: number;
  stepsLength: number;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}>({
  currentStep: 0,
  stepsLength: 0,
});

const Wizard: React.FunctionComponent<WizardProps> = ({
  children,
  onSubmit,
  onNext,
  title,
}) => {
  const stepsArray = React.Children.toArray(children).filter(reactNode => {
    return (
      (React.isValidElement(reactNode) && reactNode.type === WizardStep) ||
      !React.isValidElement(reactNode)
    );
  });

  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const handleSubmit = React.useCallback(
    event => {
      event.preventDefault();

      if (currentStep < stepsArray.length - 1) {
        const shouldChangeStep = onNext ? onNext(currentStep) : true;

        if (shouldChangeStep) {
          setCurrentStep(currentStep + 1);
        }
      } else {
        onSubmit(event);
      }
    },
    [onSubmit, currentStep, onNext, stepsArray]
  );

  return (
    <div className="wizard">
      <WizardContext.Provider
        value={{
          currentStep,
          stepsLength: stepsArray.length,
          onSubmit: handleSubmit,
        }}
      >
        <Flex direction="column" fullHeight>
          <div className="wizard-progress-bar">
            <Box padding="s">
              <Text size="medium" weight="bold" align="to-center">
                {title}
              </Text>
            </Box>
            {stepsArray.length > 0 ? (
              <ProgressBar
                maxValue={stepsArray.length}
                value={currentStep}
                noBorderRadius
              />
            ) : null}
          </div>
          <div className="wizard-form">
            {stepsArray.map((step, index, array) => {
              return (
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  key={index}
                  className={classNames('wizard-step', {
                    'wizard-step--current': index === currentStep,
                  })}
                >
                  <Flex direction="column" className="wizard-step-content">
                    {index === 0 ? (
                      <>
                        <Headline size="xlarge">Almost there.</Headline>
                        <Flex marginBottom="xxl">
                          <Text size="medium">Let us know you better</Text>
                        </Flex>
                      </>
                    ) : null}
                    {step}
                  </Flex>
                </Flex>
              );
            })}
          </div>
        </Flex>
      </WizardContext.Provider>
    </div>
  );
};

const WizardStep: React.FunctionComponent<{
  title?: string;
  description?: string;
  submit?: string | React.ReactNode;
}> = ({children, title, description, submit}) => {
  const {currentStep, stepsLength, onSubmit} = React.useContext(WizardContext);
  let submitElement: React.ReactNode;

  if (submit) {
    if (typeof submit === 'string') {
      submitElement = <Button>{submit}</Button>;
    } else {
      submitElement = submit;
    }
  } else {
    submitElement = (
      <Button>{currentStep < stepsLength - 1 ? 'next' : 'submit'}</Button>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" marginBottom="l">
        {title ? (
          <Flex>
            <Flex marginRight="s">
              <Counter className="wizard-step-counter">
                {currentStep + 1}
              </Counter>
            </Flex>
            <Headline size="medium">{title}</Headline>
          </Flex>
        ) : null}
        {description ? (
          <Flex marginTop="s">
            <Text size="small">{description}</Text>
          </Flex>
        ) : null}
      </Flex>
      {children}
      <Flex marginTop="l">
        <Flex marginRight="s">{submitElement}</Flex>
        <Flex alignItems="center">
          <Flex marginRight="xs">
            <Text color="text-gray-50" noWrap size="small">
              press&nbsp;
              <Text inherited weight="bold" as="span">
                Enter
              </Text>
            </Text>
          </Flex>
          <Box color="gray-20" padding="xxs" className="wizard-footer__icon">
            <Icon size={24} type="keyboard" color="icon-gray-50" />
          </Box>
        </Flex>
      </Flex>
    </form>
  );
};

const WizardStepSubmit: React.FunctionComponent<{
  onClick?: () => void;
}> = ({label, onClick}) => {
  return (
    <Button type="button" onClick={onClick}>
      {label}
    </Button>
  );
};

export {Wizard, WizardStep, WizardStepSubmit};
