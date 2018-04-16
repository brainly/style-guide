import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Text, {TYPE, SIZE, COLOR, WEIGHT, TEXT_ALIGN, TEXT_TRANSFORM} from '../Text';

const TextExamples = () => (
  <DocsBlock info="Examples">
    <Text>
      This is a default typeface for text everywhere.<br />
      Here is a <Text type={TYPE.SPAN} color={COLOR.GRAY}>gray text</Text>,
      this is a <Text type={TYPE.SPAN} color={COLOR.GRAY_SECONDARY}>gray secondary text</Text>,
      this is a <Text type={TYPE.SPAN} color={COLOR.MINT}>mint text</Text>,
      <Text type={TYPE.SPAN} noWrap>this text will not wrap</Text>,
      <br />
      and an <Text type={TYPE.SPAN} weight={WEIGHT.BOLD}>emphasised text</Text>.
    </Text>
    <Text size={SIZE.STANDOUT}>
      <br />
      This text is a bit bigger than the regular one
    </Text>
    <br />
    <Text size={SIZE.LARGE}>
      This text is large!
    </Text>
    <br />
    <ContrastBox>
      <Text color={COLOR.LIGHT}>
        This text is light
      </Text>
    </ContrastBox>
    <Text size={SIZE.OBSCURE}>
      <br />
      This text is not really intended to be read
      <br />
    </Text>
    <Text size={SIZE.SMALL}>
      <br />
      This text is small but you should be able to read it
      <br />
    </Text>
    <Text size={SIZE.XSMALL}>
      <br />
      This text is xsmall!
      <br />
    </Text>
    <Text size={SIZE.OBSCURE} color={COLOR.FINE_PRINT}>
      <br />
      This is a fine print example
    </Text>
    <Text color={COLOR.MUSTARD}>
      <br />
      This is a warning example
    </Text>
    <Text color={COLOR.PEACH}>
      <br />
      This is a error example
      <br /><br />
    </Text>
    <Text color={COLOR.BLUE}>
      <br />
      This is blue text it should be used only in components not in text context
      <br /><br />
    </Text>
    <ContrastBox>
      <Text size={SIZE.OBSCURE} color={COLOR.FINE_PRINT_LIGHT}>
        This is a very light fine print
      </Text>
    </ContrastBox>
    <br /><br />
    <Text type={TYPE.H1} size={SIZE.HEADLINE} weight={WEIGHT.REGULAR}>
      This is a headline text used on h1 with regular as an option removing bold effect from it
    </Text>
    <br /><br />
    <Text align={TEXT_ALIGN.LEFT}>
      this text is aligned to left
    </Text>
    <Text align={TEXT_ALIGN.CENTER}>
      this text is aligned to center
    </Text>
    <Text align={TEXT_ALIGN.RIGHT}>
      this text is aligned to right
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
    <br /><br />
    <Text transform={TEXT_TRANSFORM.LOWERCASE}>
      THIS TEXT IS LOWERCASED
    </Text>
    <Text transform={TEXT_TRANSFORM.UPPERCASE}>
      this text is uppercased
    </Text>
    <Text transform={TEXT_TRANSFORM.CAPITALIZE}>
      this text capitalized
    </Text>
    <br /><br />
    <Text full>
      this text takes full width
    </Text>
    <Text asContainer>
      this text is a container - things can be positioned relative to it
    </Text>
  </DocsBlock>
);

export default TextExamples;
