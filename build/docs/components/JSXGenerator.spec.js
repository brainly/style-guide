import React from 'react';
import Avatar, { SIZE } from 'avatar/Avatar';
import PopupMenu from 'popup-menu/PopupMenu';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import generateJSX from './JSXGenerator';
test('only component', function () {
  var input = React.createElement(Avatar, null);
  var output = '<Avatar />';
  expect(generateJSX(input)).toEqual(output);
});
test('component with bool param', function () {
  var input = React.createElement(Avatar, {
    border: true
  });
  var output = '<Avatar border />';
  expect(generateJSX(input)).toEqual(output);
});
test('component with string param', function () {
  var input = React.createElement(Avatar, {
    imgSrc: "http://image.com/image.jpg"
  });
  var output = '<Avatar imgSrc="http://image.com/image.jpg" />';
  expect(generateJSX(input)).toEqual(output);
});
var sizeLargeString = JSON.stringify(SIZE.LARGE);
test('component with object param', function () {
  var input = React.createElement(Avatar, {
    size: SIZE.LARGE
  });
  var output = "<Avatar size=".concat(sizeLargeString, " />");
  expect(generateJSX(input)).toEqual(output);
});
test('component with multiple params', function () {
  var input = React.createElement(Avatar, {
    size: SIZE.LARGE,
    border: true,
    imgSrc: "http://image.com/image.jpg"
  });
  var output = "<Avatar size=".concat(sizeLargeString, " border imgSrc=\"http://image.com/image.jpg\" />");
  expect(generateJSX(input)).toEqual(output);
});
test('component with array of components param', function () {
  var items = [React.createElement(Avatar, {
    key: 1
  }), React.createElement(Avatar, {
    key: 2,
    imgSrc: "http://image.com/image.jpg"
  })];
  var input = React.createElement(PopupMenu, {
    items: items
  });
  var output = '<PopupMenu items={[<Avatar />, <Avatar imgSrc="http://image.com/image.jpg" />]} />';
  expect(generateJSX(input)).toEqual(output);
});
test('component with children', function () {
  var input = React.createElement(ActionList, null, React.createElement(ActionListHole, null, React.createElement(Avatar, null)), React.createElement(ActionListHole, null, React.createElement(Avatar, null)));
  var output = '<ActionList><ActionListHole><Avatar /></ActionListHole><ActionListHole><Avatar /></ActionListHole></ActionList>';
  expect(generateJSX(input)).toEqual(output);
});
test('not a valid React element', function () {
  var input = React.createElement("h1", null, "Test");
  var output = '<h1>Test</h1>';
  expect(generateJSX(input)).toEqual(output);
});