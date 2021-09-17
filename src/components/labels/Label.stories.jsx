import * as React from 'react';
import Label, {ICON_TYPE, LABEL_COLORS_SET, LABEL_TYPE} from './Label';
import Flex from '../flex/Flex';

export default {
  title: 'Components/Label',
  parameters: {
    component: Label,
  },
  args: {
    iconType: 'heart',
    color: 'blue',
    type: 'default',
    children: 'label',
  },
  argTypes: {
    iconType: {control: {type: 'select', options: ICON_TYPE}},
    color: {control: {type: 'select', options: LABEL_COLORS_SET}},
    type: {control: {type: 'select', options: LABEL_TYPE}},
    onClose: {control: null},
  },
};

export const Default = args => <Label {...args} />;

// eslint-disable-next-line
const closeCallback = () => {};

export const Light = () => (
  <Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="default">
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="default">
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="default">
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="default">
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="default">
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="default">
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label type="default"> label</Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
      <Label type="default" onClose={closeCallback}>
        {' '}
        label
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mint" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="lavender" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="peach" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mustard" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="gray" type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label type="default" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column">
      <Label
        color="blue"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mint"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="lavender"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="peach"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mustard"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="gray"
        type="default"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label type="default" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
  </Flex>
);

export const Solid = () => (
  <Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="solid">
        label
      </Label>
      <br />
      <br />
      <Label type="solid">label</Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label type="solid" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mint" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="lavender" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="peach" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mustard" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="gray" type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label type="solid" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column">
      <Label color="blue" type="solid" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mint" type="solid" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="lavender"
        type="solid"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="peach"
        type="solid"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mustard"
        type="solid"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label color="gray" type="solid" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
      <Label type="solid" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
  </Flex>
);

export const Transparent = () => (
  <Flex>
    <Flex direction="column" marginRight="l" style={{visibility: 'hidden'}}>
      <Label color="blue" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent">
        label
      </Label>
      <br />
      <br />
      <Label type="transparent">label</Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l" style={{visibility: 'hidden'}}>
      <Label color="blue" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label type="transparent" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label type="transparent" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column">
      <Label
        color="blue"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mint"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="lavender"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="peach"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mustard"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="gray"
        type="transparent"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label type="transparent" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
  </Flex>
);

export const TransparentColor = () => (
  <Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent-color">
        label
      </Label>
      <br />
      <br />
      <Label type="transparent-color">label</Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
      <Label type="transparent-color" onClose={closeCallback}>
        label
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column" marginRight="l">
      <Label color="blue" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mint" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="lavender" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="peach" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="mustard" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label color="gray" type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
      <Label type="transparent-color" iconType="heart">
        {' '}
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
    <Flex direction="column">
      <Label
        color="blue"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mint"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="lavender"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="peach"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="mustard"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label
        color="gray"
        type="transparent-color"
        iconType="heart"
        onClose={closeCallback}
      >
        label with icon
      </Label>
      <br />
      <br />
      <Label type="transparent-color" iconType="heart" onClose={closeCallback}>
        label with icon
      </Label>
      <br />
      <br />
    </Flex>
  </Flex>
);

export const LongText = args => {
  const {children} = args;

  return (
    <div>
      <div
        style={{
          width: '300px',
          background: 'lightgray',
          padding: '20px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>

      <div
        style={{
          width: '200px',
          background: 'lightgray',
          padding: '20px',
          marginTop: '10px',
        }}
      >
        <Label {...args}>{children}</Label>
      </div>
    </div>
  );
};

// eslint-disable-next-line
const onCloseMock = () => {};

LongText.args = {
  ...Default.args,
  title: 'Long long long text',
  children: 'Very very long label',
  onClose: {control: onCloseMock},
};

LongText.argTypes = Default.argTypes;
