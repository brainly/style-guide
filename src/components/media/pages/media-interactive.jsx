import * as React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Media, {COLORS_MAP} from '../Media';
import Avatar from 'avatar/Avatar';
import Link from 'text/Link';

const MediaExamples = () => {
  const defaultProps = {
    contentArray: [
      <Link href="#" key={1} color="text-gray-70">
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
      name: 'color',
      values: COLORS_MAP,
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
