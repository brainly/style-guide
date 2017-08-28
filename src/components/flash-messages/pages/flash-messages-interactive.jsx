import React from 'react';
import FlashMessage, {TYPE} from '../FlashMessage';
import DocsActiveBlock from 'components/DocsActiveBlock';

const FlashMessages = () => {
  const settings = [
    {
      name: 'type',
      values: TYPE
    },
    {
      name: 'text',
      values: String,
      required: true
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <FlashMessage text='I have never seen a code like this before...' />
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <FlashMessage text='Whoops! Something went wrong' type={TYPE.ERROR} />
      </DocsActiveBlock>
    </div>
  );
};

export default FlashMessages;
