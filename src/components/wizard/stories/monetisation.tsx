import React from 'react';
import {Wizard, WizardStep, useWizard} from '../Wizard';

const MonetisationStory = () => {
  const ProgressLabel = () => {
    const {currentStep, stepsLength} = useWizard();

    return (
      <>{`Get unlimited access - Step ${currentStep + 1}/${stepsLength}`}</>
    );
  };

  const onComplete = () => {
    alert('wizard form completed');
  };

  return (
    <Wizard onComplete={onComplete}>
      <Wizard.ProgressBar>
        <ProgressLabel />
      </Wizard.ProgressBar>
      <WizardStep>
        <Wizard.Title subtitle="Try out premium features for FREE and cancel anytime, we’ll remind you a day before the trial ends!">
          Get unlimited learning with Brainly Plus
        </Wizard.Title>
        <WizardStep.Title>Claim your free trial</WizardStep.Title>
        <WizardStep.Submit variant="solid-indigo">
          claim your free trial
        </WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Submit variant="solid-indigo">
          start free trial with card
        </WizardStep.Submit>
      </WizardStep>
    </Wizard>
  );
};

export default MonetisationStory;
