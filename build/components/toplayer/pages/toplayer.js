import React from 'react';
import TopLayer, { SIZE } from '../TopLayer';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, { SIZE as SPACING_SIZE } from 'content-box/ContentBoxContent';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Button from 'buttons/Button';
import Text, { TEXT_WEIGHT } from 'text/Text';
import Headline, { HEADLINE_TYPE } from 'text/Headline';
import List from 'list/List';
import ListItem from 'list/ListItem';
import ListItemIcon from 'list/ListItemIcon';
import Icon, { ICON_COLOR, TYPE as ICON_TYPE } from 'icons/Icon';

var closeCallback = function closeCallback() {
  return undefined;
};

var content = React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, "heading"), React.createElement(ContentBoxContent, {
  spacedBottom: SPACING_SIZE.LARGE
}, "content"), React.createElement(ContentBoxActions, null, "actions"));

var TopLayers = function TopLayers() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Standard"
  }, React.createElement(TopLayer, null, content)), React.createElement(DocsBlock, {
    info: "Lead"
  }, React.createElement(TopLayer, {
    lead: true
  }, content)), React.createElement(DocsBlock, {
    info: "Small"
  }, React.createElement(TopLayer, {
    size: SIZE.SMALL
  }, content)), React.createElement(DocsBlock, {
    info: "Medium"
  }, React.createElement(TopLayer, {
    size: SIZE.MEDIUM
  }, content)), React.createElement(DocsBlock, {
    info: "Large"
  }, React.createElement(TopLayer, {
    size: SIZE.LARGE
  }, content)), React.createElement(DocsBlock, {
    info: "fill"
  }, React.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      position: 'relative'
    }
  }, React.createElement(TopLayer, {
    fill: true
  }, content))), React.createElement(DocsBlock, {
    info: "Example usage"
  }, React.createElement(TopLayer, {
    size: SIZE.MEDIUM,
    lead: true,
    withBugbox: true,
    onClose: closeCallback
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
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
    type: "primary"
  }, "Join us"))))), React.createElement(DocsBlock, {
    info: "Example usage (on small screen"
  }, React.createElement("iframe", {
    height: "568",
    width: "320",
    src: "components/toplayer/notlogged_toplayer.html"
  })), React.createElement(DocsBlock, {
    info: "Example usage (small spaced on small screen)"
  }, React.createElement("iframe", {
    height: "568",
    width: "320",
    src: "components/toplayer/small_spaced_toplayer.html"
  })), React.createElement(DocsBlock, {
    info: "Example usage (modal)"
  }, React.createElement("iframe", {
    height: "300",
    width: "800",
    src: "components/toplayer/default_toplayer.html"
  })), React.createElement(DocsBlock, {
    info: "Example usage (splash screen)"
  }, React.createElement("iframe", {
    height: "300",
    width: "800",
    src: "components/toplayer/splash_screen_toplayer.html"
  })));
};

export default TopLayers;