import * as React from 'react';
import Button from '../buttons/Button';
import Flex from '../flex/Flex';
import Icon, {TYPE} from '../icons/Icon';

type ContextType = {
  currentStep: string;
};

export const FormContext = React.createContext<ContextType>({} as ContextType);

export const Form: React.FunctionComponent = ({children}) => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);
  const contentRef = React.useRef(null);
  const stepRefs = React.useRef([]);
  const steps = React.Children.toArray(children);
  const onStepChange = React.useCallback(index => {
    const stepNode: HTMLElement = stepRefs.current[index];
    const contentScrollPosition = stepNode.offsetTop;

    setCurrentStepIndex(index);

    if (contentRef) {
      contentRef.current.style.transform = `translateY(-${contentScrollPosition}px)`;
    }
  }, []);
  const handleUp = React.useCallback(() => {
    onStepChange(currentStepIndex - 1);
  }, [currentStepIndex, onStepChange]);
  const handleDown = React.useCallback(() => {
    onStepChange(currentStepIndex + 1);
  }, [currentStepIndex, onStepChange]);

  return (
    <div className="sg-form">
      <div className="sg-form-content" ref={contentRef}>
        {steps.map((child, index) => (
          <div
            className="sg-form-step-area"
            key={index}
            ref={ref => {
              stepRefs.current[index] = ref;
            }}
          >
            {child}
            {currentStepIndex !== index ? (
              <span className="sg-form-step-area__overlay" />
            ) : null}
          </div>
        ))}
      </div>
      <Flex role="navigation" direction="column" className="sg-form-navigation">
        {currentStepIndex > 0 ? (
          <Button
            iconOnly
            icon={<Icon type={TYPE.ARROW_UP} />}
            onClick={handleUp}
          />
        ) : null}
        {currentStepIndex < steps.length - 1 ? (
          <Flex marginTop="s">
            <Button
              iconOnly
              icon={<Icon type={TYPE.ARROW_DOWN} />}
              onClick={handleDown}
            />
          </Flex>
        ) : null}
      </Flex>
    </div>
  );
};

type FormStepPropsType = {
  children?: React.ReactNode;
};

export const FormStep = React.forwardRef(
  ({children}: FormStepPropsType, ref) => {
    return (
      <div className="sg-form-step">
        <div className="sg-form-step-content">{children}</div>
      </div>
    );
  }
);
