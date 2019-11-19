import React from 'react';
import RoundButton, {
  ROUND_BUTTON_SIZE,
  ROUND_BUTTON_ICON_TYPE,
  ROUND_BUTTON_COLOR,
} from '../RoundButton';
import DocsActiveBlock from 'components/DocsActiveBlock';

const RoundButtons = () => {
  const roundButtonsSettings = [
    {
      name: 'size',
      values: ROUND_BUTTON_SIZE,
    },
    {
      name: 'filled',
      values: Boolean,
    },
    {
      name: 'color',
      values: ROUND_BUTTON_COLOR,
    },
    {
      name: 'icon',
      values: ROUND_BUTTON_ICON_TYPE,
      required: true,
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={roundButtonsSettings}>
        <RoundButton
          size={ROUND_BUTTON_SIZE.SMALL}
          iconType={ROUND_BUTTON_ICON_TYPE.ANSWER}
          color={ROUND_BUTTON_COLOR.BLACK}
        />
      </DocsActiveBlock>
    </div>
  );
};

export default RoundButtons;
