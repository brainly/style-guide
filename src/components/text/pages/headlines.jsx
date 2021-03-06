import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Headline, {
  HEADLINE_TYPE,
  HEADLINE_SIZE,
  HEADLINE_COLOR,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from '../Headline';

const text = "We've got your back!";

const headlineSizesMap = [
  {
    type: 'xxsmall',
    fontSize: '10px',
  },
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
    fontSize: '39px',
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

const Headlines = () => {
  const standard = [];
  const colorsVariants = [];

  getValues(HEADLINE_SIZE, false).forEach(size => {
    [false, true].forEach(extraBold => {
      let itemSize;

      headlineSizesMap.map(item =>
        item.type === size ? (itemSize = `${item.fontSize}`) : null
      );

      standard.push(
        <Headline
          key={size}
          type={HEADLINE_TYPE.H2}
          size={size}
          extraBold={extraBold}
        >
          {text} - {size} - {itemSize}
        </Headline>
      );
    });
  });

  getValues(HEADLINE_COLOR, false).forEach(color => {
    if (color !== HEADLINE_COLOR.WHITE) {
      colorsVariants.push(
        <Headline
          key={color}
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          color={color}
        >
          {text} - {color}
        </Headline>
      );
    } else {
      colorsVariants.push(
        <ContrastBox key={color}>
          <Headline
            type={HEADLINE_TYPE.H2}
            size={HEADLINE_SIZE.MEDIUM}
            color={color}
          >
            {text} - {color}
          </Headline>
        </ContrastBox>
      );
    }
  });

  return (
    <>
      <DocsBlock info="Size and weight variant">{standard}</DocsBlock>
      <DocsBlock info="Colors variants">{colorsVariants}</DocsBlock>
      <DocsBlock info="Examples">
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          transform={HEADLINE_TRANSFORM.CAPITALIZE}
        >
          {text} - capitalize
        </Headline>
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          transform={HEADLINE_TRANSFORM.LOWERCASE}
        >
          {text} - lowercase
        </Headline>
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          transform={HEADLINE_TRANSFORM.UPPERCASE}
        >
          {text} - uppercase
        </Headline>
        <br />
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          align={HEADLINE_ALIGN.LEFT}
        >
          {text} - align left
        </Headline>
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          align={HEADLINE_ALIGN.CENTER}
        >
          {text} - align center
        </Headline>
        <Headline
          type={HEADLINE_TYPE.H2}
          size={HEADLINE_SIZE.MEDIUM}
          align={HEADLINE_ALIGN.RIGHT}
        >
          {text} - align right
        </Headline>
      </DocsBlock>
    </>
  );
};

export default Headlines;
