import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';
import SeparatorVertical, { SIZE } from '../SeparatorVertical';
import SeparatorHorizontal, { TYPE } from '../SeparatorHorizontal';

var Separators = function Separators() {
  var verticalSettings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'white',
    values: Boolean
  }, {
    name: 'grayDark',
    values: Boolean
  }];
  var horizontalSettings = [{
    name: 'type',
    values: TYPE
  }, {
    name: 'white',
    values: Boolean
  }, {
    name: 'grayDark',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: verticalSettings,
    backgroundColor: "dark",
    contentBefore: React.createElement(Avatar, {
      imgSrc: "https://source.unsplash.com/64x64/?cat"
    }),
    contentAfter: React.createElement(Avatar, {
      size: AVATAR_SIZE.SMALL
    })
  }, React.createElement(SeparatorVertical, null)), React.createElement(DocsActiveBlock, {
    backgroundColor: "dark",
    settings: horizontalSettings,
    componentType: SeparatorHorizontal,
    contentBefore: React.createElement(Avatar, {
      size: AVATAR_SIZE.SMALL
    }),
    contentAfter: React.createElement(Avatar, {
      size: AVATAR_SIZE.SMALL
    }),
    wrapper: React.createElement("div", null)
  }, React.createElement(SeparatorHorizontal, null)));
};

export default Separators;