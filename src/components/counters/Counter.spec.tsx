import * as React from 'react';
import Counter from './Counter';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Counter', () => {
  it('renders points icon inside the points counter', () => {
    const counter = render(
      <Counter icon="points" size="xxs">
        12
      </Counter>
    );

    expect(counter.getByRole('img')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations when a label is provided', async () => {
      await testA11y(<Counter aria-label="Label">32</Counter>);
    });

    it('should have no a11y violations when an icon is provided', async () => {
      await testA11y(
        <Counter aria-label="Label" icon="points">
          32
        </Counter>
      );
    });
  });
});
