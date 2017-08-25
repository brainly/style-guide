import React from 'react';
import TextBit, {TYPE, SIZE, COLOR} from '../TextBit';
import DocsActiveBlock from 'components/DocsActiveBlock';

const TextBits = () => {
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
      name: 'notResponsive',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <TextBit>
          What do you need to know?
        </TextBit>
      </DocsActiveBlock>
    </div>
  );
};

export default TextBits;
