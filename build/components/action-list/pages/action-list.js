import React from 'react';
import ActionList, { DIRECTION, ALIGNMENT } from '../ActionList';
import Button from 'buttons/Button';
import Headline, { HEADLINE_SIZE, HEADLINE_TYPE, HEADLINE_COLOR } from 'text/Headline';
import LabelDeprecated, { SIZE as LABEL_SIZE, ICON_COLOR, ICON_TYPE } from 'labels-deprecated/LabelDeprecated';
import Icon from 'icons/Icon';
import Text, { TEXT_TYPE, TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT } from 'text/Text';
import ContrastBox from 'components/ContrastBox';
import DocsBlock from 'components/DocsBlock';
import ActionListHole, { ACTION_LIST_HOLE_SPACING } from '../ActionListHole';
import SeparatorVertical, { SIZE as SEPARATOR_VERTICAL_SIZE } from 'separators/SeparatorVertical';
import ContentBox from 'content-box/ContentBox';
import ContentBoxContent, { ALIGNMENT as CB_ALIGNMENT } from 'content-box/ContentBoxContent';
import Radio from 'form-elements/Radio';

var ActionLists = function ActionLists() {
  return React.createElement("div", null, React.createElement(DocsBlock, {
    info: "Default"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-inverted"
  }, "Later"))))), React.createElement(DocsBlock, {
    info: "To right"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    direction: DIRECTION.TO_RIGHT
  }, React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-inverted"
  }, "Later"))))), React.createElement(DocsBlock, {
    info: "To top"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    toTop: true
  }, React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-inverted"
  }, "Later"))))), React.createElement(DocsBlock, {
    info: "Baseline"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    align: ALIGNMENT.BASELINE
  }, React.createElement(ActionListHole, null, React.createElement(Text, null, "Normale text")), React.createElement(ActionListHole, null, React.createElement(Text, {
    weight: TEXT_WEIGHT.BOLD
  }, "Bold text"))))), React.createElement(DocsBlock, {
    info: "Centered"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    direction: DIRECTION.CENTERED
  }, React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-inverted"
  }, "Later"))))), React.createElement(DocsBlock, {
    info: "Space between"
  }, React.createElement(ActionList, {
    direction: DIRECTION.SPACE_BETWEEN
  }, React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.ANSWER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "0/5"))), React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.COUNTER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "2d: 00h"))), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "secondary",
    size: "small"
  }, "start")))), React.createElement(DocsBlock, {
    info: "Space around"
  }, React.createElement(ActionList, {
    direction: DIRECTION.SPACE_AROUND
  }, React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.ANSWER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "0/5"))), React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.COUNTER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "2d: 00h"))), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "secondary",
    size: "small"
  }, "start")))), React.createElement(DocsBlock, {
    info: "Space evenly"
  }, React.createElement(ActionList, {
    direction: DIRECTION.SPACE_EVENLY
  }, React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.ANSWER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "0/5"))), React.createElement(ActionListHole, null, React.createElement(LabelDeprecated, {
    iconType: ICON_TYPE.COUNTER,
    iconColor: ICON_COLOR.GRAY_SECONDARY,
    secondary: true,
    size: LABEL_SIZE.SMALL
  }, React.createElement(Text, {
    size: TEXT_SIZE.SMALL,
    weight: TEXT_WEIGHT.BOLD,
    color: TEXT_COLOR.GRAY_SECONDARY,
    type: TEXT_TYPE.DIV
  }, "2d: 00h"))), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "secondary",
    size: "small"
  }, "start")))), React.createElement(DocsBlock, {
    info: "No wrap",
    multiContent: [React.createElement(ContrastBox, {
      key: 1,
      narrow: true
    }, React.createElement(ActionList, {
      noWrap: true
    }, React.createElement(ActionListHole, null, React.createElement(Icon, {
      type: ICON_TYPE.MESSAGES,
      size: 24
    })), React.createElement(ActionListHole, null, React.createElement(Text, {
      type: TEXT_TYPE.P,
      color: TEXT_COLOR.WHITE
    }, "Elements in this box will just never wrap")))), React.createElement(ContrastBox, {
      key: 2,
      narrow: true
    }, React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Icon, {
      type: ICON_TYPE.MESSAGES,
      size: 24
    })), React.createElement(ActionListHole, null, React.createElement(Text, {
      type: TEXT_TYPE.P,
      color: TEXT_COLOR.WHITE
    }, "Default behaviour for elements is to wrap"))))]
  }), React.createElement(DocsBlock, {
    info: "Hole - as container"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    asContainer: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "You can position absolute elements here")), React.createElement(ActionListHole, null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "Default behaviour"))))), React.createElement(DocsBlock, {
    info: "Hole - spaced small"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    spacing: ACTION_LIST_HOLE_SPACING.SMALL
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, {
    spacing: ACTION_LIST_HOLE_SPACING.SMALL
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Last hole does not have margin"))))), React.createElement(DocsBlock, {
    info: "Hole - spaced xsmall"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    spacing: ACTION_LIST_HOLE_SPACING.XSMALL
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, {
    spacing: ACTION_LIST_HOLE_SPACING.XSMALL
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Last hole does not have margin"))))), React.createElement(DocsBlock, {
    info: "Hole - no-spacing"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    noSpacing: true
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, {
    noSpacing: true
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Without default margin")), React.createElement(ActionListHole, null, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "Last hole does not have margin"))))), React.createElement(DocsBlock, {
    info: "Hole - space-bellow"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    spaceBellow: true
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "With space bellow")), React.createElement(ActionListHole, {
    spaceBellow: true
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "With space bellow")), React.createElement(ActionListHole, {
    spaceBellow: true
  }, React.createElement(Button, {
    type: "primary-blue",
    size: "small"
  }, "With space bellow"))))), React.createElement(DocsBlock, {
    info: "Hole - grow"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    grow: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This component will grow to fill all remaining size")), React.createElement(ActionListHole, null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This component has default width"))))), React.createElement(DocsBlock, {
    info: "Hole - no-shrink"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    grow: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This component will grow to fill all remaining size")), React.createElement(ActionListHole, {
    noShrink: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This component will not be shrinked even if its width is smaller"))))), React.createElement(DocsBlock, {
    info: "Hole - to-right"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, null, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This is default component")), React.createElement(ActionListHole, {
    toRight: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.P,
    color: TEXT_COLOR.WHITE
  }, "This component will stick to right side"))))), React.createElement(DocsBlock, {
    info: "Hole - to-end"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, null, React.createElement(Headline, {
    size: HEADLINE_SIZE.XXXLARGE,
    type: HEADLINE_TYPE.SPAN,
    color: HEADLINE_COLOR.LIGHT
  }, "$14.95")), React.createElement(ActionListHole, {
    toEnd: true
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "per month"))))), React.createElement(DocsBlock, {
    info: "Hole - stretch"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, null, React.createElement(Headline, {
    size: HEADLINE_SIZE.XXXLARGE,
    type: HEADLINE_TYPE.SPAN,
    color: HEADLINE_COLOR.LIGHT
  }, "$14.95")), React.createElement(ActionListHole, {
    stretch: true
  }, React.createElement(SeparatorVertical, {
    size: SEPARATOR_VERTICAL_SIZE.FULL
  }))))), React.createElement(DocsBlock, {
    info: "Hole - equal width"
  }, React.createElement(ContrastBox, {
    fullWidth: true
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "short text"), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))), React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "and medium text"), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))), React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "and some longer text"), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))), React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "and medium text"), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))), React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "short text"), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))), React.createElement(ActionListHole, {
    equalWidth: true
  }, React.createElement(ContentBox, null, React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Text, {
    type: TEXT_TYPE.SPAN,
    color: TEXT_COLOR.WHITE
  }, "and medium text")), React.createElement(ContentBoxContent, {
    align: CB_ALIGNMENT.CENTER
  }, React.createElement(Radio, null))))))), React.createElement(DocsBlock, {
    info: "Hole - hide overflow"
  }, React.createElement(ActionList, {
    noWrap: true
  }, React.createElement(ActionListHole, {
    hideOverflow: true
  }, React.createElement("div", {
    style: {
      height: '16px',
      lineHeight: '16px'
    }
  }, "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test")))));
};

export default ActionLists;