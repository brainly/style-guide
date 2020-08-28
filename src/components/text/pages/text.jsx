import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Text from '../Text';
import Link, {LINK_WEIGHT, LINK_SIZE, LINK_COLOR} from '../Link';
import {
  TEXT_TYPE,
  TEXT_SIZE,
  TEXT_COLOR,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
} from '../textConsts';
import List from '../../list/List';

const text = "We've got your back!";

const textSizesMap = [
  {
    type: 'xxsmall',
    fontSize: '9px',
  },
  {
    type: 'xsmall',
    fontSize: '12px',
  },
  {
    type: 'small',
    fontSize: '15px',
  },
  {
    type: 'medium',
    fontSize: '18px',
  },
  {
    type: 'large',
    fontSize: '24px',
  },
  {
    type: 'xlarge',
    fontSize: '33px',
  },
  {
    type: 'xxlarge',
    fontSize: '45px',
  },
];

function getValues(object, addUndefined = true) {
  return addUndefined
    ? [undefined, ...Object.values(object)]
    : Object.values(object);
}

const TextExamples = () => {
  const sizeVariant = [];
  const colorVariant = [];
  const linkcolorVariant = [];

  getValues(TEXT_SIZE, false).forEach(size => {
    getValues(TEXT_WEIGHT, false).forEach(weight => {
      let itemSize;

      textSizesMap.map(item =>
        item.type === size ? (itemSize = `${item.fontSize}`) : null
      );

      sizeVariant.push(
        <Text
          type={TEXT_TYPE.H2}
          size={size}
          color={TEXT_COLOR.GRAY}
          weight={weight}
          key={size + weight}
        >
          {text} - {size} - {itemSize}
        </Text>
      );
    });
  });

  getValues(TEXT_COLOR, false).forEach(color => {
    if (color === TEXT_COLOR.WHITE) {
      colorVariant.push(
        <ContrastBox key={color}>
          <Text type={TEXT_TYPE.H2} color={color}>
            {text} - {color}
          </Text>
        </ContrastBox>
      );
    } else {
      colorVariant.push(
        <Text key={color} type={TEXT_TYPE.H2} color={color}>
          {text} - {color}
        </Text>
      );
    }
  });

  getValues(LINK_COLOR, false).forEach(color => {
    if (color !== LINK_COLOR.WHITE) {
      linkcolorVariant.push(
        <li key={color}>
          <Link
            href="#"
            color={color}
            weight={LINK_WEIGHT.BOLD}
            size={LINK_SIZE.LARGE}
          >
            link - {color}
          </Link>
        </li>
      );
    }
  });

  return (
    <div>
      <DocsBlock info="Size and weight variant">{sizeVariant}</DocsBlock>
      <DocsBlock info="Color variant">{colorVariant}</DocsBlock>
      <DocsBlock info="Link options">
        <Link href="#" size={LINK_SIZE.LARGE}>
          link / regular/ standard / xlarge / standard
        </Link>
        <br />
        <Link
          href="#"
          weight={LINK_WEIGHT.BOLD}
          size={LINK_SIZE.LARGE}
          color={TEXT_COLOR.MINT_DARK}
          underlined
        >
          link / bold / mint / xlarge / underlined
        </Link>
      </DocsBlock>
      <DocsBlock info="Link color variants">
        <List>
          {linkcolorVariant}
          <li>
            <ContrastBox>
              <Link
                href="#"
                color={LINK_COLOR.WHITE}
                weight={LINK_WEIGHT.BOLD}
                size={LINK_SIZE.LARGE}
              >
                link - {LINK_COLOR.WHITE}
              </Link>
            </ContrastBox>
          </li>
        </List>
      </DocsBlock>
      <DocsBlock info="Alignment examples">
        <Text align={TEXT_ALIGN.LEFT}>Text aligned to left</Text>
        <Text align={TEXT_ALIGN.CENTER}>Text aligned to center</Text>
        <Text align={TEXT_ALIGN.RIGHT}>Text aligned to right</Text>
        <Text align={TEXT_ALIGN.JUSTIFY}>
          This text is justified. This text is justified. This text is
          justified. This text is justified. This text is justified. This text
          is justified. This text is justified. This text is justified. This
          text is justified. This text is justified. This text is justified.
          This text is justified. This text is justified. This text is
          justified. This text is justified. This text is justified. This text
          is justified. This text is justified. This text is justified. This
          text is justified. This text is justified.
        </Text>
      </DocsBlock>
      <DocsBlock info="Transform examples">
        <Text transform={TEXT_TRANSFORM.LOWERCASE}>
          THIS TEXT IS LOWERCASED
        </Text>
        <Text transform={TEXT_TRANSFORM.UPPERCASE}>
          this text is uppercased
        </Text>
        <Text transform={TEXT_TRANSFORM.CAPITALIZE}>this text capitalized</Text>
      </DocsBlock>
      <DocsBlock info="Container and full width">
        <Text asContainer>
          This text is a container - things can be positioned relative to it
        </Text>
        <br />
        <Text full>This text takes full width</Text>
      </DocsBlock>
    </div>
  );
};

export default TextExamples;
