import React from 'react';
import Text from '../Text';
import {
  TEXT_COLOR,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TYPE,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
} from 'text/textConsts';

import DocsActiveBlock from 'components/DocsActiveBlock';

const Texts = () => {
  const settings = [
    {
      name: 'type',
      values: TEXT_TYPE,
    },
    {
      name: 'size',
      values: TEXT_SIZE,
    },
    {
      name: 'color',
      values: TEXT_COLOR,
    },
    {
      name: 'weight',
      values: TEXT_WEIGHT,
    },
    {
      name: 'transform',
      values: TEXT_TRANSFORM,
    },
    {
      name: 'align',
      values: TEXT_ALIGN,
    },
    {
      name: 'noWrap',
      values: Boolean,
    },
    {
      name: 'full',
      values: Boolean,
    },
    {
      name: 'breakWords',
      values: Boolean,
    },
    {
      name: 'breakLines',
      values: Boolean,
    },
  ];

  const text = 'Lorem Ipsum \ndolor sit amet';

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Text>{text}</Text>
      </DocsActiveBlock>
    </div>
  );
};

export default Texts;
