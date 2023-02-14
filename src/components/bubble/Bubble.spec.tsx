import * as React from 'react';
import Bubble, {DIRECTION, ALIGNMENT} from './Bubble';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Bubble a11y', () => {
  it('render', () => {
    const bubble = render(<Bubble direction={DIRECTION.TOP}>Some text</Bubble>);
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble')).toEqual(true);
  });

  it('render top', () => {
    const bubble = render(<Bubble direction={DIRECTION.TOP}>Some text</Bubble>);
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble--top')).toEqual(true);
    // default position of bubble is center
    expect(root.classList.contains('sg-bubble--row-start')).toEqual(false);
  });

  it('render top start', () => {
    const bubble = render(
      <Bubble direction={DIRECTION.TOP} alignment={ALIGNMENT.START}>
        Some text
      </Bubble>
    );
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble--top')).toEqual(true);
    expect(root.classList.contains('sg-bubble--row-start')).toEqual(true);
  });

  it('render right', () => {
    const bubble = render(
      <Bubble direction={DIRECTION.RIGHT}>Some text</Bubble>
    );
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble--right')).toEqual(true);
    // default position of bubble is center (for left/right direction we use column alignment)
    expect(root.classList.contains('sg-bubble--column-end')).toEqual(false);
    expect(root.classList.contains('sg-bubble--column-end')).toEqual(false);
  });

  it('render right end', () => {
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

  it('render full', () => {
    const bubble = render(
      <Bubble direction={DIRECTION.LEFT} full>
        Some text
      </Bubble>
    );
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble--full')).toEqual(true);
  });

  it('renders without shadow', () => {
    const bubble = render(
      <Bubble direction={DIRECTION.LEFT} noShadow>
        Some text
      </Bubble>
    );
    const root = bubble.container.firstElementChild;

    expect(root.classList.contains('sg-bubble--no-shadow')).toEqual(true);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Bubble direction="top">item</Bubble>);
    });
  });
});
