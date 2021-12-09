import * as React from 'react';
import Subheading, {
  SUBHEADING_TYPE,
  SUBHEADING_SIZE,
  SUBHEADING_COLOR,
  SUBHEADING_TRANSFORM,
  SUBHEADING_ALIGN,
} from '../Subheading';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headlines = () => {
  const settings = [
    {
      name: 'type',
      values: SUBHEADING_TYPE,
    },
    {
      name: 'size',
      values: SUBHEADING_SIZE,
    },
    {
      name: 'color',
      values: SUBHEADING_COLOR,
    },
    {
      name: 'transform',
      values: SUBHEADING_TRANSFORM,
    },
    {
      name: 'align',
      values: SUBHEADING_ALIGN,
    },
    {
      name: 'inherited',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Subheading>Lorem Ipsum</Subheading>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.SMALL}
          color={SUBHEADING_COLOR.WHITE}
        >
          We&apos;ve got your back!
        </Subheading>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Subheading>
          Parent Subheading component{' '}
          <Subheading inherited type="span" color={SUBHEADING_COLOR.MINT_DARK}>
            nested Subheading inheriting styles from parent Subheading
          </Subheading>
        </Subheading>
      </DocsActiveBlock>
    </div>
  );
};

export default Headlines;
