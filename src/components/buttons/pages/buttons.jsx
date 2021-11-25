import * as React from 'react';
import hex from '../../colors/hex';
import Button, {BUTTON_TYPE} from '../Button';
import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Icon from 'icons/Icon';
import Text from '../../text/Text';

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
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
      {[...someButtonsWithToggle, 'transparent-peach'].includes(type) && (
        <Button
          type={type}
          toggle="peach"
          icon={<Icon type="heart" color="adaptive" size={24} />}
          style={{marginBottom: '12px'}}
        >
          {buttonsText}
        </Button>
      )}

      {[...someButtonsWithToggle, 'transparent-mustard'].includes(type) && (
        <Button
          type={type}
          toggle="mustard"
          icon={<Icon type="heart" color="adaptive" size={24} />}
          style={{marginBottom: '12px'}}
        >
          {buttonsText}
        </Button>
      )}

      {[...someButtonsWithToggle, 'transparent-blue'].includes(type) && (
        <Button
          type={type}
          toggle="blue"
          icon={<Icon type="heart" color="adaptive" size={24} />}
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
              type === 'transparent-inverted' || type === 'solid-inverted'
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
              <Button
                type={type}
                icon={
                  <Icon
                    type={type === 'facebook' ? 'facebook' : 'heart_outlined'}
                    color="adaptive"
                    size={24}
                  />
                }
              >
                {buttonsText}
              </Button>
              <Flex marginTop="xs">
                <Button
                  type={type}
                  icon={
                    <Icon
                      type={type === 'facebook' ? 'facebook' : 'heart_outlined'}
                      color="adaptive"
                      size={24}
                    />
                  }
                  reversedOrder
                >
                  {buttonsText}
                </Button>
              </Flex>
            </Flex>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button
              type={type}
              icon={<Icon type="heart_outlined" color="adaptive" size={24} />}
              iconOnly
            >
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
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={32} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="l"
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={32} />}
          iconOnly
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={24} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={24} />}
          iconOnly
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="s"
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={16} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="s"
          type="solid-blue"
          icon={<Icon type="heart_outlined" color="light" size={16} />}
          iconOnly
        >
          {buttonsText}
        </Button>
      </DocsBlock>
    </DocsBlock>
  );
};

export default Buttons;
