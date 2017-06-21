import React from 'react';
import Bubble from './Bubble';
import {shallow} from 'enzyme';

test('render', () => {
  const bubble = shallow(
    <Bubble direction='top'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble')).toEqual(true);
});

test('render top', () => {
  const bubble = shallow(
    <Bubble direction='top'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);

  // default position of bubble is center
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
});


test('render top start', () => {
  const bubble = shallow(
    <Bubble direction='top' alignment='start'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(true);
});


test('render right', () => {
  const bubble = shallow(
    <Bubble direction='right'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);

  // default position of bubble is center (for left/right direction we use column alignment)
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
});

test('render right end', () => {
  const bubble = shallow(
    <Bubble direction='right' alignment='end'>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(true);

  // direction right/left use column alignment, no row alignment
  expect(bubble.hasClass('sg-bubble--row-end')).toEqual(false);
});

test('render full', () => {
  const bubble = shallow(
    <Bubble direction='left' full={true}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--full')).toEqual(true);
});
