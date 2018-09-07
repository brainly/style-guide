import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import TextBit, {SIZE, COLOR} from '../TextBit';

const TextBitExamples = () => (
  <DocsBlock info="Default">
    <TextBit>
      This is text bit default
    </TextBit>
    <TextBit size={SIZE.LARGE} color={COLOR.BLUE_SECONDARY}>
      This is text bit large primary blue
    </TextBit>
    <TextBit size={SIZE.SMALL} color={COLOR.GRAY_SECONDARY}>
      This is text bit small secondary gray
    </TextBit>
    <TextBit color={COLOR.PEACH_PRIMARY}>
      This is text bit default peach primary
    </TextBit>
    <ContrastBox>
      <TextBit size={SIZE.LARGE} color={COLOR.WHITE}>
        This is text bit large white
      </TextBit>
    </ContrastBox>
    <TextBit size={SIZE.XLARGE} color={COLOR.BLACK}>
      This is text bit large black
    </TextBit>
  </DocsBlock>
);

export default TextBitExamples;
