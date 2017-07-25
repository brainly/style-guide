import React from 'react';
import Sticker, {TYPE} from '../Sticker';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Stickers = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    }
  ];

  return <div>
    <DocsActiveBlock settings={settings}>
      <Sticker type={TYPE.QUESTION}/>
    </DocsActiveBlock>
  </div>;
};

export default Stickers;
