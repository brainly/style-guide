// @flow

import React from 'react';
import OriginalText from '../../components/text/Text.vanilla';
import type {TextPropsType as OriginalTextPropsType} from '../../components/text/Text.vanilla';
import Flex from '../../components/flex/Flex';

type TextMarginsType =
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

type TextPropsType = OriginalTextPropsType & {
  marginTop: TextMarginsType,
};

const Text = (props: TextPropsType) => {
  const {marginTop = 's', ...textProps} = props;

  return (
    <Flex marginTop={marginTop}>
      <OriginalText {...textProps} />
    </Flex>
  );
};

export default Text;
