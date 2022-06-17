import React from 'react';
import OriginalText from '../../components/text/Text';
import Flex from '../../components/flex/Flex';

const Text = props => {
  const {marginTop = 's', ...textProps} = props;
  return (
    <Flex marginTop={marginTop}>
      <OriginalText {...textProps} />
    </Flex>
  );
};

export default Text;
