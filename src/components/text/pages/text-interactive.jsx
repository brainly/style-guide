import * as React from 'react';
import Text from '../Text';
import {
  TEXT_COLOR,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TYPE,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_WHITE_SPACE,
} from 'text/textConsts';

import DocsActiveBlock from 'components/DocsActiveBlock';

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
    name: 'whiteSpace',
    values: TEXT_WHITE_SPACE,
  },
  {
    name: 'inherited',
    values: Boolean,
  },
];

const Default = () => {
  const text = 'Lorem Ipsum \ndolor sit amet';

  return (
    <DocsActiveBlock settings={settings}>
      <Text>{text}</Text>
    </DocsActiveBlock>
  );
};

const Nested = () => {
  return (
    <DocsActiveBlock settings={settings}>
      <Text>
        This is parent Text component, containing{' '}
        <Text inherited type="span" color={TEXT_COLOR.PEACH_DARK}>
          nested Text with prop inherited=true inheriting styles from parent
          though still is able to override some of them with props
          (color=peach).
        </Text>
      </Text>
    </DocsActiveBlock>
  );
};

const Texts = () => {
  return (
    <div>
      <Default />
      <Nested />
    </div>
  );
};

export default Texts;
