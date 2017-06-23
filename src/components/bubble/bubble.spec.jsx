import React from 'react';
import Bubble, {directions, alignments} from './Bubble';
import {shallow} from 'enzyme';

test('render', () => {
  const bubble = shallow(
    <Bubble direction={directions.top}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble')).toEqual(true);
});

test('error when no direction', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Bubble>Some text</Bubble>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('render top', () => {
  const bubble = shallow(
    <Bubble direction={directions.top}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);

  // default position of bubble is center
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(false);
});


test('render top start', () => {
  const bubble = shallow(
    <Bubble direction={directions.top} alignment={alignments.start}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--top')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--row-start')).toEqual(true);
});


test('render right', () => {
  const bubble = shallow(
    <Bubble direction={directions.right}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);

  // default position of bubble is center (for left/right direction we use column alignment)
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(false);
});

test('render right end', () => {
  const bubble = shallow(
    <Bubble direction={directions.right} alignment={alignments.end}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--right')).toEqual(true);
  expect(bubble.hasClass('sg-bubble--column-end')).toEqual(true);

  // direction right/left use column alignment, no row alignment
  expect(bubble.hasClass('sg-bubble--row-end')).toEqual(false);
});

test('render full', () => {
  const bubble = shallow(
    <Bubble direction={directions.left} full={true}>Some text</Bubble>
  );

  expect(bubble.hasClass('sg-bubble--full')).toEqual(true);
});
