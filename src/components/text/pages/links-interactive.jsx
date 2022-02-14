import * as React from 'react';
import Link, {LINK_SIZE, TEXT_COLOR, LINK_WEIGHT} from 'text/Link';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Links = () => {
  const settings = [
    {
      name: 'size',
      values: LINK_SIZE,
    },
    {
      name: 'color',
      values: TEXT_COLOR,
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
    {
      name: 'inherited',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Link as="button">Comments (9)</Link>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Link
          href="#"
          color="text-green-60"
          size={LINK_SIZE.SMALL}
          weight={LINK_WEIGHT.REGULAR}
        >
          Terms of use
        </Link>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Link as="button">
          Parent Link component{' '}
          <Link href="#" inherited type="span" color="text-green-60">
            nested Link inheriting styles from parent Link
          </Link>
        </Link>
      </DocsActiveBlock>
    </div>
  );
};

export default Links;
