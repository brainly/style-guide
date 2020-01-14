import React from 'react';
import ActionListHole, { ACTION_LIST_HOLE_SPACING } from './ActionListHole';
import { shallow } from 'enzyme';
import Button from 'buttons/Button';
describe('<ActionListHole />', function () {
  test('render', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, null, React.createElement(Button, {
      type: "primary",
      size: "small"
    }, "accept")));
    expect(actionListHole.hasClass('sg-actions-list__hole')).toEqual(true);
  });
  test('container', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      asContainer: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--container')).toEqual(true);
  });
  test('no-spacing', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      noSpacing: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--no-spacing')).toEqual(true);
  });
  test('space-bellow', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      spaceBellow: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--space-bellow')).toEqual(true);
  });
  test('no-shrink', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      noShrink: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--no-shrink')).toEqual(true);
  });
  test('grow', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      grow: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--grow')).toEqual(true);
  });
  test('to-end', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      toEnd: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--to-end')).toEqual(true);
  });
  test('to-right', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      toRight: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(true);
  });
  test('to-right', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      toRight: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(true);
  });
  test('spaced-small', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      spacing: ACTION_LIST_HOLE_SPACING.SMALL
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--spaced-small')).toEqual(true);
  });
  test('spaced-xsmall', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      spacing: ACTION_LIST_HOLE_SPACING.XSMALL
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--spaced-xsmall')).toEqual(true);
  });
  test('equal-width', function () {
    var actionListHole = shallow(React.createElement(ActionListHole, {
      equalWidth: true
    }, "test"));
    expect(actionListHole.hasClass('sg-actions-list__hole--equal-width')).toEqual(true);
  });
});