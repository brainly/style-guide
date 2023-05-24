import React from 'react';
import {Wizard, WizardStep} from '../Wizard';
import Input from '../../form/Input';
import Checkbox from '../../form/checkbox/Checkbox';
import CardRadioGroup from '../../card-interactive/CardRadioGroup';
import CardCheckbox from '../../card-interactive/CardCheckbox';
import Text from '../../text/Text';
import Flex from '../../flex/Flex';
import SelectMenu from '../../select-menu/SelectMenu';
import Icon from '../../icons/Icon';
import Button from '../../buttons/Button';
import Avatar from '../../avatar/Avatar';
import SubjectIcon from '../../subject-icons/SubjectIcon';
import Spinner from '../../spinner/Spinner';
import FileHandler from '../../file-handler/FileHandler';

const SubjectCardCheckbox = ({
  name,
  icon,
  label,
}: {
  name: string;
  icon: SubjectIconType;
  label: string;
}) => {
  return (
    <CardCheckbox height="96px" variant="outline" width="138px" name={name}>
      <CardCheckbox.Indicator slot="top-right" />
      <Flex
        alignItems="flex-start"
        direction="column"
        fullHeight
        gap="xs"
        justifyContent="center"
        style={{paddingLeft: 16}}
      >
        <SubjectIcon type={icon} size="medium" />
        <Text color="text-black" size="small" weight="bold">
          {label}
        </Text>
      </Flex>
    </CardCheckbox>
  );
};

const AccountTypeCardRadio = ({
  value,
  label,
  image,
}: {
  value: string;
  label: string;
  image: string;
}) => {
  return (
    <CardRadioGroup.Item
      width="270px"
      height="270px"
      variant="outline"
      id={value}
      value={value}
      onMouseEnter={() => null}
      onMouseLeave={() => null}
    >
      <CardRadioGroup.Indicator slot="top-right" />
      <Flex
        alignItems="center"
        direction="column"
        style={{paddingTop: 24, paddingBottom: 24}}
      >
        <img
          style={{
            width: '200px',
          }}
          src={`images/${image}.png`}
        />
        <Flex marginTop="s">
          <Text color="text-black" size="small" weight="bold">
            {label}
          </Text>
        </Flex>
      </Flex>
    </CardRadioGroup.Item>
  );
};

