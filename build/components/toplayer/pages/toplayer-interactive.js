import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import TopLayer, { SIZE } from '../TopLayer';
import ContentBox from 'content-box/ContentBox';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxContent, { SIZE as SPACING_SIZE } from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Button from 'buttons/Button';
import Text, { TEXT_WEIGHT } from 'text/Text';
import TextBit, { TEXT_BIT_COLOR, TEXT_BIT_TYPE } from 'text/TextBit';
import List from 'list/List';
import ListItem from 'list/ListItem';
import ListItemIcon from 'list/ListItemIcon';
import Icon, { ICON_COLOR, TYPE as ICON_TYPE } from 'icons/Icon';
import Headline, { HEADLINE_TYPE } from 'text/Headline';

var Toplayers = function Toplayers() {
  var settings = [{
    name: 'size',
    values: SIZE
  }, {
    name: 'lead',
    values: Boolean
  }, {
    name: 'fill',
    values: Boolean
  }, {
    name: 'modal',
    values: Boolean
  }, {
    name: 'withBugbox',
    values: Boolean
  }, {
    name: 'smallSpaced',
    values: Boolean
  }, {
    name: 'splashScreen',
    values: Boolean
  }, {
    name: 'limitedWidth',
    values: Boolean
  }, {
    name: 'row',
    values: Boolean
  }, {
    name: 'transparent',
    values: Boolean
  }, {
    name: 'noPadding',
    values: Boolean
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(TopLayer, null, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, {
    spacedBottom: SPACING_SIZE.LARGE
  }, "heading"), React.createElement(ContentBoxContent, {
    spacedBottom: SPACING_SIZE.LARGE
  }, "content"), React.createElement(ContentBoxActions, null, "actions")))), React.createElement(DocsActiveBlock, {
    settings: settings
  }, React.createElement(TopLayer, {
    size: SIZE.MEDIUM,
    lead: true,
    withBugbox: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    spacedBottom: SPACING_SIZE.LARGE
  }, React.createElement(TextBit, {
    color: TEXT_BIT_COLOR.BLUE_SECONDARY,
    type: TEXT_BIT_TYPE.H1
  }, "The world's largest learning community"), React.createElement(Headline, {
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
    type: "primary"
  }, "Join us"))))));
};

export default Toplayers;