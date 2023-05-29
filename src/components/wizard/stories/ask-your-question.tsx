import React from 'react';
import {Wizard, WizardStep} from '../Wizard';
import CardRadioGroup from '../../card-interactive/CardRadioGroup';
import Text from '../../text/Text';
import Flex from '../../flex/Flex';
import Icon from '../../icons/Icon';
import Button from '../../buttons/Button';
import SubjectIcon, {IconTypeType} from '../../subject-icons/SubjectIcon';
import FileHandler from '../../file-handler/FileHandler';
import Textarea from '../../form/Textarea';

const SubjectCardRadioItem = ({
  icon,
  label,
  value,
}: {
  icon: IconTypeType;
  label: string;
  value: string;
}) => {
  return (
    <CardRadioGroup.Item
      value={value}
      width="296px"
      height="112px"
      variant="outline"
      id={value}
    >
      <CardRadioGroup.Indicator slot="top-right" />
      <Flex
        alignItems="flex-start"
        direction="column"
        fullHeight
        justifyContent="center"
        style={{paddingLeft: 16}}
      >
        <Flex marginBottom="xs" marginLeft="xxs">
          <SubjectIcon type={icon} size="medium" />
        </Flex>
        <Flex marginBottom="xxs" marginLeft="xxs">
          <Text color="text-black" size="small" weight="bold">
            {label}
          </Text>
        </Flex>
        <Flex marginLeft="xxs">
          <Text color="text-green-60" size="xsmall" weight="bold">
            Online
          </Text>
        </Flex>
      </Flex>
    </CardRadioGroup.Item>
  );
};

const HelpTypeCardRadioItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) => {
  const getIconSrc = (icon: string) => {
    switch (icon) {
      case 'quick-help': {
        return 'images/quick-help-icon.png';
      }
      case 'step-by-step': {
        return 'images/step-by-step-icon.png';
      }
      case 'exam-preparation': {
        return 'images/exam-preparation-icon.png';
      }
      case 'homework-check': {
        return 'images/homework-check-icon.png';
      }
      default: {
        return null;
      }
    }
  };

  return (
    <CardRadioGroup.Item
      value={value}
      width="296px"
      height="92px"
      variant="outline"
      id={value}
    >
      <CardRadioGroup.Indicator slot="top-right" />
      <Flex
        alignItems="flex-start"
        direction="column"
        fullHeight
        justifyContent="center"
        style={{paddingLeft: 16}}
      >
        <Flex marginBottom="xs" marginLeft="xxs">
          <img
            src={getIconSrc(icon)}
            style={{width: 32, height: 32, display: 'block'}}
          />
        </Flex>
        <Flex marginLeft="xxs">
          <Text color="text-black" size="small" weight="bold">
            {label}
          </Text>
        </Flex>
      </Flex>
    </CardRadioGroup.Item>
  );
};

const AskYourQuestionStory = () => {
  const onComplete = () => {
    alert('wizard form completed');
  };

  return (
    <Wizard onComplete={onComplete}>
      <Wizard.ProgressBar>Ask your question</Wizard.ProgressBar>
      <WizardStep>
        <Wizard.Title>Ask your question</Wizard.Title>
        <WizardStep.Title subtitle="You can type out your question below and/or add a file.">
          What can we help you with?
        </WizardStep.Title>
        <Flex marginBottom="s">
          <Textarea
            fullWidth
            size="tall"
            name="question"
            placeholder="I have a problem with the task where I have to choose one of the available answers. I would also like to understand why the correct answer is .. correct. Please help me choose the correct one and explain why such an answer is the best one. "
          />
        </Flex>
        <Flex gap="s">
          <Button
            type="button"
            variant="solid-light"
            iconOnly
            icon={<Icon type="attachment" color="icon-black" />}
          />
          <FileHandler onClose={() => null}>image1.jpg</FileHandler>
          <FileHandler onClose={() => null}>image2.jpg</FileHandler>
        </Flex>
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>How can we assist you? *</WizardStep.Title>
        <CardRadioGroup name="subject">
          <Flex wrap gap="xs">
            <SubjectCardRadioItem
              value="mathematics"
              label="Mathematics"
              icon="mathematics"
            />
            <SubjectCardRadioItem
              value="physics"
              label="Physics"
              icon="physics"
            />
            <SubjectCardRadioItem
              value="chemistry"
              label="Chemistry"
              icon="chemistry"
            />
            <SubjectCardRadioItem
              value="biology"
              label="Biology"
              icon="biology"
            />
          </Flex>
        </CardRadioGroup>
        <WizardStep.Submit>next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title subtitle="This step is optional — you can skip it if you want.">
          What can we help you with?
        </WizardStep.Title>
        <CardRadioGroup>
          <Flex wrap gap="xs">
            <HelpTypeCardRadioItem
              icon="quick-help"
              label="Quick Help"
              value="quick-help"
            />
            <HelpTypeCardRadioItem
              icon="step-by-step"
              label="Step-by-step explanation"
              value="step-by-step"
            />
            <HelpTypeCardRadioItem
              icon="exam-preparation"
              label="Exam preparation"
              value="exam-preparation"
            />
            <HelpTypeCardRadioItem
              icon="homework-check"
              label="Homework check"
              value="homework-check"
            />
          </Flex>
        </CardRadioGroup>
        <WizardStep.Submit>ask your question</WizardStep.Submit>
        <Flex marginTop="s">
          <Text size="xsmall" color="text-gray-60">
            <Flex alignItems="center" gap="xxs">
              <Icon type="info" color="icon-gray-60" /> We will post your
              question immediately after finishing registration.
            </Flex>
          </Text>
        </Flex>
      </WizardStep>
    </Wizard>
  );
};

export default AskYourQuestionStory;
