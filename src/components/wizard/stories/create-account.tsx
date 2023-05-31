import React from 'react';
import Lottie, {LottieRef} from 'lottie-react';
import {Wizard, WizardStep} from '../Wizard';
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
import SubjectIcon, {IconTypeType} from '../../subject-icons/SubjectIcon';
import brandHeroesAnimation from './brand-heroes-lottie.json';
import confettiAnimation from './confetti-lottie.json';
import studentAnimation from './student.json';
import parentAnimation from './parent.json';
import {useCardRadioGroupContext} from '../../card-interactive/CardRadioGroupContext';

const SubjectCardCheckbox = ({
  name,
  icon,
  label,
}: {
  name: string;
  icon: IconTypeType;
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
  image: 'student' | 'parent';
}) => {
  const {value: contextRadioGroupValue} = useCardRadioGroupContext();
  const lottieRef: LottieRef = React.useRef();
  const animationsMap = {
    student: studentAnimation,
    parent: parentAnimation,
  };

  React.useEffect(() => {
    if (contextRadioGroupValue === value) {
      lottieRef.current.stop();
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [contextRadioGroupValue, value]);

  return (
    <CardRadioGroup.Item
      width="270px"
      height="270px"
      variant="outline"
      id={value}
      value={value}
    >
      <CardRadioGroup.Indicator slot="top-right" />
      <Flex
        alignItems="center"
        direction="column"
        style={{paddingTop: 38, position: 'relative'}}
        fullHeight
      >
        <div
          style={{
            background:
              image === 'student'
                ? 'linear-gradient(180.0deg, rgba(255, 121, 104, 1.0) 0%, rgba(185, 226, 254, 1.0) 100%)'
                : 'linear-gradient(180.0deg, rgba(109, 131, 243, 1.0) 0%, rgba(0, 103, 46, 1.0) 100%)',
            borderRadius: 'var(--border-radius-xxs)',
            position: 'relative',
            top: 0,
            left: 0,
            height: 140,
            width: 184,
            overflow: 'visible',
          }}
        >
          {value === 'student' ? (
            <>
              <SubjectIcon
                type="language"
                style={{
                  position: 'absolute',
                  bottom: -20,
                  left: 8,
                  transform: 'rotate(-16deg)',
                }}
              />
              <SubjectIcon
                type="biology"
                style={{
                  position: 'absolute',
                  top: 20,
                  right: -28,
                  transform: 'rotate(16deg) scale(1.6)',
                }}
              />
              <SubjectIcon
                type="art"
                style={{
                  position: 'absolute',
                  top: -34,
                  right: 20,
                }}
              />
            </>
          ) : null}
          {value === 'parent' ? (
            <SubjectIcon
              type="sociology"
              style={{
                position: 'absolute',
                top: -24,
                left: 6,
                transform: 'rotate(-26deg) scale(0.75)',
              }}
            />
          ) : null}
          {value === 'parent' ? (
            <SubjectIcon
              type="geometry"
              style={{
                position: 'absolute',
                top: 24,
                left: 2,
                transform: 'rotate(-17deg) scale(1.4)',
              }}
            />
          ) : null}
          <div
            style={{
              height: '120%',
              width: '100%',
              overflow: 'hidden',
              position: 'absolute',
              bottom: 0,
            }}
          >
            <Lottie
              lottieRef={lottieRef}
              animationData={animationsMap[image]}
              style={{
                height: '110%',
                position: 'absolute',
                bottom: -15,
              }}
              autoplay={false}
              loop={1}
            />
          </div>
          {value === 'parent' ? (
            <SubjectIcon
              type="geography"
              style={{
                position: 'absolute',
                bottom: -34,
                left: -8,
              }}
            />
          ) : null}
        </div>

        <Flex marginTop="l">
          <Text color="text-black" size="small" weight="bold">
            {label}
          </Text>
        </Flex>
      </Flex>
    </CardRadioGroup.Item>
  );
};

const SuccessScreen = ({avatarImage}: {avatarImage: string}) => {
  const [countdown, setCountdown] = React.useState(3);
  const confettiAnimationRef: LottieRef = React.useRef();

  React.useEffect(() => {
    let countdown = 3;

    if (confettiAnimationRef.current) {
      confettiAnimationRef.current.play();
    }

    const intervalID = window.setInterval(() => {
      if (countdown < 0) {
        window.clearInterval(intervalID);
      }

      setCountdown(countdown);
      countdown = countdown - 1;
    }, 1000);

    return () => {
      window.clearInterval(intervalID);
    };
  }, []);

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
        <div
          style={{
            margin: '0 auto',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          <Lottie animationData={brandHeroesAnimation} />
        </div>
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
        <div
          style={{
            margin: '0 auto',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          <Lottie
            lottieRef={confettiAnimationRef}
            animationData={confettiAnimation}
            loop={false}
            autoplay={false}
          />
        </div>
      </div>
    </>
  );
};

const CreateAccountStory = () => {
  const [isCompleted, setIsCompleted] = React.useState(false);
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
    setIsCompleted(true);
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

  return isCompleted ? (
    <SuccessScreen avatarImage={avatarImage} />
  ) : (
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
    </Wizard>
  );
};

export default CreateAccountStory;
