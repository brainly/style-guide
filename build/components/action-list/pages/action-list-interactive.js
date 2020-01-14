import React from 'react';
import ActionList, { DIRECTION, ALIGNMENT } from '../ActionList';
import Button from 'buttons/Button';
import Icon, { ICON_COLOR, TYPE as ICON_TYPE } from 'icons/Icon';
import Text, { TEXT_TYPE, TEXT_COLOR } from 'text/Text';
import ActionListHole from '../ActionListHole';
import DocsActiveBlock from 'components/DocsActiveBlock';

var ActionLists = function ActionLists() {
  var settings = [{
    name: 'noWrap',
    values: Boolean
  }, {
    name: 'toTop',
    values: Boolean
  }, {
    name: 'direction',
    values: DIRECTION
  }, {
    name: 'align',
    values: ALIGNMENT
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary"
  }, "Later")))), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, null, React.createElement(Icon, {
    type: ICON_TYPE.MESSAGES,
    size: 24,
    color: ICON_COLOR.DARK
  })), React.createElement(ActionListHole, null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.DARK
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus turpis quis dolor suscipit, a mattis nunc posuere. Duis lacinia mauris quis tempus varius. Donec consectetur bibendum pretium.")))));
};

export default ActionLists;