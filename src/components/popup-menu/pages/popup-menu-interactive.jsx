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

  return <div>
    <DocsActiveBlock settings={settings}>
      <PopupMenu items={[
        <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.NOTIFICATIONS}/>,
        <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.MESSAGES}/>,
        <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.FRIENDS}/>,
        <Avatar imgSrc="https://source.unsplash.com/64x64/?moose"/>
      ]}/>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <PopupMenu items={[
        <ButtonSecondary type={buttonTypes.DARK_INVERSE} wide={true}>
          Log in
        </ButtonSecondary>,
        <ButtonSecondary type={buttonTypes.DARK} wide={true}>
          Join now
        </ButtonSecondary>
      ]} extraSpacing={true}/>
    </DocsActiveBlock>
  </div>;
};

export default PopupMenus;
