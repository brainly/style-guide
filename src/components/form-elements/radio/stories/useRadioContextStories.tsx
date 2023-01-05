import * as React from 'react';
import Logo from '../../../logo/Logo';
import Text from '../../../text/Text';
import Flex from '../../../flex/Flex';
import Icon from '../../../icons/Icon';
import Headline from '../../../text/Headline';
import useRadioContext from '../useRadioContext';
import Radio from '../Radio';
type WrapperType = 'plus' | 'tutor';
type BenefitsType = {
  title: string;
  items: Array<string>;
};
const LOGO: {
  plus: 'brainly-plus';
  tutor: 'brainly-tutoring';
} = {
  plus: 'brainly-plus',
  tutor: 'brainly-tutoring',
};

const CustomRadioComponent = ({
  value,
  type,
  benefits,
}: {
  value: string;
  type: WrapperType;
  benefits: BenefitsType;
}) => {
  const {selectedValue, setSelectedValue, lastFocusedValue} = useRadioContext();
  const labelId = `label-${value}`;
  const descriptionId = `description-${value}`;
  const {title, items} = benefits;

  const Benefit = ({item}: {item: string}) => {
    return (
      <Flex marginBottom="m" htmlTag="li">
        <Flex alignItems="center" justifyContent="center">
          <Icon
            type="check"
            color="icon-gray-70"
            size={16}
            style={{
              marginRight: '8px',
            }}
          />
          <Text size="medium">{item}</Text>
        </Flex>
      </Flex>
    );
  };

  const borderColor =
    lastFocusedValue === value
      ? 'var(--blue-40)'
      : value === selectedValue
      ? 'var(--black)'
      : 'var(--gray-30)';
  return (
    <div
      onClick={e => {
        setSelectedValue(e, value);
      }}
      style={{
        width: '50%',
        position: 'relative',
        border: '2px solid black',
        borderColor,
        borderRadius: '8px',
        padding: '24px',
        marginRight: '10px',
      }}
    >
      <Radio
        value={value}
        ariaLabelledBy={labelId}
        ariaDescribedBy={descriptionId}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          '--radioColor':
            value === selectedValue ? 'var(--black)' : 'var(--gray-30)',
        }}
      />
      <Flex alignItems="center">
        <Logo
          type={LOGO[type]}
          style={{
            width: '42px',
            height: 'auto',
          }}
        />
        <Text
          id={labelId}
          type="label"
          weight="bold"
          transform="capitalize"
          style={{
            marginLeft: '8px',
          }}
        >
          Brainly {value}
        </Text>
      </Flex>
      <Flex
        htmlTag="ul"
        direction="column"
        alignItems="flex-start"
        style={{
          padding: '0',
        }}
      >
        <Headline
          align="to-left"
          extraBold
          style={{
            marginBottom: '16px',
          }}
        >
          {title}
        </Headline>
        {[...items].map((item, index) => (
          <Benefit key={index} item={item} />
        ))}
      </Flex>
    </div>
  );
};

export {CustomRadioComponent};