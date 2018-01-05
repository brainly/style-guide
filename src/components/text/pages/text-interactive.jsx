import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN} from '../Text';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Texts = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'size',
      values: SIZE
    },
    {
      name: 'color',
      values: COLOR
    },
    {
      name: 'weight',
      values: WEIGHT
    },
    {
      name: 'transform',
      values: TEXT_TRANSFORM
    },
    {
      name: 'align',
      values: TEXT_ALIGN
    },
    {
      name: 'noWrap',
      values: Boolean
    },
    {
      name: 'full',
      values: Boolean
    },
    {
      name: 'breakWords',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Text>Lorem Ipsum</Text>
      </DocsActiveBlock>
    </div>
  );
};

export default Texts;
