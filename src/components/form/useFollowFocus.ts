import * as React from 'react';

export const useFollowFocus = ({
  stepContainersRef,
  currentStepIndex,
  changeStep,
}) => {
  React.useEffect(() => {
    const stepContainersElements = stepContainersRef.current;

    const handleFocus = event => {
      stepContainersElements.forEach((stepContainerElement, index) => {
        if (
          stepContainerElement.contains(event.target) &&
          index !== currentStepIndex
        ) {
          changeStep(index);
        }
      });
    };

    if (stepContainersElements) {
      stepContainersElements.forEach(element => {
        element.addEventListener('focusin', handleFocus);
      });
    }

    return () => {
      if (stepContainersElements) {
        stepContainersElements.forEach(element => {
          element.removeEventListener('focusin', handleFocus);
        });
      }
    };
  }, [stepContainersRef, currentStepIndex, changeStep]);
};
