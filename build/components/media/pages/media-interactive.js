import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Media from '../Media';
import Avatar from 'avatar/Avatar';
import Link, { LINK_COLOR } from 'text/Link';

var MediaExamples = function MediaExamples() {
  var defaultProps = {
    contentArray: [React.createElement(Link, {
      key: 1,
      color: LINK_COLOR.GRAY
    }, "The Goat"), React.createElement("span", {
      key: 2
    }, "Master ")],
    aside: React.createElement(Avatar, null)
  };
  var settings = [{
    name: 'toRight',
    values: Boolean
  }, {
    name: 'focused',
    values: Boolean
  }, {
    name: 'clickable',
    values: Boolean
  }, {
    name: 'noPadding',
    values: Boolean
  }, {
    name: 'transparent',
    values: Boolean
  }, {
    name: 'graySecondaryLight',
    values: Boolean
  }, {
    name: 'small',
    values: Boolean
  }, {
    name: 'spacedBottom',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(Media, defaultProps)), React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(Media, _extends({}, defaultProps, {
    graySecondaryLight: true,
    clickable: true,
    toRight: true
  }))));
};

export default MediaExamples;