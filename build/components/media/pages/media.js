import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Media from '../Media';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';
import Link, { LINK_COLOR } from 'text/Link';
var defaultProps = {
  contentArray: [React.createElement(Link, {
    key: 1,
    color: LINK_COLOR.GRAY
  }, "The Goat"), React.createElement("span", {
    key: 2
  }, "Master ")],
  aside: React.createElement(Avatar, null)
};

var Medias = function Medias() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Standard"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Media, defaultProps))), React.createElement(DocsBlock, {
    info: "To right"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Media, _extends({}, defaultProps, {
    toRight: true
  })))), React.createElement(DocsBlock, {
    info: "Focused"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(Media, _extends({}, defaultProps, {
    focused: true
  })))), React.createElement(DocsBlock, {
    info: "Gray secondary light - Clickable"
  }, React.createElement(Media, _extends({}, defaultProps, {
    graySecondaryLight: true,
    clickable: true
  }))));
};

export default Medias;