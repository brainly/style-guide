import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, {colors, types} from '../../icon-as-button/IconAsButton';
import ButtonSecondary, {types as buttonTypes} from '../../buttons/ButtonSecondary';
import DocsBlock, {contrastBlockCssClass, contrastBlockFullWidthCssClass} from '../../../docs/DocsBlock';
import classnames from 'classnames';

const items = ['one', 'two', 'three'];

const PopupsMenus = () =>
  <div>
    <DocsBlock info='Default'>
      <PopupMenu items={items}/>
    </DocsBlock>

    <DocsBlock info='Default'>
      <div className={classnames(contrastBlockCssClass, contrastBlockFullWidthCssClass)}>
        <PopupMenu items={items}/>
      </div>
    </DocsBlock>

    <DocsBlock info='Example usage 1'>
      <div className={classnames(contrastBlockCssClass, contrastBlockFullWidthCssClass)}>
        <PopupMenu items={[
          <IconAsButton color={colors.gray_secondary} type={types.notifications}/>,
          <IconAsButton color={colors.gray_secondary} type={types.messages}/>,
          <IconAsButton color={colors.gray_secondary} type={types.friends}/>,
          <div className="sg-avatar sg-avatar--with-border">
            <img className="sg-avatar__image" src="https://source.unsplash.com/64x64/?man"/>
          </div>
        ]}/>
      </div>
    </DocsBlock>

    <DocsBlock info='elements-spaced'>
      <div className={classnames(contrastBlockCssClass, contrastBlockFullWidthCssClass)}>
        <PopupMenu items={[
          <ButtonSecondary type={buttonTypes.dark_inverse} wide={true}>
            Log in
          </ButtonSecondary>,
          <ButtonSecondary type={buttonTypes.dark} wide={true}>
            Join now
          </ButtonSecondary>
        ]} extraSpacing={true}/>
      </div>
    </DocsBlock>
  </div>;

export default PopupsMenus;
