import React from 'react';
import Avatar, {SIZE} from 'avatar/Avatar';
import PopupMenu from 'popup-menu/PopupMenu';
import ActionList from 'action-list/ActionList';
import ActionListHole from 'action-list/ActionListHole';
import generateJSX from './JSXGenerator';

test('only component', () => {
  const input = <Avatar />;
  const output = '<Avatar />';

  expect(generateJSX(input)).toEqual(output);
});

test('component with bool param', () => {
  const input = <Avatar border={true}/>;
  const output = '<Avatar border={true} />';

  expect(generateJSX(input)).toEqual(output);
});

test('component with string param', () => {
  const input = <Avatar imgSrc="http://image.com/image.jpg"/>;
  const output = '<Avatar imgSrc="http://image.com/image.jpg" />';

  expect(generateJSX(input)).toEqual(output);
});

const sizeLargeString = JSON.stringify(SIZE.LARGE);

test('component with object param', () => {
  const input = <Avatar size={SIZE.LARGE}/>;
  const output = `<Avatar size={${sizeLargeString}} />`;

  expect(generateJSX(input)).toEqual(output);
});

test('component with multiple params', () => {
  const input = <Avatar size={SIZE.LARGE} border={true} imgSrc="http://image.com/image.jpg"/>;
  const output = `<Avatar size={${sizeLargeString}} border={true} imgSrc="http://image.com/image.jpg" />`;

  expect(generateJSX(input)).toEqual(output);
});

const items = [<Avatar/>, <Avatar imgSrc="http://image.com/image.jpg" />];

test('component with array of components param', () => {
  const input = <PopupMenu items={items}/>;
  const output =
    '<PopupMenu items={[<Avatar />, <Avatar imgSrc="http://image.com/image.jpg" />]} />';

  expect(generateJSX(input)).toEqual(output);
});

xtest('component with children', () => {
  const input = <ActionList>
    <ActionListHole>
      <Avatar />
    </ActionListHole>
    <ActionListHole>
      <Avatar />
    </ActionListHole>
  </ActionList>;

  const output =
    '<ActionList><ActionListHole><Avatar /></ActionListHole><ActionListHole><Avatar /></ActionListHole></ActionList>';

  expect(generateJSX(input)).toEqual(output);
});

test('not a valid React element', () => {
  const input = <h1>Test</h1>;
  const output =
    '<h1>Test</h1>';

  expect(generateJSX(input)).toEqual(output);
});
