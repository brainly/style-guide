import React from 'react';
import Card, { CARD_PADDING } from '../Card';
import CardHole, { CARD_HOLE_COLOR } from '../CardHole';
import Button from 'buttons/Button';
import Text, { TEXT_COLOR, TEXT_TYPE } from 'text/Text';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Cards = function Cards() {
  var settings = [{
    name: 'padding',
    values: CARD_PADDING
  }, {
    name: 'vertical',
    values: Boolean
  }, {
    name: 'centered',
    values: Boolean
  }, {
    name: 'full',
    values: Boolean
  }, {
    name: 'noBorder',
    values: Boolean
  }, {
    name: 'transparent',
    values: Boolean
  }, {
    name: 'shadow',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Card, {
    padding: CARD_PADDING.SMALL
  }, React.createElement(CardHole, null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.DARK
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus turpis quis dolor suscipit, a mattis nunc posuere. Duis lacinia mauris quis tempus varius. Donec consectetur bibendum pretium.")), React.createElement(CardHole, {
    color: CARD_HOLE_COLOR.GRAY
  }, React.createElement(Button, {
    type: "primary-blue"
  }, "Ask your question")))));
};

export default Cards;