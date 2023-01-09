import * as React from 'react';
import {testA11y} from '../../axe';
import Counter from './Counter';
describe('Counter a11y', () => {
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
