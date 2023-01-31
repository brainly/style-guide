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

  expect(overlayedBox.hasClass('sg-overlayed-box')).toEqual(true);
  expect(overlayedBox.find('.custom-children-element')).toHaveLength(1);
  const overlayElem = overlayedBox.find('.sg-overlayed-box__overlay');

  expect(overlayElem).toHaveLength(1);
  expect(overlayedBox.find('.custom-overlay-element')).toHaveLength(1);
  expect(overlayElem.find('.custom-overlay-element')).toHaveLength(1);
});
