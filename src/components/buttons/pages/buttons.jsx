import React from 'react';
import hex from '../../colors/hex';
import Button, {BUTTON_TYPE} from '../Button';
import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Icon, {TYPE as iconTypes} from 'icons/Icon';
import Text from '../../text/Text';

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
}

const getIconColor = type => {
  if (
    type === 'solid-inverted' ||
    type === 'solid-light' ||
    type === 'outline' ||
    type === 'transparent'
  ) {
    return 'dark';
  } else if (type === 'transparent-peach') {
    return 'peach';
  } else if (type === 'transparent-mustard') {
    return 'mustard';
  } else if (type === 'transparent-light') {
    return 'gray-secondary';
  } else {
    return 'light';
  }
};

const Buttons = () => {
  const buttonsVariants = [];
  const buttonsText = 'Button';

  getValues(BUTTON_TYPE, false).forEach(type => {
    const iconColor = getIconColor(type);

    buttonsVariants.push(
      <DocsBlock key="type" centered fullWidth>
        <Flex
          fullWidth
          style={{
            backgroundColor:
              type === 'transparent-inverted' ? hex.graySecondary : null,
            paddingTop: type === 'transparent-inverted' ? '10px' : null,
          }}
        >
          <DocsBlock evenColumns justified>
            <Text>{type}</Text>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type}>{buttonsText}</Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type} className={`docs-button-hovered--${type}`}>
              {buttonsText}
            </Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type} disabled>
              {buttonsText}
            </Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button
              type={type}
              icon={
                <Icon type={iconTypes.ANSWER} color={iconColor} size={24} />
              }
            >
              {buttonsText}
            </Button>
          </DocsBlock>
        </Flex>
      </DocsBlock>
    );
  });

  return (
    <DocsBlock>
      <DocsBlock centered fullWidth>
        <DocsBlock evenColumns justified>
          <Text weight="bold">type / state </Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>default</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>hover</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>disabled</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>with icon</Text>
        </DocsBlock>
      </DocsBlock>
      {buttonsVariants}
      <DocsBlock info="Buttons sizes">
        <Button
          size="large"
          type="facebook"
          icon={<Icon type={iconTypes.FACEBOOK} color="light" size={32} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="facebook"
          icon={<Icon type={iconTypes.FACEBOOK} color="light" size={24} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="small"
          type="facebook"
          icon={<Icon type={iconTypes.FACEBOOK} color="light" size={16} />}
        >
          {buttonsText}
        </Button>
      </DocsBlock>
    </DocsBlock>
  );
};

export default Buttons;
