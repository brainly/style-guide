import React from 'react';
import IconAsButton, { TYPE, ICON_COLOR, SIZE } from './IconAsButton';
import Icon from 'icons/Icon';
import { shallow } from 'enzyme';
test('render', function () {
  var type = TYPE.STAR;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type
  }));
  var icon = iconAsButton.find(Icon);
  expect(iconAsButton.hasClass('sg-icon-as-button')).toEqual(true);
  expect(icon).toHaveLength(1);
  expect(icon.props().type).toEqual(type);
});
test('colors', function () {
  var type = TYPE.ANSWER;
  var color = ICON_COLOR.DARK;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    color: color
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--dark')).toEqual(true);
});
test('size', function () {
  var size = SIZE.SMALL;
  var sizeOfSmallIco = 18;
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    size: size
  }));
  var icon = iconAsButton.find(Icon);
  expect(iconAsButton.hasClass('sg-icon-as-button--small')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfSmallIco);
});
test('default size', function () {
  var sizeOfNormallIco = 26;
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type
  }));
  var icon = iconAsButton.find(Icon);
  expect(iconAsButton.hasClass('sg-icon-as-button--normal')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfNormallIco);
});
test('border', function () {
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    border: true
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--with-border')).toEqual(true);
});
test('transparent', function () {
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    transparent: true
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
});
test('transparent active', function () {
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    transparent: true,
    active: true
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--transparent-active')).toEqual(true);
});
test('action', function () {
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    action: true
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
});
test('action active', function () {
  var type = TYPE.ANSWER;
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    action: true,
    active: true
  }));
  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--action-active')).toEqual(true);
});
test('link as button', function () {
  var type = TYPE.ANSWER;
  var href = 'http://brainly.test';
  var iconAsButton = shallow(React.createElement(IconAsButton, {
    type: type,
    href: href
  }));
  expect(iconAsButton.find('a')).toHaveLength(1);
});