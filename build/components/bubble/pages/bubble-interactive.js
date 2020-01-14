import React from 'react';
import Bubble, { DIRECTION, ALIGNMENT, BUBBLE_COLOR } from '../Bubble';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Button from 'buttons/Button';
import Breadcrumb from 'breadcrumbs/Breadcrumb';
import Avatar from 'avatar/Avatar';
import Text from 'text/Text';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import Link, { LINK_COLOR } from 'text/Link';
import DocsActiveBlock from 'components/DocsActiveBlock';

var Bubbles = function Bubbles() {
  var settings = [{
    name: 'direction',
    values: DIRECTION,
    required: true
  }, {
    name: 'alignment',
    values: ALIGNMENT
  }, {
    name: 'full',
    values: Boolean
  }, {
    name: 'noShadow',
    values: Boolean
  }, {
    name: 'color',
    values: BUBBLE_COLOR
  }];
  return React.createElement("div", null, React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")), React.createElement(DocsActiveBlock, {
    settings: settings,
    backgroundColor: "dark"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?parrot"
  })), React.createElement(ActionListHole, null, React.createElement(Breadcrumb, {
    elements: [React.createElement(Link, {
      key: 1,
      color: LINK_COLOR.GRAY
    }, "Katie"), React.createElement(Link, {
      key: 2,
      color: LINK_COLOR.GRAY
    }, "a few seconds ago")]
  })))), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Hi there!! Just wondering if you have any problems with your school work. We've got plenty of people who can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway, you can just go ahead and try for yourself.")), React.createElement(ContentBoxActions, null, React.createElement(Button, {
    type: "primary"
  }, "Join us!"))))));
};

export default Bubbles;