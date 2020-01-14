import React from 'react';
import RwdHelper, { TYPE } from '../RwdHelper';
import DocsBlock from 'components/DocsBlock';
import Icon, { TYPE as icoTypes, ICON_COLOR } from 'icons/Icon';

var RwdHelpers = function RwdHelpers() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Top (middle)",
    additionalInfo: "--top"
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement(RwdHelper, {
    hide: TYPE.SMALL_ONLY
  }, React.createElement("span", null, React.createElement(Icon, {
    type: icoTypes.HEART,
    color: ICON_COLOR.PEACH,
    size: 14
  }))), "- hidden for small screens"), React.createElement("li", null, React.createElement(RwdHelper, {
    hide: TYPE.MEDIUM_ONLY
  }, React.createElement("span", null, React.createElement(Icon, {
    type: icoTypes.HEART,
    color: ICON_COLOR.PEACH,
    size: 14
  }))), "- hidden for medium screens"), React.createElement("li", null, React.createElement(RwdHelper, {
    hide: TYPE.MEDIUM_DOWN
  }, React.createElement("span", null, React.createElement(Icon, {
    type: icoTypes.HEART,
    color: ICON_COLOR.PEACH,
    size: 14
  }))), "- hidden for small and medium screens"), React.createElement("li", null, React.createElement(RwdHelper, {
    hide: TYPE.MEDIUM_UP
  }, React.createElement("span", null, React.createElement(Icon, {
    type: icoTypes.HEART,
    color: ICON_COLOR.PEACH,
    size: 14
  }))), "- hidden for medium and large screens"), React.createElement("li", null, React.createElement(RwdHelper, {
    hide: TYPE.LARGE_ONLY
  }, React.createElement("span", null, React.createElement(Icon, {
    type: icoTypes.HEART,
    color: ICON_COLOR.PEACH,
    size: 14
  }))), "- hidden for large screens"))));
};

export default RwdHelpers;