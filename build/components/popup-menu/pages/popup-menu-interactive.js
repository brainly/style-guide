import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, { ICON_COLOR, TYPE } from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import Avatar from 'avatar/Avatar';
import DocsActiveBlock from 'components/DocsActiveBlock';

var PopupMenus = function PopupMenus() {
  var settings = [{
    name: 'extraSpacing',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(PopupMenu, {
    items: [React.createElement(IconAsButton, {
      key: 1,
      color: ICON_COLOR.GRAY_SECONDARY,
      type: TYPE.NOTIFICATIONS
    }), React.createElement(IconAsButton, {
      key: 2,
      color: ICON_COLOR.GRAY_SECONDARY,
      type: TYPE.MESSAGES
    }), React.createElement(IconAsButton, {
      key: 3,
      color: ICON_COLOR.GRAY_SECONDARY,
      type: TYPE.FRIENDS
    }), React.createElement(Avatar, {
      key: 4,
      imgSrc: "https://source.unsplash.com/64x64/?moose"
    })]
  })), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(PopupMenu, {
    items: [React.createElement(Button, {
      key: 1,
      type: "primary-inverted",
      wide: true
    }, "Log in"), React.createElement(Button, {
      key: 2,
      type: "primary",
      wide: true
    }, "Join now")],
    extraSpacing: true
  })));
};

export default PopupMenus;