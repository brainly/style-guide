import React from 'react';
import TopLayer, { SIZE } from './TopLayer';
import { mount, shallow } from 'enzyme';
test('render', function () {
  var topLayer = shallow(React.createElement(TopLayer, null, "some text"));
  expect(topLayer.hasClass('sg-toplayer')).toEqual(true);
});
test('default size', function () {
  var topLayer = shallow(React.createElement(TopLayer, null, "some text"));
  Object.values(SIZE).forEach(function (size) {
    expect(topLayer.hasClass("sg-toplayer--".concat(size))).toEqual(false);
  });
});
test('check if close button exists', function () {
  var mockCallback = jest.fn();
  var topLayer = mount(React.createElement(TopLayer, {
    onClose: mockCallback
  }));
  expect(topLayer.find('.sg-toplayer__close')).toHaveLength(1);
});
test('check when no close button', function () {
  var topLayer = mount(React.createElement(TopLayer, null));
  expect(topLayer.find('.sg-toplayer__close')).toHaveLength(0);
});
test('click action', function () {
  var mockCallback = jest.fn();
  var topLayer = mount(React.createElement(TopLayer, {
    onClose: mockCallback
  }));
  var button = topLayer.find('.sg-toplayer__close');
  button.simulate('click');
  expect(mockCallback.mock.calls).toHaveLength(1);
});
test('size', function () {
  var size = SIZE.SMALL;
  var topLayer = shallow(React.createElement(TopLayer, {
    size: size
  }, "some text"));
  expect(topLayer.hasClass("sg-toplayer--".concat(size))).toEqual(true);
});
test('testing modifications - all on', function () {
  var topLayer = shallow(React.createElement(TopLayer, {
    fill: true,
    lead: true,
    limitedWidth: true,
    modal: true,
    row: true,
    smallSpaced: true,
    splashScreen: true,
    withBugbox: true
  }, "some text"));
  expect(topLayer.hasClass('sg-toplayer--lead')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--fill')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--modal')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--with-bugbox')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--small-spaced')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--splash-screen')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--limited-width')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--row')).toEqual(true);
});
test('testing modifications - all off', function () {
  var topLayer = shallow(React.createElement(TopLayer, null, "some text"));
  expect(topLayer.hasClass('sg-toplayer--lead')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--fill')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--modal')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--with-bugbox')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--small-spaced')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--splash-screen')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--limited-width')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--row')).toEqual(false);
});
test('testing wrapper', function () {
  var topLayer = shallow(React.createElement(TopLayer, null, "some text"));
  expect(topLayer.find('.sg-toplayer__wrapper')).toHaveLength(1);
});
test('testing wrapper without padding', function () {
  var topLayer = shallow(React.createElement(TopLayer, {
    noPadding: true
  }, "some text"));
  expect(topLayer.find('.sg-toplayer__wrapper').hasClass('sg-toplayer__wrapper--no-padding')).toEqual(true);
});