import React from 'react';
import RoundButton, { ROUND_BUTTON_SIZE, ROUND_BUTTON_ICON_TYPE, ROUND_BUTTON_COLOR } from '../RoundButton';
import DocsActiveBlock from 'components/DocsActiveBlock';

var RoundButtons = function RoundButtons() {
  var roundButtonsSettings = [{
    name: 'size',
    values: ROUND_BUTTON_SIZE
  }, {
    name: 'filled',
    values: Boolean
  }, {
    name: 'color',
    values: ROUND_BUTTON_COLOR
  }, {
    name: 'icon',
    values: ROUND_BUTTON_ICON_TYPE,
    required: true
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: roundButtonsSettings
  }, React.createElement(RoundButton, {
    size: ROUND_BUTTON_SIZE.SMALL,
    iconType: ROUND_BUTTON_ICON_TYPE.ANSWER,
    color: ROUND_BUTTON_COLOR.BLACK
  })));
};

export default RoundButtons;