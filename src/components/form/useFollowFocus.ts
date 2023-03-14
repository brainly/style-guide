import * as React from 'react';

export const useFollowFocus = ({
  contentRef,
  stepContainersRef,
  currentStepIndex,
  changeStep,
}) => {
  React.useEffect(() => {
    const contentElement = contentRef.current;
    const stepContainersElements = stepContainersRef.current;

    const handleFocus = event => {
      for (let i = 0; i <= stepContainersElements.length - 1; i++) {
        if (
          stepContainersElements[i].contains(event.target) &&
          i !== currentStepIndex
        ) {
          changeStep(i);
          break;
        }
      }
    };

    contentElement.addEventListener('focusin', handleFocus);

    return () => {
      contentElement.removeEventListener('focusin', handleFocus);
    };
  }, [stepContainersRef, currentStepIndex, changeStep, contentRef]);
};
