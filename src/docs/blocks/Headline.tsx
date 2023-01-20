import React from 'react';
import TextBit from '../../components/text/TextBit';
import type {TextBitPropsType} from '../../components/text/TextBit';
import Flex from '../../components/flex/Flex';

type HeadlineMarginsType =
  | 'none'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';
type HeadlinePropsType = TextBitPropsType & {
  marginTop: HeadlineMarginsType;
};

const Headline = (props: HeadlinePropsType) => {
  const {marginTop = 's', ...textBitProps} = props;

  return (
    <Flex marginTop={marginTop}>
      <TextBit color="text-black" {...textBitProps} />
    </Flex>
  );
};

export default Headline;
