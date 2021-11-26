import * as React from 'react';
import PopupMenu from './PopupMenu';
import IconAsButton, {ICON_COLOR, TYPE} from 'icon-as-button/IconAsButton';
import Avatar from 'avatar/Avatar';
import Button from 'buttons/Button';

export default {
  title: 'Components/PopupMenu',
  parameters: {
    component: PopupMenu,
    backgrounds: {
      default: 'dark',
    },
  },
  argTypes: {
    items: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    items: ['one', 'two', 'three'],
  },
};

export const Default = args => <PopupMenu {...args} />;

export const ExampleUsage = () => (
  <PopupMenu
    items={[
      <IconAsButton
        key={1}
        color={ICON_COLOR['icon-gray-50']}
        type={TYPE.NOTIFICATIONS}
      />,
      <IconAsButton
        key={2}
        color={ICON_COLOR['icon-gray-50']}
        type={TYPE.MESSAGES}
      />,
      <IconAsButton
        key={3}
        color={ICON_COLOR['icon-gray-50']}
        type={TYPE.FRIENDS}
      />,
      <Avatar key={4} imgSrc="https://source.unsplash.com/64x64/?moose" />,
    ]}
  />
);

export const ExtraSpacing = () => (
  <PopupMenu
    items={[
      <Button key={1} type="solid-inverted" size="small">
        Log in
      </Button>,
      <Button key={2} type="solid" size="small">
        Join now
      </Button>,
    ]}
    extraSpacing
  />
);
