import React from 'react';
import IconAsButton, { TYPE, ICON_COLOR, SIZE } from '../IconAsButton';
import Counter from 'counters/Counter';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';

var IconsAsButtons = function IconsAsButtons() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'color',
    values: ICON_COLOR
  }, {
    name: 'type',
    values: TYPE
  }, {
    name: 'border',
    values: Boolean
  }, {
    name: 'action',
    values: Boolean
  }, {
    name: 'transparent',
    values: Boolean
  }, {
    name: 'active',
    values: Boolean
  }, {
    name: 'href',
    values: String
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(IconAsButton, {
    color: ICON_COLOR.GRAY,
    type: TYPE.ATTACHMENT
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(IconAsButton, {
    type: TYPE.MESSAGES,
    transparent: true,
    overlay: React.createElement(Counter, {
      size: "small"
    }, "1")
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(IconAsButton, {
    transparent: true
  }, React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }))));
};

export default IconsAsButtons;