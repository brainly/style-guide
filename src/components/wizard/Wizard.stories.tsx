import React from 'react';
import {Wizard, WizardStep} from './Wizard';
import Input from '../form-elements/Input';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Button from '../buttons/Button';

export default {
  title: 'Components/Wizard',
};

export const Default = () => {
  const handleSubmit = e => {
    console.log(e);
    alert('form submitted successfuly');
  };
  const handleNext = () => {
    return true;
  };

  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
      }}
    >
      <Wizard title="Join Brainly" onSubmit={handleSubmit} onNext={handleNext}>
        <WizardStep title="Who are you?">
          <Input fullWidth name="firstname" />
        </WizardStep>
        <WizardStep
          title="What email adress can we reach you at?"
          description="This is only to get in touch, not to send spam. We love GDPR and GDPR loves us."
        >
          <Input placeholder="youremail@mail.com" fullWidth name="email" />
        </WizardStep>
        <WizardStep
          submit={<Button variant="solid-indigo">create account</Button>}
        >
          <Checkbox>
            By creating an account, you accept the Brainly Terms of Service &
            Privacy Policy
          </Checkbox>
        </WizardStep>
      </Wizard>
    </div>
  );
};
