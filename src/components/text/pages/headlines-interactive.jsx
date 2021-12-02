import * as React from 'react';
import Headline, {
  HEADLINE_TYPE,
  HEADLINE_SIZE,
  TEXT_COLOR,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from '../Headline';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headlines = () => {
  const settings = [
    {
      name: 'type',
      values: HEADLINE_TYPE,
    },
    {
      name: 'size',
      values: HEADLINE_SIZE,
    },
    {
      name: 'color',
      values: TEXT_COLOR,
    },
    {
      name: 'transform',
      values: HEADLINE_TRANSFORM,
    },
    {
      name: 'align',
      values: HEADLINE_ALIGN,
    },
    {
      name: 'extraBold',
      values: Boolean,
    },
    {
      name: 'inherited',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Headline>Lorem Ipsum</Headline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.SMALL}
          color={TEXT_COLOR['text-white']}
        >
          We&apos;ve got your back!
        </Headline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Headline>
          Parent Headline component{' '}
          <Headline
            inherited
            type="span"
            color={TEXT_COLOR['text-green-60']}
          >
            nested Headline inheriting styles from parent Headline
          </Headline>
        </Headline>
      </DocsActiveBlock>
    </div>
  );
};

export default Headlines;
