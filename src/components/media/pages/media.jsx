import React from 'react';
import Media from '../Media';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';
import Link from 'text/Link';
import {TEXT_COLOR} from '../../text';

const defaultProps = {
  contentArray: [
    <Link key={1} color={TEXT_COLOR.GRAY}>The Goat</Link>,
    <span key={2}>Master </span>
  ],
  aside: <Avatar />
};

const Medias = () => (
  <div>
    <DocsBlock info="Standard">
      <ContrastBox fullWidth>
        <Media {...defaultProps} />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="To right">
      <ContrastBox fullWidth>
        <Media {...defaultProps} toRight />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Focused">
      <ContrastBox fullWidth>
        <Media {...defaultProps} focused />
      </ContrastBox>
    </DocsBlock>

    <DocsBlock info="Gray secondary light - Clickable">
      <Media {...defaultProps} graySecondaryLight clickable />
    </DocsBlock>
  </div>
);

export default Medias;
