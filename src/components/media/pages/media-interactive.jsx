import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Media from '../Media';
import Avatar from 'avatar/Avatar';
import Link, {LINK_COLOR} from 'text/Link';

const MediaExamples = () => {
  const defaultProps = {
    contentArray: [
      <Link key={1} color={LINK_COLOR.GRAY}>
        The Goat
      </Link>,
      <span key={2}>Master </span>,
    ],
    aside: <Avatar />,
  };

  const settings = [
    {
      name: 'toRight',
      values: Boolean,
    },
    {
      name: 'focused',
      values: Boolean,
    },
    {
      name: 'clickable',
      values: Boolean,
    },
    {
      name: 'noPadding',
      values: Boolean,
    },
    {
      name: 'transparent',
      values: Boolean,
    },
    {
      name: 'graySecondaryLight',
      values: Boolean,
    },
    {
      name: 'small',
      values: Boolean,
    },
    {
      name: 'spacedBottom',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Media {...defaultProps} />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Media {...defaultProps} graySecondaryLight clickable toRight />
      </DocsActiveBlock>
    </div>
  );
};

export default MediaExamples;
