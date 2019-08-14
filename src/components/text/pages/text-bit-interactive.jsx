import React from 'react';
import TextBit, {
  TEXT_BIT_TYPE,
  TEXT_BIT_SIZE,
  TEXT_BIT_COLOR,
} from '../TextBit';
import DocsActiveBlock from 'components/DocsActiveBlock';

const TextBits = () => {
  const settings = [
    {
      name: 'type',
      values: TEXT_BIT_TYPE,
    },
    {
      name: 'size',
      values: TEXT_BIT_SIZE,
    },
    {
      name: 'color',
      values: TEXT_BIT_COLOR,
    },
    {
      name: 'notResponsive',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <TextBit>What do you need to know?</TextBit>
      </DocsActiveBlock>
    </div>
  );
};

export default TextBits;
