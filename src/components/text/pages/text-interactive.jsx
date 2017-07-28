import React from 'react';
import Text, {TYPE, SIZE, COLOR, WEIGHT} from '../Text';
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
      name: 'noWrap',
      values: Boolean
    },
    {
      name: 'breakWords',
      values: Boolean
    },
    {
      name: 'children',
      values: String
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Text>Lorem Ipsum</Text>
    </DocsActiveBlock>
    <DocsActiveBlock settings={settings}>
      <Text size={SIZE.OBSCURE} color={COLOR.GRAY}>This text is not really intended to be read</Text>
    </DocsActiveBlock>
  </div>;
};

export default Texts;