const CreateAccountStory = () => {
  const years = React.useMemo(() => {
    const arr = [];

    for (let i = 10; i <= 100; i++) {
      arr.push({
        label: i.toString(),
        value: i.toString(),
      });
    }

    return arr;
  }, []);

  const onComplete = () => {
    alert('wizard form completed');
  };

  const [age, setAge] = React.useState([]);

  const handleAgeChange = React.useCallback(option => {
    setAge([option]);
  }, []);

  const [country, setCountry] = React.useState([]);

  const handleCountryChange = React.useCallback(option => {
    setCountry([option]);
  }, []);

  const [uploadStatus, setUploadStatus] = React.useState('idle');

  const handleUpload = React.useCallback(() => {
    setUploadStatus('in_progress');

    setTimeout(() => {
      setUploadStatus('completed');
    }, 2000);
  }, []);

  return (
    <Wizard onComplete={onComplete}>
      <Wizard.ProgressBar>Join Brainly</Wizard.ProgressBar>
      <WizardStep>
        <Wizard.Title subtitle="Let us know you better">
          Almost there.
        </Wizard.Title>
        <WizardStep.Title>Who are you?</WizardStep.Title>
        <CardRadioGroup name="usertype">
          <AccountTypeCardRadio
            value="student"
            label="I’m a Student"
            image="student"
          />
          <AccountTypeCardRadio
            value="parent"
            label="I’m a Parent"
            image="parent"
          />
        </CardRadioGroup>
        <WizardStep.Submit variant="solid-indigo">next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title subtitle="This is only to get in touch, not to send spam. We love GDPR and GDPR loves us.">
          What email adress can we reach you at?
        </WizardStep.Title>
        <Input placeholder="youremail@example.com" fullWidth name="email" />
        <WizardStep.Submit variant="solid-indigo">next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title subtitle="We want to keep Brainly safe space for everybody">
          Tell us a little bit more
        </WizardStep.Title>
        <Flex marginBottom="s" direction="column" gap="xxs">
          <Text weight="bold" size="small">
            Username
          </Text>
          <Input placeholder="Username" name="username" fullWidth />
        </Flex>
        <Flex marginBottom="s" direction="column" gap="xxs">
          <Text weight="bold" size="small">
            Password
          </Text>
          <Input placeholder="Password" name="password" fullWidth />
        </Flex>
        <Flex marginBottom="s" direction="column" gap="xxs">
          <Text weight="bold" size="small">
            Your age
          </Text>
          <SelectMenu
            className="wizard-demo-age-select"
            name="age"
            options={years}
            onOptionChange={handleAgeChange}
            placeholder="Select your age"
            selectedOptions={age}
          />
        </Flex>
        <Text weight="bold" size="small">
          Your country
        </Text>
        <SelectMenu
          className="wizard-demo-country-select"
          name="country"
          options={[
            {value: 'poland', label: 'Poland'},
            {value: 'usa', label: 'USA'},
          ]}
          onOptionChange={handleCountryChange}
          placeholder="Select your country"
          selectedOptions={country}
        />
        <WizardStep.Submit variant="solid-indigo">next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>Set your profile picture</WizardStep.Title>
        <Flex gap="l" marginBottom="m">
          <Avatar imgSrc="images/pinguin_avatar.png" size="xl" />
          <Flex direction="column" gap="s">
            <Flex gap="xs">
              <Button
                variant="solid-light"
                icon={<Icon color="icon-black" type="reload" />}
                type="button"
              >
                Randomize
              </Button>
              {uploadStatus === 'idle' || uploadStatus === 'completed' ? (
                <Button
                  variant="solid-light"
                  icon={<Icon color="icon-black" type="arrow_up" />}
                  type="button"
                  onClick={handleUpload}
                >
                  Upload
                </Button>
              ) : null}
              {uploadStatus === 'in_progress' ? <Spinner /> : null}
            </Flex>
            <Text size="small">
              File that is{' '}
              <Text inherited weight="bold" as="span">
                3mb
              </Text>{' '}
              max and it is{' '}
              <Text inherited weight="bold" as="span">
                .png
              </Text>{' '}
              or{' '}
              <Text inherited weight="bold" as="span">
                .jpg
              </Text>{' '}
            </Text>
          </Flex>
        </Flex>
        {uploadStatus === 'completed' ? (
          <Flex>
            <FileHandler>avatar.jpg</FileHandler>
          </Flex>
        ) : null}
        <WizardStep.Submit variant="solid-indigo">next</WizardStep.Submit>
      </WizardStep>
      <WizardStep>
        <WizardStep.Title>What your superpowers are?</WizardStep.Title>
        <Flex gap="s" justifyContent="flex-start" wrap>
          <SubjectCardCheckbox icon="history" name="history" label="History" />
          <SubjectCardCheckbox icon="physics" name="physics" label="Physics" />
          <SubjectCardCheckbox
            icon="informatics"
            name="informatics"
            label="Informatics"
          />
          <SubjectCardCheckbox
            icon="language"
            name="languages"
            label="Languages"
          />
          <SubjectCardCheckbox icon="biology" name="biology" label="Biology" />
          <SubjectCardCheckbox icon="science" name="science" label="Science" />
          <SubjectCardCheckbox
            icon="chemistry"
            name="chemistry"
            label="Chemistry"
          />
          <SubjectCardCheckbox icon="others" name="other" label="Other" />
        </Flex>
        <WizardStep.Submit variant="solid-indigo">next</WizardStep.Submit>
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

export default CreateAccountStory;
