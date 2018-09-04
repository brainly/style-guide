import React from 'react';
import Headline, {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM} from '../Headline';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headlines = () => {
  const settings = [
    {
      name: 'type',
      values: HEADLINE_TYPE
    },
    {
      name: 'size',
      values: HEADLINE_SIZE
    },
    {
      name: 'color',
      values: HEADLINE_COLOR
    },
    {
      name: 'transform',
      values: HEADLINE_TRANSFORM
    },
    {
      name: 'extraBold',
      values: Boolean
    }
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Headline>Lorem Ipsum</Headline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Headline type={HEADLINE_TYPE.H2} size={HEADLINE_SIZE.SMALL} color={HEADLINE_COLOR.LIGHT}>
          We&apos;ve got your back!
        </Headline>
      </DocsActiveBlock>
    </div>
  );
};

export default Headlines;
