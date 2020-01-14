import React from 'react';
import Box, { COLOR, PADDING, CLOSE_ICON_COLOR } from './Box';
import Icon from '../icons/Icon';
import { shallow } from 'enzyme';
test('render', function () {
  var box = shallow(React.createElement(Box, null, "some text"));
  expect(box.hasClass('sg-box')).toEqual(true);
});
test('colors', function () {
  var color = COLOR.LAVENDER;
  var box = shallow(React.createElement(Box, {
    color: color
  }, "some text"));
  expect(box.hasClass("sg-box--".concat(color))).toEqual(true);
});
test('shadow', function () {
  var boxComponent = React.createElement(Box, {
    shadow: true
  }, "some text");
  var box = shallow(boxComponent);
  expect(boxComponent.props.shadow).toEqual(true);
  expect(box.hasClass('sg-box--with-shadow')).toEqual(true);
});
test('border', function () {
  var boxComponent = React.createElement(Box, {
    border: true
  }, "some text");
  var box = shallow(boxComponent);
  expect(boxComponent.props.border).toEqual(true);
  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});
test('border', function () {
  var boxComponent = React.createElement(Box, {
    border: false
  }, "some text");
  var box = shallow(boxComponent);
  expect(boxComponent.props.border).toEqual(false);
  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});
test('no colors => default border on ', function () {
  var boxComponent = React.createElement(Box, null, "some text");
  var box = shallow(boxComponent);
  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});
test('colors => default border off', function () {
  var color = COLOR.LAVENDER;
  var box = shallow(React.createElement(Box, {
    color: color
  }, "some text"));
  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});
test('default padding', function () {
  var box = shallow(React.createElement(Box, null, "some text"));
  expect(box.hasClass("sg-box--".concat(PADDING.LARGE))).toEqual(false);
  expect(box.hasClass("sg-box--".concat(PADDING.SMALL))).toEqual(false);
  expect(box.hasClass("sg-box--".concat(PADDING.XSMALL))).toEqual(false);
  expect(box.hasClass("sg-box--".concat(PADDING.XXSMALL))).toEqual(false);
});
test('small padding', function () {
  var padding = PADDING.SMALL;
  var box = shallow(React.createElement(Box, {
    padding: padding
  }, "some text"));
  expect(box.hasClass('sg-box--small-padding')).toEqual(true);
});
test('xsmall padding', function () {
  var padding = PADDING.XSMALL;
  var box = shallow(React.createElement(Box, {
    padding: padding
  }, "some text"));
  expect(box.hasClass('sg-box--xsmall-padding')).toEqual(true);
});
test('xxsmall padding', function () {
  var padding = PADDING.XXSMALL;
  var box = shallow(React.createElement(Box, {
    padding: padding
  }, "some text"));
  expect(box.hasClass('sg-box--xxsmall-padding')).toEqual(true);
});
test('large padding', function () {
  var padding = PADDING.LARGE;
  var box = shallow(React.createElement(Box, {
    padding: padding
  }, "some text"));
  expect(box.hasClass('sg-box--large-padding')).toEqual(true);
});
test('no min height', function () {
  var box = shallow(React.createElement(Box, {
    noMinHeight: true
  }, "some text"));
  expect(box.hasClass('sg-box--no-min-height')).toEqual(true);
});
test('full width', function () {
  var box = shallow(React.createElement(Box, {
    full: true
  }, "some text"));
  expect(box.hasClass('sg-box--full')).toEqual(true);
});
test('close button', function () {
  var mockCallback = jest.fn();
  var box = shallow(React.createElement(Box, {
    onClose: mockCallback
  }));
  expect(box.find('.sg-box__close')).toHaveLength(1);
});
test('light close button', function () {
  var mockCallback = jest.fn();
  var box = shallow(React.createElement(Box, {
    closeIconColor: CLOSE_ICON_COLOR.LIGHT,
    onClose: mockCallback
  }));
  expect(box.find('.sg-box__close')).toHaveLength(1);
  expect(box.find('div').find(Icon)).toHaveLength(1);
  expect(box.find('div').find(Icon).props().color).toEqual('light');
});
test('clicking on close button calls onClose', function () {
  var mockCallback = jest.fn();
  var box = shallow(React.createElement(Box, {
    onClose: mockCallback
  }));
  var closeDivNode = box.find('.sg-box__close');
  closeDivNode.simulate('click');
  expect(mockCallback).toHaveBeenCalled();
});
test('image container', function () {
  var imgSrc = 'https://source.unsplash.com/100x100/?man';
  var box = shallow(React.createElement(Box, {
    imgSrc: imgSrc
  }));
  expect(box.hasClass('sg-box--image-wrapper')).toEqual(true);
  expect(box.find('.sg-box__image')).toHaveLength(1);
  expect(box.find('.sg-box__hole')).toHaveLength(0);
});
test('standard box, no image container', function () {
  var box = shallow(React.createElement(Box, null, "some text"));
  expect(box.hasClass('sg-box--image-wrapper')).toEqual(false);
  expect(box.find('.sg-box__image')).toHaveLength(0);
  expect(box.find('.sg-box__hole')).toHaveLength(1);
});