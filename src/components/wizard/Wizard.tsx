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

type WizardProps = {
  title?: string;
  subtitle?: string;
};

const WizardContext = React.createContext<{
  currentStep: number;
  stepsLength: number;
  next(): void;
}>({
  currentStep: 0,
  stepsLength: 0,
  next: () => null,
});

const WizardStepContext = React.createContext<{
  index: number;
}>({
  index: 0,
});

const Wizard: React.FunctionComponent<WizardProps> = ({
  children,
  title,
  subtitle,
}) => {
  const stepsArray = React.Children.toArray(children).filter(reactNode => {
    return React.isValidElement(reactNode) && reactNode.type === WizardStep;
  });
  const [currentStep, setCurrentStep] = React.useState<number>(0);

  const next = React.useCallback(() => {
    if (currentStep < stepsArray.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, stepsArray]);

  return (
    <div className="wizard">
      <WizardContext.Provider
        value={{
          currentStep,
          stepsLength: stepsArray.length,
          next,
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
            {stepsArray.map((step, index) => {
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
                    {index === 0 && title ? (
                      <Flex marginBottom="l" direction="column">
                        <Headline className="wizard-form__title" size="xlarge">
                          {title}
                        </Headline>
                        {subtitle ? (
                          <Text size="medium">{subtitle}</Text>
                        ) : null}
                      </Flex>
                    ) : null}
                    <WizardStepContext.Provider value={{index}}>
                      {step}
                    </WizardStepContext.Provider>
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
  onSubmit?(fields: {[key: string]: string}, next: () => void);
}> = ({children, onSubmit}) => {
  const {next} = React.useContext(WizardContext);
  const handleSubmit = React.useCallback<
    React.FormEventHandler<HTMLFormElement>
  >(
    event => {
      event.preventDefault();

      const fields = {};

      new FormData(event.currentTarget).forEach((value, key) => {
        fields[key] = value;
      });

      if (onSubmit) {
        onSubmit(fields, next);
      } else {
        next();
      }
    },
    [next, onSubmit]
  );

  return <form onSubmit={handleSubmit}>{children}</form>;
};

const WizardStepSubmit: React.FunctionComponent<{
  hint?: string;
  variant?: ButtonVariantType;
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
        <Box color="gray-20" padding="xxs" className="wizard-footer__icon">
          <Icon size={24} type="keyboard" color="icon-gray-50" />
        </Box>
      </Flex>
    </Flex>
  );
};

const WizardStepHeader: React.FunctionComponent<{
  description?: string;
}> = ({children, description}) => {
  const {index} = React.useContext(WizardStepContext);

  return (
    <Flex direction="column" marginBottom="l">
      <Flex>
        <Flex marginRight="s">
          {typeof index === 'number' ? (
            <Counter className="wizard-step-counter">{index + 1}</Counter>
          ) : null}
        </Flex>
        <Headline size="medium">{children}</Headline>
      </Flex>
      {description ? (
        <Flex marginTop="s">
          <Text size="small">{description}</Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

const WizardExport: typeof Wizard & {
  Step: typeof WizardStep;
  StepSubmit: typeof WizardStepSubmit;
  StepHeader: typeof WizardStepHeader;
} = Object.assign(Wizard, {
  Step: WizardStep,
  StepSubmit: WizardStepSubmit,
  StepHeader: WizardStepHeader,
});

export {WizardExport as Wizard, WizardStepSubmit, WizardStepHeader};
