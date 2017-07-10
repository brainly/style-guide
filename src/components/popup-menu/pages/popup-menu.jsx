import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {COLOR, TYPE} from '../../icon-as-button/IconAsButton';
import ButtonSecondary, {types as buttonTypes} from '../../buttons/ButtonSecondary';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';

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
          <div className="sg-avatar sg-avatar--with-border">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
          </div>
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
