import * as React from 'react';
import Subheadline, {
  SUBHEADLINE_TYPE,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
  SUBHEADLINE_ALIGN,
} from '../Subheadline';
import {TEXT_COLOR} from '../Text';
import DocsActiveBlock from 'components/DocsActiveBlock';

const Headlines = () => {
  const settings = [
    {
      name: 'type',
      values: SUBHEADLINE_TYPE,
    },
    {
      name: 'size',
      values: SUBHEADLINE_SIZE,
    },
    {
      name: 'color',
      values: TEXT_COLOR,
    },
    {
      name: 'transform',
      values: SUBHEADLINE_TRANSFORM,
    },
    {
      name: 'align',
      values: SUBHEADLINE_ALIGN,
    },
    {
      name: 'inherited',
      values: Boolean,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Subheadline>Lorem Ipsum</Subheadline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings} backgroundColor="dark">
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.SMALL}
          color={TEXT_COLOR['text-white']}
        >
          We&apos;ve got your back!
        </Subheadline>
      </DocsActiveBlock>
      <DocsActiveBlock settings={settings}>
        <Subheadline color={TEXT_COLOR['text-red-60']}>
          Parent Subheadline component{' '}
          <Subheadline inherited type="span">
            nested Subheadline inheriting styles from parent Subheadline
          </Subheadline>
        </Subheadline>
      </DocsActiveBlock>
    </div>
  );
};

export default Headlines;
