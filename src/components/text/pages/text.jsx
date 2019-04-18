import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Text from '../Text';
import Link, {LINK_WEIGHT, LINK_SIZE, LINK_COLOR} from '../Link';
import {TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT, TEXT_TRANSFORM, TEXT_ALIGN} from '../textConsts';

const text = 'We\'ve got your back!';

const textSizesMap = [
  {
    type: 'xsmall',
    fontSize: '12px'
  },
  {
    type: 'small',
    fontSize: '15px'
  },
  {
    type: 'normal',
    fontSize: '18px'
  },
  {
    type: 'large',
    fontSize: '24px'
  },
  {
    type: 'xlarge',
    fontSize: '33px'
  },
  {
    type: 'xxlarge',
    fontSize: '45px'
  }
];

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextExamples = () => {
  const SizeVariant = [];
  const ColorVariant = [];
  const linkColorVariant = [];

  getValues(TEXT_SIZE, false).forEach(size => {
    getValues(TEXT_WEIGHT, false).forEach(weight => {
      let itemSize;

      textSizesMap.map(item => (item.type === size ? itemSize = `${item.fontSize}` : null));

      SizeVariant.push(
        <Text type={TEXT_TYPE.H2} size={size} color={TEXT_COLOR.GRAY} weight={weight}>
          {text} - {size} - {itemSize}
        </Text>
      );
    });
  });

  getValues(TEXT_COLOR, false).forEach(color => {
    if (color === TEXT_COLOR.WHITE) {
      ColorVariant.push(
        <ContrastBox>
          <Text type={TEXT_TYPE.H2} color={color}>
            {text} - {color}
          </Text>
        </ContrastBox>
      );
    } else {
      ColorVariant.push(
        <Text type={TEXT_TYPE.H2} color={color}>
          {text} - {color}
        </Text>
      );
    }
  });

  getValues(LINK_COLOR, false).forEach(color => {
    if (color !== LINK_COLOR.WHITE) {
      linkColorVariant.push(
        <div>
          <Link
            href="#"
            color={color}
            weight={LINK_WEIGHT.BOLD}
            size={LINK_SIZE.LARGE}
          >link - {color}
          </Link>
          <br />
        </div>
      );
    }
  });

  return (
    <div>
      <DocsBlock info="Size and weight variant">
        {SizeVariant}
      </DocsBlock>
      <DocsBlock info="Color variant">
        {ColorVariant}
      </DocsBlock>
      <DocsBlock info="Link options">
        <Link
          href="#"
          size={LINK_SIZE.LARGE}
        >
          link / bold / standard / xlarge / standard
        </Link>
        <br />
        <Link
          href="#"
          weight={LINK_WEIGHT.BOLD}
          size={LINK_SIZE.LARGE}
          underlined
        >
          link / bold / mint / xlarge / underlined
        </Link>
      </DocsBlock>
      <DocsBlock info="Link color variants">
        {linkColorVariant}
      </DocsBlock>
      <DocsBlock info="Alignment examples">
        <Text align={TEXT_ALIGN.LEFT}>
          Text aligned to left
        </Text>
        <Text align={TEXT_ALIGN.CENTER}>
          Text aligned to center
        </Text>
        <Text align={TEXT_ALIGN.RIGHT}>
          Text aligned to right
        </Text>
        <Text align={TEXT_ALIGN.JUSTIFY}>
        This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is justified.
        </Text>
      </DocsBlock>
      <DocsBlock info="Transform examples">
        <Text transform={TEXT_TRANSFORM.LOWERCASE}>
          THIS TEXT IS LOWERCASED
        </Text>
        <Text transform={TEXT_TRANSFORM.UPPERCASE}>
          this text is uppercased
        </Text>
        <Text transform={TEXT_TRANSFORM.CAPITALIZE}>
          this text capitalized
        </Text>
      </DocsBlock>
      <DocsBlock info="Container and full width">
        <Text asContainer>
          This text is a container - things can be positioned relative to it
        </Text>
        <br />
        <Text full>
          This text takes full width
        </Text>
      </DocsBlock>
    </div>
  );
};

export default TextExamples;
