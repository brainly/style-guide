import * as React from 'react';
import Box from './Box';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Box', () => {
  it('render children', () => {
    const box = render(<Box>some text</Box>);

    expect(box.getByText('some text')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Box>item</Box>);
    });
  });
});
