import React from 'react';
import hex from '../../colors/hex';
import Button, {BUTTON_TYPE, BUTTON_SIZE} from '../Button';
import DocsBlock from 'components/DocsBlock';
import Flex from '../../flex/Flex';
import Icon, {TYPE as iconTypes} from 'icons/Icon';
import Text from '../../text/Text';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const Buttons = () => {
  const buttonsVariants = [];

  const buttonAdditionalStyle = [
    {
      type: 'primary',
      hoverColor: '#283037',
      hoverBorderColor: '#283037',
      iconColor: 'light'
    },
    {
      type: 'primary-inverted',
      hoverColor: '#f7f9fb',
      hoverBorderColor: '#f7f9fb',
      iconColor: 'dark'
    },
    {
      type: 'primary-blue',
      hoverColor: '#27a3f5',
      hoverBorderColor: '#27a3f5',
      iconColor: 'light'
    },
    {
      type: 'primary-mint',
      hoverColor: '#46c183',
      hoverBorderColor: '#46c183',
      iconColor: 'light'
    },
    {
      type: 'secondary',
      hoverColor: 'rgba(0,0,0,0.12)',
      hoverBorderColor: '#000000',
      iconColor: 'dark'
    },
    {
      type: 'link-button',
      hoverColor: 'rgba(0,0,0,0.12)',
      hoverBorderColor: 'rgba(0,0,0,0.12)',
      iconColor: 'dark'
    },
    {
      type: 'link-button-inverted',
      hoverColor: 'rgba(255,255,255,0.12)',
      hoverBorderColor: 'rgba(255,255,255,0.12)',
      iconColor: 'light'
    },
    {
      type: 'link-button-peach',
      hoverColor: 'rgba(255,121,104,0.12)',
      hoverBorderColor: 'rgba(255,121,104,0.12)',
      iconColor: 'peach'
    },
    {
      type: 'link-button-mustard',
      hoverColor: 'rgba(251,190,46,0.12)',
      hoverBorderColor: 'rgba(251,190,46,0.12)',
      iconColor: 'mustard'
    },
    {
      type: 'destructive',
      hoverColor: '#ff8979',
      hoverBorderColor: '#ff8979',
      iconColor: 'dark'
    },
    {
      type: 'warning',
      hoverColor: '#fcc441',
      hoverBorderColor: '#fcc441',
      iconColor: 'dark'
    },
    {
      type: 'facebook',
      hoverColor: '#4367a9',
      hoverBorderColor: '#4367a9',
      iconColor: 'light'
    }
  ];

  const buttonsText = 'Button';

  getValues(BUTTON_TYPE, false).forEach(type => {
    let itemObj = {};

    buttonAdditionalStyle.map(item => (
      item.type === type ? itemObj = {
        hoverColor: `${item.hoverColor}`,
        hoverBorderColor: `${item.hoverBorderColor}`,
        iconColor: `${item.iconColor}`
      } : null
    ));

    buttonsVariants.push(
      <DocsBlock centered fullWidth>
        <Flex
          fullWidth
          style={{
            backgroundColor: type === 'link-button-inverted' ? hex.graySecondary : null,
            paddingTop: type === 'link-button-inverted' ? '10px' : null
          }}
        >
          <DocsBlock evenColumns justified>
            <Text>{type}</Text>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button type={type}>
              {buttonsText}
            </Button>
          </DocsBlock>
          <DocsBlock evenColumns justified>
            <Button
              type={type}
              style={{
                backgroundColor: itemObj.hoverColor,
                border: type !== 'secondary' ? itemObj.hoverBorderColor : null
              }}
            >
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
                <Icon
                  type={iconTypes.ANSWER}
                  color={itemObj.iconColor}
                  size={24}
                />}
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
          icon={<Icon type={iconTypes.FB} color="light" size={32} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          type="facebook"
          icon={<Icon type={iconTypes.FB} color="light" size={24} />}
        >
          {buttonsText}
        </Button>
        &nbsp;
        <Button
          size="small"
          type="facebook"
          icon={<Icon type={iconTypes.FB} color="light" size={16} />}
        >
          {buttonsText}
        </Button>
      </DocsBlock>
    </DocsBlock>
  );

};

export default Buttons;
