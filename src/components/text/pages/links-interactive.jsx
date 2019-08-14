import React from 'react';
import Link, {LINK_SIZE, LINK_COLOR, LINK_WEIGHT} from 'text/Link';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Links = () => {
  const settings = [
    {
      name: 'size',
      values: LINK_SIZE,
    },
    {
      name: 'color',
      values: LINK_COLOR,
    },
    {
      name: 'href',
      values: String,
    },
    {
      name: 'weight',
      values: LINK_WEIGHT,
    },
    {
      name: 'underlined',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Link>Comments (9)</Link>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Link
          href="#"
          color={LINK_COLOR.MINT}
          size={LINK_SIZE.SMALL}
          weight={LINK_WEIGHT.REGULAR}
        >
          Terms of use
        </Link>
      </DocsActiveBlock>
    </div>
  );
};

export default Links;
