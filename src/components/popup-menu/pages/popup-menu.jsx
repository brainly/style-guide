import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {ICON_COLOR, TYPE} from 'icon-as-button/IconAsButton';
import ButtonSecondary, {TYPE as buttonTypes} from 'buttons/ButtonSecondary';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';

const items = ['one', 'two', 'three'];

const PopupsMenus = () =>
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
        <PopupMenu items={[
          <IconAsButton key={1} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.NOTIFICATIONS} />,
          <IconAsButton key={2} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.MESSAGES} />,
          <IconAsButton key={3} color={ICON_COLOR.GRAY_SECONDARY} type={TYPE.FRIENDS} />,
          <Avatar key={4} imgSrc="https://source.unsplash.com/64x64/?moose" />
        ]} />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="elements-spaced">
      <ContrastBox fullWidth>
        <PopupMenu items={[
          <ButtonSecondary key={1} type={buttonTypes.DARK_INVERSE} wide>
            Log in
          </ButtonSecondary>,
          <ButtonSecondary key={2} type={buttonTypes.DARK} wide>
            Join now
          </ButtonSecondary>
        ]} extraSpacing />
      </ContrastBox>
    </DocsBlock>
  </div>;

export default PopupsMenus;
