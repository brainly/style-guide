import React from 'react';
import TopLayer, { SIZE } from '../TopLayer';
import Button from 'buttons/Button';
import ContentBox from '../../content-box/ContentBox';
import ContentBoxContent, { SIZE as SPACING_SIZE } from 'content-box/ContentBoxContent';
import Text, { TEXT_WEIGHT } from 'text/Text';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import TextBit, { TEXT_BIT_COLOR, TEXT_BIT_TYPE } from 'text/TextBit';
import List from 'list/List';
import ListItem from 'list/ListItem';
import ListItemIcon from 'list/ListItemIcon';
import Icon, { ICON_COLOR, TYPE as ICON_TYPE } from 'icons/Icon';
import Overlay from 'overlay/Overlay';
var content = React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, React.createElement(TextBit, {
  color: TEXT_BIT_COLOR.BLUE_SECONDARY,
  type: TEXT_BIT_TYPE.H1
}, "The world's largest learning community")), React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, React.createElement(Headline, {
  type: HEADLINE_TYPE.H2
}, "Why join Brainly?"), React.createElement(List, null, React.createElement(ListItem, {
  key: 1
}, React.createElement(ListItemIcon, null, React.createElement(Icon, {
  type: ICON_TYPE.PLUS,
  color: ICON_COLOR.GRAY_SECONDARY,
  size: 18
})), React.createElement(Text, {
  weight: TEXT_WEIGHT.BOLD
}, "ask questions about your assignment")), React.createElement(ListItem, {
  key: 2
}, React.createElement(ListItemIcon, null, React.createElement(Icon, {
  type: ICON_TYPE.PLUS,
  color: ICON_COLOR.GRAY_SECONDARY,
  size: 18
})), React.createElement(Text, {
  weight: TEXT_WEIGHT.BOLD
}, "get answer with explanation")), React.createElement(ListItem, {
  key: 3
}, React.createElement(ListItemIcon, null, React.createElement(Icon, {
  type: ICON_TYPE.PLUS,
  color: ICON_COLOR.GRAY_SECONDARY,
  size: 18
})), React.createElement(Text, {
  key: 3,
  weight: TEXT_WEIGHT.BOLD
}, "find similar questions")))), React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, React.createElement(Button, {
  type: "primary-blue"
}, "Join us")));

var NotLoggedTopLayer = function NotLoggedTopLayer() {
  return React.createElement("html", null, React.createElement("head", null, React.createElement("meta", {
    charSet: "utf-8"
  }), React.createElement("link", {
    rel: "stylesheet",
    href: "../../../style-guide.css"
  })), React.createElement("body", null, React.createElement(Overlay, null, React.createElement(TopLayer, {
    modal: true,
    size: SIZE.MEDIUM,
    lead: true,
    withBugbox: true
  }, content)), React.createElement("script", {
    src: "images/icons.js"
  })));
};

export default NotLoggedTopLayer;