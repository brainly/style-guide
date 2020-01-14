import React from 'react';
import Header from '../Header';
import HeaderContainer from '../HeaderContainer';
import HeaderContent from '../HeaderContent';
import HeaderLeft from '../HeaderLeft';
import HeaderMiddle from '../HeaderMiddle';
import HeaderRight from '../HeaderRight';
import HomeButton from '../../home-button/HomeButton';
import Search, { COLOR as SEARCH_COLOR } from 'search/Search';
import RWDHelper, { TYPE as RWD_TYPE } from 'helpers/RwdHelper';
import IconAsButton, { TYPE as ICON_TYPE, ICON_COLOR } from 'icon-as-button/IconAsButton';
import Button from 'buttons/Button';
import Counter from 'counters/Counter';
import Avatar, { SIZE as AVATAR_SIZE } from 'avatar/Avatar';

var SmallDeviceExample = function SmallDeviceExample() {
  return React.createElement("html", {
    lang: "en"
  }, React.createElement("head", null, React.createElement("link", {
    rel: "stylesheet",
    href: "../../../style-guide.css"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "../../css/main.css"
  })), React.createElement("body", {
    className: "docs--header-small-example"
  }, React.createElement("script", {
    src: "images/icons.js"
  }), React.createElement(Header, {
    fixed: true
  }, React.createElement(HeaderContainer, null, React.createElement(HeaderContent, null, React.createElement(HeaderLeft, null, React.createElement(HomeButton, null)), React.createElement(HeaderMiddle, null, React.createElement(Search, {
    placeholder: "Find all the answers...",
    fullWidth: true,
    color: SEARCH_COLOR.LIGHT,
    adaptiveIco: true
  })), React.createElement(RWDHelper, {
    hide: RWD_TYPE.SMALL_ONLY
  }, React.createElement("div", null, React.createElement(HeaderRight, null, React.createElement(Button, {
    type: "primary",
    size: "small"
  }, "Register"), React.createElement(IconAsButton, {
    type: ICON_TYPE.MESSAGES,
    transparent: true,
    color: ICON_COLOR.LIGHT,
    overlay: React.createElement(Counter, {
      size: "small"
    }, "1")
  }), React.createElement(IconAsButton, {
    transparent: true
  }, React.createElement(Avatar, {
    size: AVATAR_SIZE.SMALL
  }))))), React.createElement(RWDHelper, {
    hide: RWD_TYPE.MEDIUM_UP
  }, React.createElement("div", null, React.createElement(HeaderRight, null, React.createElement(IconAsButton, {
    type: ICON_TYPE.MENU,
    color: ICON_COLOR.LIGHT
  })))))))));
};

export default SmallDeviceExample;