import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import RwdHelper, { TYPE } from '../RwdHelper';
import Icon, { TYPE as ICON_TYPE, ICON_COLOR } from 'icons/Icon';

var Helpers = function Helpers() {
  var settings = [{
    name: 'hide',
    values: TYPE,
    required: true
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(RwdHelper, {
    hide: TYPE.MEDIUM_DOWN
  }, React.createElement("span", null, React.createElement(Icon, {
    type: ICON_TYPE.HEART,
    color: ICON_COLOR.PEACH,
    size: 32
  })))), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(RwdHelper, {
    hide: TYPE.MEDIUM_UP
  }, React.createElement("span", null, React.createElement(Icon, {
    type: ICON_TYPE.EQUATION,
    color: ICON_COLOR.LAVENDER,
    size: 32
  })))));
};

export default Helpers;