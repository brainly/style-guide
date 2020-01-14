import React from 'react';
import ActionList, { DIRECTION, ALIGNMENT } from './ActionList';
import ActionListHole from './ActionListHole';
import { shallow } from 'enzyme';
import Button from 'buttons/Button';
describe('ActionList', function () {
  test('render', function () {
    var actionList = shallow(React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Button, {
      type: "primary"
    }, "accept")), React.createElement(ActionListHole, null, React.createElement(Button, {
      type: "primary-inverse"
    }, "accept"))));
    expect(actionList.hasClass('sg-actions-list')).toEqual(true);
  });
  test('to-right', function () {
    var actionList = shallow(React.createElement(ActionList, {
      direction: DIRECTION.TO_RIGHT
    }));
    expect(actionList.hasClass('sg-actions-list--to-right')).toEqual(true);
  });
  test('to-top', function () {
    var actionList = shallow(React.createElement(ActionList, {
      toTop: true
    }));
    expect(actionList.hasClass('sg-actions-list--to-top')).toEqual(true);
  });
  test('baseline', function () {
    var actionList = shallow(React.createElement(ActionList, {
      align: ALIGNMENT.BASELINE
    }));
    expect(actionList.hasClass('sg-actions-list--align-baseline')).toEqual(true);
  });
  test('centered', function () {
    var actionList = shallow(React.createElement(ActionList, {
      direction: DIRECTION.CENTERED
    }));
    expect(actionList.hasClass('sg-actions-list--centered')).toEqual(true);
  });
  test('space-between', function () {
    var actionList = shallow(React.createElement(ActionList, {
      direction: DIRECTION.SPACE_BETWEEN
    }));
    expect(actionList.hasClass('sg-actions-list--space-between')).toEqual(true);
  });
  test('space-around', function () {
    var actionList = shallow(React.createElement(ActionList, {
      direction: DIRECTION.SPACE_AROUND
    }));
    expect(actionList.hasClass('sg-actions-list--space-around')).toEqual(true);
  });
  test('space-evenly', function () {
    var actionList = shallow(React.createElement(ActionList, {
      direction: DIRECTION.SPACE_EVENLY
    }));
    expect(actionList.hasClass('sg-actions-list--space-evenly')).toEqual(true);
  });
  test('no-wrap', function () {
    var actionList = shallow(React.createElement(ActionList, {
      noWrap: true
    }));
    expect(actionList.hasClass('sg-actions-list--no-wrap')).toEqual(true);
  });
});