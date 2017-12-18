import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {ICON_COLOR, TYPE} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';
import Avatar from 'avatar/Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';

const PopupMenus = () => {
  const settings = [
    {
      name: 'extraSpacing',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <PopupMenu items={[
          <IconAsButton key={1} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.NOTIFICATIONS} />,
          <IconAsButton key={2} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.MESSAGES} />,
          <IconAsButton key={3} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.FRIENDS} />,
          <Avatar key={4} imgSrc="https://source.unsplash.com/64x64/?moose" />
        ]} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <PopupMenu items={[
          <ButtonSecondary key={1} type={BUTTON_SECONDARY_TYPE.DARK_INVERSE} wide>
            Log in
          </ButtonSecondary>,
          <ButtonSecondary key={2} type={BUTTON_SECONDARY_TYPE.DARK} wide>
            Join now
          </ButtonSecondary>
        ]} extraSpacing />
      </DocsActiveBlock>
    </div>
  );
};

export default PopupMenus;
