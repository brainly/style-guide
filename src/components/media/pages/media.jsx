import React from 'react';
import Media from '../Media';
import DocsBlock from '../../../docs/DocsBlock';
import ContrastBox from '../../../docs/ContrastBox';
import Avatar from '../../avatar/Avatar';
import Link, {COLOR} from '../../text/Link';

const defaultProps = {
  contentArray: [
    <Link color={COLOR.GRAY} emphasised={true}>The Goat</Link>,
    <span>Master </span>
  ],
  aside: <Avatar />
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
