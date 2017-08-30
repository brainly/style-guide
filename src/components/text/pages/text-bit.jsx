import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import TextBit, {SIZE, COLOR} from '../TextBit';

const TextBitExamples = () =>
  <DocsBlock info="Default">
    <TextBit>
      What do you need to know?
    </TextBit>
    <TextBit size={SIZE.LARGE} color={COLOR.ALT}>
      What do you need to know?
    </TextBit>
    <TextBit color={COLOR.GRAY}>
      What do you need to know?
    </TextBit>
    <TextBit color={COLOR.LAVENDER}>
      What do you need to know?
    </TextBit>
    <TextBit size={SIZE.SMALL} notResponsive>
      What do you need to know?
    </TextBit>
    <TextBit notResponsive color={COLOR.WARNING}>
      What do you need to know?
    </TextBit>
    <TextBit size={SIZE.XXLARGE} color={COLOR.DARK} notResponsive>
      What do you need to know?
    </TextBit>
    <ContrastBox>
      <TextBit size={SIZE.XLARGE} color={COLOR.LIGHT} notResponsive>
        We&apos;ve got your back!
      </TextBit>
    </ContrastBox>
  </DocsBlock>;

export default TextBitExamples;
