import React from 'react';
import TextBit from '../../components/text/TextBit';
import Flex from '../../components/flex/Flex';

const Headline = props => {
  const {marginTop = 's', ...textBitProps} = props;
  return (
    <Flex marginTop={marginTop}>
      <TextBit color="text-black" {...textBitProps} />
    </Flex>
  );
};

export default Headline;
