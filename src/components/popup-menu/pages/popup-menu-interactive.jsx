import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {COLOR, TYPE} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {TYPE as buttonTypes} from 'buttons/ButtonSecondary';
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
          <IconAsButton key={1} color={COLOR.GRAY_SECONDARY} type={TYPE.NOTIFICATIONS} />,
          <IconAsButton key={2} color={COLOR.GRAY_SECONDARY} type={TYPE.MESSAGES} />,
          <IconAsButton key={3} color={COLOR.GRAY_SECONDARY} type={TYPE.FRIENDS} />,
          <Avatar key={4} imgSrc="https://source.unsplash.com/64x64/?moose" />
        ]} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <PopupMenu items={[
          <ButtonSecondary key={1} type={buttonTypes.DARK_INVERSE} wide>
            Log in
          </ButtonSecondary>,
          <ButtonSecondary key={2} type={buttonTypes.DARK} wide>
            Join now
          </ButtonSecondary>
        ]} extraSpacing />
      </DocsActiveBlock>
    </div>
  );
};

export default PopupMenus;
