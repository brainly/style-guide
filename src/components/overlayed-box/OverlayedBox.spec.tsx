import * as React from 'react';
import {render} from '@testing-library/react';
import OverlayedBox from './OverlayedBox';

test('render', () => {
  const overlay = <div className="custom-overlay-element">abc</div>;
  const overlayedBox = render(
    <OverlayedBox overlay={overlay}>
      <div className="custom-children-element">xyz</div>
    </OverlayedBox>
  );

  expect(
    overlayedBox.container.firstElementChild.classList.contains(
      'sg-overlayed-box'
    )
  ).toEqual(true);
  expect(overlayedBox.queryByText('xyz')).toBeTruthy();
  expect(overlayedBox.queryByText('abc')).toBeTruthy();
});
