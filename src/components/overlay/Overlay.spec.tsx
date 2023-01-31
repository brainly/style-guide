import * as React from 'react';
import Overlay from './Overlay';
import {render} from '@testing-library/react';

test('render', () => {
  const overlay = render(<Overlay />);

  expect(overlay.hasClass('sg-overlay')).toEqual(true);
});
test('children', () => {
  const overlay = render(
    <Overlay>
      <div className="test" />
    </Overlay>
  );

  expect(overlay.find('.test')).toHaveLength(1);
});
test('partial', () => {
  const overlay = render(<Overlay partial />);

  expect(overlay.hasClass('sg-overlay--partial')).toBeTruthy();
});
test('colors', () => {
  const overlay = render(<Overlay color="black" />);

  expect(overlay.hasClass('sg-overlay--black')).toBeTruthy();
});
