import React from 'react';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import TextBit, {TEXT_BIT_SIZE, TEXT_BIT_COLOR} from '../TextBit';

const TextBitExamples = () => (
  <DocsBlock info="Default">
    <TextBit>
      This is text bit default
    </TextBit>
    <TextBit size={TEXT_BIT_SIZE.LARGE} color={TEXT_BIT_COLOR.BLUE_SECONDARY}>
      This is text bit large primary blue
    </TextBit>
    <TextBit size={TEXT_BIT_SIZE.SMALL} color={TEXT_BIT_COLOR.GRAY_SECONDARY}>
      This is text bit small secondary gray
    </TextBit>
    <TextBit size={TEXT_BIT_SIZE.LARGE} color={TEXT_BIT_COLOR.BLUE_PRIMARY}>
      This is text bit large primary blue
    </TextBit>
    <TextBit color={TEXT_BIT_COLOR.PEACH_PRIMARY}>
      This is text bit default peach primary
    </TextBit>
    <TextBit size={TEXT_BIT_SIZE.SMALL} color={TEXT_BIT_COLOR.MINT}>
      This is text bit small secondary gray
    </TextBit>
    <ContrastBox>
      <TextBit size={TEXT_BIT_SIZE.LARGE} color={TEXT_BIT_COLOR.WHITE}>
        This is text bit large white
      </TextBit>
    </ContrastBox>
    <TextBit size={TEXT_BIT_SIZE.XLARGE} color={TEXT_BIT_COLOR.BLACK}>
      This is text bit large black
    </TextBit>
  </DocsBlock>
);

export default TextBitExamples;
