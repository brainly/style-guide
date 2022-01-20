import * as React from 'react';
import Media, {COLORS_MAP} from '../Media';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';
import Link from 'text/Link';

const defaultProps = {
  contentArray: [
    <Link key={1} color="text-gray-70">
      The Goat
    </Link>,
    <span key={2}>Master </span>,
  ],
  aside: <Avatar />,
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

    <DocsBlock info="Clickable">
      <ContrastBox fullWidth>
        <Media {...defaultProps} clickable />
      </ContrastBox>
    </DocsBlock>

    {Object.values(COLORS_MAP).map(color => (
      <DocsBlock key={color} info={`color ${color}`}>
        {color === 'white' ? (
          <ContrastBox>
            <Media {...defaultProps} color={color} />
          </ContrastBox>
        ) : (
          <Media {...defaultProps} color={color} />
        )}
      </DocsBlock>
    ))}
  </div>
);

export default Medias;
