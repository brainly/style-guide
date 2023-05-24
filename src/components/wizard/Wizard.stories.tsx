import React from 'react';
import {Wizard, WizardStep, useWizard} from './Wizard';
import Input from '../form/Input';
import RadioGroup from '../form/radio/RadioGroup';
import Radio from '../form/radio/Radio';
import Dialog from '../dialog/Dialog';
import {useBrainlyForm} from './_dev_utils/useBrainlyForm';
import {useBrainlyFormField} from './_dev_utils/useBrainlyFormField';
import './_wizard-stories.scss';
import CreateAccountStory from './stories/create-account';
import AskYourQuestionStory from './stories/ask-your-question';
import MonetisationStory from './stories/monetisation';

export default {
  title: 'Components/Wizard',
  decorators: [
    Story => (
      <Dialog size="fullscreen" open>
        <Story />
      </Dialog>
    ),
  ],
};

const InputField = ({name}) => {
  const firstNameFieldProps = useBrainlyFormField({name});

  return <Input {...firstNameFieldProps} />;
};

const FirstStepForm = () => {
  const {next} = useWizard();
  const {Form} = useBrainlyForm();

  return (
    <Form
      onSubmit={() => {
        next();
      }}
    >
      <WizardStep.Title>step 1 title</WizardStep.Title>
      <InputField name="first_name" />
      <WizardStep.Submit>next</WizardStep.Submit>
    </Form>
  );
};

export const Default = () => {
  const onComplete = () => {
    alert('wizard form completed');
  };
  const onChange = () => null;

  return (
    <Wizard onComplete={onComplete}>
      <Wizard.ProgressBar>form title</Wizard.ProgressBar>
      <WizardStep as="div">
        <Wizard.Title subtitle="form subtitle">form title</Wizard.Title>
        <FirstStepForm />
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>step 2 title</WizardStep.Title>
        <Input name="last_name" />
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>Last step title</WizardStep.Title>
        <RadioGroup name="account_type" onChange={onChange}>
          <Radio value="student">Student</Radio>
          <Radio value="parent">Parent</Radio>
        </RadioGroup>
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
    </Wizard>
  );
};

export const CreateAccount = CreateAccountStory;
export const AskYourQuestion = AskYourQuestionStory;
export const Monetisation = MonetisationStory;
