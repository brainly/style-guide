import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Subheading, {
  SUBHEADING_TYPE,
  SUBHEADING_SIZE,
  SUBHEADING_TRANSFORM,
  SUBHEADING_ALIGN,
} from '../Subheading';
import {TEXT_COLOR} from '../Text';

const text = "We've got your back!";

const subheadingSizesMap = [
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

const Subheadings = () => {
  const standard = [];
  const colorsVariants = [];

  getValues(SUBHEADING_SIZE, false).forEach(size => {
    [false, true].forEach(extraBold => {
      let itemSize;

      subheadingSizesMap.map(item =>
        item.type === size ? (itemSize = `${item.fontSize}`) : null
      );

      standard.push(
        <Subheading
          key={size}
          type={SUBHEADING_TYPE.H2}
          size={size}
          extraBold={extraBold}
        >
          {text} - {size} - {itemSize}
        </Subheading>
      );
    });
  });

  getValues(TEXT_COLOR, false).forEach(color => {
    if (color !== TEXT_COLOR['text-white']) {
      colorsVariants.push(
        <Subheading
          key={color}
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          color={color}
        >
          {text} - {color}
        </Subheading>
      );
    } else {
      colorsVariants.push(
        <ContrastBox key={color}>
          <Subheading
            type={SUBHEADING_TYPE.H2}
            size={SUBHEADING_SIZE.MEDIUM}
            color={color}
          >
            {text} - {color}
          </Subheading>
        </ContrastBox>
      );
    }
  });

  return (
    <>
      <DocsBlock info="Size and weight variant">{standard}</DocsBlock>
      <DocsBlock info="Colors variants">{colorsVariants}</DocsBlock>
      <DocsBlock info="Examples">
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          transform={SUBHEADING_TRANSFORM.CAPITALIZE}
        >
          {text} - capitalize
        </Subheading>
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          transform={SUBHEADING_TRANSFORM.LOWERCASE}
        >
          {text} - lowercase
        </Subheading>
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          transform={SUBHEADING_TRANSFORM.UPPERCASE}
        >
          {text} - uppercase
        </Subheading>
        <br />
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          align={SUBHEADING_ALIGN.LEFT}
        >
          {text} - align left
        </Subheading>
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          align={SUBHEADING_ALIGN.CENTER}
        >
          {text} - align center
        </Subheading>
        <Subheading
          type={SUBHEADING_TYPE.H2}
          size={SUBHEADING_SIZE.MEDIUM}
          align={SUBHEADING_ALIGN.RIGHT}
        >
          {text} - align right
        </Subheading>
      </DocsBlock>
    </>
  );
};

export default Subheadings;
