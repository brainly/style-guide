import React from 'react';
import SubjectIcon, { TYPE, SIZE, ICON_COLOR } from './SubjectIcon';
import { shallow } from 'enzyme';
test('render', function () {
  var icon = shallow(React.createElement(SubjectIcon, {
    type: TYPE.ACCOUNTANCY
  }));
  expect(icon.hasClass('sg-subject-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});
test('type passed to xlink:href', function () {
  var type = TYPE.ACCOUNTANCY;
  var icon = shallow(React.createElement(SubjectIcon, {
    type: type
  }));
  var use = icon.find('use');
  expect(use.props().xlinkHref).toEqual("#icon-subject-".concat(type));
});
test('size', function () {
  var size = SIZE.SMALL;
  var type = TYPE.LANGUAGE;
  var icon = shallow(React.createElement(SubjectIcon, {
    type: type,
    size: size
  }));
  expect(icon.hasClass("sg-subject-icon--".concat(size))).toEqual(true);
});
test('mono', function () {
  var type = TYPE.LANGUAGE;
  var icon = shallow(React.createElement(SubjectIcon, {
    type: type,
    monoColor: ICON_COLOR.LIGHT
  }));
  var use = icon.find('use');
  expect(use.props().xlinkHref).toEqual("#icon-subject-mono-".concat(type));
});
test('normal size', function () {
  var type = TYPE.LANGUAGE;
  var icon = shallow(React.createElement(SubjectIcon, {
    type: type
  }));
  expect(icon.hasClass('sg-subject-icon--normal')).toEqual(false);
});