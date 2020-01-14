import React from 'react';
import PopupMenu from '../PopupMenu';
import IconAsButton, { ICON_COLOR, TYPE } from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';
import Avatar from 'avatar/Avatar';
var items = ['one', 'two', 'three'];

var PopupsMenus = function PopupsMenus() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(PopupMenu, {
    items: items
  })), React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(PopupMenu, {
    items: items
  }))), React.createElement(DocsBlock, {
    info: "Example usage 1"
  }, React.createElement(ContrastBox, {
    fullWidth: true
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
  }))), React.createElement(DocsBlock, {
    info: "elements-spaced"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(PopupMenu, {
    items: [React.createElement(Button, {
      key: 1,
      type: "primary-inverted",
      size: "small"
    }, "Log in"), React.createElement(Button, {
      key: 2,
      type: "primary",
      size: "small"
    }, "Join now")],
    extraSpacing: true
  }))));
};

export default PopupsMenus;