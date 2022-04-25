import * as React from 'react';
import hex from '../../colors/hex';
import Button, {BUTTON_TYPE} from '../Button';
import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Icon, {ICON_COLOR} from 'icons/Icon';
import Text from '../../text/Text';

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
}

function getIcon(type) {
  let iconType = '';

  switch (type) {
    case 'google': {
      iconType = 'google';
      break;
    }
    case 'facebook': {
      iconType = 'facebook';
      break;
    }
    case 'apple': {
      iconType = 'apple';
      break;
    }
    default: {
      iconType = 'heart_outlined';
    }
  }

  return <Icon type={iconType} color="adaptive" size={24} />;
}

const Buttons = () => {
  const buttonsVariants = [];
  const buttonsText = 'Button';
  const someButtonsWithToggle = [
    'solid-light',
    'outline',
    'transparent',
    'transparent-light',
  ];
  // eslint-disable-next-line react/prop-types
  const getToggleButtons = ({type} = {}) => (
    <>
      {[...someButtonsWithToggle].includes(type) && (
        <Button
          type={type}
          icon={<Icon type="heart" color="adaptive" size={24} />}
          style={{marginBottom: '12px'}}
        >
          {buttonsText}
        </Button>
      )}
      {[...someButtonsWithToggle, 'transparent-red'].includes(type) && (
        <Button
          type={type}
          toggle="red"
          icon={<Icon type="heart" color="adaptive" size={24} />}
          style={{marginBottom: '12px'}}
        >
          {buttonsText}
        </Button>
      )}

      {[...someButtonsWithToggle].includes(type) && (
        <Button
          type={type}
          toggle="yellow"
          icon={getIcon(type)}
          style={{marginBottom: '12px'}}
        >
          {buttonsText}
        </Button>
      )}
    </>
  );

  getValues(BUTTON_TYPE, false).forEach(type => {
    buttonsVariants.push(
      <DocsBlock key="type" centered fullWidth>
        <Flex
          fullWidth
          style={{
            backgroundColor:
              type === 'transparent-inverted' ||
              type === 'solid-inverted' ||
              type === 'solid-indigo-inverted'
                ? hex['gray-50']
                : null,
            paddingTop: '8px',
            paddingLeft: '16px',
          }}
        >
          <DocsBlock evenColumns>
            <Text>{type}</Text>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type}>{buttonsText}</Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type} disabled>
              {buttonsText}
            </Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Flex direction="column" alignItems="center">
              <Button type={type} icon={getIcon(type)}>
                {buttonsText}
              </Button>
              <Flex marginTop="xs">
                <Button type={type} icon={getIcon(type)} reversedOrder>
                  {buttonsText}
                </Button>
              </Flex>
            </Flex>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type} icon={getIcon(type)} iconOnly>
              {buttonsText}
            </Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Flex direction="column">{getToggleButtons({type})}</Flex>
          </DocsBlock>
        </Flex>
      </DocsBlock>
    );
  });

  return (
    <DocsBlock>
      <DocsBlock centered fullWidth>
        <DocsBlock evenColumns style={{paddingLeft: '16px'}}>
          <Text weight="bold">type / state </Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>default</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>disabled</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>
            with icon / <br />
            reversed order
          </Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>icon only</Text>
        </DocsBlock>
        <DocsBlock evenColumns justified>
          <Text>toggle</Text>
        </DocsBlock>
      </DocsBlock>
      {buttonsVariants}
      <DocsBlock info="Buttons sizes">
        <Button
          size="l"
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={32}
            />
          }
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="l"
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={32}
            />
          }
          iconOnly
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={24}
            />
          }
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={24}
            />
          }
          iconOnly
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="s"
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={16}
            />
          }
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="s"
          type="solid"
          icon={
            <Icon
              type="heart_outlined"
              color={ICON_COLOR['icon-white']}
              size={16}
            />
          }
          iconOnly
        >
          {buttonsText}
        </Button>
      </DocsBlock>
    </DocsBlock>
  );
};

export default Buttons;
