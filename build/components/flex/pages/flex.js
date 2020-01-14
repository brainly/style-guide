import React from 'react';
import DocsBlock from 'components/DocsBlock';
import Flex, { FLEX_DIRECTION, FLEX_JUSTIFY_VALUES, FLEX_MARGINS } from '../Flex';
import Text, { TEXT_SIZE } from '../../text/Text';
import Link, { LINK_SIZE } from '../../text/Link';
import Box, { COLOR } from '../../box/Box';
import SeparatorHorizontal, { TYPE } from '../../separators/SeparatorHorizontal';

var Flexbox = function Flexbox() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Spacing utility"
  }, React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN,
    marginBottom: FLEX_MARGINS.MEDIUM,
    fullWidth: true
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "Use multiples of 8 to define dimensions, padding, and margin of both block and inline elements. We add one exeption to the scale which is 4px - this is value added to create small padding and margins for little components or denser parts of the site. Presented basic setup of spacings is used to create other utilities, like margins, paddings or icons sizes.")), React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    wrap: true
  }, React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xxs - 4px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--xxs"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xs - 8px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--s"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "s - 16px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--m"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "m - 24px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--m"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "l - 40px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--l"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xl - 64px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--xl"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xxl - 104px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--xxl"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xxxl - 168px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--xxxl"
  })), React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "xxxxl - 272px"), React.createElement("div", {
    className: "doc-spacing doc-spacing--xxxxl"
  })))), React.createElement(DocsBlock, {
    info: "Flexbox introduction"
  }, React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN,
    marginBottom: FLEX_MARGINS.MEDIUM,
    fullWidth: true
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "Flex component can be used to apply flexbox behaviors into the layout. Before using these utilities, you should be familiar with", ' ', React.createElement(Link, {
    size: LINK_SIZE.SMALL,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
  }, "CSS3 Flexible Box spec")), React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "To justify your elements you can use following options: CENTER, FLEX_START, FLEX_END, BASELINE, SPACE_BETWEEN, SPACE_AROUND, SPACE_EVENLY, STRETCH"), React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "To align your elements you can use following options: CENTER, FLEX_START, FLEX_END, BASELINE,STRETCH"), React.createElement(Text, {
    size: TEXT_SIZE.SMALL
  }, "There are avalaible options of margin, marginTop, marginRight, marginBottom, marginLeft with all the presented spacing values.")), React.createElement(SeparatorHorizontal, {
    type: TYPE.SPACED
  })), React.createElement(DocsBlock, {
    info: "Examples of flex column or row"
  }, React.createElement(Flex, {
    direction: FLEX_DIRECTION.COLUMN,
    marginBottom: FLEX_MARGINS.MEDIUM,
    fullWidth: true
  }, React.createElement(Flex, {
    marginBottom: FLEX_MARGINS.MEDIUM
  }, React.createElement(Box, {
    color: COLOR.BLUE
  }, "I am a flex element with margin bottom M")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "I am a second flex element in the column"))), React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    fullWidth: true
  }, React.createElement(Flex, {
    marginRight: FLEX_MARGINS.MEDIUM
  }, React.createElement(Box, {
    color: COLOR.BLUE
  }, "I am a flex element with margin right M")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "I am a second flex element in the row")))), React.createElement(DocsBlock, {
    info: "Examples of flex justify and align"
  }, React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    marginBottom: FLEX_MARGINS.MEDIUM,
    justifyContent: FLEX_JUSTIFY_VALUES.SPACE_BETWEEN,
    fullWidth: true
  }, React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE
  }, "space between")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "space between"))), React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    marginBottom: FLEX_MARGINS.MEDIUM,
    justifyContent: FLEX_JUSTIFY_VALUES.SPACE_AROUND,
    fullWidth: true
  }, React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE
  }, "space around")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "space around"))), React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    marginBottom: FLEX_MARGINS.MEDIUM,
    justifyContent: FLEX_JUSTIFY_VALUES.FLEX_START,
    fullWidth: true
  }, React.createElement(Flex, {
    marginRight: FLEX_MARGINS.MEDIUM
  }, React.createElement(Box, {
    color: COLOR.BLUE
  }, "flex start")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "flex start"))), React.createElement(Flex, {
    direction: FLEX_DIRECTION.ROW,
    marginBottom: FLEX_MARGINS.MEDIUM,
    justifyContent: FLEX_JUSTIFY_VALUES.FLEX_END,
    fullWidth: true
  }, React.createElement(Flex, {
    marginRight: FLEX_MARGINS.MEDIUM
  }, React.createElement(Box, {
    color: COLOR.BLUE
  }, "flex end")), React.createElement(Flex, null, React.createElement(Box, {
    color: COLOR.BLUE_SECONDARY
  }, "flex end")))));
};

export default Flexbox;