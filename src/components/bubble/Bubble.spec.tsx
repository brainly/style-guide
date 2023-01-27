import * as React from 'react';
import Bubble, {DIRECTION, ALIGNMENT} from './Bubble';
import {render} from '@testing-library/react';

test('render', () => {
  const bubble = render(<Bubble direction={DIRECTION.TOP}>Some text</Bubble>);
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble')).toEqual(true);
});

test('render top', () => {
  const bubble = render(<Bubble direction={DIRECTION.TOP}>Some text</Bubble>);
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--top')).toEqual(true);
  // default position of bubble is center
  expect(root.classList.contains('sg-bubble--row-start')).toEqual(false);
});

test('render top start', () => {
  const bubble = render(
    <Bubble direction={DIRECTION.TOP} alignment={ALIGNMENT.START}>
      Some text
    </Bubble>
  );
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--top')).toEqual(true);
  expect(root.classList.contains('sg-bubble--row-start')).toEqual(true);
});

test('render right', () => {
  const bubble = render(<Bubble direction={DIRECTION.RIGHT}>Some text</Bubble>);
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--right')).toEqual(true);
  // default position of bubble is center (for left/right direction we use column alignment)
  expect(root.classList.contains('sg-bubble--column-end')).toEqual(false);
  expect(root.classList.contains('sg-bubble--column-end')).toEqual(false);
});

test('render right end', () => {
  const bubble = render(
    <Bubble direction={DIRECTION.RIGHT} alignment={ALIGNMENT.END}>
      Some text
    </Bubble>
  );
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--right')).toEqual(true);
  expect(root.classList.contains('sg-bubble--column-end')).toEqual(true);
  // direction right/left use column alignment, no row alignment
  expect(root.classList.contains('sg-bubble--row-end')).toEqual(false);
});

test('render full', () => {
  const bubble = render(
    <Bubble direction={DIRECTION.LEFT} full>
      Some text
    </Bubble>
  );
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--full')).toEqual(true);
});

test('renders without shadow', () => {
  const bubble = render(
    <Bubble direction={DIRECTION.LEFT} noShadow>
      Some text
    </Bubble>
  );
  const root = bubble.container.firstElementChild;

  expect(root.classList.contains('sg-bubble--no-shadow')).toEqual(true);
});
