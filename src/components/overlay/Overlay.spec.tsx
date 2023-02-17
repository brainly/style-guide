import * as React from 'react';
import Overlay from './Overlay';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Overlay', () => {
  it('render', () => {
    const overlay = render(<Overlay>foo</Overlay>);

    expect(overlay.getByText('foo')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Overlay>item</Overlay>);
    });
  });
});
