import React from 'react';
import {Wizard, WizardStepTitle, WizardStepSubmit, useWizard} from './Wizard';
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

export const Default = () => {
  const onComplete = () => {
    alert('wizard form completed');
  };
  const onChange = () => null;

  const {Form} = useBrainlyForm();

  const {next, ref} = useWizard();

  return (
    <Wizard
      title="form title"
      subtitle="form subtitle"
      onComplete={onComplete}
      ref={ref}
    >
      <Wizard.Step>
        <Form
          onSubmit={(data, e) => {
            /**
             *
             * SUBMIT sie odpala w Wizard.Step
             *
             */
            e.stopPropagation();
            e.preventDefault();
            console.log(data);
            next();
          }}
        >
          <Wizard.StepTitle>step 1 title</Wizard.StepTitle>
          <InputField name="first_name" />
          <Wizard.StepSubmit>next</Wizard.StepSubmit>
        </Form>
      </Wizard.Step>
      <Wizard.Step>
        <Wizard.StepTitle>Who are you?</Wizard.StepTitle>
        <RadioGroup name="account_type" onChange={onChange}>
          <Radio value="student">Student</Radio>
          <Radio value="parent">Parent</Radio>
        </RadioGroup>
        <Wizard.StepSubmit>next</Wizard.StepSubmit>
      </Wizard.Step>
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
      <Wizard.Step>
        <Wizard.StepTitle>Who are you?</Wizard.StepTitle>
        <RadioGroup name="account_type" onChange={onChange}>
          <Radio value="student">Student</Radio>
          <Radio value="parent">Parent</Radio>
        </RadioGroup>
        <Wizard.StepSubmit>next</Wizard.StepSubmit>
      </Wizard.Step>
      <Wizard.Step>
        <Wizard.StepTitle subtitle="This is only to get in touch, not to send spam. We love GDPR and GDPR loves us.">
          What email adress can we reach you at?
        </Wizard.StepTitle>
        <Input placeholder="youremail@mail.com" fullWidth name="email" />
        <Wizard.StepSubmit>next</Wizard.StepSubmit>
      </Wizard.Step>
      <Wizard.Step>
        <Checkbox>
          By creating an account, you accept the Brainly Terms of Service &
          Privacy Policy
        </Checkbox>
        <Wizard.StepSubmit variant="solid-indigo">
          create account
        </Wizard.StepSubmit>
      </Wizard.Step>
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
      <Wizard.Step>
        <Wizard.StepTitle subtitle="You can type out your question below and/or add a file.">
          What can we help you with?
        </Wizard.StepTitle>
        <Textarea
          fullWidth
          size="tall"
          name="question"
          placeholder="I have a problem with the task where I have to choose one of the available answers. I would also like to understand why the correct answer is .. correct. Please help me choose the correct one and explain why such an answer is the best one. "
        />
        <Wizard.StepSubmit>next</Wizard.StepSubmit>
      </Wizard.Step>
      <Wizard.Step>
        <WizardStepTitle>How can we assist you? *</WizardStepTitle>
        <RadioGroup name="subject" onChange={onChange}>
          <Radio value="math">Mathematics</Radio>
          <Radio value="physics">Physics</Radio>
          <Radio value="chemistry">Chemistry</Radio>
          <Radio value="biology">Biology</Radio>
        </RadioGroup>
        <WizardStepSubmit>next</WizardStepSubmit>
      </Wizard.Step>
      <Wizard.Step>
        <Wizard.StepTitle subtitle="This step is optional — you can skip it if you want.">
          What can we help you with?
        </Wizard.StepTitle>
        <RadioGroup name="help_type" onChange={onChange}>
          <Radio value="quick help">Quick help</Radio>
          <Radio value="step-by-step">Step-by-step explanation</Radio>
          <Radio value="exam">Exam preparation</Radio>
          <Radio value="homework">Homework check</Radio>
        </RadioGroup>
        <WizardStepSubmit>ask your question</WizardStepSubmit>
      </Wizard.Step>
    </Wizard>
  );
};
