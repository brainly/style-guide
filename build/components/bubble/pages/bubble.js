import React from 'react';
import Bubble, { DIRECTION, ALIGNMENT, BUBBLE_COLOR } from '../Bubble';
import DocsBlock from 'components/DocsBlock';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent from 'content-box/ContentBoxContent';
import ContentBoxHeader from 'content-box/ContentBoxHeader';
import ContentBoxActions from 'content-box/ContentBoxActions';
import Button from 'buttons/Button';
import Text from 'text/Text';
import Avatar from 'avatar/Avatar';
import Breadcrumb from 'breadcrumbs/Breadcrumb';
import Link, { LINK_COLOR } from 'text/Link';
import Flex from 'flex/Flex';

var Bubbles = function Bubbles() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Top (middle)",
    additionalInfo: "--top"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")), React.createElement(DocsBlock, {
    info: "Top-start",
    additionalInfo: "--top --row-start"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP,
    alignment: ALIGNMENT.START
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")), React.createElement(DocsBlock, {
    info: "Top-end",
    additionalInfo: "--top --row-end"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP,
    alignment: ALIGNMENT.END
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")), React.createElement(DocsBlock, {
    info: "Bottom-start",
    additionalInfo: "--bottom --row-start (--/--row-end)"
  }, React.createElement(Bubble, {
    direction: DIRECTION.BOTTOM,
    alignment: ALIGNMENT.START
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")), React.createElement(DocsBlock, {
    info: "Left-start",
    additionalInfo: "--left --column-start (--/--column-end)"
  }, React.createElement("div", {
    style: {
      width: '300px'
    }
  }, React.createElement(Bubble, {
    direction: DIRECTION.LEFT,
    alignment: ALIGNMENT.START
  }, "Hi there!! Just wondering if you have any problems with your school work. We've got plenty of people who can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway, you can just go ahead and try for yourself."))), React.createElement(DocsBlock, {
    info: "Right-start",
    additionalInfo: "--right --column-start (--/--column-end)"
  }, React.createElement("div", {
    style: {
      width: '300px'
    }
  }, React.createElement(Bubble, {
    direction: DIRECTION.RIGHT,
    alignment: ALIGNMENT.START
  }, "Hi there!! Just wondering if you have any problems with your school work. We've got plenty of people who can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway, you can just go ahead and try for yourself."))), React.createElement(DocsBlock, {
    info: "Full + left",
    additionalInfo: "--full (makes 100% height) --top"
  }, React.createElement("div", {
    style: {
      height: '200px'
    }
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP,
    full: true
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work."))), React.createElement(DocsBlock, {
    info: "Example usage",
    additionalInfo: "--top"
  }, React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxHeader, null, React.createElement(Flex, {
    marginRight: "s"
  }, React.createElement(Avatar, {
    imgSrc: "https://source.unsplash.com/64x64/?cat"
  })), React.createElement(Breadcrumb, {
    elements: [React.createElement(Link, {
      key: 1,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "Katie"), React.createElement(Link, {
      key: 2,
      href: "#",
      color: LINK_COLOR.GRAY
    }, "a few seconds ago")]
  })), React.createElement(ContentBoxContent, null, React.createElement(Text, null, "Hi there!! Just wondering if you have any problems with your school work. We've got plenty of people who can help you here :) Also, my last question was answered in less than 10 minutes :D Anyway, you can just go ahead and try for yourself.")), React.createElement(ContentBoxActions, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Join us!"))))), Object.values(BUBBLE_COLOR).map(function (color) {
    return React.createElement(DocsBlock, {
      key: color,
      info: "color ".concat(color)
    }, React.createElement(Bubble, {
      direction: DIRECTION.LEFT,
      color: color
    }, color, React.createElement("br", null)));
  }), React.createElement(DocsBlock, {
    info: "Without shadow",
    additionalInfo: "--no-shadow"
  }, React.createElement(Bubble, {
    direction: DIRECTION.LEFT,
    color: BUBBLE_COLOR.MINT_SECONDARY,
    noShadow: true
  }, "Hi there!!", React.createElement("br", null), "Just wondering if you have any problems with your school work.")));
};

export default Bubbles;