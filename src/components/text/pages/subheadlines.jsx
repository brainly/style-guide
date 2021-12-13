import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Subheadline, {
  SUBHEADLINE_TYPE,
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TRANSFORM,
  SUBHEADLINE_ALIGN,
} from '../Subheadline';
import {TEXT_COLOR} from '../Text';

const text = "We've got your back!";

const subheadlineSizesMap = [
  {
    type: 'xsmall',
    fontSize: '14px',
  },
  {
    type: 'small',
    fontSize: '18px',
  },
  {
    type: 'medium',
    fontSize: '21px',
  },
  {
    type: 'large',
    fontSize: '28px',
  },
  {
    type: 'xlarge',
    fontSize: '43px',
  },
  {
    type: 'xxlarge',
    fontSize: '53px',
  },
  {
    type: 'xxxlarge',
    fontSize: '78px',
  },
];

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
}

const Subheadlines = () => {
  const standard = [];
  const colorsVariants = [];

  getValues(SUBHEADLINE_SIZE, false).forEach(size => {
    [false, true].forEach(extraBold => {
      let itemSize;

      subheadlineSizesMap.map(item =>
        item.type === size ? (itemSize = `${item.fontSize}`) : null
      );

      standard.push(
        <Subheadline
          key={size}
          type={SUBHEADLINE_TYPE.H2}
          size={size}
          extraBold={extraBold}
        >
          {text} - {size} - {itemSize}
        </Subheadline>
      );
    });
  });

  getValues(TEXT_COLOR, false).forEach(color => {
    if (color !== TEXT_COLOR['text-white']) {
      colorsVariants.push(
        <Subheadline
          key={color}
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          color={color}
        >
          {text} - {color}
        </Subheadline>
      );
    } else {
      colorsVariants.push(
        <ContrastBox key={color}>
          <Subheadline
            type={SUBHEADLINE_TYPE.H2}
            size={SUBHEADLINE_SIZE.MEDIUM}
            color={color}
          >
            {text} - {color}
          </Subheadline>
        </ContrastBox>
      );
    }
  });

  return (
    <>
      <DocsBlock info="Size and weight variant">{standard}</DocsBlock>
      <DocsBlock info="Colors variants">{colorsVariants}</DocsBlock>
      <DocsBlock info="Examples">
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          transform={SUBHEADLINE_TRANSFORM.CAPITALIZE}
        >
          {text} - capitalize
        </Subheadline>
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          transform={SUBHEADLINE_TRANSFORM.LOWERCASE}
        >
          {text} - lowercase
        </Subheadline>
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          transform={SUBHEADLINE_TRANSFORM.UPPERCASE}
        >
          {text} - uppercase
        </Subheadline>
        <br />
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          align={SUBHEADLINE_ALIGN.LEFT}
        >
          {text} - align left
        </Subheadline>
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          align={SUBHEADLINE_ALIGN.CENTER}
        >
          {text} - align center
        </Subheadline>
        <Subheadline
          type={SUBHEADLINE_TYPE.H2}
          size={SUBHEADLINE_SIZE.MEDIUM}
          align={SUBHEADLINE_ALIGN.RIGHT}
        >
          {text} - align right
        </Subheadline>
      </DocsBlock>
    </>
  );
};

export default Subheadlines;
