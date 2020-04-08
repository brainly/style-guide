import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {ICON_COLOR, TYPE} from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';

const items = ['one', 'two', 'three'];

const PopupsMenus = () => (
  <div>
    <DocsBlock info="Default">
      <PopupMenu items={items} />
    </DocsBlock>

    <DocsBlock info="Default">
      <ContrastBox fullWidth>
        <PopupMenu items={items} />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Example usage 1">
      <ContrastBox fullWidth>
        <PopupMenu
          items={[
            <IconAsButton
              key={1}
              color={ICON_COLOR.GRAY_SECONDARY}
              type={TYPE.NOTIFICATIONS}
            />,
            <IconAsButton
              key={2}
              color={ICON_COLOR.GRAY_SECONDARY}
              type={TYPE.MESSAGES}
            />,
            <IconAsButton
              key={3}
              color={ICON_COLOR.GRAY_SECONDARY}
              type={TYPE.FRIENDS}
            />,
            <Avatar
              key={4}
              imgSrc="https://source.unsplash.com/64x64/?moose"
            />,
          ]}
        />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="elements-spaced">
      <ContrastBox fullWidth>
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
      </ContrastBox>
    </DocsBlock>
  </div>
);

export default PopupsMenus;
