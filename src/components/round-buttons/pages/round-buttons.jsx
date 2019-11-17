import React from 'react';
// import hex from '../../colors/hex';
import RoundButton, {
  ROUND_BUTTON_SIZE,
  ROUND_BUTTON_ICON_TYPE,
  ROUND_BUTTON_COLOR,
} from '../RoundButton';
import DocsBlock from 'components/DocsBlock';
// import Flex from '../../flex/Flex';
// import Icon, {TYPE as iconTypes} from '../icons/Icon';
// import Text from '../../text/Text';

const RoundButtons = () => {
  return (
    <DocsBlock>
      <DocsBlock info="Round buttons">
        <RoundButton
          size={ROUND_BUTTON_SIZE.SMALL}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.BLACK_BASE_500}
        />
        &nbsp;
        <RoundButton
          size={ROUND_BUTTON_SIZE.MEDIUM}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.BLUE_DARK_700}
        />
        &nbsp;
        <RoundButton
          size={ROUND_BUTTON_SIZE.LARGE}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.MINT_DARK_700}
        />
        &nbsp;
        <RoundButton
          size={ROUND_BUTTON_SIZE.MEDIUM}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.MUSTARD_BASE_500}
        />
        &nbsp;
        <RoundButton
          size={ROUND_BUTTON_SIZE.SMALL}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.PEACH_DARK_700}
        />
      </DocsBlock>
      <DocsBlock info="Round buttons filled">
        <RoundButton
          filled
          size={ROUND_BUTTON_SIZE.SMALL}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.BLACK_BASE_500}
        />
        &nbsp;
        <RoundButton
          filled
          size={ROUND_BUTTON_SIZE.MEDIUM}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.BLUE_DARK_700}
        />
        &nbsp;
        <RoundButton
          filled
          size={ROUND_BUTTON_SIZE.LARGE}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.MINT_DARK_700}
        />
        &nbsp;
        <RoundButton
          filled
          size={ROUND_BUTTON_SIZE.MEDIUM}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.MUSTARD_BASE_500}
        />
        &nbsp;
        <RoundButton
          filled
          size={ROUND_BUTTON_SIZE.SMALL}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.PEACH_DARK_700}
        />
      </DocsBlock>
    </DocsBlock>
  );
};

export default RoundButtons;
