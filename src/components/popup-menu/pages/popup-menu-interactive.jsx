import * as React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {ICON_COLOR, TYPE} from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import Avatar from 'avatar/Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';
import DeprecatedNote from 'components/DeprecatedNote';

const PopupMenus = () => {
  const settings = [
    {
      name: 'extraSpacing',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DeprecatedNote />
      <DocsActiveBlock settings={settings}>
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
            <Avatar
              key={4}
              imgSrc="https://source.unsplash.com/64x64/?moose"
            />,
          ]}
        />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <PopupMenu
          items={[
            <Button key={1} type="solid-inverted" fullWidth>
              Log in
            </Button>,
            <Button key={2} type="solid" fullWidth>
              Join now
            </Button>,
          ]}
          extraSpacing
        />
      </DocsActiveBlock>
    </div>
  );
};

export default PopupMenus;
