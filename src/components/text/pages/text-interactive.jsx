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
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Text>Lorem Ipsum</Text>
    </DocsActiveBlock>
  </div>;
};

export default Texts;
