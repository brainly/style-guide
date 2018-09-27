import React from 'react';
import Link from '../Link';
import {TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from 'text';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Links = () => {
  const settings = [
    {
      name: 'size',
      values: TEXT_SIZE
    },
    {
      name: 'color',
      values: TEXT_COLOR
    },
    {
      name: 'href',
      values: String
    },
    {
      name: 'weight',
      values: TEXT_WEIGHT
    },
    {
      name: 'underlined',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Link>Comments (9)</Link>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Link
          href="#"
          color={TEXT_COLOR.MINT}
          size={TEXT_SIZE.SMALL}
          weight={TEXT_WEIGHT.REGULAR}
        >
          Terms of use
        </Link>
      </DocsActiveBlock>
    </div>
  );
};

export default Links;
