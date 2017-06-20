import React from 'react';
import Bubble from './Bubble';
import {shallow} from 'enzyme';


test('render', () => {
  const bubble = shallow(
    <Bubble>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble')).toEqual(true);
});

test('render top', () => {
  const bubble = shallow(
    <Bubble direction='top'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);
});


test('render top start', () => {
  const bubble = shallow(
    <Bubble direction='top' alignment='start'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(true);
});


test('render right end', () => {
  const bubble = shallow(
    <Bubble direction='right' alignment='end'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--row-end')).toEqual(false);
});


test('render full', () => {
  const bubble = shallow(
    <Bubble direction='left' full={true}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--full')).toEqual(true);
});
