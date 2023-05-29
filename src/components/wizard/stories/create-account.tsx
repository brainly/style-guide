import React from 'react';
import Lottie, {LottieRef} from 'lottie-react';
import {Wizard, WizardStep, useWizard} from '../Wizard';
import Input from '../../form/Input';
import Checkbox from '../../form/checkbox/Checkbox';
import CardRadioGroup from '../../card-interactive/CardRadioGroup';
import CardCheckbox from '../../card-interactive/CardCheckbox';
import Text from '../../text/Text';
import Headline from '../../text/Headline';
import Flex from '../../flex/Flex';
import SelectMenu from '../../select-menu/SelectMenu';
import Icon from '../../icons/Icon';
import Button from '../../buttons/Button';
import Avatar from '../../avatar/Avatar';
import SubjectIcon from '../../subject-icons/SubjectIcon';
import Spinner from '../../spinner/Spinner';
import FileHandler from '../../file-handler/FileHandler';
import brandHeroesAnimation from './brand-heroes-lottie.json';
import confettiAnimation from './confetti-lottie.json';

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

const SuccessStep = ({avatarImage}: {avatarImage: string}) => {
  const {currentStep, stepsLength} = useWizard();
  const [countdown, setCountdown] = React.useState(3);
  const confettiAnimationRef: LottieRef = React.useRef();

  React.useEffect(() => {
    let countdown = 3;

    if (currentStep === stepsLength - 1) {
      console.log(confettiAnimationRef.current);
      if (confettiAnimationRef.current) {
        confettiAnimationRef.current.play();
      }

      const intervalID = window.setInterval(() => {
        if (countdown === 0) {
          window.clearInterval(intervalID);
        }

        setCountdown(countdown);
        countdown = countdown - 1;
      }, 1000);

      return () => {
        window.clearInterval(intervalID);
      };
    }
  }, [currentStep, stepsLength]);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          height: '30%',
          top: '10%',
          left: 0,
          width: '100%',
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          fullWidth
          fullHeight
          gap="s"
        >
          <Avatar imgSrc={avatarImage} size="xl" />
          <Headline align="to-center" size="large">
            Welcome to Brainly, YourUsername
          </Headline>
          <Text align="to-center" color="text-gray-50" weight="bold">
            {countdown > 0
              ? `Redirecting to your question in... ${countdown}s`
              : null}
          </Text>
        </Flex>
      </div>
      <div
        style={{
          position: 'absolute',
          height: '70%',
          width: '80%',
          top: '20%',
          left: '10%',
        }}
      >
        <Lottie animationData={brandHeroesAnimation} />
      </div>
      <div
        style={{
          position: 'absolute',
          height: '80%',
          width: '80%',
          top: 0,
          left: '10%',
        }}
      >
        <Lottie
          lottieRef={confettiAnimationRef}
          animationData={confettiAnimation}
          loop={false}
          autoplay={false}
        />
      </div>
    </>
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

  const [avatarImage, setAvatarImage] = React.useState(
    'images/pinguin_avatar.png'
  );

  const handleRandomize = React.useCallback(() => {
    setAvatarImage('images/cat.png');
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
          <Avatar imgSrc={avatarImage} size="xl" />
          <Flex direction="column" gap="s">
            <Flex gap="xs">
              <Button
                variant="solid-light"
                icon={<Icon color="icon-black" type="reload" />}
                type="button"
                onClick={handleRandomize}
              >
                Randomize
              </Button>
              <Button
                variant="solid-light"
                icon={<Icon color="icon-black" type="arrow_up" />}
                type="button"
              >
                Upload
              </Button>
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
      <WizardStep>
        <SuccessStep avatarImage={avatarImage} />
      </WizardStep>
    </Wizard>
  );
};

export default CreateAccountStory;
