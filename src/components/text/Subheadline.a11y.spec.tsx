import * as React from 'react';
import {testA11y} from '../../axe';
import Subheadline from './Subheadline';

describe('Subheadline a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Subheadline>Read more</Subheadline>);
  });
});
