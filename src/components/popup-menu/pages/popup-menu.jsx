import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {COLOR, TYPE} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {TYPE as buttonTypes} from 'buttons/ButtonSecondary';
import DocsBlock from 'DocsBlock';
import ContrastBox from 'ContrastBox';
import Avatar from 'avatar/Avatar';

const items = ['one', 'two', 'three'];

const PopupsMenus = () =>
  <div>
    <DocsBlock info='Default'>
      <PopupMenu items={items}/>
    </DocsBlock>

    <DocsBlock info='Default'>
      <ContrastBox fullWidth={true}>
        <PopupMenu items={items}/>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Example usage 1'>
      <ContrastBox fullWidth={true}>
        <PopupMenu items={[
          <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.NOTIFICATIONS}/>,
          <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.MESSAGES}/>,
          <IconAsButton color={COLOR.GRAY_SECONDARY} type={TYPE.FRIENDS}/>,
          <Avatar imgSrc="https://source.unsplash.com/64x64/?moose"/>
        ]}/>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='elements-spaced'>
      <ContrastBox fullWidth={true}>
        <PopupMenu items={[
          <ButtonSecondary type={buttonTypes.dark_inverse} wide={true}>
            Log in
          </ButtonSecondary>,
          <ButtonSecondary type={buttonTypes.dark} wide={true}>
            Join now
          </ButtonSecondary>
        ]} extraSpacing={true}/>
      </ContrastBox>
    </DocsBlock>
  </div>;

export default PopupsMenus;
