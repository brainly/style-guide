import * as React from 'react';
import Overlay from './Overlay';
import {render} from '@testing-library/react';

test('render', () => {
  const overlay = render(<Overlay />);

  expect(
    overlay.container.firstElementChild.classList.contains('sg-overlay')
  ).toBeTruthy();
});

test('children', () => {
  const overlay = render(
    <Overlay>
      <div>foo</div>
    </Overlay>
  );

  expect(overlay.queryByText('foo')).toBeTruthy();
});

test('partial', () => {
  const overlay = render(<Overlay partial />);

  expect(
    overlay.container.firstElementChild.classList.contains(
      'sg-overlay--partial'
    )
  ).toBe(true);
});

test('colors', () => {
  const overlay = render(<Overlay color="black" />);

  expect(
    overlay.container.firstElementChild.classList.contains('sg-overlay--black')
  ).toBe(true);
});
