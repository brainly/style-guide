import React from 'react';
import {Wizard, WizardStep, useWizard} from './Wizard';
import Input from '../form-elements/Input';
import Checkbox from '../form-elements/checkbox/Checkbox';
import Textarea from '../form-elements/Textarea';
import RadioGroup from '../form-elements/radio/RadioGroup';
import Radio from '../form-elements/radio/Radio';
import Dialog from '../dialog/Dialog';
import {useBrainlyForm} from './useBrainlyForm';
import {useBrainlyFormField} from './useBrainlyFormField';

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

export const CreateAccount = () => {
  const onChange = () => null;
  const onComplete = () => {
    alert('wizard form completed');
  };

  return (
    <Wizard
      title="Join Brainly"
      subtitle="Let us know you better"
      onComplete={onComplete}
    >
      <WizardStep>
        <WizardStep.Title>Who are you?</WizardStep.Title>
        <RadioGroup name="account_type" onChange={onChange}>
          <Radio value="student">Student</Radio>
          <Radio value="parent">Parent</Radio>
        </RadioGroup>
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title subtitle="This is only to get in touch, not to send spam. We love GDPR and GDPR loves us.">
          What email adress can we reach you at?
        </WizardStep.Title>
        <Input placeholder="youremail@mail.com" fullWidth name="email" />
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <Checkbox>
          By creating an account, you accept the Brainly Terms of Service &
          Privacy Policy
        </Checkbox>
        <WizardStep.Submit variant="solid-indigo">
          create account
        </WizardStep.Submit>
      </WizardStep>
    </Wizard>
  );
};

export const AskYourQuestion = () => {
  const onChange = () => null;
  const onComplete = () => {
    alert('wizard form completed');
  };

  return (
    <Wizard title="Ask your question" onComplete={onComplete}>
      <WizardStep>
        <WizardStep.Title subtitle="You can type out your question below and/or add a file.">
          What can we help you with?
        </WizardStep.Title>
        <Textarea
          fullWidth
          size="tall"
          name="question"
          placeholder="I have a problem with the task where I have to choose one of the available answers. I would also like to understand why the correct answer is .. correct. Please help me choose the correct one and explain why such an answer is the best one. "
        />
        <Wizard.Submit>next</Wizard.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>How can we assist you? *</WizardStep.Title>
        <RadioGroup name="subject" onChange={onChange}>
          <Radio value="math">Mathematics</Radio>
          <Radio value="physics">Physics</Radio>
          <Radio value="chemistry">Chemistry</Radio>
          <Radio value="biology">Biology</Radio>
        </RadioGroup>
        <Wizard.Submit>next</Wizard.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title subtitle="This step is optional — you can skip it if you want.">
          What can we help you with?
        </WizardStep.Title>
        <RadioGroup name="help_type" onChange={onChange}>
          <Radio value="quick help">Quick help</Radio>
          <Radio value="step-by-step">Step-by-step explanation</Radio>
          <Radio value="exam">Exam preparation</Radio>
          <Radio value="homework">Homework check</Radio>
        </RadioGroup>
        <Wizard.Submit>ask your question</Wizard.Submit>
      </WizardStep>
    </Wizard>
  );
};
