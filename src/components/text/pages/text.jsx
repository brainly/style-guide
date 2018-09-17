import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Text, {TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT, TEXT_ALIGN, TEXT_TRANSFORM} from '../Text';

const text = 'We\'ve got your back!';

function getValues(object, addUndefined = true) {
  return addUndefined ? [undefined, ...Object.values(object)] : Object.values(object);
}

const TextExamples = () => {
  const SizeVariant = [];
  const colorVariant = [];

  getValues(TEXT_SIZE, false).forEach(size => {
    getValues(TEXT_WEIGHT, false).forEach(weight => {
      SizeVariant.push(
        <Text type={TEXT_TYPE.H2} size={size} color={TEXT_COLOR.GRAY} weight={weight}>
          {text} - {size}
        </Text>
      );
    });
  });
  getValues(TEXT_COLOR, false).forEach(color => {
    if (color === TEXT_COLOR.WHITE) {
      colorVariant.push(
        <ContrastBox>
          <Text type={TEXT_TYPE.H2} color={color}>
            {text} - {color}
          </Text>
        </ContrastBox>
      );
    } else {
      colorVariant.push(
        <Text type={TEXT_TYPE.H2} color={color}>
          {text} - {color}
        </Text>
      );
    }

  });
  return (
    <div>
      <DocsBlock info="Size and weight variant">
        {SizeVariant}
      </DocsBlock>
      <DocsBlock info="Color variant">
        {colorVariant}
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
