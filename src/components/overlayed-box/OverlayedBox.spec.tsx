import * as React from 'react';
import {render} from '@testing-library/react';
import OverlayedBox from './OverlayedBox';

it('render', () => {
  const overlay = <div className="custom-overlay-element">foo</div>;
  const overlayedBox = render(
    <OverlayedBox overlay={overlay}>bar</OverlayedBox>
  );

  expect(overlayedBox.getByText('foo')).toBeTruthy();
  expect(overlayedBox.getByText('bar')).toBeTruthy();
});
