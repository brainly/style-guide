import React from 'react';
import Bubble, { DIRECTION, ALIGNMENT } from './Bubble';
import { shallow } from 'enzyme';
test('render', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble')).toEqual(true);
});
test('render top', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.TOP
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--top')).toEqual(true); // default position of bubble is center

  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
});
test('render top start', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.TOP,
    alignment: ALIGNMENT.START
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(true);
});
test('render right', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.RIGHT
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--right')).toEqual(true); // default position of bubble is center (for left/right direction we use column alignment)

  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
});
test('render right end', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.RIGHT,
    alignment: ALIGNMENT.END
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(true); // direction right/left use column alignment, no row alignment

  expect(bubble.hasClass('sg-bubble--row-end')).toEqual(false);
});
test('render full', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.LEFT,
    full: true
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--full')).toEqual(true);
});
test('renders without shadow', function () {
  var bubble = shallow(React.createElement(Bubble, {
    direction: DIRECTION.LEFT,
    noShadow: true
  }, "Some text"));
  expect(bubble.hasClass('sg-bubble--no-shadow')).toEqual(true);
});