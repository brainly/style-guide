import React from 'react';
import Media from '../Media';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Avatar, {ICON_TYPE, ICON_COLOR} from '../../avatar/Avatar';

const defaultProps = {
  contentArray: [
    <span className="sg-link sg-link--gray sg-link--emphasised">The Goat</span>,
    <span>Master </span>
  ],
  aside: <Avatar iconType={ICON_TYPE.PROFILE} iconColor={ICON_COLOR.GRAY}/>
};

const Medias = () =>
  <div>
    <DocsBlock info='Standard'>
      <ContrastBox fullWidth={true}>
        <Media {...defaultProps}/>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='To right'>
      <ContrastBox fullWidth={true}>
        <Media {...defaultProps} toRight={true}/>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Focused'>
      <ContrastBox fullWidth={true}>
        <Media {...defaultProps} focused={true}/>
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info='Gray secondary light - Clickable'>
      <Media {...defaultProps} graySecondaryLight={true} clickable={true}/>
    </DocsBlock>
  </div>;

export default Medias;
