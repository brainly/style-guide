import * as React from 'react';
import Bubble, {DIRECTION} from './Bubble';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Bubble', () => {
  it('render', () => {
    const bubble = render(<Bubble direction={DIRECTION.TOP}>Some text</Bubble>);

    expect(bubble.getByText('Some text')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Bubble direction="top">item</Bubble>);
    });
  });
});
